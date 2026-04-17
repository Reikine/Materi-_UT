# Modul 1: Kalimat Logika Proporsionalm Aturan Sintatik dan Interpretasi

### Kegiatan 1: Bahasa Logika Proporsional dan Aturan Sintatik

#### Dasar Bahasa Logika
Sebuah bahasa yang dibangun dari kalimat deklaratif. Terdapat dua pilar utama dalam membangun bahasa ini:
* **Aturan Sintatik :** tata cara pembentukan kalimat.
* **Aturan Semantik :** aturan penentuan nilai kebenaran.

Komponen pembentuknya adalah simbol-simbol proposisi, yaitu:
* Simbol **Kebenaran:** `true` dan `false`.
* Simbol **Proposisional:** Karakter seperti `P, Q, R, S` atau dengan indeks numerik (`P1, Q2, R3`).

#### Aturan Sintatik
Kalimat yang valid dibangun berdasarkan 7 aturan formal berikut:
* **Proposisi :** Setiap simbol proposisi atau simbol kebenaran adalah kalimat.
* **Negasi :** Jika `A` adalah kalimat, maka (`not A`) adalah kalimat.
* **Konjungsi :** Jika `A` dan `B` adalah kalimat, maka (`A and B`) adalah kalimat.
* **Disjungsi :** Jika `A` dan `B` adalah kalimat, maka (`A or B`) adalah kalimat.
* **Implikasi :** Jika `A` dan `B` adalah kalimat, maka (`if A then B`) adalah kalimat.
* **Ekulivalensi :** Jika `A` dan `B` adalah kalimat, maka (`A if and only if B`) adalah kalimat.
* **Kondisional :** Jika `A`, `B`, dan `C` adalah kalimat, maka (`if A then B else C`) adalah kalimat.

#### Kalimat Bagian
Setiap komponen yang membentuk sebuah kalimat kompleks disebut **Kalimat Bagian**.
* **Definisi :** Kalimat yang berada di dalam kalimat lain.
* **Sifat Rekursif :** Sebuah kalimat adalah kalimat bagian dari dirinya sendiri.
* **Kalimat Bagian Sejati (Proper Subsentence):** Seluruh kalimat bagian yang menyusun suatu ekspresi, kecuali ekspresi itu sendiri.

**Contoh Validasi**

* **Ekspresi Valid:** `if (P or Q) then not P else Q`
   * **Analisis:** Ini mengikuti Aturan VII (**Kondisional**). Bagian IF-nya (`P or Q`) valid menurut Aturan IV. Bagian THEN-nya (`not P`) valid menurut Aturan II. Bagian ELSE-nya (`Q`) valid menurut Aturan I. Karena semua komponennya valid, maka seluruh ekspresi adalah **Kalimat**.
* **Ekspresi Tidak Valid:** `if not (if A then R) then not (P and not B)`
    * **Analisis:** Ekspresi ini mengandung simbol `A` dan `B`. Menurut definisi proposisi di dokumen, hanya simbol kebenaran atau simbol proposisional `P, Q, R, S` yang diakui. Karena `A` dan `B` bukan bagian dari simbol yang didefinisikan, maka ekspresi ini **Bukan Kalimat**.

### Kegiatan 2 : Notasi dan Interpretasi
#### Notasi Kalimat
Untuk menyatakan kalimat logika proposisional, terdapat tiga macam notasi yang memiliki pasangan 1-ke-1 sebagai berikut:

| Jenis Operasi    | Matematika  | Pseudocode         | Function              |
| ---------------- | ----------- | ------------------ | --------------------- |
| Uner (Unary)     | ¬P          | not P              | not(P)                |
| Biner (Binary)   | P∨Q         | P or Q             | or(P, Q)              |
| Biner (Binary)   | P∧Q         | P and Q            | and(P, Q)             |
| Biner (Binary)   | P⇒Q         | if P then Q        | if then(P, Q)         |
| Biner (Binary)   | P⇔Q         | P if and only if Q | if and only if(P, Q)  |
| Terner (Ternary) | (tidak ada) | if P then Q else R | if then else(P, Q, R) |
    Penting: Penggunaan pasangan kurung ( ) mutlak diperlukan dalam notasi matematika dan pseudocode untuk menghindari Ambiguitas, terutama pada struktur else agar jelas pasangan if mana yang dirujuk.

