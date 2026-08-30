import React, { useEffect, useRef, useState } from "react";

import ShopSphere from "./projects/ShopSphere";
import BankSphere from "./projects/BankSphere";
import LifeDecisionAssistant from "./projects/LifeDecisionAssistant";
import AIExamCompanion from "./projects/AIExamCompanion";
import DigitalAnalyticsDashboard from "./projects/DigitalAnalyticsDashboard";

/* =========================================================
   ROUTING
   ========================================================= */

const ROUTES = {
  shopsphere: ShopSphere,
  banksphere: BankSphere,
  lifedecisionassistant: LifeDecisionAssistant,
  aiexamcompanion: AIExamCompanion,
  digitalanalyticsdashboard: DigitalAnalyticsDashboard,
};

function useHashRoute() {
  const getRoute = () =>
    window.location.hash.replace(/^#\/?/, "").toLowerCase();

  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const onHashChange = () => {
      setRoute(getRoute());
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", onHashChange);

    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return route;
}

/* =========================================================
   REVEAL ANIMATION
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
      <EngineeringProfile />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Architecture />
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
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#" className="logo">
          RS<span>/</span>26
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Stack</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#architecture">Engineering</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="/Rahul_S_ResumeFullStack.pdf"
          className="nav-resume-button"
          target="_blank"
          rel="noreferrer"
        >
          RESUME <span>↗</span>
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
      <div className="hero-grid" />
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-topline">
        <span>SOFTWARE ENGINEER</span>
        <span>JAVA FULL STACK</span>
        <span>01 / 05</span>
      </div>

      <div className="hero-content">
        <div className="hero-identity">
          <div className="hero-photo-wrap">
            <div className="hero-photo-ring">
              <img src="/rahul-profile.jpg" alt="Rahul S" />
            </div>

            <div className="photo-status">
              <span />
              OPEN TO OPPORTUNITIES
            </div>
          </div>

          <div className="hero-location">
            <span className="location-line" />
            BENGALURU, INDIA
          </div>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">
            JAVA / SPRING BOOT / REACT / DATABASES
          </p>

          <h1>
            I BUILD
            <br />
            <span>BACKENDS</span>
            <br />
            THAT SHIP.
          </h1>

          <div className="hero-bottom">
            <p className="hero-description">
              Software Engineer focused on building{" "}
              <strong>
                full-stack applications with Java, Spring Boot and React.js.
              </strong>{" "}
              I work across REST APIs, authentication, relational data,
              validation and production-oriented application architecture.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="hero-primary">
                Explore My Work
                <span>↗</span>
              </a>

              <a href="#contact" className="hero-secondary">
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-stack-bar">
        <span>JAVA 17</span>
        <i />
        <span>SPRING BOOT 3</span>
        <i />
        <span>SPRING SECURITY</span>
        <i />
        <span>REACT.JS</span>
        <i />
        <span>MYSQL</span>
        <i />
        <span>DOCKER</span>
      </div>
    </section>
  );
}

/* =========================================================
   ENGINEERING PROFILE
   ========================================================= */

function EngineeringProfile() {
  const stats = [
    {
      number: "02",
      label: "JAVA FULL-STACK",
      detail: "CORE PROJECTS",
    },
    {
      number: "03",
      label: "PYTHON / FLASK",
      detail: "HANDS-ON APPS",
    },
    {
      number: "15+",
      label: "REST ENDPOINTS",
      detail: "VALIDATED",
    },
    {
      number: "08+",
      label: "RELATIONAL",
      detail: "ENTITIES",
    },
  ];

  return (
    <section className="signal-section">
      <div className="signal-container">
        <Reveal className="signal-heading">
          <div>
            <p className="section-code">01 — ENGINEERING SIGNAL</p>
            <h2>
              Not just UI.
              <br />
              <span>Full-stack ownership.</span>
            </h2>
          </div>

          <p>
            My strongest hands-on work is in Java full-stack development,
            especially Spring Boot, REST APIs, Spring Security, relational
            databases and React.js. Python/Flask is an additional hands-on
            area through applied web and AI projects.
          </p>
        </Reveal>

        <div className="signal-stats">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              className="signal-stat"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
              <span className="stat-detail">{stat.detail}</span>
            </Reveal>
          ))}
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
          <div className="section-header">
            <div>
              <p className="section-code">02 — ABOUT</p>
              <h2 className="section-title">
                I think in
                <br />
                <span>systems.</span>
              </h2>
            </div>

            <div className="section-index">PROFILE / 002</div>
          </div>
        </Reveal>

        <div className="about-layout">
          <Reveal className="about-main">
            <p className="large-copy">
              I'm a software engineer who enjoys taking a feature from
              database design to backend logic to the final React interface.
            </p>

            <p>
              My primary development experience is centered around Java,
              Spring Boot and React.js. I've built full-stack systems involving
              authentication, authorization, role-based workflows, REST APIs,
              relational database design, validation and containerized
              environments.
            </p>

            <p>
              My Python experience is hands-on and project-based. During my
              internship and personal work, I built web applications using
              Python/Flask, Firebase and AI APIs, giving me practical exposure
              to another backend ecosystem without positioning Python as my
              primary stack.
            </p>
          </Reveal>

          <Reveal className="about-terminal">
            <div className="terminal-header">
              <span />
              <span />
              <span />
              <label>rahul@engineer:~</label>
            </div>

            <div className="terminal-body">
              <p>
                <b>$</b> whoami
              </p>

              <strong>Java Full Stack Developer</strong>

              <p>
                <b>$</b> primary_stack
              </p>

              <strong>Java / Spring Boot / React / MySQL</strong>

              <p>
                <b>$</b> engineering_focus
              </p>

              <strong>APIs / Security / Data / Architecture</strong>

              <p>
                <b>$</b> status
              </p>

              <strong className="terminal-green">
                BUILDING → LEARNING → SHIPPING
              </strong>
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
      title: "JAVA BACKEND",
      primary: true,
      items: [
        "Java 17",
        "Spring Boot",
        "Spring MVC",
        "Spring Security",
        "Spring Data JPA",
        "Hibernate",
        "Maven",
        "REST APIs",
      ],
    },
    {
      number: "02",
      title: "FRONTEND",
      items: [
        "React.js",
        "JavaScript ES6+",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Tailwind CSS",
        "Axios",
        "Responsive Design",
      ],
    },
    {
      number: "03",
      title: "DATABASES",
      items: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "SQL",
        "Database Design",
        "Normalization",
        "Relational Modeling",
      ],
    },
    {
      number: "04",
      title: "SECURITY / ARCHITECTURE",
      items: [
        "JWT Authentication",
        "RBAC",
        "Layered Architecture",
        "MVC",
        "DTO Pattern",
        "Exception Handling",
        "Microservices",
      ],
    },
    {
      number: "05",
      title: "DEVOPS / CLOUD",
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
      title: "TESTING / PRACTICES",
      items: [
        "JUnit 5",
        "Mockito",
        "Postman",
        "Unit Testing",
        "Agile / Scrum",
        "Code Reviews",
        "Software Engineering",
      ],
    },
    {
      number: "07",
      title: "CORE CS",
      items: [
        "Data Structures",
        "Algorithms",
        "OOP",
        "DBMS",
        "Software Engineering Principles",
      ],
    },
    {
      number: "08",
      title: "PYTHON — HANDS-ON",
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
          <div className="section-header">
            <div>
              <p className="section-code">03 — TECHNICAL STACK</p>
              <h2 className="section-title">
                The tools
                <br />
                behind the <span>work.</span>
              </h2>
            </div>

            <div className="section-index">STACK / 008</div>
          </div>
        </Reveal>

        <div className="skills-command-grid">
          {groups.map((group, index) => (
            <Reveal
              key={group.number}
              className={`skill-command-card ${
                group.primary ? "primary-skill" : ""
              }`}
              style={{ transitionDelay: `${index * 45}ms` }}
            >
              <div className="skill-card-top">
                <span>{group.number}</span>
                <span>///</span>
              </div>

              <h3>{group.title}</h3>

              <div className="skill-items">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
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
    <section id="experience" className="section experience-section">
      <div className="section-container">
        <Reveal>
          <div className="section-header">
            <div>
              <p className="section-code">04 — EXPERIENCE</p>
              <h2 className="section-title">
                Building,
                <br />
                <span>not watching.</span>
              </h2>
            </div>

            <div className="section-index">CAREER / 004</div>
          </div>
        </Reveal>

        <Reveal>
          <div className="experience-shell">
            <div className="experience-marker">
              <span>01</span>
              <div />
            </div>

            <div className="experience-content">
              <div className="experience-top">
                <div>
                  <p className="experience-type">INTERNSHIP</p>
                  <h3>Web Development Intern</h3>
                  <h4>MR Tech Lab</h4>
                </div>

                <div className="experience-date">
                  JAN
                  <strong>2026</strong>
                  —
                  MAY
                  <strong>2026</strong>
                </div>
              </div>

              <div className="experience-description">
                <p>
                  Worked across frontend development, authentication and
                  full-stack web application delivery in a Git-based Agile
                  workflow.
                </p>
              </div>

              <div className="experience-grid">
                <div>
                  <span className="experience-number">01</span>
                  <h5>Frontend Delivery</h5>
                  <p>
                    Translated design specifications into responsive
                    HTML/CSS/JavaScript interfaces with consistent browser
                    rendering.
                  </p>
                </div>

                <div>
                  <span className="experience-number">02</span>
                  <h5>Authentication</h5>
                  <p>
                    Integrated Firebase Authentication and session management,
                    resolving authentication issues identified during QA.
                  </p>
                </div>

                <div>
                  <span className="experience-number">03</span>
                  <h5>Hands-on Python</h5>
                  <p>
                    Independently built and shipped three web applications
                    using Python/Flask, Firebase and frontend technologies.
                  </p>
                </div>

                <div>
                  <span className="experience-number">04</span>
                  <h5>Agile Delivery</h5>
                  <p>
                    Collaborated with teammates in Git-based sprints and
                    delivered assigned features on schedule.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="java-track">
            <div className="java-track-label">
              <span>CORE DEVELOPMENT TRACK</span>
              <strong>JAVA FULL STACK</strong>
            </div>

            <div className="java-track-line">
              <div className="track-node">
                <span>01</span>
                <b>JAVA 17</b>
              </div>

              <div className="track-node">
                <span>02</span>
                <b>SPRING BOOT</b>
              </div>

              <div className="track-node">
                <span>03</span>
                <b>SECURITY</b>
              </div>

              <div className="track-node">
                <span>04</span>
                <b>DATABASE</b>
              </div>

              <div className="track-node">
                <span>05</span>
                <b>REACT</b>
              </div>

              <div className="track-node">
                <span>06</span>
                <b>DOCKER</b>
              </div>
            </div>
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
    stack: "java",
    stackLabel: "JAVA / SPRING BOOT",
    category: "PROJECT 01",
    number: "01",
    name: "ShopSphere",
    desc: "Full-stack e-commerce platform engineered around product discovery, cart, wishlist, checkout and order management with separate ADMIN and CUSTOMER workflows.",
    highlight: "6 MODULES · 15+ VALIDATED REST ENDPOINTS",
    tech: [
      "Java 17",
      "Spring Boot 3",
      "Spring Data JPA",
      "React.js",
      "MySQL",
      "REST APIs",
      "RBAC",
    ],
    tag: "PRIMARY JAVA PROJECT",
  },
  {
    route: "banksphere",
    stack: "java",
    stackLabel: "JAVA / SPRING SECURITY",
    category: "PROJECT 02",
    number: "02",
    name: "BankSphere",
    desc: "Role-based banking application focused on stateless JWT authentication, transactional workflows, relational integrity and controlled access across multiple permission tiers.",
    highlight: "JWT SECURITY · 3 PERMISSION TIERS · 8+ ENTITIES",
    tech: [
      "Java 17",
      "Spring Boot 3",
      "Spring Security",
      "JWT",
      "React.js",
      "MySQL",
      "PostgreSQL",
      "Docker",
      "JUnit 5",
    ],
    tag: "PRIMARY JAVA PROJECT",
  },
  {
    route: "lifedecisionassistant",
    stack: "python",
    stackLabel: "PYTHON / FLASK",
    category: "PROJECT 03",
    number: "03",
    name: "Life Decision Assistant",
    desc: "Applied AI decision-support web application using Flask and multiple external LLM providers behind a unified backend interface.",
    highlight: "HANDS-ON PYTHON · 3 AI PROVIDERS",
    tech: [
      "Python",
      "Flask",
      "Firebase",
      "Groq API",
      "Gemini API",
      "OpenRouter",
    ],
    tag: "HANDS-ON PYTHON",
  },
  {
    route: "aiexamcompanion",
    stack: "python",
    stackLabel: "PYTHON / FLASK",
    category: "PROJECT 04",
    number: "04",
    name: "AI Exam Companion",
    desc: "AI-assisted exam preparation application designed to generate practice questions and maintain user session history.",
    highlight: "HANDS-ON PYTHON · AI QUESTION GENERATION",
    tech: ["Python", "Flask", "MongoDB", "Groq API"],
    tag: "HANDS-ON PYTHON",
  },
  {
    route: "digitalanalyticsdashboard",
    stack: "js",
    stackLabel: "JAVASCRIPT / FIREBASE",
    category: "PROJECT 05",
    number: "05",
    name: "Digital Analytics Dashboard",
    desc: "Analytics dashboard combining Google OAuth authentication, Firebase-backed data and client-side visual reporting.",
    highlight: "GOOGLE OAUTH · FIREBASE · ANALYTICS",
    tech: ["JavaScript", "Firebase", "Google OAuth", "Chart.js"],
    tag: "WEB APPLICATION",
  },
];

/* =========================================================
   PROJECTS
   ========================================================= */

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">
        <Reveal>
          <div className="section-header">
            <div>
              <p className="section-code">05 — SELECTED WORK</p>
              <h2 className="section-title">
                Systems I've
                <br />
                <span>actually built.</span>
              </h2>
            </div>

            <div className="section-index">WORK / 005</div>
          </div>

          <div className="projects-intro-row">
            <p>
              Two core Java full-stack systems form the center of my
              development work, supported by hands-on Python/Flask applications
              and additional web tooling.
            </p>

            <span>05 PROJECTS / 2026</span>
          </div>
        </Reveal>

        <div className="projects-command-grid">
          {PROJECTS.map((project, index) => (
            <Reveal
              key={project.route}
              className={`project-command-card project-${index + 1}`}
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <button
                className="project-open-area"
                onClick={() => {
                  window.location.hash = `/${project.route}`;
                }}
                aria-label={`Open ${project.name}`}
              >
                <div className="project-card-no">
                  {project.number}
                  <span>↗</span>
                </div>

                <div className="project-card-top">
                  <span className={`project-stack ${project.stack}`}>
                    {project.stackLabel}
                  </span>

                  <span className="project-tag">{project.tag}</span>
                </div>

                <div className="project-card-main">
                  <p>{project.category}</p>

                  <h3>{project.name}</h3>

                  <div className="project-line" />

                  <span>{project.desc}</span>
                </div>

                <div className="project-card-bottom">
                  <div className="project-tech-row">
                    {project.tech.slice(0, 5).map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-highlight-new">
                    {project.highlight}
                  </div>

                  <div className="open-project">
                    OPEN CASE STUDY <b>↗</b>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   ARCHITECTURE
   ========================================================= */

function Architecture() {
  const layers = [
    {
      number: "01",
      title: "CLIENT",
      tech: "React.js / JavaScript",
      description:
        "Responsive interfaces, client-side validation, state handling and API integration.",
    },
    {
      number: "02",
      title: "API",
      tech: "REST / Axios",
      description:
        "Structured REST endpoints connecting frontend workflows with backend services.",
    },
    {
      number: "03",
      title: "SERVICE",
      tech: "Spring Boot / MVC",
      description:
        "Layered Controller → Service → Repository architecture with DTOs and exception handling.",
    },
    {
      number: "04",
      title: "SECURITY",
      tech: "Spring Security / JWT",
      description:
        "Stateless authentication and role-based authorization across protected workflows.",
    },
    {
      number: "05",
      title: "DATA",
      tech: "MySQL / PostgreSQL",
      description:
        "Normalized relational schemas, constraints, relationships and database integrity.",
    },
    {
      number: "06",
      title: "DELIVERY",
      tech: "Docker / GitHub / Cloud",
      description:
        "Containerized environments, version control, CI/CD exposure and cloud deployment.",
    },
  ];

  return (
    <section id="architecture" className="section architecture-section">
      <div className="section-container">
        <Reveal>
          <div className="section-header">
            <div>
              <p className="section-code">06 — ENGINEERING APPROACH</p>
              <h2 className="section-title">
                From
                <br />
                <span>request → runtime.</span>
              </h2>
            </div>

            <div className="section-index">ARCH / 006</div>
          </div>
        </Reveal>

        <Reveal>
          <div className="architecture-intro">
            <p>
              I don't treat frontend, backend and database as separate
              islands. My Java projects are built as connected systems where
              the data model, API contract, security boundary and UI workflow
              support each other.
            </p>
          </div>
        </Reveal>

        <div className="architecture-stack">
          {layers.map((layer, index) => (
            <Reveal
              key={layer.number}
              className="architecture-layer"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="architecture-number">{layer.number}</div>

              <div className="architecture-title">
                <span>{layer.title}</span>
                <strong>{layer.tech}</strong>
              </div>

              <p>{layer.description}</p>

              <div className="architecture-arrow">→</div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="engineering-principles">
            <div className="principle">
              <span>01</span>
              <strong>SECURITY FIRST</strong>
              <p>JWT + RBAC + validation</p>
            </div>

            <div className="principle">
              <span>02</span>
              <strong>DATA INTEGRITY</strong>
              <p>Normalization + constraints</p>
            </div>

            <div className="principle">
              <span>03</span>
              <strong>TESTABLE CODE</strong>
              <p>JUnit 5 + Mockito</p>
            </div>

            <div className="principle">
              <span>04</span>
              <strong>SHIP READY</strong>
              <p>Docker + Git + CI/CD</p>
            </div>
          </div>
        </Reveal>
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
          <div className="section-header">
            <div>
              <p className="section-code">07 — EDUCATION</p>
              <h2 className="section-title">
                Foundation
                <br />
                <span>matters.</span>
              </h2>
            </div>

            <div className="section-index">EDU / 007</div>
          </div>
        </Reveal>

        <Reveal>
          <div className="education-command">
            <div className="education-big">B.E.</div>

            <div className="education-main">
              <p className="education-label">
                COMPUTER SCIENCE AND ENGINEERING
              </p>

              <h3>Dr. ACS College of Engineering</h3>

              <p className="education-location">
                Bengaluru, Karnataka · Graduated 2026
              </p>

              <div className="education-meta">
                <div>
                  <span>DEGREE</span>
                  <strong>Bachelor of Engineering</strong>
                </div>

                <div>
                  <span>FIELD</span>
                  <strong>Computer Science & Engineering</strong>
                </div>

                <div>
                  <span>CGPA</span>
                  <strong>8.00 / 10</strong>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   CERTIFICATIONS / LEARNING
   ========================================================= */

function Certifications() {
  const items = [
    {
      number: "01",
      title: "DATA STRUCTURES",
      text: "Building a stronger foundation in problem solving and algorithmic thinking.",
    },
    {
      number: "02",
      title: "OBJECT-ORIENTED DESIGN",
      text: "Applying OOP principles throughout Java application development.",
    },
    {
      number: "03",
      title: "BACKEND ENGINEERING",
      text: "Deepening Spring Boot, security, APIs, persistence and architecture.",
    },
    {
      number: "04",
      title: "CLOUD & DEVOPS",
      text: "Hands-on exposure to Docker, deployment platforms, GitHub Actions and AWS.",
    },
  ];

  return (
    <section className="section learning-section">
      <div className="section-container">
        <Reveal>
          <div className="section-header">
            <div>
              <p className="section-code">08 — CONTINUOUS LEARNING</p>
              <h2 className="section-title">
                Still
                <br />
                <span>leveling up.</span>
              </h2>
            </div>

            <div className="section-index">LEARN / 008</div>
          </div>
        </Reveal>

        <div className="learning-grid">
          {items.map((item, index) => (
            <Reveal
              key={item.number}
              className="learning-card"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <span>{item.number}</span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
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
    <section id="contact" className="contact-section">
      <div className="contact-grid" />

      <Reveal>
        <p className="section-code">09 — CONTACT</p>

        <h2>
          HAVE A
          <br />
          <span>PROBLEM TO BUILD?</span>
        </h2>

        <p className="contact-description">
          I'm looking for opportunities where I can contribute as a Java
          full-stack developer, work on real systems and continue growing as
          an engineer.
        </p>

        <div className="contact-actions">
          <a
            href="mailto:Srinivasrahul838@gmail.com"
            className="contact-email"
          >
            Srinivasrahul838@gmail.com
            <span>↗</span>
          </a>

          <a href="tel:+917337634886" className="contact-phone">
            +91 73376 34886
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/RAHUL2525252525"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span>↗</span>
          </a>

          <a href="#about">
            LinkedIn <span>↗</span>
          </a>

          <a href="/Rahul_S_ResumeFullStack.pdf" target="_blank" rel="noreferrer">
            Resume <span>↗</span>
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
    <footer>
      <div className="footer-left">
        RAHUL S<span>/</span>26
      </div>

      <div className="footer-center">
        JAVA FULL STACK · SOFTWARE ENGINEER
      </div>

      <div className="footer-right">
        © {new Date().getFullYear()} ALL RIGHTS RESERVED
      </div>
    </footer>
  );
}
