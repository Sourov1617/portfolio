import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(textRef.current, 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.5"
    );

    // Floating animation for elements
    gsap.to(".floating-element", {
      y: -20,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.2
    });

  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="hero" className="hero section" ref={heroRef}>
      <div className="hero-background">
        <div className="cyber-grid">
        </div>
  
            <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="hero-text"
            ref={textRef}
            variants={itemVariants}
          >
            <h1 className="hero-title">
              <span className="title-line">Welcome to the</span>
              <span className="title-main holographic-text">FUTURE</span>
              <span className="title-line">of Technology</span>
            </h1>
          </motion.div>

          <motion.div 
            className="hero-subtitle"
            ref={subtitleRef}
            variants={itemVariants}
          >
            <p>B.Tech Computer Science & Engineering Student</p>
            <p>Full Stack Developer | AI Enthusiast | Researcher</p>
          </motion.div>

          <motion.div 
            className="hero-actions"
            variants={itemVariants}
          >
            <motion.a 
              href="#projects"
              className="neon-button primary"
              whileHover={{ scale: 1.05, rotateX: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Projects
            </motion.a>
            
            <motion.a 
              href="#contact"
              className="neon-button secondary"
              whileHover={{ scale: 1.05, rotateX: -10 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div 
            className="hero-stats"
            variants={itemVariants}
          >
            <div className="stat-item floating-element">
              <div className="stat-number holographic-text">20+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item floating-element">
              <div className="stat-number holographic-text">15+</div>
              <div className="stat-label">Technologies Mastered</div>
            </div>
            <div className="stat-item floating-element">
              <div className="stat-number holographic-text">100+</div>
              <div className="stat-label">Hours of Coding</div>
            </div>
          </motion.div>

          <motion.div 
            className="scroll-indicator"
            variants={itemVariants}
            animate={{
              y: [0, 10, 0],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
          
            <div className="scroll-text">Scroll to Explore</div>
            <div className="scroll-arrow">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          variants={itemVariants}
        >
          <div className="hologram-container">
            <div className="hologram-cube floating-element">
              <div className="cube-face front"></div>
              <div className="cube-face back"></div>
              <div className="cube-face right"></div>
              <div className="cube-face left"></div>
              <div className="cube-face top"></div>
              <div className="cube-face bottom"></div>
            </div>
            <div className="hologram-rings">
              <div className="ring ring-1"></div>
              <div className="ring ring-2"></div>
              <div className="ring ring-3"></div>
            </div>
          </div>
        </motion.div>
      </div>
</div>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default Hero;
