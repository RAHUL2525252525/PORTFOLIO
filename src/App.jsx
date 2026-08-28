import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import ShopSphere from "./pages/ShopSphere";
import BankSphere from "./pages/BankSphere";
import LifeDecisionAssistant from "./pages/LifeDecisionAssistant";
import AIExamCompanion from "./pages/AIExamCompanion";
import DigitalAnalyticsDashboard from "./pages/DigitalAnalyticsDashboard";

const projects = [
  {
    title: "ShopSphere",
    description:
      "A full-stack e-commerce platform built with React.js, Spring Boot and MySQL.",
    tech: "React.js • Spring Boot • MySQL",
    path: "/projects/shopsphere",
  },
  {
    title: "BankSphere",
    description:
      "A secure banking management application with authentication and transaction features.",
    tech: "Java • Spring Boot • MySQL • React.js",
    path: "/projects/banksphere",
  },
  {
    title: "AI Exam Companion",
    description:
      "An AI-powered learning and exam preparation platform for students.",
    tech: "React.js • Python • AI • APIs",
    path: "/projects/ai-exam-companion",
  },
  {
    title: "Digital Analytics Dashboard",
    description:
      "A responsive analytics dashboard for monitoring business data and performance.",
    tech: "React.js • JavaScript • REST APIs",
    path: "/projects/digital-analytics-dashboard",
  },
  {
    title: "Life Decision Assistant",
    description:
      "An intelligent assistant designed to help users evaluate important life decisions.",
    tech: "React.js • AI • JavaScript",
    path: "/projects/life-decision-assistant",
  },
];

function Home() {
  return (
    <div className="portfolio">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">Rahul S</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="hero-small">HELLO, I'M</p>

          <h1>
            Rahul <span>S</span>
          </h1>

          <h2>Full Stack Developer</h2>

          <p className="hero-description">
            I build modern, responsive and secure web applications using
            Java, Spring Boot, React.js and modern web technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Projects
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="section-heading">
          <p>GET TO KNOW ME</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          <p>
            Software Engineer with hands-on experience building full-stack web
            applications using Java, Spring Boot and React.js. I enjoy
            designing secure REST APIs, responsive interfaces and scalable
            application architectures.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section" id="skills">
        <div className="section-heading">
          <p>MY TECHNOLOGIES</p>
          <h2>Skills</h2>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Frontend</h3>
            <p>React.js</p>
            <p>JavaScript ES6+</p>
            <p>HTML5</p>
            <p>CSS3</p>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>
            <p>Java</p>
            <p>Spring Boot</p>
            <p>Spring MVC</p>
            <p>REST APIs</p>
          </div>

          <div className="skill-card">
            <h3>Database</h3>
            <p>MySQL</p>
            <p>SQL</p>
            <p>Hibernate</p>
            <p>Spring Data JPA</p>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>
            <p>Git</p>
            <p>Docker</p>
            <p>Maven</p>
            <p>Vercel</p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section projects-section" id="projects">
        <div className="section-heading">
          <p>MY WORK</p>
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <Link
              to={project.path}
              className="project-card"
              key={project.title}
            >
              <div className="project-card-content">
                <span className="project-number">
                  PROJECT
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech}
                </div>

                <div className="view-project">
                  View Project
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact-section" id="contact">
        <div className="section-heading">
          <p>GET IN TOUCH</p>
          <h2>Contact Me</h2>
        </div>

        <div className="contact-content">
          <p>
            Interested in working together? Feel free to reach out.
          </p>

          <a
            href="mailto:srinivasrahul838@gmail.com"
            className="primary-btn"
          >
            Send Email
          </a>
        </div>
      </section>

      <footer>
        <p>© 2026 Rahul S. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/projects/shopsphere"
        element={<ShopSphere />}
      />

      <Route
        path="/projects/banksphere"
        element={<BankSphere />}
      />

      <Route
        path="/projects/life-decision-assistant"
        element={<LifeDecisionAssistant />}
      />

      <Route
        path="/projects/ai-exam-companion"
        element={<AIExamCompanion />}
      />

      <Route
        path="/projects/digital-analytics-dashboard"
        element={<DigitalAnalyticsDashboard />}
      />
    </Routes>
  );
}

export default App;
