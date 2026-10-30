# Modul 05: Pemodelan Analisis dengan Pendekatan Berorientasi Objek

## Bagian 1: Paradigma Berorientasi Objek

Pendekatan berorientasi objek memandang sistem sebagai kumpulan objek mandiri yang mencakup data dan proses secara terpadu. Hal ini berbeda dengan metodologi tradisional yang memisahkan data (*data-oriented*) dan proses (*process-oriented*). Pendekatan ini memungkinkan analis bekerja dengan data dan proses secara bersamaan sebagai satu kesatuan objek yang dapat dibangun sebagai komponen modular terpisah untuk kemudian disatukan menjadi sistem yang utuh.
___
### Karakteristik Dasar Sistem Berorientasi Objek

Sistem berorientasi objek berfokus pada struktur dan perilaku sistem dalam bentuk modul-modul kecil yang mencakup data dan proses. Karakteristik dasarnya meliputi:

#### 1. Kelas dan Objek (*Class and Object*)
*   **Kelas (*Class*):** *Template* umum yang digunakan untuk mendefinisikan dan membuat instansiasi (*instance*) atau objek spesifik. Kelas bertindak sebagai *blueprint* atau cetakan yang merepresentasikan objek-objek sejenis. Kelas memiliki atribut yang dapat diatur hak aksesnya: *private* (hanya dapat diakses oleh kelas yang bersangkutan), *public* (dapat diakses langsung oleh kelas luar), dan *protected* (hanya dapat diakses oleh kelas yang bersangkutan serta kelas turunannya).
*   **Objek (*Object/Instance*):** Instansiasi atau perwujudan konkret dari sebuah kelas. Objek dapat mewakili entitas di dunia nyata maupun konsep logis.
*   **Fokus Analisis:** Fokus utama analisis dan desain sistem terletak pada pemodelan atribut dan metode pada tingkat objek, bukan semata-mata pada kelas.

#### 2. Pesan dan Metode (*Message and Method*)
*   **Metode (*Method*):** Implementasi perilaku (*behavior*) yang dapat dijalankan oleh suatu objek, setara dengan fungsi (*function*) atau prosedur (*procedure*) pada bahasa pemrograman tradisional.
*   **Pesan (*Message*):** Informasi atau instruksi yang dikirimkan ke suatu objek untuk memicu eksekusi metode tertentu di dalam objek tersebut.

#### 3. Enkapsulasi dan Menyembunyikan Informasi (*Encapsulation and Information Hiding*)
*   **Enkapsulasi (*Encapsulation*):** Mekanisme menggabungkan data (atribut) dan proses (metode) ke dalam satu kesatuan entitas holistik (objek).
*   **Menyembunyikan Informasi (*Information Hiding*):** Prinsip memproteksi struktur internal dan proses objek dari gangguan, modifikasi langsung, atau penyalahgunaan dari luar sistem. Objek hanya dapat berinteraksi melalui antarmuka (*interface*) yang dipublikasikan secara resmi. Hal ini membuat objek berfungsi layaknya "kotak hitam" (*black box*), melindungi proses internal dari perubahan luar, serta mendukung penggunaan kembali objek (*reusability*).

#### 4. Pewarisan (*Inheritance*)
*   **Definisi Pewarisan:** Konsep penurunan atribut dan metode yang dimiliki oleh suatu kelas induk (*superclass*) kepada kelas-kelas anak turunannya (*subclass*).
*   **Struktur Hierarki:** Kelas anak cukup mendefinisikan atribut dan metode spesifik miliknya, sedangkan karakteristik umum diperoleh secara otomatis dari kelas induk yang berada di atasnya (membentuk hubungan *A-Kind-Of*).
*   **Kelas Abstrak (*Abstract Class*) vs Kelas Konkret (*Concrete Class*):**
    *   *Kelas Konkret:* Kelas yang dapat menghasilkan instansiasi objek langsung.
    *   *Kelas Abstrak:* Kelas umum yang berada di posisi atas hierarki yang tidak menghasilkan instansiasi objek secara langsung, melainkan berfungsi murni sebagai cetakan/kerangka untuk kelas-kelas turunannya.
