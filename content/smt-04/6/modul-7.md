# Modul 07: Pemodelan Perilaku (Behavioral) Objek

Pemodelan perilaku merepresentasikan aspek dinamis dari sistem berorientasi objek. Fokus diagram kelas (*class diagram*) berada pada tingkat kelas, sedangkan diagram interaksi (*interaction diagram*) memodelkan interaksi dinamis yang terjadi antar-objek di dalam sistem informasi.

## Bagian 01: Diiagram Interaksi (*Sequence Diagram* dan *Communication Diagram*)

### Objek, Operasi, dan Pesan 
*   **Objek:** Instansiasi dari sebuah kelas yang mewakili orang, tempat, peristiwa, atau hal yang informasinya ingin ditangkap dan dikelola oleh sistem. Setiap objek memiliki atribut yang mendeskripsikan informasi tentang objek tersebut serta memiliki perilaku (*behavior*).
*   **Operasi (*Operation*):** Tindakan yang dapat dilakukan oleh sebuah objek untuk menjalankan perilakunya. Pada tahap implementasi pengembangan sistem, perilaku operasi ini diimplementasikan sebagai metode (*method*).
*   **Pesan (*Message*):** Informasi atau instruksi yang dikirimkan ke suatu objek untuk memerintahkan objek tersebut agar menjalankan salah satu perilakunya. Pesan pada dasarnya merupakan suatu pemanggilan fungsi (*function*) atau pemanggilan prosedur antarkomponen.
___
### *Sequence Diagram*
*Sequence diagram* menggambarkan objek-objek yang berpartisipasi dalam suatu *use case* serta urutan pesan yang dilewatkan antar-objek dari waktu ke waktu. Diagram ini menekankan pengurutan pesan berbasis waktu sehingga sangat membantu dalam memahami spesifikasi waktu nyata (*real-time*) dan skenario interaksi yang kompleks. Diagram ini dapat digunakan di seluruh tahap analisis dan desain, serta digunakan secara sangat spesifik pada tahap implementasi untuk memetakan objek basis data maupun antarmuka pengguna.

#### 1. Elemen-Elemen *Sequence Diagram*
Elemen-elemen notasi standar penyusun *sequence diagram* meliputi:
*   **Aktor (*Actor*):** Orang atau sistem luar yang berinteraksi dengan sistem dan memperoleh manfaat. Ditempatkan di bagian atas diagram dan digambarkan dengan simbol aktor (*stickman*) atau persegi panjang bertuliskan nama aktor jika melibatkan sistem non-manusia.
*   **Objek (*Object*):** Kotak persegi panjang di bagian atas diagram yang berpartisipasi mengirim dan menerima pesan. Penamaan objek ditulis dengan format `Nama_Objek : Nama_Kelas` untuk menegaskan kelas asalnya.
*   **Garis Hidup (*Lifeline*):** Garis putus-putus vertikal yang ditarik ke bawah dari setiap aktor atau objek untuk menunjukkan masa hidup keberadaan objek selama urutan proses berlangsung.
*   **Penghancuran Objek (*Object Destruction*):** Tanda silang ("X") yang ditempatkan di ujung garis hidup untuk menunjukkan titik waktu saat objek sementara dihancurkan dan tidak lagi aktif di dalam sistem.
*   **Kejadian Eksekusi (*Execution Occurrence*):** Kotak persegi panjang tipis yang ditempatkan di atas garis hidup untuk menunjukkan rentang waktu saat suatu objek sedang aktif mengirim, menerima, atau mengeksekusi pesan.
*   **Pesan (*Message*):** Komunikasi antar-objek yang digambarkan dengan garis berpanah yang diletakkan secara kronologis dari atas ke bawah halaman:
    *   *Pesan Pemanggilan (Call):* Garis panah padat horizontal yang menghubungkan dua objek untuk pemanggilan operasi. Parameter atau argumen nilai ditempatkan di dalam tanda kurung di sebelah nama pesan.
    *   *Pesan Penciptaan (Create):* Pesan yang dikirim langsung ke simbol kotak objek untuk menginstansiasi objek baru.
    *   *Pesan Pengembalian Nilai (Return):* Garis panah putus-putus yang menunjukkan arah balikan informasi. Penambahan panah nilai kembali ini bersifat opsional agar diagram tidak menjadi terlalu rumit.
    *   *Pesan Mandiri / Pemanggilan Diri Sendiri (Self-Message):* Panah yang berputar kembali ke objek pengirim untuk mengeksekusi operasi internal yang ada pada dirinya sendiri.
*   **Pesan Bersyarat (*Guard Condition*):** Penempatan kondisi logika di dalam tanda kurung siku `[ ]` di depan nama pesan untuk menunjukkan bahwa pesan hanya akan dikirimkan jika kondisi tersebut bernilai benar (*true*).

