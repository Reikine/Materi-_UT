# Jaringan Komputer
![alt text](/asset/image.png)
___

## Modul 1: Arstektur, Sejarah, Standarisasi, dan Tren
#### Arsitektur TCP/IP dan Internetworking
Implementasi jaringan modern didasarkan pada model TCP/IP yang memungkinkan interkoneksi antar jaringan heterogen (Internetworking).
* **Internetworking** : Menghubungkan berbagai host pada jaringan fisik yang berbeda melalui perangkat **Router**.
* **Logika Jaringan** : Beberapa jaringan fisik yang terhubung via router akan terlihat sebagai satu jaringan logis (Virtual Network) dari sisi pengguna.
* **Addrressing** : Setiap host diidentifikasi menggunakan IP Address yang terdiri dari dua bagian logis: 
  $$\text{IP Address} = \langle \text{nomer jaringan} \rangle \langle \text{nomer host} \rangle$$

#### Layer pada Protokol TCP/IP
Arsitektur ini dibagi menjadi 4 layer utama untuk mempermudah implementasi backend:
1. **Layer Aplikasi:** Berinteraksi langsung dengan pengguna. Protokol: TELNET, FTP, SMTP.
2. **Layer Transport:** Komunikasi end-to-end.
   * **TCP:** *Connection-oriented*, reliabel, memiliki *flow control* dan *congestion control*.
   * **UDP:** *Connectionless*, tidak reliabel, namun memiliki latensi yang rendah (cocok untuk VoIP).
3. **Layer Internetwork:** Pengalamatan logis dan routing. Protokol utama: IP, ICMP, ARP/RARP.
4. **Layer Network Interface & Hardware:** Menangani transmisi data fisik (frame). Contoh: Ethernet, IEEE 802.11 (WiFi), ATM.

#### Model Client-Server
* Server: Menunggu permintaan pada port terdaftar (well-known ports).
* Client: Mengirimkan permintaan secara aktif ke alamat IP dan port server.

#### Sejarah dan Evolusi Internet
Perkembangan teknologi jaringan berbasis packet-switching:
* **ARPANET (1960-70an):** Cikal bakal internet, dikembangkan oleh DARPA. Mengadopsi TCP/IP secara penuh pada 1983.
* **NSFNET:** Jaringan backbone berkecepatan tinggi yang menghubungkan superkomputer di Amerika.
* **Komersialisasi (1992):** Penghapusan pembatasan penggunaan internet untuk bisnis melalui Commercial Internet Exchange (CIX).
* **Internet2:** Proyek Next Generation Internet (NGI) untuk infrastruktur komunikasi tingkat lanjut dan QoS tinggi bagi komunitas riset.

#### Model Referensi OSI (7 Layers)
Standar ISO 7498 yang mendefinisikan komunikasi data dalam 7 lapisan:
1. Physical (Bit Stream).
2. Data Link (Framing/MAC).
3. Network (Routing/IP).
4. Transport (End-to-end).
5. Session (Dialog Control).
6. Presentation (Encryption/Formatting).
7. Application (User Interface). 

#### Standarisasi dan Tren Masa Depan
* **Standardisasi:** Dikelola oleh IAB (Internet Architecture Board). Standar baru diajukan melalui mekanisme RFC (Request for Comment).
* **Tren Masa Depan:**
  * Multimedia: Peningkatan bandwidth melalui teknologi DWDM untuk mendukung VoIP dan video conference.
  * Keamanan Komersial: Implementasi VPN (Virtual Private Network) untuk mengamankan jalur komunikasi publik.
  * Wireless Internet: Mobilitas tinggi dengan standar IEEE 802.11, Bluetooth, dan WiMAX.

    Protokol TCP/IP terbentuk dari 2 komponen yaitu Transmission Control Protocol dan Internet Protocol. Tujuan dari TCP/IP adalah untuk membangun suatu koneksi antar jaringan network dimana biasa disebut internetwork, atau internet yang me nyediakan pelayanan komunikasi antar jaringan yang memiliki bentuk fisik yang beragam.

