import React from 'react';
import './styles/App.css';
import Header from './pages/Header';
import { Hero } from './Hero.tsx';
import { Card } from './Card.tsx';
//import Body from './pages/Body';
//import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <section id="info">
        <Card title="Statistics" text="blah blah" img="" />
        <Card title="Machine Learning and AI's Growth" text="blah blah" img="" right={true} />
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
