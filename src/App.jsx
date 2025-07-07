import React from 'react';
import './app.css'; 
import { Link } from 'react-router-dom';
import LoginPage from '/src/LoginPage';
function App() {
  return (
    <div>
      <div className="header-container">
        <h2>GOV4FARMERS</h2>
        <Link to={'/LoginPage'}><button>Login</button></Link>
      </div>
      <br></br>
      <div className="body-container">
        <h2>Available schemes</h2>
        <marquee>Trending</marquee>
        <div class="scheme-container">
          <div class="scheme-row">
            <div className="scheme-card">
              <h3>Pradhan Mantri Kisan Samman Nidhi </h3>
              <p>Brief description of the scheme goes here.</p>
              <button>Learn More</button>
            </div>
            <div className="scheme-card">
              <h3>Pradhan Mantri Fasal Bima Yojana (PMFBY)</h3>
              <p>Brief description of the scheme goes here.</p>
              <button>Learn More</button>
            </div>
            <div className="scheme-card">
              <h3>Soil Health Card Scheme</h3>
              <p>Brief description of the scheme goes here.</p>
              <button>Learn More</button>
            </div>
          </div>
          <div class="scheme-row">
            <div className="scheme-card">
              <h3>Rashtriya Krishi Vikas Yonaja (RKVY)</h3>
              <p>Brief description of the scheme goes here.</p>
              <button>Learn More</button>
            </div>
            <div className="scheme-card">
              <h3>e-NAM(National Agriculture Market)</h3>
              <p>Brief description of the scheme goes here.</p>
              <button>Learn More</button>
            </div>
            <div className="scheme-card">
              <h3>PM Jeevan Beej Yojana</h3>
              <p>Brief description of the scheme goes here.</p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;

