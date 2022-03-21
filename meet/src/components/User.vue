<script setup lang="ts">
import { User, allReady, updateUserState } from '../firestore'
import { config, configMode } from '../config'
import Dice from './Dice.vue'
const props = defineProps<{ name: string, user: User }>()
const viewOnly = () => {
  updateUserState(props.name, {
    viewOnly: true
  })
}
</script>

<template>
  <div class="user" :class="{active: name === config.name, 'view-mode': user.viewOnly}">
    <div class="configs" v-show="configMode">
      <button @click="viewOnly">👁</button>
    </div>
    <h3>{{name}} {{user.ready ? '✔' : '◻︎'}}</h3>
    <Dice :roll="!user.ready" :value="allReady ? user.estimate || '' : '?'" :values="[]" />
  </div>
</template>

<style>
  .user {
    position: relative;
    border: 1px #0004 solid;
    padding: 10px;
    margin: 10px;
  }
  .user.active {
    border: 1px #000 solid;
  }
  .user .configs{
    position: absolute;
    top: 0;
    left: 0;
  }
  h3 {
    margin-top: 10px;
    margin-bottom: 5px;
  }
  .value {
    font-size: 1.05em;
    font-weight: bold;
  }
  .view-button {
    position: absolute;
    top: 5px;
    left: 5px;
  }
</style>