import React from 'react';
import './styles/App.css';
import Header from './pages/Header';
import Body from './pages/Body';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="format">
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
