import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

// Views
const Home = () => import('@/views/HomeTeamProfile')
const IndustryData = () => import('@/views/IndustryData')
const Project = () => import('@/views/Project')
const Interview = () => import('@/views/Interview')
const Tech = () => import('@/views/Tech')

// Views - Pages
const Page404 = () => import('@/views/error/Page404')
const Page500 = () => import('@/views/error/Page500')

Vue.use(Router)

export default new Router({
  mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: DefaultContainer,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: 'industry',
          name: 'Industry Data',
          component: IndustryData
        },
        {
          path: 'project',
          name: 'project',
          component: Project
        },
        {
          path: 'interview',
          name: 'Interview',
          component: Interview
        },
        {
          path: 'tech',
          name: 'Tech',
          component: Tech
        },
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
