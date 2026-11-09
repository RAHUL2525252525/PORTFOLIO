import React, { useEffect, useRef, useState } from "react";

import ShopSphere from "./projects/ShopSphere";
import BankSphere from "./projects/BankSphere";
import LifeDecisionAssistant from "./projects/LifeDecisionAssistant";
import AIExamCompanion from "./projects/AIExamCompanion";
import DigitalAnalyticsDashboard from "./projects/DigitalAnalyticsDashboard";
import GymSync from "./projects/GymSync";
import ResumeIQ from "./projects/ResumeIQ";
import PlantDiseaseDetection from "./projects/PlantDiseaseDetection";

import { sortGlobImages } from "./projects/galleryUtils";

import "./index.css";

/* =========================================================
   PROJECT PREVIEW IMAGES
   ========================================================= */

/*
  Screenshots are stored under:
  src/assets/projects/<project-name>/

  Vite cannot resolve these using a plain "/image.png" path,
  so import.meta.glob is used.
*/

const shopsphereRaw = import.meta.glob(
  "./assets/projects/shopsphere/*.png",
  { eager: true, import: "default" }
);

const banksphereRaw = import.meta.glob(
  "./assets/projects/banksphere/*.png",
  { eager: true, import: "default" }
);

const lifeDecisionRaw = import.meta.glob(
  "./assets/projects/lifedecisionassistant/*.png",
  { eager: true, import: "default" }
);

const aiExamRaw = import.meta.glob(
  "./assets/projects/aiexamcompanion/*.png",
  { eager: true, import: "default" }
);

const digitalAnalyticsRaw = import.meta.glob(
  "./assets/projects/digitalanalyticsdashboard/*.png",
  { eager: true, import: "default" }
);

const gymSyncRaw = import.meta.glob(
  "./assets/projects/gymsync/*.png",
  { eager: true, import: "default" }
);

/*
  ResumeIQ's screenshots are named 52.png.png .. 56.png.png,
  but "*.png" still matches them fine here since it's only used
  to grab a single preview thumbnail for the projects grid.
*/
const resumeiqRaw = import.meta.glob(
  "./assets/projects/ResumeIQ/*.png",
  { eager: true, import: "default" }
);

/*
  Plant Disease Detection screenshots live in:
  src/assets/projects/plantdiseasedetection/
  png, jpg, jpeg and webp are all accepted.
*/
const plantDiseaseRaw = import.meta.glob(
  "./assets/projects/plantdiseasedetection/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" }
);

const SHOPSPHERE_IMAGE = sortGlobImages(shopsphereRaw)[0] ?? null;
const BANKSPHERE_IMAGE = sortGlobImages(banksphereRaw)[0] ?? null;
const LIFEDECISION_IMAGE = sortGlobImages(lifeDecisionRaw)[0] ?? null;
const AIEXAM_IMAGE = sortGlobImages(aiExamRaw)[0] ?? null;
const DIGITALANALYTICS_IMAGE = sortGlobImages(digitalAnalyticsRaw)[0] ?? null;
const GYMSYNC_IMAGE = sortGlobImages(gymSyncRaw)[0] ?? null;
const RESUMEIQ_IMAGE = sortGlobImages(resumeiqRaw)[0] ?? null;
const PLANTDISEASE_IMAGE = sortGlobImages(plantDiseaseRaw)[0] ?? null;

/* =========================================================
   PROJECT ROUTES
   ========================================================= */

const ROUTES = {
  shopsphere: ShopSphere,
  banksphere: BankSphere,
  lifedecisionassistant: LifeDecisionAssistant,
  aiexamcompanion: AIExamCompanion,
  digitalanalyticsdashboard: DigitalAnalyticsDashboard,
  gymsync: GymSync,
  resumeiq: ResumeIQ,
  plantdiseasedetection: PlantDiseaseDetection,
};

/* =========================================================
   HASH ROUTING
   ========================================================= */

