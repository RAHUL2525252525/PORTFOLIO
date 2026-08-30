import React, { useEffect, useState } from "react";

import ShopSphere from "./projects/ShopSphere";
import BankSphere from "./projects/BankSphere";
import LifeDecisionAssistant from "./projects/LifeDecisionAssistant";
import AIExamCompanion from "./projects/AIExamCompanion";
import DigitalAnalyticsDashboard from "./projects/DigitalAnalyticsDashboard";

const projects = [
  {
    id: "shopsphere",
    title: "ShopSphere",
    subtitle: "Full Stack E-Commerce Web Application",
    description:
      "A full-stack e-commerce platform built with Java, Spring Boot, React.js, Spring Data JPA, MySQL and REST APIs.",
    tech: ["Java 17", "Spring Boot 3", "React.js", "MySQL", "REST APIs"],
  },
  {
    id: "banksphere",
    title: "BankSphere",
    subtitle: "Online Banking System",
    description:
      "A secure full-stack banking application with JWT authentication, role-based access control, MySQL and Docker.",
    tech: [
      "Java 17",
      "Spring Boot 3",
      "Spring Security",
      "JWT",
      "React.js",
      "MySQL",
    ],
  },
  {
    id: "lifedecisionassistant",
    title: "Life Decision Assistant",
    subtitle: "AI-Powered Decision Support Application",
    description:
      "An AI-powered web application designed to help users analyze decisions and explore possible outcomes.",
    tech: ["Python", "Flask", "Firebase", "Groq API", "OpenRouter", "Gemini"],
  },
  {
    id: "aiexamcompanion",
    title: "AI Exam Companion",
    subtitle: "AI-Powered Exam Preparation Application",
    description:
      "An AI-powered study companion for generating practice questions and supporting exam preparation.",
    tech: ["Python", "Flask", "Firebase", "Groq API"],
  },
  {
    id: "digitalanalyticsdashboard",
    title: "Digital Analytics Dashboard",
    subtitle: "Interactive Analytics Dashboard",
    description:
      "A responsive analytics dashboard designed to present digital data through an organized and interactive interface.",
    tech: ["Python", "Flask", "Firebase", "Google OAuth", "JavaScript"],
  },
];

function navigateTo(hash) {
  window.location.hash = hash;
}

