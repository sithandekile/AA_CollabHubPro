
import React from 'react';
import cta from '../assets/CTA.png';

export const TransformCareer = () => {
  return (
    <div
      className= 'bg-[#84FFDF] opacity-[.8] text-[#fff] text-center p-4 h-[22rem] relative w-full '
      style={{
        backgroundImage: `url(${cta})`,
        backgroundSize: 'cover', // Cover the entire area
        backgroundPosition: 'center', // Center the image
        backgroundRepeat: 'no-repeat',
      }}>
        
<div className='absolute inset-0 bg-gradient-to-r from-green-700/70 to-transparent pt-10 px-6  leading-7 md:leading-9'>
          <h1 className='text-[40px] font-bold text-[#fff] '>Ready to unlock career opportunities?</h1>
          <p className='text-[20px] text-[#fff]  z-10'>Join CollabHub today and unlock a world of opportunties to collaborate,learn and grow</p>

          <button className='absolute w-[250px] h-[50px]  bg-[#174A33] text-[#fff] p-2  left-10 bottom-2 lg:left-[40%] right-[40]'>
            Join Now
          </button>
          </div>
        </div>
      );
    };
