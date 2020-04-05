import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'livingHome',
      component: () => import('@/views/livingHome.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/search/index.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('@/views/settings/index.vue')
    }
  ]
})
