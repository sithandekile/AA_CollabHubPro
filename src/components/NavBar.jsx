import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/CollabHub.png';
import { IoMdMenu,IoMdClose } from "react-icons/io";

export const Navbar = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  return (
    <nav className='fixed z-50 top-0 right-0  left-0 flex justify-between items-center shadow-md px-6 bg-white h-10'>
      <Link to='/'>
        <img src={logo} alt='Nav logo' />
      </Link>
      <div className='md:flex hidden space-x-6 text-[20px]'>
        <NavLink to='/' >Home</NavLink>
        <NavLink to='/About-us'>About us</NavLink>
        <NavLink to='/projects'>Projects</NavLink>
      </div>
      <div className='md:flex hidden space-x-4'>
        <Link to='/login' className='border-2 rounded-md border-[#174A33] text-[#174A33] p-2 w-[150px]'>
          Log-in
        </Link>
        <Link to='/register' className='bg-[#174A33] text-white rounded-md p-2 w-[150px]'>
          Register
        </Link>
      </div>
      <div className='md:hidden'>
        <button onClick={() => setIsDisplayed(!isDisplayed)}>
          {isDisplayed ? <IoMdClose size={20}/>: <IoMdMenu size={20}/> }
        </button>
      </div>
      {isDisplayed && (
        <div className='absolute top-full left-0 right-0 md:hidden flex flex-col items-center bg-white py-2 space-y-2 shadow-md'>
          <NavLink to='/' onClick={() => setIsDisplayed(false)}>Home</NavLink>
          <NavLink to='/About-us' onClick={() => setIsDisplayed(false)}>About us</NavLink>
          <NavLink to='/projects' onClick={() => setIsDisplayed(false)}>Projects</NavLink>
          <div className='flex flex-col space-y-2'>
            <Link to='/login' className='border-2 rounded-md border-[#174A33] text-[#174A33] p-2 w-[150px]'>
              Log-in
            </Link>
            <Link to='/register' className='bg-[#174A33] text-white rounded-md p-2 w-[150px]'>
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
