# Panduan Komprehensif Prinsip Dasar Penyajian Data (MSIM4310 - Modul 01)
### Pendahuluan: Strategi dan Fungsi Data dalam Pengambilan Keputusan
Data adalah aset informatif yang bertindak sebagai instrumen vital dalam arsitektur pengambilan keputusan. Penyajian data yang strategis memungkinkan transformasi data mentah menjadi kecerdasan organisasional yang mampu memecahkan masalah kompleks secara presisi. 

Empat peran fundamental dalam siklus manajemen:
1. Pengambilan Keputusan
2. Perencanaan dan Penelitian
3. Implementasi
4. Evaluasi
___
### Central Tendency
#### Rata-rata (Mean)  
 * Merupakan jumlah seluruh nilai amatan dibagi dengan total amatan.
 * Rumus:   $\bar{X} = \frac{\sum X_i}{n}$
 * Evaluasi Penggunaan:  Mean ideal digunakan pada data berskala numerik (interval/rasio) dengan distribusi simetris dan tanpa kehadiran  outlier .
#### Median (  $Q_2$  )
* Nilai tengah yang membagi data menjadi dua bagian sama besar setelah diurutkan.
* Logika Perhitungan:  Untuk data ganjil, posisi median berada pada  $k = \frac{n+1}{2}$ . Untuk data genap ( $n$  genap), formulasi matematis yang digunakan adalah:  $$Median = \frac{X_k + X_{k+1}}{2}, \text{ di mana } k = \frac{n}{2}$$
#### Modus
* Nilai dengan frekuensi kemunculan tertinggi, sangat efektif untuk data skala nominal dan ordinal. 
___
### Dispersion
#### Range  
* Selisih antara nilai maksimum ( $x_{max}$ ) dan minimum ( $x_{min}$ ).
* Catatan Kritis:   Range  adalah metrik yang sangat tidak stabil (unstable) karena hanya melibatkan dua amatan ekstrem dan sepenuhnya mengabaikan distribusi internal data.
#### Keragaman (Variance) dan Simpangan Baku (Standard Deviation)
* Varians:  Rata-rata kuadrat penyimpangan data dari pusatnya. Untuk populasi ( $\sigma^2$ ) dan sampel ( $s^2$ ).
* Simpangan Baku (  $s$  ):  Akar kuadrat dari varians. Metrik ini lebih mudah diinterpretasikan karena memiliki satuan yang identik dengan data asli.
#### Koefisien Keragaman (KK):
* Rumus:   $CV = \frac{s}{\bar{X}} \times 100\%$
* Kegunaan:  Alat perbandingan variabilitas antara dua kelompok dengan rata-rata atau unit yang berbeda
___
### Bentuk Penyajian Data: Tabel dan Distribusi Frekuensi
#### Strukturasi Data
* Tabel Satu Arah (One-Way Table):  Menyajikan informasi berdasarkan satu karakteristik saja.
* Tabulasi Silang (Two-Way Table):  Digunakan untuk merangkum hubungan dua variabel secara bersamaan. Metode ini dapat diimplementasikan jika:
    * (a) Satu variabel kualitatif dan satu variabel kuantitatif.
    * (b) Kedua variabel bersifat kualitatif.
    * (c) Kedua variabel bersifat kuantitatif.
#### Prosedur Distribusi Frekuensi (Data Kuantitatif)
* Penentuan Range (R):  Nilai tertinggi dikurangi nilai terendah.
* Banyak Kelas (k):  Menggunakan Aturan Sturges:  $k = 1 + 3,3 \log n$ .
* Lebar Interval (i):  Dihitung dengan  $i = R/k$ .
* Batas Kelas:  Penetapan batas bawah dan batas atas yang konsisten.
* Frekuensi:  Perhitungan frekuensi absolut, kumulatif, dan relatif.
___
### Visualisasi Grafis dan Prosedur Pemilihan
#### Katalog Visual Utama
* Line Chart: Memantau pertumbuhan, tren, atau fluktuasi sepanjang deret waktu.
* Peta: Visualisasi data berbasis lokasi (spasial).
* Bar Graph: Membandingkan nilai atau frekuensi antar kategori.
* Scatter Plot: Mengidentifikasi pola hubungan (korelasi) antar dua variabel kuantitatif.
* Pie Chart: Menunjukkan proporsi atau persentase dari satu totalitas.
* Ogive: Menampilkan distribusi frekuensi kumulatif.
#### Prosedur Standar Pemilihan
* Data Kualitatif:  Gunakan tabel frekuensi, persentase, grafik batang, atau grafik lingkaran ( pie chart ).
* Data Kuantitatif:  Lebih fleksibel, mencakup diagram batang-daun, histogram, plot titik ( dot plot ),  scatter plot , hingga ogive untuk analisis kumulatif.
___
### Penyajian Data Spasial: Kaidah Kartografis dan Pemetaan Tematik
#### Analisis Variabel Visual dan Tingkat Persepsi
* Persepsi Asosiatif:  Memberikan kesan setingkat. Contohnya adalah variabel  Bentuk (Shape) .
* Persepsi Order (Tingkatan):  Menunjukkan hirarki atau urutan. Contohnya adalah variabel  Nilai (Value/Gelap-terang) .
* Persepsi Kuantitatif:  Menunjukkan besaran angka. Contohnya adalah variabel  Ukuran (Size) .Selain variabel dasar, variabel modern seperti  transparency ,  shadow , dan  animation  kini sering digunakan untuk memperkuat dimensi data.
#### Elemen Wajib Peta Tematik
1. Judul Peta dan Skala.
2. Legenda dan Arah Utara.
3. Grid dan Graticule  (untuk referensi koordinat).
4. Angka Koordinat Geografis.
5. Inset (Petunjuk Letak Peta) .
6. Sumber Data dan  Batas Administrasi .
7. Nama Pembuat Peta.Teknologi modern memungkinkan pengolahan ini secara presisi melalui perangkat lunak seperti  ArcView, ArcGIS,  atau  Open Geo Suit .
___
### Analisis Perbandingan Kelompok Data
#### Evaluasi Komparatif
* Analisis Kurva:  Kurva yang sempit dan tajam menunjukkan data yang homogen dengan variansi kecil. Sebaliknya, kurva yang lebar menunjukkan data yang heterogen dengan variansi besar.
* Aplikasi Koefisien Keragaman (KK):  Pada studi kasus konsumsi rumah tangga, ditemukan KK Perkotaan sebesar 9,22% dan KK Perdesaan sebesar 24,07%. Karena KK Perkotaan lebih kecil, dapat disimpulkan secara statistik bahwa pengeluaran konsumsi di perkotaan lebih homogen (merata) dibandingkan di perdesaan.Integrasi antara presisi ukuran numerik dan ketepatan penyajian visual merupakan kunci utama dalam menghasilkan analisis data profesional yang kredibel dan bermakna.

