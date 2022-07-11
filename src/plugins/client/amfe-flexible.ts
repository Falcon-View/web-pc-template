import { defineNuxtPlugin } from '#app'
import flexible from 'amfe-flexible'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.vueApp.use(flexible())
  }
})