function getHashRoute() {
  return window.location.hash.replace(/^#\/?/, "").toLowerCase();
}

function scrollToSection(route, smooth = true) {
  if (!route) {
    window.scrollTo({
      top: 0,
      behavior: smooth ? "smooth" : "auto",
    });
    return;
  }

  const section = document.getElementById(route);

  if (section) {
    section.scrollIntoView({
      behavior: smooth ? "smooth" : "auto",
      block: "start",
    });
  }
}

function useHashRoute() {
  const [route, setRoute] = useState(getHashRoute());

  useEffect(() => {
    let initialScrollTimeout;

    const handleHashChange = () => {
      const newRoute = getHashRoute();

      /*
        If the hash points to a project page,
        render that project and move to the top.
      */
      if (ROUTES[newRoute]) {
        setRoute(newRoute);
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      /*
        Otherwise this is a normal portfolio section.
      */
      setRoute("");

      if (newRoute) {
        requestAnimationFrame(() => {
          scrollToSection(newRoute, true);
        });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    const initialRoute = getHashRoute();

    if (ROUTES[initialRoute]) {
      setRoute(initialRoute);
    } else if (initialRoute) {
      initialScrollTimeout = setTimeout(() => {
        scrollToSection(initialRoute, false);
      }, 50);
    }

    return () => {
      window.removeEventListener("hashchange", handleHashChange);

      if (initialScrollTimeout) {
        clearTimeout(initialScrollTimeout);
      }
    };
  }, []);

  return route;
}

/* =========================================================
   SCROLL REVEAL
   ========================================================= */

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
      { threshold: 0.12 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
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
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (event, sectionId) => {
    event.preventDefault();

    setMobileMenu(false);

    const currentHash = window.location.hash
      .replace(/^#\/?/, "")
      .toLowerCase();

    if (currentHash === sectionId) {
      scrollToSection(sectionId, true);
      return;
    }

    window.location.hash = `#${sectionId}`;
  };

  const handleLogoClick = (event) => {
    event.preventDefault();

    setMobileMenu(false);

    if (window.location.hash) {
      window.location.hash = "";
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="nav-container">
        <a
          href="#"
          className="nav-logo"
          onClick={handleLogoClick}
          aria-label="Go to homepage"
        >
          <span className="logo-name">RAHUL</span>
          <span className="logo-dot">.</span>
        </a>

        <div
          id="main-navigation"
          className={`nav-links ${mobileMenu ? "mobile-open" : ""}`}
        >
          <a href="#about" onClick={(e) => handleNavClick(e, "about")}>
            About
          </a>

          <a href="#skills" onClick={(e) => handleNavClick(e, "skills")}>
            Skills
          </a>

          <a
            href="#experience"
            onClick={(e) => handleNavClick(e, "experience")}
          >
            Experience
          </a>

          <a href="#projects" onClick={(e) => handleNavClick(e, "projects")}>
            Projects
          </a>

          <a
            href="#education"
            onClick={(e) => handleNavClick(e, "education")}
          >
            Education
          </a>

          <a
            href="#certifications"
            onClick={(e) => handleNavClick(e, "certifications")}
          >
            Certifications
          </a>

          <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="nav-contact"
          onClick={(e) => handleNavClick(e, "contact")}
        >
          Let's Talk
          <span>↗</span>
        </a>

        <button
          type="button"
          className={`mobile-menu-button ${mobileMenu ? "active" : ""}`}
          onClick={() => setMobileMenu((previous) => !previous)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenu}
          aria-controls="main-navigation"
        >
          <span />
          <span />
          <span />
        </button>
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
        <Reveal className="hero-topline">
          <span className="hero-line" />
          <span>PYTHON DEVELOPER</span>
        </Reveal>

        <div className="hero-main">
          <Reveal className="hero-copy">
            <p className="hero-eyebrow">
              FASTAPI · FLASK · DJANGO REST · DOCKER
            </p>

            <h1>
              Rahul
              <br />
              <span>S.</span>
            </h1>

            <p className="hero-title">Python Developer</p>

            <p className="hero-description">
              B.E. Computer Science graduate (2026) who builds and
              deploys full-stack applications with
              <strong>
                {" "}FastAPI, Flask, Django REST Framework and React.js
              </strong>{" "}
              — JWT authentication, Docker containerisation,
              GitHub Actions CI/CD and LLM APIs (Gemini, Groq,
              OpenRouter) integrated into working products. I also
              build deep learning models with CNNs, and have
              hands-on Java experience from projects like
              BankSphere and ShopSphere.
            </p>

            <div className="hero-actions">
              <a
                href="#projects"
                className="hero-primary-button"
                onClick={(event) => {
                  event.preventDefault();
                  window.location.hash = "#projects";
                }}
              >
                View Projects
                <span>↗</span>
              </a>

              <a
                href="#contact"
                className="hero-secondary-button"
                onClick={(event) => {
                  event.preventDefault();
                  window.location.hash = "#contact";
                }}
              >
                Contact Me
              </a>
            </div>

            <div className="hero-meta">
              <span>
                <i />
                Bengaluru, India
              </span>

              <span>Open to opportunities</span>
            </div>
          </Reveal>

          <Reveal className="hero-profile-area">
            <div className="profile-orbit orbit-one" />
            <div className="profile-orbit orbit-two" />

            <div className="profile-decoration profile-decoration-one" />
            <div className="profile-decoration profile-decoration-two" />

            <div className="profile-frame">
              <div className="profile-inner">
                <img
                  src="/rahul-profile.jpg"
                  alt="Rahul S"
                  className="profile-image"
                />
              </div>
            </div>

            <div className="profile-number">01</div>
          </Reveal>
        </div>

        <div className="hero-bottom">
          <span>SCROLL TO EXPLORE</span>

          <div className="scroll-line">
            <span />
          </div>

          <span>2026</span>
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
          <div className="section-kicker">
            <span>01</span>
            ABOUT ME
          </div>

          <h2 className="massive-title">
            Engineer first.
            <br />
            <span>Builder always.</span>
          </h2>
        </Reveal>

        <div className="about-layout">
          <Reveal className="about-main">
            <p className="about-lead">
              I'm a Python developer with hands-on experience
              building and deploying full-stack applications.
            </p>

            <p>
              My work spans REST APIs with FastAPI, Flask and
              Django REST Framework, React.js frontends,
              PostgreSQL and MySQL databases, JWT authentication
              and Docker containerisation. I automate deployments
              with GitHub Actions CI/CD and host apps on Render
              and Vercel.
            </p>

            <p>
              During my AI internship at MR. TechLab LLP
              (AppMind AI) I built and deployed three full-stack
              web apps — AI Exam Companion, Life Decision
              Assistant and Digital Analytics Dashboard — using
              Flask, Firebase and Google Authentication, and
              integrated LLM APIs including Gemini, Groq and
              OpenRouter. I also completed two AI &amp; Data
              Science internship phases at Knowx Innovations,
              working with Python, SQL, machine learning, OpenCV,
              Keras and TensorFlow.
            </p>

            <p>
              For my B.E. major project, Plant Disease Detection,
              I trained a CNN on a 1.5 GB Kaggle crop-leaf image
              dataset to detect plant diseases, reaching over 90%
              accuracy, with a Streamlit interface for live
              predictions. I also have hands-on experience
              building Java applications, including a banking
              system and an e-commerce platform.
            </p>
          </Reveal>

          <Reveal className="about-stats">
            <div className="stat-card">
              <strong>8</strong>
              <span>LIVE DEPLOYED APPLICATIONS</span>
            </div>

            <div className="stat-card">
              <strong>90%+</strong>
              <span>CNN ACCURACY ON MAJOR PROJECT</span>
            </div>

            <div className="stat-card">
              <strong>6</strong>
              <span>PYTHON &amp; ML APPLICATIONS</span>
            </div>

            <div className="stat-card">
              <strong>3</strong>
              <span>INTERNSHIP EXPERIENCES</span>
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
      title: "LANGUAGES & FRONTEND",
      description:
        "Core languages and interfaces for full-stack applications.",
      items: [
        "Python",
        "SQL",
        "JavaScript",
        "Java",
        "React.js",
        "HTML5",
        "CSS3",
        "Streamlit",
      ],
    },

    {
      number: "02",
      title: "BACKEND",
      description:
        "Structured backend systems with secure API design.",
      items: [
        "FastAPI",
        "Flask",
        "Django REST Framework",
        "Spring Boot",
        "REST APIs",
        "JWT Authentication",
        "Async Programming",
      ],
    },

    {
      number: "03",
      title: "DATABASES",
      description:
        "Relational and cloud database design and management.",
      items: ["PostgreSQL", "MySQL", "Firebase"],
    },

    {
      number: "04",
      title: "API & TESTING",
      description: "API testing and quality-focused development.",
      items: ["Postman", "Unit Testing"],
    },

    {
      number: "05",
      title: "DATA & BI",
      description: "Data cleaning and business intelligence tooling.",
      items: ["Pandas", "Power BI", "Tableau", "Data Cleaning"],
    },

    {
      number: "06",
      title: "DEVOPS & CLOUD",
      description:
        "Deployment, containerization and development workflows.",
      items: [
        "Docker",
        "Git",
        "GitHub Actions (CI/CD)",
        "Render",
        "Vercel",
        "AWS (EC2, S3 – basic)",
      ],
    },

    {
      number: "07",
      title: "AI & ML",
      description:
        "LLM integrations and deep learning from internships and projects.",
      items: [
        "Gemini API",
        "Groq API",
        "OpenRouter API",
        "TensorFlow",
        "Keras",
        "CNN",
        "OpenCV",
      ],
    },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="section-container">
        <Reveal>
          <div className="section-kicker blue-kicker">
            <span>02</span>
            TECHNICAL SKILLS
          </div>

          <h2 className="massive-title light-title">
            Tools I use to
            <br />
            <span>ship software.</span>
          </h2>
        </Reveal>

        <div className="skills-list">
          {groups.map((group) => (
            <Reveal key={group.title} className="skill-row">
              <div className="skill-number">{group.number}</div>

              <div className="skill-heading">
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>

              <div className="skill-items">
                {group.items.map((skill) => (
                  <span key={skill}>{skill}</span>
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
  const experiences = [
    {
      type: "AI INTERNSHIP",
      role: "AI Intern",
      company: "MR. TechLab LLP (AppMind AI) · Bengaluru",
      date: "JAN 2026 — MAY 2026",
      summary:
        "Built and deployed three full-stack web apps using Flask, Firebase and Google Authentication, hosted on Vercel and Render.",
      points: [
        "Built and deployed 3 full-stack web apps using Flask, Firebase and Google Authentication; containerised with Docker and hosted on Vercel (frontend) and Render (backend).",
        "Developed an AI Exam Companion: a Groq-powered chatbot with a performance dashboard and mock tests.",
        "Built a Life Decision Assistant integrating the Gemini and OpenRouter APIs, and a Digital Analytics Dashboard with a Gemini-powered chatbot.",
      ],
    },

    {
      type: "AI & DATA SCIENCE INTERNSHIP",
      role: "AI & Data Science Intern — Software Dev Project",
      company: "Knowx Innovations (P) Ltd · Bengaluru",
      date: "MAR 2023 — JUN 2023",
      summary:
        "Second internship phase (during Diploma): training and a software development project in Artificial Intelligence, Machine Learning, Deep Learning and Data Science.",
      points: [
        "Worked hands-on with Python, SQL, machine learning algorithms, OpenCV, Keras, TensorFlow and data visualisation.",
        "Applied CNNs and VGG16 in sample projects on deep learning and image classification.",
      ],
    },

    {
      type: "AI & DATA SCIENCE INTERNSHIP",
      role: "AI & Data Science Intern — Training",
      company: "Knowx Innovations (P) Ltd · Bengaluru",
      date: "OCT 2022 — JAN 2023",
      summary:
        "First internship phase (during Diploma): structured training in Artificial Intelligence, Data Science, Python programming and machine learning.",
      points: [
        "Completed training in Python, SQL, machine learning algorithms, OpenCV, Keras and TensorFlow.",
        "Received an internship certificate from Knowx Innovations for each phase of the program.",
      ],
    },
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="section-container">
        <Reveal>
          <div className="section-kicker">
            <span>03</span>
            EXPERIENCE
          </div>

          <h2 className="massive-title">
            Where I learned
            <br />
            <span>to build.</span>
          </h2>
        </Reveal>

        <div className="experience-list">
          {experiences.map((experience) => (
            <Reveal
              key={`${experience.company}-${experience.date}`}
              className="experience-main-card"
            >
              <div className="experience-top">
                <div>
                  <span className="experience-type">{experience.type}</span>

                  <h3>{experience.role}</h3>

                  <p className="experience-company">{experience.company}</p>
                </div>

                <span className="experience-date">{experience.date}</span>
              </div>

              <div className="experience-divider" />

              <div className="experience-content">
                <p className="experience-summary">{experience.summary}</p>

                <ul>
                  {experience.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROJECTS
   ========================================================= */

const PROJECTS = [
  {
    id: "aiexamcompanion",
    number: "01",
    category: "AI-POWERED APPLICATION",
    title: "AI Exam Companion",
    image: AIEXAM_IMAGE,
    tech: [
      "Python",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase",
      "Google Authentication",
      "Groq API",
      "Docker",
    ],
    backendNote:
      "Groq-powered exam preparation chatbot with a performance dashboard and mock tests, built on a Flask backend with Firebase and Google authentication.",
    liveLinks: [
      {
        label: "Live Demo",
        url: "https://ai-exam-companion-ghzc.onrender.com",
      },
    ],
  },

  {
    id: "resumeiq",
    number: "02",
    category: "AI-POWERED APPLICATION",
    title: "ResumeIQ",
    image: RESUMEIQ_IMAGE,
    tech: [
      "Python",
      "Django",
      "Django REST Framework",
      "React.js",
      "MySQL",
      "JWT Authentication",
      "Gemini API",
      "Postman",
      "Docker",
    ],
    backendNote:
      "AI resume analyzer that parses resumes and scores them against job descriptions, built on a JWT-secured Django REST Framework backend with a React.js frontend.",
    liveLinks: [
      {
        label: "Live Demo",
        url: "https://resumeiq-wxje.onrender.com/app",
      },
    ],
  },

  {
    id: "lifedecisionassistant",
    number: "03",
    category: "AI-POWERED APPLICATION",
    title: "Life Decision Assistant",
    image: LIFEDECISION_IMAGE,
    tech: [
      "Python",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase",
      "Google Authentication",
      "Gemini API",
      "OpenRouter API",
      "Docker",
    ],
    backendNote:
      "AI decision-support assistant that helps users reason through everyday decisions, integrating the Gemini and OpenRouter APIs on a Flask backend.",
    liveLinks: [
      {
        label: "Live Demo",
        url: "https://life-decision-assistant-63pu.onrender.com",
      },
    ],
  },

  {
    id: "digitalanalyticsdashboard",
    number: "04",
    category: "PYTHON FULL-STACK APPLICATION",
    title: "Digital Analytics Dashboard",
    image: DIGITALANALYTICS_IMAGE,
    tech: [
      "Python",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase",
      "Google Authentication",
      "Gemini API",
      "Postman",
      "Docker",
      "Pytest",
      "JWT Authentication",
    ],
    backendNote:
      "Users upload CSV files that an automated pipeline cleans and turns into interactive charts, with a Gemini-powered chatbot that answers questions about the uploaded data.",
    liveLinks: [
      {
        label: "Live Demo",
        url: "https://digital-dashboard1.onrender.com",
      },
    ],
  },

  {
    id: "banksphere",
    number: "05",
    category: "JAVA FULL-STACK APPLICATION",
    title: "BankSphere",
    image: BANKSPHERE_IMAGE,
    tech: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "React.js",
      "PostgreSQL",
      "REST APIs",
      "JWT Authentication",
      "RBAC",
      "Maven",
      "Docker",
      "Postman",
      "JUnit",
    ],
    backendNote:
      "Online banking system built in Java/Spring Boot with JWT authentication, role-based access (user and admin), account and transaction management, and a React.js frontend served from the same Dockerized service.",
    liveLinks: [
      {
        label: "Live Demo",
        url: "https://online-banking-system-17od.onrender.com",
      },
    ],
  },

  {
    id: "shopsphere",
    number: "06",
    category: "JAVA FULL-STACK APPLICATION",
    title: "ShopSphere",
    image: SHOPSPHERE_IMAGE,
    tech: [
      "Java",
      "Spring Boot",
      "React.js",
      "MySQL",
      "REST APIs",
      "RBAC",
      "JWT Authentication",
      "Maven",
      "Docker",
      "Postman",
      "JUnit",
    ],
    backendNote:
      "Full-featured e-commerce platform built in Java/Spring Boot with role-based access control and a React.js storefront.",
    liveLinks: [
      {
        label: "Live Demo",
        url: "https://shopsphere-c109.onrender.com",
      },
    ],
  },

  {
    id: "gymsync",
    number: "07",
    category: "PYTHON FULL-STACK APPLICATION",
    title: "GymSync",
    image: GYMSYNC_IMAGE,
    tech: [
      "Python",
      "FastAPI",
      "JavaScript",
      "React + Vite",
      "PostgreSQL",
      "Docker",
      "JWT Authentication",
      "GitHub Actions",
      "Postman",
      "Pytest",
    ],
    backendNote:
      "Containerised gym tracking application with an asynchronous FastAPI backend, PostgreSQL and a React.js frontend, deployed to Vercel and Render through a GitHub Actions CI/CD pipeline.",
    liveLinks: [
      {
        label: "Live Demo",
        url: "https://gymsync-app.onrender.com",
      },
    ],
  },

  {
    id: "plantdiseasedetection",
    number: "08",
    category: "AI / ML APPLICATION",
    title: "Plant Disease Detection",
    image: PLANTDISEASE_IMAGE,
    tech: [
      "Python",
      "Streamlit",
      "Machine Learning",
      "Artificial Intelligence",
      "CNN",
      "Kaggle Dataset",
    ],
    backendNote:
      "CNN-based plant leaf disease classifier trained on a 1.5 GB Kaggle dataset, reaching over 90% accuracy, with a Streamlit interface for live predictions.",
    liveLinks: [
      {
        label: "Live Demo",
        url: "https://plant-disease-detection-hknuvzcullqcrg7mzcrtyv.streamlit.app/",
      },
    ],
  },
];

const PROJECT_COUNT_LABEL = String(PROJECTS.length).padStart(2, "0");

function openProject(projectId) {
  window.location.hash = `#${projectId}`;
}

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">
        <Reveal>
          <div className="section-kicker">
            <span>04</span>
            PROJECTS
          </div>

          <h2 className="massive-title light-title">
            Things I've
            <br />
            <span>built and shipped.</span>
          </h2>

          <p className="projects-intro">
            Eight deployed applications — Python full-stack apps
            with LLM integrations, a CNN-based plant disease
            detector, and Java full-stack projects — covering
            REST APIs, relational databases, authentication,
            deep learning and Dockerized deployments, end to end.
          </p>
        </Reveal>

        <div className="projects-showcase">
          {PROJECTS.map((project) => (
            <Reveal key={project.id} className="project-showcase-card">
              <button
                type="button"
                className="project-visual"
                onClick={() => openProject(project.id)}
                aria-label={`View ${project.title}`}
              >
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="project-visual-placeholder">
                    <span>{project.title}</span>
                    <p>Screenshot coming soon</p>
                  </div>
                )}

                <div className="project-image-shade" />

                <div className="project-image-top">
                  <span>{project.category}</span>

                  <span>
                    {project.number} / {PROJECT_COUNT_LABEL}
                  </span>
                </div>

                <div className="project-view">
                  <strong>↗</strong>
                  View Project
                </div>
              </button>

              <div className="project-information">
                <div className="project-title-line">
                  <h3>{project.title}</h3>

                  <span>{project.number}</span>
                </div>

                <div className="project-tech-list">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                {project.liveLinks && project.liveLinks.length > 0 && (
                  <div className="project-live-links">
                    <span className="live-label">LIVE</span>

                    <div className="live-link-list">
                      {project.liveLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(event) => event.stopPropagation()}
                        >
                          {link.label}
                          <span>↗</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {project.backendNote && (
                  <div className="backend-note">
                    <span aria-hidden="true">i</span>

                    <p>{project.backendNote}</p>
                  </div>
                )}

                <button
                  type="button"
                  className="project-open-button"
                  onClick={() => openProject(project.id)}
                >
                  Open Project
                  <span>↗</span>
                </button>
              </div>
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
      <div className="section-container">
        <Reveal>
          <div className="section-kicker">
            <span>05</span>
            EDUCATION
          </div>

          <h2 className="massive-title">
            Where it
            <br />
            <span>started.</span>
          </h2>
        </Reveal>

        <Reveal className="education-main">
          <div className="education-year">2026</div>

          <div className="education-info">
            <span>B.E. — COMPUTER SCIENCE & ENGINEERING</span>

            <h3>ACS College of Engineering, Bengaluru</h3>

            <p>
              Bachelor of Engineering in Computer Science &
              Engineering (2023 – 2026). Preceded by a Diploma in
              Information Science at PVP Polytechnic, Bengaluru
              (2020 – 2023), completed with First Class with
              Distinction.
            </p>

            <div className="education-bottom">
              <span>
                CGPA: <strong>8.00 / 10</strong>
              </span>

              <span>Bengaluru, India</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   CERTIFICATIONS
   ========================================================= */

const CERTIFICATIONS = [
  {
    title: "Green Skills & Artificial Intelligence",
    issuer:
      "Skills4Future Program — Edunet Foundation, AICTE & Shell India (2026)",
    description:
      "Program covering Green Skills and Artificial Intelligence, with hands-on training in Power BI, Tableau and Data Cleaning.",
  },

  {
    title: "Python Full Stack Software Development",
    issuer: "Qspiders Training Institute",
    description:
      "Structured training in full-stack Python development — from backend APIs to frontend integration.",
  },

  {
    title: "AI & Data Science Internship Certificates",
    issuer: "Knowx Innovations (P) Ltd.",
    description:
      "Two internship certificates covering Python, SQL, machine learning, OpenCV, Keras, TensorFlow and deep learning.",
  },
];

const INTERNSHIP_CERTIFICATES = [
  {
    title: "AI Internship",
    subtitle: "MR. TechLab LLP (AppMind AI) · Jan 2026 – May 2026",
    image: "/certificates/appmind-ai-internship.jpg",
  },

  {
    title: "AI & Data Science Internship — Software Dev Project",
    subtitle: "Knowx Innovations (P) Ltd. · Mar 2023 – Jun 2023",
    image: "/certificates/knowx-software-dev-internship.jpg",
  },

  {
    title: "AI & Data Science Internship — Training",
    subtitle: "Knowx Innovations (P) Ltd. · Oct 2022 – Jan 2023",
    image: "/certificates/knowx-training-internship.jpg",
  },

  {
    title: "Green Skills & Generative AI Training",
    subtitle:
      "Skills4Future — Edunet Foundation, AICTE & Shell India Markets Pvt. Ltd.",
    image: "/certificates/skills4future-genai.jpg",
  },
];

function Certifications() {
  return (
    <section
      id="certifications"
      className="section certification-section"
    >
      <div className="section-container">
        <Reveal>
          <div className="section-kicker">
            <span>06</span>
            CERTIFICATIONS
          </div>

          <h2 className="massive-title">
            Proof of
            <br />
            <span>continuous learning.</span>
          </h2>
        </Reveal>

        <div className="certification-grid">
          {CERTIFICATIONS.map((cert, index) => (
            <Reveal key={cert.title} className="certificate-item">
              <div className="certificate-number">0{index + 1}</div>

              <div className="certificate-content">
                <h3>{cert.title}</h3>

                <strong>{cert.issuer}</strong>

                <p>{cert.description}</p>
              </div>

              <div className="certificate-arrow">↗</div>
            </Reveal>
          ))}
        </div>

        <Reveal className="certificate-book-heading">
          <h3>Flip through my internship certificates</h3>

          <p>
            My three internship certificates and my Skills4Future
            Generative AI training certificate — click the arrows
            to turn the page.
          </p>
        </Reveal>

        <Reveal>
          <CertificateBook certificates={INTERNSHIP_CERTIFICATES} />
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   CERTIFICATE BOOK
   ========================================================= */

function CertificateBook({ certificates }) {
  const [index, setIndex] = useState(0);
  const [flipDirection, setFlipDirection] = useState(null);

  const flipTimeoutRef = useRef(null);

  /*
    Preload every certificate image so page turns
    don't wait for the browser to download them.
  */
  useEffect(() => {
    certificates.forEach((cert) => {
      const preloadImage = new Image();
      preloadImage.src = cert.image;
    });

    return () => {
      if (flipTimeoutRef.current) {
        clearTimeout(flipTimeoutRef.current);
      }
    };
  }, [certificates]);

  const FLIP_DURATION_MS = 620;

  const goToIndex = (nextIndex, direction) => {
    if (
      flipDirection ||
      nextIndex < 0 ||
      nextIndex >= certificates.length
    ) {
      return;
    }

    setFlipDirection(direction);

    flipTimeoutRef.current = setTimeout(() => {
      setIndex(nextIndex);
      setFlipDirection(null);
      flipTimeoutRef.current = null;
    }, FLIP_DURATION_MS);
  };

  const handlePrev = () => {
    goToIndex(index - 1, "prev");
  };

  const handleNext = () => {
    goToIndex(index + 1, "next");
  };

  const current = certificates[index];

  const incoming =
    flipDirection === "next"
      ? certificates[index + 1]
      : flipDirection === "prev"
      ? certificates[index - 1]
      : null;

  return (
    <div className="certificate-book">
      <button
        type="button"
        className="book-arrow book-arrow-left"
        onClick={handlePrev}
        disabled={index === 0 || Boolean(flipDirection)}
        aria-label="Previous certificate"
      >
        ‹
      </button>

      <div className="book-frame">
        {incoming && (
          <div className="book-page book-page-under">
            <CertificatePage cert={incoming} />
          </div>
        )}

        <div
          className={`book-page book-page-top ${
            flipDirection === "next" ? "flip-next" : ""
          } ${flipDirection === "prev" ? "flip-prev" : ""}`}
        >
          <CertificatePage cert={current} />
        </div>

        <div className="book-spine" />
      </div>

      <button
        type="button"
        className="book-arrow book-arrow-right"
        onClick={handleNext}
        disabled={
          index === certificates.length - 1 || Boolean(flipDirection)
        }
        aria-label="Next certificate"
      >
        ›
      </button>

      <div className="book-footer">
        <div
          className="book-dots"
          role="tablist"
          aria-label="Certificate pages"
        >
          {certificates.map((cert, dotIndex) => (
            <button
              key={cert.title}
              type="button"
              className={dotIndex === index ? "active" : ""}
              onClick={() => {
                if (flipDirection || dotIndex === index) {
                  return;
                }

                goToIndex(dotIndex, dotIndex > index ? "next" : "prev");
              }}
              aria-label={`Go to certificate ${dotIndex + 1}`}
              aria-selected={dotIndex === index}
              role="tab"
            />
          ))}
        </div>

        <p className="book-page-count">
          Page {index + 1} of {certificates.length}
        </p>
      </div>
    </div>
  );
}

function CertificatePage({ cert }) {
  return (
    <div className="book-page-inner">
      <div className="book-page-image-wrap">
        <img
          src={cert.image}
          alt={cert.title}
          onError={(event) => {
            event.currentTarget.style.display = "none";

            event.currentTarget.parentElement?.classList.add(
              "book-page-missing"
            );
          }}
        />
      </div>

      <div className="book-page-caption">
        <h4>{cert.title}</h4>

        <p>{cert.subtitle}</p>
      </div>
    </div>
  );
}

/* =========================================================
   CONTACT
   ========================================================= */

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-background">
        <div />
        <div />
        <div />
      </div>

      <div className="contact-inner">
        <Reveal>
          <div className="section-kicker contact-kicker">
            <span>07</span>
            CONTACT
          </div>

          <h2>
            Let's build
            <br />
            <span>something together.</span>
          </h2>

          <p>
            Open to Python Developer roles. Whether it's a quick
            question or a project idea, my inbox is open.
          </p>

          <a
            href="mailto:srinivasrahul838@gmail.com"
            className="contact-email"
          >
            srinivasrahul838@gmail.com
            <span>↗</span>
          </a>

          <div className="contact-details">
            <span>Bengaluru, Karnataka, India</span>

            <span>+91 73376 34886</span>
          </div>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/rahul-s-6460b1238"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/RAHUL2525252525"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
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
        RAHUL<span>.</span>
      </div>

      <p>Built with React.js</p>

      <span>© 2026 Rahul S. All rights reserved.</span>
    </footer>
  );
}











