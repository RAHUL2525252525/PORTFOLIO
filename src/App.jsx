import React, { useEffect, useState } from "react";
import "./index.css";

const BACKEND_URL = "https://banksphere-backend-b96m.onrender.com";
const FRONTEND_URL = "https://banksphere-frontend.vercel.app";

/*
  Online cinematic background.
  No video file is required in your project.
*/
const VIDEO_URL =
  "https://cdn.coverr.co/videos/coverr-futuristic-city-1573/1080p.mp4";

const skills = {
  Languages: ["Java", "JavaScript (ES6+)", "SQL", "HTML5", "CSS3"],
  Frameworks: [
    "Spring Boot",
    "Spring MVC",
    "Spring Security",
    "Spring Data JPA",
    "Hibernate",
    "React.js",
    "Axios",
  ],
  "APIs & Security": [
    "REST API Design",
    "JWT Authentication",
    "Role-Based Access Control (RBAC)",
    "OAuth concepts",
  ],
  Databases: [
    "MySQL",
    "SQL",
    "Database Design",
    "Normalization",
    "Relational Data Modeling",
  ],
  Architecture: [
    "Layered Architecture",
    "MVC",
    "Exception Handling",
    "DTO Pattern",
  ],
  "Cloud & DevOps": [
    "Docker",
    "Docker Compose",
    "Maven",
    "Git",
    "GitHub",
    "CI/CD basics",
    "Vercel",
    "Render",
    "Aiven",
  ],
  "Testing & Practices": [
    "JUnit 5",
    "Mockito",
    "Postman",
    "Agile / Scrum",
    "Code Reviews",
    "Unit Testing",
  ],
  "Core CS": [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (OOP)",
    "DBMS",
    "Software Engineering Principles",
  ],
};

