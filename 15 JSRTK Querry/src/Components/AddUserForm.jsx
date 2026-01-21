import React, { useState } from 'react'
import { useAddUsersMutation } from "../Services/APISllice"
function AddUserForm() {
    const [addUsers, { isLoading }] =useAddUsersMutation()
    const [form, setForm] = useState({
        name: "",
        email: "",
        role: "",
    })

    const newID=addUsers
    

    const addHandlerSubmit = async (e) => {
        e.preventDefault()
        await addUsers({
            ...form,
            id:Date.now()
        })
        setForm({
            name: "",
            email: "",
            role: "",
        })
    }

    return (
        <form onSubmit={addHandlerSubmit} className='p-4 border rounded w-80'>
            <h2 className="text-xl mb-3 font-bold">Add New User</h2>

            <input
                className="border w-full p-2 mb-2"
                type="text"
                placeholder='Name'
                value={form.name}
                onChange={(e) => setForm({
                    ...form, name: e.target.value
                })}
            />

            <input
                className="border w-full p-2 mb-2"
                type="email"
                placeholder='Email'
                value={form.email}
                onChange={(e) => setForm({
                    ...form, email: e.target.value
                })}
            />

            <input
                className="border w-full p-2 mb-3"
                type="text"
                placeholder='Role'
                value={form.role}
                onChange={(e) => setForm({
                    ...form, role: e.target.value
                })}
            />

            <button type='submit'
             className={`${isLoading?"bg-green-500 disabled: opacity-30":""} bg-blue-500 text-white px-4 py-2 rounded`}>
                {
                    isLoading ? "Adding" : "Add"
                }
            </button>


        </form>
    )
}

export default AddUserForm