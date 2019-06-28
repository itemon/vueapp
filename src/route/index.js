// itergate route
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/components/pages/index/')
    },
    {
      path: '/list',
      component: () => import('@/components/pages/list/')
    },
  ]
})

export default router
