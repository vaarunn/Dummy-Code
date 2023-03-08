import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import frog from '../../assets/frog.json';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className=' h-screen flex items-center justify-center flex-col '>
      <h1
        className='text-2xl md:text-3xl font-bold w-[80%] '
        data-aos='fade-up'
      >
        Tired of searching for suitable job roles and jumping platforms like a
        frog?
      </h1>
      <Lottie
        style={{
          height: '30vh',
          width: '100vw',
        }}
        animationData={frog}
      />
      <h4 className='text-xl md:text-2xl font-bold w-[80%]' data-aos='fade-up'>
        Well not anymore....
      </h4>
      <h2 className='text-4xl font-bold w-[80%]' data-aos='fade-up'>
        Introducing Job-bie
      </h2>
    </div>
  );
};

export default Main;