function App() {
  const [route, setRoute] = useState(window.location.hash || "#/");

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || "#/");
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  if (route === "#/projects/shopsphere") {
    return <ShopSphere />;
  }

  if (route === "#/projects/banksphere") {
    return <BankSphere />;
  }

  if (route === "#/projects/lifedecisionassistant") {
    return <LifeDecisionAssistant />;
  }

  if (route === "#/projects/aiexamcompanion") {
    return <AIExamCompanion />;
  }

  if (route === "#/projects/digitalanalyticsdashboard") {
    return <DigitalAnalyticsDashboard />;
  }

  return (
    <div className="portfolio">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#/" className="logo">
            RAHUL<span>S</span>
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#certifications">Certifications</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <p className="hero-small">HELLO, I'M</p>

          <h1>
            Rahul <span>S</span>
          </h1>

          <h2>Software Engineer</h2>

          <p className="hero-description">
            Software Engineer with hands-on experience building full-stack web
            applications using Java, Spring Boot, and React.js.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Projects
            </a>

            <a href="#about" className="secondary-button">
              About Me
            </a>
          </div>

          <div className="hero-location">
            📍 Bangalore, Karnataka
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="section-container">
          <p className="section-label">ABOUT ME</p>

          <h2 className="section-title">
            Building reliable & scalable
            <span> full-stack applications.</span>
          </h2>

          <div className="about-grid">
            <div>
              <p>
                Software Engineer with hands-on experience building full-stack
                web applications using Java, Spring Boot, and React.js.
              </p>

              <p>
                Skilled in REST API design, JWT-based authentication and
                authorization, role-based access control (RBAC), relational
                database design using MySQL, and Agile software delivery.
              </p>

              <p>
                Experienced with Docker containerization, unit testing using
                JUnit and Mockito, and version control with Git.
              </p>
            </div>

            <div className="about-card">
              <div>
                <strong>B.E.</strong>
                <span>Computer Science & Engineering</span>
              </div>

              <div>
                <strong>8.00</strong>
                <span>CGPA / 10</span>
              </div>

              <div>
                <strong>2026</strong>
                <span>Graduated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section dark-section">
        <div className="section-container">
          <p className="section-label">TECHNICAL SKILLS</p>

          <h2 className="section-title">
            Technologies I <span>work with.</span>
          </h2>

          <div className="skills-grid">
            <SkillGroup
              title="Languages"
              items={[
                "Java",
                "JavaScript (ES6+)",
                "SQL",
                "HTML5",
                "CSS3",
              ]}
            />

            <SkillGroup
              title="Frameworks & Libraries"
              items={[
                "Spring Boot",
                "Spring MVC",
                "Spring Security",
                "Spring Data JPA",
                "Hibernate",
                "React.js",
                "Axios",
              ]}
            />

            <SkillGroup
              title="APIs & Security"
              items={[
                "REST API Design",
                "JWT Authentication",
                "Role-Based Access Control (RBAC)",
              ]}
            />

            <SkillGroup
              title="Databases"
              items={[
                "MySQL",
                "SQL",
                "Database Design",
                "Normalization",
                "Relational Data Modeling",
              ]}
            />

            <SkillGroup
              title="Architecture"
              items={[
                "Layered Architecture",
                "Controller / Service / Repository",
                "Microservices",
                "MVC",
                "Exception Handling",
                "DTO Pattern",
              ]}
            />

            <SkillGroup
              title="Cloud & DevOps"
              items={[
                "Docker",
                "Docker Compose",
                "Maven",
                "Git",
                "GitHub",
                "GitHub Actions",
                "Vercel",
                "Render",
                "Aiven",
              ]}
            />

            <SkillGroup
              title="Testing & Practices"
              items={[
                "JUnit 5",
                "Mockito",
                "Postman",
                "Agile / Scrum",
                "Code Reviews",
                "Unit Testing",
              ]}
            />

            <SkillGroup
              title="Core CS"
              items={[
                "Data Structures & Algorithms",
                "Object-Oriented Programming (OOP)",
                "DBMS",
                "Software Engineering Principles",
              ]}
            />
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <div className="section-container">
          <p className="section-label">PROFESSIONAL EXPERIENCE</p>

          <h2 className="section-title">
            My <span>experience.</span>
          </h2>

          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3>Web Development Intern</h3>
                <h4>MR Tech Lab</h4>
                <p>Bengaluru, Karnataka</p>
              </div>

              <span className="date">01/2026 – 05/2026</span>
            </div>

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
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section projects-section">
        <div className="section-container">
          <p className="section-label">PROJECTS</p>

          <h2 className="section-title">
            Selected <span>projects.</span>
          </h2>

          <p className="projects-intro">
            Click any project to open its dedicated project interface with
            screenshots, technology stack, features and implementation
            details.
          </p>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article
                className="project-card"
                key={project.id}
                onClick={() =>
                  navigateTo(`/projects/${project.id}`)
                }
              >
                <div className="project-number">
                  0{index + 1}
                </div>

                <div className="project-content">
                  <p className="project-category">
                    {project.subtitle}
                  </p>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <button
                    className="project-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateTo(`/projects/${project.id}`);
                    }}
                  >
                    View Project →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section dark-section">
        <div className="section-container">
          <p className="section-label">EDUCATION</p>

          <h2 className="section-title">
            Academic <span>background.</span>
          </h2>

          <div className="education-card">
            <div className="education-year">2026</div>

            <div>
              <h3>
                B.E., Computer Science and Engineering
              </h3>

              <h4>
                Dr. ACS College of Engineering
              </h4>

              <p>Bengaluru, Karnataka</p>

              <div className="cgpa">
                CGPA: <strong>8.00 / 10</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="section">
        <div className="section-container">
          <p className="section-label">CERTIFICATIONS</p>

          <h2 className="section-title">
            Professional <span>certifications.</span>
          </h2>

          <div className="certifications-grid">
            <div className="certificate-card">
              <span className="certificate-icon">01</span>
              <div>
                <h3>Java Programming Fundamentals</h3>
                <p>Infosys Springboard</p>
              </div>
            </div>

            <div className="certificate-card">
              <span className="certificate-icon">02</span>
              <div>
                <h3>Introduction to Java</h3>
                <p>Infosys Springboard</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section">
        <div className="section-container">
          <p className="section-label">GET IN TOUCH</p>

          <h2>
            Let's build something
            <span> great together.</span>
          </h2>

          <a
            href="mailto:Srinivasrahul838@gmail.com"
            className="email-link"
          >
            Srinivasrahul838@gmail.com
          </a>

          <p className="phone">
            +91 7337634886
          </p>

          <div className="social-links">
            <a
              href="https://github.com/RAHUL2525252525"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a href="#" onClick={(e) => e.preventDefault()}>
              LinkedIn
            </a>

            <a href="#home">
              Back to Top ↑
            </a>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Rahul S. All rights reserved.</p>
      </footer>
    </div>
  );
}

function SkillGroup({ title, items }) {
  return (
    <div className="skill-group">
      <h3>{title}</h3>

      <div className="skill-list">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}

export default App;
