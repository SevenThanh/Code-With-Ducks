import React from 'react';
import './styles/App.css';
import Header from './pages/Header';
import { Hero } from './Hero.tsx';
//import Body from './pages/Body';
//import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
        {/*
        <Body />
        <Footer />
        */}
    </div>
  );
}

export default App;
