import * as vueRouter from "vue-router";
import Login from "../components/pages/Login.vue";
import SignUp from "../components/pages/SignUp.vue";
import Chat from "../components/pages/Chat2.vue"; // 追加
// import Chat from "../components/pages/Chat.vue"; // 追加
import { getAuth, onAuthStateChanged } from "firebase/auth";

const routes = [
  {
    path: "/",
    component: Chat, // LoginからChatに変更,
    beforeEnter: (to, from, next) => {
      const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        if (user) {
          next();
        } else {
          next('/login');
        }
      });
    }
  },
  {
    path: "/signup",
    component: SignUp,
  },
  {
    path: "/login", // 追加
    component: Login, // 追加
  },
];

const router = vueRouter.createRouter({
  history: vueRouter.createWebHistory(),
  routes,
});

export default router;