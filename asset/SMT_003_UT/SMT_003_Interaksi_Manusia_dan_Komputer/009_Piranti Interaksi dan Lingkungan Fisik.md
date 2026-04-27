# Modul 9 Piranti Interaksi dan Lingkungan Fisik
## Kegiatan 1 Piranti Masukan
Peranti interaksi merupakan komponen pendukung operasionalisasi teknik antarmuka grafis. Peranti ini dikelompokkan menjadi tiga: peranti masukan tekstual, peranti penuding dan pengambil, serta layar tampilan.

### Peranti Masukan Tekstual
Papan ketik (keyboard) merupakan peranti masukan standar untuk memasukkan data sebelum diolah oleh komputer.
* **Tata Letak QWERTY**
    * Karakteristik: Dirancang oleh Scholes, Glidden, dan Soule (1878). Menjadi standar mesin ketik komersial sejak 1905.
    * Struktur Tombol: Terbagi menjadi tombol fungsi, alfanumerik, kontrol, dan numerik.
    * Kelemahan: * Beban tangan kiri mencapai 56%.
        * Hanya 32% ketukan dilakukan pada home row.
        * Menyebabkan kelelahan pada jari kelingking karena beban distribusi yang tidak merata pada kata-kata tertentu.
* **Tata Letak Dvorak**
    * Karakteristik: Dirancang tahun 1932 untuk memperbaiki efisiensi QWERTY.
    * Keunggulan:
        * 70% ketukan jatuh pada home row.
        * Beban tangan kanan lebih besar daripada tangan kiri.
        * Mengurangi kelelahan karena faktor ergonomis yang lebih baik.
        * Meningkatkan efisiensi sekitar 10% - 15%.
* **Tata Letak Alfabetik**
    * Karakteristik: Tombol disusun berurutan sesuai alfabet (A-Z).
    * Penggunaan: Umumnya ditemukan pada mainan anak-anak. Secara teknis, justru memperlambat kecepatan pengetikan bagi pengguna umum.
**Tata Letak Klockenberg**
    * Karakteristik: Dirancang untuk mengurangi beban otot pada jari, pergelangan tangan, dan bahu.
    * Desain: Memisahkan barisan tombol menjadi dua bagian (kiri dan kanan) yang membentuk sudut tertentu untuk posisi tangan yang lebih alami (ergonomis).
* **Papan Ketik untuk Peningkatan Kata**
Digunakan untuk kebutuhan kecepatan tinggi (misal: wartawan atau stenografer).
    * Chord Keyboard: Menghasilkan kata/suku kata dengan menekan kombinasi tombol secara bersamaan.
        * Palantype: Membagi karakter menjadi 3 kelompok (konsonan awal, vokal, konsonan akhir). Mampu merekam >180 kata/menit.
        * Stenotype: Menggunakan prinsip serupa dengan Palantype untuk mencatat hasil wawancara atau persidangan secara cepat.
* **Papan Tombol Numerik**
Digunakan untuk memasukkan data angka dalam jumlah besar.
    * Telepon Tekan: Angka 1, 2, 3 berada di baris paling atas.
    * Kalkulator: Angka 7, 8, 9 berada di baris paling atas.
* **Tombol Fungsi**
Tombol khusus yang telah "ditanamkan" perintah tertentu untuk memudahkan interaksi.
    * Keuntungan: Mengurangi beban ingatan, mudah dipelajari, meningkatkan kecepatan, dan mengurangi kesalahan.
    * Soft Key: Penggunaan tombol fungsi yang dikombinasikan dengan tombol kontrol (seperti Shift atau Ctrl) untuk menghasilkan fungsi baru (misal: 12 tombol fungsi bisa menghasilkan 24 atau lebih fungsi berbeda melalui kombinasi).

### Peranti Penuding dan Pengambil
Digunakan untuk menempatkan kursor, memilih item, memutar objek, dan menentukan nilai/besaran. Tugas interaktifnya meliputi pemilihan, penempatan, orientasi, jalur, kuantisasi, dan tekstual.

**Rasio Kontrol/Tampilan (K/T)**

Metrik krusial untuk mengukur efisiensi pergerakan peranti terhadap kursor pada layar:

