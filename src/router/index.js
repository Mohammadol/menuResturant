import { createRouter, createWebHistory } from 'vue-router'
import addAny from '../views/addAny.vue'
import resturant from '../views/resturant.vue'
import dashBoard from '../views/dashBoard.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', name:dashBoard, component: dashBoard },
  { path: '/resturant/:id/dashboard', name:addAny, component: addAny },
  { path: '/add', name:addAny, component: addAny },
  { path: '/resturant/:id', name:resturant, component: resturant },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
