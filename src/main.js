import { createApp } from 'vue'
import App from './App.vue'
import './assets/global.css'
import router from './router'
import mitt from 'mitt'
import { store } from './store/auth.store'
import vue3GoogleLogin, { googleSdkLoaded } from 'vue3-google-login'

const emitter = mitt()

const vueApp = createApp(App)


const app = createApp(App)

window.sum = () => {
    console.log("sum")
}

window.sum()

window.google = () => { return googleSdkLoaded(g => {
    g.accounts.oauth2.initCodeClient({
        client_id: process.env.VUE_APP_CLIENT1,
        scope: "farrag.mustapha@gmail.com",
        callback: response => {
            console.log("response:", response)
            if(response.code){
                console.log("response:", response)
            }
        }
     })
})}
console.log("window", window.google)

const script = document.createElement('script');
script.src = 'https://accounts.google.com/gsi/client';
script.async = true;
script.defer = true;
script.onload = () => {
  window.google() // Trigger callback manually
};
document.head.appendChild(script);

app.use(vue3GoogleLogin, {
  clientId: process.env.VUE_APP_CLIENT1,
  prompt: true,
  idConfiguration: {
    client_id: process.env.VUE_APP_CLIENT1,
    prompt_parent_id: true,
    

}
})

console.log("env:",process.env.VUE_APP_CLIENT1,)

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

