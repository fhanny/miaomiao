import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/movie'
  },
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/home')
  },
  {
    path: '/movie',
    name: 'Movie',
    component: () => import('../views/movie'),
    children:[
      {
        path: 'city',
        component: () => import('../components/city')
      },
      {
        path: 'nowPlaying',
        component: () => import('../components/nowPlaying')
      },
      {
        path: 'comingSoon',
        component: () => import('../components/comingSoon')
      },
      {
        path: 'search',
        component: () => import('../components/search')
      }
    ]
  },
  {
    path: '/cinema',
    name: 'Cinema',
    component: () => import('../views/cinema')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
