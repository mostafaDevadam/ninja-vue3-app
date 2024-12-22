import { onMounted, ref } from "vue"


const useTodoCRUD = () => {
    const todosList = ref([])

    const todoObj = ref({
        id: 0,
        text: "",
        from: "",
        to: "",
        createdAt: "",
        isCompleted: false,
    })

    const addTodo = () => {
        todoObj.value.id = todosList.value.length++
        todoObj.value.createdAt = new Date()
        todosList.value.push(todoObj.value)
        console.log(todosList.value)
        addToLocalSt()
        todoObj.value = {
            id: 0,
            text: "",
            from: "",
            to: "",
            createdAt: "",
        }
    }

    const addToLocalSt = () => {
        localStorage.setItem("todos", JSON.stringify(todosList.value))
    }

    const updateTodos = () => {
        if (localStorage.getItem("todos")) {
            todosList.value = JSON.parse(localStorage.getItem("todos"))
        }
    }



    const removeTodo = (index) => {
        todosList.value.splice(index, 1)
        addToLocalSt()
    }



    const markCompleted = (todo) => {
        todo.isCompleted = !todo.isCompleted
        addToLocalSt()

    }

    // Mounted
    onMounted(() => {
        updateTodos()
    })


    return { todoObj, todosList, addTodo, addToLocalSt, updateTodos, removeTodo, markCompleted }
}

export default useTodoCRUD