import { createApp } from 'vue'
import App from './App.vue'
import './assets/global.css'
import router from './router'
import mitt from 'mitt'
import { store } from './store/auth.store'
import vue3GoogleLogin from 'vue3-google-login'

const emitter = mitt()

const vueApp = createApp(App)


const app = createApp(App)

app.use(vue3GoogleLogin, {
  clientId: '537581329110-qen06jead1ml8hotoa9n5fl3hk1rol47.apps.googleusercontent.com',
  prompt: true,
  idConfiguration: {
    client_id: '537581329110-qen06jead1ml8hotoa9n5fl3hk1rol47.apps.googleusercontent.com',
    prompt_parent_id: true,
    

}
})



vueApp.provide('emitter', emitter).use(store).use(router).mount('#app')

vueApp.directive("maxSize", (el, order) => {
    el.style.fontsize = order.value + "px"
})

vueApp.directive("changeColor", (el, order) => {
    el.style.color = order.value
})

vueApp.directive("color", (el, binding ) => {
    el.style.backgroundColor = binding.value
    //el.style.color = binding.value
    console.log('#',`${binding.value}`)
})

vueApp.directive("textColor", (el, binding) => {
    console.log("textColor:", binding)
    el.style.color = binding.value
})