#### Glosarium
* **Bridge:** Menghubungkan jaringan pada layer network interface dan meneruskan frame.
* **Client:** Sebuah komputer yang meminta satu layanan tertentu ke suatu server.
* **FTP:** Protokol yang digunakan untuk mentransfer file dalam jaringan.
* **Gateway:** Menghubungkan jaringan pada layer di atas router dan bridge.
* **IEEE:** Institute of Electrical and Electronics Engineers merupakan sebuah group dari organisasi insinyur yang mengatur standarisasi dalam bidang teknologi informasi.
* **Mbps:** Satuan kecepatan transfer pada jaringan.
* **Router:** Perangkat jaringan komputer yang berfungsi meneruskan suatu paket data dari jaringan yang satu ke jaringan yang lain.
* **Server:** Aplikasi yang memberikan pelayanan kepada user internet.
* **TELNET:** Terminal interaktif untuk mengakses suatu remote pada internet.
* **WWW:** World Wide Web adalah sebuah hypermedia yang menampilkan informasi dari hypertext.

#### Soal Formatif 1
   1. Contoh internet pada grup jaringan regional adalah ....

    Jawaban: D. jaringan antar kampus

    Alasan: Sesuai definisi pada modul, jaringan regional berfungsi menghubungkan area geografis seperti antar kampus. NSFNET dan EBONE adalah contoh Backbone (jaringan besar), sedangkan jaringan kampus adalah jaringan lokal.

   2. Contoh dari layer aplikasi adalah ....

    Jawaban: B. Telnet

    Alasan: Telnet adalah protokol pada layer tertinggi (Application) untuk akses remote. IP dan ICMP berada di layer Internetwork, sedangkan ATM berada di layer Network Interface.

   3. Layer pada Protokol TCP/IP yang merupakan perangkat keras pada jaringan adalah layer ....

    Jawaban: D. network interface

    Alasan: Layer Network Interface (dan Hardware) menangani transmisi fisik data melalui kabel, gelombang radio, atau fiber optic, serta interface fisik perangkat.

   4. ARP merupakan salah satu contoh layer ....

    Jawaban: C. internetwork

    Alasan: Address Resolution Protocol (ARP) bekerja pada layer Internetwork untuk memetakan alamat logis (IP) ke alamat fisik (MAC).

   5. Perangkat atau aplikasi yang memberikan pelayanan kepada user internet adalah ....

    Jawaban: B. server

    Alasan: Dalam arsitektur Client-Server, server adalah entitas yang secara pasif menunggu request dan memberikan layanan/sumber daya kepada client.

   6. Perangkat yang berfungsi untuk menghubungkan jaringan pada layer internetwork dan mengarahkan jalur paket data adalah ....

    Jawaban: A. router

    Alasan: Secara teknis, router bekerja pada layer 3 (Internetwork/Network) untuk melakukan routing paket data antar jaringan yang berbeda.

   7. Internet dapat digunakan pertama kali secara komersial pada tahun ....

    Jawaban: B. 1992

    Alasan: Berdasarkan sejarah pada modul, tahun 1992 ditandai dengan munculnya Acceptable Use Policy (AUP) yang mengizinkan internet digunakan untuk kepentingan komersial melalui CIX.

   8. OSI model (ISO 7498) dibagi menjadi ....

    Jawaban: D. 7 layer

    Alasan: Standar internasional ISO 7498 mendefinisikan Model Referensi OSI terdiri dari 7 lapisan (Physical hingga Application).

   9. Perangkat yang menghubungkan jaringan pada layer network interface dan meneruskan frame adalah ....

    Jawaban: C. CERFNet

    Alasan: (Berdasarkan konteks pilihan ganda yang tersedia pada gambar nomor 9) CERFNet adalah salah satu organisasi/jaringan yang membantu pembentukan Commercial Internet Exchange (CIX) untuk interkoneksi di tingkat fisik/interface.

   10. Perangkat yang menghubungkan jaringan pada layer network interface dan meneruskan frame adalah ....

    Jawaban: B. bridge

    Alasan: Secara teknis, perangkat yang bekerja khusus pada layer 2 (Network Interface/Data Link) untuk meneruskan frame (bukan paket) adalah Bridge atau Switch. Karena opsinya identik dengan nomor 6 namun menanyakan frame, maka Bridge adalah jawaban teknis yang tepat.
