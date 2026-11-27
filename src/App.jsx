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

/* ---------- PROJECT PREVIEW IMAGES ---------- */

const shopsphereRaw = import.meta.glob("./assets/projects/shopsphere/*.png", { eager: true, import: "default" });
const banksphereRaw = import.meta.glob("./assets/projects/banksphere/*.png", { eager: true, import: "default" });
const lifeDecisionRaw = import.meta.glob("./assets/projects/lifedecisionassistant/*.png", { eager: true, import: "default" });
const aiExamRaw = import.meta.glob("./assets/projects/aiexamcompanion/*.png", { eager: true, import: "default" });
const digitalAnalyticsRaw = import.meta.glob("./assets/projects/digitalanalyticsdashboard/*.png", { eager: true, import: "default" });
const gymSyncRaw = import.meta.glob("./assets/projects/gymsync/*.png", { eager: true, import: "default" });
const resumeiqRaw = import.meta.glob("./assets/projects/ResumeIQ/*.png", { eager: true, import: "default" });
const plantDiseaseRaw = import.meta.glob("./assets/projects/plantdiseasedetection/*.{png,jpg,jpeg,webp}", { eager: true, import: "default" });

const SHOPSPHERE_IMAGE = sortGlobImages(shopsphereRaw)[0] ?? null;
const BANKSPHERE_IMAGE = sortGlobImages(banksphereRaw)[0] ?? null;
const LIFEDECISION_IMAGE = sortGlobImages(lifeDecisionRaw)[0] ?? null;
const AIEXAM_IMAGE = sortGlobImages(aiExamRaw)[0] ?? null;
const DIGITALANALYTICS_IMAGE = sortGlobImages(digitalAnalyticsRaw)[0] ?? null;
const GYMSYNC_IMAGE = sortGlobImages(gymSyncRaw)[0] ?? null;
const RESUMEIQ_IMAGE = sortGlobImages(resumeiqRaw)[0] ?? null;
const PLANTDISEASE_IMAGE = sortGlobImages(plantDiseaseRaw)[0] ?? null;

/* ---------- PROJECT ROUTES ---------- */

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

/* ---------- HASH ROUTING ---------- */

function getHashRoute() {
  return window.location.hash.replace(/^#\/?/, "").toLowerCase();
}

function scrollToSection(route, smooth = true) {
  if (!route) {
    window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "auto" });
    return;
  }
  const section = document.getElementById(route);
  if (section) {
    section.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
  }
}

function useHashRoute() {
  const [route, setRoute] = useState(getHashRoute());

  useEffect(() => {
    let initialScrollTimeout;

    const handleHashChange = () => {
      const newRoute = getHashRoute();

      if (ROUTES[newRoute]) {
        setRoute(newRoute);
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      setRoute("");

      if (newRoute) {
        requestAnimationFrame(() => scrollToSection(newRoute, true));
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    const initialRoute = getHashRoute();

    if (ROUTES[initialRoute]) {
      setRoute(initialRoute);
    } else if (initialRoute) {
      initialScrollTimeout = setTimeout(() => scrollToSection(initialRoute, false), 50);
    }

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      if (initialScrollTimeout) clearTimeout(initialScrollTimeout);
    };
  }, []);

  return route;
}

/* ---------- SCROLL REVEAL ---------- */

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
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${inView ? "in-view" : ""} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

/* ---------- PURE CSS 3D ---------- */

function Cube({ className }) {
  return (
    <div className={`h3-cube ${className}`}>
      <span className="f front" />
      <span className="f back" />
      <span className="f left" />
      <span className="f right" />
      <span className="f top" />
      <span className="f bottom" />
    </div>
  );
}

function Hero3D() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e) => {
      el.style.setProperty("--mx", (e.clientX / window.innerWidth - 0.5).toFixed(3));
      el.style.setProperty("--my", (e.clientY / window.innerHeight - 0.5).toFixed(3));
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="hero3d" ref={ref} aria-hidden="true">
      <div className="h3-stage">
        <div className="h3-ring r1" />
        <div className="h3-ring r2" />
        <div className="h3-ring r3" />
        <div className="h3-orb o1" />
        <div className="h3-orb o2" />
        <div className="h3-orb o3" />
        <Cube className="c1" />
        <Cube className="c2" />
        <Cube className="c3" />
      </div>
    </div>
  );
}

