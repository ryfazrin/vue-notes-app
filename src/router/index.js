import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Archives from '../pages/Archives.vue'
import DetailNotes from '../pages/DetailNotes.vue'
import AddNotes from '../pages/AddNotes.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/notes/:id',
    name: 'Detail Note',
    component: DetailNotes
  },
  {
    path: '/archive',
    name: 'Archive Notes',
    component: Archives
  },
  {
    path: '/notes/new',
    name: 'Add Notes',
    component: AddNotes
  }
]

const router = createRouter({ history: createWebHistory(), routes })

export default router