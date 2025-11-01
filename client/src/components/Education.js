import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Education.css';

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const educationData = [
    {
      id: 1,
      degree: "B.Tech Computer Science & Engineering",
      institution: "KIIT University",
      duration: "2022 - 2026",
      grade: "CGPA: 8.5/10",
      description: "Comprehensive study of computer science fundamentals, programming languages, data structures, algorithms, and software engineering principles.",
      achievements: [
        // "Dean's List for 3 consecutive semesters",
        "Led a team of 5 in final year project",
        "Published research paper on Machine Learning"
      ],
      skills: ["Data Structures", "Algorithms", "OOP", "Database Systems", "Operating Systems", "Software Engineering"]
    },
    {
      id: 2,
      degree: "Higher Secondary (12th)",
      institution: "YASIN College",
      duration: "2019 - 2021",
      grade: "Percentage: 89%",
      description: "Specialized in Mathematics, Physics, and Chemistry with strong foundation in analytical thinking and problem-solving.",
      achievements: [
        "School Topper in Mathematics",
        // "Won Science Olympiad at State Level",
        "Captain of the College Quiz Team"
      ],
      skills: ["Mathematics", "Physics", "Chemistry", "Analytical Thinking", "Problem Solving"]
    },
    {
      id: 3,
      degree: "Secondary School (10th)",
      institution: "ZILLA School",
      duration: "2017 - 2019",
      grade: "Percentage: 84%",
      description: "Strong foundation in core subjects with emphasis on mathematics and science, developing critical thinking skills.",
      achievements: [
        // "School Topper overall",
        "Good score in Mathematics",
        "Student Council President"
      ],
      skills: ["Core Mathematics", "Science", "English", "Leadership", "Communication"]
    },
    {
      id: 4,
      degree: "Online Certifications",
      institution: "Various Platforms",
      duration: "2020 - Present",
      grade: "Multiple Certificates",
      description: "Continuous learning through online platforms to stay updated with latest technologies and industry trends.",
      achievements: [
        "Completed 15+ online courses",
        "Earned certifications in AI/ML",
        "Active participant in coding bootcamps"
      ],
      skills: ["Web Development", "Machine Learning", "Cloud Computing", "Mobile Development", "DevOps"]
    }
  ];

  // Navigation functions
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === educationData.length - 1 ? 0 : prevIndex + 1
    );
  }, [educationData.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? educationData.length - 1 : prevIndex - 1
    );
  }, [educationData.length]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide]);

  // Auto-play functionality (optional)
  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000); // Auto-advance every 3 seconds

      return () => clearInterval(interval);
    }
  }, [inView, currentIndex, nextSlide]);

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

  const cardVariants = {
    hidden: { 
      x: 100, 
      opacity: 0,
      rotateY: 45
    },
    visible: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="education" className="education section" ref={ref}>
      <div className="education-background">
        <img 
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Education Technology Background"
          className="education-bg-image"
        />
        <div className="education-overlay"></div>
      </div>

      <div className="container">
        <motion.div 
          className="education-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="education-header" variants={cardVariants}>
            <h2 className="section-title">
              <span className="title-accent">Educational</span>
              <span className="holographic-text">Journey</span>
            </h2>
            <p className="section-subtitle">
              Building knowledge through continuous learning and academic excellence
            </p>
            <div className="title-underline"></div>
          </motion.div>

          <div className="education-carousel">
            <div className="carousel-container">
              <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {educationData.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    className="education-card glass-container"
                    variants={cardVariants}
                    whileHover={{ 
                      scale: 1.02,
                      rotateY: 5,
                      z: 50
                    }}
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <div className="card-shine"></div>
                    <div className="card-glow"></div>
                    
                    <div className="card-header">
                      <div className="degree-icon">🎓</div>
                      <div className="card-meta">
                        <h3 className="degree-title holographic-text">{edu.degree}</h3>
                        <div className="institution-info">
                          <h4 className="institution">{edu.institution}</h4>
                          <span className="duration">{edu.duration}</span>
                        </div>
                      </div>
                      <div className="grade-badge">
                        <span className="grade">{edu.grade}</span>
                      </div>
                    </div>

                    <div className="card-body">
                      <p className="description">{edu.description}</p>
                      
                      <div className="achievements">
                        <h5>Key Achievements:</h5>
                        <ul>
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx}>
                              <span className="achievement-bullet">▶</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="skills-learned">
                        <h5>Skills Acquired:</h5>
                        <div className="skill-tags">
                          {edu.skills.map((skill, idx) => (
                            <span key={idx} className="skill-tag">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="card-footer">
                      <div className="progress-indicator">
                        <div className="progress-bar">
                          <div className="progress-fill" style={{width: '100%'}}></div>
                        </div>
                        <span className="status completed">Completed</span>
                      </div>
                    </div>

                    {/* Glass reflection effect */}
                    <div className="glass-reflection"></div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="carousel-controls">
              <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous">
                <span>‹</span>
              </button>
              <div className="carousel-indicators">
                {educationData.map((_, index) => (
                  <span 
                    key={index} 
                    className={`indicator ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                  ></span>
                ))}
              </div>
              <button className="carousel-btn next" onClick={nextSlide} aria-label="Next">
                <span>›</span>
              </button>
            </div>
          </div>

          <motion.div className="education-stats" variants={cardVariants}>
            <div className="stat-item">
              <div className="stat-icon">📚</div>
              <div className="stat-number">4+</div>
              <div className="stat-label">Years of Study</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🏆</div>
              <div className="stat-number">85%</div>
              <div className="stat-label">Average Grade</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">📜</div>
              <div className="stat-number">10+</div>
              <div className="stat-label">Certifications</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🎯</div>
              <div className="stat-number">100%</div>
              <div className="stat-label">Dedication</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
