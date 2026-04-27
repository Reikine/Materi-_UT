# Modul 5 Manipulasi Langsung

## Kegiatan 1 : Manipulasi Langsung
### Aspek Kognitif Pada Manipulasi Langsung
Manipulasi langsung adalah ragam dialog di mana pengguna melakukan tindakan fisik (seperti menggeser berkas ke kotak sampah) yang hasilnya langsung terlihat secara visual.
* **Directness (Kesan Langsung):** Terbagi menjadi dua aspek:
    * **Jarak (Distance):** Jarak antara apa yang dipikirkan pengguna dengan kebutuhan fisik sistem. Jarak pendek berarti sistem mendukung tujuan pengguna dengan mudah.
    * **Keterlibatan (Engagement):** Perasaan kualitatif seolah pengguna memanipulasi obyek secara langsung (seperti bermain kartu Solitaire), bukan sekadar menjalankan perintah komputer.
* **Metafora Model Dunia:** Antarmuka harus menyajikan obyek yang terasa nyata bagi pengguna. Pengguna tidak lagi menggunakan "bahasa percakapan" (mengetik perintah), tetapi melakukan tindakan langsung pada representasi obyek tersebut.

### Manipulasi Program Vs Manipulasi Isi
* **Manipulasi Program:** Berfokus pada pengelolaan program itu sendiri (memilih, menggeser, mengubah ukuran jendela, atau menghubungkan obyek).
* **Manipulasi Isi:** Berfokus pada data di dalam program. Contohnya pada aplikasi grafis seperti CorelDRAW atau Photoshop, di mana pengguna secara langsung mengubah bentuk atau warna elemen visual.

### Fase Pada Proses Manipulasi Langsung
Terdapat tiga fase utama dalam interaksi manipulasi langsung:
* **Fase Bebas:** Sebelum tindakan dilakukan (kursor bergerak bebas di atas obyek).
* **Fase Aktivasi:** Pengguna mulai melakukan tindakan fisik (misal: klik dan geser).
* **Fase Penghentian:** Pengguna melepas tindakan dan sistem menunjukkan hasilnya secara pasti.

### Umpan Balik Visual
Keberhasilan manipulasi langsung sangat bergantung pada umpan balik visual yang lengkap:
* Perubahan bentuk kursor (misal: menjadi simbol tangan saat menggeser).
* Penggunaan kunci-meta (seperti Ctrl atau Shift) untuk operasi tambahan seperti penggandaan obyek.
* Visualisasi garis batas saat menggeser obyek yang kompleks untuk menjaga performa sistem.

### Penerapan Manipulasi Langsung
Penerapan manipulasi langsung ditemukan pada berbagai bidang:
* **Kontrol Proses:** Panel kontrol industri berbasis grafis (misal: pembangkit listrik).
* **Editor Teks:** Konsep WYSIWYG (What You See Is What You Get).
* **Simulator:** Simulator pesawat terbang yang meniru kokpit nyata.
* **Kontrol Lalu Lintas Penerbangan:** Sistem radar yang merefleksikan posisi pesawat secara real-time.
* **Perancangan Terbantu Komputer (CAD):** Penggunaan AutoCAD untuk merancang model 3D.

### Keuntungan dan Kerugian Manipulasi Langsung
| Keuntungan                                           | Kerugian                                                     |
| :--------------------------------------------------- | :----------------------------------------------------------- |
|                                                      |
| Mempunyai analogi yang jelas dengan pekerjaan nyata. | Memerlukan program yang rumit dan berukuran besar.           |
| Mengurangi waktu pembelajaran bagi pengguna.         | Memerlukan tampilan grafis berkinerja tinggi.                |
| Memberikan tantangan untuk eksplorasi pekerjaan.     | Memerlukan peranti masukan khusus (mouse, trackball).        |
| Penampilan visual yang bagus dan mudah dioperasikan. | Memerlukan perancangan tampilan dengan kualifikasi tertentu. |
___

## Kegiatan 2 : Piranti Penunjuk
### Piranti Penunjuk
Tetikus (mouse) adalah peranti interaktif paling populer untuk menempatkan kursor, mengaktifkan menu, hingga menggambar. Informasi posisi dikirim ke komputer untuk memindahkan kursor secara real-time.
* **Variasi Tombol:**
    * Satu Tombol (Apple/Macintosh): Menekankan pada kesederhanaan, meski pengguna harus sering mengulang klik untuk perintah tertentu.
    * Dua Tombol (Microsoft/Windows): Menambah kombinasi informasi (klik kiri dan kanan).
    * Tiga Tombol (Unix/Sun): Memungkinkan hingga 7 kombinasi berbeda (sering digunakan untuk aplikasi teknis tertentu).

### Penggunaan Mouse
Penggunaan tombol kanan mulai populer sejak Windows 95 untuk mengakses context menu (properti obyek), yang sebelumnya dianggap opsional oleh perancang lain.
* **Tombol Kiri:** Digunakan untuk fungsi manipulasi langsung (mengaktifkan, memilih, menggambar). Ini adalah fungsi utama untuk pemilihan data.
* **Tombol Kanan:** Digunakan untuk fungsi tingkat tinggi atau tambahan, seperti memunculkan kotak dialog properti obyek.
* **Tombol Tengah:** Jarang dimanfaatkan di pasaran umum, biasanya digunakan untuk tombol singkat atau pengaturan driver khusus.

