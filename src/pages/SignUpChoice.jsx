import React from 'react'
import { useNavigate } from 'react-router-dom';
import Verify_PopupImage from '../assets/Choice.png'

export const SignUpChoice = () => {
  const navigate = useNavigate();

  const handleStudent= () => {
    navigate('/signup');
  };

  const handleProjectOwner = () => {
    navigate('/login');
  };

  return (
    <main className='h-screen flex items-center justify-center bg-cover ' style={{ background: `url(${Verify_PopupImage})` }}>
  <div className='rounded-md bg-white flex flex-col justify-center items-center text-center p-4 '>
    <h1 className='text-3xl mb-4'>Welcome to CollabHub!</h1>
    <p>It is time to collaborate, empower and develop your skills for a brighter future</p>
    <p className='mt-8'>Find your <span className='text-[#FFC107] font-bold text-[20px]'>collaboration</span>and bring your vision to life Or discover excitting opportunities and <span className='text-[#FFC107] font-bold text-[19px]'>kickstart you career!</span></p>
    <div className='space-y-2 mt-4 w-full flex flex-col items-center'>
      <button className='border-2 border-gray-500 bg-[#114A33] text-white p-2 rounded-md flex items-center justify-center text-sm w-[75%]' onClick={handleStudent}>Create Projects</button>
      <button className='border-2 border-gray-500 bg-[#174A33] text-white p-2 rounded-md flex items-center justify-center text-sm w-[75%]' onClick={handleProjectOwner}>Join Projects</button>
    </div>
  </div>
</main>

  ) 
}
