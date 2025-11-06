import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Projects.css';

const Projects = () => {
  // const [ref, inView] = useInView({
  //   threshold: 0.1,
  //   triggerOnce: false
  // });

  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const projectsData = [
    {
      id: 1,
      title: "AI-Powered Portfolio Analyzer",
      category: "ai",
      description: "Machine learning application that analyzes investment portfolios and provides intelligent recommendations.",
      fullDescription: "A comprehensive AI-powered investment analysis tool that uses advanced machine learning algorithms to evaluate portfolio performance, risk assessment, and provide personalized investment recommendations. The application features real-time market data integration, predictive analytics, and intuitive data visualizations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "PyTorch", "React", "Node.js", "PostgreSQL", "LSTM_Model"],
      features: [
        "Real-time portfolio tracking",
        "Risk assessment algorithms",
        "Predictive market analysis",
        "Interactive data visualizations",
        "Automated rebalancing suggestions"
      ],
      liveUrl: "https://portfolio-analyzer-demo.com",
      githubUrl: "https://github.com/yourusername/portfolio-analyzer",
      status: "completed",
      duration: "4 months"
    },
    {
      id: 2,
      title: "Smart City Dashboard",
      category: "web",
      description: "Real-time dashboard for monitoring city infrastructure and services using IoT data.",
      fullDescription: "A comprehensive smart city management platform that aggregates data from various IoT sensors across the city to provide real-time insights into traffic patterns, air quality, energy consumption, and public services. Features include predictive maintenance alerts and citizen engagement tools.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "TypeScript", "Express.js", "PostgreSQL", "Redis", "WebSocket"],
      features: [
        "Real-time IoT data visualization",
        "Traffic flow optimization",
        "Environmental monitoring",
        "Public services tracking",
        "Citizen feedback system"
      ],
      liveUrl: "https://smart-city-dashboard.com",
      githubUrl: "https://github.com/Sourov1617/smart-city-dashboard",
      status: "completed",
      duration: "6 months"
    },
    {
      id: 6,
      title: "Ticket Booking Website",
      category: "web",
      description: "Online ticket booking platform for movies, events, and entertainment venues.",
      fullDescription: "A comprehensive ticket booking system that allows users to browse events, select seats, and make secure payments. Features real-time seat availability, interactive seat maps, QR code ticket generation, and email confirmations. The platform supports multiple payment gateways and provides admin dashboard for event management.",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Socket.io"],
      features: [
        "Interactive seat selection",
        "Real-time availability updates",
        "Multiple payment gateways",
        "QR code ticket generation",
        "Email notifications",
        "Admin event management"
      ],
      liveUrl: "https://ticket-booking-demo.com",
      githubUrl: "https://github.com/yourusername/ticket-booking",
      status: "completed",
      duration: "3 months"
    },
    {
      id: 7,
      title: "Personal AI Chatbot",
      category: "web",
      description: "MERN stack conversational AI chatbot integrated with free API for intelligent responses.",
      fullDescription: "A full-stack MERN application featuring an intelligent chatbot interface. Built using MongoDB, Express.js, React, and Node.js, integrated with a free AI API to provide smart conversational capabilities. Features include real-time messaging, chat history persistence, user authentication, and responsive design for seamless interaction across devices.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Free AI API", "WebSocket"],
      features: [
        "Real-time chat interface",
        "Free AI API integration",
        "Chat history storage",
        "User authentication",
        "Responsive design",
        "Message persistence"
      ],
      liveUrl: "https://ai-chatbot-demo.com",
      githubUrl: "https://github.com/Sourov1617/chat_bot",
      status: "completed",
      duration: "2 months"
    },
    // {
    //   id: 3,
    //   title: "Blockchain Voting System",
    //   category: "blockchain",
    //   description: "Secure and transparent voting platform built on blockchain technology.",
    //   fullDescription: "A decentralized voting application that ensures election integrity through blockchain technology. The system provides complete transparency, immutable vote records, and voter anonymity while maintaining the ability to verify results. Features include smart contract integration and real-time result tracking.",
    //   image: "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //   technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS", "MetaMask"],
    //   features: [
    //     "Immutable vote records",
    //     "Anonymous voting system",
    //     "Smart contract automation",
    //     "Real-time result tracking",
    //     "Audit trail functionality"
    //   ],
    //   liveUrl: "https://blockchain-voting.com",
    //   githubUrl: "https://github.com/yourusername/blockchain-voting",
    //   status: "completed",
    //   duration: "3 months"
    // },
    {
      id: 4,
      title: "Neural Network Visualizer",
      category: "ai",
      description: "Interactive tool for visualizing and understanding neural network architectures.",
      fullDescription: "An educational platform that allows users to build, visualize, and understand neural networks through interactive 3D representations. The tool supports various network architectures, provides real-time training visualization, and includes educational content about deep learning concepts.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Three.js", "Python", "Flask", "TensorFlow", "WebGL", "D3.js"],
      features: [
        "3D network visualization",
        "Interactive layer configuration",
        "Real-time training progress",
        "Educational tutorials",
        "Export functionality"
      ],
      liveUrl: "https://neural-viz.com",
      githubUrl: "https://github.com/yourusername/neural-visualizer",
      status: "in-progress",
      duration: "2 months"
    },
    {
      id: 5,
      title: "E-commerce Mobile App",
      category: "mobile",
      description: "Full-featured mobile e-commerce application with AR product preview.",
      fullDescription: "A modern mobile e-commerce application featuring augmented reality product previews, personalized recommendations, and seamless payment integration. The app includes advanced search capabilities, social shopping features, and real-time inventory management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React Native", "ARCore", "Node.js", "MongoDB", "Stripe", "Firebase"],
      features: [
        "AR product visualization",
        "Personalized recommendations",
        "Social shopping integration",
        "Real-time inventory tracking",
        "Multiple payment gateways"
      ],
      liveUrl: "https://play.google.com/store/apps/details?id=com.ecommerce",
      githubUrl: "https://github.com/Sourov1617/eCommerce_website",
      status: "completed",
      duration: "1.5 months"
    },
    // {
    //   id: 6,
    //   title: "Cloud Infrastructure Monitor",
    //   category: "devops",
    //   description: "Comprehensive monitoring solution for cloud infrastructure and microservices.",
    //   fullDescription: "A robust monitoring and alerting platform designed for cloud-native applications. The system provides comprehensive metrics collection, log aggregation, performance analytics, and automated incident response for distributed systems.",
    //   image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //   technologies: ["Kubernetes", "Prometheus", "Grafana", "ELK Stack", "Docker", "Terraform"],
    //   features: [
    //     "Multi-cloud monitoring",
    //     "Automated alerting system",
    //     "Performance analytics",
    //     "Log aggregation",
    //     "Infrastructure as code"
    //   ],
    //   liveUrl: "https://cloud-monitor.com",
    //   githubUrl: "https://github.com/yourusername/cloud-monitor",
    //   status: "completed",
    //   duration: "4 months"
    // }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: '🚀' },
    { id: 'ai', label: 'AI/ML', icon: '🤖' },
    { id: 'web', label: 'Web Development', icon: '🌐' },
    { id: 'mobile', label: 'Mobile Apps', icon: '📱' },
    // { id: 'blockchain', label: 'Blockchain', icon: '⛓️' },
    // { id: 'devops', label: 'DevOps', icon: '☁️' }
  ];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  return (
    <section id="projects" className="projects section">
      <div className="projects-background">
        <img 
          src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Technology Background"
          className="projects-bg-image"
        />
        <div className="projects-overlay"></div>
      </div>

      <div className="container">
        <motion.div 
          className="projects-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="projects-header" variants={itemVariants} animate={{ opacity: 1, y: 0 }}>
            <h2 className="section-title">
              <span className="title-accent">Featured</span>
              <span className="holographic-text">Projects</span>
            </h2>
            <p className="section-subtitle">
              Innovative solutions built with cutting-edge technologies
            </p>
            <div className="title-underline"></div>
          </motion.div>

          <motion.div className="project-filters" variants={itemVariants} animate={{ opacity: 1, y: 0 }}>
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                onClick={() => setFilter(category.id)}
              >
                <span className="filter-icon">{category.icon}</span>
                <span className="filter-label">{category.label}</span>
              </button>
            ))}
          </motion.div>

          <motion.div className="projects-grid" variants={containerVariants}>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="project-card glass-container"
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 1, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ y: -10, rotateX: 5 }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="card-image">
                    <img src={project.image} alt={project.title} />
                    <div className="image-overlay">
                      <div className="overlay-content">
                        <span className="view-details">View Details</span>
                        <div className="project-links">
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="project-link"
                          >
                            🔗
                          </a>
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="project-link"
                          >
                            📁
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className={`status-badge ${project.status}`}>
                      {project.status === 'completed' ? '✓' : '⏳'}
                    </div>
                  </div>

                  <div className="card-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    
                    <div className="tech-stack">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="tech-more">+{project.technologies.length - 3}</span>
                      )}
                    </div>

                    <div className="card-footer">
                      <span className="duration">{project.duration}</span>
                      <button className="explore-btn">
                        Explore →
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="project-modal glass-container"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>

              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>

              <div className="modal-content">
                <h3 className="modal-title holographic-text">{selectedProject.title}</h3>
                <p className="modal-description">{selectedProject.fullDescription}</p>

                <div className="modal-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-technologies">
                  <h4>Technologies Used:</h4>
                  <div className="tech-list">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-actions">
                  <a 
                    href={selectedProject.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="neon-button primary"
                  >
                    View Live Demo
                  </a>
                  <a 
                    href={selectedProject.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="neon-button secondary"
                  >
                    View Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
