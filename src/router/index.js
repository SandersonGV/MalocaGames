import { createRouter, createWebHistory } from 'vue-router'
import AdminView from '../views/Admin/AdminView.vue'
import HomeView from '../views/HomeView.vue'
import SiteView from '../views/SiteView.vue'
import EquipeView from '../views/EquipeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ProjectDetailView from '../views/ProjectDetailView.vue'
import ContatoView from '../views/ContatoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SiteView,
      children: [
        {
          path: '/',
          component: HomeView
        },
        {
          path: '/equipe',
          component: EquipeView
        },
        {
          path: '/trampos',
          component: ProjectsView
        },
        {
          path: '/trampo/:id',
          component: ProjectDetailView,
          props: true
        },
        {
          path: '/qualfoi',
          component: ContatoView
        },
      ]
    },
    {
      path: '/admin',
      component: AdminView
    },
    
  ]
})

export default router
