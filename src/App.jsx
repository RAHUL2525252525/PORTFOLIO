import React, { useEffect, useState } from "react";

import ShopSphere from "./projects/ShopSphere";
import BankSphere from "./projects/BankSphere";
import LifeDecisionAssistant from "./projects/LifeDecisionAssistant";
import AIExamCompanion from "./projects/AIExamCompanion";
import DigitalAnalyticsDashboard from "./projects/DigitalAnalyticsDashboard";

import "./index.css";

/* =========================================================
   PROJECT SAMPLE IMAGES
   Keep these paths exactly according to your project assets
========================================================= */

import shopSphereImage from "./assets/projects/shopsphere 1.png.png";
import bankSphereImage from "./assets/projects/banksphere 14.png.png";
import lifeDecisionImage from "./assets/projects/lifedecisionassistant 24.png.png";
import aiExamImage from "./assets/projects/aiexamcompanion 32.png.png";
import digitalDashboardImage from "./assets/projects/digitalanalyticsdashboard 38.png.png";

/* =========================================================
   PROJECT DATA
========================================================= */

const PROJECTS = [
  {
    id: "shopsphere",
    number: "01",
    title: "ShopSphere",
    subtitle: "Full Stack E-Commerce Platform",
    description:
      "A complete full-stack e-commerce platform with product browsing, search, cart, wishlist, checkout and order management.",
    image: shopSphereImage,
    skills: [
      "React.js",
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "REST APIs",
      "MySQL",
    ],
    liveLinks: [
      {
        label: "Frontend",
        url: "https://shopsphere-8m8f.vercel.app/",
      },
      {
        label: "Backend",
        url: "https://shopsphere-backend-5umn.onrender.com",
      },
    ],
    backendFirst: true,
  },

  {
    id: "banksphere",
    number: "02",
    title: "BankSphere",
    subtitle: "Online Banking System",
    description:
      "A secure banking application with authentication, account management, transactions, JWT security and role-based access control.",
    image: bankSphereImage,
    skills: [
      "React.js",
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
      "Docker",
    ],
    liveLinks: [
      {
        label: "Frontend",
        url: "https://banksphere-frontend.vercel.app",
      },
      {
        label: "Backend",
        url: "https://banksphere-backend-b96m.onrender.com",
      },
    ],
    backendFirst: true,
  },

  {
    id: "life-decision-assistant",
    number: "03",
    title: "Life Decision Assistant",
    subtitle: "AI-Powered Decision Support",
    description:
      "An AI-powered web application designed to help users analyze difficult life decisions using multiple AI models.",
    image: lifeDecisionImage,
    skills: [
      "Python",
      "Flask",
      "React.js",
      "Firebase",
      "Groq API",
      "OpenRouter API",
      "Gemini API",
    ],
    liveLinks: [
      {
        label: "Live Demo",
        url: "https://life-decision-assistant-63pu.onrender.com",
      },
    ],
    backendFirst: false,
  },

  {
    id: "ai-exam-companion",
    number: "04",
    title: "AI Exam Companion",
    subtitle: "AI-Powered Exam Preparation",
    description:
      "An intelligent exam preparation platform that generates practice questions and helps students prepare using AI.",
    image: aiExamImage,
    skills: [
      "Python",
      "Flask",
      "React.js",
      "Firebase",
      "Groq API",
    ],
    liveLinks: [
      {
        label: "Live Demo",
        url: "https://ai-exam-companion-ghzc.onrender.com",
      },
    ],
    backendFirst: false,
  },

  {
    id: "digital-analytics-dashboard",
    number: "05",
    title: "Digital Analytics Dashboard",
    subtitle: "Analytics & Data Visualization",
    description:
      "A modern analytics dashboard designed to present business data, metrics and insights through a clean visual interface.",
    image: digitalDashboardImage,
    skills: [
      "Python",
      "Flask",
      "React.js",
      "Firebase",
      "Google OAuth",
      "REST APIs",
    ],
    liveLinks: [
      {
        label: "Live Demo",
        url: "https://digital-dashboard1.onrender.com",
      },
    ],
    backendFirst: false,
  },
];

/* =========================================================
   NAVIGATION
========================================================= */

const NAV_ITEMS = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

/* =========================================================
   PROJECT ROUTER
========================================================= */

function ProjectPage({ projectId, onBack }) {
  const projectMap = {
    shopsphere: ShopSphere,
    banksphere: BankSphere,
    "life-decision-assistant": LifeDecisionAssistant,
    "ai-exam-companion": AIExamCompanion,
    "digital-analytics-dashboard": DigitalAnalyticsDashboard,
  };

  const ProjectComponent = projectMap[projectId];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [projectId]);

  if (!ProjectComponent) {
    return (
      <div className="project-not-found">
        <h1>Project Not Found</h1>
        <button onClick={onBack}>← Back to Portfolio</button>
      </div>
    );
  }

  return (
    <div className="project-page-wrapper">
      <button className="back-portfolio-btn" onClick={onBack}>
        ← Back to Portfolio
      </button>

      <ProjectComponent />
    </div>
  );
}

