import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { UserAuth } from '../context/AuthContext';
const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='flex items-center bg-[#f6f8fc] w-screen justify-center gap-20'>
      <div className=' w-20 '>
        <img src={logo} alt='logo' />
      </div>
      <div className='bg-[#eaf1fb] p-2 rounded-xl'>
        <h1>{user?.email}</h1>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Navbar;
