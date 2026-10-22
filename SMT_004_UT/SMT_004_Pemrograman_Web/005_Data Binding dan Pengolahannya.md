# MODUL 05: DATA BINDING DAN PENGOLAHANNYA

## Bagian 01: Data Binding

### Pengertian Data Binding & Konsepnya

* **Pengertian Data Binding:** Mekanisme penghubung antara data di dalam komponen JavaScript (logic) dengan elemen tampilan (DOM/HTML) di template Vue.js.
* **Konsep One-Way Data Binding (Satu Arah):**
* Aliran data hanya bergerak dari komponen JavaScript menuju tampilan (*template*).
* Jika data di script berubah, tampilan ikut berubah otomatis. Namun, perubahan pada tampilan (seperti input dari pengguna) tidak akan mengubah data di script secara otomatis.
* *Contoh implementasi:* Menggunakan direktif **`v-bind`** atau interpolasi **`{{ }}`**.


* **Konsep Two-Way Data Binding (Dua Arah):**
* Aliran data bergerak dua arah: dari script ke tampilan, dan sebaliknya dari tampilan ke script.
* Jika data di script berubah, tampilan ikut berubah. Begitu pula sebaliknya, jika pengguna mengubah nilai pada elemen form di layar, data reaktif di dalam script akan langsung ikut memperbarui diri secara otomatis.
* *Contoh implementasi:* Menggunakan direktif **`v-model`**.
___
### Directive `v-bind` (One-Way Data Binding)

Direktif `v-bind` digunakan untuk menghubungkan data dinamis ke *atribut* HTML secara satu arah. (Bisa disingkat menggunakan titik dua `:`).

**Binding pada atribut `src` pada elemen `<img>`:** Mengatur sumber gambar secara dinamis dari variabel data.
```html
<img v-bind:src="imageSrc" alt="Dynamic Image">
<!-- Atau menggunakan shorthand: -->
<img :src="imageSrc" alt="Dynamic Image">

```
**Binding pada atribut `href` pada elemen `<a>`:** Menentukan alamat tautan URL secara dinamis.
```html
<a :href="profileUrl">Kunjungi Profil</a>

```
**Binding pada atribut `class`:** Mengontrol kelas CSS secara dinamis berdasarkan kondisi boolean atau objek data.
```html
<div :class="{ 'active': isActive, 'text-danger': hasError }">Kotak Status</div>

```
**Binding pada Inline CSS:** Mengatur gaya CSS langsung pada elemen berdasarkan variabel reaktif.
```html
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }">Teks Dinamis</div>

```
**Binding ToolTip (Atribut `title`):** Menampilkan teks bantuan saat kursor diarahkan ke elemen.
```html
<span :title="tooltipMessage">Arahkan kursor ke sini</span>

```
___
### Directive `v-model` (Two-Way Data Binding)

Direktif `v-model` digunakan untuk membuat ikatan dua arah pada elemen formulir (*form input*). Berikut penerapannya pada berbagai jenis input:

**Input tipe `text` dan `password`:** Menyimpan dan menyinkronkan string teks atau sandi yang diketik pengguna secara *real-time*.
```html
<input type="text" v-model="username" placeholder="Masukkan username">
<input type="password" v-model="password" placeholder="Masukkan password">

```
**Input tipe `radio`:** Mengikat nilai pilihan tunggal dari beberapa opsi yang tersedia.
```html
<label><input type="radio" value="Pria" v-model="gender"> Pria</label>
<label><input type="radio" value="Wanita" v-model="gender"> Wanita</label>

```
**Input tipe `checkbox`:** Mengikat nilai boolean (centang/tidak) atau array untuk pilihan ganda.
```html
<label><input type="checkbox" value="Membaca" v-model="hobbies"> Membaca</label>
<label><input type="checkbox" value="Coding" v-model="hobbies"> Coding</label>

```
**Input tipe `date`:** Mengambil dan menyinkronkan nilai tanggal yang dipilih pengguna.
```html
<input type="date" v-model="selectedDate">

```
**Input tipe `range`:** Mengatur nilai numerik dalam rentang tertentu (biasanya untuk *slider*).
```html
<input type="range" min="0" max="100" v-model="volumeLevel">
<p>Volume: {{ volumeLevel }}</p>

```
**Input List (`<select>` / Dropdown):** Menyimpan nilai dari opsi yang dipilih pengguna dari daftar pilihan.
```html
<select v-model="selectedCity">
    <option disabled value="">Pilih Kota</option>
    <option>Jakarta</option>
    <option>Semarang</option>
    <option>Surabaya</option>
</select>

```
**Input `textarea`:** Mengambil teks panjang atau multi-baris dari pengguna.
```html
<textarea v-model="userBio" placeholder="Tulis bio singkat..."></textarea>

```
___

