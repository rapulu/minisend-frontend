import EmailComponent from "../views/EmailComponent.vue";
import HomeComponent from "../views/HomeComponent.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    component: HomeComponent
  },
  {
    path: '/email/:id',
    component: EmailComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router