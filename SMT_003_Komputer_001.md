# Modul 01: Pengenalan dan Instalasi Perangkat Lunak dan Lingkungan Pemrograman R
## Kegiatan Belajar: Perangkat Lunak dan Lingkungan Pemrograman R
### Definisi dan Karakteristik R
* **Bahasa Pemrograman:** R adalah bahasa untuk komputasi statistik dan grafis.
* **Ekosistem:** Bersifat open-source dengan dukungan komunitas besar melalui CRAN (Comprehensive R Archive Network).
* **Struktur Data:** Berbasis objek (Object-Oriented) yang efisien dalam mengolah matriks, vektor, dan data frame.

### Instalasi Perangkat Lunak
* **R Base:** Inti dari bahasa R yang menyediakan fungsi-fungsi dasar statistik.
* RStudio (IDE): Lingkungan pengembangan terintegrasi untuk mempermudah penulisan kode, visualisasi, dan manajemen workspace.
* **Prosedur:** Melibatkan konfigurasi path dan pemilihan mirror CRAN yang paling dekat dengan lokasi geografis pengguna untuk kecepatan unduh maksimal.

### Lingkungan Pemrograman R (RStudio Interface)
* **Source Editor:** Tempat menulis dan menyimpan skrip (`.R`).
* **Console:** Panel eksekusi perintah secara interaktif dan real-time.
* Environment/History: Menampilkan objek (variabel, fungsi, dataset) yang tersimpan dalam RAM serta log perintah sebelumnya.
* **Files/Plots/Packages/Help:** Panel multifungsi untuk manajemen direktori, tampilan grafik, instalasi library, dan dokumentasi fungsi.

### Manajemen Packages
* **Instalasi:** Menggunakan fungsi install.packages("nama_package").
* **Pemuatan:** Menggunakan fungsi library(nama_package).
* **Update:** Memastikan kompatibilitas versi antar dependensi perangkat lunak.

### Rangkuman
R merupakan standar industri untuk analisis statistik yang fleksibel.Kombinasi R Base dan RStudio menciptakan alur kerja (workflow) yang efisien bagi pengembang. Kekuatan utama terletak pada pengelolaan packages yang memungkinkan perluasan fungsionalitas sistem secara modular.

### Kunci Jawaban Tes Formatif 1
| No   | Jawaban                           | Alasan Teknis / Logika Program                                                                                                          |
| :--- | :-------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
|      |
| 1    | B. terbuka dan gratis             | Konsep Open Source pada R berarti kode sumber tersedia secara bebas untuk dimodifikasi dan didistribusikan tanpa biaya lisensi.         |
| 2    | C. keterangan mengenai software R | Setelah nomor versi, R menampilkan informasi mengenai nama kode versi (misal: "Shortstop Beagle") dan lisensi perangkat lunak.          |
| 3    | B. memulai atau menulis program   | Menu Source R code membuka jendela editor teks untuk menulis rangkaian perintah (skrip) secara permanen.                                |
| 4    | A. perintah tidak lengkap         | Tanda + muncul jika parser R mendeteksi adanya sintaks yang belum ditutup (misalnya kurung buka `(` tanpa kurung tutup `)`).            |
| 5    | D. help                           | Fungsi `help()` atau operator `?` digunakan untuk mengakses dokumentasi internal dan deskripsi fungsi dalam suatu package.              |
| 6    | A. ctrl-R                         | Pada jendela RGui editor, kombinasi tombol Ctrl + R adalah perintah standar untuk mengeksekusi baris kode ke dalam console.             |
| 7    | C. data frame                     | Data frame adalah struktur data tabular pada R; R membutuhkan format ini untuk mengedit data melalui interface grafis.                  |
| 8    | C. fix                            | Fungsi `fix(nama_objek)` akan memanggil jendela Data Editor secara otomatis untuk mengubah isi dari objek data yang ditentukan.         |
| 9    | A. sistem yang dirancang terpadu  | R disebut environment karena merupakan sistem koheren di mana data dikelola, dianalisis, dan divisualisasikan secara terpadu.           |
| 10   | A. Rgui configuration editor      | Pengaturan preferensi visual seperti jenis font, warna latar belakang, dan ukuran jendela dilakukan melalui menu konfigurasi pada RGui. |

