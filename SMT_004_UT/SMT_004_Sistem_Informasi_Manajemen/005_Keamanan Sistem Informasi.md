# Modul 05: Keamanan Sistem Informasi

## Bagian 1: Masalah Keamanan Sistem Informasi

**Kelemahan dan Kerentanan Sistem Informasi**

- Definisi Keamanan & Pengendalian: Keamanan adalah kebijakan, prosedur, dan teknik untuk mencegah akses tanpa izin, perubahan, pencurian, atau kerusakan fisik terhadap sistem informasi. Pengendalian adalah metode, kebijakan, dan prosedur organisasional untuk memastikan keamanan kekayaan organisasi, akurasi catatan, serta kepatuhan pada standar manajemen.
- Kelemahan Jalur Telekomunikasi: Transaksi dari jarak jauh menyulitkan verifikasi identitas pengguna secara fisik (seperti verifikasi transaksi mesin ATM yang hanya menggunakan kartu dan PIN).
- Ancaman Internal & Ekstranet: Risiko internal meliputi pencurian, penyalinan, pengubahan data, dan kerusakan perangkat keras/lunak. Pembukaan akses jaringan internal ke pihak luar/rekanan meningkatkan potensi kebocoran data bisnis (seperti kasus kebobolan 147 juta data pribadi di Equifax).
- Kerentanan Perangkat Bergerak: Telepon pintar dan tablet mudah hilang/dicuri serta rentan diakses oleh pihak yang tidak berhak jika pengaturan keamanannya lemah.
___
**Ancaman Keamanan dari Internet**

- Keterbukaan Internet: Sifat terbuka internet memicu kerentanan pada serangan layanan DNS, penyadapan percakapan VoIP yang tidak terenkripsi, aplikasi peer-to-peer (P2P), dan lampiran email.
- Kerentanan Jaringan Nir-Kabel (Wireless): Penggunaan Wi-Fi di tempat umum rentan terhadap penyadapan gelombang elektromagnetik (sniffing), serangan Evil Twins (titik akses Wi-Fi palsu penjerat data), dan Piggybacking (memanfaatkan akses Wi-Fi orang lain tanpa izin).
___
**Perangkat Lunak Jahat (Malicious Software / Malware)**

- Virus Komputer: Perangkat lunak jahat yang menempelkan diri pada program/data lain dan dieksekusi secara diam-diam (seperti virus Creeper atau Stoned).
- Worm: Program khusus yang mengandakan diri secara mandiri antar-komputer melalui jaringan tanpa perlu menempel pada berkas lain.
- Botnet: Jaringan komputer terinfeksi (bot) yang dikendalikan dari jarak jauh oleh peretas untuk menyebarkan spam atau serangan.
- Ransomware: Malware yang mengenkripsi data komputer dan menuntut tebusan uang kripto untuk memberikan kunci pembuka enkripsi (seperti serangan ransomware WannaCry).
- Ancaman Perangkat Bergerak & IoT: Merebaknya malware pada sistem operasi seluler (seperti Android), serangan via media sosial, serta kerentanan perangkat Internet of Things (IoT) yang tidak terlindungi sandi kuat (seperti Mirai Botnet).
___
**Metode Serangan dan Kejahatan Komputer**

- Kuda Troya (Trojan Horse): Program yang tampak aman tetapi melakukan aksi jahat di balik layar (seperti Zeus Trojan untuk mencuri data internet banking).
- SQL Injection: Serangan pada aplikasi web dengan menyisipkan perintah SQL jahat ke server basis data.
- Spoofing & Sniffing: Spoofing adalah teknik menyamar sebagai pihak lain atau membajak DNS; sedangkan sniffing adalah penyadapan lalu lintas data di jaringan.
- Denial of Service (DOS) & Distributed DOS (DDOS): Membanjiri server dengan lalu lintas buatan sehingga kelebihan beban dan tidak dapat diakses (seperti serangan besar pada OVH, Github, dan Dyn).
- Carding & Pencurian Identitas: Carding adalah penggunaan kartu kredit milik orang lain secara ilegal. Pencurian identitas dilakukan melalui Phishing (email/situs palsu), Evil Twins, dan Pharming (mengarahkan paksa ke situs palsu).
- Kasus Kebobolan Data: Contoh insiden kebobolan data global (Sony Pictures, Yahoo, Marriott, Target) serta insiden lokal di Indonesia (Tiket.com dan isu Bukalapak).
- Peperangan Siber (Cyberwarfare): Serangan siber berlatar politik/negara untuk melumpuhkan infrastruktur vital pesaing (seperti malware Stuxnet yang menyerang reaktor nuklir Iran).
- Ancaman Internal & Zero Day Vulnerability: Kecerobohan karyawan (social engineering) serta eksploitasi kerentanan perangkat lunak yang belum diketahui produsen (Zero Day Vulnerability).
___

## Bagian 2: Alat dan Teknik Keamanan Sistem Informasi

**Kerangka Kerja Pengendalian dan Regulasi**

- Payung Hukum di Indonesia: Diatur melalui UU No. 11 Tahun 2008 tentang ITE, Permenkominfo No. 20 Tahun 2016 tentang Perlindungan Data Pribadi (PDP), serta Permenkes No. 269 Tahun 2008 tentang Rekam Medis.

- Bukti Digital & Computer Forensic: Pengolahan barang bukti elektronik di pengadilan membutuhkan keahlian Computer Forensic untuk memulihkan, menyimpan, dan menganalisis data secara sah.

- Kategori Pengendalian:

  - Pengendalian Umum (General Controls): Pengendalian atas desain, keamanan, dan penggunaan prosedur komputer di seluruh organisasi (perangkat keras, lunak, dan operasional).
  - Pengendalian Aplikasi (Application Controls): Pengendalian spesifik pada aplikasi tertentu, mencakup pengendalian masukan (input), proses (processing), dan keluaran (output).
___
**Manajemen Risiko dan Kebijakan Keamanan**

- Penilaian Risiko (Risk Assessment): Mengidentifikasi risiko, mengukur potensi kerugian, serta menentukan prioritas biaya pengendalian dan mitigasi.
- Kebijakan Keamanan (Security Policy): Aturan tertulis mengenai aset penting perusahaan, penetapan wewenang, tingkat risiko yang dapat diterima, dan kebijakan penggunaan perangkat TI.
- Manajemen Identitas (Identity Management): Alat dan proses bisnis untuk mengautentikasi dan mengotorisasi hak akses pengguna pada sistem perusahaan.
___
**Perencanaan Pemulihan Bencana dan Audit**

- Disaster Recovery Planning (DRP): Rencana teknis untuk memulihkan layanan sistem informasi yang terganggu akibat bencana (seperti penyiapan pusat data cadangan).
- Business Continuity Planning (BCP): Perencanaan strategis agar seluruh proses bisnis kritis perusahaan tetap dapat beroperasi saat terjadi bencana.
- Audit Sistem Informasi: Evaluasi sistematis atas lingkungan keamanan, kebijakan, dan teknis (menggunakan metode seperti Penetration Testing dan alat NMAP) untuk menemukan kelemahan serta memberikan saran perbaikan.
___