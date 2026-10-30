# Modul 08: Transisi dari Analisis Sistem ke Desain/Perancangan Sistem

Fase peralihan dari model data logik menuju model data fisik dilakukan dengan merancang skema basis data tertentu. Model data relasional adalah model yang paling umum digunakan dalam implementasi sistem saat ini. Beberapa literatur mendefinisikan *Entity Relationship Diagram* (ERD) sebagai model data konseptual dan diagram relasi sebagai model data logik, sementara referensi lain menempatkan ERD sebagai model data logik.

Meskipun perangkat bantu CASE (*Computer Aided Software Engineering*) dapat melakukan transformasi ERD ke diagram relasi secara otomatis, pemahaman prosedur manual tetap mutlak diperlukan karena:
1. Perangkat CASE tidak selalu mampu memodelkan data kompleks (seperti relasi *ternary* dan relasi *supertype/subtype*) secara optimal.
2. Sering kali terdapat beberapa alternatif pemetaan sehingga analis harus memilih bentuk yang paling efektif.
3. Hasil pemodelan otomatis oleh perangkat CASE tetap harus diuji dan divalidasi secara manual.
___

## Bagian 01: Transformasi *Entity Relationship Diagram* ke dalam Relasi

### PEMODELAN DATA SECARA LOGIKA DENGAN ERD

*Entity Relationship Diagram* (ERD) adalah representasi grafis yang menunjukkan informasi yang dibuat, disimpan, dan digunakan oleh sistem bisnis. ERD mengorganisasikan jenis-jenis informasi ke dalam entitas dan menghubungkannya melalui relasi untuk merefleksikan aturan-aturan bisnis yang berlaku tanpa menyiratkan urutan proses komputasi.

Membaca ERD dilakukan dengan menelaah entitas, atribut, relasi, dan kardinalitas yang tertera. Setiap entitas harus didefinisikan secara tegas melalui metadata (data yang menjelaskan data lainnya) agar tidak terjadi kerancuan penafsiran antar-unit organisasi. Simbol pada setiap garis relasi mencerminkan kardinalitas (jumlah kejadian instansiasi yang berelasi antar-entitas) dan aturan bisnis yang mengikatnya.

### Elemen-Elemen ERD
Pemodelan ERD dapat diekspresikan melalui berbagai standar notasi, seperti model IDEF1X, model Chen, dan model *Crow's Foot*. Standar model Chen mencakup tiga elemen dasar utama:

#### a. Entitas (*Entity*)
Entitas adalah orang, tempat, objek, kejadian, atau konsep dalam lingkup organisasi yang datanya perlu dikumpulkan dan dipelihara. Entitas dapat diklasifikasikan ke dalam kategori:
*   *Entitas orang*
*   *Entitas tempat*
*   *Entitas objek*
*   *Entitas kejadian*
*   *Entitas konsep*

Berdasarkan kemandirian keberadaannya, entitas dibedakan menjadi:
1.  **Entitas Kuat (*Strong Entity*):** Entitas mandiri yang keberadaannya tidak bergantung pada entitas lain. Instansiasi entitas kuat selalu memiliki atribut pengidentifikasi unik (*identifier* atau *primary key*) yang membedakan setiap baris datanya.
2.  **Entitas Lemah (*Weak Entity*):** Entitas yang keberadaannya bergantung sepenuhnya pada kehadiran entitas lain (*identifying owner*). Entitas lemah tidak memiliki *identifier* mandiri, melainkan hanya memiliki pengidentifikasi sebagian (*partial identifier*) yang baru menjadi kunci pengidentifikasi penuh setelah digabungkan dengan kunci primer milik entitas pemiliknya. Digambarkan dengan simbol kotak garis ganda.
3.  **Entitas Asosiatif (*Associative Entity*):** Entitas yang terbentuk secara khusus dari peleburan suatu relasi. Entitas ini lahir ketika relasi antarentitas mengikat atribut-atribut mandiri yang perlu disimpan ke dalam bentuk entitas tersendiri. Digambarkan dengan simbol belah ketupat di dalam kotak persegi panjang.

