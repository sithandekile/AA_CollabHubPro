import React from 'react'
import { useNavigate } from 'react-router-dom';
import Verify_PopupImage from '../assets/Choice.png'

export const SignUpChoice = () => {
  const navigate = useNavigate();

  const handleCreateProjects = () => {
    navigate('/dashboard');
  };

  const handleJoinProjects = () => {
    navigate('/dashboard');
  };

  return (
    <main className='h-screen flex items-center justify-center bg-cover' style={{ background: `url(${Verify_PopupImage})` }}>
      <div className='rounded-md bg-white flex flex-col justify-center items-center text-center p-6 sm:w-[80vw] md:w-[60vw] lg:w-[40vw] h-auto sm:h-[70vh]'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4'>Welcome to CollabHub!</h1>
        <p className='font-normal text-lg sm:text-xl md:text-2xl'>It is time to collaborate, empower and develop your skills for a brighter future</p>
        <p className='mt-8 font-normal text-lg sm:text-xl md:text-2xl'>Find your <span className='text-[#FFC107] font-bold'>collaboration</span> and bring your vision to life or discover exciting opportunities and <span className='text-[#FFC107] font-bold'>kickstart your career!</span></p>
        <div className='space-y-2 mt-4 w-full flex flex-col items-center'>
          <button className='border-2 border-gray-500 bg-[#114A33] text-white text-lg sm:text-xl p-4 rounded-md flex items-center justify-center text-sm w-[90%] md:w-[75%]' onClick={handleCreateProjects}>Create Projects</button>
          <button className='border-2 border-gray-500 bg-[#174A33] text-white text-lg sm:text-xl p-4 rounded-md flex items-center justify-center text-sm w-[90%] md:w-[75%]' onClick={handleJoinProjects}>Join Projects</button>
        </div>
      </div>
    </main>
  ) 
}
