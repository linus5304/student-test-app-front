<script setup lang="ts">
defineProps<{
  msg: string
  title: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    Hello my name is linus
    <div>{{ title }}</div>
  </div>
</template>

