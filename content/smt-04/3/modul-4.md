# Modul 04: Regresi Sederhana

## Kegiatan Belajar 1: Analisa Regresi Cara Eksplorasi

### Konsep Dasar Analisis Regresi

#### Definisi
Metode statistika untuk menentukan hubungan sebab-akibat antara satu variabel dengan satu atau lebih variabel yang lain.

#### Klasifikasi Variabel
* **Variabel Bebas ($X$):** Variabel yang menjadi "sebab" atau "penyebab", dikenal juga sebagai variabel penjelas, variabel eksplanatorik, atau variabel independen (biasanya digambarkan pada sumbu horizontal $X$).
* **Variabel Terikat ($Y$):** Variabel yang menjadi "akibat", dikenal juga sebagai variabel yang dipengaruhi atau variabel dependen (biasanya digambarkan pada sumbu vertikal $Y$). Variabel $Y$ harus selalu merupakan variabel acak (*random variable*).

#### Fungsi Utama
Digunakan secara luas untuk memprediksi nilai variabel terikat, mengidentifikasi variabel bebas mana saja yang berhubungan, serta memahami bentuk pola hubungan antarvariabel.

#### Diagram Pencar (*Scatter Diagram*)
Diagram titik pasangan nilai $(X, Y)$ pada dua sumbu tegak lurus untuk mengamati kecenderungan pola hubungan data dan memeriksa apakah pendekatan garis lurus (linier) layak digunakan.

#### Pendekatan Penentuan Garis Estimasi Regresi
1. Cara eksplorasi.
2. Cara konfirmasi.

> **Ilustrasi Diagram Pencar & Garis Regresi:**
> ```text
> Y
> ^         . (Y_i)
> |       .   | (Sisaan/Error: e = Y - Y_hat)
> |     .     v
> |    .------- (Garis Estimasi: Y_hat = a + bX)
> |  .     .
> |.           .
> |__________________________> X
> 
> ```
> 
> 
___

### Prosedur Analisa Regresi Cara Eksplorasi (Teknik *Median-Median Line*)

Pendekatan eksplorasi mencari persamaan garis estimasi $\hat{Y} = a + bX$ melalui pembagian data dan penentuan titik-titik pusat amatan:

1\. **Pengurutan Data:** Nilai observasi diurutkan dari nilai terkecil ke nilai terbesar berdasarkan variabel $X$, di mana nilai pada variabel $Y$ wajib mengikuti urutan pasangannya pada variabel $X$.

2\. **Pembagian Tiga Bagian:** Seluruh pasangan nilai terurut dibagi menjadi tiga kelompok:
* **Bagian Bawah ($B$):** Sepertiga bagian data dengan nilai $X$ terkecil.
* **Bagian Tengah ($T$):** Sepertiga bagian data di kelompok tengah.
* **Bagian Atas ($A$):** Sepertiga bagian data dengan nilai $X$ terbesar.

3\. **Penentuan Titik Pusat Masing-Masing Bagian:**
* Menghitung nilai pusat untuk pasangan $X$ dan $Y$ pada tiap bagian menggunakan nilai **median** (atau *tri rata-rata*):
* Bagian Atas: $(X_A, Y_A)$.
* Bagian Tengah: $(X_T, Y_T)$.
* Bagian Bawah: $(X_B, Y_B)$.

4\. **Perhitungan Nilai Kemiringan (*Slope* / $b$):**

$$b = \frac{Y_A - Y_B}{X_A - X_B}$$

(Nilai $b$ dapat bertanda positif atau negatif).

5\. **Perhitungan Nilai Intersep (*Intercept* / $a$):**

$$a = \frac{a_A + a_T + a_B}{3}$$

dengan komponen penyusun:
* $a_A = Y_A - bX_A$
* $a_T = Y_T - bX_T$
* $a_B = Y_B - bX_B$

6\. **Penyusunan Persamaan Garis Estimasi:**

$$\hat{Y} = a + bX$$

7\. **Pemeriksaan Kebaikan Model Eksplorasi:**
* Menghitung selisih/sisa antara nilai amatan sebenarnya dengan nilai estimasi ($e = Y - \hat{Y}$).
* Apabila jumlah nilai selisih mendekati atau sama dengan nol dan nilai selisihnya tidak terlalu besar, maka model estimasi dinilai cukup baik untuk keperluan prediksi.
___

### Aturan Khusus Pembagian Tiga Bagian dalam Metode Eksplorasi

