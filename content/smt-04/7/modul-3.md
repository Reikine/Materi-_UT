# Product Requirement Document (PRD)

## Sistem Informasi Stok & Distribusi Bahan Ajar (SITTA) — Modern Modular Version

---

## 1. Document & System Overview

### 1.1 Summary

SITTA (Sistem Informasi Stok & Distribusi Bahan Ajar) adalah sistem informasi manajemen logistik bahan ajar berbasis web terenkapsulasi. Sistem ini memfasilitasi pengolahan inventarisasi modul, registrasi edisi baru, pelacakan pengiriman berdasarkan Delivery Order (DO), visualisasi tingkat distribusi regional, serta audit trail kronologis aktivitas gudang Universitas Terbuka (UT).

### 1.2 Key System Objectives

* **Client-Side Persistence:** Mengelola data *user*, *inventory*, dan *tracking* secara reaktif menggunakan browser `localStorage`.


* **Role-Based Dynamic Interface:** Menyesuaikan visibilitas komponen UI dan hak akses fitur berdasarkan *role* pengguna (`Administrator` vs `User`).


* **Interactive Stock Management:** Mendukung pendaftaran modul baru berbasis Base64 image upload, serta modal penyesuaian stok (*add/reduce*) dengan kalkulasi real-time.


* **Asynchronous Admin Workflow:** Menyediakan sistem persetujuan (*approval*) reset password interaktif untuk Administrator.



---

## 2. Technical Architecture & Module Structure

Sistem dibangun menggunakan arsitektur JavaScript ES6 Modules (`type="module"`) dengan pemisahan tugas yang terstruktur:

```
SITTA Application Core
├── index.html 
├── dashboard.html 
├── stok.html 
├── tracking.html 
├── distribution.html 
├── logs.html 
│
├── asset/
│   └── img
├── css
│   └── style.css
│
└── js
    ├── script.js
    ├── modules/
    │   ├── auth.js 
    │   ├── inventory.js 
    │   ├── tracking.js 
    │   └── reports.js 
    └── data.js 

```

---

## 3. Data Schema & State Management (`localStorage`)

Sistem menginisialisasi dan menyinkronkan tiga kunci utama pada `localStorage` browser:

### 3.1 User Database Schema (`user_db`)

Key `user_db` menyimpan daftar akun terdaftar:

| Field | Type | Description |
| --- | --- | --- |
| `id` | `Number` | Unique identifier |
| `name` | `String` | Nama lengkap pengguna |
| `email` | `String` | Email unik (login credential) |
| `password` | `String` | Kata sandi pengguna |
| `role` | `String` | Hak akses (`Administrator` / `User`) |
| `location` | `String` | Wilayah operasional / UPBJJ (contoh: "UPBJJ Jakarta") |
| `resetRequested` | `Boolean` | Flag pengajuan reset password ke Admin |

### 3.2 Inventory Database Schema (`stock_db`)

Key `stock_db` menyimpan data bahan ajar:

| Field | Type | Description |
| --- | --- | --- |
| `itemCode` | `String` | Kode unik buku (contoh: "MKDU4101") |
| `itemName` | `String` | Nama modul / bahan ajar |
| `edition` | `String` | Edisi atau versi modul |
| `stock` | `Number` | Jumlah stok fisik di gudang |
| `locationCode` | `String` | Kode lokasi penyimpanan gudang |
| `itemType` | `String` | Kategori barang (contoh: "BMP") |
| `cover` | `String` | Data URI gambar format Base64 (`data:image/...`) |

### 3.3 Session Token (`auth_token`)

Key `auth_token` merepresentasikan sesi aktif yang berisi objek user hasil autentikasi.

---

## 4. Role-Based Access Control (RBAC) & Guard Matrix

| Komponen / Fitur | Non-Log / Public | User (UPBJJ) | Administrator |
| --- | --- | --- | --- |
| Route Access (`stok`, `tracking`, `distribution`) | Redirect ke `index.html` | Allowed | Allowed |
| Menu Log Transaksi (`#cardLogsMenu`) | Hidden | Hidden (`display: none`) | Visible |
| Form Tambah Modul Baru (`#adminStockControls`) | Hidden | Hidden | Visible (`display: flex`) |
| Modal Aksi Stok (`#bookActionModal`) | Disabled | Read-only (Click Disabled) | Editable (Click Active) |
| Master Tabel Tracking (`#adminTrackingSection`) | Hidden | Hidden (`display: none`) | Visible |
| Approval Reset Password Pop-up | Inactive | Inactive | Active via Async Queue |
| Distribution Filter Scope | N/A | Filtered by Location | Global / All Regional |

---

## 5. Functional Requirements Specification

### 5.1 Global Services & Framework (`script.js`)

* **FR-GBL-01 (Toast Notification):** Metode `window.showToast(message, type)` menampilkan notifikasi mengambang dengan transisi CSS `translateY`. Tipe notifikasi: `success` (`#10b981`), `error` (`#ef4444`), dan `info` (`#3b82f6`).


* **FR-GBL-02 (Promise Confirmation Dialog):** Metode `window.showConfirm(title, message)` mengembalikan `Promise<Boolean>` untuk menangani konfirmasi asinkronik.


* **FR-GBL-03 (Custom Input Prompt):** Metode `window.showPrompt(title, message, onSubmit)` memunculkan dialog modal input dinamis.


