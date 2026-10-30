# Modul 03: Analisis Sistem

## Bagian 01: Penentuan Keluaran dan Kebutuhan

### Fase Analisis
*   **Definisi Fase Analisis:** Kegiatan penguraian suatu sistem informasi yang utuh ke dalam bagian-bagian komponennya untuk mengidentifikasi dan mengevaluasi permasalahan, kesempatan, hambatan, serta kebutuhan yang diharapkan sehingga dapat diusulkan perbaikannya.
*   **Tujuan Akhir:** Mengidentifikasi kebutuhan-kebutuhan pengguna secara terperinci pada sistem baru yang akan dikembangkan.
*   **Tiga Langkah Utama Fase Analisis (Dennis, 2012):**
    1.  Memahami kerja sistem yang ada (sistem yang sedang berjalan).
    2.  Mengidentifikasi perbaikan atau penyempurnaan yang diharapkan.
    3.  Menentukan kebutuhan (persyaratan) untuk sistem baru (sistem yang akan datang).
*   **Metode Penelitian Sistem:**
    *   **Penelitian Pendahuluan (*Preliminary Survey*):** Penelitian awal yang dilakukan pada tahap perencanaan sistem untuk memperoleh gambaran umum.
    *   **Penelitian Terinci (*Detailed Survey*):** Penelitian mendalam yang dilakukan pada tahap analisis sistem untuk mempelajari operasi sistem yang berjalan secara menyeluruh.
*   **Keterampilan Berpikir Kritis (*Critical Thinking*):** Kemampuan mengenali kekuatan dan kelemahan sistem serta menyusun kembali ide ke dalam bentuk yang lebih baik guna menganalisis hasil penemuan kebutuhan dan menerjemahkannya menjadi konsep sistem baru.
*   **Proposal Sistem (*System Proposal*):** Dokumen hasil akhir tahap analisis yang memuat pernyataan kebutuhan terperinci, model proses, model data, analisis kelayakan, dan rencana kerja revisi yang disampaikan kepada komite persetujuan sebagai acuan fase desain.
*   **Risiko Penentuan Kebutuhan:** Kegagalan menentukan kebutuhan dengan benar merupakan salah satu penyebab utama kegagalan proyek perangkat lunak (Mensah, 2003; Mullaney, 2008; Dennis, 2012).
___
### B. Definisi Kebutuhan (Persyaratan) dan Jenis-Jenis Kebutuhan
**Definisi Kebutuhan:** Pernyataan tentang apa yang harus dilakukan oleh sistem atau karakteristik yang perlu dimiliki oleh sistem.

**Klasifikasi Kebutuhan Sistem:**
1.  **Kebutuhan Bisnis (*Business Requirements*):** Pernyataan yang menjelaskan alasan mengajukan proyek pengembangan sistem, mencerminkan tujuan keseluruhan organisasi, serta membantu menentukan kontribusi nilai bisnis yang dihasilkan.
2.  **Kebutuhan Pengguna (*User Requirements*):** Pernyataan yang menjelaskan apa yang perlu dilakukan pengguna dengan sistem atau informasi yang dibutuhkan untuk menyelesaikan pekerjaan harian mereka.
3.  **Kebutuhan Fungsional (*Functional Requirements*):** Pernyataan mengenai kemampuan dan layanan yang harus diberikan oleh sistem (produk perangkat lunak), mencakup bagaimana sistem merespons input tertentu dan bagaimana sistem berperilaku pada situasi tertentu. Kebutuhan fungsional dibagi menjadi dua kelompok:
    *   **Berorientasi pada Proses:** Proses spesifik yang harus dilakukan oleh sistem.
    *   **Berorientasi pada Informasi:** Data atau informasi yang harus terkandung dan disimpan di dalam sistem.
4.  **Kebutuhan Nonfungsional (*Non-functional Requirements*):** Kelompok kebutuhan yang menjelaskan sifat-sifat kualitas, perilaku, dan kendala lingkungan sistem. Kategori utama kebutuhan nonfungsional meliputi:
    *   **Operasional:** Lingkungan fisik dan teknis di mana sistem akan beroperasi.
    *   **Performa (*Performance*):** Kecepatan, kapasitas, keandalan, dan ketersediaan sistem.
    *   **Keamanan (*Security*):** Batasan siapa dan dalam situasi apa pengguna dapat mengakses sistem.
    *   **Budaya dan Politik:** Faktor budaya, kebijakan perusahaan, serta persyaratan hukum/regulasi yang mempengaruhi sistem.
