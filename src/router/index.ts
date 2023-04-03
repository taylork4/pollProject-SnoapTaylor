import { createRouter, createWebHistory } from "vue-router";
import 'firebase/firestore';

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      name: "Home",
      path: "/",
      component: () => import(".")
    },
    {
      name: "Polls",
      path: "/Polls",
      component: () => import("../components/Polls.vue"),
    },
    {
      name: "signUp",
      path: "/signUp",
      component: () => import("../components/signup.vue"),
    },
    {
      name: "Login",
      path: "/Login",
      component: () => import("../components/Login.vue"),
    }
  ]
});
export default router;