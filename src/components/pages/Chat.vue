<!-- <script setup>でない点に注意 -->
<script>
import { defineComponent, reactive } from 'vue'
import View from '../chat/View.vue' // 追加

// TypeScript に Vue コンポーネントオブションのなかで適切に型を推論させるために、defineComponent グローバルメソッドでコンポーネントを定義する必要があります:
export default defineComponent({
  components: {
    View
  },
  setup() {
    const data = reactive({
      user: {},
      chat: [],
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
    <View />
  </div>
</template>

<style scoped>

</style>