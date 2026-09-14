import React, { useEffect, useRef, useState } from "react";

import ShopSphere from "./projects/ShopSphere";
import BankSphere from "./projects/BankSphere";
import LifeDecisionAssistant from "./projects/LifeDecisionAssistant";
import AIExamCompanion from "./projects/AIExamCompanion";
import DigitalAnalyticsDashboard from "./projects/DigitalAnalyticsDashboard";
import GymSync from "./projects/GymSync";

import "./index.css";

/* =========================================================
   PROJECT PREVIEW IMAGES
   ========================================================= */

import shopSphereImage from "./assets/projects/shopsphere/1.png.png";
import bankSphereImage from "./assets/projects/banksphere/14.png.png";
import lifeDecisionImage from "./assets/projects/lifedecisionassistant/24.png.png";
import aiExamImage from "./assets/projects/aiexamcompanion/32.png.png";
import digitalAnalyticsImage from "./assets/projects/digitalanalyticsdashboard/38.png.png";
// NOTE: GymSync doesn't have a screenshot yet.
// Drop one at ./assets/projects/gymsync/1.png and uncomment the import below,
// then swap the placeholder in the PROJECTS array further down.
// import gymSyncImage from "./assets/projects/gymsync/1.png";

/* =========================================================
   PROJECT ROUTES
   ========================================================= */

