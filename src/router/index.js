import { createRouter, createWebHistory } from 'vue-router'
import addFood from '../views/addFood.vue'
import resturant from '../views/resturant.vue'

const routes = [
  { path: '/', name:addFood, component: addFood },
  { path: '/resturant', name:resturant, component: resturant },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
