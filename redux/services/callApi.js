import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const baseUrl='http://localhost:3000/api'

export const callTableApi=createApi({
    reducerPath:'callTableApi',
    baseQuery:fetchBaseQuery({ baseUrl }),
    endpoints:(builder)=>({
        getTable:builder.query({
            query:()=>'/hello'
        })
    })
})


export const {useGetTableQuery} =callTableApi 