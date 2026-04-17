# PEMROGRAMAN BERBASIS DEKSTOP
___
## Modul 1 Konsep Pemrograman Berbasis Objek
### Kegiatan 1: Pengantar Pemrograman Berbasis Objek 
#### Pentingnya Pemrograman Berorientasi Objek
Pemrograman terbagi menjadi 5 jenis paradigma: (1) Imperatif, (2) Terstruktur, (3) Prosedural, (4) Berorientasi Objek (PBO), dan (5) Fungsional.
1. **Pemrograman Terstruktur**
    * Definisi: Implementasi urutan langkah sistematis, logis, dan tersusun berdasarkan algoritma sederhana.
    * Prinsip: Jika proses mencapai titik tertentu, tidak boleh kembali ke baris sebelumnya (no backtracking), kecuali pada langkah perulangan (Loop).
    * Karakteristik: Logis, efisien, tanpa perintah GO-TO, biaya pengujian dan perawatan relatif rendah, serta dokumentasi yang baik.
2. **Pemrograman Prosedural**
    * Model: Disebut process-oriented model. Data dan kode digabung menjadi satu kesatuan dalam program.
    * Kelebihan: Algoritma pemecahan masalah sederhana dan standar, struktur logika benar dan mudah dipahami.
    * Kekurangan: Sulit untuk proses perawatan, perubahan pada satu bagian memengaruhi sistem secara keseluruhan, dan sulit diintegrasikan jika dikembangkan secara terisolasi.
3. **Pemrograman Berorientasi Objek (PBO)**
    * Definisi: Paradigma yang mendefinisikan semua data dan method ke dalam beberapa class atau objek agar bisa saling bekerja sama.
    * Kelebihan: 
      1.  Maintenance lebih mudah dan kode lebih mudah dibaca.
      2.  Memudahkan pengubahan program (tambah/hapus fitur atau objek).
      3.  Objek dapat digunakan berulang kali (reusable) dalam bentuk module.
    * Konsep: Variabel dan method dibungkus dalam objek/class. Variabel menyimpan data, sedangkan method menentukan operasinya.

#### Perbedaan Pemrograman Prosedural dengan PBO
| Kriteria             | Pemrograman Prosedural                          | Pemrograman Berorientasi Objek (PBO)           |
| -------------------- | ----------------------------------------------- | ---------------------------------------------- |
| Penyelesaian Masalah | Diselesaikan dalam bentuk prosedur atau method. | Method dan data menjadi satu kesatuan (Objek). |
| Sifat Program        | Urutan instruksi linier.                        | Objek dalam PBO bersifat aktif.                |
| Fokus Utama          | Fokus pada prosedur dan method.                 | Fokus pada interaksi antar objek.              |
| Manipulasi Data      | Method digunakan untuk memanipulasi data.       | Objek bekerja sama untuk menyelesaikan masalah |
| Sifat Data           | Data bersifat pasif.                            | Data terintegrasi dalam objek.                 |

#### identifikasi Compiler, Interpreter, dan Editor
1. **Compiler**
    * Definisi: Perangkat lunak yang menerjemahkan seluruh source code menjadi kode objek (biner).
    * Karakteristik: Menghasilkan file baru (.exe/.obj), berjalan lebih cepat, dan bersifat independent. Contoh: Visual Basic, Pascal, C++.
    * Tahapan Kompilasi:
        * Membaca source code dari memori.
        * Mengubah menjadi object code (bahasa assembly).
        * Menghubungkan (linking) object code dengan library menjadi file eksekusi.
2. **Interpreter**
    * Definisi: Perangkat lunak yang mengeksekusi kode program lalu menerjemahkannya ke bahasa mesin baris demi baris mengikuti logika source code.
    * Java Hybrid: Java menggunakan compiler untuk menghasilkan bytecodes, lalu dijalankan oleh Java Virtual Machine (JVM) menggunakan interpreter. Hal ini memungkinkan kode berjalan di berbagai platform (OS) yang berbeda.
3. **Editor (IDE)**
Beberapa perangkat lunak untuk menulis kode yang disebutkan:
    * Notepad++: Ringan, mendukung banyak plug-in.
    * NetBeans: Mendukung GUI Builder, dikembangkan dalam Java.
    * Eclipse: Open source, mendukung pengembangan komersial dengan plug-in.
    * JCreator: IDE Java/C++ khusus untuk Windows.
    * BlueJ: Sederhana, menggunakan konsep kakas UML.

#### Arsitektur Java
1. **Pembagian Arsitektur**
Sun Microsystems membagi arsitektur Java menjadi tiga bagian utama sesuai kebutuhan penggunaannya:
    * Enterprise Java (J2EE): Untuk pengembangan aplikasi berbasis web skala besar.
    * Standard Java (J2SE): Versi standar yang biasa dikenal sebagai bahasa Java pada umumnya.
    * Micro Java (J2ME): Subset dari J2SE yang dikhususkan untuk perangkat nirkabel atau mobile device.