*   **Keuntungan Pewarisan:** Menghilangkan redundansi penulisan kode atau pendefinisian data, mempercepat pengembangan kelas baru, dan menjamin konsistensi di seluruh bagian sistem.

#### 5. Polimorfisme dan Pengikatan Dinamis (*Polymorphism and Dynamic Binding*)
*   **Polimorfisme (*Polymorphism*):** Kemampuan suatu pesan yang sama untuk diinterpretasikan dan direspons secara berbeda oleh berbagai kelas objek yang berlainan. Analis cukup memicu pesan umum, dan setiap objek penerima akan bertanggung jawab menjalankan metode internalnya masing-masing.
*   **Pengikatan Dinamis (*Dynamic Binding*):** Mekanisme yang menunda identifikasi tipe objek dan pemilihan metode hingga program dijalankan (*run-time*), bukan saat kompilasi (*compile-time*) seperti pada pengikatan statis (*static binding*). Hal ini menyederhanakan kode karena mengeliminasi percabangan logika pemilihan yang rumit.
___
### B. Analisis dan Desain Sistem Berorientasi Objek

Pendekatan berorientasi objek modern mengintegrasikan tiga prinsip utama:

#### 1.Digerakkan oleh Kasus Penggunaan (*Use Case Driven*):
* *Use case* adalah alat pemodelan utama yang mendefinisikan perilaku fungsional sistem dari sudut pandang interaksi pengguna. 
* Berbeda dengan pendekatan dekomposisi fungsional tradisional (seperti DFD) yang memecah seluruh sistem menjadi hierarki sub-proses rumit, *use case* berfokus secara sederhana pada satu aktivitas fungsional pada satu waktu.

#### 2.Berpusat pada Arsitektur (*Architecture Centric*):
Arsitektur sistem menjadi acuan utama spesifikasi, konstruksi, dan dokumentasi melalui tiga sudut pandang:
 * *Pandangan Fungsional:* Menjelaskan perilaku eksternal sistem dari perspektif kebutuhan pengguna (terkait erat dengan model proses).
 * *Pandangan Statis:* Menggambarkan struktur sistem dalam bentuk kelas, atribut, metode, dan relasi (terkait erat dengan pemodelan data).
 * *Pandangan Dinamis:* Menggambarkan perilaku internal saat pesan dikirim antar-objek dan perubahan kondisi yang terjadi di dalam objek.

#### 3.Berulang dan Bertahap (*Iterative and Incremental*):
Pengembangan dilakukan melalui siklus pengujian dan penyempurnaan berulang yang terus-menerus sepanjang proyek, sehingga sistem secara bertahap semakin mendekati kebutuhan riil pengguna.

#### Manfaat Analisis dan Desain Berorientasi Objek:
*   Membagi sistem kompleks menjadi modul-modul terkelola (*modularitas*) yang mudah dipahami, dikembangkan, dan diuji secara independen maupun paralel.
*   Mendukung penggunaan kembali komponen (*reusability*) pada sistem atau proyek lain sehingga menghemat waktu dan biaya.
*   Model representasi objek lebih realistis karena memetakan cara berpikir manusia di dunia nyata yang mengintegrasikan entitas beserta karakteristik dan perilakunya.
___
### Unified Modeling Language (UML)

**Definisi:** Bahasa grafis standar dari *Object Management Group* (OMG) untuk memvisualisasikan, menspesifikasikan, membangun, dan mendokumentasikan artefak sistem perangkat lunak berorientasi objek.

**Evolusi UML:** Dipelopori oleh Grady Booch, Ivar Jacobson, dan James Rumbaugh pada tahun 1995 untuk menyatukan beragam metodologi terdahulu. Berkembang dari UML 1.1 (8 diagram), UML 1.3 (9 diagram), UML 1.4 (10 diagram), hingga **UML 2.0 (14 diagram)**.

