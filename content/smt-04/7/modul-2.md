# MODUL 02: CSS DAN JAVASCRIPT

## Bagian 01: CSS (*Cascading Style Sheets*)

### Apa itu CSS

* **Pengertian CSS:** Bahasa *style sheet* yang digunakan untuk mengatur tampilan, tata letak (*layout*), warna, font, dan estetika elemen HTML pada halaman web.
* **Fungsi Utama:** Memisahkan struktur konten (HTML) dari desain visual (CSS), sehingga kode menjadi lebih bersih, mudah dikelola, dan konsisten di berbagai ukuran layar.
___
### Sejarah CSS

* **Tokoh di Baliknya:** **Håkon Wium Lie** mengusulkan gagasan CSS pertama kalinya pada tanggal 10 Oktober 1994, saat ia bekerja bersama Tim Berners-Lee di CERN.
* **Perkembangan Singkat:**
* W3C (*World Wide Web Consortium*) merekomendasikan CSS Level 1 (CSS1) pada tahun 1996.
* CSS2 dirilis pada tahun 1998 dengan penambahan fitur posisi (*positioning*), tipe media, dan *selectors* yang lebih kompleks.
* CSS3 memperkenalkan sistem modular (modul-modul terpisah) yang memungkinkan fitur canggih seperti animasi, transisi, *Flexbox*, dan *Grid layout*.
___
### Cara Penulisan CSS

Ada tiga metode utama untuk menyisipkan kode CSS ke dalam dokumen HTML:

1\. **Inline CSS:** Menuliskan kode CSS secara langsung pada elemen HTML tertentu menggunakan atribut `style`.
```html
<p style="color: blue; font-size: 16px;">Teks ini menggunakan Inline CSS.</p>

```


2\. **Internal CSS:** Menuliskan kode CSS di dalam tag `<style>` yang diletakkan pada bagian `<head>` dokumen HTML.
```html
<head>
    <style>
        p { color: green; }
    </style>
</head>

```


3\. **External CSS:** Menyimpan kode CSS terpisah di dalam *file* berekstensi `.css` (contoh: `style.css`), lalu menghubungkannya ke dokumen HTML menggunakan tag `<link>` di bagian `<head>`.
```html
<head>
    <link rel="stylesheet" href="style.css">
</head>

```
___
### Bagian-bagian CSS

Aturan penulisan CSS (*CSS Rule Set*) terdiri dari beberapa komponen utama:

* **Selector:** Menentukan elemen HTML mana yang akan diberi gaya (contoh: `h1`, `.class`, `#id`).
* **Declaration Block:** Blok kode yang diapit oleh kurung kurawal (`{ ... }`) yang berisi satu atau lebih deklarasi gaya.
* **Property:** Aspek visual yang ingin diubah (contoh: `color`, `background-color`, `margin`).
* **Value:** Nilai yang diberikan pada properti tersebut (contoh: `red`, `#ffffff`, `20px`).
* *Contoh Struktur:*
```css
selector {
    property: value;
}

```
___
### Eksplorasi CSS

1\. **Memberikan Komentar:** Digunakan untuk mencatat catatan atau menonaktifkan kode sementara. Ditulis di antara `/*` dan `*/`.
```css
/* Ini adalah komentar CSS */

```

2\. **Memberi Warna:**
* **Warna Foreground (`color`):** Mengatur warna teks atau ikon.
* **Warna Background (`background-color`):** Mengatur warna latar belakang suatu elemen.


3\. **Mengatur Margin dan Padding:**
* **Margin:** Jarak ruang di *luar* batas (*border*) elemen.
* **Padding:** Jarak ruang di *dalam* batas elemen (antara konten dan *border*).


4\. **Mengatur Garis Tepi (`border`):** Mengatur ketebalan, gaya, dan warna garis pinggir elemen (contoh: `border: 1px solid black;`).

5\. **Mengatur Teks:** Mengatur jenis huruf (`font-family`), ukuran (`font-size`), ketebalan (`font-weight`), perataan teks (`text-align`), dan dekorasi teks (`text-decoration`).

6\. **Combinator:** Menggabungkan beberapa selector untuk menentukan hubungan antar elemen:
* *Descendant selector (Spasi):* Memilih semua elemen anak di dalam elemen leluhur (`div p`).
* *Child selector (`>`):* Memilih elemen anak langsung (`div > p`).
* *Adjacent sibling selector (`+`):* Memilih elemen tepat setelah elemen tertentu (`h1 + p`).


