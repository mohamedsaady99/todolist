import React, { useState } from 'react'
import { Form, Input, Space, Button } from 'antd';
import { editTodo } from '../Todo/todoSlice'
import { useDispatch } from 'react-redux';
import './editTodo.css'

function EditTodo({ task, setIsEditable }) {
    const dispatch = useDispatch()
    const [form] = Form.useForm();

    const [todo, setTodo] = useState({
        id: task.id,
        name: task.name,
        completed: task.completed,

    });

    const handleChange = (e) => {
        setTodo({
            id: task.id,
            name: e.target.value,
            completed: task.completed,
        })
    }

    const onFinish = () => {
        dispatch(editTodo({ id: todo.id, name: todo.name }))
        form.resetFields()
        setIsEditable(false)
    };


    return (
        <div >
            <Form
                form={form}
                name="editTodo"
                onFinish={onFinish}
                autoComplete="on"
            >
                <Space.Compact >
                    <Form.Item>
                        <Input
                            className='edit-todo-input'
                            placeholder='Type Your Task'
                            value={todo.name}
                            onChange={handleChange}
                        />
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit" className='edit-todo-button'>
                            Edit
                        </Button>
                    </Form.Item>
                </Space.Compact>
            </Form>
        </div>
    );
}

export default EditTodo
