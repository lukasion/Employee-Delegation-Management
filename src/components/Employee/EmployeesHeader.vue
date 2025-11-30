<template>
  <v-alert
    type="info"
    dense
    variant="tonal"
    closable
    close-label="Close Alert"
    color="deep-purple-accent-4 mb-6"
  >
    <p>
      {{ $t('employees.info') }}
    </p>
  </v-alert>

  {{ employeeCount }} Employees found.
</template>

<script lang="ts">
import { useEmployeesStore } from "@/stores/employees.store"
import { Employee } from "@/types/Employee"
import { State } from "@/utils/PiniaDecorators"
import { toNative, Vue } from "vue-facing-decorator"
import { Component } from "vue-facing-decorator"

@Component({
  name: 'EmployeesHeader',
  components: {  }
})
class EmployeesHeader extends Vue {
  @State(useEmployeesStore, 'employees') 
  employees!: Employee[]

  fillableFields: string[] = ['firstName', 'lastName', 'position']

  get employeeCount (): number {
    return this.employees
      .filter(employee => 
        this.fillableFields.some(field => {
          const value = employee[field as keyof Employee]

          return value !== null && value !== undefined && value.toString().trim() !== ''
        })
      )
      .length
  }

}
let component = EmployeesHeader;
(function () { component = toNative(component) })()
export default component
</script>