2. **Fitur-Fitur Utama**
Java memiliki tiga fitur kunci yang mendukung performa dan kenyamanannya:
    * JVM (Java Virtual Machine): Mesin imajiner yang memungkinkan program Java berjalan di berbagai platform dengan cara mengubah kode menjadi bytecode.
    * Garbage Collection: Fitur otomatis yang bertugas mengosongkan memori, sehingga programmer tidak perlu mengelola alokasi memori secara manual.
    * Code Security: Keamanan kode yang diimplementasikan melalui JRE (Java Runtime Environment).
3. **Keamanan 3 Lapis**
Untuk melindungi sistem dari kode yang tidak tepercaya (untrusted code), Java menggunakan tiga lapisan pengamanan:
    * Class-loader: Menangani pemuatan class ke dalam runtime interpreter.
    * Bytecode Verifier: Memastikan bytecode memenuhi aturan dasar bahasa Java sebelum dijalankan.
Manajemen Keamanan: Mengontrol hak akses program terhadap sumber daya sistem (seperti file, jaringan, dan proses eksternal).
4. **Perangkat Pengembangan**
Dua komponen penting untuk mulai membuat program Java adalah:
    * Java SDK: Platform dasar yang diperlukan untuk mengeksekusi kode program Java.
    * NetBeans: Aplikasi editor terpadu (IDE) yang memudahkan pembuatan aplikasi melalui kontrol visual, terutama untuk pemrograman desktop.

#### Soal Formatif 1
Bahasa pertama yang menggunakan konsep PBO/OOP adalah ....

    B. simula
    Alasan: Simula (dikembangkan pada tahun 1960-an) secara luas diakui sebagai bahasa pemrograman pertama yang memperkenalkan konsep class, object, dan inheritance, yang menjadi fondasi utama OOP.
Istilah object oriented programming (OOP) pertama kali digunakan oleh Xerox PARC ... merujuk pada proses yang menggunakan objek sebagai dasar ....

    A. perhitungan
    Alasan: Dalam konteks sejarah Xerox PARC (yang mengembangkan bahasa Smalltalk), OOP dipandang sebagai model di mana "perhitungan" atau komputasi dilakukan melalui interaksi antar objek yang saling mengirim pesan.
Metode pemrograman yang mengeluarkan perintah yang akan dieksekusi oleh komputer... baris demi baris secara urut disebut ....

    B. prosedural
    Alasan: Pemrograman prosedural berfokus pada urutan instruksi atau prosedur yang harus dijalankan langkah demi langkah untuk menyelesaikan tugas.
Model data berorientasi objek dapat memberikan fleksibilitas yang lebih banyak, karena ....

    A. memberikan kemudahan dalam mengubah program
    Alasan: OOP dirancang agar modular. Karena setiap objek berdiri sendiri, kita bisa mengubah isi suatu class atau menambah fitur tanpa harus merombak seluruh struktur kode, yang membuatnya sangat fleksibel untuk pengembangan.
Pada pemrograman berorientasi objek, dimana sebuah objek dapat mempunyai objek turunan disebut ....

    A. inheritance
    Alasan: Inheritance (pewarisan) adalah konsep di mana sebuah class (anak/turunan) dapat mengambil sifat atau perilaku dari class lain (induk).
Setiap object memiliki property. Berikut yang bukan termasuk property dari laptop adalah ....

    D. charger
    Alasan: Dalam konsep objek, property adalah atribut/ciri yang menempel pada objek tersebut (seperti merk, warna, tipe). Sementara "charger" adalah objek luar yang terpisah (komponen pendukung), bukan atribut internal dari si laptop itu sendiri.
Suatu program yang menterjemahkan bahasa program ke dalam bahasa objek adalah ....

    C. compiler
    Alasan: Compiler bertugas memproses seluruh kode sumber sekaligus dan mengubahnya menjadi kode objek atau bahasa mesin agar bisa dijalankan.
Untuk menulis source code maka kita memerlukan ....

    C. editor
    Alasan: Text Editor atau Code Editor adalah perangkat lunak utama yang digunakan oleh programmer untuk mengetikkan baris-baris kode.
Ketika kita melakukan proses compile suatu kode program, posisi Loader setelah ....

    B. linker
    Alasan: Dalam siklus pembuatan program, urutannya adalah: Compiler (mengubah kode) -> Linker (menggabungkan file objek menjadi eksekusi) -> Loader (memasukkan program ke memori untuk dijalankan).
