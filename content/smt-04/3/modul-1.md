# Modul 01: Prinsip Dasar Penyajian Data

## Kegiatan Belajar 1: Ukuran Pemusatan dan Penyebaran Data

### Ukuran Pemusatan Data

Ukuran pemusatan data (*central tendency*) atau nilai tengah merupakan nilai numerik yang menggambarkan kondisi umum dari sebagian besar amatan dalam sekumpulan data. Ukuran ini digunakan untuk menyatakan keterwakilan letak titik pusat data.

1\. **Rata-rata (*Mean*)**
* **Definisi:** Jumlah semua nilai data dibagi dengan banyaknya data.
* **Rumus:**

$$\bar{X} = \dfrac{\sum_{i=1}^n X_i}{n}$$

dengan $X_i$ adalah nilai amatan ke-$i$ dan $n$ adalah banyaknya data.
* **Kondisi Penggunaan:** Sangat tepat digunakan apabila data berskala numerik (interval atau rasio), bentuk sebaran datanya simetris, serta tidak terdapat nilai ekstrem atau pencilan (*outlier*).

2\. **Median ($Q_2$)**
* **Definisi:** Nilai yang membagi sekumpulan data yang telah diurutkan menjadi dua bagian yang sama besar.
* **Formulasi Data Tunggal:**
    * Untuk $n$ ganjil: $\text{Median} = X_k$, dengan $k = \dfrac{n+1}{2}$
    * Untuk $n$ genap: $\text{Median} = \dfrac{X_k + X_{k+1}}{2}$, $dengan k = \dfrac{n}{2}$

* **Kondisi Penggunaan:** Sangat baik digunakan apabila data berskala ordinal atau data numerik yang sebarannya tidak simetris (memiliki nilai pencilan/ekstrem), karena nilai median tidak terpengaruh oleh besarnya amatan ekstrem.

3\. **Modus**
* **Definisi:** Nilai yang paling sering muncul atau memiliki frekuensi tertinggi dalam sekumpulan data.
* **Karakteristik & Penggunaan:** Tidak dipengaruhi oleh nilai ekstrem. Modus terutama berguna untuk menentukan ukuran pemusatan pada data berskala nominal dan ordinal.
___

### Ukuran Penyebaran Data

Ukuran penyebaran data digunakan untuk menganalisis pemencaran, penyimpangan, atau variabilitas amatan data dari nilai rata-ratanya. Semakin kecil nilai ukuran penyebaran, semakin representatif rata-rata dalam mewakili data.

1\. **Jangkauan (*Range*)**
* **Definisi:** Selisih antara nilai amatan data tertinggi ($x_{\text{maks}}$) dan nilai amatan terendah ($x_{\text{min}}$).
* **Rumus:**
$$\text{Range} = x_{\text{maks}} - x_{\text{min}}$$

2\. **Keragaman (*Variance*) dan Simpangan Baku (*Standard Deviation*)**
* **Definisi Keragaman:** Ukuran penyimpangan yang dihitung dari jumlah kuadrat selisih antara nilai amatan dengan rata-ratanya, kemudian dibagi dengan total amatan.
* Keragaman Populasi:

$$\sigma^2 = \dfrac{\sum_{i=1}^N (x_i - \mu)^2}{N}$$

* Keragaman Sampel:

$$s^2 = \dfrac{\sum_{i=1}^n (x_i - \bar{x})^2}{n-1} = \dfrac{\sum_{i=1}^n x_i^2 - \dfrac{(\sum_{i=1}^n x_i)^2}{n}}{n-1}$$

* **Simpangan Baku (*Standard Deviation*):** Akar kuadrat dari nilai keragaman yang digunakan agar satuan pengukuran kembali sama dengan satuan data asli.
* Simpangan Baku Sampel:

$$s = \sqrt{s^2} = \sqrt{\dfrac{\sum_{i=1}^n (x_i - \bar{x})^2}{n-1}}$$

3\. **Koefisien Keragaman (*Coefficient of Variation* / KK)**
* **Definisi:** Perbandingan relatif antara simpangan baku dengan nilai rata-rata hitung yang dinyatakan dalam persentase.
* **Rumus:**

$$CV = \dfrac{s}{\bar{X}} \times 100\%$$

* **Fungsi:** Digunakan untuk membandingkan tingkat variabilitas atau keragaman antara dua atau lebih kelompok data yang memiliki satuan berbeda atau nilai rata-rata yang berbeda.
___

## Kegiatan Belajar 2: Bentuk-bentuk Penyajian Data

### Tabel

Penyajian data dalam bentuk baris dan kolom yang memuat kategori-kategori serta frekuensi.

1\. **Tabel Satu Arah (*One-Way Table*)**
* Menyajikan data yang hanya memuat satu variabel atau satu karakteristik pengamatan.

