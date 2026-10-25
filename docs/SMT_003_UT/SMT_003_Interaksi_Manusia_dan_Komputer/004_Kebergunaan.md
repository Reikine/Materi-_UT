# Modul 4 Kebergunaan

## Kegiatan 1 Kesalahan Klasik dan Kepuasaan Berinteraksi
### Kesalahan Klasik
Kesalahan ini sering dilakukan oleh perancang sistem karena asumsi yang salah, yang berakibat pada ketidakpuasan pengguna.
1. Perancangan yang hanya didasarkan pada common-sense.
2. Anggapan perilaku individu mewakili seluruh kelompoknya.
3. Menuruti keinginan atasan tanpa pertimbangan teknis/pengguna.
4. Terpaku pada kebiasaan atau tradisi lama.
5. Anggapan implisit yang tidak didukung data.
6. Keputusan perancangan awal yang tidak didukung fakta.
7. Penundaan evaluasi dengan alasan "sampai waktu luang".
8. Evaluasi formal menggunakan kelompok subyek yang tidak sesuai.
9. Eksperimen yang tidak dapat dianalisis.

### Kepuasan Berinteraksi
Kepuasan adalah kriteria penting untuk menentukan kebergunaan (usability) sistem, yang dapat diuji melalui data kuantitatif maupun investigasi kualitatif.
* Kepuasan dapat dicapai jika sistem memenuhi **Delapan Aturan Shneiderman (1998):**
    * **Konsistensi:** Urutan tindakan, terminologi, warna, tata letak, dan jenis huruf harus konsisten di seluruh sistem.
    * **Fasilitas Kunci-Cepat:** Mendukung singkatan, kunci khusus, dan fasilitas makro untuk pengguna berpengalaman (frequent user).
    * **Umpan Balik yang Informatif:** Setiap tindakan pengguna harus mendapat tanggapan yang jelas dari sistem.
    * **Rancangan Dialog untuk Penutupan (Closure):** Urutan tindakan harus terorganisir dengan bagian awal, tengah, dan akhir yang memberikan rasa lega bagi pengguna.
    * **Pencegahan dan Penanganan Kesalahan:** Sistem harus mencegah pengguna membuat kesalahan serius dan memberikan instruksi pemulihan yang sederhana jika terjadi kesalahan.
    * **Pembalikan Tindakan yang Mudah:** Tindakan harus dapat dibatalkan (reversible) untuk mengurangi kecemasan dan mendorong eksplorasi.
    * **Dukungan pada Locus of Control Internal:** Pengguna harus merasa bahwa merekalah yang menguasai sistem, bukan sebaliknya.
    * **Pengurangan Beban Memori Jangka Pendek:** Tampilan harus sederhana, konsolidasi jendela harus dilakukan, dan waktu pelatihan harus cukup agar pengguna tidak perlu menghafal terlalu banyak kode/perintah.
___

## Kegiatan 2 Kebergunaan
### Definisi Kebergunaan
Kebergunaan didefinisikan sebagai derajat kemampuan perangkat lunak untuk membantu pengguna menyelesaikan tugas.
* **Kombinasi "Guna" (Dix et al., 2004):**
    * Berguna (**useful**): Sistem berfungsi sesuai keinginan pengguna.
    * Dapat digunakan (**usable**): Sistem mudah dioperasikan.
    * Digunakan (**used**): Sistem memotivasi pengguna (menarik, menyenangkan).
* **Lima Komponen Kualitas (Nielsen, 2003):**
    * Kemampuan untuk dipelajari (**learnability**): Seberapa cepat pengguna memahami cara kerja sistem.
    * Efisiensi (**efficiency**): Seberapa cepat sistem mendukung pekerjaan (misal: fitur one-click Amazon).
    * Mudah diingat (**memorability**): Kemampuan pengguna menggunakan kembali sistem setelah periode waktu tertentu tanpa belajar dari awal.
    * **Kesalahan dan keamanan**: Melindungi pengguna dari kondisi berbahaya/tidak diinginkan dan menyediakan fasilitas pemulihan (recovery atau undo).
    * Kepuasan (**satisfaction**): Seberapa jauh pengguna menyukai sistem tersebut.

