# Modul 06: Pemodelan Proses Bisnis dan Struktural Sistem

## Bagian 01: Pemodelan Proses Bisnis dengan *Activity Diagram* 

*Activity diagram* (diagram aktivitas) digunakan untuk mendokumentasikan proses bisnis dan kebutuhan fungsional sistem pada fase analisis. Diagram ini memodelkan logika prosedural, proses bisnis, dan jalur kerja. Tidak seperti diagram alir konvensional (*flowchart*), *activity diagram* memiliki keunggulan utama dalam mendukung pemodelan perilaku paralel (*parallel behavior*).

Pada perkembangannya, UML 1 memosisikan *activity diagram* sebagai kasus khusus dari *state diagram*. Keterikatan tersebut dihilangkan pada UML 2 sehingga *activity diagram* berdiri sendiri secara penuh untuk memodelkan jalur kerja. Sebagai **model logis**, diagram ini menggambarkan aktivitas domain bisnis murni tanpa mendikte implementasi teknis fisiknya (misalnya apakah aktivitas dikerjakan manual atau terkomputerisasi, menggunakan formulir kertas atau web, serta disimpan di lemari arsip atau basis data).
___
### Element *Activity Diagram*

Diagram aktivitas menggambarkan bagaimana suatu alur berawal, keputusan (*decision*) yang mungkin terjadi, dan bagaimana proses tersebut berakhir. Notasi dasar penyusunnya meliputi:

#### 1. *Action* dan *Activity*
* **Tindakan (*Action*):** Perilaku sederhana pada sistem yang bersifat atomik dan tidak dapat didekomposisi lebih lanjut.
* **Kegiatan (*Activity*):** Rangkaian tindakan yang dapat didekomposisi lebih lanjut menjadi sub-kegiatan atau kumpulan tindakan. 
* **Aturan Penamaan:** Nama *action* maupun *activity* wajib diawali dengan **kata kerja** dan diakhiri dengan **kata benda** secara ringkas dan informatif.

#### 2. *Object Node*
* **Definisi:** Notasi berbentuk persegi panjang yang digunakan untuk memodelkan objek atau data konkret di dalam *activity diagram*.
* **Fungsi:** Menunjukkan luaran data/objek yang dihasilkan oleh suatu *activity/action* yang selanjutnya mengalir menjadi masukan bagi *activity/action* lainnya.

#### 3. *Control Flow* dan *Object Flow*
* **Aliran Kontrol (*Control Flow*):** Garis padat dengan mata panah di ujungnya yang memodelkan jalur eksekusi dan urutan pelaksanaan antar-*action* atau antar-*activity*.
* **Aliran Objek (*Object Flow*):** Garis putus-putus dengan mata panah yang memodelkan aliran benda atau objek aktual yang masuk ke atau keluar dari suatu *action* atau *activity*.

#### 4. *Control Node* (Simpul Kontrol)
Terdapat tujuh jenis simpul kontrol utama dalam UML 2.x:
1.  **Simpul Awal (*Initial Node*):** Lingkaran kecil berwarna hitam padat yang menggambarkan titik dimulainya serangkaian tindakan atau kegiatan.
2.  **Simpul Akhir Aktivitas (*Final-Activity Node*):** Lingkaran dengan titik hitam padat di dalamnya (menyerupai *bullseye*) yang berfungsi menghentikan seluruh aliran kontrol dan aliran objek dalam suatu aktivitas. Saat simpul ini tercapai, seluruh proses yang sedang berjalan langsung dihentikan.
3.  **Simpul Akhir Aliran (*Final-Flow Node*):** Lingkaran kecil berisi tanda silang ("X") yang diperkenalkan pada UML 2.0 untuk menghentikan satu jalur eksekusi tertentu tanpa menghentikan aktivitas lain yang sedang berlangsung secara keseluruhan.
4.  **Simpul Keputusan (*Decision Node*):** Simbol belah ketupat dengan satu aliran masuk dan beberapa aliran keluar. Digunakan untuk pengujian kondisi di mana setiap jalur keluar disertai kriteria pengujian boolean di dalam tanda kurung siku `[ ]`, memastikan aliran hanya melewati satu jalur keluar yang valid.
5.  **Simpul Penggabungan (*Merge Node*):** Simbol belah ketupat dengan beberapa aliran masuk dan satu aliran keluar. Digunakan untuk menyatukan kembali beberapa jalur keputusan yang sebelumnya terpisah.
6.  **Simpul Percabangan (*Forking*):** Batang garis tebal horizontal atau vertikal dengan satu aliran masuk dan beberapa aliran keluar paralel. Digunakan untuk memecah alur proses tunggal menjadi beberapa aliran yang berjalan bersamaan secara konkuren.
7.  **Simpul Sinkronisasi (*Join*):** Batang garis tebal horizontal atau vertikal dengan beberapa aliran masuk dan satu aliran keluar. Berfungsi menyatukan kembali aliran-aliran paralel menjadi satu aliran tunggal. Aliran keluar baru dapat dieksekusi jika seluruh aliran masuk telah mencapai simpul *join* secara lengkap.

