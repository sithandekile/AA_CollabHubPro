import React from 'react';
import cta from '../assets/CTA.png';

export const TransformCareer = () => {
  return (
    <div
      className='relative text-[#fff] text-center h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] max-w-screen-lg mx-auto px-4 py-8'
      style={{
        background: `url(${cta})`,
        backgroundSize: 'cover', // Cover the entire area
        backgroundPosition: 'center' // Center the image
      }}
    >
      <button className='absolute bottom-[20%] left-1/2 transform -translate-x-1/2 w-[250px] h-[50px] bg-[#174A33] text-[#fff] p-2'>
        Join Now
      </button>
    </div>
  );
};
