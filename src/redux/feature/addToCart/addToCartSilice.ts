import { TProduct } from "@/interface/interface";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TProduct[] = []
const addToCartSilice = createSlice({
    name: "addToCart",
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            state.push(payload)
        }
    }
})


export const { addToCart } = addToCartSilice.actions
export default addToCartSilice.reducer