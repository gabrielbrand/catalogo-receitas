import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/home.vue'
import Sobre from '@/pages/sobre.vue'
import CatalogoReceitas from '@/pages/catalogo_receitas.vue'
import Receita from '@/pages/receita.vue'
import Login from '@/pages/login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: Sobre
    },
    {
      path: '/catalogo_receitas',
      name: 'catalogo_receitas',
      component: CatalogoReceitas
    },
    {
      path: '/catalogo_receitas/:id',
      name: 'receita',
      component: Receita
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ],
})

export default router