Perangkat lunak yang mampu mengeksekusi kode program... lalu menterjemahkannya ke dalam bahasa mesin... sehingga mesin melakukan instruksi yang diminta ....

    C. interpreter

    Alasan: Berbeda dengan compiler, interpreter menterjemahkan dan mengeksekusi kode secara langsung baris demi baris saat program sedang berjalan.

#### Soal Formatif 2
1. JDK merupakan singkatan dari ....
   
        Jawaban: D. Java Development Kit
        Alasan: JDK adalah perangkat lunak yang digunakan untuk melakukan proses kompilasi, debugging, dan pengembangan aplikasi Java.
2. Saat melakukan install Java, ada beberapa point yang harus dilakukan, kecuali ....
   
        Jawaban: C. Setting computer
        Alasan: Dalam instalasi Java, langkah teknis yang diperlukan adalah menginstal binari (Install Java), mengatur Environment Variables (Setting system), dan mendaftarkan lokasi binari ke dalam PATH (Setting path). "Setting computer" terlalu umum dan bukan istilah teknis spesifik.
3. Jdk-12.0.1_windows-x64_bin artinya adalah ....

        Jawaban: C. Java versi 12 untuk Windows 64
        Alasan: Penamaan file tersebut menunjukkan: Jdk-12 (Versi), windows (Sistem Operasi), x64 (Arsitektur 64-bit), dan bin (Distribusi biner).
4. Langkah untuk install Java ....

        Jawaban: B. download file java - double klik file hasil download - accept license agreement - ikuti langkah dengan klik next-close
        Alasan: Ini adalah urutan standar instalasi perangkat lunak pada Windows, di mana persetujuan lisensi (license agreement) muncul setelah menjalankan installer sebelum proses penyalinan file dimulai.
5. Langkah untuk setting System Variabel ....

        Jawaban: A. klik control panel – system – advance setting – environement variabel – new – isi data – browse directory – cari lokasi file jdk – OK
        Alasan: Ini adalah jalur navigasi yang benar pada Windows untuk menambahkan variabel lingkungan agar perintah java dan javac dapat dikenali secara global oleh sistem.
6. Berikut ini adalah editor yang dapat digunakan untuk menuliskan program Java, kecuali ....

        Jawaban: D. JavaBeans
        Alasan: JavaBeans adalah arsitektur komponen untuk platform Java (model objek), bukan perangkat lunak editor atau IDE. JCreator, Notepad, dan Eclipse adalah alat untuk menulis kode.
7. Sintaks java untuk melakukan kompilasi terhadap berkas program adalah ....

        Jawaban: B. Javac
        Alasan: javac (Java Compiler) adalah perintah baris (command line) yang digunakan untuk mengubah source code (.java) menjadi bytecode (.class).
8. Hasil kompilasi dari berkas Java adalah ....

        Jawaban: D. file class
        Alasan: Proses kompilasi oleh javac menghasilkan file dengan ekstensi .class yang berisi bytecode untuk dijalankan oleh JVM.
9. Editor yang berbasis text adalah ....

        Jawaban: B. Notepad
        Alasan: Notepad adalah plain text editor murni tanpa fitur otomatisasi pengembangan. JCreator dan Eclipse dikategorikan sebagai IDE (Integrated Development Environment).
10. Arsitektur Java yang digunakan untuk membuat aplikasi berbasis web adalah ....

        Jawaban: A. J2EE
        Alasan: J2EE (Java 2 Platform, Enterprise Edition) dirancang khusus untuk aplikasi skala besar dan aplikasi berbasis web (Server-side). J2SE untuk desktop, dan J2ME untuk perangkat mobile lama.
___

## Modul 2 Tipe Data, Variabel, Identifier, dan Keyword
### Kegiatan Belajar 1: Tipe Data, Variabel, Identifier, dan Keyword
#### Tipe Data dalam Java
Java wajib mendeklarasikan tipe data sebelum variabel digunakan (Strongly Typed). Tipe data dibagi menjadi dua kategori utama:
* Tipe Data Primitive: Menyimpan nilai tunggal secara langsung.
    * byte (8-bit), short (16-bit), int (32-bit), long (64-bit): Untuk bilangan bulat.
    * float, double: Untuk bilangan desimal (pecahan).
    * char: Karakter tunggal, angka, atau simbol khusus.
    * boolean: Nilai logika (true atau false).
* Tipe Data Reference: Menyimpan alamat (address) memori yang merujuk pada sebuah objek atau method. Contoh: Hewan Kucing = new Hewan();.

#### Identifier (Penamaan)
Identifier adalah nama yang diberikan untuk variabel, class, method, atau package.
* Aturan Syah (Legal): Harus diawali huruf, angka (tidak boleh di awal), underscore (_), atau simbol dolar ($).
* Gaya Penulisan: Java menggunakan gaya CamelCase (contoh: namaVariabel, hitungLuasLingkaran).
* Larangan: Tidak boleh menggunakan angka di depan, tidak boleh mengandung spasi atau simbol khusus (kecuali _ dan $), serta bukan merupakan Keyword Java.

