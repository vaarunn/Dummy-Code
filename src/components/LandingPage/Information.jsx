import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Information = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className=' h-screen flex items-center justify-center flex-col '>
      <h1 className='text-3xl font-bold w-[80%] ' data-aos='fade-up'>
        So what exactly is Job-bie?
      </h1>
      <h4 className='text-2xl font-bold w-[80%]' data-aos='fade-up'>
        Job-bie is all in one job portal which connects employer and employee
      </h4>
      <h4 className='text-2xl font-bold w-[80%]' data-aos='fade-up'>
        Handling complete process from interview to onbording
      </h4>
      <h4 className='text-2xl font-bold w-[80%]' data-aos='fade-up'>
        In a nut shell Job-bie is
      </h4>
      <h4 className='text-2xl font-bold w-[80%]' data-aos='fade-up'>
        One stop destination for all career needs
      </h4>
      <h2 className='text-2xl font-bold w-[80%]' data-aos='fade-up'>
        So what are you waiting for?
      </h2>
      <h2 className='text-4xl font-bold w-[80%]' data-aos='fade-up'>
        Apply to your dream job and get placed now
      </h2>
      <div>
        <Link to='/register'>
          <button
            className='bg-[#f6f8fc] px-4 py-2 rounded-xl mx-2 font-bold  hover:bg-[#aaabae] duration-150 mt-6'
            data-aos='fade-up'
          >
            SignUp / SignIn
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Information;