#### Klasifikasi Jenis Kelas pada *Sequence Diagram* Perangkat Lunak:
Pada pemodelan aplikasi, objek pada *sequence diagram* dikelompokkan ke dalam tiga kategori lapisan kelas:
1.  ***Boundary Class* (Kelas Batas / Antarmuka):** Kelas yang menghubungkan pengguna atau perangkat fisik dengan sistem aplikasi (berfungsi sebagai *user interface*, form masukan, layar tampilan, atau perangkat perantara).
2.  ***Control Class* (Kelas Kontrol):** Kelas yang mengoordinasikan, memproses logika, dan mengendalikan alur aktivitas sistem, serta menjembatani komunikasi antara *boundary class* dan *entity class*. Masa hidup kelas kontrol umumnya dimulai saat *use case* dijalankan dan berakhir saat eksekusi *use case* selesai.
3.  ***Entity Class* (Kelas Entitas):** Kelas yang menyimpan dan mengelola data atau informasi permanen sistem yang berkaitan langsung dengan media penyimpanan basis data atau tabel.

#### 2. Membuat *Sequence Diagram*
Penyusunan *sequence diagram* dilakukan melalui tiga langkah sistematis:
1.  **Mengidentifikasi Objek:** Menentukan objek-objek instansiasi kelas yang berpartisipasi dalam skenario *use case*, yang bersumber dari aktor, penyimpanan data, maupun entitas luar.
2.  **Menempatkan Garis Hidup (*Lifeline*) dan Eksekusi:** Mengatur letak objek secara berurutan di bagian atas diagram, menarik garis hidup putus-putus ke bawah, meletakkan kotak kejadian eksekusi, serta menempatkan tanda "X" jika terdapat objek sementara yang dihancurkan.
3.  **Menambahkan Pesan:** Menggambar garis panah pesan secara berurutan dari atas ke bawah sesuai urutan waktu proses, menetapkan parameter di dalam tanda kurung, serta menambahkan kondisi bersyarat maupun pesan balikan jika diperlukan.

---

### *Communication Diagram*
*Communication diagram* (sebelumnya dikenal sebagai *collaboration diagram*) berfokus pada penggambaran pola kolaborasi dan ketergantungan antar-objek yang bekerjasama untuk mengeksekusi suatu *use case*, alih-alih berfokus pada urutan waktu penyampaian pesan.

#### 1. Elemen-Elemen *Communication Diagram*
Elemen penyusun *communication diagram* meliputi:
*   **Aktor (*Actor*):** Pihak luar yang berpartisipasi dalam kolaborasi komunikasi dengan mengirim atau menerima pesan.
*   **Objek (*Object*):** Instansiasi kelas yang berpartisipasi dalam kolaborasi pertukaran data. Diagram komunikasi tidak memiliki sarana eksplisit seperti garis hidup atau tanda penghancuran objek.
*   **Asosiasi (*Association*):** Garis solid tanpa arah yang menghubungkan aktor dan antarkomponen objek untuk menyediakan jalur lintasan pesan.
*   **Pesan (*Message*):** Label teks yang diletakkan di samping garis asosiasi dan disertai tanda panah penunjuk arah transmisi.
*   **Nomor Urut Pesan:** Angka penomoran sekuensial yang diletakkan di depan nama pesan untuk menunjukkan urutan waktu kejadian pemanggilan pesan. Pesan berulang dapat ditandai dengan simbol bintang (`*`).
*   **Pesan Bersyarat (*Guard Condition*):** Persyaratan logika dalam tanda kurung siku `[kondisi]` sebelum nama pesan yang harus dipenuhi agar pesan dapat dikirim.
*   **Bingkai (*Frame*):** Kotak pembatas terluar berlabel nama konteks yang melingkupi seluruh area diagram komunikasi.

#### Karakteristik Khusus dan Perbandingan dengan *Sequence Diagram*:
*   *Communication diagram* tidak menampilkan garis balikan pengembalian nilai (*return value*) secara terpisah dari transmisi pesan, melainkan berfokus murni pada tautan pengiriman pesan antar-objek.
*   Untuk diagram komunikasi yang sangat padat dan kompleks, penyederhanaan dapat dilakukan dengan mengelompokkan objek-objek terkait secara logis ke dalam paket (*packages*) berdasarkan kesamaan pesan.

#### 2. Membangun *Communication Diagram*
Penyusunan *communication diagram* mengikuti lima tahapan utama:
1.  **Menentukan Konteks:** Menetapkan batasan ruang lingkup diagram (sistem, *use case*, atau skenario spesifik) di dalam bingkai berlabel.
2.  **Mengidentifikasi Objek dan Asosiasi:** Menentukan aktor serta objek-objek yang berpartisipasi dalam kolaborasi beserta jalur hubungan asosiasinya.
3.  **Membuat *Communication Diagram*:** Meletakkan objek dan aktor pada diagram serta menggambar garis asosiasi antar-objek dengan meminimalkan garis yang saling bersilangan.
4.  **Menambahkan Pesan:** Menuliskan nama pesan, panah arah transmisi, dan nomor urut kronologis pada setiap jalur asosiasi yang relevan.
5.  **Validasi Diagram:** Memeriksa seluruh langkah dan aliran pesan untuk memastikan proses bisnis dan skenario fungsional telah terpetakan secara lengkap dan benar.
___

