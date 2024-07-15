import baseApi from "@/redux/baseApi/baseApi";


const categoryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCategory: builder.query({
          query: ()=>({
            url:"/category",
            method:"GET",
          })
        }),
      }),
})


export const {useGetCategoryQuery} = categoryApi