import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import User from '@/views/User.vue'
import Product from '@/views/Products.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/Users',
    component: User
  },
  {
    path: '/Products',
    component: Product
  },
]

const router = new VueRouter({
  routes
})

export default router
