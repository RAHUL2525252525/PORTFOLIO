import React, { useEffect, useRef, useState } from "react";

import ShopSphere from "./projects/ShopSphere";
import BankSphere from "./projects/BankSphere";
import LifeDecisionAssistant from "./projects/LifeDecisionAssistant";
import AIExamCompanion from "./projects/AIExamCompanion";
import DigitalAnalyticsDashboard from "./projects/DigitalAnalyticsDashboard";

import "./index.css";

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
      window.scrollTo({ top: 0, behavior: "instant" });
    };

    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return route;
}

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

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="nav-container">
        <a href="#" className="logo">
          <span className="logo-mark">R</span>
          <span className="logo-name">Rahul S.</span>
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
          Let's talk
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
        <Reveal className="hero-left">
          <div className="hero-eyebrow">
            <span className="eyebrow-line" />
            SOFTWARE ENGINEER
          </div>

          <h1>
            Rahul
            <br />
            <span>S.</span>
          </h1>

          <p className="hero-role">
            Java Full Stack Developer
          </p>

          <p className="hero-description">
            Software Engineer building reliable full-stack applications with
            <strong> Java, Spring Boot, React.js and relational databases.</strong>
            Experienced in designing REST APIs, authentication workflows,
            role-based systems and production-style applications.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="hero-primary">
              View selected work
              <span>↗</span>
            </a>

            <a href="#contact" className="hero-secondary">
              Get in touch
            </a>
          </div>

          <div className="hero-meta">
            <span>
              <i />
              Bengaluru, India
            </span>

            <span className="meta-divider" />

            <span>Open to opportunities</span>
          </div>
        </Reveal>

        <Reveal className="hero-visual">
          <div className="profile-orbit orbit-one" />
          <div className="profile-orbit orbit-two" />

          <div className="profile-decoration decoration-top">
            <span>JAVA</span>
          </div>

          <div className="profile-decoration decoration-bottom">
            <span>FULL STACK</span>
          </div>

          <div className="profile-frame">
            <div className="profile-frame-inner">
              <img
                src="/rahul-profile.jpg"
                alt="Rahul S"
                className="profile-image"
              />
            </div>
          </div>

          <div className="profile-status">
            <span className="status-dot" />
            Building & shipping
          </div>

          <div className="hero-floating-card">
            <span className="floating-label">CURRENT FOCUS</span>
            <strong>Java + Spring Boot</strong>
            <span>React · REST APIs · SQL</span>
          </div>
        </Reveal>
      </div>

      <div className="hero-scroll">
        <span>SCROLL</span>
        <div className="scroll-line" />
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
          <div className="section-topline">
            <span>01</span>
            <span>ABOUT ME</span>
          </div>

          <h2 className="section-heading">
            I build systems that are
            <span> meant to work.</span>
          </h2>
        </Reveal>

        <div className="about-layout">
          <Reveal className="about-main">
            <p className="large-copy">
              I'm a <strong>Software Engineer</strong> focused on Java-based
              full-stack development. My strongest hands-on experience comes
              from building complete applications using Spring Boot, Spring
              Security, React.js and relational databases.
            </p>

            <p>
              I've worked end-to-end across application layers — from database
              modelling and DTOs to service logic, REST APIs, authentication,
              frontend state and responsive interfaces.
            </p>

            <p>
              My Java projects include an e-commerce platform and a role-based
              banking system. I also have hands-on experience building
              Python/Flask applications, particularly tools integrating
              external AI APIs.
            </p>
          </Reveal>

          <Reveal className="about-side">
            <div className="stat-card">
              <span className="stat-number">02</span>
              <div>
                <strong>Java full-stack systems</strong>
                <small>Spring Boot · React · SQL</small>
              </div>
            </div>

            <div className="stat-card">
              <span className="stat-number">03</span>
              <div>
                <strong>Python / Flask applications</strong>
                <small>Applied AI & Firebase tooling</small>
              </div>
            </div>

            <div className="stat-card">
              <span className="stat-number">15+</span>
              <div>
                <strong>REST endpoints</strong>
                <small>Validation · Security · Workflows</small>
              </div>
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
      title: "JAVA / BACKEND",
      description:
        "Primary development stack for full-stack application work.",
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
        "Building responsive interfaces connected to real backend workflows.",
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
        "Relational modelling plus practical experience with NoSQL systems.",
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
        "Structured backend systems with security and maintainability in mind.",
      items: [
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
      number: "05",
      title: "DEVOPS / CLOUD",
      description:
        "Practical tooling used to package, deploy and maintain applications.",
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
      title: "TESTING / ENGINEERING",
      description:
        "Engineering practices used to validate application behaviour.",
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
      ],
    },
    {
      number: "07",
      title: "PYTHON / FLASK",
      description:
        "Hands-on project experience, mainly for lightweight web applications and AI tooling.",
      items: [
        "Python",
        "Flask",
        "Firebase",
        "Groq API",
        "Gemini API",
        "OpenRouter API",
      ],
    },
    {
      number: "08",
      title: "DEVELOPMENT TOOLS",
      description:
        "Everyday tools used throughout development and delivery.",
      items: [
        "VS Code",
        "IntelliJ IDEA",
        "Postman",
        "GitHub",
        "GitHub Actions",
        "Maven",
      ],
    },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="section-container">
        <Reveal>
          <div className="section-topline">
            <span>02</span>
            <span>TECHNICAL SKILLS</span>
          </div>

          <h2 className="section-heading">
            The tools behind
            <span> the work.</span>
          </h2>
        </Reveal>

        <div className="skills-layout">
          {groups.map((group) => (
            <Reveal key={group.number}>
              <article className="skill-card">
                <div className="skill-card-top">
                  <span>{group.number}</span>
                  <div className="skill-arrow">↗</div>
                </div>

                <h3>{group.title}</h3>

                <p>{group.description}</p>

                <div className="skill-tags">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
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
          <div className="section-topline">
            <span>03</span>
            <span>EXPERIENCE</span>
          </div>

          <h2 className="section-heading">
            Where I've been
            <span> building.</span>
          </h2>
        </Reveal>

        <Reveal>
          <article className="experience-feature">
            <div className="experience-number">01</div>

            <div className="experience-main">
              <div className="experience-heading">
                <div>
                  <span className="experience-type">INTERNSHIP</span>
                  <h3>Web Development Intern</h3>
                  <h4>MR Tech Lab</h4>
                </div>

                <span className="experience-date">
                  JAN 2026 — MAY 2026
                </span>
              </div>

              <div className="experience-grid">
                <p>
                  Translated design specifications into responsive
                  HTML/CSS/JavaScript interfaces with consistent browser
                  rendering across Chrome, Firefox and Safari.
                </p>

                <p>
                  Integrated Firebase Authentication and session management,
                  resolving authentication issues identified during QA before
                  launch.
                </p>

                <p>
                  Independently built and shipped three web applications using
                  HTML/CSS/JS, Python/Flask and Firebase, strengthening
                  full-stack fundamentals later applied to Java development.
                </p>

                <p>
                  Collaborated within an Agile, Git-based workflow and
                  delivered assigned UI features across multiple sprints.
                </p>
              </div>

              <div className="experience-stack">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Python</span>
                <span>Flask</span>
                <span>Firebase</span>
                <span>Git</span>
                <span>Agile</span>
              </div>
            </div>
          </article>
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
    type: "JAVA FULL STACK",
    name: "ShopSphere",
    shortName: "SHOP",
    desc:
      "Full-stack e-commerce platform built around structured product, cart, wishlist, checkout and order workflows.",
    highlight: "6 modules · 15+ validated REST endpoints",
    tech: ["Java 17", "Spring Boot", "React.js", "MySQL"],
    date: "APR 2026 — JUN 2026",
    accent: "orange",

    images: [
      "/1.png.png",
      "/2.png.png",
      "/3.png.png",
      "/4.png.png",
      "/5.png.png",
      "/6.png.png",
      "/7.png.png",
      "/8.png.png",
      "/9.png.png",
      "/10.png.png",
      "/11.png.png",
      "/12.png.png",
      "/13.png.png",
    ],
  },

  {
    route: "banksphere",
    number: "02",
    type: "JAVA FULL STACK",
    name: "Online Banking System",
    shortName: "BANK",
    desc:
      "Role-based banking application with secure account, transaction and administrative workflows.",
    highlight: "JWT security · 3 permission tiers",
    tech: [
      "Java 17",
      "Spring Boot",
      "Spring Security",
      "React.js",
      "MySQL",
      "PostgreSQL",
      "Docker",
    ],
    date: "JUN 2026 — AUG 2026",
    accent: "blue",

    images: [
      "/14.png.png",
      "/15.png.png",
      "/16.png.png",
      "/17.png.png",
      "/18.png.png",
      "/19.png.png",
      "/20.png.png",
      "/21.png.png",
      "/22.png.png",
      "/23.png.png",
    ],
  },

  {
    route: "lifedecisionassistant",
    number: "03",
    type: "PYTHON / FLASK",
    name: "Life Decision Assistant",
    shortName: "LIFE",
    desc:
      "AI-powered decision support application connecting multiple LLM providers through a unified backend.",
    highlight: "3 LLM providers behind one interface",
    tech: ["Python", "Flask", "Firebase", "Groq API", "Gemini API"],
    date: "2026",
    accent: "purple",

    images: [
      "/24.png.png",
      "/25.png.png",
      "/26.png.png",
      "/27.png.png",
      "/28.png.png",
      "/29.png.png",
      "/30.png.png",
      "/31.png.png",
    ],
  },

  {
    route: "aiexamcompanion",
    number: "04",
    type: "PYTHON / FLASK",
    name: "AI Exam Companion",
    shortName: "EXAM",
    desc:
      "AI-assisted exam preparation tool generating practice questions and maintaining session history.",
    highlight: "AI-generated practice question sets",
    tech: ["Python", "Flask", "MongoDB", "Groq API"],
    date: "2026",
    accent: "green",

    images: [
      "/32.png.png",
      "/33.png.png",
      "/34.png.png",
      "/35.png.png",
      "/36.png.png",
      "/37.png.png",
    ],
  },

  {
    route: "digitalanalyticsdashboard",
    number: "05",
    type: "JAVASCRIPT / FIREBASE",
    name: "Digital Analytics Dashboard",
    shortName: "DATA",
    desc:
      "Analytics dashboard using Google OAuth and Firebase-backed storage to track application usage metrics.",
    highlight: "Google OAuth + Firebase backend",
    tech: ["JavaScript", "Firebase", "Google OAuth", "Chart.js"],
    date: "2026",
    accent: "cyan",

    images: [
      "/38.png.png",
      "/39.png.png",
      "/40.png.png",
      "/41.png.png",
      "/42.png.png",
    ],
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
          <div className="section-topline">
            <span>04</span>
            <span>SELECTED PROJECTS</span>
          </div>

          <div className="projects-heading-row">
            <h2 className="section-heading">
              Work that shows
              <span> how I build.</span>
            </h2>

            <p className="projects-intro">
              Java is my primary full-stack stack. Python/Flask work represents
              additional hands-on experience, primarily across AI-assisted web
              applications.
            </p>
          </div>
        </Reveal>

        <div className="projects-list">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.route} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const openProject = () => {
    window.location.hash = `/${project.route}`;
  };

  return (
    <Reveal>
      <article
        className={`project-card project-${project.accent}`}
        onClick={openProject}
      >
        <div className="project-card-number">
          {project.number}
        </div>

        <div className="project-card-main">
          <div className="project-card-meta">
            <span>{project.type}</span>
            <span>{project.date}</span>
          </div>

          <h3>{project.name}</h3>

          <p>{project.desc}</p>

          <div className="project-highlight">
            <span>↗</span>
            {project.highlight}
          </div>

          <div className="project-tech">
            {project.tech.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <button
            className="project-open"
            onClick={(event) => {
              event.stopPropagation();
              openProject();
            }}
          >
            View case study
            <span>↗</span>
          </button>
        </div>

        <ProjectPreview project={project} />
      </article>
    </Reveal>
  );
}

/* =========================================================
   PROJECT PREVIEW
   ========================================================= */

function ProjectPreview({ project }) {
  const [imageError, setImageError] = useState(false);

  const firstImage = project.images?.[0];

  return (
    <div className={`project-preview preview-${project.accent}`}>
      <div className="preview-browser">
        <div className="browser-top">
          <div className="browser-dots">
            <i />
            <i />
            <i />
          </div>

          <div className="browser-address">
            {project.shortName.toLowerCase()}.app
          </div>

          <div className="browser-icon">↗</div>
        </div>

        <div className="browser-screen">
          {!imageError && firstImage ? (
            <img
              src={firstImage}
              alt={`${project.name} preview`}
              onError={() => setImageError(true)}
            />
          ) : (
            <FallbackPreview project={project} />
          )}

          <div className="preview-overlay">
            <span>{project.number}</span>
            <strong>{project.shortName}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

function FallbackPreview({ project }) {
  return (
    <div className="fallback-preview">
      <div className="fallback-grid" />

      <div className="fallback-content">
        <span className="fallback-small">
          {project.type}
        </span>

        <strong>{project.name}</strong>

        <div className="fallback-lines">
          <i />
          <i />
          <i />
        </div>

        <div className="fallback-pill">
          {project.shortName}
        </div>
      </div>
    </div>
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
          <div className="section-topline">
            <span>05</span>
            <span>EDUCATION</span>
          </div>

          <h2 className="section-heading">
            Academic
            <span> foundation.</span>
          </h2>
        </Reveal>

        <Reveal>
          <article className="education-feature">
            <div className="education-degree">
              <span>B.E</span>
              <small>2026</small>
            </div>

            <div className="education-info">
              <span className="education-label">
                COMPUTER SCIENCE & ENGINEERING
              </span>

              <h3>
                Dr. ACS College of Engineering
              </h3>

              <p>
                Bengaluru, Karnataka
              </p>
            </div>

            <div className="education-score">
              <span>CGPA</span>
              <strong>8.00</strong>
              <small>/ 10</small>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   CERTIFICATIONS
   ========================================================= */

function Certifications() {
  const certs = [
    {
      number: "01",
      title: "Java Full Stack Development",
      description: "Full-stack application development",
    },
    {
      number: "02",
      title: "Spring Boot & REST APIs",
      description: "Backend services and API architecture",
    },
    {
      number: "03",
      title: "React.js",
      description: "Modern frontend development",
    },
    {
      number: "04",
      title: "SQL & Database Design",
      description: "Relational data and database modelling",
    },
  ];

  return (
    <section className="section certifications-section">
      <div className="section-container">
        <Reveal>
          <div className="section-topline">
            <span>06</span>
            <span>LEARNING</span>
          </div>

          <h2 className="section-heading">
            Always
            <span> improving.</span>
          </h2>
        </Reveal>

        <div className="certifications-grid">
          {certs.map((cert) => (
            <Reveal key={cert.number}>
              <article className="cert-card">
                <span className="cert-number">
                  {cert.number}
                </span>

                <div>
                  <h3>{cert.title}</h3>
                  <p>{cert.description}</p>
                </div>

                <span className="cert-arrow">↗</span>
              </article>
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
      <div className="contact-background">
        <div className="contact-circle circle-one" />
        <div className="contact-circle circle-two" />
      </div>

      <div className="section-container contact-container">
        <Reveal>
          <div className="contact-eyebrow">
            <span />
            HAVE A PROJECT OR OPPORTUNITY?
          </div>

          <h2>
            Let's build something
            <br />
            <span>worth shipping.</span>
          </h2>

          <p className="contact-description">
            Looking for a Software Engineer who enjoys taking features from
            idea to implementation.
          </p>

          <a
            href="mailto:Srinivasrahul838@gmail.com"
            className="email-link"
          >
            Srinivasrahul838@gmail.com
            <span>↗</span>
          </a>

          <div className="contact-details">
            <span>Bengaluru, India</span>
            <span>·</span>
            <span>+91 7337634886</span>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/RAHUL2525252525"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span>↗</span>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span>↗</span>
            </a>

            <a href="#projects">
              Projects <span>↗</span>
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
      <div className="footer-inner">
        <span>RAHUL S.</span>

        <span>
          SOFTWARE ENGINEER · JAVA FULL STACK
        </span>

        <span>
          © {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
