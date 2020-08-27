import Vue, { h } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AllBooks from '@/views/AllBooks.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'All',
    component: AllBooks
  },
  {
    path: '/finished',
    name: 'Finished',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "FinishedBooks" */ '@/views/FinishedBooks.vue'
      )
  },
  {
    path: '/about',
    name: 'About',
    component: {
      name: 'About',
      render: () => h('p', 'About the Page')
    }
  }
]

// @ts-ignore
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