___

# Modul 02: Mekanisme Kerja, Pembuatan Objek, dan Informasi dalam Sistem R
## Kegiatan Belajar 1: Mekanisme Kerja Sistem R
Fokus pada arsitektur operasional dan manajemen memori dalam lingkungan eksekusi R.
* **Interaksi Interpreter:** R bekerja sebagai sistem berbasis baris perintah (command-line) di mana setiap ekspresi dievaluasi secara langsung oleh engine R.
* **Manajemen Workspace:** Penyimpanan objek hasil komputasi dilakukan di dalam memori aktif (RAM). Pemahaman terhadap environment kerja sangat krusial untuk memastikan efisiensi pemrosesan data.
* **Workflow Eksekusi:** Proses input, evaluasi, output, dan pengulangan (Read-Eval-Print Loop) menjadi basis utama mekanisme kerja sistem ini.

### Kunci Jawaban Test Formatif 1
| No   | Jawaban                  | Deskripsi Logika Teknis                                                                                                  |
| :--- | :----------------------- | :----------------------------------------------------------------------------------------------------------------------- |
|      |
| 1    | A. tanda >               | Merupakan default command prompt pada konsol R yang menandakan interpreter siap menerima baris perintah baru.            |
| 2    | B. Nama 2                | Memenuhi naming convention R: harus dimulai dengan karakter alfabet. Karakter khusus (spasi, -, dsb) dilarang.           |
| 3    | C. 2 nama                | Salah karena melanggar aturan sintaksis; nama objek tidak diperbolehkan diawali dengan angka (numeric prefix).           |
| 4    | A. memori aktif atau RAM | R bekerja dengan prinsip in-memory processing, di mana objek disimpan di RAM untuk akses low-latency saat komputasi.     |
| 5    | D. case sensitive        | Sistem membedakan nilai ASCII huruf besar dan kecil, sehingga variabel A dan a menunjuk pada alamat memori yang berbeda. |

## Kegiatan Belajar 2: Pembuatan, Penayangan, serta Penghapusan Objek dalam R dan Informasi Bantuan online
Fokus pada manipulasi entitas data dan dokumentasi sistem.
* **Instansiasi Objek:** Mekanisme pembuatan variabel dan struktur data (vektor, matriks, dsb.) menggunakan operator penugasan (`<-` atau `=`).
* **Inspeksi Objek (Penayangan):** Penggunaan fungsi internal untuk melihat daftar objek yang aktif dalam memori (seperti fungsi `ls()`) serta memanggil isi objek ke konsol.
* **Manajemen Memori (Penghapusan):** Prosedur eliminasi objek yang tidak diperlukan (seperti fungsi `rm()`) untuk optimalisasi penggunaan sumber daya sistem.
* **Sistem Dokumentasi:** Pemanfaatan fitur bantuan online dan integrasi manual internal melalui sintaks `?` atau `help()` untuk memahami parameter fungsi dan struktur algoritma.