const ROUTES = {
  shopsphere: ShopSphere,
  banksphere: BankSphere,
  lifedecisionassistant: LifeDecisionAssistant,
  aiexamcompanion: AIExamCompanion,
  digitalanalyticsdashboard: DigitalAnalyticsDashboard,
  gymsync: GymSync,
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
              Dockerized, CI/CD-driven deployments. I also bring
              hands-on Java experience from full-stack projects
              like BankSphere and ShopSphere.
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

            <p>
              While Python and full-stack development are where I
              spend most of my time, I also have hands-on experience
              building Java applications — including a banking
              system and an e-commerce platform — so I'm comfortable
              moving between both ecosystems on real projects.
            </p>
          </Reveal>

          <Reveal className="about-stats">
            <div className="stat-card">
              <strong>6</strong>
              <span>FULL-STACK PROJECTS SHIPPED</span>
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
        "React (Vite)",
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
        "Maven",
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
        "Built two full-stack applications end-to-end (GymSync and Digital Analytics Dashboard), working with a small team from requirements through deployment.",
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
                </div>

                <span className="experience-date">
                  {experience.date}
                </span>
              </div>

              <div className="experience-divider" />

              <div className="experience-content">
                <p className="experience-summary">
                  {experience.summary}
                </p>

                <ul>
                  {experience.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROJECTS
   ========================================================= */

const PROJECTS = [
  {
    id: "aiexamcompanion",
    number: "01",
    category: "AI-POWERED APPLICATION",
    title: "AI Exam Companion",
    image: aiExamImage,
    tech: [
      "Python",
      "FastAPI",
      "React.js",
      "Groq API",
      "Gemini API",
      "MySQL",
      "JWT Authentication",
      "Docker",
    ],
    backendNote:
      "AI-assisted study tool that generates practice questions and explanations using LLM APIs, backed by a FastAPI service.",
  },
  {
    id: "lifedecisionassistant",
    number: "02",
    category: "AI-POWERED APPLICATION",
    title: "Life Decision Assistant",
    image: lifeDecisionImage,
    tech: [
      "Python",
      "FastAPI",
      "React.js",
      "Gemini API",
      "PostgreSQL",
      "JWT Authentication",
      "Docker",
    ],
    backendNote:
      "Helps users reason through everyday decisions with structured, AI-generated pros/cons and recommendations.",
  },
  {
    id: "digitalanalyticsdashboard",
    number: "03",
    category: "PYTHON FULL-STACK APPLICATION",
    title: "Digital Analytics Dashboard",
    image: digitalAnalyticsImage,
    tech: [
      "Python",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript",
      "PostgreSQL",
      "Firebase",
      "Google Authentication",
      "Gemini API",
      "Postman",
      "Docker",
      "JUnit",
      "JWT Authentication",
    ],
    backendNote:
      "Flask dashboard backed by PostgreSQL that ingests CSV data and turns it into charts and summary views, with Firebase/JWT sign-in and Gemini API insights.",
  },
  {
    id: "banksphere",
    number: "04",
    category: "JAVA FULL-STACK APPLICATION",
    title: "BankSphere",
    image: bankSphereImage,
    tech: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "React.js",
      "MySQL",
      "REST APIs",
      "JWT Authentication",
      "Maven",
      "Docker",
      "Postman",
      "JUnit",
    ],
    backendNote:
      "Online banking system built in Java/Spring Boot with secure authentication, account and transaction management, and a React.js frontend.",
  },
  {
    id: "shopsphere",
    number: "05",
    category: "JAVA FULL-STACK APPLICATION",
    title: "ShopSphere",
    image: shopSphereImage,
    tech: [
      "Java",
      "Spring Boot",
      "React.js",
      "MySQL",
      "REST APIs",
      "RBAC",
      "JWT Authentication",
      "Maven",
      "Docker",
      "Postman",
      "JUnit",
    ],
    backendNote:
      "Full-stack e-commerce platform built in Java/Spring Boot with role-based access control and a React.js storefront.",
  },
  {
    id: "gymsync",
    number: "06",
    category: "PYTHON FULL-STACK APPLICATION",
    title: "GymSync",
    image: null,
    tech: [
      "Python",
      "FastAPI",
      "HTML",
      "CSS",
      "JavaScript",
      "React (Vite)",
      "MySQL",
      "Maven",
      "Docker",
      "JWT Authentication",
      "Postman",
      "JUnit",
    ],
    backendNote:
      "Gym tracking app with a FastAPI backend and a React (Vite) frontend, built and deployed end-to-end on Render.",
    liveLinks: [{ label: "Live on Render", url: "#" }],
  },
];

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">
        <Reveal>
          <div className="section-kicker">
            <span>04</span>
            PROJECTS
          </div>

          <h2 className="massive-title light-title">
            Things I've
            <br />
            <span>built and shipped.</span>
          </h2>

          <p className="projects-intro">
            A mix of Python full-stack applications and Java
            full-stack projects — REST APIs, relational databases,
            authentication and Dockerized deployments, end to end.
          </p>
        </Reveal>

        <div className="projects-showcase">
          {PROJECTS.map((project) => (
            <Reveal
              key={project.id}
              className="project-showcase-card"
            >
              <div
                className="project-visual"
                onClick={() => {
                  window.location.hash = `#${project.id}`;
                }}
              >
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="project-visual-placeholder">
                    <span>{project.title}</span>
                    <p>Screenshot coming soon</p>
                  </div>
                )}

                <div className="project-image-shade" />

                <div className="project-image-top">
                  <span>{project.category}</span>
                  <span>{project.number} / 06</span>
                </div>

                <div className="project-view">
                  <strong>↗</strong>
                  View Project
                </div>
              </div>

              <div className="project-information">
                <div className="project-title-line">
                  <h3>{project.title}</h3>
                  <span>{project.number}</span>
                </div>

                <div className="project-tech-list">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                {project.liveLinks && (
                  <div className="project-live-links">
                    <span className="live-label">LIVE</span>

                    <div className="live-link-list">
                      {project.liveLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {link.label}
                          <span>↗</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {project.backendNote && (
                  <div className="backend-note">
                    <span>i</span>
                    <p>{project.backendNote}</p>
                  </div>
                )}

                <div
                  className="project-open-button"
                  onClick={() => {
                    window.location.hash = `#${project.id}`;
                  }}
                >
                  Open Project
                  <span>↗</span>
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
   EDUCATION
   ========================================================= */

function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="section-container">
        <Reveal>
          <div className="section-kicker">
            <span>05</span>
            EDUCATION
          </div>

          <h2 className="massive-title">
            Where it
            <br />
            <span>started.</span>
          </h2>
        </Reveal>

        <Reveal className="education-main">
          <div className="education-year">2026</div>

          <div className="education-info">
            <span>B.E. — COMPUTER SCIENCE & ENGINEERING</span>

            <h3>ACS College of Engineering, Bengaluru</h3>

            <p>
              Bachelor of Engineering in Computer Science &
              Engineering, focused on software development,
              databases and applied programming.
            </p>

            <div className="education-bottom">
              <span>
                CGPA: <strong>8.00 / 10</strong>
              </span>

              <span>Bengaluru, India</span>
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

const CERTIFICATIONS = [
  {
    title: "Data Analytics Training",
    issuer: "Tableau · Power BI · Data Cleaning",
    description:
      "Hands-on training covering data cleaning workflows and building dashboards and visualizations in Tableau and Power BI.",
  },
  {
    title: "Green Skills & Artificial Intelligence",
    issuer:
      "Skills4Future Program — Edunet Foundation, AICTE & Shell India Markets Pvt. Ltd.",
    description:
      "Program covering sustainability-focused Green Skills alongside foundational and applied Artificial Intelligence concepts.",
  },
  {
    title: "Python Full Stack Development",
    issuer: "Qspiders",
    description:
      "Structured training in full-stack Python development — from backend APIs to frontend integration.",
  },
];

const INTERNSHIP_CERTIFICATES = [
  {
    title: "AI Internship",
    subtitle: "AppMind AI (MR.TechLab LLP) · Jan 2026 – May 2026",
    image: "/certificates/appmind-ai-internship.jpg",
  },
  {
    title: "AI & Data Science Internship — Software Dev Project",
    subtitle: "Knowx Innovations (P) Ltd. · Mar 2023 – Jun 2023",
    image: "/certificates/knowx-software-dev-internship.jpg",
  },
  {
    title: "AI & Data Science Internship — Training",
    subtitle: "Knowx Innovations (P) Ltd. · Oct 2022 – Jan 2023",
    image: "/certificates/knowx-training-internship.jpg",
  },
  {
    title: "Green Skills & Generative AI Training",
    subtitle:
      "Skills4Future — Edunet Foundation, AICTE & Shell India Markets Pvt. Ltd.",
    image: "/certificates/skills4future-genai.jpg",
  },
];

function Certifications() {
  return (
    <section
      id="certifications"
      className="section certification-section"
    >
      <div className="section-container">
        <Reveal>
          <div className="section-kicker">
            <span>06</span>
            CERTIFICATIONS
          </div>

          <h2 className="massive-title">
            Proof of
            <br />
            <span>continuous learning.</span>
          </h2>
        </Reveal>

        <div className="certification-grid">
          {CERTIFICATIONS.map((cert, index) => (
            <Reveal
              key={cert.title}
              className="certificate-item"
            >
              <div className="certificate-number">
                0{index + 1}
              </div>

              <div className="certificate-content">
                <h3>{cert.title}</h3>
                <strong>{cert.issuer}</strong>
                <p>{cert.description}</p>
              </div>

              <div className="certificate-arrow">↗</div>
            </Reveal>
          ))}
        </div>

        <Reveal className="certificate-book-heading">
          <h3>Flip through my internship certificates</h3>
          <p>
            My three internship certificates and my Skills4Future
            Generative AI training certificate — click the arrows
            to turn the page.
          </p>
        </Reveal>

        <Reveal>
          <CertificateBook certificates={INTERNSHIP_CERTIFICATES} />
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   CERTIFICATE BOOK (FLIP PAGES)
   ========================================================= */

function CertificateBook({ certificates }) {
  const [index, setIndex] = useState(0);
  const [flipDirection, setFlipDirection] = useState(null);

  const goToIndex = (nextIndex, direction) => {
    if (
      flipDirection ||
      nextIndex < 0 ||
      nextIndex > certificates.length - 1
    ) {
      return;
    }

    setFlipDirection(direction);

    setTimeout(() => {
      setIndex(nextIndex);
      setFlipDirection(null);
    }, 380);
  };

  const handlePrev = () => goToIndex(index - 1, "prev");
  const handleNext = () => goToIndex(index + 1, "next");

  const current = certificates[index];

  return (
    <div className="certificate-book">
      <button
        type="button"
        className="book-arrow book-arrow-left"
        onClick={handlePrev}
        disabled={index === 0}
        aria-label="Previous certificate"
      >
        ‹
      </button>

      <div className="book-frame">
        <div
          className={`book-page ${
            flipDirection === "next" ? "flip-next" : ""
          } ${flipDirection === "prev" ? "flip-prev" : ""}`}
        >
          <div className="book-page-inner">
            <img
              src={current.image}
              alt={current.title}
              onError={(event) => {
                event.target.style.display = "none";
                event.target.parentElement.classList.add(
                  "book-page-missing"
                );
              }}
            />

            <div className="book-page-caption">
              <h4>{current.title}</h4>
              <p>{current.subtitle}</p>
            </div>
          </div>
        </div>

        <div className="book-spine" />
      </div>

      <button
        type="button"
        className="book-arrow book-arrow-right"
        onClick={handleNext}
        disabled={index === certificates.length - 1}
        aria-label="Next certificate"
      >
        ›
      </button>

      <div className="book-footer">
        <div className="book-dots">
          {certificates.map((cert, dotIndex) => (
            <span
              key={cert.title}
              className={dotIndex === index ? "active" : ""}
              onClick={() =>
                goToIndex(
                  dotIndex,
                  dotIndex > index ? "next" : "prev"
                )
              }
            />
          ))}
        </div>

        <p className="book-page-count">
          Page {index + 1} of {certificates.length}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   CONTACT
   ========================================================= */

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-background">
        <div />
        <div />
        <div />
      </div>

      <div className="contact-inner">
        <Reveal>
          <div className="section-kicker contact-kicker">
            <span>07</span>
            CONTACT
          </div>

          <h2>
            Let's build
            <br />
            <span>something together.</span>
          </h2>

          <p>
            Open to Python full-stack and full-stack developer
            roles. Whether it's a quick question or a project
            idea, my inbox is open.
          </p>

          <a
            href="mailto:srinivasrahul838@gmail.com"
            className="contact-email"
          >
            srinivasrahul838@gmail.com
            <span>↗</span>
          </a>

          <div className="contact-details">
            <span>Bengaluru, India</span>
            <span>+91 7337634886</span>
          </div>

          <div className="social-links">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
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

      <p>Built with React.js</p>

      <span>© 2026 Rahul S. All rights reserved.</span>
    </footer>
  );
}
