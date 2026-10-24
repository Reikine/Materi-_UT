# Modul 05: Visualisasi Data Teks

## Kegiatan Belajar 1: Konsep Data Teks

### Konsep Dasar Data Teks

* **Karakteristik Alami:** Data teks merupakan sumber informasi potensial yang bersifat tidak terstruktur (*unstructured data*) dan bersumber dari format yang sangat bervariasi (PDF, docx, HTML, RTF, maupun hasil pindai digital).
* **Tantangan Pengolahan:** Keanekaragaman gaya penulisan (*style*), tata bahasa, panjang dokumen, serta format entri kategori yang berbeda untuk entitas yang sama memerlukan standarisasi dan prosedur pembersihan otomatis.
___

### Dasar Visualisasi Data Teks

**Prinsip Konversi:** Data teks diperlakukan sebagai *string* yang tidak dapat langsung dikenai operasi aritmetika. Untuk menganalisisnya, dokumen teks harus diurai menjadi unit komponen terkecil (kata-kata tunggal) agar dapat dikonversi ke dalam bentuk kuantitatif (frekuensi kemunculan, jumlah kombinasi kata, dan karakteristik numerik lainnya).

#### Langkah-langkah dalam Visualisasi Analisis Data Teks:

1\. **Pengambilan Teks:** Mengambil dokumen atau korpus teks yang akan dianalisis.

2\. **Normalisasi Teks (*Preprocessing*):** Menghilangkan rincian teks yang tidak relevan melalui tahapan:
* *Case Folding:* Mengonversi seluruh huruf menjadi huruf kecil (*upper case to lower case*) untuk menghindari perbedaan perhitungan akibat sensitivitas huruf kapital (*case sensitive*).
* *Pembersihan Karakter:* Menghapus angka, simbol, dan tanda baca (*punctuation*) yang tidak memuat makna esensial.
* *Penguraian (Parsing/Tokenisasi):* Memecah struktur kalimat menjadi daftar kata-kata tunggal (*tokens*).
* *Penghapusan Kata Henti (Stopwords Removal):* Mengeliminasi kata-kata umum yang sering muncul tetapi tidak membawa informasi tematik spesifik (misalnya kata hubung atau partikel).
* *Stemming:* Menghilangkan imbuhan (awalan, akhiran, infiks) untuk mengembalikan setiap kata ke bentuk kata dasarnya (*stem/root word*) agar bentuk variasi kata tidak terhitung secara terpisah.

3\. **Konversi Numerik:** Mengubah teks yang telah dinormalisasi menjadi representasi matriks atau angka.

4\. **Penerapan Metode Analisis Data:** Menerapkan algoritma atau metode statistika pada data hasil konversi.

5\. **Interpretasi Hasil:** Menginterpretasikan luaran yang diperoleh sesuai dengan konteks dokumen aslinya.

> **Ilustrasi Alur Prapemrosesan Teks (*Preprocessing Pipeline*):**
> ```text
> "Data Mining adalah Ilmu yang HEBAT!" (Teks Asli)
>                 │
>                 ▼  (Case Folding & Cleaning)
> "data mining adalah ilmu yang hebat"
>                 │
>                 ▼  (Tokenisasi / Parsing)
> ["data", "mining", "adalah", "ilmu", "yang", "hebat"]
>                 │
>                 ▼  (Stopwords Removal & Stemming)
> ["data", "mining", "ilmu", "hebat"] (Fitur Bersih Siap Analisis)
> 
> ```
> 
> 

#### Struktur Representasi Data Teks:

* **Vektor Karakter (*Character Vector*):** Representasi dasar teks dalam bentuk larik *string*.
* **Token (*Bag-of-Words* / *Multiset*):** Kumpulan kata-kata tunggal yang diekstrak dari vektor karakter, di mana tata bahasa dan urutan kata diabaikan namun frekuensi kemunculannya tetap dipertahankan.
* **Korpus (*Corpus*):** Kumpulan atau himpunan terstruktur dari beberapa dokumen teks yang memuat informasi metadata pengamatan.
___

### Implementasi ke Dokumen: Matriks Dokumen-Fitur (*Document-Feature Matrix* / DFM)

**Konsep DFM:** Struktur matriks dua dimensi yang merangkum data teks, di mana setiap **baris** mewakili satu dokumen dan setiap **kolom** mewakili fitur (*feature*) berupa kata tunggal hasil ekstraksi.

**Fungsi DFM:** Digunakan untuk mengidentifikasi fitur kata yang paling sering muncul (*top features*) di dalam dokumen.

