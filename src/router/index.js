import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HumeursView from '../views/HumeursView.vue'  

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/humeurs',
      name: 'humeurs',
      component: HumeursView,  
    },
  ],
})

export default router
