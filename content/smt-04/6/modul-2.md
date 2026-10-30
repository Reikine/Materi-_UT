# Modul 02: Perancangan Sistem

## Bagian 01: Mendefinisikan Proyek Sistem

### Mendefinisikan Kembali Ruang Lingkup dan Sasaran Proyek

Sebelum proyek melangkah ke fase analisis yang lebih dalam, ruang lingkup (*scope*) dan sasaran (*objective*) harus divalidasi ulang secara ketat guna menghindari *scope creep* (pembengkakan ruang lingkup di tengah jalan).

* **Staf Perencana Sistem vs. Tim Analis:** Staf perencana biasanya melihat proyek dari kacamata portofolio strategis perusahaan (apakah proyek ini sejalan dengan visi bisnis?). Sementara itu, tim analis melihat proyek dari kacamata operasional dan teknis (bagaimana sistem ini diwujudkan secara nyata?).
* **Diskusi dengan Manajemen:** Menyelaraskan ekspektasi antara apa yang diinginkan oleh manajemen (*business goals*) dengan sumber daya waktu, biaya, serta batasan teknologi yang tersedia.
___
### Melakukan Studi Kelayakan

Studi kelayakan (*feasibility study*) adalah evaluasi awal untuk menilai apakah sebuah ide proyek layak untuk diteruskan menjadi investasi nyata. Proses ini berakar pada **penelitian pendahuluan (*preliminary investigation*)** yang memiliki 3 tujuan utama:

1. **Memahami Operasi Sistem Lama:** Menelusuri dokumen arsip, membaca *flowchart* manual yang ada, dan meninjau deskripsi jabatan (*job description*) untuk melihat bagaimana data mengalir saat ini.
2. **Menentukan Kebutuhan Pengguna secara Garis Besar:** Mengidentifikasi kebutuhan tingkat tinggi (*high-level requirements*) dari para *stakeholder* utama.
3. **Menentukan Permasalahan Sistem Lama:** Menemukan *bottleneck*, kesalahan berulang, atau inefisiensi yang mendasari perlunya pembaruan sistem.
___
### Menilai Kelayakan Proyek Sistem (3 Bidang Utama)

Evaluasi kelayakan harus diuji dari tiga dimensi utama:

1\. **Kelayakan Teknis (*Technical Feasibility*)**
* *Keakraban Aplikasi & Teknologi:* Apakah tim pengembang sudah terbiasa dengan bahasa pemograman, *framework*, atau basis data yang akan digunakan? Jika sepenuhnya baru, risiko kegagalan melonjak.
* *Ukuran Proyek:* Skala proyek (jumlah modul, pengguna, dan volume data) dibandingkan dengan kapasitas tim.
* *Kompatibilitas Infrastruktur:* Apakah teknologi baru ini bisa berjalan selaras dengan perangkat keras, jaringan, dan sistem operasi yang sudah ada di perusahaan?


2\. **Kelayakan Ekonomi (*Economic Feasibility*)**
* *Analisis Arus Kas & Finansial:* Menggunakan instrumen finansial untuk mengukur keuntungan investasi:
    * **ROI (Return on Investment):** Mengukur persentase keuntungan bersih terhadap total biaya investasi.
    * **BEP (Break-Even Point):** Menentukan titik waktu di mana total manfaat kumulatif mulai menutupi total biaya pengeluaran.
    * **PV (Present Value) & NPV (Net Present Value):** Menghitung nilai uang saat ini dari arus kas masa depan dengan memperhitungkan faktor inflasi atau tingkat diskonto (*discount rate*).

* *Identifikasi Biaya & Manfaat:*
    * **Biaya:** Biaya pengembangan (*one-time cost* seperti lisensi, perangkat keras, jasa konsultan) vs. biaya operasional (*recurring cost* seperti pemeliharaan, langganan server).
    * **Manfaat:** Manfaat Nyata (*Tangible Benefits* - dapat diukur dengan uang secara langsung, contoh: pengurangan biaya cetak kertas sebesar 40%) vs. Manfaat Tidak Nyata (*Intangible Benefits* - sulit dikuantifikasi secara moneter langsung, contoh: peningkatan kepuasan pelanggan atau citra merek).




3\. **Kelayakan Organisasi (*Organizational Feasibility*)**
* Menganalisis dampak sistem terhadap struktur sosial dan politik di dalam perusahaan. Melibatkan pemetaan pemangku kepentingan:
    * *Champion:* Pihak eksekutif yang menjadi sponsor utama dan pelindung proyek.
    * *Manajemen Organisasi:* Pimpinan unit kerja yang harus memastikan adopsi sistem oleh stafnya.
    * *Pengguna Sistem (End Users):* Pihak yang berinteraksi langsung dengan sistem; resistensi mereka terhadap perubahan adalah faktor kegagalan nomor satu.
