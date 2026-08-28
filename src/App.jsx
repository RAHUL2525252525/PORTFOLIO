import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import ShopSphere from "./projects/ShopSphere";
import BankSphere from "./projects/BankSphere";
import LifeDecisionAssistant from "./projects/LifeDecisionAssistant";
import AIExamCompanion from "./projects/AIExamCompanion";
import DigitalAnalyticsDashboard from "./projects/DigitalAnalyticsDashboard";

function Portfolio() {
  const projects = [
    {
      title: "ShopSphere",
      subtitle: "Full Stack E-Commerce Web Application",
      description:
        "A full-stack e-commerce application built with Java, Spring Boot, React.js, Spring Data JPA and MySQL.",
      tech: "Java 17 • Spring Boot 3 • React.js • MySQL • REST APIs",
      link: "/projects/shopsphere",
    },
    {
      title: "BankSphere",
      subtitle: "Online Banking System",
      description:
        "A secure full-stack banking application with JWT authentication, role-based access control and a normalized relational database.",
      tech: "Java 17 • Spring Boot 3 • Spring Security • React.js • MySQL • Docker",
      link: "/projects/banksphere",
    },
    {
      title: "AI Exam Companion",
      subtitle: "AI-Powered Exam Preparation Platform",
      description:
        "An AI-assisted learning platform designed to help students prepare through mock tests, revision assistance and performance analytics.",
      tech: "React.js • Python • Flask • AI APIs • Firebase",
      link: "/projects/aiexamcompanion",
    },
    {
      title: "Digital Analytics Dashboard",
      subtitle: "Analytics & Data Visualization Dashboard",
      description:
        "An interactive dashboard designed to present digital analytics, metrics and performance information through a clean interface.",
      tech: "React.js • JavaScript • REST APIs • Data Visualization",
      link: "/projects/digitalanalyticsdashboard",
    },
    {
      title: "Life Decision Assistant",
      subtitle: "Decision Support Application",
      description:
        "A web application designed to help users evaluate options and make structured decisions using an interactive interface.",
      tech: "React.js • JavaScript • AI Integration • Responsive UI",
      link: "/projects/lifedecisionassistant",
    },
  ];

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo">
            RAHUL<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#certifications">Certifications</a>
            <a href="#contact">Contact</a>
          </div>

        </div>
      </nav>

      {/* ================= HERO ================= */}

      <section id="home" className="hero">

        <div className="hero-content">

          <p className="hero-small">HELLO, I'M</p>

          <h1>
            Rahul <span>S.</span>
          </h1>

          <h2>Software Engineer</h2>

          <p className="hero-description">
            Building full-stack web applications using Java, Spring Boot,
            React.js and modern software engineering practices.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View My Projects
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="social-links">

            <a
              href="https://github.com/RAHUL2525252525"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              LinkedIn
            </a>

            <a href="mailto:srinivasrahul838@gmail.com">
              Email
            </a>

          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section id="about" className="section">

        <div className="section-heading">
          <span>01</span>
          <h2>About Me</h2>
        </div>

        <div className="about-grid">

          <div className="about-text">

            <h3>Software Engineer</h3>

            <p>
              Software Engineer with hands-on experience building full-stack
              web applications using Java, Spring Boot, and React.js.
            </p>

            <p>
              Skilled in REST API design, JWT-based authentication and
              authorization, role-based access control (RBAC), relational
              database design (MySQL), and Agile software delivery.
            </p>

            <p>
              Experienced with Docker containerization, unit testing
              (JUnit, Mockito), and version control (Git). Comfortable
              collaborating with cross-functional, distributed teams in Agile
              delivery environments.
            </p>

            <p>
              Strong foundation in data structures, algorithms, and
              object-oriented design.
            </p>

          </div>

          <div className="about-card">

            <div className="info-item">
              <span>Name</span>
              <strong>Rahul S</strong>
            </div>

            <div className="info-item">
              <span>Location</span>
              <strong>Bangalore, Karnataka</strong>
            </div>

            <div className="info-item">
              <span>Email</span>
              <strong>srinivasrahul838@gmail.com</strong>
            </div>

            <div className="info-item">
              <span>Phone</span>
              <strong>7337634886</strong>
            </div>

            <div className="info-item">
              <span>Degree</span>
              <strong>B.E. Computer Science & Engineering</strong>
            </div>

          </div>

        </div>

      </section>

      {/* ================= SKILLS ================= */}

      <section id="skills" className="section dark-section">

        <div className="section-heading">
          <span>02</span>
          <h2>Technical Skills</h2>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Languages</h3>

            <div className="skill-list">
              <span>Java</span>
              <span>JavaScript (ES6+)</span>
              <span>SQL</span>
              <span>HTML5</span>
              <span>CSS3</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Frameworks & Libraries</h3>

            <div className="skill-list">
              <span>Spring Boot</span>
              <span>Spring MVC</span>
              <span>Spring Security</span>
              <span>Spring Data JPA</span>
              <span>Hibernate</span>
              <span>React.js</span>
              <span>Axios</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>APIs & Security</h3>

            <div className="skill-list">
              <span>REST API Design</span>
              <span>JWT Authentication</span>
              <span>Role-Based Access Control</span>
              <span>RBAC</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Databases</h3>

            <div className="skill-list">
              <span>MySQL</span>
              <span>SQL</span>
              <span>Database Design</span>
              <span>Normalization</span>
              <span>Relational Data Modeling</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Architecture</h3>

            <div className="skill-list">
              <span>Layered Architecture</span>
              <span>Controller / Service / Repository</span>
              <span>Microservices</span>
              <span>MVC</span>
              <span>Exception Handling</span>
              <span>DTO Pattern</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Cloud & DevOps</h3>

            <div className="skill-list">
              <span>Docker</span>
              <span>Docker Compose</span>
              <span>Maven</span>
              <span>Git</span>
              <span>GitHub</span>
              <span>GitHub Actions</span>
              <span>Vercel</span>
              <span>Render</span>
              <span>Aiven</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Testing & Practices</h3>

            <div className="skill-list">
              <span>JUnit 5</span>
              <span>Mockito</span>
              <span>Postman</span>
              <span>Agile / Scrum</span>
              <span>Code Reviews</span>
              <span>Unit Testing</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Core CS</h3>

            <div className="skill-list">
              <span>Data Structures & Algorithms</span>
              <span>Object-Oriented Programming</span>
              <span>DBMS</span>
              <span>Software Engineering Principles</span>
            </div>
          </div>

        </div>

      </section>

      {/* ================= EXPERIENCE ================= */}

      <section id="experience" className="section">

        <div className="section-heading">
          <span>03</span>
          <h2>Professional Experience</h2>
        </div>

        <div className="timeline">

          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <div className="experience-header">
                <div>
                  <h3>Web Development Intern</h3>
                  <h4>MR Tech Lab</h4>
                </div>

                <span>01/2026 – 05/2026</span>
              </div>

              <p className="location">
                Bengaluru, Karnataka
              </p>

              <ul>
                <li>
                  Translated design specs into production HTML/CSS/JS,
                  building responsive UI components that rendered consistently
                  across Chrome, Firefox, and Safari.
                </li>

                <li>
                  Integrated Firebase Authentication and session management
                  to enable secure user sign-in, resolving authentication
                  issues identified during QA before launch.
                </li>

                <li>
                  Independently built and shipped 3 web applications using
                  HTML/CSS/JS, Python/Flask, and Firebase, applying full-stack
                  fundamentals later carried into Java-based project work.
                </li>

                <li>
                  Collaborated with cross-functional teammates in an Agile,
                  Git-based workflow, delivering assigned UI features on
                  schedule across multiple sprints.
                </li>
              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section id="projects" className="section projects-section">

        <div className="section-heading">
          <span>04</span>
          <h2>Projects</h2>
        </div>

        <p className="section-intro">
          A collection of full-stack applications and software projects
          demonstrating my experience with modern web development,
          backend engineering, security and data-driven interfaces.
        </p>

        <div className="projects-grid">

          {projects.map((project, index) => (

            <Link
              to={project.link}
              className="project-card"
              key={project.title}
            >

              <div className="project-number">
                0{index + 1}
              </div>

              <div className="project-card-content">

                <h3>{project.title}</h3>

                <h4>{project.subtitle}</h4>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech}
                </div>

                <div className="view-project">
                  View Project →
                </div>

              </div>

            </Link>

          ))}

        </div>

      </section>

      {/* ================= EDUCATION ================= */}

      <section id="education" className="section dark-section">

        <div className="section-heading">
          <span>05</span>
          <h2>Education</h2>
        </div>

        <div className="education-card">

          <div>
            <span className="education-year">Graduated 2026</span>

            <h3>
              B.E., Computer Science and Engineering
            </h3>

            <h4>
              Dr. ACS College of Engineering
            </h4>

            <p>
              Bengaluru, Karnataka
            </p>
          </div>

          <div className="cgpa">
            <span>CGPA</span>
            <strong>8.00</strong>
            <small>/ 10</small>
          </div>

        </div>

      </section>

      {/* ================= CERTIFICATIONS ================= */}

      <section id="certifications" className="section">

        <div className="section-heading">
          <span>06</span>
          <h2>Certifications</h2>
        </div>

        <div className="certifications-grid">

          <div className="certificate-card">

            <div className="certificate-icon">
              ☕
            </div>

            <div>
              <h3>Java Programming Fundamentals</h3>
              <p>Infosys Springboard</p>
            </div>

          </div>

          <div className="certificate-card">

            <div className="certificate-icon">
              ☕
            </div>

            <div>
              <h3>Introduction to Java</h3>
              <p>Infosys Springboard</p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section id="contact" className="contact-section">

        <div className="contact-inner">

          <span className="contact-label">
            07 — GET IN TOUCH
          </span>

          <h2>
            Let's build something
            <span> great.</span>
          </h2>

          <p>
            I'm open to software engineering and full-stack development
            opportunities.
          </p>

          <a
            href="mailto:srinivasrahul838@gmail.com"
            className="contact-email"
          >
            srinivasrahul838@gmail.com
          </a>

          <div className="contact-links">

            <a href="tel:7337634886">
              7337634886
            </a>

            <a
              href="https://github.com/RAHUL2525252525"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              LinkedIn
            </a>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer>

        <p>
          © 2026 Rahul S. All rights reserved.
        </p>

        <p>
          Software Engineer • Full Stack Developer
        </p>

      </footer>

    </div>
  );
}


/* ================= APP ROUTER ================= */

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Portfolio />} />

        <Route
          path="/projects/shopsphere"
          element={<ShopSphere />}
        />

        <Route
          path="/projects/banksphere"
          element={<BankSphere />}
        />

        <Route
          path="/projects/lifedecisionassistant"
          element={<LifeDecisionAssistant />}
        />

        <Route
          path="/projects/aiexamcompanion"
          element={<AIExamCompanion />}
        />

        <Route
          path="/projects/digitalanalyticsdashboard"
          element={<DigitalAnalyticsDashboard />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
