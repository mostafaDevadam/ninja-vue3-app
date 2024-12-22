import { createApp } from 'vue'
import App from './App.vue'
import './assets/global.css'
import router from './router'
import mitt from 'mitt'
import { store } from './store/auth.store'

const emitter = mitt()

const vueApp = createApp(App)
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

