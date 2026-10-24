# MODUL 01: KONSEP PENGEMBANGAN SISTEM
## Bagian 01: Konsep Dasar Pengembangan Sistem

### Pengertian Pengembangan Sistem

Pengembangan sistem (*systems development*) dapat didefinisikan sebagai proses menyusun sistem informasi yang baru untuk menggantikan sistem yang lama secara keseluruhan atau memperbaiki sistem yang sudah ada.

* **Sistem Lama:** Bisa berupa sistem manual (kertas, buku besar) atau sistem berbasis komputer yang sudah usang (*legacy system*), tidak efisien, atau tidak lagi mampu mengakomodasi kebutuhan organisasi yang berkembang.
* **Tujuan Utama:** Meningkatkan efisiensi operasional, memperbaiki kualitas informasi, dan memastikan sistem selaras dengan strategi bisnis organisasi.
___
### Perlunya Pengembangan Sistem

Suatu organisasi atau perusahaan memutuskan untuk mengembangkan sistem baru biasanya didorong oleh tiga pemicu utama:

1\. **Adanya Permasalahan (*Problems*) pada Sistem Lama**
* **Ketidakberesan:** Adanya kecurangan yang disengaja, kesalahan manusia (*human error*) yang tidak disengaja, atau prosedur kerja yang berbelit-belit.
* **Pertumbuhan Organisasi:** Volume pengolahan data yang melonjak membuat sistem lama tidak sanggup menangani beban kerja.

2\. **Meraih Kesempatan (*Opportunities*)**
* Pemanfaatan Teknologi Informasi (IT) untuk merespons pasar lebih cepat, menyediakan informasi secara *real-time*, dan membangun **Sistem Informasi Strategis (SIS)** guna menciptakan keunggulan kompetitif (*competitive advantage*) terhadap kompetitor.

3\. **Adanya Instruksi / Regulasi (*Directives*)**
* Tekanan dari pihak eksternal, seperti perubahan undang-undang, kebijakan pemerintah, standar akuntansi baru, atau regulasi industri yang memaksa perusahaan menyesuaikan sistemnya.

> **Indikator Masalah & Kesempatan (Kerangka PIECES):**
> Indikator-indikator kegagalan sistem lama biasanya dikelompokkan ke dalam beberapa dimensi:
> * **Performance (Kinerja):** Throughput rendah, waktu tanggap lambat.
> * **Information (Informasi):** Data tidak akurat, tidak tepat waktu, sulit diakses, atau format laporan tidak sistematis.
> * **Economy (Ekonomis):** Biaya operasional tinggi, pemborosan sumber daya.
> * **Control (Pengendalian):** Keamanan data lemah, sering terjadi kebocoran atau manipulasi.
> * **Efficiency (Efisiensi):** Duplikasi pekerjaan, pemborosan tenaga kerja.
> * **Service (Pelayanan):** Servis ke pelanggan lambat, membingungkan, atau tidak konsisten.
___
### Prinsip Pengembangan Sistem

Agar proyek pengembangan sistem tidak berujung pada kegagalan, ada **7 prinsip utama** yang wajib dipegang:

1. **Dukungan Manajemen Puncak:** Manajemen harus terlibat secara aktif dan memberikan sumber daya yang memadai.
2. **Investasi Modal yang Bernilai:** Setiap anggaran yang dikeluarkan harus mendatangkan *Return on Investment* (ROI) yang jelas.
3. **Personel yang Terdidik:** Melibatkan SDM yang kompeten di bidangnya (analis, pemrogram, domain expert).
4. **Tahapan Kerja yang Terukur:** Proyek harus dibagi ke dalam fase-fase terstruktur dengan *milestone* yang jelas.
5. **Proses Paralel:** Beberapa tahapan atau modul dapat dikerjakan secara bersamaan jika memungkinkan untuk efisiensi waktu.
6. **Keberanian Membatalkan Proyek:** Jika di tengah jalan proyek terbukti tidak layak (*infeasible*) secara teknis atau finansial, manajemen harus berani menghentikannya daripada menanggung kerugian bengkak.
7. **Dokumentasi yang Kuat:** Setiap keputusan, desain, dan kode harus didokumentasikan dengan baik untuk keperluan pemeliharaan jangka panjang.
___
### Tim Pengembangan Sistem

Keberhasilan sistem sangat bergantung pada kualitas tim yang mengerjakannya.

**Peran Analis Sistem:** Bertindak sebagai *problem solver* (pemecah masalah) dan *change agent* (agen perubahan). Mereka menjadi jembatan antara kebutuhan bisnis pengguna (*user*) dan solusi teknis dari pengembang (*developer*).

**8 Tingkatan Personel (Hierarki Tim):**
1. Manajer Analis Sistem
2. Ketua Analis
3. Analis Senior
4. Analis Sistem
5. Analis Yunior
6. Pemrogram Senior
7. Pemrogram
8. Pemrogram Yunior

**6 Keahlian Utama Analis Sistem:**
1. Teknik pengolahan data & arsitektur sistem
2. Pengetahuan bisnis umum
3. Metode kuantitatif & statistik
4. Kemampuan pemecahan masalah (*problem solving*)
5. Komunikasi interpersonal yang efektif
6. Hubungan antar-manusia (*human relations*)

**Perbandingan Pemrogram vs Analis Sistem:**
* **Pemrogram:** Fokus pada penulisan kode (*coding*), logika pemrograman, dan struktur data dalam lingkup terbatas pada modul yang diberikan.
* **Analis Sistem:** Fokus pada ruang lingkup makro, analisis alur kerja bisnis, perancangan sistem secara keseluruhan, manajemen risiko, dan spesifikasi kebutuhan fungsional.

