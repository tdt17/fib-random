<script setup lang="ts">
import New from './New.vue'
import Meet from './Meet.vue'
import Name from './components/Name.vue';
import { computed } from 'vue'
import { session } from './firestore';
import { config } from './config';

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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
