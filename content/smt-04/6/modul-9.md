# Modul 09: Desain/Perancangan Sistem

## Bagian 01: Desain Arsitekstur Sistem

Desain arsitektur menggambarkan perangkat keras, perangkat lunak, dan lingkungan jaringan sistem. Desain arsitektur mengalir terutama dari kebutuhan nonfungsional (operasional, kinerja, keamanan, budaya, dan politik) yang dikembangkan pada fase analisis. Hasil akhir dari tahap ini berupa rancangan arsitektur dan spesifikasi perangkat keras serta perangkat lunak.

### Elemen-elemen Desain Arsitektur
Tujuan dari desain arsitektur adalah menetapkan bagaimana komponen perangkat lunak dari sistem informasi akan ditugaskan ke perangkat keras sistem.

#### Komponen Arsitektur
Arsitektur sistem dibangun dari kombinasi perangkat lunak dan perangkat keras:
*   **Empat Fungsi Dasar Perangkat Lunak:**
    1.  *Penyimpanan Data (Data Storage):* Logika untuk menyimpan dan mengambil kembali data dari entitas basis data.
    2.  *Logika Akses Data (Data Access Logic):* Pemrosesan kueri untuk mengakses basis data (misalnya melalui SQL).
    3.  *Logika Aplikasi (Application Logic):* Logika pemrosesan aturan bisnis dan kebutuhan fungsional sistem.
    4.  *Logika Presentasi (Presentation Logic):* Tampilan antarmuka untuk menyajikan informasi dan menerima instruksi dari pengguna.
*   **Tiga Komponen Utama Perangkat Keras:**
    1.  *Komputer Klien:* Perangkat input-output yang digunakan langsung oleh pengguna (desktop, laptop, ponsel cerdas, terminal).
    2.  *Komputer Server:* Komputer *multi-user* dengan spesifikasi tinggi untuk menyimpan data dan menjalankan program aplikasi.
    3.  *Jaringan (Network):* Media komunikasi penghubung dengan berbagai kapasitas kecepatan transmisi (kabel, DSL, Ethernet, nirkabel).

#### Arsitektur Klien-Server (*Client-Server Architecture*)
Menyeimbangkan pembagian pemrosesan antara perangkat klien dan server. Klien menangani logika presentasi, sedangkan server menangani logika akses data dan penyimpanan data; logika aplikasi dapat diletakkan di klien, server, atau dibagi di antara keduanya.
*   ***Thin Client:*** Klien hanya menangani sebagian kecil logika aplikasi atau sekadar logika presentasi murni (misalnya berbasis *browser* web), sehingga biaya instalasi dan perawatannya rendah.
*   ***Thick Client:*** Klien menangani hampir seluruh logika aplikasi di samping logika presentasi.
*   **Kelebihan Arsitektur Klien-Server:**
    1.  *Scalable (Dapat Diskalakan):* Kapasitas penyimpanan dan pemrosesan mudah ditingkatkan bertahap dengan menambahkan server baru.
    2.  *Mendukung Heterogenitas:* Dapat menghubungkan berbagai jenis klien dan server lintas platform serta sistem operasi tanpa terikat satu vendor.
    3.  *Pemisahan Logika yang Jelas:* Memudahkan pemisahan logika presentasi, aplikasi, dan akses data secara mandiri.
    4.  *Isolasi Kegagalan:* Jika satu server gagal, hanya aplikasi yang bergantung padanya yang terganggu, dan server yang rusak dapat diganti serta dipulihkan.
*   **Keterbatasan Arsitektur Klien-Server:** Memiliki kompleksitas yang tinggi; penulisan kode dan pembaruan perangkat lunak lebih rumit karena harus disinkronkan ke seluruh klien dan server.

#### Klien-Server Bertingkat
*   **Arsitektur Dua Tingkat (*Two-Tier Architecture*):** Hanya menggunakan dua perangkat komputer, di mana satu bertindak sebagai server (menangani data) dan satu sebagai klien (menangani aplikasi dan presentasi).
*   **Arsitektur Tiga Tingkat (*Three-Tier Architecture*):** Menggunakan tiga set komputer terpisah: klien menangani presentasi, server aplikasi menangani logika bisnis/aplikasi, dan server basis data menangani akses serta penyimpanan data.
*   **Arsitektur N-Tingkat (*N-Tier Architecture*):** Memisahkan logika aplikasi ke dalam beberapa server terspesialisasi (misalnya server web terpisah dari server aplikasi dan server basis data).
    *   *Kelebihan N-Tier:* Penyeimbangan beban (*load balancing*) pemrosesan jauh lebih baik dan modular.
    *   *Kekurangan N-Tier:* Memberikan beban lalu lintas jaringan (*bandwidth*) yang lebih tinggi dan jauh lebih rumit untuk diprogram serta diuji.

