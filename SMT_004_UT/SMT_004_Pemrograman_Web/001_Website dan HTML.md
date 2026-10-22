
# MODUL 01: WEBSITE DAN HTML

## Bagian 01: Website

### Apa itu Website dan Manfaatnya

* **Pengertian Website:** Kumpulan halaman web yang saling terhubung, yang biasanya diakses melalui alamat URL (Uniform Resource Locator) tertentu dan berada di bawah satu nama domain yang sama. Website dapat diakses melalui internet menggunakan perangkat seperti komputer, laptop, atau *smartphone* melalui aplikasi *browser*.
* **Manfaat Website:**
* **Media Informasi:** Menyampaikan informasi secara cepat, luas, dan *real-time* kepada publik (contoh: portal berita, situs edukasi).
* **Branding & Identitas Profesional:** Meningkatkan kredibilitas dan memperkenalkan profil pribadi, organisasi, atau perusahaan ke kancah global.
* **Sarana Bisnis & E-Commerce:** Memperluas jangkauan pasar, menjual produk atau jasa 24 jam tanpa batasan geografis.
* **Wadah Portofolio & Komunitas:** Tempat berbagi karya, berdiskusi, serta membangun interaksi antarpengguna secara daring.
___
### Istilah-istilah Website

* **Domain:** Alamat unik yang digunakan untuk mengakses sebuah website di internet (contoh: `universitas.ac.id`, `google.com`).
* **Hosting:** Layanan atau tempat penyimpanan data website (file, gambar, skrip) di server agar dapat diakses secara *online* 24 jam.
* **URL (Uniform Resource Locator):** Rangkaian karakter yang berfungsi sebagai alamat lengkap untuk mengakses suatu halaman atau file di internet.
* **Browser:** Perangkat lunak yang digunakan untuk membuka dan menampilkan halaman web (contoh: Google Chrome, Mozilla Firefox, Microsoft Edge).
* **IP Address:** Deretan angka biner yang unik sebagai identifikasi perangkat atau server di dalam jaringan internet.
___

## Bagian 02: HTML (*HyperText Markup Language*)

### Tim Berners-Lee dan Sejarah HTML

* **Pengertian HTML:** Bahasa *markup* (penanda) standar yang digunakan untuk merancang, menstrukturkan, dan menampilkan halaman serta konten di dalam web.
* **Tokoh di Baliknya:** **Tim Berners-Lee**, seorang ilmuwan komputer berkebangsaan Inggris, adalah sosok yang menciptakan *World Wide Web* (WWW) sekaligus merancang versi awal HTML.
* **Sejarah Singkat:**
* Pada tahun 1989, Tim Berners-Lee mengusulkan proyek berbasis hiperteks di CERN (Organisasi Eropa untuk Riset Nuklir).
* Tahun 1991, versi pertama HTML secara resmi dirilis ke publik dengan jumlah elemen dasar yang sangat terbatas.
___
### Perkembangan HTML

* **HTML 2.0 (1995):** Spesifikasi resmi pertama yang dirilis oleh IETF (*Internet Engineering Task Force*).
* **HTML 3.2 (1997):** Dikembangkan oleh W3C (*World Wide Web Consortium*), menambahkan dukungan untuk tabel, *applet*, teks mengalir, dan pengaturan warna.
* **HTML 4.01 (1999):** Menjadi standar yang sangat matang dan luas digunakan, berfokus pada pemisahan struktur dokumen dengan tampilan (CSS).
* **XHTML (2000-an):** Penggabungan antara HTML dan XML yang memiliki aturan penulisan kode yang jauh lebih ketat.
* **HTML5 (Standar Modern):** Diperkenalkan oleh WHATWG dan disahkan oleh W3C. Membawa fitur revolusioner seperti dukungan multimedia bawaan (`<video>`, `<audio>`), semantik baru (`<header>`, `<footer>`, `<article>`), serta kemampuan aplikasi web interaktif tanpa plugin tambahan.
___

## Bagian 03: Kode HTML

### Bagian-bagian pada Kode HTML

Kode HTML pada umumnya disusun oleh komponen-komponen berikut:

* **Tag:** Penanda awal dan akhir dari suatu elemen yang diapit oleh tanda kurung siku (contoh: `<p>` dan `</p>`).
* **Atribut:** Informasi tambahan yang diletakkan di dalam tag pembuka untuk memodifikasi perilaku atau tampilan elemen (contoh: `src`, `href`, `class`).
* **Isi (Content):** Bagian teks atau objek yang berada di antara tag pembuka dan tag penutup.
___
### Elemen Bersarang (*Nested Elements*)

