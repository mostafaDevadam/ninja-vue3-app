<template>
    <nav class="flex flex-row gap-4 justify-end ">
        <!--<router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/profile">Profile</router-link> |
        <router-link to="/todos">Todos</router-link>-->

        <!--<div v-for="route in router.options.routes" :key="route.name">
            <div v-if="isAuth && route.name !== 'Auth'">
                <router-link :to="{ name: route.name }">{{ route.meta.title
                    }}</router-link>
            </div>
            <div v-else-if="!isAuth && route.name !== 'Auth'">
                <router-link :to="{ name: route.name }">{{ route.meta.title
                    }}</router-link>
            </div>

        </div>
        <button v-if="isAuth"  @click="logout">Logout</button>-->


        <div v-if="isAuth" class="flex flex-row gap-4 justify-end ">
            <div v-for="route in router.options.routes" :key="route.name">
                <router-link v-if="route.name !== 'Auth'" :to="{ name: route.name }">{{ route.meta.title
                    }}</router-link>
            </div>
            <button  @click="logout">Logout</button>
        </div>
        <div v-else>
            <router-link to="/auth">Login</router-link>
        </div>


    </nav>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore()

const isAuth = ref(false)

const router = useRouter()



watchEffect(() => {
    isAuth.value = store.state['isAuth']
    console.log(`isAuth#: `, isAuth.value)
})

const logout = () => {
    //localStorage.removeItem("token")
    store.commit('setLogout')
    router.push("/auth")
}



</script>

<style lang="scss" scoped></style>