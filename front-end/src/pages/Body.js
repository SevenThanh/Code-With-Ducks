import React from 'react';
import '../styles/App.css'
import '../styles/body.css'


function Body() {
  return (
    <section className='home-page'>
      <div className="content">
        <h2>Learn to Code <br /> with <span id="school-name">Stevens</span></h2>
        <h3>Join us today to learn how to code</h3>
        <button className='button2'>Get Started</button>
      </div>
      <div id="mascot">
        <img src="/mascot.png" alt="Code with Ducks Mascot" />
      </div>

    </section>
  );
}

export default Body;