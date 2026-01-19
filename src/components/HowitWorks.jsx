import React from 'react';
import { works } from '../data';

export const HowitWorks = () => {
  return (
    <>
      <h1 className='mt-16 font-bold text-[#393939] text-[40px] max-w-screen-lg  py-8'>How It Works</h1>
      <h5 className='font-normal text-[#4B4B4B] text-[18px] pb-4'>Get started in our platform in just a few easy steps</h5>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        {works.map((card_list,index)=>(
        <div key={index} className='shadow-md border-gray border-2 rounded-md text-center p-4'>
        <img src={card_list.image} alt={card_list.title} className='place-self-center'/>
        <h5 className ='font-bold text-lg'>{card_list.title} </h5>
        <p>{card_list.desc}</p>
        </div>
        ))}
      </div>
    </>
  );
};
{/* <div className='flex justify-center mb-2'><img src={icon3} alt="Create Your Account" /></div>
          <h5 className='font-bold text-[20px] text-[#393939]'></h5>
          <p className='font-normal text-[#393939]'></p>
        </div>
        <div className='shadow-md border-gray border-2 rounded-md text-center p-4'>
          <div className='flex justify-center mb-2'><img src={icon2} alt="Discover Projects" /></div>
          <h5 className='font-bold text-[20px] text-[#393939]'></h5>
          <p className='font-normal text-[#393939]'></p>
        </div>
        <div className='shadow-md border-gray border-2 rounded-md text-center p-4'>
          <div className='flex justify-center mb-2'><img src={icon} alt="Join a Team" /></div> 
          <h5 className='font-bold text-[20px] text-[#393939]'></h5>
          <p className='font-normal text-[#393939]'></p>
        </div>
        <div className='shadow-md border-gray border-2 rounded-md text-center p-4'>
          <div className='flex justify-center mb-2'><img src={icon1} alt="Showcase Your Work" /></div>
          <h5 className='font-bold text-[20px] text-[#393939]'></h5>
          <p className='font-normal text-[#393939]'></p> */}