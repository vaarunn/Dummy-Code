import React, { useState } from 'react';
import Lottie from 'lottie-react';
import register from '../../assets/register.json';
import { FcGoogle } from 'react-icons/fc';
import { UserAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toggleRegister, setToggleRegister] = useState(true);
  const [error, setError] = useState('');
  const { signUp, signIn } = UserAuth();

  const { signInWithGoogle } = UserAuth();
  const navigate = useNavigate();
  const handleGoogle = async () => {
    setError('');
    try {
      await signInWithGoogle();
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signUp(email, password);
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  const handleSingIn = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signIn(email, password);
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <div className='grid md:grid-cols-2'>
      <div>
        <div className='mt-5'>
          <h1 className='text-center text-3xl font-bold'>
            Sign Up/Sign In Now.
          </h1>
        </div>
        <Lottie animationData={register} />
      </div>
      {/* righ hand */}
      <div className='w-[400px] h-[622px] bg-[#FFFFFF] border-2 border-[#f6f8fc] mx-auto my-5 shadow-2xl'>
        <div className='p-4'>
          <h1 className='text-center text-2xl font-bold'>
            {toggleRegister ? 'Sign In' : 'Sign Up'}
          </h1>
        </div>
        <div
          className='bg-[#f6f8fc] p-4 w-[80%] mx-auto rounded-xl hover:bg-[#afb0b3] duration-150 cursor-pointer'
          onClick={handleGoogle}
        >
          <button className='flex items-center gap-5'>
            <FcGoogle size={30} />
            <h1 className='font-semibold'>Continue with Google</h1>
          </button>
        </div>
        <div className='text-center mt-2 '>
          <p className=' text-sm font-bold'> Or</p>
        </div>
        {error ? (
          <div className='bg-red-600 mt-4 p-4 w-[95%] mx-auto rounded-xl font-bold text-center'>
            <p>{error}</p>
          </div>
        ) : null}

        <div className=' p-8 '>
          <form onSubmit={toggleRegister ? handleSingIn : handleSignUp}>
            {' '}
            <input
              type='email'
              placeholder='Email Address'
              className=' my-4 w-[95%] p-2 border-2 border-gray-400 outline-none rounded-xl text-sm  ml-3'
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type='password'
              placeholder='password'
              className=' my-2 w-[95%] p-2 border-2 border-gray-400 outline-none rounded-xl text-sm  ml-3 '
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button className='bg-[#f6f8fc] px-4 py-2 rounded-xl w-[95%] ml-3 mt-4 text-xl font-bold  hover:bg-[#aaabae] duration-150 '>
              {toggleRegister ? 'Sign In' : 'Sign Up'}
            </button>
          </form>
        </div>
        <p className='text-center'>
          {toggleRegister ? `Don't have an account? ` : 'Already a member?'}
          <span
            className='cursor-pointer font-bold'
            onClick={() => {
              setToggleRegister(!toggleRegister);
            }}
          >
            {' '}
            {toggleRegister ? 'Sign Up' : 'Sign In'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
