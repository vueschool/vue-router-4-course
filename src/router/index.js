import {createRouter, createWebHistory, useRoute} from 'vue-router'
import Home from '@/views/Home.vue'
import sourceData from '@/data.json'

const routes = [
  {path: '/', name: 'Home', component: Home},
  {
    path: '/protected',
    name: 'protected',
    component: ()=> import('@/views/Protected.vue'),
    meta:{
      requiresAuth: true,
    }
  },
  {
    path: '/login',
    name: 'login',
    component: ()=> import('@/views/Login.vue')
  },
  {
    path: '/destination/:id/:slug', 
    name: 'destination.show', 
    component: ()=>import('@/views/DestinationShow.vue'),
    props: route=> ({...route.params, id: parseInt(route.params.id)}),
    beforeEnter(to, from){
      const exists = sourceData.destinations.find(
        destination => destination.id === parseInt(to.params.id)
      )
      if(!exists) return {
        name: 'NotFound',
        // allows keeping the URL while rendering a different page
        params: { pathMatch: to.path.split('/').slice(1) },
        query: to.query,
        hash: to.hash,
      }
    },
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
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || new Promise((resolve)=>{
      setTimeout(()=> resolve({ top:0 }), 300)
    })
  }
})
router.beforeEach((to, from)=>{
  if(to.meta.requiresAuth && !window.user){
    return {name: 'login'}
  }
})
export default router