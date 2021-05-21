import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import AppLink from '@/components/AppLink.vue'

createApp(App)
.component('AppLink', AppLink)
.use(router)
.mount('#app')
