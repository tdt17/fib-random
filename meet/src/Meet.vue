<script setup lang="ts">
  import { session, orderedUsers } from './firestore'
  import User from './components/User.vue'
  import Settings from './components/Settings.vue'
  import Controls from './components/Controls.vue'
import Result from './components/Result.vue';
</script>

<template>
  <Settings/>
  <Controls/>
  <div class="users">
    <User v-for="name in orderedUsers" :name="name" :user="session.state?.users[name]!"/>
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
</style>