# Modul 06: Watcher dan Reaktivitas Vue.js

## Bagian 01: Watcher

### Pengertian dan Fungsi Utama

* **Pengertian Watcher:** Fitur khusus di Vue.js yang berfungsi memantau (*watch*) perubahan pada suatu data reaktif (variabel `data`, `ref`, `reactive`, atau `computed property`).


* **Mekanisme Kerja:** Ketika nilai data yang dipantau berubah, Vue akan mengeksekusi fungsi respons (*callback*) secara otomatis.


* **Kegunaan Utama:** Digunakan untuk menjalankan **efek samping (*side-effects*)** atau operasi asinkron (seperti panggilan API, *timer*, operasi *LocalStorage*, atau validasi dinamis) yang tidak mengembalikan nilai (*no return value*).



### Opsi Konfigurasi Watcher (`deep` & `immediate`)

```javascript
export default {
  data() {
    return {
      userProfile: {
        name: 'Indra',
        role: 'Developer'
      }
    }
  },
  watch: {
    userProfile: {
      // Callback yang dijalankan saat ada perubahan
      handler(newValue, oldValue) {
        console.log('Data profil berubah:', newValue);
      },
      // deep: true memantau perubahan hingga ke dalam properti objek bersarang
      deep: true,
      // immediate: true mengeksekusi handler langsung saat komponen pertama kali dimuat
      immediate: true
    }
  }
}

```

---

## Bagian 02: Implementasi Vue 3 Composition API (`watch` vs `watchEffect`)

Pada standar Vue 3 (`<script setup>`), pemantauan data reaktif dibagi menjadi dua pendekatan:

```vue
<script setup>
import { ref, watch, watchEffect } from 'vue'

const searchQuery = ref('')
const searchResult = ref([])

// 1. watch(): Memantau sumber spesifik (dapat mengakses newValue & oldValue)
watch(searchQuery, async (newQuery, oldQuery) => {
  if (newQuery.trim() !== '') {
    // Jalankan efek samping (contoh: Fetch API)
    searchResult.value = await fetchApi(newQuery)
  }
})

// 2. watchEffect(): Otomatis melacak semua variabel reaktif di dalamnya
watchEffect(() => {
  // Akan otomatis berjalan kapan pun searchQuery.value berubah
  console.log(`Pencarian aktif untuk: ${searchQuery.value}`)
})
</script>

```

---

## Bagian 03: Writable Computed Property (Getter & Setter)

Secara *default*, *computed property* bersifat *read-only* (hanya membaca data). Namun, kita dapat menambahkan *setter* jika ingin membuat *computed property* yang kodenya bisa diubah langsung.

```javascript
// Standar Options API
computed: {
  fullName: {
    // Getter: Membaca nilai
    get() {
      return `${this.firstName} ${this.lastName}`
    },
    // Setter: Memotong masukan baru dan memperbarui variabel asal
    set(newValue) {
      const names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}

```

---

## Bagian 04: Penguatan Konsep & Matriks Perbandingan

### Ringkasan Elemen Reaktif

1. **`data()` / `ref()`:** Deklarasi state/variabel reaktif utama aplikasi.


2. **`{{ }}` / `v-text` / `v-html`:**
* `{{ }}`: Interpolasi teks biasa.


* `v-text`: Mengganti seluruh isi teks elemen (`textContent`).


* `v-html`: Merender string berisi tag HTML visual (gunakan dengan hati-hati).




3. **`v-bind` (`:`) vs `v-model`:**
* `v-bind`: *One-way data binding* untuk atribut HTML.


* `v-model`: *Two-way data binding* untuk elemen input formulir.





### Matriks Keputusan: Kapan Menggunakan Computed vs. Methods vs. Watcher

