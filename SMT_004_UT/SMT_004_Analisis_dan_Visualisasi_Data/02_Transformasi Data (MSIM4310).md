# Modul 02: Transformasi Data

## Kegiatan Belajar 1: Konsep Dasar Transformasi Data

### Pengertian Transformasi Data

* **Definisi:** Transformasi adalah perubahan bentuk atau mengubah struktur dasar menjadi struktur baru dengan menerapkan kaidah transformasi. Dalam konteks statistika, transformasi data berarti mengubah skala pengukuran data asli menjadi bentuk skala lain yang baru agar memenuhi asumsi-asumsi analisis, seperti homogenitas ragam dan sebaran data normal.
* **Asal-usul & Konsep *Tukey’s Ladder of Powers*:** Diperkenalkan pertama kali oleh Tukey pada tahun 1957 dengan istilah *Tukey's Ladder of Powers* atau *Bulging Rule*, yaitu metode untuk mengubah bentuk sebaran yang menjulur (*skewed*) menjadi normal atau mendekati normal menggunakan pendekatan pemangkatan.
* **Tujuan Utama:** Salah satu tujuan utamanya adalah mengatasi masalah **heteroskedastisitas** (kondisi tidak adanya kesamaan varians sisaan untuk semua pengamatan) agar memenuhi asumsi **homoskedastisitas** yang disyaratkan dalam metode statistika klasik seperti analisis regresi dan analisis varians.
___

### B. Kapan Melakukan Transformasi Data?

#### Pola Sebaran Normal (Distribusi Gaussian): 
Pola sebaran data normal pertama kali dijelaskan oleh K.F. Gauss yang berbentuk genta atau lonceng (*bell-shaped*).

#### Sifat-sifat Penting Distribusi Normal:
1. Grafiknya selalu berada di atas sumbu $x$.
2. Bentuknya simetris pada $x = \mu$.
3. Mempunyai satu buah modus, yaitu $x = \mu$.
4. Luas grafiknya sama dengan satu unit persegi, dengan rincian:
    * Sekitar **68%** luasnya berada di antara rentang $\mu - \sigma$ dan $\mu + \sigma$.
    * Sekitar **95%** luasnya berada di antara rentang $\mu - 2\sigma$ dan $\mu + 2\sigma$.
    * Sekitar **99%** luasnya berada di antara rentang $\mu - 3\sigma$ dan $\mu + 3\sigma$.

#### Deteksi Sederhana Sebaran/Kemiringan Data:
1. Jika nilai tengah (*mean*) kurang dari dua kali deviasi standar, distribusinya cenderung miring (*skewed*).
2. Jika populasi mengikuti distribusi normal, nilai tengah (*mean*) dan deviasi standar sampel bersifat independen (tidak saling bergantung). Apabila deviasi standar meningkat seiring dengan peningkatan *mean* di seluruh kelompok populasi, maka data tersebut berdistribusi miring.


#### Pengujian Statistik:
Normalitas data secara inferensial dapat diverifikasi menggunakan uji statistik formal seperti uji Kolmogorov-Smirnov.

#### Fungsi Transformasi:
Dilakukan apabila sebaran data tidak normal agar dapat memenuhi persyaratan alat uji parametrik (seperti regresi linier dan ANAVA). Distribusi normal bukanlah tujuan akhir, melainkan sarana agar kesimpulan dan inferensi statistik yang ditarik menjadi valid.
___

### C. Transformasi Data dan Normalitas

**Asumsi Normalitas dalam Analisis:** Uji parametrik (uji-t, regresi, ANAVA) memerlukan asumsi normalitas. Khusus pada model regresi, asumsi normalitas yang mendasar berlaku pada komponen *error*/sisaan model, bukan keharusan bahwa setiap variabel individual harus berdistribusi normal (meskipun variabel yang normal mempermudah pemenuhan asumsi sisaan).

**Penanganan Nilai Pencilan (*Outlier*):** Ketidaknormalan data sering kali dipicu oleh adanya pencilan (*outlier*).

**Pemeriksaan Awal:** Perlu dipastikan apakah pencilan timbul akibat kesalahan penginputan/pencatatan data; jika ya, data harus dikoreksi.

**Penghapusan Pencilan:** Jika bukan karena kesalahan input, pencilan hanya boleh dicatat riwayatnya dan dihapus apabila penyebabnya bersifat khusus dan diyakini tidak akan terulang kembali di masa mendatang. Namun, jika pencilan tersebut berpeluang terjadi lagi dan merupakan pengamatan berpengaruh, pencilan tidak boleh langsung dihapus sembarangan dan membutuhkan penanganan khusus.
___

## Kegiatan Belajar 2: Bentuk-bentuk Transformasi Data

### Prinsip Umum Transformasi Data

#### Sifat *Trial and Error*:
Menurut Pardoe et al. (2021), proses pemilihan transformasi data pada dasarnya bersifat coba-coba (*trial and error*) sampai ditemukan model yang sesuai dan memenuhi asumsi.

#### Kompleksitas Model:
Menurut Draper dan Smith (1992), semakin rumit transformasi yang dipilih, interpretasi model yang dihasilkan akan semakin sulit karena memerlukan proses transformasi balik (*back-transformation*).

#### Klasifikasi Berdasarkan Peubah yang Ditransformasi:
1. Transformasi pada peubah prediktor ($X$).
2. Transformasi pada peubah respons ($Y$).
3. Transformasi simultan pada peubah prediktor ($X$) maupun peubah respons ($Y$).

