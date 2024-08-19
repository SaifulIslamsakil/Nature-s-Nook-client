import baseApi from "@/redux/baseApi/baseApi";
const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createProduct: builder.mutation({
            query: (payload) => ({
                url: `/product/create-product`,
                method: "POST",
                body: payload,

            }),
            invalidatesTags: ['Product']


        }),
        getProduct: builder.query({
            query: (payload) => ({
                url: `/product?${payload}`,
                method: "GET",

            }),
            providesTags: ['Product'],

        }),
        getSingelProduct: builder.query({
            query: (id) => ({
                url: `/product/${id}`,
                method: "GET",

            }),
            providesTags: ['Product']
        }),
        productDelete: builder.mutation({
            query: (id) => ({
                url: `/product/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ['Product'],
        }),
        productUpdate: builder.mutation({
            query: ({ id, ...payload }) => ({
                url: `/product/product-update/${id}`,
                method: "PUT",
                body: payload,
            }),
            invalidatesTags: ['Product'],
        }),
        uploadImages: builder.mutation({
            query: (payload) => ({
                url: "https://api.imgbb.com/1/upload?key=8e63e023b6716f56295b0c1df1b0048a",
                method:"POST",
                body:payload
            }),
            invalidatesTags: [],
        }),
    }),

})



export const { useGetProductQuery, useGetSingelProductQuery, useProductDeleteMutation, useCreateProductMutation, useProductUpdateMutation, useUploadImagesMutation } = productApi