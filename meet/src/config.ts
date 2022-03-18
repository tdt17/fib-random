import { reactive, watch } from "vue"

const CONFIG_KEY = 'fib-config'

export const config = reactive({
  name: ''
})

Object.assign(config, JSON.parse(localStorage.getItem(CONFIG_KEY) || '{}'))

watch(config, (config) => {
  localStorage.setItem(CONFIG_KEY, JSON.stringify(config))
})
