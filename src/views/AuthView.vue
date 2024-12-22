<template>
    <div>
        <h1>Login</h1>
        <div>
            <AuthForm @login="login" :auth_type="auth_type"/>

            <button @click="switchAuth">{{ auth_type == "register" ?  "login" : "register" }}</button>

        </div>
    </div>
</template>
"
<script setup>
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import AuthForm from '@/components/AuthForm'

const router = useRouter()

const store = useStore()

const auth_type = ref("register")

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

<style scoped></style>