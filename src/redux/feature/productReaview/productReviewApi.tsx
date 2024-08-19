import baseApi from "@/redux/baseApi/baseApi";


const productReviewaApi = baseApi.injectEndpoints({
    endpoints: (builder)=>({
        getProductReview: builder.query({
            query: (id) => ({
                url: `/review/${id}`,
                method: "GET",
            }),
           
        }),
    })
})

export const {useGetProductReviewQuery} = productReviewaApi