import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  console.log('About component - inView:', inView);

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const skills = [
    'JavaScript', 'Python', 'React', 'Node.js', 'MongoDB', 
    'Machine Learning','AI/ML', 'Data Structures', 'Algorithms', 'Git','Tailwind CSS', 'Deep Learning', 
  ];

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="about-background">
        <img 
          src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="AI Technology Background"
          className="about-bg-image"
        />
        <div className="about-overlay"></div>
      </div>

      <div className="container">
        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="visible"
          animate="visible"
        >
          <motion.div className="about-header" variants={itemVariants}>
            <h2 className="section-title">
              <span className="title-accent">About</span>
              <span className="holographic-text">Me</span>
            </h2>
            <div className="title-underline"></div>
          </motion.div>

          <div className="about-grid">
            <motion.div className="about-text glass-container" variants={itemVariants}>
              <div className="text-content">
                <h3 className="about-subtitle holographic-text">Passionate Developer & Tech Enthusiast</h3>
                <p>
                  I am a dedicated B.Tech Computer Science and Engineering student with a deep passion 
                  for cutting-edge technology and innovation. My journey in the world of programming 
                  began with curiosity and has evolved into a relentless pursuit of excellence.
                </p>
                <p>
                  Specializing in full-stack development, artificial intelligence, and machine learning, 
                  I strive to create solutions that bridge the gap between imagination and reality. 
                  Every line of code I write is a step towards building a more connected and intelligent future.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring emerging technologies, contributing to 
                  open-source projects, or mentoring fellow students in their programming journey.
                </p>
              </div>

              <div className="personal-details">
                <h4>Personal Details</h4>
                <div className="details-grid">
                  <div className="detail-item">
                    <span className="detail-label">Name:</span>
                    <span className="detail-value">Saurov Nandi</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Age:</span>
                    <span className="detail-value">22 Years</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Location:</span>
                    <span className="detail-value">India</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Languages:</span>
                    <span className="detail-value">English, Bengali, Hindi</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Interests:</span>
                    <span className="detail-value">AI, Web Dev, </span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Availability:</span>
                    <span className="detail-value">Full-time</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className="about-visual" variants={itemVariants}>
              <div className="profile-container">
                <div className="profile-frame">
                  <div className="profile-image">
                    <img 
                      src="https://i.postimg.cc/DZ6nxsrS/picture.jpg" 
                      alt="Profile"
                    />
                    <div className="profile-overlay"></div>
                  </div>
                  <div className="frame-decoration">
                    <div className="corner corner-tl"></div>
                    <div className="corner corner-tr"></div>
                    <div className="corner corner-bl"></div>
                    <div className="corner corner-br"></div>
                  </div>
                </div>

                <div className="floating-skills">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      className="skill-bubble"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ 
                        delay: 0.5 + index * 0.1,
                        duration: 0.5,
                        ease: "backOut"
                      }}
                      whileHover={{ scale: 1.1, y: -5 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div className="research-section glass-container" variants={itemVariants}>
            <div className="research-header">
              <h3 className="holographic-text">
                <span className="research-icon">📚</span> Research Work
              </h3>
            </div>
            <div className="research-content">
              <p className="research-intro">
                Active contributor to academic research with <strong>8 conference papers</strong> (2 published in IEEE) 
                and <strong>1 journal paper</strong> currently in progress.
              </p>
              <div className="research-stats">
                <div className="research-stat-item">
                  <div className="stat-number">8</div>
                  <div className="stat-label">Conference Papers</div>
                  <div className="stat-note">(2 in IEEE)</div>
                </div>
                <div className="research-divider"></div>
                <div className="research-stat-item">
                  <div className="stat-number">1</div>
                  <div className="stat-label">Journal Paper</div>
                  <div className="stat-note">(In Progress)</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="achievement-stats" variants={itemVariants}>
            <div className="stat-card glass-container">
              <div className="stat-icon">🎓</div>
              <div className="stat-content">
                <h4>Education</h4>
                <p>B.Tech CSE</p>
              </div>
            </div>
            <div className="stat-card glass-container">
              <div className="stat-icon">💼</div>
              <div className="stat-content">
                <h4>Experience</h4>
                <p>1+ Years</p>
              </div>
            </div>
            <div className="stat-card glass-container">
              <div className="stat-icon">🏆</div>
              <div className="stat-content">
                <h4>Projects</h4>
                <p>20+ Completed</p>
              </div>
            </div>
            <div className="stat-card glass-container">
              <div className="stat-icon">⚡</div>
              <div className="stat-content">
                <h4>Technologies</h4>
                <p>15+ Mastered</p>
              </div>
            </div>
          </motion.div>

          <motion.div className="cta-section" variants={itemVariants}>
            <h3>Ready to collaborate on your next project?</h3>
            <motion.a 
              href="#contact"
              className="neon-button primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