___


## Model 2: Model Referensi OSI dan Data Link
    Model Open System Interconnection (OSI) (ISO 7498) adalah standar referensi untuk menentukan bagaimana data mengalir antar komputer melalui tujuh lapisan fungsional.

#### Struktur Layer pada OSI
Secara arsitektural, OSI dibagi menjadi 2 kategori utama:
1. **Layer Atas(Layer 7, 6, 5):** Berorientasi pada pelayanan aplikasi dan format data pengguna.
2. **Layer Bawah (Layer 4, 3, 2, 1):** Berorientasi pada transmisi data dari ujung ke ujung (end-to-end).

#### Tabel Fungsi Layer OSI
| Nama Layer    | Fungsi                                            | Contoh Protokol/Format   |
| ------------- | ------------------------------------------------- | ------------------------ |
| 7. Aplikasi   | Pelayanan komunikasi antar aplikasi.              | HTTP, FTP, SMTP, Telnet  |
| 6. Presentasi | Definisi format data, enkripsi, dan kompresi.     | JPEG, ASCII, GIF, EBCDIC |
| 5. Sesi       | Manajemen percakapan (session) dan dialog.        | RPC, SQL, NFS, SCP       |
| 4. Transport  | Segmentasi, reliabilitas, dan flow control.       | TCP, UDP, SPX            |
| 3. Network    | Pengalamatan logis dan pemilihan jalur (routing). | IP, ICMP, IPX            |
| 2. Data Link  | Komunikasi interface fisik dan deteksi error.     | Ethernet, PPP, HDLC, ATM |
| 1. Physical   | Transmisi bit-data melalui media fisik.           | RJ-45, V.35, IEEE 802.3  |

#### Mekanisme Keandalan Data (Layer 4 & 2)
Untuk memastikan data sampai dengan integritas tinggi, digunakan beberapa logika kontrol:
1. **Three-way Handshake (Layer 4):** Proses sinkronisasi sebelum pengiriman data (*Synchronize -> Negotiate -> Acknowledge*).
2. **Flow Control:** Mekanisme *stop and go*, agar penerima tidak kewalahan dalam menerima segmen.
3. **Windowing:** Pengiriman beberapa segmen sekaligus sebelum membutuhkan konfirmasi(*Ack*).
4. **Error Recovery:** Pengiriman kembali segemen jika terjadi *corrupt* atau data hilang berdasarkan urutan.

#### Layer Data Link (Layer 2)
Berfokus pada pengiriman frame di dalam satu segmen jaringan fisik.
1. **Arbitration:** Penentuan waktu kirim menggunakan **CSMA/CD (*Carrier Sense Multiple Access/Collision Detection*)**.
2. **Adrressing:** Pengalamatan fisik menggunakan Mac Address (48-bit, 12 digit heksadesimal).
3. **Error Detection:** Menggunakan **FCS** (*Frame Check Sequence*) dan **CRC** (*Cyclic Redundancy Check*).
4. **Identifikasi Enkapsulasi:** Menentukan format header (seperti Header 802.2 untuk Ethernet).

#### Konsep Enkapsulasi Data
Data mengalami transformasi unit (PDU) di setiap layer selama proses transmisi:
1. Aplikasi membuat data asli.
2. Layer Transport menambahkan header, membentuk **Segment (L4PDU)**.
3. Layer Network menambahkan alamat IP, membentuk **Packet (L3PDU)**.
4. Layer Data Link menambahkan alamat MAC dan trailer, membentuk **Frame (L2PDU)**.
5. Layer Physical mengubahnya menjadi Bits untuk ditransmisikan.
   ![alt text](/asset/konsep-enkapsulasi-data.png)

