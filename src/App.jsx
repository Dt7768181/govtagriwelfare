import { Route, Routes, useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import './App.css'
import Header from './components/Header.jsx';
import Welcome from './components/Welcome.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Admin_Login from './components/Admin_Login.jsx';
import Home from './components/Home.jsx';
import Admin_Page from './components/Admin_Page.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false); 
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = (name) => {
    setIsLoggedIn(true);
    setIsAdminLoggedIn(false); 
    setUsername(name);
    navigate('/'); 
  };

  const handleAdminLogin = () => { 
    setIsAdminLoggedIn(true);
    setIsLoggedIn(false); 
    navigate('/admin_page'); 
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdminLoggedIn(false); 
    setUsername('');
    navigate('/login');
  };

  return(
    <div>
      <Header isLoggedIn={isLoggedIn} isAdminLoggedIn={isAdminLoggedIn} handleLogout={handleLogout}/>
      <Routes>
        <Route path="/" element={isLoggedIn || isAdminLoggedIn ? <Home username={username} /> : <Welcome />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/register" element={<Register handleLogin={handleLogin} />} />
        <Route path="/admin_login" element={<Admin_Login handleAdminLogin={handleAdminLogin} />}/>
        <Route path="/admin_page" element={<Admin_Page/>}/>
        <Route path="*" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;