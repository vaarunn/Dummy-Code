import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='flex items-center justify-between'>
      <img className='w-20' src={logo} alt='logo' />
      <div className='p-5'>
        <Link to='/register'>
          <button className='bg-[#f6f8fc] px-4 py-2 rounded-xl mx-2 font-bold  hover:bg-[#aaabae] duration-150 '>
            SignUp / SignIn
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