#### Perbandingan Model OSI dan TCP/IP
Implementasi nyata di lapangan lebih banyak menggunakan model TCP/IP yang lebih ringkas:
1. Layer Aplikasi: Menggabungkan Layer 7, 6, dan 5 OSI.
2. Layer Transport: Sama dengan Layer 4 OSI (TCP/UDP).
3. Layer Internet: Sama dengan Layer 3 OSI (IP, ARP, ICMP).
4. Layer Network Interface: Menggabungkan Layer 2 dan 1 OSI.

#### Soal Formatif
   1. Layer yang difokuskan untuk pelayanan dari suatu aplikasi adalah layer ....

    Jawaban: D. 5, 6, dan 7

    Alasan: Sesuai struktur hierarki, layer 5 (Session), 6 (Presentation), dan 7 (Application) adalah kelompok "Upper Layers" yang berorientasi pada pelayanan aplikasi dan pengguna.

   2. Contoh dari Layer Transport adalah ....

    Jawaban: C. UDP dan SPX

    Alasan: UDP (User Datagram Protocol) dan SPX adalah protokol yang bekerja di Layer 4 untuk mengatur pengiriman data end-to-end. (TCP dan SQL salah karena SQL di Layer 5; JPEG di Layer 6).

   3. Apabila ada program komputer yang melakukan akses jaringan maka pada layer OSI tugas ini dilakukan oleh layer ....

    Jawaban: A. aplikasi

    Alasan: Layer 7 (Application) berfungsi sebagai antarmuka antara program aplikasi yang berjalan di komputer dengan layanan jaringan.

   4. Layer pada OSI yang bertugas untuk mengurutkan atau melakukan error-recovery pada saat mengurutkan data yang datang adalah layer ....

    Jawaban: D. transport

    Alasan: Layer 4 (Transport) memiliki fungsi krusial untuk segmentasi, pengurutan data (sequencing), dan pemulihan kesalahan (error recovery) untuk menjamin reliabilitas.

   5. RJ45 merupakan contoh dari layer ....

    Jawaban: C. physical

    Alasan: RJ45 adalah spesifikasi fisik konektor kabel. Segala sesuatu yang berkaitan dengan media transmisi fisik, kabel, dan konektor berada di Layer 1 (Physical).

   6. Layer yang bertugas untuk mengurusi format data yang dapat dipahami oleh berbagai macam media adalah layer ....

    Jawaban: B. presentasi

    Alasan: Layer 6 (Presentation) bertanggung jawab atas enkapsulasi format data (seperti ASCII, EBCDIC, JPEG) agar dapat dipahami oleh sistem yang berbeda.

   7. Data yang dikirim diubah dalam bentuk segmen. Hal ini terjadi pada layer ....

    Jawaban: A. transport

    Alasan: Unit data (PDU) pada Layer 4 disebut sebagai Segmen. Proses pemecahan data menjadi segmen ini disebut segmentasi.

   8. Langkah yang dilakukan ketika melaksanakan enkapsulasi data ada ....

    Jawaban: B. 5

    Alasan: Berdasarkan materi enkapsulasi, terdapat 5 langkah utama: 1. Membuat data, 2. Segmentasi (Transport), 3. Paketkan (Network), 4. Frame (Data Link), dan 5. Transmisi Bit (Physical).

   9. Perbedaan model referensi OSI dan TCP/IP salah satunya terdapat pada network interface yang setara pada OSI di layer ....

    Jawaban: A. physical dan data link

    Alasan: Layer "Network Interface" pada model TCP/IP mencakup fungsi pengalamatan fisik dan transmisi bit yang pada model OSI dipisahkan menjadi Layer 1 (Physical) dan Layer 2 (Data Link).

   10. Ukuran MAC atau Media Access Control yang ditanamkan pada pengalamatan perangkat jaringan adalah ....

    Jawaban: B. 48 bit

    Alasan: MAC Address terdiri dari 48 bit yang biasanya direpresentasikan dalam 12 digit heksadesimal.

