import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

// Views
const Home = () => import('@/views/HomeTeamProfile')

// Views - Pages
const Page404 = () => import('@/views/error/Page404')
const Page500 = () => import('@/views/error/Page500')

Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/home',
      component: DefaultContainer,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home
        }
      ]
    },
    {
      path: '/',
      redirect: '/not-found',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: 'not-found',
          name: 'Page404',
          component: Page404
        },
        {
          path: 'sever-error',
          name: 'Page500',
          component: Page500
        }
      ]
    }
  ]
})
