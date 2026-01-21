import { createApi, fakeBaseQuery, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const userApi = createApi({
    tagTypes: ["Users"],
    reducerPath: "USERAPI",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    endpoints: (builder) => ({

        getUsers: builder.query({
            query: () => '/users',
            providesTags: ["Users"]
        }),

        getSingleUser: builder.query({
            query: (id) => `users/${id}`
        }),

        updateUsers: builder.mutation({
            query: ({ id, ...updateUser }) => ({
                // method: "PUT",
                method: "PATCH",
                url: `/users/${id}`,
                body: updateUser
            }),
            invalidatesTags: ['Users']
        }),

        addUsers: builder.mutation({
            query: (newUser) => ({
                url: `/users`,
                method: 'POST',
                body: newUser
            }),
            invalidatesTags: ['Users']

        }),

        deleteUsers: builder.mutation({
            query: (id) => ({
                url: `/users/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Users']
        })


    })
})

export const {
    useGetUsersQuery, useGetSingleUserQuery, useDeleteUsersMutation, useAddUsersMutation, useUpdateUsersMutation

} = userApi