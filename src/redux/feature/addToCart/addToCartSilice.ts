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
            findProduct!.quantity! += 1
        },
        decrement: (state, action) => {
            const findProduct:TProduct | undefined   = state.find(data => data._id === action.payload)
             findProduct!.quantity! -= 1

        },
        deleteProductInCart : (state, action)=>{
            const indexToDelete = state.findIndex(data => data._id === action?.payload);
            if(indexToDelete !== -1){
                state.splice(indexToDelete, 1);
            }
        }

    }
});

export const { addToCart, increment, decrement, deleteProductInCart } = addToCartSlice.actions;
export default addToCartSlice.reducer;