#### Keyword dan Literal
* Keyword: Kata kunci yang dipesan oleh sistem (contoh: abstract, public, static, void, final).
* Literal: Nilai konstan yang diberikan langsung ke variabel. Contoh: 42 (int literal), false (boolean literal), "m" (char literal).

#### Klasifikasi Variabel
Variabel adalah lokasi memori untuk menyimpan informasi. Berdasarkan lingkupnya (scope), variabel dibagi menjadi:
* Local Variable: Dideklarasikan di dalam method/block. Hanya bisa diakses di dalam area tersebut.
* Instance Variable: Dideklarasikan di dalam class tapi di luar method. Setiap objek memiliki salinan nilainya sendiri.
* Static Variable: Dideklarasikan dengan keyword static. Nilainya dipakai bersama oleh seluruh objek dalam satu "dunia" class yang sama.

#### Deklarasi dan Konstanta
Sintaks Dasar: [tipe_data] [nama_variable] = [nilai];
* Konstanta: Untuk membuat nilai yang tidak bisa diubah, gunakan keyword final.
    * Contoh: public static final double PHI = 3.14;

#### Soal Formatif 1
Bentuk penulisan variabel yang benar adalah ....
   
    Jawaban: D. Boolean A = true;
    Alasan: Pilihan D memenuhi kaidah [Tipe Data] [Nama] = [Nilai];. Pilihan A salah karena tipe data harusnya int (huruf kecil) dan nilai '20' (char) tidak cocok. Pilihan B & C salah karena case dan caseif adalah reserved keywords atau mendekati keyword yang dilarang sebagai nama variabel.
Berikut ini yang merupakan invalid variable dalam Java adalah ....

    Jawaban: B. 1MyNumber _int.
    Alasan: Sesuai aturan Identifier, nama variabel tidak boleh diawali dengan angka. Pilihan A ($), C (case.), dan D (int) secara teknis dilarang dalam konteks tertentu, namun mengawali dengan angka adalah kesalahan fundamental pertama.
Statement berikut ini tidak akan menghasilkan kesalahan saat di compile adalah ....

    Jawaban: D. char what_char = 'L';
    Alasan: Tipe data char menggunakan tanda petik tunggal (' ') untuk satu karakter. Pilihan A, B, dan C salah karena menggunakan tanda petik ganda (" ") yang merupakan standar untuk tipe data String.
Berikut ini adalah penulisan identifier yang salah ....
    
    Jawaban: A. 123nama;
    Alasan: Sekali lagi, identifier tidak boleh dimulai dengan karakter angka (0-9).
Berikut ini penulisan identifier yang benar ....

    Jawaban: C. int b32;
    Alasan: Nama variabel boleh mengandung angka selama tidak di posisi pertama. Pilihan A, B, dan D salah karena mengandung karakter khusus seperti !, @, dan # yang dilarang dalam Java.
Deklarasi berikut yang bukan termasuk tipe data primitive adalah ....
    Jawaban: A. String
    Alasan: Dalam Java, String adalah sebuah Class (Tipe Data Reference), bukan tipe data primitif. Tipe data primitif (seperti int, boolean, char, float) selalu ditulis dengan huruf kecil di awal.
Float merupakan jenis tipe data ....
    
    Jawaban: A. primitive
    Alasan: Secara klasifikasi utama, float termasuk dalam 8 tipe data primitif Java yang digunakan untuk menyimpan bilangan pecahan (desimal).
Tanda &= merupakan operator ....

    Jawaban: C. penugasan
    Alasan: Ini adalah operator Assignment (penugasan) gabungan. a &= b ekuivalen dengan a = a & b. Simbol = menunjukkan adanya operasi pengisian nilai ke variabel.
Untuk menyimpan data NIM mahasiswa, tipe data yang paling tepat digunakan adalah ....
    
    Jawaban: C. String
    Alasan: NIM seringkali mengandung angka yang sangat panjang (melebihi kapasitas int) atau diawali dengan nol. Selain itu, NIM adalah identitas (label) yang tidak digunakan untuk operasi aritmetika (seperti penjumlahan atau perkalian), sehingga lebih tepat menggunakan String.
Berikut ini adalah keyword yang terdapat dalam Java, kecuali ....

    Jawaban: D. String
    Alasan: Meskipun sering digunakan, String adalah nama Class di library Java, bukan Reserved Keyword. Sedangkan Go to (meski tidak digunakan), Break, dan If adalah kata kunci yang dipesan oleh bahasa Java.

