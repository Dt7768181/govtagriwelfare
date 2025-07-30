import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLsJ3oMGafDH8vZjuSHhXUJNXtdiEDUfo",
  authDomain: "govtagriculture-afd92.firebaseapp.com",
  projectId: "govtagriculture-afd92",
  storageBucket: "govtagriculture-afd92.firebasestorage.app",
  messagingSenderId: "98993513540",
  appId: "1:98993513540:web:09a86580b31712b5828811"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