___


## Modul 3: Perangkat jaringan 
### NETWORK INTERFACE
#### Local Area Network
**Local Area Network (LAN)** adalah jaringan komputer yang mencakup area lokal seperti rumah, kantor, atau gedung. Teknologi ini umumnya menggunakan standar **IEEE 802.3 Ethernet** atau Wi-Fi dengan kecepatan 10 hingga 1000 Mbps.

#### Perangkat Keras dan Teknologi LAN
##### Perangkat Jaringan Utama:
* **Hub/Repeater:** Bekerja pada Layer 1 (Physical). Bersifat _shared_ media di mana seluruh host berbagi bandwidth yang sama (contoh: 10 Mbps untuk semua).
* **Switch/Brigde:** Bekerja pada Layer 2 (Data Link). Memberikan bandwidth dedikasi per port (Switching Matrix), sehingga lebih efisien dan mengurangi *collision*.
* **Router:** Bekerja pada Layer 3 (Network). Digunakan untuk menghubungkan antar-LAN atau LAN ke WAN/Internet.
##### Format Penamaan Ethernet
Format yang digunakan adalah [kecepatan][baseband/broadband][media].
* Contoh **10Base-T:** Kecepatan 10 Mbps, teknologi Baseband, media Twisted Pair.

##### Klasifikasi Teknologi Ethernet
1. **Ethernet (10 Mbps)**
    * 10Base-5 (Thick Ethernet): Menggunakan kabel koaksial tebal, jarak maksimum 500m per segmen. Menggunakan konektor AUI dan vampire tap.
    * 10Base-2 (Thin Ethernet): Menggunakan kabel koaksial tipis (RG-58), jarak maksimum 185m. Menggunakan konektor BNC T-connector.
    * 10Base-T: Menggunakan kabel tembaga Twisted Pair dan Hub sebagai pusatnya.
    * 10Base-F: Menggunakan media Fiber Optic untuk jarak hingga 2000m.
2. **Fast Ethernet (100 Mbps)**
    * 100Base-TX: Full duplex menggunakan 2 pasang kabel Twisted Pair kategori 5.
    * 100Base-FX: Menggunakan 2 kabel fiber optic, jarak hingga 2000m.
3. **Gigabit Ethernet (1000 Mbps)**
    * 1000Base-SX/LX: Menggunakan fiber optic (Multimode/Singlemode) untuk jarak riset 550m hingga 5km.
    * 1000Base-T: Menggunakan 4 pasang kabel tembaga UTP kategori 5e atau 6.
4. **10 Gigabit Ethernet (10 Gbps)**
    * Teknologi terbaru yang mendukung jarak hingga 40km (10GBase-ER) menggunakan fiber optic single-mode.

##### Teknologi LAN Non-Ethernet
1. **Token Ring (IEEE 802.5):**
    * Dikembangkan oleh IBM. Menggunakan topologi ring secara logis namun fisik berbentuk star dengan MAU (Multistation Access Unit) sebagai pusatnya.
    * Data bergerak satu arah dan membutuhkan "Token" untuk dapat mengirim data.
2. **FDDI (Fiber Distribution Data Interface):**
    * Standar jaringan fiber optic berkecepatan 100 Mbps.
    * Menggunakan Dual Ring (dua jalur melingkar). Jika satu jalur putus, jalur lainnya akan melakukan loopback sehingga jaringan tetap berfungsi.

##### Tabel Perbedaan Operasional 
| Fitur      | Hub (Shared Media)            | Switch (Switch-Based)             |
| ---------- | ----------------------------- | --------------------------------- |
| Bandwidth  | Berbagi (Shared)              | Dedikasi per port                 |
| Layer OSI  | Layer 1 (Physical)            | Layer 2 (Data Link)               |
| Arsitektur | Satu jalur untuk semua        | Switching matrix (jalur simultan) |
| Efisiensi  | Rendah (banyak tabrakan data) | Tinggi (minimal tabrakan data)    |

