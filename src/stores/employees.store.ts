import { defineStore } from 'pinia'
import { Employee } from '@/types/Employee'

export const useEmployeesStore = defineStore('employees', {
  state: () => ({
    employees: [
      {
        id: 1,
        firstName: '',
        lastName: '',
        position: '',
        bankAccountNumber: '',
      } as Employee
    ] as Employee[],
  }),
  actions: {
  
  },
  persist: true
})

