import React, { useEffect, useRef, useState } from "react";

import ShopSphere from "./projects/ShopSphere";
import BankSphere from "./projects/BankSphere";
import LifeDecisionAssistant from "./projects/LifeDecisionAssistant";
import AIExamCompanion from "./projects/AIExamCompanion";
import DigitalAnalyticsDashboard from "./projects/DigitalAnalyticsDashboard";

import "./index.css";

/* =========================================================
   PROJECT PREVIEW IMAGES
   ========================================================= */

import shopSphereImage from "./assets/projects/shopsphere/1.png.png";
import bankSphereImage from "./assets/projects/banksphere/14.png.png";
import lifeDecisionImage from "./assets/projects/lifedecisionassistant/24.png.png";
import aiExamImage from "./assets/projects/aiexamcompanion/32.png.png";
import digitalAnalyticsImage from "./assets/projects/digitalanalyticsdashboard/38.png.png";

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

function getHashRoute() {
  return window.location.hash.replace(/^#\/?/, "").toLowerCase();
}

function scrollToSection(route, smooth = true) {
  if (!route) {
    window.scrollTo({
      top: 0,
      behavior: smooth ? "smooth" : "auto",
    });
    return;
  }

  const section = document.getElementById(route);

  if (section) {
    section.scrollIntoView({
      behavior: smooth ? "smooth" : "auto",
      block: "start",
    });
  }
}

function useHashRoute() {
  const [route, setRoute] = useState(getHashRoute());

  useEffect(() => {
    const handleHashChange = () => {
      const newRoute = getHashRoute();

      setRoute(newRoute);

      if (ROUTES[newRoute]) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        return;
      }

      if (newRoute) {
        requestAnimationFrame(() => {
          scrollToSection(newRoute, true);
        });
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    const initialRoute = getHashRoute();

    if (initialRoute && !ROUTES[initialRoute]) {
      setTimeout(() => {
        scrollToSection(initialRoute, false);
      }, 50);
    }

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
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
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (event, sectionId) => {
    event.preventDefault();

    setMobileMenu(false);

    const currentHash = window.location.hash
      .replace(/^#\/?/, "")
      .toLowerCase();

    if (currentHash === sectionId) {
      scrollToSection(sectionId, true);
      return;
    }

    window.location.hash = `#${sectionId}`;
  };

  return (
    <nav
      className={`navbar ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="nav-container">
        <a
          href="#"
          className="nav-logo"
          onClick={(event) => {
            event.preventDefault();

            setMobileMenu(false);

            if (window.location.hash) {
              window.location.hash = "";
            } else {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }
          }}
        >
          <span className="logo-name">RAHUL</span>
          <span className="logo-dot">.</span>
        </a>

        <div
          className={`nav-links ${
            mobileMenu ? "mobile-open" : ""
          }`}
        >
          <a
            href="#about"
            onClick={(event) =>
              handleNavClick(event, "about")
            }
          >
            About
          </a>

          <a
            href="#skills"
            onClick={(event) =>
              handleNavClick(event, "skills")
            }
          >
            Skills
          </a>

          <a
            href="#experience"
            onClick={(event) =>
              handleNavClick(event, "experience")
            }
          >
            Experience
          </a>

          <a
            href="#projects"
            onClick={(event) =>
              handleNavClick(event, "projects")
            }
          >
            Projects
          </a>

          <a
            href="#education"
            onClick={(event) =>
              handleNavClick(event, "education")
            }
          >
            Education
          </a>

          <a
            href="#contact"
            onClick={(event) =>
              handleNavClick(event, "contact")
            }
          >
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="nav-contact"
          onClick={(event) =>
            handleNavClick(event, "contact")
          }
        >
          Let's Talk
          <span>↗</span>
        </a>

        <button
          type="button"
          className={`mobile-menu-button ${
            mobileMenu ? "active" : ""
          }`}
          onClick={() =>
            setMobileMenu((previous) => !previous)
          }
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenu}
        >
          <span />
          <span />
          <span />
        </button>
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
          <span>PYTHON DEVELOPER</span>
        </Reveal>

        <div className="hero-main">
          <Reveal className="hero-copy">
            <p className="hero-eyebrow">
              PYTHON · FASTAPI · DJANGO · REACT
            </p>

            <h1>
              Rahul
              <br />
              <span>S.</span>
            </h1>

            <p className="hero-title">
              Python Developer
            </p>

            <p className="hero-description">
              I build and ship full-stack applications with
              <strong>
                {" "}Python, FastAPI, Django and React.js
              </strong>{" "}
              — from REST APIs and database design to
              Dockerized, CI/CD-driven deployments.
            </p>

            <div className="hero-actions">
              <a
                href="#projects"
                className="hero-primary-button"
                onClick={(event) => {
                  event.preventDefault();
                  window.location.hash = "#projects";
                }}
              >
                View Projects
                <span>↗</span>
              </a>

              <a
                href="#contact"
                className="hero-secondary-button"
                onClick={(event) => {
                  event.preventDefault();
                  window.location.hash = "#contact";
                }}
              >
                Contact Me
              </a>
            </div>

            <div className="hero-meta">
              <span>
                <i />
                Bengaluru, India
              </span>

              <span>Open to opportunities</span>
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

            <div className="profile-number">01</div>
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
              I'm a Python developer with internship experience
              building and shipping full-stack applications.
            </p>

            <p>
              My hands-on experience spans REST APIs with
              FastAPI, Flask and Django, React.js frontends,
              relational databases and Dockerized deployments.
              I'm comfortable working across the stack — from
              database design to CI/CD — and I pick up new
              tools quickly on the job.
            </p>

            <p>
              During my internships I built full-stack e-commerce
              and analytics dashboard applications with
              authentication, role-based access control and
              Docker-based deployment, and I also worked on
              Artificial Intelligence, Machine Learning and Deep
              Learning projects using Keras, TensorFlow and CNNs.
            </p>
          </Reveal>

          <Reveal className="about-stats">
            <div className="stat-card">
              <strong>2+</strong>
              <span>PYTHON FULL-STACK SYSTEMS</span>
            </div>

            <div className="stat-card">
              <strong>15+</strong>
              <span>REST API ENDPOINTS</span>
            </div>

            <div className="stat-card">
              <strong>3</strong>
              <span>DJANGO / FASTAPI / FLASK APPS</span>
            </div>

            <div className="stat-card">
              <strong>3</strong>
              <span>INTERNSHIP EXPERIENCES</span>
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
      title: "LANGUAGES & FRONTEND",
      description:
        "Core language and interfaces for full-stack applications.",
      items: [
        "Python",
        "JavaScript",
        "React.js",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Axios",
        "React Router",
      ],
    },

    {
      number: "02",
      title: "BACKEND",
      description:
        "Structured backend systems with secure API design.",
      items: [
        "Django",
        "FastAPI",
        "Flask",
        "Pydantic",
        "SQLAlchemy",
        "REST APIs",
        "Microservices",
        "RBAC",
        "JWT Authentication",
      ],
    },

    {
      number: "03",
      title: "DATABASES",
      description:
        "Relational database design and management.",
      items: [
        "MySQL",
        "PostgreSQL",
        "MySQL Workbench",
      ],
    },

    {
      number: "04",
      title: "API & TESTING",
      description:
        "API documentation and quality-focused development.",
      items: [
        "Postman",
        "Swagger / OpenAPI",
        "Pytest",
        "JUnit",
        "Mockito",
      ],
    },

    {
      number: "05",
      title: "DATA & BI",
      description:
        "Data cleaning and business intelligence tooling.",
      items: [
        "Tableau",
        "Power BI",
        "Data Cleaning",
      ],
    },

    {
      number: "06",
      title: "DEVOPS & PRACTICES",
      description:
        "Deployment, containerization and development workflows.",
      items: [
        "Docker",
        "Docker Compose",
        "Git",
        "GitHub Actions",
        "CI/CD",
        "Agile",
        "Render",
        "Vercel",
      ],
    },

    {
      number: "07",
      title: "AI & DATA SCIENCE",
      description:
        "Additional hands-on experience from internships and AI projects.",
      items: [
        "Artificial Intelligence",
        "Machine Learning",
        "Deep Learning",
        "OpenCV",
        "Keras",
        "TensorFlow",
        "Firebase",
        "Groq API",
        "Gemini API",
      ],
    },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="section-container">
        <Reveal>
          <div className="section-kicker blue-kicker">
            <span>02</span>
            TECHNICAL SKILLS
          </div>

          <h2 className="massive-title light-title">
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

                <p>{group.description}</p>
              </div>

              <div className="skill-items">
                {group.items.map((skill) => (
                  <span key={skill}>{skill}</span>
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
  const experiences = [
    {
      type: "AI INTERNSHIP",
      role: "AI Intern",
      company: "AppMind AI (MR.TechLab LLP) · Bengaluru",
      date: "JAN 2026 — MAY 2026",
      summary:
        "Built two full-stack applications end-to-end, working with a small team from requirements through deployment.",
      points: [
        "Built two full-stack applications end-to-end (Shopora and Digital Analytics Dashboard), working with a small team from requirements through deployment.",
        "Picked up Firebase Auth, FastAPI and Docker on the job.",
        "Wrote and reviewed API docs with Swagger/OpenAPI for smooth frontend integration.",
      ],
    },

    {
      type: "AI & DATA SCIENCE INTERNSHIP",
      role: "AI & Data Science Intern — Software Dev Project",
      company:
        "Knowx Innovations (P) Ltd · Vijayanagar, Bangalore",
      date: "MAR 2023 — JUN 2023",
      summary:
        "Completed an advanced internship and software development project program focused on Artificial Intelligence, Machine Learning, Deep Learning and Data Science.",
      points: [
        "Built and evaluated CNN-based deep learning models in Keras and TensorFlow, including a VGG16 implementation, across multiple layer configurations.",
        "Applied core machine learning workflows — data preprocessing, training, evaluation — as part of a guided software development project.",
      ],
    },

    {
      type: "AI & DATA SCIENCE INTERNSHIP",
      role: "AI & Data Science Intern — Training",
      company:
        "Knowx Innovations (P) Ltd · Vijayanagar, Bangalore",
      date: "OCT 2022 — JAN 2023",
      summary:
        "Completed an internship focused on Artificial Intelligence, Data Science, Python programming, machine learning and cloud technologies.",
      points: [
        "Completed structured training in Python, SQL, machine learning algorithms, cloud computing basics, OpenCV, Keras and TensorFlow.",
        "Applied statistics and linear algebra fundamentals to explore and interpret real-world datasets.",
      ],
    },
  ];

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

        <div className="experience-list">
          {experiences.map((experience) => (
            <Reveal
              key={`${experience.company}-${experience.date}`}
              className="experience-main-card"
            >
              <div className="experience-top">
                <div>
                  <span className="experience-type">
                    {experience.type}
                  </span>

                  <h3>{experience.role}</h3>

                  <p className="experience-company">
                    {experience.company}
                  </p>

                  {experience.id && (
                    <span className="experience-id">
                      ID: {experience.id}
                    </span>
                  )}
                </div>

                <span className="experience-date">
                  {experience.date}
  
