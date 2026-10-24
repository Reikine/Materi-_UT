# Modul 03: Data Hilang dan Penanganannya

## Kegiatan Belajar 1: Definisi dan Karakteristik Data Hilang

### Data Hilang

#### Definisi:
Data hilang (*missing data*) atau nilai hilang (*missing value*) merupakan ketiadaan nilai data yang tercatat atau terekam pada pengamatan untuk suatu variabel tertentu.

#### Faktor Penyebab Terjadinya Data Hilang:
1. **Ketidakikutsertaan atau Penolakan Responden (*Non-respons*):** Terjadi karena adanya faktor sensitivitas atau privasi (misalnya keengganan menjawab besaran pendapatan), responden tidak mengetahui jawaban dari instrumen yang ditanyakan, atau responden berhalangan dalam pengukuran berulang.
2. **Kondisi Objek Pengamatan Rusak atau Tidak Dapat Diukur:** Kegagalan pencatatan akibat alat ukur rusak atau objek yang diamati mengalami kendala fisik.
3. **Kesalahan Peneliti:** Terjadi saat pengumpulan data di lapangan atau kesalahan entri saat input data ke sistem.

#### Mekanisme Data Hilang (Rubin, 1976; Graham et al., 2003):
1\. ***Missing Completely at Random* (MCAR):**
* Peristiwa hilangnya data sama sekali tidak bergantung pada variabel yang diamati maupun variabel yang tidak teramati.
* Pola hilangnya data terjadi murni secara acak dan tidak memiliki hubungan dengan fenomena yang sedang diteliti.
* Analisis data pada kondisi MCAR tidak menghasilkan pendugaan yang bias meskipun data hilang tersebut tidak ditangani, namun situasi ini sangat jarang ditemui dalam penelitian riil.

2\. ***Missing at Random* (MAR):**
* Hilangnya nilai pada suatu variabel bergantung pada nilai variabel lain yang teramati dan diketahui dalam kumpulan data.
* Pola data hilang dapat dimodelkan atau diprediksi menggunakan variabel-variabel penjelas lainnya.
* Analisis langsung tanpa penanganan akan menimbulkan bias, sehingga nilai yang hilang sebaiknya diduga terlebih dahulu berdasarkan informasi variabel lengkap yang tersedia.

3\. ***Missing Not at Random* (MNAR):**
* Hilangnya data berkaitan langsung dengan nilai dari variabel yang tidak teramati itu sendiri atau alasan tak terukur di luar kendali.
* Merupakan kondisi data hilang yang paling rumit dan sulit ditangani karena penyebab hilangnya data melekat pada nilai variabel tersebut.

> **Ilustrasi Perbedaan Mekanisme Data Hilang:**
> ```text
> [Variabel Y] ────(Ada Data Hilang)────┐
>                                      ├─► MCAR: Hilang murni acak (tak ada kaitan dengan X atau Y)
> [Variabel X] (Variabel Teramati) ────┤
>                                      └─► MAR: Hilangnya Y berkaitan dengan nilai pada X yang teramati
> 
> [Variabel Y yang Hilang] ──────────────► MNAR: Hilangnya Y berkaitan langsung dengan nilai Y itu sendiri
>                                                (contoh: orang berpendapatan sangat tinggi enggan lapor gaji)
> 
> ```
> 
> 
___

### Implikasi Data Hilang dalam Analisis dan Validitas Hasil Inferensia

Keberadaan data hilang menimbulkan berbagai konsekuensi serius terhadap validitas pengujian dan kesimpulan statistik:

1. **Mengurangi Kekuatan Statistik (*Statistical Power*):** Berkurangnya jumlah pengamatan efektif memperkecil peluang uji statistik untuk menolak hipotesis nol yang salah, sehingga nilai statistik hitung cenderung mengecil dan berujung pada kegagalan menolak hipotesis nol.
2. **Meningkatkan Galat Baku (*Standard Error*):** Penurunan ukuran sampel secara langsung memperbesar nilai galat baku dari penduga parameter.
3. **Menimbulkan Bias dalam Estimasi Parameter:** Pengabaian data hilang dapat menyebabkan nilai penduga statistik menyimpang secara sistematis dari nilai parameter populasi yang sebenarnya.
4. **Mengurangi Keterwakilan Sampel (*Representativeness*):** Struktur data yang tidak lengkap melemahkan kapasitas generalisasi hasil penelitian ke tingkat populasi.
5. **Mempersulit Prosedur Analisis:** Sebagian besar metode analisis statistika baku dirancang dengan asumsi data amatan berstruktur lengkap.

