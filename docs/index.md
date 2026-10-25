---
layout: page
---

<div class="workspace-hero">
  <div class="hero-badge">SISTEM INFORMASI UT</div>
  <h1>Lecture Notes</h1>
  <p>Dokumentasi, ringkasan materi, dan catatan perkuliahan lengkap untuk mendukung proses pembelajaran mahasiswa Program Studi Sistem Informasi Universitas Terbuka dari Semester 1 hingga Semester 8.</p>
</div>

<JiraDashboard :courses="[
  {
    title: 'Semester 1',
    description: 'Arsip modul dan ringkasan materi dasar.',
    link: '#'
  },
  {
    title: 'Semester 2',
    description: 'Arsip modul dan ringkasan materi dasar.',
    link: '#'
  },
  {
    title: 'Semester 3',
    description: 'Arsip modul dan ringkasan materi dasar.',
    link: '#'
  },
  {
    title: 'Semester 4',
    description: 'Sistem informasi, analisis perancangan, dan pengembangan web.',
    link: './SMT_004_UT/'
  },
  {
    title: 'Semester 5',
    description: 'Arsip modul dan ringkasan materi dasar.',
    link: '#'
  },
  {
    title: 'Semester 6',
    description: 'Arsip modul dan ringkasan materi dasar.',
    link: '#'
  },
  {
    title: 'Semester 7',
    description: 'Arsip modul dan ringkasan materi dasar.',
    link: '#'
  },
  {
    title: 'Semester 8',
    description: 'Arsip modul dan ringkasan materi dasar.',
    link: '#'
  }
]" />

<div class="release-notice-wrapper">
  <div class="notice-card">
    <span class="notice-tag">STATUS</span>
    <p>Modul aktif saat ini hanya <strong>Semester 4</strong>. Update semester lainnya dijadwalkan secara bertahap.</p>
  </div>
</div>

<style>
.workspace-hero {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 20px 8px 20px;
}

.hero-badge {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  font-family: monospace;
  color: #ef4444;
  background: rgba(239, 68, 68, 0.1);
  padding: 3px 8px;
  border-radius: 4px;
  margin-bottom: 8px;
  letter-spacing: 0.05em;
}

.workspace-hero h1 {
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 8px 0;
  letter-spacing: -0.02em;
  border: none !important;
  padding: 0 !important;
}

.workspace-hero p {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  margin: 0;
  line-height: 1.6;
  max-width: 800px;
}

.release-notice-wrapper {
  max-width: 1200px;
  margin: 24px auto 40px auto;
  padding: 0 20px;
}

.notice-card {
  display: flex;
  align-items: center;
  gap: 14px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-left: 3px solid #ef4444;
  border-radius: 10px;
  padding: 16px 20px;
}

.notice-tag {
  font-size: 0.7rem;
  font-weight: 700;
  font-family: monospace;
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  padding: 3px 8px;
  border-radius: 4px;
  letter-spacing: 0.05em;
}

.notice-card p {
  margin: 0;
  font-size: 0.88rem;
  color: var(--vp-c-text-2);
}
</style>