import React, { useState } from 'react';
import { db } from '../main';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import "../assets/Register.css";

function Register({ handleLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const addUser = async () => {
      try {
        const docRef = await addDoc(collection(db, "users"), {
          email: email,
          password: password,
          name: name,
          address: address,
        });
        console.log("Document written with ID: ", docRef.id);
        handleLogin(name);
        navigate('/');
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };
    addUser();
  };

  return (
    <div className='Register-Page'>
      <div className='Register-Container'>
      <h2>Register</h2>
        <div>
          <label htmlFor="email">Email:</label><br/>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label><br/>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label><br/>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label><br/>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label><br/>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          /><br/><br/>
        </div>
        <button type="button" onClick={handleSubmit}>Register</button>
      </div>
    </div>
  );
}
export default Register;