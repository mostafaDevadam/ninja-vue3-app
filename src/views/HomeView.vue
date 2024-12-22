<template>
  <div class="home">
    <h1 class="font-bold text-lg">Add New Todos</h1>
    <form @submit.prevent="addTodo">
      <div class="flex flex-col p-5 justify-center">
        <input type="text" v-model="todoObj.text" class="p-2 border border-black" placeholder="Enter your todo"
          required>

        <div class="flex flex-row gap-2 p-3 mx-auto">
          <input type="date" v-model="todoObj.from" placeholder="from" required />
          <input type="date" v-model="todoObj.to" placeholder="to" required />
        </div>
        <div>
          <button type="submit" class="p-2 btn-green rounded w-52">Add</button>
        </div>

      </div>
    </form>

  </div>
</template>

<script setup>
import {
  ref, reactive, computed, watch, provide,
  onBeforeMount, onMounted, onBeforeUpdate, onUpdated,
  inject
} from 'vue';
import MyCompo from '@/components/MyCompo.vue'
import counterFunc from '@/mixins/counter'
import useTodoCRUD from '@/mixins/useTodoCRUD.js'

const { todosList, addToLocalSt, addTodo, todoObj, } = useTodoCRUD()

// Data


//


onUpdated(() => {
  console.log("todoList:", todosList.value)
})

// Methods



// update todos


// Mounted
onMounted(() => {

})






// watcher


// Computed

</script>
