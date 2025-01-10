import React from 'react';
import '../styles/header.css';

function Header() {
    return (
        <header>
            <h1 id="header-title">Code With Ducks</h1>
            <nav>
                <div className="link">Home</div>
                <div className="link">Info</div>
                <div className="link">About Us</div>
                <div className="link">Curriculum</div>
                {/* <div className="link">FAQ</div> */}
            </nav>
        </header>
    );
}

export default Header;