___
### Proses Penentuan Kebutuhan
*   **Perspektif Kolaboratif:** Penentuan kebutuhan ditinjau dari sudut pandang bisnis dan teknologi informasi melalui kerja sama erat antara analis sistem dan pemangku kepentingan (*stakeholders*).
*   **Pengelolaan Evolusi Kebutuhan (*Scope Management*):** Kebutuhan berkembang seiring berjalannya fase analisis. Tim proyek harus mengelola daftar kebutuhan secara ketat agar tidak terjadi *scope creep* (penambahan fitur tanpa kendali) yang dapat mengancam anggaran dan jadwal proyek.
___
### Pernyataan Definisi Kebutuhan
*   **Format Dokumen:** Laporan tertulis berbentuk garis besar (*outline*) yang mencantumkan kebutuhan fungsional dan nonfungsional secara terstruktur.
*   **Pengorganisasian:** Setiap poin kebutuhan diberi **penomoran unik** agar mudah dilacak (*traceable*) sepanjang siklus SDLC dan dikelompokkan berdasarkan area bisnis atau area fungsional.
*   **Penentuan Prioritas:** Kebutuhan diklasifikasikan berdasarkan tingkat kepentingannya (misalnya prioritas tinggi, sedang, rendah) atau dialokasikan berdasarkan versi rilis sistem pada metodologi pengembangannya.
___
### Validasi Kebutuhan

**Pengertian Validasi:** Proses pemeriksaan untuk memastikan bahwa pernyataan kebutuhan yang terdokumentasi benar-benar mendefinisikan sistem yang diinginkan pengguna secara lengkap dan akurat.

**Lima Kriteria Pemeriksaan Kebutuhan:**
1.  **Pemeriksaan Validitas:** Memastikan fungsi yang dirancang benar-benar sesuai dengan kebutuhan operasional pengguna.
2.  **Pemeriksaan Konsistensi:** Memastikan tidak ada deskripsi atau batasan kebutuhan yang saling bertentangan.
3.  **Pemeriksaan Kelengkapan:** Memastikan dokumen mencakup semua fungsi dan batasan yang dimaksudkan.
4.  **Pemeriksaan Realisme:** Memastikan kebutuhan dapat diimplementasikan dengan teknologi, anggaran, dan jadwal yang ada.
5.  **Kemampuan Diverifikasi (*Verifiability*):** Memastikan kebutuhan dituliskan sedemikian rupa sehingga dapat diuji secara terukur saat sistem diserahkan.

**Tiga Teknik Validasi Kebutuhan:**
1.  **Peninjauan Kebutuhan (*Requirements Review*):** Peninjauan sistematis oleh tim peninjau (analis, pengguna, dan pengembang) untuk memeriksa kelengkapan dan konsistensi dokumen.
2.  **Pembuatan Prototipe (*Prototyping*):** Penyediaan model sistem yang dapat dijalankan agar pengguna dapat bereksperimen langsung untuk mengonfirmasi kebutuhan.
3.  **Pembuatan *Test-Case*:** Menyusun rencana pengujian sejak fase analisis; jika kebutuhan sulit dibuatkan skenario pengujiannya, berarti kebutuhan tersebut belum terdefinisi dengan jelas.
___

## Bagian 02: Teknik Elisitasi dan Strategi Analisis Kebutuhan

### Elisitasi Kebutuhan dalam Praktik
**Definisi Elisitasi:** Sekumpulan aktivitas yang ditujukan untuk menemukan dan mengumpulkan kebutuhan suatu sistem melalui komunikasi dengan pengguna bisnis, pengguna akhir, dan pemangku kepentingan (*stakeholders*).

**Aspek Politik dan Kepercayaan:** Proses elisitasi berfungsi membangun dukungan politik dan kepercayaan antara tim proyek dan pengguna akhir. Analis harus peka terhadap hierarki organisasi dan memastikan pemangku kepentingan kunci terlibat.

### Ragam Teknik Elisitasi Utama:

**1\. Wawancara (*Interview*):** Teknik elisitasi yang paling umum dilakukan secara tatap muka individual atau kelompok.
* **Lima Langkah Dasar Wawancara:**
    1.  *Memilih Responden:* Menyusun daftar orang yang diwawancarai berdasarkan kebutuhan informasi (dari manajer tingkat atas hingga staf operasional).
    2.  *Merancang Pertanyaan Wawancara:* Menggunakan kombinasi tiga jenis pertanyaan:
        *   **Pertanyaan Tertutup:** Membutuhkan jawaban spesifik/pasti untuk mengontrol wawancara.
        *   **Pertanyaan Terbuka:** Memberikan ruang bagi responden untuk menjelaskan secara bebas guna mengumpulkan informasi yang kaya.
        *   **Pertanyaan Menyelidiki (*Probing*):** Pertanyaan tindak lanjut untuk menggali penjelasan lebih dalam atau mengonfirmasi tanggapan sebelumnya.
    3.  *Mengatur Strategi Pertanyaan:* Pendekatan **Top-Down** (dimulai dari pertanyaan umum/strategis menuju spesifik) atau **Bottom-Up** (dimulai dari rincian operasional menuju gambaran umum).
    4.  *Mempersiapkan Wawancara:* Menyusun rencana wawancara, mengonfirmasi jadwal, dan mempelajari latar belakang responden.
    5.  *Melakukan Wawancara:* Membangun hubungan (*rapport*), menjelaskan tujuan, mencatat/merekam interaksi, dan memisahkan fakta dari pendapat.
    6.  *Tindak Lanjut Pasca-Wawancara:* Menyusun laporan/catatan wawancara dalam waktu 24–48 jam untuk dikonfirmasi kembali kepada responden.

