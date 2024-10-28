import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import logo from '../assets/CollabHub.png'

export const Navbar = () => {
  return (
    <nav className ='flex justify-between items-center h-[80px] shadow-md px-6'>
    <div>
      <img src={logo} alt='Nav logo'/>
    </div>
    <div className='flex space-x-6 text-[20px]'>
    <NavLink to ='/'>Home</NavLink>
    <NavLink to ='/About-us'>About us</NavLink>
    <NavLink to ='/projects'>Projects</NavLink>
    </div>
    <div className='space-x-4'>
    <Link to='/login' className='border-2 rounded-md border-[#174A33] text-[#174A33] p-2 w-[150px]'>Log-in</Link>
    <Link to ='/register' className='bg-[#174A33] text-[#fff] rounded-md p-2 w-[150px]'>Register</Link>
    </div>
    </nav>
  )
}
