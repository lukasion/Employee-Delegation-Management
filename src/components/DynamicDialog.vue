<template>
  <v-dialog
    v-model="isOpen"
    max-width="600"
  >
    <v-card>
      <v-card-title class="text-h5">
        Confirmation
      </v-card-title>

      <v-card-text>
        <p>{{ description }}</p>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn
          color="primary"
          text
          @click="onConfirmCallback && onConfirmCallback()"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { toNative, Vue } from "vue-facing-decorator"
import { Component } from "vue-facing-decorator"
import { useDialogStore } from "@/stores/dialog.store"
import { State } from "@/utils/PiniaDecorators"

@Component({
  name: 'DynamicDialog',
  components: {  }
})
class DynamicDialog extends Vue {
    @State(useDialogStore, 'isOpen')
    isOpen!: boolean

    @State(useDialogStore, 'onConfirmCallback')
    onConfirmCallback!: (() => void) | null

    @State(useDialogStore, 'description')
    description!: string
}
let component = DynamicDialog;
(function () { component = toNative(component) })()
export default component
</script>