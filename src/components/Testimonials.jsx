import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { testimonialsData } from '../data';
export const Testimonials = () => {
 

  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 3;

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - itemsToShow : Math.max(prevIndex - itemsToShow, 0)
    );
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + itemsToShow >= testimonialsData.length ? 0 : prevIndex + itemsToShow
    );
  };

  return (
    <div className="testimonials-container w-[] my-16 bg-[#EEF5F1] flex flex-col items-center max-w-screen-lg   py-8">
      <div className='text-center mb-8'>
        <h1 className='font-bold text-[40px] text-[#393939]'>What Our Users Say</h1>
        <p className='font-normal text-[20px] text-[#5E5E5E]'>Discover how CollabHub has made a difference in the careers of our users</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full max-w-5xl px-4">
        {testimonialsData.slice(startIndex, startIndex + itemsToShow).map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card text-center p-6 border rounded-lg shadow-md bg-white">
            <img
              src={testimonial.image}
              alt={`${testimonial.name}'s picture`}
              className="testimonial-image mx-auto rounded-full mb-3"
              style={{ width: '80px', height: '80px' }}
            />
            <div className="flex justify-center mb-2">
              {Array(testimonial.ratings).fill().map((_, i) => (
                <FaStar key={i} color="#FFD700" />
              ))}
            </div>
            <h5 className="name font-bold text-[20px] text-[#393939] mb-1">{testimonial.name}</h5>
            <p className="description text-[20px] font-normal text-[#5E5E5E]">{testimonial.description}</p>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center items-center mt-6 space-x-6 ">
        <IoIosArrowBack onClick={handlePrev} className="cursor-pointer text-2xl hover:text-gray-700 bg-[#174A33] text-white p-2 rounded-full" />
        <IoIosArrowForward onClick={handleNext} className="cursor-pointer text-2xl  hover:text-gray-700 bg-[#174A33] text-white p-2 rounded-full" />
      </div>
    </div>
  );
};