#### b. Atribut (*Attribute*)
Atribut adalah properti atau karakteristik yang dimiliki oleh suatu entitas atau relasi yang bermakna bagi proses bisnis organisasi. Kumpulan nilai atribut dari seluruh entitas membentuk struktur basis data. Variasi bentuk atribut meliputi:
1.  **Atribut Komposit (*Composite Attribute*):** Atribut yang dapat dipecah (didekomposisi) menjadi beberapa komponen atribut yang lebih kecil dan spesifik untuk mempermudah pencarian data. Jika suatu atribut tidak perlu dipecah lebih lanjut, atribut tersebut dinamakan **atribut sederhana**.
2.  **Atribut Bernilai Banyak (*Multivalue Attribute*):** Atribut yang dapat memiliki lebih dari satu nilai untuk satu kejadian entitas yang sama. Digambarkan dengan simbol elips bergaris ganda.
3.  **Atribut Turunan (*Derived Attribute*):** Atribut yang nilainya dapat dihitung atau diperoleh dari nilai atribut lain yang sudah tersimpan. Digambarkan dengan simbol elips bergaris putus-putus. Atribut turunan digunakan untuk mempercepat proses komputasi pada aplikasi yang sering mengakses kalkulasi tersebut.

#### c. Relasi (*Relationship*)
Relasi adalah asosiasi bermakna antarsatu entitas dengan entitas lainnya. Relasi digambarkan dengan simbol belah ketupat yang memuat label kata kerja. Karakteristik relasi meliputi:
1.  **Atribut pada Relasi:** Atribut yang melekat langsung pada relasi (bukan pada entitas), yang muncul ketika model relasi bersifat banyak-ke-banyak (*many-to-many*).
2.  **Derajat Relasi (*Degree of Relationship*):** Jumlah entitas yang berpartisipasi dalam suatu relasi:
    *   *Relasi Derajat 1 (Unary / Rekursif):* Relasi yang menghubungkan instansiasi dalam satu entitas yang sama.
    *   *Relasi Derajat 2 (Binary):* Relasi yang menghubungkan dua entitas yang berbeda.
    *   *Relasi Derajat 3 (Ternary):* Relasi yang menyambungkan tiga entitas sekaligus dalam satu hubungan relasi terpadu.
3.  **Relasi Ganda (*Multiple Relationship*):** Kondisi di mana terdapat lebih dari satu jalur relasi yang berbeda di antara entitas-entitas yang sama untuk merefleksikan peran bisnis yang berlainan.
4.  **Agregasi (*Aggregation*):** Relasi khusus yang baru dapat direalisasikan jika suatu relasi lain telah terpenuhi terlebih dahulu sebagai relasi prasyarat.
5.  **Pewarisan Atribut Supertype dan Subtype (EER):** Konsep lanjut *Enhanced Entity Relationship* yang membagi entitas umum (*supertype*) ke dalam beberapa entitas khusus (*subtype*). Entitas *subtype* secara otomatis mewarisi seluruh atribut milik *supertype* (*inheritance*), sehingga mencegah timbulnya nilai kosong (*null*) dan meminimalkan redundansi data.

#### d. Kardinalitas dan Modalitas
*   **Kardinalitas (*Cardinality*):** Jumlah instansiasi dari satu entitas yang dikaitkan dengan instansiasi entitas lainnya. Pada relasi biner, kardinalitas terbagi menjadi:
    *   *Satu ke Satu (1:1)*
    *   *Satu ke Banyak (1:N)*
    *   *Banyak ke Banyak (M:N)*
*   **Modalitas (*Modality / Participation Constraint*):** Menunjukkan apakah kehadiran instansiasi suatu entitas bersifat wajib (*mandatory*) atau opsional dalam relasi tersebut. Nilai modalitas dinyatakan dengan angka `0` jika bersifat opsional (tidak harus berpartisipasi) dan angka `1` jika terdapat keharusan untuk berpartisipasi.
___
### Mentransformasi Diagram ke Diagram Relasi

Transformasi dilakukan untuk mengubah representasi grafis konseptual/logik ERD menjadi skema relasi fisik berbasis tabel:

#### 1. Pemetaan Entitas Biasa
Setiap entitas reguler dipetakan menjadi satu skema relasi (tabel) tersendiri dengan nama yang bersesuaian. Atribut-atribut entitas menjadi kolom-kolom tabel, dan atribut pengidentifikasi (*identifier*) ditetapkan sebagai kunci primer (*primary key*) yang digarisbawahi.

