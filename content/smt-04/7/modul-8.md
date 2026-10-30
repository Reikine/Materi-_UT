# Modul 08: Components, Canvas, dan Animasi 

## Bagian 01: Modular Components

### 1. Structure & Data Isolation

Komponen adalah blok pembangun UI yang terisolasi dan dapat digunakan kembali (*reusable*).

* Multi-line Template: Di dalam Single File Component (`.vue`), struktur HTML ditulis di dalam blok `<template>`.
* Data Function Isolation: Di dalam komponen, `data` wajib berupa fungsi yang mengembalikan objek (`data() { return { ... } }`). Hal ini memastikan setiap kali komponen digunakan di tempat berbeda, komponen tersebut memiliki salinan state reaktif tersendiri dan tidak saling berbenturan.

### 2. Komunikasi Antar Komponen (Props & $emit)

Prinsip utama komunikasi komponen Vue adalah **Props Down, Events Up**.

* Props (Parent to Child): Mengirim data dari komponen induk ke komponen anak secara satu arah (*one-way data flow*).
```javascript
// Child Component (Options API dengan Validasi Prop)
export default {
  props: {
    judulArtikel: {
      type: String,
      required: true
    },
    jumlahSuka: {
      type: Number,
      default: 0
    }
  }
}

```


* Events / $emit (Child to Parent): Mengirim pemicu event atau data dari komponen anak kembali ke komponen induk.
```html
<!-- Di Child Component -->
<button @click="$emit('tambah-suka', idArtikel)">Sukai</button>

<!-- Di Parent Component -->
<ChildComponent @tambah-suka="prosesTambahSuka" />

```



### 3. Slot System (Distribusi Konten)

Slot digunakan untuk menyisipkan struktur HTML kustom dari komponen induk ke dalam komponen anak.

* Default Slot: Menyediakan area default untuk disisipi konten.
* Named Slots: Menyisipkan konten ke area spesifik menggunakan sintaks `v-slot:nama` atau `#nama`.

```html
<!-- Child Component (CardContainer.vue) -->
<div class="card">
  <header><slot name="header"></slot></header>
  <main><slot></slot></main>
</div>

<!-- Parent Component -->
<CardContainer>
  <template #header>
    <h3>Judul Kartu</h3>
  </template>
  <p>Ini adalah isi konten utama yang masuk ke default slot.</p>
</CardContainer>

```

---

## Bagian 02: HTML5 Canvas di Vue.js

Akses elemen Canvas paling efisien dilakukan dengan memanfaatkan **Template Ref** dan *lifecycle hook* `onMounted`, sehingga pengaksesan konteks 2D dilakukan setelah DOM fisik dirender sepenuhnya.

### Integrasi Canvas dengan Composition API

```html
<template>
  <canvas ref="canvasRef" width="400" height="300"></canvas>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const canvasRef = ref(null)

onMounted(() => {
  const canvas = canvasRef.value
  const ctx = canvas.getContext('2d')

  // 1. Menggambar Persegi Padat & Kerangka
  ctx.fillStyle = '#3498db'
  ctx.fillRect(10, 10, 100, 100) // fillRect(x, y, width, height)

  ctx.strokeStyle = '#2ecc71'
  ctx.lineWidth = 3
  ctx.strokeRect(120, 10, 100, 100)

  // 2. Menggambar Path & Poligon (Segitiga)
  ctx.beginPath()
  ctx.moveTo(250, 110)
  ctx.lineTo(300, 10)
  ctx.lineTo(350, 110)
  ctx.closePath()
  ctx.fillStyle = '#e74c3c'
  ctx.fill()

  // 3. Menggambar Arc (Lingkaran Penuh)
  ctx.beginPath()
  ctx.arc(60, 200, 40, 0, Math.PI * 2) // arc(x, y, radius, startAngle, endAngle)
  ctx.fillStyle = '#f1c40f'
  ctx.fill()
})
</script>

```

---

## Bagian 03: System Transisi dan Animasi

Vue menyediakan komponen pembungkus `<Transition>` untuk memberikan animasi masuk (*enter*) dan keluar (*leave*) saat elemen muncul atau hilang (`v-if` / `v-show`).

### 1. Struktur Kelas CSS Transisi Vue 3

Ketika `<Transition name="fade">` digunakan, Vue akan secara otomatis menerapkan 6 kelas CSS berikut:

* `fade-enter-from`: Kondisi awal saat elemen mulai masuk.
* `fade-enter-active`: Durasi, delay, dan kurva efek saat proses masuk berjalan.
* `fade-enter-to`: Kondisi akhir saat elemen selesai masuk.
* `fade-leave-from`: Kondisi awal saat elemen mulai keluar.
* `fade-leave-active`: Durasi, delay, dan kurva efek saat proses keluar berjalan.
* `fade-leave-to`: Kondisi akhir saat elemen selesai keluar.

Contoh CSS Fade Transition:

```css
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

```

### 2. Animasi Kompleks dengan Keyframes

Untuk animasi multi-langkah, gunakan properti CSS `animation` di dalam kelas `-active`.

```html
<template>
  <button @click="tampil = !tampil">Toggle Animasi</button>
  <Transition name="bounce">
    <div v-if="tampil" class="box">Elemen Memantul</div>
  </Transition>
</template>

<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>

```