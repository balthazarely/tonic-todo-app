import React, { useState } from 'react';
import { AddTodo } from '../models/types.d';
import { HiPlus } from 'react-icons/hi';

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
        placeholder="add a new todo"
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <button
        className="bg-blue-400 text-2xl w-10 h-10 flex-3 flex justify-center items-center text-white"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          addTodo(newTodo);
          setNewTodo('');
        }}
      >
        <HiPlus />
      </button>
    </form>
  );
};
