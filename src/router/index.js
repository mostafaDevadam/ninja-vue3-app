import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useStore } from 'vuex'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("@/views/HomeView.vue"),
    meta: {
      title: "Home",
      requiresAuth: true,
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      title: "About",
      requiresAuth: true,
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import("@/views/ProfileView.vue"),
    meta: {
      title: "Profile",
      requiresAuth: true,
    }
  },
  {
    path: '/todos',
    name: 'ShowTodos',
    component: () => import('@/views/ShowTodos.vue'),
    meta: {
      title: "Show Todos",
      requiresAuth: true,
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('@/views/AuthView.vue'),
    meta: {
      title: "Auth"
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next) => {
  const store = useStore()
  const isAuth = true
 
  if(to.meta.requiresAuth && !isAuth){ // !store.state.isAuth) {
    next('/auth')
  } 
  next()

  /*if(to.meta.requiresAuth) {
    const token = localStorage.getItem()
    if (token && store.state.isAuth) {
          next()
    } else {
        next('/login')
    }
  }else {
    next()
  }*/
})

export default router
