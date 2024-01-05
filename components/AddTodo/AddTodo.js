import React, { useState } from 'react'
import { Form, Input, Button } from 'antd';
import { addTodo } from '../Todo/todoSlice'
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import './addTodo.css'

function AddTodo() {
  const dispatch = useDispatch()
  const [todo, setTodo] = useState({
    id: 1,
    name: '',
    completed: false,

  });
  const [form] = Form.useForm();

  const handleChange = (e) => {
    setTodo({
      id: nanoid(),
      name: e.target.value,
      completed: false,

    })
  }

  const onFinish = () => {
    dispatch(addTodo(todo))
    form.resetFields()
  };


  return (
    <div className='add-todo-form'>
      <Form
        form={form}
        name="addTodo"
        initialValues={{ remember: true, }}
        onFinish={onFinish}
        autoComplete="on"
      >
        <Input.Group compact>
          <Form.Item
            name="task"
            rules={[
              {
                required: true,
                message: 'Please write your task!',
              },
            ]}
          >
            <Input
              className='task'
              placeholder='Type Your Task'
              value={todo.name}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit">
              Add Task
            </Button>
          </Form.Item>
        </Input.Group>
      </Form>
    </div>
  );
}

export default AddTodo
