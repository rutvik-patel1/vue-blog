import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blogpage from '../views/BlogPage.vue'
import NotFound from '../views/NotFound.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'Home' }
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
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: NotFound
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
