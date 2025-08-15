import React, { createContext, useContext } from "react";
export const ThemeContext = createContext({
    todos: [
        {
            id: 1,
            todoMessage: "Hello",
            completed: false


        }
    ],
    addTodo: (todo) => { },
    updateTodo: (id,todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
})
export const ThemeProvider = ThemeContext.Provider
export const useTodo = () => {
    return (
        useContext(ThemeContext)
    )
}