| Kriteria | Computed Property | Methods Property | Watcher Property |
| --- | --- | --- | --- |
| **Tujuan Utama** | Murni menghitung & menyajikan data turunan. | Mengeksekusi fungsi aksi atau *event handler*. | Menjalankan *side-effects* akibat perubahan data. |
| **Sifat Pengembalian (`return`)** | **Wajib** mengembalikan nilai. | Boleh ada atau tanpa `return`. | **Tidak** mengembalikan nilai. |
| **Sistem Caching** | **Ada Cache** (Hanya dihitung ulang jika dependensi berubah). | **Tidak Ada Cache** (Dihitung ulang tiap render). | **Tidak Ada Cache** (Berjalan berdasarkan perubahan target). |
| **Operasi Asinkron (API/Timer)** |  Tidak Boleh | Bisa (panggilan manual) | **Sangat Direkomendasikan** |
| **Cara Panggil di Template** | Tanpa kurung `{{ fullName }}` | Menggunakan kurung `@click="handleClick()"`| Tidak dipanggil di template (berjalan otomatis) |
___

## Dokumentasi Teknis Sistem Informasi Stok & Distribusi Bahan Ajar (SITTA) — Vue 3 Edition

---

## 1. Overview & System Objectives

Sistem Informasi Stok & Distribusi Bahan Ajar (SITTA) versi Vue 3 merupakan aplikasi manajemen logistik berbasis Multi-Page Application (MPA) dengan pendekatan *Progressive Adoption*. Sistem ini dirancang untuk mengelola inventarisasi modul, registrasi edisi bahan ajar baru, pelacakan Delivery Order (DO), visualisasi tingkat distribusi regional, serta audit trail riwayat transaksi pengguna Universitas Terbuka secara reaktif.

* **Deklaratif & Reaktif:** Menggantikan manipulasi DOM imperatif *Vanilla JS* dengan pengelolaan *state* deklaratif berbasis Vue 3 Composition API.


* **Persistensi Data Lokal:** Memanfaatkan browser `localStorage` sebagai *Single Source of Truth* untuk menyimpan data pengguna, stok, pengiriman, dan sesi autentikasi.


* **Role-Based Access Control (RBAC):** Membatasi visibilitas elemen antarmuka dan fitur berdasarkan hak akses pengguna (`Administrator` vs `User`).


* **Real-time Synchronization & Polling:** Menyediakan mekanisme pembaruan data otomatis antar-tab browser dan simulasi promosi status pengiriman berbasis interval waktu.



---

## 2. Arsitektur Sistem & Struktur Berkas

Aplikasi mengadopsi struktur modul ES6 terpisah (`type="module"`) yang mengisolasi logika JavaScript, *composable*, data skrip, serta lembar gaya CSS.

```
SITTA Core Architecture
├── HTML Template Views
│   ├── index_3.html        # Autentikasi (Login, Register, Reset Password Modal)
│   ├── dashboard_2.html    # Menu Utama & Panel Antrean Approval Admin
│   ├── stock.html          # Informasi Stok, Filtering, Sorting, & Modal Stok
│   ├── tracking_2.html     # Pelacakan DO & Modal Wizard pembuatan DO Baru
│   ├── distribution_2.html # Dashboard Statistik & Monitoring Pengiriman Regional
│   └── history.html        # Tabel Riwayat Transaksi Spesifik Akun User
│
├── CSS Design System
│   ├── css/base.css        # Design Tokens, CSS Reset, Utilities, & v-cloak
│   ├── css/style_2.css     # Styling Komponen, Layout Grid, Badges, & Modals
│   └── css/toast.css       # Animasi Transisi & Positioning Toast Notification
│
└── JavaScript Modules
    ├── js/composables/
    │   └── useToast.js     # Singleton Global Toast Notification State Manager
    ├── js/utils.js         # Pure Function Helpers (Sorting Icon & Navigation)
    └── js/
        ├── auth-app.js     # Logic Autentikasi & Reset Password Queue
        ├── dashboard-app.js# Logic Navigasi, Guard, & Approval Reset Admin
        ├── stock-app.js    # Logic Katalog Stok, Multi-filter, Sort, & Stock Adjuster
        ├── tracking-app.js # Logic Lookup DO, Timeline, & 2-Step DO Registration
        ├── distribution-app.js # Logic Metrics Summary, Search Filter, & Status Promotion
        └── history-app.js  # Logic User-Scoped Transaction History Resolver

```

