import Settings from "@/pages/Settings.vue"
import Employees from "@/pages/Employees.vue"
import { createWebHistory, createRouter } from 'vue-router'
import Index from "./pages/Index.vue"

const routes = [
  { path: '/', component: Index },
  { path: '/settings', component: Settings },
  { path: '/employees', component: Employees },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})