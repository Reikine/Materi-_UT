# Modul 05: Data Binding dan Pengolahannya

## Bagian 01: Data Binding

### Pengertian & Konsep Data Binding

* **Pengertian Data Binding:** Mekanisme otomatis yang menghubungkan data di dalam logika komponen JavaScript (*script*) dengan elemen tampilan HTML (*template*).
* **One-Way Data Binding (Satu Arah):**
* Aliran data bergerak satu arah dari JavaScript menuju tampilan HTML.
* Jika nilai variabel berubah, tampilan HTML langsung diperbarui. Namun, perubahan pada elemen tampilan tidak mengubah variabel di JavaScript.
* *Implementasi:* Menggunakan direktif **`v-bind`** (shorthand: `:`).


* **Two-Way Data Binding (Dua Arah):**
* Aliran data bergerak dua arah antara JavaScript dan tampilan HTML.
* Perubahan pada logika mengubah tampilan, dan interaksi pengguna di formulir (*input*) langsung memperbarui data variabel di JavaScript secara otomatis.
* *Implementasi:* Menggunakan direktif **`v-model`**.
* *Prinsip Dasar:* `v-model` merupakan *syntactic sugar* dari gabungan `:value="data"` dan `@input="data = $event.target.value"`.



---

### Directive `v-bind` (One-Way Data Binding)

Digunakan untuk mengikat nilai variabel ke **atribut** HTML secara dinamis.

* **Shorthand Atribut Gambar & Tautan:**
```html
<!-- Mengikat atribut src dan href -->
<img :src="imageSrc" alt="Gambar Dinamis">
<a :href="profileUrl">Kunjungi Profil</a>

```


* **Binding Class Dinamis:**
```html
<!-- Mengaktifkan kelas CSS berdasarkan kondisi boolean -->
<div :class="{ active: isActive, 'text-danger': hasError }">Kotak Status</div>

```


* **Binding Inline Style:**
```html
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }">Teks Dinamis</div>

```


* **Binding Tooltip (`title`):**
```html
<span :title="tooltipMessage">Arahkan kursor ke sini</span>

```



---

### Directive `v-model` & Modifiers (Two-Way Data Binding)

#### 1. Penerapan pada Elemen Input:

* **Text & Password:** Menyinkronkan string teks secara *real-time*.
```html
<input type="text" v-model="username" placeholder="Username">
<input type="password" v-model="password" placeholder="Password">

```


* **Radio Button:** Menyimpan nilai tunggal dari opsi yang dipilih.
```html
<label><input type="radio" value="Pria" v-model="gender"> Pria</label>
<label><input type="radio" value="Wanita" v-model="gender"> Wanita</label>

```


* **Checkbox:** Menyimpan nilai *boolean* (jika tunggal) atau *array* (jika pilihan ganda).
```html
<label><input type="checkbox" value="Coding" v-model="hobbies"> Coding</label>
<label><input type="checkbox" value="Gaming" v-model="hobbies"> Gaming</label>

```


* **Date, Range, Select, & Textarea:**
```html
<input type="date" v-model="selectedDate">
<input type="range" min="0" max="100" v-model="volumeLevel">
<select v-model="selectedCity">
  <option disabled value="">Pilih Kota</option>
  <option>Jakarta</option>
  <option>Semarang</option>
</select>
<textarea v-model="userBio"></textarea>

```



#### 2. Modifiers pada `v-model` (Fitur Tambahan Penting):

* `.lazy`: Memperbarui data hanya setelah pengguna menekan Enter atau melepas fokus input (`change` event).
```html
<input type="text" v-model.lazy="username">

```


* `.number`: Mengonversi nilai input teks secara otomatis menjadi tipe data angka/number.
```html
<input type="number" v-model.number="age">

```


* `.trim`: Otomatis memotong spasi di awal dan akhir teks.
```html
<input type="text" v-model.trim="email">

```



---

## Bagian 02: Computed Properties (Pengolahan Data Berbasis Dependensi)

### Konsep & Fitur Caching

* **Pengertian:** Properti terhitung yang digunakan untuk mengolah, menyaring, atau mentransformasi data reaktif dan mengembalikan nilai hasil komputasi baru.
* **Fitur Caching (Keunggulan Utama):** *Computed property* menyimpan hasil komputasinya di memori *cache*. Fungsinya **hanya akan dieksekusi ulang jika data reaktif yang menjadi rujukannya (dependensinya) mengalami perubahan**. Jika data acuan tidak berubah, Vue langsung menyajikan hasil dari *cache* tanpa kalkulasi ulang.
* **Sifat Default:** Secara default bersifat *read-only* (hanya-baca).

### Contoh Implementasi (Composition API vs Options API)

#### Standar Vue 3 Modern (Composition API):

```html
<script setup>
import { ref, computed } from 'vue'

const inputText = ref('')
const passwordInput = ref('')

// Computed Property
const formattedText = computed(() => inputText.value.trim().toUpperCase())
const isPasswordValid = computed(() => passwordInput.value.length >= 8)
</script>

```

#### Standar Classic (Options API):

```javascript
computed: {
    formattedText() {
        return this.inputText.trim().toUpperCase();
    },
    isPasswordValid() {
        return this.passwordInput.length >= 8;
    },
    userAge() {
        const birthYear = new Date(this.selectedDate).getFullYear();
        const currentYear = new Date().getFullYear();
        return currentYear - birthYear;
    }
}

```

---

## Bagian 03: Methods (Fungsi Aksi)

### Pengertian & Fungsi

* **Pengertian:** Kumpulan fungsi atau blok instruksi kode yang dipanggil untuk mengeksekusi suatu aksi.
* **Fungsi Utama:** Menerima respon *event* dari pengguna (seperti klik tombol `@click`), mengirim data ke API/server, memutasi nilai data, atau menjalankan prosedur logika interaktif.

```javascript
methods: {
    submitForm() {
        alert("Data berhasil dikirim: " + this.inputText);
    },
    resetData() {
        this.inputText = '';
    }
}

```

---

## Bagian 04: Perbandingan Utama: Computed vs. Methods

| Aspek Perbandingan | Computed Property | Methods Property |
| --- | --- | --- |
| **Mekanisme Eksekusi** | Berjalan reaktif otomatis jika **dependensi data berubah**. | Berjalan secara eksplisit saat **dipanggil** (*event/trigger*). |
| **Sistem Caching** | **Memiliki Cache.** Menghemat biaya komputasi jika dependensi tidak berubah. | **Tidak Memiliki Cache.** Dieksekusi ulang setiap kali re-render/dipanggil. |
| **Pemanggilan di Template** | Dipanggil sebagai **properti** (tanpa kurung `()`, contoh: `{{ formattedText }}`). | Dipanggil sebagai **fungsi** (dengan kurung `()`, contoh: `@click="submitForm()"`). |
| **Sifat Nilai Kembalian** | Wajib mengembalikan nilai (*must return a value*). | Boleh mengembalikan nilai atau sekadar menjalankan fungsi/prosedur tanpa *return*. |
| **Kasus Penggunaan** | Transformasi teks, kalkulasi total harga, *filtering* list data. | *Event handling* (submit form, reset, toggle modal), interaksi API. |
___