#### 2. Pemetaan Atribut Komposit
Atribut komposit dipetakan dengan cara melebur komponen-komponen pecahan terkecilnya langsung ke dalam relasi entitas bersangkutan. Atribut induk kompositnya sendiri dihilangkan dari skema relasi.

#### 3. Pemetaan Atribut Bernilai Banyak
Atribut bernilai banyak (*multivalue attribute*) dipetakan menjadi dua buah skema relasi:
*   *Relasi pertama:* Tabel entitas induk yang memuat semua atribut sederhana selain atribut bernilai banyak.
*   *Relasi kedua:* Tabel baru yang memuat atribut bernilai banyak tersebut ditambah dengan atribut kunci primer dari entitas induk yang bertindak sebagai kunci tamu (*foreign key*).

#### 4. Pemetaan Entitas Lemah
Entitas lemah dipetakan menjadi relasi mandiri dengan menyertakan seluruh atribut bawaannya ditambah atribut kunci primer dari entitas pemilik (*identifying owner*) sebagai kunci tamu (*foreign key*). Kunci primer pada tabel entitas lemah dibentuk dari gabungan kunci tamu tersebut dengan pengidentifikasi sebagian (*partial identifier*) miliknya.

#### 5. Pemetaan Relasi Biner (*Binary*)
Aturan pemetaan relasi dua entitas didasarkan pada kardinalitasnya:
*   **Relasi Satu ke Satu (1:1):** Dibentuk dua buah relasi mewakili masing-masing entitas. Penempatan kunci tamu dilakukan dengan memperhatikan **modalitas**: kunci primer dari entitas yang modalitasnya "Wajib" (*Mandatory*) diletakkan sebagai kunci tamu pada relasi entitas yang modalitasnya "Opsional" (*Optional*). Jika kedua belah pihak memiliki modalitas yang sama, penempatan kunci tamu dapat dipilih secara bebas pada salah satu relasi.
*   **Relasi Satu ke Banyak (1:N):** Dibentuk dua relasi. Kunci primer dari entitas pada sisi **"Satu"** secara mutlak ditempatkan sebagai kunci tamu (*foreign key*) pada relasi entitas di sisi **"Banyak"**, tanpa perlu mempertimbangkan jenis modalitas yang terbentuk.
*   **Relasi Banyak ke Banyak (M:N):** Menghasilkan tiga buah relasi. Dua relasi mewakili entitas asal, dan relasi ketiga adalah **tabel relasi transaksi/penghubung** baru. Kunci primer pada tabel baru ini merupakan kunci komposit yang dibentuk dari gabungan kunci primer kedua entitas asal, ditambah atribut-atribut yang melekat pada relasi tersebut jika ada.

#### 6. Pemetaan Relasi *Ternary*
Pemetaan relasi yang menghubungkan tiga entitas atau lebih dilakukan dengan membentuk sebuah relasi asosiatif baru. Relasi baru ini memiliki kunci pengidentifikasi gabungan yang berasal dari kunci-kunci primer ketiga entitas yang berpartisipasi, disertai atribut tambahan yang menyertai relasi tersebut. Pemetaan ini menghasilkan total empat buah skema relasi.

#### 7. Pemetaan Relasi *Unary*
Relasi derajat satu (rekursif) dipetakan tetap ke dalam **satu relasi tunggal**. Di dalam relasi tersebut ditambahkan satu atribut kunci tamu (*foreign key*) baru yang merujuk kembali ke atribut kunci primer pada tabel itu sendiri untuk memodelkan hubungan rekursif antar-baris data.

#### 8. Pemetaan Relasi *Supertype / Subtype*
Dipetakan menjadi sejumlah tabel sesuai dengan jumlah entitas yang ada (satu tabel untuk *supertype* dan satu tabel untuk masing-masing *subtype*). Atribut umum diletakkan pada tabel *supertype*, sedangkan atribut unik diletakkan pada tabel *subtype* masing-masing. Atribut kunci primer pada tabel *supertype* dijadikan sebagai kunci primer sekaligus kunci tamu (*foreign key*) pada seluruh tabel *subtype* untuk menghubungkan data turunan ke data induknya.
___

