<script setup>
const props = defineProps({
  id: String,
  title: String,
})
</script>

<template>
  <div class="form-outline mb-4">
    <input type="password" :id="props.id" class="form-control form-control-lg" />
    <label class="form-label" :for="props.id">{{props.title}}</label>
  </div>
</template>

<style scoped>
</style>