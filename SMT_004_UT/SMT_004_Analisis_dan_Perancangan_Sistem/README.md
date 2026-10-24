# Mata Kuliah: Analisis dan Perancangan Sistem

---

## Deskripsi Mata Kuliah

Mata kuliah **Analisis dan Perancangan Sistem (APS)** mempelajari proses sistematis dalam mengganti sistem lama yang tidak lagi memadai atau menyempurnakan sistem informasi yang sedang berjalan guna meningkatkan efisiensi operasional, memperbaiki kualitas informasi, dan menyelaraskan teknologi dengan arah strategi bisnis organisasi. Pembahasan mencakup keseluruhan siklus hidup pengembangan sistem (*System Development Life Cycle* / SDLC), mulai dari penilaian kelayakan investasi proyek, penggalian dan pemodelan kebutuhan sistem secara logis, penerapan metodologi pemodelan terstruktur dan berorientasi objek, hingga penerjemahan model logika ke dalam rancangan fisik arsitektur teknologi, skema basis data relasional, dan antarmuka pengguna (*User Interface*).

---

## Daftar Modul Pembelajaran

* **Modul 01: Konsep Pengembangan Sistem** 

  Membahas dasar-dasar pengembangan sistem informasi, faktor pendorong perubahan melalui kerangka PIECES, tujuh prinsip utama pengembangan sistem, hierarki dan keahlian tim pengembang (khususnya peran analis sistem sebagai *problem solver* dan *change agent*), tahapan umum SDLC, serta pentingnya penggunaan metodologi formal.

* **Modul 02: Perencanaan Sistem**  

  Berfokus pada tahap inisiasi proyek dan pencegahan pelebaran ruang lingkup (*scope creep*), analisis kelayakan multidimensi (teknis, ekonomi dengan ROI/BEP/NPV, dan organisasi), evaluasi pemilihan metodologi pengembangan (Waterfall, RAD, Agile), estimasi proporsi alokasi waktu SDLC, serta perancangan kerja menggunakan *Work Breakdown Structure* (WBS) dan jadwal koordinasi.

* **Modul 03: Analisis Sistem**  

  Menguraikan langkah dekomposisi sistem berjalan untuk menemukan akar masalah dan merumuskan sistem baru, klasifikasi kebutuhan (bisnis, pengguna, fungsional, dan nonfungsional), kriteria dan teknik validasi kebutuhan, ragam instrumen elisitasi (wawancara, JAD, kuesioner, analisis dokumen, observasi), serta strategi penemuan kebutuhan seperti *Root Cause Analysis* dan analisis durasi.

* **Modul 04: Pemodelan Analisis dengan Pendekatan Terstruktur**  
  
  Mempelajari pemodelan aliran data logis menggunakan *Data Flow Diagram* (DFD) secara berjenjang—mulai dari diagram konteks, level 0, hingga level rinci—beserta empat elemen utamanya (entitas luar, proses, arus data, dan simpanan data). Modul ini juga membedakan karakteristik paralel DFD dengan logika sekuensial pada bagan alir sistem, dokumen, dan program (*flowchart*).

* **Modul 05: Pemodelan Analisis dengan Pendekatan Berorientasi Objek**  

  Menjelaskan integrasi data dan proses dalam satu kesatuan objek, karakteristik paradigma objek (kelas, objek, enkapsulasi, pewarisan, polimorfisme, dan *dynamic binding*), pengenalan 14 diagram pada standar UML 2.0, serta pemodelan fungsional menggunakan diagram *use case* dan deskripsi naratif alur kerjanya.

* **Modul 06: Pemodelan Proses Bisnis dan Struktural Sistem**  
  
  Membahas pemodelan proses bisnis dan aliran kerja paralel menggunakan *activity diagram* (termasuk simpul kontrol *forking*, *join*, *decision*, serta partisi *swimlane*), serta pemodelan struktur data statis konseptual menggunakan *class diagram* (kompartemen nama, atribut, operasi/metode, dan relasi) serta *object diagram* sebagai verifikasi instansiasi konkret.