## Bagian 02: Computed Properties (Pengolahan Data Berbasis Ketergantungan)

### Konsep Computed Property

* **Pengertian:** Properti khusus di dalam Vue yang digunakan untuk memproses data reaktif dan mengembalikan nilai baru secara otomatis.
* **Fitur Utama (*Caching*):** Computed property mengingat hasil perhitungannya. Ia **hanya akan mengeksekusi ulang fungsinya jika data yang menjadi rujukannya (dependensinya) mengalami perubahan**. Jika tidak ada perubahan data, Vue langsung menyajikan data dari memori *cache*, sehingga performa aplikasi jauh lebih optimal.
___
### Implementasi Computed Property pada Berbagai Jenis Input

**Computed property pada input dengan value `text`:** Memproses teks yang diketik secara langsung (contoh: konversi otomatis ke huruf kapital, pemformatan nama, atau *live search filter*).
```javascript
computed: {
    formattedText() {
        return this.inputText.trim().toUpperCase();
    }
}

```
**Computed property pada input dengan value `password`:** Mengecek kekuatan sandi (*password strength*) atau memvalidasi kecocokan konfirmasi sandi secara *real-time*.
```javascript
computed: {
    isPasswordValid() {
        return this.passwordInput.length >= 8;
    }
}

```
**Computed property pada input dengan value `radio`:** Mengubah atau menyesuaikan tampilan/logika lanjutan berdasarkan pilihan *radio button* yang aktif.
```javascript
computed: {
    shippingCost() {
        return this.selectedService === 'Express' ? 25000 : 10000;
    }
}

```
**Computed property pada input dengan value `date`:** Menghitung selisih waktu, umur, atau memformat tanggal yang dipilih pengguna ke format baca tertentu.
```javascript
computed: {
    userAge() {
        const birthYear = new Date(this.selectedDate).getFullYear();
        const currentYear = new Date().getFullYear();
        return currentYear - birthYear;
    }
}

```
___

## Bagian 03: Methods (Fungsi Aksi di Vue.js)

### Pengertian & Penggunaan Methods Property

* **Pengertian:** Kumpulan fungsi atau blok kode instruksi yang dideklarasikan di dalam opsi `methods` pada komponen Vue.
* **Fungsi Utama:** Menjalankan tugas atau aksi tertentu (seperti merespon klik tombol *event handler*, mengirim data ke *server/API*, mengubah nilai data reaktif, atau melakukan kalkulasi yang membutuhkan aksi pemicu/eksekusi manual).
```javascript
methods: {
    submitForm() {
        alert("Data berhasil dikirim: " + this.inputText);
    },
    resetData() {
        this.inputText = '';
    }
}

```
___
### Perbedaan Utama: Computed Property vs. Methods Property

| Aspek Perbandingan | Computed Property | Methods Property |
| --- | --- | --- |
| **Mekanisme Eksekusi** | Berjalan secara reaktif berdasarkan **perubahan dependensi data**. | Dijalankan secara eksplisit saat **dipanggil** (misal lewat *event click* atau dipanggil di template). |
| **Sistem *Caching*** | **Memiliki *cache*.** Tidak menghitung ulang selama data acuan tidak berubah. | **Tidak memiliki *cache*.** Fungsi akan selalu dieksekusi setiap kali dipanggil, terlepas dari ada atau tidaknya perubahan data. |
| **Cara Pemanggilan di Template** | Dipanggil sebagai **properti** (tanpa tanda kurung `()`, contoh: `{{ formattedText }}`). | Dipanggil sebagai **fungsi** (menggunakan tanda kurung `()`, contoh: `{{ calculateTotal() }}`). |
| **Kegunaan Utama** | Untuk memformat, menyaring, atau menghitung data yang hasilnya akan ditampilkan di UI secara efisien. | Untuk menjalankan aksi/prosedur logika (fungsi tombol, validasi *submit*, pengambilan data API). |
___