7\. **Menggunakan Attribute Selector:** Memilih elemen HTML berdasarkan keberadaan atau nilai dari suatu atribut (contoh: `input[type="text"] { ... }`).
___

## Bagian 02: JavaScript

### Sejarah JavaScript

* **Pengertian JavaScript:** Bahasa pemrograman tingkat tinggi, dinamis, dan berbasis objek yang berjalan di sisi klien (*client-side*) maupun peladen (*server-side*) untuk memberikan interaktivitas pada halaman web.
* **Tokoh di Baliknya:** **Brendan Eich**, seorang insinyur di Netscape, menciptakan bahasa ini hanya dalam waktu 10 hari pada tahun 1995 (awalnya dinamai *Mocha*, lalu *LiveScript*, sebelum resmi menjadi *JavaScript*).
* **Standarisasi:** Spesifikasi resmi JavaScript diatur oleh ECMA International dengan nama standar **ECMAScript**.
___
### Penulisan JavaScript

Sama seperti CSS, JavaScript dapat disematkan ke dalam halaman web melalui tiga cara:

1\. **Inline JavaScript:** Disisipkan langsung pada atribut *event handler* HTML (seperti `onclick`).
```html
<button onclick="alert('Halo!')">Klik Saya</button>

```


2\. **Internal JavaScript:** Ditulis di dalam tag `<script>` di dalam dokumen HTML.
```html
<script>
    console.log("Ini Internal JavaScript");
</script>

```


3\. **Eksternal JavaScript:** Disimpan dalam *file* terpisah berformat `.js` (contoh: `script.js`), lalu dipanggil menggunakan atribut `src` pada tag `<script>`.
```html
<script src="script.js"></script>

```
___
### JavaScript Syntax

1\. **Komentar:**
* Komentar satu baris menggunakan `//`.
* Komentar banyak baris menggunakan `/* ... */`.


2\. **Output:** Cara menampilkan data atau hasil eksekusi program:
* `console.log("Teks");` (menampilkan di konsol *developer*).
* `alert("Teks");` (memunculkan *pop-up* peringatan).
* `document.getElementById("id").innerHTML = "Teks";` (mengubah konten HTML).


3\. **Deklarasi Variabel:** Wadah untuk menyimpan data menggunakan kata kunci:
* `let`: Variabel yang nilainya bisa diubah (*re-assignable*).
* `const`: Variabel yang nilainya bersifat tetap/konstan (*tidak bisa diubah*).
* `var`: Cara lama deklarasi variabel (cakupan fungsi).


4\. **Aritmatika Operator (`Arithmetic Operators`):** Digunakan untuk melakukan operasi matematika dasar seperti penjumlahan (`+`), pengurangan (`-`), perkalian (`*`), pembagian (`/`), dan sisa bagi/modulus (`%`).
5\. **Comparison Operator:** Digunakan untuk membandingkan nilai, menghasilkan nilai boolean (`true` atau `false`):
* `==` (sama dengan nilai), `===` (sama dengan nilai dan tipe data).
* `!=` (tidak sama dengan), `>={` (lebih besar/sama dengan), `<=` (lebih kecil/sama dengan).


6\. **Array:** Variabel khusus yang dapat menyimpan banyak nilai dalam satu wadah bernomor indeks (dimulai dari indeks `0`).
```javascript
let buah = ["Apel", "Mangga", "Jeruk"];

```


7\. **Condition (Percabangan):** Digunakan untuk membuat keputusan berdasarkan kondisi tertentu menggunakan `if`, `else if`, `else`, atau struktur `switch`.
```javascript
let nilai = 80;
if (nilai >= 75) {
    console.log("Lulus");
} else {
    console.log("Remedial");
}

```


8\. **Looping (Perulangan):** Digunakan untuk menjalankan blok kode secara berulang-ulang, menggunakan struktur seperti `for`, `while`, atau `do...while`.
```javascript
for (let i = 1; i <= 5; i++) {
    console.log("Perulangan ke-" + i);
}

```


9\. **Dalam format .mjs buka di Github** [Lanjutan](https://github.com/Reikine/Resume-materi/tree/main/js-materi)

___
