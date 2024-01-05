import { useSelector } from "react-redux";
import Todo from "../Todo/todo";

function TodoList() {
  const { todoList } = useSelector((state) => state.todo);

  return (
    <div>
      {todoList.map((todo, index) => (
        <Todo todo={todo} key={index} />
      ))}
    </div>
  )

}

export default TodoList;
