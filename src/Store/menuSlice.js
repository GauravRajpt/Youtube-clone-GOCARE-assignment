import { createSlice } from "@reduxjs/toolkit";

const menuSlice= createSlice({
    name:"menu",
    initialState:true,
    reducers:{
        menutoggle:(state)=>{
           return state=!state;
        }
    }
})
export const {menutoggle}= menuSlice.actions;
export default menuSlice.reducer;