# Mata Kuliah: Pemrograman Berbasis Web

## Deskripsi Mata Kuliah

Mata kuliah ini membahas pengembangan aplikasi web modern secara komprehensif, mulai dari fondasi struktur dokumen web, perancangan tata letak visual, hingga penambahan interaktivitas dinamis. Pembelajaran berfokus pada penguasaan dasar internet, HTML, CSS, dan JavaScript, yang kemudian dilanjutkan ke tingkat lanjut menggunakan kerangka kerja *progressive* **Vue.js**. 

Melalui materi yang disajikan, mahasiswa mempelajari arsitektur berbasis komponen (*component-based*), konsep reaktivitas, pengikatan data (*data binding*), pengolahan data dengan *computed properties*, pemantauan status via *watcher*, penanganan peristiwa (*event handling*), manipulasi grafik dua dimensi menggunakan elemen *canvas*, serta implementasi transisi dan animasi antarmuka.

---

## Daftar Modul

*   **Modul 01: Website dan HTML**

    Membahas konsep dasar website, infrastruktur internet (domain, hosting, URL, IP address), sejarah perkembangan HTML dari versi awal hingga HTML5, struktur dasar dokumen HTML, serta implementasi ragam tag penata konten seperti teks, media, tautan, tabel, dan formulir.

*   **Modul 02: CSS dan Javascript**

    Mempelajari pemisahan struktur konten dan desain visual web melalui CSS (metode penulisan *inline*, *internal*, *external*, selektor, serta pengaturan tampilan) beserta dasar-dasar pemrograman JavaScript mencakup variabel, operator, percabangan, perulangan, dan struktur array untuk interaktivitas sisi klien (*client-side*).

*   **Modul 04: Vue.js**

    Mengenalkan konsep *framework* JavaScript dan arsitektur *progressive framework* Vue.js, struktur berkas *Single File Component* (`<template>`, `<script>`, `<style>`), *declarative rendering*, penayangan data reaktif (`v-text`, `v-html`), serta pengkondisian tampilan berbasis DOM (`v-if`, `v-else`, `v-else-if`, `v-show`).

*   **Modul 05: Data Binding dan Pengolahannya**

    Mendalami mekanisme aliran data satu arah (*one-way*) dengan `v-bind` dan dua arah (*two-way*) pada elemen formulir dengan `v-model`. Modul ini juga mengkaji optimalisasi performa melalui *computed properties* berbasis *caching* dependensi serta pemanfaatan fungsi aksi *methods*.

*   **Modul 06: Watcher**

    Membahas penggunaan opsi *watcher* untuk mengamati perubahan data reaktif dan mengeksekusi efek samping (*side effects*) atau operasi asinkron (seperti panggilan API) tanpa harus mengembalikan nilai (*return*), serta perbandingannya dengan *computed properties*.

*   **Modul 07: Array, Filter, dan Event Handling**

    Mengupas pengelolaan data koleksi dan array objek menggunakan direktif perulangan `v-for`, teknik manipulasi string (*string methods*), serta penanganan peristiwa antarmuka (*event handling*) via `v-on` atau simbol `@` untuk interaksi *mouse* dan *keyboard modifiers*.

*   **Modul 08: Components, Canvas, dan Animasi**

    Mempelajari pembuatan komponen modular yang dapat digunakan kembali (*reusable*) lengkap dengan komunikasi *props* dan *slot*, manipulasi grafis dua dimensi berbasis koordinat pada elemen `<canvas>` HTML5, serta pembuatan efek transisi dan animasi visual memanfaatkan `<transition>` dan aturan *keyframes* CSS.

---

## Glosarium

