<script setup lang="ts">
defineProps<{
  label: string
  placeholder: string
  name: string
  type: string
  modelValue: string
  value?: string
}>()
</script>

<template>
  <div>
    <label>{{ label }}</label>
    <div class="relative w-full mt-1">
      <input
        v-if="type !== 'radio'"
        :type="type"
        :name="name"
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 mb-4"
        :placeholder="placeholder"
        :value="modelValue"
        @input="($event) => $emit('update:modelValue', $event?.target?.value)"
      />
      <input
        v-else
        type="radio"
        :name="name"
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 mb-4"
        :placeholder="placeholder"
        :value="value"
        @input="($event) => $emit('update:modelValue', $event?.target?.value)"
      />
    </div>
  </div>
</template>