#### Arti Sebuah Kalimat
Sebuah kalimat logika proposisional tidak memiliki arti sampai kita memberikan Nilai Kebenaran (*truth values*) berupa `true` atau `false`. Nilai ini diberikan kepada simbol proposisional ($P, Q, R, \dots$) yang muncul di dalam kalimat tersebut melalui sebuah mekanisme yang disebut Interpretasi.

#### Interpretasi
Definisi Interpretasi Interpretasi adalah sebuah pemberian (*assignment*) nilai kebenaran `true` atau `false` ke masing-masing himpunan simbol proposisional.
* **Interpretasi untuk Kalimat:** Suatu interpretasi dikatakan sebagai "`interpretasi untuk kalimat K`" jika memberikan nilai kebenaran ke masing-masing simbol proposisional yang ada di dalam kalimat K.
* **Contoh:** Untuk kalimat ``$K: P \lor (\neg Q)$, salah satu interpretasi yang mungkin adalah $I_1 = \{P \leftarrow \text{false}, Q \leftarrow \text{true}\}$.2. 

#### Interpretasi dan Tabel Kebenaran
Suatu interpretasi untuk kalimat `K` akan cocok (match) dengan tepat satu baris dalam Tabel Kebenaran kalimat tersebut.
* Jika sebuah kalimat memiliki $n$ simbol proposisional yang berbeda, maka akan terdapat $2^n$ kemungkinan interpretasi yang berbeda.
* **Contoh:** Kalimat dengan simbol $P, Q,$ dan $R$ memiliki $2^3 = 8$ kemungkinan interpretasi ($I_1$ sampai $I_8$).3. 

#### Interpretasi untuk Beberapa Kalimat
Suatu interpretasi dapat digunakan untuk lebih dari satu kalimat (misalnya kalimat `E` dan `F`) jika dan hanya jika interpretasi memberi nilai kebenaran ke semua himpunan simbol proposisional yang merupakan gabungan (union) dari simbol-simbol di kalimat `E` dan `F`.
Contoh: 
* Kalimat E memiliki simbol $\{P, Q, R\}$.
* Kalimat F memiliki simbol $\{P, S\}$.
* Maka interpretasi I untuk E dan F harus memberikan nilai ke $\{P, Q, R, S\}$.
___

# Modul 2: Aturan Semantik, Logika Proposisional, Interpretasi yang Diperluas

### Kegiatan Belajar 1 Aturan Semantik, Logika Proposisional, Penentuan Nilai Kalimat Logika Kalimat Proposisional

#### Aturan Semantik
Aturan semantik digunakan untuk menentukan nilai kebenaran suatu kalimat di bawah suatu interpretasi secara berulang-ulang (recursive).

#### Definisi Aturan Semantik
Misal K adalah suatu kalimat dan I merupakan suatu interpretasi untuk K. Nilai kebenaran dari K ditentukan oleh aturan-aturan berikut:
* **Aturan Proposisi:** Nilai kebenaran simbol proposisional $P, Q, R, \dots$ sesuai dengan nilai yang diberikan oleh I pada simbol tersebut.
* **Aturan true:** Kalimat true selalu bernilai true di bawah I.
* **Aturan false:** Kalimat false selalu bernilai false di bawah I.Aturan not: Negasi dari K (not K) bernilai true jika K bernilai false, dan sebaliknya.
* **Aturan and:** Konjungsi (K1 and K2) bernilai true hanya jika kedua kalimat pembentuknya bernilai true.
* **Aturan or:** Disjungsi (K1 or K2) bernilai true jika salah satu atau kedua kalimat pembentuknya bernilai true.
* **Aturan if-then:** Implikasi (if K1 then K2) bernilai false hanya jika K1 bernilai true dan K2 bernilai false.
* **Aturan if-and-only-if:** Ekuivalensi (K1 if and only if K2) bernilai true jika kedua kalimat memiliki nilai kebenaran yang sama.
* **Aturan if-then-else:** Kondisional (if K1 then K2 else K3) bernilai sama dengan nilai K2 jika K1 bernilai true, dan bernilai sama dengan K3 jika K1 bernilai false.
  
