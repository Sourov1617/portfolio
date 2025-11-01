import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "Java", level: 80 },
        { name: "TypeScript", level: 85 },
        { name: "C++", level: 75 },
      ],
    },
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React", level: 90 },
        { name: "Vue.js", level: 80 },
        { name: "HTML/CSS", level: 95 },
        { name: "Sass/SCSS", level: 85 },
        { name: "Tailwind CSS", level: 80 },
      ],
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Django", level: 75 },
        { name: "Flask", level: 70 },
        { name: "RESTful APIs", level: 90 },
      ],
    },
    {
      title: "Databases & Cloud",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Docker", level: 75 },
      ],
    },
  ];

  const communicationSkills = [
    "Effective Communication",
    "Team Leadership",
    "Project Management",
    "Problem Solving",
    "Critical Thinking",
    "Presentation Skills",
    "Client Relations",
    "Agile Methodology",
  ];

  return (
    <section
      id="skills"
      className="section"
      ref={ref}
      style={{ background: "var(--secondary-bg)" }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            <span className="title-accent">Technical &</span>
            <span className="holographic-text">Soft Skills</span>
          </h2>

          {/* Technical Skills */}
          <div style={{ marginBottom: "4rem" }}>
            <h3
              style={{
                color: "var(--primary-color)",
                fontSize: "1.8rem",
                marginBottom: "2rem",
                textAlign: "center",
              }}
            >
              Technical Skills
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "2rem",
              }}
            >
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  className="glass-container"
                  initial={{ y: 50, opacity: 0 }}
                  animate={
                    inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
                  }
                  transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                  style={{ padding: "2rem" }}
                >
                  <h4
                    className="holographic-text"
                    style={{ marginBottom: "1.5rem", fontSize: "1.2rem" }}
                  >
                    {category.title}
                  </h4>
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} style={{ marginBottom: "1rem" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "0.5rem",
                        }}
                      >
                        <span style={{ color: "var(--text-primary)" }}>
                          {skill.name}
                        </span>
                        <span style={{ color: "var(--primary-color)" }}>
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        style={{
                          height: "6px",
                          background: "rgba(255, 255, 255, 0.1)",
                          borderRadius: "3px",
                          overflow: "hidden",
                        }}
                      >
                        <motion.div
                          style={{
                            height: "100%",
                            background:
                              "linear-gradient(90deg, var(--primary-color), var(--secondary-color))",
                            borderRadius: "3px",
                          }}
                          initial={{ width: 0 }}
                          animate={
                            inView ? { width: `${skill.level}%` } : { width: 0 }
                          }
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Communication Skills */}
          <div>
            <h3
              style={{
                color: "var(--primary-color)",
                fontSize: "1.8rem",
                marginBottom: "2rem",
                textAlign: "center",
              }}
            >
              Communication & Soft Skills
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "1rem",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              {communicationSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="glass-container"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={
                    inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  style={{
                    padding: "1.5rem",
                    textAlign: "center",
                    background: "rgba(0, 255, 255, 0.1)",
                    border: "1px solid rgba(0, 255, 255, 0.3)",
                  }}
                >
                  <span
                    style={{ color: "var(--text-primary)", fontWeight: "600" }}
                  >
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
