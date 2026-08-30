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

function Reveal({ children, as: Tag = "div", className = "", ...rest }) {
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
        threshold: 0.08,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
      {...rest}
    >
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

/* =========================================================
   NAVIGATION
   ========================================================= */

function Navbar() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="navbar">
      <div className="nav-left">
        <a href="#" className="brand">
          RS<span>.</span>
        </a>

        <div className="brand-role">
          SOFTWARE
          <br />
          ENGINEER
        </div>
      </div>

      <nav className="nav-links">
        <button onClick={() => scrollTo("about")}>01 — About</button>
        <button onClick={() => scrollTo("skills")}>02 — Skills</button>
        <button onClick={() => scrollTo("experience")}>03 — Experience</button>
        <button onClick={() => scrollTo("projects")}>04 — Projects</button>
        <button onClick={() => scrollTo("contact")}>05 — Contact</button>
      </nav>

      <a
        href="/Rahul_S_ResumeFullStack.pdf"
        target="_blank"
        rel="noreferrer"
        className="resume-link"
      >
        Resume
        <span>↗</span>
      </a>
    </header>
  );
}

/* =========================================================
   HERO
   ========================================================= */

function Hero() {
  return (
    <main className="hero">
      <div className="hero-grid-lines" />

      <div className="hero-topline">
        <span>01 / 05</span>
        <span>BENGALURU · INDIA</span>
        <span>JAVA / FULL STACK</span>
      </div>

      <div className="hero-main">
        <div className="hero-side-note">
          <span className="side-line" />
          <span>
            BUILDING
            <br />
            SYSTEMS
            <br />
            THAT WORK.
          </span>
        </div>

        <div className="hero-heading">
          <p className="eyebrow">
            <span className="blue-dot" />
            SOFTWARE ENGINEER
          </p>

          <h1>
            RAHUL
            <br />
            <span>S.</span>
          </h1>

          <div className="hero-bottom">
            <p className="hero-copy">
              Java-focused software engineer building full-stack applications
              with <strong>Spring Boot, React.js, REST APIs and relational
              databases.</strong>
            </p>

            <div className="hero-actions">
              <a href="#projects" className="action-primary">
                Explore work <span>↓</span>
              </a>

              <a href="#contact" className="action-secondary">
                Start a conversation
              </a>
            </div>
          </div>
        </div>

        <div className="hero-spec">
          <div className="spec-label">CURRENT FOCUS</div>

          <div className="spec-main">
            JAVA
            <br />
            FULL STACK
          </div>

          <div className="spec-list">
            <span>Java 17</span>
            <span>Spring Boot 3</span>
            <span>React.js</span>
            <span>MySQL</span>
            <span>Docker</span>
          </div>

          <div className="spec-status">
            <span />
            OPEN TO OPPORTUNITIES
          </div>
        </div>
      </div>

      <div className="hero-footer">
        <span>SCROLL TO EXPLORE</span>
        <div className="scroll-track">
          <div />
        </div>
        <span>2026</span>
      </div>
    </main>
  );
}

/* =========================================================
   ABOUT
   ========================================================= */