#### Wide Area Network (WAN)
Wide Area Network (WAN) adalah jaringan komputer dengan cakupan daerah yang sangat luas, di mana internet merupakan contoh terbesar dari implementasi WAN.

##### Jenis-Jenis Koneksi WAN
Selain berdasarkan tipe pelayanan, koneksi WAN diklasifikasikan berdasarkan teknologi media dan infrastrukturnya:
1. **Berdasarkan Tipe Pelayanan (Service)**
    * Circuit Switching: (POTS, ISDN)
    * Packet Switching: (X.25, Frame Relay)
    * Cell Switching: (ATM)
    * Dedicated Digital: (T1, T3, E1, E3, SONET)
2. **Berdasarkan Teknologi Broadband & Jalur Telepon**
    * xDSL (Digital Subscriber Line): Teknologi broadband melalui jalur telepon tembaga. Kecepatan hingga 384 Kbps (pada standar awal).
    * Dial-up Modem: Teknologi lama menggunakan jalur telepon analog dengan kecepatan maksimal 56 Kbps.
    * Cable Modem: Menggunakan infrastruktur TV Kabel untuk transmisi data dengan kecepatan hingga 10 Mbps.
3. **Berdasarkan Teknologi Nirkabel (Wireless)**
    * Terrestrial Wireless: Menggunakan gelombang mikro (microwave) atau link laser dengan kecepatan < 5 Mbps.
    * Satellite Wireless: Koneksi via satelit, sering digunakan untuk lokasi terpencil, kecepatan < 5 Mbps.

##### Perangkat Jaringan WAN
* Router: Mengatur jalur paket data (Layer 3).
* WAN Switching: Switch khusus di sisi service provider.
* Modem: Melakukan modulasi (Digital ke Analog) dan demudolasi (Analog ke Digital).
* CSU/DSU (Channel Service Unit/Data Service Unit): Adaptor untuk jalur digital (T1/E1) guna mencocokkan format transmisi data.
* Communication Server: Menangani dial-in/dial-out pengguna jarak jauh.

##### Istilah Terminal Peralatan
Dalam koneksi WAN, terdapat pembagian tanggung jawab perangkat:
* DTE (Data Terminal Equipment): Perangkat di sisi pelanggan (User) yang menjadi ujung link WAN.
* DCE (Data Circuit-termination Equipment): Perangkat di sisi penyedia layanan (Provider) yang menyediakan sinyal clocking dan interface komunikasi.

##### Protokol dan Teknologi Enkapsulasi WAN
1. **Point-to-Point Protocol (PPP):**
Protokol standar untuk koneksi serial langsung (point-to-point). Memiliki 3 komponen inti:
    * Enkapsulasi datagram melalui link serial.
    * LCP (Link Control Protocol): Untuk pembentukan, konfigurasi, dan pengujian koneksi.
    * NCP (Network Control Protocol): Untuk menghubungkan protokol layer network yang berbeda.
    * Fase PPP: Pembentukan link -> Pengukuran kualitas -> Autentikasi -> Negosiasi protokol -> Pemutusan link.
2. **X.25:**
Protokol lama untuk packet-switching yang mendefinisikan hubungan host dengan node switching. Terdiri dari 3 layer: Physical (X.21), Link (LAPB), dan Packet.
3. **Frame Relay:**
Pengembangan dari X.25 yang lebih efisien karena menghilangkan kontrol aliran (flow control) dan error control pada setiap hop (dilakukan di layer atasnya). Bekerja pada koneksi logis di Layer 2.
4. **ATM (Asynchronous Transfer Mode):**
Teknologi seluler berkecepatan tinggi (25.6 Mbps - 622.08 Mbps) yang menggunakan koneksi logis bernama cell untuk meminimalkan error dan memaksimalkan efisiensi jalur fisik tunggal.

