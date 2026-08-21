import React, { useEffect, useState } from "react";
import "./index.css";

/* =========================================================
   ASSETS
========================================================= */

const VIDEO_URL =
  "https://cdn.coverr.co/videos/coverr-a-black-and-white-city-at-night-1574/1080p.mp4";

const PROFILE_IMAGE = "/profile.jpg";

/* =========================================================
   DATA
========================================================= */

const NAV_ITEMS = [
  ["home", "INDEX"],
  ["about", "PROFILE"],
  ["skills", "STACK"],
  ["experience", "EXPERIENCE"],
  ["projects", "WORK"],
  ["contact", "CONTACT"],
];

const SKILLS = [
  "Java",
  "JavaScript",
  "React",
  "HTML5",
  "CSS3",
  "Spring Boot",
  "Spring MVC",
  "Spring Data JPA",
  "Hibernate",
  "Spring Security",
  "MySQL",
  "REST API",
  "JWT",
  "Git",
  "GitHub",
  "Docker",
];

const PROJECTS = [
  {
    number: "01",
    title: "SHOPSPHERE",
    type: "FULL STACK E-COMMERCE",
    description:
      "A modern e-commerce platform built with React and Spring Boot with product management, authentication, APIs and MySQL persistence.",
    stack: ["React", "Spring Boot", "MySQL", "REST API"],
  },
  {
    number: "02",
    title: "BANKSPHERE",
    type: "BANKING SYSTEM",
    description:
      "A full-stack banking application focused on secure authentication, account management, role-based access and transactional APIs.",
    stack: ["Java", "Spring Boot", "JWT", "MySQL"],
  },
  {
    number: "03",
    title: "AI PLANT DOCTOR",
    type: "AI WEB APPLICATION",
    description:
      "An AI-powered application designed to help users identify plant-related problems and receive useful recommendations.",
    stack: ["React", "AI API", "JavaScript"],
  },
];