function About() {
  return (
    <section id="about" className="editorial-section about-section">
      <div className="section-index">01</div>

      <div className="section-heading">
        <p className="section-kicker">PROFILE</p>

        <h2>
          I build the
          <br />
          <span>backend first.</span>
        </h2>
      </div>

      <div className="about-content">
        <div className="about-intro">
          <p className="large-text">
            Software Engineer focused on building reliable, structured
            full-stack systems — from database design and business logic to
            secure APIs and production-ready interfaces.
          </p>

          <p>
            My strongest hands-on work is with <strong>Java, Spring Boot,
            Spring Security, React.js and MySQL.</strong> I enjoy working on
            systems where authentication, authorization, validation and data
            integrity actually matter.
          </p>

          <p>
            Alongside my Java projects, I have also built and shipped
            practical applications using <strong>Python, Flask and AI APIs</strong>.
            Python is an applied secondary skill rather than the centre of my
            engineering profile.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat-row">
            <span>01</span>
            <strong>Java</strong>
            <small>PRIMARY STACK</small>
          </div>

          <div className="stat-row">
            <span>02</span>
            <strong>Full Stack</strong>
            <small>CORE EXPERIENCE</small>
          </div>

          <div className="stat-row">
            <span>03</span>
            <strong>AI / Flask</strong>
            <small>APPLIED EXPERIENCE</small>
          </div>

          <div className="stat-row">
            <span>04</span>
            <strong>8.00</strong>
            <small>CGPA / 10</small>
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
      title: "LANGUAGES",
      description: "Core programming and web foundations.",
      items: ["Java 17", "JavaScript ES6+", "SQL", "HTML5", "CSS3"],
    },
    {
      number: "02",
      title: "JAVA / BACKEND",
      description: "Primary engineering stack.",
      items: [
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
      number: "03",
      title: "FRONTEND",
      description: "Interfaces and client-side systems.",
      items: [
        "React.js",
        "Axios",
        "Bootstrap",
        "Tailwind CSS",
        "Responsive Design",
      ],
    },
    {
      number: "04",
      title: "DATABASES",
      description: "Relational and document data systems.",
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
      title: "ARCHITECTURE",
      description: "Patterns used to structure applications.",
      items: [
        "Layered Architecture",
        "MVC",
        "DTO Pattern",
        "Exception Handling",
        "Microservices",
        "RBAC",
      ],
    },
    {
      number: "06",
      title: "DEVOPS / CLOUD",
      description: "Development, deployment and delivery.",
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
      number: "07",
      title: "TESTING",
      description: "Validation and engineering practices.",
      items: [
        "JUnit 5",
        "Mockito",
        "Postman",
        "Unit Testing",
        "Code Reviews",
        "Agile / Scrum",
      ],
    },
    {
      number: "08",
      title: "CORE CS",
      description: "Foundational computer science.",
      items: [
        "Data Structures",
        "Algorithms",
        "OOP",
        "DBMS",
        "Software Engineering",
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-top">
        <div>
          <span className="section-kicker">02 / CAPABILITIES</span>

          <h2>
            Technical
            <br />
            <span>inventory.</span>
          </h2>
        </div>

        <p>
          A practical engineering stack built around Java full-stack
          development, with supporting experience across cloud, testing,
          databases and applied Python tooling.
        </p>
      </div>

      <div className="skills-table">
        {groups.map((group) => (
          <Reveal key={group.number} className="skill-row">
            <div className="skill-number">{group.number}</div>

            <div className="skill-title">
              <h3>{group.title}</h3>
              <p>{group.description}</p>
            </div>

            <div className="skill-items">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   EXPERIENCE
   ========================================================= */

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-header">
        <div>
          <span className="section-kicker">03 / EXPERIENCE</span>

          <h2>
            Hands-on
            <br />
            <span>delivery.</span>
          </h2>
        </div>

        <div className="experience-counter">01 — CURRENT PROFILE</div>
      </div>

      <div className="experience-layout">
        <div className="experience-year">2026</div>

        <div className="experience-line">
          <span />
        </div>

        <div className="experience-main">
          <div className="experience-meta">
            <span>01 / 2026 — 05 / 2026</span>
            <span>BENGALURU, INDIA</span>
          </div>

          <h3>Web Development Intern</h3>

          <h4>MR Tech Lab</h4>

          <p className="experience-summary">
            Built responsive web interfaces and full-stack applications,
            working across frontend development, authentication, Firebase,
            Python/Flask and Agile delivery.
          </p>

          <div className="experience-points">
            <div>
              <span>01</span>
              <p>
                Translated design specifications into production HTML, CSS and
                JavaScript interfaces with cross-browser consistency.
              </p>
            </div>

            <div>
              <span>02</span>
              <p>
                Integrated Firebase Authentication and session management,
                resolving authentication issues identified during QA.
              </p>
            </div>

            <div>
              <span>03</span>
              <p>
                Independently built and shipped three web applications using
                HTML/CSS/JS, Python/Flask and Firebase.
              </p>
            </div>

            <div>
              <span>04</span>
              <p>
                Collaborated in a Git-based Agile workflow and delivered
                assigned features across multiple sprints.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="experience-note">
        <span>PRIMARY ENGINEERING DIRECTION</span>
        <strong>JAVA → SPRING BOOT → REACT → DATABASE → DEPLOYMENT</strong>
      </div>
    </section>
  );
}

/* =========================================================
   PROJECTS
   ========================================================= */

const PROJECTS = [
  {
    route: "shopsphere",
    number: "01",
    stack: "JAVA / FULL STACK",
    name: "ShopSphere",
    type: "E-COMMERCE SYSTEM",
    desc:
      "A full-stack e-commerce application designed around layered Spring Boot architecture, secure role boundaries and validated business workflows.",
    tech: ["Java 17", "Spring Boot 3", "React.js", "JPA", "MySQL"],
    metric: "6 MODULES",
    metric2: "15+ REST ENDPOINTS",
  },
  {
    route: "banksphere",
    number: "02",
    stack: "JAVA / FULL STACK",
    name: "BankSphere",
    type: "BANKING SYSTEM",
    desc:
      "A role-based banking application focused on authentication, authorization, relational integrity and secure transaction workflows.",
    tech: [
      "Java 17",
      "Spring Security",
      "JWT",
      "React.js",
      "MySQL",
      "Docker",
    ],
    metric: "3 PERMISSION TIERS",
    metric2: "8+ RELATED ENTITIES",
  },
  {
    route: "lifedecisionassistant",
    number: "03",
    stack: "PYTHON / FLASK",
    name: "Life Decision Assistant",
    type: "AI APPLICATION",
    desc:
      "An applied AI web application that routes decision-support requests across multiple LLM providers through a unified Flask backend.",
    tech: ["Python", "Flask", "Firebase", "Groq", "Gemini", "OpenRouter"],
    metric: "3 LLM PROVIDERS",
    metric2: "APPLIED AI TOOLING",
  },
  {
    route: "aiexamcompanion",
    number: "04",
    stack: "PYTHON / FLASK",
    name: "AI Exam Companion",
    type: "AI LEARNING TOOL",
    desc:
      "A practical exam preparation application generating AI-powered practice questions and maintaining session history.",
    tech: ["Python", "Flask", "MongoDB", "Groq API"],
    metric: "AI QUESTION GENERATION",
    metric2: "SESSION HISTORY",
  },
  {
    route: "digitalanalyticsdashboard",
    number: "05",
    stack: "JAVASCRIPT / FIREBASE",
    name: "Digital Analytics Dashboard",
    type: "ANALYTICS",
    desc:
      "A Firebase-backed analytics interface with Google OAuth authentication and visual reporting for application usage metrics.",
    tech: ["JavaScript", "Firebase", "Google OAuth", "Chart.js"],
    metric: "GOOGLE OAUTH",
    metric2: "FIREBASE DATA",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-heading">
        <div>
          <span className="section-kicker">04 / SELECTED WORK</span>

          <h2>
            Systems I've
            <br />
            <span>built.</span>
          </h2>
        </div>

        <p>
          The first two projects represent my strongest Java full-stack work.
          The remaining projects demonstrate applied Python, Flask, Firebase
          and AI development experience.
        </p>
      </div>

      <div className="projects-list">
        {PROJECTS.map((project) => (
          <Reveal key={project.route}>
            <article
              className="project-row"
              onClick={() => {
                window.location.hash = `/${project.route}`;
              }}
            >
              <div className="project-number">{project.number}</div>

              <div className="project-info">
                <div className="project-top">
                  <span>{project.stack}</span>
                  <span>{project.type}</span>
                </div>

                <h3>{project.name}</h3>

                <p>{project.desc}</p>

                <div className="project-tags">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-metrics">
                <div>
                  <small>METRIC</small>
                  <strong>{project.metric}</strong>
                </div>

                <div>
                  <small>FOCUS</small>
                  <strong>{project.metric2}</strong>
                </div>
              </div>

              <div className="project-arrow">↗</div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   EDUCATION
   ========================================================= */

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="education-index">05</div>

      <div className="education-content">
        <span className="section-kicker">EDUCATION</span>

        <h2>
          Computer
          <br />
          <span>Science.</span>
        </h2>

        <div className="education-main">
          <div className="education-degree">
            <span>B.E.</span>
            <h3>Computer Science and Engineering</h3>
          </div>

          <div className="education-details">
            <p>Dr. ACS College of Engineering</p>
            <p>Bengaluru, Karnataka</p>
            <p>Graduated 2026</p>
          </div>

          <div className="education-cgpa">
            <small>CGPA</small>
            <strong>8.00</strong>
            <span>/ 10</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CERTIFICATIONS
   ========================================================= */

function Certifications() {
  return (
    <section className="certifications-section">
      <div className="certifications-heading">
        <span className="section-kicker">LEARNING</span>

        <h2>
          Always
          <br />
          <span>improving.</span>
        </h2>
      </div>

      <div className="certification-note">
        <span>ENGINEERING PRINCIPLE</span>
        <p>
          Build. Test. Review. Refactor. Repeat.
        </p>
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

      <div className="contact-top">
        <span>05 / CONTACT</span>
        <span>AVAILABLE FOR SOFTWARE ENGINEERING ROLES</span>
      </div>

      <div className="contact-content">
        <p className="section-kicker">LET'S TALK</p>

        <h2>
          Have a system
          <br />
          worth <span>building?</span>
        </h2>

        <a
          href="mailto:Srinivasrahul838@gmail.com"
          className="contact-email"
        >
          Srinivasrahul838@gmail.com
          <span>↗</span>
        </a>

        <div className="contact-details">
          <span>+91 7337634886</span>
          <span>Bengaluru, Karnataka</span>
        </div>

        <div className="contact-socials">
          <a
            href="https://github.com/RAHUL2525252525"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href="/Rahul_S_ResumeFullStack.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume ↗
          </a>
        </div>
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
        <strong>RAHUL S.</strong>
        <span>SOFTWARE ENGINEER</span>
      </div>

      <p>© {new Date().getFullYear()} Rahul S. All rights reserved.</p>

      <span>BUILT WITH REACT</span>
    </footer>
  );
}