#### Prinsip Pencegahan Data Hilang dalam Perencanaan Studi (Kang, 2013):
* Membatasi lingkup pengumpulan data hanya pada informasi penting guna meminimalkan beban kunjungan.
* Menyusun prosedur penelitian, metode penyaringan, dan pedoman komunikasi lapangan yang baku.
* Menyelenggarakan pelatihan terstandarisasi bagi seluruh surveyor sebelum kegiatan lapangan dimulai.
* Menjalankan pra-survei berskala kecil untuk mengidentifikasi potensi kendala pengumpulan data lebih awal.
* Menetapkan prioritas pengawasan ketat terhadap variabel-variabel inti yang tidak boleh kosong.
* Memantau responden yang memiliki risiko tinggi hilang tindak lanjut secara proaktif.
* Mendokumentasikan alasan spesifik apabila responden mengundurkan diri untuk pertimbangan analisis inferensia.
___

## Kegiatan Belajar 2: Teknik Penanganan Data Hilang

### Teknik-Teknik Penanganan Data Hilang

Sebagai alternatif selain metode pengisian, analisis statistik yang kekar (*robust*) terhadap data hilang dapat digunakan apabila pelanggaran asumsi tergolong ringan. Namun, untuk penerapan umum, dikembangkan teknik-teknik penanganan data hilang berikut:

#### Teknik Sederhana
1\. **Penghapusan Kasus (*Listwise* atau *Case Deletion* / *Complete Case Analysis*):**
* **Mekanisme Kerja:** Menghilangkan seluruh baris amatan pengamatan apabila terdapat nilai hilang pada salah satu variabel yang diteliti, sehingga analisis hanya memanfaatkan unit amatan yang lengkap.
* **Karakteristik & Syarat:** Pendekatan ini menghasilkan pendugaan parameter yang tidak bias jika asumsi **MCAR** terpenuhi dan ukuran sampel yang tersisa masih memadai. Jika asumsi MCAR dilanggar, metode ini menghasilkan pendugaan yang bias serta membuang banyak informasi.

2\.**Penghapusan Berpasangan (*Pairwise Deletion* / *Available Case Analysis*):**
* **Mekanisme Kerja:** Pengabaian nilai hilang hanya diterapkan secara lokal pada pasangan variabel yang sedang dihitung dalam analisis spesifik, tanpa menghapus keseluruhan baris pengamatan.
* **Kelebihan & Kelemahan:** Mempertahankan lebih banyak informasi amatan dibanding *listwise deletion*, namun menyebabkan ketidakkonsistenan ukuran sampel dan galat baku antarkomponen variabel, serta dapat menghasilkan matriks interkorelasi yang tidak definitif positif (*not positive definite*). Direkomendasikan untuk mekanisme **MCAR** dan **MAR**.

3\.**Penggantian dengan Rataan (*Mean Substitution*):**
* **Mekanisme Kerja:** Mengisi nilai data yang hilang pada suatu variabel menggunakan nilai rata-rata (*mean*) dari kelompok pengamatan yang ada pada variabel tersebut.
* **Karakteristik & Kelemahan:** Menghasilkan perkiraan yang wajar jika persentase data hilang sangat kecil. Akan tetapi, metode ini tidak menambah variabilitas riil, menekan varians variabel, dan memperbesar ukuran sampel semu sehingga menyebabkan pendugaan galat baku yang terlalu rendah (*underestimate error*). Cukup dapat diterapkan pada mekanisme **MCAR** dan **MAR**.

4\.**Pengisian dengan Regresi (*Regression Imputation*):**
* **Mekanisme Kerja:** Memanfaatkan variabel-variabel pendukung yang lengkap sebagai prediktor untuk membangun model regresi, kemudian nilai prediksi dari model tersebut diisikan ke dalam variabel yang memiliki data hilang.
* **Karakteristik & Kelemahan:** Menghubungkan estimasi data hilang secara fungsional dengan informasi kovariat lain sehingga sangat disarankan pada mekanisme **MAR**. Namun, karena nilai dugaan tidak memuat komponen galat acak (ragam sisaan nol), metode ini tetap menghasilkan nilai galat baku yang terlalu rendah (*underestimate*).

> **Ilustrasi Visual Perbedaan Penghapusan (*Deletion*):**
>
> Katakanlah kita memiliki data 3 responden ($R_1, R_2, R_3$) pada Variabel $X$ dan $Y$ (tanda `?` artinya data hilang):
> * Data Asli: $R_1(10, 5), R_2(12, ?), R_3(?, 8)$
> * **Listwise Deletion:** Menghapus seluruh baris yang ada tanda tanya -> Hanya tersisa $R_1(10, 5)$. Baris 2 dan 3 dibuang total.
> * **Pairwise Deletion:** Saat menghitung korelasi antara $X$ dan $Y$, baris 2 & 3 diabaikan lokal. Namun saat menghitung rata-rata $X$ saja, nilai $10$ dan $12$ dari $R_1$ & $R_2$ tetap dipakai (sampel berubah-ubah tergantung variabel yang diuji).
> 
___