import { nanoid, createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  try {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const initialState = {
  todos: loadFromLocalStorage().length
    ? loadFromLocalStorage()
    : [
        {
          id: 1,
          Message: "Hello world",
          completed: false,
        },
      ],
};
  export const TodoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        Message: action.payload.Message,
        completed: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (prevTodo) => prevTodo.id !== action.payload.id
      );
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((prevTodo) =>
        prevTodo.id === action.payload.id
          ? { ...prevTodo, Message: action.payload.Message }
          : prevTodo
      );
    },
    toggleComplete: (state, action) => {
      state.todos = state.todos.map((prevTodo) =>
        prevTodo.id === action.payload.id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      );
    },
  },
});

export const { addTodo, removeTodo, updateTodo, toggleComplete } =
  TodoSlice.actions;

export default TodoSlice.reducer;