Dalam mengelompokkan data amatan menjadi tiga bagian, berlaku kaidah operasional berikut:

1. Bagian atas dan bagian bawah masing-masing paling banyak mengandung sepertiga dari total seluruh titik amatan.
2. Bagian atas dan bagian bawah harus mempunyai rentang (*range* = nilai terbesar dikurangi nilai terkecil) pada variabel $X$ kurang dari setengah rentang total variabel $X$.
3. Bila terdapat nilai amatan kembar/identik pada variabel $X$, maka nilai tersebut harus dimasukkan ke dalam bagian yang sama.
4. Selama ketiga aturan di atas terpenuhi, masukkan sebanyak mungkin data ke dalam kelompok bagian atas dan bagian bawah.
5. Pengurutan data mutlak berpatokan pada variabel $X$ dan tidak boleh diurutkan berdasarkan variabel $Y$.
6. Nilai pusat variabel $Y$ ditentukan secara mandiri (dihitung dari median kumpulan nilai $Y$ pada kelompok tersebut), bukan semata-mata mengambil nilai $Y$ yang menjadi pasangan dari median $X$.
___

## Kegiatan Belajar 2: Analisis Regresi Cara Konfirmasi

### Konsep Dasar Metode Kuadrat Terkecil (*Ordinary Least Squares*)

Analisis regresi cara konfirmasi bertujuan menentukan persamaan linier:

$$\hat{Y} = a + bX$$

Parameter $a$ dan $b$ diperoleh menggunakan **metode kuadrat terkecil**, yaitu prosedur matematis yang meminimumkan jumlah kuadrat galat/kesalahan antara nilai amatan riil dengan garis estimasi.
___

### Formulasi Parameter Regresi Konfirmasi

1\. **Koefisien Kemiringan (*Slope* / $b$):**

$$b = \frac{n \sum X_i Y_i - \sum X_i \sum Y_i}{n \sum X_i^2 - (\sum X_i)^2}$$

2\. **Konstanta Intersep (*Intercept* / $a$):**

$$a = \bar{Y} - b\bar{X}$$

dengan $\bar{Y} = \frac{\sum Y_i}{n}$ dan $\bar{X} = \frac{\sum X_i}{n}$.
___

### Evaluasi Kebaikan Model dan Hubungan Antarvariabel

1\. **Nisbah Variansi Sisaan (*Error Ratio*):**
* Mengukur kelayakan model melalui perbandingan variansi komponen sisaan ($Y - \hat{Y}$) terhadap variansi total peubah terikat $Y$:

$$\text{Nisbah} = \frac{\text{Var}(\text{sisa})}{\text{Var}(Y)}$$

* **Makna:** Nisbah ini merepresentasikan proporsi variabilitas $Y$ yang **tidak dapat diterangkan** oleh persamaan garis regresi. Model dinyatakan baik apabila nilai nisbah ini semakin kecil (mendekati nol).

2\. **Koefisien Determinasi ($r^2$):**
* Proporsi keragaman total $Y$ yang **dapat diterangkan** oleh hubungan linier dengan variabel $X$ melalui persamaan regresi:

$$r^2 = 1 - \frac{\text{Var}(\text{sisa})}{\text{Var}(Y)}$$

* **Rentang & Interpretasi Nilai:**
* $r^2 = 0$: Model regresi sama sekali tidak mampu menerangkan variasi peubah $Y$.
* $r^2 = 1$: Model regresi mampu menerangkan variasi peubah $Y$ secara sempurna.

3\. **Koefisien Korelasi ($r$):**
* Mengukur kekuatan serta arah hubungan linier antara variabel $X$ dan $Y$:

$$r = (\pm 1)\sqrt{r^2}$$

* **Karakteristik Tanda dan Nilai:**
* Tanda nilai $r$ selalu sama dengan tanda koefisien arah regresi $b$.
* Rentang nilai korelasi berada pada interval $-1 \le r \le 1$.
* $r = 1$: Hubungan linier sempurna dengan arah positif.
* $r = -1$: Hubungan linier sempurna dengan arah negatif.
* $r = 0$: Tidak terdapat hubungan linier antara variabel $X$ dan $Y$.

* **Rumus Koefisien Korelasi Langsung (Pearson):**
Dapat dihitung secara langsung tanpa menyusun model regresi terlebih dahulu:

$$r = \frac{n \sum XY - \sum X \sum Y}{\sqrt{\left(n \sum X^2 - (\sum X)^2\right)\left(n \sum Y^2 - (\sum Y)^2\right)}}$$
___