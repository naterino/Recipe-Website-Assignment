import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: 'Medavie Recipe Website' },
      component: () => import('@/pages/HomePage.vue'),
    },
    {
      path: '/recipe/:id',
      name: 'recipe-detail',
      component: () => import('@/pages/RecipeDetailPage.vue'),
    },
  ],
})

router.beforeEach((to) => {
  document.title = to.meta.title || 'Medavie Recipe Website'
})

export default router
