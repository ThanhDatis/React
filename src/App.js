import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LogoGrid from './components/LogoGrid';
import Footer from './components/Footer';
import Canvas from './components/Canvas';
import './assets/css/index.css';
import SectionFrontDoor from './components/SectionFrontDoor';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="section-background">
        <div className="hero-section-background">
          <Canvas />
        </div>
      </div>
      <Hero />
      <LogoGrid />
      <SectionFrontDoor />  
      {/* <Footer /> */}
    </div>
  );
}

export default App; 