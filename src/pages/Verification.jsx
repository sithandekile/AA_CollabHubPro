import React, { useState, useEffect } from 'react';
import Verify_PopupImage from '../assets/verify.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Verify = () => {
  const [loading, setLoading] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState('');
  const [resendLoading, setResendLoading] = useState(false);
  const [resendMessage, setResendMessage] = useState('');
  const navigate = useNavigate();

  // Assuming you have the token available through props or route params
  const token = new URLSearchParams(window.location.search).get('token');

  useEffect(() => {
    if (token) {
      verifyEmail();
    }
  }, [token]);

  // Function to verify the user's email using a GET request
  const verifyEmail = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/verify/${token}`); // GET request for email verification
      setVerificationStatus(response.data.message || 'Verification successful!');
    } catch (error) {
      setVerificationStatus('Verification failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Function to resend the verification email using a POST request
  const resendVerificationEmail = async () => {
    setResendLoading(true);
    setResendMessage(''); // Reset message before sending request

    try {
      const response = await axios.post(`/api/resend-verification`, { email: 'user@example.com' }); // Replace with actual user email
      setResendMessage(response.data.message || 'Verification email sent successfully!');
    } catch (error) {
      setResendMessage('Failed to resend verification email. Please try again.');
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div 
      className='h-screen flex items-center justify-center bg-cover bg-center text-[black]'
      style={{ background: `url(${Verify_PopupImage})` }}
    >
      <div className='relative bg-[#fff] rounded-md w-[30vw] p-8 h-[60vh] flex flex-col justify-center items-center text-center'>
        <h1 className='font-bold text-[40px]'>Verify Your E-mail</h1>
        <p className='font-normal text-[20px]'>{verificationStatus || 'To complete your registration, please check your inbox for the verification email from CollabHub.'}</p>
        
        <p className='absolute right-4 bottom-[10%] font-normal text-[20px]'>Haven't gotten an email?</p>
        
        {/* <button  *
          className='flex justify-center items-center bg-[#174A33] text-[#fff] mt-10 w-full rounded-md p-4'
          onClick={resendVerificationEmail}
          disabled={resendLoading}
        >
          {resendLoading ? 'Resending...' : 'Resend Verification Email'}
        </button>

        // {resendMessage && <p className='text-red-500 mt-2'>{resendMessage}</p>*/}

        <button 
          className='flex justify-center items-center bg-[#1D6D31] text-[#fff] mt-4 w-full rounded-md p-4'
          onClick={() => navigate('/login')} // Redirect to login after verification
        >
          Continue to Login
        </button>
      </div>
    </div>
  );
};
