import React, { useState } from 'react'
import image from '../assets/createHero.png'
import { roleCard } from '../constants/data'
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";


export const CreateProject = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    teamSize: "",
    timeLine: "",
    category: "ecommerce"
  })

  const [selectedRoles, setSelectedRoles] = useState([])
  const [currentIndex,setCurrentIndex]=useState(0)
  const shownRoles=5;
  const totalSlides=Math.ceil(roleCard.length/shownRoles);
  // handling the change event
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // toggle a role in the selectedRoles array
  const toggleRole = (role) => {
    setSelectedRoles(prev =>
      prev.includes(role) ? prev.filter(r => r !== role) : [...prev, role]
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // for now just log the payload; replace with actual submit logic
    const payload = { ...form, roles: selectedRoles }
    console.log('Create project payload:', payload)
  }
const nextSlide = () => {
  setCurrentIndex((prevIndex) =>
    prevIndex === totalSlides - shownRoles ? 0 : prevIndex + 1
  );
};

const prevSlide = () => {
  setCurrentIndex((prevIndex) =>
    prevIndex === 0 ? totalSlides - shownRoles : prevIndex - 1
  );
}
  return (
    <main  className=''>
      <div className='bg-red-400 relative overflow-hidden'>
        <img src={image} alt='create project hero image' className='lg:w-full w-auto' />
      </div>
      <h1 className='font-bold text-3xl md:text-4xl text-center'>Build your projects and invite others to collaborate</h1>
      <h2 className='text-3xl md:text-4xl text-center mt-10'>Create Project</h2>
      <form className='p-4' onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 md:grid-cols-2 border border-gray-300 p-5 shadow-lg h-auto rounded-lg gap-4 w-3/4 mx-auto'>
        <div className='grid grid-cols-1'>
          <label htmlFor='name'>Project Name</label>
          <input type='text' name='name' id='name' value={form.name} onChange={handleChange} className=' p-2 mb-5 border border-gray-300' />
          <label htmlFor='desc'>Project Description</label>
          <textarea name='description' id='desc' value={form.description} onChange={handleChange}className='border border-gray-300 h-[140px]' />
        </div>
        <div className='grid grid-cols-1'>
          <label htmlFor='team'>Team Size</label>
          <input type='number' name='teamSize' id='team' value={form.teamSize} onChange={handleChange} className='border border-gray-300 p-2 mb-5' />
          <label htmlFor='deadline'>Timeline</label>
          <input type='date' name='timeLine' id='deadline' value={form.timeLine} onChange={handleChange} className='border border-gray-300 p-2 mb-5' />
          <label htmlFor='cat'>Project Category</label>
          <select name='category' id='cat' value={form.category} onChange={handleChange} className='border border-gray-300 p-2'>
            <option value='ecommerce'>Ecommerce</option>
            <option value='Travel'>Travel</option>
            <option value='restaurent'>Restaurent</option>
            <option value='shopfy'>Shopfy</option>
          </select>
        </div>
        </div>
        <div>
          <h1  className ='md:mt-20 mt-10 text-3xl md:text-4xl mb-2 md:text-center ml-2'>Select required roles</h1>
          <div className='relative overflow-hidden'>
          <div className='flex gap-4 w-[45%] transition-transform duration-500 ease-in-out'
           style={{transform: `translateX(-${(currentIndex * 100)/shownRoles}%)` }}>
            {roleCard.map((item, index) => {
              const isSelected = selectedRoles.includes(item.role)
              return (
                <div
                  key={index}
                  onClick={() => toggleRole(item.role)}
                  role='button'
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') toggleRole(item.role) }}
                  className={`p-6 rounded-md min-w-full md:min-w-[calc(100%/3)] grid grid-cols-1 cursor-pointer transition-shadow  items-center gap-2 ${isSelected ? 'ring-4 ring-green-500 bg-green-100' : 'bg-[#A2E5B3]'}`}
                >
                  <img src={item.img} alt={item.role} className='h-40' />
                  <h1>{item.role}</h1>
                  {isSelected && <span className='text-sm text-green-700'>Selected</span>}
                </div>
              )
            })}
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-white text-black p-2 rounded-full z-10 hover:bg-gray-200" >
            <IoMdArrowBack/>
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2  transform -translate-y-1/2 right-0 bg-white text-black p-2 rounded-full z-10 hover:bg-gray-200" >
            <IoMdArrowForward />
          </button>
          </div>
          <button type='submit' className='bg-[#174A33] hover:bg-[#66dea8] text-white mx-[35%] p-2 w-1/3 mt-8 rounded-lg'>Create Project</button>
        </div>
      </form>
    </main>
  )
}
