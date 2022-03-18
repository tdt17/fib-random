<script setup lang="ts">
  import { session, orderedUsers } from './firestore'
  import User from './components/User.vue'
</script>

<template>
  <div class="users" v-for="name in orderedUsers">
    <User :name="name" :user="session.state?.users[name]!"/>
  </div>
</template>

<style>
  .users {
    display: flex;
    justify-content: center;
  }
</style>