### Kunci Jawaban Test Formatif 2
| No   | Jawaban                      | Deskripsi Logika Teknis                                                                                                  |
| :--- | :--------------------------- | :----------------------------------------------------------------------------------------------------------------------- |
|      |
| 1    | A. umur <- 50 dan 50 -> umur | R mendukung operator assignment dua arah: kiri (`<-`) dan kanan (`->`) untuk menyimpan nilai ke memori.                  |
| 2    | A. ls()                      | Fungsi `ls()` (list) digunakan untuk menayangkan semua nama objek yang tersimpan dalam workspace aktif.                  |
| 3    | B. ls(pat = "y")             | Parameter `pat` (pattern) mencari substring "y" di posisi mana pun dalam nama objek (menggunakan regex).                 |
| 4    | C. ls(pat = "^y")            | Menggunakan regular expression `^`, yang membatasi pencarian hanya pada objek yang diawali dengan huruf "y".             |
| 5    | D. rm()                      | Fungsi `rm()` (remove) digunakan untuk menghapus objek dari memori RAM guna mengosongkan *resource*.                     |
| 6    | B. help() atau ?             | Merupakan perintah standar untuk mengakses dokumentasi bantuan teknis terkait fungsi atau paket tertentu.                |
| 7    | A. 60.5                      | Substitusi $x = 10$ ke fungsi: $f(x) = \frac{x^2 + 2x + 1}{2} = \frac{100 + 20 + 1}{2} = 60.5$.                          |
| 8    | D. 1 3 5 7 9 11 13 15 17 19  | Operasi vektor: setiap elemen $n \in [0, 9]$ dikenakan fungsi linear $2n + 1$.                                           |
| 9    | B. 68.5                      | Kalkulasi nilai rata-rata ($\bar{x}$): $\sum \frac{x_i}{n} = \frac{685}{10} = 68.5$.                                     |
| 10   | D. sort(x)                   | `min`, `sum`, dan `mean` adalah fungsi agregasi (skalar), sedangkan `sort` adalah transformasi yang menghasilkan vektor. |

___

# Modul 03: Data Dalam Sistem R
## Objek dan Manajemen Data dalam R
### Jenis Objek dan Operasi Aritmatika Dasar
Bagian ini berfokus pada struktur data fundamental yang digunakan untuk menyimpan informasi dalam memori.
* **Jenis-Jenis Objek:**
    * Vector: Struktur data dasar satu dimensi yang menyimpan elemen dengan tipe data yang sama (numeric, character, logical).
    * Matrix: Objek dua dimensi (baris x kolom) dengan tipe data homogen.
    * Data Frame: Struktur tabular dua dimensi di mana setiap kolom dapat memiliki tipe data yang berbeda (paling sering digunakan untuk dataset).
    * List: Objek yang mampu menampung berbagai jenis objek lainnya (vektor, matriks, bahkan list lain) dalam satu variabel.
    * Factor: Digunakan khusus untuk data kategorikal dengan level tertentu.
* **Karakteristik Objek:** Setiap objek didefinisikan oleh `mode` (tipe penyimpanan) dan `class` (tipe abstrak).
* **Operasi Aritmatika:** Implementasi operator standar seperti penambahan (`+`), pengurangan (`-`), perkalian (`*`), pembagian (`/`), perpangkatan (`^`), serta modulo (`%%`) dan integer division (`%/%`).

### Membaca dan Menulis File Data
Fokus pada interaksi antara lingkungan R dengan penyimpanan eksternal (Input/Output).
* **Membaca Data (Import):**
    * `read.csv()` / `read.table()`: Digunakan untuk mengambil data dari file teks atau spreadsheet.
    * Pengaturan parameter penting seperti `header` (nama kolom), `sep` (pemisah desimal/kolom), dan `stringsAsFactors`.
* **Menulis Objek (Export):**
    * `write.csv()` / `write.table()`: Menyimpan objek (biasanya Data Frame) dari lingkungan kerja R ke dalam media penyimpanan dalam format file tertentu.
    * Pemanfaatan fungsi `save()` dan `load()` untuk format internal R (`.RData`).

### Membangun dan Memanipulasi Data
Langkah teknis dalam pembentukan struktur data dari nol dan modifikasinya.
* **Fungsi Dasar Pembangun Data:**
    * `c()`: Fungsi concatenate untuk menggabungkan nilai menjadi vektor.
    * `seq()` dan `rep()`: Menghasilkan urutan angka dan pengulangan nilai secara sistematis.
    * `data.frame()`: Menggabungkan beberapa vektor menjadi satu tabel data terstruktur.
* **Manipulasi Data:**
    * Subsetting: Mengakses elemen tertentu menggunakan indeks `[]` atau operator `$`.
    * Transformasi: Mengubah tipe data (misal: dari numeric ke factor) atau melakukan kalkulasi antar kolom.
    * Filtering: Mengambil subset data berdasarkan kondisi logika tertentu.

