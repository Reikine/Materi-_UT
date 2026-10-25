import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'

export default defineConfig({
  title: "",
  markdown: {
    config: (md) => {
      // @ts-ignore
      md.use(mathjax3)
    }
  },

  themeConfig: {
    nav: [
      { text: 'Beranda', link: '/' }
    ],
    footer: {
      message: 'Materi Pembelajaran Sistem Informasi • Universitas Terbuka',
      copyright: 'Dibuat dengan oleh <a href="https://github.com/Reikine" target="_blank">Reikine</a>'
    },

    sidebar: {

      '/SMT_004_UT/SMT_004_Analisis_dan_Perancangan_Sistem/': [
        {
          text: 'Analisis dan Perancangan Sistem',
          collapsed: true,
          items: [
            { text: 'Modul 01', link: '/SMT_004_UT/SMT_004_Analisis_dan_Perancangan_Sistem/01' },
            { text: 'Modul 02', link: '/SMT_004_UT/SMT_004_Analisis_dan_Perancangan_Sistem/02' },
            { text: 'Modul 03', link: '/SMT_004_UT/SMT_004_Analisis_dan_Perancangan_Sistem/03' },
            { text: 'Modul 04', link: '/SMT_004_UT/SMT_004_Analisis_dan_Perancangan_Sistem/04' },
            { text: 'Modul 05', link: '/SMT_004_UT/SMT_004_Analisis_dan_Perancangan_Sistem/05' },
            { text: 'Modul 06', link: '/SMT_004_UT/SMT_004_Analisis_dan_Perancangan_Sistem/06' },
            { text: 'Modul 07', link: '/SMT_004_UT/SMT_004_Analisis_dan_Perancangan_Sistem/07' },
            { text: 'Modul 08', link: '/SMT_004_UT/SMT_004_Analisis_dan_Perancangan_Sistem/08' },
            { text: 'Modul 09', link: '/SMT_004_UT/SMT_004_Analisis_dan_Perancangan_Sistem/09' }
          ]
        }
      ],
      '/SMT_004_UT/SMT_004_Analisis_dan_Visualisasi_Data/': [
        {
          text: 'Analisis dan Visualisasi Data',
          collapsed: true,
          items: [
            { text: 'Modul 01', link: '/SMT_004_UT/SMT_004_Analisis_dan_Visualisasi_Data/01' },
            { text: 'Modul 02', link: '/SMT_004_UT/SMT_004_Analisis_dan_Visualisasi_Data/02' },
            { text: 'Modul 03', link: '/SMT_004_UT/SMT_004_Analisis_dan_Visualisasi_Data/03' },
            { text: 'Modul 04', link: '/SMT_004_UT/SMT_004_Analisis_dan_Visualisasi_Data/04' },
            { text: 'Modul 05', link: '/SMT_004_UT/SMT_004_Analisis_dan_Visualisasi_Data/05' },
            { text: 'Modul 06', link: '/SMT_004_UT/SMT_004_Analisis_dan_Visualisasi_Data/06' }
          ]
        }
      ],
      '/SMT_004_UT/SMT_004_Kewirausahaan_di_Era_Digital/': [
        {
          text: 'Kewirausahaan di Era Digital',
          collapsed: true,
          items: [
            { text: 'Modul 01', link: '/SMT_004_UT/SMT_004_Kewirausahaan_di_Era_Digital/01' },
            { text: 'Modul 02', link: '/SMT_004_UT/SMT_004_Kewirausahaan_di_Era_Digital/02' },
            { text: 'Modul 03', link: '/SMT_004_UT/SMT_004_Kewirausahaan_di_Era_Digital/03' },
            { text: 'Modul 04', link: '/SMT_004_UT/SMT_004_Kewirausahaan_di_Era_Digital/04' },
            { text: 'Modul 05', link: '/SMT_004_UT/SMT_004_Kewirausahaan_di_Era_Digital/05' },
            { text: 'Modul 06', link: '/SMT_004_UT/SMT_004_Kewirausahaan_di_Era_Digital/06' },
            { text: 'Modul 07', link: '/SMT_004_UT/SMT_004_Kewirausahaan_di_Era_Digital/07' },
            { text: 'Modul 08', link: '/SMT_004_UT/SMT_004_Kewirausahaan_di_Era_Digital/08' },
            { text: 'Modul 09', link: '/SMT_004_UT/SMT_004_Kewirausahaan_di_Era_Digital/09' }
          ]
        }
      ],
      '/SMT_004_UT/SMT_004_Pemrograman_Web/': [
        {
          text: 'Pemrograman Berbasis Web',
          collapsed: true,
          items: [
            { text: 'Modul 01', link: '/SMT_004_UT/SMT_004_Pemrograman_Web/01' },
            { text: 'Modul 02', link: '/SMT_004_UT/SMT_004_Pemrograman_Web/02' },
            { text: 'Modul 04', link: '/SMT_004_UT/SMT_004_Pemrograman_Web/04' },
            { text: 'Modul 05', link: '/SMT_004_UT/SMT_004_Pemrograman_Web/05' },
            { text: 'Modul 06', link: '/SMT_004_UT/SMT_004_Pemrograman_Web/06' },
            { text: 'Modul 07', link: '/SMT_004_UT/SMT_004_Pemrograman_Web/07' },
            { text: 'Modul 08', link: '/SMT_004_UT/SMT_004_Pemrograman_Web/08' }
          ]
        }
      ],
      '/SMT_004_UT/SMT_004_Perilaku_Organisasi/': [
        {
          text: 'Perilaku Organisasi',
          collapsed: true,
          items: [
            { text: 'Modul 01', link: '/SMT_004_UT/SMT_004_Perilaku_Organisasi/01' },
            { text: 'Modul 02', link: '/SMT_004_UT/SMT_004_Perilaku_Organisasi/02' },
            { text: 'Modul 03', link: '/SMT_004_UT/SMT_004_Perilaku_Organisasi/03' },
            { text: 'Modul 04', link: '/SMT_004_UT/SMT_004_Perilaku_Organisasi/04' },
            { text: 'Modul 05', link: '/SMT_004_UT/SMT_004_Perilaku_Organisasi/05' },
            { text: 'Modul 06', link: '/SMT_004_UT/SMT_004_Perilaku_Organisasi/06' },
            { text: 'Modul 07', link: '/SMT_004_UT/SMT_004_Perilaku_Organisasi/07' },
            { text: 'Modul 08', link: '/SMT_004_UT/SMT_004_Perilaku_Organisasi/08' },
            { text: 'Modul 09', link: '/SMT_004_UT/SMT_004_Perilaku_Organisasi/09' }
          ]
        }
      ],
      '/SMT_004_UT/SMT_004_Proses_Bisnis/': [
        {
          text: 'Proses Bisnis',
          collapsed: true,
          items: [
            { text: 'Modul 01', link: '/SMT_004_UT/SMT_004_Proses_Bisnis/01' },
            { text: 'Modul 02', link: '/SMT_004_UT/SMT_004_Proses_Bisnis/02' },
            { text: 'Modul 03', link: '/SMT_004_UT/SMT_004_Proses_Bisnis/03' },
            { text: 'Modul 04', link: '/SMT_004_UT/SMT_004_Proses_Bisnis/04' },
            { text: 'Modul 05', link: '/SMT_004_UT/SMT_004_Proses_Bisnis/05' },
            { text: 'Modul 06', link: '/SMT_004_UT/SMT_004_Proses_Bisnis/06' },
            { text: 'Modul 07', link: '/SMT_004_UT/SMT_004_Proses_Bisnis/07' },
            { text: 'Modul 08', link: '/SMT_004_UT/SMT_004_Proses_Bisnis/08' },
            { text: 'Modul 09', link: '/SMT_004_UT/SMT_004_Proses_Bisnis/09' }
          ]
        }
      ],
      '/SMT_004_UT/SMT_004_Sistem_Informasi_Manajemen/': [
        {
          text: 'Sistem Informasi Manajemen',
          collapsed: true,
          items: [
            { text: 'Modul 01', link: '/SMT_004_UT/SMT_004_Sistem_Informasi_Manajemen/01' },
            { text: 'Modul 02', link: '/SMT_004_UT/SMT_004_Sistem_Informasi_Manajemen/02' },
            { text: 'Modul 03', link: '/SMT_004_UT/SMT_004_Sistem_Informasi_Manajemen/03' },
            { text: 'Modul 04', link: '/SMT_004_UT/SMT_004_Sistem_Informasi_Manajemen/04' },
            { text: 'Modul 05', link: '/SMT_004_UT/SMT_004_Sistem_Informasi_Manajemen/05' },
            { text: 'Modul 06', link: '/SMT_004_UT/SMT_004_Sistem_Informasi_Manajemen/06' },
            { text: 'Modul 07', link: '/SMT_004_UT/SMT_004_Sistem_Informasi_Manajemen/07' },
            { text: 'Modul 08', link: '/SMT_004_UT/SMT_004_Sistem_Informasi_Manajemen/08' },
            { text: 'Modul 09', link: '/SMT_004_UT/SMT_004_Sistem_Informasi_Manajemen/09' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Reikine/Materi-_UT' }
    ]
  }
})