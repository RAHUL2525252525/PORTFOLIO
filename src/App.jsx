import React, { useEffect, useState } from "react";
import "./index.css";

// Background clip — dark, drifting particle field (Pexels,
// free license, no attribution required).
const VIDEO_URL =
  "https://videos.pexels.com/video-files/29919008/12841733_1920_1080_30fps.mp4";

const NAV_ITEMS = [
  ["home", "HOME"],
  ["about", "ABOUT"],
  ["skills", "SKILLS"],
  ["experience", "EXPERIENCE"],
  ["projects", "WORK"],
  ["contact", "CONTACT"],
];

const STACK = [
  "React.js",
  "Java",
  "Spring Boot",
  "JavaScript",
  "MySQL",
  "REST APIs",
  "JWT",
  "Docker",
];

const SKILL_GROUPS = [
  {
    number: "01",
    title: "FRONTEND",
    skills: [
      "React.js",
      "React Hooks",
      "React Router",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Responsive Web Design",
      "Axios",
      "RESTful API Integration",
      "Component based architecture",
      "Form validation",
      "State management",
    ],
  },
  {
    number: "02",
    title: "BACKEND",
    skills: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "REST API Design",
      "Spring Data JPA",
      "Hibernate",
      "Microservices",
      "Exception Handling",
    ],
  },
  {
    number: "03",
    title: "SECURITY",
    skills: [
      "Spring Security",
      "JWT Authentication",
      "Role-Based Access Control (RBAC)",
    ],
  },
  {
    number: "04",
    title: "DATABASE",
    skills: [
      "MySQL",
      "SQL",
      "Database Design",
      "CRUD Operations",
    ],
  },
  {
    number: "05",
    title: "DEVOPS",
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
    number: "06",
    title: "TESTING / CS",
    skills: [
      "JUnit 5",
      "Mockito",
      "Postman",
      "Agile Development",
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
    ],
  },
];

const PROJECTS = [
  {
    number: "01",
    year: "05/2026 — 06/2026",
    category: "FULL STACK / E-COMMERCE",
    title: "ShopSphere",
    subtitle: "Full Stack E-Commerce Web Application",
    stack:
      "React.js · Java · Spring Boot · Spring Data JPA · REST APIs · MySQL",
    description:
      "A full-stack e-commerce platform spanning product browsing, search, cart, wishlist, checkout, and order management.",
    points: [
      "Architected an e-commerce platform spanning 6 core modules — product browsing, search, cart, wishlist, checkout, and order management — using a layered Controller/Service/Repository architecture.",
      "Engineered role-based admin functionality across 2 user roles (admin, customer) for managing products, inventory, users, and orders.",
      "Integrated secure authentication and order-management workflows via REST APIs connecting the React.js frontend to the Spring Boot backend, covering 15+ endpoints.",
    ],
    live: "https://shopsphere-8m8f.vercel.app/",
    backend: "https://shopsphere-backend-5umn.onrender.com",
  },
  {
    number: "02",
    year: "07/2026 — 08/2026",
    category: "FULL STACK / BANKING",
    title: "BankSphere",
    subtitle: "Online Banking System — Full Stack Banking Application",
    stack:
      "React.js · Java · Spring Boot · Spring Security · JWT · Spring Data JPA · MySQL · Docker",
    description:
      "A secure full-stack banking application supporting registration, authentication, account management and transaction workflows.",
    points: [
      "Developed a secure banking application supporting user registration, login, account management, and transaction workflows.",
      "Implemented JWT authentication and role-based access control (RBAC) using Spring Security to protect user and admin operations across 3 access levels.",
      "Designed a normalized MySQL schema with 8+ entities (users, roles, accounts, transactions) and defined relational integrity constraints.",
      "Containerized the full application stack (frontend, backend, database) using Docker and Docker Compose, enabling one-command setup for local and deployment environments.",
      "Wrote unit tests for service-layer business logic using JUnit 5 and Mockito to validate transaction and authentication flows.",
    ],
    live: "https://banksphere-frontend.vercel.app",
    backend: "https://banksphere-backend-b96m.onrender.com",
  },
];

const EXPERIENCE = {
  role: "Web Development Intern",
  company: "MR Tech Lab",
  period: "01/2026 — 05/2026",
  location: "Bengaluru",
  points: [
    "Owned end-to-end development of 2+ full-stack modules using React.js, Java, Spring Boot, and MySQL, from API design through frontend integration.",
    "Built and integrated REST APIs with backend services to support dynamic data handling, implementing authentication and CRUD operations within an Agile, Git-based deployment workflow.",
  ],
};

