import vMypage from '../components/vMypage.vue'
const routes = [
  {
    path: '/',
    component: vMypage
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
