import React from 'react'
import design from '../assets/design.png'
import icon4 from '../assets/icon (4).png'
import icon5 from '../assets/icon (5).png'
import icon6 from '../assets/icon (6).png'
import icon7 from '../assets/icon (7).png'

export const WhyCollabHub = () => {
  return (
    <section className='bg-[#EEF5F1] my-16 relative'>
      <h1 className='text-center text-[40px] font-bold absolute top-[11%] left-[50%] '>Why Join Collab<span className='text-[#FFC107] font-bold'>Hub?</span></h1>
      <div className='grid grid-cols-2 items-center'>
      <div>
        <img src={design}/>
      </div>
      <div className=' grid grid-cols-2 gap-2'>
      <div className='shadow-lg border-2 border-gray rounded-md p-2 bg-white h-full'>
        <div><img src={icon4}/></div>
        <h5 className='font-bold text-[20px]'>Real World Experience</h5>
        <p className='font-normal text-[20px]'>Gain hands-on by working on projects that mimic real industry scenarios.</p>
      </div>
      <div className=' shadow-lg border-2 border-gray rounded-md p-2 bg-white'>
      <div><img src={icon5}/></div>
        <h5 className='font-bold text-[20px]'>Diverse Collaboration</h5>
        <p className='font-normal text-[20px]'>Connect with individuals from various fields, enhancing your learing and creativity.</p>
      </div>
      <div className=' shadow-lg border-2 border-gray rounded-md p-2 bg-white'>
      <div><img src={icon6}/></div>
        <h5 className='font-bold text-[20px]'>AI-Powerwed Insights</h5>
        <p className='font-normal text-[20px]'>Leverage AI to optimize your project outcome and improve your skills.</p>
      </div>
      <div className='shadow-lg border-2 border-gray rounded-md p-2 bg-white'>
      <div><img src={icon7}/></div>
        <h5 className='font-bold text-[20px]'>PortFolio Development</h5>
        <p className='font-normal text-[20px]'>Build a standout portfolio with real projects to showcase your skills.</p>
      </div>
      </div>
</div>
    </section>
  )
}
