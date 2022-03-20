<script setup lang="ts">
import { User, allReady } from '../firestore'
import { config } from '../config'
import Dice from './Dice.vue'
defineProps<{ name: string, user: User }>()
</script>

<template>
  <div class="user" :class="{active: name === config.name}">
    <h3>{{name}} {{user.ready ? '✔' : '◻︎'}}</h3>
    <Dice :roll="!user.ready" :value="allReady ? user.estimate || '' : '?'" :values="[]" />
  </div>
</template>

<style>
  .user {
    border: 1px #0004 solid;
    padding: 10px;
    margin: 10px;
  }
  .user.active {
    border: 1px #000 solid;
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