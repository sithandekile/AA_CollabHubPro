import React from 'react';
import {projects} from '../constants/data'
import { TiMessages } from "react-icons/ti";
import { IoMdNotificationsOutline } from "react-icons/io";
import dashLogo from '../assets/CollabHub.png';
import footerImage from '../assets/kapka.png';
import { useNavigate, Link,useParams } from 'react-router-dom';
// import { ProjectInfo } from './ProjectInfo';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { CiSearch } from "react-icons/ci";

export const DashProjects = () => {
  const navigate = useNavigate();
  const {id}=useParams()
  // Formik setup with initial values, validation schema, and submit handler
  const formik = useFormik({
    initialValues: {
      search: ''
    },
    validationSchema: Yup.object({
      search: Yup.string()
        .matches(/^[a-zA-Z\s]+$/, 'Only letters are allowed')
        .min(3, 'Search term must be at least 3 characters')
        .required('Search term is required')
    }),
    onSubmit: async (values) => {
      try {
        // Sending search query to an API endpoint (replace URL with your API)
        const response = await axios.get(`https://api.example.com/search`, {
          params: { query: values.search }
        });
        console.log('Search results:', response.data);
      } catch (error) {
        console.error('Error searching:', error);
      }
    }
  });

  return (
    <div className="ml-[25%]">
      <div className="fixed z-50 left-0 top-0 right-0 w-full bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo */}
          <img src={dashLogo} alt="Logo" />
        </div>
        <div className="flex items-center">
          <button className="bg-gray-200 p-2 rounded-full"><IoMdNotificationsOutline /></button>
          <button className="bg-gray-200 p-2 rounded-full"><TiMessages /></button>
          <div className="flex items-center ml-4">
            <img src={footerImage} alt="Profile" className="w-10 h-10 rounded-full" />
            <span className="ml-2">Hannah Florence</span>
          </div>
        </div>
      </div>

      <form onSubmit={formik.handleSubmit} className="flex justify-center items-center flex-col mt-20">
        <input
          type="search"
          id="search"
          name="search"
          className={`border rounded-md p-2 w-1/2 mb-4 ${
            formik.errors.search && formik.submitCount > 0 ? 'border-red-500' : ''
          }`}
          placeholder="Search projects..."
          onInput={(e) => {
            // Allow only letters and spaces
            e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
          }}
          onChange={formik.handleChange}
          value={formik.values.search}
        />
        {formik.errors.search && formik.submitCount > 0 ? (
          <div className="text-red-500 text-sm mb-2">{formik.errors.search}</div>
        ) : null}

        <button type="submit" className="absolute" style={{ top: '51%', left: '70%' }}>
          <CiSearch />
        </button>
      </form>
      
      <h1 className="text-2xl font-bold mb-4">Build your portfolio, join a project</h1>

      {/* Project Listings */}
      <div className='grid lg:grid-cols-2 gap-4'>
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg bg-[#EEF5F1]  shadow-sm">
            <img src={project.img} alt={project.title} className=" rounded-md mb-3" />
            <div className='p-3 leading-relaxed'>
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-600">Description: {project.description}</p>
            <p className="text-[#B89900] mb-5">Roles available: {project.roles}</p>
            <Link to={`/projects/${id}`} className="bg-[#174A33] text-white py-2 px-4 rounded-md hover:bg-[#66dea8]" onClick={() => navigate('/projects/:id')}>View</Link>
          </div>
          </div>
        ))}
      </div>
      {/* //need to vistit this back as its not working */}
      {/* <Link to={`/projectinfo/${id}`}><ProjectInfo /></Link> */}
    </div>
  );
};
