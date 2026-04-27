# Modul 1 Antarmuka Manusia dan Komputer
## Kegiatan 1 Antarmuka Manusia dan Komputer

### Antarmuka Manusia dan Komputer
Prinsip dasar sistem komputer terdiri dari tiga tahap utama:
1. **Masukan (Input):** Pengguna memberikan data berupa angka atau deretan karakter kepada komputer.
2. **Proses (Process):** Komputer mengolah data masukan tersebut.
3. **Keluaran (Output):** Hasil olahan ditampilkan ke layar atau pencetak.

Interaksi terjadi melalui Antarmuka (Interface). Antarmuka yang baik memiliki sifat konsisten, seperti pada paket Microsoft Office (Word, Excel, PowerPoint), sehingga pengguna yang sudah mempelajari satu aplikasi dapat dengan mudah mempelajari aplikasi lainnya.

### Contoh Interaksi melalui Pemrograman
Interaksi manusia dan komputer dapat diimplementasikan melalui kode program sederhana:
1. **Python (Gambar 1.4.a):** Menggunakan statemen raw_input dan input untuk meminta masukan dari pengguna, serta statemen print untuk mencetak keluaran. Perbedaannya: raw_input menerima sembarang karakter, sedangkan input hanya menerima data angka.
2. **Java (Gambar 1.5):** Menggunakan class Scanner dengan metode `nextLine()` untuk input teks dan nextInt() untuk input angka.

### Definisi dan Ruang Lingkup IMK
Interaksi Manusia dan Komputer (IMK) adalah disiplin ilmu yang mempelajari perancangan, implementasi, dan evaluasi sistem komputasi interaktif.
* **Interaksi:** Hubungan dua arah antara pengguna dan sistem komputer yang saling mendukung.
* **Mesin:** Mencakup komputer personal (workstation, laptop) hingga mesin komputasi terpadu seperti mesin cuci, kokpit pesawat, atau microwave.
* **Manusia:** Bisa berupa individu, sekelompok orang dalam organisasi, atau sistem terdistribusi.

### Bidang Ilmu Pendukung IMK
IMK merupakan ilmu multidisiplin yang melibatkan berbagai bidang:
* **Ilmu Komputer:** Perancangan aplikasi, teknik pemrograman, dan struktur data.
* **Psikologi:** Membahas proses kognitif dan perilaku pengguna.
* **Antropologi:** Interaksi antara teknologi, kerja, dan organisasi.
* **Sosiologi:** Pengaruh sistem terhadap struktur sosial.
* **Perancangan Grafis dan Tipografi:** Penggunaan gambar sebagai sarana dialog yang efektif.
* **Teknik Elektronika:** Berhubungan dengan aspek perangkat keras komputer.
* **Ergonomi:** Berhubungan dengan aspek fisik dan kenyamanan lingkungan kerja.
* **Linguistik:** Penggunaan bahasa untuk dialog antara manusia dan mesin.
* **Perancangan Industri:** Membahas produk interaktif seperti teknologi layar sentuh.
___

## Kegiatan Belajar 2 Pengembangan Antarmuka
### Peranti Bantu Pengembang Sistem
Merancang antarmuka yang ramah pengguna (user-friendly) adalah pekerjaan sulit karena harus menangani berbagai peranti kontrol secara asinkron dan keberagaman kebiasaan pengguna.

