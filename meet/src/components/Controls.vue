<script setup lang="ts">
import { session, updateUserState } from '../firestore'
import { config } from '../config'
import { computed, ref } from 'vue';
import { deleteField } from 'firebase/firestore';

const user = computed(() => session.state?.users[config.name])
const toggleOption = (option: string | null, forceReady?: boolean) => {
  const sameOption = user.value?.estimate === option
  const newReady = forceReady ?? (sameOption ? !user.value?.ready : true)
  updateUserState(config.name, {
    ready: newReady,
    estimate: newReady ? option : deleteField() as any
  })
}
const quickSelect = ref('')
let timeoutHandle: any
document.addEventListener('keydown', (event) => {
  if(['Backspace'].includes(event.key)) {
    clearTimeout(timeoutHandle)
    quickSelect.value = ''
    toggleOption(null, false)
    return
  }
  quickSelect.value += event.key
  clearTimeout(timeoutHandle)
  timeoutHandle = setTimeout(() => {
    if(session.state?.settings.options.includes(quickSelect.value)) {
      toggleOption(quickSelect.value, true)
    }
    quickSelect.value = ''
  }, 500)
})
</script>

<template>
  <div>{{quickSelect}}</div>
  <button 
    v-for="option in session.state?.settings.options"
    :class="{active: option === user?.estimate}"
    @click="toggleOption(option)"
  >{{option}}</button>
</template>

<style>
  button.active {
    font-weight: bold;
  }
</style>