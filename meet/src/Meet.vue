<script setup lang="ts">
  import { activeUsers, orderedActiveUsers } from './firestore'
  import User from './components/User.vue'
  import Settings from './components/Settings.vue'
  import Controls from './components/Controls.vue'
  import Result from './components/Result.vue'
</script>

<template>
  <div id="globalcontrols"></div>
  <Settings/>
  <Controls/>
  <div class="users">
    <User v-for="name in orderedActiveUsers" :name="name" :user="activeUsers[name]!"/>
  </div>
  <Result/>
</template>

<style>
  .users {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
  #globalcontrols {
    position: absolute;
    top: 10px;
    left: 10px;
  }
</style>