* **FR-GBL-04 (Dynamic Salutation):** Header menampilkan salam dinamis berdasarkan waktu sistem: *Selamat Pagi* (04:00-11:00), *Selamat Siang* (11:00-15:00), *Selamat Sore* (15:00-19:00), atau *Selamat Malam* (19:00-04:00) diikuti nama dan lokasi/role user.


* **FR-GBL-05 (Admin Approval Queue):** Saat Administrator masuk ke dashboard, sistem melakukan *polling* pada `user_db` dengan delay 5 detik untuk memproses pengajuan reset password yang pending (`resetRequested === true`) secara berurutan. Jika disetujui, password diubah ke `"123456"`.



### 5.2 Authentication & User Module (`auth.js`)

* **FR-ATH-01 (Password Visibility Toggle):** Tombol `#togglePassword` mengubah tipe input antara `password` dan `text`, serta memperbarui ikon Google Material Symbols (`visibility` / `visibility_off`).


* **FR-ATH-02 (User Login):** Memvalidasi kombinasi `email` dan `password` terhadap `user_db`. Jika cocok, data disalin ke `auth_token` dan halaman berpindah ke `dashboard.html`.


* **FR-ATH-03 (User Registration):** Mendaftarkan akun baru dengan verifikasi keunikan email. Akun baru otomatis mendapatkan `role: "User"`.


* **FR-ATH-04 (Password Reset Request):** Tautan `#forgotPassword` memicu `window.showPrompt` untuk memasukkan email. Jika email ditemukan, flag `resetRequested` pada target user diubah menjadi `true`.


* **FR-ATH-05 (Secure Logout):** Menghapus `auth_token` setelah pengguna mengonfirmasi via modal keluar (`#customModal`).



### 5.3 Stock & Inventory Module (`inventory.js`)

* **FR-INV-01 (Dynamic Card Catalog):** Mengkloning `<template id="bookCardTemplate">` untuk merender item dari `stock_db`. Menampilkan judul edisi (jika edisi > 1) dan indikator stok.


* **FR-INV-02 (Base64 Cover Image Upload):** Menggunakan `FileReader` API (`readAsDataURL`) untuk mengonversi berkas gambar yang diunggah pengguna menjadi *Data URI* Base64 agar dapat disimpan langsung ke `localStorage`.


* **FR-INV-03 (Code Uniqueness Check):** Mencegah pendaftaran buku baru jika `itemCode` sudah terdaftar di dalam database stok.


* **FR-INV-04 (Interactive Stock Adjustment):** Modal `#bookActionModal` memungkinkan Administrator menambah (`#modalBtnAddStock`) atau mengurangi stok (`#modalBtnReduceStock`) dengan pratinjau kalkulasi langsung (`modalStockCount`).


* **FR-INV-05 (Stock Sufficiency Validation):** Mencegah pengurangan stok yang melebihi jumlah ketersediaan saat ini.



### 5.4 Package Tracking Module (`tracking.js`)

* **FR-TRK-01 (Single DO Lookup):** Pencarian nomor DO meng-cloning `<template id="trackingDetailTemplate">` untuk menyajikan detail penerima, kurir, total barang, dan *timeline* perjalanan.


* **FR-TRK-02 (Timeline Visualization):** Setiap titik riwayat pengiriman di-render menggunakan `<template id="timelineItemTemplate">`. Status riwayat terakhir diberi warna garis tepi khusus (`#10b981`).


* **FR-TRK-03 (Master Table & Interactive Row Selection):** Pada tampilan Administrator, mengklik baris tabel pengiriman (`#tableTrackingBody`) akan mengisi input pencarian secara otomatis dan melakukan *smooth scroll* ke area detail.



### 5.5 Reports & Metrics Module (`reports.js`)

* **FR-REP-01 (Aggregated Progress Metrics):** `initMonitoringReport` mengkalkulasi persentase keterkiriman paket (`(delivered / total) * 100`) dan memperbarui panjang indikator visual `.progress-bar-fill`.


* **FR-REP-02 (Regional Filtering):** Bagi user dengan role `User`, laporan distribusi disaring secara otomatis berdasarkan kata kunci lokasi kerja user.


* **FR-REP-03 (Audit Trail Table):** `initHistoryReport` mengonversi riwayat log pengiriman menjadi tabel audit transaksi yang mencantumkan tanggal, nomor DO, tipe transaksi, kode item, jumlah, operator, dan status.



---

## 6. Non-Functional Requirements & Security Specs

* **Data Integrity & Fallback:** Menggunakan *initial seeding data* (`initialUserData`, `initialStockData`, `trackingData`) apabila `localStorage` belum terisi.


* **Client-Side Security:** Menyaring karakter ruang kosong (`.trim()`) pada seluruh masukan formulir untuk mencegah insersi data kosong.


* **Asynchronous UX:** Penggunaan `setTimeout` dan `Promise` memastikan operasi UI (seperti pembuatan toast, modal prompt, dan alert approval) berjalan tanpa memblokir thread utama pembacaan DOM.


* **Responsive Layout Fallback:** Mengubah struktur tabel HTML (`.sitta-table`) menjadi tampilan *stacked card* berbasis pseudo-element CSS `::before` saat diakses via perangkat ponsel (lebar layar $\le 600\text{px}$).
___