$$K/T = \frac{\text{Gerakan tangan atau responder lain}}{\text{Gerakan kursor}}$$
* **Tetikus (Mouse)Mekanisme:**
    * Mekanis: Menggunakan bola karet yang memutar sensor di dalam tubuh mouse.
        * Optis: Menggunakan LED dan lensa (phototransistor) untuk mendeteksi pergerakan berdasarkan pantulan cahaya pada landasan (pad).
    * Konfigurasi: Tersedia dalam 1, 2, atau 3 tombol (kombinasi 3 tombol dapat menghasilkan hingga 7 perintah berbeda).
* **Joystick**
    * Mekanisme: Peranti penuding tak langsung. Gerakan kursor dikendalikan melalui tuas.
    * Jenis:
        * Absolut: Posisi tuas berkorelasi langsung dengan posisi kursor.
        * Isometrik (Terkendali Kecepatan): Kecepatan kursor berbanding lurus dengan tekanan pada tuas.
    * Persamaan K/T (Joystick Absolut):
$$K/T = \frac{\text{Persentase gerakan melingkar} \times \text{keliling lingkaran}}{\text{Gerakan kursor}}$$
* **Trackball**
    * Karakteristik: Mirip mouse terbalik. Badan trackball diam, sementara tangan memutar bola di atasnya.
    * Keunggulan: Hemat ruang meja kerja; memiliki efek "roda terbang" (momentum rotasi bola).
* **Digitizing Tablet (Digitizer)**
    * Fungsi: Mengambil data koordinat $(x, y)$ dengan presisi tinggi (umum untuk CAD).
    * Mekanisme: Bekerja berdasarkan prinsip kapasitif, elektrostatis, atau sonik (pulsa ultrasonik yang dideteksi mikrofon).
    * Rasio K/T: Biasanya berkisar antara 0.3 sampai 1.0.
* **Pena Cahaya (Light Pen)**
Prinsip: Mendeteksi selisih waktu penyegaran elektron pada piksel layar saat pena diarahkan ke posisi tertentu.Kelemahan: Melelahkan tangan, menghalangi pandangan, dan mudah patah.
* **Panel Sensitif Sentuhan (Touchscreen)**
    * Mekanisme: Mendeteksi interupsi matriks berkas cahaya, perubahan kapasitansi, atau pantulan ultrasonik.
    * Keunggulan: Interaksi langsung tanpa peranti tambahan; cocok untuk lingkungan publik (ATM, mesin informasi).
    * Multi-touch: Memungkinkan deteksi banyak titik sentuhan secara bersamaan (seperti pada iPhone/iPod).

### Layar Tampilan
Menampilkan hasil proses komputasi yang dapat dilihat langsung oleh pengguna.
* **Tabung Sinar Katoda (CRT)**
    * Komponen Utama: Penembak elektron (electron gun), kumparan pemfokus, kumparan pembelok, dan lapisan fosfor.
    * Prinsip Kerja: Aliran elektron difokuskan dan dibelokkan oleh medan listrik, lalu menabrak lapisan fosfor hingga memicu pendaran cahaya.
    * Warna: Menggunakan tiga penembak elektron untuk warna Merah, Hijau, dan Biru (RGB).
* **Metode Penampilan Gambar**
    * Vektor (Calligraphic): Layar menyegarkan daftar tampilan (display list) yang berisi perintah penggambaran titik, garis, dan karakter.
    * Raster Display:
        * Piksel: Citra disusun dari elemen terkecil yang disebut pixel (picture element).
        * Frame Buffer: Memori tempat menyimpan citra sebagai matriks bit (pola bit).
        * Refresh Rate: Penyegaran elektron dilakukan minimal 30 kali per detik untuk menghindari kedipan (flicker).
* **Teknik Raster Scanning**
Metode ini mengarahkan pancaran elektron secara sistematis pada layar:
    * Mekanisme: Pancaran bergerak dari kiri ke kanan dan dari atas ke bawah. Setelah mencapai baris bawah, penembak elektron kembali ke posisi awal di atas.
    * Refresh Rate: Dilakukan minimal 30 kali per detik untuk mencegah efek kedip (flicker).
    * Interlacing: Teknik pemindaian baris scan line secara selang-seling (baris ganjil terlebih dahulu, kemudian baris genap) untuk efisiensi tampilan.
    * Transisi Teknologi: CRT (Cathode Ray Tube) kini digantikan oleh LCD (Liquid Crystal Diode) karena LCD lebih ringan, rendah radiasi, hemat daya, dan mendukung resolusi digital yang lebih tinggi.

