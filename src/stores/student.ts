import axios from 'axios'
import { defineStore } from 'pinia'
import type { Student } from '../types'
import { useToast } from 'vue-toastification'

const toast = useToast()
export const useStudentStore = defineStore('student', {
  state: () => ({
    students: [] as Student[]
  }),
  actions: {
    async getStudents({ name, classe }: { name?: string; classe?: string }) {
      const result = await axios.get('http://localhost:3000/students', {
        params: {
          name,
          classe
        }
      })
      this.students = result.data as Student[]
    },
    async getStudentById(id: string): Promise<Student | undefined> {
      return this.students.find((std) => std._id === id)
    },
    async creatStudent(student: Student) {
      try {
        const result = await axios.post('http://localhost:3000/students/create', {
          ...student
        })
        console.log(result.data)
        this.students = [...this.students, result.data]
        toast.success('Student created sucessfully')
      } catch (err) {
        console.log(err)
        toast.error('Error creating student')
      }
    },
    async updateStudent(student: Student) {
      try {
        const result = await axios.patch(`http://localhost:3000/students/${student._id}`, {
          ...student
        })
        console.log(result.data)
        toast.success('Student updated sucessfully')
      } catch (err) {
        console.log(err)
        toast.error('Error updating student')
      }
    },
    async deleteStudent(id: string) {
      try {
        const result = await axios.delete(`http://localhost:3000/students/${id}`)
        this.students = this.students.filter((std) => std._id !== id)
        console.log(result.data)
        toast.success('Student deleted sucessfully')
      } catch (err) {
        console.log(err)
        toast.error('Error deleting student')
      }
    }
  }
})
