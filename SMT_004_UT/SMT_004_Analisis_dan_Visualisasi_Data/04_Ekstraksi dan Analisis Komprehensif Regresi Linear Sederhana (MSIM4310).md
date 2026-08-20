# Modul 4: Ekstraksi dan Analisis Komprehensif Regresi Linear Sederhana (Modul 04)
### Pendahuluan: Konseptualisasi Analisis Regresi
Dalam cakrawala penelitian ilmiah dan analisis data kuantitatif, analisis regresi menempati posisi strategis sebagai instrumen fundamental untuk memodelkan hubungan kausalitas antarvariabel. Sebagai akademisi, kita memahami bahwa kemampuan untuk mengidentifikasi dan mengukur hubungan sebab-akibat adalah prasyarat mutlak bagi pengambilan keputusan berbasis data ( evidence-based decision making ). Tanpa pemodelan yang presisi, fenomena empiris hanya akan tampak sebagai fluktuasi acak; regresi memberikan struktur matematis untuk memahami mekanisme di balik data tersebut.

Berdasarkan landasan teoretis pada Modul 04, analisis regresi didefinisikan sebagai metode untuk menentukan sifat hubungan antara satu variabel bebas ( $X$ ) dan satu variabel terikat ( $Y$ ). Berikut adalah dekonstruksi karakteristik variabel berdasarkan standar operasional statistika:

| Karakteristik | Variabel Bebas ($X$) | Variabel Terikat ($Y$) |
| :--- | :--- | :--- |
| **Terminologi** | Penjelas, Eksplanatorik, Independen | Dipengaruhi, Dependen |
| **Representasi Grafik** | Sumbu Horizontal (Absis) | Sumbu Vertikal (Ordinat) |
| **Sifat Stokastik** | Variabel tetap atau acak | **Wajib** berupa variabel acak (*random*) |

Eksistensi variabel  $Y$  sebagai variabel acak merupakan harga mati dalam validitas statistika, karena memungkinkan kita untuk melakukan inferensi probabilitas. Sebelum melangkah pada pembuktian matematis yang rigid, seorang analis yang bijak akan memulai dengan pendekatan eksplorasi untuk menangkap sinyal awal dari data.
___
### Analisa Regresi Cara Eksplorasi (Teknik Median-Median Line)
Pendekatan eksplorasi bertujuan untuk mendapatkan estimasi awal yang cepat dan intuitif. Metode ini memiliki keunggulan dalam hal resistensi terhadap pencilan ( robustness ) dibandingkan metode konfirmasi, sehingga sangat tepat digunakan pada tahap awal analisis untuk melihat tren umum.
#### Ilustrasi Kasus dan Visualisasi Data
Studi kasus ini menggunakan data dari 15 kota (Tabel 4.1, mulai dari Yogyakarta hingga Ngawi) yang memetakan  Biaya Iklan (  $X$  )  terhadap  Penghasilan (  $Y$  ) . Langkah pertama adalah mengonstruksi  Scatter Diagram  menggunakan perintah R: plot(x, y).

Berdasarkan visualisasi pada  Gambar 4.1 , terlihat sebuah pola yang jelas: peningkatan biaya iklan justru cenderung diikuti oleh penurunan penghasilan. Pola linear ini dipertegas pada  Gambar 4.2 , yang menunjukkan bahwa garis lurus dapat digunakan untuk mewakili sebaran titik-titik koordinat tersebut.

#### Prosedur Teknik Median-Median Line
Untuk membangun model secara eksploratif, kita menerapkan prosedur enam langkah berikut:
1. Pengurutan:  Pasangan data  $(X, Y)$  diurutkan berdasarkan nilai  $X$ .
2. Partisi:  Data dibagi menjadi tiga kelompok (Bawah, Tengah, Atas) dengan jumlah observasi sama ( $n=5$  per kelompok).
3. Pusat Massa (Median):  Dihitung nilai median untuk  $X$  dan  $Y$  pada tiap kelompok (lihat Tabel 4.2):
    * Kelompok Bawah ( $B$ ):  $(X_B=9.6, Y_B=31.2)$
    * Kelompok Tengah ( $T$ ):  $(X_T=13.0, Y_T=18.6)$
    * Kelompok Atas ( $A$ ):  $(X_A=15.8, Y_A=15.1)$
