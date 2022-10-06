<!-- <script setup>でない点に注意 -->
<script>
import { defineComponent, reactive } from 'vue'
import View from '../chat/View.vue' // 追加
import Send from '../chat/Send.vue'
import { getDatabase, ref, push, onValue } from "firebase/database";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import DisplayName from '../chat/DisplayName.vue'
import Header from '../header/Header.vue'

// TypeScript に Vue コンポーネントオブションのなかで適切に型を推論させるために、defineComponent グローバルメソッドでコンポーネントを定義する必要があります:
export default defineComponent({
  components: {
    View,
    Send,
    DisplayName ,
    Header
  },
  setup() {
    const data = reactive({
      user: {},
      chat: [],
      input: '',
      displayName: ''
    })
    data.user = getAuth().currentUser;
    data.displayName = data.user.displayName ?? '自分さん'; // 追加
    const refMessage = ref(getDatabase(), 'chat'); // 追加
    
    onValue(refMessage, (snapshot) => {
      const data = snapshot.val();
      updateChat(data);
    });
    const pushMessage = (chatData) => {
      chatData.uid = data.user.uid // 追加
      chatData.displayName = data.displayName // 追加
      // data.chat.push(chatData)
      const db = getDatabase(); // 追加
      push(ref(db, 'chat'), chatData); // 追加
    };
    const updateChat = (snap) => {
      data.chat = [];
      for (const key in snap) {
        data.chat.push({
          message: snap[key].message,
          uid: snap[key].uid,
          displayName: snap[key].displayName
        })
      }
    }
    const updateDisplayName = (name) => {
      updateProfile(data.user, {
        displayName: name
      });
      data.displayName = name
    }
    return {
      data,
      pushMessage, // 追加
      updateDisplayName
    }
  },
  beforeRouteEnter: (to, from, next) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        next();
      } else {
        next('/login');
      }
    });
  }
})
</script>

<template>
  <div class="container">
    <Header />
    <DisplayName v-model="data.displayName" @update="updateDisplayName" /> 
    <View :data="data" />
    <Send @sendMessage="pushMessage" />
  </div>
</template>

<style scoped>

</style>