import React, { useState, useEffect } from 'react';
import { db } from '../main'; 
import { collection, getDocs } from 'firebase/firestore';
import "../assets/Home.css"

export default function Home({
  username
}) {
  const [schemes, setSchemes] = useState([]);
  useEffect(() => {
    const fetchSchemes = async () => {
      try {
        const schemesCollectionRef = collection(db, 'schemes'); 
        const querySnapshot = await getDocs(schemesCollectionRef);
        const schemesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSchemes(schemesData);
      } catch (error) {
        console.error('Error fetching schemes:', error);
      }
    };
    fetchSchemes();
  }, []);
  return (
    <div className="Home-Page">
      <div className="Home-Container">
        <h1>Hello {username}</h1>
        <h2>Available Schemes</h2>
        {schemes.length > 0 ? (
          <ul>
            {schemes.map((scheme) => (
              <li key={scheme.id}>
                <h3>{scheme.name}</h3>
                <p>{scheme.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No schemes available yet.</p>
        )}
      </div>
    </div>
  );
}