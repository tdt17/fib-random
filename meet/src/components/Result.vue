<script setup lang="ts">
import { deleteField } from 'firebase/firestore';
import { computed } from 'vue';
import { allReady, activeUsers, isAdmin, updateState, State, session, User } from '../firestore'
import Dice from './Dice.vue';
const values = computed(() => {
  const users = Object.values(activeUsers.value)
  return users.reduce((values, {estimate = ''}) => {
    values[estimate] = (values[estimate] ?? 0) + 1
    return values
  },{} as {[val: string]: number})
})
const next = () => {
  const users: State['users'] = Object.fromEntries(
    Object.keys(session.state?.users || {})
      .map(name => [name, { 
        ready: false, 
        estimate: deleteField() as any
      } as User])
  )
  updateState({ users })
}
</script>

<template>
  <div v-if="allReady" class="results">
    <h3>Result:</h3>
    <Dice v-show="Object.keys(values).length <= 2" :roll="false" :value="Math.max(...Object.keys(values) as any) + ''" :values="[]" />
    <div>
      <span class="entry" v-for="(times, value) in values">{{times}}x {{value}}</span>
    </div>
    <button v-if="isAdmin" @click="next">Next</button>
  </div>
</template>

<style>
  .results {
    font-size: 1.2em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .results .entry{
    font-weight: bold;
    padding: 10px;
  }
</style>