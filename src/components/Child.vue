<template>
    <h1>Child</h1>

    <div>
        <button @click="increase">increment</button>
        <button @click="decrease">decrement</button>
    </div>
    <div>
        <input type="text" v-model="search" 
        @input="$emit('getSearchInput', search)" placeholder="...">

    </div>
</template>

<script setup>
import { toRefs, ref } from 'vue';

// variables/refs
const count = ref(0)
const age = ref(11)
const search = ref("")
// hooks
const { } = defineProps({})
const { } = toRefs({})
const emit = defineEmits(['handleIncrease', 'handleDecrease'])
// methods
const increase = () => {
    count.value++
    const isAdult = count.value > age.value
    emit('handleIncrease', count.value, isAdult)
}

const decrease = () => {
  if (count.value > 0) count.value--
  const isAdult = count.value > age.value
  emit('handleDecrease', count.value, isAdult)
}

const print =(msg)=> {
    console.log('child print... '+ msg)
}
//
defineExpose({
    print,
})
</script>

<style scoped></style>