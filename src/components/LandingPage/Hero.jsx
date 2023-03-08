import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import hiring from '../../assets/hiring.json';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Lottie
      data-aos='zoom-in'
      style={{
        overflow: 'hidden',
        className: 'bg-red-500',
        height: '90vh',
        width: '90vw',
      }}
      animationData={hiring}
    />
  );
};

export default Hero;
