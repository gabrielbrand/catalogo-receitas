import { createRouter, createWebHistory } from 'vue-router'
import { useAppStore } from '@/stores/app'
import Home from '@/pages/home.vue'
import Sobre from '@/pages/sobre.vue'
import CatalogoReceitas from '@/pages/catalogo_receitas.vue'
import Receita from '@/pages/receita.vue'
import Login from '@/pages/login.vue'
import Cadastrar from '@/pages/cadastrar.vue'
import CadastrarReceita from '@/pages/cadastrar_receita.vue'

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
    },
    {
      path: '/cadastrar',
      name: 'cadastrar',
      component: Cadastrar
    },
    {
      path: '/cadastrar-receita',
      name: 'cadastrar-receita',
      component: CadastrarReceita,
      meta: { requiresAuth: true }
    }
  ],
})

// Navigation guard para verificar autenticação
router.beforeEach((to, from, next) => {
  const appStore = useAppStore()
  
  // Verificar se a rota requer autenticação
  if (to.meta.requiresAuth && !appStore.isLogged) {
    // Salvar a rota que o usuário queria acessar
    sessionStorage.setItem('redirectAfterLogin', to.fullPath)
    // Redirecionar para login se não estiver logado
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
