
import Home from '@/components/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      //Se puede importar el componente directamente
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      //Se puede importar el componente de forma dinámica
      component: () => import('@/components/About.vue')
    },

    {
      path: '/pokemon',
      name: 'pokemon',
      component: () => import('@/components/Pokemon.vue')
    },
    {
      path: '/pokemon/:name',
      name: 'pokemons',
      component: () => import('@/view/PokeView.vue')
    }
  ],
})

export default router