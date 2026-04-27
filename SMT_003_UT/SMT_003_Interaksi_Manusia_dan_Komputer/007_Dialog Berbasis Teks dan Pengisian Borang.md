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
___

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
___

## Soal Modul 7

| Pertanyaan                                                                                                                  | Pilihan Jawaban                                                   | Penjelasan Teknis                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Perintah DOS yang berfungsi untuk menampilkan nama-nama berkas yang tersimpan di dalam hard disk D adalah ....              | C. D:>DIR                                                         | Perintah DIR digunakan untuk enumerasi direktori. Awalan D:\> menunjukkan current working directory berada pada root drive D.                                           |
| Perintah UNIX yang berfungsi untuk mencetak suatu berkas ke printer yang terhubung dengan sistem UNIX adalah ....           | C. lpr                                                            | lpr (line printer) adalah standar spooling pada sistem UNIX/Linux untuk mengirimkan job ke print queue.                                                                 |
| Perintah DOS untuk menyalin berkas C:\>COPY *.png A:\NASKAH. Jenis berkas yang disalin adalah ....                          | B. gambar                                                         | Ekstensi .png (Portable Network Graphics) secara teknis adalah format kompresi data gambar lossless yang menggunakan algoritma DEFLATE.                                 |
| Di bawah ini yang merupakan perintah luar (external command) pada DOS adalah ....                                           | A. C:\DOS>FORMAT A: /S                                            | FORMAT adalah external command (berupa file .com atau .exe terpisah), berbeda dengan DIR atau COPY yang merupakan internal command di dalam COMMAND.COM.                |
| Perintah yang digunakan untuk menampilkan nama-nama berkas pada UNIX adalah ....                                            | B. ls                                                             | ls (list) melakukan system call untuk membaca struktur metadata inode pada filesystem dan menampilkannya di stdout.                                                     |
| Keuntungan dari penggunaan dialog berbasis perintah tunggal adalah ....                                                     | B. membutuhkan penggunaan yang teratur                            | Command-line interfaces memiliki learning curve yang curam namun efisiensi tinggi bagi power user yang sudah menghafal sintaksnya.                                      |
| Perbedaan mendasar dari perintah tunggal pada DOS dan UNIX adalah ....                                                      | A. UNIX tidak alamiah                                             | UNIX menggunakan singkatan yang sangat singkat (kriptik) seperti ls, cp, rm, yang kurang intuitif bagi pengguna awam dibandingkan perintah yang lebih deskriptif.       |
| Dialog berbasis bahasa pemrograman memungkinkan pengguna untuk mengemas sejumlah perintah ke dalam berkas yang disebut .... | B. batch file                                                     | Pada DOS, berkas .bat memungkinkan eksekusi sekuensial dari serangkaian instruksi CLI untuk otomatisasi tugas.                                                          |
| Contoh instruksi bahasa alami (Natural Language) adalah ....                                                                | A. Tampilkan semua mahasiswa yang meregistrasi matakuliah = IMK   | Bahasa alami dicirikan oleh penggunaan sintaksis manusia (subjek-predikat-objek) daripada sintaksis formal bahasa pemrograman atau kueri SQL.                           |
| Perintah UNIX yang berfungsi untuk mengubah kata kunci (password) adalah ....                                               | B. passwd                                                         | Perintah passwd memodifikasi hash kata kunci pengguna yang biasanya tersimpan di /etc/shadow.                                                                           |
| Aspek kualitas dari antarmuka pengisian borang (form filling) adalah ....                                                   | C. mencerminkan struktur data masukan yang diperlukan oleh sistem | Desain borang harus memiliki korespondensi satu-satu dengan skema database atau variabel yang diproses oleh backend.                                                    |
| Jenis pengisian data (opsi pilihan tunggal) pada gambar di bawah ini disebut ....                                           | B. radio button                                                   | Secara logika, radio button mengimplementasikan fungsi exclusive OR (XOR), di mana hanya satu state yang dapat bernilai true dalam satu grup.                           |
| Keuntungan dari penggunaan dialog berbasis pengisian borang adalah ....                                                     | C. tersedianya berbagai peranti bantu perancangan sistem          | Borang sangat modular dan didukung luas oleh berbagai library UI serta framework desain (seperti Visual Studio atau web-based tools).                                   |
| Masalah pengisian data banyak adalah sulitnya berpindah antar pilihan karena belum adanya teknik ....                       | C. tab                                                            | Navigasi menggunakan tombol TAB memungkinkan perpindahan fokus antar input field secara sekuensial berdasarkan tab index.                                               |
| Pengecekan validasi yang dilakukan oleh server adalah ....                                                                  | A. pengisian captcha                                              | Validasi server-side seperti CAPTCHA krusial untuk mencegah serangan otomasi (bot) karena logika verifikasi dilakukan di lingkungan yang tidak bisa dimanipulasi klien. |
| Salah satu konsekuensi validasi yang dilakukan oleh server adalah ....                                                      | B. harus terkoneksi dengan internet                               | Validasi server-side memerlukan request-response cycle melalui protokol HTTP/HTTPS, sehingga ketergantungan pada network latency sangat tinggi.                         |
| Alasan validasi pengecekan dilakukan di server adalah ....                                                                  | A. user dan password lebih aman                                   | Melakukan validasi kredensial di sisi klien (frontend) akan mengekspos logika keamanan dan data sensitif melalui inspeksi kode atau memori.                             |
| Salah satu kerugian penggunaan dialog berbasis borang adalah ....                                                           | B. membutuhkan pengontrol kursor                                  | Berbeda dengan CLI yang murni menggunakan keyboard, borang sering kali memerlukan pointing device (mouse/trackpad) untuk navigasi yang efisien.                         |
| Jenis pengisian data (opsi pilihan ganda) pada gambar berikut disebut ....                                                  | C. check box                                                      | Check box memungkinkan seleksi independen, di mana setiap elemen memiliki variabel boolean sendiri yang tidak saling mempengaruhi.                                      |
| Tombol yang digunakan untuk pembetulan kesalahan pada saat pengisian borang adalah ....                                     | B. backspace                                                      | Secara teknis, backspace mengirimkan kode ASCII 0x08 untuk menghapus karakter terakhir pada buffer input.                                                               |
___