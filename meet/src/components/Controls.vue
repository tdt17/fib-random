<script setup lang="ts">
import { session, user, updateUserState, orderedViewingUsers } from '../firestore'
import { config } from '../config'
import { ref, Teleport } from 'vue';
import { deleteField } from 'firebase/firestore';

const toggleViewOnly = () => {
  updateUserState(config.name, {
    viewOnly: !user.value?.viewOnly
  })
}
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
  if(user.value?.viewOnly) {
    return
  }
  if(['Backspace'].includes(event.key)) {
    clearTimeout(timeoutHandle)
    quickSelect.value = ''
    toggleOption(null, false)
    return
  }
  if(event.key.length > 1) {
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
  <Teleport to="#globalcontrols">
    <button 
      @click="toggleViewOnly"
      :class="{active: user?.viewOnly}"
      title="View Mode"
    >👁</button>
    <div class="viewer" v-show="orderedViewingUsers.length > 0">
      Viewer:
      <span 
        v-for="viewer in orderedViewingUsers"
        :class="{active: viewer === config.name}"
      >{{viewer}}</span>
    </div>
  </Teleport> 
  <div>{{quickSelect}}</div>
  <button
    v-show="!user?.viewOnly"
    v-for="option in session.state?.settings.options"
    :class="{active: option === user?.estimate}"
    @click="toggleOption(option)"
  >{{option}}</button>
</template>

<style>
  .viewer {
    display: inline;
    margin: 8px;
  }
  .viewer span {
    padding: 2px 4px;
    margin: 4px;
    background-color: #eee;
    border-radius: 5px;
  }
  .viewer span.active {
    background-color: rgb(204, 222, 255);
  }
</style>