#### Penentuan Nilai Kalimat Logika Proposisional
Proses penentuan nilai kebenaran kalimat kompleks dilakukan dengan memecah kalimat tersebut menjadi komponen-komponen penyusunnya (dari luar ke dalam).
**Contoh Kasus:**Tentukan nilai kalimat $K: \text{not}(P \text{ or } (\text{if } Q \text{ then } P))$ dengan interpretasi $I: \{P \leftarrow \text{true}, Q \leftarrow \text{false}\}$.
1. Analisis Simbol: Berdasarkan aturan proposisi, $P$ bernilai true dan $Q$ bernilai false.
2. Analisis Implikasi: Menurut aturan if-then, if Q then P bernilai true (karena syarat $Q$ adalah false).
3. Analisis Disjungsi: Menurut aturan or, P or (true) bernilai true.
4. Analisis Negasi: Menurut aturan not, not(true) bernilai false.

Hasil Akhir: Kalimat K bernilai false di bawah interpretasi I.

#### Penentuan Interpretasi dari Kalimat
Ini adalah proses kebalikan (reverse engineering): mencari nilai simbol proposisional berdasarkan hasil akhir kalimat yang sudah diketahui.
* Metode: Bergerak dari luar ke dalam (bentuk luar kalimat menuju ke simbol pembentuknya).Logika 
* Backend: Ini setara dengan mencari kondisi input yang menyebabkan sebuah return value tertentu pada fungsi logika.

### Kegiatan Belajar 2 Interpretasi Diperluas dan Tabel Kebenaran

#### Interpretasi yang Diperluas
Perluasan interpretasi ibarat melakukan Overwriting atau Appending pada sebuah dictionary nilai variabel.
* Definisi: Jika kita punya interpretasi $I$ dan ingin mengubah/menambah nilai simbol $\rho$ menjadi $\tau$, notasinya adalah: $\langle \rho \leftarrow \tau \rangle \cdot I$
* Cara Kerja:
    * Prioritas Kiri: Perluasan dibaca dari kanan ke kiri. Nilai yang paling kiri adalah nilai "terbaru" yang akan dipakai jika terjadi konflik.
    * Jenis Perluasan
      * Update: Mengganti nilai lama dengan yang baru (Misal $R$ dari true jadi false).
      * Append: Menambah simbol baru yang sebelumnya belum ada di interpretasi.

#### Tabel Kebenaran
Tabel kebenaran adalah metode Brute Force untuk melihat semua kemungkinan hasil dari sebuah kalimat logika.
* Rumus Baris: ika ada $n$ simbol proposisional unik, maka jumlah baris tabel adalah $2^n$.
  * 2 simbol ($P, Q$) = 4 baris.
  * 3 simbol ($P, Q, R$) = 8 baris.
  * 4 simbol ($P, Q, R, S$) = 16 baris.
* Fungsi Utama:
  * Menentukan Nilai Akhir: Melihat hasil kalimat di setiap skenario interpretasi.
  * Membuktikan Ekuivalensi: Dua kalimat ($E$ dan $F$) disebut Ekuivalen jika kolom hasil akhir mereka identik di setiap barisnya.

Perluasan Interpretasi dilakukan untuk: 1) Memberi nilai baru pada simbol lama, atau 2) Memberi nilai pada simbol yang belum terdefinisi. Tabel Kebenaran memfasilitasi analisis kasus lengkap. Setiap baris di tabel mewakili tepat satu Interpretasi yang mungkin.
___


# Modul 3: Pohon Semantik dan Sifat-Sifat Kalimat
### Kegiatan Belajar 1 Pohon Semantik

#### Pohon Semantik
Sebuah instrumen penentuan kalimat yang lebih efisien dibanding tabel kebenaran. Tabel kebenaran harus mengevaluasi semua baris ($2^n$), sedangkan pohon semantik dapat berhenti di tengah ketika menghasilkan nilai `True` atau `False` tanpa peduli nilai simbol sisanya.

