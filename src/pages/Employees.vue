<template>
  <v-card
    class="pa-8 border mt-6 bg-squared rounded-xl"
    elevation="0"
    width="100%"
  >
    <v-card-title class="text-h4 font-weight-bold">
      {{ $t('employees.title') }}
    </v-card-title>

    <v-card-text>
      <v-card
        class="pa-8 border rounded-xl"
        elevation="0"
      >
        <employees-header />

        <v-table
          :items="employees"
          class="mt-6"
          dense
          outlined
        >
          <thead>
            <tr>
              <th>{{ $t('employees.firstName') }}</th>
              <th>{{ $t('employees.lastName') }}</th>
              <th>{{ $t('employees.position') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="employee in employees"
              :key="employee.id"
            >
              <td>
                <v-text-field
                  v-model="employee.firstName"
                  outlined
                  dense
                  variant="outlined"
                />
              </td>
              <td>
                <v-text-field
                  v-model="employee.lastName"
                  outlined
                  dense
                  variant="outlined"
                />
              </td>
              <td>
                <v-text-field
                  v-model="employee.position"
                  outlined
                  dense
                  variant="outlined"
                />
              </td>

              <td class="text-center w-0">
                <v-btn
                  icon
                  color="red"
                  variant="text"
                  @click="deleteEmployee(employee.id)"
                >
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>

        <v-btn 
          color="primary"
          variant="contained"
          class="mt-6"
          @click="addEmployee"
        >
          {{ $t('employees.addEmployee') }}
        </v-btn>
      </v-card>
    </v-card-text>
  </v-card>
</template>
``
<script lang="ts">
import { useEmployeesStore } from '@/stores/employees.store'
import { Component, Vue, toNative } from 'vue-facing-decorator'
import { Action, State } from '@/utils/PiniaDecorators'
import { Employee } from '@/types/Employee'
import EmployeesHeader from '@/components/Employee/EmployeesHeader.vue'

@Component({
  name: 'Employees',
  components: { EmployeesHeader }
})
class Employees extends Vue {
  @State(useEmployeesStore, 'employees') 
  employees!: Employee[]

  @Action(useEmployeesStore, 'addEmployee')
  addEmployee!: () => void

  @Action(useEmployeesStore, 'deleteEmployee')
  deleteEmployee!: (id: number) => void
}
let component = Employees;
(function () { component = toNative(component) })()
export default component
</script>

<style>
.bg-squared {
  --tile: 50px;
  --bg: #fafafa;
  --line: rgba(0,0,0,0.03);
  width: 320px;
  padding: 20px;
  border-radius: 8px;
  background-color: var(--bg);

  background-image:
      linear-gradient(to right, transparent 0 calc(var(--tile) - 1px), var(--line) calc(var(--tile) - 1px) var(--tile)),
      linear-gradient(to bottom, transparent 0 calc(var(--tile) - 1px), var(--line) calc(var(--tile) - 1px) var(--tile));
  background-size: var(--tile) var(--tile);
  box-shadow: 0 6px 18px rgba(15,20,25,0.08);
}
</style>
