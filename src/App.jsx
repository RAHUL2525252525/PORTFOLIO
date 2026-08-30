import React, { useEffect, useRef, useState } from "react";

import ShopSphere from "./projects/ShopSphere";
import BankSphere from "./projects/BankSphere";
import LifeDecisionAssistant from "./projects/LifeDecisionAssistant";
import AIExamCompanion from "./projects/AIExamCompanion";
import DigitalAnalyticsDashboard from "./projects/DigitalAnalyticsDashboard";

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
   APP
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

      <main>
        <Hero />

        <About />

        <Skills />

        <Experience />

        <Projects />

        <Education />

        <Certifications />

        <Contact />
      </main>

      <Footer />

    </div>
  );
}

/* =========================================================
   NAVBAR
   ========================================================= */

function Navbar() {
  return (
    <header className="navbar">

      <div className="nav-inner">

        <a href="#" className="nav-logo">
          <span className="nav-logo-index">01</span>
          <span className="nav-logo-name">
            RAHUL<span>.</span>
          </span>
        </a>

        <nav className="nav-links">

          <a href="#about">
            <span>01</span>
            About
          </a>

          <a href="#skills">
            <span>02</span>
            Skills
          </a>

          <a href="#experience">
            <span>03</span>
            Experience
          </a>

          <a href="#projects">
            <span>04</span>
            Work
          </a>

          <a href="#contact">
            <span>05</span>
            Contact
          </a>

        </nav>

        <a
          href="/Rahul_S_ResumeFullStack.pdf"
          className="nav-resume"
          target="_blank"
          rel="noreferrer"
        >
          <span>RESUME</span>
          <span>↗</span>
        </a>

      </div>

    </header>
  );
}

/* =========================================================
   HERO
   ========================================================= */