---

## 3. Manajemen State & Skema Data (`localStorage`)

Aplikasi menggunakan lima *keys* utama pada `localStorage` untuk mengelola data sistem secara terstruktur:

### 3.1 Skema Data Utama

| Storage Key | Tipe Data | Deskripsi & Fungsi Logis |
| --- | --- | --- |
| `user_db` | `Array<Object>` | Menyimpan daftar akun terdaftar (`id`, `name`, `email`, `password`, `role`, `location`). |
| `stock_db` | `Array<Object>` | Menyimpan katalog bahan ajar (`itemCode`, `title`, `category`, `region`, `rackLocation`, `price`, `qty`, `safetyStock`, `notesHTML`). |
| `trackingData` | `Object<Key, Object>` | Menyimpan peta data pengiriman DO berbasis nomor DO beserta objek `history` dan timestamp `createdAt`. |
| `auth_token` | `Object` | Menyimpan objek identitas user yang sedang aktif login. |
| `resetRequests` | `Array<String>` | Antrean email pengguna yang mengajukan reset password untuk disetujui Administrator. |

### 3.2 Global Composable State (`useToast.js`)

Notifikasi dikelola menggunakan pola **Singleton Shared State**:

* **Shared State Scope:** Variabel `toasts = ref([])` dideklarasikan di luar penutupan (*closure*) fungsi `useToast()`, sehingga seluruh modul berbagi instansi array reaktif yang sama.


* **Method `showToast(message, type, timeout)`:** Menambahkan objek toast baru dengan ID unik berbasis timestamp dan menyetel penjelas (*timer*) `setTimeout` untuk penghapusan otomatis.


* **Method `removeToast(id)`:** Menghapus item toast dari array `toasts` secara imutabel menggunakan `filter()`.



---

## 4. Spesifikasi Persyaratan Fungsional (FR)

### 4.1 Modul Autentikasi (`index_3.html` & `auth-app.js`)

* **FR-ATH-01 (Form View Switching):** Pergantian antara form Login dan Register menggunakan direktif `v-show="currentView === 'login'"` dan `v-show="currentView === 'register'"` untuk menjaga node tetap berada di DOM.


* **FR-ATH-02 (Two-Way Form Binding):** Variabel `loginForm` dan `regForm` diikat menggunakan `reactive()` dan direktif `v-model` pada elemen input formulir.


* **FR-ATH-03 (Password Toggle):** Tombol penyelarasan kata sandi mengubah *state* `showPassword` (boolean) yang memperbarui atribut `:type` input dan teks ikon Google Material Symbols (`visibility` / `visibility_off`).


* **FR-ATH-04 (User Login & Token Persistence):** Memvalidasi kredensial terhadap `user_db`. Kredensial yang terverifikasi disimpan ke `auth_token` sebelum pengguna diarahkan ke `dashboard_2.html`.


* **FR-ATH-05 (User Registration & Unique Constraint):** Mendaftarkan akun baru dengan peran standar `role: "User"` setelah mengonfirmasi bahwa email belum terdaftar di `user_db`.


* **FR-ATH-06 (Password Reset Request Queue):** Modal reset password (`v-if="isResetModalOpen"`) mengumpulkan email terdaftar dan memasukkannya ke dalam array `resetRequests` di `localStorage` tanpa membuat duplikasi.



### 4.2 Modul Dashboard & Admin Queue (`dashboard_2.html` & `dashboard-app.js`)

* **FR-DSH-01 (Auth Session Guard):** `onMounted` memvalidasi keberadaan `auth_token`. Token yang tidak valid atau terkorupsi diacak (*purge*) dan pengguna dialihkan ke `index_3.html`.


* **FR-DSH-02 (RBAC Interface Elements):** Kartu menu "Progres Distribusi" dan tombol melayang notifikasi reset password hanya di-render untuk akun dengan `isAdmin` (`currentUser.role === 'Administrator'`) menggunakan `v-if`.


