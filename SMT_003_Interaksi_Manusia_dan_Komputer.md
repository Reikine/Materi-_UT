
# Modul 1 Antarmuka Manusia dan Komputer
## Kegiatan 1 Antarmuka Manusia dan Komputer

### Antarmuka Manusia dan Komputer
Prinsip dasar sistem komputer terdiri dari tiga tahap utama:
1. **Masukan (Input):** Pengguna memberikan data berupa angka atau deretan karakter kepada komputer.
2. **Proses (Process):** Komputer mengolah data masukan tersebut.
3. **Keluaran (Output):** Hasil olahan ditampilkan ke layar atau pencetak.

Interaksi terjadi melalui Antarmuka (Interface). Antarmuka yang baik memiliki sifat konsisten, seperti pada paket Microsoft Office (Word, Excel, PowerPoint), sehingga pengguna yang sudah mempelajari satu aplikasi dapat dengan mudah mempelajari aplikasi lainnya.

### Contoh Interaksi melalui Pemrograman
Interaksi manusia dan komputer dapat diimplementasikan melalui kode program sederhana:
1. **Python (Gambar 1.4.a):** Menggunakan statemen raw_input dan input untuk meminta masukan dari pengguna, serta statemen print untuk mencetak keluaran. Perbedaannya: raw_input menerima sembarang karakter, sedangkan input hanya menerima data angka.
2. **Java (Gambar 1.5):** Menggunakan class Scanner dengan metode `nextLine()` untuk input teks dan nextInt() untuk input angka.

### Definisi dan Ruang Lingkup IMK
Interaksi Manusia dan Komputer (IMK) adalah disiplin ilmu yang mempelajari perancangan, implementasi, dan evaluasi sistem komputasi interaktif.
* **Interaksi:** Hubungan dua arah antara pengguna dan sistem komputer yang saling mendukung.
* **Mesin:** Mencakup komputer personal (workstation, laptop) hingga mesin komputasi terpadu seperti mesin cuci, kokpit pesawat, atau microwave.
* **Manusia:** Bisa berupa individu, sekelompok orang dalam organisasi, atau sistem terdistribusi.

### Bidang Ilmu Pendukung IMK
IMK merupakan ilmu multidisiplin yang melibatkan berbagai bidang:
* **Ilmu Komputer:** Perancangan aplikasi, teknik pemrograman, dan struktur data.
* **Psikologi:** Membahas proses kognitif dan perilaku pengguna.
* **Antropologi:** Interaksi antara teknologi, kerja, dan organisasi.
* **Sosiologi:** Pengaruh sistem terhadap struktur sosial.
* **Perancangan Grafis dan Tipografi:** Penggunaan gambar sebagai sarana dialog yang efektif.
* **Teknik Elektronika:** Berhubungan dengan aspek perangkat keras komputer.
* **Ergonomi:** Berhubungan dengan aspek fisik dan kenyamanan lingkungan kerja.
* **Linguistik:** Penggunaan bahasa untuk dialog antara manusia dan mesin.
* **Perancangan Industri:** Membahas produk interaktif seperti teknologi layar sentuh.

### Kunci Jawaban Test Formatif 1
| No   | Jawaban                             | Alasan Singkat Berdasarkan Materi                                                                                     |
| :--- | :---------------------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| 1    | D. input, proses, output            | Sesuai paragraf pertama materi: prinsip dasar sistem komputer adalah masukan, proses, dan keluaran.                   |
| 2    | D. media                            | Interaksi dapat terjadi jika tersedia media interaksi yang diwujudkan dalam bentuk antarmuka (interface).             |
| 3    | A. program aplikasi                 | Karakter user-friendly merujuk pada antarmuka paket aplikasi (seperti MS Office) yang konsisten dan mudah dipelajari. |
| 4    | D. mengetikkan sesuatu              | Interaksi terjadi ketika pengguna memasukkan data (seperti contoh pengetikan pada program Python/Java).               |
| 5    | D. manusia dengan komputer          | Fokus utama disiplin ilmu IMK adalah interaksi antara manusia (pengguna) dengan mesin (komputer).                     |
| 6    | D. Ergonomi                         | Ergonomi mempelajari kenyamanan fisik dan lingkungan kerja antara manusia dan mesin.                                  |
| 7    | A. Psikologi                        | Bidang ini membahas penerapan teori proses kognitif untuk memahami sifat dan perilaku pengguna.                       |
| 8    | C. Perancangan Grafis dan Tipografi | Bidang ini menggunakan gambar dan elemen visual sebagai sarana dialog yang efektif.                                   |
| 9    | B. Linguistik                       | Linguistik membahas penggunaan bahasa (alami maupun formal) sebagai sarana komunikasi/dialog.                         |
| 10   | D. Teknik Elektronika               | Bidang ini memberikan pengetahuan dasar mengenai aspek perangkat keras (hardware) komputer.                           |

## Kegiatan Belajar 2 Pengembangan Antarmuka
### Peranti Bantu Pengembang Sistem
Merancang antarmuka yang ramah pengguna (user-friendly) adalah pekerjaan sulit karena harus menangani berbagai peranti kontrol secara asinkron dan keberagaman kebiasaan pengguna.

