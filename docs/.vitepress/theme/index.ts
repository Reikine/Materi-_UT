import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import JiraDashboard from './components/JiraDashboard.vue'
import SidebarToggler from './components/SidebarToggler.vue'
import './custom.css'
import { h } from 'vue'

export default {
    extends: DefaultTheme,
    Layout() {
        return h(DefaultTheme.Layout, null, {
            'nav-bar-content-before': () => h(SidebarToggler)
        })
    },
    enhanceApp({ app }) {
        app.component('JiraDashboard', JiraDashboard)
        app.component('SidebarToggler', SidebarToggler)
    }
} satisfies Theme