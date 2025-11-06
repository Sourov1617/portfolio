import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: 'var(--secondary-bg)',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '3rem 0 1rem'
    }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}
        >
          <div>
            <h3 className="holographic-text" style={{marginBottom: '1rem', fontSize: '1.5rem'}}>
              Portfolio 2025
            </h3>
            <p style={{color: 'var(--text-secondary)', lineHeight: '1.6'}}>
              Passionate developer creating innovative solutions with cutting-edge technologies. 
              Always ready for new challenges and opportunities.
            </p>
          </div>

          <div>
            <h4 style={{color: 'var(--primary-color)', marginBottom: '1rem'}}>Quick Links</h4>
            <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
              {['Home', 'About', 'Projects', 'Experience', 'Contact'].map(link => (
                <a 
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{color: 'var(--primary-color)', marginBottom: '1rem'}}>Technologies</h4>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
              {['React', 'Node.js', 'Python', 'MongoDB', 'AWS'].map(tech => (
                <span 
                  key={tech}
                  style={{
                    background: 'rgba(0, 255, 255, 0.2)',
                    color: 'var(--primary-color)',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '15px',
                    fontSize: '0.8rem',
                    border: '1px solid rgba(0, 255, 255, 0.3)'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{color: 'var(--primary-color)', marginBottom: '1rem'}}>Connect</h4>
            <div style={{display: 'flex', gap: '1rem'}}>
              {[
                { icon: '💼', url: 'https://linkedin.com/in/sourovnandi' },
                { icon: '💻', url: 'https://github.com/Sourov1617' },
                { icon: '🐦', url: 'https://twitter.com/sourovnandi' },
                { icon: '📧', url: 'mailto:sourovnandi1617@gmail.com' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    fontSize: '1.2rem',
                    textDecoration: 'none',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '2rem',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem'}}>
            © {currentYear} Portfolio. Built with ❤️ using React & Modern Web Technologies.
          </p>
          <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem'}}>
            Made by <span className="holographic-text">Saurov Nandi</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
