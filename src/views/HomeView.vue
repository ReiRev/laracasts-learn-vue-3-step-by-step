<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { ref } from 'vue'

const message = ref('Hello World!')
setTimeout(() => {
  message.value = 'I Have Been Changed'
}, 2000)
</script>

<template>
  <main>
    <TheWelcome />
    <p>{{ message }}</p>
    <p>
      <input type="text" v-model="message" />
    </p>
  </main>
</template>
