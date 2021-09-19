import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

interface Props {
  children: JSX.Element | JSX.Element[] | undefined;
}

const todoWrapper = {
  maxWidth: '500px',
  width: '100%',
  height: '700px',
};

export const Layout = ({ children }: Props) => {
  const location = useLocation();

  return (
    <div className="bg-gradient-to-b from-blue-200  to-blue-400 h-screen w-100 flex justify-center items-start pt-10">
      <div
        style={todoWrapper}
        className=" bg-gray-50 rounded-2xl m-2 p-6 shadow-xl flex flex-col gap-5 "
      >
        <div className="flex justify-between">
          <div className=" text-3xl font-bold">Todo App</div>
          <Link
            style={{ textDecoration: 'none' }}
            to={location.pathname !== '/about' ? '/about' : '/'}
          >
            <button className=" text-md bg-blue-400 text-white py-1 px-3 font-normal cursor-pointer hover:bg-blue-500">
              {location.pathname !== '/about' ? 'About' : 'Back'}
            </button>
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
};
