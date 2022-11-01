import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: "nav",
    initialState:{
        text:"text-gray-600",
        bg:"bg-gradient-to-l from-red-400 via-orange-300 to-orange-600"
      
      
    },
    reducers:{
        whiteText: (state)=>{
            state.text="text-white";
        },
        blackText: (state)=>{
          state.text="text-gray-600";
      },
        bgWhite:(state) =>{
          state.bg="bg-[#F9F9F9]"
        },
        bgTrans:(state)=>{
          state.bg="bg-transparent"
        },
        bgOrange:(state)=>{
          state.bg="bg-gradient-to-l from-red-400 via-orange-300 to-orange-600"
        }


    }
})
export const {
  whiteText,
  blackText,
  bgWhite,
  bgTrans,
  bgOrange
} = authSlice.actions
export default authSlice.reducer