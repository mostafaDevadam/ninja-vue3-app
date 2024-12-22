<template>
    <form @submit.prevent="login" class="flex flex-col p-3 shadow-lg rounded gap-5 justify-center">
        <input type="text" placeholder="Email" v-model="email" required />
        <input type="password" placeholder="***" v-model="password" required />
        <button type="submit" class="btn-outline">{{ auth_type }}</button>
    </form>

    
</template>

<script setup>
import { ref, defineProps, } from 'vue';

const {auth_type} = defineProps(['auth_type'])
const email = ref("")
const password= ref("")

const emit = defineEmits(['login'])

const login = () => {
      console.log("auth form: ", email.value , password.value)
      emit("login", email.value, password.value)
       email.value = ""
      password.value = ""

}



</script>

<style  scoped>

</style>