* Elemen HTML dapat dimasukkan ke dalam elemen HTML lainnya (bersarang).
* *Prinsip Utama:* Tag yang dibuka terakhir harus ditutup terlebih dahulu (aturan *Last In, First Out*).
* *Contoh:*
```html
<p>Ini adalah teks dengan <strong>kata bercetak tebal</strong> di dalamnya.</p>

```
___
### Elemen Kosong (*Void Elements*)

* Elemen yang tidak memiliki isi (konten) di dalamnya dan tidak memerlukan tag penutup.
* *Contoh:* Tag `<br>` (baris baru), `<img>` (gambar), dan `<hr>` (garis horizontal).
___
### Struktur HTML

Struktur dasar dokumen HTML standar yang wajib dipahami mencakup kerangka berikut:

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Judul Halaman Web</title>
</head>
<body>
    <!-- Konten utama website ditulis di sini -->
</body>
</html>

```

* `<!DOCTYPE html>`: Deklarasi tipe dokumen untuk HTML5.
* `<html>`: Akar (*root*) dari dokumen HTML.
* `<head>`: Bagian informasi meta, pengaturan karakter, dan judul halaman (tidak tampak langsung di layar utama browser).
* `<body>`: Bagian tubuh dokumen yang berisi seluruh elemen visual yang akan ditampilkan kepada pengguna.
___
### Berbagai Elemen HTML

Berikut adalah elemen-elemen penting dalam HTML beserta fungsinya:

1. **Tulisan Bercetak Tebal (`<strong>` atau `<b>`):** Digunakan untuk menebalkan teks guna memberikan penekanan penting.
2. **Tulisan Bercetak Miring (`<em>` atau `<i>`):** Digunakan untuk memiringkan teks (biasanya untuk istilah asing atau penekanan ringan).
3. **Tulisan Bergaris Bawah (`<u>`):** Digunakan untuk memberikan garis bawah pada teks.
4. **Baris Baru (`<br>`):** Berfungsi untuk memindahkan teks atau elemen ke baris baru tanpa membuat paragraf baru.
5. **Link (`<a>`):** Membuat tautan hiperteks untuk berpindah dari satu halaman web ke halaman web lainnya. Menggunakan atribut `href`.
6. **Gambar (`<img>`):** Menampilkan gambar ke dalam halaman web. Memerlukan atribut `src` (sumber file) dan `alt` (teks alternatif).
7. **Heading (`<h1>` sampai `<h6>`):** Digunakan untuk membuat judul atau sub-judul artikel dengan tingkat ukuran dari yang paling besar (`<h1>`) hingga paling kecil (`<h6>`).
8. **Paragraf (`<p>`):** Digunakan untuk mengelompokkan blok teks menjadi sebuah paragraf.
9. **Subscript (`<sub>`):** Membuat teks berukuran kecil yang posisinya agak turun ke bawah (biasanya untuk rumus kimia, misal: $H_2O$ ditulis `H<sub>2</sub>O`).
10. **Superscript (`<sup>`):** Membuat teks berukuran kecil yang posisinya agak naik ke atas (biasanya untuk pangkat, misal: $x^2$ ditulis `x<sup>2</sup>`).
11. **Ordered List (`<ol>`):** Membuat daftar atau list yang berurutan menggunakan angka atau huruf. Didalamnya menggunakan tag `<li>`.
12. **Unordered List (`<ul>`):** Membuat daftar atau list yang tidak berurutan (menggunakan simbol titik/bullet). Didalamnya menggunakan tag `<li>`.
13. **Meter (`<meter>`):** Menampilkan pengukuran skalar dalam rentang yang diketahui (seperti indikator kapasitas penyimpanan atau tingkat kekuatan sandi).
14. **Tabel (`<table>`):** Digunakan untuk menampilkan data dalam bentuk baris dan kolom. Melibatkan elemen pembantu seperti `<tr>` (baris), `<th>` (sel kepala), dan `<td>` (sel data).
15. **Formulir (`<form>`):** Digunakan untuk mengumpulkan data dari pengguna (seperti kolom *input* teks, tombol *submit*, *checkbox*, dan *radio button*).
___