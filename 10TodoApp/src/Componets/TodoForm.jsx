import React, { useEffect, useRef, useState } from 'react'
import { useTodo } from '../Contexts/Todo Context'

function TodoForm() {
    const { addTodo } = useTodo()
    const inputRef = useRef()


    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const [todo, setTodo] = useState('')
    const add = (e) => {
        e.preventDefault()
        if (!todo) return
        addTodo({
            id: Date.now(),
            Message: todo,
            completed: false
        })
        setTodo("")
    }


    return (
        <form onSubmit={add}>
            <div className='flex mt-5 pt-3 md:px-2 px-1'>

                <input
                    type="text"
                    ref={inputRef}
                    className='w-full sm:h-11 bg-white/30 text-lg caret-white placeholder:italic px-3 placeholder:font-semibold border-none outline-none text-black rounded-l-lg'
                    placeholder='Write Todo...'
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />

                <button type="submit" className='rounded-r-lg bg-green-500 text-white font-semibold p-2 px-4 '>Add</button>


            </div>
        </form>
    )
}

export default TodoForm