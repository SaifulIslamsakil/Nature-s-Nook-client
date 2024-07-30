import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./baseApi/baseApi";
import addToCartReducer from "./feature/addToCart/addToCartSilice";

const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        addToCart: addToCartReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
})


export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch