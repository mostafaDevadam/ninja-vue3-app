<template>
    <div>
       <h1>Test</h1>
       <p>{{ msg }}</p>
       <button @click="btn_click">click submit</button>
       <button @click="update_name">update name</button>
    </div>
</template>

<script setup>
import { watchEffect, ref, computed, watch, reactive, toRefs } from 'vue';

const name = ref("adam")

const {msg} = defineProps(['msg'])

const emit = defineEmits(['submit'])


const btn_click = () => {
    emit('submit', {"active": true})
}

const sum = () => {
    console.log("sum...")
    return "sum 1 + 2"
}

const update_name = () => {
    name.value = "mostafa"
}

defineExpose({
    sum,
    name,

})



</script>

<style scoped>

</style>