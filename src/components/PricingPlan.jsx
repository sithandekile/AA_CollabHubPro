import React from 'react'

export const Pricing = () => {
  return (
    <section className='my-16'>
      <h1 className='text-[40px] font-bold text-[#333] font-sans'>Pricing Plans</h1>
      <p className='text-[20px] text-[#5C5C5C] font-normal font-sans pb-5'>Choose a plan that fits your needs</p>
      <div className='grid grid-cols-3 gap-2 items-center '>
        <div className='border-2 border-black-500 shadow-lg rounded-md p-4'>
          <h3 className='font-sans font-bold text-[25px] text-[#2E2E2E]'>Basic</h3>
          <p className='text-[20px] text-[#5C5C5C] font-normal font-sans'>Perfect for individuals exploring collaboration with minimal commitment</p>
          <h1 className='font-sans text-[40px] text-[#174A33] font-bold'>FREE</h1>
          <ul className =' list-disc ml-5 text-[20px] text-[#343F37] font-normal font-sans h-[150px]'>
          <li>Access to limited number of Projects</li>
          <li>Join public teams</li>
          <li>Limited Teammates in a project(up to 5 projects)</li>
          </ul>
          <button className='block border-2 border-[#174A33] bg-[#EEF5F1] text-[#174A33] p-2 w-full '>Current Plan</button>
          <div className="flex justify-center">
          <a href="#" className="text-[#333]">learn more</a>
        </div>
        </div>
        <div className='bg-[#174A33] rounded-md text-[#fff] p-4'>
          <h3 className='font-sans font-bold text-[25px] '>Pro Plan</h3>
          <p className='text-[20px]  font-normal font-sans'>Perfect for Career transitioners and students looking for advanced features</p>
          <h1 className='font-sans text-[40px] font-bold font-sans'>$5.68/<span className='font-sans text-[20px]  font-normal'>month</span></h1>
          <ul className='list-disc ml-5 text-[20px] font-normal font-sans h-[150px]'>
          <li>Access to unlimited Projects</li>
          <li>Join private and public teams</li>
          <li> AI-powered project recommendations</li>
          </ul>
          <button className='block border-2 text-[#174A33] bg-[#EEF5F1] p-2 w-full'>Upgrade Plan</button>
          <div className="flex justify-center">
          <a href="#" className="text-[#fff]">learn more</a>
        </div>
        </div>
        <div className='border-2 border-black-500 shadow-lg rounded-md  p-4'>
        <h3 className='font-sans font-bold text-[25px] text-[#2E2E2E]'>Team Plan</h3>
        <p className='text-[20px] text-[#5C5C5C] font-normal font-sans'>Teams or groups looking to collaborate on projects more efficient</p>
        <h1 className='font-sans text-[40px] text-[#174A33] font-bold font-sans'>$11.36/<span className='font-sans text-[20px] text-[#174A33] font-normal'>month</span></h1>
         <ul className='list-disc ml-5 text-[20px] text-[#343F37] font-normal font-sans h-[150px]'>
         <p className='text-[20px] text-[#5C5C5C] font-normal font-sans'>Everything in the Pro Plan, Plus:</p>
         <li>Team collaboration features</li>
         <li>Team performance analytics</li>
         <li>Customize recommendations</li>
         </ul>
         <button className='block border-2 border-[#174A33] text-[#174A33] bg-[#EEF5F1] p-2 w-full'>Upgrade Plan</button>
         <div className="flex justify-center">
          <a href="#" className="text-[#333]">learn more</a>
        </div>
         </div>
      </div>
    </section>
  )
}
