import baseApi from "@/redux/baseApi/baseApi";


const paymentApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createPaymentIntent: builder.mutation({
          query: (amount) => ({
            url: '/payment/create-payment-intregate',
            method: 'POST',
            body: { amount },
          }),
        }),
      }),
})

export const {useCreatePaymentIntentMutation} = paymentApi