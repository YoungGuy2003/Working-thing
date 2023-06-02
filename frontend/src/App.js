import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// pages
import HomePage from './pages/HomePage.js';
import LoginPage from './pages/LoginPage';
import SingleBlogPage from './pages/SingleBlogPage';
import AddBlogPage from './pages/AddBlogpage.js';
import EditBlogPage from './pages/EditBlogPage.js';
import About from './pages/About.js';
import RegistrationPage from './pages/RegistrationPage.js';

import AdminDashboardPage from './pages/AdminDashboardPage.js';
//components
import NavBar from './components/NavBar';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<><NavBar  /><HomePage /></>} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/blog/:id" element={<><NavBar  /><SingleBlogPage /></>} />
        <Route path="/add-blog" element={<><NavBar  /><AddBlogPage /></>} />
        <Route path="/edit-blog/:id" element={<><NavBar  /><EditBlogPage /></>} />
        <Route path="/admin-dashboard" element={<><NavBar/><AdminDashboardPage/></>} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/About" element={<About/>} />

      </Routes>
    </Router>
  );
}

export default App;