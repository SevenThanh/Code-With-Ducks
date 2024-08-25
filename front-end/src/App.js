import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Header from './pages/Header';
import { Hero } from './Hero.tsx';
import { Card } from './Card.tsx';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particleOptions from './assets/particles.json';
import mlAiImage from './assets/Ml&AI.png';
import aboutus from './assets/aboutus.png';
import goals from './assets/goals.png';
import Footer from './pages/Footer';

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
      if (init) {
          return;
      }

      initParticlesEngine(async (engine) => {
          await loadFull(engine);
      }).then(() => {
          setInit(true);
      });
  }, []);

  const secondCard = "With the emergence of tools like ChatGPT and Claude, alongside AI-powered products from companies such as Meta, Microsoft, and Google, it’s crucial for computer science students to understand how these technologies function. This rapidly evolving field is continuously being explored, with the next generation of tech innovators discovering new and more effective ways to apply these tools."
  const thirdCard = "Founded and built by a dedicated and passionate team of Computer Science students from Stevens Institute of Technology, we are committed and driven by inspiring and enlightening the new generation of thinkers. Having experienced the feeling of wanting more than just the basics of Computer Science especially with the uprise of AI and Machine Learning applications, we are devoted to fueling that curiosity and introducing new topics to those who want to know more than basic."
  const fourthCard = "At Code with Ducks, we aim to provide educational empowerment, increase STEM inclusivity, build community and networks, and create accessible learning opportunities to high school students. Created, taught, and led by Stevens students, we hope to give an insider’s look of what it means to be a computer science student at Stevens."

  return (
    <div className="App">
      {init && <Particles className="particles" options={particleOptions}/>}
      <Header />
      <Hero />
      <section id="info">
        <Card title="Statistics" text="blah blah" img="" />
        <Card title="Machine Learning and AI's Growth" text={secondCard} img={mlAiImage} right={true} />  
      </section>
      <section id="about-us">
        <Card title="About Us" text={thirdCard} img={aboutus} />
        <Card title="Goals" text={fourthCard} img={goals} right={true} />
      </section>
        
        {/* <Body /> */}
        <Footer />
       
    </div>
  );
}

export default App;
