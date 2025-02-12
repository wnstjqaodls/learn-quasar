import layouts from 'src/layouts/MainLayout.vue';
const routes = [
  {
    path: '/',
    component: layouts,
    children: [
      {path : 'main',
        component : () => import('src/pages/IndexPage.vue')
      },
      {path : 'mypage',
        component: () => import('src/components/vMypage.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
