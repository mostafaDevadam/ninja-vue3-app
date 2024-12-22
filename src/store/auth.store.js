import { createStore } from "vuex";

export const store = createStore({
   state () {
    return {
        isAuth: false,
        token: "",
    }
   },
   actions: {

   },
   mutations: {
     setAuth (state) {
        state.isAuth = true
     },
     setLogout(state) {
        state.isAuth = false
     }    
   },
   getters: {
      getAuth(state) {
        return state.isAuth
      }
   }  
})