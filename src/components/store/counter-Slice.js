import { createSlice } from "@reduxjs/toolkit"

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
            state.counter = 0
        }
    }

})

export default counterSlice
export const counterActions = counterSlice.actions
