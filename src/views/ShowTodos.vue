<template>
    <div>
    <h1 class="text-lg">Show Todos</h1>

    <div v-if="todosList.length">
        <div v-for="todo, index in todosList" :key="index" class="flex justify-center my-4">
        <div v-if="todo" class="shadow-lg overflow-hidden rounded max-w-lg mt-2 p-3">
            <p >Todo {{  todo.text }} </p>
            <div class="flex flex-row gap-3 justify-center">
                <span>from {{ new Date(todo.from).toLocaleDateString() }}</span>
                <span>to {{ new Date(todo.to).toLocaleDateString() }}</span>
            </div>
            <div>
               <span>created {{ new Date(todo.createdAt).toLocaleDateString() }}</span>
            </div>
            <div class="flex flex-row gap-3 p-2 justify-center">
                <button class="btn-outline p-1"
                @click="markCompleted(todo)"
                :style="`${ todo.isCompleted ? 'color: #dc8665' : 'color: #138085'}`"
                >{{ todo.isCompleted ? 'InCompleted' : 'Completed' }}</button>
                <button class="btn-danger rounded p-1" @click="removeTodo(index)">Delete</button>
            </div>

        </div>
    </div>
    </div>
    <div v-else>
      <h1 class="my-52">No Todos to show</h1>
    </div>
    
    
    </div>
</template>

<script setup>
import {
  ref, reactive, computed, watch, provide,
  onBeforeMount, onMounted, onBeforeUpdate, onUpdated,
  inject
} from 'vue';
import useTodoCRUD from '@/mixins/useTodoCRUD.js'

const {todosList, addToLocalSt, removeTodo, markCompleted } = useTodoCRUD()



// Mounted
onMounted(() => {
})


</script>

<style scoped>

</style>