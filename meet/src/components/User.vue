<script setup lang="ts">
import { User, allReady, updateUserState } from '../firestore'
import { config } from '../config'
const props = defineProps<{ name: string, user: User }>()
const toggleReady = () => {
  updateUserState(config.name, {
    ready: !props.user.ready
  })
}
</script>

<template>
  <div class="user">
    <h3>{{name}}</h3>
    <div>Ready:
      <span class="value" v-if="name === config.name"><button @click="toggleReady">{{user.ready}}</button></span>
      <span class="value" v-else>{{user.ready}}</span>
    </div>
    <div v-if="allReady">Estimate: 
      <span class="value">{{user.estimate}}</span>
    </div>
  </div>
</template>

<style>
  .user {
    border: 1px #000 solid;
    padding: 10px;
    margin: 10px;
    max-width: 100px;
  }
  h3 {
    margin-top: 10px;
    margin-bottom: 5px;
  }
  .value {
    font-size: 1.05em;
    font-weight: bold;
  }
</style>