4. Kemiringan (  $b$  ):  Dihitung menggunakan rasio selisih median kelompok ujung:  $$b = \frac{Y_A - Y_B}{X_A - X_B} = \frac{15.1 - 31.2}{15.8 - 9.6} = -2.596774$$
5. Intersep (  $a$  ):  Dihitung sebagai rata-rata intersep dari ketiga titik median ( $a = \frac{a_A + a_T + a_B}{3}$ ):
    * $a_A = 15.1 - (-2.596774 \cdot 15.8) = 56.12903$
    * $a_T = 18.6 - (-2.596774 \cdot 13.0) = 52.35806$
    * $a_B = 31.2 - (-2.596774 \cdot 9.6) = 56.12903$
    * $a = (56.12903 + 52.35806 + 56.12903) / 3 = 54.87204$
6. Persamaan Final:   $\hat{Y} = 54.87204 - 2.596774X$ .
#### Evaluasi Metodologis:  
Garis ini (Gambar 4.3) hanya valid jika memenuhi aturan sepertiga titik pada kelompok ujung dan rentang  $X$  pada kelompok tersebut tidak melebihi setengah dari total rentang  $X$ . Jika kita memprediksi biaya iklan 20 dolar, model ini memberikan estimasi penghasilan sebesar  2.93656 . Namun, untuk mencapai akurasi matematis yang meminimalkan seluruh kesalahan kuadrat, kita harus beralih ke metode konfirmasi.
___
### Analisa Regresi Cara Konfirmasi (Metode OLS)
Metode Kuadrat Terkecil atau  Ordinary Least Squares  (OLS) merupakan "standar emas" dalam statistika inferensial. Prinsip utamanya adalah meminimalkan jumlah kuadrat sisaan ( $\sum e^2$ ), sehingga menghasilkan garis yang secara objektif paling mewakili seluruh titik data. OLS diakui sebagai  Best Linear Unbiased Estimator  (BLUE).
#### Parameter Matematis OLS
Dalam standar akademik, parameter model dihitung dengan notasi sigma sebagai berikut:  $$b = \frac{n \sum XY - (\sum X)(\sum Y)}{n \sum X^2 - (\sum X)^2}$$   $$a = \frac{(\sum Y)(\sum X^2) - (\sum X)(\sum XY)}{n(\sum X^2) - (\sum X)^2}$$

Berdasarkan akumulasi data pada Tabel 4.5, diperoleh nilai agregat:  $n=15$ ;  $\sum X=194.6$ ;  $\sum Y=335.3$ ;  $\sum XY=4103.65$ ;  $\sum X^2=2659.3$ ;  $\sum Y^2=8573.95$ .