**Pentingnya Tahap Prapemrosesan:** Tanpa proses normalisasi yang tepat, matriks DFM akan didominasi oleh derau (*noise*) seperti tanda baca, angka, atau kata henti (*stopwords*) yang tidak memberikan informasi substansial.

> **Ilustrasi Bentuk Matriks Dokumen-Fitur (DFM):**
> ```text
>               | Kata 1 (data) | Kata 2 (analisis) | Kata 3 (model) |
> --------------+---------------+-------------------+----------------+
> Dokumen 1     |       2       |         1         |       0        |
> Dokumen 2     |       0       |         3         |       1        |
> Dokumen 3     |       1       |         0         |       2        |
> 
> ```
> 
> 
___

## Kegiatan Belajar 2: Visualisasi Data Teks

### Konsep dan Prinsip Kerja *Wordcloud* (Awan Kata)

**Definisi:** Bentuk representasi grafis sederhana yang menyajikan kumpulan kata-kata penting penyusun dokumen dalam wujud awan kata.

**Prinsip Visual:** Ukuran font dan ketebalan tampilan setiap kata berbanding lurus dengan frekuensi kemunculannya di dalam dokumen (semakin sering suatu kata disebut, semakin besar dan mencolok kata tersebut ditampilkan).

**Parameter Visualisasi:** Tampilan awan kata dapat diperkaya melalui variasi orientasi/rotasi kata serta gradasi warna (*palette*) untuk memberikan penekanan visual yang lebih informatif.

> **Ilustrasi Konseptual *Wordcloud*:**
> ```text
>        [ PENDIDIKAN ]
>    ANALISIS      data
> STATISTIKA   [ MATA ]   belajar
>      MODEL    modul   REGRESI
> 
> ```
> 
> 
> *(Kata dengan ukuran huruf lebih besar mencerminkan frekuensi kemunculan yang lebih tinggi di dalam korpus teks).*
___

### Manfaat dan Alasan Penggunaan *Wordcloud*

Visualisasi berbasis teks menawarkan cara cepat dan efisien untuk mengekstrak intisari data kualitatif dibandingkan menelaah tabel numerik atau membaca ratusan halaman dokumen:

1. **Memahami Masalah Pelanggan:** Mengidentifikasi secara instan keluhan, kebutuhan, atau topik utama yang berulang kali disampaikan pelanggan melalui media sosial atau ulasan terbuka.
2. **Mempercepat Pelaporan Bisnis:** Membantu pembuat kebijakan menangkap poin-poin krusial dari laporan panjang secara cepat tanpa harus membaca narasi baris demi baris.
3. **Menyederhanakan Teknik Data:** Menyajikan temuan kualitatif dalam format yang mudah dipahami oleh audiens non-teknis tanpa memerlukan penjelasan statistika yang rumit.
4. **Menelusuri Pola dalam Data:** Membantu mengidentifikasi pola kunci serta keterkaitan istilah penting dari data teks yang sulit dirangkum oleh grafik numerik konvensional.
5. **Optimasi Mesin Pencari (*Search Engine Optimization*):** Menemukan kata kunci populer yang sering dicari pengguna untuk meningkatkan keterlihatan informasi institusi atau perusahaan.
___

### Analisis Lanjutan Struktur Teks

1\. **Kerapatan Matriks Dokumen-Fitur (*Sparsity*)**
* Matriks DFM umumnya bersifat *sparse* (memiliki proporsi sel bernilai nol yang sangat tinggi), yang menunjukkan bahwa sebagian besar kata hanya muncul pada dokumen-dokumen tertentu dan tidak tersebar merata di seluruh korpus.

2\. **Pengelompokan Hierarki Teks (*Hierarchical Clustering*)**
* **Konsep:** Metode untuk mengelompokkan dokumen berdasarkan kedekatan atau kemiripan fitur kata yang dikandungnya menggunakan matriks jarak (*distance matrix*).
* **Dendrogram (*Cluster Dendrogram*):** Diagram pohon yang memvisualisasikan tingkatan kesamaan antardokumen. Dokumen yang berada dalam cabang yang sama menunjukkan tingkat kemiripan konten yang lebih tinggi.

> **Ilustrasi Struktur *Cluster Dendrogram*:**
> ```text
> Tinggi 
>   ▲       ┌─── Doc 1 (Topik Statistik)
>   │   ┌───┤
>   │   │   └─── Doc 2 (Topik Statistik)
>   │   │
>   └───┴─────── Doc 3 (Topik Geografi)
>       └─── Jarak Kemiripan Antarkelompok ──►
> 
> ```
> 
>
___