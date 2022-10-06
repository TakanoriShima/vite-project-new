<script setup>
import { ref } from "vue";

const input = ref('');
const doSend = () => {
  if (input.value === '') return;
  input.value = '';
}
</script>

<template>
  <div class="input-group mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="メッセージを入力してください"
      v-model="input"
    />
    <button
      class="btn btn-outline-secondary js-send-message"
      type="button"
      @click="doSend()"
    >
      メッセージ送信
    </button>
  </div>
</template>