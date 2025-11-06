import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleComplete, updateTodo } from "../Store/Slice";

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.Message);
  const inputRef = useRef(null);

  const handleToggle = () => {
    dispatch(toggleComplete({ id: todo.id }));
  };

  const handleEdit = () => {
    if (editing) {
      dispatch(updateTodo({ id: todo.id, Message: todoMsg }));
      inputRef.current.focus()
    }
    setEditing(!editing);
  };

  const handleDelete = () => {
    dispatch(removeTodo({ id: todo.id }));
  };

  return (
    <div
      className={`flex mx-3 sm:mx-1 pl-3 pr-2 rounded shadow-lg justify-center items-center md:py-[5px] mt-4 gap-x-3 ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
      />

      {/* Input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleEdit();
        }}
        className="flex gap-x-2 w-full justify-center items-center"
      >
        <input
          ref={inputRef}
          type="text"
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!editing}
          className={`w-full sm:h-10 bg-transparent rounded px-2 outline-none h-7 caret-red-500 ${
            todo.completed ? "line-through" : ""
          }`}
        />
        <button
          type="submit"
          disabled={todo.completed}
          className="bg-white w-8 h-6 rounded"
        >
          {!editing ? "✏️" : "📁"}
        </button>
      </form>

      {/* Delete button */}
      <button
        className="bg-white w-8 h-6 rounded"
        onClick={handleDelete}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
