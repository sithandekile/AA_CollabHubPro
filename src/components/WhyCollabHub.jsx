import React from 'react';
import design from '../assets/design.png';
import icon4 from '../assets/Icon4.png';
import icon5 from '../assets/Icon5.png';
import icon6 from '../assets/Icon6.png';
import icon7 from '../assets/Icon7.png';

export const WhyCollabHub = () => {
  return (
    <section className='bg-[#EEF5F1] my-16 relative'>
      <h1 className='text-center text-[40px] font-bold absolute top-[11%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 max-w-screen-lg mx-auto px-4 py-8'>Why Join Collab<span className='text-[#FFC107] font-bold'>Hub?</span></h1>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
        <div className='order-1 md:order-1'>
          <img src={design} alt="Design Illustration" />
        </div>
        <div className='grid grid-cols- gap-2 md:grid-cols-2 order-2 md:order-2'>
          <div className='shadow-lg border-2 border-gray rounded-md p-2 bg-white h-full'>
            <div><img src={icon4} alt="Real World Experience" /></div>
            <h5 className='font-bold text-[20px]'>Real World Experience</h5>
            <p className='font-normal text-[20px]'>Gain hands-on by working on projects that mimic real industry scenarios.</p>
          </div>
          <div className='shadow-lg border-2 border-gray rounded-md p-2 bg-white'>
            <div><img src={icon5} alt="Diverse Collaboration" /></div>
            <h5 className='font-bold text-[20px]'>Diverse Collaboration</h5>
            <p className='font-normal text-[20px]'>Connect with individuals from various fields, enhancing your learning and creativity.</p>
          </div>
          <div className='shadow-lg border-2 border-gray rounded-md p-2 bg-white'>
            <div><img src={icon6} alt="AI-Powered Insights" /></div>
            <h5 className='font-bold text-[20px]'>AI-Powered Insights</h5>
            <p className='font-normal text-[20px]'>Leverage AI to optimize your project outcome and improve your skills.</p>
          </div>
          <div className='shadow-lg border-2 border-gray rounded-md p-2 bg-white'>
            <div><img src={icon7} alt="Portfolio Development" /></div>
            <h5 className='font-bold text-[20px]'>Portfolio Development</h5>
            <p className='font-normal text-[20px]'>Build a standout portfolio with real projects to showcase your skills.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
