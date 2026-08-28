import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code2,
  Database,
  Cloud,
  ShieldCheck,
  GraduationCap,
  Briefcase,
  Award,
  ArrowRight,
} from "lucide-react";

import ShopSphere from "./projects/ShopSphere";
import BankSphere from "./projects/BankSphere";
import LifeDecisionAssistant from "./projects/LifeDecisionAssistant";
import AIExamCompanion from "./projects/AIExamCompanion";
import DigitalAnalyticsDashboard from "./projects/DigitalAnalyticsDashboard";

const projects = [
  {
    title: "ShopSphere",
    description:
      "Full Stack E-Commerce Web Application built using Java, Spring Boot, React.js, Spring Data JPA and MySQL.",
    tech: "Java 17 • Spring Boot 3 • React.js • MySQL • REST APIs",
    path: "/projects/shopsphere",
  },
  {
    title: "Online Banking System",
    description:
      "Secure full-stack banking application with JWT authentication, role-based access control and Docker.",
    tech: "Java 17 • Spring Boot 3 • Spring Security • React.js • MySQL • Docker",
    path: "/projects/banksphere",
  },
  {
    title: "Life Decision Assistant",
    description:
      "Decision-support application designed to help users evaluate options and make structured decisions.",
    tech: "React.js • JavaScript • Python • Flask • Firebase",
    path: "/projects/lifedecisionassistant",
  },
  {
    title: "AI Exam Companion",
    description:
      "AI-powered examination assistant featuring mock tests, revision assistance, mentor chat and performance analytics.",
    tech: "React.js • Python • Flask • AI APIs • JSON",
    path: "/projects/aiexamcompanion",
  },
  {
    title: "Digital Analytics Dashboard",
    description:
      "Interactive analytics dashboard for presenting business and application data through visual insights.",
    tech: "React.js • JavaScript • REST APIs • Charts • Responsive UI",
    path: "/projects/digitalanalyticsdashboard",
  },
];

