import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import GlobalNeuralNetwork from './components/GlobalNeuralNetwork';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: 'ease-in-out',
      once: false,
      mirror: true
    });
    
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="cyber-loader">
          <div className="cyber-spinner"></div>
          <h2 className="loader-text">Initializing Neural Network...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <ParticleBackground />
      <GlobalNeuralNetwork />
      <Header />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Certifications />
      {/* <Experience /> */}
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