#### Klasifikasi Berdasarkan Bentuk Matematis:
1. **Transformasi Logaritma:** Menggunakan logaritma natural (basis konstanta Euler, $\ln A$), logaritma basis 10 ($\log_{10} A$), maupun basis lainnya.
2. **Transformasi Pangkat:** Mengubah peubah ke dalam fungsi pangkat ($B^* = B^n$), di mana $n$ dapat berupa bilangan bulat positif, pecahan, atau bilangan bulat negatif.

#### Tujuan Penyesuaian Linieritas:
Transformasi digunakan untuk membentuk hubungan linier dari hubungan non-linier intrinsik antara peubah respons dan prediktor, sehingga mencegah terjadinya pelanggaran asumsi pemodelan linier.
___

### Transformasi Logaritma

#### Transformasi $y^* = \ln(y)$
* **Bentuk Model Asal:** $y = e^\alpha e^{\beta x}$
* **Linearisasi:**

$$\ln(y) = \ln(e^\alpha e^{\beta x}) = \ln(e^\alpha) + \ln(e^{\beta x}) = \alpha \ln(e) + \beta x \ln(e)$$

Karena $\ln(e) = 1$, model liniernya menjadi:

$$\ln(y) = \alpha + \beta x \quad \text{atau} \quad y^* = \alpha + \beta x$$

dengan $y^* = \ln(y)$.
* **Bentuk Pola Diagram Pencar:** Menunjukkan kurva eksponensial yang melengkung tajam ke atas jika $\beta_1 > 0$, atau melengkung turun mendekati asimtot sumbu horizontal jika $\beta_1 < 0$.
* **Ilustrasi Grafik:**
```
y
^             / (Eksponensial Naik: Beta > 0)
|            /
|           /
|         .'
|       .'
|_____.____________________> x

```

#### Transformasi $x^* = \ln(x)$
* **Bentuk Model Asal:** $e^y = e^\alpha x^\beta$
* **Linearisasi:**

$$\ln(e^y) = \ln(e^\alpha x^\beta) = \ln(e^\alpha) + \ln(x^\beta)$$

$$y \ln(e) = \alpha \ln(e) + \beta \ln(x)$$

Karena $\ln(e) = 1$, model liniernya menjadi:

$$y = \alpha + \beta \ln(x) \quad \text{atau} \quad y = \alpha + \beta x^*$$

dengan $x^* = \ln(x)$.
* **Bentuk Pola Diagram Pencar:** Menunjukkan kurva logaritmik yang laju perubahannya melambat seiring bertambahnya $x$ (kurva menaik untuk $\beta_1 > 0$ dan menurun untuk $\beta_1 < 0$).
* **Ilustrasi Grafik:**
```
y
^              ------ (Logaritmik Melandai: Beta > 0)
|           ---
|         --
|       /
|     /
|____/_____________________> x

```

#### Transformasi $y^* = \ln(y)$ dan $x^* = \ln(x)$
* **Bentuk Model Asal:** $y = e^\alpha x^\beta$
* **Linearisasi:**

$$\ln(y) = \ln(e^\alpha x^\beta) = \ln(e^\alpha) + \ln(x^\beta) = \alpha \ln(e) + \beta \ln(x)$$

Karena $\ln(e) = 1$, model liniernya menjadi:

$$\ln(y) = \alpha + \beta \ln(x) \quad \text{atau} \quad y^* = \alpha + \beta x^*$$

dengan $y^* = \ln(y)$ dan $x^* = \ln(x)$.
* **Bentuk Pola Diagram Pencar:** Mengikuti pola kurva daya/pangkat (*power curve*) dengan variasi kelengkungan tergantung pada nilai parameter $\beta_1$ (misal: $\beta_1 > 1$, $0 < \beta_1 < 1$, atau $\beta_1 < 0$).
___

### Transformasi Pangkat

#### Transformasi Reciprocal (Kebalikan): $x^* = x^{-1} = \frac{1}{x}$
* **Bentuk Persamaan Regresi:**

$$y = \alpha + \frac{\beta}{x}$$

* **Bentuk Pola Diagram Pencar:** Menampilkan pola hubungan hiperbolik di mana nilai $y$ mendekati nilai batas tertentu (asimtot) saat $x$ membesar (pola melengkung tajam ke bawah untuk $\beta_1 > 1$ atau melengkung ke atas mendekati asimtot untuk $\beta_1 < 0$).

#### Transformasi Kuadratik: $x^* = x^2$
* **Bentuk Persamaan Regresi:**

$$y = \alpha + \beta x^2$$

* **Bentuk Pola Diagram Pencar:** Memperlihatkan pola parabola kuadratik; kurva melengkung ke atas dengan laju yang semakin cepat jika hubungan bernilai positif, atau melengkung turun jika hubungan bernilai negatif.

### Transformasi Akar: $y^* = y^{1/2} = \sqrt{y}$ atau $x^* = x^{1/2} = \sqrt{x}$
* **Bentuk Persamaan Regresi:**

$$y = \alpha + \beta \sqrt{x} \quad \text{atau} \quad \sqrt{y} = \alpha + \beta x$$

* **Bentuk Pola Diagram Pencar:** Memperlihatkan pola kurva akar di mana perubahan nilai variabel melandai secara gradual seiring meningkatnya variabel bebas (baik untuk arah kurva positif maupun negatif).
___