Substitusi nilai tersebut menghasilkan:
* $b = -1.838349$
* $a = 46.21005$
* Persamaan Konfirmasi:  $\hat{Y} = 46.21005 - 1.838349X$
#### Analisis Komparatif Prediksi
Pada biaya iklan 20 dolar, OLS memprediksi penghasilan sebesar  9.44307 . Terdapat gap yang signifikan dibandingkan hasil eksplorasi (2.93656). Secara teoretis, hal ini disebabkan karena metode Median-Median hanya dipengaruhi oleh nilai tengah tiap partisi, sedangkan OLS sangat sensitif terhadap setiap deviasi titik. Sebagai contoh, observasi di Cirebon ( $X=13.9, Y=35.2$ ) yang memiliki nilai  $Y$  ekstrem tinggi bertindak sebagai penarik garis OLS ke atas, sementara metode eksplorasi cenderung meredam pengaruh pencilan tersebut melalui penggunaan median.
___
### Analisis Keselarasan Model dan Korelasi
Sebuah model regresi tidak memiliki nilai praktis jika tidak disertai dengan ukuran reliabilitas. Kita harus mengevaluasi seberapa besar variabilitas variabel dependen yang mampu dijelaskan oleh variabel independen.
#### Koefisien Determinasi ( $r^2$ ) dan Korelasi ( $r$ )
Melalui dekonstruksi variansi pada Tabel 4.6, diperoleh:
* $\text{Nisbah Variansi} = \frac{\text{Var(sisa)}}{\text{Var}(Y)} = \frac{44.890071}{77.062667} = 0.5825139$
* $r^2 = 1 - 0.5825139 = \mathbf{0.4174861}$  ( 41.75% )
* $r = \sqrt{r^2} = \mathbf{-0.6461316}$  (negatif, konsisten dengan arah  $b$ )
#### Interpretasi Pedagogis:  
Nilai  $r^2$  sebesar 41.75% berarti model mampu menjelaskan sekitar 42% keragaman penghasilan. Sebaliknya, sebesar  58.25%  sisanya merupakan sisaan ( residual ) yang tidak terjelaskan. Bagi seorang Dosen Senior, angka ini mengindikasikan bahwa fenomena penghasilan bersifat multikausal. Biaya iklan bukan satu-satunya faktor; variabel lain seperti lokasi minimarket atau kualitas layanan kemungkinan besar memiliki pengaruh signifikan, yang 
menyarankan perlunya pengembangan ke arah Regresi Linear Berganda di masa depan.
___
### Integrasi Teknologi: Implementasi dalam Software R
Dalam era  Big Data , efisiensi komputasi menjadi krusial. Namun, penggunaan perangkat lunak harus tetap berpijak pada pemahaman logika manual yang telah kita bahas.
#### Sintaks dan Verifikasi Output
Dalam lingkungan R, analisis dilakukan dengan fungsi lm (linear model):
* `model <- lm(y ~ x)`
* `summary(model)`
* `abline(46.078, -1.829)`

Output R menunjukkan nilai  Intercept (  $a$  ) = 46.078  dan  Slope (  $b$  ) = -1.829 . Terdapat perbedaan desimal tipis dengan kalkulasi manual ( $a=46.21, b=-1.838$ ). Hal ini bukan merupakan kesalahan, melainkan hasil dari  floating-point precision  yang jauh lebih tinggi pada sistem R dibandingkan pembulatan manual dua hingga lima desimal pada langkah-langkah sebelumnya. Visualisasi akhir pada  Gambar 4.4  menunjukkan garis regresi yang melintasi diagram pencar dengan tingkat keselarasan yang optimal.
___
### Simpulan dan Catatan Metodologis
Laporan ini telah mengonfirmasi validitas hubungan fungsional antara biaya iklan dan penghasilan melalui dua pendekatan yang saling melengkapi: Eksplorasi (Median-Median) untuk kecepatan dan ketahanan terhadap pencilan, serta Konfirmasi (OLS) untuk presisi matematis dan efisiensi statistik.
#### Sintesis Temuan:
* Hubungan Negatif:  Ditemukan korelasi negatif yang konsisten; peningkatan biaya iklan justru diikuti oleh penurunan penghasilan pada periode tersebut.
* Implikasi Bisnis:  Bagi manajemen minimarket, temuan ini adalah alarm strategis. Biaya yang dialokasikan pada media tradisional (radio, TV, majalah) tidak lagi efektif. Pelanggan kemungkinan besar telah bermigrasi ke ekosistem digital.
* Rekomendasi:  Perlu dilakukan evaluasi ulang strategi pemasaran dengan mengalihkan anggaran iklan ke media sosial atau platform video digital yang lebih relevan dengan perilaku konsumen saat ini.

Sebagai penutup, seorang analis harus memiliki fleksibilitas metodologis. Gunakanlah cara eksplorasi untuk memahami "ruh" dari data, dan gunakanlah OLS sebagai instrumen konfirmasi final untuk pengambilan kebijakan yang akurat dan dapat dipertanggungjawabkan secara ilmiah.

