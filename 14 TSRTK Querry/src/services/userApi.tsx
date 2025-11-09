import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export interface User {
    "id": string,
    "name": string,
    "class": string,
    "email": string
}
export interface Post {
    "id": string,
    "title": string,
    "name": string
}
export const userApi = createApi({
    reducerPath: 'USERAPI',
    tagTypes: ['User'],
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
    endpoints: (builder) => ({
        users: builder.query<User[], void>({
            query: () => '/users',
            providesTags: ['User']
        }),
        user: builder.query<User, string>({
            query: (id) => `/users/${id}`,
        }),
        addUser: builder.mutation<void, User>({
            query: (usered) => ({
                url: '/users',
                method: 'POST',
                body: usered
            }),
            invalidatesTags: ['User']
        }),
        updateUser: builder.mutation<void, User>({
            query: ({ id, ...updateData }) => ({
                url: `/users/${id}`,
                method: 'PUT',
                body: updateData
            }),
            invalidatesTags: ['User']
        }),
        deleteUser: builder.mutation<void, string>({
            query: (id) => ({
                url: `/users/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['User']
        })
    })
})





export const { useUsersQuery, useUserQuery, useAddUserMutation, useDeleteUserMutation, useUpdateUserMutation } = userApi