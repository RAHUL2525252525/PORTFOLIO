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

    if (
      window.location.hash
        .replace(/^#\/?/, "")
        .toLowerCase() === sectionId
    ) {
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

        <div className="nav-links">
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
              <strong>
                {" "}Java, Spring Boot and React.js
              </strong>{" "}
              — from database design and secure REST APIs to
              production-ready interfaces.
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
    <section
      id="about"
      className="section about-section"
    >
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
              During my internship experience, I also worked with
              Python, Flask, Firebase, Artificial Intelligence,
              Data Science and external AI APIs, giving me
              additional hands-on experience beyond my primary
              Java full-stack focus.
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
      title: "PYTHON & AI",
      description:
        "Additional hands-on experience from internship and AI projects.",
      items: [
        "Python",
        "Flask",
        "Firebase",
        "Artificial Intelligence",
        "Machine Learning",
        "Data Science",
        "Groq API",
        "Gemini API",
        "OpenRouter API",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="section skills-section"
    >
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
  const experiences = [
    {
      type: "WEB DEVELOPMENT INTERNSHIP",
      role: "Web Development Intern",
      company: "MR Tech Lab · Bengaluru",
      date: "JAN 2026 — MAY 2026",
      summary:
        "Worked on full-stack web development and independently delivered multiple web applications using modern frontend, backend and authentication technologies.",
      points: [
        "Owned end-to-end development of 2+ full-stack modules using React.js, Java, Spring Boot and MySQL.",
        "Designed and developed responsive web interfaces using HTML, CSS and JavaScript.",
        "Independently designed and shipped 3 Python / Flask web applications with Firebase authentication.",
        "Integrated Firebase Authentication and implemented secure user session flows.",
        "Worked with external APIs including AI/API integrations and connected frontend applications with backend services.",
        "Collaborated using Git and an Agile development workflow across multiple development sprints.",
      ],
    },

    {
      type: "AI & DATA SCIENCE INTERNSHIP",
      role: "Artificial Intelligence & Data Science Intern",
      company:
        "Knowx Innovations (P) Ltd · Vijayanagar, Bangalore",
      date: "OCT 2022 — JAN 2023",
      summary:
        "Completed an internship focused on Artificial Intelligence, Data Science, Python programming, machine learning and cloud technologies.",
      points: [
        "Worked with Python programming and SQL databases.",
        "Studied and implemented Machine Learning algorithms and data science concepts.",
        "Gained exposure to cloud computing and data visualization.",
        "Worked with OpenCV, Keras and TensorFlow.",
        "Studied mathematical concepts including Linear Algebra, Data Interpretation and Regression.",
      ],
      id: "433IS20018",
    },

    {
      type: "AI / DEEP LEARNING INTERNSHIP",
      role: "AI, Deep Learning & Data Science Intern",
      company:
        "Knowx Innovations (P) Ltd · Vijayanagar, Bangalore",
      date: "MAR 2023 — JUN 2023",
      summary:
        "Completed an advanced internship and software development project program focused on Artificial Intelligence, Machine Learning, Deep Learning and Data Science.",
      points: [
        "Worked on Artificial Intelligence and Machine Learning programs.",
        "Studied Data Science algorithms and practical implementation concepts.",
        "Worked with Convolutional Neural Networks (CNN).",
        "Gained hands-on understanding of Deep Learning algorithms.",
        "Studied VGG16 architecture and neural network layers.",
      ],
      id: "433IS20018",
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
                </span>
              </div>

              <div className="experience-divider" />

              <div className="experience-content">
                <div className="experience-summary">
                  {experience.summary}
                </div>

                <ul>
                  {experience.points.map((point) => (
                    <li key={point}>
                      {point}
                    </li>
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
   PROJECT DATA
   ========================================================= */

const PROJECTS = [
  {
    route: "shopsphere",
    number: "01",
    category: "JAVA · FULL STACK",
    name: "ShopSphere",
    image: shopSphereImage,

    tech: [
      "Java 17",
      "Spring Boot 3",
      "React.js",
      "Spring Data JPA",
      "MySQL",
    ],

    links: [
      {
        label: "Frontend",
        url: "https://shopsphere-8m8f.vercel.app/",
      },
      {
        label: "Backend",
        url: "https://shopsphere-backend-5umn.onrender.com",
      },
    ],

    backendNote:
      "Start the ShopSphere backend first. Render may put the backend into sleep mode, so the frontend may need the backend to wake up before loading data.",
  },

  {
    route: "banksphere",
    number: "02",
    category: "JAVA · SECURITY",
    name: "BankSphere",
    image: bankSphereImage,

    tech: [
      "Java 17",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "React.js",
      "MySQL",
      "Docker",
    ],

    links: [
      {
        label: "Frontend",
        url: "https://banksphere-frontend.vercel.app",
      },
      {
        label: "Backend",
        url: "https://banksphere-backend-b96m.onrender.com",
      },
    ],

    backendNote:
      "Start the BankSphere backend first. Render may put the backend into sleep mode, so the frontend may need the backend to wake up before loading data.",
  },

  {
    route: "lifedecisionassistant",
    number: "03",
    category: "PYTHON · AI",
    name: "Life Decision Assistant",
    image: lifeDecisionImage,

    tech: [
      "Python",
      "Flask",
      "Firebase",
      "Groq API",
      "Gemini API",
      "OpenRouter",
    ],

    links: [
      {
        label: "Live App",
        url: "https://life-decision-assistant-63pu.onrender.com",
      },
    ],
  },

  {
    route: "aiexamcompanion",
    number: "04",
    category: "PYTHON · AI",
    name: "AI Exam Companion",
    image: aiExamImage,

    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Python Flask",
      "Firebase",
      "Groq API",
    ],

    links: [
      {
        label: "Live App",
        url: "https://ai-exam-companion-ghzc.onrender.com",
      },
    ],
  },

  {
    route: "digitalanalyticsdashboard",
    number: "05",
    category: "JAVASCRIPT · FIREBASE",
    name: "Digital Analytics Dashboard",
    image: digitalAnalyticsImage,

    tech: [
      "JavaScript",
      "Firebase",
      "Google OAuth",
      "Gemini API",
      "Chart.js",
    ],

    links: [
      {
        label: "Live App",
        url: "https://digital-dashboard1.onrender.com",
      },
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
          <div className="section-kicker blue-kicker">
            <span>04</span>
            SELECTED PROJECTS
          </div>

          <h2 className="massive-title light-title">
            Things I've
            <br />
            <span>actually built.</span>
          </h2>

          <p className="projects-intro">
            My strongest work is centered around Java full-stack
            development. Python and AI projects represent
            additional hands-on experience across web development,
            authentication and AI integrations.
          </p>
        </Reveal>

        <div className="projects-showcase">
          {PROJECTS.map((project) => (
            <Reveal
              key={project.route}
              className="project-showcase-card"
            >
              <button
                type="button"
                className="project-visual"
                onClick={() => openProject(project.route)}
                aria-label={`Open ${project.name}`}
              >
                <img
                  src={project.image}
                  alt={`${project.name} project preview`}
                  loading="lazy"
                />

                <div className="project-image-shade" />

                <div className="project-image-top">
                  <span>{project.number}</span>

                  <span>{project.category}</span>
                </div>

                <div className="project-view">
                  <span>VIEW PROJECT</span>

                  <strong>↗</strong>
                </div>
              </button>

              <div className="project-information">
                <div className="project-title-line">
                  <h3>{project.name}</h3>

                  <span>{project.number}</span>
                </div>

                <div className="project-tech-list">
                  {project.tech.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-live-links">
                  <div className="live-label">
                    LIVE LINKS
                  </div>

                  <div className="live-link-list">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(event) =>
                          event.stopPropagation()
                        }
                      >
                        {link.label}
                        <span>↗</span>
                      </a>
                    ))}
                  </div>
                </div>

                {project.backendNote && (
                  <div className="backend-note">
                    <span>!</span>

                    <p>
                      {project.backendNote}
                    </p>
                  </div>
                )}

                <button
                  type="button"
                  className="project-open-button"
                  onClick={() =>
                    openProject(project.route)
                  }
                >
                  View screenshots
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
            <span>B.E.</span>

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

        <Reveal className="education-secondary">
          <div>
            <span>2020 — 2023</span>

            <h3>
              Diploma in Computer Science and Engineering
            </h3>

            <p>
              PVP Polytechnic, Bangalore
            </p>
          </div>

          <div>
            <span>2019 — 2020</span>

            <h3>SSLC</h3>

            <p>
              Vidya Priya English School, Bangalore
            </p>
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
      title:
        "Green Skills & Artificial Intelligence",
      organization:
        "Skills4Future Program · Edunet Foundation · AICTE · Shell India Markets Pvt Ltd",
      description:
        "Advanced course on Green Skills and Artificial Intelligence completed at ACS College of Engineering from September 2025 to March 2026.",
      details:
        "Certificate ID: S4F25_195543",
    },

    {
      number: "02",
      title:
        "Java Full Stack Development",
      organization:
        "Full-stack development",
      description:
        "Full-stack application development with Java ecosystem technologies.",
    },

    {
      number: "03",
      title:
        "Spring Boot & REST APIs",
      organization:
        "Backend engineering",
      description:
        "Backend development, REST architecture and service design.",
    },

    {
      number: "04",
      title:
        "React.js Development",
      organization:
        "Frontend engineering",
      description:
        "Modern component-based frontend development.",
    },

    {
      number: "05",
      title:
        "SQL & Database Design",
      organization:
        "Database engineering",
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

              <div className="certificate-content">
                <h3>
                  {certificate.title}
                </h3>

                <strong>
                  {certificate.organization}
                </strong>

                <p>
                  {certificate.description}
                </p>

                {certificate.details && (
                  <span className="certificate-details">
                    {certificate.details}
                  </span>
                )}
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
          worth{" "}
          <span>building?</span>
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
            href="https://www.linkedin.com/in/rahul-s-6460b1238/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href="#projects"
            onClick={(event) => {
              event.preventDefault();
              window.location.hash = "#projects";
            }}
          >
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
        RAHUL
        <span>.</span>
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
