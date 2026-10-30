# Modul 04: Vue.js

## Bagian 01: Vue.js & Ekosistem Modern

### Mengenal Vue.js

* **JavaScript Framework:** Kerangka kerja berbasis JavaScript yang menyediakan struktur, aturan, dan pustaka standar untuk membangun aplikasi web dinamis atau *Single Page Application* (SPA) secara terorganisir dan efisien.
* **Vue.js:** *Progressive JavaScript framework* yang dirancang fokus pada lapisan *view* (tampilan UI). Bersifat fleksibel sehingga mudah diintegrasikan ke proyek yang sudah ada maupun skala besar.
* **Text Interpolation / Mustaches (`{{ }}`):** Sintaks untuk menghubungkan (*bind*) data reaktif dari logika JavaScript ke dalam templat HTML secara dinamis.
```html
<span>Pesan: {{ message }}</span>

```



---

### Persiapan & Lingkungan Pengembangan

1. **Node.js & npm:** Lingkungan eksekusi JavaScript dan manajer paket wajib untuk mengelola dependensi proyek.
2. **Vite (Build Tool Resmi Modern):** Alat pembangun proyek (*scaffolding*) modern yang menggantikan Vue CLI karena proses *startup* dan *Hot Module Replacement* (HMR) yang jauh lebih cepat.
```bash
npm create vue@latest

```


3. **CDN (Content Delivery Network):** Cara tercepat memuat Vue langsung di dalam berkas HTML tanpa proses *build* untuk keperluan pembelajaran dasar.

---

### Organisasi File & Struktur Component (`.vue`)

#### Struktur Direktori Standar:

* `src/main.js`: Titik masuk utama (*entry point*) yang menginisialisasi aplikasi Vue dan menghubungkannya ke elemen DOM HTML.
* `src/App.vue`: Komponen akar (*root component*) tempat seluruh komponen lain bersarang.
* `src/components/`: Folder untuk menyimpan komponen modular yang dapat digunakan kembali (*reusable components*).

#### Anatomi Single File Component (SFC) Modern (Vue 3 Composition API):

```html
<template>
  <!-- Antarmuka Visual / HTML (Mendukung multiple root elements / Fragment) -->
  <div class="card">
    <h2>{{ title }}</h2>
  </div>
</template>

<script setup>
// Logika JavaScript & Data Reaktif menggunakan Composition API
import { ref } from 'vue'

const title = ref('Belajar Vue.js Modern')
</script>

<style scoped>
/* CSS Komponen (atribut scoped memastikan style hanya berlaku lokal di komponen ini) */
.card {
  padding: 1rem;
  border: 1px solid #ccc;
}
</style>

```

---

## Bagian 02: Menampilkan Data (*Data Rendering*)

### Declarative Rendering

Fitur reaktivitas inti Vue yang otomatis menyinkronkan data JavaScript dengan DOM. Jika nilai variabel di dalam kode berubah, tampilan di layar akan langsung diperbarui secara otomatis.

### Menampilkan Multidata (`v-for`)

Digunakan untuk merender daftar item dari array. Wajib menyertakan atribut `:key` yang unik sebagai identitas node DOM.

```html
<ul>
  <li v-for="item in daftarProduk" :key="item.id">
    {{ item.nama }} - Rp{{ item.harga }}
  </li>
</ul>

```

### Direktif `v-text`

Memperbarui seluruh isi teks dari suatu elemen target (setara dengan properti `.textContent` pada JavaScript murni).

```html
<span v-text="pesan"></span>
<!-- Identik dengan: <span>{{ pesan }}</span> -->

```

### Direktif `v-html` & Peringatan Keamanan

Merender string yang berisi tag HTML langsung menjadi elemen DOM visual.

```html
<div v-html="rawHtmlContent"></div>

```

>**PERINGATAN KEAMANAN (XSS):** Jangan pernah menggunakan `v-html` pada data yang diinput oleh pengguna (*user-generated content*) karena dapat dimanfaatkan penyerang untuk menyisipkan skrip jahat (*Cross-Site Scripting*).

---

## Bagian 03: Pengkondisian Dinamis (*Conditional Rendering*)

### Direktif `v-if`, `v-else-if`, dan `v-else`

Menampilkan elemen secara bersyarat dengan cara memasang (*mount*) atau benar-benar menghapus (*unmount*) elemen dari struktur DOM.

```html
<div v-if="nilai >= 85">
  <p>Predikat: Sangat Memuaskan (A)</p>
</div>
<div v-else-if="nilai >= 70">
  <p>Predikat: Memuaskan (B)</p>
</div>
<div v-else>
  <p>Predikat: Perlu Perbaikan (C)</p>
</div>

```

### Direktif `v-show`

Menampilkan atau menyembunyikan elemen dengan memanipulasi properti CSS `display: none`. Elemen tetap ada di dalam DOM.

```html
<p v-show="isVisible">Teks ini tetap berada di struktur DOM.</p>

```

### Perbandingan Ringkas: `v-if` vs `v-show`

| Kriteria | `v-if` | `v-show` |
| --- | --- | --- |
| **Mekanisme DOM** | Menambah / menghapus elemen fisik dari DOM. | Hanya mengubah properti CSS `display: none`. |
| **Beban Awal (*Initial Render*)** | Rendah (tidak dirender jika kondisi awal `false`). | Lebih tinggi (tetap dirender di awal meski disembunyikan). |
| **Beban Peralihan (*Toggle Cost*)** | Tinggi (karena membongkar-pasang DOM). | Sangat rendah (hanya ganti nilai CSS). |
| **Dukungan `<template>**` | Bisa digunakan pada tag `<template>`. | Tidak bisa digunakan pada tag `<template>`. |
| **Penggunaan Ideal** | Kondisi yang jarang berubah saat aplikasi berjalan. | Elemen yang sangat sering dibuka-tutup (modal, tab, dropdown). |