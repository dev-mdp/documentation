---
id: ci-cd-flow
title: Alur CI/CD Github, Jenkins, dan Kubernetes
sidebar_label: Alur CI/CD Github, Jenkins, dan Kubernetes
---

# Alur CI/CD Github, Jenkins, dan Kubernetes

Dokumen ini menjelaskan alur _Continuous Integration_ (CI) dan _Continuous Deployment_ (CD) menggunakan kombinasi **GitHub**, **Jenkins**, dan **Kubernetes**. Tujuan utamanya adalah memastikan proses build, test, dan deployment berjalan otomatis, konsisten, serta dapat diskalakan di lingkungan enterprise.

---

## Alur CI/CD yang Direkomendasikan

1. **Developer Push Code ke GitHub**

   - Developer melakukan commit dan push kode ke repository GitHub.
   - Setiap perubahan kode akan memicu proses otomatis.

2. **GitHub Webhook Memicu Jenkins**

   - Repository GitHub dikonfigurasi dengan _webhook_ yang menunjuk ke Jenkins (`10.10.10.5`).
   - Setiap push akan men-trigger pipeline Jenkins.

3. **Jenkins Pipeline Execution**
   Pipeline Jenkins terdiri dari beberapa _stage_ utama:

   ```groovy
   pipeline {
     agent any
     stages {
       stage('Checkout') {
         steps {
           git branch: 'main', url: '<https://github.com/your-org/auth-service.git>'
         }
       }
       stage('Test') {
         steps {
           sh 'go test ./...'
         }
       }
       stage('Build') {
         steps {
           sh 'go build -o auth-service .'
         }
       }
       stage('Build Docker Image') {
         steps {
           script {
             docker.build("your-dockerhub-username/auth-service:${env.BUILD_ID}")
           }
         }
       }
       stage('Push Docker Image') {
         steps {
           script {
             docker.withRegistry('https://registry.hub.docker.com', 'dockerhub-credentials') {
               docker.image("your-dockerhub-username/auth-service:${env.BUILD_ID}").push()
             }
           }
         }
       }
       stage('Deploy to Kubernetes') {
         steps {
           sh """
             kubectl set image deployment/golang-app golang-container=your-dockerhub-username/auth-service:${env.BUILD_ID}
             kubectl rollout status deployment/golang-app
           """
         }
       }
     }
   }
   ```

4. **Deployment ke Kubernetes**

   - Jenkins mengupdate image di deployment Kubernetes.
   - Kubernetes melakukan _rolling update_ ke pods dengan image baru.

---

## Konfigurasi yang Diperlukan

1. **Jenkins Configuration**

   - Install plugins: Docker Pipeline, Kubernetes Continuous Deploy.
   - Konfigurasi Docker Hub credentials di Jenkins.
   - Tambahkan kubeconfig agar Jenkins dapat mengakses cluster Kubernetes.

2. **Kubernetes Service Account untuk Jenkins**

Buat service account khusus agar Jenkins dapat melakukan deployment:

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: jenkins
  namespace: default
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: jenkins-deploy
subjects:
  - kind: ServiceAccount
    name: jenkins
    namespace: default
roleRef:
  kind: ClusterRole
  name: cluster-admin
  apiGroup: rbac.authorization.k8s.io
```

3. **GitHub Webhook Configuration**

   - Tambahkan webhook pada repository GitHub:

   ```plaintext
   http://10.10.10.5:8080/github-webhook/
   ```

   - Set content type: `application/json`.

---

## Best Practices

👉 Multi-stage Dockerfile → mengurangi ukuran image final.

👉 Image Scanning → untuk keamanan, gunakan tools scanning di pipeline.

👉 Rollback Strategy → siapkan rollback jika deployment gagal.

👉 Environment Separation → pisahkan dev, staging, dan production.

👉 Monitoring & Logging → aktifkan observabilitas setelah deployment.