function App() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const goTo = (id) => {
    setMenuOpen(false);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="site">

      {/* =====================================================
          VIDEO BACKGROUND
      ====================================================== */}

      <video
        className="bg-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      <div className="video-dark"></div>
      <div className="video-color"></div>
      <div className="scanlines"></div>

      {/* =====================================================
          NAVIGATION
      ====================================================== */}

      <header className="topbar">

        <button
          className="brand"
          onClick={() => goTo("home")}
          aria-label="Go home"
        >
          <span className="brand-symbol">
            R
          </span>

          <span className="brand-text">
            RAHUL<span>S</span>
          </span>
        </button>

        <nav className={menuOpen ? "navigation open" : "navigation"}>

          {[
            ["home", "HOME"],
            ["about", "ABOUT"],
            ["skills", "SKILLS"],
            ["experience", "EXPERIENCE"],
            ["projects", "PROJECTS"],
            ["contact", "CONTACT"],
          ].map(([id, label]) => (
            <button
              key={id}
              className={active === id ? "nav-active" : ""}
              onClick={() => goTo(id)}
            >
              <span>0{id === "home" ? "1" : id === "about" ? "2" : id === "skills" ? "3" : id === "experience" ? "4" : id === "projects" ? "5" : "6"}</span>
              {label}
            </button>
          ))}

        </nav>

        <div className="top-status">
          <i></i>
          OPEN TO WORK
        </div>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
        </button>

      </header>

      {/* =====================================================
          MAIN
      ====================================================== */}

      <main>

        {/* ===================================================
            HERO
        ==================================================== */}

        <section id="home" className="hero">

          <div className="hero-grid"></div>

          <div className="hero-content">

            <div className="hero-tag">
              <span className="pulse"></span>
              SOFTWARE ENGINEER
            </div>

            <h1>
              RAHUL
              <span className="outlined">S.</span>
            </h1>

            <div className="hero-subtitle">
              JAVA <span>/</span> SPRING BOOT <span>/</span> REACT
            </div>

            <p className="hero-summary">
              Software Engineer with hands-on experience building full-stack
              web applications using Java, Spring Boot, and React.js.
            </p>

            <div className="hero-buttons">

              <button
                className="neon-button"
                onClick={() => goTo("projects")}
              >
                <span>EXPLORE WORK</span>
                <b>↗</b>
              </button>

              <button
                className="ghost-button"
                onClick={() => goTo("contact")}
              >
                CONTACT ME
              </button>

            </div>

          </div>

          {/* PROFILE */}

          <div className="hero-profile">

            <div className="profile-label label-top">
              <span>IDENTITY</span>
              <b>RAHUL S</b>
            </div>

            <div className="profile-orb">

              <div className="orb-ring ring-a"></div>
              <div className="orb-ring ring-b"></div>
              <div className="orb-ring ring-c"></div>

              <div className="profile-photo-wrap">

                <img
                  src="/profile.jpg"
                  alt="Rahul S"
                  className="profile-photo"
                />

                <div className="photo-glow"></div>

              </div>

              <div className="orb-cross cross-one"></div>
              <div className="orb-cross cross-two"></div>

            </div>

            <div className="profile-label label-bottom">
              <span>LOCATION</span>
              <b>BENGALURU / INDIA</b>
            </div>

          </div>

          <div className="hero-corner">
            <span>SCROLL</span>
            <div></div>
            <span>↓</span>
          </div>

          <div className="hero-index">
            01 <span>/</span> 06
          </div>

        </section>

        {/* ===================================================
            ABOUT
        ==================================================== */}

        <section id="about" className="section about">

          <div className="section-head">
            <span>02</span>
            <p>ABOUT</p>
            <div></div>
          </div>

          <div className="about-layout">

            <div className="section-title">

              <small>PROFILE</small>

              <h2>
                BUILDING
                <br />
                <span>WITH PURPOSE.</span>
              </h2>

            </div>

            <div className="about-copy">

              <p className="big-copy">
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
                (JUnit, Mockito), and version control (Git). Strong foundation
                in data structures, algorithms, and object-oriented design.
              </p>

              <div className="about-counters">

                <div>
                  <strong>8.00</strong>
                  <span>CGPA / 10</span>
                </div>

                <div>
                  <strong>2026</strong>
                  <span>GRADUATION</span>
                </div>

                <div>
                  <strong>01</strong>
                  <span>INTERNSHIP</span>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================
            SKILLS
        ==================================================== */}

        <section id="skills" className="section skills">

          <div className="section-head">
            <span>03</span>
            <p>TECH STACK</p>
            <div></div>
          </div>

          <div className="skills-intro">

            <div>
              <small>TECHNICAL SKILLS</small>

              <h2>
                THE
                <br />
                <span>STACK.</span>
              </h2>
            </div>

            <p>
              Technologies, frameworks, architecture patterns and development
              practices from my professional toolkit.
            </p>

          </div>

          <div className="skills-matrix">

            {Object.entries(skills).map(([category, items], index) => (
              <div className="skill-card" key={category}>

                <div className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3>{category}</h3>

                <div className="skill-list">

                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}

                </div>

              </div>
            ))}

          </div>

        </section>

        {/* ===================================================
            EXPERIENCE
        ==================================================== */}

        <section id="experience" className="section experience">

          <div className="section-head">
            <span>04</span>
            <p>EXPERIENCE</p>
            <div></div>
          </div>

          <div className="experience-layout">

            <div className="experience-date">
              <span>01 / 2026</span>
              <div></div>
              <span>05 / 2026</span>
            </div>

            <div className="experience-main">

              <div className="experience-heading">

                <div>
                  <small>WEB DEVELOPMENT INTERN</small>

                  <h2>
                    MR TECH
                    <br />
                    <span>LAB</span>
                  </h2>
                </div>

                <span className="location">
                  BENGALURU
                  <br />
                  KARNATAKA
                </span>

              </div>

              <div className="experience-line"></div>

              <div className="experience-points">

                <div>
                  <span>01</span>
                  <p>
                    Built responsive, cross-browser user interfaces using
                    HTML, CSS, and JavaScript, translating design requirements
                    into functional web pages.
                  </p>
                </div>

                <div>
                  <span>02</span>
                  <p>
                    Integrated Firebase backend services, including Google
                    Authentication, to implement secure user sign-in and
                    session management.
                  </p>
                </div>

                <div>
                  <span>03</span>
                  <p>
                    Collaborated with cross-functional teammates in an Agile,
                    Git-based workflow to implement, test, and ship UI features
                    on schedule.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================
            PROJECTS
        ==================================================== */}

        <section id="projects" className="section projects">

          <div className="section-head">
            <span>05</span>
            <p>SELECTED PROJECTS</p>
            <div></div>
          </div>

          <div className="projects-intro">

            <h2>
              SELECTED
              <br />
              <span>WORK.</span>
            </h2>

            <p>
              Full-stack applications developed using Java, Spring Boot,
              React.js, MySQL, REST APIs, Spring Security and Docker.
            </p>

          </div>

          {/* SHOPSPHERE */}

          <article className="project project-purple">

            <div className="project-glow"></div>

            <div className="project-number">
              PROJECT
              <strong>01</strong>
            </div>

            <div className="project-content">

              <div className="project-meta">
                05 / 2026 — 06 / 2026
              </div>

              <h3>
                Shop
                <span>Sphere</span>
              </h3>

              <p className="project-type">
                FULL STACK E-COMMERCE WEB APPLICATION
              </p>

              <p className="project-description">
                Architected a full-stack e-commerce platform spanning 6 core
                modules: browsing, search, cart, wishlist, checkout, and
                order management using layered controller/service/repository
                design.
              </p>

              <div className="project-details">

                <div>
                  <span>ROLE BASED ACCESS</span>
                  <p>ADMIN / CUSTOMER</p>
                </div>

                <div>
                  <span>REST APIS</span>
                  <p>15+ ENDPOINTS</p>
                </div>

                <div>
                  <span>UI</span>
                  <p>RESPONSIVE REACT</p>
                </div>

              </div>

              <div className="project-tech-row">
                <span>JAVA 17</span>
                <span>SPRING BOOT 3</span>
                <span>REACT.JS</span>
                <span>SPRING DATA JPA</span>
                <span>MYSQL</span>
                <span>REST APIs</span>
              </div>

            </div>

          </article>

          {/* BANKSPHERE */}

          <article className="project project-cyan">

            <div className="project-glow"></div>

            <div className="project-number">
              PROJECT
              <strong>02</strong>
            </div>

            <div className="project-content">

              <div className="project-meta">
                06 / 2026 — 07 / 2026
              </div>

              <h3>
                Online
                <span>Banking</span>
              </h3>

              <p className="project-type">
                FULL STACK BANKING APPLICATION
              </p>

              <p className="project-description">
                Developed a secure banking backend supporting user
                registration, login, account management, and transaction
                workflows.
              </p>

              <div className="project-details">

                <div>
                  <span>AUTHENTICATION</span>
                  <p>STATELESS JWT</p>
                </div>

                <div>
                  <span>ACCESS CONTROL</span>
                  <p>3 PERMISSION LEVELS</p>
                </div>

                <div>
                  <span>DATABASE</span>
                  <p>8+ ENTITIES</p>
                </div>

              </div>

              <div className="project-tech-row">
                <span>JAVA 17</span>
                <span>SPRING BOOT 3</span>
                <span>SPRING SECURITY</span>
                <span>REACT.JS</span>
                <span>MYSQL</span>
                <span>DOCKER</span>
              </div>

              <div className="project-links">

                <a
                  href={FRONTEND_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>LIVE FRONTEND</span>
                  ↗
                </a>

                <a
                  href={BACKEND_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>BACKEND</span>
                  ↗
                </a>

              </div>

              <div className="render-note">

                <div className="render-icon">!</div>

                <div>
                  <strong>RENDER BACKEND</strong>

                  <p>
                    The backend is deployed on Render and may sleep after
                    inactivity. Start/wake the backend first and wait a few
                    seconds before using the frontend.
                  </p>
                </div>

              </div>

            </div>

          </article>

        </section>

        {/* ===================================================
            EDUCATION
        ==================================================== */}

        <section className="section education">

          <div className="section-head">
            <span>06</span>
            <p>EDUCATION & CERTIFICATION</p>
            <div></div>
          </div>

          <div className="education-layout">

            <div className="education-card">

              <small>2023 — 2026</small>

              <h2>
                B.E.
                <br />
                <span>COMPUTER SCIENCE</span>
              </h2>

              <p>
                Dr. ACS College of Engineering
                <br />
                Bengaluru, Karnataka
              </p>

              <div className="cgpa">
                <strong>8.00</strong>
                <span>/ 10 CGPA</span>
              </div>

            </div>

            <div className="certifications">

              <small>CERTIFICATIONS</small>

              <div className="certificate">
                <span>01</span>
                <p>
                  Java Programming Fundamentals
                  <small>Infosys Springboard</small>
                </p>
                <b>↗</b>
              </div>

              <div className="certificate">
                <span>02</span>
                <p>
                  Introduction to Java
                  <small>Infosys Springboard</small>
                </p>
                <b>↗</b>
              </div>

            </div>

          </div>

        </section>

        {/* ===================================================
            CONTACT
        ==================================================== */}

        <section id="contact" className="section contact">

          <div className="contact-grid">

            <div>

              <small>GET IN TOUCH</small>

              <h2>
                LET'S
                <br />
                <span>CONNECT.</span>
              </h2>

            </div>

            <div className="contact-info">

              <p>
                Interested in opportunities where I can contribute as a
                Software Engineer or Frontend Developer.
              </p>

              <a
                className="email"
                href="mailto:Srinivasrahul838@gmail.com"
              >
                Srinivasrahul838@gmail.com
                <span>↗</span>
              </a>

              <a
                className="phone"
                href="tel:7337634886"
              >
                +91 7337634886
              </a>

              <div className="contact-social">

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LINKEDIN ↗
                </a>

                <a
                  href="https://github.com/RAHUL2525252525"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GITHUB ↗
                </a>

              </div>

            </div>

          </div>

        </section>

      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer>

        <div>
          RAHUL S. / SOFTWARE ENGINEER
        </div>

        <div className="footer-center">
          <span></span>
          BENGALURU / INDIA
        </div>

        <div>
          © 2026
        </div>

      </footer>

    </div>
  );
}

export default App;