### Kegiatan Belajar 2: Variabel dalam Class, Object, dan Method
#### Konsep Dasar PBO
* Class: Sebuah blueprint atau cetakan untuk menciptakan objek. Berisi definisi variabel (atribut) dan fungsi (method).
* Object: Hasil instansiasi (ciptaan) dari sebuah class. Satu class dapat menghasilkan banyak objek.
* Instance: Wujud nyata dari sebuah class.

#### Anatomi dan Struktur Class
Struktur umum sebuah class terdiri dari:
* Header Kelas: Deklarasi nama kelas (misal: `public class MyProgram`).
* Badan Kelas (Class Body): Area di dalam kurung kurawal `{ }`.
* Data (Member/Atribut): Variabel yang merepresentasikan ciri-ciri objek.
* Method: Blok program yang berisi tindakan atau operasi.

#### Implementasi Objek (Instansiasi)
Untuk membuat objek baru dari sebuah class, Java menggunakan kata kunci new.
* Sintaks: `NamaClass namaObj = new NamaClass()`;
* Akses Member: Menggunakan operator titik (.).
* Contoh: `petani.name = "Petani Kode";` (Mengisi atribut)
* Contoh: `petani.run();` (Memanggil method)

#### Praktik Pengembangan dengan NetBeans
Langkah-langkah teknis yang dijelaskan dalam materi:
* Membuat Project: Pilih Java Application, beri nama (misal: `BelajarOOP`), dan jangan centang Create Main Class.
* Membuat Package: Digunakan untuk mengorganisir file (misal package: `dasar`).
* Membuat Class: 
    * `Player.java`: Berisi atribut (`name`, `speed`, `healthPoin`) dan method (`run`, `isDead`).
    * `Game.java`: Berisi `main method` untuk menjalankan logika permainan dan instansiasi objek `Player`.

#### Identifikasi Property dan Method
Memodelkan objek dunia nyata ke dalam kode:
* Property (Atribut): Ciri-ciri fisik/data.
    * Contoh Laptop: Merk, Tipe, Warna, Berat.
* Method (Fungsi): Tingkah laku atau operasi.
    * Contoh Laptop: menyalakan, bekerja, mematikan.

#### Encapsulation (Getter & Setter)
Materi memperkenalkan penggunaan access modifier `private` untuk melindungi data.
* Private Property: Variabel hanya bisa diakses di dalam kelas tersebut.
* Method Getter: Untuk mengambil nilai variabel (misal: getText()).
* Method Setter: Untuk mengisi nilai variabel (misal: setText()).

#### Analisis Logika: Method isDead()
Dalam contoh program Player.java, terdapat logika kondisional:

**Java**

    boolean isDead(){
    if(healthPoin <= 0) return true;
    return false;
    }

Logika ini krusial dalam backend game. Jika Rimuru mengubah healthPoin menjadi 0, method ini akan mengembalikan nilai true, yang kemudian memicu pesan "Game Over!" pada output program.

#### Soal Formatif 2
1. Method yang digunakan untuk mengubah seluruh huruf dalam string menjadi huruf besar/kapital adalah ....
    * Jawaban: B. toUpperCase()
    * Alasan: Dalam library standar Java (`java.lang.String`), method untuk mengubah kapitalisasi adalah `toUpperCase()`. Pilihan C salah karena penulisan case-sensitive (huruf '`U`' harus kapital).
  
2. Apa yang akan tercetak dari hasil penggalan program berikut ini.
    * `int a=2, b=3, c=6`, 
    * `d=5;All = b * d - c / a + b;`
    * Jawaban: C. All: 15
    * Alasan: Menggunakan hirarki operator matematika (Order of Operations):
        * Perkalian & Pembagian: $b \times d = 15$ dan $c / a = 3$.
        * Pengurangan & Penjumlahan: $15 - 3 + 3 = 15$.Jadi, variabel All bernilai 15.
  
3. Baris statement yang tidak valid terdapat pada nomor ....
* Jawaban: C. 1 dan 3 (Catatan: Berdasarkan gambar, ada kesalahan penulisan soal nomor 3, namun mari kita bedah validitasnya).
* Alasan:
    * Baris 1: `Int satuAwal = 5;` salah karena `Int` harusnya `int` (huruf kecil).
    * Baris 3: `Char k = "T";` salah karena `Char` harusnya `char` dan nilai karakter wajib menggunakan petik tunggal (`'T'`), bukan petik ganda (`"T"`).
     
4. Fungsi method system.in dalam Java adalah ....
* Jawaban: B. menangani pembacaan dari keyboard
* Alasan: `System.in` adalah standard input stream yang digunakan untuk mengambil input data dari pengguna melalui perangkat input (biasanya keyboard).

