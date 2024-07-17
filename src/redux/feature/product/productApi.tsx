import baseApi from "@/redux/baseApi/baseApi";
const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: (name) => ({
                url: `/product?${name}`,
                method: "GET",
            })
        }),
        getSingelProduct: builder.query({
            query: (id) => ({
                url: `/product/${id}`,
                method: "GET",
            })
        }),
    }),
})



export const { useGetProductQuery, useGetSingelProductQuery } = productApi