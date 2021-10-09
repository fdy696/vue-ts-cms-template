import localCache from '@/utils/cache'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Main from '../components/layout/index.vue'
import Login from '../views/login/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'main',
    children: [],
    component: Main
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to) => {
  if (to.path !== '/logiin') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
    if (to.path === '/main') {
      return '/main/analysis/overview'
    }
  }
})
export default router
