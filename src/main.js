import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css" //　追加
import VueRouter from "./router/index";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvX0U3XjRvpXGmc-X8Wk1xwfXiBtbCLjc",
  authDomain: "vite-project-new.firebaseapp.com",
  projectId: "vite-project-new",
  storageBucket: "vite-project-new.appspot.com",
  messagingSenderId: "944013986868",
  appId: "1:944013986868:web:b5b405749ada74423b4e61"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(VueRouter).mount("#app"); // 変更
