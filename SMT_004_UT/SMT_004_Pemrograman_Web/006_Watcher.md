# MODUL 06: WATCHER

## Bagian 01: Watcher

### Pengertian dan Penggunaan Watcher

* **Pengertian Watcher:** Sebuah properti khusus di Vue.js yang berfungsi untuk memantau (*watch*) perubahan pada suatu data reaktif (baik variabel di `data` maupun hasil dari `computed property`). Ketika data yang dipantau tersebut mengalami perubahan nilai, Vue akan secara otomatis menjalankan fungsi (*callback*) yang ada di dalam *watcher* tersebut.
* **Perbedaan Utama dengan Computed Property:**
* *Computed Property* digunakan untuk **menghitung atau menurunkan nilai baru** secara reaktif dan wajib mengembalikan nilai (`return`).
* *Watcher* digunakan untuk **menjalankan efek samping (*side effects*)** atau tugas asinkron sebagai respons atas perubahan data—seperti melakukan permintaan data ke server (*API request*), mengubah timer, atau melakukan validasi bertahap yang tidak membutuhkan pengembalian nilai (`return`).


* **Contoh Implementasi Watcher:**
```javascript
export default {
  data() {
    return {
      searchQuery: '',
      status: 'Menunggu input...'
    }
  },
  watch: {
    // Memantau perubahan pada variabel searchQuery
    searchQuery(newValue, oldValue) {
      this.status = "Sedang mengetik...";
      // Simulasi aksi asinkron (misal: pencarian setelah user berhenti mengetik)
      setTimeout(() => {
        this.status = "Pencarian untuk: " + newValue;
      }, 500);
    }
  }
}

```
___
## Penguatan Konsep 

### Pembuatan Data pada Data Property (`data()`)

* Tempat mendeklarasikan seluruh variabel reaktif dalam komponen Vue.
* Vue secara otomatis memantau (*track*) setiap properti di dalam fungsi `data()` ini sehingga perubahan sekecil apa pun akan langsung memperbarui tampilan antarmuka secara reaktif.
___
### Mustaches `{{ }}`, `v-text`, dan `v-html`

* **Mustaches (`{{ }}`):** Interpolasi teks dasar untuk menyisipkan nilai data reaktif ke dalam teks HTML.
* **Direktif `v-text`:** Mengganti seluruh isi teks dari suatu elemen secara satu arah (setara dengan properti `textContent` di JavaScript murni).
* **Direktif `v-html`:** Merender string mentah yang mengandung tag-tag HTML agar diterjemahkan sebagai elemen HTML yang sesungguhnya di browser.
___
### Konsep Data Binding (One-Way & Two-Way)

* **One-Way Data Binding:** Aliran data bergerak satu arah dari komponen JavaScript ke tampilan (*template*). Diimplementasikan menggunakan interpolasi `{{ }}` atau direktif **`v-bind`**.
* **Two-Way Data Binding:** Aliran data bersifat dua arah; perubahan data di script mengubah tampilan, dan input dari pengguna di tampilan secara otomatis memperbarui variabel reaktif di script. Diimplementasikan menggunakan direktif **`v-model`**.
___
### Penggunaan `v-bind` dan `v-model`

* **`v-bind` (Shorthand `:`)**: Menghubungkan data dinamis ke atribut HTML secara satu arah (contoh: `:src`, `:href`, `:class`, `:style`).
* **`v-model`**: Menyinkronkan nilai elemen *form input* (seperti `text`, `password`, `radio`, `checkbox`, `date`, `select`, dan `textarea`) secara dua arah dengan data reaktif.
___
### Penggunaan Setter dan Getter

* Secara default, properti di Vue menggunakan *getter* untuk membaca nilai dan *setter* untuk mengubah nilai.
* Pada *computed property*, Anda dapat mendefinisikan *getter* dan *setter* secara manual apabila computed property tersebut ingin dibuat agar bisa diubah nilainya (*writable computed property*).
___
### Computed Property vs. Methods Property

* **Computed Property:** Memproses dan menghitung data secara efisien karena dilengkapi dengan sistem **caching**. Hanya akan menghitung ulang jika variabel rujukannya berubah. Dipanggil layaknya variabel biasa (tanpa tanda kurung `()`).
* **Methods Property:** Kumpulan fungsi instruksi aksi atau *event handler*. **Tidak memiliki cache** dan akan selalu dieksekusi setiap kali dipanggil atau dirender ulang. Dipanggil menggunakan tanda kurung `()`.
___
### Logika Pembuatan Web Modern

* Menggabungkan seluruh fondasi di atas untuk merancang aplikasi web yang interaktif, modular, reaktif, dan terstruktur dengan baik (memisahkan struktur HTML/Template, logika JavaScript/Reactive State, serta gaya CSS).
___