5. Diantara perintah untuk mencetak berikut, yang benar adalah ....
* Jawaban: D. `System.out.println("Hello world ");`
* Alasan: Sintaks standar Java untuk mencetak ke konsol adalah `System.out.println();` dengan memperhatikan case-sensitivity (S pada System harus kapital) dan diakhiri titik koma.
  
6. Berikut adalah penamaan class pada Java yang diperbolehkan, kecuali ....
* Jawaban: A. 3_One
* Alasan: Aturan identifier Java menyatakan bahwa nama class (atau variabel) tidak boleh diawali dengan angka.

7. Suatu method yang dapat dijalankan otomatis pada saat object dari class dibuat, dikenal dengan ....
* Jawaban: A. Constructor
* Alasan: Constructor adalah method khusus yang namanya sama dengan nama class dan dieksekusi secara otomatis saat instansiasi objek (penggunaan keyword `new`).

8. Berikut ini pernyataan yang benar berhubungan dengan class dan object dalam Java, kecuali ....
* Jawaban: C. Object terdiri dari keyword dan method
* Alasan: Objek terdiri dari Atribut (Data/State) dan Method (Behavior). Keyword bukanlah penyusun sebuah objek, melainkan bagian dari sintaks bahasa pemrograman.

9. Komentar program dalam Java dapat menggunakan perintah ....
* Jawaban: C. `//` dan `/.../`
* Alasan: Java mendukung dua jenis komentar utama: `//` untuk satu baris (single-line) dan `/* ... */` untuk banyak baris (multi-line).
  
10. Paket yang dapat digunakan untuk membuat program menggunakan class BufferedReader adalah ....
* Jawaban: A. `Java.io*`. 
* Alasan: `BufferedReader` dan `InputStreamReader` merupakan bagian dari paket Input/Output Java, sehingga perlu melakukan import `java.io.*` atau `java.io`.`BufferedReader`.
___

## Modul 3 Array dan String
### Kegiatan Belajar 1: Array dan String
#### Struktur Data Array
Array adalah struktur data yang menyimpan sekumpulan data dengan tipe yang sama dalam ukuran tetap (*fixed size*). Dalam Java, array dianggap sebagai objek (tipe referensi).
1. **Karakteristik Utama Array**
    * Indeks: Posisi elemen dalam array yang selalu dimulai dari 0 (nol).
    * Fixed Size: Ukuran array harus ditentukan saat pembuatan dan tidak dapat diubah.
    * Elemen: Dapat berupa tipe data primitif atau tipe referensi (objek).
2. **Deklarasi dan Inisialisasi**
Terdapat dua cara umum untuk mendeklarasikan array:
    * `Tipe_data nama_array[];`
    * `Tipe_data[] nama_array;`
Untuk memesan memori, gunakan kata kunci new:
    * `int[] jumlahHari = new int[4];` (Array kosong dengan 4 slot).
    * `int[] jumlahHari = {31, 29, 31, 30};` (Inisialisasi langsung dengan nilai).
3. **Array Multi-Dimensi (Matriks)**
Digunakan untuk menyajikan data dalam bentuk tabel atau matriks menggunakan dua atau lebih kurung siku `[][]`.
    * Akses: `nilai[baris][kolom]`
    * Implementasi: Digunakan untuk pengolahan data tabular yang lebih kompleks.

#### Identifikasi String dan StringBuffer
1. **Class String**
`String` adalah class yang menangani deretan karakter. Karakteristik utama `String` di Java adalah Konstan (Immutable); begitu objek diciptakan, isinya tidak dapat diubah.
    * Konstruktor String yang Penting:
        * `String()`: Menciptakan string kosong.
        * `String(char[] v)`: Mengonversi array karakter menjadi objek string.
        * `String(byte[] data, int offset, int count)`: Mengambil bagian spesifik dari array byte berdasarkan indeks awal dan panjang karakter.
2. **Class StringBuffer**
Berbeda dengan `String`, `StringBuffer` bersifat Mutable (dapat diubah). Ini lebih efisien untuk manipulasi string yang intensif seperti penyambungan (concatenation) berulang.

#### Analisis Logika: Manipulasi String (Gambar 3.8)
Pada contoh kode yang Anda berikan, terdapat logika konversi karakter berbasis nilai ASCII:
* `data[0] = 64;` menghasilkan karakter `@`
* `data[1] = 65;` menghasilkan karakter `A`.
* Pada `s4 = new String(data, 2, 3);`, sistem mengambil 3 karakter mulai dari indeks ke-2 array data, menghasilkan output `BCD`.

#### Soal Formatif 1
Command apa yang dapat mengkonversi string menjadi int?
* Jawaban: D. `parseInt` (Secara teknis dalam Java adalah `Integer.parseInt()`)
* Alasan: Method `parseInt()` milik wrapper class Integer digunakan untuk mem-parsing string numerik menjadi tipe data primitif int. Pilihan A, B, dan C salah karena kesalahan penulisan (typo) pada nama class dan method.