#### Arsitektur yang Tidak Umum
*   **Arsitektur Berbasis Server (*Server-Based Architecture*):** Server (seperti komputer *mainframe*) memproses keempat fungsi dasar sistem secara terpusat, sementara klien hanya berfungsi sebagai terminal pasif penampil informasi. Sederhana dalam pengelolaan dan pembaruan, tetapi rentan kelebihan beban (*bottleneck*) saat pengguna bertambah.
    *   *Virtual Desktop Infrastructure (VDI) / Zero Client:* Komputer berbasis server modern menggunakan perangkat kecil tanpa sistem operasi lokal untuk mengakses server jarak jauh secara aman dan hemat daya.
*   **Arsitektur Berbasis Klien (*Client-Based Architecture*):** Komputer klien menangani presentasi, logika aplikasi, dan logika akses data, sedangkan server hanya berfungsi murni sebagai penyedia ruang penyimpanan file data. Memiliki kelemahan mendasar karena seluruh file data harus ditransmisikan melalui jaringan ke klien sebelum kueri dieksekusi, sehingga membebani jaringan dan memori klien.

#### Perkembangan Konfigurasi Arsitektur
*   **Virtualisasi (*Virtualization*):** Pembuatan sumber daya virtual (seperti server virtual atau penyimpanan virtual) dengan mempartisi satu server fisik menjadi beberapa mesin virtual mandiri, atau menggabungkan jaringan penyimpanan (*Storage Area Network / SAN*) untuk mengoptimalkan efisiensi dan penghematan biaya.
*   **Komputasi Awan (*Cloud Computing*):** Penyediaan kumpulan perangkat keras, perangkat lunak, penyimpanan, dan jaringan sebagai layanan (*as-a-service*) melalui internet berdasarkan permintaan. 
    *   *Model Implementasi:* Cloud Publik, Cloud Pribadi, dan Cloud Hybrid.
    *   *Keunggulan:* Elastisitas kapasitas, kemudahan pemanfaatan sumber daya via antarmuka standar (API), pemutakhiran terpusat, dan pembayaran berbasis penggunaan aktual.

#### Membandingkan Arsitektur
Pemilihan model arsitektur sistem dipengaruhi oleh batasan infrastruktur yang telah dimiliki organisasi, standar vendor, biaya perangkat keras dan jaringan, serta kebutuhan fleksibilitas pengembangan aplikasi.
___
### Membangun Desain Arsitektur
Pembangunan desain arsitektur dimulai dengan mengkaji dan menyempurnakan kebutuhan nonfungsional untuk menentukan infrastruktur yang tepat.

#### Empat Kategori Kebutuhan Nonfungsional dalam Desain Arsitektur:
1.  **Kebutuhan Operasional (*Operational Requirements*):**
    *   *Kebutuhan Lingkungan Teknis:* Kebutuhan perangkat keras, sistem operasi, browser, dan jaringan khusus.
    *   *Kebutuhan Integrasi Sistem:* Kemampuan sistem beroperasi dan bertukar data dengan sistem lain.
    *   *Kebutuhan Portabilitas:* Fleksibilitas sistem untuk dijalankan di berbagai platform lingkungan yang berbeda.
    *   *Lingkungan Pemeliharaan:* Kemampuan sistem beradaptasi terhadap perubahan bisnis dan jadwal pemutakhiran.
2.  **Kebutuhan Kinerja (*Performance Requirements*):**
    *   *Kebutuhan Kecepatan:* Batas waktu respons pemrosesan transaksi melalui jaringan.
    *   *Kebutuhan Kapasitas:* Jumlah beban puncak pengguna simultan dan volume data yang disimpan.
    *   *Ketersediaan dan Keandalan:* Tingkat waktu aktif (*uptime*), toleransi kegagalan, dan jadwal pemeliharaan.
