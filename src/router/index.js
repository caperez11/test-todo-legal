import { createRouter, createWebHashHistory } from 'vue-router'
import authRouter from '../modules/auth/router'

const routes = [
  {
    path: '/',
    ...authRouter,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
