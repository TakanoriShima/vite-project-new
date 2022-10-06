import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css" //　追加
import VueRouter from "./router/index";

createApp(App).use(VueRouter).mount("#app"); // 変更
