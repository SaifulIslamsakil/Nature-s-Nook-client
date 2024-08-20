import baseApi from "@/redux/baseApi/baseApi";

const orderIfnoApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createOrderInfo: builder.mutation({
            query: (payload) => ({
                url: "/order/create-order",
                method: "POST",
                body: payload
            })
        })
    })
})


export const { useCreateOrderInfoMutation } = orderIfnoApi