| Istilah | Definisi |
| :--- | :--- |
| **Website** | Kumpulan halaman web yang saling terhubung di bawah naungan satu nama domain yang sama dan dapat diakses melalui internet menggunakan peramban (*browser*). |
| **Domain** | Alamat unik yang digunakan untuk mengakses suatu website di internet (contoh: `google.com`). |
| **Hosting** | Layanan atau media penyimpanan berkas data website di server agar dapat diakses daring selama 24 jam. |
| **URL (Uniform Resource Locator)** | Rangkaian karakter yang berfungsi sebagai alamat lengkap penunjuk berkas atau halaman tertentu di internet. |
| **Browser** | Perangkat lunak yang berfungsi untuk membuka, menerjemahkan, dan menampilkan halaman web kepada pengguna. |
| **IP Address** | Deretan angka biner unik yang menjadi identitas setiap perangkat atau server di dalam jaringan internet. |
| **HTML (*HyperText Markup Language*)** | Bahasa penanda standar yang digunakan untuk menstrukturkan dan menyusun konten halaman web. |
| **Void Elements** | Elemen HTML yang tidak memiliki isi konten dan tidak membutuhkan tag penutup, seperti `<br>`, `<img>`, dan `<hr>`. |
| **CSS (*Cascading Style Sheets*)** | Bahasa lembar gaya yang bertugas mengatur estetika visual, warna, fon, dan tata letak (*layout*) elemen HTML. |
| **Selector** | Pola dalam aturan CSS yang digunakan untuk memilih elemen HTML mana yang akan diberi dekorasi gaya visual. |
| **JavaScript** | Bahasa pemrograman dinamis tingkat tinggi berbasis objek yang berjalan di sisi klien maupun peladen untuk memberikan interaktivitas web. |
| **JavaScript Framework** | Kerangka kerja berbasis JavaScript yang menyediakan pustaka, aturan, dan struktur standar untuk mempercepat pembangunan aplikasi web. |
| **Vue.js** | Kerangka kerja JavaScript progresif yang berfokus pada lapisan antarmuka pengguna (*view layer*) yang fleksibel dan mudah diintegrasikan. |
| **Mustaches (`{{ }}`)** | Sintaks interpolasi teks di Vue.js yang menghubungkan nilai data reaktif JavaScript langsung ke dalam elemen HTML. |
| **Declarative Rendering** | Mekanisme otomatis Vue yang merender data JavaScript ke DOM HTML secara reaktif tanpa manipulasi DOM manual. |
| **`v-if`** | Direktif pengkondisian yang merender atau menghapus elemen secara fisik dari struktur DOM berdasarkan kondisi *boolean*. |
| **`v-show`** | Direktif pengkondisian yang menyembunyikan atau menampilkan elemen hanya dengan mengubah properti CSS `display: none` tanpa menghapusnya dari DOM. |
| **Data Binding** | Mekanisme keterhubungan antara data pada logika skrip JavaScript dengan elemen tampilan antarmuka (DOM/HTML). |
| **One-Way Data Binding** | Aliran data searah dari logika skrip menuju tampilan antarmuka (misalnya melalui `v-bind` atau `{{ }}`). |
| **Two-Way Data Binding** | Aliran data dua arah di mana perubahan pada skrip memperbarui tampilan, dan masukan pengguna di tampilan otomatis memperbarui skrip (via `v-model`). |
| **`v-bind`** | Direktif Vue (dengan *shorthand* `:`) untuk mengikat nilai data variabel ke atribut elemen HTML secara dinamis satu arah. |
| **`v-model`** | Direktif Vue untuk menghubungkan elemen masukan formulir (*input*, *textarea*, *select*) dengan variabel data secara dua arah. |
| **Computed Property** | Properti pengolah data reaktif di Vue yang memiliki sistem *caching*, sehingga hanya dieksekusi ulang jika data rujukannya (dependensinya) berubah. |
| **Methods Property** | Kumpulan fungsi instruksi aksi atau penanganan kejadian di Vue yang tidak memiliki *cache* dan dieksekusi setiap kali dipanggil. |
| **Watcher** | Opsi pemantau variabel reaktif di Vue yang otomatis menjalankan fungsi *callback* guna mengeksekusi efek samping (*side effects*) atau tugas asinkron saat nilai berubah. |
| **Array** | Struktur data linier berindeks mulai dari 0 yang menampung sekumpulan nilai atau objek di dalam satu variabel. |
| **`v-for`** | Direktif Vue untuk merender elemen atau komponen berulang-ulang berdasarkan daftar data dalam *array* atau objek. |
| **`v-on`** | Direktif penanganan kejadian (dengan *shorthand* `@`) untuk mendengarkan peristiwa DOM (*click*, *keyup*, dll.) dan memicu fungsi *method*. |
| **Props** | Saluran pengiriman data satu arah dari komponen induk (*parent*) ke komponen anak (*child*) di dalam arsitektur komponen Vue. |
| **Slot** | Mekanisme distribusi konten yang memungkinkan komponen induk menyisipkan markup atau teks kustom ke dalam wadah komponen anak. |
| **Canvas** | Elemen HTML5 yang menyediakan bidang grafis dua dimensi untuk digambar melalui skrip JavaScript menggunakan API konteks. |
| **Transition** | Komponen pembungkus bawaan Vue (`<transition>`) untuk menerapkan animasi atau efek transisi CSS saat elemen masuk atau keluar dari DOM. |
___