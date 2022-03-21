<script setup lang="ts">
  import { ref, watch } from 'vue'
  import { session, updateState } from '../firestore'
  import { config, configMode } from '../config'
  const toggle = () => {
    configMode.value = !configMode.value
  }
  const optionsText = ref(session.state?.settings.options.join(';'))
  watch(() => session.state?.settings.options.join(';'), (text) => {
    optionsText.value = text
  })
  const update = () => {
    updateState({
      options: optionsText.value?.split(';') ?? [],
      openSettings: session.state?.settings.openSettings
    })
  }
</script>

<template>
  <Teleport to="#globalcontrols">
    <button
      v-if="session.state?.settings.admin === config.name" 
      :class="{active: configMode}"
      @click="toggle"
    >⚙️</button>
  </Teleport>
  <div v-if="configMode" class="settings">
    <h3>Settings</h3>
    Settings for all available: <input type="checkbox" v-model="session.state!.settings.openSettings"><br>
    Options: <input v-model="optionsText"><br>
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