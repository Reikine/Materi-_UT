# Modul 6: Sistem Informasi Eksekutif (*Executive Information System* / EIS)

## Bagian 1: Sistem Informasi Eksekutif

### Klasifikasi Sistem Informasi

#### Berdasarkan Klasifikasi Manajemen

Pengelompokan sistem informasi berdasarkan tingkat hierarki manajerial dalam organisasi:

* **Strategic Level (Level Strategis):** Digunakan oleh manajemen puncak untuk perencanaan jangka panjang, visi, dan pengambilan keputusan strategis (didukung oleh EIS).
* **Tactical / Managerial Level (Level Menengah):** Digunakan oleh manajer departemen untuk alokasi sumber daya, pengawasan kinerja, dan pengendalian operasional (didukung oleh *Management Information System* / MIS).
* **Operational Level (Level Operasional):** Digunakan oleh staf lini depan untuk memproses transaksi harian dan kegiatan operasional rutin (didukung oleh *Transaction Processing System* / TPS).

#### Berdasarkan Klasifikasi Aplikasi

Pengelompokan berdasarkan fungsi spesifik dan domain bisnis tempat sistem tersebut diterapkan (contoh: *Enterprise Resource Planning* / ERP, *Customer Relationship Management* / CRM, *Supply Chain Management* / SCM, dan *Decision Support System* / DSS).
___
### Sistem Informasi Eksekutif (EIS)

#### Komponen EIS

* **Perangkat Keras (*Hardware*):** Perangkat dengan kemampuan grafis tinggi, layar sentuh, atau perangkat portabel untuk akses cepat bagi eksekutif yang memiliki mobilitas tinggi.
* **Perangkat Lunak (*Software*):** Meliputi *database*, alat analisis data, dasbor eksekutif (*executive dashboard*), dan antarmuka pelaporan grafis (*drill-down reporting*).
* **Jaringan Telekomunikasi:** Infrastruktur konektivitas untuk mengakses data terpusat maupun eksternal secara aman (*real-time*).

#### Interaksi Antar Sistem Informasi

* EIS tidak berdiri sendiri; sistem ini mengintegrasikan dan menyarikan data dari sistem di bawahnya (seperti TPS, MIS, ERP, dan sumber data eksternal) untuk disajikan dalam bentuk ringkasan eksekutif yang padat dan mudah dipahami.

#### Nilai Bisnis Sistem Informasi Eksekutif

* **Kecepatan Akses Informasi:** Menyediakan data performa bisnis secara *real-time* tanpa harus menunggu laporan manual dari berbagai departemen.
* **Kemudahan Navigasi (*Drill-Down Capability*):** Memungkinkan eksekutif melihat gambaran besar (*high-level summary*) terlebih dahulu, lalu menelusuri detail masalah secara spesifik jika diperlukan.
* **Identifikasi Tren & Peluang:** Membantu mendeteksi masalah lebih awal dan merumuskan respons strategis yang lincah terhadap dinamika pasar.

#### Aplikasi EIS

* **Dasbor Kinerja Perusahaan (*Corporate Dashboard*):** Menampilkan metrik utama seperti *Key Performance Indicators* (KPI), kondisi keuangan, dan status pencapaian target strategis.
* **Analisis Pasar & Kompetitor:** Memantau tren industri, pergerakan kompetitor, dan indikator ekonomi makro.

#### Trend EIS

* **Integrasi dengan *Business Intelligence* (BI) & *Artificial Intelligence* (AI):** Memanfaatkan analitik prediktif dan kecerdasan buatan untuk memberikan rekomendasi otomatis.
* **Cloud-Based & Mobile Access:** Akses dasbor eksekutif kapan saja dan di mana saja melalui perangkat seluler berbasis awan dengan standar keamanan tinggi.
___
### Peran EIS dalam Arsitektur Perusahaan

* **Puncak Pengambilan Keputusan:** Berfungsi sebagai lapisan tertinggi dalam arsitektur informasi perusahaan yang menjembatani data transaksional mentah menjadi wawasan strategis (*strategic insight*).
* **Penyelarasan Visi:** Memastikan bahwa seluruh keputusan operasional dan taktis di bawahnya tetap selaras dengan arah tujuan jangka panjang perusahaan.
___

## Bagian 2: Model Proses Bisnis dan Notasi

### Business Process Model and Notation (BPMN) & Mapping

#### Business Process Model and Notation (BPMN)

**BPMN** adalah standar global untuk pemodelan proses bisnis yang dikelola oleh *Object Management Group (OMG)*. Tujuan utama BPMN adalah menyediakan notasi standar yang mudah dipahami oleh semua pemangku kepentingan—mulai dari analis bisnis, pengembang teknis, hingga manajer operasional.

Elemen dasar dalam BPMN dibagi menjadi beberapa kategori:

* **Flow Objects (Objek Alur):**
    * *Event (Kejadian):* Sesuatu yang terjadi selama proses (Start, Intermediate, End).
    * *Activity (Aktivitas):* Pekerjaan atau tugas yang harus dilakukan (Task, Sub-process).
    * *Gateway (Gerbang):* Titik percabangan atau penggabungan alur berdasarkan kondisi tertentu (Exclusive, Parallel, Inclusive).

* **Connecting Objects (Objek Penghubung):**
    * *Sequence Flow:* Menunjukkan urutan eksekusi aktivitas.
    * *Message Flow:* Menunjukkan komunikasi antar pihak/pool yang berbeda.
    * *Association:* Menghubungkan artefak atau teks ke objek grafis.

* **Swimlanes (Jalur Renang):**
    * *Pool:* Mewakili partisipan terpisah atau entitas bisnis independen.
    * *Lane:* Sub-partisi di dalam pool untuk menunjukkan peran atau departemen tertentu.

