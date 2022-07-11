import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    Nprogress.start()
    if (to.path === '/article') {
      Nprogress.done()
      return
      // alert('正常访问')
    } else if (to.path === '/test') {
      Nprogress.done()
      // alert('禁止访问')
      abortNavigation() // 停止当前导航，可以使用 error 进行报错
      return navigateTo('/')
    }
    Nprogress.done()
  }
})
