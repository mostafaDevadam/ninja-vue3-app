import { ref } from "vue"


const counterFunc = () => {
    // Data
    const counter = ref(0)

    // Methods
    const increase = () => {
      counter.value++
    }

    const decrease = () => {
        if(counter.value > 0){
            counter.value--
        }
    }
    // Return Values
    return { counter, increase, decrease }
}

export default counterFunc