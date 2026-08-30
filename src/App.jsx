import React, { useEffect, useState } from "react";

import ShopSphere from "./projects/ShopSphere";
import BankSphere from "./projects/BankSphere";
import LifeDecisionAssistant from "./projects/LifeDecisionAssistant";
import AIExamCompanion from "./projects/AIExamCompanion";
import DigitalAnalyticsDashboard from "./projects/DigitalAnalyticsDashboard";

import "./index.css";

const SKILL_GROUPS = [
  {
    title: "Languages",
    skills: ["Java", "JavaScript (ES6+)", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "React.js",
    ],
  },
  {
    title: "APIs & Security",
    skills: [
      "REST API Design",
      "JWT Authentication",
      "RBAC",
      "Firebase Auth",
      "Google OAuth",
      "Axios",
    ],
  },
  {
    title: "Databases",
    skills: ["MySQL", "SQL"],
  },
  {
    title: "Architecture",
    skills: ["Layered Architecture", "Microservices"],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      "Docker",
      "Docker Compose",
      "Maven",
      "Git",
      "Aiven",
      "Vercel",
      "Render",
    ],
  },
  {
    title: "Testing",
    skills: ["JUnit 5", "Mockito"],
  },
];

const PROJECTS = [
  {
    number: "01",
    title: "ShopSphere",
    category: "FULL STACK E-COMMERCE",
    description:
      "A complete full-stack e-commerce platform with product browsing, search, cart, wishlist, checkout, order management and admin functionality.",
    stack: [
      "React.js",
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "REST APIs",
      "MySQL",
    ],
    component: ShopSphere,
    frontend: "https://shopsphere-8m8f.vercel.app/",
    backend: "https://shopsphere-backend-5umn.onrender.com",
    backendNote: true,
  },
  {
    number: "02",
    title: "BankSphere",
    category: "ONLINE BANKING SYSTEM",
    description:
      "A secure online banking application featuring registration, authentication, account management and transaction workflows using JWT and role-based access control.",
    stack: [
      "React.js",
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
      "Docker",
    ],
    component: BankSphere,
    frontend: "https://banksphere-frontend.vercel.app",
    backend: "https://banksphere-backend-b96m.onrender.com",
    backendNote: true,
  },
  {
    number: "03",
    title: "Life Decision Assistant",
    category: "AI / FLASK APPLICATION",
    description:
      "An AI-powered decision support application that helps users evaluate situations and receive structured guidance through multiple AI integrations.",
    stack: [
      "Python",
      "Flask",
      "Firebase Auth",
      "Groq API",
      "OpenRouter API",
      "Gemini API",
    ],
    component: LifeDecisionAssistant,
    live: "https://life-decision-assistant-63pu.onrender.com",
  },
  {
    number: "04",
    title: "AI Exam Companion",
    category: "AI / EDUCATION",
    description:
      "An AI-powered learning companion designed to help students practice questions and prepare more effectively using AI-generated educational assistance.",
    stack: ["Python", "Flask", "Firebase Auth", "Groq API"],
    component: AIExamCompanion,
    live: "https://ai-exam-companion-ghzc.onrender.com",
  },
  {
    number: "05",
    title: "Digital Analytics Dashboard",
    category: "AI / ANALYTICS DASHBOARD",
    description:
      "A modern analytics dashboard that presents digital insights through a clean interface with authentication and interactive data-focused views.",
    stack: [
      "Python",
      "Flask",
      "Firebase Auth",
      "Google OAuth",
      "AI APIs",
    ],
    component: DigitalAnalyticsDashboard,
    live: "https://digital-dashboard1.onrender.com",
  },
];

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="nav-inner">

          <button
            className="brand"
            onClick={() => scrollToSection("home")}
            aria-label="Go to home"
          >
            <span className="brand-mark">R</span>
            <span className="brand-name">RAHUL S</span>
          </button>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <button
              className={activeSection === "home" ? "active" : ""}
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>

            <button
              className={activeSection === "skills" ? "active" : ""}
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </button>

            <button
              className={activeSection === "experience" ? "active" : ""}
              onClick={() => scrollToSection("experience")}
            >
              Experience
            </button>

            <button
              className={activeSection === "projects" ? "active" : ""}
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </button>

            <button
              className={activeSection === "education" ? "active" : ""}
              onClick={() => scrollToSection("education")}
            >
              Education
            </button>

            <button
              className={activeSection === "contact" ? "active" : ""}
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </nav>

          <button
            className="menu-button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </header>

      {/* ================= HERO ================= */}
      <section id="home" className="hero-section">
        <div className="hero-grid"></div>

        <div className="hero-content">

          <div className="hero-label">
            <span className="status-dot"></span>
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <p className="hero-intro">HELLO, I'M</p>

          <h1>
            Rahul <span>S</span>
          </h1>

          <h2>
            Java Full Stack Developer
            <span className="hero-divider"> / </span>
            Software Engineer
          </h2>

          <p className="hero-description">
            I build secure, scalable and user-focused web applications using
            Java, Spring Boot, React.js, MySQL and modern cloud technologies.
          </p>

          <div className="hero-meta">
            <span>📍 Bengaluru, India</span>
            <span>•</span>
            <span>B.E. Computer Science</span>
            <span>•</span>
            <span>CGPA 8.00</span>
          </div>

          <div className="hero-actions">
            <button
              className="primary-button"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
              <span>↗</span>
            </button>

            <button
              className="secondary-button"
              onClick={() => scrollToSection("contact")}
            >
              Let's Connect
            </button>
          </div>

          <div className="hero-scroll">
            <span className="scroll-line"></span>
            SCROLL TO EXPLORE
          </div>

        </div>

        <div className="hero-number">01</div>
      </section>

      {/* ================= SKILLS - CREAM ================= */}
      <section id="skills" className="section cream-section">
        <div className="section-container">

          <div className="section-heading">
            <div>
              <span className="section-kicker">02 / EXPERTISE</span>
              <h2>Skills & Technologies</h2>
            </div>

            <p>
              A practical technology stack focused on building production-ready
              full-stack applications.
            </p>
          </div>

          <div className="skills-grid">
            {SKILL_GROUPS.map((group, index) => (
              <div className="skill-card" key={group.title}>

                <div className="skill-card-top">
                  <span className="skill-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="skill-arrow">↗</span>
                </div>

                <h3>{group.title}</h3>

                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span className="skill-pill" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= EXPERIENCE - BLUE ================= */}
      <section id="experience" className="section blue-section">
        <div className="section-container">

          <div className="section-heading light-heading">
            <div>
              <span className="section-kicker">03 / EXPERIENCE</span>
              <h2>Professional Experience</h2>
            </div>

            <p>
              Hands-on experience building full-stack modules and modern
              Python/Flask applications.
            </p>
          </div>

          <div className="experience-card">

            <div className="experience-left">
              <span className="experience-index">01</span>

              <div>
                <p className="experience-period">
                  JAN 2026 — MAY 2026
                </p>

                <h3>Web Development Intern</h3>

                <h4>MR Tech Lab · Bengaluru</h4>
              </div>
            </div>

            <div className="experience-right">

              <div className="experience-highlight">
                <span>01</span>
                <p>
                  Developed and delivered full-stack modules using React.js,
                  Java, Spring Boot and MySQL.
                </p>
              </div>

              <div className="experience-highlight">
                <span>02</span>
                <p>
                  Worked with REST APIs, authentication, database integration
                  and responsive frontend development.
                </p>
              </div>

              <div className="experience-highlight">
                <span>03</span>
                <p>
                  Independently designed and shipped Python/Flask applications
                  with Firebase authentication and AI API integrations.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= PROJECTS - CREAM ================= */}
      <section id="projects" className="section cream-section projects-section">
        <div className="section-container">

          <div className="section-heading">
            <div>
              <span className="section-kicker">04 / SELECTED WORK</span>
              <h2>Featured Projects</h2>
            </div>

            <p>
              Real applications combining strong engineering fundamentals,
              modern UI and practical backend architecture.
            </p>
          </div>

          <div className="projects-list">

            {PROJECTS.map((project) => {
              const ProjectComponent = project.component;

              return (
                <article className="project-wrapper" key={project.number}>

                  <div className="project-heading-row">

                    <div className="project-heading-left">
                      <span className="project-number">
                        {project.number}
                      </span>

                      <div>
                        <span className="project-category">
                          {project.category}
                        </span>

                        <h3>{project.title}</h3>
                      </div>
                    </div>

                    <span className="project-symbol">↗</span>

                  </div>

                  <div className="project-showcase">

                    <div className="project-visual">
                      <ProjectComponent />
                    </div>

                    <div className="project-info">

                      <p className="project-description">
                        {project.description}
                      </p>

                      <div className="project-stack">
                        {project.stack.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>

                      {/* LIVE LINKS OUTSIDE THE IMAGE/CARD */}
                      <div className="project-links">

                        {project.frontend && (
                          <a
                            href={project.frontend}
                            target="_blank"
                            rel="noreferrer"
                            className="live-link primary-live"
                          >
                            <span>Frontend Live</span>
                            <span>↗</span>
                          </a>
                        )}

                        {project.backend && (
                          <a
                            href={project.backend}
                            target="_blank"
                            rel="noreferrer"
                            className="live-link"
                          >
                            <span>Backend Live</span>
                            <span>↗</span>
                          </a>
                        )}

                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="live-link primary-live"
                          >
                            <span>View Live Project</span>
                            <span>↗</span>
                          </a>
                        )}

                      </div>

                      {project.backendNote && (
                        <div className="backend-note">
                          <span className="note-icon">ⓘ</span>

                          <div>
                            <strong>Before opening the frontend</strong>
                            <p>
                              Start/open the backend link first. The backend is
                              hosted on Render and may go to sleep after
                              inactivity, so the first request can take a
                              little longer.
                            </p>
                          </div>
                        </div>
                      )}

                    </div>

                  </div>

                </article>
              );
            })}

          </div>

        </div>
      </section>

      {/* ================= EDUCATION - BLUE ================= */}
      <section id="education" className="section blue-section">
        <div className="section-container">

          <div className="section-heading light-heading">
            <div>
              <span className="section-kicker">05 / EDUCATION</span>
              <h2>Academic Background</h2>
            </div>

            <p>
              Strong foundation in computer science with practical software
              development experience.
            </p>
          </div>

          <div className="education-card">

            <div className="education-year">
              <span>2022</span>
              <div className="year-line"></div>
              <span>2026</span>
            </div>

            <div className="education-main">

              <span className="education-label">
                BACHELOR OF ENGINEERING
              </span>

              <h3>Computer Science & Engineering</h3>

              <h4>ACS College of Engineering</h4>

              <p>
                Bengaluru, Karnataka
              </p>

            </div>

            <div className="education-score">
              <span>CGPA</span>
              <strong>8.00</strong>
              <small>/ 10</small>
            </div>

          </div>

          <div className="education-bottom-grid">

            <div className="education-feature">
              <span>01</span>
              <h3>Core Foundation</h3>
              <p>
                Object-oriented programming, databases, software engineering,
                web development and computer science fundamentals.
              </p>
            </div>

            <div className="education-feature">
              <span>02</span>
              <h3>Practical Development</h3>
              <p>
                Full-stack development through Java/Spring Boot and
                React.js-based projects.
              </p>
            </div>

            <div className="education-feature">
              <span>03</span>
              <h3>Continuous Learning</h3>
              <p>
                Exploring cloud, DevOps, AI integrations, testing and scalable
                application architecture.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= CONTACT - CREAM ================= */}
      <section id="contact" className="section cream-section contact-section">
        <div className="section-container">

          <div className="contact-layout">

            <div className="contact-main">

              <span className="section-kicker">06 / CONTACT</span>

              <h2>
                Let's build something
                <span> meaningful.</span>
              </h2>

              <p>
                I'm open to Java Full Stack Developer, Software Developer and
                Frontend/Backend opportunities where I can contribute,
                learn and build impactful products.
              </p>

              <a
                href="mailto:srinivasrahul838@gmail.com"
                className="email-link"
              >
                srinivasrahul838@gmail.com
                <span>↗</span>
              </a>

            </div>

            <div className="contact-links">

              <a
                href="https://github.com/RAHUL2525252525"
                target="_blank"
                rel="noreferrer"
              >
                <span>GitHub</span>
                <span>↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/rahul-s-6460b1238/"
                target="_blank"
                rel="noreferrer"
              >
                <span>LinkedIn</span>
                <span>↗</span>
              </a>

              <a
                href="https://rahul-portfolio-mu-ruddy.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <span>Portfolio</span>
                <span>↗</span>
              </a>

            </div>

          </div>

          <div className="contact-footer">

            <span>RAHUL S</span>

            <span>
              JAVA FULL STACK DEVELOPER
            </span>

            <span>
              © {new Date().getFullYear()}
            </span>

          </div>

        </div>
      </section>

    </div>
  );
}

export default App;
