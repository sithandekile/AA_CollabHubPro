 import React,{useEffect,useState} from 'react'
import axios from 'axios'
import heroImage from '../assets/HeroImage2.png'
 import { useNavigate } from 'react-router-dom'
import avarta from '../assets/avarta.png'
import avarta1 from '../assets/avarta1.png'
import avarta2 from '../assets/avarta2.png'
 import avarta3 from '../assets/avarta3.png' 
import brands from '../assets/Brands.png'
import avarta4 from '../assets/avarta4.png'


 export const Hero = () => {
 const [users,setUsers]=useState()

 const fetchUsers=async()=>{
 const res = await axios.get('https://test-repo-vgqz.onrender.com/api/users')
 setUsers(res.data)
 }
  useEffect(()=>{
  fetchUsers()
  },[users])
  const navigate=useNavigate();
   return (
     <section className=' pt-10 mt-16 grid grid-cols-1'>
      <div className='md:flex lg:justify-between'>
        <div>
          <h1 className='text-[#5E5E5E] text-[40px] font-bold '>Collaborate, Create and <span className='text-[#FFC107]'>Grow</span></h1>
          <p className='text-[20px] py-4'>Turn your ideas into reality. Your collaborative workspace for<br/> professional growth</p>
          <button className='bg-[#174A33] rounded-md text-[#fff] p-4 w-[250px]' onClick={()=>navigate('/register')}>Get Started</button>
    <div className='flex gap-2 mt-2 pt-10 '>
      <div className=' flex flex-col justify-center border-r border-[#333] border-dashed w-[%] items-center'>
      <h3 className='text-[#174A33] text-[30px] font-bold font-sans ' >500+</h3>
      <p className='font-sans font-normal text-[20px] text-[#767676] '>Active Users</p>
      <div className='flex'>
      <img src={avarta}/>
      <img src={avarta1}/>
      <img src={avarta2}/>
      <img src={avarta3}/> 
      <img src={avarta4}/>
      </div>
      </div>
      <div className=' border-r border-[#333] w-[30%] border-dashed text-center'>
      <h3 className='text-[#174433] font-bold text-[30px] font-sans'>100+</h3>
      <p className='font-sans font-normal text-[20px] text-[#767676]'>Projects</p>
      </div>
      <div className='border-r border-[#333] w-[30%] border-dashed text-center'>
      <h3 className='text-[#174A33] font-bold text-[30px] font-sans'>20+</h3>
      <p className='font-sans font-normal text-[20px] text-[#767676]'>Tech Courses</p>
      </div>
      </div>
      </div>
        <div className=''>  
        <img src={heroImage} alt='hero image'/>
      </div>
    </div>
    <div className=' items-center mt-8 shadow-xl w-full bg-[#EEF5F1]'>
      <h4 className='font-bold text-[28px] text-[#393939]'>Trusted By:</h4>
      <img src={brands} alt='brands logos' className='max-w-full h-auto'/>
    </div>
     </section>
   )
 }
 