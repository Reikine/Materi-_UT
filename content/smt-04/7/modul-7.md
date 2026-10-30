# Modul 07: Array, Filtering, dan Event Handling 

## Bagian 01: Array dan Perulangan Data

### Konsep Dasar Array di Vue.js

Array adalah struktur data linier untuk menyimpan kumpulan nilai dalam satu variabel. Di Vue.js, array digunakan sebagai penampung data reaktif untuk merender daftar item secara dinamis ke antarmuka pengguna (UI).

### Metode Reaktivitas Array (Mutation vs Non-Mutation)

Vue secara otomatis memantau perubahan pada array jika menggunakan metode mutasi berikut:

* Metode Mutasi (Mengubah array asli): `push()`, `pop()`, `shift()`, `unshift()`, `splice()`, `sort()`, `reverse()`.
* Metode Non-Mutasi (Mengembalikan array baru): `filter()`, `concat()`, `slice()`. Untuk metode ini, array asal harus diganti dengan hasil kembaliannya.

### Directive `v-for` dan Atribut `:key`

Digunakan untuk merender daftar item secara berulang.

Catatan Kunci Atribut `:key`:
Selalu gunakan identifier unik (seperti `id`) untuk nilai `:key`. Hindari menggunakan `index` array sebagai `key` jika daftar item dapat diubah, dihapus, atau diurutkan, karena dapat menimbulkan bug rendering.

Sintaks Dasar dengan Object Array:

```html
<template>
  <div>
    <h3>Daftar Produk</h3>
    <ul>
      <li v-for="produk in daftarProduk" :key="produk.id">
        {{ produk.nama }} - Rp {{ produk.harga }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      daftarProduk: [
        { id: 101, nama: "Laptop", harga: 7500000 },
        { id: 102, nama: "Mouse", harga: 150000 },
        { id: 103, nama: "Keyboard", harga: 300000 }
      ]
    }
  }
}
</script>

```

---

## Bagian 02: Pengolahan & Pemformatan Data (Pengganti Filter Vue 2)

Di Vue 3, fitur Filter bawaan (`|`) telah dihapus. Sebagai gantinya, pengolahan teks dan pencarian data dilakukan menggunakan Computed Properties atau Methods.

### 1. Manipulasi String dalam JavaScript

* `toUpperCase()` / `toLowerCase()`: Mengubah format huruf kapital / kecil.
* `slice(awal, akhir)`: Memotong bagian string.
* `replace(target, pengganti)`: Mengganti teks tertentu.
* `split(separator)`: Memecah string menjadi array.

### 2. Implementasi Filtering dengan Computed Property

Pendekatan terbaik untuk fitur pencarian atau penyaringan daftar item secara real-time:

```html
<template>
  <div>
    <input type="text" v-model="searchQuery" placeholder="Cari produk...">
    <ul>
      <li v-for="produk in filteredProduk" :key="produk.id">
        {{ produk.nama }} - Rp {{ produk.harga }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const searchQuery = ref('')
const daftarProduk = ref([
  { id: 1, nama: 'Laptop Gaming', harga: 12000000 },
  { id: 2, nama: 'Mouse Wireless', harga: 250000 },
  { id: 3, nama: 'Keyboard Mechanical', harga: 850000 }
])

// Computed Property untuk menyaring produk secara reaktif
const filteredProduk = computed(() => {
  return daftarProduk.value.filter(produk => 
    produk.nama.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
</script>

```

---

## Bagian 03: Event Handling (`v-on` / `@`)

### Directive `v-on`

Digunakan untuk mendengarkan (*listen*) kejadian DOM (seperti klik, submit, tekan tombol) dan mengeksekusi logika JavaScript/method.

* Sintaks: `v-on:click="namaMethod"`
* Shorthand: `@click="namaMethod"`

### Pengiriman Parameter & Objek Event Native (`$event`)

Kita dapat mengirim parameter kustom ke dalam method sekaligus mengakses objek event asli DOM menggunakan `$event`.

```html
<button @click="hapusItem(produk.id, $event)">Hapus</button>

```

### Event Modifiers DOM

Vue menyediakan pengubah (*modifiers*) untuk menangani perilaku event DOM tanpa perlu menulis kode manual seperti `event.preventDefault()`:

* `.prevent`: Mencegah aksi bawaan elemen (misal: membatalkan reload halaman saat submit form).
* `.stop`: Menghentikan perambatan event (*event bubbling*).
* `.once`: Memastikan event handler hanya dijalankan 1 kali.
* `.self`: Pemicu hanya berjalan jika event terjadi langsung pada elemen tersebut.

Contoh Penggunaan Form Submit:

```html
<form @submit.prevent="simpanData">
  <input type="text" v-model="nama">
  <button type="submit">Simpan</button>
</form>

```

### Mouse & Keyboard Event Modifiers

* Mouse Events: `@click`, `@dblclick`, `@mouseenter`, `@mouseleave`.
* Key Modifiers: `@keyup.enter`, `@keyup.tab`, `@keyup.delete`, `@keyup.esc`, `@keyup.space`.

Contoh Input Keyboard:

```html
<input type="text" @keyup.enter="cariData" placeholder="Tekan Enter untuk mencari...">

```