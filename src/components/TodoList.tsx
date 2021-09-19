import React from 'react';
import { Todo } from '../models/types.d';
import { TodoListItem } from './TodoListItem';

interface Props {
  todos: Todo[];
  deleteTodo: (id: string) => void;
  editTodo: (todo: Todo) => void;
}

const todoWrapper = {
  height: '525px',
};

export const TodoList = ({ todos, deleteTodo, editTodo }: Props) => {
  return (
    <div style={todoWrapper} className=" overflow-auto ">
      {todos.map((todo: Todo, i) => (
        <div key={i}>
          <TodoListItem
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        </div>
      ))}
    </div>
  );
};
