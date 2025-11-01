import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Tech Innovations Inc.",
      duration: "June 2024 - August 2024",
      description: "Developed full-stack web applications using React and Node.js. Collaborated with senior developers on scalable microservices architecture.",
      technologies: ["React", "Node.js", "MongoDB", "Docker"],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Web Developer",
      company: "StartupXYZ",
      duration: "January 2024 - May 2024",
      description: "Built responsive web applications and implemented modern UI/UX designs. Optimized application performance and user experience.",
      technologies: ["JavaScript", "Vue.js", "PostgreSQL", "AWS"],
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Freelance Developer",
      company: "Various Clients",
      duration: "2023 - Present",
      description: "Delivered custom web solutions for small businesses and startups. Managed projects from conception to deployment.",
      technologies: ["React", "Python", "Django", "MySQL"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section id="experience" className="section" ref={ref} style={{background: 'var(--primary-bg)'}}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            <span className="title-accent">Professional</span>
            <span className="holographic-text">Experience</span>
          </h2>
          
          <div style={{maxWidth: '800px', margin: '3rem auto'}}>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="glass-container"
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : { x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '200px 1fr',
                  gap: '2rem',
                  marginBottom: '2rem',
                  alignItems: 'center'
                }}
              >
                <img 
                  src={exp.image} 
                  alt={exp.company}
                  style={{width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px'}}
                />
                <div>
                  <h3 className="holographic-text" style={{marginBottom: '0.5rem'}}>{exp.title}</h3>
                  <p style={{color: 'var(--primary-color)', marginBottom: '0.5rem', fontWeight: '600'}}>{exp.company}</p>
                  <p style={{color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem'}}>{exp.duration}</p>
                  <p style={{color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6'}}>{exp.description}</p>
                  <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
