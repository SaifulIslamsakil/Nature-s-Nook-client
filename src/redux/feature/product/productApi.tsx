import baseApi from "@/redux/baseApi/baseApi";
const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createProduct: builder.mutation({
            query: (payload) => ({
                url: `/product/create-product`,
                method: "POST",
                body: payload
            })
        }),
        getProduct: builder.query({
            query: (payload) => ({
                url: `/product?${payload}`,
                method: "GET",
            })
        }),
        getSingelProduct: builder.query({
            query: (id) => ({
                url: `/product/${id}`,
                method: "GET",
            })
        }),
        productDelete: builder.mutation({
            query: (id) => ({
                url: `/product/${id}`,
                method: "DELETE",
            })
        }),
        productUpdate: builder.mutation({
            query: ({id,...payload}) => ({
                url: `/product/product-update/${id}`,
                method: "PUT",
                body: payload
            })
        }),
    }),
})



export const { useGetProductQuery, useGetSingelProductQuery, useProductDeleteMutation, useCreateProductMutation, useProductUpdateMutation } = productApi