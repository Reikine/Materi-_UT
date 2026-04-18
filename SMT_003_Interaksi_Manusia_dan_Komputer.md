
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

## Kegiatan 1 Pemodelan Sistem Pengolah
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

### Pengendali Rotorik
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
* **Luminansi**
    * Jumlah cahaya yang dipantulkan permukaan obyek (satuan: lilin/meter persegi).
    * Luminansi tinggi meningkatkan kedalaman fokus namun membuat mata sensitif terhadap kedipan (flicker).
* **Kontras**
    * Hubungan antara cahaya obyek dan latar belakangnya (selisih luminansi).
    * Nilai kontras dapat positif atau negatif tergantung mana yang lebih besar antara obyek atau latar belakang.
* **Kecerahan**
    * Tanggapan subjektif terhadap cahaya. Luminansi tinggi berimplikasi pada kecerahan yang tinggi pula.
    * Fenomena kisi-kisi Herman menunjukkan ilusi titik hitam/putih pada perpotongan garis akibat perbedaan kecerahan.
* **Sudut dan Ketajaman Penglihatan**
    * Sudut penglihatan (*visual angle*) adalah sudut yang berhadapan dengan obyek pada mata.
    * Ketajaman penglihatan (*visual acuity*) adalah sudut minimum mata untuk melihat obyek dengan jelas.
    * Rumus sudut penglihatan: $\phi = 120 \tan^{-1} \frac{L}{2D}$ (L = tinggi obyek, D = jarak).
* **Medan Penglihatan**
    * Sudut yang dibentuk saat mata bergerak ke kiri dan kanan terjauh. Terbagi menjadi:
      * **Binokuler:** Kedua mata mampu melihat obyek yang sama ($62^\circ - 70^\circ$).
      * **Monokuler:** Dilihat oleh salah satu mata saja ($94^\circ - 104^\circ$).
      * **Area Buta:** Tidak dapat dilihat oleh kedua mata.
    * Medan penglihatan optimum untuk pekerjaan interaktif adalah $\pm 15^\circ$.
* **Warna**
    * Cahaya tampak berada pada spektrum 400–700 nm. Mata mampu membedakan sekitar 128 warna berbeda.
    * Psikologi Warna: Warna adalah sensasi sistem saraf. Lensa mata tidak dapat mengoreksi warna secara otomatis (*chromostereopsis*), sehingga warna merah tampak lebih dekat dan biru lebih jauh.
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