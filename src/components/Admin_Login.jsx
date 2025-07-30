import React, { useState } from 'react';
import { db } from '../main';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import "../assets/Admin_Login.css";

function Admin_Login({ handleAdminLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    const adminUsersRef = collection(db, 'admin_users');
    const q = query(adminUsersRef, where('email', '==', email), where('password', '==', password));

    getDocs(q)
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          console.log('Admin Login failed: Incorrect email or password');
          alert('Admin Login failed: Incorrect email or password');
        } else {
          console.log('Admin Login successful!');
          alert('Admin Login successful!');
          if (typeof handleAdminLogin === 'function') {
            handleAdminLogin();
          }

          navigate('/admin_page');
        }
      })
      .catch((error) => { console.error('Error during admin login:', error); });
  };

  return (
    <div className='Admin-Login-Page'>
      <div className='Admin-Login-Container'>
        <h2>Admin Login</h2>
          <div>
            <label htmlFor="email">Email:</label><br/>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            /><br/>
          </div>
          <div>
            <label htmlFor="password">Password:</label><br/>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            /><br/><br/>
          </div>
          <button onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
}

export default Admin_Login;