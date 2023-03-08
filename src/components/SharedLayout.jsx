import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
const SharedLayout = () => {
  return (
    <div className='flex flex-row bg-neutral-100  w-screen '>
      <div>
        <Sidebar />
      </div>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default SharedLayout;