___

## Bagian 02: Membuat Rencana Proyek

### Opsi-Opsi Metodologi Pengembangan Sistem

Pemilihan kerangka kerja (*framework*) pengerjaan sangat menentukan ritme dan ketahanan proyek:

1\. **Metodologi Berbasis Waterfall (Linear & Sekuensial):**
* *Waterfall Klasik:* Pengerjaan mengalir ke bawah dari fase analisis, desain, kode, hingga pengujian. Cocok untuk proyek yang persyaratannya sudah sangat kaku dan tidak boleh berubah.
* *Model Parallel:* Memecah desain sistem menjadi beberapa subsistem yang dikerjakan secara paralel untuk mempercepat waktu.
* *V-Model (Validation & Verification Model):* Menekankan hubungan erat antara fase pengembangan dengan fase pengujian (setiap tahap desain memiliki rencana pengujian masing-masing).

2\. **Rapid Application Development (RAD):**
* *Iterative Development:* Mengembangkan sistem secara bertahap dalam siklus pendek.
* *System Prototyping:* Membuat purwarupa (*prototype*) interaktif secara cepat agar pengguna bisa langsung memberikan umpan balik visual.
* *Throwaway Prototyping:* Membuat purwarupa cepat hanya untuk menguji kelayakan konsep, lalu membuangnya saat membangun sistem produksi yang sebenarnya.

3\. **Agile Development:**
* *Extreme Programming (XP):* Fokus pada kualitas teknis tinggi, *pair programming*, dan pengujian otomatis (*TDD*).
* *Scrum:* Menggunakan *Sprint* (biasanya 2-4 minggu), *Product Backlog*, serta *Daily Standup Meeting* untuk fleksibilitas tinggi.
* *Dynamic Systems Development Method (DSDM):* Kerangka kerja tangguh berbasis kerangka waktu (*timeboxing*).
___
### Memilih Metodologi Pengembangan yang Tepat

Dalam menentukan metodologi, seorang Manajer Proyek harus mengevaluasi **6 kriteria utama**:

1. **Kejelasan Kebutuhan (*Requirement Clarity*):** Apakah spesifikasi sudah pasti di awal atau masih dinamis?
2. **Keakraban Teknologi (*Technology Familiarity*):** Apakah tumpukan teknologi (*tech stack*) sudah dikuasai tim?
3. **Kompleksitas Proyek (*Complexity*):** Seberapa rumit logika bisnis dan integrasi datanya?
4. **Keandalan (*Reliability*):** Apakah ini sistem kritis yang tidak boleh *error* (misal: sistem perbankan/militer)?
5. **Kerangka Waktu (*Time Frame*):** Seberapa mendesak sistem harus dirilis ke pasar?
6. **Visibilitas Jadwal (*Schedule Visibility*):** Seberapa sering manajemen menuntut laporan progres yang kasat mata?
___
### Memperkirakan Kerangka Waktu Proyek**

Berdasarkan standar industri rekayasa perangkat lunak, distribusi waktu pengerjaan siklus proyek umumnya mengikuti persentase empiris berikut:

* **Perencanaan & Kelayakan (Planning):** $\approx 15\%$ dari total waktu proyek.
* **Analisis Sistem (Analysis):** $\approx 20\%$ dari total waktu proyek.
* **Perancangan/Desain (Design):** $\approx 35\%$ dari total waktu proyek (fase paling menyita waktu pemikiran arsitektural).
* **Implementasi & Pengujian (Implementation):** $\approx 30\%$ dari total waktu proyek.
* *Rumus Kalkulasi:* Jika total estimasi *effort* proyek adalah 1.000 jam kerja, maka alokasi waktu per fase dapat dihitung langsung menggunakan proporsi persentase di atas untuk menjaga keseimbangan sumber daya.
___
### **D. Mengembangkan Rencana Kerja**

1\. **Work Breakdown Structure (WBS):**
* Dekomposisi tugas secara hierarkis (*top-down*). Proyek besar dipecah menjadi fase $\rightarrow$ kegiatan $\rightarrow$ tugas (*tasks*) $\rightarrow$ sub-tugas yang dapat dikerjakan oleh individu dalam hitungan hari.

2\. **Rencana Kerja Proyek (*Project Work Plan* / Jadwal Koordinasi):**
* Mengatur durasi waktu pengerjaan, ketergantungan antar-tugas (*dependencies* - tugas mana yang harus selesai dulu sebelum tugas lain bisa dimulai), serta penanggung jawab (*resource assignment*) menggunakan diagram seperti Bagan Gantt (*Gantt Chart*) atau *Network Diagram* (CPM/PERT).
___
