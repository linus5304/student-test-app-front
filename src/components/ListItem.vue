<script setup lang="ts">
defineProps<{
  idx: number
  id?: string
  firstName: string
  lastName: string
  classe: string
}>()


</script>

<template>
  <td class="p-4 text-sm font-normal text-gray-900 whitespace-nowrap">
    <span class="font-semibold">{{ idx }}</span>
  </td>
  <td class="p-4 text-sm font-normal text-gray-900 whitespace-nowrap">
    <img
      class="w-8 h-8 rounded-full"
      src="https://demo.themesberg.com/windster/images/users/neil-sims.png"
      alt="Neil image"
    />
  </td>
  <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap">
    {{ `${lastName} ${firstName}` }}
  </td>
  <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap">{{ classe }}</td>
  <td class="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap">
    <div class="inline-flex items-center space-x-2 text-base font-semibold text-gray-900">
      <v-icon name="fa-edit" class="text-green-600 cursor-pointer" @click="$emit('editItem', id)"/>
      <v-icon name="fa-trash" class="text-red-600 cursor-pointer"  @click="$emit('deleteItem', id)"/>
    </div>
  </td>
</template>
