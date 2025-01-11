<script setup>
import { useStorage } from '@/composables/useStorage'

let food = useStorage('food', 'salad')
let age = useStorage('age')
</script>

<template>
  <main>
    <p>
      What is your favorite food?
      <input type="text" v-model="food" />
    </p>

    <p>
      What is your age?
      <input type="text" v-model="age" />
    </p>
  </main>
</template>