#### 5. *Swimlane* (Partisi Kolom)
*   **Definisi:** Pembagian diagram aktivitas ke dalam kolom-kolom vertikal atau horizontal untuk memecah tanggung jawab pelaksanaan aktivitas.
*   **Fungsi:** Menampilkan objek, peran aktor, atau unit departemen organisasi mana yang bertanggung jawab mengeksekusi setiap tindakan di dalam alur proses bisnis. Pada UML 2.x, konsep ini diperluas menjadi partisi jaringan dua dimensi.
___
### Menggambar *Activity Diagram*

*Activity diagram* dibaca dan digambar secara terstruktur dari atas ke bawah. Prinsip pembuatannya mencakup:
 * Mendefinisikan titik awal aliran menggunakan *initial node*.
 * Mengidentifikasi urutan sekuensial tindakan (*actions*) serta mendeteksi aktivitas yang dapat dilakukan secara independen bersamaan menggunakan kombinasi simpul *forking* dan *join*.
 * Mengevaluasi kondisi-kondisi alternatif menggunakan *decision node* dan menyatukannya kembali dengan *merge node*.
 * Mengelompokkan tindakan ke dalam *swimlane* yang tepat guna memperjelas penanggung jawab fungsionalnya.
 * Menutup proses bisnis menggunakan simpul *final-activity* untuk penghentian menyeluruh atau simpul *final-flow* untuk penghentian jalur spesifik.
___

## Bagian 02: Pemodelan Struktural dengan *Class Diagram* dan *Object Diagram* 

Model struktural adalah model konseptual formal yang merepresentasikan objek-objek yang digunakan dan dibuat oleh sistem bisnis. Model ini mendeskripsikan struktur data logis (orang, tempat, atau hal yang informasinya ditangkap dan disimpan) serta hubungan antar-objek tanpa terganggu rincian teknis penyimpanan fisik.
___
### *Class Diagram* 

*Class diagram* mendeskripsikan jenis-jenis objek dalam sistem, hubungan statis antar-objek, properti (atribut), operasi (metode), serta batasan-batasan (*constraints*) yang mengikatnya.

#### Perbedaan *Class Diagram* dengan *Entity Relationship Diagram* (ERD):
*   **ERD:** Hanya mencakup entitas data dan atribut statis.
*   **Class Diagram:** Menyatukan atribut data, perilaku (*behavior*/metode), status, dan operasi dalam satu kesatuan terpadu dengan cakupan ruang lingkup seluruh sistem.
___
### Elemen-Elemen *Class Diagram*

Sebuah kelas digambarkan dalam bentuk persegi panjang yang terbagi menjadi tiga kompartemen utama:

#### a. Kelas (*Class*)
*   **Kompartemen Atas:** Memuat nama kelas yang dicetak tebal dan diletakkan di tengah.
*   **Kompartemen Tengah:** Memuat daftar atribut kelas.
*   **Kompartemen Bawah:** Memuat daftar metode atau operasi kelas.

#### b. Atribut (*Attribute*)
*   **Definisi:** Karakteristik atau properti kelas yang informasinya ingin ditangkap dan disimpan oleh sistem.
*   **Atribut Turunan (*Derived Attribute*):** Nilai atribut yang dapat dihitung atau diturunkan dari nilai atribut lain, dinotasikan dengan tanda garis miring (`/`) di depan nama atribut.
*   **Tingkat Visibilitas Atribut:**
    *   **Publik (`+`):** Atribut dapat diakses dan diubah secara terbuka oleh objek dari kelas lain.
    *   **Terlindungi / *Protected* (`#`):** Atribut disembunyikan dari kelas luar, kecuali bagi kelas turunannya (*subclass*) langsung.
    *   **Privat (`-`):** Atribut disembunyikan sepenuhnya dari semua kelas luar guna menjamin enkapsulasi data.

#### c. Metode / Operasi (*Method / Operation*)
*   **Definisi:** Tindakan, kalkulasi, atau fungsi komputasi yang dapat dieksekusi oleh suatu kelas. Disertai tanda kurung `()` yang dapat memuat parameter yang dibutuhkan.
*   **Tiga Kategori Operasi:**
    1.  *Constructor:* Menghasilkan instansiasi objek baru dari kelas yang bersangkutan.
    2.  *Query:* Menampilkan atau membaca informasi keadaan objek tanpa mengubah nilai data internalnya.
    3.  *Update:* Mengubah status atau nilai satu/semua atribut internal di dalam objek.
