import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blogpage from '../views/BlogPage.vue'
import NotFound from '../views/NotFound.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
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
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
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
