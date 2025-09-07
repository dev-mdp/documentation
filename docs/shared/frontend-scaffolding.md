---
id: frontend-scaffolding
title: Git Scaffolding - Frontend (React)
sidebar_label: Git Scaffolding - Frontend (React)
---

# Git Scaffolding - Frontend (React)

Dokumen ini menjelaskan struktur direktori dan file pada repository **Frontend React App**. Struktur ini membantu memisahkan tanggung jawab kode dan mempermudah scaling aplikasi.

Dibangun menggunakan React, terintegrasi dengan service-service backend berbasis microservices dan mengikuti standar desain dari tim UI/UX.

---

## Struktur Direktori

```plaintext
my-react-app/
├── .github/
│   └── workflows/
│       ├── ci.yml                # Workflow Continuous Integration
│       └── cd.yml                # Workflow Continuous Deployment
├── public/                       # Static assets (tidak diproses webpack)
│   ├── index.html
│   ├── favicon.ico
│   └── robots.txt
├── src/                           # Kode sumber aplikasi
│   ├── assets/                    # Aset global (gambar, font, dll)
│   │   ├── images/
│   │   ├── fonts/
│   │   └── styles/
│   │       └── global.scss        # Global styles
│   ├── components/                # Komponen UI reusable
│   │   ├── common/                # Komponen dasar (Button, Card, dll)
│   │   ├── layout/                # Komponen layout (Header, Footer)
│   │   └── ui/                    # Komponen UI kompleks
│   ├── features/                  # Feature-based components (organisasi per fitur)
│   │   └── auth/                  # Fitur autentikasi
│   │       ├── components/        # Sub-komponen spesifik fitur
│   │       └── Auth.jsx
│   │   └── dashboard/             # Fitur dashboard
│   ├── hooks/                     # Custom hooks
│   ├── contexts/                  # Context API providers
│   ├── utils/                     # Utilities/helper functions
│   ├── service/                   # API services (Axios/GraphQL clients)
│   ├── store/                     # Redux store (jika menggunaka Redux)
│   │   ├── slices/                # Redux Toolkit slices
│   │   └── store.js
│   ├── routes/                    # Routing configuration
│   │   └── AppRouter.jsx
│   ├── pages/                     # Komponen halaman (page-level components)
│   ├── App.jsx                    # Main App component
│   └── index.js                   # Entry point aplikasi
├── .gitignore
├── package.json
├── README.md
├── .env                           # Environment variables (local)
├── .env.example                   # Template environment variables
├── .eslintrc.json                 # ESLint configuration
├── .prettierrc                    # Prettier configuration
├── jest.config.js                 # Jest configuration (jika menggunakan Jest)
```

---

## Deskripsi

- .github/workflows/ → Pipeline otomatis untuk CI/CD.

- public/ → File static yang tidak diproses Webpack.

- src/assets/ → Aset global seperti gambar, font, dan stylesheet.

- src/components/ → Komponen UI yang dapat digunakan ulang di seluruh aplikasi.

- src/features/ → Struktur berbasis fitur untuk memisahkan domain aplikasi.

- src/hooks/ → Custom React hooks.

- src/contexts/ → Provider Context API.

- src/utils/ → Helper functions.

- src/service/ → Integrasi API (REST/GraphQL).

- src/store/ → State management menggunakan Redux Toolkit.

- src/routes/ → Konfigurasi routing aplikasi.

- src/pages/ → Komponen halaman utama.

---

:::note

1. Gunakan global.scss untuk styling global dan hindari inline styling berlebihan.

2. Fitur baru sebaiknya dibuat di dalam folder features/ dengan struktur serupa auth/.

3. Simpan semua variabel environment di .env dan gunakan .env.example sebagai template untuk tim.

   :::
