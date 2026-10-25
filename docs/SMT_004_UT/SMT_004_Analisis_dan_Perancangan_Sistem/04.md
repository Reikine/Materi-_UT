# MODUL 04: PEMODELAN ANALISIS DENGAN PENDEKATAN TERSTRUKTUR

## Bagian 01: Data Flow Diagram

Data Flow Diagram (DFD) atau Diagram Arus Data (DAD) digunakan untuk menggambarkan sistem yang sedang berjalan maupun sistem baru yang akan dikembangkan secara logika tanpa mempertimbangkan lingkungan fisik tempat data mengalir atau disimpan. DFD memfokuskan pemodelan pada proses logis terlebih dahulu sehingga analis dapat berkonsentrasi pada mekanisme proses bisnis tanpa terganggu oleh rincian implementasi teknis.

DFD diklasifikasikan menjadi dua bentuk utama:
*   **Logical Data Flow Diagram (LDFD):** Menekankan pada proses-proses logis dan kebutuhan fungsional bisnis yang ada di dalam sistem tanpa mengindikasikan bagaimana sistem akan diterapkan secara fisik.
*   **Physical Data Flow Diagram (PDFD):** Menunjukkan bagaimana sistem akan diterapkan secara fisik pada fase desain, mencakup teknologi, media penyimpanan, format informasi, dan interaksi manusia yang terlibat.
___
### Komponen DFD
DFD terdiri dari empat elemen grafik utama yang memiliki notasi standar berdasarkan gaya **Gane & Sarson** maupun **DeMarco & Yourdon**:

#### 1. Entitas Luar (*External Entity*)
*   **Definisi:** Orang, sekelompok orang, organisasi, unit organisasi luar, atau sistem lain di luar sistem teramati yang berinteraksi langsung dengan memberikan input data ke sistem atau menerima output data dari sistem.
*   **Fungsi:** Mengidentifikasi dan menetapkan batas-batas sistem (*system boundary*).
*   **Aturan Penamaan:** Diberi nama menggunakan kata benda.

#### 2. Proses (*Process*)
*   **Definisi:** Aktivitas atau fungsi yang dilakukan dalam proses bisnis untuk mentransformasikan data input menjadi data output, baik dilakukan secara manual maupun komputerisasi.
*   **Aturan Penamaan:** Diawali dengan **kata kerja aktif** dan diakhiri dengan kata benda.
*   **Ketentuan Pemrosesan:** Setiap proses wajib memiliki setidaknya satu aliran data input dan satu aliran data output. Setiap proses diberi nomor identifikasi unik, nama, dan deskripsi proses yang dicatat dalam repositori sistem.
*   **Kesalahan Penggambaran Proses:**
    *   ***Black Hole* (Lubang Hitam):** Kesalahan proses yang hanya memiliki aliran data masuk (*input*) tetapi tidak pernah menghasilkan aliran data keluar (*output*).
    *   ***Miracle* (Keajaiban):** Kesalahan proses yang menghasilkan aliran data keluar (*output*) secara ajaib tanpa pernah menerima aliran data masuk (*input*).

#### 3. Arus Data (*Data Flow*)
*   **Definisi:** Aliran elemen data tunggal atau kumpulan beberapa informasi yang mengalir di antara proses, entitas luar, dan simpanan data.
*   **Aturan Penamaan:** Diberi nama yang jelas menggunakan kata benda di samping garis panahnya.
*   **Konsep Aliran Data:**
    *   **Konsep Paket Data (*Packet of Data*):** Jika dua atau lebih elemen data mengalir dari sumber yang sama menuju tujuan yang sama pada waktu kejadian yang sama, data tersebut digambarkan sebagai satu arus data tunggal. Namun jika mengalir pada waktu atau tujuan yang berbeda, harus digambarkan dengan arus data terpisah.
    *   **Konsep Arus Data Menyebar (*Diverging Data Flow*):** Arus data yang menyebar dari satu sumber menuju beberapa tujuan berbeda sebagai tembusan dengan struktur elemen data yang identik.
    *   **Konsep Arus Data Mengumpul (*Converging Data Flow*):** Penggabungan beberapa arus data dari sumber yang berbeda secara bersama-sama menuju ke satu tujuan yang sama.

#### 4. Simpanan Data (*Data Store*)
*   **Definisi:** Tempat penyimpanan kumpulan data secara fisik maupun logis (seperti file database, arsip kertas, tabel acuan, atau buku agenda).
*   **Aturan Aliran:** Aliran data yang menuju simpanan data menunjukkan aktivitas menambah, mengubah, atau menghapus record data (*write/update*). Aliran data yang keluar dari simpanan data menunjukkan aktivitas mengambil atau membaca data (*read/query*).
*   **Interkoneksi:** Hanya elemen proses yang boleh berhubungan langsung dengan simpanan data. Simpanan data tidak boleh dihubungkan langsung ke simpanan data lain atau ke entitas luar.
*   **Duplikasi Komponen:** Untuk menghindari garis arus data yang saling berpotongan rumit, simpanan data atau entitas luar dapat digambar lebih dari sekali di lokasi berbeda dan diberi tanda bintang tunggal (`*`) atau ganda (`**`) sebagai penanda duplikasi.
___
### Menggunakan Data Flow Diagram untuk Menjelaskan Proses Bisnis
Proses bisnis yang kompleks dimodelkan melalui himpunan DFD terstruktur menggunakan prinsip **dekomposisi** (pemecahan proses menjadi hirarki level yang lebih rinci).

#### Bagan Berjenjang (*Hierarchy Chart*): 
Diagram yang mengilustrasikan pembagian hirarki proses dari tingkat teratas hingga level-level di bawahnya.