#### Sejarah & Perkembangan:
* **Tahun 1980-an:** MacApp dari Apple berhasil mempercepat waktu pengembangan hingga 4-5 kali lipat.
* **Era Modern:** Penggunaan kompilator visual berbasis .NET (Visual BASIC, C#) dan peranti berbasis web (FrontPage, Dreamweaver) untuk pembuatan prototipe cepat.

#### Keuntungan Menggunakan Peranti Bantu:
* **Kualitas Antarmuka:** Hasil rancangan lebih baik, mudah dimodifikasi, konsisten, dan memungkinkan kolaborasi antar ahli (grafis, psikolog, spesialis human factor).
* **Ekonomi & Pemeliharaan:** Program lebih terstruktur/modular, kode dapat digunakan kembali (reusable), keandalan lebih tinggi, dan mudah dipindahkan (porting) ke lingkungan lain.

### Strategi Pengembangan Antarmuka
Sebuah program aplikasi terdiri dari dua bagian utama yang seringkali membutuhkan usaha pengembangan yang sama besarnya (40-50% dari total statemen/memori):
* **Bagian Antarmuka (Interface):** Berfungsi sebagai sarana dialog antara manusia dan komputer.
* **Bagian Aplikasi:** Berfungsi menghasilkan informasi berdasarkan algoritma tertentu.

### Tahapan Garis Besar Pengembangan
Pengembangan bagian antarmuka perlu memperhatikan empat hal berikut:
* Pengetahuan Mekanisme Fungsi Manusia: Memahami psikologi kognitif, tingkat perseptual, dan kemampuan motorik pengguna.
* Karakteristik Dialog: Memperhatikan ragam dialog, struktur, tanggapan waktu, dan kecepatan tampilan.
* Penggunaan Prototipe: Berdasarkan spesifikasi dialog formal yang disusun bersama calon pengguna dan perancang sistem.
* Teknik Evaluasi: Mengevaluasi hasil prototipe melalui analisis transaksi dialog, uji coba empiris, umpan balik pengguna (kuesioner), dan analisis ahli.
___

## Soal Modul 1

| Pertanyaan                                                                                                                                                               | Pilihan Jawaban                     | Penjelasan Teknis                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Prinsip dasar suatu sistem komputer adalah ....                                                                                                                          | D. input, proses, output            | Berdasarkan model komputasi sekuensial; data masuk melalui periferal, diproses CPU, dan dikeluarkan ke register output. |
| Interaksi antara pengguna dan komputer dapat terjadi jika tersedia ....                                                                                                  | D. media                            | Memerlukan antarmuka (layar, keyboard, GUI) sebagai saluran transmisi informasi antara subjek dan sistem.               |
| User-friendly digunakan untuk merujuk pada karakter yang dimiliki oleh ....                                                                                              | A. program aplikasi                 | Atribut perangkat lunak yang meminimalkan beban kognitif pengguna melalui desain yang intuitif.                         |
| Interaksi antara pengguna dan komputer dapat terjadi ketika pengguna ....                                                                                                | D. mengetikkan sesuatu              | Aktivitas ini memicu event listener pada level koding untuk mengeksekusi fungsi tertentu.                               |
| Fokus interaksi manusia dan komputer ditinjau dari perspektif ilmu komputer adalah interaksi antara ....                                                                 | D. manusia dengan komputer          | Optimasi efisiensi pada loop umpan balik antara operator manusia dan mesin.                                             |
| Seorang perancang antarmuka harus mempertimbangkan kenyamanan pengguna, oleh sebab itu dia membutuhkan pengetahuan dari bidang ilmu lain, yaitu ....                     | D. Ergonomi                         | Relevan dengan aspek fisik hardware, seperti tata letak tombol atau radiasi layar yang memengaruhi kenyamanan.          |
| Seorang perancang antarmuka juga harus dapat memahami sifat dan kebiasaan pengguna. Pengetahuan ini dapat diperoleh dari bidang ilmu ....                                | A. Psikologi                        | Mempelajari model mental dan persepsi manusia agar alur program tidak membingungkan.                                    |
| Antarmuka suatu sistem yang dilengkapi dengan gambar atau ilustrasi yang dapat mempermudah pengguna dapat dikembangkan dengan mempelajari ilmu ....                      | C. Perancangan Grafis dan Tipografi | Penggunaan elemen visual sebagai representasi data agar lebih cepat diproses oleh saraf optik pengguna.                 |
| Melalui antarmuka pengguna berdialog dengan komputer. Dialog dapat terjadi jika ada sarana komunikasi yang memadai. Hal ini dapat diperoleh dengan mempelajari ilmu .... | B. Linguistik                       | Fokus pada struktur bahasa dan simbol dalam komunikasi antara pengguna dan terminal.                                    |
| Perancangan antarmuka suatu sistem tidak dapat dilepaskan dari perangkat keras, oleh sebab itu diperlukan pengetahuan bidang ilmu ....                                   | D. Teknik Elektronika               | Penting untuk memahami low-level interaction, seperti latensi input atau kontrol register pada hardware.                |
| Salah satu kriteria yang harus dimiliki oleh sebuah perangkat lunak adalah "ramah dengan pengguna", biasa disebut ....                                                   | A. user-friendly                    | Standar aksesibilitas agar sistem dapat digunakan oleh berbagai level keahlian tanpa pelatihan intensif.                |
| Pengembangan fasilitas antarmuka, selain harus menangani sejumlah peranti kontrol, juga harus memperhatikan selera dan kebiasaan pengguna yang ....                      | B. heterogen                        | Menghadapi varians data pengguna yang luas, sehingga desain harus bersifat inklusif.                                    |
| Proses perancangan dan pengembangan antarmuka memerlukan peranti ....                                                                                                    | C. bantu                            | Merujuk pada Integrated Development Environment (IDE) atau GUI Builder untuk mempercepat koding UI.                     |
| Dalam pengembangan antarmuka lebih baik terlebih dahulu dikembangkan ....                                                                                                | B. prototipenya                     | Tahapan Rapid Prototyping untuk memvalidasi logika alur sebelum masuk ke tahap produksi massal/koding kompleks.         |
| Antarmuka yang konsisten dapat dikembangkan untuk sejumlah aplikasi dengan memanfaatkan ....                                                                             | A. program bantu yang sama          | Memastikan reusability komponen koding agar pengalaman pengguna tetap seragam di berbagai modul.                        |
| Sebuah program aplikasi terdiri dari dua bagian penting, yaitu ....                                                                                                      | A. antarmuka dan aplikasi           | Arsitektur pemisahan antara lapisan presentasi (Frontend) dan logika inti (Backend).                                    |
| Antarmuka berfungsi sebagai sarana dialog antara ....                                                                                                                    | B. manusia dengan komputer          | Jembatan yang menerjemahkan niat manusia menjadi biner yang dapat dieksekusi mesin.                                     |
| Bagian antarmuka lebih banyak berurusan dengan cara ....                                                                                                                 | A. penyajian informasi              | Bagaimana data di-render dari database ke layar agar bermakna bagi pengguna.                                            |
| Pada antarmuka tidak boleh ada keterlambatan antara tindakan pengguna dan sistem, karena hal ini akan menyebabkan pengguna ....                                          | C. frustrasi                        | Latensi (delay) yang tinggi merusak real-time feedback yang krusial dalam interaksi manusia-mesin.                      |
| Berikut adalah keuntungan menggunakan peranti bantu untuk pengembangan antarmuka, kecuali program antarmuka ....                                                         | D. rigid                            | Kaku (rigid) adalah kelemahan; peranti bantu seharusnya menciptakan antarmuka yang fleksibel dan modular.               |
___