import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDialogStore = defineStore('dialog', () => {
  const isOpen = ref(false)
  const onConfirmCallback = ref<(() => void) | null>(null)
  const description = ref('')

  function openDialog (content: string, onConfirm: () => void) {
    isOpen.value = true
    description.value = content

    onConfirmCallback.value = () => {
      onConfirm()
      closeDialog()
    }
  }
  
  function closeDialog () {
    isOpen.value = false
  }

  return { isOpen, description, openDialog, closeDialog, onConfirmCallback }
})