* **Artifacts & Data:** Menyediakan informasi tambahan seperti *Data Objects*, *Groups*, dan *Text Annotations*.

#### Business Process Mapping

**Pemetaan Proses Bisnis** adalah langkah visualisasi awal untuk mendokumentasikan bagaimana pekerjaan benar-benar diselesaikan di dalam organisasi.

* **Fokus:** Menjawab pertanyaan *"Bagaimana proses ini berjalan saat ini (as-is)?"* atau *"Bagaimana seharusnya proses ini dirancang (to-be)?"*.
* **Manfaat:** Mengidentifikasi hambatan (*bottlenecks*), redundansi, potensi otomatisasi, serta memastikan kepatuhan terhadap standar operasional prosedur (SOP).
___
###  Ragam Model, Diagram, dan Notasi Pemodelan Proses

Selain BPMN, terdapat berbagai jenis diagram dan notasi yang digunakan dalam konteks rekayasa sistem, manajemen operasional, dan manajemen proyek. Berikut adalah penjabaran dari 9 poin materi yang relevan:

#### Model dan Notasi Proses Bisnis (Business Process Modeling & Notations)

Kerangka kerja konseptual secara umum yang mencakup aturan, simbol, dan sintaksis untuk menggambarkan bagaimana aktivitas bisnis saling terhubung. Ini mencakup standar seperti BPMN yang menjembatani kesenjangan antara desain proses bisnis dan implementasi teknisnya.

#### UML Diagram (Unified Modeling Language)

UML adalah standar industri untuk visualisasi, spesifikasi, dan dokumentasi sistem perangkat lunak berorientasi objek. Dalam konteks proses dan perilaku sistem, diagram UML yang sering digunakan meliputi:

* **Activity Diagram:** Menunjukkan alur kontrol dari aktivitas satu ke aktivitas lainnya (mirip dengan *flowchart* tetapi mendukung proses paralel).
* **Sequence Diagram:** Menunjukkan bagaimana objek berinteraksi satu sama lain dalam suatu urutan waktu tertentu.
* **Use Case Diagram:** Menggambarkan fungsionalitas sistem dari sudut pandang pengguna luar (*actor*).

#### Process Flowchart (Bagan Alir Proses)

Diagram alir adalah representasi visual tradisional dari langkah-langkah sekuensial dalam suatu proses. Menggunakan simbol geometris standar (persegi panjang untuk proses, berlian untuk keputusan, oval untuk terminal/mulai-selesai). Sangat efektif untuk prosedur operasional standar yang sederhana hingga menengah.

#### Data Flow Diagram (DFD)

DFD berfokus pada **alur data** di dalam sebuah sistem, bukan pada kontrol atau urutan waktu. Komponen utamanya meliputi:

* **External Entity:** Sumber atau tujuan data (pihak luar).
* **Process:** Transformasi data yang terjadi.
* **Data Store:** Tempat penyimpanan data (database, file).
* **Data Flow:** Arah pergerakan data antar komponen.

#### Gantt Charts (Bagan Gantt)

Bagan batang horizontal yang digunakan dalam manajemen proyek untuk menggambarkan **jadwal proyek**.

* Sumbu vertikal menunjukkan tugas atau aktivitas.
* Sumbu horizontal menunjukkan rentang waktu (hari, minggu, bulan).
* Sangat baik untuk memantau durasi pengerjaan, tenggat waktu, dan tumpang tindih antar tugas.

#### PERT Diagram (Program Evaluation and Review Technique)

Metodologi manajemen proyek yang dirancang untuk menganalisis dan mewakili tugas-tugas yang terlibat dalam menyelesaikan proyek tertentu, terutama yang kompleks dan belum pernah dilakukan sebelumnya.

* Disajikan dalam bentuk jaringan simpul (*nodes* dan *arrows*) yang menunjukkan urutan ketergantungan.
* Menggunakan estimasi waktu optimis, pesimis, dan paling mungkin (*most likely*) untuk menghitung durasi kritis proyek (Jalur Kritis / *Critical Path Method*).

#### Functional Flow Block Diagram (FFBD)

Notasi alur sistem rekayasa (*systems engineering*) yang menunjukkan urutan langkah-langkah fungsi sistem secara hierarkis. FFBD memungkinkan dekomposisi fungsi yang kompleks dari tingkat makro ke tingkat mikro secara sistematis, sering digunakan dalam pertahanan, dirgantara, dan desain sistem teknik yang rumit.

#### Integrated Definition for Function Modelling (IDEF0)

Metodologi pemodelan fungsional yang dikembangkan untuk analisis dan desain sistem berbasis arsitektur perusahaan. IDEF0 menggambarkan fungsi atau aktivitas sebagai kotak, dengan mekanisme input, output, kontrol (*controls*), dan mekanisme pendukung (*mechanisms*) yang masuk atau keluar dari setiap kotak.

#### Petri Nets dan Colored Petri Nets (CPN)

* **Petri Nets:** Model matematika teoretis untuk sistem diskrit konkuren. Terdiri dari *Places* (tempat/kondisi), *Transitions* (transisi/kejadian), dan *Tokens* (tanda yang menunjukkan status). Sangat kuat untuk memverifikasi properti sistem seperti kebuntuan (*deadlock*) dan konkurensi.
* **Colored Petri Nets (CPN):** Perluasan dari Petri Nets dasar di mana token diberikan "warna" (tipe data atau atribut tambahan), memungkinkan pemodelan sistem yang jauh lebih kompleks, besar, dan realistis dengan tetap mempertahankan ketelitian matematis.
___