#### Sejarah & Perkembangan:
* **Tahun 1980-an:** MacApp dari Apple berhasil mempercepat waktu pengembangan hingga 4-5 kali lipat.
* **Era Modern:** Penggunaan kompilator visual berbasis .NET (Visual BASIC, C#) dan peranti berbasis web (FrontPage, Dreamweaver) untuk pembuatan prototipe cepat.

#### Keuntungan Menggunakan Peranti Bantu:
* **Kualitas Antarmuka:** Hasil rancangan lebih baik, mudah dimodifikasi, konsisten, dan memungkinkan kolaborasi antar ahli (grafis, psikolog, spesialis human factor).
* **Ekonomi & Pemeliharaan:** Program lebih terstruktur/modular, kode dapat digunakan kembali (reusable), keandalan lebih tinggi, dan mudah dipindahkan (porting) ke lingkungan lain.

### Strategi Pengembangan Antarmuka
Sebuah program aplikasi terdiri dari dua bagian utama yang seringkali membutuhkan usaha pengembangan yang sama besarnya (40-50% dari total statemen/memori):
* **Bagian Antarmuka (Interface):** Berfungsi sebagai sarana dialog antara manusia dan komputer.
* **Bagian Aplikasi:** Berfungsi menghasilkan informasi berdasarkan algoritma tertentu.

### Tahapan Garis Besar Pengembangan
Pengembangan bagian antarmuka perlu memperhatikan empat hal berikut:
* Pengetahuan Mekanisme Fungsi Manusia: Memahami psikologi kognitif, tingkat perseptual, dan kemampuan motorik pengguna.
* Karakteristik Dialog: Memperhatikan ragam dialog, struktur, tanggapan waktu, dan kecepatan tampilan.
* Penggunaan Prototipe: Berdasarkan spesifikasi dialog formal yang disusun bersama calon pengguna dan perancang sistem.
* Teknik Evaluasi: Mengevaluasi hasil prototipe melalui analisis transaksi dialog, uji coba empiris, umpan balik pengguna (kuesioner), dan analisis ahli.

### Kunci Jawaban Test Formatif 2
| No   | Jawaban                    | Alasan Singkat Berdasarkan Materi                                                                              |
| :--- | :------------------------- | :------------------------------------------------------------------------------------------------------------- |
|      |
| 1    | A. user-friendly           | Disebutkan pada paragraf awal bahwa predikat "ramah dengan pengguna" merujuk pada kriteria user-friendly.      |
| 2    | B. heterogen               | Teks menyebutkan bahwa selera dan kebiasaan pengguna sangat beragam (tidak seragam/bermacam-macam).            |
| 3    | C. bantu                   | Diperlukan peranti bantu pengembang sistem (development tools) untuk mempercepat proses perancangan.           |
| 4    | B. prototipenya            | Strategi yang tepat adalah membuat prototipe terlebih dahulu sebelum dikembangkan secara umum.                 |
| 5    | A. program bantu yang sama | Konsistensi tercapai karena sejumlah aplikasi dibangun menggunakan peranti bantu yang sama.                    |
| 6    | A. antarmuka dan aplikasi  | Program terdiri dari dua bagian: bagian antarmuka (sarana dialog) dan bagian aplikasi (algoritma).             |
| 7    | B. manusia dengan komputer | Antarmuka berfungsi sebagai sarana dialog antara manusia sebagai pengguna dengan komputer.                     |
| 8    | A. penyajian informasi     | Bagian antarmuka berurusan dengan cara penyajian informasi yang mudah dan menarik bagi pengguna.               |
| 9    | C. frustrasi               | Desain yang buruk atau keterlambatan tanggapan sistem dapat membuat pengguna merasa takut atau frustrasi.      |
| 10   | D. rigid                   | Keuntungan peranti bantu adalah membuat program modular, reusable, dan mudah dimodifikasi, bukan kaku (rigid). |

___

# Modul 2 Faktor Manusia

## Kegiatan 1 Pemodelan Sistem Pengolah (Downtown dan Leedham 1992)
### Pemodelan Sistem Pengolah
Sistem komputer terdiri dari hardware, software, dan brainware. Manusia dimodelkan sebagai sistem pengolah informasi yang memiliki siklus interaksi (masukan $\rightarrow$ pengolah $\rightarrow$ keluaran).
1. **Pengolahan (secara) Sadar dan Otomatis**
    * Sadar: Membutuhkan waktu lama, terjadi pada tindakan baru atau jarang dilakukan.
    * Otomatis: Berlangsung cepat seperti refleks, terjadi karena latihan dan pengalaman (tindakan rutin).
2. **Register Sensori**
    * Berfungsi sebagai penyangga (`buffer`) informasi tak terproses dari indra.
    * Persistensi visual sekitar 0,2 detik dan pendengaran sekitar 2 detik.
3. **Kanal Kapasitas Rendah**
    * Manusia memiliki keterbatasan untuk memproses semua masukan secara serentak.
    * Pengguna harus berkonsentrasi pada bagian tertentu dari medan indra agar informasi dapat diproses.
4. **Pengingat Jangka Pendek**
    * Kapasitas sangat terbatas, yaitu sebesar $7 \pm 2$ chunk (unit informasi).
    * Waktu simpan sangat singkat (20–30 detik) sebelum informasi hilang atau diteruskan.
5. **Pengingat Jangka Panjang**
    * Memiliki kapasitas sangat besar dan bersifat permanen.
    * Penyimpanan berbasis semantik (makna) dan diakses secara asosiatif.
6. **Sikap dan Kecemasan Pengguna**
    * Rasa takut salah atau takut merusak sistem dapat menghambat proses belajar.
    * Desain antarmuka yang ramah dan instruktif sangat penting untuk mengurangi kecemasan.

### Pengendali Motorik
    Respon fisik manusia terhadap hasil pengolahan (tangan, kaki, suara). Kecepatan pengendalian (seperti mengetik) dapat ditingkatkan secara signifikan melalui latihan yang konsisten.

### Kunci Jawaban Test Formatif 1
| No   | Jawaban                    | Alasan Singkat Berdasarkan Materi                                                                    |
| :--- | :------------------------- | :--------------------------------------------------------------------------------------------------- |
|      |
| 1    | D. brainware               | Merujuk pada aspek manusia dalam sistem komputer yang mengolah informasi.                            |
| 2    | A. Central Processing Unit | CPU adalah pusat pengolahan data pada komputer, analog dengan otak manusia.                          |
| 3    | B. multitasking            | Kemampuan sistem untuk menjalankan beberapa pekerjaan sekaligus dalam satu waktu.                    |
| 4    | A. sadar                   | Tindakan yang jarang dilakukan membutuhkan perhatian penuh dan waktu olah lebih lama.                |
| 5    | B. latihan                 | Melalui latihan dan pengalaman, tindakan baru dapat berubah menjadi otomatis (refleks).              |
| 6    | C. perseptual              | Pengolahan yang melayani hubungan dari organ sensorik ke otak disebut pengolahan perseptual.         |
| 7    | C. 3-4-1-2                 | Urutan: sandi (3), banding (4), keputusan (1), lalu eksekusi tindakan (2).                           |
| 8    | A. 0,2 detik               | Register sensori penglihatan memiliki persistensi atau waktu simpan sekitar 0,2 detik.               |
| 9    | C. chunking                | Teknik membagi informasi menjadi beberapa kelompok untuk memudahkan memori jangka pendek.            |
| 10   | C. long-term memory        | Kemampuan motorik (seperti mengendarai sepeda) disimpan secara permanen dalam memori jangka panjang. |

## Kegiatan Belajar 2 Panca Indra dan Lingkungan Sekitar
### Indra Penglihatan
Mata digunakan untuk menghasilkan persepsi terorganisir mengenai gerakan, ukuran, bentuk, jarak, posisi, tekstur, dan warna. Dalam sistem komputer, mata "dipaksa" menginterpretasikan obyek dua dimensi di layar sebagai obyek tiga dimensi.
* **Luminansi (luminance)**
    * Jumlah cahaya yang dipantulkan permukaan obyek (satuan: lilin/meter persegi).
    * Luminansi tinggi meningkatkan kedalaman fokus namun membuat mata sensitif terhadap kedipan (flicker).
* **Kontras**
    * Hubungan antara cahaya obyek dan latar belakangnya (selisih luminansi).
    * Nilai kontras dapat positif (cahaya lebih besar) atau negatif tergantung mana yang lebih besar antara obyek atau latar belakang.
* **Kecerahan**
    * Tanggapan subjektif terhadap cahaya. Luminansi tinggi berimplikasi pada kecerahan yang tinggi pula.
    * Fenomena kisi-kisi Herman menunjukkan ilusi titik hitam/putih pada perpotongan garis akibat perbedaan kecerahan.
* **Sudut dan Ketajaman Penglihatan**
    * Sudut penglihatan (*visual angle*) adalah sudut yang berhadapan dengan obyek pada mata.
    * Ketajaman penglihatan (*visual acuity*) adalah sudut minimum mata untuk melihat obyek dengan jelas.
    * Rumus sudut penglihatan: $\phi = 120 \tan^{-1} \frac{L}{2D}$ (L = tinggi obyek, D = jarak).
* **Medan Penglihatan**
    * Sudut yang dibentuk saat mata bergerak ke kiri dan kanan terjauh. Terbagi menjadi:
      * **Binokuler:** Kedua mata mampu melihat obyek yang sama ($62^\circ - 70^\circ$) dengan daerah sebesar $30^\circ$.
      * **Monokuler:** Dilihat oleh salah satu mata saja ($94^\circ - 104^\circ$).
      * **Area Buta:** Tidak dapat dilihat oleh kedua mata.
    * Medan penglihatan optimum untuk pekerjaan interaktif adalah $\pm 15^\circ$.
* **Warna**
    * Cahaya tampak berada pada spektrum 400–700 nm. Mata mampu membedakan sekitar 128 warna berbeda, dan mata dapat membedakan warna secara akurat saat membentuk sudut $60^\circ$.
    * Psikologi Warna: Warna adalah sensasi sistem saraf. Lensa mata tidak dapat mengoreksi warna secara otomatis (*chromostereopsis*), sehingga warna merah tampak lebih dekat dan biru lebih jauh.
    * Transmisitas Lensa : Lensa menyerap energi spektrum biru dua kali lebih banyak daripada merah/kuning. Penuaan menyebabkan efek "penguningan" lensa, yang mereduksi sensitivitas terhadap panjang gelombang pendek (biru).
    * Persepsi: Penglihatan malam diatur oleh sel rods (tidak peka warna), sedangkan penglihatan warna oleh sel cones (biru, hijau, merah). Buta warna terjadi karena hilangnya fotopigmen tertentu.

#### Saran Penggunaan Warna
Penggunaan warna harus diatur agar tidak menimbulkan ketidaknyamanan mata dan mempermudah pengelompokan informasi.
* **Aspek Psikologis**
    * Gunakan kombinasi warna terbaik berdasarkan latar belakang (lihat Tabel 2.2).
    * Hindari warna biru murni untuk teks atau garis tipis.
    * Gunakan warna berlawanan secara bersamaan (merah-hijau atau kuning-biru) untuk tampilan sederhana. 
* **Aspek Perseptual**
    * Ketajaman dan kecerahan pada layar tidak sama dengan media cetak.
    * Hindari diskriminasi warna pada area kecil; gunakan warna akromatis (hitam, putih, abu-abu) untuk detail tajam.
* **Aspek Kognitif**
    * Jangan gunakan warna berlebihan (maksimal 4-5 warna).
    * Gunakan warna yang sama untuk pesan yang serupa.
    * Warna hangat (panjang gelombang besar) untuk menunjukkan tindakan atau tanggapan yang diperlukan.

#### Optimasi Kombinasi Warna

| Latar Belakang | Rekomendasi Warna Objek (Garis/Teks)  |
| -------------- | ------------------------------------- |
| Putih          | Biru (94%), Hitam (63%)               |
| Hitam          | Putih (75%), Kuning (63%), Biru (81%) |
| Merah          | Kuning (75%), Magenta (81%)           |
| Hijau          | Hitam (100%), Cyan (81%)              |
| Biru           | Putih (81%), Kuning (62%)             |

![alt text](image.png)

### Indra Pendengaran
Pendengaran adalah indera terpenting kedua setelah penglihatan dalam IMK, terutama untuk umpan balik (feedback) multimedia.
* **Frekuensi dan Sensitivitas**
    * Manusia mendeteksi suara pada rentang 20 Hz – 20 kHz.
    * Telinga paling sensitif pada frekuensi 1000 – 4000 Hz.
* **Kebisingan (Loudness)**
    * Diukur dalam satuan Desibel (dB). Percakapan biasa berkisar 50 dB – 70 dB.
    * Suara di atas 140 dB dapat menyebabkan kerusakan telinga.
    * Sensitivitas terhadap frekuensi berkurang jika tingkat kebisingan di bawah 20 dB.

### Indra Peraba
Penting sebagai sarana interaksi ketiga, terutama bagi penyandang tunanetra atau untuk aspek ergonomis.
* **Sensitivitas Tekanan**
    * Jari jemari sangat sensitif terhadap perubahan tekanan, namun sensasi ini akan turun jika tekanan bersifat konstan.
    * Implementasi pada papan ketik (keyboard) sangat dipengaruhi oleh posisi dan bentuk tombol. Tombol yang terlalu berat atau ringan dapat mengganggu kinerja pengetikan.

### Lingkungan Sekitar
Interaksi manusia-komputer dipengaruhi oleh kondisi lingkungan tempat sistem tersebut digunakan.
* **Lingkungan Sosial**
    * Mempengaruhi cara orang berinteraksi melalui komputer (sistem kolaboratif).
    * Ubiquitous Computing: Komputer publik (seperti ATM) harus menjaga privasi pengguna, sementara umpan balik suara harus disesuaikan agar tidak mempermalukan pengguna di depan umum.
* **Lingkungan Kognitif**
Perancangan harus mempertimbangkan dinamika kognitif pengguna:
    * Umur: Anak-anak membutuhkan tantangan yang sepadan dengan kemampuan (Flow Theory) agar tidak bosan atau frustrasi. Pengguna ahli mungkin menganggap animasi tertentu menjengkelkan.
    * Disabilitas: Pentingnya perancangan perkakas informasi yang aksesibel bagi penyandang disabilitas.
    * Derajat Pengetahuan Teknis: Fungsionalitas sistem harus disesuaikan dengan latar belakang teknis pengguna agar efisien.
    * Fokus: Sistem harus mendukung tingkat fokus yang berbeda (misal: pemain game vs pengawas polusi suara).
    * Tekanan Kognitif: Lingkungan dengan risiko tinggi (medis, militer, penerbangan) membutuhkan antarmuka yang sangat jelas dan tidak membingungkan karena tidak ada toleransi terhadap kesalahan.

### Kunci Jawaban Tes Formatif 2
| No   | Jawaban                 | Alasan Singkat Berdasarkan Materi                                                                   |
| :--- | :---------------------- | :-------------------------------------------------------------------------------------------------- |
|      |
| 1    | C. luminance            | Definisi luminansi adalah banyaknya cahaya yang dipantulkan oleh permukaan obyek.                   |
| 2    | A. meningkatkan fokus   | Diameter bola mata mengecil pada luminansi tinggi untuk meningkatkan kedalaman fokus.               |
| 3    | B. kontras              | Kontras didefinisikan sebagai selisih antara luminansi obyek dengan latar belakangnya.              |
| 4    | D. 4 daerah             | Medan penglihatan dibagi menjadi 4 daerah: binokuler, monokuler kiri, monokuler kanan, dan buta.    |
| 5    | C. 94° sampai 104°      | Rentang daerah penglihatan monokuler saat kepala dan mata diam menurut teks.                        |
| 6    | D. ± 60                 | Mata dapat membedakan warna secara akurat ketika obyek membentuk sudut sebesar ± 60° terhadap mata. |
| 7    | A. merah dan biru       | Efek chromostereopsis menyebabkan warna merah tampak lebih dekat dan biru lebih jauh.               |
| 8    | D. magenta, biru, hijau | Contoh kombinasi warna yang baik untuk garis tebal dan teks (berdasarkan Tabel 2.2).                |
| 9    | A. biru                 | Biru dikategorikan sebagai warna dingin yang digunakan untuk status atau informasi latar belakang.  |
| 10   | A. primer               | Merah, kuning, dan biru adalah warna dasar atau primer dalam fotopigmen sel cones.                  |
___

# Modul 3 Kerangka Kerja dan Paradigma Interaksi

## Kegiatan 1 Kerangka Kerja untuk Memahami Interaksi
### Siklus Tindakan Eksekusi/Evaluasi
Donald Norman (1990) memperkenalkan konsep siklus tindakan eksekusi/evaluasi untuk memahami bagaimana manusia berinteraksi dengan obyek di dunia nyata.
* **Empat Bagian Dasar:**
    * **Gol (goal):** Kejadian spesifik yang diinginkan oleh pengguna.
    * **Eksekusi:** Melakukan tindakan nyata di dunia nyata.
    * **Dunia Nyata:** Tempat manipulasi obyek terjadi.
    * **Evaluasi:** Validasi hasil tindakan dengan membandingkannya terhadap gol awal.
* **Tujuh Langkah Tindakan:**
Siklus di atas dijabarkan menjadi tujuh langkah operasional:
    * **Fase Eksekusi:** (**1**) Menentukan gol, (**2**) Membentuk keinginan, (**3**) Menentukan urutan tindakan, (**4**) Mengeksekusi tindakan.
    * **Fase Evaluasi:** (**5**) Memahami status dunia nyata, (**6**) Menginterpretasikan persepsi, (**7**) Mengevaluasi hasil interpretasi.
* **Jarak Pemisah (Gulfs):**
    * **Jarak Pemisah Eksekusi:** Perbedaan antara keinginan pengguna dengan apa yang dapat dilakukan sistem. Semakin besar jarak ini, semakin besar potensi frustrasi pengguna.
    * **Jarak Pemisah Evaluasi:** Tingkat kesulitan pengguna untuk mengartikan status sistem (misal: apakah proses instalasi sedang berjalan atau berhenti).

### Kerangka Kerja Interaksi
Abowd dan Beale memperluas siklus Norman dengan memasukkan elemen sistem secara eksplisit. Kerangka kerja ini terdiri atas empat komponen utama:
* **Komponen Utama:**
    * **Sistem (S):** Menggunakan bahasa mesin (atribut komputasi).
    * **Pengguna (P):** Menggunakan bahasa tugas (atribut psikologis).
    * **Masukan (M):** Menggunakan bahasa masukan.
    * **Keluaran (K):** Menggunakan bahasa keluaran.
* **Fase Interaksi:**
    * **Fase Eksekusi:**
        * **Artikulasi:** Pengguna memformulasikan gol ke dalam bahasa masukan.
        * **Pengerjaan:** Bahasa masukan diterjemahkan ke dalam bahasa mesin oleh sistem.
        * **Penyajian:** Sistem menyajikan hasil operasi dalam bahasa keluaran.
    * **Fase Evaluasi:**
        * **Observasi:** Pengguna mengartikan hasil di layar dan mencocokkannya dengan gol semula.
* **Analisis Kesulitan:**
    * Kesulitan sering muncul pada langkah Artikulasi jika pemetaan antara bahasa tugas dan bahasa masukan tidak jelas (misal: bingung mencari ikon untuk fungsi tertentu).
    * Keberhasilan Penyajian diukur dari tingkat ekspresivitas penerjemah status sistem (misal: penggunaan ikon jam pasir untuk menunjukkan sistem sedang bekerja).

#### Kunci Jawaban Test Formatif 1
| No   | Jawaban                        | Alasan Singkat Berdasarkan Materi                                                             |
| :--- | :----------------------------- | :-------------------------------------------------------------------------------------------- |
|      |
| 1    | A. gol                         | Goal adalah kejadian atau hasil akhir yang diinginkan oleh pengguna.                          |
| 2    | B. membentuk keinginan         | Termasuk dalam langkah ke-2 dari fase eksekusi menurut siklus Norman.                         |
| 3    | A. memahami status dunia nyata | Langkah pertama dalam fase evaluasi untuk memvalidasi hasil tindakan.                         |
| 4    | A. pengguna dan sistem         | Gulf of execution adalah perbedaan antara keinginan pengguna dan dukungan sistem.             |
| 5    | B. dua fase                    | Kerangka kerja SPMK terdiri dari fase eksekusi dan fase evaluasi.                             |
| 6    | A. eksekusi                    | Penerjemahan bahasa masukan ke mesin terjadi pada langkah pengerjaan (fase eksekusi).         |
| 7    | B. evaluasi                    | Mencocokkan hasil layar dengan gol semula adalah inti dari fase evaluasi (langkah observasi). |
| 8    | C. penyajian                   | Sistem menyajikan hasil operasi dalam bahasa keluaran merupakan bagian dari eksekusi.         |
| 9    | B. pengerjaan                  | Proses sistem menggunakan data masukan untuk operasi internal disebut pengerjaan.             |
| 10   | A. eksekusi                    | Indikator proses (seperti jam pasir) muncul saat fase eksekusi (langkah penyajian).           |

## Kegiatan 2 Mengatasi Kompleksitas
### Model Mental
Model mental adalah penyajian kognitif tentang perkiraan logis bagaimana suatu benda dibentuk atau berfungsi.
* **Affordance:** Atribut obyek yang memberikan petunjuk penggunaan (contoh: gagang pisau untuk digenggam).
* **Karakteristik Model Mental:**
    * Tidak ilmiah: Berdasarkan perkiraan atau tebakan.
    * Tidak lengkap: Tidak menjelaskan sistem secara keseluruhan.
    * Tidak stabil: Beradaptasi dengan konteks.
    * Tidak konsisten: Sering tidak kompatibel satu dengan lainnya.
    * Personal: Unik untuk setiap individu.
* **Model Konseptual vs Model Mental:**
    * Model Konseptual: Model yang diciptakan oleh perancang untuk sistem.
    * Gambaran Sistem: Dokumentasi dan antarmuka yang terlihat oleh pengguna.
    * Model Mental (Pengguna): Diciptakan pengguna saat berinteraksi dengan gambaran sistem.
    * Idealnya: Model mental pengguna harus sama dengan model konseptual perancang.

### Pemetaan
Konsep tentang bagaimana pengguna menghubungkan satu benda dengan benda lain.
* **Pemetaan Alami:** Tata letak yang intuitif (contoh: saklar kiri mengendalikan lampu kiri).
* **Pemetaan Sembarangan:** Memaksa pengguna mengingat hubungan yang tidak logis, sering memicu kesalahan.

### Jarak Semantik dan Artikulatori
* **Jarak Semantik:** Jarak antara fungsionalitas yang tersedia dengan apa yang ingin dilakukan pengguna. Berkaitan dengan kedayagunaan (usefulness).
* **Jarak Artikulatori:** Jarak antara penampakan fisik peranti dengan fungsinya yang sesungguhnya.

### Affordance
Hubungan antara obyek dengan pengguna melalui persepsi.
* Perancang harus meyakinkan bahwa affordance nampak nyata dan tidak kontradiktif (contoh kesalahan: kotak teks yang terlihat seperti tombol label, atau sebaliknya).
* Persepsi yang tepat terhadap affordance membantu pengguna memahami kebergunaan (usability) sistem.

### Kunci Jawaban Test Formatif
| No   | Jawaban                                                                      | Alasan Singkat Berdasarkan Materi                                                                                 |
| :--- | :--------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------- |
|      |
| 1    | C. mental                                                                    | Model mental adalah kerangka kerja kognitif yang diciptakan pengguna saat berinteraksi dengan sistem.             |
| 2    | A. kognitif                                                                  | Model mental didefinisikan sebagai penyajian kognitif dari suatu proses atau obyek.                               |
| 3    | C. pengalaman                                                                | Pembentukan model mental sangat bergantung pada pengetahuan dan pengalaman yang diperoleh sebelumnya.             |
| 4    | C. merasa senang menggunakan sistem tersebut                                 | Jika model mental sesuai dengan cara kerja sistem, pengguna dapat menggunakannya tanpa kesulitan.                 |
| 5    | D. parsial                                                                   | Salah satu sifat model mental adalah tidak lengkap (parsial) atau tidak menjelaskan sistem secara keseluruhan.    |
| 6    | A. wawancara dengan pengguna                                                 | Melalui wawancara atau discovery phase, perancang dapat memahami model mental yang dimiliki pengguna.             |
| 7    | B. fungsionalitas suatu peranti dengan yang sesungguhnya diinginkan pengguna | Jarak semantik mengukur kecocokan antara fungsi sistem dengan kebutuhan tugas pengguna.                           |
| 8    | A. penampakan fisik suatu peranti dengan fungsi yang sesungguhnya            | Jarak artikulatori mengacu pada seberapa jelas bentuk fisik peranti menunjukkan fungsinya.                        |
| 9    | D. sulit menggunakannya                                                      | Rendahnya affordance berarti sedikit petunjuk penggunaan, sehingga pengguna sulit mempelajari dan menggunakannya. |
| 10   | C. pelat besi                                                                | Pintu dengan pelat besi sering membingungkan (apakah ditarik atau didorong) dibandingkan dengan hendel atau knop. |

## Kegiatan 3 Paradigma Interaksi
### Antarmuka Berpusat-Pada-Implementasi (BPI)
Antarmuka ini diekspresikan berdasarkan cara sistem dibentuk atau cara kerjanya.
* **Landasan:** Pemahaman tentang mekanisme program (satu tombol untuk satu fungsi, satu dialog untuk satu modul).
* **Karakteristik:** Sangat memuaskan bagi insinyur/perancang yang ingin tahu cara mesin bekerja, namun seringkali menyulitkan pengguna awam karena terlalu kompleks.

### Antarmuka Metaforik
Bergantung pada hubungan intuitif antara simbol visual dengan fungsinya berdasarkan benda nyata di dunia maya.
* **Landasan:** Intuisi pengguna. Contoh: ikon gunting untuk memotong (cut), ikon buku cek untuk pembayaran.
* **Kelebihan:** Membantu pengguna mengenali maksud komponen secara instan jika metaforanya tepat.

### Keterbatasan Metorik
Meskipun populer, paradigma metaforik memiliki risiko yang signifikan:
* **Sulit Ditemukan:** Tidak semua fungsi aplikasi memiliki padanan benda nyata (misal: memutar perkakas atau mengubah resolusi layar).
* **Membatasi Kemampuan Pikir:** Memaksa pengguna mengikuti logika mekanis benda nyata yang mungkin tidak efisien di komputer.
* **Ketergantungan Budaya:** Simbol tertentu mungkin tidak dipahami oleh pengguna dari latar belakang budaya berbeda.
* **Masalah Skalabilitas:** Metafora yang cocok untuk kapasitas kecil (misal: floppy disk) menjadi tidak relevan untuk kapasitas besar (TB).

### Antarmuka Idiomatik
Paradigma ini didasarkan pada cara manusia belajar menggunakan "idiom" visual tanpa harus tahu mekanisme teknis atau kaitan metaforiknya.
* **Landasan:** Pembelajaran dan ingatan pengguna terhadap perilaku sederhana.
* **Karakteristik:** Tidak fokus pada "bagaimana benda berfungsi" tetapi pada "bagaimana cara menggunakannya secara cepat".
* **Contoh:** Jendela (windows), papan judul (title bars), hyperlink, dan dropdown. Kebanyakan elemen grafis yang kita anggap "intuitif" sebenarnya adalah idiom visual.
  
### Membangun Idiom
Menurut Cooper dan Reimann (2003), perancangan idiomatik adalah masa depan antarmuka.
* Manusia memiliki kemampuan belajar idiom yang sangat cepat tanpa perlu perbandingan dengan benda nyata.
* Idiom visual lebih fleksibel dan memberikan manfaat yang lebih besar dibandingkan beban tambahan dari metafora yang dipaksakan.

### Jawaban Test Formatif 3
| No   | Jawaban               | Alasan Singkat Berdasarkan Materi                                                                        |
| :--- | :-------------------- | :------------------------------------------------------------------------------------------------------- |
|      |
| 1    | D. teknis             | Kalangan teknis (insinyur) lebih menyukai BPI karena menunjukkan cara kerja mesin secara jelas.          |
| 2    | C. model implementasi | Perancangan BPI mengharuskan perancang berfokus secara eksklusif pada model implementasi sistem.         |
| 3    | B. metaphoric         | Paradigma metaforik didasarkan pada intuisi pengguna tentang cara kerja suatu benda nyata.               |
| 4    | C. idiomatic          | Paradigma idiomatik didasarkan pada proses pembelajaran manusiawi yang alami terhadap simbol visual.     |
| 5    | B. metaphoric         | Ikon gunting adalah metafora visual untuk fungsi memotong (cut) yang diambil dari benda nyata.           |
| 6    | B. metaphoric         | Menggunakan pengetahuan tentang keranjang sampah nyata untuk memahami fungsi ikon adalah ciri metaforik. |
| 7    | C. pembelajaran       | Paradigma idiomatik difokuskan pada bagaimana pengguna belajar menggunakan idiom visual secara cepat.    |
| 8    | D. desktops           | Desktop, file, dan folder adalah elemen GUI yang menggunakan metafora dari lingkungan kantor nyata.      |
| 9    | A. visual             | Simbol keranjang belanja (shopping cart) adalah metafora visual untuk menyajikan maksud tertentu.        |
| 10   | B. indexical metaphor | Tanda seru berfungsi sebagai metafora indeksikal yang menunjukkan peringatan atau status penting.        |

___

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

### Kunci Jawaban Test Formatif 1
| No   | Jawaban                                          | Alasan Singkat Berdasarkan Materi                                                            |
| :--- | :----------------------------------------------- | :------------------------------------------------------------------------------------------- |
|      |
| 1    | C. penundaan evaluasi "sampai waktu luang"       | Termasuk dalam daftar kesalahan klasik perancang (poin ke-7).                                |
| 2    | A. karakter                                      | Karakter (fitur tampilan) digunakan untuk menangkap kesan subjektif pengguna.                |
| 3    | D. konsistensi                                   | Aturan pertama Shneiderman untuk mencapai kepuasan berinteraksi.                             |
| 4    | B. fasilitas kunci-cepat                         | Fitur untuk mempercepat interaksi bagi pengguna yang sering menggunakan sistem.              |
| 5    | D. umpan balik yang inovatif                     | Penyajian visual yang menunjukkan perubahan eksplisit adalah bagian dari aturan umpan balik. |
| 6    | A. awal, tengah, dan akhir                       | Urutan tindakan harus diorganisir ke dalam tiga bagian kelompok tersebut (closure).          |
| 7    | C. pencegahan kesalahan dan penanganan kesalahan | Aturan yang mensyaratkan deteksi kesalahan dan instruksi pemulihan konstruktif.              |
| 8    | B. pembalikan tindakan yang mudah                | Fitur reversible (dapat dibatalkan) untuk mengurangi kecemasan pengguna saat bereksplorasi.  |
| 9    | D. locus of control internal                     | Aturan yang mendukung keinginan pengguna untuk merasa berkuasa/mengendalikan sistem.         |
| 10   | C. sederhana                                     | Tampilan sederhana meminimalkan beban pengolahan informasi pada memori jangka pendek.        |

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

### Kunci Jawaban Test Formatif 2
| No   | Jawaban                                                  | Alasan Singkat Berdasarkan Materi                                                                           |
| :--- | :------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------- |
|      |
| 1    | C. used                                                  | Sistem yang memotivasi pengguna untuk terus menggunakannya disebut dengan "digunakan" (used).               |
| 2    | D. learnability                                          | Komponen kualitas yang merujuk pada kemudahan sistem untuk dipelajari oleh pengguna baru.                   |
| 3    | B. memorability                                          | Kemampuan sistem untuk mudah diingat kembali oleh pengguna yang jarang menggunakannya.                      |
| 4    | A. efficiency                                            | Cara sistem mendukung pengguna untuk melakukan pekerjaan secara cepat dan tepat.                            |
| 5    | D. kebergunaan                                           | Uji kebergunaan adalah proses untuk mengukur karakteristik interaksi dan mengidentifikasi kelemahan sistem. |
| 6    | A. uji eksploratori, uji threshold, dan uji perbandingan | Tiga jenis uji kebergunaan menurut klasifikasi Levi dan Conrad (1997).                                      |
| 7    | D. sumatif                                               | Uji sumatif memberikan penilaian pada produk jadi atau membandingkannya dengan produk sejenis.              |
| 8    | D. besar menjadi bagian-bagian yang lebih kecil          | Tujuan pemilahan kartu (card sorting) adalah menyederhanakan hirarki informasi agar lebih intuitif.         |
| 9    | A. heuristik                                             | Evaluasi yang melibatkan ahli IMK untuk mengidentifikasi masalah berdasarkan prinsip kebergunaan.           |
| 10   | A. uji berbasis skenario                                 | Pengujian di mana pengguna akhir diminta menyelesaikan tugas tertentu yang sudah dirancang sebelumnya.      |

___

# Modul 5 Manipulasi Langsung

## Kegiatan 1 : Manipulasi Langsung
### Aspek Kognitif Pada Manipulasi Langsung
Manipulasi langsung adalah ragam dialog di mana pengguna melakukan tindakan fisik (seperti menggeser berkas ke kotak sampah) yang hasilnya langsung terlihat secara visual.
* **Directness (Kesan Langsung):** Terbagi menjadi dua aspek:
    * **Jarak (Distance):** Jarak antara apa yang dipikirkan pengguna dengan kebutuhan fisik sistem. Jarak pendek berarti sistem mendukung tujuan pengguna dengan mudah.
    * **Keterlibatan (Engagement):** Perasaan kualitatif seolah pengguna memanipulasi obyek secara langsung (seperti bermain kartu Solitaire), bukan sekadar menjalankan perintah komputer.
* **Metafora Model Dunia:** Antarmuka harus menyajikan obyek yang terasa nyata bagi pengguna. Pengguna tidak lagi menggunakan "bahasa percakapan" (mengetik perintah), tetapi melakukan tindakan langsung pada representasi obyek tersebut.

### Manipulasi Program Vs Manipulasi Isi
* **Manipulasi Program:** Berfokus pada pengelolaan program itu sendiri (memilih, menggeser, mengubah ukuran jendela, atau menghubungkan obyek).
* **Manipulasi Isi:** Berfokus pada data di dalam program. Contohnya pada aplikasi grafis seperti CorelDRAW atau Photoshop, di mana pengguna secara langsung mengubah bentuk atau warna elemen visual.

### Fase Pada Proses Manipulasi Langsung
Terdapat tiga fase utama dalam interaksi manipulasi langsung:
* **Fase Bebas:** Sebelum tindakan dilakukan (kursor bergerak bebas di atas obyek).
* **Fase Aktivasi:** Pengguna mulai melakukan tindakan fisik (misal: klik dan geser).
* **Fase Penghentian:** Pengguna melepas tindakan dan sistem menunjukkan hasilnya secara pasti.

### Umpan Balik Visual
Keberhasilan manipulasi langsung sangat bergantung pada umpan balik visual yang lengkap:
* Perubahan bentuk kursor (misal: menjadi simbol tangan saat menggeser).
* Penggunaan kunci-meta (seperti Ctrl atau Shift) untuk operasi tambahan seperti penggandaan obyek.
* Visualisasi garis batas saat menggeser obyek yang kompleks untuk menjaga performa sistem.

### Penerapan Manipulasi Langsung
Penerapan manipulasi langsung ditemukan pada berbagai bidang:
* **Kontrol Proses:** Panel kontrol industri berbasis grafis (misal: pembangkit listrik).
* **Editor Teks:** Konsep WYSIWYG (What You See Is What You Get).
* **Simulator:** Simulator pesawat terbang yang meniru kokpit nyata.
* **Kontrol Lalu Lintas Penerbangan:** Sistem radar yang merefleksikan posisi pesawat secara real-time.
* **Perancangan Terbantu Komputer (CAD):** Penggunaan AutoCAD untuk merancang model 3D.

### Keuntungan dan Kerugian Manipulasi Langsung
| Keuntungan                                           | Kerugian                                                     |
| :--------------------------------------------------- | :----------------------------------------------------------- |
|                                                      |
| Mempunyai analogi yang jelas dengan pekerjaan nyata. | Memerlukan program yang rumit dan berukuran besar.           |
| Mengurangi waktu pembelajaran bagi pengguna.         | Memerlukan tampilan grafis berkinerja tinggi.                |
| Memberikan tantangan untuk eksplorasi pekerjaan.     | Memerlukan peranti masukan khusus (mouse, trackball).        |
| Penampilan visual yang bagus dan mudah dioperasikan. | Memerlukan perancangan tampilan dengan kualifikasi tertentu. |

### Kunci Jawaban Test Formatif 1
| No   | Jawaban                                          | Alasan Singkat Berdasarkan Materi                                                                       |
| :--- | :----------------------------------------------- | :------------------------------------------------------------------------------------------------------ |
|      |
| 1    | B. tindakan fisik sebagai pengganti teks masukan | Tiga elemen manipulasi langsung: penyajian visual, tindakan fisik, dan reaksi langsung.                 |
| 2    | A. ide utama dari manipulasi langsung            | Preece (1994) menyebutkan penggantian perintah ketik dengan tindakan menunjuk sebagai ide utama.        |
| 3    | C. keterlibatan                                  | Hutchin et al. (1985) membagi directness menjadi dua aspek: jarak dan keterlibatan (engagement).        |
| 4    | D. cara pengguna menggunakan program aplikasi    | Definisi manipulasi program yang berfokus pada pengelolaan peranti/program itu sendiri.                 |
| 5    | B. Adobe Photoshop                               | Aplikasi grafis berorientasi pada manipulasi isi (data visual) daripada sekadar perintah program.       |
| 6    | A. manipulasi langsung                           | Umpan balik segera (immediate feedback) adalah fitur utama dari antarmuka manipulasi langsung.          |
| 7    | D. bebas                                         | Fase bebas adalah tahap sebelum tindakan dilakukan, di mana hanya jenis manipulasi yang ditunjukkan.    |
| 8    | A. editor teks                                   | Konsep WYSIWYG pada editor teks memberikan kemudahan hasil cetak sesuai tampilan layar.                 |
| 9    | C. mengurangi waktu pembelajaran                 | Salah satu keuntungan utama karena menggunakan analogi benda nyata yang sudah dikenal.                  |
| 10   | B. memerlukan tampilan grafis berkinerja tinggi  | Manipulasi langsung membutuhkan sumber daya sistem yang besar untuk menampilkan reaksi visual seketika. |

## Kegiatan 2 : Piranti Penunjuk
### Piranti Penunjuk
Tetikus (mouse) adalah peranti interaktif paling populer untuk menempatkan kursor, mengaktifkan menu, hingga menggambar. Informasi posisi dikirim ke komputer untuk memindahkan kursor secara real-time.
* **Variasi Tombol:**
    * Satu Tombol (Apple/Macintosh): Menekankan pada kesederhanaan, meski pengguna harus sering mengulang klik untuk perintah tertentu.
    * Dua Tombol (Microsoft/Windows): Menambah kombinasi informasi (klik kiri dan kanan).
    * Tiga Tombol (Unix/Sun): Memungkinkan hingga 7 kombinasi berbeda (sering digunakan untuk aplikasi teknis tertentu).

### Penggunaan Mouse
Penggunaan tombol kanan mulai populer sejak Windows 95 untuk mengakses context menu (properti obyek), yang sebelumnya dianggap opsional oleh perancang lain.
* **Tombol Kiri:** Digunakan untuk fungsi manipulasi langsung (mengaktifkan, memilih, menggambar). Ini adalah fungsi utama untuk pemilihan data.
* **Tombol Kanan:** Digunakan untuk fungsi tingkat tinggi atau tambahan, seperti memunculkan kotak dialog properti obyek.
* **Tombol Tengah:** Jarang dimanfaatkan di pasaran umum, biasanya digunakan untuk tombol singkat atau pengaturan driver khusus.

### Menunjuk dan Mengklik Menggunakan Mouse
Interaksi dasar manusia dengan mouse melibatkan kombinasi operasi berikut:
* **Menunjuk:** Dasar dari semua operasi; menggerakkan kursor hingga berada di atas obyek. Obyek dapat "merasakan" kehadiran kursor (disebut pliansi atau pliancy).
* **Meng-klik:** Menekan dan melepas tombol. Digunakan untuk memicu perubahan status obyek atau memilihnya. Sistem juga menyediakan "rute keluar" jika pengguna menekan tombol tapi tidak jadi melepasnya di atas obyek (berubah pikiran).
* **Meng-klik dan Menggeser:** Operasi umum untuk memilih banyak obyek, mengubah bentuk, memindah obyek (drag and drop), atau menggambar.
* **Meng-klik Ganda:** Dianggap sebagai dua kali klik tunggal, namun secara fungsional berbeda. Klik tunggal biasanya untuk memilih (select), sedangkan klik ganda untuk melakukan tindakan (action/open).

### Kunci Jawaban Test Formatif 2
| No   | Jawaban            | Alasan Singkat Berdasarkan Materi                                                                      |
| :--- | :----------------- | :----------------------------------------------------------------------------------------------------- |
|      |
| 1    | A. tetikus         | Mouse dalam Bahasa Indonesia secara resmi disebut sebagai tetikus.                                     |
| 2    | D. satu            | Apple tetap menggunakan tetikus dengan satu tombol untuk Macintosh-nya demi kesederhanaan.             |
| 3    | B. dua             | Microsoft menggunakan tetikus dua tombol untuk mendukung fungsi operasional sistemnya.                 |
| 4    | C. kiri            | Tombol kiri adalah tombol utama yang digunakan untuk fungsi pemilihan dan manipulasi langsung.         |
| 5    | B. tengah          | Tombol tengah masih jarang dimanfaatkan secara umum, biasanya untuk shortcut atau pengaturan khusus.   |
| 6    | A. kanan           | Tombol kanan memungkinkan akses langsung ke properti obyek melalui context menu (pop-up menu).         |
| 7    | C. menunjuk        | Operasi menunjuk (pointing) adalah dasar untuk menggerakkan kursor sampai berada di atas obyek target. |
| 8    | B. menggeser       | Operasi drag and drop digunakan untuk memindah, menggambar, atau mengubah dimensi obyek.               |
| 9    | D. meng-klik       | Definisi operasional meng-klik adalah menekan tombol tetikus lalu melepasnya dalam keadaan diam.       |
| 10   | C. meng-klik ganda | Klik ganda diinterpretasikan sebagai klik tunggal yang diteruskan dengan tindakan (action) tertentu.   |

___

# Modul 6 Antarmuka Berbasis Menu

## Kegiatan 1 Menu
### Organisasi Menu Berbasis Tugas
Tujuan utama perancangan menu adalah menciptakan struktur yang pantas, intuitif, dan sesuai dengan tugas pengguna.
* **Struktur Organisasi:**
    * Hirarkis: Pemecahan menu secara logis (seperti bab dalam buku).
    * Jejaring Menu: Item yang memiliki lebih dari satu kategori induk.
* **Kategori Menu:**
    * Menu Tunggal: Pilihan sederhana.
    * Urutan Linear: Menuntun pengguna setahap demi setahap.
    * Struktur Pohon: Paling umum, memiliki cabang sub-menu.
    * Jaring Menu: Terbagi menjadi jaring tidak berputar dan jaring berputar (siklik).

### Menu Tunggal
Menu yang mengharuskan pengguna memilih satu atau lebih opsi dari sekumpulan pilihan yang tersedia.
* **Menu Biner:** Hanya dua pilihan (Ya/Tidak). Menggunakan warna atau garis bawah untuk pilihan standar.
* **Menu Tunggal dengan Banyak Pilihan:** 
    * Tombol Radio (radio button): Pilih satu dari banyak.
    * Kotak Cek (checkbox): Pilih lebih dari satu.

### Variasi Jenis Menu
Teknik penyajian menu untuk efisiensi ruang layar:
* **Menu Datar dan Selektor Pilihan:** Menampilkan seluruh pilihan di satu layar.
    * Selektor Kompatibel: Menggunakan huruf awal kata (misal: B untuk Baca). Paling mudah diingat.
    * Selektor Tak Kompatibel: Menggunakan angka atau huruf sembarang.
* **Menu Tarik (dropdown):** Menghemat ruang dengan menyembunyikan pilihan di bagian atas jendela.
    * Simbol (...): Memanggil kotak dialog.
    * Simbol ($\blacktriangleright$): Memiliki sub-menu.
* **Menu Berbasis Ikon dan Toolbar:** Representasi visual untuk akses cepat tanpa teks panjang.
* **Menu dengan Pilihan Panjang:**
    * Menu Gulung (scrolling menu): Pilihan diurutkan alfabetis dalam area terbatas.
    * Kotak Kombo (combo box): Gabungan antara kotak teks dan menu gulung.
    * Menu Mata Ikan (fisheye menu): Menampilkan semua pilihan, namun memperbesar item di dekat kursor.
    * Penggeser (slider): Untuk memilih nilai di antara dua batas.
    * Menu Dua Dimensi: Pilihan disusun dalam bentuk tabel/kisi (seperti menu pada Web).
* **Menu dan Hotlink Tertanam:** Menu yang menyatu dalam teks atau gambar (seperti hyperlink atau balon informasi pada citra satelit).
* **Menu Breadcrumb:** Menampilkan jejak navigasi pengguna (lokasi saat ini dalam hirarki Web).

### Menu Kombinasi
Gabungan berbagai struktur untuk menangani sistem yang sangat kompleks.
* **Menu Linear dan Menu Serempak:**
    * Linear: Untuk pengambilan keputusan berurutan (misal: proses belanja online).
    * Serempak: Menampilkan banyak pilihan sekaligus secara bebas (misal: filter pencarian pada Amazon).
* **Menu Berstruktur Pohon:** Pengelompokan berdasarkan kriteria unik untuk memudahkan pemeliharaan sistem besar.
* **Peta Situs (Sitemap):** Ringkasan seluruh struktur hirarki situs Web untuk mencegah disorientasi pengguna.
* **Jaring Menu Tak Berputar dan Berputar:** Memberikan keleluasaan bergerak antar cabang menu tanpa harus selalu kembali ke menu utama terlebih dahulu.

### Kunci Jawaban Test Formatif 1
| No   | Jawaban                | Alasan Singkat Berdasarkan Materi                                                                               |
| :--- | :--------------------- | :-------------------------------------------------------------------------------------------------------------- |
|      |
| 1    | C. perancangan sistem  | Pengorganisasian tugas adalah salah satu faktor krusial dalam merancang antarmuka menu yang efektif.            |
| 2    | D. jaring tak berputar | Skema tersebut menunjukkan struktur jaring tak berputar (non-cyclic network) di mana item memiliki jalur ganda. |
| 3    | A. biner               | Dialog konfirmasi "Yakin/Tidak" adalah contoh klasik dari menu biner (dua pilihan).                             |
| 4    | B. datar               | Menu yang menampilkan seluruh pilihan di layar (seperti terminal atau sistem lama) disebut menu datar.          |
| 5    | C. gulung              | Menu gulung (scrolling menu) digunakan untuk menampilkan daftar panjang dalam area kerja yang terbatas.         |
| 6    | C. kotak kombo         | Gambar menunjukkan combo box, peranti yang menggabungkan kotak teks dengan menu gulung.                         |
| 7    | B. sambungan tertanam  | Embedded link memungkinkan pengguna melihat informasi sesuai konteks tanpa menghabiskan ruang layar.            |
| 8    | A. mata ikan           | Menu mata ikan (fisheye) memberikan pembesaran pada item dekat kursor dan mengecilkan yang jauh.                |
| 9    | D. berstruktur pohon   | Untuk jumlah pilihan sangat besar, perancang mengelompokkannya ke dalam hirarki atau struktur pohon.            |
| 10   | B. disorientasi        | Disorientasi adalah fenomena di mana pengguna kehilangan arah saat menu terlalu dalam (deep menu).              |

## Kegiatan 2 Cara Mengorganisasi Pilihan
### Pengelompokkan Berbasis Tugas Pada Struktur Pohon
Pengelompokan pilihan harus logis dan sesuai dengan tugas pengguna agar mudah dipahami.
* **Kategorisasi Logis:** Satukan item yang serupa (misal: nama negara dikuti provinsi, lalu kota).
* **Berdasarkan Nilai:** Pengelompokan berdasarkan kriteria tertentu, seperti rentang umur (0-9, 10-19, dst).
* **Kesesuaian Alamiah:** Hubungkan pilihan secara intuitif, misalnya kategori "Hiburan" yang membawahi "Konser" dan "Olahraga".
* **Istilah Sederhana:** Gunakan istilah yang familiar dan bedakan dengan jelas antar pilihan (misal: "Pagi" vs "Malam").

### Urutan Penyajian Pilihan
Setelah kategori ditentukan, urutan item di dalam menu harus diatur berdasarkan:
* **Dasar Umum:** Waktu (kronologis), numeris (urut naik/turun), atau sifat fisik (berat, panjang, dsb).
* **Kepentingan Tugas:**
    * Item paling penting diletakkan di urutan pertama.
    * Item paling sering digunakan diletakkan di bagian atas.
    * Kelompokkan item yang saling terkait dengan pemisah (garis kosong).
    * Urutan alfabetis untuk daftar yang tidak memiliki hierarki kepentingan.
* **Menu Adaptif:** Variasi di mana item yang jarang digunakan disembunyikan untuk memperpendek daftar (contoh pada Office 2000). Namun, ini bisa membingungkan jika posisi menu berubah-ubah.

### Tata Letak Menu
Penilaian subjektif terhadap tata letak sangat mempengaruhi kebergunaan:
* **Judul Menu:**
    * Gunakan judul yang unik, menarik, dan informatif.
    * Judul harus mencerminkan isi (misal: "Transaksi Bank" lebih jelas daripada "Menu Utama").
    * Pertahankan posisi menu yang tetap agar pengguna tidak perlu mencari ulang.
* **Pemilihan Ungkapan:**
    * Gunakan terminologi yang dikenal dan konsisten.
    * Gunakan ungkapan singkat namun jelas.
    * Gunakan kata kunci sebagai awal ungkapan untuk mempercepat pemindaian visual.
* **Tata Letak Grafis:**
    * Penulisan Judul: Rapi di tengah atau kiri (biasanya kiri lebih disukai untuk kecepatan baca).
    * Penempatan Pilihan: Gunakan nomor atau huruf secara lengkap. Gunakan baris kosong untuk memisahkan kelompok kolom jika daftar sangat panjang.
    * Penunjuk: Gunakan simbol atau tombol fungsi yang seragam untuk setiap menu.
    * Pesan Kesalahan: Harus muncul pada posisi konsisten dengan bahasa yang instruktif.
    * Laporan Status: Tunjukkan posisi pengguna saat ini dalam hierarki (seperti breadcrumb atau perubahan jenis huruf).

### Kunci Jawaban Test Formatif 2

| No  | Jawaban                                             | Alasan Teknis & Logika                                                                                                          |
| --- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| 1   | C. satukan pilihan-pilihan yang secara logis serupa | Pengelompokan semantik meminimalkan beban kognitif dalam pencarian informasi di dalam hierarki.                                 |
| 2   | D. sifat fisik                                      | Penyajian menu harus didasarkan pada atribut fisik yang terukur (seperti panjang teks atau frekuensi) untuk optimalisasi akses. |
| 3   | A. sudah dikenal dan konsisten                      | Terminologi yang familier memastikan kesesuaian antara model mental pengguna dengan sistem.                                     |
| 4   | D. satu kali lebih lama...                          | Konsistensi posisi memungkinkan pemanfaatan motor memory; perubahan posisi memaksa mata melakukan pemindaian ulang.             |
| 5   | C. penulisan judul                                  | Rata kiri pada judul merupakan standar konsistensi visual untuk mempercepat proses scanning teks.                               |
| 6   | C. penempatan pilihan                               | Penggunaan ruang kosong dan penomoran adalah teknik organisasi spasial untuk membedakan kategori pilihan.                       |
| 7   | B. pesan kesalahan                                  | Merupakan mekanisme umpan balik (feedback) saat sistem menerima input yang tidak sesuai dengan batasan fungsi.                  |
| 8   | A. laporan status                                   | Indikator posisi (seperti highlight) memberikan informasi real-time mengenai lokasi pengguna dalam struktur menu.               |
| 9   | D. alfabetis                                        | Data disusun berdasarkan urutan leksikografis (A ke Z) untuk memudahkan pencarian nama secara linear.                           |
| 10  | B. Data Pribadi & Data Pendidikan                   | Pengelompokkan paling logis: Data identitas disatukan, dan data pendidikan disusun secara kronologis (SD → SMP → SMA).          |

___

# Modul 7 Dialog Berbasis Teks dan Pengisian Borang
## Kegiatan 1 Dialog Berbasis Teks
### Dialog Berbasis Perintah Tunggal
Dialog berbasis perintah tunggal (command line dialogue) merupakan ragam interaksi paling konvensional yang bergantung pada sistem komputer dan bahasa perintah (command language) yang digunakan.
* **Karakteristik:**
    * Sifatnya alamiah namun harus dirancang sedemikian rupa agar mudah dipelajari dan diingat.
    * Memiliki struktur leksikal, sintaksis, dan semantik tertentu.
    * Populer pada sistem operasi berbasis teks seperti DOS dan UNIX.
* **Contoh Perintah DOS (Internal & External):**
    * DIR: Menampilkan daftar berkas dalam direktori.
    * COPY: Membuat salinan berkas ke lokasi lain.
    * FORMAT: Menyiapkan disket/media simpan agar dapat digunakan.
    * DELTREE: Menghapus direktori beserta seluruh isinya.
* **Contoh Perintah UNIX:**
    * vi: Editor teks untuk menulis atau membaca berkas.
    * ls: Menampilkan nama berkas dalam akun pengguna.
    * who: Menampilkan daftar pengguna yang sedang aktif.
    * passwd: Mengubah kata kunci (password).
* **Analisis Keuntungan dan Kerugian:**
    * Keuntungan: Cepat, efisien, akurat, ringkas, dan memberikan inisiatif penuh kepada pengguna ahli.
    * Kerugian: Memerlukan pelatihan lama, beban ingatan tinggi terhadap kode perintah, dan buruk dalam menangani kesalahan (error handling).
* **Saran Perancangan:**
    * Pilihlah kata kunci yang mudah diingat dan gunakan untaian kata yang pendek.
    * Gunakan format perintah yang konsisten dan sediakan fasilitas bantuan (help).
    * Sediakan pesan kesalahan yang jelas dan gunakan nilai-nilai default untuk mengurangi ketikan.

### Dialog Berbasis Kombinasi Perintah
Ragam dialog ini memungkinkan pengguna untuk mengemas sejumlah perintah tunggal ke dalam satu bentuk berkas yang sering disebut dengan batch file.
* **Mekanisme:**
    * Digunakan ketika pengguna harus menjalankan sederetan perintah yang sama berulang kali.
    * Dalam DOS, contoh terkenalnya adalah berkas AUTOEXEC.BAT yang berisi urutan perintah untuk mengatur lingkungan sistem saat booting.
* **Fleksibilitas:**
    * Dapat berisi pernyataan logika sederhana seperti IF atau perintah pengulangan FOR untuk otomatisasi tugas yang lebih kompleks.

### Dialog Berbasis Bahasa Alami
Paradigma interaksi ini memungkinkan komunikasi antara manusia dan komputer menggunakan bahasa manusia yang sehari-hari (natural language).
* **Implementasi Teknis:**
    * Membutuhkan sebuah Sistem Penerjemah yang bertindak sebagai perantara antara instruksi bebas manusia dengan instruksi yang dimengerti mesin (seperti SQL atau PHP).
* **Tantangan:**
    * Ambiguitas: Kalimat manusia seringkali mengandung kerancuan yang dapat mengakibatkan salah interpretasi oleh penerjemah komputer.
    * Sintaksis vs Semantik: Meskipun bebas, sistem tetap memiliki batasan dalam memahami arti (semantik) yang sesungguhnya dari sebuah instruksi jika struktur kalimatnya terlalu kompleks atau tidak logis.

### Kunci Jawaban Test Formatif 1
| No   | Jawaban                                             | Alasan Singkat Berdasarkan Materi                                                                               |
| :--- | :-------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------- |
|      |
| 1    | A. D: >DIR                                          | Perintah DIR digunakan untuk menampilkan daftar berkas, dan D: merujuk pada drive/partisi D.                    |
| 2    | C. lpr                                              | Dalam sistem UNIX, perintah lpr (line printer) digunakan untuk mencetak berkas ke printer.                      |
| 3    | B. gambar                                           | Ekstensi .png merujuk pada jenis berkas gambar (Portable Network Graphics).                                     |
| 4    | A. C:\DOS>FORMAT A: /S                              | FORMAT adalah perintah luar (external command) karena memerlukan berkas sistem FORMAT.COM.                      |
| 5    | B. ls                                               | Perintah ls (list) pada UNIX memiliki fungsi yang sama dengan DIR pada DOS.                                     |
| 6    | C. appealing                                        | Keuntungan dialog perintah tunggal antara lain cepat, efisien, akurat, ringkas, luwes, dan menarik (appealing). |
| 7    | B. UNIX lebih mudah diingat                         | Berdasarkan materi, perintah UNIX dianggap "lebih alamiah" dan lebih mudah diingat dibanding DOS.               |
| 8    | B. batch file                                       | Sekumpulan perintah yang dikemas dalam satu berkas untuk otomatisasi disebut batch file (misal: .BAT).          |
| 9    | D. Tampilkan semua mahasiswa yang mempunyai IPK > 3 | Kalimat ini menggunakan struktur bahasa manusia sehari-hari (Bahasa Alami).                                     |
| 10   | B. passwd                                           | Perintah passwd (password) pada UNIX digunakan khusus untuk mengubah kata kunci akun pengguna.                  |

## kegiatan 2 Dialog Berbasis Pengisian Borang
Dialog berbasis pengisian borang (form-filling dialogue) adalah teknik antarmuka di mana pengguna dihadapkan pada bentuk borang di layar untuk memasukkan data yang kemudian akan diintegrasikan ke dalam sistem.

### Struktur dan Organisasi
Kualitas antarmuka pengisian borang bergantung pada tiga aspek tampilan yang mencerminkan struktur data masukan:
* **Struktur Data:** Mencerminkan urutan dan pengelompokan informasi yang diperlukan sistem.
* **Visualisasi:** Kejelasan perancangan dan penyajian medan isian pada layar.
* **Manipulasi Langsung:** Jika borang secara langsung mencerminkan keadaan sistem sebenarnya (contoh: borang KTP), maka ia merupakan bentuk manipulasi langsung.
* **Peranti Masukan:** Mengandalkan papan ketik (keyboard) sebagai peranti utama dan tetikus (mouse) untuk menggerakkan kursor.

### Evolusi Dialog Berbasis Pengision Borang
Teknik ini berkembang dari basis teks ke grafis:
* **Dialog Berbasis Tekstual:** Populer pada tahun 1960-an (contoh: PINE 3.96). Memiliki keterbatasan ruang layar dan usaha lebih besar untuk memindahkan kursor antar pilihan karena belum mendukung sistem jendela (windowing).
* **Dialog Berbasis Grafis:** Lebih menarik dan tidak monoton. Menggunakan berbagai komponen seperti:
    * Data field / Text field (medan teks).
    * List box (kotak daftar).
    * Combo box dan Spin box.
    * Editor box.

### Validasi Isian
Perancang harus memastikan data yang dimasukkan benar melalui validasi untuk menghindari kesalahan fatal.
* **Validasi Sisi Klien (Client-side):** Dilakukan sebelum data dikirim ke server. Biasanya menggunakan Javascript.
    * Keuntungan: Lebih cepat karena tidak memerlukan koneksi ke server untuk pengecekan format (misal: format email atau kolom kosong).
* **Validasi Sisi Server (Server-side):** Dilakukan setelah data dikirim ke server.
    * Kegunaan: Untuk pengecekan yang memerlukan data di server (misal: verifikasi login).
    * Kerugian: Proses lebih lambat karena bergantung pada koneksi jaringan.

### Keuntungan dan Kerugian
| Aspek          | Deskripsi                                                                                                                    |
| :------------- | :--------------------------------------------------------------------------------------------------------------------------- |
|                |
| **Keuntungan** | Pengguna terbiasa, isian terstruktur jelas, beban memori rendah, perancangan mudah, tersedia banyak peranti bantu tampilan.  |
| **Kerugian**   | Seringkali lambat, memakan banyak ruang layar, tidak cocok untuk instruksi perintah, memerlukan navigasi kursor (TAB/Mouse). |

### Aspek Perancangan yang Perlu Diperhatikan
* Proteksi tampilan: Pembatasan akses pengguna.
* Batasan medan: Panjang data tetap atau berubah.
* Isi medan: Petunjuk pengisian yang jelas.
* Medan opsional: Penandaan yang jelas (tekstual atau warna).
* Default: Nilai awal yang mungkin disediakan.
* Bantuan (Help): Tersedia jika pengguna kesulitan.
* Medan penghentian: Penggunaan tombol Enter atau Return.
* Navigasi: Penggunaan tombol TAB untuk berpindah medan secara urut.
* Pembetulan kesalahan: Penggunaan tombol Backspace.
* Penyelesaian: Pemberitahuan bahwa proses telah selesai.

### Kunci Jawaban Test Formatif 2
| No   | Jawaban | Alasan Teknis                                                                                                                                     |
| :--- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------ |
|      |
| 1    | C       | Berdasarkan sub-bab Struktur dan Organisasi, kualitas antarmuka bergantung pada kemampuannya mencerminkan struktur data masukan sistem.           |
| 2    | B       | Komponen tersebut adalah Radio Button, digunakan untuk memilih satu opsi dari beberapa pilihan yang tersedia.                                     |
| 3    | C       | Sesuai Tabel 7.2, salah satu keuntungan dialog borang adalah tersedianya berbagai peranti bantu (tools) untuk perancangan tampilan.               |
| 4    | D       | Materi Evolusi menjelaskan bahwa pada dialog tekstual, perpindahan antar pilihan sulit karena belum digunakannya teknik penjendelaan (windowing). |
| 5    | B       | Validasi sisi server diperlukan untuk data yang harus dicocokkan dengan basis data pusat, seperti verifikasi kata sandi (login).                  |
| 6    | A       | Konsekuensi validasi sisi server adalah proses menjadi lebih lambat karena harus mengirim data ke server dan menunggu respons balik.              |
| 7    | B       | Pengecekan sisi server (seperti login) mutlak membutuhkan data yang tersimpan di server, sehingga tidak bisa dilakukan hanya di sisi klien.       |
| 8    | B       | Berdasarkan Tabel 7.2, salah satu kerugiannya adalah ketergantungan pada pengontrol kursor (seperti mouse/keyboard) untuk navigasi antar medan.   |
| 9    | C       | Gambar tersebut menunjukkan Check Box, komponen yang memungkinkan pengguna memilih lebih dari satu opsi sekaligus.                                |
| 10   | B       | Sesuai daftar aspek perancangan nomor 9, tombol Backspace digunakan oleh pengguna untuk melakukan pembetulan kesalahan isian.                     |

___

# Modul 8 Rancangan Tampilan

## Kegiatan 1 Prinsip dan Petunjuk Perancangan
Dokumentasi rancangan adalah elemen krusial untuk memfasilitasi iterasi dan perubahan desain. 
* Metode dokumentasi meliputi: sketsa kertas, prototipe GUI, deskripsi tekstual hubungan antarjendela, dan penggunaan perangkat bantu CASE (Computer-Aided Software Engineering).

### Cara Pendekatan
Pendekatan perancangan dibedakan berdasarkan target pengguna:
* **Special Purpose Software:** Untuk pengguna khusus (misal: inventori gudang). Menggunakan pendekatan User-Centered Design (UCD) di mana pengguna dilibatkan aktif dalam merancang "wajah" antarmuka.
* **General Purpose Software (Public Software):** Untuk pengguna luas dengan tingkat kemahiran beragam. Mengutamakan Customization agar pengguna dapat menyesuaikan antarmuka (misal: pengaturan desktop OS X) sesuai preferensi pribadi.

### Prinsip dan Petunjuk Perancangan
Antarmuka terdiri dari empat komponen utama: **model pengguna**, **bahasa perintah**, **umpan balik**, dan **penampilan informasi**.
* **Urutan Perancangan**
Proses dilakukan secara top-down dan stepwise refinement:
    * Pemilihan Ragam Dialog: Menyesuaikan karakteristik populasi pengguna (mula, menengah, ahli).
    * Perancangan Struktur Dialog: Analisis tugas untuk membentuk alur yang sesuai dengan model mental pengguna.
    * Perancangan Format Pesan: Fokus pada tata letak dan efisiensi input (mengurangi pengetikan yang tidak perlu).
    * Perancangan Penanganan Kesalahan: Meliputi validasi pemasukan data, proteksi tindakan tidak sengaja, pemulihan (recovery), dan pesan kesalahan yang tepat waktu.
    * Perancangan Struktur Data: Menentukan struktur internal untuk mendukung fungsionalitas antarmuka yang telah dibuat.
* **Perancangan Tampilan Berbasis Teks**
Enam faktor utama dalam tata letak tekstual:
    * Urutan Penyajian: Harus selaras dengan model pengguna.
    * Kelonggaran (Spaciousness): Penggunaan tabulasi dan spasi untuk mencegah kepadatan informasi.
    * Pengelompokan: Mengorganisir data yang berkaitan secara logis.
    * Relevansi: Hanya menampilkan pesan yang berkaitan dengan topik di layar.
    * Konsistensi: Menggunakan format yang seragam (misalnya pada sistem berbasis frame).
    * Kesederhanaan: Menyajikan informasi agar mudah dipahami dengan cepat.
* **Perancangan Tampilan Berbasis Grafis**
Lima faktor utama dalam antarmuka GUI:
    * Ilusi pada Obyek yang Dapat Dimanipulasi: Menggunakan kumpulan obyek/ikon yang merepresentasikan fungsi secara konkret.
    * Urutan Visual dan Fokus Pengguna: Penggunaan animasi, warna kontras, atau simbol berkedip untuk mengarahkan perhatian tanpa berlebihan.
    * Struktur Internal: * Reveal Code: Tanda khusus untuk menunjukkan pemformatan (misal pada pengolah kata).
        * Reveal Structure: Menunjukkan batas operasional obyek (misal: object handle pada kotak teks.
    * Kosakata Grafis yang Konsisten: Penggunaan simbol/ikon standar (misal: ikon disket untuk simpan) secara konsisten di berbagai aplikasi.
    * Kesesuaian dengan Media: Mempertimbangkan karakteristik layar (CGA, LCD, bitmap/raster display) dalam menampilkan estetika antarmuka.
* **Waktu Tanggap (Response Time)**
Waktu tanggap adalah durasi yang dibutuhkan sistem untuk merespons instruksi pengguna. Variabel ini dipengaruhi oleh ragam interaksi dan kemahiran pengguna.
    * Waktu Tanggap Kritis:
        * < 2 Detik: Dianggap memadai untuk aktivitas interaktif seperti pemilihan menu atau pengisian borang.
        * Seketika (Instantaneous): Diperlukan untuk pengetikan karakter atau pelacakan kursor mouse.
        * > 14 Detik: Mengakibatkan destruksi konsentrasi pengguna, memicu pengguna beralih ke aktivitas lain.

* **Penanganan Kesalahan**
Kesalahan dalam sistem dibagi menjadi dua kategori fungsional berdasarkan fase deteksinya:
    * **Kesalahan Sintaksis (Compile-time Error)**
Kesalahan yang terjadi akibat pelanggaran aturan penulisan bahasa pemrograman.
        * Deteksi: Dilakukan oleh kompilator secara otomatis.
        * Konsekuensi: Program tidak dapat dieksekusi sebelum diperbaiki.
        * Contoh Kasus: Penggunaan operator pembagi / pada operan bertipe integer dalam Pascal (seharusnya menggunakan div).
    * **Kesalahan Logika (Run-time Error)**
Kesalahan yang muncul saat program sedang berjalan, sering kali berakibat pada penghentian paksa (fatal error).
        * Penyebab: Kesalahan algoritma atau input data yang tidak valid (misalnya pembagian dengan nol)
        * Mekanisme Penanganan:
            * Pencegahan: Menyisipkan modul "perangkap kesalahan" (error trapping).
            * Logika Kondisional: Menggunakan struktur if-then-else untuk memvalidasi input sebelum diproses oleh fungsi aritmatika.
            * Tujuan: Meningkatkan robustness (ketahanan) program agar berhenti secara normal/terkendali.

### Kunci Jawaban Test Formatif 1
| No   | Jawaban | Alasan Teknis                                                                                                       |
| :--- | :------ | :------------------------------------------------------------------------------------------------------------------ |
|      |
| 1    | B       | Merupakan salah satu metode dokumentasi awal desain sebelum masuk ke tahap prototipe GUI atau CASE.                 |
| 2    | D       | Klasifikasi program aplikasi didasarkan pada target pengguna: spesifik (khusus) atau luas (umum/publik).            |
| 3    | A       | Antarmuka terdiri dari model pengguna, bahasa perintah (command language), umpan balik, dan tampilan informasi.     |
| 4    | A       | Tiga variabel utama dalam menentukan ragam dialog: populasi pengguna, tipe dialog, dan kendala teknologi.           |
| 5    | C       | Tahap ini melibatkan analisis tugas mendalam melalui umpan balik pengguna pada diskusi dan prototipe dialog.        |
| 6    | D       | Mekanisme pengamanan untuk mencegah eksekusi tindakan yang tidak disengaja, seperti konfirmasi penghapusan file.    |
| 7    | B       | Dalam tampilan teks (berbasis frame), konsistensi ruang dan format krusial untuk kecepatan pemindaian informasi.    |
| 8    | A       | Fokus pada reveal structure (seperti object handle) untuk menunjukkan batasan obyek pada manipulasi grafis.         |
| 9    | B       | Compile-time error terjadi karena pelanggaran sintaksis saat kode sumber sedang diproses oleh kompilator.           |
| 10   | C       | Run-time/fatal error terjadi saat eksekusi karena logika program gagal menangani kondisi (misal: division by zero). |

## Kegiatan 2 Piranti Bantu Perancangan Tampilan
### Peranti Bantu Sederhana: Lembar Kerja Tampilan (LKT)
LKT atau screen design work sheet adalah lembaran kertas untuk mendokumentasikan wajah antarmuka secara statis. LKT terdiri dari empat bagian utama:
* Nomor Lembar Kerja: Identitas urutan halaman.
* Tampilan: Berisi sketsa antarmuka yang akan muncul di layar.
* Navigator: Menjelaskan peristiwa (event) yang memicu perubahan satu tampilan ke tampilan lain (misal: klik tombol, penekanan keyboard, atau error trapping).
* Keterangan: Penjelasan atribut fisik tampilan seperti jenis font, ukuran (point), warna latar belakang, dan warna teks.

### Jaring Semantik Tampilan (Screen Semantic Net)
Digunakan untuk mempermudah pemrogram dalam memetakan navigasi aplikasi yang memiliki banyak tampilan. Komponen utamanya meliputi:
* Nomor Tampilan (Simbol Lingkaran): Merepresentasikan lembar kerja atau keadaan (state) tampilan tertentu (T1, T2, dst).
* Transisi (Simbol Anak Panah): Menunjukkan perpindahan antar tampilan yang dipicu oleh suatu peristiwa (event).
* Transisi Loop: Tanda panah yang kembali ke tampilan itu sendiri, biasanya berfungsi untuk meminta konfirmasi pengguna jika terjadi kesalahan eksekusi.

### Kunci Jawaban Test Formatif 2
| No   | Jawaban | Alasan Teknis                                                                                                            |
| :--- | :------ | :----------------------------------------------------------------------------------------------------------------------- |
|      |
| 1    | A       | Dokumentasi berfungsi sebagai spesifikasi teknis atau pedoman bagi pemrogram dalam mengodekan antarmuka.                 |
| 2    | D       | Visualisasi rancangan membantu pengguna membayangkan alur sistem sebelum diimplementasikan secara fisik.                 |
| 3    | B       | Navigator adalah bagian LKT yang mendefinisikan logika perpindahan antar jendela aplikasi berdasarkan event.             |
| 4    | C       | Atribut visual seperti font, warna, dan ukuran elemen antarmuka dicatat pada bagian keterangan.                          |
| 5    | A       | Jaring semantik secara spesifik memetakan alur navigasi dari seluruh lembar kerja yang ada untuk memudahkan penyesuaian. |
| 6    | C       | Jaring semantik terdiri dari node (nomor tampilan/lingkaran) dan edge (transisi/panah).                                  |
| 7    | C       | Loop transition digunakan untuk memvalidasi input atau memberikan konfirmasi saat terjadi galat eksekusi.                |
| 8    | B       | Berdasarkan layout LKT standar, kotak bawah dialokasikan untuk penjelasan atribut atau keterangan (Atribut Visual).      |
| 9    | D       | Dalam notasi jaring semantik, lingkaran bertuliskan nomor mewakili identitas atau nomor tampilan.                        |
| 10   | A       | Label pada anak panah (seperti Alt-S, Simpan) adalah event atau peristiwa yang memicu transisi antar state.              |

___

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

### Kunci Jawaban Test Formatif 1
| No   | Jawaban | Alasan Teknis                                                                                                                                   |
| :--- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------- |
|      |
| 1    | D       | Berdasarkan klasifikasi peranti interaksi, keyboard adalah peranti standar untuk memasukkan data dalam bentuk teks (tekstual).                  |
| 2    | C       | Papan ketik dikelompokkan menjadi empat bagian utama: tombol alfanumerik, tombol kontrol, tombol numerik, dan tombol fungsi.                    |
| 3    | A       | Nama QWERTY diambil dari enam tombol pertama pada baris kedua (baris alfabet teratas) pada tata letak tersebut.                                 |
| 4    | B       | Tata letak Dvorak dirancang untuk menyeimbangkan beban kerja, di mana tangan kanan dibebani lebih banyak (53%) dibandingkan tangan kiri (47%).  |
| 5    | B       | Dvorak memasukkan unsur ergonomik pada distribusi beban jari, sedangkan Klockenberg pada posisi geometris papan ketik.                          |
| 6    | D       | Secara definisi, peranti ini berfungsi menunjuk (pointing) posisi kursor dan mengambil (picking) item informasi untuk dipindahkan.              |
| 7    | A       | Peranti ini memiliki ketelitian tinggi untuk menangkap koordinat (x, y), sehingga standar digunakan dalam aplikasi CAD atau pemetaan digital.   |
| 8    | C       | Bekerja dengan mendeteksi gangguan pada matriks cahaya, perubahan kapasitansi, atau pantulan ultrasonik saat layar disentuh langsung.           |
| 9    | B       | Dikembangkan pada pertengahan 70-an berdasarkan teknologi televisi, di mana citra dibentuk dari baris-baris pemindaian (scan lines).            |
| 10   | B       | Monitor RGB memproses sinyal warna merah, hijau, dan biru secara terpisah, menghasilkan kualitas teks dan grafik warna yang paling halus/tajam. |

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

### Kunci Jawaban Test Formatif 2
| No   | Jawaban                              | Alasan / Dasar Teori                                                                                                                               |
| :--- | :----------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
|      |
| 1    | **A. ATM**                           | ATM dirancang sebagai mesin statis (diam di tempat) untuk lingkungan yang tetap, berbeda dengan PDA atau laptop yang bersifat *mobile*.            |
| 2    | **D. keamanan**                      | Masalah radiasi (seperti kasus Therac-25) dikategorikan sebagai isu keamanan karena kesalahan perancangan dapat berakibat fatal bagi manusia.      |
| 3    | **C. ruang pengguna**                | Kurangnya ruang yang memadai untuk bergerak atau duduk dengan nyaman menyebabkan kelelahan, rasa sakit, hingga cedera fisik.                       |
| 4    | **B. polusi**                        | Penutup plastik pada keyboard dan layar sentuh yang dapat dicuci adalah solusi teknis untuk menghadapi lingkungan berdebu atau berminyak.          |
| 5    | **A. Laubli**                        | Berdasarkan studi (Burns, 1995), Laubli dari Switzerland menunjukkan adanya berbagai keluhan iritasi dan ketegangan mata yang meningkat.           |
| 6    | **A. Haider**                        | Haider dari Austria melaporkan hasil pengamatan bahwa durasi kerja di depan komputer berbanding lurus dengan peningkatan risiko miopi.             |
| 7    | **B. sudut melihat dan papan ketik** | Sauter et al. (1991) menyimpulkan melalui analisis fotografik bahwa kedua faktor ini paling signifikan mempengaruhi beban leher, bahu, dan tangan. |
| 8    | **D. akuisisi data**                 | Pekerjaan ini mengharuskan operator menatap layar secara intensif untuk mengambil informasi, mirip dengan tugas pengatur lalu lintas udara.        |
| 9    | **B. beban otot dan beban visual**   | Petugas reservasi (pekerjaan interaktif) menghadapi beban visual (melihat layar kontinu) dan beban otot secara bersamaan.                          |
| 10   | **B. beban otot dan beban tubuh**    | Juru ketik menghabiskan waktu dengan gerakan repetitif pada tangan (beban otot) dan posisi duduk yang lama (beban tubuh/punggung).                 |

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

### Kunci Jawaban Test Formatif 3
| No   | Jawaban | Alasan Teknis                                                                                                                                      |
| :--- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------- |
|      |
| 1    | B       | Sesuai Tabel 9.1, keluhan pada leher, bahu, dan lengan secara spesifik disebabkan oleh tinggi meja yang tidak memungkinkan posisi ergonomis.       |
| 2    | A       | Penggunaan anti-glare filter efektif untuk mereduksi pantulan cahaya pada layar yang mengganggu stabilitas visual.                                 |
| 3    | C       | Tujuan utama perancangan adalah mencegah cahaya terang langsung/pantulannya mengenai layar agar tidak terjadi glare (silau).                       |
| 4    | C       | Matahari didefinisikan sebagai sumber cahaya langsung, berbeda dengan tembok atau lantai yang merupakan sumber pantulan.                           |
| 5    | D       | Cahaya yang dipantulkan oleh objek sekitar (tembok, lantai, langit-langit) dikategorikan sebagai cahaya tidak langsung.                            |
| 6    | A       | Disarankan menggunakan cahaya tak langsung untuk menghindari bintik cerah dan silau pada layar tampilan.                                           |
| 7    | B       | Panas (Thermal) yang dihasilkan oleh perangkat keras harus diatasi dengan pengontrol suhu udara (AC) untuk menjaga stabilitas sistem dan pengguna. |
| 8    | D       | Kondisi fisik (seperti obesitas atau radang) meningkatkan risiko kelelahan pada sistem muskuloskeletal di stasiun kerja.                           |
| 9    | C       | Mata adalah indra yang bekerja paling keras, sehingga sangat rentan terhadap iritasi dan kelelahan visual akibat beban kerja intensif.             |
| 10   | B       | Mengubah posisi duduk secara periodik bertujuan untuk mencegah kelelahan otot statis dan memberikan kenyamanan durasi panjang.                     |