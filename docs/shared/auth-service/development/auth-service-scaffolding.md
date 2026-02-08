---
id: auth-service-scaffolding
title: Git Scaffolding - Auth-Service
sidebar_label: Git Scaffolding - Auth-Service
---

# Git Scaffolding — Auth-Service

Dokumen ini menjelaskan struktur direktori dan file pada repository **Auth-Service**. Tujuannya untuk memudahkan developer memahami penempatan file, tanggung jawab masing-masing direktori, dan mempermudah proses pengembangan.

---

## Struktur Direktori

```plaintext
auth-service/
├── cmd/
│   └── main.go                 # Entry point aplikasi
├── internal/                   # Package internal (tidak untuk konsumsi luar)
│   ├── handler/                # HTTP/gRPC handlers
│   │   └── auth_handler.go
│   ├── service/                # Business logic
│   ├── repository/             # Database operations
│   ├── model/                  # Data structures
│   └── kafka/                  # Kafka integration
├── pkg/
│   └── utils/                  # Shared utilities
├── api/
│   └── auth.proto              # gRPC protobuf
├── configs/
│   ├── config.yaml             # Konfigurasi environment
│   └── .env.example
├── deployments/                # File deployment
│   ├── Dockerfile              # Docker build
│   ├── k8s/                    # Kubernetes manifests
│   │   ├── deployment.yaml
│   │   └── service.yaml
│   └── docker-compose.yml      # Untuk local dev
├── scripts/
│   └── migrate.sh              # DB Migration Scripts
├── .github/
│   └── workflows/
│       └── ci-cd.yaml          # GitHub Action Pipeline
├── go.mod                      # Modul Go
└── Makefile                    # Build automation
```

---

## Dekripsi:

- cmd/ → Berisi entry point aplikasi (main.go).

- internal/ → Implementasi detail yang hanya digunakan dalam service ini.

- pkg/ → Package umum yang dapat digunakan lintas service.

- api/ → Definisi protokol komunikasi (gRPC, Protobuf).

- configs/ → File konfigurasi environment.

- deployments/ → Semua file terkait deployment (Docker, Kubernetes, local dev).

- scripts/ → Script bantu seperti migrasi database.

- .github/ → Pipeline otomatis menggunakan GitHub Actions.

- go.mod / Makefile → Konfigurasi dependency dan automasi build.

---

:::note

1. Gunakan .env.example sebagai template konfigurasi lokal.

2. Pastikan setiap perubahan struktur disosialisasikan ke tim untuk menjaga konsistensi.

:::
