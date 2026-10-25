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
___

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
___

## Soal Modul 2

| Pertanyaan                                                                                                                   | Pilihan Jawaban            | Penjelasan Teknis                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Banyaknya cahaya yang dipantulkan oleh permukaan obyek disebut ....                                                          | C. luminance               | Kerapatan fluks cahaya yang dipantulkan/dipancarkan ke arah tertentu (satuan: cd/m²).                                         |
| Semakin besar luminansi dari sebuah obyek, menyebabkan diameter bola mata mengecil karena ....                               | D. terlalu terang          | Respon fisiologis pupil (miosis) untuk mengatur intensitas cahaya yang masuk ke retina agar tidak overexposed.                |
| Hubungan antara cahaya yang dipancarkan oleh suatu obyek dan cahaya dari latar belakang obyek tersebut disebut ....          | B. kontras                 | Rasio luminansi antara objek dan latar belakang, krusial untuk ketajaman visual (acuity).                                     |
| Sudut yang dibentuk ketika mata bergerak ke kiri terjauh dan ke kanan terjauh dapat dibagi menjadi ....                      | D. 4 daerah                | Pembagian medan penglihatan berdasarkan derajat rotasi bola mata secara horizontal.                                           |
| Ketika kepala dan mata dalam keadaan diam, daerah penglihatan monokuler mempunyai rentang antara ....                        | C. 94° sampai 104°         | Batas persepsi visual satu mata manusia tanpa adanya pergerakan kepala.                                                       |
| Mata dapat membedakan warna secara akurat ketika posisi obyek terhadap mata membentuk sudut sebesar ....                     | A. ± 15                    | Fovea (titik pusat retina) memiliki konsentrasi sel kerucut tertinggi hanya pada sudut sempit di pusat sumbu visual.          |
| Efek chromostereopsis seringkali timbul pada kombinasi warna ....                                                            | A. merah dan biru          | Fenomena visual di mana warna berbeda pada kedalaman yang sama tampak berada pada jarak berbeda akibat aberasi kromatik mata. |
| Kombinasi warna yang baik adalah ....                                                                                        | C. merah, kuning, putih    | Kombinasi dengan kontras tinggi yang memudahkan pemrosesan informasi visual oleh saraf optik.                                 |
| Warna dingin biasanya digunakan untuk menunjukkan status atau informasi latar belakang. Warna dingin antara lain adalah .... | A. biru                    | Dalam spektrum optik, biru memiliki panjang gelombang pendek dan memberikan efek tenang/latar belakang.                       |
| Merah, kuning, biru termasuk warna ....                                                                                      | A. primer                  | Warna dasar yang tidak dapat dihasilkan melalui pencampuran warna lain dalam model subtraktif (RYB).                          |
| Seorang perancang sistem perlu memahami cara manusia mengolah informasi, hal ini termasuk dalam aspek ....                   | D. brainware               | Merujuk pada komponen manusia sebagai subjek pengolah logika dan input.                                                       |
| Manusia dan komputer memiliki beberapa persamaan, otak pada komputer adalah ....                                             | A. CPU                     | Unit pemrosesan pusat yang mengelola instruksi logika dan aritmatika.                                                         |
| Komputer dapat melakukan beberapa pekerjaan sekaligus yang disebut ....                                                      | B. multitasking            | Manajemen thread dan process oleh OS untuk menjalankan aplikasi secara konkuren.                                              |
| Suatu tindakan yang jarang dilakukan akan diolah dalam diri manusia secara ....                                              | A. sadar                   | Memerlukan sumber daya kognitif tinggi karena belum terbentuk jalur memori prosedural.                                        |
| Suatu tindakan baru dapat diolah dalam diri manusia secara otomatis melalui ....                                             | B. latihan                 | Proses pembentukan muscle memory dan otomatisasi kognitif melalui pengulangan.                                                |
| Pengolahan yang melibatkan organ-organ sensori ke otak disebut pengolahan ....                                               | C. perseptual              | Transformasi sinyal fisik (cahaya/suara) menjadi representasi data di otak.                                                   |
| Urutan langkah pengolahan informasi adalah ....                                                                              | C. 3-4-1-2                 | Penyandian → Komparasi Memori → Keputusan → Eksekusi Tindakan.                                                                |
| Register sensori penglihatan memegang informasi selama ....                                                                  | A. 0,2 detik               | Durasi buffer pada iconic memory sebelum data luruh atau ditransfer ke STM.                                                   |
| Teknik membagi nomor telepon menjadi beberapa kelompok dalam memori disebut ....                                             | C. chunking                | Optimasi kapasitas memori jangka pendek (7±2 chunks) dengan pengelompokkan data.                                              |
| Kemampuan motor skills (seperti naik sepeda) termasuk dalam ....                                                             | C. long-term memory        | Disimpan dalam memori prosedural yang bersifat persisten dan tahan lama.                                                      |
| Prinsip dasar suatu sistem komputer adalah ....                                                                              | D. input, proses, output   | Siklus hidup data dalam arsitektur komputasi standar.                                                                         |
| Interaksi antara pengguna dan komputer terjadi jika tersedia ....                                                            | D. media                   | Adanya lapisan abstraksi (UI) sebagai jembatan komunikasi.                                                                    |
| User-friendly merujuk pada karakter yang dimiliki oleh ....                                                                  | A. program aplikasi        | Parameter kegunaan (usability) sistem terhadap pengguna manusia.                                                              |
| Fokus IMK ditinjau dari perspektif ilmu komputer adalah interaksi antara ....                                                | D. manusia dengan komputer | Studi tentang optimasi antarmuka untuk meningkatkan produktivitas manusia.                                                    |
___