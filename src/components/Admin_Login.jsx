import React, { useState } from 'react';
import { db } from '../main';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function Admin_Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

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
          navigate('/admin_page'); 
        }
      })
      .catch((error) => { console.error('Error during admin login:', error); });
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Admin_Login;