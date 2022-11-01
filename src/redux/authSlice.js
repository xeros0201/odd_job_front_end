import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: "auth",
    initialState:{
        login:{
            currentUser:false,
            isFetching:false,
            error: false
        },

      
      
    },
    reducers:{
        loginStart: (state)=>{
            state.login.isFetching=true;
        },
        loginSuccess: (state,action)=>{
            state.login.isFetching=false;
            state.login.currentUser= action.payload;
   
            state.login.error=false;
 
        },
        logOut: (state)=>{
            state.login.isFetching=false;
            state.login.error=false;
            state.login.currentUser= false;
        },
  
   


    }
})
export const {
    loginStart,
    loginSuccess,
    logOut
} = authSlice.actions
export default authSlice.reducer