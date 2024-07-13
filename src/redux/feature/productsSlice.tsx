import { createSlice } from "@reduxjs/toolkit";

const initialState = {}
const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        name:()=>{

        }
    }
})



export const {name} = productSlice.actions

export default productSlice.reducer