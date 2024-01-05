import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Checkbox } from 'antd';
import './todos.css';

function TodoList() {
  const { todoList } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const items = [];

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  console.log(todoList);

  return <div>
    <ul>{todoList.map((todo) => (
      <li key={todo.id}><Checkbox id={todo.id} name={todo.name} onChange={onChange}/> {todo.name} </li>
    ))}</ul>
  </div>;
}

export default TodoList;
