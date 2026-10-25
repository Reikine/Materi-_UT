# Mata Kuliah: Visualisasi Data 

---

## Deskripsi Mata Kuliah

Mata kuliah **Visualisasi Data (MSIM4310)** dirancang untuk membekali mahasiswa dengan kompetensi penyajian, eksplorasi, serta transformasi data menjadi representasi visual yang komunikatif dan efektif. Pemanfaatan visualisasi berfungsi sebagai jembatan komunikasi dalam menerjemahkan data yang kompleks dengan mengoptimalkan sistem indra visual manusia agar data menjadi lebih hidup dan mudah dipahami. 

Lingkup materi mencakup prinsip dasar statistik deskriptif dan penyajian data numerik maupun spasial, teknik transformasi data untuk memenuhi asumsi pemodelan parametrik, metodologi identifikasi dan strategi penanganan data hilang, pemodelan hubungan sebab-akibat melalui analisis regresi linear sederhana, prapemrosesan serta visualisasi data teks tidak terstruktur, hingga perancangan aplikasi visualisasi data interaktif dan dasbor analitik berbasis web.

---

## Daftar Modul dan Deskripsi Singkat

* **Modul 01: Prinsip Dasar Penyajian Data**
    
    Membahas konsep ukuran pemusatan (rata-rata, median, modus) serta ukuran penyebaran data (jangkauan, keragaman, simpangan baku, dan koefisien keragaman) untuk mengukur tingkat homogenitas dan keterwakilan kelompok data. Modul ini juga menguraikan penyusunan tabel satu arah, tabulasi silang, tabel distribusi frekuensi (aturan Sturges), grafik statistik (batang, garis, pencar, lingkaran, ogive), serta kaidah kartografis dalam pembuatan peta tematik spasial.

* **Modul 02: Transformasi Data**

    Membahas teknik pengubahan skala pengukuran data asli menjadi bentuk skala baru guna mengatasi masalah heteroskedastisitas dan mendekati asumsi distribusi normal. Pembahasan meliputi konsep *Tukey’s Ladder of Powers*, identifikasi nilai pencilan (*outlier*), serta penerapan transformasi matematis seperti logaritma, pangkat, kebalikan (*reciprocal*), dan akar untuk melinierkan hubungan antarvariabel.

* **Modul 03: Data Hilang dan Penanganannya**

    Mengulas faktor penyebab ketiadaan data serta klasifikasi mekanisme data hilang: *Missing Completely at Random* (MCAR), *Missing at Random* (MAR), dan *Missing Not at Random* (MNAR). Modul ini membedah implikasi data hilang terhadap penurunan kekuatan statistik dan timbulnya bias, serta menjabarkan teknik penanganan melalui pendekatan penghapusan (*listwise* dan *pairwise deletion*) maupun teknik imputasi (penggantian rataan dan regresi).

* **Modul 04: Regresi Sederhana**

    Mempelajari penentuan pola hubungan sebab-akibat antara variabel bebas ($X$) dan variabel terikat ($Y$). Modul ini menyajikan dua pendekatan utama: pendekatan eksplorasi menggunakan metode garis median-median (*median-median line*) melalui pembagian tiga kelompok amatan, serta pendekatan konfirmasi menggunakan metode kuadrat terkecil (*Ordinary Least Squares* / OLS) yang dilengkapi evaluasi model melalui nisbah variansi sisaan, koefisien determinasi ($r^2$), dan koefisien korelasi ($r$).

* **Modul 05: Visualisasi Data Teks**
    Membahas metodologi konversi data teks tidak terstruktur menjadi bentuk kuantitatif melalui tahapan prapemrosesan: *case folding*, pembersihan simbol/angka, pemecahan kata (*tokenisasi*), penghapusan kata henti (*stopwords removal*), dan *stemming*. Modul ini mengulas struktur representasi teks seperti korpus, matriks dokumen-fitur (*Document-Feature Matrix* / DFM), pembuatan awan kata (*wordcloud*), serta pengelompokan hierarki dokumen menggunakan dendrogram.

* **Modul 06: Visualisasi Data Interaktif**

    Membahas tujuh alur proses visualisasi (*Acquire*, *Parse*, *Filter*, *Mine*, *Represent*, *Refine*, dan *Interact*) serta implementasi grafik interaktif dinamis menggunakan paket Shiny pada perangkat lunak R. Modul ini mencakup perancangan antarmuka pengguna (*User Interface* / UI), logika komputasi *backend* (*server*), mekanisme komputasi reaktif (*reactivity*), klasterisasi interaktif *K-Means*, hingga perancangan dasbor analitik satu layar.

