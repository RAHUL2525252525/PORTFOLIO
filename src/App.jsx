import React, { useEffect, useRef, useState } from "react";

import ShopSphere from "./projects/ShopSphere";
import BankSphere from "./projects/BankSphere";
import LifeDecisionAssistant from "./projects/LifeDecisionAssistant";
import AIExamCompanion from "./projects/AIExamCompanion";
import DigitalAnalyticsDashboard from "./projects/DigitalAnalyticsDashboard";

const ROUTES = {
  shopsphere: ShopSphere,
  banksphere: BankSphere,
  lifedecisionassistant: LifeDecisionAssistant,
  aiexamcompanion: AIExamCompanion,
  digitalanalyticsdashboard: DigitalAnalyticsDashboard,
};

/* =========================================================
   ROUTING
   ========================================================= */

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
  delay = 0,
  ...rest
}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.08,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "in-view" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
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
      <div className="nav-inner">
        <a href="#" className="brand">
          <span className="brand-mark">RS</span>
          <span className="brand-name">Rahul S.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="/Rahul_S_ResumeFullStack.pdf"
          className="nav-resume"
          target="_blank"
          rel="noreferrer"
        >
          Resume
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
    <section className="hero">
      <div className="hero-grid" />
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-inner">
        <div className="hero-copy">
          <Reveal className="hero-kicker">
            <span className="kicker-line" />
            SOFTWARE ENGINEER
          </Reveal>

          <Reveal delay={80}>
            <h1 className="hero-title">
              RAHUL
              <br />
              <span>S.</span>
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="hero-subtitle">
              Building reliable full-stack systems with{" "}
              <strong>Java, Spring Boot & React.js.</strong>
            </p>
          </Reveal>

          <Reveal delay={220}>
            <p className="hero-description">
              Software Engineer focused on backend architecture, secure REST
              APIs, database design and production-ready web applications.
              Hands-on experience spans e-commerce, banking and applied AI
              tools.
            </p>
          </Reveal>

          <Reveal delay={290} className="hero-actions">
            <a href="#projects" className="button button-primary">
              Explore my work
              <span>↓</span>
            </a>

            <a href="#contact" className="button button-ghost">
              Let's connect
              <span>↗</span>
            </a>
          </Reveal>

          <Reveal delay={360} className="hero-meta">
            <div>
              <span className="meta-dot" />
              Bengaluru, India
            </div>

            <div>Open to opportunities</div>
          </Reveal>
        </div>

        <Reveal delay={120} className="hero-portrait-area">
          <div className="portrait-number">01</div>

          <div className="portrait-frame">
            <div className="portrait-top-label">
              <span>PROFILE</span>
              <span>2026</span>
            </div>

            <div className="portrait-image-wrap">
              <img
                src="/rahul-profile.jpg"
                alt="Rahul S"
                className="profile-image"
              />

              <div className="portrait-overlay" />
            </div>

            <div className="portrait-bottom">
              <div>
                <span className="portrait-label">ROLE</span>
                <strong>Software Engineer</strong>
              </div>

              <div className="portrait-arrow">↗</div>
            </div>
          </div>

          <div className="floating-code-card">
            <span>01</span>
            <div>
              <small>PRIMARY STACK</small>
              <strong>JAVA / SPRING</strong>
            </div>
          </div>

          <div className="vertical-caption">
            FULL STACK · BACKEND · WEB
          </div>
        </Reveal>
      </div>

      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
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
      <div className="section-shell">
        <div className="section-index">01 / ABOUT</div>

        <div className="about-layout">
          <Reveal>
            <h2 className="display-heading">
              I don't just write
              <br />
              <span>features.</span>
              <br />
              I build systems.
            </h2>
          </Reveal>

          <div className="about-content">
            <Reveal delay={100}>
              <p className="large-copy">
                I'm a Software Engineer with hands-on experience building
                full-stack applications using Java, Spring Boot, React.js and
                relational databases.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <p>
                My strongest work is in structured systems where backend
                correctness matters — authentication, authorization, REST
                APIs, validation, database relationships and reliable
                application workflows.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <p>
                I've built and shipped Java-based e-commerce and banking
                applications, while also developing applied Python/Flask
                projects integrating AI APIs.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="about-signature">
                <span>RAHUL S.</span>
                <small>SOFTWARE ENGINEER</small>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal className="stats-strip">
          <div className="stat">
            <strong>02</strong>
            <span>Java Full Stack Systems</span>
          </div>

          <div className="stat">
            <strong>15+</strong>
            <span>REST API Endpoints</span>
          </div>

          <div className="stat">
            <strong>03</strong>
            <span>Applied Python / Flask Apps</span>
          </div>

          <div className="stat">
            <strong>08+</strong>
            <span>Relational Entities</span>
          </div>
        </Reveal>
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
      title: "Languages",
      items: ["Java", "JavaScript ES6+", "SQL", "HTML5", "CSS3"],
    },
    {
      number: "02",
      title: "Java Full Stack",
      items: [
        "Spring Boot",
        "Spring MVC",
        "Spring Security",
        "Spring Data JPA",
        "Hibernate",
        "React.js",
        "Axios",
      ],
    },
    {
      number: "03",
      title: "APIs & Architecture",
      items: [
        "REST API Design",
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
      number: "04",
      title: "Databases",
      items: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Database Design",
        "Normalization",
        "Relational Modeling",
      ],
    },
    {
      number: "05",
      title: "Cloud & DevOps",
      items: [
        "Docker",
        "Docker Compose",
        "Maven",
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
      title: "Testing & Practices",
      items: [
        "JUnit 5",
        "Mockito",
        "Postman",
        "Agile / Scrum",
        "Code Reviews",
        "Unit Testing",
        "DSA",
        "OOP",
        "DBMS",
      ],
    },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="section-shell">
        <div className="section-index">02 / TOOLKIT</div>

        <div className="skills-heading">
          <Reveal>
            <h2 className="display-heading">
              Tools I use to turn
              <br />
              ideas into <span>software.</span>
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p>
              A practical engineering stack built around Java backend
              development, modern frontend systems, databases and deployment
              workflows.
            </p>
          </Reveal>
        </div>

        <div className="skills-list">
          {groups.map((group, index) => (
            <Reveal key={group.title} delay={index * 60}>
              <div className="skill-row">
                <span className="skill-number">{group.number}</span>

                <h3>{group.title}</h3>

                <div className="skill-items">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <span className="skill-arrow">↗</span>
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
      <div className="section-shell">
        <div className="section-index">03 / EXPERIENCE</div>

        <div className="experience-intro">
          <Reveal>
            <h2 className="display-heading">
              Learning by
              <br />
              <span>shipping.</span>
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p>
              My professional foundation started with web development and grew
              into hands-on Java full-stack engineering through real project
              work.
            </p>
          </Reveal>
        </div>

        <Reveal className="experience-timeline">
          <div className="timeline-line" />

          <div className="experience-entry">
            <div className="experience-date">
              <span>01/2026</span>
              <span>05/2026</span>
            </div>

            <div className="experience-marker">
              <span />
            </div>

            <div className="experience-main">
              <div className="experience-top">
                <div>
                  <span className="experience-type">INTERNSHIP</span>
                  <h3>Web Development Intern</h3>
                  <h4>MR Tech Lab · Bengaluru</h4>
                </div>

                <span className="experience-year">2026</span>
              </div>

              <p className="experience-summary">
                Built responsive web interfaces, integrated Firebase
                authentication and independently shipped three web
                applications using HTML/CSS/JavaScript, Python/Flask and
                Firebase.
              </p>

              <div className="experience-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Python</span>
                <span>Flask</span>
                <span>Firebase</span>
                <span>Agile</span>
                <span>Git</span>
              </div>
            </div>
          </div>

          <div className="experience-entry personal-work">
            <div className="experience-date">
              <span>2026</span>
              <span>NOW</span>
            </div>

            <div className="experience-marker">
              <span />
            </div>

            <div className="experience-main">
              <div className="experience-top">
                <div>
                  <span className="experience-type">ENGINEERING WORK</span>
                  <h3>Java Full Stack Projects</h3>
                  <h4>Independent Engineering Work</h4>
                </div>

                <span className="experience-year">02 SYSTEMS</span>
              </div>

              <p className="experience-summary">
                Designed and developed full-stack Java applications using
                Spring Boot, Spring Security, React.js, JPA and relational
                databases, with emphasis on secure workflows and maintainable
                architecture.
              </p>

              <div className="experience-tags">
                <span>Java 17</span>
                <span>Spring Boot</span>
                <span>Spring Security</span>
                <span>React.js</span>
                <span>MySQL</span>
                <span>JWT</span>
                <span>Docker</span>
                <span>JUnit 5</span>
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
    number: "01",
    type: "JAVA / FULL STACK",
    name: "ShopSphere",
    description:
      "A full-stack e-commerce system designed around real product, cart, wishlist, checkout and order workflows.",
    detail:
      "Layered Spring Boot architecture with React.js frontend, Spring Data JPA and MySQL.",
    tech: ["Java 17", "Spring Boot 3", "React.js", "MySQL"],
    accent: "blue",
    status: "PRIMARY JAVA PROJECT",
  },
  {
    route: "banksphere",
    number: "02",
    type: "JAVA / SECURITY",
    name: "BankSphere",
    description:
      "A role-based banking application focused on secure authentication, account workflows and transaction operations.",
    detail:
      "JWT authentication, Spring Security, normalized relational data and Docker-based deployment.",
    tech: ["Java 17", "Spring Security", "React.js", "MySQL", "Docker"],
    accent: "navy",
    status: "PRIMARY JAVA PROJECT",
  },
  {
    route: "lifedecisionassistant",
    number: "03",
    type: "PYTHON / FLASK / AI",
    name: "Life Decision Assistant",
    description:
      "An applied AI tool that brings multiple LLM providers behind one decision-support interface.",
    detail:
      "Hands-on Python/Flask project integrating Groq, Gemini and OpenRouter APIs.",
    tech: ["Python", "Flask", "Groq", "Gemini", "OpenRouter"],
    accent: "violet",
    status: "APPLIED PROJECT",
  },
  {
    route: "aiexamcompanion",
    number: "04",
    type: "PYTHON / FLASK / AI",
    name: "AI Exam Companion",
    description:
      "An AI-assisted exam preparation application for generating practice questions and maintaining learning sessions.",
    detail:
      "Hands-on Flask application with AI API integration and MongoDB persistence.",
    tech: ["Python", "Flask", "MongoDB", "Groq API"],
    accent: "orange",
    status: "APPLIED PROJECT",
  },
  {
    route: "digitalanalyticsdashboard",
    number: "05",
    type: "JAVASCRIPT / FIREBASE",
    name: "Digital Analytics Dashboard",
    description:
      "A web analytics dashboard for tracking application usage through Firebase-backed data.",
    detail:
      "Google OAuth authentication, Firebase data storage and interactive analytics.",
    tech: ["JavaScript", "Firebase", "Google OAuth", "Chart.js"],
    accent: "green",
    status: "WEB PROJECT",
  },
];

/* =========================================================
   PROJECTS
   ========================================================= */

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-shell">
        <div className="section-index">04 / SELECTED WORK</div>

        <div className="projects-heading">
          <Reveal>
            <h2 className="display-heading">
              Systems I've
              <br />
              <span>built.</span>
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p>
              The main focus is Java full-stack engineering. Python/Flask work
              represents applied experience building AI-enabled web tools.
            </p>
          </Reveal>
        </div>

        <div className="projects-showcase">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.route} delay={index * 70}>
              <article
                className={`project-showcase project-${project.accent}`}
                onClick={() => {
                  window.location.hash = `/${project.route}`;
                }}
              >
                <div className="project-left">
                  <span className="project-number">{project.number}</span>

                  <div className="project-classification">
                    <span>{project.type}</span>
                    <span className="project-status">
                      {project.status}
                    </span>
                  </div>

                  <h3>{project.name}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <p className="project-detail">{project.detail}</p>

                  <div className="project-tech-list">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <button className="project-open">
                    View case study
                    <span>↗</span>
                  </button>
                </div>

                <ProjectVisual
                  project={project}
                  index={index}
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROJECT VISUAL
   ========================================================= */

function ProjectVisual({ project, index }) {
  const imageRanges = {
    shopsphere: [1, 13],
    banksphere: [14, 23],
    lifedecisionassistant: [24, 31],
    aiexamcompanion: [32, 37],
    digitalanalyticsdashboard: [38, 42],
  };

  const range = imageRanges[project.route] || [1, 1];

  const firstImage = range[0];

  const getImagePath = (number) => {
    if (project.route === "shopsphere") {
      return `/shopsphere/${number}.png.png`;
    }

    if (project.route === "banksphere") {
      return `/banksphere/${number}.png.png`;
    }

    if (project.route === "lifedecisionassistant") {
      return `/lifedecisionassistant/${number}.png.png`;
    }

    if (project.route === "aiexamcompanion") {
      return `/aiexamcompanion/${number}.png.png`;
    }

    return `/digitalanalyticsdashboard/${number}.png.png`;
  };

  return (
    <div className="project-visual">
      <div className="visual-browser">
        <div className="browser-bar">
          <div className="browser-dots">
            <i />
            <i />
            <i />
          </div>

          <div className="browser-address">
            {project.name.toLowerCase().replaceAll(" ", "-")}
            .app
          </div>

          <span className="browser-index">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="browser-screen">
          <img
            src={getImagePath(firstImage)}
            alt={`${project.name} interface`}
            loading="lazy"
          />

          <div className="screen-gradient" />

          <div className="screen-label">
            <span>PROJECT</span>
            <strong>{project.number}</strong>
          </div>
        </div>
      </div>

      <div className="visual-floating">
        <span>CASE STUDY</span>
        <strong>↗</strong>
      </div>
    </div>
  );
}

/* =========================================================
   EDUCATION
   ========================================================= */

function Education() {
  return (
    <section className="section education-section">
      <div className="section-shell">
        <div className="section-index">05 / EDUCATION</div>

        <div className="education-layout">
          <Reveal>
            <div className="education-year">2026</div>
          </Reveal>

          <Reveal delay={100}>
            <div className="education-main">
              <span>BACHELOR OF ENGINEERING</span>

              <h2>
                Computer Science
                <br />
                <span>& Engineering.</span>
              </h2>

              <p>
                Dr. ACS College of Engineering
                <br />
                Bengaluru, Karnataka
              </p>

              <div className="education-cgpa">
                <span>CGPA</span>
                <strong>8.00 / 10</strong>
              </div>
            </div>
          </Reveal>
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

      <div className="section-shell contact-shell">
        <Reveal>
          <span className="contact-kicker">06 / CONTACT</span>
        </Reveal>

        <Reveal delay={100}>
          <h2>
            Have a problem
            <br />
            worth <span>solving?</span>
          </h2>
        </Reveal>

        <Reveal delay={180}>
          <p className="contact-copy">
            I'm interested in Software Engineering opportunities where I can
            contribute to real products, backend systems and full-stack
            development.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <a
            href="mailto:Srinivasrahul838@gmail.com"
            className="contact-email"
          >
            Srinivasrahul838@gmail.com
            <span>↗</span>
          </a>
        </Reveal>

        <Reveal delay={300} className="contact-details">
          <span>BENGALURU, INDIA</span>
          <span>+91 7337634886</span>
        </Reveal>

        <Reveal delay={350} className="contact-socials">
          <a
            href="https://github.com/RAHUL2525252525"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span>↗</span>
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span>↗</span>
          </a>

          <a
            href="/Rahul_S_ResumeFullStack.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume <span>↗</span>
          </a>
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

        <span>SOFTWARE ENGINEER</span>

        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