___

# Modul 04: Pembuatan dan Manipulasi Objek Lanjutan
### Pembuatan Objek (Object Creation)
Tahap ini menjelaskan bagaimana variabel didefinisikan secara eksplisit agar sistem mengenali atributnya dengan tepat.
* **Penyebutan Atribut Eksplisit:** Mengatur karakteristik objek (seperti dimensi atau nama kolom) secara langsung saat objek dibuat.
* **Membangun Data:**
    * Menggunakan fungsi `matrix()` untuk menentukan jumlah baris (`nrow`) dan kolom (`ncol`).
    * Menggunakan `array()` untuk data multidimensi melebihi dua dimensi.
    * Pembentukan Data Frame dengan penamaan variabel yang terdefinisi sejak awal.

### Konversi dan Manipulasi Objek
Fokus pada fleksibilitas data (mengubah bentuk) dan optimasi struktur sesuai kebutuhan analisis.
* **Fungsi Konversi (Coercion):** Mengubah satu tipe objek ke tipe lain menggunakan prefix `as.`.
    * Contoh: `as.numeric()`, `as.character()`, `as.matrix()`, atau `as.data.frame()`.
* **Manipulasi Objek:*
    * Penggabungan: Menggunakan `rbind()` (penggabungan baris) dan cbind() (penggabungan kolom).
    * Indexing: Penggunaan operator `[]` untuk irisan data (slicing) dan `[[]]` untuk ekstraksi elemen list.
    * Pembersihan: Menghapus atau mengganti nilai dalam objek secara spesifik.

### Fungsi Aritmetika dan Fungsi Statistik Sederhana
Implementasi logika kalkulasi pada objek data yang telah dibuat.
* **Fungsi Aritmetika:** Selain operator standar, mencakup fungsi matematika seperti `sqrt()` (akar), `log()`, `exp()`, dan `abs()`.
* **Fungsi Statistik Dasar:**
    * Ukuran Pemusatan: `mean()` (rata-rata), `median()`.
    * Ukuran Penyebaran: `sd()` (standar deviasi), `var()` (varians), `range()`.
    * Ringkasan: `sum()` (total) dan `summary()` untuk melihat gambaran umum statistik dari sebuah objek/data frame secara instan.

___

# Modul 05: Vektor, Matriks, dan Array dalam R
### Pembuatan Vektor (Array Satu Dimensi)
Vektor adalah blok bangunan dasar di R. Pembahasan fokus pada cara pembuatan dan ekstraksi informasi dasarnya.
* **Pembuatan Vektor:** Menggunakan fungsi `c()`, `seq()`, atau `rep()`.
* **Identifikasi Objek:** 
    * Mengetahui tipe data dengan `class()` atau `mode()`.
    * Mengecek panjang data dengan `length()`.
* **Ekstraksi Vektor:** Teknik mengakses elemen tertentu menggunakan indeks positif, indeks negatif (untuk mengecualikan), atau logika (boolean filtering).

### Pembuatan Matriks (Array Dua Dimensi)
Matriks adalah sekumpulan data dengan tipe yang sama yang diatur dalam baris dan kolom.
* **Pembuatan Matriks:** Menggunakan fungsi `matrix()` dengan argumen utama `data`, `nrow` (jumlah baris), dan `ncol` (jumlah kolom).
* **Informasi Matriks:**
    * Dimensi: Menggunakan `dim()` untuk melihat baris x kolom.
    * Atribut: Menggunakan `attributes()` untuk melihat informasi tambahan.
* **Operasi Matriks:**
    * Operasi aritmatika antar matriks.
    * Operasi khusus seperti Transpose (`t()`).

