import React,{ useState,useEffect } from 'react'
import { projects } from '../constants/data'
import { Link } from 'react-router-dom'
// import axios from 'axios'

export const Projects = () => {
  // const [projects,setProject] = useState([])

  // const fetchProjects=async()=>{
  //   const response=await axios.get('')
  //   setProject(response.data.data || [])
  // }
  // useEffect(()=>{
  //   fetchProjects()
  // },[])
  return (
    <div className=' mt-20'>
      <h1 className="text-2xl font-bold mb-10">Build your portfolio, join a project</h1>
      <div className='grid grid-cols-1 md:grid-cols-2'>
     {projects.map((project,index)=>(
      <div key={index}>
        <img src={project.img} alt={project.title}/>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <p>{project.roles}</p>
        <Link to={`/signupchoice`}>view</Link>
      </div>
     ))}
     </div>
    </div>
  )
}
