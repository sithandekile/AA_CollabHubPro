import React from 'react';
import { Link } from 'react-router-dom';
import LOgo from '../assets/FooterLogo.png';

export const Footer = () => {
  return (
    <div className='relative flex text-[#fff] bg-[#174A33] justify-between p-6 h-[300px]'>
      <div>
        <img src={LOgo} alt="Logo" />
      </div>
      <div>
        <h5 className='font-sans font-bold text-[20px]'>Quick Links</h5>
        <ul className='p-3' >
          <Link to='/'><li>Home</li></Link>
          <Link to='/about us'><li>About Us</li></Link>
          <Link to='/projects'><li>Projects</li></Link>
        </ul>
      </div>
      <div>
        <h5 className='font-sans font-bold text-[20px]'>Contact Us</h5>
        <p className='text-[20px] font-normal font-sans p-2'>collabHub@gmail.com</p>
        <p className='text-[20px] font-normal font-sans '>+2327895142563</p>

      </div>
      <div>
        <h5 className='font-sans font-bold text-[20px]'>Platform</h5>
        <div className='text-[20px] font-normal font-sans flex flex-col items-center p-2'>
        <Link to ='/how it works'>How it works</Link>
        <Link to='/contact us'>Pricing</Link>
        <Link to='/faqs'>Blog</Link>
      </div>
      </div>
       <div>
        <h5 className='font-sans font-bold text-[20px]'>Support</h5>
        <div className='text-[20px] font-normal font-sans flex flex-col items-center p-2'>
        <Link to='/help center'>Help Center</Link>
        <Link to='/contact us'>Contact Us</Link>
        <Link to='/faqs'>FAQs</Link>
      </div>
       </div> 
      <div className='flex flex-col items-center'>
        <h5 className='font-sans font-bold text-[20px]'>Legal</h5>
        <div className='text-[20px] font-normal font-sans flex flex-col items-center p-2'>
        <Link to='/privacy'>Privacy Policy</Link>
        <Link to='/terms'>Terms of Service</Link>
        <Link to='/faqs'>FAQs</Link>
      </div>
      </div>

      {/* This div will position the paragraph at the bottom */}
      <div className='absolute bottom-0 right-0 left-0 text-center text-[20px] font-normal font-sans'>
        <p className=''>&copy, 2024 CollabHub. All rights reserved</p>
      </div>
    </div>
  );
};
