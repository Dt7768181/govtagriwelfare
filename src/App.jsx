import { Route,Routes, useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import './App.css'
import Header from './components/Header.jsx';
import Welcome from './components/Welcome.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Admin_Login from './components/Admin_Login.jsx';
import Home from './components/Home.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/login'); 
  };

  return(
    <div>
      <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
      <Routes>
        <Route index element={<Welcome/>}/>
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/register" element={<Register handleLogin={handleLogin} />} />
        <Route path="/admin_login" element={<Admin_Login />} />
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App
