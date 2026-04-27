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
___

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
___

## Soal Modul 6

| Pertanyaan                                                                                                        | Pilihan Jawaban                                                              | Penjelasan Teknis                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pengorganisasian tugas adalah salah satu faktor yang perlu diperhatikan dalam ....                                | C. perancangan sistem                                                        | Secara teknis, task analysis dilakukan pada fase desain (perancangan) untuk menentukan alur logika program dan struktur data yang akan digunakan pengguna.                    |
| Gambar skema jenis menu (Graf dengan banyak jalur)                                                                | D. jaring tak berputar                                                       | Secara matematis, gambar tersebut merepresentasikan Directed Acyclic Graph (DAG) atau jaring tak berputar, di mana node terhubung secara hierarkis tanpa adanya loop balik.   |
| Gambar contoh jenis menu (Dialog Konfirmasi)                                                                      | A. biner                                                                     | Menu konfirmasi (Ya/Tidak) adalah implementasi logika biner f(x) ∈ {0,1}, memberikan tepat dua pilihan yang saling eksklusif.                                                 |
| Ragam menu yang menuliskan pilihan dengan menampilkan menu dalam keseluruhan layar                                | B. datar                                                                     | Menu datar (flat menu) memanfaatkan seluruh workspace layar untuk menampilkan semua opsi secara simultan, mengurangi kedalaman navigasi.                                      |
| Menu yang menampilkan sejumlah pilihan sesuai dengan ukuran daerah kerja layar tampilan                           | B. datar                                                                     | Konsep ini berkaitan dengan optimasi pemanfaatan area kerja (viewport) agar semua opsi tersedia tanpa perlu melakukan scrolling atau navigasi tambahan.                       |
| Gambar merupakan contoh penerapan menu (Daftar font dengan scrollbar)                                             | B. gulung                                                                    | Secara koding, ini adalah scrolling menu. Ketika jumlah elemen n melebihi kapasitas display k, sistem menggunakan fungsi offset untuk menggeser indeks data yang ditampilkan. |
| Jenis menu yang memungkinkan pengguna melihat pilihan sesuai konteks dan menghindari pilihan lain yang mengganggu | C. tarik                                                                     | Pull-down menu bersifat kontekstual dan efisien dalam penggunaan ruang (space-saving), hanya aktif saat dipicu, mengurangi beban kognitif (noise).                            |
| Menu yang menggunakan font/ikon kecil untuk yang jauh dari kursor dan normal untuk yang dekat                     | A. mata ikan                                                                 | Ini adalah teknik Fisheye View. Secara matematis, ia menggunakan fungsi distorsi untuk memberikan resolusi tinggi pada titik fokus dan resolusi rendah pada periferal.        |
| Perancang dapat mengelompokkan pilihan berdasarkan kriteria tertentu jika jumlah pilihan besar                    | D. berstruktur pohon                                                         | Untuk kompleksitas data tinggi, struktur pohon (O(log n)) lebih efisien bagi manusia daripada pencarian linear (O(n)) dalam daftar panjang.                                   |
| Situasi pengguna semakin kesulitan menentukan posisinya ketika kedalaman menu bertambah                           | B. disorientasi                                                              | Masalah ini terjadi ketika node aktif berada terlalu dalam pada struktur graf/pohon sehingga pengguna kehilangan referensi ke root node.                                      |
| Salah satu pengelompokan pilihan dalam menu struktur pohon adalah ....                                            | C. satukan pilihan-pilihan yang secara logis serupa                          | Mengikuti prinsip kohesi dalam koding, elemen dengan semantik atau fungsi yang mirip dikelompokkan dalam satu sub-pohon untuk mempermudah pemetaan mental.                    |
| Salah satu urutan penyajian menu yang tepat adalah berdasarkan ....                                               | D. sifat fisik                                                               | Dalam robotik/hardware, pengelompokan fisik (misal: semua kontrol motor, semua kontrol sensor) memudahkan operator melakukan korelasi antara UI dan realitas fisik.           |
| Salah satu pemilihan ungkapan yang tepat yaitu menggunakan terminologi yang ....                                  | A. sudah dikenal dan konsisten                                               | Hal ini berkaitan dengan mapping antara variabel sistem dan bahasa pengguna untuk meminimalkan error interpretasi (logika validasi).                                          |
| Studi Teitelbaum dan Granda (1983) mengenai judul menu menunjukkan bahwa ....                                     | A. satu kali lebih lama untuk memilih menu yang sama ketika posisi berpindah | Ini membuktikan pentingnya konstanta koordinat (x,y) pada UI. Perubahan posisi memaksa otak melakukan rekalkulasi posisi kursor, yang membuang waktu eksekusi.                |
| Penulisan menu judul rapi kiri, menandakan bahwa perancang menu konsisten pada komponen ....                      | C. penulisan judul                                                           | Konsistensi sintaksis dan perataan (alignment) mempermudah algoritma scanning visual manusia dalam mengenali struktur informasi.                                              |
| Pilihan menu ditulis rapi kiri, dengan nomor atau huruf tertentu yang mendahului judul pilihan                    | C. penempatan pilihan                                                        | Pemberian indeks (numerik/alfabetis) pada pilihan mempercepat akses melalui keyboard (short-key), yang secara teknis merupakan pemetaan langsung ke alamat fungsi.            |
| Jika pengguna memilih pilihan yang tidak dapat diterima, maka harus disediakan komponen ....                      | B. pesan kesalahan                                                           | Secara logika program, ini adalah exception handling. Sistem harus memberikan feedback saat input tidak memenuhi kriteria validasi.                                           |
| Tanda yang menunjukkan menu yang sedang dikunjungi, halaman yang dilihat, atau tugas yang dipilih                 | A. laporan status                                                            | Dalam sistem kendali, ini adalah feedback loop yang menginformasikan status state mesin saat ini kepada operator.                                                             |
| Urutan menu nama anggota (Adeva, Dani, Egi, ...) disusun berdasarkan ....                                         | D. alfabetis                                                                 | Data disusun menggunakan algoritma sorting berdasarkan nilai ASCII/Unicode karakter pertama untuk memudahkan pencarian manual.                                                |
| Pengelompokan menu (Sekolah Lanjutan, Alamat, Nama, ...) yang paling dapat diterima adalah ....                   | C. pengelompokan kategori                                                    | Data dikelompokkan secara kategoris (Data Pribadi, Pendidikan, Alamat) untuk menciptakan struktur data yang terorganisir secara semantik.                                     |
___