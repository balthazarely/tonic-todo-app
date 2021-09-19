import React, { useState } from 'react';
import { Todo } from '../models/types.d';

interface Props {
  todo: Todo;
  deleteTodo: (id: string) => void;
  editTodo: (todo: any) => void;
}

export const TodoListItem = ({ todo, deleteTodo, editTodo }: Props) => {
  const [showEditInput, setShowEditInput] = useState<boolean>(false);
  const [todoToEdit, setTodoToEdit] = useState<Todo>(todo);

  const handleEditInputChange = (e: any) => {
    setTodoToEdit({ ...todoToEdit, text: e.target.value });
  };

  const handleUpdateTodos = () => {
    editTodo(todoToEdit);
    setShowEditInput(false);
  };

  return (
    <div className="bg-white w-100 shadow-sm hover:shadow-lg p-4 flex justify-between items-center group my-2">
      {!showEditInput && <div>{todo.text}</div>}
      {showEditInput && (
        <>
          <input
            className="border-gray-100 border-2 h-8  flex-1 focus:outline-none"
            type="text"
            value={todoToEdit.text}
            onChange={handleEditInputChange}
          />
          <button onClick={handleUpdateTodos}>save</button>
        </>
      )}
      {!showEditInput && (
        <div>
          <button
            onClick={() => {
              setShowEditInput(true);
              setTodoToEdit({ ...todo });
            }}
            className="group-hover:text-green-400 text-white duration-300 mr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </button>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="group-hover:text-red-400 text-white duration-300 mr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};
