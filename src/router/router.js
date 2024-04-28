import { createRouter, createWebHistory } from 'vue-router'
import Task1 from '../components/task1.vue'
import Task2 from '../components/task2.vue'

const routes = [
  { path: '/task1', component: Task1 },
  { path: '/task2', component: Task2 }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router