/* =========================================================
   MAIN APP
========================================================= */

export default function App() {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;

      if (hash.startsWith("#project/")) {
        const projectId = hash.replace("#project/", "");
        setActiveProject(projectId);
      } else {
        setActiveProject(null);
      }
    };

    handleHash();

    window.addEventListener("hashchange", handleHash);

    return () => {
      window.removeEventListener("hashchange", handleHash);
    };
  }, []);

  const openProject = (projectId) => {
    window.location.hash = `project/${projectId}`;
  };

  const goBackToPortfolio = () => {
    window.location.hash = "";
    setActiveProject(null);

    setTimeout(() => {
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const scrollToSection = (id) => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
      setActiveProject(null);
    }

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  if (activeProject) {
    return (
      <ProjectPage
        projectId={activeProject}
        onBack={goBackToPortfolio}
      />
    );
  }

  return (
    <div className="portfolio">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="navbar">
        <div
          className="navbar-logo"
          onClick={() => scrollToSection("about")}
        >
          <span>R</span>
          <strong>Rahul S</strong>
        </div>

        <nav>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </header>

      {/* =====================================================
          ABOUT — CREAM
      ===================================================== */}

      <section id="about" className="section section-cream about-section">
        <div className="container about-grid">

          <div className="about-content">
            <p className="eyebrow">HELLO, I'M</p>

            <h1>
              Rahul <span>S</span>
            </h1>

            <h2>Java Full Stack Developer</h2>

            <p className="about-description">
              I build secure, scalable and user-focused web applications
              using Java, Spring Boot, React.js, REST APIs and modern
              development practices.
            </p>

            <div className="about-buttons">
              <button
                className="primary-btn"
                onClick={() => scrollToSection("projects")}
              >
                View My Work →
              </button>

              <button
                className="secondary-btn"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </button>
            </div>

            <div className="about-meta">
              <div>
                <span>Location</span>
                <strong>Bengaluru, India</strong>
              </div>

              <div>
                <span>Education</span>
                <strong>B.E. Computer Science</strong>
              </div>

              <div>
                <span>CGPA</span>
                <strong>8.00</strong>
              </div>
            </div>
          </div>

          <div className="profile-area">
            <div className="profile-frame">
              <div className="profile-image-placeholder">
                <span>RS</span>
              </div>
            </div>

            <div className="profile-badge">
              <strong>Java</strong>
              <span>Full Stack</span>
            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          SKILLS — BLUE
      ===================================================== */}

      <section id="skills" className="section section-blue">
        <div className="container">

          <div className="section-heading light">
            <p className="eyebrow">TECHNICAL EXPERTISE</p>
            <h2>Skills</h2>
            <p>
              Technologies and tools I use to build complete applications.
            </p>
          </div>

          <div className="skills-grid">

            <div className="skill-card">
              <div className="skill-number">01</div>
              <h3>Languages</h3>
              <div className="skill-tags">
                <span>Java</span>
                <span>JavaScript ES6+</span>
                <span>SQL</span>
                <span>HTML5</span>
                <span>CSS3</span>
                <span>Python</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-number">02</div>
              <h3>Frameworks</h3>
              <div className="skill-tags">
                <span>Spring Boot</span>
                <span>Spring MVC</span>
                <span>Spring Security</span>
                <span>Spring Data JPA</span>
                <span>Hibernate</span>
                <span>React.js</span>
                <span>Flask</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-number">03</div>
              <h3>APIs & Security</h3>
              <div className="skill-tags">
                <span>REST APIs</span>
                <span>JWT</span>
                <span>RBAC</span>
                <span>Firebase Auth</span>
                <span>Google OAuth</span>
                <span>Axios</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-number">04</div>
              <h3>Database & DevOps</h3>
              <div className="skill-tags">
                <span>MySQL</span>
                <span>Docker</span>
                <span>Docker Compose</span>
                <span>Maven</span>
                <span>Git</span>
                <span>Vercel</span>
                <span>Render</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-number">05</div>
              <h3>Testing & Architecture</h3>
              <div className="skill-tags">
                <span>JUnit 5</span>
                <span>Mockito</span>
                <span>Layered Architecture</span>
                <span>Microservices</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE — CREAM
      ===================================================== */}

      <section id="experience" className="section section-cream">
        <div className="container">

          <div className="section-heading">
            <p className="eyebrow">MY JOURNEY</p>
            <h2>Experience</h2>
          </div>

          <div className="experience-card">

            <div className="experience-top">
              <div>
                <p className="experience-date">
                  JAN 2026 — MAY 2026
                </p>

                <h3>Web Development Intern</h3>

                <h4>MR Tech Lab · Bengaluru</h4>
              </div>

              <span className="experience-label">
                INTERNSHIP
              </span>
            </div>

            <div className="experience-content">

              <div className="experience-item">
                <span>01</span>
                <p>
                  Owned end-to-end development of 2+ full-stack modules
                  using React.js, Java, Spring Boot and MySQL.
                </p>
              </div>

              <div className="experience-item">
                <span>02</span>
                <p>
                  Designed and developed REST APIs with secure backend
                  architecture and database integration.
                </p>
              </div>

              <div className="experience-item">
                <span>03</span>
                <p>
                  Independently designed and shipped Python/Flask
                  web applications with Firebase authentication.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECTS — BLUE
      ===================================================== */}

      <section id="projects" className="section section-blue projects-section">
        <div className="container">

          <div className="section-heading light">
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Projects</h2>
            <p>
              Click any project to open its dedicated page and explore
              the complete screenshots.
            </p>
          </div>

          <div className="projects-grid">

            {PROJECTS.map((project) => (
              <article
                className="project-card"
                key={project.id}
              >

                {/* SAMPLE IMAGE */}
                <button
                  className="project-image-button"
                  onClick={() => openProject(project.id)}
                  aria-label={`Open ${project.title}`}
                >
                  <div className="project-image-wrapper">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="project-image"
                    />

                    <div className="project-image-overlay">
                      <span>View Project →</span>
                    </div>
                  </div>
                </button>

                {/* PROJECT INFO */}
                <div className="project-info">

                  <div className="project-header">
                    <span className="project-number">
                      {project.number}
                    </span>

                    <button
                      className="project-open-btn"
                      onClick={() => openProject(project.id)}
                    >
                      Open ↗
                    </button>
                  </div>

                  <h3>{project.title}</h3>

                  <p className="project-subtitle">
                    {project.subtitle}
                  </p>

                  <p className="project-description">
                    {project.description}
                  </p>

                  {/* SKILLS USED */}
                  <div className="project-skills">
                    <p>SKILLS USED</p>

                    <div className="project-tags">
                      {project.skills.map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>
                  </div>

                  {/* BACKEND FIRST NOTE */}
                  {project.backendFirst && (
                    <div className="backend-note">
                      <strong>⚡ Before opening the frontend:</strong>
                      <span>
                        Start the backend first. The Render backend may
                        go into sleep mode when inactive.
                      </span>
                    </div>
                  )}

                  {/* LIVE LINKS */}
                  <div className="live-links">
                    <p>LIVE LINKS</p>

                    <div className="live-link-list">
                      {project.liveLinks.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="live-link"
                        >
                          {link.label}
                          <span>↗</span>
                        </a>
                      ))}
                    </div>
                  </div>

                </div>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          EDUCATION — CREAM
      ===================================================== */}

      <section id="education" className="section section-cream">
        <div className="container">

          <div className="section-heading">
            <p className="eyebrow">ACADEMIC BACKGROUND</p>
            <h2>Education</h2>
          </div>

          <div className="education-card">

            <div className="education-number">
              01
            </div>

            <div className="education-content">
              <p className="education-date">
                B.E. · COMPUTER SCIENCE
              </p>

              <h3>
                ACS College of Engineering
              </h3>

              <p className="education-location">
                Bengaluru, Karnataka
              </p>

              <div className="education-bottom">
                <div>
                  <span>Degree</span>
                  <strong>B.E. Computer Science</strong>
                </div>

                <div>
                  <span>CGPA</span>
                  <strong>8.00</strong>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT — BLUE
      ===================================================== */}

      <section id="contact" className="section section-blue contact-section">
        <div className="container">

          <div className="contact-grid">

            <div className="contact-content">
              <p className="eyebrow">LET'S CONNECT</p>

              <h2>
                Let's build something
                <span> great together.</span>
              </h2>

              <p>
                I'm open to Java Full Stack, Software Developer and
                Frontend Developer opportunities.
              </p>
            </div>

            <div className="contact-links">

              <a
                href="mailto:srinivasrahul838@gmail.com"
                className="contact-link"
              >
                <span>Email</span>
                <strong>
                  srinivasrahul838@gmail.com
                </strong>
                <b>↗</b>
              </a>

              <a
                href="https://github.com/RAHUL2525252525"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span>GitHub</span>
                <strong>RAHUL2525252525</strong>
                <b>↗</b>
              </a>

              <a
                href="https://www.linkedin.com/in/rahul-s-6460b1238/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span>LinkedIn</span>
                <strong>Rahul S</strong>
                <b>↗</b>
              </a>

            </div>

          </div>

          <footer className="footer">
            <span>© {new Date().getFullYear()} Rahul S</span>
            <span>Java Full Stack Developer</span>
          </footer>

        </div>
      </section>

    </div>
  );
}
