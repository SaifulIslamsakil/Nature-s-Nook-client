import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
    tagTypes: ["Product", "CreateProduct", "ProductUpdate"],
    endpoints: () => ({}),
   
})


export default baseApi