### MEDIA TRANSMISI
Media transmisi dibagi menjadi dua kategori utama berdasarkan bentuk fisiknya:

#### Media Terarah (Guided Transmission Data)
Media yang menyalurkan gelombang elektromagnetik melalui jalur fisik yang nyata (kabel).
1. **Kabel Coaxial**
Kabel tembaga yang terdiri dari inti pusat sebagai konduktor, isolator, anyaman kabel serabut (shield), dan pelindung plastik luar.
    * Konektor: Menggunakan BNC (Bayonet Nut Connector).
    * Varian: 10Base-5 (Thick) dan 10Base-2 (Thin).
2. **Kabel Twisted Pair**
Kabel berpasangan yang dipilin untuk mengurangi efek gangguan elektromagnetik (crosstalk).
    * Konektor: RJ-11 (telepon) atau RJ-45 (LAN).
    * Tipe Pelindung:
        * UTP (Unshielded Twisted Pair): Tanpa pelindung tambahan.
        * STP (Shielded Twisted Pair): Memiliki pelindung pada setiap pasangan kabel.
        * S/STP (Screened Shielded Twisted Pair): Pelindung ganda pada pasangan dan seluruh kabel.
        * FTP (Foiled Twisted Pair): Menggunakan pelindung aluminium foil.
    * Pemasangan: Mengikuti standar TIA/EIA-568-A/B (Straight-Through atau Cross-Over).
3. **Fiber Optic (FO)**
Mengirimkan data menggunakan berkas cahaya melalui serat kaca. Tidak terpengaruh gangguan listrik dan memiliki bandwidth sangat besar.
    * Komponen: Core (kaca), Cladding (kaca pelapis), dan Jacket (plastik).
    * Tipe:
        * Multimode: Core besar (50-100 mikron), banyak sumber cahaya.
        * Single-mode: Core sangat kecil (2-8 mikron), satu sumber cahaya laser, jarak sangat jauh.
    * Konektor: FC, FDDI, LC, SC, ST, dll.

