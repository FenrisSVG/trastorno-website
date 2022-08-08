import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Trastornos from '../views/Trastornos.vue'
import Trastornos2 from '../views/Trastornos2.vue'
import Trastornos3 from '../views/Trastornos3.vue'
import Trastornos4 from '../views/Trastornos4.vue'
import Trastornos5 from '../views/Trastornos5.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/trastornos',
    name: 'Trastornos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Trastornos
  },
  {
    path: '/trastornos/:page',
    name: 'Trastornos2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Trastornos2
  },
  {
    path: '/trastornos/:page',
    name: 'Trastornos3',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Trastornos3
  },
  {
    path: '/trastornos/:page',
    name: 'Trastornos4',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Trastornos4
  },
  {
    path: '/trastornos/:page',
    name: 'Trastornos5',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Trastornos5
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
