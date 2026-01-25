import React from 'react'
import {Link} from 'react-router-dom'
export const Sidebar = () => {
  return (
    <aside className='w-1/4 bg-[#174A33] font-normal md:font-bold min-h-screen ml-0 fixed bottom-0 left-0 '>
        <div className='grid grid-cols-1 text-white p-2 md:p-8'>
        <Link to ='dashboard'className='mt-20 text-lg md:text-2xl'>Dashboad</Link>
        <Link to ='profile'className='mt-10' >Profile</Link>
        <Link to ='dash-projects'className='my-5'>Projects</Link>
        <Link  to='myai'>My AI</Link>
        <Link to ='community'className='my-5'>Comminity</Link>
        <Link to ='portifolio'>Portfolio</Link>
        <div className='mt-40 grid grid-cols-1' >
            <Link to ='settings'>Settings</Link>
            <Link to ='help-center'className='my-5'>Help Center</Link>
            <Link to ='logout'>Logout</Link>
        </div>
        </div>
    </aside>
  )
}
