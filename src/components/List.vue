<script setup lang="ts">
import axios from 'axios'
import { onMounted, onUpdated } from 'vue'
import type { Student } from '../types'
import ListItem from './ListItem.vue'

import { useStudentStore } from '../stores/student'

const { students, getStudents, $state, deleteStudent } = useStudentStore()

await getStudents({})

console.log('My data', $state.students)

const emit = defineEmits(['editFormItem', 'addFormItem'])

function handleAdd() {
  emit('addFormItem')
}

function handleEdit(id: string) {
  emit('editFormItem', id)
}

async function handleDelete(id: string) {
  console.log('Id ', id)
  await deleteStudent(id)
}
</script>

<template>
  <div class="flex-1 h-full p-4 mb-4 bg-white rounded-lg shadow sm:p-6">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-xl font-bold leading-none text-gray-900">List of Students</h3>
      <button
        @click="handleAdd"
        class="hidden sm:inline-flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3"
      >
        Add
      </button>
    </div>
    <div class="flow-root">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th
              scope="col"
              class="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              #id
            </th>
            <th
              scope="col"
              class="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Image
            </th>
            <th
              scope="col"
              class="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Name
            </th>
            <th
              scope="col"
              class="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Class
            </th>
            <th
              scope="col"
              class="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody class="bg-white">
          <tr v-for="(student, idx) in $state.students">
            <ListItem
              :idx="(idx + 1)"
              :id="student._id"
              :firstName="student.firstName"
              :lastName="student.lastName"
              :classe="student.classe"
              :gender="student.classe"
              :dateOfBirth="student.dateOfBirth"
              :key="student._id"
              @editItem="handleEdit"
              @deleteItem="handleDelete"
            />
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
