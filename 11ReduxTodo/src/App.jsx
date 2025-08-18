import React, { useEffect } from "react";
import TodoForm from "./Componets/TodoForm";
import TodoItem from "./Componets/TodoItem";
import { useSelector } from "react-redux";
import { addTodo } from "./Store/Slice";

function App() {
  const todos = useSelector((state) => state.todo.todos);
  useEffect(() => {
    document.body.classList.add("bg-gray-700");
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="w-full h-screen md:p-8 py-8">
      <div className="w-[80%] max-w-[45rem] sm:w-[95%] bg-[#172842] sm:min-h-[25%] mx-auto rounded py-3 text-center">
        <p className="text-4xl sm:pt-3 pb-1 text-white font-bold sm:font-semibold">
          Manage <span className="text-green-500">Your</span> Todo
        </p>
        <hr />

        <div>
          <TodoForm />
        </div>
        <div>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