function Home() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo">
            RAHUL<span>S</span>
          </Link>

          <nav>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="about">
          <div className="hero-content">
            <p className="eyebrow">SOFTWARE ENGINEER</p>

            <h1>
              Hi, I'm <span>Rahul S</span>
            </h1>

            <h2>Full Stack Developer</h2>

            <p className="hero-description">
              Software Engineer with hands-on experience building full-stack
              web applications using Java, Spring Boot, and React.js.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                View Projects <ArrowRight size={18} />
              </a>

              <a href="#contact" className="secondary-button">
                Contact Me
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/RAHUL2525252525"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={20} />
              </a>

              <a href="#" target="_blank" rel="noreferrer">
                <Linkedin size={20} />
              </a>

              <a href="mailto:Srinivasrahul838@gmail.com">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="code-window">
              <div className="window-header">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <pre>
{`class SoftwareEngineer {

  String name = "Rahul S";
  String location = "Bangalore";

  String[] skills = {
    "Java",
    "Spring Boot",
    "React.js",
    "MySQL",
    "Docker"
  };

  String goal() {
    return "Build scalable software";
  }
}`}
              </pre>
            </div>
          </div>
        </section>

        {/* SUMMARY */}
        <section className="section">
          <div className="section-heading">
            <span>01</span>
            <h2>Professional Summary</h2>
          </div>

          <div className="summary-card">
            <p>
              Software Engineer with hands-on experience building full-stack
              web applications using Java, Spring Boot, and React.js. Skilled
              in REST API design, JWT-based authentication and authorization,
              role-based access control (RBAC), relational database design
              (MySQL), and Agile software delivery. Experienced with Docker
              containerization, unit testing (JUnit, Mockito), and version
              control (Git). Comfortable collaborating with cross-functional,
              distributed teams in Agile delivery environments. Strong
              foundation in data structures, algorithms, and object-oriented
              design.
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section" id="skills">
          <div className="section-heading">
            <span>02</span>
            <h2>Technical Skills</h2>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <Code2 />
              <h3>Languages</h3>
              <p>Java, JavaScript (ES6+), SQL, HTML5, CSS3</p>
            </div>

            <div className="skill-card">
              <Code2 />
              <h3>Frameworks & Libraries</h3>
              <p>
                Spring Boot, Spring MVC, Spring Security, Spring Data JPA,
                Hibernate, React.js, Axios
              </p>
            </div>

            <div className="skill-card">
              <ShieldCheck />
              <h3>APIs & Security</h3>
              <p>
                REST API Design, JWT Authentication, Role-Based Access Control
                (RBAC)
              </p>
            </div>

            <div className="skill-card">
              <Database />
              <h3>Databases</h3>
              <p>
                MySQL, SQL, Database Design, Normalization, Relational Data
                Modeling
              </p>
            </div>

            <div className="skill-card">
              <Code2 />
              <h3>Architecture</h3>
              <p>
                Layered Architecture, Microservices, MVC, Exception Handling,
                DTO Pattern
              </p>
            </div>

            <div className="skill-card">
              <Cloud />
              <h3>Cloud & DevOps</h3>
              <p>
                Docker, Docker Compose, Maven, Git, GitHub, GitHub Actions,
                Vercel, Render, Aiven
              </p>
            </div>

            <div className="skill-card">
              <ShieldCheck />
              <h3>Testing & Practices</h3>
              <p>
                JUnit 5, Mockito, Postman, Agile / Scrum, Code Reviews, Unit
                Testing
              </p>
            </div>

            <div className="skill-card">
              <Database />
              <h3>Core CS</h3>
              <p>
                Data Structures & Algorithms, OOP, DBMS, Software Engineering
                Principles
              </p>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section" id="experience">
          <div className="section-heading">
            <span>03</span>
            <h2>Professional Experience</h2>
          </div>

          <div className="timeline-card">
            <div className="timeline-top">
              <div>
                <h3>Web Development Intern</h3>
                <h4>MR Tech Lab</h4>
              </div>

              <div className="date">01/2026 – 05/2026</div>
            </div>

            <p className="location">
              Bengaluru, Karnataka
            </p>

            <ul>
              <li>
                Translated design specs into production HTML/CSS/JS, building
                responsive UI components that rendered consistently across
                Chrome, Firefox, and Safari.
              </li>

              <li>
                Integrated Firebase Authentication and session management to
                enable secure user sign-in, resolving authentication issues
                identified during QA before launch.
              </li>

              <li>
                Independently built and shipped 3 web applications using
                HTML/CSS/JS, Python/Flask, and Firebase, applying full-stack
                fundamentals later carried into Java-based project work.
              </li>

              <li>
                Collaborated with cross-functional teammates in an Agile,
                Git-based workflow, delivering assigned UI features on
                schedule across multiple sprints.
              </li>
            </ul>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section" id="projects">
          <div className="section-heading">
            <span>04</span>
            <h2>Projects</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={project.title}>
                <div className="project-number">
                  0{index + 1}
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech}
                </div>

                <Link to={project.path} className="project-button">
                  View Project
                  <ExternalLink size={17} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section" id="education">
          <div className="section-heading">
            <span>05</span>
            <h2>Education</h2>
          </div>

          <div className="education-card">
            <GraduationCap size={35} />

            <div>
              <h3>
                B.E., Computer Science and Engineering
              </h3>

              <h4>
                Dr. ACS College of Engineering
              </h4>

              <p>
                Bengaluru, Karnataka
              </p>

              <p>
                CGPA: <strong>8.00 / 10</strong>
              </p>

              <p>
                Graduated 2026
              </p>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="section">
          <div className="section-heading">
            <span>06</span>
            <h2>Certifications</h2>
          </div>

          <div className="certifications">
            <div className="certificate-card">
              <Award />
              <div>
                <h3>Java Programming Fundamentals</h3>
                <p>Infosys Springboard</p>
              </div>
            </div>

            <div className="certificate-card">
              <Award />
              <div>
                <h3>Introduction to Java</h3>
                <p>Infosys Springboard</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact-section" id="contact">
          <div className="section-heading">
            <span>07</span>
            <h2>Contact</h2>
          </div>

          <div className="contact-grid">
            <a href="mailto:Srinivasrahul838@gmail.com">
              <Mail />
              <div>
                <small>Email</small>
                <strong>Srinivasrahul838@gmail.com</strong>
              </div>
            </a>

            <a href="tel:7337634886">
              <Phone />
              <div>
                <small>Phone</small>
                <strong>7337634886</strong>
              </div>
            </a>

            <a
              href="https://github.com/RAHUL2525252525"
              target="_blank"
              rel="noreferrer"
            >
              <Github />
              <div>
                <small>GitHub</small>
                <strong>RAHUL2525252525</strong>
              </div>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Rahul S. Built with React.js.</p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/projects/shopsphere"
          element={<ShopSphere />}
        />

        <Route
          path="/projects/banksphere"
          element={<BankSphere />}
        />

        <Route
          path="/projects/lifedecisionassistant"
          element={<LifeDecisionAssistant />}
        />

        <Route
          path="/projects/aiexamcompanion"
          element={<AIExamCompanion />}
        />

        <Route
          path="/projects/digitalanalyticsdashboard"
          element={<DigitalAnalyticsDashboard />}
        />

        <Route
          path="*"
          element={<Home />}
        />
      </Routes>
    </BrowserRouter>
  );
}
