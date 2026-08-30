import React, { useEffect, useState } from "react";
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
          Rahul<span>.S</span>
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
        <div className="hero-grid-overlay" />
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-small">AVAILABLE FOR HIRE</p>

          <h1>
            Rahul <span>S.</span>
          </h1>

          <h2>
            &gt; java_full_stack_developer<span className="type-cursor" />
          </h2>

          <p className="hero-description">
            I build <strong>production-grade full-stack applications</strong> with
            Java, Spring Boot and React — from schema to shipped feature. Recent
            work spans e-commerce platforms, banking systems and AI-assisted tools,
            with a focus on clean REST APIs and validated, role-based workflows.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View Projects
            </a>
            <a href="#contact" className="secondary-button">
              Get in Touch
            </a>
          </div>

          <p className="hero-location">based in Bengaluru, India · open to relocation</p>
        </div>

        <div className="id-card">
          <div className="id-card-bar">
            <span className="id-card-dot" />
            <span className="id-card-dot" />
            <span className="id-card-dot live" />
            <span className="id-card-tab">rahul.dev</span>
          </div>

          <div className="id-card-photo">
            <img src="/rahul-profile.jpg" alt="Rahul S" />
            <div className="id-card-scan" />
          </div>

          <div className="id-card-info">
            <div className="name-row">
              <span>Rahul S</span>
              <span>#001</span>
            </div>
            <div className="role-row">// Full Stack Developer</div>
            <div className="loc-row">Java · Spring Boot · React.js</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="section-container">
        <p className="section-label">ABOUT</p>
        <h2 className="section-title">
          Engineer first, <span>problem-solver</span> always.
        </h2>

        <div className="about-grid">
          <div>
            <p>
              I'm a Java-focused full-stack developer who enjoys owning a feature
              end to end — designing the data model, wiring the Spring Boot
              service layer, and shipping a React interface that holds up under
              real usage.
            </p>
            <p>
              My strongest work has been in structured, validation-heavy systems:
              e-commerce catalogs, role-based banking flows and layered REST
              architectures with 15+ tested endpoints. Alongside that, I've built
              a handful of applied Python/Flask tools that integrate AI APIs to
              solve everyday problems.
            </p>
            <p>
              I care about code that's boring in the best way — predictable,
              documented, and easy for the next developer to extend.
            </p>
          </div>

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
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section dark-section">
      <div className="section-container">
        <p className="section-label">SKILLS</p>
        <h2 className="section-title">
          The <span>stack</span> I ship with.
        </h2>

        <div className="skills-grid">
          <div className="skill-group">
            <h3>CORE — JAVA FULL STACK</h3>
            <div className="skill-list">
              {["Java 17", "Spring Boot 3", "Spring Data JPA", "Spring Security", "Hibernate", "REST APIs", "MySQL", "Maven"].map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>

          <div className="skill-group">
            <h3>FRONTEND</h3>
            <div className="skill-list">
              {["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Responsive Design"].map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>

          <div className="skill-group">
            <h3>APPLIED — PYTHON / AI TOOLING</h3>
            <div className="skill-list">
              {["Python", "Flask", "MongoDB", "Groq API", "Gemini API", "OpenRouter API"].map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>

          <div className="skill-group">
            <h3>TOOLS &amp; PLATFORMS</h3>
            <div className="skill-list">
              {["Git", "GitHub", "Firebase", "Google OAuth", "Postman", "VS Code"].map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-container">
        <p className="section-label">EXPERIENCE</p>
        <h2 className="section-title">
          Where I've been <span>building</span>.
        </h2>

        <div className="experience-card">
          <div className="experience-header">
            <div>
              <h3>Full Stack Developer</h3>
              <h4>Self-directed / Freelance Projects</h4>
              <p>Java · Spring Boot · React.js · MySQL</p>
            </div>
            <div className="date">2025 — Present</div>
          </div>

          <ul>
            <li>
              Designed and built ShopSphere, a full-stack e-commerce platform with
              6 modules and 15+ validated REST endpoints across ADMIN and
              CUSTOMER roles.
            </li>
            <li>
              Built BankSphere, a role-based banking system with JWT
              authentication enforced across three permission tiers.
            </li>
            <li>
              Delivered three applied Python/Flask tools that integrate external
              AI providers (Groq, Gemini, OpenRouter) behind clean backend
              interfaces.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    route: "shopsphere",
    stack: "java",
    stackLabel: "Java Full Stack",
    category: "PROJECT 01",
    name: "ShopSphere",
    desc: "Full-stack e-commerce platform with product browsing, cart, wishlist, checkout and order management across ADMIN and CUSTOMER roles.",
    highlight: "6 modules · 15+ validated REST endpoints",
    tech: ["Java 17", "Spring Boot", "React.js", "MySQL"],
  },
  {
    route: "banksphere",
    stack: "java",
    stackLabel: "Java Full Stack",
    category: "PROJECT 02",
    name: "BankSphere",
    desc: "Role-based banking application with secure account, transaction and admin workflows enforced through layered backend validation.",
    highlight: "JWT auth across 3 permission tiers",
    tech: ["Java 17", "Spring Boot", "Spring Security", "MySQL"],
  },
  {
    route: "lifedecisionassistant",
    stack: "python",
    stackLabel: "Python / Flask",
    category: "PROJECT 03",
    name: "Life Decision Assistant",
    desc: "AI-powered decision support app that routes requests across three LLM providers behind one unified backend interface.",
    highlight: "3 LLM providers behind one API",
    tech: ["Python", "Flask", "Firebase", "Groq API"],
  },
  {
    route: "aiexamcompanion",
    stack: "python",
    stackLabel: "Python / Flask",
    category: "PROJECT 04",
    name: "AI Exam Companion",
    desc: "Exam preparation tool that generates AI-powered practice questions and stores session history in MongoDB.",
    highlight: "AI-generated practice question sets",
    tech: ["Python", "Flask", "MongoDB", "Groq API"],
  },
  {
    route: "digitalanalyticsdashboard",
    stack: "js",
    stackLabel: "JavaScript / Firebase",
    category: "PROJECT 05",
    name: "Digital Analytics Dashboard",
    desc: "Analytics dashboard with Google OAuth sign-in and Firebase-backed data storage for tracking key usage metrics.",
    highlight: "Google OAuth + Firebase backend",
    tech: ["JavaScript", "Firebase", "Google OAuth", "Chart.js"],
  },
];

function Projects() {
  return (
    <section id="projects" className="section dark-section projects-section">
      <div className="section-container">
        <p className="section-label">PROJECTS</p>
        <h2 className="section-title">
          Selected <span>work</span>.
        </h2>
        <p className="projects-intro">
          Five shipped projects — two production-style Java systems, and three
          applied Python tools built around AI APIs. Open any project to flip
          through its screenshots.
        </p>

        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <div
              className="project-card"
              key={p.route}
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
        <p className="section-label">EDUCATION</p>
        <h2 className="section-title">
          Academic <span>background</span>.
        </h2>

        <div className="education-card">
          <div className="education-year">B.E</div>
          <div>
            <h3>Bachelor of Engineering</h3>
            <h4>Computer Science / IT</h4>
            <p>Update institution name and graduation year here</p>
            <p className="cgpa">
              CGPA: <strong>update value</strong>
            </p>
          </div>
        </div>
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
        <p className="section-label">CERTIFICATIONS</p>
        <h2 className="section-title">
          Continued <span>learning</span>.
        </h2>

        <div className="certifications-grid">
          {certs.map((c) => (
            <div className="certificate-card" key={c.title}>
              <div className="certificate-icon">✓</div>
              <div>
                <h3>{c.title}</h3>
                <p>{c.org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <p className="section-label">CONTACT</p>
      <h2>
        Let's build something <span>reliable</span> together.
      </h2>

      <a href="mailto:update-your-email@example.com" className="email-link">
        update-your-email@example.com
      </a>
      <p className="phone">+91 — update your phone number</p>

      <div className="social-links">
        <a href="https://github.com/update-your-username" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return <footer>© {new Date().getFullYear()} Rahul S. Built with React.</footer>;
}
