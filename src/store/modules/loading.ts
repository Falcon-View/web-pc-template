import { defineStore } from 'pinia'
import store from '@/store'

export const useLoadingStore = defineStore({
  id: 'loading',

  state: () => {
    return {
      loading: false,
    }
  },

  actions: {
    open() {
      this.loading = true
      console.log('成功')
    },
    close() {
      this.loading = false
    },
  },
})

// Need to be used outside the setup
export function useLoadingStoreWithOut() {
  return useLoadingStore(store)
}
