import React, { useState } from 'react';
import { AddTodo } from '../models/types.d';

interface Props {
  addTodo: AddTodo;
}

export const AddTodoForm = ({ addTodo }: Props) => {
  const [newTodo, setNewTodo] = useState('');

  return (
    <form className="flex justify-between">
      <input
        className="border-gray-100 border-2 h-10  flex-1 p-2 focus:outline-none"
        type="text"
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <button
        className="bg-blue-400 w-10 h-10 flex-3 flex justify-center items-center"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          addTodo(newTodo);
          setNewTodo('');
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </form>
  );
};