### Pembuatan Array (Dimensi > 2)
Array adalah bentuk generalisasi dari matriks yang memiliki lebih dari dua dimensi.
* **Pembuatan Array:** Menggunakan fungsi `array()` dengan argumen `dim` untuk menentukan struktur (misal: 3 dimensi).
* **Akses Elemen:** Teknik indexing pada array multi-dimensi menggunakan koordinat `[baris, kolom, dimensi_n]`.
    * Contoh: `objek[1, 2, 1]` untuk mengakses baris 1, kolom 2 pada lapisan (array) pertama.

___

# Modul 6: Pembuatan dan Pengelolaan Grafik dalam R
### Fungsi Grafik dan Dasar Plotting
Materi ini membahas pondasi pembuatan visualisasi dan bagaimana R menangani jendela grafis.
* **Pembuatan Grafik Dasar:** Menggunakan fungsi utama `plot()` untuk membuat berbagai jenis grafik (scatter plot, line chart, dll).
* **Partisi Grafik:** Teknik membagi satu jendela tampilan menjadi beberapa area (layout) agar bisa menampilkan lebih dari satu grafik sekaligus. Fungsi yang sering digunakan adalah `par(mfrow = ...)` atau `layout()`.
* **Fungsi Terkait Grafik:** Penggunaan fungsi low-level plotting untuk menambahkan elemen pada grafik yang sudah ada, seperti `points()`, `lines()`, `text()`, dan `abline()`.

### Fungsi Tingkat Tinggi (High-Level Plotting)
Bagian ini berfokus pada fungsi yang secara otomatis menghasilkan grafik lengkap beserta komponen pendukungnya.
* **Fungsi Plot Spesifik:** Penggunaan fungsi otomatis untuk tipe data tertentu, seperti:
    * `hist()` untuk membuat histogram.
    * `boxplot()` untuk melihat sebaran data dan outlier.
    * `barplot()` untuk data kategorikal.
    * `pie()` untuk diagram lingkaran.
* **Pengaturan Parameter Grafik:** Penyesuaian atribut visual untuk mencapai tampilan yang diinginkan, meliputi:
    * Label: `main` (judul), `xlab` (sumbu X), `ylab` (sumbu Y).
    * Warna & Simbol: `col` (warna), `pch` (jenis simbol titik), `lty` (jenis garis).
    * Skala: `xlim` dan `ylim` untuk mengatur rentang sumbu.
___

# Modul 7: Penggunaan Dataset dan Import Data dalam R
### Akses Dataset Internal dan Format Umum (ASCII & Excel)
Bagian ini membahas cara memanfaatkan data yang sudah ada di R dan cara membaca file teks serta spreadsheet.
* **Dataset Internal R:**
    * Mengakses daftar data bawaan dengan fungsi `data()`.
    * Memahami karakteristik dataset menggunakan `str()` (struktur), `head()` (beberapa baris pertama), dan `summary()`.
* **Import Data ASCII (Teks):**
    * Penggunaan `read.table()` untuk file teks umum.
    * Penggunaan `read.csv()` untuk file Comma Separated Values.
* **Import Data Microsoft Excel:**
    * Pemanfaatan library eksternal (seperti `readxl`) untuk membaca format `.xls` atau `.xlsx` melalui fungsi `read_excel()`.

### Import Data dari Paket Statistik Lain
R dirancang untuk kompatibel dengan software statistik komersial lainnya melalui paket pendukung (seperti paket foreign atau haven).
* **Format SPSS:** Menggunakan fungsi untuk membaca file `.sav`.
* **Format SAS:** Menggunakan fungsi untuk membaca file `.sas7bdat` atau `.xpt`.
* **Format Stata:** Menggunakan fungsi untuk membaca file `.dta`.
* **Keuntungan Import:** Memungkinkan kolaborasi lintas platform tanpa perlu melakukan konversi manual yang berisiko merusak integritas data.
___