## Bagian 02: Strategi Akuisisi Sistem Informasi

Fase analisis mendefinisikan kebutuhan logis sistem tanpa menentukan wujud fisiknya. Pada fase desain, tim proyek harus menentukan strategi akuisisi perangkat lunak melalui tiga pendekatan utama:
1.  **Mengembangkan sendiri aplikasi secara kustom (*Custom Development*)**.
2.  **Membeli sistem kemasan yang telah tersedia di pasar (*Software Package*)**.
3.  **Mengandalkan vendor atau pihak eksternal (*Outsourcing*)**.

---
### **Custom Development** 

Pengembangan kustom dilakukan dengan membangun sistem baru dari awal oleh staf pengembang di lingkungan internal organisasi (*in-house development*).

#### Karakteristik & Keunggulan:
 *   Memberikan kendali penuh atas rancangan antarmuka, alur kerja, dan fungsionalitas sistem agar selaras dengan kebutuhan spesifik dan strategi bisnis organisasi.
 *   Memberikan fleksibilitas tinggi dalam memecahkan masalah baru dan mengakomodasi integrasi teknologi terkini.
 *   Membangun dan meningkatkan keterampilan teknis serta pemahaman fungsional staf internal organisasi.

#### Tantangan:
Membutuhkan upaya besar, waktu yang lama, biaya tinggi, serta risiko kesulitan mempertahankan ketersediaan tenaga ahli sistem informasi yang terampil.

#### Opsi Jalur Pengembangan Internal (Jogiyanto, 2005):
1.  *End User Development (EUD) / End User Computing (EUC):* Pengembangan sistem yang dilakukan langsung oleh pemakai sistem. Tepat dipilih jika dampak fungsional sistem hanya berskala sempit (tingkat individu pengguna). Namun, berisiko tinggi jika diterapkan pada sistem berskala organisasi luas.
2.  *Metode SDLC Formal:* Menghasilkan sistem komprehensif dengan dokumentasi terstruktur, namun membutuhkan durasi pengerjaan yang panjang.
3.  *Metode Prototyping:* Membangun sistem secara bertahap dan iteratif melalui prototipe cepat untuk situasi yang membutuhkan pengoperasian mendesak.

#### Tahapan Pengembangan Metode Prototyping:
1.  Mengidentifikasi kebutuhan pengguna yang paling mendasar.
2.  Membangun model prototipe secara cepat.
3.  Menggunakan prototipe oleh pemakai sistem untuk menilai kekurangan.
4.  Merevisi dan meningkatkan prototipe berdasarkan umpan balik pengguna (langkah 3 dan 4 diulang secara iteratif hingga kebutuhan terpenuhi).
___
### *Software Package*

Perangkat lunak paket adalah program siap pakai yang telah dibuat, diuji, dan tersedia secara komersial di pasar umum untuk melayani kebutuhan bisnis standar (mulai dari program aplikasi sederhana hingga sistem terintegrasi skala besar seperti *Enterprise Resource Planning* / ERP).

#### Pertimbangan Penerapan:
Organisasi pengguna harus menerima logika dan proses kerja yang dirancang dalam paket. Menyesuaikan proses bisnis organisasi demi mengikuti paket komersial yang teruji (*best practice*) dapat menjadi sarana rekayasa ulang proses bisnis (*Business Process Reengineering* / BPR).

#### Penyesuaian (*Customization*) dan Modul Tambahan (*Add-on*):
Jika fungsionalitas paket tidak sepenuhnya sesuai, penyesuaian parameter dapat dilakukan. Pembuatan modul tambahan (*add-on*) khusus untuk diintegrasikan dengan aplikasi paket harus menjadi pilihan terakhir karena berisiko ditolak dukungannya oleh vendor serta rentan mengalami malafungsi saat vendor melakukan pemutakhiran versi sistem (*upgrade*).

