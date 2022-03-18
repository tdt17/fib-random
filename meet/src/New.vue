<script setup lang="ts">
  import { session, addSession } from './firestore'

  const newSession = async () => {
    const id = await addSession()
    window.location.hash = id
  }
</script>

<template>
  <div v-show="session.id">Meet "{{session.id}}" not found</div>
  <button @click="newSession">New Meet</button>
</template>