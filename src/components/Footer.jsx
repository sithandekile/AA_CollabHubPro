import React from 'react';
import { Link } from 'react-router-dom';
import LOgo from '../assets/FooterLogo.png';

export const Footer = () => {
  return (
    <div className='relative flex text-[#fff] bg-[#174A33] justify-between p-6'>
      <div>
        <img src={LOgo} alt="Logo" />
      </div>
      <div>
        <h5 className='font-sans font-bold text-[20px]'>Quick Links</h5>
        <ul>
          <Link to='/'><li>Home</li></Link>
          <Link to='/about us'><li>About Us</li></Link>
          <Link to='/projects'><li>Projects</li></Link>
        </ul>
      </div>
      <div>
        <h5 className='font-sans font-bold text-[20px]'>Contact Us</h5>
        <p className='text-[20px] font-normal font-sans '>collabHub@gmail.com</p>
        <p className='text-[20px] font-normal font-sans '>+2327895142563</p>

      </div>
      <div>
        <h5 className='font-sans font-bold text-[20px]'>Platform</h5>
        <div className='text-[20px] font-normal font-sans flex flex-col items-center'>
        <a href='/how it works'>How it works</a>
        <a href='/contact us'>Pricing</a>
        <a href='/faqs'>Blog</a>
      </div>
      </div>
       <div>
        <h5 className='font-sans font-bold text-[20px]'>Support</h5>
        <div className='text-[20px] font-normal font-sans flex flex-col items-center'>
        <a href='/help center'>Help Center</a>
        <a href='/contact us'>Contact Us</a>
        <a href='/faqs'>FAQs</a>
      </div>
       </div> 
      <div className='flex flex-col items-center'>
        <h5 className='font-sans font-bold text-[20px]'>Legal</h5>
        <div className='text-[20px] font-normal font-sans flex flex-col items-center'>
        <a href='/privacy'>Privacy Policy</a>
        <a href='/terms'>Terms of Service</a>
        <a href='/faqs'>FAQs</a>
      </div>
      </div>

      {/* This div will position the paragraph at the bottom */}
      <div className='absolute bottom-0 left-0 right-0 text-center text-[20px] font-normal font-sans'>
        <p className=''>&copy, 2024 CollabHub. All rights reserved</p>
      </div>
    </div>
  );
};
