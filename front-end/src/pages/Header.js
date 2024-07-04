import React from 'react';
import '../styles/header.css';
import '../styles/App.css'

function Header() {
    return (
      <header>
          <div id="logo">
            <img src="/header_logo.png" alt="Code with Ducks Logo" />
            <h1>Code With Ducks</h1>
          </div>
          <div className="nav-container">
              <nav>
                  <ul>
                      <li>Home</li>
                      <li>About</li>
                  </ul>
              </nav>
              <button className='button'>Sign Up</button>
          </div>
      </header>
    );
  }

export default Header;