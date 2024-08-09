import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Header from './pages/Header';
import { Hero } from './Hero.tsx';
import { Card } from './Card.tsx';
import Particles, {initParticlesEngine} from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particleOptions from './assets/particles.json';
//import Body from './pages/Body';
//import Footer from './pages/Footer';

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

  return (
    <div className="App">
      {init && <Particles className="particles" options={particleOptions}/>}
      <Header />
      <Hero />
      <section id="info">
        <Card title="Statistics" text="blah blah" img="" />
        <Card title="Machine Learning and AI's Growth" text={secondCard} img="" right={true} />
      </section>
      <section id="about-us">
        <Card title="About Us" text="blah blah" img="" />
        <Card title="Goals" text="blah blah" img="" right={true} />
      </section>
        {/*
        <Body />
        <Footer />
        */}
    </div>
  );
}

export default App;
