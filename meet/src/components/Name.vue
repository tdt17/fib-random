<script setup lang="ts">
  import { ref } from 'vue'
  import { config } from '../config'
  const name = ref(config.name)
  const submit = () => {
    config.name = name.value
  }
  const keypress = (event: KeyboardEvent) => {
    if(event.key === 'Enter') {
      submit()
    }
  }
</script>

<template>
  Enter your name: <input v-model="name" @keypress="keypress"> <button @click="submit">Go</button>
</template>