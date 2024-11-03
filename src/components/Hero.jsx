import React from 'react';
import heroImage from '../assets/HeroImage2.png';
import { useNavigate } from 'react-router-dom';
import avarta from '../assets/avarta.png';
import avarta1 from '../assets/avarta1.png';
import avarta2 from '../assets/avarta2.png';
import avarta3 from '../assets/avarta3.png';
import avarta4 from '../assets/avarta4.png';
import brands from '../assets/Brands.png';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className=' md:px-8 mt-16 max-w-screen-lg mx-auto px-4 py-8'>
      <div className='flex flex-col md:flex-row items-center justify-between'>
        <div className='order-2 md:order-1 mt-8 md:mt-0 md:w-1/2'>
          <h1 className='text-[#5E5E5E] text-[32px] md:text-[40px] font-bold'>
            Collaborate, Create and <span className='text-[#FFC107]'>Grow</span>
          </h1>
          <p className='text-[18px] md:text-[20px] py-4'>
            Turn your ideas into reality. Your collaborative workspace for professional
            growth.
          </p>
          <button
            className='bg-[#174A33] rounded-md text-white p-4 w-full md:w-[250px] mt-4'
            onClick={() => navigate('/register')}
          >
            Get Started
          </button>
          <div className='flex gap-2 mt-12 md:mt-20 pt-10'>
            <div className='flex flex-col items-center border-r border-[#333] border-dashed w-1/3'>
              <h3 className='text-[#174A33] text-[24px] md:text-[30px] font-bold'>500+</h3>
              <p className='text-[#767676] text-[16px] md:text-[20px]'>Active Users</p>
              <div className='flex mt-2'>
                <img src={avarta} alt="avatar1" className='w-8 h-8 md:w-10 md:h-10' />
                <img src={avarta1} alt="avatar2" className='w-8 h-8 md:w-10 md:h-10' />
                <img src={avarta2} alt="avatar3" className='w-8 h-8 md:w-10 md:h-10' />
                <img src={avarta3} alt="avatar4" className='w-8 h-8 md:w-10 md:h-10' />
                <img src={avarta4} alt="avatar5" className='w-8 h-8 md:w-10 md:h-10' />
              </div>
            </div>
            <div className='border-r border-[#333] border-dashed w-1/3 text-center'>
              <h3 className='text-[#174A33] text-[24px] md:text-[30px] font-bold'>100+</h3>
              <p className='text-[#767676] text-[16px] md:text-[20px]'>Projects</p>
            </div>
            <div className='w-1/3 text-center'>
              <h3 className='text-[#174A33] text-[24px] md:text-[30px] font-bold'>20+</h3>
              <p className='text-[#767676] text-[16px] md:text-[20px]'>Tech Courses</p>
            </div>
          </div>
        </div>
        <div className='order-1 md:order-2 w-full md:w-1/2 flex justify-center'>
          <img src={heroImage} alt='hero' className='w-full max-w-[400px] md:max-w-none' />
        </div>
      </div>
      <div className='flex items-center justify-between mt-8 p-4 md:p-8 shadow-xl bg-[#EEF5F1]'>
  <h4 className='font-bold text-[22px] md:text-[28px] text-[#393939]'>Trusted By:</h4>
  <img 
    src={brands} 
    alt='brands logos' 
    className='max-w-full h-auto w-[200px] md:w-[300px] lg:w-auto' // Adjusted width
  />
</div>

    </section>
  );
};
