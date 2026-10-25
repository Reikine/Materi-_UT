# Modul 3 Kerangka Kerja dan Paradigma Interaksi

## Kegiatan 1 Kerangka Kerja untuk Memahami Interaksi
### Siklus Tindakan Eksekusi/Evaluasi
Donald Norman (1990) memperkenalkan konsep siklus tindakan eksekusi/evaluasi untuk memahami bagaimana manusia berinteraksi dengan obyek di dunia nyata.
* **Empat Bagian Dasar:**
    * **Gol (goal):** Kejadian spesifik yang diinginkan oleh pengguna.
    * **Eksekusi:** Melakukan tindakan nyata di dunia nyata.
    * **Dunia Nyata:** Tempat manipulasi obyek terjadi.
    * **Evaluasi:** Validasi hasil tindakan dengan membandingkannya terhadap gol awal.
* **Tujuh Langkah Tindakan:**
Siklus di atas dijabarkan menjadi tujuh langkah operasional:
    * **Fase Eksekusi:** (**1**) Menentukan gol, (**2**) Membentuk keinginan, (**3**) Menentukan urutan tindakan, (**4**) Mengeksekusi tindakan.
    * **Fase Evaluasi:** (**5**) Memahami status dunia nyata, (**6**) Menginterpretasikan persepsi, (**7**) Mengevaluasi hasil interpretasi.
* **Jarak Pemisah (Gulfs):**
    * **Jarak Pemisah Eksekusi:** Perbedaan antara keinginan pengguna dengan apa yang dapat dilakukan sistem. Semakin besar jarak ini, semakin besar potensi frustrasi pengguna.
    * **Jarak Pemisah Evaluasi:** Tingkat kesulitan pengguna untuk mengartikan status sistem (misal: apakah proses instalasi sedang berjalan atau berhenti).

### Kerangka Kerja Interaksi
Abowd dan Beale memperluas siklus Norman dengan memasukkan elemen sistem secara eksplisit. Kerangka kerja ini terdiri atas empat komponen utama:
* **Komponen Utama:**
    * **Sistem (S):** Menggunakan bahasa mesin (atribut komputasi).
    * **Pengguna (P):** Menggunakan bahasa tugas (atribut psikologis).
    * **Masukan (M):** Menggunakan bahasa masukan.
    * **Keluaran (K):** Menggunakan bahasa keluaran.
* **Fase Interaksi:**
    * **Fase Eksekusi:**
        * **Artikulasi:** Pengguna memformulasikan gol ke dalam bahasa masukan.
        * **Pengerjaan:** Bahasa masukan diterjemahkan ke dalam bahasa mesin oleh sistem.
        * **Penyajian:** Sistem menyajikan hasil operasi dalam bahasa keluaran.
    * **Fase Evaluasi:**
        * **Observasi:** Pengguna mengartikan hasil di layar dan mencocokkannya dengan gol semula.
* **Analisis Kesulitan:**
    * Kesulitan sering muncul pada langkah Artikulasi jika pemetaan antara bahasa tugas dan bahasa masukan tidak jelas (misal: bingung mencari ikon untuk fungsi tertentu).
    * Keberhasilan Penyajian diukur dari tingkat ekspresivitas penerjemah status sistem (misal: penggunaan ikon jam pasir untuk menunjukkan sistem sedang bekerja).
___

## Kegiatan 2 Mengatasi Kompleksitas
### Model Mental
Model mental adalah penyajian kognitif tentang perkiraan logis bagaimana suatu benda dibentuk atau berfungsi.
* **Affordance:** Atribut obyek yang memberikan petunjuk penggunaan (contoh: gagang pisau untuk digenggam).
* **Karakteristik Model Mental:**
    * Tidak ilmiah: Berdasarkan perkiraan atau tebakan.
    * Tidak lengkap: Tidak menjelaskan sistem secara keseluruhan.
    * Tidak stabil: Beradaptasi dengan konteks.
    * Tidak konsisten: Sering tidak kompatibel satu dengan lainnya.
    * Personal: Unik untuk setiap individu.