/* =========================================================
   APP
========================================================= */

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

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
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-15% 0px -55% 0px",
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
    <div className={`site ${loaded ? "loaded" : ""}`}>
      {/* =====================================================
          BACKGROUND VIDEO
      ===================================================== */}

      <div className="video-layer">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>

        <div className="video-dark" />
        <div className="noise" />
      </div>

      {/* =====================================================
          TOP BAR
      ===================================================== */}

      <header className="topbar">
        <button
          className="brand"
          onClick={() => scrollToSection("home")}
          aria-label="Go to home"
        >
          <span className="brand-mark">R</span>
          <span className="brand-text">RAHUL S.</span>
        </button>

        <div className="top-status">
          <span className="status-dot" />
          <span>AVAILABLE FOR WORK</span>
        </div>

        <button
          className={`menu-button ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
        </button>
      </header>

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <nav className={`navigation ${menuOpen ? "open" : ""}`}>
        <div className="nav-line" />

        {NAV_ITEMS.map(([id, label], index) => (
          <button
            key={id}
            className={activeSection === id ? "active" : ""}
            onClick={() => scrollToSection(id)}
          >
            <span className="nav-number">
              0{index + 1}
            </span>

            <span className="nav-label">
              {label}
            </span>
          </button>
        ))}
      </nav>

      {/* =====================================================
          SIDE INFO
      ===================================================== */}

      <aside className="side-info">
        <span>BENGALURU</span>
        <span>INDIA</span>
      </aside>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <main>
        {/* ===================================================
            HOME
        =================================================== */}

        <section id="home" className="hero section">
          <div className="hero-content">
            <div className="hero-index">
              <span>01</span>
              <span>PORTFOLIO / 2026</span>
            </div>

            <div className="hero-title-wrap">
              <p className="eyebrow">
                JAVA FULL STACK DEVELOPER
              </p>

              <h1>
                RAHUL
                <span>S.</span>
              </h1>

              <div className="hero-rule" />
            </div>

            <div className="hero-bottom">
              <p className="hero-description">
                I build digital products with clean interfaces,
                reliable backend systems and a focus on solving
                real-world problems.
              </p>

              <button
                className="discover"
                onClick={() => scrollToSection("about")}
              >
                <span>DISCOVER PROFILE</span>
                <span className="arrow">↓</span>
              </button>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-frame">
              <img
                src={PROFILE_IMAGE}
                alt="Rahul S."
                onError={(e) => {
                  e.currentTarget.style.opacity = "0";
                }}
              />

              <div className="image-number">RS / 01</div>
            </div>
          </div>

          <div className="scroll-indicator">
            <span>SCROLL</span>
            <div />
          </div>
        </section>

        {/* ===================================================
            ABOUT
        =================================================== */}

        <section id="about" className="section profile-section">
          <div className="section-heading">
            <span className="section-number">02</span>
            <span className="section-name">PROFILE</span>
          </div>

          <div className="profile-layout">
            <div className="massive-text">
              <span>BUILD</span>
              <span>THINK</span>
              <span>SHIP</span>
            </div>

            <div className="profile-copy">
              <p className="small-label">
                / ABOUT ME
              </p>

              <h2>
                Developer focused on
                <em> useful software.</em>
              </h2>

              <p>
                I'm Rahul, a Computer Science Engineering graduate
                interested in building modern web applications.
                My current focus is Java, React and full-stack
                development.
              </p>

              <p>
                I enjoy taking an idea from the initial concept
                through frontend development, backend APIs,
                database integration and deployment.
              </p>

              <div className="profile-meta">
                <div>
                  <span>EDUCATION</span>
                  <strong>B.E. COMPUTER SCIENCE</strong>
                </div>

                <div>
                  <span>FOCUS</span>
                  <strong>FULL STACK DEVELOPMENT</strong>
                </div>

                <div>
                  <span>LOCATION</span>
                  <strong>BENGALURU, INDIA</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            SKILLS
        =================================================== */}

        <section id="skills" className="section stack-section">
          <div className="section-heading">
            <span className="section-number">03</span>
            <span className="section-name">STACK</span>
          </div>

          <div className="stack-intro">
            <p className="small-label">
              / TECHNOLOGIES
            </p>

            <h2>
              Tools I use to
              <br />
              <span>turn ideas into systems.</span>
            </h2>
          </div>

          <div className="skills-grid">
            {SKILLS.map((skill, index) => (
              <div className="skill-item" key={skill}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{skill}</strong>

                <i>↗</i>
              </div>
            ))}
          </div>
        </section>

        {/* ===================================================
            EXPERIENCE
        =================================================== */}

        <section id="experience" className="section experience-section">
          <div className="section-heading">
            <span className="section-number">04</span>
            <span className="section-name">EXPERIENCE</span>
          </div>

          <div className="experience-layout">
            <div className="experience-title">
              <p className="small-label">
                / JOURNEY
              </p>

              <h2>
                Learning by
                <br />
                <span>building.</span>
              </h2>
            </div>

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">
                  2025 — 2026
                </div>

                <div className="timeline-marker" />

                <div className="timeline-content">
                  <p>SOFTWARE DEVELOPMENT</p>
                  <h3>FULL STACK PROJECTS</h3>
                  <span>
                    React / Java / Spring Boot / MySQL
                  </span>

                  <p className="timeline-description">
                    Built and worked on full-stack applications
                    involving frontend interfaces, REST APIs,
                    authentication, databases and deployment.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-date">
                  2023 — 2026
                </div>

                <div className="timeline-marker" />

                <div className="timeline-content">
                  <p>EDUCATION</p>
                  <h3>COMPUTER SCIENCE ENGINEERING</h3>
                  <span>
                    B.E. / ACS COLLEGE OF ENGINEERING
                  </span>

                  <p className="timeline-description">
                    Developed a strong foundation in programming,
                    databases, web development, software engineering
                    and computer science fundamentals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            PROJECTS
        =================================================== */}

        <section id="projects" className="section projects-section">
          <div className="section-heading">
            <span className="section-number">05</span>
            <span className="section-name">SELECTED WORK</span>
          </div>

          <div className="projects-intro">
            <p className="small-label">
              / PROJECT ARCHIVE
            </p>

            <h2>
              Things I've
              <br />
              <span>built.</span>
            </h2>
          </div>

          <div className="project-list">
            {PROJECTS.map((project) => (
              <article
                className="project-row"
                key={project.number}
              >
                <div className="project-number">
                  {project.number}
                </div>

                <div className="project-main">
                  <p>{project.type}</p>

                  <h3>{project.title}</h3>

                  <div className="project-stack">
                    {project.stack.map((item) => (
                      <span key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-description">
                  <p>{project.description}</p>

                  <button
                    className="project-arrow"
                    aria-label={`View ${project.title}`}
                  >
                    ↗
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ===================================================
            CONTACT
        =================================================== */}

        <section id="contact" className="section contact-section">
          <div className="contact-top">
            <div className="section-heading">
              <span className="section-number">06</span>
              <span className="section-name">CONTACT</span>
            </div>

            <p className="small-label">
              / LET'S BUILD SOMETHING
            </p>
          </div>

          <div className="contact-content">
            <h2>
              HAVE A
              <br />
              <span>PROJECT?</span>
            </h2>

            <a
              href="mailto:rahul@example.com"
              className="email-link"
            >
              <span>rahul@example.com</span>
              <strong>↗</strong>
            </a>
          </div>

          <div className="contact-footer">
            <div>
              <span>RAHUL S.</span>
              <small>JAVA FULL STACK DEVELOPER</small>
            </div>

            <div className="footer-links">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                GITHUB ↗
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LINKEDIN ↗
              </a>
            </div>

            <span>
              © 2026
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
