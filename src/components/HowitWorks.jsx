import React from 'react'
import icon3 from '../assets/icon3.png'
 import icon2 from '../assets/icon2.png'
 import icon1 from '../assets/icon1.png'
 import icon from '../assets/icon.png'
// import { DiHtml5DeviceAccess } from 'react-icons/di'
export const HowitWorks = () => {
  return (
    <>
    <h1 className='mt-8 font-bold text-[#393939] text-[40px] mt-16'>How It Works</h1>
    <h5 className='font-normal text-[#4B4B4B] text-[18px] pb-4'>Get started in our platform in just a few easy steps</h5>
    <div className='grid grid-cols-4 gap-2'>
      <div className='shadow-md border-gray border-2 rounded-md text-center'>
        <div className='flex justify-center'><img src={icon3}/></div>
        <h5 className='font-bold text-[20px] text-[#393939]'>Create Your Account</h5>
        <p className='font-normal text-[#393939]'>Sign up for free and create your CollabHub profile</p>
      </div>
      <div className='shadow-md border-gray border-2 rounded-md text-center'>
      <div className='flex justify-center'><img src={icon2}/></div>
        <h5 className='font-bold text-[20px] text-[#393939]'>Discover Projects</h5>
        <p className='font-normal text-[#393939]'>Find the perfect project to collaborate on</p>
      </div>
      <div className='shadow-md border-gray border-2 rounded-md text-center'>
      <div className='flex justify-center'><img src={icon}/></div> 
        <h5 className='font-bold text-[20px] text-[#393939]'>Join a Team</h5>
        <p className='font-normal text-[#393939]'>Connect with like-minded individuals and start working projects together</p>
      </div>
      <div className='shadow-md border-gray border-2 rounded-md text-center'>
      <div className='flex justify-center'><img src={icon1}/></div>
        <h5 className='font-bold text-[20px] text-[#393939]'>Showcasee Your Work</h5>
        <p className='font-normal text-[#393939]'>Build your portfolio, and share your achievements</p>
      </div>
    </div>
    </>
  )
}
