import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import ShopSphere from "./projects/ShopSphere";
import BankSphere from "./projects/BankSphere";
import LifeDecisionAssistant from "./projects/LifeDecisionAssistant";
import AIExamCompanion from "./projects/AIExamCompanion";
import DigitalAnalyticsDashboard from "./projects/DigitalAnalyticsDashboard";

import "./index.css";

function Portfolio() {
  const navigate = useNavigate();

  const projects = [
    {
      title: "ShopSphere",
      subtitle: "Full Stack E-Commerce Web Application",
      tech: "Java 17 • Spring Boot 3 • React.js • MySQL • REST APIs",
      date: "04/2026 – 06/2026",
      description:
        "A full-stack e-commerce system with layered architecture, role-based access control, cart, checkout, wishlist, orders, and administration modules.",
      route: "/projects/shopsphere",
    },
    {
      title: "Online Banking System",
      subtitle: "Full Stack Banking Application",
      tech: "Java 17 • Spring Boot 3 • Spring Security • JWT • React.js • MySQL • Docker",
      date: "06/2026 – 08/2026",
      description:
        "A secure online banking application implementing JWT authentication, permission-based access control, normalized relational database design, and Dockerized deployment.",
      route: "/projects/banksphere",
    },
    {
      title: "Life Decision Assistant",
      subtitle: "AI-Powered Decision Support Application",
      tech: "React.js • Python • Flask • Firebase • AI",
      date: "",
      description:
        "An interactive assistant designed to help users organize options, evaluate decisions, compare alternatives, and receive structured guidance.",
      route: "/projects/life-decision-assistant",
    },
    {
      title: "AI Exam Companion",
      subtitle: "AI-Powered Learning & Exam Preparation Platform",
      tech: "React.js • Python • Flask • AI • Firebase",
      date: "",
      description:
        "An AI-powered exam preparation platform featuring mentor chat, mock-test generation, revision assistance, and performance analytics.",
      route: "/projects/ai-exam-companion",
    },
    {
      title: "Digital Analytics Dashboard",
      subtitle: "Interactive Analytics Dashboard",
      tech: "React.js • JavaScript • REST APIs • Data Visualization",
      date: "",
      description:
        "A responsive analytics dashboard for presenting business and application metrics through interactive cards, charts, tables, and visual insights.",
      route: "/projects/digital-analytics-dashboard",
    },
  ];

  return (
    <div className="portfolio">

      {/* ================= HERO ================= */}

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="hero-label">SOFTWARE ENGINEER</p>

          <h1>
            Rahul <span>S.</span>
          </h1>

          <p className="hero-location">
            Bangalore, Karnataka
          </p>

          <p className="hero-description">
            Software Engineer with hands-on experience building full-stack
            web applications using Java, Spring Boot, and React.js.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* ================= PROFILE ================= */}

      <section className="section" id="profile">
        <div className="section-heading">
          <span>01</span>
          <h2>Professional Summary</h2>
        </div>

        <div className="summary-card">
          <p>
            Software Engineer with hands-on experience building full-stack web
            applications using Java, Spring Boot, and React.js. Skilled in REST
            API design, JWT-based authentication and authorization, role-based
            access control (RBAC), relational database design (MySQL), and
            Agile software delivery.
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
      </section>

      {/* ================= SKILLS ================= */}

      <section className="section" id="skills">
        <div className="section-heading">
          <span>02</span>
          <h2>Technical Skills</h2>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Languages</h3>
            <div className="skill-tags">
              <span>Java</span>
              <span>JavaScript (ES6+)</span>
              <span>SQL</span>
              <span>HTML5</span>
              <span>CSS3</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Frameworks & Libraries</h3>
            <div className="skill-tags">
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
            <div className="skill-tags">
              <span>REST API Design</span>
              <span>JWT Authentication</span>
              <span>Role-Based Access Control</span>
              <span>RBAC</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Databases</h3>
            <div className="skill-tags">
              <span>MySQL</span>
              <span>SQL</span>
              <span>Database Design</span>
              <span>Normalization</span>
              <span>Relational Data Modeling</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Architecture</h3>
            <div className="skill-tags">
              <span>Layered Architecture</span>
              <span>Controller</span>
              <span>Service</span>
              <span>Repository</span>
              <span>Microservices</span>
              <span>MVC</span>
              <span>Exception Handling</span>
              <span>DTO Pattern</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Cloud & DevOps</h3>
            <div className="skill-tags">
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
            <div className="skill-tags">
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
            <div className="skill-tags">
              <span>Data Structures & Algorithms</span>
              <span>OOP</span>
              <span>DBMS</span>
              <span>Software Engineering Principles</span>
            </div>
          </div>

        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}

      <section className="section" id="experience">
        <div className="section-heading">
          <span>03</span>
          <h2>Professional Experience</h2>
        </div>

        <div className="experience-card">

          <div className="experience-top">
            <div>
              <h3>Web Development Intern — MR Tech Lab</h3>
              <p>Bengaluru, Karnataka</p>
            </div>

            <span>01/2026 – 05/2026</span>
          </div>

          <ul>
            <li>
              Translated design specs into production HTML/CSS/JS, building
              responsive UI components that rendered consistently across
              Chrome, Firefox, and Safari.
            </li>

            <li>
              Integrated Firebase Authentication and session management to
              enable secure user sign-in, resolving authentication issues
              identified during QA before launch.
            </li>

            <li>
              Independently built and shipped 3 web applications using
              HTML/CSS/JS, Python/Flask, and Firebase, applying full-stack
              fundamentals later carried into Java-based project work.
            </li>

            <li>
              Collaborated with cross-functional teammates in an Agile,
              Git-based workflow, delivering assigned UI features on schedule
              across multiple sprints.
            </li>
          </ul>

        </div>
      </section>

      {/* ================= PROJECTS ================= */}

      <section className="section projects-section" id="projects">

        <div className="section-heading">
          <span>04</span>
          <h2>Projects</h2>
        </div>

        <p className="projects-intro">
          Click any project to explore its interface, technologies,
          features, architecture, and screenshots.
        </p>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <article
              className="project-card"
              key={project.title}
              onClick={() => navigate(project.route)}
            >

              <div className="project-number">
                0{index + 1}
              </div>

              <div className="project-card-content">

                <p className="project-category">
                  FULL STACK PROJECT
                </p>

                <h3>{project.title}</h3>

                <h4>{project.subtitle}</h4>

                <p className="project-description">
                  {project.description}
                </p>

                <p className="project-tech">
                  {project.tech}
                </p>

                {project.date && (
                  <p className="project-date">
                    {project.date}
                  </p>
                )}

                <div className="project-open">
                  Explore Project →
                </div>

              </div>

            </article>
          ))}

        </div>
      </section>

      {/* ================= EDUCATION ================= */}

      <section className="section" id="education">
        <div className="section-heading">
          <span>05</span>
          <h2>Education</h2>
        </div>

        <div className="education-card">

          <div>
            <p className="education-label">B.E.</p>

            <h3>
              Computer Science and Engineering
            </h3>

            <h4>
              Dr. ACS College of Engineering
            </h4>

            <p>Bengaluru, Karnataka</p>
          </div>

          <div className="education-right">
            <strong>8.00 / 10</strong>
            <span>CGPA</span>
            <span>Graduated 2026</span>
          </div>

        </div>
      </section>

      {/* ================= CERTIFICATIONS ================= */}

      <section className="section" id="certifications">

        <div className="section-heading">
          <span>06</span>
          <h2>Certifications</h2>
        </div>

        <div className="certifications-list">

          <div className="certificate-card">
            <span>01</span>
            <div>
              <h3>Java Programming Fundamentals</h3>
              <p>Infosys Springboard</p>
            </div>
          </div>

          <div className="certificate-card">
            <span>02</span>
            <div>
              <h3>Introduction to Java</h3>
              <p>Infosys Springboard</p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section className="contact-section" id="contact">

        <p className="hero-label">GET IN TOUCH</p>

        <h2>
          Let's build something
          <span> great.</span>
        </h2>

        <div className="contact-details">

          <a href="tel:7337634886">
            7337634886
          </a>

          <a href="mailto:Srinivasrahul838@gmail.com">
            Srinivasrahul838@gmail.com
          </a>

        </div>

        <div className="contact-links">

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/RAHUL2525252525"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

        </div>

      </section>

      <footer>
        <p>© 2026 Rahul S. All rights reserved.</p>
      </footer>

    </div>
  );
}


/* ================= ROUTES ================= */

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

    </BrowserRouter>
  );
}

export default App;
