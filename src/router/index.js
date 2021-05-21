import {createRouter, createWebHistory, useRoute} from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {path: '/', name: 'Home', component: Home},
  {
    path: '/destination/:id/:slug', 
    name: 'destination.show', 
    component: ()=>import('@/views/DestinationShow.vue'),
    props: route=> ({...route.params, id: parseInt(route.params.id)}),
    children:[
      {
        path: ':experienceSlug',
        name: 'experience.show',
        component: () => import('@/views/ExperienceShow.vue'),
        props: route=> ({...route.params, id: parseInt(route.params.id)})
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: ()=> import('@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router