function Effects3D() {
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    let last = null;

    const reset = (el) => {
      if (!el) return;
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    };

    const move = (e) => {
      const el = e.target.closest?.(".project-showcase-card, .stat-card");
      if (last && last !== el) reset(last);
      last = el;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--ry", `${(x * 8).toFixed(2)}deg`);
      el.style.setProperty("--rx", `${(-y * 8).toFixed(2)}deg`);
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return null;
}

/* ---------- MAIN APP ---------- */

export default function App() {
  const route = useHashRoute();
  const ProjectPage = ROUTES[route];

  if (ProjectPage) {
    return <ProjectPage />;
  }

  return (
    <div className="portfolio">
      <Effects3D />
      <Navbar />
      <Hero />
      <About />
      <Specializations />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Resumes />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------- NAVBAR ---------- */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (event, sectionId) => {
    event.preventDefault();
    setMobileMenu(false);

    const currentHash = window.location.hash.replace(/^#\/?/, "").toLowerCase();

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
        <a href="#" className="nav-logo" onClick={handleLogoClick} aria-label="Go to homepage">
          <span className="logo-name">RAHUL</span>
          <span className="logo-dot">.</span>
        </a>

        <div id="main-navigation" className={`nav-links ${mobileMenu ? "mobile-open" : ""}`}>
          <a href="#about" onClick={(e) => handleNavClick(e, "about")}>About</a>
          <a href="#specializations" onClick={(e) => handleNavClick(e, "specializations")}>Roles</a>
          <a href="#skills" onClick={(e) => handleNavClick(e, "skills")}>Skills</a>
          <a href="#experience" onClick={(e) => handleNavClick(e, "experience")}>Experience</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, "projects")}>Projects</a>
          <a href="#education" onClick={(e) => handleNavClick(e, "education")}>Education</a>
          <a href="#certifications" onClick={(e) => handleNavClick(e, "certifications")}>Certifications</a>
          <a href="#resumes" onClick={(e) => handleNavClick(e, "resumes")}>Resumes</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>Contact</a>
        </div>

        <a href="#resumes" className="nav-contact" onClick={(e) => handleNavClick(e, "resumes")}>
          Get Resume
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

/* ---------- HERO ---------- */

function Hero() {
  const goTo = (hash) => (event) => {
    event.preventDefault();
    window.location.hash = hash;
  };

  return (
    <section className="hero-section">
      <div className="hero-grid-background" />
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-content">
        <Reveal className="hero-topline">
          <span className="hero-line" />
          <span>PYTHON · JAVA · AI &amp; ML</span>
        </Reveal>

        <div className="hero-main">
          <Reveal className="hero-copy">
            <p className="hero-eyebrow">FASTAPI · DJANGO · SPRING BOOT · TENSORFLOW · LLM APIS</p>

            <h1>
              Rahul
              <br />
              <span>S.</span>
            </h1>

            <p className="hero-title">Python Developer · Java Developer · AI/ML Specialist</p>

            <p className="hero-description">
              B.E. Computer Science graduate (2026) who builds and
              deploys full-stack applications in three stacks:
              <strong>{" "}Python (FastAPI, Flask, Django REST), Java (Spring Boot) and AI/ML (CNNs, TensorFlow, multi-LLM apps)</strong>{" "}
              — all with React.js frontends, JWT authentication,
              Docker containerisation and GitHub Actions CI/CD.
              Pick the resume that fits your role below.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="hero-primary-button" onClick={goTo("#projects")}>
                View Projects
                <span>↗</span>
              </a>

              <a href="#resumes" className="hero-secondary-button" onClick={goTo("#resumes")}>
                Download Resume
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
            <Hero3D />

            <div className="profile-orbit orbit-one" />
            <div className="profile-orbit orbit-two" />

            <div className="profile-decoration profile-decoration-one" />
            <div className="profile-decoration profile-decoration-two" />

            <div className="profile-frame">
              <div className="profile-inner">
                <img src="/rahul-profile.jpg" alt="Rahul S" className="profile-image" />
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

/* ---------- ABOUT ---------- */

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
              I'm a developer who ships complete products in Python,
              Java and AI/ML — from database design to live deployment.
            </p>

            <p>
              My Python work spans REST APIs with FastAPI, Flask and
              Django REST Framework, React.js frontends, PostgreSQL
              and MySQL, JWT authentication and Docker. My Java work
              covers Spring Boot, Spring Security and Spring Data JPA
              in projects like BankSphere and ShopSphere. I automate
              deployments with GitHub Actions CI/CD and host apps on
              Render and Vercel.
            </p>

            <p>
              During my AI internship at MR. TechLab LLP
              (AppMind AI) I built and deployed three full-stack
              web apps — AI Exam Companion, Life Decision
              Assistant and Digital Analytics Dashboard — using
              Flask, Firebase and Google Authentication, plus a
              companion Flutter Android APK. I orchestrated multi-LLM
              pipelines across Gemini, Groq and OpenRouter. I also
              completed two AI &amp; Data Science internship phases at
              Knowx Innovations, working with Python, SQL, machine
              learning, OpenCV, Keras and TensorFlow.
            </p>

            <p>
              For my B.E. major project, Plant Disease Detection,
              I trained a CNN on a 1.5 GB Kaggle crop-leaf image
              dataset to detect plant diseases, reaching 90% validation
              accuracy, with a Streamlit interface for live
              predictions and downloadable PDF reports.
            </p>
          </Reveal>

          <Reveal className="about-stats">
            <div className="stat-card">
              <strong>8</strong>
              <span>LIVE DEPLOYED APPLICATIONS</span>
            </div>
            <div className="stat-card">
              <strong>90%</strong>
              <span>CNN VALIDATION ACCURACY</span>
            </div>
            <div className="stat-card">
              <strong>3</strong>
              <span>SPECIALIST TRACKS: PYTHON, JAVA, AI/ML</span>
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

/* ---------- SPECIALIZATIONS ---------- */

const SPECIALIZATIONS = [
  {
    id: "python",
    label: "Python Developer",
    headline: "Python full-stack, APIs and automation",
    blurb:
      "Async and relational backends with FastAPI, Django REST Framework and Flask, paired with React.js frontends and containerised CI/CD deployments.",
    stack: ["FastAPI", "Django REST", "Flask", "React.js", "PostgreSQL", "MySQL", "JWT", "Docker", "GitHub Actions"],
    projects: ["GymSync", "ResumeIQ", "Digital Analytics Dashboard"],
    resumeId: "python",
  },
  {
    id: "java",
    label: "Java Developer",
    headline: "Java full-stack with Spring Boot",
    blurb:
      "Secure, role-based REST backends with Spring Boot, Spring Security and Spring Data JPA, backed by PostgreSQL or MySQL and a React.js UI.",
    stack: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "React.js", "PostgreSQL", "MySQL", "Maven", "JUnit"],
    projects: ["BankSphere", "ShopSphere"],
    resumeId: "java",
  },
  {
    id: "aiml",
    label: "AI & ML Specialist",
    headline: "Deep learning, computer vision and multi-LLM apps",
    blurb:
      "CNNs and transfer learning with TensorFlow and Keras, plus LLM applications that route across Gemini, Groq and OpenRouter, including RAG workflows with LangChain.",
    stack: ["TensorFlow", "Keras", "CNN", "VGG16", "OpenCV", "LangChain", "RAG", "Gemini", "Groq", "OpenRouter"],
    projects: ["Plant Disease Detection", "Life Decision Assistant", "AI Exam Companion"],
    resumeId: "aiml",
  },
];

function Specializations() {
  return (
    <section id="specializations" className="section spec-section">
      <div className="section-container">
        <Reveal>
          <div className="section-kicker">
            <span>02</span>
            SPECIALIZATIONS
          </div>

          <h2 className="massive-title">
            One engineer.
            <br />
            <span>Three specialist tracks.</span>
          </h2>

          <p className="spec-intro">
            Each track has its own focused resume, so you can see
            the skills and projects that matter most for the role.
          </p>
        </Reveal>

        <div className="spec-grid">
          {SPECIALIZATIONS.map((spec) => (
            <Reveal key={spec.id} className="spec-card">
              <span className="spec-label">{spec.label}</span>
              <h3>{spec.headline}</h3>
              <p>{spec.blurb}</p>

              <div className="spec-stack">
                {spec.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="spec-projects">
                <strong>Best examples</strong>
                <p>{spec.projects.join(", ")}</p>
              </div>

              <a
                href="#resumes"
                className="spec-link"
                onClick={(event) => {
                  event.preventDefault();
                  window.sessionStorage?.setItem("resumeTab", spec.resumeId);
                  window.dispatchEvent(new CustomEvent("select-resume", { detail: spec.resumeId }));
                  if (window.location.hash === "#resumes") {
                    scrollToSection("resumes", true);
                  } else {
                    window.location.hash = "#resumes";
                  }
                }}
              >
                See {spec.label} resume
                <span>↗</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SKILLS ---------- */

function Skills() {
  const groups = [
    {
      number: "01",
      title: "LANGUAGES & FRONTEND",
      description: "Core languages and interfaces for full-stack applications.",
      items: ["Python", "Java", "SQL", "JavaScript (ES6+)", "Dart", "React.js", "HTML5", "CSS3", "Tailwind CSS", "Streamlit", "Flutter"],
    },
    {
      number: "02",
      title: "PYTHON BACKEND",
      description: "Structured Python backends with secure API design.",
      items: ["FastAPI", "Flask", "Django REST Framework", "REST APIs", "JWT Authentication", "Async Programming"],
    },
    {
      number: "03",
      title: "JAVA BACKEND",
      description: "Enterprise-style Java services and security.",
      items: ["Core & Advanced Java", "Spring Boot", "Spring Security", "Spring Data JPA", "JDBC", "Maven", "JUnit", "OOP & DSA"],
    },
    {
      number: "04",
      title: "DATABASES",
      description: "Relational and cloud database design and management.",
      items: ["PostgreSQL", "MySQL", "Firebase (Firestore & Auth)", "Schema Design", "Joins, Subqueries & Indexing"],
    },
    {
      number: "05",
      title: "AI, ML & GENERATIVE AI",
      description: "Deep learning, computer vision and LLM integrations.",
      items: ["TensorFlow", "Keras", "CNN", "Transfer Learning (VGG16)", "OpenCV", "Scikit-learn", "LangChain", "RAG", "Gemini API", "Groq API", "OpenRouter API", "Prompt Engineering"],
    },
    {
      number: "06",
      title: "DATA & BI",
      description: "Data cleaning and business intelligence tooling.",
      items: ["Pandas", "NumPy", "Matplotlib", "Power BI", "Tableau", "Data Cleaning", "EDA"],
    },
    {
      number: "07",
      title: "DEVOPS, CLOUD & TESTING",
      description: "Deployment, containerisation, testing and workflows.",
      items: ["Docker", "Git", "GitHub Actions (CI/CD)", "Render", "Vercel", "Postman", "Pytest", "Unit Testing", "AWS (EC2, S3 – basic)"],
    },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="section-container">
        <Reveal>
          <div className="section-kicker blue-kicker">
            <span>03</span>
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

/* ---------- EXPERIENCE ---------- */

function Experience() {
  const experiences = [
    {
      type: "AI & FULL-STACK INTERNSHIP",
      role: "AI Engineering Intern",
      company: "MR. TechLab LLP (AppMind AI) · Bengaluru",
      date: "JAN 2026 — MAY 2026",
      summary:
        "Built and deployed three production full-stack web apps and a companion Flutter Android APK using Flask, Firebase and Docker.",
      points: [
        "Built and deployed 3 full-stack web apps using Flask, Firebase and Google Authentication; containerised with Docker and hosted on Vercel (frontend) and Render (backend).",
        "Architected multi-LLM pipelines across the Groq, Gemini and OpenRouter APIs for automated reasoning, study assistance and data analytics.",
        "Developed AI Exam Companion, Life Decision Assistant and Digital Analytics Dashboard, with GitHub Actions CI/CD to Render and Vercel.",
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
        "Built, trained and evaluated CNNs and fine-tuned VGG16 image classification models using TensorFlow and Keras.",
        "Developed computer vision pipelines with OpenCV across applied AI projects.",
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
        "Completed training in Python, SQL, machine learning algorithms, cloud computing, OpenCV, Keras and TensorFlow.",
        "Applied regression, linear algebra and data preprocessing to analyse structured datasets.",
      ],
    },
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="section-container">
        <Reveal>
          <div className="section-kicker">
            <span>04</span>
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

/* ---------- PROJECTS ---------- */

const PROJECTS = [
  {
    id: "aiexamcompanion",
    number: "01",
    category: "AI / ML APPLICATION",
    title: "AI Exam Companion",
    image: AIEXAM_IMAGE,
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Firebase", "Google Authentication", "Groq API", "OpenRouter API", "Docker"],
    backendNote:
      "AI exam preparation chatbot with 10-stage mock tests and a real-time performance dashboard, built on a Flask backend with Firebase and Google authentication.",
    liveLinks: [{ label: "Live Demo", url: "https://ai-exam-companion-ghzc.onrender.com" }],
  },
  {
    id: "resumeiq",
    number: "02",
    category: "PYTHON FULL-STACK APPLICATION",
    title: "ResumeIQ",
    image: RESUMEIQ_IMAGE,
    tech: ["Python", "Django", "Django REST Framework", "React.js", "MySQL", "JWT Authentication", "Gemini API", "Postman", "Docker"],
    backendNote:
      "AI resume analyzer that parses PDF resumes and scores them against job descriptions, built on a JWT-secured Django REST Framework backend with a React.js frontend.",
    liveLinks: [{ label: "Live Demo", url: "https://resumeiq-wxje.onrender.com/app" }],
  },
  {
    id: "lifedecisionassistant",
    number: "03",
    category: "AI / ML APPLICATION",
    title: "Life Decision Assistant",
    image: LIFEDECISION_IMAGE,
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Firebase", "Google Authentication", "Gemini API", "Groq API", "OpenRouter API", "Flutter", "Docker"],
    backendNote:
      "Multi-LLM decision-support platform with a companion Flutter Android app, routing across the Groq, Gemini and OpenRouter APIs for comparisons, goal planning and risk scoring.",
    liveLinks: [{ label: "Live Demo", url: "https://life-decision-assistant-63pu.onrender.com" }],
  },
  {
    id: "digitalanalyticsdashboard",
    number: "04",
    category: "PYTHON FULL-STACK APPLICATION",
    title: "Digital Analytics Dashboard",
    image: DIGITALANALYTICS_IMAGE,
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Firebase", "Google Authentication", "Gemini API", "Postman", "Docker", "Pytest", "JWT Authentication"],
    backendNote:
      "Users upload CSV files that an automated pipeline cleans and turns into interactive charts, with an AI chatbot that answers questions about the uploaded data.",
    liveLinks: [{ label: "Live Demo", url: "https://digital-dashboard1.onrender.com" }],
  },
  {
    id: "banksphere",
    number: "05",
    category: "JAVA FULL-STACK APPLICATION",
    title: "BankSphere",
    image: BANKSPHERE_IMAGE,
    tech: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "React.js", "PostgreSQL", "REST APIs", "JWT Authentication", "RBAC", "Maven", "Docker", "Postman", "JUnit"],
    backendNote:
      "Online banking system built in Java/Spring Boot with JWT authentication, role-based access (user and admin), account and transaction management, and a React.js frontend served from the same Dockerized service.",
    liveLinks: [{ label: "Live Demo", url: "https://online-banking-system-17od.onrender.com" }],
  },
  {
    id: "shopsphere",
    number: "06",
    category: "JAVA FULL-STACK APPLICATION",
    title: "ShopSphere",
    image: SHOPSPHERE_IMAGE,
    tech: ["Java", "Spring Boot", "Spring Data JPA", "React.js", "MySQL", "REST APIs", "RBAC", "JWT Authentication", "Maven", "Docker", "Postman", "JUnit"],
    backendNote:
      "Full-featured e-commerce platform built in Java/Spring Boot with product catalogs, cart and order workflows, role-based access control and a React.js storefront.",
    liveLinks: [{ label: "Live Demo", url: "https://shopsphere-c109.onrender.com" }],
  },
  {
    id: "gymsync",
    number: "07",
    category: "PYTHON FULL-STACK APPLICATION",
    title: "GymSync",
    image: GYMSYNC_IMAGE,
    tech: ["Python", "FastAPI", "JavaScript", "React + Vite", "PostgreSQL", "Docker", "JWT Authentication", "GitHub Actions", "Postman", "Pytest"],
    backendNote:
      "Containerised gym tracking application with an asynchronous FastAPI backend, PostgreSQL and a React.js frontend, deployed to Vercel and Render through a GitHub Actions CI/CD pipeline.",
    liveLinks: [{ label: "Live Demo", url: "https://gymsync-app.onrender.com" }],
  },
  {
    id: "plantdiseasedetection",
    number: "08",
    category: "AI / ML APPLICATION",
    title: "Plant Disease Detection",
    image: PLANTDISEASE_IMAGE,
    tech: ["Python", "TensorFlow", "Keras", "CNN", "Streamlit", "Machine Learning", "Kaggle Dataset"],
    backendNote:
      "CNN-based plant leaf disease classifier trained on a 1.5 GB Kaggle dataset, reaching 90% validation accuracy, with a Streamlit interface for live predictions and PDF reports.",
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
            <span>05</span>
            PROJECTS
          </div>

          <h2 className="massive-title light-title">
            Things I've
            <br />
            <span>built and shipped.</span>
          </h2>

          <p className="projects-intro">
            Eight deployed applications across three tracks — Python
            full-stack apps, Java/Spring Boot systems, and AI/ML
            projects with CNNs and multi-LLM integrations — covering
            REST APIs, relational databases, authentication and
            Dockerized deployments, end to end.
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

/* ---------- EDUCATION ---------- */

function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="section-container">
        <Reveal>
          <div className="section-kicker">
            <span>06</span>
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
              Engineering (2023 – 2026). Preceded by a Diploma at
              PVP Polytechnic, Bengaluru (2020 – 2023), completed
              with First Class with Distinction.
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

/* ---------- CERTIFICATIONS ---------- */

const CERTIFICATIONS = [
  {
    title: "Green Skills & Artificial Intelligence",
    issuer: "Skills4Future Program — Edunet Foundation, AICTE & Shell India (2026)",
    description:
      "Program covering Green Skills and Artificial Intelligence, with hands-on training in Python, Power BI, Tableau and Data Cleaning.",
  },
  {
    title: "Python Programming & Cloud Computing Fundamentals",
    issuer: "Infosys Springboard (2025)",
    description:
      "Core Python scripting, object-oriented principles and cloud deployment models.",
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
    subtitle: "Skills4Future — Edunet Foundation, AICTE & Shell India Markets Pvt. Ltd.",
    image: "/certificates/skills4future-genai.jpg",
  },
];

function Certifications() {
  return (
    <section id="certifications" className="section certification-section">
      <div className="section-container">
        <Reveal>
          <div className="section-kicker">
            <span>07</span>
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

/* ---------- CERTIFICATE BOOK ---------- */

function CertificateBook({ certificates }) {
  const [index, setIndex] = useState(0);
  const [flipDirection, setFlipDirection] = useState(null);

  const flipTimeoutRef = useRef(null);

  useEffect(() => {
    certificates.forEach((cert) => {
      const preloadImage = new Image();
      preloadImage.src = cert.image;
    });

    return () => {
      if (flipTimeoutRef.current) clearTimeout(flipTimeoutRef.current);
    };
  }, [certificates]);

  const FLIP_DURATION_MS = 620;

  const goToIndex = (nextIndex, direction) => {
    if (flipDirection || nextIndex < 0 || nextIndex >= certificates.length) {
      return;
    }

    setFlipDirection(direction);

    flipTimeoutRef.current = setTimeout(() => {
      setIndex(nextIndex);
      setFlipDirection(null);
      flipTimeoutRef.current = null;
    }, FLIP_DURATION_MS);
  };

  const handlePrev = () => goToIndex(index - 1, "prev");
  const handleNext = () => goToIndex(index + 1, "next");

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
        disabled={index === certificates.length - 1 || Boolean(flipDirection)}
        aria-label="Next certificate"
      >
        ›
      </button>

      <div className="book-footer">
        <div className="book-dots" role="tablist" aria-label="Certificate pages">
          {certificates.map((cert, dotIndex) => (
            <button
              key={cert.title}
              type="button"
              className={dotIndex === index ? "active" : ""}
              onClick={() => {
                if (flipDirection || dotIndex === index) return;
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
            event.currentTarget.parentElement?.classList.add("book-page-missing");
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

/* ---------- RESUMES ---------- */
/* Put the PDFs in  public/resumes/  with exactly these file names. */

const RESUMES = [
  {
    id: "aiml",
    tab: "AI & ML",
    role: "AI & Machine Learning Specialist",
    headline: "Generative AI, multi-LLM orchestration and deep learning",
    file: "/resumes/Rahul_S_AI_ML.pdf",
    summary:
      "Deep learning computer vision models, RAG workflows and multi-LLM web and mobile applications, built with Python, TensorFlow, Keras, LangChain and the Gemini, Groq and OpenRouter APIs.",
    focus: ["TensorFlow", "Keras", "CNN & VGG16", "OpenCV", "LangChain", "RAG", "Multi-LLM routing", "Flutter"],
    projects: ["Plant Disease Detection System", "Life Decision Assistant", "AI Exam Companion", "Digital Marketing Analytics Dashboard"],
    target: "AI/ML Engineer, Generative AI Specialist",
  },
  {
    id: "python",
    tab: "Python",
    role: "Python Full Stack Developer",
    headline: "FastAPI, Django REST, Flask and React.js",
    file: "/resumes/Rahul_S_Resume.pdf",
    summary:
      "End-to-end web applications from relational database design to cloud deployment, with JWT authentication, Docker, GitHub Actions CI/CD and LLM API integration.",
    focus: ["FastAPI", "Django REST Framework", "Flask", "React.js", "PostgreSQL", "MySQL", "Docker", "CI/CD"],
    projects: ["GymSync", "ResumeIQ", "Digital Marketing Analytics Dashboard", "Plant Disease Detection"],
    target: "Python Developer, Backend Developer, Full Stack Developer",
  },
  {
    id: "java",
    tab: "Java",
    role: "Java Full Stack Developer",
    headline: "Spring Boot, React.js, PostgreSQL and MySQL",
    file: "/resumes/Rahul_S_Java.pdf",
    summary:
      "Secure RESTful APIs and full-stack systems in Core and Advanced Java, with Spring Security, Spring Data JPA, role-based access control and automated CI/CD.",
    focus: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "React.js", "PostgreSQL", "Maven", "DSA & OOP"],
    projects: ["BankSphere — Online Banking System", "ShopSphere — E-Commerce Platform"],
    target: "Java Full Stack Developer, Software Engineer",
  },
  {
    id: "react",
    tab: "React",
    role: "Full-Stack Web Developer & React Specialist",
    headline: "Frontend architecture and REST APIs",
    file: "/resumes/Rahul_S_React.pdf",
    summary:
      "Responsive single-page applications and modular UI components backed by scalable REST APIs, with JWT authentication and deployments on Vercel and Render.",
    focus: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "State Management", "REST integration", "FastAPI", "Vercel"],
    projects: ["Developer Portfolio Website", "ResumeIQ", "Life Decision Assistant", "Plant Disease Detection Web Platform"],
    target: "React Developer, Frontend Developer",
  },
  {
    id: "data",
    tab: "Data Analyst",
    role: "Data Analyst",
    headline: "SQL, Python, Power BI and Tableau",
    file: "/resumes/Rahul_S_Data_Analyst.pdf",
    summary:
      "SQL querying, Python data processing, statistical analysis and interactive dashboards that turn raw datasets into business insights.",
    focus: ["SQL", "Pandas", "Power BI", "Tableau", "Advanced Excel", "EDA", "Data Cleaning", "Scikit-learn"],
    projects: ["Life Decision Assistant", "AI Exam Companion", "Plant Disease Detection & Diagnostic Analytics"],
    target: "Data Analyst, Business Intelligence Analyst",
  },
];

function Resumes() {
  const [activeId, setActiveId] = useState(() => {
    try {
      return window.sessionStorage.getItem("resumeTab") || "aiml";
    } catch {
      return "aiml";
    }
  });
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    const handler = (event) => {
      setActiveId(event.detail);
      setShowPreview(false);
    };
    window.addEventListener("select-resume", handler);
    return () => window.removeEventListener("select-resume", handler);
  }, []);

  const active = RESUMES.find((resume) => resume.id === activeId) ?? RESUMES[0];

  return (
    <section id="resumes" className="section resumes-section">
      <div className="section-container">
        <Reveal>
          <div className="section-kicker blue-kicker">
            <span>08</span>
            RESUMES
          </div>

          <h2 className="massive-title light-title">
            The right resume
            <br />
            <span>for the right role.</span>
          </h2>

          <p className="resumes-intro">
            Choose a role to see what that resume focuses on, then
            preview it or download the PDF.
          </p>
        </Reveal>

        <Reveal className="resume-panel">
          <div className="resume-tabs" role="tablist" aria-label="Resume roles">
            {RESUMES.map((resume) => (
              <button
                key={resume.id}
                type="button"
                role="tab"
                aria-selected={resume.id === active.id}
                className={`resume-tab ${resume.id === active.id ? "active" : ""}`}
                onClick={() => {
                  setActiveId(resume.id);
                  setShowPreview(false);
                }}
              >
                {resume.tab}
              </button>
            ))}
          </div>

          <div className="resume-body" role="tabpanel">
            <div className="resume-details">
              <h3>{active.role}</h3>
              <p className="resume-headline">{active.headline}</p>
              <p className="resume-summary">{active.summary}</p>

              <div className="resume-block">
                <strong>Key skills</strong>
                <div className="resume-chips">
                  {active.focus.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>

              <div className="resume-block">
                <strong>Featured projects</strong>
                <ul>
                  {active.projects.map((project) => (
                    <li key={project}>{project}</li>
                  ))}
                </ul>
              </div>

              <div className="resume-block">
                <strong>Best for</strong>
                <p>{active.target}</p>
              </div>

              <div className="resume-actions">
                <a
                  href={active.file}
                  download
                  className="resume-download"
                >
                  Download PDF
                  <span>↓</span>
                </a>

                <button
                  type="button"
                  className="resume-preview-toggle"
                  onClick={() => setShowPreview((previous) => !previous)}
                  aria-expanded={showPreview}
                >
                  {showPreview ? "Hide preview" : "Preview resume"}
                </button>

                <a
                  href={active.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-open"
                >
                  Open in new tab
                  <span>↗</span>
                </a>
              </div>
            </div>

            {showPreview && (
              <div className="resume-preview">
                <iframe
                  key={active.file}
                  src={`${active.file}#view=FitH`}
                  title={`${active.role} resume preview`}
                />
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */

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
            <span>09</span>
            CONTACT
          </div>

          <h2>
            Let's build
            <br />
            <span>something together.</span>
          </h2>

          <p>
            Open to Python Developer, Java Developer and AI/ML
            roles. Whether it's a quick question or a project idea,
            my inbox is open.
          </p>

          <a href="mailto:srinivasrahul838@gmail.com" className="contact-email">
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

/* ---------- FOOTER ---------- */

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