#### Klasifikasi Diagram UML 2.0:
1\. **Diagram Struktur (*Structure Diagrams*):** Mendefinisikan arsitektur statis sistem (kelas, objek, antarmuka, komponen fisik, dan relasinya).
* *Class Diagram:* Menggambarkan struktur kelas dan relasinya (Analisis, Desain).
* *Object Diagram:* Menggambarkan instansiasi objek nyata pada suatu waktu (Analisis, Desain).
* *Package Diagram:* Mengelompokkan elemen diagram ke tingkat konstruksi lebih tinggi (Analisis, Desain, Implementasi).
* *Deployment Diagram:* Menunjukkan arsitektur fisik perangkat keras dan perangkat lunak (Desain Fisik, Implementasi).
* *Component Diagram:* Menggambarkan hubungan fisik antarkomponen perangkat lunak (Desain Fisik, Implementasi).
* *Composite Structure Diagram:* Menunjukkan struktur internal kelas dan hubungan bagian-bagiannya (Analisis, Desain).
    
2\. **Diagram Perilaku (*Behavior Diagrams*):** Menangkap variasi interaksi dinamis, operasi, dan perubahan status dalam sistem dari waktu ke waktu.
* *Use Case Diagram:* Menangkap kebutuhan fungsional dan batas sistem (Analisis).
* *Activity Diagram:* Menggambarkan alur kerja/proses bisnis independen (Analisis, Desain).
* *Sequence Diagram:* Memodelkan interaksi antar-objek berbasis urutan waktu (Analisis, Desain).
* *Communication Diagram:* Memodelkan kolaborasi antar-objek dalam aktivitas (Analisis, Desain).
* *Interaction Overview Diagram:* Tinjauan umum aliran kontrol proses interaksi (Analisis, Desain).
* *Timing Diagram:* Menggambarkan perubahan status objek sepanjang skala waktu (Analisis, Desain).
* *Behavioral State Machine:* Memeriksa perilaku dan transisi status suatu kelas (Analisis, Desain).
* *Protocol State Machine:* Menggambarkan dependensi antarmuka kelas (Analisis, Desain).
___
### Diagram UML Dasar

Terdapat lima diagram inti yang mendominasi sebagian besar proyek pengembangan berorientasi objek:
1.  **Use Case Diagram:** Merangkum fungsi-fungsi logis sistem dari perspektif pengguna luar.
2.  **Activity Diagram:** Menggambarkan aliran proses bisnis dan logika alur kerja.
3.  **Class Diagram:** Menunjukkan objek-objek apa yang ada dalam sistem beserta struktur statisnya.
4.  **Sequence Diagram:** Menunjukkan bagaimana objek-objek berinteraksi secara dinamis melalui pertukaran pesan.
5.  **State Machine Diagram:** Memodelkan perilaku dan perubahan keadaan dinamis internal suatu kelas objek.
___

## Bagian 02: Pemodelan Fungional dengan Use Case Diagram

Diagram *use case* menjelaskan fungsionalitas sistem pada tingkat konseptual umum dan menjadi penggerak utama (*driver*) untuk diagram-diagram pemodelan berikutnya. Pemodelan ini membedakan antara *business use case* (bagaimana bisnis merespons peristiwa) dan *system use case* (interaksi pengguna dengan perangkat lunak).

---
### Deskripsi Use Case (*Use Case Description*)

Deskripsi *use case* memuat dokumentasi berbasis teks yang merinci informasi alur kerja dari setiap *use case*. Format formal deskripsi *use case* terdiri dari dua bagian utama:

1\. **Bagian Informasi Umum (*Overview Information*):**
* *Nama Use Case:* Frasa kata kerja deskriptif.
* *ID Use Case:* Nomor identifikasi unik untuk penelusuran.
* *Prioritas:* Tingkat urgensi pengimplementasian (misal: tinggi, sedang, rendah).
* *Aktor:* Pengguna atau sistem eksternal yang memicu dan terlibat dalam *use case*.
* *Deskripsi:* Penjelasan ringkas tujuan dan fungsi *use case*.
* *Kondisi Awal (Pre-condition):* Keadaan yang harus dipenuhi sebelum *use case* dapat dieksekusi.
* *Pemicu (Trigger):* Peristiwa awal yang menyebabkan sistem menjalankan fungsi.
* *Kesimpulan (Conclusion):* Indikator selesainya eksekusi.
* *Kondisi Akhir (Post-condition):* Keadaan sistem setelah *use case* selesai dijalankan secara sukses.

