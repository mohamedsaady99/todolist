import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: { todoList: [] },
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const todo = state.todoList.findIndex(
        (todo) => todo.id === action.payload
      );
      state.todoList.splice(todo, 1);
    },
    makeTodoCompleted: (state, action) => {
      const todo = state.todoList.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed
      } 
    },
    editTodo: (state, action) => {
      const todo = state.todoList.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.name = action.payload.name
      } 

    },
  },
});

export const { addTodo, deleteTodo, makeTodoCompleted, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
