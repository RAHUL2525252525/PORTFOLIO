import React, { useEffect, useState } from "react";
import "./index.css";

const VIDEO_URL =
  "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4";

const PROFILE_IMAGE = "/rahul-profile.jpg";

const BANKSPHERE_FRONTEND =
  "https://banksphere-frontend.vercel.app";

const BANKSPHERE_BACKEND =
  "https://banksphere-backend-b96m.onrender.com";

const navItems = [
  ["about", "About"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["work", "Work"],
  ["certifications", "Certifications"],
  ["approach", "Approach"],
  ["contact", "Contact"],
];

const skills = [
  {
    number: "01",
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React.js", "Vite", "Responsive UI"],
  },
  {
    number: "02",
    title: "Backend",
    items: ["Java", "Spring Boot", "REST API", "Spring MVC", "Spring Security"],
  },
  {
    number: "03",
    title: "Database",
    items: ["MySQL", "JPA", "Hibernate", "Firebase"],
  },
  {
    number: "04",
    title: "DevOps",
    items: ["Git", "GitHub", "Docker", "AWS EC2", "AWS S3", "Render", "Vercel"],
  },
];

const certifications = [
  {
    title: "Java Programming",
    subtitle: "Core Java • OOP • Collections • Exception Handling",
  },
  {
    title: "Web Development",
    subtitle: "HTML • CSS • JavaScript • React",
  },
  {
    title: "Database Development",
    subtitle: "MySQL • SQL • JPA • Hibernate",
  },
  {
    title: "Full Stack Development",
    subtitle: "React • Spring Boot • REST APIs",
  },
];

const architecture = [
  {
    number: "01",
    subtitle: "CLIENT",
    title: "React Frontend",
    description:
      "Responsive user interface built with React.js and modern component-based architecture.",
    items: ["React", "Vite", "JavaScript", "CSS"],
  },
  {
    number: "02",
    subtitle: "API",
    title: "Spring Boot",
    description:
      "RESTful backend services using Spring Boot, Spring MVC and structured DTO patterns.",
    items: ["Java", "Spring Boot", "REST"],
  },
  {
    number: "03",
    subtitle: "SECURITY",
    title: "JWT Security",
    description:
      "Authentication and role-based authorization using Spring Security, JWT and BCrypt.",
    items: ["JWT", "RBAC", "BCrypt"],
  },
  {
    number: "04",
    subtitle: "DATA",
    title: "MySQL",
    description:
      "Relational database layer implemented with JPA, Hibernate and MySQL.",
    items: ["MySQL", "JPA", "Hibernate"],
  },
  {
    number: "05",
    subtitle: "DEPLOYMENT",
    title: "Cloud",
    description:
      "Applications deployed using Docker, Render, Vercel and AWS infrastructure.",
    items: ["Docker", "AWS", "Render", "Vercel"],
  },
];

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function App() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems
        .map(([id]) => document.getElementById(id))
        .filter(Boolean);

      let current = "about";

      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;

        if (top <= 150) {
          current = section.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">

      {/* =====================================================
          REAL VIDEO BACKGROUND
          IMPORTANT:
          video is INSIDE app and has positive z-index.
          Website content sits above it.
      ===================================================== */}

      <div className="video-layer" aria-hidden="true">
        {!videoFailed ? (
          <video
            className="background-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onError={() => setVideoFailed(true)}
          >
            <source src={VIDEO_URL} type="video/mp4" />
          </video>
        ) : (
          <div className="video-fallback" />
        )}

        <div className="video-dark-overlay" />
        <div className="video-gradient-overlay" />
        <div className="video-grid" />
      </div>

      {/* =====================================================
          WEBSITE CONTENT
      ===================================================== */}

      <div className="site-content">

        {/* NAVIGATION */}
        <header className={`site-nav ${scrolled ? "scrolled" : ""}`}>
          <div className="nav-inner">

            <button
              className="logo-btn"
              onClick={() => scrollToSection("about")}
            >
              <span className="logo-mark">R</span>

              <span className="logo-text">
                RAHUL<span>.DEV</span>
              </span>
            </button>

            <nav className="tab-bar">
              {navItems.map(([id, label]) => (
                <button
                  key={id}
                  className={`tab ${active === id ? "active" : ""}`}
                  onClick={() => scrollToSection(id)}
                >
                  {label}
                </button>
              ))}
            </nav>

            <button
              className="nav-contact"
              onClick={() => scrollToSection("contact")}
            >
              Let's Talk ↗
            </button>

          </div>
        </header>

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="hero" id="about">

          <div className="hero-inner">

            <div className="hero-copy">

              <div className="hero-index">
                <span>00</span>
                <i />
                <strong>PORTFOLIO / 2026</strong>
              </div>

              <div className="hero-kicker">
                <span className="kicker-line" />
                SOFTWARE ENGINEER / FULL STACK DEVELOPER
              </div>

              <h1 className="hero-name">
                Rahul<em>S.</em>
              </h1>

              <div className="hero-role-row">
                Software Engineer
                <span className="role-arrow">↗</span>
              </div>

              <div className="hero-stack">
                Currently building with
                <strong>Java</strong>
                <span className="type-cursor" />
              </div>

              <p className="hero-desc">
                Software Engineer with hands-on experience building
                full-stack applications using{" "}
                <strong>
                  Java, Spring Boot, React.js, REST APIs, JWT security,
                  MySQL, Docker
                </strong>{" "}
                and modern deployment workflows.
              </p>

              <div className="hero-cta">

                <button
                  className="button-black"
                  onClick={() => scrollToSection("work")}
                >
                  View selected work ↗
                </button>

                <button
                  className="button-outline"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact me
                </button>

              </div>

              <div className="hero-meta">

                <span>
                  <b>⌁</b>
                  <strong>B.E. Computer Science</strong>
                </span>

                <span>
                  <b>⌖</b>
                  <strong>Bengaluru, India</strong>
                </span>

                <span>
                  <b>●</b>
                  <strong>Available for opportunities</strong>
                </span>

              </div>

            </div>

            {/* PROFILE TERMINAL */}

            <div className="hero-profile">

              <div className="profile-console">

                <div className="console-top">

                  <div className="window-dots">
                    <span />
                    <span />
                    <span />
                  </div>

                  <span className="console-title">
                    rahul.dev / profile
                  </span>

                  <span className="console-status">
                    ONLINE
                  </span>

                </div>

                <div className="console-screen">

                  <div className="console-grid" />

                  <div className="profile-portrait-wrap">

                    <img
                      src={PROFILE_IMAGE}
                      alt="Rahul"
                      className="profile-portrait"
                    />

                    <div className="portrait-ring" />

                    <div className="portrait-label">
                      RAHUL S / 2026
                    </div>

                  </div>

                  <div className="profile-terminal">

                    <div className="terminal-comment">
                      // candidate_profile
                    </div>

                    <div className="console-command">
                      $ whoami
                    </div>

                    <h3>
                      Rahul <span>S.</span>
                    </h3>

                    <p className="console-role">
                      Software Engineer · Full Stack Developer
                    </p>

                    <div className="console-status-large">
                      <span className="status-dot" />
                      Available for opportunities
                    </div>

                    <div className="console-divider" />

                    <div className="console-info">

                      <div className="console-info-row">
                        <div className="console-icon">⌖</div>

                        <div>
                          <span>Location</span>
                          <strong>Bengaluru, India</strong>
                        </div>
                      </div>

                      <div className="console-info-row">
                        <div className="console-icon">▣</div>

                        <div>
                          <span>Focus</span>
                          <strong>
                            Java · Spring Boot · React · MySQL
                          </strong>
                        </div>
                      </div>

                      <div className="console-info-row">
                        <div className="console-icon">◇</div>

                        <div>
                          <span>Education</span>
                          <strong>
                            B.E. Computer Science · 2026
                          </strong>
                        </div>
                      </div>

                    </div>

                    <div className="console-stack">

                      <span>STACK</span>

                      <div>
                        <b>Java</b>
                        <b>Spring Boot</b>
                        <b>React.js</b>
                        <b>MySQL</b>
                        <b>Docker</b>
                      </div>

                    </div>

                  </div>

                  <div className="console-corner">
                    2026
                  </div>

                </div>

              </div>

            </div>

          </div>

          <button
            className="scroll-indicator"
            onClick={() => scrollToSection("skills")}
          >
            SCROLL
            <span>↓</span>
          </button>

        </section>

        {/* =====================================================
            SKILLS
        ===================================================== */}

        <section className="section" id="skills">

          <div className="section-container">

            <div className="section-label">
              <span className="section-index">01</span>
              <span className="section-name">Skills</span>
              <span className="section-rule" />
            </div>

            <div className="section-heading-row">

              <h2 className="massive-title">
                WHAT I
                <br />
                <span>BUILD WITH.</span>
              </h2>

              <p>
                A practical full-stack toolkit focused on building
                production-ready applications and clean user
                experiences.
              </p>

            </div>

            <div className="skills-table">

              {skills.map((skill) => (
                <div className="skill-row" key={skill.number}>

                  <span className="skill-number">
                    {skill.number}
                  </span>

                  <h3>{skill.title}</h3>

                  <div className="skill-list">
                    {skill.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                  <span className="skill-arrow">↗</span>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            EXPERIENCE
        ===================================================== */}

        <section className="section" id="experience">

          <div className="section-container">

            <div className="section-label">
              <span className="section-index">02</span>
              <span className="section-name">Experience</span>
              <span className="section-rule" />
            </div>

            <div className="section-heading-row">

              <h2 className="massive-title">
                HOW I
                <br />
                <span>WORK.</span>
              </h2>

              <p>
                I focus on understanding the problem first, then
                building simple, scalable and maintainable solutions.
              </p>

            </div>

            <div className="experience-layout">

              <div className="timeline-rail">
                <span>2026</span>

                <div className="rail-line">
                  <i className="rail-dot" />
                </div>

                <span>NOW</span>
              </div>

              <div className="experience-content">

                <div className="experience-block">

                  <div className="experience-top">

                    <div>
                      <span className="eyebrow">
                        SOFTWARE DEVELOPMENT
                      </span>

                      <h3>
                        Full Stack Development
                      </h3>

                      <p>
                        <strong>Java · React · Spring Boot</strong>
                      </p>
                    </div>

                    <span className="year-tag">
                      2026
                    </span>

                  </div>

                  <ul>

                    <li>
                      <span>▸</span>
                      Built full-stack web applications with React,
                      Java and Spring Boot.
                    </li>

                    <li>
                      <span>▸</span>
                      Implemented REST APIs, authentication,
                      authorization and database persistence.
                    </li>

                    <li>
                      <span>▸</span>
                      Worked with Docker, Git, GitHub and cloud
                      deployment workflows.
                    </li>

                    <li>
                      <span>▸</span>
                      Focused on responsive interfaces and
                      user-friendly application flows.
                    </li>

                  </ul>

                </div>

                <div className="education-block">

                  <div className="education-icon">
                    🎓
                  </div>

                  <div>

                    <span className="eyebrow">
                      EDUCATION
                    </span>

                    <h3>
                      B.E. Computer Science Engineering
                    </h3>

                    <p>
                      ACS College of Engineering
                    </p>

                    <small>
                      2023 — 2026 · CGPA 8.0
                    </small>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            PROJECTS
        ===================================================== */}

        <section className="section" id="work">

          <div className="section-container">

            <div className="section-label">
              <span className="section-index">03</span>
              <span className="section-name">Selected Work</span>
              <span className="section-rule" />
            </div>

            <div className="section-heading-row">

              <h2 className="massive-title">
                PROJECTS
                <br />
                <span>THAT SHIP.</span>
              </h2>

              <p>
                Real applications rather than just practice screens —
                built, tested and deployed.
              </p>

            </div>

            <div className="projects">

              {/* BANKSPHERE */}

              <article className="project project-main">

                <span className="project-number">
                  01
                </span>

                <div className="project-header">

                  <div>
                    <span className="project-tag">
                      FULL STACK / BANKING
                    </span>

                    <h3>
                      BankSphere
                    </h3>
                  </div>

                  <span className="featured">
                    LIVE
                  </span>

                </div>

                <div className="project-body">

                  <div className="project-description">

                    <span className="project-label">
                      OVERVIEW
                    </span>

                    <ul>

                      <li>
                        <span />
                        Full-stack banking application built using
                        React.js and Spring Boot.
                      </li>

                      <li>
                        <span />
                        Implemented JWT authentication and
                        role-based access control.
                      </li>

                      <li>
                        <span />
                        Used BCrypt password hashing and
                        Spring Security.
                      </li>

                      <li>
                        <span />
                        Persistent data management using MySQL,
                        JPA and Hibernate.
                      </li>

                      <li>
                        <span />
                        Containerized and deployed using modern
                        cloud workflows.
                      </li>

                    </ul>

                  </div>

                  <div>

                    <span className="project-label">
                      TECHNOLOGY
                    </span>

                    <div className="project-tech">

                      {[
                        "React",
                        "Java 17",
                        "Spring Boot",
                        "Spring Security",
                        "JWT",
                        "MySQL",
                        "JPA",
                        "Hibernate",
                        "Docker",
                        "AWS",
                      ].map((item) => (
                        <span key={item}>{item}</span>
                      ))}

                    </div>

                    <p className="project-note">
                      ⚡ Backend is hosted on Render. It may sleep
                      when inactive. Start/open the backend first
                      and allow a few seconds for it to wake up
                      before opening the frontend.
                    </p>

                    <div className="project-links">

                      <a
                        href={BANKSPHERE_FRONTEND}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open Frontend ↗
                      </a>

                      <a
                        href={BANKSPHERE_BACKEND}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Wake Backend ↗
                      </a>

                    </div>

                  </div>

                </div>

              </article>

              {/* SHOPSPhERE */}

              <article className="project">

                <span className="project-number">
                  02
                </span>

                <div className="project-header">

                  <div>
                    <span className="project-tag">
                      E-COMMERCE / FULL STACK
                    </span>

                    <h3>
                      ShopSphere
                    </h3>
                  </div>

                  <span className="featured">
                    PROJECT
                  </span>

                </div>

                <div className="project-body">

                  <div className="project-description">

                    <span className="project-label">
                      OVERVIEW
                    </span>

                    <ul>

                      <li>
                        <span />
                        Modern e-commerce application with a
                        React frontend.
                      </li>

                      <li>
                        <span />
                        Designed product browsing, cart and
                        application workflows.
                      </li>

                      <li>
                        <span />
                        Built using component-based React
                        architecture.
                      </li>

                      <li>
                        <span />
                        Backend integration designed around
                        RESTful APIs.
                      </li>

                    </ul>

                  </div>

                  <div>

                    <span className="project-label">
                      TECHNOLOGY
                    </span>

                    <div className="project-tech">
                      <span>React</span>
                      <span>JavaScript</span>
                      <span>Spring Boot</span>
                      <span>REST API</span>
                      <span>MySQL</span>
                      <span>CSS</span>
                    </div>

                    <p className="project-note">
                      ⚡ If the ShopSphere backend is hosted on
                      Render, start/wake the backend first before
                      opening the frontend.
                    </p>

                  </div>

                </div>

              </article>

            </div>

          </div>

        </section>

        {/* =====================================================
            CERTIFICATIONS
        ===================================================== */}

        <section className="section" id="certifications">

          <div className="section-container">

            <div className="section-label">
              <span className="section-index">04</span>
              <span className="section-name">
                Certifications
              </span>
              <span className="section-rule" />
            </div>

            <div className="section-heading-row">

              <h2 className="massive-title">
                LEARNING
                <br />
                <span>BY BUILDING.</span>
              </h2>

              <p>
                Continuous learning through practical development,
                projects and technical exploration.
              </p>

            </div>

            <div className="certifications">

              {certifications.map((cert, index) => (
                <div
                  className="certification"
                  key={cert.title}
                >

                  <span className="cert-index">
                    0{index + 1}
                  </span>

                  <div className="cert-icon">
                    ✓
                  </div>

                  <div>
                    <h3>{cert.title}</h3>
                    <p>{cert.subtitle}</p>
                  </div>

                  <span className="cert-check">
                    ●
                  </span>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            APPROACH
        ===================================================== */}

        <section className="section" id="approach">

          <div className="section-container">

            <div className="section-label">
              <span className="section-index">05</span>
              <span className="section-name">
                Architecture
              </span>
              <span className="section-rule" />
            </div>

            <div className="section-heading-row">

              <h2 className="massive-title">
                FROM
                <br />
                <span>UI TO CLOUD.</span>
              </h2>

              <p>
                My preferred application flow connects the frontend,
                secure APIs, database and deployment infrastructure.
              </p>

            </div>

            <div className="architecture">

              {architecture.map((node, index) => (
                <div
                  className="architecture-node"
                  key={node.number}
                >

                  <div className="node-top">
                    <span>{node.number}</span>
                    <span>↗</span>
                  </div>

                  <span className="node-subtitle">
                    {node.subtitle}
                  </span>

                  <h3>{node.title}</h3>

                  <p>{node.description}</p>

                  <div className="node-items">

                    {node.items.map((item) => (
                      <span key={item}>
                        {item}
                      </span>
                    ))}

                  </div>

                  {index < architecture.length - 1 && (
                    <span className="architecture-arrow">
                      →
                    </span>
                  )}

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            CONTACT
        ===================================================== */}

        <section className="section" id="contact">

          <div className="section-container">

            <div className="section-label">
              <span className="section-index">06</span>
              <span className="section-name">
                Contact
              </span>
              <span className="section-rule" />
            </div>

            <div className="contact-terminal">

              <div className="terminal-header">

                <span>
                  rahul.dev / contact
                </span>

                <span>
                  AVAILABLE
                </span>

              </div>

              <div className="terminal-content">

                <div>

                  <div className="terminal-line">
                    $ connect --with-rahul
                  </div>

                  <h2>
                    LET'S BUILD
                    <br />
                    <span>SOMETHING.</span>
                  </h2>

                  <p>
                    I'm open to frontend, software development and
                    full-stack opportunities where I can build,
                    learn and contribute.
                  </p>

                  <a
                    className="terminal-button"
                    href="mailto:your-email@example.com"
                  >
                    Send me an email ↗
                  </a>

                </div>

              </div>

            </div>

            <div className="contact-grid">

              <div className="contact-item">

                <a href="mailto:your-email@example.com">

                  <span className="contact-icon">
                    @
                  </span>

                  <span>
                    <small>Email</small>
                    <strong>
                      your-email@example.com
                    </strong>
                  </span>

                  <span className="contact-arrow">
                    ↗
                  </span>

                </a>

              </div>

              <div className="contact-item">

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >

                  <span className="contact-icon">
                    GH
                  </span>

                  <span>
                    <small>GitHub</small>
                    <strong>
                      GitHub Profile
                    </strong>
                  </span>

                  <span className="contact-arrow">
                    ↗
                  </span>

                </a>

              </div>

              <div className="contact-item">

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >

                  <span className="contact-icon">
                    in
                  </span>

                  <span>
                    <small>LinkedIn</small>
                    <strong>
                      LinkedIn Profile
                    </strong>
                  </span>

                  <span className="contact-arrow">
                    ↗
                  </span>

                </a>

              </div>

              <div className="contact-item">

                <a href="tel:+910000000000">

                  <span className="contact-icon">
                    ☎
                  </span>

                  <span>
                    <small>Phone</small>
                    <strong>
                      +91 XXXXX XXXXX
                    </strong>
                  </span>

                  <span className="contact-arrow">
                    ↗
                  </span>

                </a>

              </div>

            </div>

          </div>

        </section>

        {/* FOOTER */}

        <footer className="site-footer">

          <div className="footer-inner">

            <span>
              © 2026 Rahul S.
            </span>

            <span>
              Built with <b className="footer-code">React</b>
            </span>

            <span>
              SOFTWARE ENGINEER / FULL STACK
            </span>

          </div>

        </footer>

      </div>
    </div>
  );
}

export default App;
