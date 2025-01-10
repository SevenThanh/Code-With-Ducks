import React from 'react';
import '../styles/App.css'
import '../styles/body.css'
import goals from '../assets/goals.png'


function Body() {
  return (
    <section id="goals" className='goals'>
      <h2 className="goals-title">Goals</h2>
      <div className="goals-container">
        <div className="goals-text-left">
          <p>At Code with Ducks, we aim to provide educational empowerment, increase STEM inclusivity, build community and networks, and create accessible learning opportunities to high school students</p>
        </div>
        <img src={goals} alt="Goals" className="goals-image" />
        <div className="goals-text-right">
          <p>Created, taught, and led by Stevens students, we hope to give an insider's look of what it means to be a computer science student at Stevens</p>
        </div>
      </div>
    </section>
  );
}

export default Body;