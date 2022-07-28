import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blogpage from '../views/BlogPage.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:{ name: 'Home'}
  },
  {
    path: '/blog',
    name: 'Home',
    component: Home,
  },
  {
    path: '/blog/:id',
    name: 'Blogpage',
    component: Blogpage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