2\. **Bagian Aliran Peristiwa (*Flow of Events*):**
* *Alur Peristiwa Normal:* Rangkaian langkah interaksi standar (aksi aktor dan respon sistem) yang paling umum terjadi hingga tujuan tercapai.
* *Alur Alternatif:* Cabang alur penanganan pengecualian, kondisi luar biasa, atau kesalahan yang muncul dari alur normal.
___
### B. Diagram Use Case

Elemen-elemen grafik standar penyusun diagram *use case* (Dennis, 2012) meliputi:

1\. **Aktor (*Actor*):**
* Digambarkan dengan simbol *stickman*, diletakkan di luar batas sistem.
* Merepresentasikan peran yang dimainkan oleh pengguna, perangkat keras, atau sistem lain saat berinteraksi dengan sistem.
* Dapat membentuk relasi pewarisan (*actor generalization/inheritance*) di mana aktor khusus mewarisi wewenang dan perilaku dari aktor yang lebih umum.

2\. **Relasi Asosiasi (*Association Relationship*):**
* Garis lurus solid (dengan atau tanpa panah) yang menghubungkan aktor dengan *use case* yang berinteraksi dengannya.
* Dapat mencantumkan simbol multiplisitas (misalnya tanda bintang `*`) untuk menunjukkan frekuensi eksekusi interaksi.

3\. **Kasus Penggunaan (*Use Case*):**
* Digambarkan dalam bentuk elips horizontal yang memuat nama frasa kata kerja deskriptif.
* Diletakkan di dalam batas sistem.
* **Hubungan Dependensi Antar-Use Case:**
    * **`<<extend>>` (Perluasan):** Mengindikasikan penambahan perilaku opsional dari suatu *use case* pembantu ke *use case* dasar pada kondisi tertentu; pelaksanaan *use case* pokok tetap dapat berdiri sendiri tanpa perluasan tersebut.
    * **`<<include>>` (Penyertaan):** Mengindikasikan bahwa *use case* dasar secara mutlak mewajibkan dan menyertakan fungsionalitas dari *use case* lain; keduanya membentuk satu kesatuan yang tidak dapat dipisahkan.

4\. **Batas Sistem (*System Boundary*):**
* Kotak persegi yang memisahkan bagian internal fungsionalitas sistem dari aktor eksternal.
* Label nama sistem diletakkan di dalam atau di bagian atas batas kotak.
___
### Membuat Diagram Use Case

Penyusunan diagram *use case* dilakukan melalui tahapan metodologis sistematis:

1\. **Mengidentifikasi Use Case dan Menulis Deskripsi Use Case:**
* Menentukan fungsi-fungsi utama sistem dari hasil elisitasi kebutuhan bisnis.
* Menyusun dokumen deskripsi teks terlebih dahulu untuk setiap fungsionalitas sebelum menuangkannya ke dalam gambar diagram formal.

2\. **Menggambarkan Batas Sistem (*System Boundary*):**
* Menggambar kotak pembatas untuk mendefinisikan ruang lingkup sistem yang sedang dibangun.

3\. **Menempatkan Use Case pada Diagram:**
* Meletakkan elips-elips fungsi di dalam kotak batas sistem.
* *Prinsip Manajemen Kompleksitas:* Disarankan tidak meletakkan lebih dari delapan *use case* utama pada satu diagram tunggal agar mudah dibaca. Jika fungsi terlalu banyak, diagram disederhanakan dengan mengelompokkan fungsionalitas sejenis menggunakan relasi `<<include>>` dan `<<extend>>`, atau memecah diagram menjadi paket subsistem yang terpisah.

4\. **Mengidentifikasi Aktor:**
* Mengidentifikasi pihak yang menjadi sumber input atau penerima output sistem.
* *Aktor Sistem Bisnis:* Pihak yang berada di luar organisasi/unit yang dimodelkan.
* *Aktor Sistem Aplikasi:* Pihak atau sistem eksternal yang memiliki hak akses dan berinteraksi langsung secara operasional dengan perangkat lunak.

5\. **Menambahkan Hubungan Asosiasi:**
* Menghubungkan aktor yang relevan dengan masing-masing *use case* menggunakan garis asosiasi, serta mengatur tata letak diagram untuk meminimalkan garis yang saling bersilangan.
___