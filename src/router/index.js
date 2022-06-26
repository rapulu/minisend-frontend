import EmailComponentVue from "@/components/EmailComponent.vue";
import HomeComponentVue from "@/components/HomeComponent.vue";
import RecipientEmailsComponentVue from "@/components/RecipientEmailsComponent.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    component: HomeComponentVue
  },
  {
    path: '/view-email',
    component: EmailComponentVue
  },
  {
    path: '/recipient-emails',
    component: RecipientEmailsComponentVue
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router