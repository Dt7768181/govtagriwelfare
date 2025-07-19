import { Route,Routes, useNavigate } from 'react-router-dom'
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
  const [username, setUsername] = useState(''); // State for username
  const navigate = useNavigate();

  const handleLogin = (name) => { // Accept username as parameter
    setIsLoggedIn(true);
    setUsername(name); // Set the username
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername(''); // Clear username on logout
    navigate('/login');
  };

  return(
    <div>
      <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
      <Routes>
        <Route index element={isLoggedIn ? <Home username={username} /> : <Welcome />}/> {/* Pass username prop */}
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/register" element={<Register handleLogin={handleLogin} />} />
        <Route path="/admin_login" element={<Admin_Login />}/>
        <Route path="/admin_page" element={<Admin_Page/>}/>
      </Routes>
    </div>
  );
}

export default App;