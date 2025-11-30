import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Employee } from '@/types/Employee'
import { State } from '@/utils/PiniaDecorators'
import { useDialogStore } from './dialog.store'
import i18n from '@/i18n'
import { useI18n } from 'vue-i18n'

const defaultEmployee: Employee = {
  id: 0,
  firstName: '',
  lastName: '',
  position: '',
  bankAccountNumber: '',
}

export const useEmployeesStore = defineStore('employees', () => {
  const dialogStore = useDialogStore()

  const employees = ref<Employee[]>([
    { ...defaultEmployee, id: 1 },
  ])

  function addEmployee () {
    employees.value.push({
      ...defaultEmployee,
      id:
        employees.value.length > 0
          ? Math.max(...employees.value.map(e => e.id)) + 1
          : 1,
    })
  }

  function deleteEmployee (id: number) {
    dialogStore.openDialog(useI18n().t('employees.confirmDeleteEmployee'), () => {
      employees.value = employees.value.filter(e => e.id !== id)
    })
  }

  return { employees, addEmployee, deleteEmployee }
},
{
  persist: {
    enabled: true,
  },
})