**2\. Joint Application Development (JAD)**
*   **Definisi:** Teknik pengumpulan informasi terstruktur yang mempertemukan pengguna, manajemen, dan tim analis untuk bekerja sama dalam kelompok diskusif terfasilitasi.
*   **Peran dalam JAD:**
    *   **Fasilitator:** Pihak netral yang ahli dalam teknik kelompok untuk memandu agenda, menjaga fokus, dan mendorong partisipasi.
    *   **Juru Tulis (*Scribe*):** Mencatat seluruh masukan dan keputusan selama sesi berlangsung.
*   **Electronic JAD (e-JAD):** Penggunaan perangkat lunak *groupware* dan komputer jaringan untuk mengirimkan ide secara anonim, mengurangi kontroversi, dan mempercepat pengambilan keputusan.
*   **Tahapan JAD:** Memilih peserta, merancang sesi (3–4 hari diskusi), mempersiapkan peserta, melaksanakan sesi formal, dan menyusun laporan pasca-JAD.

**3\. Kuesioner (*Questionnaires*)**
*   **Definisi:** Serangkaian pertanyaan tertulis yang didistribusikan kepada responden dalam jumlah besar atau lokasi geografis yang tersebar.
*   **Tingkat Respons (*Response Rate*):** Kuesioner kertas/elektronik memiliki tingkat pengembalian yang bervariasi (kuesioner web sering kali berkisar antara 5%–30%).
*   **Pedoman Desain:** Memulai dengan pertanyaan menarik, mengelompokkan item secara logis, menghindari istilah ambiguous/bias, menyediakan anonimitas, dan melakukan *pretest*.

**4\. Analisis Dokumen (*Document Analysis*)**
*   **Definisi:** Mempelajari dokumentasi sistem yang ada, seperti manual prosedur, laporan bisnis, formulir, dan bagan organisasi.
*   **Sistem Formal vs Informal:** Analisis dokumen membantu menemukan perbedaan antara sistem formal (apa yang tertulis di prosedur resmi) dan sistem informal (apa yang sebenarnya dilakukan pengguna di lapangan).

**5\. Pengamatan (*Observation*)**
*   **Definisi:** Tindakan menyaksikan secara langsung proses bisnis yang sedang berjalan untuk memahami realitas situasi operasional.
*   **Peran Analis:** Bertindak sebagai "antropolog organisasi".
*   **Kelebihan & Kelemahan:** Sangat baik untuk memvalidasi informasi dari wawancara, tetapi perilaku orang yang diamati dapat berubah karena merasa diawasi (*Hawthorne effect*).

**6\. Memilih Teknik Elisitasi yang Tepat**
Matriks evaluasi pemilihan teknik didasarkan pada 6 kriteria utama:
*   *Jenis Informasi* (pemahaman sistem berjalan vs kebutuhan masa depan).
*   *Kedalaman Informasi* (detail fakta dan alasan).
*   *Luasnya Informasi* (jangkauan pemangku kepentingan).
*   *Integrasi Informasi* (kemampuan menyelaraskan perbedaan pendapat secara langsung).
*   *Keterlibatan Pengguna* (tingkat komitmen waktu pengguna).
*   *Biaya* (kebutuhan anggaran operasional).
___
### Strategi Analisis Kebutuhan
Ragam strategi yang digunakan analis bersama pemangku kepentingan untuk menemukan kebutuhan mendasar:

1.  **Analisis Masalah (*Problem Analysis*):** Meminta pengguna mengidentifikasi masalah pada sistem yang ada dan mengusulkan cara menyelesaikannya; cenderung menghasilkan perbaikan minor/incremental.
2.  **Analisis Akar Penyebab (*Root Cause Analysis / RCA*):** Berfokus pada mengidentifikasi akar permasalahan mendasar terlebih dahulu sebelum menentukan solusi, dengan memetakan hierarki sebab-akibat.
3.  **Analisis Durasi (*Duration Analysis*):** Menghitung total waktu rata-rata yang dibutuhkan untuk menyelesaikan setiap langkah proses bisnis, lalu membandingkannya dengan total waktu keseluruhan untuk menemukan hambatan (*bottleneck*) dan peluang pemrosesan paralel.
4.  **Informal Benchmarking:** Mempelajari bagaimana organisasi lain atau pesaing melakukan proses bisnis serupa untuk memperoleh ide perbaikan.
5.  **Analisis Teknologi (*Technology Analysis*):** Mengidentifikasi bagaimana teknologi baru atau terkini dapat diterapkan secara sistematis pada proses bisnis untuk menciptakan nilai tambah.
6.  **Penghapusan Aktivitas (*Activity Elimination*):** Menganalisis setiap langkah proses bisnis untuk menentukan dampak jika aktivitas tersebut dihilangkan sama sekali guna menyederhanakan alur kerja.
7.  **Membandingkan Strategi Analisis:** Pemilihan strategi disesuaikan dengan fokus proyek (perbaikan efisiensi skala kecil vs perancangan ulang proses bisnis secara mendasar).
___