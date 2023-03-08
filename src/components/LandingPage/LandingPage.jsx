import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import Main from './Main';
import Information from './Information';
const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Main />
      <Information />
    </div>
  );
};

export default LandingPage;
