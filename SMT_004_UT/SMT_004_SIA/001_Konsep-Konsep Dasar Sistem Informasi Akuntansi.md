### Modul 1: Konsep Dasar Sistem Informasi Akuntansi (SIA)
#### Deskripsi Umum Sistem Informasi Akuntansi
Secara umum, jenis sistem informasi terbagi menjadi dua, yaitu Sistem Informasi Akuntansi (SIA) dan Sistem Informasi Manajemen (SIM). SIA merupakan sistem pengelolaan data keuangan maupun nonkeuangan yang berfungsi membantu pengambilan keputusan. SIA memiliki enam elemen utama: pengguna, prosedur, data, perangkat lunak, infrastruktur, dan pengendalian internal.

SIA bertujuan untuk mengumpulkan, menyimpan, dan mengubah data menjadi informasi, serta menyediakan pengendalian aset. Sistem ini dibagi menjadi lima siklus: pendapatan, pengeluaran, produksi, penggajian, dan pelaporan. SIA juga didukung oleh serangkaian aktivitas yang memberikan nilai tambah, seperti aktivitas primer (inbound logistics, operations, outbound logistics, marketing & sales, service) dan aktivitas pendukung (firm infrastructure, human resources, technology, purchasing). Mempelajari SIA tentunya sangat berguna untuk meningkatkan efisiensi, keakuratan, serta membantu pengambilan keputusan oleh pihak internal perusahaan.

#### Ciri-Ciri Sistem 
Sistem adalah kumpulan dua atau lebih komponen yang saling berhubungan dan bekerja sama untuk mencapai tujuan tertentu. Sistem terdiri dari subsistem-subsistem (baik fisik maupun abstrak) yang lebih kecil, yang menjadi bagian dari sistem yang lebih besar (supersistem). Sebuah sistem memiliki input berupa data atau parameter awal; proses yang merupakan tahapan pengelolaan data (misalnya aktivitas pemrosesan CRUD); serta output sebagai hasil akhir yang disajikan untuk mengendalikan operasional dan mengambil keputusan. Agar dapat berjalan normal, setiap komponen harus saling terintegrasi. Contohnya, sistem komputer yang terdiri dari processor, memory, monitor, dan keyboard tidak akan berfungsi jika salah satu komponennya hilang.

Sistem memiliki batasan (boundary) yang menentukan tingkat kompleksitasnya; semakin sedikit batasan, sistem akan menjadi semakin kompleks. Batasan ini juga menentukan jenis input yang dapat diterima oleh sistem. Dalam menentukan kompleksitasnya, sistem harus memiliki tujuan yang fokus karena hal tersebut memengaruhi batasan, komponen, serta koordinasi antar-komponen saat bekerja.

Sistem beroperasi di dalam suatu lingkungan yang terbagi menjadi dua: lingkungan luar (eksternal) di luar batas sistem tempat berinteraksi dengan sistem lain, dan lingkungan dalam (internal) yang menjadi wadah interaksi antar-komponen.
___

### Modul 2: Metode dan Teknik Pengembangan Sistem
#### Metode dan Teknik Pengembangan Sistem
Metode yang digunakan dalam pengembangan sistem adalah System Development Life Cycle (SDLC). Tahapan pada SDLC tradisional—misalnya dengan metode waterfall—meliputi: 1) Perencanaan, 2) Analisis sistem, 3) Desain sistem, 4) Seleksi sistem, 5) Implementasi sistem, dan 6) Perawatan sistem. Namun, pada pengembangan sistem modern, tahapan yang dilakukan tidak selalu kaku seperti metode waterfall, melainkan lebih dinamis dan bervariasi (misalnya terdiri dari 10 tahapan mulai dari inisiasi/perencanaan, pengumpulan kebutuhan, desain, coding, hingga testing).

Dalam pengembangan sistem, akuntan memiliki peran sebagai user yang memberikan gambaran akhir mengenai kebutuhan, serta sebagai System Designer & Analyst yang berfungsi menentukan sistem konseptual seperti sumber data, tujuan, serta aturan akuntansi yang diterapkan pada sistem. Seiring meningkatnya kompleksitas, SDLC didukung oleh beberapa teknik lain, antara lain:
1. Prototyping: Teknik yang bertujuan memberikan gambaran sistem kepada pengguna. Teknik ini terdiri dari evolutionary prototype (dikembangkan terus-menerus) dan requirements prototype (digunakan hanya untuk mendefinisikan kebutuhan awal). Pendekatan ini hemat biaya dan melibatkan pengguna secara aktif, namun berisiko membuat sistem menjadi terlalu kompleks.
2. Rapid Application Development (RAD): Teknik yang berfokus pada kecepatan pengembangan dengan mengombinasikan metode waterfall dan prototyping dalam cakupan yang lebih luas. Komponen utamanya meliputi manajemen, pengembang profesional (SWAT team), metode (RAD life cycle), serta tools seperti CASE dan bahasa pemrograman generasi keempat.
3. Joint Application Development (JAD): Teknik yang menggunakan wadah rapat atau lokakarya untuk mendiskusikan sistem dengan melibatkan berbagai pihak (seperti executive sponsor, manajer, fasilitator, staf pencatat, partisipan, dan pengamat). Teknik ini menghasilkan kualitas sistem yang tinggi karena pengguna terlibat langsung, namun berpotensi menimbulkan perdebatan saat rapat berlangsung.

#### Unified Modeling Language (UML)
UML merupakan teknik pengembangan sistem berbasis grafis yang berfungsi untuk mendokumentasikan dan menyimulasikan sistem. Dalam konteks ini, teknik tersebut berfokus pada dua bagian utama, yaitu Use Case Model dan Activity Diagram.

Use Case Model bertujuan menggambarkan tujuan sistem secara grafis yang terdiri dari tiga komponen:
1. Use Case Diagram: Menggambarkan hubungan secara global antara sistem dan aktor. Notasi di dalamnya meliputi System, Actor, Use Case, Association, Dependency (include & extend), serta Generalization.
2. Use Case Narrative: Uraian deskriptif yang menjelaskan langkah-langkah detail dari use case diagram. Elemennya terdiri dari Assumptions, Preconditions, Use Case Initiation, Process/Dialog, Use Case Termination, dan Postconditions.
3. Use Case Scenario: Berfungsi sebagai diagram percabangan logika yang dipecah dari use case narrative.

Sementara itu, Activity Diagram memiliki karakteristik seperti flowchart yang menggambarkan alur kerja, logika bisnis, hingga interaksi antar-aktor. Diagram ini memiliki elemen-elemen yang meliputi: Activities (elemen aktivitas), Transitions (garis transisi), Decisions (percabangan logika), Merge Point (penggabungan kembali jalur percabangan), Start Point & End Point (titik mulai dan akhir diagram), Concurrency (percabangan proses yang berjalan paralel), Synchronization (penggabungan proses paralel), Swimlanes (garis pemisah otoritas antar-aktor/sistem), serta Signals (sinyal pemicu waktu terjadinya proses).
___

###