* **Modul 07: Pemodelan Perilaku (*Behavioral*) Objek**  
  
  Mendalami aspek dinamis interaksi antar-objek menggunakan *sequence diagram* yang berfokus pada kronologi pertukaran pesan berbasis waktu (melibatkan kelas *boundary*, *control*, dan *entity*), *communication diagram* yang berfokus pada pola relasi kolaboratif, serta *behavioral state machine diagram* untuk memetakan transisi status siklus hidup objek kompleks terhadap peristiwa (*event*).

* **Modul 08: Transisi dari Analisis Sistem ke Desain/Perancangan Sistem**  
  
  Membahas pemodelan data secara logika menggunakan *Entity Relationship Diagram* (ERD), aturan metodologis transformasi manual elemen ERD ke dalam skema tabel relasi fisik basis data relasional, serta komparasi tiga strategi akuisisi perangkat lunak (*custom development*, *software package*, dan *outsourcing*).

* **Modul 09: Desain/Perancangan Sistem**  

  Menguraikan perancangan arsitektur fisik perangkat keras dan jaringan (klien-server, *thin/thick client*, arsitektur bertingkat, virtualisasi, komputasi awan) yang diturunkan dari kebutuhan nonfungsional, serta perancangan antarmuka pengguna (*User Interface*) yang mencakup prinsip tata letak visual, struktur navigasi, pengendalian masukan (*input controls*) beserta validasinya, dan penyajian laporan keluaran (*output*).

---

## Glosarium

