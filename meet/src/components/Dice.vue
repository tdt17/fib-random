<script setup lang="ts">
  import { computed, ref, watch } from 'vue';
  import { session } from '../firestore'
  const props = withDefaults(defineProps<{ 
    roll: boolean
    value: string
    values: string[]
    scale?: number
    speed?: number
  }>(), {
    scale: 0.2,
    speed: 1
  })
  const sides = computed(() => props.roll ? new Array(20).fill('?') : new Array(20).fill(props.value))
  const rotation = ref([0, 0, 0])

  let stop: Function
  const start = () => {
    const handle = setInterval(() => {
      const [x, y, z] = rotation.value
      const speed = props.speed * 300
      const dist = [Math.random(), Math.random(), Math.random()]
      const sum = dist[0] + dist[1] + dist[2]
      const [vx, vy, vz] = [speed * dist[0] / sum, speed * dist[1] / sum, speed * dist[2] / sum]
      rotation.value = [x + vx, y + vy, z + vz]
    }, 1000)
    stop = () => clearInterval(handle)
  }

  watch(() => props.roll, (roll) => {
    if(roll) {
      start()
    }else{
      stop?.()
      rotation.value = [231,107,0]
    }
  }, { immediate: true })
</script>

<template>
  <div class="dice-box" :style="{width: 400 * props.scale + 'px', height: 400 * props.scale + 'px'}">
    <ul class="d20" :style="{
      transform: `scale3d(${props.scale},${props.scale},${props.scale}) rotateX(${rotation[0]}deg) rotateY(${rotation[1]}deg) rotateZ(${rotation[2]}deg)`,
      transition: `1s ${props.roll ? 'linear' : 'ease-out'}`
    }">
      <li v-for="side in sides">{{side}}</li>
    </ul>
  </div>
</template>

<style>
  :root {
    --base-size: 10rem;
    --base-height: 8.65rem;
  }

  .dice-box {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 150px;
    z-index: 100;
    overflow: none;
  }

  .d20 {
    position: relative;
    width: var(--base-size);
    height: 8.45rem;
    transform-style: preserve-3d;
  }

  .d20, .d20 > * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .d20 > * {
    width: var(--base-size);
    height: var(--base-height);
    position: absolute;
    clip-path: polygon(0 0, 50% 100%, 100% 0);
    transform-origin: top;
    background-color: #000;
    background: linear-gradient(180deg, #fff3 0, #fff3 0%, #0000 2%, #0000 100%),
      linear-gradient(300deg, #fff3 0, #fff3 32.5%, #0000 35%, #0000 100%),
      linear-gradient(60deg, #fff3 0, #fff3 32.5%, #0000 35%, #0000 100%),
      linear-gradient(0deg, #06c 0, #06c 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    color: #fff;
    line-height: -1;
    padding-bottom: 3rem;
    --d: 6.9rem;
  }

  /* Grouped faces so opposites are together. */
  /* They should add up to 21. */

  .d20 > *:nth-child(1) {
    transform: rotateY(0.7turn) translateZ(calc(var(--d) * -1)) rotateX(127deg);
  }
  .d20 > *:nth-child(20) {
    bottom: calc(var(--base-height) * -1);
    transform: rotateY(0.7turn) translateZ(var(--d)) rotateX(307deg);
  }

  .d20 > *:nth-child(2) {
    transform: rotateY(0.6turn) translateZ(var(--d)) rotateX(11deg);
  }
  .d20 > *:nth-child(19) {
    bottom: calc(var(--base-height) * -1);
    transform: rotateY(0.6turn) translateZ(calc(var(--d) * -1)) rotateX(191deg);
  }

  .d20 > *:nth-child(3) {
    bottom: calc(var(--base-height) * -1);
    transform: rotateY(1turn) translateZ(calc(var(--d) * -1)) rotateX(191deg);
  }
  .d20 > *:nth-child(18) {
    transform: rotateY(1turn) translateZ(var(--d)) rotateX(11deg);
  }

  .d20 > *:nth-child(4) {
    transform: rotateY(0.3turn) translateZ(calc(var(--d) * -1)) rotateX(127deg);
  }
  .d20 > *:nth-child(17) {
    bottom: calc(var(--base-height) * -1);
    transform: rotateY(0.3turn) translateZ(var(--d)) rotateX(307deg);
  }

  .d20 > *:nth-child(5) {
    transform: rotateY(0.8turn) translateZ(var(--d)) rotateX(11deg);
  }
  .d20 > *:nth-child(16) {
    bottom: calc(var(--base-height) * -1);
    transform: rotateY(0.8turn) translateZ(calc(var(--d) * -1)) rotateX(191deg);
  }

  .d20 > *:nth-child(6) {
    transform: rotateY(0.9turn) translateZ(calc(var(--d) * -1)) rotateX(127deg);
  }
  .d20 > *:nth-child(15) {
    bottom: calc(var(--base-height) * -1);
    transform: rotateY(0.9turn) translateZ(var(--d)) rotateX(307deg);
  }

  .d20 > *:nth-child(7) {
    bottom: calc(var(--base-height) * -1);
    transform: rotateY(0.2turn) translateZ(calc(var(--d) * -1)) rotateX(191deg);
  }
  .d20 > *:nth-child(14) {
    transform: rotateY(0.2turn) translateZ(var(--d)) rotateX(11deg);
  }

  .d20 > *:nth-child(8) {
    transform: rotateY(0.1turn) translateZ(calc(var(--d) * -1)) rotateX(127deg);
  }
  .d20 > *:nth-child(13) {
    bottom: calc(var(--base-height) * -1);
    transform: rotateY(0.1turn) translateZ(var(--d)) rotateX(307deg);
  }

  .d20 > *:nth-child(9) {
    transform: rotateY(0.4turn) translateZ(var(--d)) rotateX(11deg);
  }
  .d20 > *:nth-child(12) {
    bottom: calc(var(--base-height) * -1);
    transform: rotateY(0.4turn) translateZ(calc(var(--d) * -1)) rotateX(191deg);
  }

  .d20 > *:nth-child(10) {
    transform: rotateY(.5turn) translateZ(calc(var(--d) * -1)) rotateX(127deg);
  }
  .d20 > *:nth-child(11) {
    bottom: calc(var(--base-height) * -1);
    transform: rotateY(.5turn) translateZ(var(--d)) rotateX(307deg);
  }

  @keyframes rotate {
    from {
      transform: rotateX(0deg) rotateY(360deg) rotateZ(360deg);
    }
    to {
      transform: rotateX(231deg) rotateY(107deg) rotateZ(0deg);
    }
  }
</style>