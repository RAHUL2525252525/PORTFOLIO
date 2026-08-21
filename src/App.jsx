import React, { useEffect, useState } from "react";
import "./index.css";

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

      {/* NAVIGATION */}

      <header className="topbar">

        <button
          className="brand"
          onClick={() => navigate("home")}
          aria-label="Go home"
        >
          <span className="brand-symbol">RS</span>

          <span className="brand-copy">
            <strong>RAHUL S.</strong>
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
              <span>0{index + 1}</span>
              {label}
            </button>
          ))}
        </nav>

        <a
          className="top-contact"
          href="mailto:Srinivasrahul838@gmail.com"
        >
          <span>LET'S TALK</span>
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

              <div className="live-line">
                <span className="live-dot" />
                AVAILABLE FOR OPPORTUNITIES
              </div>

              <div className="hero-index">
                <span>01</span>
                <i />
                INIT.PORTFOLIO_2026
              </div>

              <p className="hero-kicker">
                JAVA FULL STACK DEVELOPER
              </p>

              <h1>
                I BUILD
                <br />
                <span>EXPERIENCES</span>
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

              <div className="visual-label label-top">
                <span>PROFILE_NODE</span>
                <b>ONLINE</b>
              </div>

              <div className="orbit-system">

                <div className="orbit orbit-a" />
                <div className="orbit orbit-b" />
                <div className="orbit orbit-c" />

                <div className="orbit-dot dot-one" />
                <div className="orbit-dot dot-two" />
                <div className="orbit-dot dot-three" />

                <div className="portrait-frame">
                  <div className="portrait-glow" />

                  <img
                    src="/rahul-profile.jpg"
                    alt="Rahul S"
                    className="profile-image"
                  />
                </div>

                <div className="portrait-tag">
                  <span>R.S</span>
                  <small>2026</small>
                </div>

              </div>

              <div className="visual-label label-bottom">
                <span>STATUS</span>
                <b>BUILDING / DEPLOYING</b>
              </div>

              <div className="code-float">
                <span>// candidate_profile</span>
                <strong>&gt; whoami</strong>
                <p>Java Full Stack Developer</p>
                <small>JAVA · REACT · SPRING · MYSQL</small>
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

        {/* ABOUT */}

        <section id="about" className="section about">

          <div className="section-heading">

            <span className="section-number">01</span>

            <div>
              <small>// ABOUT ME</small>

              <h2>
                Know Me
                <br />
                Better_
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
                <small>INFO / RAHUL.S</small>
              </div>

              <div className="terminal-body">

                <p>
                  <b>//</b> PROFILE_INFORMATION
                </p>

                <div className="terminal-json">

                  <span>
                    <i>Name:</i> Rahul S.
                  </span>

                  <span>
                    <i>Role:</i> Full Stack Developer
                  </span>

                  <span>
                    <i>Experience:</i> 2026
                  </span>

                  <span>
                    <i>Frontend:</i> React.js
                  </span>

                  <span>
                    <i>Backend:</i> Java + Spring Boot
                  </span>

                  <span>
                    <i>Database:</i> MySQL
                  </span>

                  <span>
                    <i>Security:</i> JWT + RBAC
                  </span>

                  <span>
                    <i>Location:</i> Bengaluru, India
                  </span>

                </div>

                <p className="terminal-success">
                  <b>✓</b> PROFILE LOADED
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
              <small>// SKILLS</small>

              <h2>
                My Skills_
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
              <small>// EXPERIENCE</small>

              <h2>
                My Journey_
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

              <small>// PROJECTS</small>

              <h2>
                My Projects_
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

              <small>// CREDENTIALS</small>

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
              // CONTACT
            </span>

            <h2>
              Get In
              <br />
              <span>Touch_</span>
            </h2>

            <p>
              Looking for opportunities to build
              production-grade web applications and
              contribute as a Full Stack or Frontend
              Developer.
            </p>

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
