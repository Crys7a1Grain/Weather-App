import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./src/client/pages/WelcomePage.vue'),
    },
    {
      path: '/search/',
      name: 'search',
      component: () => import('./src/client/pages/SearchPage.vue'),
      props: (route) => ({ city: route.query.city }),
    },
  ],
});

export default router;