function Hero() {
  return (
    <section className="hero-section">

      <div className="hero-grid-lines" />

      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-top-meta">

        <span>SOFTWARE ENGINEER</span>

        <span className="meta-line" />

        <span>BENGALURU / INDIA</span>

        <span className="meta-status">
          <i />
          OPEN TO WORK
        </span>

      </div>

      <div className="hero-content">

        <div className="hero-side-label">
          <span>FULL STACK</span>
          <span>ENGINEERING</span>
          <span>2026</span>
        </div>

        <div className="hero-main">

          <p className="hero-eyebrow">
            JAVA · SPRING BOOT · REACT · MYSQL
          </p>

          <h1>
            RAHUL
            <br />
            <span>S</span>
          </h1>

          <div className="hero-title-row">

            <div className="hero-title">
              SOFTWARE
              <br />
              ENGINEER
            </div>

            <p className="hero-intro">
              I build full-stack applications with Java, Spring Boot
              and React — designing the backend architecture,
              database layer, security model and frontend experience
              as one system.
            </p>

          </div>

        </div>

      </div>

      <div className="hero-bottom">

        <div className="hero-scroll">
          <span className="scroll-arrow">↓</span>
          <span>SCROLL TO EXPLORE</span>
        </div>

        <div className="hero-stack">

          <span>JAVA 17</span>
          <span>SPRING BOOT</span>
          <span>SPRING SECURITY</span>
          <span>REACT</span>
          <span>MYSQL</span>

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

      <div className="section-number">01</div>

      <div className="section-container">

        <Reveal className="section-heading">

          <p className="section-kicker">
            / PROFILE
          </p>

          <h2>
            ENGINEERING
            <br />
            <span>WITH PURPOSE.</span>
          </h2>

        </Reveal>

        <div className="about-layout">

          <Reveal className="about-statement">

            <div className="statement-mark">
              +
            </div>

            <p>
              Software Engineer focused on building reliable
              full-stack systems using Java, Spring Boot,
              React.js and relational databases.
            </p>

          </Reveal>

          <Reveal className="about-copy">

            <p>
              My strongest hands-on experience is in Java full-stack
              development. I enjoy taking a feature from database
              design and backend architecture through REST APIs,
              authentication and finally into the React interface.
            </p>

            <p>
              My project work includes ShopSphere, a full-stack
              e-commerce platform, and Online Banking System,
              a security-focused banking application using
              Spring Security and JWT.
            </p>

            <p>
              I also have hands-on experience with Python and Flask,
              where I built web applications integrating AI APIs,
              Firebase and MongoDB.
            </p>

            <a href="#projects" className="text-link">
              EXPLORE SELECTED WORK
              <span>↗</span>
            </a>

          </Reveal>

        </div>

        <div className="about-metrics">

          <div>
            <strong>02</strong>
            <span>JAVA FULL STACK<br />CORE PROJECTS</span>
          </div>

          <div>
            <strong>15+</strong>
            <span>REST API<br />ENDPOINTS</span>
          </div>

          <div>
            <strong>08+</strong>
            <span>RELATIONAL<br />ENTITIES</span>
          </div>

          <div>
            <strong>03</strong>
            <span>PYTHON / FLASK<br />APPLICATIONS</span>
          </div>

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
      title: "JAVA / BACKEND",
      description:
        "Primary engineering stack for full-stack application development.",
      items: [
        "Java 17",
        "Spring Boot",
        "Spring MVC",
        "Spring Security",
        "Spring Data JPA",
        "Hibernate",
        "REST APIs",
        "Maven",
      ],
    },
    {
      number: "02",
      title: "FRONTEND",
      description:
        "Building responsive interfaces connected to production-style APIs.",
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
      description:
        "Relational modeling, constraints and practical data persistence.",
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
      description:
        "Application structure and secure backend workflows.",
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
      description:
        "Containerization, source control and deployment fundamentals.",
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
      title: "TESTING / CS",
      description:
        "Engineering fundamentals used while building and validating software.",
      items: [
        "JUnit 5",
        "Mockito",
        "Postman",
        "Unit Testing",
        "Agile / Scrum",
        "Code Reviews",
        "DSA",
        "OOP",
        "DBMS",
        "Software Engineering",
      ],
    },
  ];

  return (
    <section id="skills" className="section skills-section">

      <div className="section-number">02</div>

      <div className="section-container">

        <Reveal className="section-heading">

          <p className="section-kicker">
            / TECHNICAL CAPABILITIES
          </p>

          <h2>
            THE TOOLS
            <br />
            <span>BEHIND THE WORK.</span>
          </h2>

        </Reveal>

        <div className="skills-list">

          {groups.map((group) => (

            <Reveal
              key={group.number}
              className="skill-row"
            >

              <div className="skill-number">
                {group.number}
              </div>

              <div className="skill-title">

                <h3>{group.title}</h3>

                <p>{group.description}</p>

              </div>

              <div className="skill-items">

                {group.items.map((item) => (
                  <span key={item}>
                    {item}
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
    <section id="experience" className="section experience-section">

      <div className="section-number">03</div>

      <div className="section-container">

        <Reveal className="section-heading">

          <p className="section-kicker">
            / EXPERIENCE
          </p>

          <h2>
            WHERE I
            <br />
            <span>BUILT.</span>
          </h2>

        </Reveal>

        <Reveal className="experience-layout">

          <div className="experience-index">
            01
          </div>

          <div className="experience-main">

            <div className="experience-top">

              <div>

                <p className="experience-type">
                  INTERNSHIP
                </p>

                <h3>
                  Web Development
                  <br />
                  Intern
                </h3>

                <p className="experience-company">
                  MR TECH LAB · BENGALURU
                </p>

              </div>

              <div className="experience-date">
                JAN 2026
                <br />
                —
                <br />
                MAY 2026
              </div>

            </div>

            <div className="experience-divider" />

            <div className="experience-description">

              <p>
                Translated design specifications into responsive
                HTML/CSS/JS interfaces and worked across Chrome,
                Firefox and Safari.
              </p>

              <p>
                Integrated Firebase Authentication and session
                management, resolving authentication issues
                identified during QA.
              </p>

              <p>
                Independently built and shipped three web
                applications using HTML/CSS/JS, Python/Flask
                and Firebase.
              </p>

              <p>
                Collaborated in an Agile, Git-based workflow and
                delivered assigned UI features across multiple
                development sprints.
              </p>

            </div>

            <div className="experience-tools">

              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Python</span>
              <span>Flask</span>
              <span>Firebase</span>
              <span>Git</span>

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
    number: "01",
    type: "JAVA / FULL STACK",
    name: "ShopSphere",
    short:
      "Full-stack e-commerce platform engineered around layered Spring Boot architecture and React.",
    description:
      "A production-style e-commerce system covering product browsing, cart, wishlist, checkout and order management.",
    stats: [
      "6 MODULES",
      "15+ REST APIs",
      "ADMIN / CUSTOMER",
    ],
    tech: [
      "Java 17",
      "Spring Boot 3",
      "React.js",
      "Spring Data JPA",
      "MySQL",
      "REST APIs",
    ],
  },

  {
    route: "banksphere",
    number: "02",
    type: "JAVA / SECURITY",
    name: "Online Banking System",
    short:
      "Security-focused banking application built around JWT authentication and role-based workflows.",
    description:
      "A full-stack banking system with account, transaction and administrative workflows backed by normalized relational data.",
    stats: [
      "JWT SECURITY",
      "3 PERMISSION TIERS",
      "8+ ENTITIES",
    ],
    tech: [
      "Java 17",
      "Spring Boot 3",
      "Spring Security",
      "JWT",
      "React.js",
      "MySQL",
      "PostgreSQL",
      "Docker",
    ],
  },

  {
    route: "lifedecisionassistant",
    number: "03",
    type: "PYTHON / FLASK",
    name: "Life Decision Assistant",
    short:
      "AI-assisted decision support application connecting multiple LLM providers behind one backend.",
    description:
      "Hands-on Python/Flask project integrating Groq, Gemini and OpenRouter APIs with Firebase authentication.",
    stats: [
      "3 LLM PROVIDERS",
      "PYTHON / FLASK",
      "FIREBASE",
    ],
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
    route: "aiexamcompanion",
    number: "04",
    type: "PYTHON / FLASK",
    name: "AI Exam Companion",
    short:
      "AI-powered exam preparation application for generating practice questions and tracking sessions.",
    description:
      "Hands-on Flask application using AI generation and MongoDB-based session history.",
    stats: [
      "AI QUESTIONS",
      "MONGODB",
      "FLASK",
    ],
    tech: [
      "Python",
      "Flask",
      "MongoDB",
      "Groq API",
    ],
  },

  {
    route: "digitalanalyticsdashboard",
    number: "05",
    type: "JAVASCRIPT / FIREBASE",
    name: "Digital Analytics Dashboard",
    short:
      "Analytics interface with OAuth authentication and Firebase-backed application data.",
    description:
      "Hands-on web application focused on authenticated analytics and data visualization.",
    stats: [
      "GOOGLE OAUTH",
      "FIREBASE",
      "CHART.JS",
    ],
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
  return (
    <section id="projects" className="section projects-section">

      <div className="section-number">04</div>

      <div className="section-container">

        <Reveal className="projects-heading">

          <div>

            <p className="section-kicker">
              / SELECTED WORK
            </p>

            <h2>
              SYSTEMS
              <br />
              <span>I'VE BUILT.</span>
            </h2>

          </div>

          <p className="projects-heading-copy">
            My primary project work is centered around Java,
            Spring Boot, React and relational database systems.
            Python/Flask projects represent additional
            hands-on application development and AI integration.
          </p>

        </Reveal>

        <div className="projects-list">

          {PROJECTS.map((project) => (

            <Reveal
              key={project.route}
              className="project-item"
            >

              <button
                className="project-open"
                onClick={() => {
                  window.location.hash = `/${project.route}`;
                }}
                aria-label={`Open ${project.name}`}
              >

                <div className="project-number">
                  {project.number}
                </div>

                <div className="project-main">

                  <div className="project-meta">
                    {project.type}
                  </div>

                  <h3>
                    {project.name}
                  </h3>

                  <p className="project-short">
                    {project.short}
                  </p>

                  <div className="project-stat-row">

                    {project.stats.map((stat) => (
                      <span key={stat}>
                        {stat}
                      </span>
                    ))}

                  </div>

                </div>

                <div className="project-side">

                  <span className="project-arrow">
                    ↗
                  </span>

                  <div className="project-tech-list">

                    {project.tech.slice(0, 5).map((tech) => (
                      <span key={tech}>
                        {tech}
                      </span>
                    ))}

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
   EDUCATION
   ========================================================= */

function Education() {
  return (
    <section id="education" className="section education-section">

      <div className="section-number">05</div>

      <div className="section-container">

        <Reveal className="section-heading">

          <p className="section-kicker">
            / EDUCATION
          </p>

          <h2>
            FOUNDATION
            <br />
            <span>MATTERS.</span>
          </h2>

        </Reveal>

        <Reveal className="education-layout">

          <div className="education-mark">
            B.E
          </div>

          <div className="education-main">

            <p className="education-label">
              BACHELOR OF ENGINEERING
            </p>

            <h3>
              Computer Science
              <br />
              and Engineering
            </h3>

            <p className="education-institute">
              Dr. ACS College of Engineering
              <br />
              Bengaluru, Karnataka
            </p>

          </div>

          <div className="education-score">

            <span>CGPA</span>

            <strong>
              8.00
            </strong>

            <small>
              / 10
            </small>

            <p>
              GRADUATED 2026
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
    "Java Full Stack Development",
    "Spring Boot & REST APIs",
    "React.js Fundamentals",
    "SQL & Database Design",
  ];

  return (
    <section className="section certification-section">

      <div className="section-number">06</div>

      <div className="section-container">

        <Reveal className="section-heading">

          <p className="section-kicker">
            / CONTINUOUS LEARNING
          </p>

          <h2>
            ALWAYS
            <br />
            <span>IMPROVING.</span>
          </h2>

        </Reveal>

        <div className="certification-list">

          {certifications.map((cert, index) => (

            <Reveal
              key={cert}
              className="certification-item"
            >

              <span>
                0{index + 1}
              </span>

              <h3>
                {cert}
              </h3>

              <i>
                ↗
              </i>

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

      <div className="contact-container">

        <Reveal>

          <p className="section-kicker">
            / GET IN TOUCH
          </p>

          <h2>
            LET'S BUILD
            <br />
            <span>SOMETHING.</span>
          </h2>

          <p className="contact-description">
            Looking for an opportunity to contribute to real
            software products, work with strong engineering
            teams and continue growing as a Java full-stack
            engineer.
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
              BENGALURU, INDIA
            </span>

          </div>

          <div className="contact-social">

            <a
              href="https://github.com/RAHUL2525252525"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB ↗
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN ↗
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
        RAHUL S
      </div>

      <div>
        SOFTWARE ENGINEER
      </div>

      <div>
        © {new Date().getFullYear()}
      </div>

    </footer>
  );
}