#### Membangun Pohon Sematik dengan Menggunakan SemTreeGen 
Strukturnya mirip seperti `if-else`.
1. `Root` dimulai dari nomor 1.
2. Cabang Kanan `True` dengan simbol misal `P`.
3. Evaluasi dengan mengecek nilai kalimatnya dengan menjadikannya Node Leaf ketika sudah ketemu, dan lanjut jika belum.
4. Cabang Kiri `False` mengulangi proses dengan memberi nilai `False` pada simbol.
5. Depth First Search sampai ketemu.

#### Alasan Kenapa Lebih Efisien
Perhatikan contoh terakhir di gambar Anda (Kalimat $E$ dengan 20 simbol):
* Tabel Kebenaran: Butuh $2^{20} = 1.048.576$ baris. 
* Pohon Semantik: Karena kalimatnya berbentuk (`true or P2 or ... or P20`), aturan OR bilang kalau satu saja sudah `true`, maka semua sudah pasti `true`.
* Hasilnya: Cukup 1 node saja sudah selesai. Penghematannya hampir 100%!

### Kegiatan Belajar 2: Sifat-Sifat Kalimat
#### Sifat-Sifat Kalimat
Berikut adalah pengertian tepat (precisely) mengenai sifat-sifat kalimat:
* **Valid (Tautology):** Suatu kalimat dikatakan valid jika ia bernilai true di bawah setiap interpretasi yang mungkin.
* **Satisfiable:** Suatu kalimat dikatakan satisfiable jika ia bernilai true di bawah setidaknya satu interpretasi.
* **Contradictory (Unsatisfiable):** Suatu kalimat dikatakan contradictory jika ia bernilai false di bawah setiap interpretasi.
* **Implies:** Kalimat E implies kalimat F jika untuk setiap interpretasi di mana E bernilai true, maka F juga harus bernilai true.
* **Equivalent:** Dua kalimat dikatakan equivalent jika keduanya memiliki nilai kebenaran yang sama di bawah setiap interpretasi yang sama.
* **Consistent:** Kumpulan kalimat dikatakan consistent jika ada setidaknya satu interpretasi yang membuat semua kalimat dalam kumpulan tersebut bernilai true secara bersamaan.

#### Catatan Relasi Validitas
Untuk memudahkan analisis backend, kita bisa menggunakan istilah precisely when untuk menghubungkan sifat-sifat tersebut:
* Catatan 1.1: Kalimat E bersifat satisfiable precisely when negasinya (not E) tidak valid.
* Catatan 1.2: Kalimat E bersifat contradictory precisely when negasinya (not E) valid.
* Catatan 1.3: Kalimat E implies F precisely when kalimat (if E then F) terbukti valid.
* Catatan 1.4: Dua kalimat E dan F bersifat equivalent precisely when kalimat (E if and only if F) bernilai valid.

#### Pohon Semantik dengan Beberapa Sifat Kalimat
Penggunaan pohon semantik (semantic tree) sangat efisien untuk menentukan sifat-sifat di atas melalui label pada leaf-node (daun pohon):
* Menentukan Validitas: Kalimat bersifat valid jika semua leaf pada pohon semantiknya berlabel T (True).
* Menentukan Kontradiksi: Kalimat bersifat contradictory jika semua leaf pada pohon semantiknya berlabel F (False).
* Menentukan Satisfiability: Kalimat bersifat satisfiable jika ditemukan setidaknya satu leaf berlabel T.

**Contoh Analisis Pohon Semantic**
* Contoh 1.1: Kalimat (if P then Q) or (P and not Q) terbukti valid karena setelah ditelusuri menggunakan DFS (Depth First Search), semua jalur menghasilkan nilai T.
* Contoh 1.2: Kalimat not(P or Q) and (not P and not Q) (salah satu bentuk hukum De Morgan) akan menghasilkan semua leaf berlabel F jika dianalisis sebagai kontradiksi.
* Contoh 1.3: Kalimat (R or not Q) if and only if not(P and Q) terbukti satisfiable karena ditemukan jalur yang menghasilkan nilai T, meskipun ada jalur lain yang menghasilkan F.
___


# Modul 4: Pembuktian Validitas dengan Pohin Semantik dab Proof by Falsification
### Kegiatan Belajar 1 Hakikat, Ruang Lingkup, dan Manfaat Penelitian Pendidikan
### Kegiatan Belajar 2 Pembuktian Validitas dengan Proof by Falsification
