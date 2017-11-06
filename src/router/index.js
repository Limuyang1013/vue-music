import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const rank = (resolve) => {
  import('components/rank/rank').then((module) => {
    resolve(module)
  })
}
const recommend = (resolve) => {
  import('components/recommend/recommend').then((module) => {
    resolve(module)
  })
}
const singer = (resolve) => {
  import('components/singer/singer').then((module) => {
    resolve(module)
  })
}
const search = (resolve) => {
  import('components/search/search').then((module) => {
    resolve(module)
  })
}
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: recommend
    },
    {
      path: '/singer',
      component: singer
    },
    {
      path: '/rank',
      component: rank
    },
    {
      path: '/search',
      component: search
    }
  ]
})
