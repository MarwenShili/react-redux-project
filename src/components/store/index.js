import { createStore } from "redux"
import { createSlice, configureStore } from "@reduxjs/toolkit"


 const initialState = {counter: 0, isShawCounter: true}

const counterSlice = createSlice({
    name:'count-slice',
    initialState ,
    reducers : {
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        increase(state,action){
            state.counter = state.counter + +action.payload
        },
        toggle(state){
            state.isShawCounter = !state.isShawCounter
        }
    }

})

const store = configureStore({
    reducer: counterSlice.reducer 
})
export const counterActions = counterSlice.actions
export default store 





// const counterReducer = (state= initialState, action ) => {
//     if (action.type === 'increment'){
//         return {
//             counter : state.counter + 1 ,
//             isShawCounter :state.isShawCounter
//         }
//     }
//     if(action.type === 'increase'){
//         return {
//             counter : state.counter + +action.enteredAmount ,
//             isShawCounter :state.isShawCounter
//         }
//     }
//     if(action.type === 'decrement'){
//         return {
//             counter : state.counter -1 ,
//             isShawCounter :state.isShawCounter
//         }
//     }
//     if(action.type === 'toggle'){
//         return {
//             isShawCounter : !state.isShawCounter,
//             counter :0
//         }
//     }
//     return state
// }