### Uji Keberagaman
Proses mengukur karakteristik interaksi dan mengidentifikasi kelemahan sistem.
* **Jenis Uji (Levi dan Conrad, 1997):**
    * **Uji Eksploratori:** Mencari titik-titik kebingungan pengguna (dilakukan sejak awal pengembangan).
    * **Threshold Testing:** Mengukur kinerja terhadap sasaran tertentu (lolos/gagal, misal: menyelesaikan tugas $x$ dalam $y$ detik).
    * **Uji Perbandingan:** Menentukan rancangan mana yang lebih cocok bagi pengguna.
* **Uji Formatif vs Sumatif (Hilbert dan Redmiles, 2000):**
    * **Uji Formatif:** Memberikan umpan balik kepada perancang untuk perbaikan (saat proses).
    * **Uji Sumatif:** Memberikan penilaian terhadap produk jadi atau membandingkannya dengan produk lain.

### Metode Uji Keberagaman
Terdapat tiga metode utama yang dijelaskan dalam materi:
* **Pemilahan Kartu (Card Sorting):**
    * Pengguna mengelompokkan kartu berlabel ke dalam kategori yang masuk akal bagi mereka.
    * Sangat berguna untuk membangun struktur menu dan hirarki hyperlink yang intuitif pada situs Web.
* **Evaluasi Heuristik:**
    * Melibatkan ahli AMK untuk mengeksplorasi sistem berdasarkan prinsip kebergunaan.
    * Evaluator mengidentifikasi masalah, mencocokkannya dengan heuristik, dan menentukan nilai kegawatan (skala 5-poin).
* **Uji Berbasis Skenario:**
    * Menggunakan partisipan (pengguna akhir) untuk menyelesaikan tugas atau skenario tertentu yang sudah dirancang.
    * Aktivitas dicatat (misal menggunakan log) dan hasilnya dianalisis secara empiris untuk memperbaiki sistem.
___

## Soal Modul 4

