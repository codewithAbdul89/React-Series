import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Store/Slice";
function TodoForm() {
  const inputRef = useRef(null);

  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function add(e) {
    e.preventDefault();
    dispatch(addTodo({ Message: todo }));
    setTodo("");
  }

  return (
    <form onSubmit={add}>
      <div className="flex mt-5 pt-3 md:px-2 px-1">
        <input
          type="text"
          ref={inputRef}
          className="w-full sm:h-11 bg-white/30 text-lg caret-white placeholder:italic px-3 placeholder:font-semibold border-none outline-none text-black rounded-l-lg"
          placeholder="Write Todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button
          type="submit"
          className="rounded-r-lg bg-green-500 text-white font-semibold p-2 px-4 "
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
