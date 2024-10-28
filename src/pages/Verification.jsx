import React from 'react'
import Verify_PopupImage from '../assets/verify.png'

export const Verify = () => {
  return (
    <div 
      className='h-screen flex items-center justify-center bg-cover bg-center text-[black]'
      style={{background:`url(${Verify_PopupImage})`}}>
      <div className='bg-[#fff] rounded-md w-[30vw] p-6'>
        <h1>Verify Your E-mail</h1>
        <p>To complete your registration, please check your inbox for the verification email from CollabHub.</p>
        <p className='right-0'>Haven't gotten an email?</p>
        <button className='bg-[#174A33] text-[#fff] text-center px-4 py-2 rounded'>Continue</button> 
      </div>
    </div>
  )
}
