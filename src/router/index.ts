import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/splash',
    },
    {
      path: '/splash',
      name: 'splash',
      component: () => import('../views/SplashView.vue'),
      meta: { transition: 'fade' },
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: { transition: 'fade' },
    },
    {
      path: '/games/:id',
      name: 'game',
      component: () => import('../views/GameView.vue'),
      props: true,
      meta: { transition: 'slide-fade' },
    },
  ],
})

export default router
