import { createRouter, createWebHistory } from 'vue-router'
import { getUserLogged } from '../utils/network-data'
import Home from '../pages/Home.vue'
import Archives from '../pages/Archives.vue'
import DetailNotes from '../pages/DetailNotes.vue'
import AddNotes from '../pages/AddNotes.vue'
import Register from '../pages/Register.vue'
import Login from '../pages/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      authRequired: true,
    },
  },
  {
    path: '/notes/:id',
    name: 'Detail Note',
    component: DetailNotes,
    meta: {
      authRequired: true,
    },
  },
  {
    path: '/archive',
    name: 'Archive Notes',
    component: Archives,
    meta: {
      authRequired: true,
    },
  },
  {
    path: '/notes/new',
    name: 'Add Notes',
    component: AddNotes,
    meta: {
      authRequired: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const BASE_URL = 'vue-notes-app'

const router = createRouter({ history: createWebHistory(BASE_URL), routes })

router.beforeEach(async (to, from, next) =>{
  const { error, data } = await getUserLogged()

  if (to.matched.some((record) => record.meta.authRequired)) {
    if(error) {
      alert('You\'ve must been logged to access this area')
      router.push('/login')
    }

    next()
  }

  next()
})

export default router