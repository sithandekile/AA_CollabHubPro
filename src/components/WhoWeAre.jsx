
import React from 'react';
import whowe from '../assets/Whowe.png';

export const WhoWeAre = () => {
  return (
    <section className='px-4 md:px-10 py-8'>
      <h1 className='font-bold text-[32px] md:text-[40px] text-[#1E1E1E] py-1'>Who We Are</h1>
      <div className='flex flex-col md:flex-row items-center mt-8 space-y-4 md:space-y-0 md:space-x-4'>
        <div className='flex-shrink-0'>
          <img src={whowe} alt='who we are image' className='w-full max-w-[300px] md:max-w-[400px] lg:max-w-none' />
        </div>
        <div className='flex-grow'>
          <h2 className='font-bold text-[28px] md:text-[36px] text-[#393939]'>Empowering Collaboration, Fostering Growth</h2>
          <p className='font-normal text-[16px] md:text-[19px] text-[#1E1E1E] mt-2'>
            CollabHub is more than just a platform—it's a community where passion meets purpose. 
            We connect people with real-world projects, bridging the gap between theory and practice.
          </p>
        </div>
      </div>
    </section>
  );
};
