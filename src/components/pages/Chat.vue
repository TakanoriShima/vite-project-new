<!-- <script setup>でない点に注意 -->
<script>
import { defineComponent, reactive } from 'vue'
import View from '../chat/View.vue' // 追加
import Send from '../chat/Send.vue'

// TypeScript に Vue コンポーネントオブションのなかで適切に型を推論させるために、defineComponent グローバルメソッドでコンポーネントを定義する必要があります:
export default defineComponent({
  components: {
    View,
    Send
  },
  setup() {
    const data = reactive({
      user: {},
      chat: [ // ここにチャットデータを追加
        {
          displayName: "テスト1さん",
          uid: "test1",
          message: "ああああああ",
        },
        {
          displayName: "テスト2さん",
          uid: "test2",
          message: "いいいいい",
        },
        {
          displayName: "テスト3さん",
          uid: "test3",
          message: "ううううう",
        },
      ],
      input: '',
      displayName: ''
    })
    return {
      data
    }
  },
})
</script>

<template>
  <div class="container">
    <View :data="data" />
    <Send />
  </div>
</template>

<style scoped>

</style>