import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AddTodoForm } from '../components/AddTodoForm';
import { TodoList } from '../components/TodoList';
import { AddTodo, Todo } from '../models/types.d';

const todoWrapper = {
  maxWidth: '500px',
  width: '100%',
  maxHeight: '700px',
  height: '100%',
};

export const MainTodo = () => {
  const [todos, setTodos] = useState(() => {
    const todosFromLocalState = localStorage.getItem('todos');
    if (todosFromLocalState) {
      return JSON.parse(todosFromLocalState);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, id: uuidv4() };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (todoId: string) => {
    const removeItem = todos.filter((todo: Todo) => {
      return todo.id !== todoId;
    });
    setTodos(removeItem);
  };

  const editTodo = (edittedTodo: Todo) => {
    console.log(edittedTodo);
    const updatedItem = todos.map((todo: Todo) => {
      return todo.id === edittedTodo.id ? edittedTodo : todo;
    });
    setTodos(updatedItem);
  };

  return (
    <div className="bg-gradient-to-b from-blue-200  to-blue-400 h-screen w-100 flex justify-center items-center">
      <div
        style={todoWrapper}
        className=" bg-gray-50 rounded-2xl m-2 p-6 shadow-xl flex flex-col gap-5 "
      >
        <div className=" text-3xl font-bold">Todo App</div>
        <AddTodoForm addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
      </div>
    </div>
  );
};
