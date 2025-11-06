import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./Contexts/Todo Context";
import TodoForm from "./Componets/TodoForm";
import TodoItem from "./Componets/TodoItem";
function App() {


  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{ ...todo }, ...prev])
  }
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }
  const toggleComplete = (id) => {
  setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))

  }




  useEffect(() => {
    document.body.classList.add("bg-gray-900")
    const todoes = JSON.parse(localStorage.getItem("todos"))
    setTodos(todoes)
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])








  return (
    <ThemeProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="w-full  h-screen md:p-8 py-8">
        <div className="  w-[80%] max-w-[45rem] sm:w-[95%] bg-[#172842] sm:min-h-[25%] mx-auto  rounded py-3 text-center ">
          <p className=" text-4xl sm:pt-3 pb-1 text-white font-bold sm:font-semibold">
            Manage <span className="text-green-500">Your</span> Todo

          </p>
          <hr />
          

          <div >
            <TodoForm />
          </div>
          {
            todos.map((todo) => (
              <div key={todo.id}>
                <TodoItem todo={todo} />

              </div>
            ))
          }
        </div>




      </div>
    </ThemeProvider>

  )
}
export default App