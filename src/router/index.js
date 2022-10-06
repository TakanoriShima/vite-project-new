import * as vueRouter from "vue-router";
import Login from "../components/pages/Login.vue";
import SignUp from "../components/pages/SignUp.vue";

const routes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/signup",
    component: SignUp,
  },
];

const router = vueRouter.createRouter({
  history: vueRouter.createWebHistory(),
  routes,
});

export default router;