/* Presentational-only helpers for the new reference-style
   hero: colors for the tech-stack panel and copy for the
   capability row under the hero. No app data/behavior is
   derived or changed here. */
const TECH_COLORS = [
  "#22d3ee",
  "#f59e0b",
  "#34d399",
  "#facc15",
  "#38bdf8",
  "#a855f7",
  "#f472b6",
  "#60a5fa",
];

const SERVICE_HIGHLIGHTS = [
  {
    number: "01",
    title: "Frontend Development",
    text: "Building responsive, accessible interfaces with React and modern JavaScript.",
    icon: "code",
  },
  {
    number: "02",
    title: "Backend Development",
    text: "Designing secure, scalable REST APIs with Java and Spring Boot.",
    icon: "server",
  },
  {
    number: "03",
    title: "Database Management",
    text: "Structuring relational schemas and writing efficient MySQL queries.",
    icon: "database",
  },
  {
    number: "04",
    title: "DevOps & Deployment",
    text: "Containerizing and shipping applications with Docker and Git workflows.",
    icon: "cloud",
  },
];

function useTypewriter(words) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];

    const timer = setTimeout(
      () => {
        if (!deleting) {
          const next = word.slice(0, text.length + 1);
          setText(next);

          if (next === word) {
            setDeleting(true);
          }
        } else {
          const next = word.slice(0, text.length - 1);
          setText(next);

          if (next === "") {
            setDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      deleting ? 55 : text.length === word.length ? 1400 : 85
    );

    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return text;
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function Arrow() {
  return <span className="arrow-symbol">↗</span>;
}

/* Small, dependency-free icon glyphs — kept generic
   (no brand logos reproduced) to avoid needing any
   external icon package. */
function IconGithub() {
  return <span className="glyph-icon">GH</span>;
}

function IconLinkedin() {
  return <span className="glyph-icon">IN</span>;
}

function IconMail() {
  return (
    <svg
      className="glyph-svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5 12 13l8.5-6.5" />
    </svg>
  );
}

function IconCode() {
  return (
    <svg
      className="glyph-svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M8.5 7 4 12l4.5 5" />
      <path d="M15.5 7 20 12l-4.5 5" />
      <path d="M13.2 5.5 10.8 18.5" />
    </svg>
  );
}

function IconServer() {
  return (
    <svg
      className="glyph-svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <rect x="3.5" y="4" width="17" height="6.5" rx="1.4" />
      <rect x="3.5" y="13.5" width="17" height="6.5" rx="1.4" />
      <circle cx="7" cy="7.25" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="7" cy="16.75" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconDatabase() {
  return (
    <svg
      className="glyph-svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <ellipse cx="12" cy="5.5" rx="8" ry="3" />
      <path d="M4 5.5V18c0 1.66 3.58 3 8 3s8-1.34 8-3V5.5" />
      <path d="M4 11.75c0 1.66 3.58 3 8 3s8-1.34 8-3" />
    </svg>
  );
}

function IconCloud() {
  return (
    <svg
      className="glyph-svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M7.5 18h9a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6 1.5A3.75 3.75 0 0 0 7.5 18Z" />
    </svg>
  );
}

const SERVICE_ICONS = {
  code: IconCode,
  server: IconServer,
  database: IconDatabase,
  cloud: IconCloud,
};

function App() {
  const typed = useTypewriter(STACK);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = NAV_ITEMS.map(([id]) =>
      document.getElementById(id)
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          )[0];

        if (visible) {
          setActive(visible.target.id);
        }
      },
      {
        threshold: [0.15, 0.35, 0.6],
        rootMargin: "-20% 0px -45% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navigate = (id) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <div className="site">

      {/* VIDEO BACKGROUND */}

      <video
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      <div className="video-darkness" />
      <div className="video-color-wash" />
      <div className="scanlines" />
      <div className="noise-layer" />

      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="orb orb-three" />

      {/* LEFT SOCIAL RAIL */}

      <aside className="side-rail" aria-label="Social links">

        <div className="side-rail-social">

          <a
            href="https://github.com/RAHUL2525252525"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <IconGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/rahul-s-6460b1238"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <IconLinkedin />
          </a>

          <a
            href="mailto:Srinivasrahul838@gmail.com"
            aria-label="Email"
          >
            <IconMail />
          </a>

        </div>

        <button
          type="button"
          className="side-rail-status"
          onClick={() => navigate("contact")}
        >
          <span className="side-rail-dot" />
          AVAILABLE FOR OPPORTUNITIES
        </button>

      </aside>

      {/* NAVIGATION */}

      <header className="topbar">

        <button
          className="brand"
          onClick={() => navigate("home")}
          aria-label="Go home"
        >
          <span className="brand-symbol">R</span>

          <span className="brand-copy">
            <strong>RAHUL</strong>
            <small>JAVA FULL STACK DEVELOPER</small>
          </span>
        </button>

        <nav className="desktop-nav">
          {NAV_ITEMS.map(([id, label], index) => (
            <button
              key={id}
              className={
                active === id
                  ? "nav-item active"
                  : "nav-item"
              }
              onClick={() => navigate(id)}
            >
              <span>0{index + 1}.</span>
              {label}
            </button>
          ))}
        </nav>

        <a
          className="top-contact"
          href="mailto:Srinivasrahul838@gmail.com"
        >
          <span>LET'S CONNECT</span>
          <Arrow />
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

      </header>

      {/* MOBILE NAV */}

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {NAV_ITEMS.map(([id, label], index) => (
          <button
            key={id}
            onClick={() => navigate(id)}
          >
            <small>0{index + 1}</small>
            {label}
            <Arrow />
          </button>
        ))}
      </div>

      <main>

        {/* HERO */}

        <section id="home" className="hero">

          <div className="hero-grid">

            <div className="hero-left">

              <div className="hero-index">
                <span>01</span>
                <i />
                PORTFOLIO / 2026
              </div>

              <p className="hero-kicker">
                JAVA FULL STACK DEVELOPER
                <b>+</b>
                SOFTWARE ENGINEER
              </p>

              <h1>
                Rahul
                <span>S.</span>
              </h1>

              <div className="type-line">
                <span>BUILDING WITH</span>
                <strong>{typed}</strong>
                <i />
              </div>

              <p className="hero-description">
                Full Stack Developer skilled in React.js, Java,
                and Spring Boot with strong hands-on experience
                building secure, end-to-end web applications
                from UI to database.
              </p>

              <div className="hero-actions">

                <button
                  className="neon-button primary"
                  onClick={() => navigate("projects")}
                >
                  EXPLORE MY WORK
                  <Arrow />
                </button>

                <button
                  className="neon-button secondary"
                  onClick={() => navigate("contact")}
                >
                  CONTACT ME
                </button>

              </div>

              <div className="hero-facts">

                <div>
                  <small>LOCATION</small>
                  <strong>Bengaluru, India</strong>
                </div>

                <div>
                  <small>EDUCATION</small>
                  <strong>B.E. Computer Science</strong>
                </div>

                <div>
                  <small>CGPA</small>
                  <strong>8.00</strong>
                </div>

              </div>

            </div>

            {/* PROFILE */}

            <div className="hero-visual">

              <div className="portrait-stage">

                <div className="portrait-ring-dashed" />
                <div className="portrait-ring-glow" />

                <div className="portrait-frame">
                  <div className="portrait-glow" />

                  <img
                    src="/rahul-profile.jpg"
                    alt="Rahul S"
                    className="profile-image"
                  />
                </div>

              </div>

              <div className="tech-panel">

                <div className="tech-panel-head">
                  <span>TECH STACK</span>
                  <i>&lt;/&gt;</i>
                </div>

                <div className="tech-panel-list">

                  {STACK.map((item, index) => (
                    <div className="tech-panel-item" key={item}>
                      <span
                        className="tech-dot"
                        style={{
                          background:
                            TECH_COLORS[index % TECH_COLORS.length],
                        }}
                      />
                      {item}
                    </div>
                  ))}

                </div>

              </div>

              <div className="availability-float">
                <span className="availability-dot" />

                <div>
                  <small>AVAILABLE FOR</small>
                  <strong>OPPORTUNITIES</strong>
                </div>
              </div>

            </div>

          </div>

          <div className="hero-bottom">
            <span>SCROLL TO EXPLORE</span>

            <div className="scroll-line">
              <i />
            </div>

            <span>00 / 06</span>
          </div>

        </section>

        {/* QUICK CAPABILITIES */}

        <section className="section services-row">

          <div className="services-grid">

            {SERVICE_HIGHLIGHTS.map((service) => {
              const Icon = SERVICE_ICONS[service.icon];

              return (
                <article className="service-card" key={service.number}>

                  <div className="service-icon">
                    <Icon />
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.text}</p>

                </article>
              );
            })}

          </div>

        </section>

        {/* ABOUT */}

        <section id="about" className="section about">

          <div className="section-heading">
            <span className="section-number">01</span>

            <div>
              <small>IDENTITY</small>
              <h2>
                Built from UI
                <br />
                to database.
              </h2>
            </div>
          </div>

          <div className="about-content">

            <div className="about-statement">

              <span className="quote-mark">“</span>

              <p>
                Full Stack Developer skilled in React.js, Java,
                and Spring Boot with strong hands-on experience
                building secure, end-to-end web applications
                from UI to database.
              </p>

              <span className="about-line" />

              <p className="about-secondary">
                Proven ability to independently architect and
                deliver full-stack projects — REST APIs, JWT
                authentication, RBAC, and MySQL database design
                — in Agile environments.
              </p>

            </div>

            <div className="about-terminal">

              <div className="terminal-top">
                <span />
                <span />
                <span />
                <small>rahul@developer:~</small>
              </div>

              <div className="terminal-body">

                <p>
                  <b>$</b> cat profile.json
                </p>

                <div className="terminal-json">

                  <span>{"{"}</span>

                  <span>
                    <i>"role"</i>: "Java Full Stack Developer",
                  </span>

                  <span>
                    <i>"focus"</i>: "Production Web Apps",
                  </span>

                  <span>
                    <i>"frontend"</i>: "React.js",
                  </span>

                  <span>
                    <i>"backend"</i>: "Java + Spring Boot",
                  </span>

                  <span>
                    <i>"database"</i>: "MySQL",
                  </span>

                  <span>
                    <i>"security"</i>: "JWT + RBAC",
                  </span>

                  <span>{"}"}</span>

                </div>

                <p className="terminal-success">
                  <b>✓</b> profile loaded successfully
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* SKILLS */}

        <section id="skills" className="section skills">

          <div className="section-heading">

            <span className="section-number">02</span>

            <div>
              <small>TECH STACK</small>

              <h2>
                Tools I
                <br />
                build with.
              </h2>
            </div>

          </div>

          <div className="skills-layout">

            <div className="skill-intro">

              <div className="radar">

                <div className="radar-ring ring-one" />
                <div className="radar-ring ring-two" />
                <div className="radar-ring ring-three" />

                <div className="radar-cross horizontal" />
                <div className="radar-cross vertical" />

                <div className="radar-center">
                  RS
                </div>

                {STACK.map((item, index) => (
                  <span
                    key={item}
                    className={`radar-node node-${index + 1}`}
                  >
                    {item}
                  </span>
                ))}

              </div>

              <p>
                A practical stack focused on building responsive
                frontends, secure REST APIs, relational databases
                and deployable full-stack systems.
              </p>

            </div>

            <div className="skill-groups">

              {SKILL_GROUPS.map((group) => (

                <article
                  className="skill-group"
                  key={group.number}
                >

                  <div className="skill-group-top">

                    <span>{group.number}</span>

                    <h3>{group.title}</h3>

                  </div>

                  <div className="skill-list">

                    {group.skills.map((skill) => (
                      <span key={skill}>
                        {skill}
                      </span>
                    ))}

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>

        {/* EXPERIENCE */}

        <section id="experience" className="section experience">

          <div className="section-heading">

            <span className="section-number">03</span>

            <div>
              <small>CAREER</small>

              <h2>
                Experience
                <br />
                that ships.
              </h2>
            </div>

          </div>

          <div className="experience-wrapper">

            <div className="experience-year">
              <span>2026</span>
              <i />
              <span>NOW</span>
            </div>

            <article className="experience-main">

              <div className="experience-header">

                <div>

                  <small>
                    WEB DEVELOPMENT INTERN
                  </small>

                  <h3>
                    {EXPERIENCE.company}
                  </h3>

                  <p>
                    {EXPERIENCE.location}
                  </p>

                </div>

                <span className="experience-period">
                  {EXPERIENCE.period}
                </span>

              </div>

              <div className="experience-points">

                {EXPERIENCE.points.map(
                  (point, index) => (

                    <div key={point}>

                      <span>
                        0{index + 1}
                      </span>

                      <p>{point}</p>

                    </div>

                  )
                )}

              </div>

              <div className="experience-stack">

                <span>REACT.JS</span>
                <span>JAVA</span>
                <span>SPRING BOOT</span>
                <span>MYSQL</span>
                <span>REST API</span>
                <span>GIT</span>

              </div>

            </article>

          </div>

          <div className="education-strip">

            <div className="education-number">
              EDU
            </div>

            <div>

              <small>
                B.E. COMPUTER SCIENCE AND ENGINEERING
              </small>

              <h3>
                Dr. ACS College of Engineering
              </h3>

              <p>
                Bengaluru · 2023 — 2026
              </p>

            </div>

            <strong>8.00</strong>

          </div>

        </section>

        {/* PROJECTS */}

        <section id="projects" className="section projects">

          <div className="section-heading project-heading">

            <span className="section-number">04</span>

            <div>

              <small>SELECTED WORK</small>

              <h2>
                Things I've
                <br />
                actually shipped.
              </h2>

            </div>

            <p>
              End-to-end applications demonstrating frontend,
              backend, authentication, database design, testing
              and deployment.
            </p>

          </div>

          <div className="projects-list">

            {PROJECTS.map((project) => (

              <article
                className="project-showcase"
                key={project.number}
              >

                <div className="project-index">

                  <span>
                    {project.number}
                  </span>

                  <small>
                    {project.year}
                  </small>

                </div>

                <div className="project-main-info">

                  <div className="project-category">
                    {project.category}
                  </div>

                  <h3>{project.title}</h3>

                  <h4>{project.subtitle}</h4>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-stack">

                    {project.stack
                      .split(" · ")
                      .map((item) => (
                        <span key={item}>
                          {item}
                        </span>
                      ))}

                  </div>

                </div>

                <div className="project-details">

                  <div className="project-points">

                    <small>
                      WHAT I BUILT
                    </small>

                    {project.points.map(
                      (point, index) => (

                        <div key={point}>

                          <span>
                            0{index + 1}
                          </span>

                          <p>{point}</p>

                        </div>

                      )
                    )}

                  </div>

                  <div className="project-links">

                    <div className="render-warning">

                      <span>⚠</span>

                      <p>

                        <strong>
                          START BACKEND FIRST
                        </strong>

                        <br />

                        The backend is deployed on Render
                        and may sleep on the free tier.
                        Open the backend first and wait
                        around 30–50 seconds for it to wake
                        up, then open the frontend.

                      </p>

                    </div>

                    <div className="project-buttons">

                      <a
                        href={project.backend}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link backend"
                      >
                        BACKEND
                        <Arrow />
                      </a>

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link live"
                      >
                        LIVE FRONTEND
                        <Arrow />
                      </a>

                    </div>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </section>

        {/* CERTIFICATIONS */}

        <section className="section certifications">

          <div className="section-heading">

            <span className="section-number">05</span>

            <div>

              <small>CREDENTIALS</small>

              <h2>
                Learning
                <br />
                never stops.
              </h2>

            </div>

          </div>

          <div className="cert-grid">

            <article className="cert-card">

              <span>01</span>

              <small>
                INFOSYS SPRINGBOARD
              </small>

              <h3>
                Java Programming Fundamentals
              </h3>

              <div>JAVA</div>

            </article>

            <article className="cert-card">

              <span>02</span>

              <small>
                INFOSYS SPRINGBOARD
              </small>

              <h3>
                Introduction to Java
              </h3>

              <div>JAVA</div>

            </article>

          </div>

        </section>

        {/* CONTACT */}

        <section
          id="contact"
          className="contact-section"
        >

          <div className="contact-glow" />

          <div className="contact-content">

            <span className="contact-label">
              06 / CONTACT
            </span>

            <h2>
              Let's build
              <br />
              something <span>real.</span>
            </h2>

            <p>
              Looking for opportunities to build
              production-grade web applications and
              contribute as a Full Stack or Frontend
              Developer.
            </p>

            {/* CONTACT CARDS */}

            <div className="social-links">

              <a
                href="tel:7337634886"
                className="social-card"
              >
                <span>PHONE</span>
                <strong>7337634886</strong>
                <Arrow />
              </a>

              <a
                href="mailto:Srinivasrahul838@gmail.com"
                className="social-card"
              >
                <span>EMAIL</span>
                <strong>Srinivasrahul838@gmail.com</strong>
                <Arrow />
              </a>

              <a
                href="https://github.com/RAHUL2525252525"
                target="_blank"
                rel="noreferrer"
                className="social-card"
              >
                <span>GITHUB</span>
                <strong>RAHUL2525252525</strong>
                <Arrow />
              </a>

              <a
                href="https://www.linkedin.com/in/rahul-s-6460b1238"
                target="_blank"
                rel="noreferrer"
                className="social-card"
              >
                <span>LINKEDIN</span>
                <strong>RAHUL S.</strong>
                <Arrow />
              </a>

            </div>

            <div className="contact-meta">

              <span>RAHUL S</span>

              <span>
                BENGALURU, INDIA
              </span>

              <span>2026</span>

            </div>

          </div>

        </section>

      </main>

      <footer className="footer">

        <span>
          RAHUL.S / JAVA FULL STACK DEVELOPER
        </span>

        <span>
          BUILT WITH REACT.JS
        </span>

        <span>
          © 2026
        </span>

      </footer>

    </div>
  );
}

export default App;
