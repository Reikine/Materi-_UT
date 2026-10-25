<script setup>
import { useRouter, withBase } from 'vitepress'

const router = useRouter()

defineProps({
  courses: {
    type: Array,
    required: true
  }
})

const navigateTo = (link) => {
  if (link && link !== '#') {
    router.go(withBase(link))
  }
}
</script>

<template>
  <div class="workspace-wrapper">
    <div class="cards-layout">
      <div 
        v-for="(course, index) in courses" 
        :key="index" 
        class="trello-card"
        :class="{ 'disabled-card': !course.link || course.link === '#' }"
        @click="navigateTo(course.link)"
      >
        <div class="card-top-row">
          <span class="card-badge-id">{{ course.id || `SMT-0${index + 1}` }}</span>
        </div>
        
        <div class="card-content-body">
          <h3>{{ course.title }}</h3>
          <p v-if="course.description">{{ course.description }}</p>
        </div>

        <div class="card-bottom-row">
          <span class="status-indicator">
            {{ course.link && course.link !== '#' ? 'Akses Materi →' : 'Segera Hadir' }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.workspace-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 20px;
}

.cards-layout {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
}

.trello-card {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04);
}

/* Efek hover dengan border dan bayangan merah elegan */
.trello-card:hover {
  border-color: #ef4444;
  transform: translateY(-3px);
  box-shadow: 0 10px 25px -5px rgba(239, 68, 68, 0.12), 0 8px 10px -6px rgba(239, 68, 68, 0.08);
}

.disabled-card {
  opacity: 0.75;
  cursor: default;
}
.disabled-card:hover {
  border-color: var(--vp-c-divider);
  transform: none;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.04);
}

.card-top-row {
  margin-bottom: 10px;
}

/* Badge ID dengan sentuhan merah minimalis */
.card-badge-id {
  font-size: 0.7rem;
  font-weight: 600;
  color: #ef4444;
  background: rgba(239, 68, 68, 0.08);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
  letter-spacing: 0.02em;
}

.card-content-body {
  margin-bottom: 16px;
}

.card-content-body h3 {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 4px 0;
  letter-spacing: -0.01em;
}

.card-content-body p {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  margin: 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-bottom-row {
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 12px;
  display: flex;
  align-items: center;
}

/* Teks indikator akses materi menjadi warna merah */
.status-indicator {
  font-size: 0.78rem;
  font-weight: 500;
  color: #ef4444;
  transition: transform 0.2s ease;
}

.trello-card:not(.disabled-card):hover .status-indicator {
  transform: translateX(4px);
}
.disabled-card .status-indicator {
  color: var(--vp-c-text-3);
}
</style>