import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import search from '../views/search.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/search.vue')
    },
    // 默认路由
    {
      path:'/',
      redirect:"/search"
  },
  ]
})

export default router
