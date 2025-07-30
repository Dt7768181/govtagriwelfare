import React, { useState } from 'react';
import "../assets/Login.css";
import { db } from '../main.jsx';
import { useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';

function Login({handleLogin}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('email', '==', email), where('password', '==', password));

    getDocs(q)
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          console.log('Login failed: Incorrect email or password');
        } else {
          console.log('Login successful!');
          const userData = querySnapshot.docs[0].data(); 
          handleLogin(userData.name); 
          navigate('/');
        }
      })
      .catch((error) => { console.error('Error during login:', error); });
  };

  return (
    <div className='Login-Page'>
        <div className='Login-Container'>
          <label htmlFor="email">Email:</label><br/>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          /><br/><br/>
          <label htmlFor="password">Password:</label><br/>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /><br/><br/>
            <button type="button" onClick={handleSubmit}>Login</button><br/><br/>
            <Link to="/admin_login">Admin Login</Link>
        </div>
    </div>
  );
}

export default Login;