Untuk menyimpan data no.KTP, tipe data yang paling tepat digunakan adalah ....
* Jawaban: B. `char` (atau lebih tepatnya `array of char/String`)
* Alasan: Nomor KTP terdiri dari 16 digit. Jika menggunakan `int` atau `short`, nilai tersebut akan melampaui batas kapasitas memori (overflow). Karena KTP adalah identitas statis yang tidak dioperasikan secara matematis, menyimpannya sebagai kumpulan karakter jauh lebih aman dan efisien.

Berikut adalah cara inisialisasi variabel bertipe class `string`, kecuali ....
* Jawaban: B. `String me; me = new String “inisialisasi 1” ;`
* Alasan: Inisialisasi objek `String` menggunakan keyword new wajib menyertakan tanda kurung () untuk memanggil constructor-nya. Tanpa tanda kurung, compiler akan menghasilkan error.

Array merupakan sebuah struktur data yang mempunyai ciri ....
* Jawaban: A. tipe data sama
* Alasan: Definisi fundamental array adalah kumpulan variabel dengan tipe data yang homogen (sama) dan memiliki ukuran yang tetap (fixed size) sejak pertama kali dideklarasikan.

Elemen dalam array adalah tipe data ....
* Jawaban: A. `primitif` (Dapat juga berupa reference/objek)
* Alasan: Berdasarkan materi sebelumnya, elemen di dalam array Java bisa berupa tipe data primitif (seperti int, char, byte) atau tipe data referensi.

Deklarasi bentuk array yang benar adalah ....
* Jawaban: C. `int array [2];` (Atau secara sintaksis lengkap: `int[] array = new int[2];`)
* Alasan: Deklarasi array harus menggunakan kurung siku `[]`. Pilihan A dan B salah karena menggunakan kurung biasa () atau huruf kapital pada `Int`.

Cara menciptakan object string yang berasal dari array adalah ....
* Jawaban: C. `String(char[])`
* Alasan: Ini merujuk pada salah satu constructor class String yang menerima parameter berupa array karakter untuk dikonversi menjadi sebuah objek String.

Class string Buffer adalah class string yang menyimpan string ....
* Jawaban: D. konstruktor (Atau secara sifat: Dinamis)
* Alasan: Berbeda dengan `String` yang konstan, `StringBuffer` digunakan untuk menyimpan dan memanipulasi string secara dinamis melalui berbagai constructor dan method-nya.

Tipe data string mempunyai sifat ....
* Jawaban: B. konstan
* Alasan: Objek String dalam Java bersifat Immutable. Artinya, sekali objek String dibuat di dalam memori, nilainya tidak dapat diubah. Setiap "perubahan" pada String sebenarnya menciptakan objek baru di memori.

Hasil panjang karakter dari `text1.length()` pada kode tersebut adalah ....
* Jawaban: D. 7
* Alasan: Isi dari `text1` adalah `"belajar"`. Method `length()` menghitung jumlah karakter dalam string tersebut. `b-e-l-a-j-a-r` = 7 karakter.

### Kegiatan Belajar 2: Method pada Array dan String
#### Konsep Dasar Method
* Definisi: Kumpulan pernyataan yang dikelompokkan bersama untuk melakukan operasi tertentu. Dalam bahasa lain sering disebut prosedur atau fungsi (function).
* Tujuan: Memecah program kompleks menjadi bagian kecil (modular) agar dapat digunakan berulang kali (reusable).
* Analogi Objek:
    * Atribut: Ciri-ciri objek (Contoh: nama senjata, jumlah peluru).
    * Method: Tingkah laku/operasi objek (Contoh: `tembak()`, `reload()`).

#### Method Khusus pada Array
Terdapat beberapa method bawaan yang mempermudah pengolahan data array:
* `equals()`: Membandingkan apakah dua array bernilai sama atau tidak (mengembalikan boolean).
* `sort()`: Melakukan pengurutan elemen array secara otomatis.
* `binarySearch()`: Mencari sebuah nilai di dalam array dan mengembalikan posisi indeksnya.
* `fill()`: Mengisi semua elemen array dengan nilai tertentu secara sekaligus.

#### Anatomi Pembuatan Method
Sebuah method didefinisikan dengan struktur berikut:
* `modifier returnType nameOfMethod (Parameter List) { //method body }`
    * Modifier: Menentukan jenis akses (seperti `public`, `static`).
    * ReturnType: Tipe data yang dikembalikan (jika tidak ada, gunakan `void`).
    * Name of Method: Nama unik untuk memanggil method.
    * Parameter List: Variabel input yang diterima oleh method.

