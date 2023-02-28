import { createRouter, createWebHistory } from 'vue-router'

import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'
import Profile from '../components/Profile.vue'
import DepositWithdraw from '../components/DepositWithdraw.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/deposit-withdraw',
    name: 'DepositWithdraw',
    component: DepositWithdraw,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
