import { createSlice } from "@reduxjs/toolkit"
//slice for authentication 

const initialAuthState = {isAuthenticated : false}

const authSlice = createSlice({
    name:'authentication',
    initialState : initialAuthState ,
    reducers:{
        login(state){
            state.isAuthenticated = true
        },
        logout(state){
            state.isAuthenticated = false
        }
        
    }

})

export default authSlice
export const authActions = authSlice.actions
