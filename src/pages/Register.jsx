import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import SignupImage from '../assets/signupImage.png';
import { useFormik } from 'formik';
import { registerValidation } from '../utils/validation';
import axios from 'axios';

export const Register = () => {
  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleVerifyPassword, setToggleVerifyPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setTogglePassword(!togglePassword);
  };

  const toggleVerifyPasswordVisibility = () => {
    setToggleVerifyPassword(!toggleVerifyPassword);
  };

  const onSubmit = async () => {
    setLoading(true);
    const values = { username: '', email: '', password: '', confirmPassword: '' }; // Ensure this is defined correctly

    try {
      await axios.post('https://collabhub-c0vc.onrender.com/users/register', values);
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
    navigate('/login');
  };

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const { values, isSubmitting, handleSubmit, handleChange, handleBlur, errors, isValid } = useFormik({
    validateOnMount: true,
    initialValues: initialValues,
    validationSchema: registerValidation,
    onSubmit
  });

  return (
    <main className='min-h-screen flex items-center justify-center bg-cover bg-center text-black'
      style={{ backgroundImage: `url(${SignupImage})` }}>
      
      <form className='flex flex-col rounded-md bg-white lg:w-1/3 w-full p-4 sm:p-8' onSubmit={handleSubmit}>
        <div className='text-gray-700 flex-1'>
          <h1 className='pb-2 text-3xl sm:text-4xl text-center font-bold'>Create Your Account</h1>
          <p className='text-center text-lg pb-4'>Let's get started!</p>

          <div className='flex items-center gap-2 py-4'>
            <button className='border-2 border-gray-500 p-2 rounded-md flex items-center gap-2 text-sm w-full'>
              <FcGoogle />
              <a href='https://www.google.com'>Continue with Google</a>
            </button>
            <button className='border-2 border-gray-500 p-2 rounded-md flex items-center gap-2 text-sm w-full'>
              <FaApple />
              <a href='https://www.apple.com'>Continue with Apple</a>
            </button>
          </div>

          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-400"></div>
            <span className="flex-shrink text-sm text-gray-500 px-4">Or</span>
            <div className="flex-grow h-px bg-gray-400"></div>
          </div>

          <p className='text-center'>Sign up In with E-mail</p>
          
          <div className='pb-4'>
            <label className='block text-sm pb-2' htmlFor='user'>UserName</label>
            <input
              name='username'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              className='border-2 border-gray-500 p-2 rounded-md w-full focus:outline-none'
              type='text'
              placeholder='Mayree'
            />
            {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
          </div>

          <div className='pb-4'>
            <label className='block text-sm pb-2' htmlFor='email'>Email address</label>
            <input
              name='email'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className='border-2 border-gray-500 p-2 rounded-md w-full focus:outline-none'
              type='email'
              placeholder='mayreejane@gmail.com'
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className='flex flex-col sm:flex-row sm:gap-2'>
            <div className='pb-4 w-full relative'>
              <label className='block text-sm pb-2' htmlFor='password'>Password</label>
              <input
                name='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className='border-2 border-gray-500 p-2 rounded-md w-full focus:outline-none'
                placeholder='*******'
                type={togglePassword ? 'text' : 'password'}
              />
              <span
                className='absolute top-9 right-3 cursor-pointer'
                onClick={togglePasswordVisibility}>
                {togglePassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>

            <div className='pb-4 w-full relative'>
              <label className='block text-sm pb-2' htmlFor='verify'>Confirm Password</label>
              <input
                name='confirmPassword'
                placeholder='*******'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                className='border-2 border-gray-500 p-2 rounded-md w-full focus:outline-none'
                type={toggleVerifyPassword ? 'text' : 'password'}
              />
              <span
                className='absolute top-9 right-3 cursor-pointer'
                onClick={toggleVerifyPasswordVisibility}>
                {toggleVerifyPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
            </div>
          </div>

          <div className='pb-4'>
            <label>
              <input type='checkbox' defaultChecked={true} /> I agree to the Terms & Conditions
            </label>
          </div>

          <button
            className='border-2 p-2 rounded-md w-full focus:outline-none text-white bg-[#174A33] text-lg'
            type='submit'
            disabled={isSubmitting || !isValid || loading}
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>

          <div className='pt-4 text-sm text-center'>
            <span>Already have an account?</span>
            <Link to='/login' className='ml-2 text-[#174A33]'>Login</Link>
          </div>
        </div>
      </form>
    </main>
  );
};
