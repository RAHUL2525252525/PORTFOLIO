import React, { useEffect, useRef, useState } from "react";

import ShopSphere from "./projects/ShopSphere";
import BankSphere from "./projects/BankSphere";
import LifeDecisionAssistant from "./projects/LifeDecisionAssistant";
import AIExamCompanion from "./projects/AIExamCompanion";
import DigitalAnalyticsDashboard from "./projects/DigitalAnalyticsDashboard";

/* =========================================================
   PROJECT ROUTES
   ========================================================= */

const ROUTES = {
  shopsphere: ShopSphere,
  banksphere: BankSphere,
  lifedecisionassistant: LifeDecisionAssistant,
  aiexamcompanion: AIExamCompanion,
  digitalanalyticsdashboard: DigitalAnalyticsDashboard,
};

/* =========================================================
   HASH ROUTER
   ========================================================= */

function useHashRoute() {
  const getRoute = () =>
    window.location.hash.replace(/^#\/?/, "").toLowerCase();

  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const onHashChange = () => {
      setRoute(getRoute());
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", onHashChange);

    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return route;
}

/* =========================================================
   REVEAL ANIMATION
   ========================================================= */

function Reveal({ children, as: Tag = "div", className = "", ...rest }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "in-view" : ""} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* =========================================================
   APP
   ========================================================= */

export default function App() {
  const route = useHashRoute();
  const ProjectPage = ROUTES[route];

  if (ProjectPage) {
    return <ProjectPage />;
  }

  return (
    <div className="portfolio">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

/* =========================================================
   NAVBAR
   ========================================================= */

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#" className="logo" onClick={closeMenu}>
          R<span>.</span>S
        </a>

        <div className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#education" onClick={closeMenu}>
            Education
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </div>

        <div className="nav-actions">
          <a
            href="/Rahul_S_ResumeFullStack.pdf"
            className="nav-resume-button"
            target="_blank"
            rel="noreferrer"
          >
            Resume
            <span>↗</span>
          </a>

          <button
            className={`menu-button ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}

/* =========================================================
   HERO
   ========================================================= */

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-video-layer">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-poster.jpg"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>

        <div className="hero-video-scrim" />
      </div>

      <div className="hero-grid-lines" />
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />

      <div className="hero-content">
        <Reveal className="hero-left">
          <div className="hero-kicker">
            <span className="kicker-line" />
            SOFTWARE ENGINEER · BENGALURU
          </div>

          <div className="hero-heading">
            <span>BUILD.</span>
            <span className="outline-text">SOLVE.</span>
            <span>SHIP.</span>
          </div>

          <p className="hero-role">
            Java Full Stack Developer
            <span> / </span>
            Spring Boot
            <span> / </span>
            React.js
          </p>

          <p className="hero-description">
            I build reliable full-stack applications from database design
            to production-ready interfaces. My work combines
            <strong> Java, Spring Boot, React.js and MySQL </strong>
            with secure APIs, role-based workflows and practical AI tooling.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              <span>Explore my work</span>
              <span className="button-arrow">↗</span>
            </a>

            <a href="#contact" className="secondary-button">
              Let's talk
            </a>
          </div>

          <div className="hero-bottom-meta">
            <span>
              <i className="status-dot" />
              Available for opportunities
            </span>

            <span>JAVA · REACT · SPRING</span>
          </div>
        </Reveal>

        <Reveal className="hero-visual">
          <div className="hero-photo-card">
            <div className="photo-card-top">
              <span>PROFILE / 001</span>
              <span>2026</span>
            </div>

            <div className="hero-photo-wrap">
              <div className="photo-glow" />

              <img
                src="/rahul-profile.jpg"
                alt="Rahul S"
              />

              <div className="photo-corner top-left" />
              <div className="photo-corner top-right" />
              <div className="photo-corner bottom-left" />
              <div className="photo-corner bottom-right" />
            </div>

            <div className="photo-card-bottom">
              <div>
                <strong>RAHUL S.</strong>
                <span>FULL STACK DEVELOPER</span>
              </div>

              <div className="available-badge">
                <span />
                OPEN
              </div>
            </div>
          </div>

          <div className="floating-card floating-location">
            <span className="floating-icon">⌖</span>
            <div>
              <small>BASED IN</small>
              <strong>Bengaluru, India</strong>
            </div>
          </div>

          <div className="floating-card floating-stack">
            <small>PRIMARY STACK</small>

            <div className="mini-stack">
              <span>JAVA</span>
              <span>SPRING</span>
              <span>REACT</span>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <i />
      </div>
    </section>
  );
}

/* =========================================================
   ABOUT
   ========================================================= */

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-container">
        <Reveal>
          <div className="section-eyebrow">
            <span>01</span>
            ABOUT
          </div>

          <div className="section-heading-row">
            <h2 className="section-title">
              Engineering with
              <br />
              <em>purpose.</em>
            </h2>

            <p className="section-side-description">
              I like taking complicated requirements and turning them into
              systems that are clean, secure and easy to understand.
            </p>
          </div>
        </Reveal>

        <div className="about-layout">
          <Reveal className="about-main">
            <div className="about-number">01</div>

            <p className="about-lead">
              I'm a Java-focused full-stack developer who enjoys owning a
              feature end to end — from the data model and backend service
              layer to the React interface users actually interact with.
            </p>

            <div className="about-copy-grid">
              <p>
                My strongest work has been in structured, validation-heavy
                systems including e-commerce platforms, banking workflows
                and layered REST architectures.
              </p>

              <p>
                Alongside Java development, I've built applied Python/Flask
                tools integrating AI providers such as Groq, Gemini and
                OpenRouter.
              </p>
            </div>
          </Reveal>

          <Reveal className="about-stats">
            <div className="stat-card stat-large">
              <span className="stat-index">A</span>
              <strong>5+</strong>
              <small>PROJECTS SHIPPED</small>
            </div>

            <div className="stat-card">
              <span className="stat-index">B</span>
              <strong>15+</strong>
              <small>REST ENDPOINTS</small>
            </div>

            <div className="stat-card">
              <span className="stat-index">C</span>
              <strong>3</strong>
              <small>PERMISSION TIERS</small>
            </div>

            <div className="stat-card accent-stat">
              <span className="stat-index">D</span>
              <strong>∞</strong>
              <small>PROBLEMS TO SOLVE</small>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SKILLS
   ========================================================= */

function Skills() {
  const groups = [
    {
      number: "01",
      title: "BACKEND",
      description: "Building structured APIs and business logic.",
      items: [
        "Java 17",
        "Spring Boot 3",
        "Spring Data JPA",
        "Spring Security",
        "Hibernate",
        "REST APIs",
        "MySQL",
        "Maven",
      ],
    },
    {
      number: "02",
      title: "FRONTEND",
      description: "Creating responsive product experiences.",
      items: [
        "React.js",
        "JavaScript ES6+",
        "HTML5",
        "CSS3",
        "Responsive Design",
      ],
    },
    {
      number: "03",
      title: "AI / PYTHON",
      description: "Rapidly building applied AI tools.",
      items: [
        "Python",
        "Flask",
        "MongoDB",
        "Groq API",
        "Gemini API",
        "OpenRouter API",
      ],
    },
    {
      number: "04",
      title: "TOOLS",
      description: "The tools around the development workflow.",
      items: [
        "Git",
        "GitHub",
        "Firebase",
        "Google OAuth",
        "Postman",
        "VS Code",
      ],
    },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="section-container">
        <Reveal>
          <div className="section-eyebrow">
            <span>02</span>
            CAPABILITIES
          </div>

          <div className="section-heading-row">
            <h2 className="section-title">
              The stack
              <br />
              <em>I work with.</em>
            </h2>

            <p className="section-side-description">
              Focused on practical technologies that help me move from
              idea to working product without unnecessary complexity.
            </p>
          </div>
        </Reveal>

        <div className="skills-bento">
          {groups.map((group) => (
            <Reveal key={group.number}>
              <div className="skill-bento-card">
                <div className="skill-card-top">
                  <span className="skill-number">
                    {group.number}
                  </span>

                  <span className="skill-arrow">↗</span>
                </div>

                <div className="skill-card-content">
                  <h3>{group.title}</h3>

                  <p>{group.description}</p>

                  <div className="skill-tags">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   EXPERIENCE
   ========================================================= */

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-container">
        <Reveal>
          <div className="section-eyebrow">
            <span>03</span>
            EXPERIENCE
          </div>

          <div className="section-heading-row">
            <h2 className="section-title">
              Where I've
              <br />
              <em>been building.</em>
            </h2>

            <p className="section-side-description">
              Hands-on development across full-stack systems, secure
              workflows and applied AI applications.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="experience-timeline">
            <div className="timeline-line" />

            <div className="experience-item">
              <div className="experience-marker">
                <span />
              </div>

              <div className="experience-date">
                2025 — PRESENT
              </div>

              <div className="experience-main">
                <div className="experience-title-row">
                  <div>
                    <p className="experience-label">
                      FULL STACK DEVELOPMENT
                    </p>

                    <h3>Self-directed / Freelance Projects</h3>
                  </div>

                  <span className="experience-index">01</span>
                </div>

                <p className="experience-stack">
                  Java · Spring Boot · React.js · MySQL
                </p>

                <div className="experience-details">
                  <div>
                    <span>01</span>
                    <p>
                      Designed and built ShopSphere, a full-stack
                      e-commerce platform with 6 modules and 15+
                      validated REST endpoints across ADMIN and
                      CUSTOMER roles.
                    </p>
                  </div>

                  <div>
                    <span>02</span>
                    <p>
                      Built BankSphere, a role-based banking system
                      with JWT authentication enforced across three
                      permission tiers.
                    </p>
                  </div>

                  <div>
                    <span>03</span>
                    <p>
                      Delivered three applied Python/Flask tools
                      integrating Groq, Gemini and OpenRouter behind
                      clean backend interfaces.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   PROJECT DATA
   ========================================================= */

const PROJECTS = [
  {
    route: "shopsphere",
    number: "01",
    stack: "java",
    stackLabel: "JAVA FULL STACK",
    category: "E-COMMERCE",
    name: "ShopSphere",
    desc:
      "Full-stack e-commerce platform with product browsing, cart, wishlist, checkout and order management across ADMIN and CUSTOMER roles.",
    highlight: "6 modules · 15+ validated REST endpoints",
    tech: ["Java 17", "Spring Boot", "React.js", "MySQL"],
  },
  {
    route: "banksphere",
    number: "02",
    stack: "java",
    stackLabel: "JAVA FULL STACK",
    category: "FINTECH",
    name: "BankSphere",
    desc:
      "Role-based banking application with secure account, transaction and admin workflows enforced through layered backend validation.",
    highlight: "JWT auth across 3 permission tiers",
    tech: ["Java 17", "Spring Boot", "Spring Security", "MySQL"],
  },
  {
    route: "lifedecisionassistant",
    number: "03",
    stack: "python",
    stackLabel: "PYTHON / FLASK",
    category: "AI TOOLING",
    name: "Life Decision Assistant",
    desc:
      "AI-powered decision support app that routes requests across three LLM providers behind one unified backend interface.",
    highlight: "3 LLM providers behind one API",
    tech: ["Python", "Flask", "Firebase", "Groq API"],
  },
  {
    route: "aiexamcompanion",
    number: "04",
    stack: "python",
    stackLabel: "PYTHON / FLASK",
    category: "EDTECH / AI",
    name: "AI Exam Companion",
    desc:
      "Exam preparation tool that generates AI-powered practice questions and stores session history in MongoDB.",
    highlight: "AI-generated practice question sets",
    tech: ["Python", "Flask", "MongoDB", "Groq API"],
  },
  {
    route: "digitalanalyticsdashboard",
    number: "05",
    stack: "js",
    stackLabel: "JAVASCRIPT / FIREBASE",
    category: "ANALYTICS",
    name: "Digital Analytics Dashboard",
    desc:
      "Analytics dashboard with Google OAuth sign-in and Firebase-backed data storage for tracking key usage metrics.",
    highlight: "Google OAuth + Firebase backend",
    tech: ["JavaScript", "Firebase", "Google OAuth", "Chart.js"],
  },
];

/* =========================================================
   PROJECTS
   ========================================================= */

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">
        <Reveal>
          <div className="section-eyebrow">
            <span>04</span>
            SELECTED WORK
          </div>

          <div className="projects-heading">
            <h2 className="section-title">
              Systems I've
              <br />
              <em>built.</em>
            </h2>

            <p>
              Five shipped projects spanning Java full-stack systems,
              AI-powered applications and analytics tooling.
            </p>
          </div>
        </Reveal>

        <div className="projects-showcase">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.route}>
              <article
                className={`project-showcase-card project-${index + 1}`}
                onClick={() => {
                  window.location.hash = `/${project.route}`;
                }}
              >
                <div className="project-card-number">
                  {project.number}
                </div>

                <div className="project-card-content">
                  <div className="project-card-meta">
                    <span className={`project-stack ${project.stack}`}>
                      {project.stackLabel}
                    </span>

                    <span className="project-category">
                      {project.category}
                    </span>
                  </div>

                  <h3>{project.name}</h3>

                  <p className="project-description">
                    {project.desc}
                  </p>

                  <div className="project-highlight">
                    <span>KEY SIGNAL</span>
                    {project.highlight}
                  </div>

                  <div className="project-footer">
                    <div className="project-tech">
                      {project.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    <button className="project-open">
                      <span>VIEW</span>
                      <strong>↗</strong>
                    </button>
                  </div>
                </div>

                <div className="project-card-glow" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   EDUCATION
   ========================================================= */

function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="section-container">
        <Reveal>
          <div className="section-eyebrow">
            <span>05</span>
            EDUCATION
          </div>

          <div className="section-heading-row">
            <h2 className="section-title">
              Academic
              <br />
              <em>foundation.</em>
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="education-modern-card">
            <div className="education-side">
              <span>B.E.</span>
              <small>COMPUTER SCIENCE</small>
            </div>

            <div className="education-main">
              <div className="education-top">
                <span>ENGINEERING</span>
                <span>01</span>
              </div>

              <h3>Bachelor of Engineering</h3>

              <p className="education-course">
                Computer Science / Information Technology
              </p>

              <p className="education-institution">
                ACS College of Engineering · Bengaluru
              </p>

              <div className="education-bottom">
                <div>
                  <small>ACADEMIC PERFORMANCE</small>
                  <strong>CGPA 8.00</strong>
                </div>

                <div>
                  <small>FOCUS</small>
                  <strong>SOFTWARE ENGINEERING</strong>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   CERTIFICATIONS
   ========================================================= */

function Certifications() {
  const certs = [
    {
      number: "01",
      title: "Java Full Stack Development",
      org: "Professional Development",
    },
    {
      number: "02",
      title: "Spring Boot & REST APIs",
      org: "Backend Engineering",
    },
    {
      number: "03",
      title: "React.js Fundamentals",
      org: "Frontend Development",
    },
    {
      number: "04",
      title: "SQL & Database Design",
      org: "Database Engineering",
    },
  ];

  return (
    <section className="section certifications-section">
      <div className="section-container">
        <Reveal>
          <div className="section-eyebrow">
            <span>06</span>
            CERTIFICATIONS
          </div>

          <div className="section-heading-row">
            <h2 className="section-title">
              Always
              <br />
              <em>learning.</em>
            </h2>

            <p className="section-side-description">
              Continuously expanding the toolkit around backend engineering,
              frontend development and modern application architecture.
            </p>
          </div>
        </Reveal>

        <div className="certification-list">
          {certs.map((cert) => (
            <Reveal key={cert.number}>
              <div className="certification-row">
                <span className="cert-number">
                  {cert.number}
                </span>

                <div className="cert-icon">
                  ✓
                </div>

                <div className="cert-info">
                  <h3>{cert.title}</h3>
                  <p>{cert.org}</p>
                </div>

                <span className="cert-arrow">↗</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CONTACT
   ========================================================= */

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-grid" />

      <div className="contact-orb" />

      <Reveal className="contact-inner">
        <div className="section-eyebrow contact-eyebrow">
          <span>07</span>
          CONTACT
        </div>

        <p className="contact-small">
          HAVE A PROJECT / OPPORTUNITY?
        </p>

        <h2>
          Let's build
          <br />
          something <em>reliable.</em>
        </h2>

        <a
          href="mailto:srinivasrahul838@gmail.com"
          className="email-link"
        >
          srinivasrahul838@gmail.com
          <span>↗</span>
        </a>

        <div className="contact-meta">
          <span>+91 · AVAILABLE FOR OPPORTUNITIES</span>
          <span>BENGALURU · INDIA</span>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/RAHUL2525252525"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <span>↗</span>
          </a>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
            <span>↗</span>
          </a>

          <a href="/Rahul_S_ResumeFullStack.pdf" target="_blank" rel="noreferrer">
            Resume
            <span>↗</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/* =========================================================
   FOOTER
   ========================================================= */

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        R<span>.</span>S
      </div>

      <div className="footer-center">
        © {new Date().getFullYear()} Rahul S.
      </div>

      <div className="footer-right">
        JAVA · REACT · SPRING
      </div>
    </footer>
  );
}
