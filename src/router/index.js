import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Trastornos from '../views/Trastornos.vue'
import Trastornos2 from '../views/Trastornos2.vue'
import Trastornos3 from '../views/Trastornos3.vue'
import Trastornos4 from '../views/Trastornos4.vue'
import Trastornos5 from '../views/Trastornos5.vue'
import Ansiedad from '../views/Ansiedad.vue'
import Separacion from '../views/Separacion.vue'
import Fobia from '../views/Fobia.vue'
import Social from '../views/Social.vue'
import Panico from '../views/Panico.vue'
import Mutismo from '../views/Mutismo.vue'
import Argofobico from '../views/Argofobico.vue'
import Obsesivo from '../views/Obsesivo.vue'
import Dismotfico from '../views/Dismotfico.vue'
import Excoriacion from '../views/Excoriacion.vue'
import Depresion from '../views/Depresion.vue'
import Persistente from '../views/Persistente.vue'
import Medicamentos from '../views/Medicamentos.vue'
import Afeccion from '../views/Afeccion.vue'

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
  },
  {
    path: '/trastornos/:query',
    name: 'Ansiedad',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Ansiedad
  },
  {
    path: '/trastornos/:query',
    name: 'Separacion',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Separacion
  },
  {
    path: '/trastornos/:query',
    name: 'Fobia',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Fobia
  },
  {
    path: '/trastornos/:query',
    name: 'Social',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Social
  },
  {
    path: '/trastornos/:query',
    name: 'Panico',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Panico
  },
  {
    path: '/trastornos/2/:query',
    name: 'Mutismo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Mutismo
  },
  {
    path: '/trastornos/2/:query',
    name: 'Argofobico',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Argofobico
  },
  {
    path: '/trastornos/2/:query',
    name: 'Obsesivo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Obsesivo
  },
  {
    path: '/trastornos/2/:query',
    name: 'Dismotfico',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Dismotfico
  },
  {
    path: '/trastornos/3/:query',
    name: 'Excoriacion',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Excoriacion
  },
  {
    path: '/trastornos/3/:query',
    name: 'Depresion',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Depresion
  },
  {
    path: '/trastornos/3/:query',
    name: 'Persistente',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Persistente
  },
  {
    path: '/trastornos/3/:query',
    name: 'Medicamentos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Medicamentos
  },
  {
    path: '/trastornos/3/:query',
    name: 'Afeccion',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Afeccion
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
