import React from 'react'
import {Sidebar} from '../components/sidebar'
import {Outlet} from 'react-router-dom'
export const Dashboard = () => {
  return (
    <div className='flex '>
        <Sidebar/>
        <div className='w-full p-8 '>
        <h1 className='font-bold text-3xl mb-5'>Hello Thande!</h1>
        <Outlet/>
        </div>
    </div>
  )
}