---

## Glosarium

| Istilah | Definisi |
| --- | --- |
| **Ukuran Pemusatan (*Central Tendency*)** | Nilai numerik atau nilai tengah yang menggambarkan kondisi umum keterwakilan letak titik pusat amatan dalam sekumpulan data. |
| **Rata-rata (*Mean*)** | Jumlah seluruh nilai data amatan dibagi dengan banyaknya pengamatan; optimal digunakan pada data berskala numerik simetris tanpa pencilan. |
| **Median ($Q_2$)** | Nilai tengah yang membagi sekumpulan data terurut menjadi dua bagian yang sama besar; tidak terpengaruh oleh keberadaan nilai ekstrem atau pencilan. |
| **Modus** | Nilai amatan yang paling sering muncul atau memiliki frekuensi tertinggi dalam sekumpulan data. |
| **Jangkauan (*Range*)** | Selisih nilai antara amatan data tertinggi ($x_{\text{maks}}$) dengan amatan data terendah ($x_{\text{min}}$). |
| **Keragaman (*Variance*)** | Ukuran penyebaran yang dihitung dari jumlah kuadrat selisih antara tiap nilai amatan dengan rata-ratanya dibagi ukuran sampel atau populasi. |
| **Simpangan Baku (*Standard Deviation*)** | Nilai akar kuadrat dari keragaman yang menunjukkan tingkat penyebaran data dalam satuan pengukuran yang sama dengan data asli. |
| **Koefisien Keragaman (*Coefficient of Variation*)** | Rasio perbandingan relatif antara simpangan baku dengan rata-rata hitung yang dinyatakan dalam persentase untuk menilai homogenitas data. |
| **Plot Pencaran (*Scatter Plot*)** | Grafik titik-titik koordinat pasangan nilai $(X, Y)$ untuk mengamati kecenderungan pola keeratan dan arah hubungan linier antarvariabel. |
| **Transformasi Data** | Proses pengubahan skala pengukuran data asli menjadi bentuk skala baru guna memenuhi asumsi analisis statistika seperti normalitas dan homogenitas ragam. |
| **Heteroskedastisitas** | Kondisi pelanggaran asumsi di mana variansi sisaan atau galat tidak konstan di seluruh rentang amatan. |
| **Homoskedastisitas** | Asumsi dasar model linier yang menyatakan bahwa kesamaan variansi sisaan terpenuhi untuk setiap pengamatan. |
| ***Tukey’s Ladder of Powers*** | Metode transformasi bertingkat berbasis fungsi pemangkatan yang diperkenalkan Tukey (1957) untuk mengubah sebaran data miring (*skewed*) menjadi simetris atau normal. |
| **Pencilan (*Outlier*)** | Titik amatan ekstrem yang nilainya menyimpang jauh dari pola umum sebagian besar data dalam suatu distribusi. |
| **Data Hilang (*Missing Data*)** | Ketiadaan nilai yang tercatat atau terekam pada unit amatan untuk variabel tertentu dalam kumpulan data. |
| ***Missing Completely at Random* (MCAR)** | Mekanisme di mana peluang hilangnya data terjadi murni secara acak tanpa bergantung pada variabel yang teramati maupun variabel tak teramati. |
| ***Missing at Random* (MAR)** | Mekanisme di mana peluang hilangnya suatu nilai bergantung pada informasi dari variabel lain yang teramati dan lengkap dalam dataset. |
| ***Missing Not at Random* (MNAR)** | Mekanisme data hilang paling kompleks di mana penyebab hilangnya nilai berkaitan langsung dengan besaran nilai dari variabel itu sendiri. |
| ***Listwise Deletion*** | Prosedur penanganan data hilang dengan menghapus seluruh baris amatan jika terdapat nilai kosong pada salah satu variabel yang dianalisis. |
| ***Pairwise Deletion*** | Prosedur penanganan data hilang yang hanya mengabaikan nilai kosong secara lokal pada pasangan variabel yang sedang dihitung dalam uji spesifik. |
| **Substitusi Rataan (*Mean Substitution*)** | Metode pengisian nilai hilang menggunakan nilai rata-rata dari amatan yang tersedia pada variabel bersangkutan. |
| **Imputasi Regresi (*Regression Imputation*)** | Metode pengisian nilai hilang menggunakan nilai dugaan yang diperoleh dari model regresi variabel-variabel lengkap pendukung. |
| **Variabel Bebas ($X$)** | Variabel prediktor, penjelas, atau independen yang berperan sebagai faktor penyebab dalam model hubungan statistika. |
| **Variabel Terikat ($Y$)** | Variabel respons atau dependen yang berperan sebagai akibat dan nilainya dipengaruhi oleh variabel bebas; harus berupa variabel acak. |
| **Garis Median-Median (*Median-Median Line*)** | Pendekatan regresi eksplorasi untuk menentukan garis estimasi linier melalui pembagian data terurut menjadi tiga kelompok (bawah, tengah, atas) berdasarkan nilai median. |
| **Kuadrat Terkecil (*Ordinary Least Squares* / OLS)** | Metode estimasi parameter regresi konfirmasi yang meminimumkan jumlah kuadrat selisih antara nilai riil dengan nilai dugaan garis estimasi. |
| **Koefisien Determinasi ($r^2$)** | Proporsi variabilitas total peubah terikat $Y$ yang dapat diterangkan oleh hubungan linier dengan peubah bebas $X$ melalui persamaan regresi. |
| **Koefisien Korelasi ($r$)** | Indikator numerik berskala $-1 \le r \le 1$ yang mengukur tingkat keeratan serta arah hubungan linier antarvariabel. |
| **Prapemrosesan Teks (*Preprocessing*)** | Rangkaian tahapan standarisasi dan pembersihan dokumen teks mentah sebelum diubah ke dalam bentuk kuantitatif terstruktur. |
| ***Case Folding*** | Tahap prapemrosesan teks yang mengubah seluruh huruf kapital menjadi huruf kecil (*lowercase*) agar tidak terpengaruh sensitivitas huruf. |
| **Tokenisasi (*Parsing*)** | Proses pemecahan struktur kalimat atau teks panjang menjadi satuan kata-kata tunggal (*tokens*). |
| ***Stopwords Removal*** | Tahap pembersihan teks yang membuang kata-kata umum (seperti kata sambung/partikel) yang sering muncul namun tidak memuat informasi tematik. |
| ***Stemming*** | Proses penghapusan afiks (awalan, akhiran, sisipan) untuk mengembalikan setiap kata ke bentuk kata dasarnya. |
| **Korpus (*Corpus*)** | Himpunan atau kumpulan dokumen teks terstruktur yang memuat metadata pengamatan untuk keperluan analisis bahasa atau teks. |
| ***Document-Feature Matrix* (DFM)** | Matriks dua dimensi representasi data teks di mana baris mewakili dokumen dan kolom mewakili fitur frekuensi kata tunggal hasil ekstraksi. |
| **Awan Kata (*Wordcloud*)** | Visualisasi grafis kata di mana ukuran huruf dan ketebalan tampilan berbanding lurus dengan frekuensi kemunculan kata dalam korpus teks. |
| **Dendrogram** | Diagram pohon yang memvisualisasikan tingkatan kedekatan atau kemiripan karakteristik fitur antarobjek dalam analisis pengelompokan hierarki. |
| **Paket Shiny** | Paket komputasi pada perangkat lunak R yang memungkinkan pembuatan antarmuka aplikasi web interaktif tanpa harus menguasai bahasa web secara mendalam. |
| ***User Interface* (UI)** | Komponen aplikasi Shiny yang bertugas mendefinisikan tata letak visual antarmuka web, elemen masukan (*input*), serta tampilan luaran (*output*). |
| ***Server*** | Komponen aplikasi Shiny di sisi *backend* yang mengeksekusi instruksi logika komputasi data, pemodelan statistik, dan pembuatan grafik. |
| **Reaktivitas (*Reactivity*)** | Mekanisme efisiensi komputasi Shiny yang hanya mengeksekusi ulang fungsi atau kalkulasi pada bagian *input* yang mengalami perubahan nilai. |
| ***K-Means Clustering*** | Algoritma pembelajaran tak terarah (*unsupervised learning*) untuk mempartisi sekumpulan amatan ke dalam sejumlah $k$ kelompok berdasarkan kesamaan nilai. |
| **Dasbor Data (*Dashboard*)** | Tampilan antarmuka satu layar yang memuat rangkuman beberapa elemen visual analitik secara simultan untuk mempermudah perbandingan data. |
___