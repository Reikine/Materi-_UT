# MODUL 08: COMPONENTS, CANVAS, DAN ANIMASI

## Bagian 01: Components

### Template

* **Pengertian:** Struktur HTML atau kerangka visual yang mendefinisikan tampilan dari sebuah *Component* di Vue.js.
* Di dalam komponen tunggal (*Single File Component*), bagian `<template>` berfungsi sebagai wadah utama elemen UI yang akan dirender ke DOM.
___
### Multiline

* Teknik penulisan templat HTML yang panjang atau terdiri dari banyak baris (*multi-line template*).
* Dalam JavaScript modern atau file `.vue`, template multi-baris dapat ditulis dengan rapi menggunakan bantuan *template literals* (tanda backtick ```) atau secara langsung di dalam blok tag `<template>` pada file `.vue` tanpa khawatir masalah pemenggalan baris.
___
### Data Property pada Components

* Berbeda dengan komponen utama (root instance) di mana `data` bisa berupa objek biasa, **di dalam komponen modular Vue, `data` wajib berupa sebuah fungsi (`function`) yang mengembalikan objek**.
* *Alasan:* Hal ini memastikan setiap instance komponen yang digunakan berulang kali memiliki salinan data reaktifnya masing-masing secara independen (tidak saling memengaruhi).
```javascript
export default {
  data() {
    return {
      pesan: "Halo dari komponen!"
    }
  }
}

```
___
### Computed, Methods, dan Watcher Property pada Components

Seluruh properti pengolahan logika Vue juga berlaku dan berjalan di dalam komponen secara mandiri:

**Contoh penggunaan Computed Property pada components:** Memproses data lokal komponen secara reaktif dan efisien menggunakan *caching*.
```javascript
computed: {
  formatNamaLengkap() {
    return `${this.namaDepan} ${this.namaBelakang}`.toUpperCase();
  }
}

```
**Contoh penggunaan Methods Property pada components:** Menjalankan fungsi instruksi, *event handler*, atau tindakan aksi spesifik di dalam komponen.
```javascript
methods: {
  tambahItem() {
    this.counter++;
  }
}

```
**Contoh penggunaan Watcher Property pada components:** Memantau perubahan variabel data lokal di dalam komponen untuk memicu efek samping (*side effects*).
```javascript
watch: {
  statusLogin(valBaru) {
    console.log("Status login komponen berubah menjadi:", valBaru);
  }
}

```
___
### Slot

**Pengertian:** Mekanisme distribusi konten (*content distribution*) di Vue.js yang memungkinkan komponen induk (*parent component*) mengirim atau menyisipkan konten HTML/teks ke dalam kerangka komponen anak (*child component*).
* Membuat komponen menjadi jauh lebih fleksibel dan dapat digunakan kembali (*reusable*).
```html
<!-- Di dalam Child Component -->
<div class="card">
  <slot>Konten default jika slot kosong</slot>
</div>

```
___
### Props

* **Pengertian:** Mekanisme komunikasi data **satu arah (one-way data binding)** dari komponen induk (*parent*) ke komponen anak (*child*).
* Anak komponen menerima data melalui atribut `props`, sehingga komponen tersebut dapat bersifat dinamis dan menerima data berbeda dari induknya.
```javascript
// Di Child Component
export default {
  props: ['judulArtikel', 'penulis']
}

```
___

## Bagian 02: Canvas

Elemen `<canvas>` HTML5 dikombinasikan dengan JavaScript di Vue untuk merender grafik, bentuk geometris, dan manipulasi gambar secara dinamis.

### Custom Directive

* Membuat arahan kustom (*custom directive*) di Vue.js untuk mengontrol manipulasi DOM secara langsung pada elemen `<canvas>`.
* *Contoh:* Mendaftarkan direktif `v-canvas-draw` untuk menginisialisasi konteks 2D saat komponen dimuat.
___
### Rectangles (Persegi & Kotak)

* Menggambar bentuk persegi di atas area *canvas* menggunakan API konteks 2D (`canvas.getContext('2d')`).
* Metode utama:
* `ctx.fillRect(x, y, width, height)`: Membuat kotak padat terisi warna.
* `ctx.strokeRect(x, y, width, height)`: Membuat kerangka kotak (garis tepi).
* `ctx.clearRect(x, y, width, height)`: Menghapus area tertentu di dalam canvas.
___
### Paths (Jalur / Garis Kompleks)

Untuk membuat bentuk bebas atau geometri khusus, kita menggunakan alur jalur (*path*): `ctx.beginPath()`, `ctx.moveTo()`, `ctx.lineTo()`, dan `ctx.stroke()` / `ctx.fill()`.

* **Poligon:** Menggabungkan beberapa titik koordinat garis (`lineTo`) untuk membentuk bangun segi banyak (seperti segitiga, trapesium, atau bintang) lalu menutup jalurnya dengan `ctx.closePath()`.
* **Arc (Busur & Lingkaran):** Menggambar kurva melingkar atau lingkaran penuh menggunakan metode `ctx.arc(x, y, radius, sudutMulai, sudutSelesai)`.
___

## Bagian 03: Animasi

Vue.js menyediakan sistem transisi dan animasi bawaan yang sangat mulus menggunakan elemen pembungkus `<transition>` dan `<transition-group>`.

### Transition (Transisi Elemen Tunggal)

* Digunakan untuk memberikan efek animasi peralihan (seperti efek *fade*, *slide*, atau *scale*) saat sebuah elemen dimasukkan (*enter*) atau dihapus (*leave*) dari DOM (misalnya dikontrol oleh `v-if` atau `v-show`).
* Vue otomatis menyisipkan kelas CSS transisi secara berurutan (`v-enter-active`, `v-leave-active`, dll.).
```html
<transition name="fade">
  <p v-if="tampil">Teks ini memiliki efek transisi fade.</p>
</transition>

```
___
### Animation (Animasi Kompleks berbasis CSS Keyframes)

* Menggabungkan transisi Vue dengan aturan `@keyframes` pada CSS untuk membuat animasi multi-langkah yang lebih kompleks (seperti efek memantul, berputar, atau berdenyut).
* *Contoh CSS Keyframes:*
```css
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% { transform: scale(0); }
  50% { transform: scale(1.25); }
  100% { transform: scale(1); }
}

```
___