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
___

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
___

## Soal Modul 8

| Pertanyaan                                                                                             | Pilihan Jawaban                                                                                     | Penjelasan Teknis & Logika Sistem                                                                                                           |
| ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Salah satu dokumentasi rancangan adalah ....                                                           | B. membuat sketsa pada kertas                                                                       | Dalam fase low-fidelity prototyping, sketsa kertas adalah artefak teknis pertama untuk menentukan tata letak elemen tanpa beban komputasi.  |
| Kategori program aplikasi adalah ....                                                                  | D. special purpose software dan public software                                                     | Klasifikasi perangkat lunak berdasarkan domain penggunaan: special purpose (spesifik/vertikal) dan public (umum/horizontal).                |
| Salah satu komponen antarmuka pengguna adalah bahasa ....                                              | A. perintah                                                                                         | Merujuk pada Command Line Interface (CLI) di mana interaksi terjadi melalui sintaksis perintah yang diproses oleh interpreter.              |
| Pemilihan ragam dialog dipengaruhi oleh ....                                                           | A. karakteristik populasi pengguna, tipe dialog yang diperlukan, dan kendala teknologi              | Variabel dalam fungsi pemilihan dialog f(p,d,t) di mana p adalah user, d adalah metode, dan t adalah limitasi infrastruktur.                |
| Tahap perancangan yang melibatkan pengguna secara langsung untuk umpan balik informal/prototipe ....   | C. perancangan struktur dialog                                                                      | Ini adalah iterasi pada State Transition Diagram (STD) untuk memastikan alur logika sistem sesuai dengan ekspektasi input pengguna.         |
| Sistem memberi peringatan ketika pengguna melakukan tindakan tidak disengaja ....                      | D. proteksi pengguna                                                                                | Mekanisme Error Prevention dan Safety untuk meminimalkan entropy kesalahan yang tidak dapat dipulihkan (irreversible actions).              |
| Faktor yang harus dipertimbangkan saat perancangan tampilan untuk antarmuka berbasis teks ....         | B. konsistensi                                                                                      | Reduksi beban kognitif dicapai melalui konsistensi letak dan istilah agar prediksi state sistem oleh pengguna menjadi akurat.               |
| Faktor yang harus dipertimbangkan saat perancangan tampilan untuk antarmuka berbasis grafis (GUI) .... | B. urutan visual dan fokus pengguna                                                                 | Implementasi hirarki visual untuk mengarahkan atensi (eye-tracking) pada komponen kritis dalam suatu form atau dashboard.                   |
| Kesalahan sintaksis yang langsung dideteksi oleh kompiler (compile-time error) ....                    | B. penulisan program                                                                                | Kesalahan pada lexical atau syntax analysis saat proses parsing kode sumber menjadi object code.                                            |
| Kesalahan ketika program sedang dijalankan (run-time error atau fatal error) ....                      | C. logika                                                                                           | Terjadi saat sintaks benar namun eksekusi melanggar aturan logika atau batasan memori (seperti NullPointerException atau Division by Zero). |
| Pendokumentasian perancangan berguna sebagai pedoman implementasi bagi ....                            | A. pemrogram                                                                                        | Dokumentasi teknis berfungsi sebagai spesifikasi fungsional agar backend dan frontend engineer dapat melakukan pengkodean secara presisi.   |
| Pendokumentasian perancangan yang berguna untuk membayangkan 'wajah' sistem ....                       | D. pengguna                                                                                         | Representasi visual (Mockup/Wireframe) membantu validasi kebutuhan end-user sebelum masuk ke tahap heavy coding.                            |
| Bagian Lembar Kerja Tampilan (LKT) yang menjelaskan kapan tampilan muncul dan berubah ....             | B. navigator                                                                                        | Komponen LKT yang merepresentasikan transisi antar state dalam mesin status antarmuka.                                                      |
| Bagian LKT yang merupakan penjelasan singkat tentang atribut tampilan yang dipakai ....                | C. keterangan                                                                                       | Metadata yang mendeskripsikan properti dari setiap elemen UI yang terdapat pada lembar kerja tersebut.                                      |
| Jaring semantik tampilan adalah ....                                                                   | A. Suatu bagan yang dapat memudahkan pemrogram dalam menyesuaikan navigasi pada setiap lembar kerja | Struktur graf (node dan edge) yang memetakan konektivitas logis antar layar/modul dalam sistem.                                             |
| Jaring semantik terdiri dari dua komponen yaitu ....                                                   | C. nomor tampilan dan transisi                                                                      | Dalam teori graf, nomor tampilan adalah Node (V) dan transisi adalah Edge (E) yang menghubungkan antar V.                                   |
| Transisi loop pada jaring semantik berfungsi untuk ....                                                | C. meminta konfirmasi pengguna                                                                      | Mekanisme callback atau validasi di mana sistem tetap berada pada state yang sama sampai syarat transisi berikutnya terpenuhi.              |
| Kotak yang diberi keterangan 'D' pada gambar LKT disebut ....                                          | A. navigasi                                                                                         | Area pada template LKT yang didedikasikan untuk mendefinisikan instruksi perpindahan ke layar lain.                                         |
| Tanda lingkaran bertuliskan T1, T2, T3, T4, dan T5 menyatakan ....                                     | D. nomor tampilan                                                                                   | Representasi identitas unik bagi setiap state atau halaman dalam diagram transisi status.                                                   |
| Tanda panah bertuliskan Alt-S, Cetak, Simpan, dan Selesai menyatakan ....                              | A. peristiwa                                                                                        | Event trigger atau input yang memicu perubahan state dari satu node ke node lainnya dalam logika navigasi.                                  |
___