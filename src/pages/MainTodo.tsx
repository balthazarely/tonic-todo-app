import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AddTodoForm } from '../components/AddTodoForm';
import { TodoList } from '../components/TodoList';
import { AddTodo, Todo } from '../models/types.d';
import { Layout } from '../components/Layout';

export const MainTodo = () => {
  const [error, setError] = useState<boolean>(false);
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
    if (text.length === 0) {
      setError(true);
    } else {
      const newTodo = { text, id: uuidv4() };
      setTodos([...todos, newTodo]);
      setError(false);
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
      <>
        {error && (
          <div className="text-red-500 text-xs">Please enter a valid todo</div>
        )}
      </>
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </Layout>
  );
};
