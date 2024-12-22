<template>
    <div>
       <h1 v-color="'red'" v-textColor="'#fff'" >Profile View</h1>
       <p v-color="'green'" v-textColor="'#fff'">lorem lorem lorem lorem</p>
       <p v-highlight:nick="red">This is a demo vue app</p>
    </div>
</template>

<script setup>

const vHighlight = {
    created: (el, binding, vnode) => {
     
    },
    mounted: (el, binding) => {
        el.classList.add('is-highlight,', )
        console.log('mounted vhlight:', binding, )
    },
    updated(el, binding, vnode, prevVnode) {
        console.log('updated vhlight:', binding, binding.value )
    },
}

</script>

<style scoped>

.is-highlight {
    background-color: rgba(0, 0, 255, 0.63);
    color: #3fff;
}

</style>