**5 Peran Spesifik dalam Tim Proyek Modern:**
1. *Analis Bisnis* (memahami kebutuhan proses bisnis)
2. *Analis Sistem* (menerjemahkan bisnis ke dalam desain teknis)
3. *Analis Infrastruktur* (menyiapkan fondasi hardware, network, database)
4. *Analis Manajemen Perubahan* (mengelola transisi psikologis dan operasional pengguna)
5. *Manajer Proyek* (mengontrol anggaran, waktu, dan sumber daya)
___

## Bagian 02: Metodologi Pengembangan Sistem

### Siklus Hidup Pengembangan Sistem (SDLC)

**Analogika Pembangunan Rumah:** Anda tidak mungkin mengecat dinding sebelum fondasi dicor dan struktur beton berdiri. Begitu pula sistem informasi; ia harus dibangun melalui tahapan logis yang sistematis.

**6 Proses Utama SDLC Umum:**
1. **Perencanaan & Kelayakan (*Planning & Feasibility*):** Menilai apakah proyek layak dilanjutkan dari segi hukum, teknis, operasional, dan ekonomi.
2. **Penyelidikan & Penelitian (*System Investigation*):** Memahami sistem lama secara mendalam dan mengumpulkan kebutuhan dasar sistem baru.
3. **Analisis Sistem (*System Analysis*):** Memodelkan kebutuhan sistem secara logis (menggunakan DFD, Use Case, dll.) tanpa memikirkan perangkat keras/lunak spesifik.
4. **Perancangan/Desain (*System Design*):** Menerjemahkan hasil analisis logis ke dalam desain fisik (arsitektur database, antarmuka/UI, arsitektur jaringan).
5. **Implementasi (*System Implementation*):** Penulisan kode, pengujian (*testing*), migrasi data, pelatihan pengguna, dan peluncuran sistem (*deployment*).
6. **Peninjauan Ulang & Perawatan (*Maintenance & Review*):** Evaluasi pasca-implementasi, perbaikan *bug*, serta penyesuaian berkala terhadap perubahan lingkungan bisnis.

**Kelebihan & Kelemahan SDLC Tradisional:**
* *Kelebihan:* Dokumentasi sangat standar, batas fase dan *milestone* terukur dengan jelas.
* *Kelemahan:* Cenderung kaku (*rigid*), berasumsi bahwa semua kebutuhan bisa didefinisikan di awal (linear), pemodelan kurang dinamis terhadap perubahan kebutuhan pengguna di tengah jalan, dan berisiko tinggi menghasilkan ketidakpuasan jika salah mendefinisikan kebutuhan pada tahap awal.
___
### Pengertian dan Ragam Metodologi

Penting untuk membedakan istilah teknis dalam pengembangan sistem:

**Method (Metode):** Cara terstruktur untuk melakukan tugas tertentu.

**Methodology (Metodologi):** Kumpulan metode, teknik, dan alat (*tools*) yang terintegrasi secara komprehensif untuk memandu seluruh siklus hidup pengembangan sistem.

**Technique (Teknik):** Langkah-langkah operasional atau cara khusus dalam menggunakan metode (misal: teknik wawancara, teknik normalisasi database).

**Tools (Alat Bantu):** Perangkat lunak atau perangkat fisik pendukung (CASE tools, Microsoft Visio, Enterprise Architect, Rational Rose, Git).

**Klasifikasi Metodologi Pengembangan Sistem:**
* *Science vs System Paradigm* (menurut Avison & Fitzgerald)
* *Hard, Soft, Hybrid, Specialised* (menurut Dungaria/Prasetyo)
* *Terstruktur, RAD (Rapid Application Development), Berorientasi Objek (Object-Oriented)* (menurut Beynon-Davis)
* *Model-driven vs Product-driven* (menurut Whitten)
* *Prescriptive, Functional Decomposition, Data-Oriented* (menurut Aktas/Jogiyanto)
___
### Pentingnya Metodologi Pengembangan Sistem

**Sejarah Singkat:** Pada masa awal komputasi, pemrogram sering membuat perangkat lunak secara "artisitik" tanpa acuan standar (*code-and-fix*), yang berakibat pada kode yang tidak bisa dipelihara (*spaghetti code*), sulit dikembangkan, dan mudah rusak saat ditinggal pembuatnya.

**Manfaat Metodologi Formal:**
* Menjamin konsistensi kualitas.
* Memudahkan manajemen pelacakan progres proyek (*project tracking*).
* Memenuhi standar kematangan proses organisasi (seperti standar **IEEE** atau CMMI).
* Mempermudah transfer pengetahuan antar-anggota tim.
___
### Pengaruh Metodologi terhadap Pengembangan Sistem

**Statistik Proyek IT (Data Standar Industri):**
* Hanya sekitar **32%** proyek IT yang sukses tepat waktu dan anggaran.
* **44%** proyek masuk kategori *challenged* (terlambat, melebihi anggaran, atau fitur dipangkas).
* **24%** proyek gagal total (*cancelled/failed*).

**Dua Penyebab Utama Kegagalan Proyek IT:**
1. **Pemilihan Metodologi yang Kurang Tepat:** Menggunakan metodologi tradisional yang kaku untuk proyek yang persyaratannya sangat dinamis (sebaiknya menggunakan *Agile*).
2. **Kesalahan Praktik Pelaksanaan di Lapangan:** Metodologi sudah benar secara teori, tetapi disiplin tim rendah, manajemen risiko buruk, atau kurangnya komunikasi dengan *stakeholder*.
___