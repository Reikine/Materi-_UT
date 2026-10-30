# Modul 02: CSS dan JavaScript

## Bagian 01: CSS (*Cascading Style Sheets*)

### Apa itu CSS & Sejarah Singkat

* **Pengertian:** Bahasa *style sheet* untuk mengontrol tampilan visual, tata letak, warna, font, dan estetika elemen HTML.


* **Fungsi Utama:** Memisahkan struktur konten (HTML) dari desain visual (CSS) agar kode mudah dipelihara dan responsif di berbagai perangkat.


* **Sejarah & Tokoh:** Diusulkan oleh **Håkon Wium Lie** pada 10 Oktober 1994 di CERN.


* **CSS1 (1996):** Rekomendasi awal W3C untuk format teks dan warna.


* **CSS2 (1998):** Menambahkan posisi (*positioning*), tipe media, dan *selector* lanjutan.


* **CSS3 (Modern):** Sistem modular yang menghadirkan Flexbox, Grid Layout, Animasi, dan Transisi.





---

### Metode Penulisan CSS & Aturan Spesifisitas (*Specificity*)

1. **Inline CSS:** Ditulis langsung pada atribut `style` elemen HTML. (Prioritas tertinggi, tetapi paling kaku).


2. **Internal CSS:** Ditulis di dalam tag `<style>` pada bagian `<head>` HTML.


3. **External CSS:** Disimpan terpisah di berkas `.css` dan dihubungkan via `<link rel="stylesheet" href="style.css">`.



> **Aturan Spesifisitas (Urutan Prioritas Gaya):**
> `Inline Style` > `ID Selector (#id)` > `Class / Pseudo-class (.class)` > `Element Selector (tag)`.
> 
> 

---

### Struktur Aturan CSS (*Rule Set*) & *Box Model*

* **Komponen CSS:** `Selector` (target elemen), `Property` (aspek visual), dan `Value` (nilai yang diberikan).


```css
/* Selector { Property: Value; } */
p {
    color: #333333;
    margin: 10px;
}

```


* **CSS Box Model:**
* **Content:** Area teks/gambar utama.
* **Padding:** Ruang jarak di *dalam* batas elemen (antara konten dan border).


* **Border:** Garis tepi pembatas elemen.


* **Margin:** Jarak ruang di *luar* batas elemen.


* **Properti Tambahan Wajib:** `box-sizing: border-box;` agar ukuran *padding* dan *border* tidak merusak total lebar/tinggi elemen.



---

### Selector & Combinator CSS

* **Combinator:**
* *Descendant Selector* (`div p`): Memilih semua elemen `<p>` di dalam `<div>`.


* *Child Selector* (`div > p`): Memilih elemen `<p>` yang merupakan anak langsung dari `<div>`.


* *Adjacent Sibling Selector* (`h1 + p`): Memilih satu elemen `<p>` tepat setelah `<h1>`.


* *General Sibling Selector* (`h1 ~ p`): Memilih seluruh elemen `<p>` saudara setelah `<h1>`.


* **Attribute Selector:** Memilih elemen berdasarkan atribut/nilainya (contoh: `input[type="text"]`).



---

## Bagian 02: JavaScript (JS)

### Sejarah & Cara Penulisan

* **Pengertian:** Bahasa pemrograman tingkat tinggi, dinamis, dan berbasis objek yang berjalan di *client-side* maupun *server-side* untuk membuat web interaktif.


* **Tokoh:** Diciptakan oleh **Brendan Eich** di Netscape dalam waktu 10 hari pada tahun 1995. Spesifikasi resminya distandardisasi oleh ECMA International sebagai **ECMAScript**.


* **Metode Pemanggilan JS:**
* **Inline JS:** Di dalam atribut event (contoh: `onclick="..."`).


* **Internal JS:** Di dalam tag `<script>` pada berkas HTML.


* **External JS (Disarankan):** Disimpan di berkas `.js` dan dipanggil menggunakan `<script src="script.js" defer></script>` (Gunakan atribut `defer` agar skrip dieksekusi setelah DOM selesai dimuat).





---

### Sintaks & Konsep Dasar JavaScript

1. **Pencetakan Output:** `console.log()` (konsol developer), `alert()` (pop-up), atau `document.getElementById().innerHTML` (memanipulasi DOM).


2. **Variabel Modern:**
* `let`: Variabel *block-scoped* yang nilainya dapat diubah (*re-assignable*).


* `const`: Variabel *block-scoped* yang nilainya bersifat tetap/konstan.


* `var`: Cara lama (*function-scoped*, rawan bug karena *hoisting*, sebaiknya dihindari).




3. **Operator Komparasi:**
* `==` (Sama dengan nilai, melakukan tipe konversi otomatis).


* `===` (**Sangat Direkomendasikan:** Sama dengan nilai DAN tipe data secara ketat).


* `!=` (Tidak sama dengan), `>` (Lebih besar), `<` (Lebih kecil), `>=` (Lebih besar/sama dengan), `<=` (Lebih kecil/sama dengan).




4. **Struktur Data Array:** Variabel untuk menyimpan banyak item berbasis indeks (dimulai dari `0`).


```javascript
let buah = ["Apel", "Mangga", "Jeruk"];
console.log(buah[0]); // Output: Apel

```


5. **Percabangan (`if...else`) & Perulangan (`for`):**
```javascript
// Percabangan
let nilai = 80;
if (nilai >= 75) {
    console.log("Lulus");
} else {
    console.log("Remedial");
}

// Perulangan
for (let i = 1; i <= 5; i++) {
    console.log("Perulangan ke-" + i);
}

```