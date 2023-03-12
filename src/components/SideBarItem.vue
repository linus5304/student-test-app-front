<script setup lang="ts">
defineProps<{
  icon?: string
  title: string
}>()
</script>

<template>
  <li>
    <a
      href="#"
      class="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
    >
      <v-icon :name="icon" />
      <span class="ml-3">{{ title }}</span>
    </a>
  </li>
</template>
