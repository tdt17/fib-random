<script setup lang="ts">
import New from './New.vue'
import Meet from './Meet.vue'
import Name from './components/Name.vue';
import { computed, onMounted } from 'vue'
import { session } from './firestore';
import { config } from './config';
import { init } from './darkmode'

onMounted(init)

const currentView = computed(() => {
  if(!config.name) {
    return Name
  }
  if(session.loading) {
    return null
  }
  if(session.active) {
    return Meet
  }
  return New
})
</script>

<template>
  <component :is="currentView" />
</template>

<style>
  .theme-light {
    --background: #f8f8f8;
    --text: #2c3e50;
  }
  .theme-dark {
    --background: #313131;
    --text: #add6ff;
  }
  body {
    background-color: var(--background);
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--text);
    margin-top: 60px;
  }
  button.active {
    font-weight: bold;
    background-color: rgb(204, 222, 255);
  }
</style>
