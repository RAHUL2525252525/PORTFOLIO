import React, { useState } from "react";
import "./index.css";

const projects = [
  {
    id: "shopsphere",
    title: "ShopSphere",
    subtitle: "Full Stack E-Commerce Web Application",
    description:
      "A full-stack e-commerce platform built with Java, Spring Boot, React.js, Spring Data JPA and MySQL.",
    tech: [
      "Java 17",
      "Spring Boot 3",
      "React.js",
      "Spring Data JPA",
      "MySQL",
      "REST APIs",
    ],
    image: "/projects/shopsphere/1.png",
    page: "/projects/ShopSphere.jsx",
  },
  {
    id: "banksphere",
    title: "BankSphere",
    subtitle: "Online Banking System",
    description:
      "A secure full-stack banking application with JWT authentication, role-based access control and relational database design.",
    tech: [
      "Java 17",
      "Spring Boot 3",
      "Spring Security",
      "JWT",
      "React.js",
      "MySQL",
      "Docker",
    ],
    image: "/projects/banksphere/14.png",
    page: "/projects/BankSphere.jsx",
  },
  {
    id: "aiexamcompanion",
    title: "AI Exam Companion",
    subtitle: "AI-Powered Examination & Learning Platform",
    description:
      "An AI-powered learning platform designed to help students prepare for examinations through mock tests, revision and performance analytics.",
    tech: [
      "React.js",
      "Python",
      "Flask",
      "Firebase",
      "AI",
      "REST APIs",
    ],
    image: "/projects/aiexamcompanion/32.png",
    page: "/projects/AIExamCompanion.jsx",
  },
  {
    id: "digitalanalyticsdashboard",
    title: "Digital Analytics Dashboard",
    subtitle: "Interactive Analytics Dashboard",
    description:
      "A responsive analytics dashboard designed to visualize business metrics, statistics and performance data.",
    tech: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "REST APIs",
      "Charts",
    ],
    image: "/projects/digitalanalyticsdashboard/38.png",
    page: "/projects/DigitalAnalyticsDashboard.jsx",
  },
  {
    id: "lifedecisionassistant",
    title: "Life Decision Assistant",
    subtitle: "AI-Based Decision Support Application",
    description:
      "An intelligent application designed to help users evaluate options and make structured decisions.",
    tech: [
      "React.js",
      "JavaScript",
      "Python",
      "AI",
      "REST APIs",
      "Firebase",
    ],
    image: "/projects/lifedecisionassistant/24.png",
    page: "/projects/LifeDecisionAssistant.jsx",
  },
];

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (section) => {
    setActiveSection(section);

    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const openProject = (project) => {
    window.location.href = project.page;
  };

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <div className="nav-container">

          <div
            className="logo"
            onClick={() => scrollToSection("home")}
          >
            RAHUL<span>.</span>
          </div>

          <nav className="nav-links">
            <button
              className={activeSection === "home" ? "active" : ""}
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>

            <button
              className={activeSection === "about" ? "active" : ""}
              onClick={() => scrollToSection("about")}
            >
              About
            </button>

            <button
              className={activeSection === "skills" ? "active" : ""}
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </button>

            <button
              className={activeSection === "experience" ? "active" : ""}
              onClick={() => scrollToSection("experience")}
            >
              Experience
            </button>

            <button
              className={activeSection === "projects" ? "active" : ""}
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </button>

            <button
              className={activeSection === "education" ? "active" : ""}
              onClick={() => scrollToSection("education")}
            >
              Education
            </button>

            <button
              className={activeSection === "certifications" ? "active" : ""}
              onClick={() => scrollToSection("certifications")}
            >
              Certifications
            </button>

            <button
              className={activeSection === "contact" ? "active" : ""}
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </nav>

        </div>
      </header>

      {/* ================= HERO ================= */}

      <section id="home" className="hero section">

        <div className="hero-content">

          <p className="hero-small">
            HELLO, I'M
          </p>

          <h1>
            Rahul <span>S.</span>
          </h1>

          <h2>
            Software Engineer
          </h2>

          <p className="hero-description">
            Software Engineer with hands-on experience building
            full-stack web applications using Java, Spring Boot,
            and React.js.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() => scrollToSection("projects")}
            >
              View My Projects
            </button>

            <button
              className="secondary-btn"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </button>

          </div>

          <div className="hero-links">

            <a
              href="https://github.com/RAHUL2525252525"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

          </div>

        </div>

        <div className="hero-card">

          <div className="code-window">

            <div className="window-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="code-content">
              <p>
                <span className="purple">const</span>{" "}
                developer = {"{"}
              </p>

              <p>
                &nbsp;&nbsp;name:{" "}
                <span className="green">
                  "Rahul S."
                </span>,
              </p>

              <p>
                &nbsp;&nbsp;role:{" "}
                <span className="green">
                  "Software Engineer"
                </span>,
              </p>

              <p>
                &nbsp;&nbsp;location:{" "}
                <span className="green">
                  "Bangalore"
                </span>,
              </p>

              <p>
                &nbsp;&nbsp;stack: [
              </p>

              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="orange">
                  "Java"
                </span>,
              </p>

              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="orange">
                  "Spring Boot"
                </span>,
              </p>

              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="orange">
                  "React.js"
                </span>
              </p>

              <p>
                &nbsp;&nbsp;]
              </p>

              <p>{"}"}</p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section id="about" className="section about-section">

        <div className="section-heading">
          <span>01</span>
          <h2>About Me</h2>
        </div>

        <div className="about-grid">

          <div className="about-text">

            <p>
              Software Engineer with hands-on experience building
              full-stack web applications using Java, Spring Boot,
              and React.js.
            </p>

            <p>
              Skilled in REST API design, JWT-based authentication
              and authorization, role-based access control (RBAC),
              relational database design (MySQL), and Agile
              software delivery.
            </p>

            <p>
              Experienced with Docker containerization, unit testing
              using JUnit and Mockito, and version control using Git.
              Comfortable collaborating with cross-functional,
              distributed teams in Agile delivery environments.
            </p>

            <p>
              Strong foundation in data structures, algorithms,
              and object-oriented design.
            </p>

          </div>

          <div className="about-stats">

            <div className="stat-card">
              <strong>5+</strong>
              <span>Projects</span>
            </div>

            <div className="stat-card">
              <strong>15+</strong>
              <span>REST APIs</span>
            </div>

            <div className="stat-card">
              <strong>8.00</strong>
              <span>CGPA</span>
            </div>

            <div className="stat-card">
              <strong>2026</strong>
              <span>Graduate</span>
            </div>

          </div>

        </div>

      </section>

      {/* ================= SKILLS ================= */}

      <section id="skills" className="section">

        <div className="section-heading">
          <span>02</span>
          <h2>Technical Skills</h2>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Languages</h3>

            <div className="skill-tags">
              <span>Java</span>
              <span>JavaScript ES6+</span>
              <span>SQL</span>
              <span>HTML5</span>
              <span>CSS3</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Frameworks & Libraries</h3>

            <div className="skill-tags">
              <span>Spring Boot</span>
              <span>Spring MVC</span>
              <span>Spring Security</span>
              <span>Spring Data JPA</span>
              <span>Hibernate</span>
              <span>React.js</span>
              <span>Axios</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>APIs & Security</h3>

            <div className="skill-tags">
              <span>REST API Design</span>
              <span>JWT Authentication</span>
              <span>RBAC</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Databases</h3>

            <div className="skill-tags">
              <span>MySQL</span>
              <span>SQL</span>
              <span>Database Design</span>
              <span>Normalization</span>
              <span>Relational Data Modeling</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Architecture</h3>

            <div className="skill-tags">
              <span>Layered Architecture</span>
              <span>Microservices</span>
              <span>MVC</span>
              <span>Exception Handling</span>
              <span>DTO Pattern</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Cloud & DevOps</h3>

            <div className="skill-tags">
              <span>Docker</span>
              <span>Docker Compose</span>
              <span>Maven</span>
              <span>Git</span>
              <span>GitHub</span>
              <span>GitHub Actions</span>
              <span>Vercel</span>
              <span>Render</span>
              <span>Aiven</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Testing & Practices</h3>

            <div className="skill-tags">
              <span>JUnit 5</span>
              <span>Mockito</span>
              <span>Postman</span>
              <span>Agile / Scrum</span>
              <span>Code Reviews</span>
              <span>Unit Testing</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Core CS</h3>

            <div className="skill-tags">
              <span>Data Structures</span>
              <span>Algorithms</span>
              <span>OOP</span>
              <span>DBMS</span>
              <span>Software Engineering</span>
            </div>
          </div>

        </div>

      </section>

      {/* ================= EXPERIENCE ================= */}

      <section id="experience" className="section">

        <div className="section-heading">
          <span>03</span>
          <h2>Professional Experience</h2>
        </div>

        <div className="experience-card">

          <div className="experience-header">

            <div>
              <h3>Web Development Intern</h3>
              <h4>MR Tech Lab</h4>
            </div>

            <div className="experience-date">
              01/2026 – 05/2026
            </div>

          </div>

          <p className="experience-location">
            Bengaluru, Karnataka
          </p>

          <ul>

            <li>
              Translated design specs into production HTML/CSS/JS,
              building responsive UI components that rendered
              consistently across Chrome, Firefox, and Safari.
            </li>

            <li>
              Integrated Firebase Authentication and session
              management to enable secure user sign-in, resolving
              authentication issues identified during QA before launch.
            </li>

            <li>
              Independently built and shipped 3 web applications
              using HTML/CSS/JS, Python/Flask, and Firebase,
              applying full-stack fundamentals later carried into
              Java-based project work.
            </li>

            <li>
              Collaborated with cross-functional teammates in an
              Agile, Git-based workflow, delivering assigned UI
              features on schedule across multiple sprints.
            </li>

          </ul>

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section id="projects" className="section projects-section">

        <div className="section-heading">
          <span>04</span>
          <h2>Projects</h2>
        </div>

        <p className="projects-intro">
          Explore my full-stack projects. Click any project to view
          its dedicated project interface, screenshots and details.
        </p>

        <div className="projects-grid">

          {projects.map((project, index) => (

            <article
              className="project-card"
              key={project.id}
              onClick={() => openProject(project)}
            >

              <div className="project-image-wrapper">

                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

                <div className="project-overlay">
                  <span>
                    View Project →
                  </span>
                </div>

                <div className="project-number">
                  0{index + 1}
                </div>

              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <h4>{project.subtitle}</h4>

                <p>
                  {project.description}
                </p>

                <div className="project-tech">

                  {project.tech.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}

                </div>

                <button
                  className="project-button"
                  onClick={(event) => {
                    event.stopPropagation();
                    openProject(project);
                  }}
                >
                  Explore Project →
                </button>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* ================= EDUCATION ================= */}

      <section id="education" className="section">

        <div className="section-heading">
          <span>05</span>
          <h2>Education</h2>
        </div>

        <div className="education-card">

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
          </div>

          <div className="education-right">

            <strong>8.00 / 10</strong>

            <span>
              CGPA
            </span>

            <small>
              Graduated 2026
            </small>

          </div>

        </div>

      </section>

      {/* ================= CERTIFICATIONS ================= */}

      <section id="certifications" className="section">

        <div className="section-heading">
          <span>06</span>
          <h2>Certifications</h2>
        </div>

        <div className="certifications-grid">

          <div className="certificate-card">
            <div className="certificate-icon">
              ☕
            </div>

            <div>
              <h3>
                Java Programming Fundamentals
              </h3>

              <p>
                Infosys Springboard
              </p>
            </div>
          </div>

          <div className="certificate-card">
            <div className="certificate-icon">
              ☕
            </div>

            <div>
              <h3>
                Introduction to Java
              </h3>

              <p>
                Infosys Springboard
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section id="contact" className="section contact-section">

        <div className="section-heading">
          <span>07</span>
          <h2>Contact</h2>
        </div>

        <div className="contact-content">

          <h2>
            Let's Build Something
            <span> Great.</span>
          </h2>

          <p>
            I'm open to software engineering and full-stack
            development opportunities.
          </p>

          <div className="contact-links">

            <a href="mailto:Srinivasrahul838@gmail.com">
              Srinivasrahul838@gmail.com
            </a>

            <a href="tel:7337634886">
              7337634886
            </a>

          </div>

          <div className="contact-socials">

            <a
              href="https://github.com/RAHUL2525252525"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer>

        <div>
          © 2026 Rahul S. All rights reserved.
        </div>

        <div>
          Built with React.js
        </div>

      </footer>

    </div>
  );
}

export default App;