* **Model Konseptual vs Model Mental:**
    * Model Konseptual: Model yang diciptakan oleh perancang untuk sistem.
    * Gambaran Sistem: Dokumentasi dan antarmuka yang terlihat oleh pengguna.
    * Model Mental (Pengguna): Diciptakan pengguna saat berinteraksi dengan gambaran sistem.
    * Idealnya: Model mental pengguna harus sama dengan model konseptual perancang.

### Pemetaan
Konsep tentang bagaimana pengguna menghubungkan satu benda dengan benda lain.
* **Pemetaan Alami:** Tata letak yang intuitif (contoh: saklar kiri mengendalikan lampu kiri).
* **Pemetaan Sembarangan:** Memaksa pengguna mengingat hubungan yang tidak logis, sering memicu kesalahan.

### Jarak Semantik dan Artikulatori
* **Jarak Semantik:** Jarak antara fungsionalitas yang tersedia dengan apa yang ingin dilakukan pengguna. Berkaitan dengan kedayagunaan (usefulness).
* **Jarak Artikulatori:** Jarak antara penampakan fisik peranti dengan fungsinya yang sesungguhnya.

### Affordance
Hubungan antara obyek dengan pengguna melalui persepsi.
* Perancang harus meyakinkan bahwa affordance nampak nyata dan tidak kontradiktif (contoh kesalahan: kotak teks yang terlihat seperti tombol label, atau sebaliknya).
* Persepsi yang tepat terhadap affordance membantu pengguna memahami kebergunaan (usability) sistem.
___

## Kegiatan 3 Paradigma Interaksi
### Antarmuka Berpusat-Pada-Implementasi (BPI)
Antarmuka ini diekspresikan berdasarkan cara sistem dibentuk atau cara kerjanya.
* **Landasan:** Pemahaman tentang mekanisme program (satu tombol untuk satu fungsi, satu dialog untuk satu modul).
* **Karakteristik:** Sangat memuaskan bagi insinyur/perancang yang ingin tahu cara mesin bekerja, namun seringkali menyulitkan pengguna awam karena terlalu kompleks.

### Antarmuka Metaforik
Bergantung pada hubungan intuitif antara simbol visual dengan fungsinya berdasarkan benda nyata di dunia maya.
* **Landasan:** Intuisi pengguna. Contoh: ikon gunting untuk memotong (cut), ikon buku cek untuk pembayaran.
* **Kelebihan:** Membantu pengguna mengenali maksud komponen secara instan jika metaforanya tepat.

### Keterbatasan Metorik
Meskipun populer, paradigma metaforik memiliki risiko yang signifikan:
* **Sulit Ditemukan:** Tidak semua fungsi aplikasi memiliki padanan benda nyata (misal: memutar perkakas atau mengubah resolusi layar).
* **Membatasi Kemampuan Pikir:** Memaksa pengguna mengikuti logika mekanis benda nyata yang mungkin tidak efisien di komputer.
* **Ketergantungan Budaya:** Simbol tertentu mungkin tidak dipahami oleh pengguna dari latar belakang budaya berbeda.
* **Masalah Skalabilitas:** Metafora yang cocok untuk kapasitas kecil (misal: floppy disk) menjadi tidak relevan untuk kapasitas besar (TB).

### Antarmuka Idiomatik
Paradigma ini didasarkan pada cara manusia belajar menggunakan "idiom" visual tanpa harus tahu mekanisme teknis atau kaitan metaforiknya.
* **Landasan:** Pembelajaran dan ingatan pengguna terhadap perilaku sederhana.
* **Karakteristik:** Tidak fokus pada "bagaimana benda berfungsi" tetapi pada "bagaimana cara menggunakannya secara cepat".
* **Contoh:** Jendela (windows), papan judul (title bars), hyperlink, dan dropdown. Kebanyakan elemen grafis yang kita anggap "intuitif" sebenarnya adalah idiom visual.
  
### Membangun Idiom
Menurut Cooper dan Reimann (2003), perancangan idiomatik adalah masa depan antarmuka.
* Manusia memiliki kemampuan belajar idiom yang sangat cepat tanpa perlu perbandingan dengan benda nyata.
* Idiom visual lebih fleksibel dan memberikan manfaat yang lebih besar dibandingkan beban tambahan dari metafora yang dipaksakan.
___

