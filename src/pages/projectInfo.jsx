import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { projects,members } from '../constants/data'
import { useState } from 'react'
import axios from 'axios'


export const ProjectInfo = () => {
  const [popup,setPopup]=useState(false)
  const [errorMsg,setErrorMsg]=useState('')
  const [form,setForm]=useState({
    name:"",
    email:"",
    role:""
  })
  const navigate=useNavigate()
  const {id}=useParams()
  const project=projects.find(item=>(item.id || item._id)===parseInt(id))

  if(!project){
    return <div>Project not found</div>
  }
  //handle form change and submit
  const handleChange=(e)=>{
    setForm({...form, [e.target.name]: e.target.value})
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!form.name || !form.email || !form.role){
      setErrorMsg('Please fill up the missing fields')
      return;
    }
    console.log(form)
    // try {
    //   const response=await axios.post('',form)
    //   setForm(response.data)
    //   navigate('/project')
    //   setPopup(false)
      
    // } catch (error) {
    //   alert('failed to join the project')
    // }

    //clearing the input fields after submission
    setForm({
      name:"",
      email:"",
      role:""
    })

  }
  return (
    <div className='mt-20 pb-4 w-3/4 mx-auto'>
      <div key={project.id || project._id} className='flex flex-col md:flex-row'>  
       <img src={project.img} alt={project.title}/>
        <div className='ml-8 leading-loose'>
       <h3>Project: {project.title}</h3>
       <p><b>Category:</b> {project.category}</p>
       <p><b>Team Size:</b> +10</p>
       <p><b>Timeline:</b> 1 month</p>
       <p><b>Available Roles:</b>{project.roles}</p>
       <div>
        <h5 className='font-bold mt-10'>Members</h5>
        <div className='grid grid-cols-2 md:grid-cols-5'>
        {members.map(member=>(
          <div key={member.id || member._id} className=''>
          <img src={member.img} alt={member.name}/>
          {/* <p>{member.name}</p>
          <p>{member.role}</p>*/}
        </div>
        ))}
        </div>
      <button onClick = {()=>setPopup(true)} className='bg-[#174A33] hover:bg-[#66dea8] text-white px-4 mt-10 w-full py-2 rounded-md mr-4'>Join Project</button>
       </div>
       </div>
       </div>
       {popup && (
        <div className='bg-black bg-opacity-50 fixed inset-0 flex items-center justify-center'>
          <form onSubmit={handleSubmit} className='bg-white p-4 flex flex-col w-[500px] rounded-lg'>
            <h1 className='text-sm md:text-xl text-center'>Fill the form to apply or use your profile</h1>
            <input type='text' name='name' value={form.name} onChange={handleChange} placeholder='Enter your name' className='mt-10 border border-gray-300 rounded p-2'/>
            {errorMsg &&<p className='text-red-500'>{errorMsg}</p>}
            <input type='email' name='email' value={form.email} onChange={handleChange} placeholder='Enter you email'className='border border-gray-300 p-2 my-5 rounded'/>
            {errorMsg &&<p className='text-red-500'>{errorMsg}</p>}
            <input type='text' name='role' value={form.role} onChange={handleChange} placeholder='Enter your role'className='border border-gray-300 p-2 rounded'/>
            {errorMsg &&<p className='text-red-500'>{errorMsg}</p>}
            <button onClick={()=>setPopup(false)}className='border border-[#174A33] hover:border-[#66dea8]text-[#174A33] p-2 my-5 rounded'>Apply with Profile</button>
            <button className='bg-[#174A33] hover:bg-[#66dea8] text-white p-2 rounded'>Submit</button>
          </form>
        </div>
       )}
    </div>
  )
}
