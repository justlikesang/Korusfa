import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services.js';

// function Services() {
//   return <h2>Services Page</h2>;
// }

function Approach() {
  return <h2>About Page</h2>;
}

function App() {

  const [activeLink, setActiveLink] = useState('/');

  return (
    <div className="App">
      <div className="nav-section">
        <nav className="nav-bar">
          <Link to="/" onClick={() => setActiveLink('/')}>
            <img
              className="nav-logo"
              alt="Logo"
              src="/KORUS_original_logo.png"
            />
          </Link>
          <ul className="links-container">
            <li>
              {/* client-side navigation */}
              <Link
                className={
                  'link ' + (activeLink === 'services' ? 'active' : '')
                }
                onClick={() => setActiveLink('services')}
                to="/services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className={'link ' + (activeLink === 'approach' ? 'active' : '')}
                onClick={() => setActiveLink('approach')}
                to="/approach"
              >
                Approach
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <Home />

      <div>
        <Routes>
          <Route path="/services" element={<Services />} />
          <Route path="/approach" element={<Approach />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
