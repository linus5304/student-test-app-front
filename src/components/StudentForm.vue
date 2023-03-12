<script setup lang="ts">
import axios from 'axios'
import { onMounted, onUpdated, ref, toRef } from 'vue'
import type { Student } from '../types'
import InputFieldVue from './InputField.vue'
import { useStudentStore } from '../stores/student'

const props = defineProps<{
  id?: string
}>()

const { creatStudent, getStudents, getStudentById, updateStudent } = useStudentStore()

let newId = ref('')

let student = ref({
  _id: '',
  firstName: '',
  lastName: '',
  classe: '',
  gender: '',
  dateOfBirth: ''
})

onUpdated(async () => {
  console.log('Prop id', props.id)
  newId.value = props.id ?? ''
  console.log('New Id', newId.value)

  if (newId.value) {
    student.value = (await getStudentById(newId.value)) as Student

    console.log('New Student', student.value)
  } else {
    student.value = {
      _id: '',
      firstName: '',
      lastName: '',
      classe: '',
      gender: '',
      dateOfBirth: ''
    }
  }
})

async function handleSubmit() {
  console.log(JSON.stringify(student.value) + 'Does not')
  if (student.value._id !== '') {
    updateStudent(student.value)
  } else {
    creatStudent(student.value)
  }
  student.value = {
    _id: '',
    firstName: '',
    lastName: '',
    classe: '',
    gender: '',
    dateOfBirth: ''
  }
}
</script>

<script setup lang="ts"></script>

<template>
  <div class="w-1/3 p-4 bg-white rounded-lg shadow sm:p-6 xl:p-8">
    <div class="flex items-center justify-between">
      <h3 class="text-xl font-bold text-gray-900">
        {{ newId ? 'Update Student' : 'Add Student' }}
      </h3>
    </div>
    <div class="flex flex-col mt-6">
      <div class="overflow-x-auto rounded-lg">
        <div class="inline-block min-w-full align-middle">
          <div class="overflow-hidden shadow sm:rounded-lg">
            <form class="px-2 py-4" @submit.prevent="handleSubmit">
              <InputFieldVue
                placeholder="First name"
                label="First name"
                name="firstname"
                type="text"
                v-model="student.firstName"
              />
              <InputFieldVue
                placeholder="Last name"
                label="Last name"
                name="lastname"
                type="text"
                v-model="student.lastName"
              />
              <InputFieldVue
                placeholder="Class"
                label="Class"
                name="classe"
                type="text"
                v-model="student.classe"
              />
              <div class="flex space-x-6">
                <InputFieldVue
                  placeholder="MM/DD/YYYY"
                  label="Male"
                  name="gender"
                  type="radio"
                  value="M"
                  v-model="student.gender"
                />
                <InputFieldVue
                  placeholder="MM/DD/YYYY"
                  label="Female"
                  name="gender"
                  type="radio"
                  value="F"
                  v-model="student.gender"
                />
              </div>
              <InputFieldVue
                placeholder="MM/DD/YYYY"
                label="Date of birth"
                name="dateOfBirth"
                type="date"
                v-model="student.dateOfBirth"
              />
              <button
                type="submit"
                class="hidden sm:inline-flex text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center"
              >
                {{ newId ? 'Update' : 'Add' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
