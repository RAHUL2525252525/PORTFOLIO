import React, { useEffect, useRef, useState } from "react";

import ShopSphere from "./projects/ShopSphere";
import BankSphere from "./projects/BankSphere";
import LifeDecisionAssistant from "./projects/LifeDecisionAssistant";
import AIExamCompanion from "./projects/AIExamCompanion";
import DigitalAnalyticsDashboard from "./projects/DigitalAnalyticsDashboard";

import "./index.css";

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
   HASH ROUTING
   ========================================================= */

function useHashRoute() {
  const getRoute = () =>
    window.location.hash.replace(/^#\/?/, "").toLowerCase();

  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const onHashChange = () => {
      setRoute(getRoute());

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return route;
}

/* =========================================================
   SCROLL REVEAL
   ========================================================= */

function Reveal({
  children,
  as: Tag = "div",
  className = "",
  ...rest
}) {
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
   MAIN APP
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="nav-container">

        <a href="#" className="nav-logo">
          <span className="logo-name">RAHUL</span>
          <span className="logo-dot">.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-contact">
          Let's Talk
          <span>↗</span>
        </a>

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

      <div className="hero-grid-background" />

      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-content">

        <Reveal className="hero-topline">
          <span className="hero-line" />
          <span>SOFTWARE ENGINEER</span>
        </Reveal>

        <div className="hero-main">

          <Reveal className="hero-copy">

            <p className="hero-eyebrow">
              JAVA FULL STACK · SPRING BOOT · REACT
            </p>

            <h1>
              Rahul
              <br />
              <span>S.</span>
            </h1>

            <p className="hero-title">
              Software Engineer
            </p>

            <p className="hero-description">
              I build reliable full-stack applications with
              <strong> Java, Spring Boot and React.js</strong> —
              from database design and secure REST APIs to
              production-ready interfaces.
            </p>

            <div className="hero-actions">

              <a
                href="#projects"
                className="hero-primary-button"
              >
                View Projects
                <span>↗</span>
              </a>

              <a
                href="#contact"
                className="hero-secondary-button"
              >
                Contact Me
              </a>

            </div>

            <div className="hero-meta">

              <span>
                <i />
                Bengaluru, India
              </span>

              <span>
                Open to opportunities
              </span>

            </div>

          </Reveal>

          <Reveal className="hero-profile-area">

            <div className="profile-orbit orbit-one" />
            <div className="profile-orbit orbit-two" />

            <div className="profile-decoration profile-decoration-one" />
            <div className="profile-decoration profile-decoration-two" />

            <div className="profile-frame">

              <div className="profile-inner">

                <img
                  src="/rahul-profile.jpg"
                  alt="Rahul S"
                  className="profile-image"
                />

              </div>

            </div>

            <div className="profile-number">
              01
            </div>

          </Reveal>

        </div>

        <div className="hero-bottom">

          <span>SCROLL TO EXPLORE</span>

          <div className="scroll-line">
            <span />
          </div>

          <span>2026</span>

        </div>

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

          <div className="section-kicker">
            <span>01</span>
            ABOUT ME
          </div>

          <h2 className="massive-title">
            Engineer first.
            <br />
            <span>Builder always.</span>
          </h2>

        </Reveal>

        <div className="about-layout">

          <Reveal className="about-main">

            <p className="about-lead">
              I'm a Java-focused Software Engineer who enjoys
              taking ownership of features from architecture to
              interface.
            </p>

            <p>
              My strongest hands-on experience is with Java,
              Spring Boot, Spring Security, REST APIs, React.js
              and relational databases. I've built structured
              systems including e-commerce and banking
              applications with authentication, authorization,
              validation and layered backend architecture.
            </p>

            <p>
              During my internship, I also built web applications
              using Python/Flask and Firebase and worked with
              AI APIs. Python is an additional hands-on skill
              alongside my primary Java full-stack focus.
            </p>

          </Reveal>

          <Reveal className="about-stats">

            <div className="stat-card">
              <strong>2+</strong>
              <span>JAVA FULL-STACK SYSTEMS</span>
            </div>

            <div className="stat-card">
              <strong>15+</strong>
              <span>REST API ENDPOINTS</span>
            </div>

            <div className="stat-card">
              <strong>3</strong>
              <span>PYTHON / FLASK APPS</span>
            </div>

            <div className="stat-card">
              <strong>8+</strong>
              <span>RELATIONAL ENTITIES</span>
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
      title: "JAVA ENGINEERING",
      description:
        "Primary development stack for full-stack applications.",
      items: [
        "Java 17",
        "Spring Boot",
        "Spring MVC",
        "Spring Security",
        "Spring Data JPA",
        "Hibernate",
        "Maven",
      ],
    },

    {
      number: "02",
      title: "FRONTEND",
      description:
        "Responsive interfaces and API-driven web applications.",
      items: [
        "React.js",
        "JavaScript ES6+",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Tailwind CSS",
        "Axios",
      ],
    },

    {
      number: "03",
      title: "APIs & ARCHITECTURE",
      description:
        "Structured backend systems with secure API design.",
      items: [
        "REST API Design",
        "JWT Authentication",
        "RBAC",
        "MVC",
        "Layered Architecture",
        "DTO Pattern",
        "Exception Handling",
        "Microservices",
      ],
    },

    {
      number: "04",
      title: "DATABASES",
      description:
        "Relational and document database fundamentals.",
      items: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "SQL",
        "DBMS",
        "Normalization",
        "Relational Modeling",
      ],
    },

    {
      number: "05",
      title: "CLOUD & DEVOPS",
      description:
        "Deployment, containerization and development workflows.",
      items: [
        "Docker",
        "Docker Compose",
        "Git",
        "GitHub",
        "GitHub Actions",
        "CI/CD",
        "AWS EC2",
        "AWS S3",
        "Vercel",
        "Render",
        "Aiven",
      ],
    },

    {
      number: "06",
      title: "TESTING & ENGINEERING",
      description:
        "Quality-focused development and team practices.",
      items: [
        "JUnit 5",
        "Mockito",
        "Postman",
        "Unit Testing",
        "Agile / Scrum",
        "Code Reviews",
        "DSA",
        "OOP",
        "Software Engineering",
      ],
    },

    {
      number: "07",
      title: "PYTHON — HANDS-ON",
      description:
        "Additional hands-on experience from internship projects.",
      items: [
        "Python",
        "Flask",
        "Firebase",
        "Groq API",
        "Gemini API",
        "OpenRouter API",
      ],
    },
  ];

  return (
    <section id="skills" className="section skills-section">

      <div className="section-container">

        <Reveal>

          <div className="section-kicker">
            <span>02</span>
            TECHNICAL SKILLS
          </div>

          <h2 className="massive-title">
            Tools I use to
            <br />
            <span>ship software.</span>
          </h2>

        </Reveal>

        <div className="skills-list">

          {groups.map((group) => (

            <Reveal
              key={group.title}
              className="skill-row"
            >

              <div className="skill-number">
                {group.number}
              </div>

              <div className="skill-heading">

                <h3>{group.title}</h3>

                <p>
                  {group.description}
                </p>

              </div>

              <div className="skill-items">

                {group.items.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}

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
    <section
      id="experience"
      className="section experience-section"
    >

      <div className="section-container">

        <Reveal>

          <div className="section-kicker">
            <span>03</span>
            EXPERIENCE
          </div>

          <h2 className="massive-title">
            Where I learned
            <br />
            <span>to build.</span>
          </h2>

        </Reveal>

        <Reveal className="experience-main-card">

          <div className="experience-top">

            <div>

              <span className="experience-type">
                INTERNSHIP
              </span>

              <h3>
                Web Development Intern
              </h3>

              <p className="experience-company">
                MR Tech Lab · Bengaluru
              </p>

            </div>

            <span className="experience-date">
              JAN 2026 — MAY 2026
            </span>

          </div>

          <div className="experience-divider" />

          <div className="experience-content">

            <div className="experience-summary">

              Owned end-to-end development of full-stack
              modules and independently shipped web
              applications during the internship.

            </div>

            <ul>

              <li>
                Owned end-to-end development of 2+ full-stack
                modules using React.js, Java, Spring Boot and
                MySQL.
              </li>

              <li>
                Designed and developed responsive web
                interfaces using HTML, CSS and JavaScript,
                translating requirements into functional
                application features.
              </li>

              <li>
                Independently designed and shipped 3 Python /
                Flask web applications with Firebase
                authentication.
              </li>

              <li>
                Integrated Firebase Authentication and
                implemented secure user session flows while
                resolving authentication issues identified
                during testing and QA.
              </li>

              <li>
                Worked with external APIs including AI/API
                integrations and connected frontend applications
                with backend services.
              </li>

              <li>
                Collaborated using Git and an Agile development
                workflow across multiple development sprints.
              </li>

            </ul>

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
    category: "JAVA · FULL STACK",
    name: "ShopSphere",

    // FILE IS DIRECTLY INSIDE public/
    image: "/1.png.png",

    description:
      "A complete e-commerce platform built with Java and Spring Boot, covering products, cart, wishlist, checkout and order workflows.",

    highlight:
      "6 modules · 15+ validated REST endpoints",

    tech: [
      "Java 17",
      "Spring Boot 3",
      "React.js",
      "Spring Data JPA",
      "MySQL",
    ],
  },

  {
    route: "banksphere",
    number: "02",
    category: "JAVA · SECURITY",
    name: "BankSphere",

    // FILE IS DIRECTLY INSIDE public/
    image: "/14.png.png",

    description:
      "A secure online banking application with JWT authentication, role-based authorization and transaction workflows.",

    highlight:
      "JWT security · 3 permission tiers",

    tech: [
      "Java 17",
      "Spring Boot",
      "Spring Security",
      "React.js",
      "MySQL",
      "Docker",
    ],
  },

  {
    route: "aiexamcompanion",
    number: "03",
    category: "PYTHON · AI",
    name: "AI Exam Companion",

    // FILE IS DIRECTLY INSIDE public/
    image: "/32.png",

    description:
      "An AI-powered learning application that generates practice questions and manages exam preparation sessions.",

    highlight:
      "AI-generated practice question sets",

    tech: [
      "Python",
      "Flask",
      "MongoDB",
      "Groq API",
    ],
  },

  {
    route: "lifedecisionassistant",
    number: "04",
    category: "PYTHON · AI",
    name: "Life Decision Assistant",

    // FILE IS DIRECTLY INSIDE public/
    image: "/24.png",

    description:
      "An AI decision-support application that connects multiple LLM providers through a unified Flask backend.",

    highlight:
      "3 LLM providers behind one API",

    tech: [
      "Python",
      "Flask",
      "Firebase",
      "Groq API",
      "Gemini API",
      "OpenRouter",
    ],
  },

  {
    route: "digitalanalyticsdashboard",
    number: "05",
    category: "JAVASCRIPT · FIREBASE",
    name: "Digital Analytics Dashboard",

    // FILE IS DIRECTLY INSIDE public/
    image: "/38.png",

    description:
      "A modern analytics dashboard with Google OAuth authentication and Firebase-backed usage data.",

    highlight:
      "Google OAuth · Firebase backend",

    tech: [
      "JavaScript",
      "Firebase",
      "Google OAuth",
      "Chart.js",
    ],
  },

];

/* =========================================================
   PROJECTS
   ========================================================= */

function Projects() {

  const openProject = (route) => {
    window.location.hash = `/${route}`;
  };

  return (
    <section
      id="projects"
      className="section projects-section"
    >

      <div className="section-container">

        <Reveal>

          <div className="section-kicker">
            <span>04</span>
            SELECTED PROJECTS
          </div>

          <h2 className="massive-title">
            Things I've
            <br />
            <span>actually built.</span>
          </h2>

          <p className="projects-intro">
            My strongest work is centered around Java full-stack
            development. Python projects represent additional
            hands-on experience from my web development work.
          </p>

        </Reveal>

        <div className="projects-showcase">

          {PROJECTS.map((project) => (

            <Reveal
              key={project.route}
              className="project-showcase-card"
            >

              <button
                className="project-visual"
                onClick={() => openProject(project.route)}
                aria-label={`Open ${project.name}`}
              >

                <img
                  src={project.image}
                  alt={`${project.name} project preview`}
                  loading="lazy"
                  onError={(e) => {
                    console.error(
                      `Image not found: ${project.image}`
                    );
                  }}
                />

                <div className="project-image-shade" />

                <div className="project-image-top">

                  <span>
                    {project.number}
                  </span>

                  <span>
                    {project.category}
                  </span>

                </div>

                <div className="project-view">

                  <span>
                    VIEW PROJECT
                  </span>

                  <strong>
                    ↗
                  </strong>

                </div>

              </button>

              <div className="project-information">

                <div className="project-title-line">

                  <h3>
                    {project.name}
                  </h3>

                  <span>
                    {project.number}
                  </span>

                </div>

                <p>
                  {project.description}
                </p>

                <div className="project-highlight">

                  <span />

                  {project.highlight}

                </div>

                <div className="project-tech-list">

                  {project.tech.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}

                </div>

                <button
                  className="project-open-button"
                  onClick={() => openProject(project.route)}
                >
                  Explore case study
                  <span>→</span>
                </button>

              </div>

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
    <section
      id="education"
      className="section education-section"
    >

      <div className="section-container">

        <Reveal>

          <div className="section-kicker">
            <span>05</span>
            EDUCATION
          </div>

          <h2 className="massive-title">
            Foundation for
            <br />
            <span>engineering.</span>
          </h2>

        </Reveal>

        <Reveal className="education-main">

          <div className="education-year">
            2026
          </div>

          <div className="education-info">

            <span>
              B.E.
            </span>

            <h3>
              Computer Science and Engineering
            </h3>

            <p>
              Dr. ACS College of Engineering
            </p>

            <div className="education-bottom">

              <span>
                Bengaluru, Karnataka
              </span>

              <strong>
                CGPA 8.00 / 10
              </strong>

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

  const certifications = [
    {
      number: "01",
      title: "Java Full Stack Development",
      description:
        "Full-stack application development with Java ecosystem technologies.",
    },

    {
      number: "02",
      title: "Spring Boot & REST APIs",
      description:
        "Backend development, REST architecture and service design.",
    },

    {
      number: "03",
      title: "React.js Development",
      description:
        "Modern component-based frontend development.",
    },

    {
      number: "04",
      title: "SQL & Database Design",
      description:
        "Relational modelling, normalization and database fundamentals.",
    },
  ];

  return (
    <section className="section certification-section">

      <div className="section-container">

        <Reveal>

          <div className="section-kicker">
            <span>06</span>
            CERTIFICATIONS
          </div>

          <h2 className="massive-title">
            Always
            <br />
            <span>learning.</span>
          </h2>

        </Reveal>

        <div className="certification-grid">

          {certifications.map((certificate) => (

            <Reveal
              key={certificate.number}
              className="certificate-item"
            >

              <span className="certificate-number">
                {certificate.number}
              </span>

              <div>

                <h3>
                  {certificate.title}
                </h3>

                <p>
                  {certificate.description}
                </p>

              </div>

              <span className="certificate-arrow">
                ↗
              </span>

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
    <section
      id="contact"
      className="contact-section"
    >

      <div className="contact-background">

        <div />
        <div />
        <div />

      </div>

      <Reveal className="contact-inner">

        <div className="section-kicker contact-kicker">

          <span>07</span>

          CONTACT

        </div>

        <h2>
          Have a problem
          <br />
          worth <span>building?</span>
        </h2>

        <p>
          I'm open to software engineering opportunities,
          full-stack projects and conversations around building
          reliable products.
        </p>

        <a
          href="mailto:Srinivasrahul838@gmail.com"
          className="contact-email"
        >
          Srinivasrahul838@gmail.com
          <span>↗</span>
        </a>

        <div className="contact-details">

          <span>
            +91 7337634886
          </span>

          <span>
            Bengaluru, India
          </span>

        </div>

        <div className="social-links">

          <a
            href="https://github.com/RAHUL2525252525"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a href="#projects">
            Projects ↗
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

      <div>
        RAHUL<span>.</span>
      </div>

      <p>
        Software Engineer · Java Full Stack
      </p>

      <span>
        © {new Date().getFullYear()}
      </span>

    </footer>
  );
}