# Modul 8: Pengelolaan Distribusi Probabilitas dalam R
### Fungsi Distribusi Kontinu
Distribusi kontinu digunakan untuk data yang dapat mengambil nilai apa pun dalam rentang tertentu (seperti tinggi badan atau waktu). Contoh utamanya adalah Distribusi Normal.
* **Perhitungan Kuantil dan Peluang:** Menggunakan fungsi dengan prefix `q` (kuantil) dan `p` (peluang kumulatif). Contoh: `qnorm()` dan `pnorm()`.
* **Pembuatan Plot:** Memvisualisasikan kurva mulus distribusi menggunakan fungsi `curve()` atau `plot()` dikombinasikan dengan fungsi densitas (prefix `d`, contoh: `dnorm()`).
* **Pembangkitan Data Acak:** Simulasi data berdasarkan distribusi tertentu menggunakan prefix `r`.      
    * Contoh: `rnorm()` untuk membangkitkan angka acak berdistribusi normal.

### Fungsi Distribusi Diskrit
Distribusi diskrit digunakan untuk data yang berupa cacahan atau angka bulat (seperti jumlah kemunculan "gambar" pada lemparan koin). Contoh utamanya adalah Distribusi Binomial dan Poisson.
* **Perhitungan Kuantil dan Peluang:** Sama seperti kontinu, menggunakan prefix `q` dan `p`. Contoh: `qbinom()` untuk kuantil binomial atau `ppois()` untuk peluang Poisson.
* **Pembuatan Plot:** Berbeda dengan kontinu, plot distribusi diskrit biasanya berbentuk batang (needle plot atau barplot) karena nilainya terputus-putus.
* **Pembangkitan Data Acak:** Menggunakan prefix `r`. Contoh: `rbinom()` untuk mensimulasikan percobaan sukses/gagal atau `rpois()` untuk jumlah kejadian dalam interval waktu.

### Catatan Teknis R:
Setiap distribusi di R memiliki empat fungsi utama dengan prefix yang konsisten:
* **d** (density): Fungsi kepekatan peluang (PDF/PMF).
* **p** (probability): Fungsi distribusi kumulatif (CDF).
* **q** (quantile): Kebalikan dari CDF (mencari nilai berdasarkan peluang).
* **r** (random): Menghasilkan angka acak.
___

# Modul 9: Pengendalian Eksekusi Program dalam R
### Prosedur Perulangan (Looping)
Bagian ini fokus pada instruksi untuk menjalankan blok kode yang sama berulang kali berdasarkan kondisi atau urutan tertentu.
* **Pernyataan `for`:** Digunakan untuk melakukan iterasi pada elemen di dalam sebuah urutan (seperti vektor atau list). Paling umum digunakan karena jumlah iterasinya terdefinisi dengan jelas.
* **Pernyataan `while`:** Menjalankan blok kode selama kondisi yang ditentukan bernilai benar (`TRUE`). Sangat berguna jika jumlah pengulangan tidak diketahui sejak awal.
* **Pernyataan `repeat`:** Menjalankan blok kode secara terus-menerus hingga ditemukan perintah `break`. Ini adalah bentuk perulangan yang paling mendasar.
* **Kontrol Tambahan:** Penggunaan kata kunci `next` (melewati iterasi saat ini) dan `break` (menghentikan perulangan sepenuhnya).

### Prosedur Bersyarat (Conditional Statement)
Fokus pada pengambilan keputusan dalam program, di mana alur eksekusi akan berubah tergantung pada apakah sebuah kondisi terpenuhi atau tidak.
* **Pernyataan** `if...else`: Struktur dasar untuk memilih antara dua jalur eksekusi. Jika kondisi di dalam `if` benar, blok kode tersebut dijalankan; jika salah, blok `else` yang dijalankan.
* **Pernyataan** `if...else if...else`: Digunakan untuk menangani lebih dari dua kondisi yang berbeda secara berurutan.
* **Fungsi `ifelse()`:** Versi vektor dari pernyataan bersyarat yang sangat efisien dalam R, memungkinkan pengecekan kondisi pada seluruh elemen vektor sekaligus.
* **Pernyataan `switch()`:** Alternatif yang lebih bersih daripada banyak pernyataan `if...else` ketika Anda perlu memilih di antara banyak opsi berdasarkan nilai dari sebuah variabel.