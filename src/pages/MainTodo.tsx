import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AddTodoForm } from '../components/AddTodoForm';
import { TodoList } from '../components/TodoList';
import { AddTodo, Todo } from '../models/types.d';
import { Layout } from '../components/Layout';

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
    if (text) {
      const newTodo = { text, id: uuidv4() };
      setTodos([...todos, newTodo]);
    }
  };

  const deleteTodo = (todoId: string) => {
    const removeItem = todos.filter((todo: Todo) => {
      return todo.id !== todoId;
    });
    setTodos(removeItem);
  };

  const editTodo = (edittedTodo: Todo) => {
    const updatedItem = todos.map((todo: Todo) => {
      return todo.id === edittedTodo.id ? edittedTodo : todo;
    });
    setTodos(updatedItem);
  };

  return (
    <Layout>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </Layout>
  );
};
