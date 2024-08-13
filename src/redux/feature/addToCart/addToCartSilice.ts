import { TProduct } from "@/interface/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const value: TProduct[] = []

const initialState = value;

const addToCartSlice = createSlice({
    name: "addToCart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<TProduct>) => {
            const findProduct:TProduct | undefined   = state.find(data => data._id === action.payload?._id)
            if(findProduct){
                throw new Error
            }
            state.push(action.payload);
        },
        increment: (state, action) => {
            const findProduct:TProduct | undefined   = state.find(data => data._id === action.payload)
            const count = findProduct!.quantity! += 1
            console.log(count)
        },
        decrement: (state, action) => {
            const findProduct:TProduct | undefined   = state.find(data => data._id === action.payload)
            const count = findProduct!.quantity! -= 1
            console.log(count)
        }

    }
});

export const { addToCart, increment, decrement } = addToCartSlice.actions;
export default addToCartSlice.reducer;
