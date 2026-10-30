# Modul 01: Website dan HTML

## Bagian 01: Website

### Apa itu Website dan Manfaatnya

* **Pengertian Website:** Kumpulan halaman web terhubung yang berada di bawah satu nama domain sama, disimpan pada server web, dan diakses via protokol HTTP/HTTPS menggunakan *browser*.


* **Manfaat Utama:**
* **Media Informasi:** Menyampaikan informasi secara cepat dan *real-time* (portal berita, situs edukasi).


* **Branding & Identitas Profesional:** Meningkatkan kredibilitas profil pribadi, organisasi, atau perusahaan.


* **E-Commerce & Bisnis:** Sarana transaksi produk/jasa 24/7 tanpa batasan geografis.


* **Portofolio & Komunitas:** Wadah menampilkan karya dan ruang interaksi daring.





### Istilah-Istilah Kunci Web

* **Domain:** Alamat ramah manusia yang memetakan IP Address server (contoh: `universitas.ac.id`).


* **Hosting:** Layanan penyewaan ruang server agar berkas website dapat diakses online 24 jam.


* **URL (Uniform Resource Locator):** Alamat lengkap penunjuk lokasi berkas/halaman spesifik di internet.


* **Browser:** Aplikasi *client* penjelajah web yang menerjemahkan kode HTML/CSS/JS menjadi tampilan visual (Chrome, Firefox, Edge).


* **IP Address:** Identitas unik perangkat dalam jaringan. Terdiri dari **IPv4** (format biner 32-bit / 4 angka desimal) dan **IPv6** (format 128-bit heksadesimal).



---

## Bagian 02: HTML (*HyperText Markup Language*)

### Sejarah & Standar HTML

* **Pengertian:** Bahasa *markup* standar untuk menstrukturkan halaman web.


* **Penemu:** **Tim Berners-Lee** mengusulkan konsep WWW dan HTML pada tahun 1989 di CERN, dan merilis versi awal pada tahun 1991.


* **Evolusi Standar:**
* **HTML 2.0 (1995):** Standar resmi pertama oleh IETF.


* **HTML 3.2 (1997):** Dikelola W3C, menambahkan tabel dan dukungan warna.


* **HTML 4.01 (1999):** Pemisahan struktur dengan tampilan (CSS).


* **XHTML (2000):** Penggabungan HTML dan XML dengan aturan sintaks sangat ketat.


* **HTML5 (Modern Standard):** Dikembangkan oleh WHATWG & W3C. Menyediakan tag semantik (`<header>`, `<article>`, `<footer>`), dukungan audio/video native, serta API aplikasi web modern.





---

## Bagian 03: Anatomi & Struktur Kode HTML

### Komponen Kode HTML

Satu unit **Elemen HTML** terdiri dari:

1. **Tag Pembuka & Penutup:** Penanda batas elemen (contoh: `<p>` dan `</p>`).


2. **Atribut:** Pasangan *key-value* di tag pembuka untuk memberi konfigurasi/informasi tambahan (contoh: `class="utama"`, `href="url"`).


3. **Isi (Content):** Teks atau elemen bersarang di antara tag pembuka dan penutup.



### Elemen Bersarang (*Nested Elements*) & *Void Elements*

* **Aturan Elemen Bersarang:** Mengikuti prinsip LIFO (*Last In, First Out*)—tag yang opened terakhir harus closed pertama kali.


```html
<p>Teks ini berisi kata <strong>penting</strong>.</p>

```


* **Void Elements (Elemen Kosong):** Elemen tanpa isi dan tidak membutuhkan tag penutup (`<br>`, `<img>`, `<hr>`, `<input>`, `<meta>`).



### Struktur Dokumen Standar HTML5 (Lengkap & Responsive)

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <!-- Meta Viewport: Wajib agar tampilan responsive di perangkat mobile -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Judul Halaman Web</title>
</head>
<body>
    <!-- Seluruh konten visual diletakkan di dalam tag body -->
</body>
</html>
```


## Bagian 04: Referensi Elemen HTML Penting

1. **`<strong>` vs `<b>`:** `<strong>` untuk teks dengan penekanan penting (diperhatikan oleh *screen reader*), sedangkan `<b>` hanya tebal secara visual semata.
2. **`<em>` vs `<i>`:** `<em>` (*emphasis*) untuk penekanan nada bicara, sedangkan `<i>` untuk istilah asing/teknis.
3. **`<a>` (Anchor):** Membuat tautan hiperteks mengarah ke URL tertentu menggunakan atribut `href`.
4. **`<img>` (Image):** Menyematkan gambar. Menggunakan atribut wajib `src` (sumber) dan `alt` (teks alternatif).
5. **Heading (`<h1>` sampai `<h6>`):** Hirarki judul utama (`<h1>`) hingga sub-judul terkecil (`<h6>`).
6. **`<sub>` & `<sup>`:** Teks subscript (misal: $H_2O$ ditulis `H<sub>2</sub>O`) dan superscript (misal: $x^2$ ditulis `x<sup>2</sup>`).
7. **`ol`, `ul`, & `li`:** Draf daftar berurutan (`<ol>`), tidak berurutan (`<ul>`), dengan item daftar (`<li>`).
8. **`<table>`:** Menampilkan data matriks dengan `<tr>` (baris), `<th>` (header sel), dan `<td>` (data sel).
9. **`<form>`:** Wadah input interaktif pengguna (mengikutsertakan elemen `<input>`, `<select>`, `<button>`).
10. **`<meter>`:** Indikator pengukuran nilai skalar dalam rentang berskala.
