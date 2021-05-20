import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/destination/:id/:slug', name: 'destination.show', component: ()=>import('@/views/DestinationShow.vue')}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router