| Istilah | Definisi |
| :--- | :--- |
| **Pengembangan Sistem (*Systems Development*)** | Proses menyusun sistem informasi baru untuk menggantikan sistem lama secara keseluruhan atau memperbaiki sistem yang sudah ada agar operasional lebih efisien dan selaras dengan strategi bisnis. |
| **SDLC (*System Development Life Cycle*)** | Kerangka kerja bertahap yang sistematis untuk membangun perangkat lunak, mencakup fase perencanaan, investigasi, analisis, perancangan/desain, implementasi, hingga pemeliharaan sistem. |
| **Kerangka PIECES** | Kerangka klasifikasi masalah dan peluang pemicu perbaikan sistem yang terdiri dari enam dimensi: *Performance*, *Information*, *Economy*, *Control*, *Efficiency*, dan *Service*. |
| **Analis Sistem (*System Analyst*)** | Anggota tim pengembang yang bertindak sebagai pemecah masalah (*problem solver*) dan agen perubahan (*change agent*) yang menjembatani kebutuhan bisnis pengguna dengan solusi teknis pengembang. |
| **Studi Kelayakan (*Feasibility Study*)** | Evaluasi awal untuk menilai kelayakan rencana proyek investasi sistem berdasarkan dimensi teknis, ekonomi (analisis finansial), dan organisasi. |
| ***Scope Creep*** | Gejala penambahan dan pembengkakan ruang lingkup fitur proyek secara tidak terkendali di tengah proses pengembangan yang berisiko mengancam anggaran dan jadwal. |
| **WBS (*Work Breakdown Structure*)** | Teknik dekomposisi hierarkis (*top-down*) yang memecah proyek besar menjadi fase, kegiatan, tugas, hingga sub-tugas kecil yang terkelola. |
| **Kebutuhan Fungsional** | Pernyataan mengenai kemampuan, proses, dan layanan spesifik yang harus disediakan oleh sistem, mencakup respons sistem terhadap input tertentu dan perilakunya pada situasi tertentu. |
| **Kebutuhan Nonfungsional** | Pernyataan mengenai sifat-sifat kualitas, perilaku, batasan operasional, kinerja, keamanan, serta regulasi budaya dan politik tempat sistem beroperasi. |
| **Elisitasi Kebutuhan** | Sekumpulan kegiatan penemuan dan pengumpulan kebutuhan sistem melalui interaksi langsung dengan pengguna bisnis, pengguna akhir, dan pemangku kepentingan. |
| **JAD (*Joint Application Development*)** | Teknik pengumpulan kebutuhan terstruktur yang mempertemukan pengguna, manajemen, dan tim analis dalam sesi diskusi kelompok terfasilitasi secara intensif. |
| **DFD (*Data Flow Diagram*)** | Model grafis untuk menggambarkan alur sistem bisnis secara logis berdasarkan aliran data antar-proses tanpa memperhitungkan aspek fisik penyimpanan atau perangkat keras. |
| **Entitas Luar (*External Entity*)** | Orang, unit organisasi, atau sistem eksternal di luar batas sistem yang berinteraksi memberikan input data ke dalam sistem atau menerima output data dari sistem. |
| ***Black Hole*** | Kesalahan penggambaran proses pada DFD di mana suatu proses hanya menerima aliran data masuk (*input*) tanpa pernah menghasilkan aliran data keluar (*output*). |
| ***Miracle*** | Kesalahan penggambaran proses pada DFD di mana suatu proses menghasilkan aliran data keluar (*output*) tanpa pernah menerima aliran data masuk (*input*). |
| **Simpanan Data (*Data Store*)** | Elemen DFD yang merepresentasikan wadah penyimpanan data logis maupun fisik yang hanya dapat diakses melalui elemen proses. |
| ***Flowchart*** | Diagram yang menggambarkan alur prosedur sistem, aliran dokumen antar-unit, atau urutan instruksi program secara linier menggunakan simbol standar. |
| **Kelas (*Class*)** | *Blueprint* atau cetakan umum yang mendefinisikan struktur atribut (data) dan metode (perilaku) bagi sekumpulan objek sejenis. |
| **Objek (*Object*)** | Instansiasi konkret dari suatu kelas yang membungkus data dan proses ke dalam satu kesatuan mandiri. |
| **Enkapsulasi (*Encapsulation*)** | Mekanisme pembungkusan data (atribut) dan operasi (metode) ke dalam satu kesatuan entitas objek yang utuh. |
| ***Information Hiding*** | Prinsip penyembunyian struktur internal objek dari manipulasi langsung pihak luar dan hanya mengizinkan interaksi melalui antarmuka (*interface*) publik resmi. |
| **Pewarisan (*Inheritance*)** | Penurunan atribut dan metode dari kelas induk (*superclass*) kepada kelas-kelas anak turunannya (*subclass*) untuk mencegah redundansi. |
| **Polimorfisme (*Polymorphism*)** | Kemampuan suatu pesan yang sama untuk diinterpretasikan dan direspons secara berbeda oleh berbagai kelas objek yang berlainan. |
| ***Dynamic Binding*** | Mekanisme penundaan penentuan tipe objek dan pemanggilan metode hingga program dieksekusi pada saat jalan (*run-time*). |
| **UML (*Unified Modeling Language*)** | Bahasa visual grafis standar untuk memodelkan, menspesifikasikan, membangun, dan mendokumentasikan artefak sistem perangkat lunak berorientasi objek. |
| ***Use Case Diagram*** | Diagram UML yang menggambarkan fungsi-fungsi logis sistem dari sudut pandang aktor eksternal guna mendefinisikan batas sistem dan kebutuhan fungsional. |
| ***Activity Diagram*** | Diagram UML yang memodelkan logika prosedural proses bisnis, alur kerja, dan perilaku pemrosesan paralel (*parallel behavior*). |
| ***Swimlane*** | Pembagian kolom vertikal atau horizontal pada *activity diagram* untuk memetakan aktor atau unit departemen penanggung jawab setiap tindakan. |
| ***Class Diagram*** | Diagram struktural statis yang menggambarkan jenis-jenis objek dalam sistem, struktur atribut, visibilitas operasi, dan hubungan keterkaitan antar-kelas. |
| ***Object Diagram*** | Diagram struktural yang menampilkan konfigurasi cuplikan (*snapshot*) instansiasi objek konkret beserta nilai atribut aktualnya pada titik waktu tertentu. |
| ***Sequence Diagram*** | Diagram interaksi dinamis yang memodelkan urutan pesan yang dikirimkan antar-objek sepanjang garis hidup (*lifeline*) berbasis urutan waktu. |
| ***Boundary Class*** | Lapisan kelas pada *sequence diagram* yang berfungsi menjembatani interaksi antara pengguna atau perangkat eksternal dengan sistem aplikasi. |
| ***Control Class*** | Lapisan kelas pada *sequence diagram* yang bertugas mengoordinasikan logika pemrosesan dan mengatur alur eksekusi antara antarmuka dan basis data. |
| ***Entity Class*** | Lapisan kelas pada *sequence diagram* yang mengelola dan memanipulasi penyimpanan data permanen di dalam sistem. |
| ***Communication Diagram*** | Diagram interaksi yang menggambarkan pola kolaborasi jaringan dan relasi struktural antar-objek dalam mengeksekusi suatu kasus penggunaan. |
| ***Behavioral State Machine Diagram*** | Diagram yang melacak siklus perubahan keadaan atau status (*state*) dari suatu kelas objek tunggal yang kompleks sebagai reaksi atas terjadinya peristiwa (*event*). |
| **ERD (*Entity Relationship Diagram*)** | Diagram konseptual/logis yang merepresentasikan struktur data organisasi melalui kumpulan entitas, atribut, relasi, dan kardinalitas tanpa memuat instruksi komputasi. |
| **Entitas Kuat (*Strong Entity*)** | Entitas mandiri yang keberadaannya tidak bergantung pada entitas lain dan memiliki atribut pengidentifikasi unik (*primary key*) sendiri. |
| **Entitas Lemah (*Weak Entity*)** | Entitas yang eksistensinya bergantung penuh pada entitas pemilik (*identifying owner*) dan hanya memiliki pengidentifikasi sebagian (*partial identifier*). |
| **Kardinalitas (*Cardinality*)** | Jumlah kejadian instansiasi pada suatu entitas yang dapat dikaitkan dengan satu kejadian instansiasi pada entitas pasangannya (1:1, 1:N, M:N). |
| ***Custom Development*** | Strategi pengadaan sistem dengan cara membangun dan memprogram aplikasi dari awal menggunakan staf pengembang internal organisasi (*in-house*). |
| ***Software Package*** | Program aplikasi siap pakai yang dibeli dari pasar komersial untuk melayani fungsi-fungsi bisnis standar organisasi. |
| ***Outsourcing*** | Strategi penyerahan tanggung jawab pengembangan atau pemeliharaan sistem informasi kepada pihak ketiga, vendor, atau penyedia layanan eksternal. |
| **Arsitektur Klien-Server** | Konfigurasi jaringan yang membagi beban pemrosesan logika presentasi, aplikasi, dan data antara perangkat pengguna (klien) dan komputer penyedia layanan (server). |
| ***Thin Client*** | Komputer klien yang hanya menangani tampilan antarmuka (logika presentasi) atau sebagian kecil aplikasi, sementara pemrosesan utama dilakukan di server. |
| ***Thick Client*** | Komputer klien yang menangani logika presentasi sekaligus mengeksekusi hampir seluruh logika pemrosesan aplikasi. |
| ***Three-Click Rule*** | Prinsip desain antarmuka yang mengarahkan agar navigasi dirancang sedemikian rupa sehingga pengguna dapat mencapai informasi yang dituju dalam maksimal tiga kali klik. |
| **Validasi Masukan (*Input Validation*)** | Mekanisme penyaringan data pada form masukan (pemeriksaan kelengkapan, format, rentang, dan konsistensi) untuk mencegah data keliru tersimpan di sistem. |
___