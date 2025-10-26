import Settings from "@/pages/Settings.vue"
import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: Settings },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})