#### Diagram Konteks (*Top Level*):
DFD tingkat tertinggi yang menempatkan seluruh sistem sebagai satu proses tunggal (bernomor proses 0) untuk menunjukkan batas sistem dan interaksinya dengan seluruh entitas luar. Simpanan data umumnya tidak ditampilkan pada diagram konteks kecuali milik sistem luar.

#### Diagram Level 0 (*Overview Diagram*):
Memecah proses tunggal diagram konteks menjadi proses-proses tingkat tinggi utama (proses 1, 2, 3, dst.), simpanan data utama, serta arus datanya.
* **Prinsip Keseimbangan (*Balancing*):** Semua entitas luar dan arus data masuk/keluar pada diagram konteks harus muncul secara konsisten dan identik pada DFD level 0.

#### Diagram Level 1 (dan Seterusnya):
Dekomposisi rinci dari setiap lingkaran proses yang ada pada DFD level 0. Proses pada level 1 diberi nomor berbasis induknya (misalnya proses 2 diurai menjadi 2.1, 2.2, 2.3) dan harus tetap mempertahankan keseimbangan aliran data input/output dengan level di atasnya.

#### Deskripsi Proses:
Dokumentasi penjelasan rinci mengenai logika prosedural internal suatu proses yang tidak dapat digambarkan oleh DFD, menggunakan alat bantu seperti *Structured English* (pseudocode), pohon keputusan (*decision tree*), atau tabel keputusan (*decision table*).
___
### Membuat Data Flow Diagram
Pembuatan DFD berpatokan pada dokumen spesifikasi kebutuhan, kasus penggunaan (*use cases*), dan hasil elisitasi.

#### Tahapan Pembuatan DFD (Jogiyanto, 2008):
1.  Mengidentifikasi semua entitas luar yang terlibat di dalam sistem.
2.  Mengidentifikasi semua input dan output yang berhubungan dengan entitas luar.
3.  Menggambar Diagram Konteks.
4.  Membuat Bagan Berjenjang (*hierarchy chart*) untuk semua proses bisnis.
5.  Menggambar sketsa DFD level 0 (*overview diagram*).
6.  Menggambar DFD level berikutnya (level 1, level 2, dst.) sesuai bagan berjenjang.
7.  Menggabungkan proses-proses terpisah pada level yang sama menjadi satu gambar yang utuh serta melakukan validasi.
___
### Perbedaan DFD dengan Flowchart dan Keterbatasan DFD

#### Perbedaan Utama DFD dengan Flowchart:
1.  **Eksekusi Proses:** DFD menggambarkan pemrosesan data secara **paralel atau serentak**, sedangkan flowchart menggambarkan aliran prosedur atau algoritma yang berurutan secara linier.
2.  **Fokus Pemodelan:** DFD menunjukkan alur data di dalam sistem, sedangkan flowchart menunjukkan arus kontrol, urutan langkah, dan prosedur kerja.
3.  **Elemen Percabangan & Perulangan:** DFD tidak menampilkan proses perulangan (*looping*) dan keputusan (*decision*), sedangkan flowchart menampilkannya secara eksplisit.

#### Keterbatasan DFD:
*   DFD tidak dapat menunjukkan logika keputusan (*decision*) dan perulangan (*looping*) secara langsung pada gambar.
*   DFD tidak dapat menggambarkan proses perhitungan matematis atau rinci.
___

## Bagian 02: Flowchart

Bagan alir (*flowchart*) adalah bagan yang menggambarkan alur (*flow*) di dalam program atau prosedur sistem secara logika. Flowchart digunakan sebagai alat bantu komunikasi dan dokumentasi sistem.

Pedoman dasar pembuatan flowchart meliputi:
*   Digambar dari atas ke bawah dan dimulai dari bagian kiri halaman.
*   Setiap kegiatan harus dijelaskan secara jernih menggunakan kata yang mewakili.
*   Menunjukkan titik awal dan titik akhir aliran secara tegas.
*   Menggunakan simbol-simbol bagan alir yang standar.
___
### Bagan Alir Sistem (*System Flowchart*)
*   **Definisi:** Bagan yang menunjukkan alur kerja atau urutan prosedur-prosedur fisik yang sedang dikerjakan di dalam sistem atau subsistem secara menyeluruh.
*   **Fokus:** Menjelaskan kombinasi prosedur manual maupun prosedur komputerisasi, mencakup media data yang mengalir (seperti dokumen, disket, pita magnetik, harddisk, display monitor, dan keyboard).
*   **Gaya Penggambaran:** Dapat menggunakan partisi kolom (*swimlanes*) untuk memisahkan alur berdasarkan pelaku/aktor pemroses.
___
### Bagan Alir Dokumen (*Document Flowchart*)
*   **Definisi:** Sering disebut *paperwork flowchart*, yaitu bagan alir yang khusus menunjukkan arus dari formulir, dokumen input, maupun laporan output beserta tembusan-tembusannya di antara unit-unit organisasi.
*   **Fokus:** Menekankan pada pertanggungjawaban dan keberadaan fisik dokumen dalam sistem untuk mendukung perancangan antarmuka input dan output pada fase desain.
___
### Bagan Alir Program (*Program Flowchart*)
*   **Definisi:** Bagan yang menjelaskan urutan instruksi dan langkah-langkah logika pemrosesan komputer secara terperinci.
*   **Klasifikasi Metode Pemodelan:**
    1.  ***Conceptual Flowchart* (*Program Logic Flowchart*):** Menggambarkan alur pemecahan masalah program komputer secara global dan logis.
    2.  ***Detail Flowchart* (*Detailed Computer Program Flowchart*):** Menggambarkan instruksi-instruksi program komputer secara rinci hingga tingkat eksekusi variabel/parameter yang disiapkan untuk pemrogram.
___