#### Jenis-Jenis Method Berdasarkan Nilai Kembalinya
1. Method Void (Tanpa Nilai Kembali)

    Method ini hanya menjalankan tugas tanpa memberikan data balik ke pemanggilnya.
* Keyword: void.
    * Contoh: `void cetakPesan() { System.out.println("Belajar Java"); }`.

2. Method dengan Return Value
    Method ini mengolah data dan mengembalikan hasilnya ke pemanggil program.
* Keyword: return.
* Aturan: Tipe data pada return harus sama dengan tipe data pada header method.
* Contoh (Gambar 3.15): Method `hitunganUmur(int lahir, int sekarang)` mengembalikan nilai `int` hasil pengurangan tahun.

#### Keyword static
Sesuai catatan pada materi, keyword static memungkinkan sebuah method atau variabel dipanggil langsung dalam program utama tanpa perlu membuat instansiasi objek terlebih dahulu.

#### Analisis Logika: Method minFunction (Gambar 3.13)
Materi memberikan contoh logika pencarian nilai terkecil:

    public static int minFunction(int n1, int n2) {
    int min;
    if (n1 > n2) min = n2;
    else min = n1;
    return min;
    }
Logika ini menggunakan struktur kendali `if-else` untuk membandingkan dua parameter dan mengembalikan nilai yang paling kecil.

#### Soal Formatif 2
1. Method yang digunakan untuk mengubah seluruh huruf dalam string menjadi huruf besar/kapital adalah ....
    * Jawaban: B. `toUpperCase()`
    * Alasan: Sesuai standar library java.lang.String, method ini berfungsi melakukan konversi seluruh karakter string ke kapital. Penulisan harus `camelCase` dengan 'U' dan 'C' kapital.

2. Berikut ini adalah hak akses yang dapat ditambahkan didepan method Java, kecuali ....
    * Jawaban: A. `static`
    * Alasan: `public`, `private`, dan `protected` adalah Access Modifiers (hak akses). Sedangkan static adalah Non-access Modifier yang menentukan bahwa method tersebut milik class, bukan milik instance/objek.

3. Method yang digunakan untuk panjang data `StringBuffer` adalah ....
    * Jawaban: B. `setLength()` (Catatan: Berdasarkan pilihan yang tersedia untuk memanipulasi/mengatur panjang).
    * Alasan: Jika yang ditanyakan adalah mengambil panjang, seharusnya `length()`. Namun, dalam konteks pilihan yang tersedia, `setLength()` adalah method valid untuk memanipulasi panjang buffer pada class `StringBuffer`.

4. Method yang digunakan untuk mengambil suatu karakter berdasarkan lokasi yang anda berikan adalah ....
    * Jawaban: C. `charAt()`
    * Alasan: Method `charAt(int index)` mengambil karakter tunggal pada posisi indeks tertentu yang didefinisikan dalam parameter.

5. Suatu method yang dapat dijalankan otomatis pada saat objek dari class dibuat, dikenal dengan ....
    * Jawaban: A. `constructor`
    * Alasan: Constructor adalah `blok` kode khusus untuk inisialisasi objek yang dipanggil tepat saat instansiasi menggunakan keyword new.

6. Method yang digunakan untuk mengkonversi nilai string ke integer dalam Java adalah ....
    * Jawaban: A. `ParseInt()`
    * Alasan: Secara spesifik adalah Integer.`parseInt(String s)`. Method ini membedah string dan mengembalikan nilai primitif int.

7. Method yang digunakan untuk membandingkan dua buah data string adalah ....
    * Jawaban: D. `equals()`
    * Alasan: Untuk membandingkan konten/isi dari dua objek String, wajib menggunakan `equals()`. Penggunaan operator `==` hanya akan membandingkan alamat memori (referensi), bukan isinya.

8. Fungsi method System.in dalam java adalah ....
    * Jawaban: B. menangani pembacaan dari keyboard
    * Alasan: `System.in` merepresentasikan aliran input standar (standard input stream) yang biasanya terhubung ke input keyboard.

9. Yang berfungsi mendefinisikan jenis akses method, sesuai dengan kondisi yang dibutuhkan pada potongan kode tersebut adalah ....
    * Jawaban: D. Modifier
    * Alasan: Berdasarkan struktur method `modifier returnType nameOfMethod (...)`, bagian Modifier adalah tempat meletakkan hak akses seperti `public` atau `private`.

10. `nameOfMethod` pada soal no. 9 berfungsi sebagai ....
    * Jawaban: D. nama method
    * Alasan: Sesuai labelnya, `nameOfMethod` adalah identifier yang digunakan oleh programmer untuk memberi nama pada fungsi tersebut agar bisa dipanggil di bagian program lain.