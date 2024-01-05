import { useDispatch } from "react-redux";
import { Checkbox, Button, Flex, Typography } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { deleteTodo, makeTodoCompleted } from '../Todo/todoSlice'
import './todo.css'
import EditTodo from "../EditTodo/EditTodo";
import { useState } from "react";

function Todo({ todo }) {
    const [isEditable, setIsEditable] = useState(false)

    const { Text } = Typography;
    const dispatch = useDispatch();

    const handleDeleteTodo = (todo) => {
        dispatch(deleteTodo(todo.id))
    };
    const handleCompletedTask = (todo) => {
        dispatch(makeTodoCompleted(todo.id))
    };

    return (
        <div>

            <Flex key={todo.id} justify="space-between">
                <Flex >
                    <Checkbox id={todo.id} name={todo.name} onChange={() => handleCompletedTask(todo)} />
                    <Text className={`todo ${todo.completed === true ? 'completed' : ''}`}>{todo.name}</Text>
                </Flex>
                <Flex >
                    <Button className="edit" onClick={() => setIsEditable(!isEditable)}><EditOutlined size="medium" /></Button>
                    <Button className="delete" onClick={() => handleDeleteTodo(todo)}><DeleteOutlined size="medium" /></Button>
                </Flex>
            </Flex>
            {isEditable && <EditTodo task={todo}  setIsEditable={setIsEditable} />}
        </div>

    )


}

export default Todo;
