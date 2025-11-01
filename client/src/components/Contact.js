import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import axios from "axios";

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      await axios.post("/api/contact", formData);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/sourovnandi",
      icon: "💼",
    },
    { name: "GitHub", url: "https://github.com/Sourov1617", icon: "💻" },
    { name: "Twitter", url: "https://twitter.com/sourovnandi", icon: "🐦" },
    { name: "Instagram", url: "https://instagram.com/sa_sourov16", icon: "📸" },
    { name: "Email", url: "mailto:sourovnandi1617@gmail.com", icon: "📧" },
    { name: "Phone", url: "tel:+918942043336", icon: "📞" },
  ];

  return (
    <section
      id="contact"
      className="section"
      ref={ref}
      style={{ background: "var(--primary-bg)" }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            <span className="title-accent">Get In</span>
            <span className="holographic-text">Touch</span>
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              marginTop: "3rem",
              alignItems: "start",
            }}
          >
            {/* Contact Form */}
            <motion.div
              className="glass-container"
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ padding: "3rem" }}
            >
              <h3
                className="holographic-text"
                style={{ marginBottom: "2rem", fontSize: "1.5rem" }}
              >
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "1.5rem" }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "1rem",
                      background: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "10px",
                      color: "var(--text-primary)",
                      fontSize: "1rem",
                    }}
                  />
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "1rem",
                      background: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "10px",
                      color: "var(--text-primary)",
                      fontSize: "1rem",
                    }}
                  />
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "1rem",
                      background: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "10px",
                      color: "var(--text-primary)",
                      fontSize: "1rem",
                    }}
                  />
                </div>

                <div style={{ marginBottom: "2rem" }}>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    style={{
                      width: "100%",
                      padding: "1rem",
                      background: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "10px",
                      color: "var(--text-primary)",
                      fontSize: "1rem",
                      resize: "vertical",
                    }}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="neon-button primary"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ width: "100%", padding: "1rem" }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>

                {submitStatus === "success" && (
                  <p
                    style={{
                      color: "var(--primary-color)",
                      marginTop: "1rem",
                      textAlign: "center",
                    }}
                  >
                    Message sent successfully! 🎉
                  </p>
                )}
                {submitStatus === "error" && (
                  <p
                    style={{
                      color: "var(--secondary-color)",
                      marginTop: "1rem",
                      textAlign: "center",
                    }}
                  >
                    Failed to send message. Please try again. ❌
                  </p>
                )}
              </form>
            </motion.div>

            {/* Contact Info & Social Links */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div
                className="glass-container"
                style={{ padding: "3rem", marginBottom: "2rem" }}
              >
                <h3
                  className="holographic-text"
                  style={{ marginBottom: "2rem", fontSize: "1.5rem" }}
                >
                  Let's Connect!
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    lineHeight: "1.6",
                    marginBottom: "2rem",
                  }}
                >
                  I'm always excited to collaborate on innovative projects and
                  discuss new opportunities. Whether you have a project in mind
                  or just want to connect, feel free to reach out!
                </p>

                <div style={{ marginBottom: "2rem" }}>
                  <h4
                    style={{
                      color: "var(--primary-color)",
                      marginBottom: "1rem",
                    }}
                  >
                    Quick Contact
                  </h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    📧 sourovnandi1617@gmail.com
                  </p>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    📞 +91 8942043336
                  </p>
                  <p style={{ color: "var(--text-secondary)" }}>
                    📍 Bhubaneswar, India
                  </p>
                </div>
              </div>

              <div className="glass-container" style={{ padding: "2rem" }}>
                <h4
                  className="holographic-text"
                  style={{ marginBottom: "1.5rem", fontSize: "1.2rem" }}
                >
                  Follow Me
                </h4>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "1rem",
                  }}
                >
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-container"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.8rem",
                        padding: "1rem",
                        textDecoration: "none",
                        color: "var(--text-primary)",
                        background: "rgba(0, 255, 255, 0.1)",
                        border: "1px solid rgba(0, 255, 255, 0.3)",
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={
                        inView
                          ? { scale: 1, opacity: 1 }
                          : { scale: 0, opacity: 0 }
                      }
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      <span style={{ fontSize: "1.5rem" }}>{social.icon}</span>
                      <span style={{ fontWeight: "600" }}>{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