* **FR-DSH-03 (Client-side Route Guard):** Metode `navigateTo(url)` memblokir akses ke `distribution_2.html` jika pengguna bukan Administrator.


* **FR-DSH-04 (Admin Reset Approval Workflow):** Panel notifikasi melayang menyajikan daftar email dari `resetRequests`.


* **Approve:** Mengubah kata sandi pengguna di `user_db` menjadi `'123456'` dan mengeluarkannya dari antrean.


* **Reject:** Menghapus pengajuan dari antrean tanpa mengubah data pengguna.





### 4.3 Modul Stok Bahan Ajar (`stock.html` & `stock-app.js`)

* **FR-STK-01 (Dependent Select Control):** Dropdown kategori mata kuliah (`selectedCategory`) dinonaktifkan (`:disabled="!selectedRegion"`) hingga pengguna memilih daerah. Perubahan pada `selectedRegion` memicu *watcher* untuk mengosongkan `selectedCategory`.


* **FR-STK-02 (Multi-Filter & Search Pipeline):** *Computed Property* `filteredStock` menggabungkan filter daerah, kategori, kata kunci pencarian, serta tombol filter status re-order (`qty < safetyStock || qty === 0`).


* **FR-STK-03 (Dynamic Column Sorting):** Pengurutan data tabel berbasis kolom (`handleSort`) yang mendukung nilai string (`localeCompare`) dan nilai numerik (`price`, `qty`) secara bolak-balik (*asc/desc*).


* **FR-STK-04 (New Item Registration):** Form pendaftaran bahan ajar baru mengumpulkan data dengan konversi otomatis `v-model.number` pada kolom harga dan jumlah stok. Sistem menolak pendaftaran jika `itemCode` sudah terdaftar di `stock_db`.


* **FR-STK-05 (Stock Adjustment Modal):** Modal penyesuaian stok memungkinkan Administrator menambah (`addStock`) atau mengurangi stok (`reduceStock`) dengan batas minimum stok tidak boleh kurang dari 0.



### 4.4 Modul Pelacakan DO (`tracking_2.html` & `tracking-app.js`)

* **FR-TRK-01 (DO Search & Timeline Rendering):** Pencarian nomor DO mencocokkan *key* pada `trackingList` dan menampilkan rincian paket beserta daftar riwayat perjalanan.


* **FR-TRK-02 (Two-Step Form Wizard):** Modal pembuatan DO baru dibagi menjadi dua tahap menggunakan `v-if="!isConfirmStep"`:


1. *Step 1 (Pengisian Data):* Validasi tanggal kirim minimum (`:min="today"`) dan pengecekan ketersediaan stok fisik bahan ajar terhadap `safetyStock`.


2. *Step 2 (Konfirmasi):* Menampilkan pratinjau rincian isi modul dalam paket (`selectedPackageItemsDetails`) sebelum data disimpan.




* **FR-TRK-03 (Inventory Stock Deduction):** Mengonfirmasi pendaftaran DO baru secara otomatis mengurangi jumlah stok (`qty`) dari modul terkait di `stock_db` sebanyak 1 unit.


* **FR-TRK-04 (Automatic Status Promotion Polling):** Interval pewaktu (2 detik) memindai paket berstatus `'Diproses'`. Jika perbedaan waktu pembuatan (`createdAt`) sudah $\ge 20$ detik, status otomatis diperbarui menjadi `'Dalam Perjalanan'` dan catatan riwayat transit ditambahkan.



### 4.5 Modul Progres Distribusi (`distribution_2.html` & `distribution-app.js`)

* **FR-DST-01 (Admin Access Protection):** Halaman memvalidasi peran pengguna pada saat `onMounted`. Pengguna non-admin ditolak dan dialihkan kembali ke dashboard.


* **FR-DST-02 (Reactive Aggregated Metrics):** Menghitung total DO (`totalDo`), jumlah paket diproses (`processingCount`), paket transit (`inTransitCount`), dan paket selesai (`completedCount`) secara reaktif dari `trackingList`.