3.  **Kebutuhan Keamanan (*Security Requirements*):**
    *   *Estimasi Nilai Sistem:* Perlindungan terhadap potensi kerugian bisnis akibat gangguan atau kehilangan data.
    *   *Pengendalian Akses:* Pembatasan hak akses baca, tulis, ubah, dan hapus data.
    *   *Enkripsi dan Autentikasi:* Penentuan jalur data yang harus dienkripsi serta mekanisme verifikasi identitas pengguna.
    *   *Pengendalian Virus:* Pengawasan dan pemeriksaan berkas untuk mencegah penyebaran kode berbahaya.
4.  **Kebutuhan Budaya dan Politik (*Cultural and Political Requirements*):**
    *   *Multibahasa:* Dukungan berbagai bahasa bagi pengguna.
    *   *Kustomisasi:* Fleksibilitas konfigurasi aspek tertentu bagi pengguna lokal.
    *   *Pernyataan Eksplisit Aturan Implisit:* Penegasan asumsi format data (satuan berat, mata uang, zona waktu, urutan tanggal).
    *   *Persyaratan Legalitas:* Kepatuhan terhadap hukum, undang-undang privasi data, dan peraturan perpajakan tempat sistem beroperasi.
___

## Bagian 02: Desain Antarmuka Pengguna

Antarmuka pengguna adalah bagian dari sistem tempat pengguna berinteraksi, mencakup mekanisme navigasi, masukan (*input*), dan keluaran (*output*). Bidang Interaksi Manusia dan Komputer (*Human Computer Interaction / HCI*) berfokus pada perancangan antarmuka agar sistem berguna dan dapat diterima pengguna.

---