## Bagian 02: *Behavioral State Machines Diagram* 

*Behavioral state machine diagram* (atau *statechart diagram*) memodelkan aspek dinamis dari suatu kelas objek tunggal untuk menunjukkan berbagai keadaan (*states*) yang dilalui objek tersebut sepanjang masa hidupnya sebagai respons terhadap peristiwa (*events*), lengkap dengan tindakan dan tanggapannya. Diagram ini umumnya tidak dibuat untuk semua kelas, melainkan khusus digunakan untuk mendefinisikan objek-objek yang memiliki perilaku kompleks dan dinamis guna membantu perancangan algoritma prosedur.
___
### Elemen-elemen *Behavioral State Machine Diagram* 
Notasi dan elemen dasar pada *state machine diagram* mencakup:
*   **Keadaan / Status (*State*):** Sekumpulan nilai atribut yang mendeskripsikan kondisi suatu objek pada titik waktu tertentu di mana objek memenuhi syarat tertentu, melakukan aktivitas, atau menunggu terjadinya suatu peristiwa. Digambarkan sebagai persegi panjang dengan sudut membulat (*rounded rectangle*) yang memuat label nama deskriptif.
*   **Keadaan Awal (*Initial State*):** Lingkaran kecil berwarna hitam padat yang menandai titik kemunculan awal suatu objek di dalam sistem.
*   **Keadaan Akhir (*Final State*):** Lingkaran hitam padat yang dikelilingi oleh lingkaran luar (*bullseye*) yang menandakan selesainya masa aktivitas atau hancurnya objek tersebut.
*   **Peristiwa (*Event*):** Kejadian penting yang memicu transisi perubahan status pada objek. Komponen peristiwa terdiri dari:
    1.  *Trigger-signature:* Pemicu berupa peristiwa tunggal yang menginisiasi perubahan keadaan.
    2.  *Guard condition:* Pernyataan logika *boolean* di dalam tanda kurung siku `[ ]` yang harus bernilai benar (*true*) agar transisi status dapat terlaksana.
    3.  *Activity:* Perilaku komputasi atau tindakan yang dieksekusi selama transisi status berlangsung.
*   **Transisi (*Transition*):** Garis panah padat dari satu status ke status lainnya yang menunjukkan pergerakan perpindahan keadaan objek akibat dipicu oleh peristiwa berlabel.
*   **Status dengan Aktivitas Internal (*State with Internal Activities*):** Kotak status yang memuat pemicu, kondisi, dan aktivitas internal di dalamnya, memungkinkan status bereaksi terhadap peristiwa tertentu tanpa harus berpindah ke status lain melalui garis transisi eksternal.
*   **Bingkai (*Frame*):** Batas luar berbentuk persegi panjang yang menunjukkan konteks ruang lingkup *state machine*.

#### Perbandingan Status (*State*) dan Subkelas (*Subclass*):
Dalam analisis berorientasi objek, analis perlu membedakan secara cermat antara variasi atribut yang merepresentasikan hierarki turunan struktural (*subclass*) statis dengan variasi nilai atribut yang merepresentasikan perubahan status temporer dinamis (*state*) pada siklus hidup objek, agar tidak terjadi kesalahan pemodelan yang menghilangkan informasi fungsional penting.
___
### Membuat *Behavioral State Machine Diagram*
Langkah-langkah terstruktur dalam membangun diagram mesin status meliputi:
1.  **Menentukan Konteks:** Menetapkan kelas objek dinamis mana dari *class diagram* yang akan dimodelkan siklus statusnya di dalam bingkai diagram.
2.  **Identifikasi *State* (Keadaan):** Mempelajari deskripsi *use case* dan hasil elisitasi untuk mengekstrak seluruh kondisi atau status yang akan dialami oleh objek dari awal keberadaan hingga akhir masa pakainya.
3.  **Identifikasi Transisi:** Menentukan urutan perpindahan status objek, menggambar garis panah transisi antar-status, serta memberi label pemicu peristiwa (*trigger*), syarat (*guard condition*), dan tindakan (*activity*) yang menyebabkan perubahan status terjadi.
4.  **Validasi Diagram:** Memeriksa dan memvalidasi diagram untuk memastikan bahwa setiap status yang digambarkan dapat dicapai dan dapat ditinggalkan, serta memastikan tidak ada jalur status buntu yang tidak memiliki jalan keluar menuju kondisi akhir.
___