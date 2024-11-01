import React from 'react'
import cta from '../assets/CTA.png'
export const TransformCareer = () => {
  return (
    <div className=' relative text-[#fff] text-center p-4 h-[400px]'style={{
      background: `url(${cta})` }}>
      <button className='absolute bottom-[19%] w-[250px] h-[50px] left-[40%] bg-[#174A33] text-[#fff] p-2'>Join Now</button>
    </div>
  )
}
