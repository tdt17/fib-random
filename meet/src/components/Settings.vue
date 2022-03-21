<script setup lang="ts">
  import { ref, watch } from 'vue'
  import { session, updateState, isAdmin, State } from '../firestore'
  import { config, configMode } from '../config'
  import { deleteField } from 'firebase/firestore'
  const toggle = () => {
    configMode.value = !configMode.value
  }
  const optionsText = ref(session.state?.settings.options.join(';'))
  watch(() => session.state?.settings.options.join(';'), (text) => {
    optionsText.value = text
  })
  const name = ref(config.name)
  const openSettings = ref(session.state?.settings.openSettings)
  const update = () => {
    const newState: RecursivePartial<State> = {}
    if(name.value !== config.name) {
      if(session.state?.users[name.value]) {
        alert(`Name "${name.value}" is already taken`)
        name.value = config.name
        return
      }
      newState.users = {
        [config.name]: deleteField() as any
      }
      config.name = name.value
    }
    if(isAdmin.value) {
      newState.settings = {
        options: optionsText.value?.split(';') ?? [],
        openSettings: openSettings.value
      }
    }
    updateState(newState)
  }
</script>

<template>
  <Teleport to="#globalcontrols">
    <button
      :class="{active: configMode}"
      @click="toggle"
    >⚙️</button>
  </Teleport>
  <div v-if="configMode" class="settings">
    <h3>Settings</h3>
    <div>Name: <input v-model="name"></div>
    <div v-if="isAdmin">Options: <input v-model="optionsText"></div>
    <div v-if="isAdmin">Settings for all available: <input type="checkbox" v-model="openSettings"></div>
    <button @click="update">save</button>
  </div>
</template>

<style>
  .settings {
    margin-bottom: 20px;
  }
  .settings > * {
    margin: 5px;
  }
</style>