2\. **Tabulasi Silang (*Two-Way Table* / Lebih dari Satu Arah)**
* Metode tabulasi untuk merangkum data dua variabel atau lebih secara bersamaan.
* Dapat diterapkan jika salah satu variabel bersifat kualitatif dan lainnya kuantitatif, kedua variabel kualitatif, atau kedua variabel kuantitatif.


3\. **Tabel Frekuensi**
* Tabel ringkasan data yang menunjukkan frekuensi amatan pada tiap-tiap kelas interval.
* **Tahapan Penyusunan:**
    1. Menentukan jangkauan ($R = x_{\text{maks}} - x_{\text{min}}$).
    2. Menentukan banyaknya kelas ($k$) menggunakan pendekatan Sturges: $k = 1 + 3{,}3 \log(n)$.
    3. Menentukan lebar interval kelas ($i = \dfrac{\text{Rentang}}{k}$).
    4. Menetapkan batas-batas kelas.
    5. Menghitung frekuensi amatan di setiap interval kelas.
    6. Menentukan titik tengah kelas serta frekuensi kumulatif dan relatif.
___

### Grafik

Bentuk visualisasi data yang menyajikan informasi secara lebih menarik dan mudah dipahami dibandingkan sekadar susunan angka.

* **Grafik Garis (*Line Chart*):** Digunakan untuk melihat perkembangan atau tren suatu kejadian dari waktu ke waktu (*time series*).
* **Grafik Peta:** Digunakan untuk menampilkan lokasi suatu wilayah beserta sebaran atribut atau karakteristik spasialnya.
* **Grafik Batang (*Bar Graph*):** Digunakan untuk melihat perbandingan nilai, frekuensi, atau persentase antarkelas/kategori. Lebar tiap batang dibuat sama dengan tinggi yang proporsional terhadap nilai frekuensi.
* **Plot Pencaran (*Scatter Plot*):** Metode grafik untuk menggambarkan pola hubungan dan keeratan antara dua variabel kuantitatif melalui sebaran titik-titik koordinat.
* **Grafik Lingkaran (*Pie Chart*):** Digunakan untuk menampilkan perbandingan proporsi atau persentase dari keseluruhan. Pembagian sektor lingkaran dihitung berdasarkan frekuensi relatif dikalikan $360^\circ$.
* **Ogive:** Grafik garis yang menyajikan data frekuensi kumulatif (baik frekuensi kumulatif kurang dari maupun lebih dari).
___

### Peta

Penyajian data spasial dengan menerapkan kaidah kartografis yang menekankan kejelasan informasi tanpa mengabaikan aspek estetika.

* **Dimensi Data Spasial:** Meliputi unsur titik (*point*), garis (*line*), dan luasan/area (*polygon*).
* **Variabel Visual Desain Grafis:** Variabel untuk membedakan elemen simbol peta mencakup bentuk, ukuran, kepadatan/arsir (*texture*), arah/orientasi, nilai kecerahan (*value*), warna, dan posisi, serta transparansi dan bayangan.
* **Komponen Informasi Tepi Peta:** Judul peta, skala, legenda, arah utara (orientasi), angka koordinat geografis, petunjuk letak/diagram lokasi peta, sumber data, pembuat peta, dan tata letak tata muka peta.
* **Perangkat Lunak Pendukung:** Perangkat pembuat peta tematik di antaranya *ArcView*, *ArcGIS*, atau *Open Geo Suite*.
___

## Kegiatan Belajar 3: Membandingkan Kelompok Data

### Membandingkan Kelompok Data

1\. **Indikator Pembanding Antarkelompok**
* Perbandingan dua atau lebih kelompok data tidak cukup hanya mengandalkan nilai pemusatan (rata-rata), tetapi harus dilengkapi dengan ukuran penyebaran.
* Dua kelompok data dapat memiliki nilai rata-rata yang identik namun memiliki tingkat keragaman dan bentuk kurva sebaran yang sangat berbeda.

2\. **Peran Koefisien Keragaman (KK)**
* Digunakan untuk menilai tingkat homogenitas data antarkelompok.
* **Interpretasi:** Semakin kecil nilai koefisien keragaman, sebaran data semakin mendekati nilai rata-ratanya, yang menandakan bahwa kelompok data tersebut semakin homogen (seragam) dan nilai rata-ratanya semakin representatif mewakili kelompok. Sebaliknya, semakin besar nilai koefisien keragaman, sebaran data semakin bervariasi atau heterogen.

**Ilustrasi Perbandingan Keragaman (Homogen vs Heterogen):**
```
Kelompok A (Homogen, KK Kecil):
Data terkumpul rapat di sekitar rata-rata (kurva lancip & tinggi)
      /\
     /  \
____/----\____ 

Kelompok B (Heterogen, KK Besar):
Data menyebar luas menjauhi rata-rata (kurva landai & melebar)
      _--_
   _-'    '-_
__/__________\__
```
___