### Prinsip-prinsip Desain Antarmuka Pengguna
1.  **Tata Letak (*Layout*):** Pengaturan area layar, formulir, atau laporan secara konsisten. Area standar dibagi menjadi: area atas untuk navigasi sistem, area tengah untuk menampilkan konten utama atau formulir kerja, dan area bawah untuk bilah status serta tombol eksekusi perintah. Aliran navigasi dan entri harus mengikuti urutan alami (misalnya dari atas ke bawah dan kiri ke kanan).
2.  **Penyadaran Konten (*Content Awareness*):** Kemampuan antarmuka membantu pengguna selalu menyadari posisi mereka di dalam sistem dengan usaha minimal melalui pemberian judul yang jelas, label navigasi, menu aktif, dan label bidang data yang tidak ambigu.
3.  **Estetika (*Aesthetics*):** Antarmuka dirancang fungsional, bersih, dan rapi. Mengadopsi prinsip *"less is more"* dengan menyediakan ruang kosong (*white space*) yang memadai agar layar tidak terlalu padat. Batasan tipografi menyarankan penggunaan satu jenis huruf (*font*) dengan maksimal dua variasi ukuran, serta penggunaan warna berdaya kontras tinggi secara hemat dan fungsional.
4.  **Pengalaman Pengguna (*User Experience*):** Menyeimbangkan antara **kemudahan belajar (*ease of learning*)** bagi pengguna pemula (navigasi eksplisit dan instruksi jelas) dengan **kemudahan penggunaan (*ease of use*)** bagi pengguna ahli (pemberian tombol pintas/*shortcut*, menu ringkas, dan kecepatan eksekusi).
5.  **Konsistensi (*Consistency*):** Memastikan tindakan yang serupa dilakukan dengan cara yang sama di seluruh layar sistem (penggunaan ikon perintah, terminologi kata, penempatan tombol aksi, dan tata letak formulir yang seragam) untuk mengurangi beban belajar pengguna.
6.  **Meminimalkan Upaya Pengguna (*Minimizing User Effort*):** Merancang antarmuka berdasarkan **prinsip tiga kali klik (*three-click rule*)**, di mana pengguna dapat berpindah dari menu utama ke informasi atau tindakan yang diinginkan tidak lebih dari tiga kali klik mouse atau penekanan tombol.
___
### Proses Desain Antarmuka Pengguna
1.  **Menyusun Skenario Penggunaan (*Use Scenario*):** Menguraikan langkah-langkah fungsional yang dilakukan pengguna saat menjalankan tugas tertentu untuk merespons suatu peristiwa. Skenario disusun berdasarkan jalur proses yang paling umum dan sering dilalui.
2.  **Mendesain Struktur Antarmuka (*Interface Structure Design / ISD*):** Diagram hierarkis yang memetakan seluruh layar tampilan, formulir, menu, dan laporan sistem serta menunjukkan bagaimana pengguna berpindah dari satu antarmuka ke antarmuka lainnya.
3.  **Desain Standar Antarmuka (*Interface Standards Design*):** Menetapkan aturan dasar umum antarmuka, mencakup elemen objek antarmuka, daftar aksi antarmuka (Simpan, Edit, Hapus, Selesai), serta ikon standar yang diterapkan di seluruh layar.
4.  **Desain Template Antarmuka (*Interface Template Design*):** Tata letak visual dasar yang mendefinisikan posisi elemen antarmuka, kombinasi warna, dan gaya navigasi.
5.  **Desain Prototipe Antarmuka (*Interface Prototyping*):** Pembuatan model kerja visual antarmuka sistem (dari sketsa kasar di kertas, diagram rangka kawat/*wireframe*, hingga prototipe interaktif) untuk dievaluasi dan disempurnakan secara iteratif bersama pengguna.
___
### Desain Navigasi 
Komponen navigasi memungkinkan pengguna memasukkan perintah untuk berpindah layar dan memantau status sistem.

#### 1. Prinsip Dasar Navigasi
*   *Mencegah Kesalahan:* Menggunakan label perintah yang jelas, membatasi pilihan yang tidak diizinkan (menonaktifkan/mengabukan menu), serta menampilkan dialog konfirmasi pada tindakan krusial yang bersifat permanen (seperti penghapusan data).
*   *Menyederhanakan Pemulihan Kesalahan:* Menyediakan fasilitas pembatalan tindakan (*undo*) untuk mempermudah perbaikan kesalahan.
*   *Konsistensi Tata Bahasa Tata Perintah:* Menggunakan urutan tata bahasa yang konsisten di seluruh sistem, baik pendekatan `objek-tindakan` maupun `tindakan-objek`.

#### 2. Jenis Kontrol Navigasi
*   *Bahasa Program:* Pengguna memasukkan instruksi baris perintah khusus (seperti SQL atau command prompt); fleksibel namun menuntut pengguna menghafal sintaks.
*   *Menu:* Pendekatan navigasi paling umum. Ragam jenis menu meliputi *menu bar*, *drop-down menu*, *hyperlink*, *pop-up menu*, *tab menu*, *toolbar*, dan *image map*. Menu ideal disusun dangkal dan luas (tidak lebih dari delapan item per kelompok dan maksimal dua tingkat kedalaman).
*   *Manipulasi Langsung (*Direct Manipulation*):* Mengizinkan pengguna berinteraksi langsung dengan objek antarmuka menggunakan kursor (seperti klik-dan-geser atau *drag-and-drop*).

#### 3. Jenis-Jenis Pesan Sistem
Pesan digunakan sistem untuk merespons instruksi pengguna secara ringkas, jelas, dan santun:
*   *Pesan Eror (Error Message):* Memberitahukan kegagalan operasi, menjelaskan alasan penyebabnya, menyertakan nomor kode eror, dan menyarankan tindakan korektif.
*   *Pesan Konfirmasi (Confirmation Message):* Meminta kepastian persetujuan pengguna sebelum mengeksekusi tindakan berbahaya.
*   *Pesan Pengakuan (Acknowledgment Message):* Menginformasikan bahwa suatu tugas pemrosesan telah berhasil diselesaikan.
*   *Pesan Tunda (Delay Message):* Memberitahukan bahwa sistem sedang memproses aktivitas yang membutuhkan waktu lebih dari beberapa detik (misalnya progres pemrosesan) serta opsi membatalkan proses.
*   *Pesan Bantuan (Help Message):* Menyediakan panduan operasional terstruktur bagi pengguna.
___
### Desain Masukan
Desain masukan berfokus pada perancangan layar penangkap informasi secara akurat dan efisien.

#### 1. Prinsip Dasar Masukan
*   *Pemilihan Metode Pemrosesan:* Menentukan penggunaan **Pemrosesan *Online*** (data diinput dan diproses seketika saat transaksi terjadi secara *real-time*) atau **Pemrosesan *Batch*** (data dikumpulkan dalam periode tertentu lalu diproses bersama-sama).
*   *Menangkap Data Langsung pada Sumbernya:* Mengurangi entri manual dengan menggunakan teknologi otomatisasi sumber data (seperti pemindai *barcode*, pita magnetik, *smart card*, atau RFID) guna meminimalkan biaya dan kesalahan manusia (*human error*).
*   *Meminimalkan Penekanan Tombol (*Keystroke*):* Membatasi pengetikan teks manual dengan menyediakan opsi pemilihan dari daftar.

#### 2. Jenis Kotak Masukan (*Input Controls*)
*   *Kotak Teks (*Text Box*):* Digunakan untuk memasukkan data alfanumerik bebas dengan batas panjang karakter tertentu.
*   *Kotak Centang (*Check Box*):* Digunakan saat pengguna dapat memilih satu, beberapa, atau tidak ada pilihan sama sekali dari daftar opsi non-eksklusif.
*   *Tombol Radio (*Radio Button*):* Digunakan untuk memilih tepat satu pilihan dari sekumpulan opsi yang saling eksklusif berjumlah sedikit (kurang dari enam pilihan).
*   *Kotak Daftar (*List Box*) & Kotak Drop-down:* Menampilkan daftar pilihan saat opsi berjumlah banyak guna menghemat ruang layar.
*   *Kotak Kombo (*Combo Box*):* Gabungan kotak teks dan daftar *drop-down* yang memungkinkan pengguna memilih dari daftar atau mengetikkan nilai baru secara mandiri.
*   *Batang Gulir (*Scroll Bar / Slider*):* Digunakan untuk memasukkan nilai taksiran numerik pada skala kontinu.

#### 3. Validasi Masukan (*Input Validation*)
Mencegah data yang salah atau tidak valid masuk ke dalam sistem:
1.  *Pemeriksaan Kelengkapan (Completeness Check):* Memastikan semua bidang isian wajib (*mandatory fields*) telah terisi sebelum formulir diproses.
2.  *Pemeriksaan Format (Format Check):* Memastikan data yang dimasukkan sesuai dengan pola atau tipe datanya (misalnya data angka tidak memuat huruf).
3.  *Pemeriksaan Rentang (Range Check):* Memverifikasi bahwa data numerik berada di antara nilai minimum dan batas maksimum yang masuk akal.
4.  *Pemeriksaan Konsistensi (Consistency Check):* Memeriksa keselarasan logika antara dua atau lebih bidang data yang saling berkaitan.
5.  *Pemeriksaan Basis Data (Database Check):* Mencocokkan data yang dimasukkan dengan data referensi yang telah ada di dalam tabel basis data.
___
### Desain Keluaran
Keluaran adalah informasi atau laporan yang disajikan oleh sistem kepada pengguna, baik melalui layar tampilan, media cetak kertas, maupun situs web.

#### 1. Prinsip Dasar Keluaran
*   *Memahami Penggunaan Laporan:* Merancang tata letak berdasarkan cara laporan dibaca (laporan yang dibaca berurutan dari awal hingga akhir vs laporan yang digunakan sebagai referensi pencarian cepat) serta frekuensi penyajiannya (*real-time* vs *batch*).
*   *Mengelola Beban Informasi:* Menyajikan hanya informasi yang dibutuhkan sesuai peran pengguna (*selective presentation*) agar tidak terjadi kelebihan beban informasi (*information overload*).
*   *Meminimalkan Bias:* Mencegah penyajian informasi yang menyesatkan akibat penentuan urutan penyortiran data yang tidak tepat atau manipulasi tampilan visual grafik (misalnya grafik perbandingan yang sumbu nilainya tidak dimulai dari angka nol sehingga menimbulkan efek distorsi visual yang bias).

#### 2. Jenis-Jenis Laporan
*   *Laporan Detail (Detail Report):* Menyajikan data transaksi lengkap baris demi baris dengan sedikit atau tanpa penyaringan untuk kebutuhan pelacakan operasional.
*   *Laporan Rangkuman (Summary Report):* Mengagregasikan data transaksi ke dalam totalitas berkala atau kategori tertentu untuk membandingkan informasi secara ringkas bagi manajemen.
*   *Laporan Pengecualian (Exception Report):* Menyaring data untuk hanya menampilkan catatan yang menyimpang dari kondisi atau batas standar operasi normal guna memicu tindakan perbaikan segera.
*   *Grafik (Graph):* Representasi visual data numerik (grafik batang, grafik garis, grafik sebar, dan diagram pai) untuk mempermudah analisis tren, perbandingan, dan pemahaman proporsi data.
___