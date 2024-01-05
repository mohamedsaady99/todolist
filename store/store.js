import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../components/Todo/todoSlice'

const store = configureStore({
    reducer: {
        todo: todoReducer
    }
})

export default store