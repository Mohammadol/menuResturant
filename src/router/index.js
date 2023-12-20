import { createRouter, createWebHistory } from 'vue-router'
import addFood from '../views/addFood.vue'
import resturant from '../views/resturant.vue'
import dashBoard from '../views/dashBoard.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', name:dashBoard, component: dashBoard },
  { path: '/resturant', name:resturant, component: resturant },
  { path: '/food', name:addFood, component: addFood },
  { path: '/resturant/:id', name:resturant, component: resturant },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
