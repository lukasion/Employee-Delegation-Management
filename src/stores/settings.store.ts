import { defineStore } from 'pinia'
import type { AppSettings } from '@/types/AppSettings'

export const useSettingsStore = defineStore('settings', {
  state: (): AppSettings => ({
    companyName: null
  }),
  actions: {
    updateSettings(payload: Partial<AppSettings>) {
      this.$patch(payload)
    },
  },
  persist: true
})

