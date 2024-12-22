<template>
    <div>
        <h1>Login</h1>
        <div>
            <AuthForm @login="login" :auth_type="auth_type"/>

            <div class="flex flex-col gap-3" v-if="auth_type == 'login'">
                 <button @click="google_login">Google Login</button>
                <button>Apple Login</button>
                <button>Facebook Login</button>
                <GoogleLogin :callback="cb"></GoogleLogin>
            </div>

            <div class="flex flex-col gap-3" v-else>
                 <button>Google Register</button>
                <button>Apple Register</button>
                <button>Facebook Register</button>
            </div>
           

            <button class="my-4" @click="switchAuth">{{ auth_type == "register" ?  "login" : "register" }}</button>

        </div>
    </div>
</template>
"
<script setup>
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import AuthForm from '@/components/AuthForm'
import { GoogleLogin, googleSdkLoaded } from 'vue3-google-login';

const router = useRouter()

const store = useStore()

const auth_type = ref("register")

const cb = (res) => {
    console.log("Handle the response:", res)

  
}

const google_login = async () => {
    console.log("google_login")
    console.log("window*", window.google)

 
    if(window.google){
        console.log("window.google*:", window.google)
        window.google()

        /*googleSdkLoaded(g => {
        g.accounts.oauth2.initCodeClient({
            client_id: process.env.VUE_APP_CLIENT1,
            scope: "farrag.mustapha@gmail.com",
            state: "Enabled",
            //redirect_uri: "http://localhost:8080/profile",
            callback: response => {
                console.log("response:", response)
                if(response.code){
                    console.log("response:", response)
                }
            }

        })
    })*/

    }
    
}

const login = (email, pass) => {
    store.commit('setAuth')
    console.log("authview login: ", email, pass)
    localStorage.setItem('token', "asd67hfgg6hfhfkl9kl?!#-!!dj7jgh#hdj.dhf.mj23fgd")
    router.push('/')
}

const switchAuth = () => {
    if (auth_type.value == "login") {
        auth_type.value = "register"
    } else {
        auth_type.value = "login"
    }
}


watchEffect(() => {
    console.log(`store ${store.state['isAuth']}`)
    console.log(`auth_type ${auth_type.value}`)
})
</script>

<style scoped>


</style>