*   Visibilitas operasi juga dinyatakan menggunakan simbol `+`, `#`, atau `-`.

#### d. Asosiasi (*Association*)
*   **Definisi:** Relasi statis yang menghubungkan satu kelas dengan kelas lainnya atau menghubungkan kelas dengan dirinya sendiri. Asosiasi dikelola internal oleh sistem melalui referensi/pointer.
*   **Penggambaran:** Garis solid lurus antar-kelas yang disertai label frasa kata kerja dan segitiga kecil penunjuk arah pembacaan asosiasi.
*   **Multiplisitas (*Multiplicity*):** Menunjukkan jumlah minimum dan maksimum kejadian (*instance*) suatu kelas yang dapat berelasi dengan satu kejadian kelas lain yang terhubung.
    *   `1`: Tepat satu (*Exactly one*).
    *   `0..*`: Nol atau banyak (*Zero or more*).
    *   `1..*`: Satu atau banyak (*One or more*).
    *   `0..1`: Nol atau satu (*Zero or one*).
    *   Rentang tertentu (misal: `2..4`).
    *   Rentang terputus (misal: `1..3, 5`).
*   **Kelas Asosiasi (*Association Class*):** Kelas khusus yang dibentuk ketika jalur asosiasi itu sendiri memiliki atribut dan metode mandiri. Umumnya muncul pada hubungan relasi bernilai banyak-ke-banyak (*many-to-many*). Digambarkan sebagai simbol kelas yang terhubung melalui garis putus-putus ke garis asosiasi.
___
### Generalisasi dan Agregasi (*Generalization and Aggregation*)

*   **Generalisasi (*Generalization*):**
    *   Konsep pewarisan (*inheritance*) di mana kelas turunan (*subclass*) mewarisi seluruh properti, atribut, dan operasi dari kelas induk (*superclass*).
    *   Digambarkan dengan garis solid yang berujung pada **panah berongga (*hollow arrow*)** yang menunjuk ke arah *superclass*.
*   **Agregasi (*Aggregation*):**
    *   Memodelkan hubungan bentuk bagian-dari (*part-of*) atau "terdiri dari" di mana satu kelas merupakan komponen perakitan dari kelas lain.
    *   Digambarkan dengan **simbol berlian (*diamond*)** yang diletakkan menempel pada kelas utama yang mewakili entitas agregasinya.
___
### Penyederhanaan *Class Diagram*
Untuk mengendalikan kompleksitas diagram sistem berskala besar, penyederhanaan dapat dilakukan dengan:
*   Membatasi tampilan atribut dan metode yang dimunculkan hanya pada elemen yang relevan dengan kasus penggunaan (*use case*) tertentu.
*   Mengelompokkan kelas-kelas terkait secara logis ke dalam paket modul tingkat tinggi menggunakan *Package Diagram*.
___
### Membuat *Class Diagram*
Penyusunan diagram kelas dilakukan melalui proses iterasi bertahap:
1.  **Mengidentifikasi Kelas:** Menggunakan teknik analisis tekstual terhadap teks deskripsi kebutuhan dan *use case*, atau mengekstraksi tanggung jawab objek dari kartu CRC (*Class-Responsibility-Collaboration*).
2.  **Mengidentifikasi Atribut dan Operasi:** Menetapkan tipe informasi yang ingin disimpan serta fungsi-fungsi yang dibutuhkan oleh kelas.
    *   **Pedoman Analisis Tekstual:**
        *   *Kata Benda:* Menyiratkan kandidat kelas atau objek.
        *   *Kata Kerja:* Menyiratkan operasi (*method*) atau relasi asosiasi.
        *   *Kata Sifat:* Menyiratkan atribut kelas.
        *   *Kata Keterangan:* Menyiratkan atribut relasi atau atribut operasi.
3.  **Menggambarkan Asosiasi Antar Kelas:** Menghubungkan kelas-kelas dengan menetapkan nama peran, arah navigasi, aturan multiplisitas, serta mendeteksi kebutuhan relasi spesifik seperti generalisasi maupun agregasi.
___
### *Object Diagram* 

*   **Definisi:** Diagram struktural yang merepresentasikan konfigurasi instansiasi konkret dari kelas-kelas pada suatu titik waktu tertentu (*snapshot*).
*   **Karakteristik:** Menampilkan objek nyata dengan format nama instansiasi dan nilai atribut aktual yang terisi secara spesifik di dalam kompartemennya.
*   **Kegunaan Analisis:** Digunakan sebagai alat bantu verifikasi untuk mendeteksi kerumitan koneksi antar-objek, memeriksa kelengkapan atribut, serta mengoreksi penempatan operasi atau hubungan yang keliru pada rancangan *class diagram*.
___

