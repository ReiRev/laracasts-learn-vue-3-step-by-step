<script setup>
import QuizFooterLinks from '@/components/Quiz/QuizFooterLinks.vue'
import { inject } from 'vue'
let quiz = inject('quiz')
</script>

<template>
  <footer>
    <h5>Quiz Footer</h5>
    <QuizFooterLinks :quiz="quiz" />
  </footer>
</template>