#### Media Tidak Terarah (Unguided Transmission Data)
Media yang mentransmisikan sinyal elektromagnetik melalui udara (nirkabel/wireless).
1. **Transmisi Radio**
Menggunakan spektrum frekuensi radio untuk komunikasi.
    * Cara Transmisi: Pancaran langsung (Ground wave) atau pantulan atmosfer (Ionosphere).
    * ISM Band: Frekuensi bebas yang digunakan untuk Wireless-LAN (900 MHz, 2.4 GHz, dan 5.8 GHz.
    * Perangkat: Antena, Signal Splitters, Amplifiers, dan PoE (Power over Ethernet).
2. **Komunikasi Satelit**
Digunakan untuk komunikasi jarak jauh antar benua. Satelit berfungsi sebagai stasiun pengulang (repeater) di luar angkasa.
    * Klasifikasi Berdasarkan Orbit:
        * GEO (Geostationary): Ketinggian 35.000 km, latensi tinggi (270ms), butuh 3 satelit untuk cover bumi.
        * MEO (Medium-Earth Orbit): Ketinggian 5.000 - 15.000 km.
        * LEO (Low-Earth Orbit): Ketinggian rendah, latensi sangat rendah (1-7ms).
    * Frekuensi Kerja: Band L, S, C, Ku, dan Ka.
    * VSAT (Very Small Aperture Terminal): Stasiun bumi kecil dengan antena parabola (3-10m) untuk menghubungkan site terpencil melalui satelit.

##### Daftar Kategori Kabel
| Kategori | Data Rate Maksimum   | Penggunaan                      |
| -------- | -------------------- | ------------------------------- |
| CAT 1    | 1 Mbps (1 MHz)       | Analog voice, ISDN              |
| CAT 2    | 4 Mbps               | Token Ring                      |
| CAT 3    | 16 Mbps              | Voice dan data 10BaseT          |
| CAT 4    | 20 Mbps              | 16 Mbps Token Ring              |
| CAT 5    | 100 Mbps             | ATM                             |
|          | 1000 Mbps (4 pasang) |                                 |
| CAT 5E   | 1000 Mbps            | Ethernet                        |
| CAT 6    | Mencapai 400 MHz     | Superfast broadband             |
| CAT 6E   | Mencapai 500 MHz     | 10GBaseT                        |
| CAT 7    | Mencapai 1.2 GHz     | Full Motion Video Teleradiology |

#### Soal Formatif
Analisis Jawaban Tugas Jaringan & Media Transmisi
   1. Berikut ini yang termasuk ke dalam area WAN adalah ....

    Jawaban: D. negara

    Alasan: WAN (Wide Area Network) mencakup area geografis yang sangat luas, melintasi batas kota, wilayah, hingga antar negara. Kampus, gedung, dan kota (MAN) memiliki skala yang lebih kecil.

   2. Contoh dari perangkat Layer Transport adalah ....

    Jawaban: D. router

    Alasan: Berdasarkan gambar simbol yang ditampilkan (ikon bulat dengan empat panah mengarah ke luar), itu adalah simbol Router. Meskipun router secara teknis bekerja di Layer 3 (Network), dalam konteks pilihan ganda perangkat yang tersedia, router adalah perangkat yang paling kompleks yang mengelola aliran data antar jaringan.

   3. Pada teknologi Ethernet digunakan format [ x ][ y ][ z ], di mana x merupakan simbol dari ....

    Jawaban: A. kecepatan

    Alasan: Dalam penamaan standar Ethernet (contoh: 10Base-T), angka di depan (x) menunjukkan kecepatan transmisi dalam satuan Mbps.

   4. Yang termasuk dalam media tidak terarah adalah ....

    Jawaban: A. transmisi radio

    Alasan: Media tidak terarah (Unguided) menggunakan udara sebagai media transmisi tanpa kabel fisik. Coaxial, twisted pair, dan fiber adalah media terarah (Guided).

   5. Gambar berikut merupakan jenis kabel ....

    Jawaban: B. coaxial

    Alasan: Gambar menunjukkan struktur kabel dengan inti tembaga di tengah, isolator, lapisan serabut pelindung (braided shield), dan jaket plastik. Ini adalah karakteristik utama kabel Coaxial.

   6. Urutan pemasangan kabel jenis TIA/EIA-568-B adalah ....

    Jawaban: A. putih orange, orange, putih hijau, biru, putih biru, hijau, putih coklat, coklat

    Alasan: Ini adalah urutan standar internasional untuk pengkabelan T568B yang paling umum digunakan pada jaringan LAN saat ini.

   7. Jenis konektor berikut adalah ....

    Jawaban: B. MT Array

    Alasan: Gambar menampilkan konektor fiber optic berbentuk pipih dan lebar yang mampu menampung banyak serat (array) dalam satu antarmuka, dikenal sebagai MT Array.

   8. Salah satu ciri dari kabel Straight-Through adalah ....

    Jawaban: A. kedua ujung mempunyai aturan yang sama

    Alasan: Kabel Straight-Through menggunakan standar yang sama di kedua ujungnya (misal: T568B di kedua ujung) untuk menghubungkan perangkat yang berbeda level (misal: PC ke Switch).

   9. Gambar berikut merupakan aturan pemasangan kabel berdasarkan ....

    Jawaban: A. TIA/EIA-568-B

    Alasan: Jika dilihat dari urutan warna pada gambar (pin 1 adalah putih-orange), itu menunjukkan standar B.

   10. Salah satu ciri dari kabel kategori CAT 3 adalah ....

    Jawaban: C. 16 Mbps

    Alasan: Secara teknis, kabel UTP Category 3 didesain untuk menangani data dengan frekuensi hingga 16 MHz dan kecepatan data hingga 16 Mbps, sering digunakan pada jaringan Token Ring lama.