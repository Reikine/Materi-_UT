<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const btn = document.getElementById('native-sidebar-toggler')
  if (btn) {
    btn.onclick = () => {
      document.body.classList.toggle('sidebar-collapsed')
    }
  }
})
</script>

<template>
  <button id="native-sidebar-toggler" title="Sembunyikan / Tampilkan Sidebar">
    <span>⇄ Toggle Sidebar</span>
  </button>
</template>