#### Kriteria Evaluasi Kemampuan Paket (Jogiyanto, 2005):
1.  *Fungsi:* Kesesuaian fitur paket dengan kebutuhan bisnis serta batasan fungsi yang tidak didukung.
2.  *Fleksibilitas:* Tingkat kemudahan dan kesediaan vendor dalam memodifikasi fitur paket.
3.  *Kemudahan:* Kemudahan penggunaan antarmuka dan kebutuhan pelatihan staf.
4.  *Dukungan Perangkat Keras dan Lunak:* Kesesuaian spesifikasi komputer dan infrastruktur pendukung.
5.  *Karakteristik File dan Basis Data:* Struktur basis data, kemampuan integrasi dengan basis data organisasi yang sudah ada, serta batasan akses data langsung.
6.  *Instalasi:* Kemudahan instalasi dan konversi data dari sistem lama ke sistem baru.
7.  *Perawatan:* Ketersediaan pemutakhiran rutin oleh vendor dan alokasi sumber daya pemeliharaan.
8.  *Dokumentasi:* Kelengkapan dan kemudahan pemahaman manual prosedur sistem.
9.  *Kualitas Vendor:* Reputasi, pengalaman, dukungan teknis, dan responsivitas vendor terhadap keluhan.
10. *Biaya:* Harga pembelian lisensi paket, biaya pemeliharaan berkala, serta komparasi harga antar-vendor.

#### Kelebihan Paket:
Kualitas dan keandalan teruji, dapat digunakan seketika (*instant deployment*), harga per unit relatif lebih murah karena biaya pengembangan dibagi ke banyak pembeli, serta mendukung penerapan *best practices* industri.

#### Keterbatasan Paket:
Jarang ada paket yang sempurna memenuhi keunikan kebutuhan bisnis organisasi, kode program sulit dimodifikasi mandiri, risiko isolasi data (sulit terintegrasi dengan basis data lain), serta tidak memberikan keunggulan kompetitif karena pesaing dapat membeli paket yang sama.
___
### *Outsourcing*

*Outsourcing* adalah strategi akuisisi dengan mempekerjakan vendor eksternal, pengembang luar, atau penyedia layanan untuk membuat, menyuplai, atau memelihara sistem informasi organisasi.

#### Model Layanan Eksternal
*   *Application Service Provider (ASP):* Model penyedia layanan yang meng-hosting, mengoperasikan, dan mengelola aplikasi perangkat lunak melalui jaringan area luas atau internet.
*   *Software as a Service (SaaS):* Perkembangan modern dari model ASP di mana vendor mengembangkan, mengelola, dan meng-hosting aplikasi milik mereka sendiri secara terpusat untuk disewakan kepada pelanggan melalui penagihan berbasis penggunaan (*pay-as-you-go*) atau biaya berkala (bulanan/tahunan).

#### Keuntungan *Outsourcing*
1.  Biaya awal yang lebih rendah dengan skema pembayaran fleksibel.
2.  Waktu penyiapan dan implementasi sistem yang jauh lebih singkat.
3.  Mengurangi kebutuhan investasi modal pada infrastruktur teknologi dan staf TI internal.
4.  Memperoleh layanan berkualitas tinggi dari tenaga profesional luar yang ahli di bidangnya.
5.  Menekan risiko kegagalan investasi finansial.
6.  Memungkinkan organisasi memfokuskan sumber dayanya pada kompetensi bisnis inti.

#### Risiko *Outsourcing*
1.  Potensi kebocoran data rahasia organisasi kepada pihak luar.
2.  Kehilangan kendali strategis atas arah pengembangan sistem di masa depan.
3.  Ketergantungan penuh pada pihak ketiga yang menyebabkan staf internal kehilangan kesempatan mempelajari keterampilan teknis penting.

#### Prinsip Mitigasi Risiko dan Pengelolaan Kontrak
*   Organisasi dilarang melakukan *outsourcing* terhadap hal yang belum dipahami; analisis dan perencanaan kebutuhan bisnis harus tetap dikuasai secara ketat oleh tim internal.
*   Menyeleksi vendor secara cermat berdasarkan rekam jejak integritas dan reputasi teknis yang terbukti.
*   Merancang kontrak kerja yang adil dengan menyeimbangkan antara fleksibilitas adaptasi teknologi jangka panjang dan kejelasan spesifikasi kebutuhan.
*   Memilih kontrak jangka pendek untuk memungkinkan evaluasi performa kerja secara berkala.
*   Menugaskan personel berwewenang secara penuh waktu untuk memantau kemajuan proyek, mengukur pencapaian target, dan membina komunikasi kemitraan terbuka dengan pihak vendor.
___