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

function useHashRoute() {
  const getRoute = () => window.location.hash.replace(/^#\/?/, "").toLowerCase();
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

/** Fades + slides an element up into view the first time it's scrolled to. */
function Reveal({ children, as: Tag = "div", ...rest }) {
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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${inView ? "in-view" : ""}`} {...rest}>
      {children}
    </Tag>
  );
}

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

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          Rahul<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="/Rahul_S_ResumeFullStack.pdf" className="nav-resume-button" target="_blank" rel="noreferrer">
          Resume ↗
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-video-layer">
        <video autoPlay muted loop playsInline poster="/hero-poster.jpg">
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-scrim" />
      </div>

      <div className="hero-content">
        <div className="hero-id">
          <div className="editor-frame">
            <div className="editor-glow" />
            <div className="editor-tab">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
              <span className="filename">rahul.jpg</span>
            </div>
            <div className="editor-photo">
              <div className="editor-scanline" />
              <img src="/rahul-profile.jpg" alt="Rahul S" />
            </div>
          </div>

          <div className="hero-status-chip">
            <span className="dot" />
            Available for hire
          </div>
        </div>

        <div className="hero-text">
          <h1>
            Rahul <span>S.</span>
          </h1>

          <h2>Java Full Stack Developer — Spring Boot · React.js · MySQL</h2>

          <p className="hero-description">
            I build <strong>production-grade full-stack applications</strong> —
            from schema to shipped feature. My core work is layered Java
            systems with Spring Boot and React, backed by validated REST
            APIs and role-based access control. Alongside that, I've got
            hands-on experience building lightweight Python/Flask tools that
            wire up AI APIs and Firebase.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View Projects
            </a>
            <a href="#contact" className="secondary-button">
              Get in Touch
            </a>
          </div>

          <p className="hero-location">based in Bengaluru, Karnataka · open to relocation</p>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="section-container">
        <Reveal>
          <p className="section-label">About</p>
          <h2 className="section-title">
            Engineer first, <span>problem-solver</span> always.
          </h2>
        </Reveal>

        <div className="about-grid">
          <Reveal>
            <p>
              I'm a Java-focused full-stack developer who enjoys owning a
              feature end to end — designing the data model, wiring the Spring
              Boot service layer, and shipping a React interface that holds up
              under real usage.
            </p>
            <p>
              My strongest work has been in structured, validation-heavy
              systems: a full-stack e-commerce platform and a role-based
              banking application, both built on layered
              controller/service/repository architecture with JWT auth, RBAC,
              and 15+ tested REST endpoints. Alongside that, during my
              internship and personal projects I've picked up hands-on
              experience building Python/Flask tools that integrate AI APIs
              and Firebase — practical, but not where I focus my depth.
            </p>
            <p>
              I care about code that's boring in the best way — predictable,
              documented, and easy for the next developer to extend.
            </p>
          </Reveal>

          <Reveal>
            <div className="about-card">
              <div>
                <strong>5+</strong>
                <span>PROJECTS SHIPPED</span>
              </div>
              <div>
                <strong>15+</strong>
                <span>REST ENDPOINTS</span>
              </div>
              <div>
                <strong>3</strong>
                <span>PERMISSION TIERS</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const coreGroups = [
    {
      title: "Languages & Core CS",
      items: ["Java", "JavaScript (ES6+)", "SQL", "HTML5", "CSS3", "Data Structures & Algorithms", "OOP", "DBMS", "Software Engineering Principles"],
    },
    {
      title: "Frameworks & Architecture",
      items: ["Spring Boot", "Spring MVC", "Spring Security", "Spring Data JPA", "Hibernate", "React.js", "Layered Architecture", "MVC", "DTO Pattern", "Microservices", "Exception Handling"],
    },
    {
      title: "APIs, Auth & Databases",
      items: ["REST API Design", "JWT Authentication", "Role-Based Access Control", "MySQL", "PostgreSQL", "MongoDB", "Database Design", "Normalization", "Relational Data Modeling"],
    },
    {
      title: "Cloud, DevOps & Testing",
      items: ["Docker", "Docker Compose", "Maven", "Git", "GitHub", "GitHub Actions", "CI/CD", "AWS EC2", "AWS S3", "Vercel", "Render", "Aiven", "JUnit 5", "Mockito", "Postman", "Bootstrap", "Tailwind CSS", "Axios", "Agile / Scrum"],
    },
  ];

  const appliedItems = ["HTML", "CSS", "JavaScript", "Python", "Flask", "Firebase", "Google Authentication (OAuth)", "Groq API", "Gemini API", "OpenRouter API"];

  return (
    <section id="skills" className="section dark-section">
      <div className="section-container">
        <Reveal>
          <p className="section-label">Skills</p>
          <h2 className="section-title">
            The <span>stack</span> I ship with.
          </h2>
        </Reveal>

        <Reveal>
          <div className="skills-tier">
            <div className="skills-tier-head">
              <h3>Core — Java Full Stack</h3>
              <p>primary depth · production-style systems</p>
            </div>
            <div className="skills-grid">
              {coreGroups.map((g) => (
                <div className="skill-group" key={g.title}>
                  <h4>{g.title}</h4>
                  <div className="skill-list">
                    {g.items.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="skills-tier applied">
            <div className="skills-tier-head">
              <h3>Applied — Python / AI Tooling</h3>
              <p>hands-on experience · not my primary focus</p>
            </div>
            <div className="skills-grid">
              <div className="skill-group">
                <h4>Web + AI integrations</h4>
                <div className="skill-list">
                  {appliedItems.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-container">
        <Reveal>
          <p className="section-label">Experience</p>
          <h2 className="section-title">
            Where I've been <span>building</span>.
          </h2>
        </Reveal>

        <Reveal>
          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3>Web Development Intern</h3>
                <h4>MR Tech Lab</h4>
                <p>HTML/CSS/JS · Python/Flask · Firebase</p>
              </div>
              <div className="date">01/2026 — 05/2026 · Bengaluru</div>
            </div>

            <ul>
              <li>
                Translated design specs into production HTML/CSS/JS, building
                responsive UI components that rendered consistently across
                Chrome, Firefox and Safari.
              </li>
              <li>
                Integrated Firebase Authentication and session management to
                enable secure user sign-in, resolving auth issues found
                during QA before launch.
              </li>
              <li>
                Independently built and shipped 3 web applications using
                HTML/CSS/JS, Python/Flask and Firebase — full-stack
                fundamentals later carried into Java-based project work.
              </li>
              <li>
                Collaborated with cross-functional teammates in an Agile,
                Git-based workflow, delivering assigned UI features on
                schedule across multiple sprints.
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3>Full Stack Developer</h3>
                <h4>Self-directed Projects</h4>
                <p>Java · Spring Boot · React.js · MySQL</p>
              </div>
              <div className="date">2025 — Present</div>
            </div>

            <ul>
              <li>
                Architected ShopSphere, a full-stack e-commerce platform with
                6 modules and 15+ validated REST endpoints across ADMIN and
                CUSTOMER roles, on a layered controller/service/repository
                design.
              </li>
              <li>
                Built an Online Banking System with stateless JWT
                authentication via Spring Security, enforcing access control
                across 3 permission tiers and a normalized MySQL schema
                across 8+ related entities.
              </li>
              <li>
                Containerized the banking system with Docker Compose and
                validated correctness with JUnit 5 / Mockito, including
                privilege-escalation edge cases.
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const FEATURED_PROJECTS = [
  {
    route: "shopsphere",
    stack: "java",
    stackLabel: "Java Full Stack",
    category: "PROJECT 01",
    name: "ShopSphere",
    desc: "Full-stack e-commerce platform with product browsing, cart, wishlist, checkout and order management across ADMIN and CUSTOMER roles.",
    highlight: "6 modules · 15+ validated REST endpoints",
    tech: ["Java 17", "Spring Boot 3", "React.js", "MySQL", "Spring Data JPA"],
  },
  {
    route: "banksphere",
    stack: "java",
    stackLabel: "Java Full Stack",
    category: "PROJECT 02",
    name: "Online Banking System",
    desc: "Role-based banking application with secure account, transaction and admin workflows, containerized and covered by unit tests.",
    highlight: "JWT auth across 3 permission tiers · 8+ entity schema",
    tech: ["Java 17", "Spring Security (JWT)", "MySQL", "PostgreSQL", "Docker"],
  },
];

const APPLIED_PROJECTS = [
  {
    route: "lifedecisionassistant",
    stack: "python",
    stackLabel: "Applied · Python/Flask",
    name: "Life Decision Assistant",
    desc: "Decision-support app routing requests across three LLM providers behind one Flask interface.",
    tech: ["Python", "Flask", "Firebase", "Groq API"],
  },
  {
    route: "aiexamcompanion",
    stack: "python",
    stackLabel: "Applied · Python/Flask",
    name: "AI Exam Companion",
    desc: "Exam-prep tool generating AI practice questions, with session history stored in MongoDB.",
    tech: ["Python", "Flask", "MongoDB", "Groq API"],
  },
  {
    route: "digitalanalyticsdashboard",
    stack: "js",
    stackLabel: "Applied · JavaScript",
    name: "Digital Analytics Dashboard",
    desc: "Analytics dashboard with Google OAuth sign-in and a Firebase-backed store for usage metrics.",
    tech: ["JavaScript", "Firebase", "Google OAuth"],
  },
];

function Projects() {
  return (
    <section id="projects" className="section dark-section projects-section">
      <div className="section-container">
        <Reveal>
          <p className="section-label">Projects</p>
          <h2 className="section-title">
            Selected <span>work</span>.
          </h2>
          <p className="projects-intro">
            Two production-style Java systems lead the work below; three
            applied Python/Flask and JavaScript tools, built hands-on around
            AI APIs and Firebase, follow.
          </p>
        </Reveal>

        <Reveal>
          <p className="projects-group-label featured">Java Full Stack — Featured</p>
        </Reveal>

        <div className="projects-grid">
          {FEATURED_PROJECTS.map((p) => (
            <Reveal key={p.route}>
              <div
                className="project-card"
                onClick={() => {
                  window.location.hash = `/${p.route}`;
                }}
              >
                <div className="project-badges">
                  <span className={`stack-badge ${p.stack}`}>{p.stackLabel}</span>
                </div>
                <p className="project-category">{p.category}</p>

                <div className="project-content">
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                </div>

                <div className="project-highlight">{p.highlight}</div>

                <div className="project-tech">
                  {p.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>

                <button className="project-button">Open project ↗</button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="projects-group-label">Applied — Python/Flask &amp; JavaScript</p>
        </Reveal>

        <div className="applied-grid">
          {APPLIED_PROJECTS.map((p) => (
            <Reveal key={p.route}>
              <div
                className="applied-card"
                onClick={() => {
                  window.location.hash = `/${p.route}`;
                }}
              >
                <div className="project-badges">
                  <span className={`stack-badge ${p.stack}`}>{p.stackLabel}</span>
                </div>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <div className="project-tech">
                  {p.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section">
      <div className="section-container">
        <Reveal>
          <p className="section-label">Education</p>
          <h2 className="section-title">
            Academic <span>background</span>.
          </h2>
        </Reveal>

        <Reveal>
          <div className="education-card">
            <div className="education-year">B.E</div>
            <div>
              <h3>Bachelor of Engineering, Computer Science and Engineering</h3>
              <h4>Dr. ACS College of Engineering</h4>
              <p>Bengaluru, Karnataka · Graduated 2026</p>
              <p className="cgpa">
                CGPA: <strong>8.00 / 10</strong>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Certifications() {
  const certs = [
    { title: "Java Full Stack Development", org: "Update issuing platform" },
    { title: "Spring Boot & REST APIs", org: "Update issuing platform" },
    { title: "React.js Fundamentals", org: "Update issuing platform" },
    { title: "SQL & Database Design", org: "Update issuing platform" },
  ];

  return (
    <section className="section dark-section">
      <div className="section-container">
        <Reveal>
          <p className="section-label">Certifications</p>
          <h2 className="section-title">
            Continued <span>learning</span>.
          </h2>
        </Reveal>

        <div className="certifications-grid">
          {certs.map((c) => (
            <Reveal key={c.title}>
              <div className="certificate-card">
                <div className="certificate-icon">✓</div>
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.org}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <Reveal>
        <p className="section-label">Contact</p>
        <h2>
          Let's build something <span>reliable</span> together.
        </h2>

        <a href="mailto:Srinivasrahul838@gmail.com" className="email-link">
          Srinivasrahul838@gmail.com
        </a>
        <p className="phone">+91 73376 34886 · Bangalore, Karnataka</p>

        <div className="social-links">
          <a href="https://github.com/update-your-username" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        </div>
      </Reveal>
    </section>
  )
