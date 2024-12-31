import React from 'react';
import '../styles/App.css'
import '../styles/body.css'
import goals from '../assets/goals.png'


function Body() {
  return (
    <section className='goals'>
      <h2 className="goals-title">Goals</h2>
      <div className="goals-container">
        <img src={goals} alt="Goals" className="goals-image" />
        <div className="goals-text">
          <p>At Code with Ducks, we aim to provide educational empowerment, increase STEM inclusivity, build community and networks, and create accessible learning opportunities to high school students</p>
        </div>
      </div>
    </section>
  );
}

export default Body;