| Pertanyaan                                                                                                                               | Pilihan Jawaban                                                                       | Penjelasan Teknis                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Salah satu kesalahan umum yang sering dilakukan oleh perancang sistem adalah ....                                                        | C. penundaan evaluasi "sampai waktu luang"                                            | Dalam SDLC, evaluasi yang tertunda meningkatkan akumulasi technical debt dan risiko kegagalan integrasi pada fase akhir.                |
| Salah satu jenis fitur tampilan yang dapat menangkap kesan subjektif pengguna adalah ....                                                | A. karakter                                                                           | Representasi visual atau personalisasi sistem yang mempengaruhi persepsi psikologis pengguna terhadap sistem.                           |
| Salah satu aturan dalam kepuasan berinteraksi adalah ....                                                                                | D. konsistensi                                                                        | Redundansi fungsional melalui desain yang seragam untuk mengurangi beban kognitif (O(1) pencarian mental bagi pengguna).                |
| Seiring dengan frekuensi pengguna yang meningkat, pengguna berkeinginan untuk mengurangi jumlah interaksi... dikenal dengan istilah .... | B. fasilitas kunci-cepat                                                              | Implementasi shortcuts meningkatkan efisiensi temporal (Δt) dengan mengurangi langkah navigasi seiring meningkatnya kemahiran pengguna. |
| Penyajian secara visual pada kepuasan berinteraksi, dapat digunakan untuk menunjukkan suatu perubahan yang bersifat eksplisit...         | D. umpan balik yang inovatif                                                          | Prinsip observability dalam sistem; memastikan status internal sistem terpeta dengan jelas ke output visual.                            |
| Suatu rancangan dialog yang mengarah pada penutupan (closure), dibagi ke dalam tiga kelompok bagian yaitu ....                           | A. awal, tengah, dan akhir                                                            | Struktur sekuensial yang memastikan atomisitas transaksi atau interaksi selesai secara utuh.                                            |
| Suatu sistem memiliki kemampuan untuk mendeteksi kesalahan, dengan memberikan instruksi yang sederhana, spesifik...                      | A. penetapan kesalahan dan penanganan kesalahan                                       | Mekanisme error handling yang tidak hanya menangkap exception tapi juga menyediakan jalur pemulihan (recovery path).                    |
| Fitur kepuasan berinteraksi yang dapat mengurangi kecemasan pengguna... fitur tersebut adalah ....                                       | B. pembalikan tindakan yang mudah                                                     | Implementasi fungsi Undo untuk menjamin keamanan state sistem dan mengurangi risiko data loss.                                          |
| Saat pengguna berasumsi bahwa sistem akan memberikan tanggapan yang sesuai dengan tindakan pengguna...                                   | D. locus of control internal                                                          | Memberikan pengguna kendali penuh atas sistem, sehingga sistem bersifat deterministik terhadap input pengguna.                          |
| Keterbatasan manusia untuk mengolah informasi pada memori jangka pendek, mensyaratkan bahwa tampilan suatu sistem harus ....             | C. sederhana                                                                          | Berdasarkan Miller's Law, kapasitas memori jangka pendek manusia terbatas pada 7±2 unit informasi.                                      |
| Sebuah sistem yang mampu memotivasi penggunanya untuk menggunakannya, menarik, menyenangkan, dan lain-lain, disebut dengan ....          | D. usable                                                                             | Usability mencakup efektivitas, efisiensi, dan kepuasan pengguna dalam mencapai tujuan tertentu.                                        |
| Jika sistem mudah dipelajari dan digunakan maka termasuk ke dalam salah satu komponen kualitas untuk menentukan kebergunaan...           | D. learnability                                                                       | Metrik yang mengukur seberapa cepat pengguna dapat memahami logika operasional sistem pada penggunaan pertama.                          |
| Untuk memberi kemudahan pada pengguna yang jarang menggunakan sistem, sistem harus memiliki kemampuan untuk ....                         | B. memorability                                                                       | Kemampuan sistem untuk mempertahankan kemudahan penggunaan tanpa perlu proses pembelajaran ulang setelah jeda waktu tertentu.           |
| Suatu cara yang dilakukan sistem untuk mendukung pengguna dalam melakukan pekerjaannya, disebut dengan ....                              | A. efficiency                                                                         | Optimasi sumber daya dan waktu dalam eksekusi tugas di dalam lingkungan sistem.                                                         |
| Proses untuk mengukur karakteristik interaksi manusia dan komputer dari sebuah sistem, dan mengidentifikasi kelemahannya...              | D. kebergunaan                                                                        | Evaluasi komprehensif terhadap antarmuka untuk memastikan kompatibilitas antara logika mesin dan kognisi manusia.                       |
| Menurut Levi dan Conrad (1997), uji kebergunaan dibagi menjadi tiga jenis, yaitu ....                                                    | A. uji eksploratori, uji threshold, dan uji perbandingan                              | Metodologi pengujian untuk fase awal (eksplorasi), pencapaian standar (threshold), dan komparasi dengan sistem lain.                    |
| Sebuah pengujian untuk memberikan penilaian terhadap produk jadi... atau untuk membandingkannya dengan produk sejenis...                 | D. sumatif                                                                            | Evaluasi akhir untuk mengukur efektivitas keseluruhan produk setelah siklus pengembangan selesai.                                       |
| Tujuan metode pemilihan kartu dalam uji kebergunaan adalah mengelompokkan informasi dalam jumlah ....                                    | D. besar menjadi bagian-bagian yang lebih kecil dan dapat dikelola dengan lebih mudah | Teknik Information Architecture untuk menyusun hierarki data berdasarkan skema mental pengguna.                                         |
| Uji kebergunaan yang melibatkan ahli AMK (Analisis Multi Kriteria) adalah evaluasi ....                                                  | A. heuristik                                                                          | Inspeksi usability oleh pakar berdasarkan prinsip-prinsip desain yang sudah mapan.                                                      |
| Pengguna akhir (end user) diberi kesempatan untuk menguji sistem menggunakan tugas tertentu yang sudah dirancang...                      | A. uji berbasis skenario                                                              | Pengujian validitas fungsional berdasarkan alur kerja riil yang dihadapi pengguna di lapangan.                                          |
___