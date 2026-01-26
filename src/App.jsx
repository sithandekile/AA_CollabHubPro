import React, { useState } from 'react';
import './index.css';
import { Navbar } from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { Projects } from './pages/Projects';
import { Login } from './pages/login';
import { Register } from './pages/Register';
import { SignUpChoice } from './pages/SignUpChoice';
import { Verify } from './pages/Verification';
import {Dashboard} from './pages/dashboard'
import {Profile} from './pages/profile'
import {DashProjects} from './pages/dashProjects'
import {Myai} from './pages/myai'
import {Community} from './pages/community'
import {Portfolio} from './pages/portfolio'
import {Settings} from './pages/settings'
import {HelpCenter} from './pages/help'
import {Logout} from './pages/logout'
import { ProjectInfo } from './pages/projectInfo';

function App() {
  // const [displayContent, setDisplayContent] = useState(false);

  const handleHomeClick = () => {
    setDisplayContent(true); // Show content when "Home" is clicked
  };

  return (
    <div className="mx-8">
      <Router>
        <Navbar/>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signupchoice" element={<SignUpChoice />} />
          <Route path="/verify" element={<Verify />} /> 
          <Route path="project/:id" element={<ProjectInfo/>}/>
          <Route path="/dashboard" element ={<Dashboard/>}>
          <Route path="profile" element ={<Profile/>}/>
          <Route path="dash-projects" element ={<DashProjects/>}/>
          <Route path="myai" element ={<Myai/>}/>
          <Route path="community" element ={<Community/>}/>
          <Route path="portifolio" element ={<Portfolio/>}/>
          <Route path="settings" element ={<Settings/>}/>
          <Route path="help-center" element ={<HelpCenter/>}/>
          <Route path="logout" element ={<Logout/>}/>
          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
