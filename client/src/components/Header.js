import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import './Header.css';

const Header = () => {
  const [quote, setQuote] = useState('');
  const [showQuote, setShowQuote] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getQuote = async () => {
    try {
      const response = await axios.get('/api/quote');
      setQuote(response.data.quote);
      setShowQuote(true);
      setTimeout(() => setShowQuote(false), 5000);
    } catch (error) {
      console.error('Error fetching quote:', error);
      setQuote('The only way to do great work is to love what you do. - Steve Jobs');
      setShowQuote(true);
      setTimeout(() => setShowQuote(false), 5000);
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`);
          alert(`Your location: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Unable to retrieve your location');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser');
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: 'easeOut' }
  };

  return (
    <>
      <motion.header 
        className={`header ${isScrolled ? 'scrolled' : ''}`}
        initial="initial"
        animate="animate"
        variants={headerVariants}
      >
        <div className="header-container">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="logo-text holographic-text">PORTFOLIO</span>
            <div className="logo-subtitle">2025</div>
          </motion.div>

          <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <ul className="nav-list">
              <li><a href="#hero" onClick={() => scrollToSection('hero')}>Home</a></li>
              <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
              <li><a href="#education" onClick={() => scrollToSection('education')}>Education</a></li>
              <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
              <li><a href="#certifications" onClick={() => scrollToSection('certifications')}>Certifications</a></li>
              <li><a href="#experience" onClick={() => scrollToSection('experience')}>Experience</a></li>
              <li><a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </nav>

          <div className="header-actions">
            <motion.button 
              className="neon-button"
              onClick={getQuote}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Quote
            </motion.button>
            
            <motion.button 
              className="location-btn"
              onClick={getLocation}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Get GPS Location"
            >
              📍
            </motion.button>

            <button 
              className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {location && (
          <div className="location-display">
            Current Location: {location}
          </div>
        )}
      </motion.header>

      {showQuote && (
        <motion.div 
          className="quote-overlay"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <div className="quote-container glass-container">
            <div className="quote-text">{quote}</div>
            <button 
              className="quote-close"
              onClick={() => setShowQuote(false)}
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Header;
