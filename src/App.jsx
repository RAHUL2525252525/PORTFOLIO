import React, { useEffect, useState } from "react";
import "./index.css";

const BACKEND_URL = "https://banksphere-backend-b96m.onrender.com";
const FRONTEND_URL = "https://banksphere-frontend.vercel.app";

const VIDEO_URL =
  "https://cdn.coverr.co/videos/coverr-a-dark-futuristic-city-1574/1080p.mp4";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [backendStatus, setBackendStatus] = useState("Checking...");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const response = await fetch(BACKEND_URL, {
          method: "GET",
          mode: "cors",
        });

        if (response.ok || response.status < 500) {
          setBackendStatus("ONLINE");
        } else {
          setBackendStatus("WAKE UP");
        }
      } catch {
        setBackendStatus("SLEEPING");
      }
    };

    checkBackend();
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMenuOpen(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Java",
    "Spring Boot",
    "MySQL",
    "Git",
    "GitHub",
    "REST API",
    "JWT",
  ];

  return (
    <div className="portfolio">
      {/* ================= VIDEO BACKGROUND ================= */}

      <video
        className="video-background"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      <div className="video-overlay"></div>
      <div className="noise"></div>

      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <div className="nav-logo" onClick={() => scrollToSection("home")}>
          <span className="logo-dot"></span>
          RAHUL<span>.</span>
        </div>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <button
            className={activeSection === "home" ? "active" : ""}
            onClick={() => scrollToSection("home")}
          >
            HOME
          </button>

          <button
            className={activeSection === "about" ? "active" : ""}
            onClick={() => scrollToSection("about")}
          >
            ABOUT
          </button>

          <button
            className={activeSection === "skills" ? "active" : ""}
            onClick={() => scrollToSection("skills")}
          >
            SKILLS
          </button>

          <button
            className={activeSection === "projects" ? "active" : ""}
            onClick={() => scrollToSection("projects")}
          >
            PROJECTS
          </button>

          <button
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => scrollToSection("contact")}
          >
            CONTACT
          </button>
        </nav>

        <div className="nav-status">
          <span className="status-light"></span>
          AVAILABLE
        </div>
      </header>

      {/* ================= HOME ================= */}

      <main>
        <section id="home" className="hero section">

          <div className="hero-left">

            <div className="eyebrow">
              <span>01</span>
              FRONTEND DEVELOPER
            </div>

            <h1>
              BUILDING
              <br />
              <span>DIGITAL</span>
              <br />
              EXPERIENCES.
            </h1>

            <p className="hero-description">
              I’m Rahul, a Computer Science Engineering graduate focused on
              creating modern, responsive and high-performance web experiences.
            </p>

            <div className="hero-actions">
              <button
                className="primary-button"
                onClick={() => scrollToSection("projects")}
              >
                VIEW PROJECTS
                <span>↗</span>
              </button>

              <button
                className="text-button"
                onClick={() => scrollToSection("contact")}
              >
                LET'S TALK
                <span>→</span>
              </button>
            </div>

          </div>

          <div className="hero-right">

            <div className="profile-orbit">
              <div className="orbit-ring ring-one"></div>
              <div className="orbit-ring ring-two"></div>

              <div className="profile-card">

                <div className="profile-number">01 / 01</div>

                <img
                  src="/profile.jpg"
                  alt="Rahul"
                  className="profile-image"
                />

                <div className="profile-bottom">
                  <span>RAHUL S.</span>
                  <span>BENGALURU / INDIA</span>
                </div>

              </div>
            </div>

          </div>

          <div className="scroll-indicator">
            <span></span>
            SCROLL TO EXPLORE
          </div>

        </section>

        {/* ================= ABOUT ================= */}

        <section id="about" className="section about-section">

          <div className="section-label">
            <span>02</span>
            ABOUT ME
          </div>

          <div className="about-grid">

            <div className="about-heading">
              <p className="mini-label">WHO I AM</p>

              <h2>
                CODE
                <br />
                WITH
                <br />
                <span>INTENT.</span>
              </h2>
            </div>

            <div className="about-content">

              <p className="large-text">
                I’m a Computer Science Engineering graduate who enjoys turning
                ideas into clean, functional and visually engaging digital
                products.
              </p>

              <p>
                My main focus is frontend development using HTML, CSS,
                JavaScript and React. I also work with Java, Spring Boot,
                MySQL and REST APIs to understand and build full-stack
                applications.
              </p>

              <div className="about-stats">

                <div>
                  <strong>8.0</strong>
                  <span>CGPA</span>
                </div>

                <div>
                  <strong>12+</strong>
                  <span>TECH SKILLS</span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>LIVE PROJECTS</span>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ================= SKILLS ================= */}

        <section id="skills" className="section skills-section">

          <div className="section-label">
            <span>03</span>
            TECHNOLOGY
          </div>

          <div className="skills-header">
            <h2>
              MY
              <br />
              <span>TOOLKIT.</span>
            </h2>

            <p>
              Technologies I use to design, develop and deploy modern web
              applications.
            </p>
          </div>

          <div className="skills-marquee">

            {skills.map((skill, index) => (
              <div className="skill-item" key={skill}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {skill}
              </div>
            ))}

          </div>

          <div className="skills-grid">

            <div className="skill-panel">
              <div className="panel-number">01</div>
              <h3>FRONTEND</h3>
              <p>
                Responsive interfaces, component-based architecture,
                animations and modern UI development.
              </p>
              <div className="panel-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JS</span>
                <span>REACT</span>
              </div>
            </div>

            <div className="skill-panel">
              <div className="panel-number">02</div>
              <h3>BACKEND</h3>
              <p>
                REST APIs, authentication, business logic and database
                integration.
              </p>
              <div className="panel-tags">
                <span>JAVA</span>
                <span>SPRING BOOT</span>
                <span>JWT</span>
              </div>
            </div>

            <div className="skill-panel">
              <div className="panel-number">03</div>
              <h3>DATABASE</h3>
              <p>
                Designing relational data structures and connecting
                applications with persistent storage.
              </p>
              <div className="panel-tags">
                <span>MYSQL</span>
                <span>JPA</span>
                <span>HIBERNATE</span>
              </div>
            </div>

          </div>

        </section>

        {/* ================= PROJECTS ================= */}

        <section id="projects" className="section projects-section">

          <div className="section-label">
            <span>04</span>
            SELECTED WORK
          </div>

          <div className="projects-title">
            <div>
              <p className="mini-label">RECENT PROJECTS</p>

              <h2>
                THINGS
                <br />
                I’VE <span>BUILT.</span>
              </h2>
            </div>

            <p>
              Real applications built using modern frontend and backend
              technologies.
            </p>
          </div>

          {/* BANKSPHERE */}

          <article className="project-card">

            <div className="project-index">01</div>

            <div className="project-main">

              <div className="project-top">
                <div>
                  <span className="project-type">
                    FULL STACK / BANKING
                  </span>

                  <h3>BankSphere</h3>
                </div>

                <span className="project-arrow">↗</span>
              </div>

              <p className="project-description">
                A full-stack online banking application with authentication,
                account management, role-based access control and secure API
                communication.
              </p>

              <div className="project-tech">
                <span>REACT</span>
                <span>JAVA</span>
                <span>SPRING BOOT</span>
                <span>MYSQL</span>
                <span>JWT</span>
                <span>DOCKER</span>
              </div>

              <div className="project-links">

                <a
                  href={FRONTEND_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LIVE FRONTEND ↗
                </a>

                <a
                  href={BACKEND_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BACKEND API ↗
                </a>

              </div>

              <div className="backend-note">
                <span>⚡</span>

                <div>
                  <strong>IMPORTANT</strong>
                  <p>
                    Backend is hosted on Render and may sleep after inactivity.
                    If the frontend takes time to respond, open the backend
                    first and wait a few seconds before using the frontend.
                  </p>
                </div>

              </div>

            </div>

          </article>

          {/* AI PLANT DOCTOR */}

          <article className="project-card second-project">

            <div className="project-index">02</div>

            <div className="project-main">

              <div className="project-top">
                <div>
                  <span className="project-type">
                    AI / WEB APPLICATION
                  </span>

                  <h3>AI Plant Doctor</h3>
                </div>

                <span className="project-arrow">↗</span>
              </div>

              <p className="project-description">
                An AI-powered plant assistance application designed to help
                users identify plant problems and receive intelligent
                recommendations.
              </p>

              <div className="project-tech">
                <span>REACT</span>
                <span>AI</span>
                <span>API</span>
                <span>JAVASCRIPT</span>
                <span>CSS</span>
              </div>

            </div>

          </article>

        </section>

        {/* ================= CONTACT ================= */}

        <section id="contact" className="section contact-section">

          <div className="section-label">
            <span>05</span>
            CONTACT
          </div>

          <div className="contact-layout">

            <div>

              <p className="mini-label">HAVE A PROJECT?</p>

              <h2>
                LET’S MAKE
                <br />
                SOMETHING
                <br />
                <span>GREAT.</span>
              </h2>

            </div>

            <div className="contact-right">

              <p>
                I’m currently looking for opportunities where I can contribute
                as a frontend or software developer.
              </p>

              <a
                className="contact-email"
                href="mailto:rahul@example.com"
              >
                GET IN TOUCH ↗
              </a>

              <div className="social-links">

                <a
                  href="https://github.com/RAHUL2525252525"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GITHUB ↗
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LINKEDIN ↗
                </a>

              </div>

            </div>

          </div>

        </section>

      </main>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div>
          © 2026 RAHUL S.
        </div>

        <div className="footer-status">
          <span className="status-light"></span>
          {backendStatus}
        </div>

        <div>
          BUILT WITH REACT
        </div>

      </footer>

    </div>
  );
}

export default App;
