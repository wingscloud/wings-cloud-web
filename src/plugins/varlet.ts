import { defineNuxtPlugin } from '#app'
import { Button } from '@varlet/ui'
import '@varlet/ui/es/button/style/index.js'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(Button)
})
