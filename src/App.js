import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Approach from './components/Approach';
import Team from './components/Team';
import ContactUs from './components/ContactUs';

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
                className={
                  'link ' + (activeLink === 'approach' ? 'active' : '')
                }
                onClick={() => setActiveLink('approach')}
                to="/approach"
              >
                Approach
              </Link>
            </li>
            <li>
              <Link
                className={'link ' + (activeLink === 'team' ? 'active' : '')}
                onClick={() => setActiveLink('team')}
                to="/team"
              >
                Team
              </Link>
            </li>
            <li>
              {/* client-side navigation */}
              <Link
                className={'link ' + (activeLink === 'contact' ? 'active' : '')}
                onClick={() => setActiveLink('contact')}
                to="/contact"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>

      <div className="footer-section">
        <div
          className="footer-hero-text-container"
          style={{ backgroundImage: 'url(/footer_background.jpg)' }}
        >
          <h2>
            To unite our clients across the Pacific with apt Capital and Partner
            opportunity
          </h2>
          <br />
          <h3>KORUS becomes UTP - Unite The Pacific</h3>
          <div className="contact-us-container">
            <Link onClick={() => setActiveLink('contact')} to='/contact'>
              <img
                className="contact-us-btn"
                src="/contact_us.jpg"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="copy-right-wrapper">
          <div className="copy-right-container">
            <div className="copy-right">
              © {new Date().getFullYear()} KORUS Partners. All rights reserved
            </div>
            <div className="links">
              <ul id="footer-links">
                <li>
                  <Link
                    className="links"
                    onClick={() => setActiveLink('approach')}
                    to="/approach"
                  >
                    Approach
                  </Link>
                </li>
                <li>
                  <Link
                    className="links"
                    onClick={() => setActiveLink('contact')}
                    to="/contact"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
