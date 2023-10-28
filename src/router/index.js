import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'mall',
    redirect: '/home',
    component: () => import(/* webpackChunkName: "about" */ '@/layout/main/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ '@/views/home/index.vue')
      },
      {
        path: '/eBookList',
        name: 'eBookList',
        component: () => import(/* webpackChunkName: "about" */ '@/views/ebook/index.vue')
      },
      {
        path: '/details',
        name: 'details',
        component: () => import(/* webpackChunkName: "about" */ '@/views/details/index.vue')
      }

    ]

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
