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

function App() {
  const [displayContent, setDisplayContent] = useState(false);

  const handleHomeClick = () => {
    setDisplayContent(true); // Show content when "Home" is clicked
  };

  return (
    <div className="mx-8">
      <Router>
        <Navbar onHomeClick={handleHomeClick} />
        
        <Routes>
          <Route path="/" element={<Home displayContent={displayContent} />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signupchoice" element={<SignUpChoice />} />
          <Route path="/verify" element={<Verify />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
