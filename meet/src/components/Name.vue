<script setup lang="ts">
  import { ref } from 'vue'
  import { config } from '../config'
  const name = ref(config.name)
  const submit = () => {
    config.name = name.value
  }
</script>

<template>
  Enter your name: <input v-model="name"> <button @click="submit">Go</button>
</template>