# Modul 06: Visualisasi Data Interaktif

## Kegiatan Belajar 1: Konsep Data Interaktif

### Pengantar dan Proses Visualisasi Data

Visualisasi data merupakan alat dan sarana komunikasi untuk membantu pemahaman data yang kompleks dengan memanfaatkan sistem indra visual manusia agar data menjadi lebih hidup dan mudah dimengerti. Alur proses visualisasi data meliputi tahapan berurutan berikut:

1. **Acquire:** Pengambilan data mentah dari berbagai sumber, baik basis data lokal maupun sumber eksternal (media sosial, media daring, *web crawling*, dll.).
2. **Parse:** Pemberian dan pencermatan struktur data yang tepat dan sesuai untuk kebutuhan pengolahan.
3. **Filter:** Pemilahan data amatan yang relevan dengan konteks kegiatan atau analisis yang akan dijalankan.
4. **Mine:** Penentuan dan penerapan metode statistika atau *data mining* yang tepat (termasuk analisis deskriptif).
5. **Represent:** Pengubahan atau penempatan data dan label teks ke dalam format grafik dasar.
6. **Refine:** Pengayaan grafik dasar menggunakan *visual encoding* dan proporsi variasi yang memberi penekanan pada aspek kunci (bersifat pilihan).
7. **Interact:** Penambahan fitur interaktivitas dinamis agar grafik dapat berinteraksi dengan pengguna (bersifat pilihan).

> **Ilustrasi Alur Proses Visualisasi Data:**
> ```text
> [Acquire] ──► [Parse] ──► [Filter] ──► [Mine] ──► [Represent] ──► [Refine] ──► [Interact]
>   (Data)      (Struktur)   (Relevan)   (Analisis)   (Grafik Dasar)  (Enkripsi)   (Dinamis)
> 
> ```
> 
> 
___

### Lingkungan Perangkat Lunak dan Ekosistem R

* **Sistem Plotting Utama di R:** Terdapat tiga sistem utama pembuatan grafik di R, yaitu *The Base Plotting System*, *The Lattice System*, dan *The ggplot2 System*. Pembuatan grafik interaktif pada sistem tersebut umumnya memerlukan penulisan kode yang cukup rumit.
* **Paket Shiny (RStudio):** Paket *open-source* yang menggabungkan kemampuan komputasi statistika R dengan antarmuka web modern tanpa mengharuskan pengguna menguasai bahasa HTML, CSS, atau JavaScript secara mendalam.
___

### Komponen Utama Aplikasi Shiny

Aplikasi Shiny dibangun atas 3 komponen utama:

1. **User Interface (`ui`):** Fungsi yang mendefinisikan tampilan antarmuka web, memuat seluruh elemen masukan (*input*) dari pengguna dan luaran (*output*) yang disajikan.
2. **Server (`server`):** Fungsi yang memuat seluruh instruksi logika pemrosesan data, pemodelan, serta komputasi di sisi belakang (*backend*).
3. **ShinyApp (`shinyApp`):** Fungsi eksekutor yang memanggil serta menjalankan integrasi antara `ui` dan `server`.

> **Ilustrasi Arsitektur Komponen Shiny:**
> ```text
> ┌──────────────────────────────────────────────┐
> │                ui (Frontend)                 │
> │  - Menerima input dari pengguna              │
> │  - Menampilkan output (grafik, teks, tabel)  │
> └──────────────────────┬───────────────────────┘
>                        │ (Reaktivitas: Komunikasi Data)
> ┌──────────────────────▼───────────────────────┐
> │               server (Backend)               │
> │  - Logika pemrosesan & komputasi data        │
> │  - Fungsi reaktif & rendering output         │
> └──────────────────────────────────────────────┘
>                        ▲
>                        │ Diinisiasi oleh shinyApp()
> 
> ```
> 
> 
___

### Mekanisme Relasi Input dan Output pada Shiny

Hubungan dinamis antara antarmuka dan komputasi diatur melalui skema interaksi obyek:

**Obyek Input (`input$id`):** Menangkap nilai yang dimasukkan atau diubah oleh pengguna melalui panel interaktif antarmuka (misalnya melalui *slider*, tombol radio, atau kolom teks).

**Obyek Output (`output$id`):** Menampung hasil komputasi dan visualisasi dari sisi server untuk ditampilkan kembali pada bidang tampilan antarmuka.

**Fungsi Render:** Menjembatani obyek komputasi pada server agar dapat dirender ke dalam bentuk elemen antarmuka yang bersesuaian (misalnya `renderPlot()` untuk grafik atau `renderText()` untuk luaran teks).
___

## Kegiatan Belajar 2: Visualisasi Data Interaktif dan Dashboard

### Konsep Reaktivitas (*Reactivity*)

**Fungsi Reaktif (`reactive()`):** Digunakan untuk mengoptimalkan efisiensi komputasi di sisi server.

**Prinsip Kerja:** Membungkus ekspresi data atau perhitungan agar pembaruan hanya dijalankan pada bagian input yang nilainya berubah. Hal ini mencegah terjadinya eksekusi ulang atau penarikan data acak baru secara menyeluruh ketika pengguna hanya mengubah atribut visual (seperti warna) tanpa mengubah parameter data dasarnya.
___

### Klasterisasi Interaktif (*Interactive Clustering*)

Penerapan visualisasi interaktif pada eksplorasi kelompok data tanpa target luaran awal (*unsupervised learning*):

**Konsep Klasterisasi:** Proses pengelompokan data amatan ke dalam sub-kelompok (*cluster*) yang memiliki kemiripan nilai (homogen di dalam kelompok) dan meminimalkan kemiripan antarkelompok. Berbeda dengan klasifikasi, klasterisasi tidak memiliki variabel acuan/target.

**Algoritma K-Means:** Mempartisi data ke dalam sejumlah $k$ kelompok yang ditentukan oleh pengguna.

**Interaktivitas pada Model Klaster:** Pengguna dapat menentukan pasangan variabel koordinat secara fleksibel serta menetapkan nilai $k$ kelompok secara langsung melalui elemen antarmuka.
___

### Konsep Dashboard (Dasbor Data)

**Definisi:** Tampilan antarmuka tunggal (*single-page user interface*) yang memuat dua atau lebih elemen visual secara bersamaan untuk menyajikan ringkasan pengukuran kinerja atau analisis statistika eksploratif.

**Keunggulan:** Memanfaatkan kepekaan visual dan persepsi warna otak manusia untuk memudahkan pembandingan beberapa sudut pandang data sekaligus.

**Penerapan Komparatif:** Dasbor memungkinkan perbandingan langsung antara hasil pengelompokan model algoritma (seperti klasterisasi) berdampingan dengan sebaran data asli atau variabel pembanding lainnya dalam satu layar.
___