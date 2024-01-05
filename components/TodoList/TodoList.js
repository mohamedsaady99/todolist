import React from "react";
import { useSelector } from "react-redux";
import { Checkbox } from 'antd';
import './todos.css';
import { DeleteOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useDispatch } from "react-redux";
import { deleteTodo, makeTodoCompleted } from '../Todo/todoSlice'

function TodoList() {
  const { todoList } = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  const handleDeleteTodo = (todo) => {
    dispatch(deleteTodo(todo.id))
  };
  const handleCompletedTask = (todo) => {
    dispatch(makeTodoCompleted(todo.id))
  };

  console.log(todoList)

  return <div>
    <ul>{todoList.map((todo, index) => (
      <li key={todo.id}><Checkbox id={todo.id} name={todo.name} onChange={() => handleCompletedTask(todo)}  />
        <span className={todo.completed === true ? 'completed' : ''}>{todo.name}</span>
        <Button className="delete" onClick={() => handleDeleteTodo(todo)}><DeleteOutlined size="medium" /></Button></li>
    ))}</ul>
  </div>;
}

export default TodoList;