### Pengolah Tampilan
Merupakan komponen intermediary (sering disebut video display adapter) yang berfungsi:
* Fungsi Utama: Mengubah pola bit dari memori digital menjadi tegangan analog untuk membangkitkan elektron pada layar.
* Evolusi Adapter: MDA, CGA, MCGA, EGA, VGA, dan SVGA.
* Memori Video (VRAM): Kapasitas memori menentukan resolusi dan kedalaman warna. Contoh: Memori 2 MB - 4 MB sudah mampu menghasilkan gambar true color.

### Jenis Layar Tampilan
| Jenis Monitor               | Karakteristik Teknis                                                                                              |
| :-------------------------- | :---------------------------------------------------------------------------------------------------------------- |
|                             |
| **Direct-drive Monochrome** | Digunakan dengan adapter MDA/EGA; hanya menampilkan satu warna depan dan satu warna latar.                        |
| **Composite Monochrome**    | Digunakan dengan adapter CGA; hanya menyajikan satu warna namun dengan variasi gradasi terbatas.                  |
| **Composite Color**         | Mampu menghasilkan teks dan grafik berwarna namun dengan resolusi yang cenderung rendah.                          |
| **Red-Green-Blue (RGB)**    | Memproses sinyal warna (Merah, Hijau, Biru) secara terpisah; menghasilkan teks/grafik yang lebih tajam dan halus. |
| **Variable-Frequency**      | Mampu menyesuaikan diri dengan berbagai jenis sinyal dari adapter yang berbeda (multisync).                       |
___

