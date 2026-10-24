# Modul 06: Manajemen Data dan Pengetahuan

## Bagian 1: Pengelolaan Data dan Basis Data

**Konsep Dasar Pengelolaan Data dan Kualitas Informasi**

- Kualitas Informasi (7 Kriteria): Informasi yang berkualitas tinggi harus memenuhi kriteria relevan, andal, lengkap, tepat waktu, dapat dipahami, terverifikasi, dan dapat diakses.
- Hierarki Penyimpanan Data: Komputer mengorganisir data dalam hierarki berjenjang mulai dari bit, byte, field, record, file, hingga basis data.
- Entitas dan Atribut: Entitas adalah sesuatu yang hendak disimpan dan dikelola datanya (seperti benda, manusia, tempat, atau peristiwa); sedangkan atribut merupakan karakteristik spesifik yang membedakan satu entitas dengan entitas lainnya.
___
**Sistem Manajemen Basis Data (DBMS)**

- Kelemahan Pengelolaan Tradisional: Pendekatan aplikasi berdiri sendiri (silo) menimbulkan redundansi data (penyimpanan ganda), inkonsistensi data, ketergantungan data pada aplikasi, serta kerentanan keamanan.
- Keunggulan DBMS: Mengelola data secara terpusat, mengendalikan redundansi dan inkonsistensi, memisahkan data dari program aplikasi (independensi data), serta menyediakan kemudahan dan keamanan akses.
- Model Basis Data Relasional: Menyajikan data dalam bentuk tabel dua dimensi yang terdiri atas field (kolom) dan record (baris). Contoh produk: MS Access, LibreOffice Base, MySQL, SQL Server, IBM DB2.
- Fasilitas Utama DBMS: Meliputi kemampuan definisi data (struktur tabel), kamus data (data dictionary), fasilitas manipulasi data (bahasa Query/SQL), serta pembuat laporan (report generator).
- Normalisasi Basis Data: Teknik merancang tabel basis data relasional untuk meminimalkan duplikasi data dan mengeliminasi anomali (insertion anomaly, deletion anomaly, update anomaly) melalui tahapan bentuk normal 1NF hingga 5NF.
___
**Big Data, Intelegensi Bisnis, dan Infrastruktur Data**

- Big Data: Menangani pengolahan volume data berukuran sangat masif serta mencakup jenis data tidak terstruktur (video, audio, gambar, perilaku pengguna).

- Data Warehouse & Data Mart: Data Warehouse (DW) menyimpan data historis dan terkini dari berbagai fungsi bisnis melalui proses ETL (Extract, Transform, Load); sedangkan Data Mart (DM) merupakan bagian terpisah dari DW yang berfokus pada fungsi bisnis spesifik.

- Teknologi Pemrosesan Paralel dan Analitis:

  - Hadoop: Kerangka kerja open-source pemrosesan data terdistribusi dan paralel berbasis HDFS (Hadoop Distributed File System) dan MapReduce.
  - In-Memory Computing: Pengolahan data DW berbasis memori utama (RAM) skala terabyte untuk mempercepat query analitis.
  - Aplikasi Analitis: Online Analytical Processing (OLAP) untuk analisis data multidimensi, Data Mining untuk menemukan pola/relasi tersembunyi, serta Text & Web Mining.
___
**Kebijakan dan Kualitas Informasi**

- Kebijakan Informasi: Aturan resmi organisasi mengenai tata cara berbagi, menyebarkan, mengklasifikasikan, dan menginventarisasi data.
- Pembersihan dan Audit Data: Upaya data cleansing/data scrubbing untuk mendeteksi dan mengoreksi data yang salah/tidak lengkap serta pelaksanaan audit rutin untuk menjamin integritas data.
___

## Bagian 2: Pengelolaan Pengetahuan

**Konsep Manajemen Pengetahuan (Knowledge Management)**

- Hirarki Pengolahan: Data diolah menjadi informasi, informasi yang dipahami dan diintegrasikan dengan pengalaman menghasilkan pengetahuan (knowledge), dan pengaplikasian pengetahuan kolektif membentuk kebijaksanaan (wisdom).

- Jenis Pengetahuan:

  - Tacit Knowledge: Pengetahuan tidak terstruktur yang melekat pada benak/pikiran individu (pengalaman, wawasan, keahlian).
  - Explicit Knowledge: Pengetahuan terstruktur yang telah didokumentasikan dalam bentuk tulisan, buku, laporan, video, atau diagram.

- Rantai Nilai Manajemen Pengetahuan:

  - Akuisisi Pengetahuan: Mengumpulkan pengetahuan via penambangan data, neural networks, algoritma genetik, dan sistem pakar.
  - Penyimpanan Pengetahuan: Menyimpan dokumen digital menggunakan Content Management System (CMS) dan basis data pengetahuan.
  - Penyemaian Pengetahuan: Menyebarkan pengetahuan via portal informasi, mesin pencari, alat kolaborasi, dan pelatihan.
  - Penerapan Pengetahuan: Mengaplikasikan pengetahuan pada sistem pendukung keputusan (DSS), aplikasi enterprise, dan robotika.
___
**Tipe Sistem Manajemen Pengetahuan**

- Enterprise Content Management (ECM): Mengelola pengetahuan terstruktur (SOP) maupun semi/tidak terstruktur (memo, email, presentasi, video, wiki) melalui klasifikasi taksonomi dan tagging.

- Sistem Manajemen Pembelajaran (Learning Management System / LMS): Alat terstruktur untuk mengelola, menyampaikan, dan menilai program pelatihan/pembelajaran karyawan secara daring.

- Sistem Kerja Pengetahuan (Knowledge Work Systems / KWS): Perangkat dan workstation spesifikasi tinggi untuk mendukung knowledge workers. Contoh aplikasi KWS:

  - Computer-Aided Design (CAD): Merancang produk dan manipulasi grafis.
  - Pencetakan Tiga Dimensi (3D Printing): Mencetak bentuk fisik 3D secara berlapis.
  - Realita Maya (VR) & Augmented Reality (AR): Simulasi kondisi nyata maupun penambahan elemen visual pada lingkungan sekitar.

- Kecerdasan Buatan (AI) dalam Manajemen Pengetahuan: Penggunaan Sistem Pakar (Expert Systems), Penalaran Berbasis Kasus (Case-Based Reasoning), Logika Kabur (Fuzzy Logic), dan Jaringan Syaraf Tiruan (Neural Networks) untuk menangkap dan menganalisis tacit knowledge.
___