## Soal Modul 3

| Pertanyaan                                                                                                                              | Pilihan Jawaban                                                                | Penjelasan Teknis                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| Kejadian yang diinginkan oleh pengguna dalam struktur tindakan disebut                                                                  | A. gol                                                                         | Dalam model Donald Norman, goal adalah kondisi psikologis awal yang ingin dicapai (state to be achieved).                             |
| Satu langkah tindakan pada fase eksekusi adalah                                                                                         | B. membentuk keinginan                                                         | Fase eksekusi melibatkan formulasi intensi (forming the intention) sebelum urutan aksi fisik dikirim ke hardware.                     |
| Satu langkah tindakan pada fase evaluasi hasil interpretasi adalah                                                                      | A. memahami status dunia nyata                                                 | Evaluasi melibatkan perbandingan antara status sistem saat ini (perceived state) dengan goal awal.                                    |
| Gulf of execution adalah jarak pemisah eksekusi antara                                                                                  | A. pengguna dan sistem                                                         | Secara teknis, ini adalah perbedaan antara formulasi mental pengguna dengan aksi fisik yang diizinkan oleh interface sistem.          |
| Kerangka Kerja Interaksi SPMK terdiri dari                                                                                              | D. empat fase                                                                  | Siklus interaksi (Sistem, Pengguna, Masukan, Keluaran) melibatkan artikulasi, pengerjaan, penyajian, dan observasi.                   |
| Ketika bahasa masukan diterjemahkan ke dalam bahasa mesin merupakan langkah dalam fase                                                  | C. artikulasi                                                                  | Proses mapping dari input pengguna (bahasa manusia/perangkat) ke instruksi yang dimengerti core sistem.                               |
| Pengguna mengartikan hasil di layar dan mencocokkannya dengan kejadian yang diinginkan masuk dalam fase                                 | B. evaluasi                                                                    | Tahap kognitif untuk memvalidasi apakah output sistem sesuai dengan mental model dan goal pengguna.                                   |
| Sistem menunjukkan perubahan statusnya dalam bahasa keluaran merupakan langkah dalam eksekusi, yaitu                                    | C. penyajian                                                                   | Transformasi status internal sistem menjadi representasi visual/auditori yang dapat ditangkap sensor manusia.                         |
| Ketika sistem menggunakan data yang diperoleh dari bahasa masukan untuk melakukan suatu operasi                                         | B. pengerjaan                                                                  | Fase di mana core sistem mengeksekusi logika atau kalkulasi berdasarkan parameter input yang diterima.                                |
| Proses yang ditunjukkan dengan adanya indikator yang bergerak atau ikon berbentuk jam                                                   | B. evaluasi                                                                    | Memberikan feedback sistem agar pengguna dapat mengevaluasi bahwa proses latar belakang sedang berjalan (mencegah deadlock persepsi). |
| Model yang diciptakan oleh pengguna ketika berinteraksi dengan suatu sistem adalah model                                                | C. mental                                                                      | Representasi internal (skema kognitif) yang dibangun pengguna mengenai cara kerja sistem secara logika.                               |
| Model mental merupakan representasi pribadi yang dihasilkan oleh seseorang selama berlangsung proses                                    | A. kognitif                                                                    | Proses pemrosesan informasi di otak yang melibatkan memori kerja (RAM manusia) dan memori jangka panjang.                             |
| Kemampuan pengguna memformulasikan kerangka kerja suatu sistem bergantung pada                                                          | C. pengalaman                                                                  | Akumulasi dataset pengalaman sebelumnya menentukan akurasi prediksi pengguna terhadap perilaku sistem baru.                           |
| Apabila model mental pengguna cukup dekat dengan cara bekerjanya suatu sistem, maka pengguna akan                                       | C. merasa senang menggunakan sistem tersebut                                   | Meminimalkan cognitive load karena prediksi mental selaras dengan state sistem yang sebenarnya.                                       |
| Model mental bersifat                                                                                                                   | D. parsial                                                                     | Pengguna jarang memahami seluruh source code atau struktur hardware; mereka hanya memahami fragmen fungsi yang sering digunakan.      |
| Perancang antarmuka paling efektif memperoleh pemahaman model mental melalui                                                            | C. penelitian melibatkan pengguna                                              | Menggunakan metode seperti usability testing untuk memetakan alur logika pengguna secara empiris.                                     |
| Jarak semantik antara pengguna dengan sistem adalah jarak antara                                                                        | B. fungsionalitas suatu peranti dengan yang sesungguhnya diinginkan pengguna   | Selisih antara ekspresi goal pengguna dengan kemampuan fungsional yang disediakan oleh program.                                       |
| Jarak artikulatori adalah jarak antara                                                                                                  | C. penampakan fisik suatu peranti dengan yang sesungguhnya diinginkan pengguna | Fokus pada mapping fisik: apakah bentuk tombol/ikon merepresentasikan fungsinya secara intuitif.                                      |
| Semakin rendah tingkat affordance suatu perangkat, semakin                                                                              | D. sulit menggunakannya                                                        | Affordance adalah petunjuk visual pada objek yang menunjukkan cara interaksinya. Rendahnya ini meningkatkan error rate.               |
| Contoh perancangan perangkat yang memiliki affordance rendah adalah pintu dengan                                                        | C. pelat besi                                                                  | Pelat datar sering kali membingungkan (apakah harus ditarik atau didorong) tanpa adanya pegangan (handle) yang jelas.                 |
| Antarmuka berpusat-pada-implementasi lebih disukai oleh kalangan                                                                        | D. teknis                                                                      | Pengguna teknis lebih suka akses langsung ke parameter sistem daripada abstraksi visual yang menyederhanakan logika.                  |
| Perancangan antarmuka berpusat-pada-implementasi berfokus pada                                                                          | C. model implementasi                                                          | Desain mengikuti struktur internal koding atau database, bukan alur kerja manusia.                                                    |
| Paradigma perancangan berdasarkan intuisi bagaimana sesuatu bekerja adalah                                                              | B. metaphoric                                                                  | Menggunakan analogi dunia fisik (misal: "Desktop") untuk membantu pengguna memahami fungsi digital.                                   |
| Paradigma perancangan berdasarkan pada proses manusiawi yang alami adalah                                                               | C. idiomatic                                                                   | Berfokus pada perilaku yang dipelajari secara konsisten (seperti double click), bukan sekadar analogi fisik.                          |
| Penggunaan gambar gunting pada Microsoft Word merupakan penerapan paradigma                                                             | B. metaphoric                                                                  | Mengambil fungsi fisik gunting untuk merepresentasikan operasi cut pada memori buffer (clipboard).                                    |
| Ikon keranjang sampah yang langsung diketahui cara menggunakannya karena pernah mempelajari cara kerjanya merupakan penerapan paradigma | C. idiomatic                                                                   | Meski awalnya metafora, penggunaannya telah menjadi standar perilaku (idiom) dalam komputasi modern.                                  |
| Paradigma idiomatik berfokus pada                                                                                                       | C. pembelajaran                                                                | Mengandalkan kemampuan manusia untuk mempelajari pola interaksi yang konsisten tanpa perlu analogi dunia nyata yang ketat.            |
| Elemen-elemen GUI yang merupakan metafora adalah                                                                                        | D. desktops                                                                    | Merepresentasikan ruang kerja fisik di atas meja ke dalam lingkungan sistem operasi virtual.                                          |
| Simbol keranjang (shopping cart) pada web toko online merupakan metafora                                                                | B. fungsional                                                                  | Menghubungkan fungsi pengumpulan barang di dunia nyata dengan pengumpulan entitas data produk di sistem.                              |
| Tanda seru pada dialog box Microsoft Word merupakan penerapan                                                                           | B. indexical metaphor                                                          | Tanda seru berfungsi sebagai indikator (indeks) yang menunjuk pada status peringatan atau perhatian khusus.                           |
___