* **FR-DST-03 (Cross-Tab Synchronization & Polling):** Mendengarkan event `'storage'` browser dan mengaktifkan interval polling (3 detik) untuk memperbarui data pengiriman secara otomatis.



### 4.6 Modul Riwayat Transaksi (`history.html` & `history-app.js`)

* **FR-HST-01 (User History Scoping):** *Computed Property* `userHistory` menyaring data dari `trackingList` yang memiliki keterkaitan dengan akun aktif berdasarkan pencocokan `nim`, `email`, `name`, atau `createdBy`.


* **FR-HST-02 (Direct Parameter Event Navigation):** Tombol "Lacak Paket" memicu `@click="trackPackage(item.doNumber)"` yang menyimpan nomor DO aktif ke `localStorage` dan mengarahkan pengguna ke `tracking_2.html`.



---

## 5. UI/UX Design System & Arsitektur CSS

### 5.1 Design Tokens (`base.css`)

Aplikasi menggunakan variabel CSS kustom pada selector `:root`:

```css
:root {
  --bg-page: #f8fafc;
  --text-main: #1e293b;
  --text-muted: #64748b;
  --bg-card: #ffffff;
  --border-card: #e2e8f0;
  --shadow-card: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  --primary: #2563eb;
  --primary-hover: #1d4ed8;
  --danger: #ef4444;
  --radius: 12px;
}
```

### 5.2 Pencegahan FOUC (`[v-cloak]`)

Untuk mencegah *Flash of Unstyled Content* (munculnya ekspresi sintaks `{{ }}` sebelum Vue selesai di-mount), seluruh elemen kontainer utama menyertakan direktif `v-cloak` dengan aturan CSS:

```css
[v-cloak] {
  display: none !important;
}
```

### 5.3 Semantic Badging & CSS Grid (`style_2.css`)
* **Semantic Status Badges:** Klasifikasi visual menggunakan kelas CSS khusus:
  * Stok Aman: `.badge-aman` (`bg: #dcfce7`, `color: #166534`)
  * Stok Menipis: `.badge-menipis` (`bg: #fef9c3`, `color: #854d0e`)
  * Stok Kosong: `.badge-kosong` (`bg: #fee2e2`, `color: #991b1b`)
* **Responsive Card Grid:** Menggunakan layout CSS Grid fleksibel tanpa media query rumit (`grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))`) pada menu dashboard dan kartu statistik.

### 5.4 Toast Animation System (`toast.css`)

Dikombinasikan dengan komponen Vue `<transition-group name="toast">` kelas animasi CSS berikut mengatur pergerakan notifikasi:

```css
.toast-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.toast-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.toast-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
```

Sifat interaksi disusun menggunakan `pointer-events: none` pada wadah utama `.toast-container` agar tidak memblokir elemen di bawahnya, dan `pointer-events: auto` pada elemen `.toast-item` agar notifikasi dapat diklik.

---

## 6. Matriks Hak Akses (RBAC Matrix)

| Fitur / Halaman | User (Mahasiswa/Pengelola) | Administrator |
| :--- | :---: | :---: |
| Autentikasi Login & Registrasi | Ya | Ya |
| Pengajuan Reset Password | Ya | Tidak (Bertindak sebagai Approver) |
| Dashboard Navigasi | Terbatas (3 Menu) | Penuh (4 Menu + Panel Notifikasi) |
| Lihat Stok & Filter Bahan Ajar | Ya (Read-only) | Ya (Read-only) |
| Tambah & Edit Stok Bahan Ajar | Tidak | Ya (`v-if="isAdmin"`) |
| Pelacakan Nomor DO | Ya | Ya |
| Buat Delivery Order (DO) Baru | Ya | Ya |
| Progres Distribusi Regional | Tidak (Ditolak Route Guard) | Ya |
| Riwayat Transaksi Akun | Ya (Terisolasi per Akun) | Ya |
___