### Menunjuk dan Mengklik Menggunakan Mouse
Interaksi dasar manusia dengan mouse melibatkan kombinasi operasi berikut:
* **Menunjuk:** Dasar dari semua operasi; menggerakkan kursor hingga berada di atas obyek. Obyek dapat "merasakan" kehadiran kursor (disebut pliansi atau pliancy).
* **Meng-klik:** Menekan dan melepas tombol. Digunakan untuk memicu perubahan status obyek atau memilihnya. Sistem juga menyediakan "rute keluar" jika pengguna menekan tombol tapi tidak jadi melepasnya di atas obyek (berubah pikiran).
* **Meng-klik dan Menggeser:** Operasi umum untuk memilih banyak obyek, mengubah bentuk, memindah obyek (drag and drop), atau menggambar.
* **Meng-klik Ganda:** Dianggap sebagai dua kali klik tunggal, namun secara fungsional berbeda. Klik tunggal biasanya untuk memilih (select), sedangkan klik ganda untuk melakukan tindakan (action/open).
___

## Soal Modul 5

| Pertanyaan                                                       | Pilihan Jawaban                                                               | Penjelasan Teknis                                                                                                                                                  |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Elemen manipulasi langsung                                       | B. tindakan fisik sebagai pengganti teks masukan                              | Secara teknis, ini memindahkan kontrol dari syntax-driven (perintah teks) ke action-driven. Dalam robotika, ini mirip dengan teleoperation berbasis sensor posisi. |
| Penggantian perintah ketik dengan tindakan menunjuk              | A. ide utama dari manipulasi langsung                                         | Ide dasarnya adalah visualisasi objek yang dapat dimanipulasi secara real-time untuk mengurangi beban kognitif memori perintah.                                    |
| Dua aspek penting pada manipulasi langsung adalah jarak dan .... | C. keterlibatan                                                               | Jarak mengacu pada semantic/articulatory distance, sedangkan keterlibatan (engagement) adalah perasaan subjek bahwa ia mengendalikan objek secara langsung.        |
| Manipulasi program adalah ....                                   | D. cara pengguna menggunakan program aplikasi untuk menyelesaikan suatu tugas | Fokus pada task execution melalui antarmuka fungsional perangkat lunak.                                                                                            |
| Contoh aplikasi manipulasi isi adalah ....                       | B. Adobe Photoshop                                                            | Photoshop memanipulasi data piksel secara langsung pada kanvas visual, berbeda dengan pengolah angka atau teks murni.                                              |
| Tindakan bertahap dengan umpan balik segera                      | A. manipulasi langsung                                                        | Implementasi ini membutuhkan latensi rendah (target ±100ms) untuk mempertahankan kontinuitas logika aksi-reaksi.                                                   |
| Fase sebelum pengguna melakukan tindakan                         | B. aktivasi                                                                   | Pada fase ini, sistem dalam keadaan idle atau menunggu trigger input untuk mengubah state variabel dari S0 ke S1.                                                  |
| Pengolah kata modern dengan prinsip WYSIWYG                      | D. kontrol lalu lintas (Konteks: WYSIWYG/Desktop Publishing)                  | WYSIWYG (What You See Is What You Get) memastikan output buffer grafis identik dengan output cetak/hardcopy.                                                       |
| Keuntungan manipulasi langsung                                   | C. mengurangi waktu pembelajaran                                              | Menggunakan analogi dunia fisik sehingga meminimalkan kurva pembelajaran sintaksis pemrograman yang kompleks bagi pengguna awam.                                   |
| Kerugian manipulasi langsung                                     | B. memerlukan tampilan grafis berkinerja tinggi                               | Membutuhkan refresh rate dan pengolahan GPU yang intensif untuk merender transformasi geometri secara kontinu.                                                     |
| Kata lain peranti penunjuk mouse                                 | C. tikus                                                                      | Terminologi standar dalam lokalisasi bahasa Indonesia untuk perangkat pointing device.                                                                             |
| Jumlah tombol mouse Macintosh                                    | D. satu                                                                       | Desain klasik Apple (Macintosh) menggunakan pendekatan minimalis dengan satu tombol fisik untuk menyederhanakan interaksi.                                         |
| Jumlah tombol mouse Borland                                      | C. tiga                                                                       | Beberapa periferal khusus pengembangan software pada masanya menyediakan lebih banyak tombol untuk shortcut fungsi IDE.                                            |
| Tombol mouse untuk manipulasi langsung (pilih, gambar)           | C. kiri                                                                       | Secara teknis, tombol kiri (Primary) dipetakan pada interrupt utama untuk eksekusi fungsi seleksi dan drag-and-drop.                                               |
| Tombol mouse untuk tombol singkat (shortcut)                     | D. kanan                                                                      | Tombol kanan (Secondary) biasanya memicu pemanggilan context menu atau fungsi makro tambahan.                                                                      |
| Akses langsung ke properti dan fungsi berdasar konteks           | A. kanan                                                                      | Tindakan ini melakukan kueri pada objek di koordinat (x,y) kursor untuk menampilkan daftar atribut yang tersedia.                                                  |
| Proses menggerakkan mouse sampai kursor di atas obyek            | C. menunjuk                                                                   | Operasi pointing secara matematis adalah pemetaan koordinat sensor mouse ke koordinat layar P(x,y).                                                                |
| Operasi memilih, mengubah bentuk, menggambar, dsb                | B. menggeser                                                                  | Melibatkan fungsi dragging, di mana state tombol mouse dipertahankan dalam kondisi High (1) sambil koordinat kursor berubah.                                       |
| Memegang mouse diam, klik satu tombol lalu lepas                 | D. mengklik                                                                   | Operasi diskrit yang mengirimkan sinyal down diikuti segera oleh sinyal up pada satu titik koordinat tetap.                                                        |
| Proses klik tunggal diteruskan dengan tindakan lain              | C. mengklik ganda                                                             | Urutan dua sinyal klik dalam interval waktu t < Δt_threshold untuk memicu aksi eksekusi (seperti membuka file).                                                    |
___