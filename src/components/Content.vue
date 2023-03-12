<script setup lang="ts">
import { onUpdated, ref } from 'vue'
import List from './List.vue'
import StudentForm from './StudentForm.vue'

let myId = ref('')

function handleAdd(){
  console.log("Handle add")
  myId.value = ''
}

function handleEdit(id: string) {
  console.log('parent id', id)
  myId.value = id
  console.log(myId.value)
}

onUpdated(() => {
  handleEdit(myId.value)
})
</script>

<template>
  <div id="main-content" class="relative w-full h-screen overflow-y-auto bg-gray-50 lg:ml-64">
    <main>
      <div class="px-4 pt-6">
        <div class="flex w-full space-x-6">
          <Suspense>
            <List @editFormItem="handleEdit" @addFormItem="handleAdd"/>
          </Suspense>
          <StudentForm :id="myId" />
        </div>
      </div>
    </main>
  </div>
</template>
