import React from 'react';
import '../styles/header.css';

function Header() {
    return (
        <header>
            <h1 id="header-title">Code With Ducks</h1>
            <nav>
                <a href="#hero-wrapper" className="link">Home</a>
                <a href="#info" className="link">Info</a>
                <a href="#about-us" className="link">About Us</a>
                <a href="#goals" className="link">Curriculum</a>
                <a href="#faq" className="link">FAQ</a>
            </nav>
        </header>
    );
}

export default Header;
