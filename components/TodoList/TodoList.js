import { useSelector, useDispatch } from "react-redux";
import { Checkbox, Button, Flex, Typography } from 'antd';
import './todos.css';
import { DeleteOutlined } from '@ant-design/icons';
import { deleteTodo, makeTodoCompleted } from '../Todo/todoSlice'

function TodoList() {
  const { todoList } = useSelector((state) => state.todo);
  const { Text } = Typography;
  const dispatch = useDispatch();

  const handleDeleteTodo = (todo) => {
    dispatch(deleteTodo(todo.id))
  };
  const handleCompletedTask = (todo) => {
    dispatch(makeTodoCompleted(todo.id))
  };

  console.log(todoList)

  return <div>
    <div>{todoList.map((todo, index) => (
      <Flex key={todo.id} justify="space-between">
        <Flex >
          <Checkbox id={todo.id} name={todo.name} onChange={() => handleCompletedTask(todo)} />
          <Text className={`todo ${todo.completed === true ? 'completed' : ''}`}>{todo.name}</Text>
        </Flex>
        <Button className="delete" onClick={() => handleDeleteTodo(todo)}><DeleteOutlined size="medium" /></Button></Flex>
    ))}</div>
  </div>;
}

export default TodoList;
