import React, { useState } from 'react';
import { Todo } from '../models/types.d';
import { HiPencil, HiTrash, HiCheckCircle } from 'react-icons/hi';

interface Props {
  todo: Todo;
  deleteTodo: (id: string) => void;
  editTodo: (todo: any) => void;
}

export const TodoListItem = ({ todo, deleteTodo, editTodo }: Props) => {
  const [showEditInput, setShowEditInput] = useState<boolean>(false);
  const [todoToEdit, setTodoToEdit] = useState<Todo>(todo);
  const [showError, setShowError] = useState<boolean>(false);

  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoToEdit({ ...todoToEdit, text: e.target.value });
  };

  const handleUpdateTodos = () => {
    if (todoToEdit.text.length === 0) {
      setShowError(true);
    } else {
      editTodo(todoToEdit);
      setShowEditInput(false);
      setShowError(false);
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleUpdateTodos();
    }
  };

  return (
    <div className="bg-white w-100 shadow-sm hover:shadow-lg p-4 flex justify-between items-center group my-2">
      {!showEditInput && <div>{todo.text}</div>}
      {showEditInput && (
        <>
          <div>
            <input
              className=" bg-gray-50 h-8  flex-1 focus:outline-none"
              type="text"
              value={todoToEdit.text}
              onChange={handleEditInputChange}
              onKeyDown={handleKeyDown}
            />
            {showError && (
              <div className="text-red-500 text-xs">
                Please enter an actual todo.
              </div>
            )}
          </div>
          <button
            onClick={handleUpdateTodos}
            className=" text-green-400 duration-300 mr-2 ml-2 text-2xl"
          >
            <HiCheckCircle />
          </button>
        </>
      )}
      {!showEditInput && (
        <div>
          <button
            onClick={() => {
              setShowEditInput(true);
              setTodoToEdit({ ...todo });
            }}
            className="group-hover:text-green-400 text-2xl text-white duration-300 mr-2"
          >
            <HiPencil />
          </button>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="group-hover:text-red-400 text-white duration-300 mr-2 text-2xl"
          >
            <HiTrash />
          </button>
        </div>
      )}
    </div>
  );
};
