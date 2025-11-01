import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Certifications = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      // credentialId: "AWS-SAA-12345",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Google Cloud Professional",
      issuer: "Google Cloud",
      date: "2024",
      // credentialId: "GCP-PRO-67890",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Coursera",
      date: "2025",
      // credentialId: "STAN-ML-11111",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section id="certifications" className="section" ref={ref} style={{background: 'var(--secondary-bg)'}}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            <span className="title-accent">Professional</span>
            <span className="holographic-text">Certifications</span>
          </h2>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem'}}>
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="glass-container"
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                style={{padding: '2rem', textAlign: 'center'}}
              >
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px', marginBottom: '1rem'}}
                />
                <h3 className="holographic-text" style={{marginBottom: '1rem'}}>{cert.title}</h3>
                <p style={{color: 'var(--primary-color)', marginBottom: '0.5rem'}}>{cert.issuer}</p>
                <p style={{color: 'var(--text-secondary)', marginBottom: '0.5rem'}}>{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