## Kegiatan 2 Risiko Penggunaan Piranti Interaksi
### Lingkungan Fisik
Penggunaan komputer dalam durasi lama (berorde jam) memerlukan perhatian pada faktor ergonomik untuk menjaga efisiensi dan kesehatan operator. Isu utama dalam perancangan lingkungan fisik meliputi:
* **Keamanan:** Menghindari kegagalan sistem yang berakibat fatal (Contoh kasus: Therac-25 terkait radiasi.
* **Efisiensi:** Antarmuka yang kaku menurunkan produktivitas manusia.
* **Ruang Pengguna:** Ketersediaan ruang yang cukup untuk duduk, berdiri, dan bergerak guna mencegah kelelahan dan cedera.
* **Ruang Kerja:** Penempatan objek kerja (buku, dokumen) dan perangkat (PDA) agar mudah dijangkau dan dipandang.
* **Pencahayaan:** Iluminasi harus stabil, tidak menyilaukan, dan mendukung jarak pandang ke layar.
* **Kegaduhan:** Sensitivitas lingkungan (seperti perpustakaan) terhadap suara; penggunaan fitur getar pada perangkat.
* **Polusi:** Proteksi perangkat (seperti plastic cover pada keyboard) di lingkungan industri yang kotor/berminyak.

### Pengukuran dan Antropometrik
Antropometri adalah bidang ilmu yang mengukur dimensi tubuh manusia sebagai dasar perancangan stasiun kerja.
* **Aplikasi:** Menentukan tinggi meja, jangkauan tangan, dan sudut penglihatan.
* **Teknis Mengetik:** Posisi telapak tangan harus sejajar (lurus) dengan keyboard untuk mencegah ketegangan otot, bukan menekuk ke samping (posisi incorrect).

### Aspek Ergonomik dari Stasiun Kerja
Stasiun kerja mencakup unit komputer dan furnitur pendukung. Keluhan umum akibat perancangan yang buruk meliputi miopi, iritasi mata, ketegangan punggung, serta otot siku dan pundak.
* **Parameter Utama Stasiun Kerja yang Ergonomis:**
    * Tumpuan punggung dan pinggang yang stabil.
    * Garis visual antara mata dan bagian atas layar tampilan.
    * Kontrol kilau cahaya (glare) pada layar.
    * Jarak antara badan dan layar yang ideal.
    * Tumpuan kaki dan posisi lengan/siku yang tepat.
    * Istirahat secara periodik.

### Analisis Isu Kesehatan Berdasarkan Tipe Pekerjaan
Terdapat empat aspek kesehatan yang dipengaruhi oleh beban kerja: Visual, Otot, Postur Tubuh, dan Tekanan Mental.

| Tipe Pekerjaan              | Deskripsi Karakteristik                                | Fokus Beban & Solusi                                                                                                                                                       |
| :-------------------------- | :----------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                             |
| **1. Pemasukan Data**       | Hard copy oriented (mengetik dari dokumen fisik).      | **Beban:** Visual (dokumen), Otot (tangan/jari), Postur (leher). <br> **Solusi:** Pemegang dokumen (document holder), kursi yang mendukung pinggang.                       |
| **2. Akuisisi Data**        | Menatap layar secara intensif (Operator telepon, ATC). | **Beban:** Visual tinggi, Kognitif/Persepsi tinggi. <br> **Solusi:** Layar kualitas tinggi, glare control, iluminasi ≈ 300 lux.                                            |
| **3. Pekerjaan Interaktif** | Variatif (Pemrogram, Insinyur). Sering bergerak.       | **Beban:** Relatif lebih ringan karena variasi aktivitas. <br> **Solusi:** Iluminasi 300-500 lux, sandaran tangan pada kursi.                                              |
| **4. Pengolahan Kata**      | Mengetik dan mengedit teks secara kontinu.             | **Beban:** Otot dan Postur sangat terasa bagi juru ketik; Visual lebih tinggi bagi editor. <br> **Solusi:** Kualitas tampilan layar dan posisi stasiun kerja yang presisi. |
___

## Kegiatan 3 Aspek Penting Kenyamanan Lingkungan Kerja
Lingkungan kerja yang ergonomis tidak hanya bergantung pada stasiun kerja, tetapi juga pada faktor eksternal yang memengaruhi performa dan kesehatan pengguna secara langsung.

### Pengaruh Buruk Stasiun Kerja
Karakteristik pekerjaan menentukan intervensi ergonomik yang diperlukan. Ketidaksesuaian beban visual dan otot dapat menyebabkan keluhan fisik sebagai berikut:

| Keluhan                     | Faktor Penyebab                                                | Saran Pemecahan                                                                  |
| :-------------------------- | :------------------------------------------------------------- | :------------------------------------------------------------------------------- |
|                             |
| **Kelelahan Visual**        | Iluminasi tidak memadai, kilau/pantulan, karakter layar jelek. | Iluminasi 300-700 lux, posisi layar sejajar jendela, gunakan filter kontras.     |
| **Pegal Punggung/Pinggang** | Kursi tidak memadai, ruang kaki sempit.                        | Kursi dengan penyangga punggung (adjustable), meja dengan ruang gerak kaki luas. |
| **Leher, Bahu, Lengan**     | Tinggi meja tidak sesuai.                                      | Meja yang tingginya dapat diatur sesuai kenyamanan operator.                     |
| **Pergelangan Tangan**      | Sudut telapak tangan buruk, pengetikan berlebih.               | Gunakan sandaran lengan, atur kecepatan mengetik, istirahat periodik.            |

### Pencahayaan
Tujuan utama perancangan cahaya adalah menghindari silau (glare) dan mencapai keseimbangan kecerahan (brightness).
* **Sumber Cahaya:**
    * Langsung: Matahari atau bohlam lampu.
    * Tak Langsung: Pantulan dari dinding, langit-langit, lantai, hingga dokumen.
* **Pengendalian:**
    * Penempatan stasiun kerja di antara dua sumber cahaya (sejajar jendela).
    * Penggunaan penutup jendela (Vertical/Horizontal blinds).
    * Menghindari sumber cahaya yang terlalu terang langsung masuk ke bidang pandang mata.

### Suhu dan Kualitas Udara
Penggunaan perangkat komputer menghasilkan panas tambahan yang memengaruhi konsentrasi.
* **Faktor Kunci:** Suhu dan kelembapan udara.
* **Solusi:** Penggunaan pengontrol suhu udara (AC) yang diatur sedemikian rupa agar aliran udara tidak langsung mengenai badan pengguna guna menghindari gangguan konsentrasi.

### Gangguan Suara
Suara yang tetap dan tidak berlebihan biasanya dapat diabaikan, namun perubahan suara yang keras dan mendadak (transient sound) memicu stres.
* **Teknik Masking:** Menggunakan derau suara latar rendah (seperti suara alam) untuk menutupi gangguan suara dari lingkungan sekitar.
* **Sensitivitas:** Interaksi suara bersifat kompleks dan subjektif; penggunaan penutup telinga dapat dilakukan dalam kondisi khusus.

### Kesehatan dan Keamanan Kerja
Aspek ini dipengaruhi oleh kondisi kesehatan umum pengguna dan penggunaan teknologi baru.
* **Kondisi Berisiko:** Radang persendian, diabetes, obesitas, tekanan darah tinggi, dan faktor usia.
* **Perawatan Mata:**
    * Istirahat mata secara rutin dengan melihat pemandangan jauh.
    * Menjaga kebersihan lensa kacamata/layar.
    * Pemeriksaan medis secara teratur ke ahli mata.

### Kebiasaan dalam Bekerja
Kenyamanan dapat ditingkatkan melalui manajemen aktivitas mandiri:
* Bekerja dengan posisi santai namun benar (ergonomis).
* Berdiri dan melakukan olahraga ringan/peregangan beberapa kali sehari untuk mengendurkan ketegangan otot.
* Mengambil istirahat pendek secara periodik daripada istirahat lama tapi jarang.
* Melakukan variasi tipe pekerjaan agar tidak terjadi kejenuhan akibat tugas yang monoton.
___

## Soal Modul 9

| Pertanyaan                                                        | Pilihan Jawaban                        | Penjelasan Teknis                                                                                                                           |
| ----------------------------------------------------------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Peranti masukan tekstual                                          | D. keyboard                            | Mengonversi tekanan mekanik pada switch menjadi kode biner (ASCII/Scan Code) untuk diproses oleh CPU.                                       |
| Pengelompokan tombol pada papan ketik                             | C. fungsi                              | Papan ketik standar memiliki blok tombol fungsi (F1-F12), alfanumerik, kontrol, dan numerik.                                                |
| Tata letak papan ketik dengan enam tombol baris kedua alfanumerik | A. QWERTY                              | Standar tata letak yang dirancang untuk mengurangi kemacetan mekanik pada mesin tik manual.                                                 |
| Tata letak yang membebankan tangan kanan lebih dari kiri          | B. Dvorak                              | Dirancang untuk efisiensi dengan menempatkan vokal dan konsonan umum pada baris "home", namun distribusi beban lebih berat ke tangan kanan. |
| Tata letak papan ketik ergonomik                                  | B. Dvorak dan Klockenberg              | Klockenberg memisahkan bagian kiri dan kanan untuk mengurangi tekanan pada pergelangan tangan (ulnar deviation).                            |
| Peranti penempatan kursor dan pengambilan item                    | D. penuding dan pengambil              | Definisi fungsional dari pointing device (seperti mouse) yang memanipulasi koordinat (x,y) pada GUI.                                        |
| Peranti aplikasi CAD atau menyalin gambar                         | A. digitizing tablet                   | Menggunakan sensor elektromagnetik untuk akurasi tinggi dalam memetakan koordinat fisik ke ruang digital.                                   |
| Peranti deteksi sentuhan tangan/stylus ke layar                   | C. touch-sensitive panel               | Menggunakan teknologi kapasitif atau resistif untuk mendeteksi perubahan arus/resistansi pada titik kontak.                                 |
| Layar tampilan berdasarkan teknologi televisi                     | B. raster display                      | Menggunakan electron gun untuk memindai layar baris demi baris (scanning) secara periodik.                                                  |
| Tipe layar teks dan grafik berwarna                               | A. composite color monitor             | Menggabungkan sinyal luminansi dan krominansi dalam satu sinyal kompleks untuk menghasilkan spektrum warna RGB.                             |
| Mesin interaksi manusia dengan lingkungan tetap                   | A. ATM                                 | Sistem tertanam (embedded system) dengan I/O spesifik yang ditempatkan pada lokasi fisik statis.                                            |
| Pengaruh radiasi dalam lingkungan fisik                           | D. keamanan                            | Radiasi elektromagnetik (EMI) dari monitor merupakan isu keamanan kesehatan kerja jangka panjang.                                           |
| Masalah fisik akibat perancangan lingkungan tidak memadai         | C. ruang pengguna                      | Berkaitan dengan optimasi ruang kerja agar sesuai dengan dimensi antropometri pengguna untuk mencegah cedera.                               |
| Solusi pelindung peralatan (tutup plastik/cuci)                   | B. polusi                              | Mencegah kontaminasi partikel debu atau cairan yang dapat merusak sirkuit dan mekanisme hardware.                                           |
| Pengamatan keluhan mata/iritasi pada stasiun kerja                | A. Laubli                              | Studi epidemiologi oleh Laubli dkk. (1980) mengenai dampak visual pada operator komputer.                                                   |
| Pengamatan hubungan lama kerja dengan miopi                       | C. Laubli                              | Menemukan korelasi antara durasi penggunaan VDT (Video Display Terminal) dengan peningkatan derajat miopi.                                  |
| Faktor unjuk kerja operator menurut Sauter (1991)                 | B. sudut melihat dan papan ketik       | Variabel teknis utama yang menentukan beban biomekanik dan kelelahan visual operator.                                                       |
| Tipe pekerjaan operator telepon/petugas pos elektronik            | A. pemasukan data                      | Aktivitas dengan throughput data tinggi yang membutuhkan input alfanumerik kontinu.                                                         |
| Beban petugas reservasi                                           | C. beban visual dan beban otot         | Interaksi konstan dengan layar (visual) dan posisi duduk/mengetik statis (otot).                                                            |
| Beban kerja juru ketik                                            | A. beban otot dan beban visual         | Memerlukan koordinasi motorik halus yang intens serta fokus visual pada dokumen dan layar.                                                  |
| Penyebab keluhan leher, bahu, dan lengan                          | B. tinggi meja yang tidak memadai      | Ketidaksesuaian tinggi meja menyebabkan kontraksi otot statis pada trapezius dan deltoid.                                                   |
| Cara menghindari kilau layar tampilan                             | A. memasang filter anti kilau          | Menggunakan lapisan optik untuk mendifusi cahaya pantul agar tidak mengganggu kontras visual.                                               |
| Tujuan utama perancangan pencahayaan                              | C. menghindari cahaya langsung         | Mengurangi silau (glare) yang mengganggu proses akomodasi mata pada layar.                                                                  |
| Contoh cahaya langsung                                            | C. matahari                            | Sumber radiasi elektromagnetik spektrum luas yang menyebabkan silau primer jika mengenai layar.                                             |
| Cahaya yang dipantulkan dari bahan sekitar layar                  | B. cahaya ruangan                      | Dikenal sebagai indirect lighting yang intensitasnya harus dikontrol agar tidak melebihi luminansi layar.                                   |
| Faktor pencahayaan ruang stasiun kerja                            | A. gunakan sumber cahaya tak langsung  | Mengarahkan cahaya ke langit-langit/dinding untuk menciptakan distribusi pencahayaan yang merata.                                           |
| Mengatasi persoalan bertambah panasnya lingkungan                 | B. menggunakan alat pengontrol udara   | Pengaturan termodinamika ruangan (AC) untuk menjaga suhu operasional perangkat dan kenyamanan termal manusia.                               |
| Risiko kondisi kesehatan di depan stasiun kerja                   | D. kelelahan otot dan persendian       | Akibat dari Repetitive Strain Injury (RSI) dan posisi statis dalam waktu lama.                                                              |
| Indra yang bekerja keras selama bekerja                           | C. mata                                | Organ sensorik utama yang melakukan pengolahan data visual secara konstan.                                                                  |
| Mengubah posisi duduk secara berkala                              | B. memberikan kenyamanan pada pengguna | Melancarkan sirkulasi darah dan redistribusi beban mekanik pada tulang belakang.                                                            |
___