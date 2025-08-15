import React, { useEffect, useRef, useState } from 'react'
import { useTodo } from '../Contexts/Todo Context'


function TodoItem({ todo }) {
    const { toggleComplete, updateTodo, deleteTodo } = useTodo()
    const [todoMsg, settodoMsg] = useState(todo.Message)
    const [editing, setEditing] = useState(false)
    const inputRef = useRef(null)
    const editTodo = () => {
        updateTodo(todo.id, { ...todo, Message: todoMsg })
        setEditing(false)

    }
    function toggleCompleted() {
        toggleComplete(todo.id)
    }


    return (
        <div className={` flex mx-3 sm:mx-1  pl-3 pr-2 rounded shadow-lg justify-center items-center  md:py-[5px] mt-4 gap-x-3  ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"} `}>
            {/* CheckBox */}
            <input
                type="checkbox"
                className='bg-transparent w-5 h-5 sm:w-7 sm:h-7  '
                checked={todo.completed}
                onChange={toggleCompleted}

            />
            {/* Input */}
            <form onSubmit={(e) => {
                e.preventDefault()
            }}
                className='flex gap-x-2 w-full justify-center items-center'>
                <input
                style={{
                    caretWidth:"8px"
                }}
                    ref={inputRef}
                    type="text"
                    className={`w-full sm:h-10 bg-transparent rounded px-2 outline-none h-7 caret-red-500  ${todo.completed ? "line-through" : ""}`}
                    value={todoMsg}
                    onChange={(e) => settodoMsg(e.target.value)}
                    readOnly={!editing}
                />
                {/* button */}
                <button type='submit' className={`bg-white  w-8 h-6 rounded ${todo.completed ? "opacity-50" : ""} `}
                    onClick={() => {
                        inputRef.current.focus()
                        if (todo.completed) return
                        if (editing) {
                            editTodo()
                        }
                        else { setEditing((prev) => !prev) }
                    }}
                    disabled={
                        todo.completed
                    }
                >
                    {
                        !editing ? "✏️" : "📁"
                    }
                </button>
            </form>
            {/* button */}
            <button className='bg-white w-8 h-6 rounded'
                onClick={() => deleteTodo(todo.id)}>
                ❌
            </button>

        </div>
    )
}

export default TodoItem