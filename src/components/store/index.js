
import {  configureStore } from "@reduxjs/toolkit"
import authSlice from "./auth-Slice"
import counterSlice from "./counter-Slice"


// configure the reducer slice 
const store = configureStore({
    reducer:{count: counterSlice.reducer , auth: authSlice.reducer} 
})

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

