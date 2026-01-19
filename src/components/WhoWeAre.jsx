import React from 'react'
import whowe from '../assets/Whowe.png'
export const WhoWeAre = () => {
  return (
    <section >
      <h1 className='font-bold text-[40px] text-[#1E1E1E]  py-5 ml-10 '>Who We Are</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 items-center mt-8 gap-4 '>
      <div>
        <img src={whowe} alt='who we are image'/>
      </div>
      <div>
        <h2 className='font-bold text-[36px] text-[#393939]'>Empowering Collaboration, Fostering Growth</h2>
        <p className='font-normal text-[19px] text-[#1E1E1E]'>CollabHub is more than just a platform-it's a community where passion meets purpose.<br/> We connect people with real-world projects,bridging the gap between  theory and practice</p>
      </div>
      </div>
    </section>  
  )
}