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

/* ---------- ROLE FILTERS ---------- */
/* Hash links: #python, #ai-ml, #java (and #all) open the Projects
   section with that tab already selected. */

const ROLE_TABS = [
  { id: "all", label: "All" },
  { id: "python", label: "Python" },
  { id: "ai-ml", label: "AI & ML" },
  { id: "java", label: "Java" },
];

const ROLE_IDS = ROLE_TABS.map((tab) => tab.id);

function isRoleHash(route) {
  return ROLE_IDS.includes(route);
}

/* ---------- HASH ROUTING ---------- */

function getHashRoute() {
  return window.location.hash.replace(/^#\/?/, "").toLowerCase();
}

function scrollToSection(route, smooth = true) {
  if (!route) {
    window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "auto" });
    return;
  }
  // Role hashes (#python, #java, #ai-ml, #all) land on the Projects section
  const targetId = isRoleHash(route) ? "projects" : route;
  const section = document.getElementById(targetId);
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
          <span>PYTHON · AI &amp; ML ENGINEER</span>
        </Reveal>

        <div className="hero-main">
          <Reveal className="hero-copy">
            <p className="hero-eyebrow">FASTAPI · DJANGO · FLASK · TENSORFLOW · LLM APIS</p>

            <h1>
              Rahul
              <br />
              <span>S.</span>
            </h1>

            <p className="hero-title">
              Python &amp; AI/ML Engineer | Scalable Backends &amp; Intelligent Systems
            </p>

            <p className="hero-description">
              I build scalable, secure backends with
              <strong>{" "}FastAPI, Django REST and Flask</strong>{" "}
              and ship the intelligent layer on top:
              <strong>{" "}CNN models and multi-LLM applications</strong>{" "}
              built with TensorFlow, Gemini, Groq and OpenRouter. I also
              bring side experience in
              <strong>{" "}Java (Spring Boot)</strong>.
              Every project goes live with JWT authentication, Docker and
              GitHub Actions CI/CD.
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
              <span>Open to Python &amp; AI/ML roles</span>
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
            Python first.
            <br />
            <span>Builder always.</span>
          </h2>
        </Reveal>

        <div className="about-layout">
          <Reveal className="about-main">
            <p className="about-lead">
              I'm a Python and AI/ML developer who ships complete
              products — from database design to live deployment — with
              Java full-stack experience on the side.
            </p>

            <p>
              My core work is in Python: REST APIs with FastAPI, Flask
              and Django REST Framework, React.js frontends, PostgreSQL
              and MySQL, JWT authentication and Docker. I automate
              deployments with GitHub Actions CI/CD and host apps on
              Render and Vercel. On the side, I have also built
              Java Spring Boot systems with Spring Security and Spring
              Data JPA in BankSphere and ShopSphere.
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
              <span>CORE TRACKS: PYTHON, AI/ML</span>
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

/* ---------- SKILLS ---------- */

const SKILL_GROUPS = [
  {
    number: "01",
    title: "PYTHON ECOSYSTEM",
    description: "Async and relational Python backends with secure API design.",
    items: [
      "Python",
      "FastAPI",
      "Django REST Framework",
      "Flask",
      "REST APIs",
      "JWT Authentication",
      "Async Programming",
      "React.js",
      "JavaScript (ES6+)",
      "PostgreSQL",
      "MySQL",
      "Firebase (Firestore & Auth)",
      "Docker",
      "GitHub Actions (CI/CD)",
      "Pytest",
      "Postman",
      "Render",
      "Vercel",
    ],
  },
  {
    number: "02",
    title: "AI & MACHINE LEARNING",
    description: "Deep learning, computer vision, LLM integrations and data tooling.",
    items: [
      "TensorFlow",
      "Keras",
      "CNN",
      "Transfer Learning (VGG16)",
      "OpenCV",
      "Scikit-learn",
      "LangChain",
      "RAG",
      "Gemini API",
      "Groq API",
      "OpenRouter API",
      "Prompt Engineering",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Power BI",
      "Tableau",
      "EDA & Data Cleaning",
      "Streamlit",
      "Flutter",
    ],
  },
  {
    number: "03",
    title: "JAVA (ADDITIONAL EXPERIENCE)",
    description: "Spring Boot services, security and testing from full-stack projects.",
    items: [
      "Core & Advanced Java",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "JDBC",
      "REST APIs",
      "JWT Authentication",
      "RBAC",
      "Maven",
      "JUnit",
      "OOP & DSA",
      "React.js",
      "PostgreSQL",
      "MySQL",
      "Schema Design & Indexing",
      "Docker",
      "Git",
      "Postman",
    ],
  },
];

function Skills() {
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
          {SKILL_GROUPS.map((group) => (
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
      type: "PYTHON, AI & FULL-STACK INTERNSHIP",
      role: "AI Engineering Intern",
      company: "MR. TechLab LLP (AppMind AI) · Bengaluru",
      date: "JAN 2026 — MAY 2026",
      summary:
        "Built and deployed three production full-stack web apps and a companion Flutter Android APK using Python, Flask, Firebase and Docker.",
      points: [
        "Built and deployed 3 full-stack web apps using Python, Flask, Firebase and Google Authentication; containerised with Docker and hosted on Vercel (frontend) and Render (backend).",
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
        "Second internship phase: training and a software development project in Python-based Artificial Intelligence, Machine Learning, Deep Learning and Data Science.",
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
        "First internship phase: structured training in Artificial Intelligence, Data Science, Python programming and machine learning.",
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

/* ---------- PROJECTS ---------- */
/* `category` is the filter key: "python" | "ai-ml" | "java".
   Projects are listed Python first, then AI/ML, then Java.
   `label` is the text shown on the card image.
   Numbers (01 / 08) are generated from the filtered list. */

const PROJECTS = [
  {
    id: "gymsync",
    category: "python",
    label: "PYTHON FULL-STACK APPLICATION",
    title: "GymSync",
    image: GYMSYNC_IMAGE,
    tech: ["Python", "FastAPI", "JavaScript", "React + Vite", "PostgreSQL", "Docker", "JWT Authentication", "GitHub Actions", "Postman", "Pytest"],
    backendNote:
      "Containerised gym tracking application with an asynchronous FastAPI backend, PostgreSQL and a React.js frontend, deployed to Vercel and Render through a GitHub Actions CI/CD pipeline.",
    liveLinks: [{ label: "Live Demo", url: "https://gymsync-app.onrender.com" }],
  },
  {
    id: "resumeiq",
    category: "python",
    label: "PYTHON FULL-STACK APPLICATION",
    title: "ResumeIQ",
    image: RESUMEIQ_IMAGE,
    tech: ["Python", "Django", "Django REST Framework", "React.js", "MySQL", "JWT Authentication", "Gemini API", "Postman", "Docker"],
    backendNote:
      "AI resume analyzer that parses PDF resumes and scores them against job descriptions, built on a JWT-secured Django REST Framework backend with a React.js frontend.",
    liveLinks: [{ label: "Live Demo", url: "https://resumeiq-wxje.onrender.com/app" }],
  },
  {
    id: "digitalanalyticsdashboard",
    category: "python",
    label: "PYTHON FULL-STACK APPLICATION",
    title: "Digital Analytics Dashboard",
    image: DIGITALANALYTICS_IMAGE,
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Firebase", "Google Authentication", "Gemini API", "Postman", "Docker", "Pytest", "JWT Authentication"],
    backendNote:
      "Users upload CSV files that an automated pipeline cleans and turns into interactive charts, with an AI chatbot that answers questions about the uploaded data.",
    liveLinks: [{ label: "Live Demo", url: "https://digital-dashboard1.onrender.com" }],
  },
  {
    id: "aiexamcompanion",
    category: "ai-ml",
    label: "AI / ML APPLICATION",
    title: "AI Exam Companion",
    image: AIEXAM_IMAGE,
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Firebase", "Google Authentication", "Groq API", "OpenRouter API", "Docker"],
    backendNote:
      "AI exam preparation chatbot with 10-stage mock tests and a real-time performance dashboard, built on a Flask backend with Firebase and Google authentication.",
    liveLinks: [{ label: "Live Demo", url: "https://ai-exam-companion-ghzc.onrender.com" }],
  },
  {
    id: "lifedecisionassistant",
    category: "ai-ml",
    label: "AI / ML APPLICATION",
    title: "Life Decision Assistant",
    image: LIFEDECISION_IMAGE,
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Firebase", "Google Authentication", "Gemini API", "Groq API", "OpenRouter API", "Flutter", "Docker"],
    backendNote:
      "Multi-LLM decision-support platform with a companion Flutter Android app, routing across the Groq, Gemini and OpenRouter APIs for comparisons, goal planning and risk scoring.",
    liveLinks: [{ label: "Live Demo", url: "https://life-decision-assistant-63pu.onrender.com" }],
  },
  {
    id: "plantdiseasedetection",
    category: "ai-ml",
    label: "AI / ML APPLICATION",
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
  {
    id: "banksphere",
    category: "java",
    label: "JAVA FULL-STACK APPLICATION",
    title: "BankSphere",
    image: BANKSPHERE_IMAGE,
    tech: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "React.js", "PostgreSQL", "REST APIs", "JWT Authentication", "RBAC", "Maven", "Docker", "Postman", "JUnit"],
    backendNote:
      "Online banking system built in Java/Spring Boot with JWT authentication, role-based access (user and admin), account and transaction management, and a React.js frontend served from the same Dockerized service.",
    liveLinks: [{ label: "Live Demo", url: "https://online-banking-system-17od.onrender.com" }],
  },
  {
    id: "shopsphere",
    category: "java",
    label: "JAVA FULL-STACK APPLICATION",
    title: "ShopSphere",
    image: SHOPSPHERE_IMAGE,
    tech: ["Java", "Spring Boot", "Spring Data JPA", "React.js", "MySQL", "REST APIs", "RBAC", "JWT Authentication", "Maven", "Docker", "Postman", "JUnit"],
    backendNote:
      "Full-featured e-commerce platform built in Java/Spring Boot with product catalogs, cart and order workflows, role-based access control and a React.js storefront.",
    liveLinks: [{ label: "Live Demo", url: "https://shopsphere-c109.onrender.com" }],
  },
];

function filterProjects(projects, role) {
  if (role === "all") return projects;
  return projects.filter((project) => project.category === role);
}

function openProject(projectId) {
  window.location.hash = `#${projectId}`;
}

function getInitialRole() {
  const fromHash = getHashRoute();
  if (isRoleHash(fromHash)) return fromHash;

  try {
    const stored = window.sessionStorage.getItem("activeRole");
    if (stored && isRoleHash(stored)) return stored;
  } catch {
    /* sessionStorage unavailable */
  }
  return "all";
}

function Projects() {
  const [activeRole, setActiveRole] = useState(getInitialRole);

  // Keep the selected tab in sync with the URL hash (#python, #ai-ml, #java, #all)
  useEffect(() => {
    const syncFromHash = () => {
      const route = getHashRoute();
      if (isRoleHash(route)) setActiveRole(route);
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const selectRole = (roleId) => {
    setActiveRole(roleId);

    try {
      window.sessionStorage.setItem("activeRole", roleId);
    } catch {
      /* ignore */
    }

    // Update the URL so the filtered view can be shared, without
    // triggering a hashchange scroll jump.
    const nextHash = roleId === "all" ? "#projects" : `#${roleId}`;
    window.history.replaceState(null, "", nextHash);
  };

  const visibleProjects = filterProjects(PROJECTS, activeRole);
  const countLabel = String(visibleProjects.length).padStart(2, "0");

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
            Eight deployed applications led by Python full-stack work
            and AI/ML projects with CNNs and multi-LLM integrations,
            plus two Java/Spring Boot systems — covering REST APIs,
            relational databases, authentication and Dockerized
            deployments, end to end.
          </p>
        </Reveal>

        <div
          className="resume-tabs"
          role="tablist"
          aria-label="Filter projects by role"
          style={{ padding: 0, marginTop: "40px", borderBottom: "none" }}
        >
          {ROLE_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={tab.id === activeRole}
              className={`resume-tab ${tab.id === activeRole ? "active" : ""}`}
              onClick={() => selectRole(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="projects-showcase" style={{ marginTop: "40px" }}>
          {visibleProjects.map((project, projectIndex) => {
            const number = String(projectIndex + 1).padStart(2, "0");
            const hasPage = Boolean(ROUTES[project.id]);

            const visualContent = (
              <>
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="project-visual-placeholder">
                    <span>{project.title}</span>
                    <p>Live demo available</p>
                  </div>
                )}

                <div className="project-image-shade" />

                <div className="project-image-top">
                  <span>{project.label}</span>
                  <span>
                    {number} / {countLabel}
                  </span>
                </div>

                {hasPage && (
                  <div className="project-view">
                    <strong>↗</strong>
                    View Project
                  </div>
                )}
              </>
            );

            return (
              <Reveal key={project.id} className="project-showcase-card">
                {hasPage ? (
                  <button
                    type="button"
                    className="project-visual"
                    onClick={() => openProject(project.id)}
                    aria-label={`View ${project.title}`}
                  >
                    {visualContent}
                  </button>
                ) : (
                  <div className="project-visual" style={{ cursor: "default" }}>
                    {visualContent}
                  </div>
                )}

                <div className="project-information">
                  <div className="project-title-line">
                    <h3>{project.title}</h3>
                    <span>{number}</span>
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

                  {hasPage && (
                    <button
                      type="button"
                      className="project-open-button"
                      onClick={() => openProject(project.id)}
                    >
                      Open Project
                      <span>↗</span>
                    </button>
                  )}
                </div>
              </Reveal>
            );
          })}
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
    title: "Python Full Stack Software Development",
    issuer: "Qspiders Training Institute",
    description:
      "Structured training in full-stack Python development — from backend APIs to frontend integration.",
  },
  {
    title: "Python Programming & Cloud Computing Fundamentals",
    issuer: "Infosys Springboard (2025)",
    description:
      "Core Python scripting, object-oriented principles and cloud deployment models.",
  },
  {
    title: "Green Skills & Artificial Intelligence",
    issuer: "Skills4Future Program — Edunet Foundation, AICTE & Shell India (2026)",
    description:
      "Program covering Green Skills and Artificial Intelligence, with hands-on training in Python, Power BI, Tableau and Data Cleaning.",
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
  // Certificates whose image file is missing are skipped, so visitors
  // never see an empty "image not added" page.
  const [failed, setFailed] = useState([]);

  useEffect(() => {
    let cancelled = false;
    INTERNSHIP_CERTIFICATES.forEach((cert) => {
      const probe = new Image();
      probe.onerror = () => {
        if (!cancelled) setFailed((previous) => [...previous, cert.image]);
      };
      probe.src = cert.image;
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const availableCertificates = INTERNSHIP_CERTIFICATES.filter(
    (cert) => !failed.includes(cert.image)
  );

  return (
    <section id="certifications" className="section certification-section">
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

        {availableCertificates.length > 0 && (
          <>
            <Reveal className="certificate-book-heading">
              <h3>Flip through my certificates</h3>

              <p>
                My internship certificates and Skills4Future training
                certificate — click the arrows to turn the page.
              </p>
            </Reveal>

            <Reveal>
              <CertificateBook certificates={availableCertificates} />
            </Reveal>
          </>
        )}
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

  // Keep the page index valid if a certificate is removed from the list
  const safeIndex = Math.min(index, certificates.length - 1);

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

  const handlePrev = () => goToIndex(safeIndex - 1, "prev");
  const handleNext = () => goToIndex(safeIndex + 1, "next");

  const current = certificates[safeIndex];

  const incoming =
    flipDirection === "next"
      ? certificates[safeIndex + 1]
      : flipDirection === "prev"
      ? certificates[safeIndex - 1]
      : null;

  return (
    <div className="certificate-book">
      <button
        type="button"
        className="book-arrow book-arrow-left"
        onClick={handlePrev}
        disabled={safeIndex === 0 || Boolean(flipDirection)}
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
        disabled={safeIndex === certificates.length - 1 || Boolean(flipDirection)}
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
              className={dotIndex === safeIndex ? "active" : ""}
              onClick={() => {
                if (flipDirection || dotIndex === safeIndex) return;
                goToIndex(dotIndex, dotIndex > safeIndex ? "next" : "prev");
              }}
              aria-label={`Go to certificate ${dotIndex + 1}`}
              aria-selected={dotIndex === safeIndex}
              role="tab"
            />
          ))}
        </div>

        <p className="book-page-count">
          Page {safeIndex + 1} of {certificates.length}
        </p>
      </div>
    </div>
  );
}

function CertificatePage({ cert }) {
  return (
    <div className="book-page-inner">
      <div className="book-page-image-wrap">
        <img src={cert.image} alt={cert.title} />
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
    id: "python",
    tab: "Python",
    role: "Python Developer",
    headline: "FastAPI, Django REST, Flask and React.js",
    file: "/resumes/Rahul_S_Resume.pdf",
    summary:
      "End-to-end web applications from relational database design to cloud deployment, with JWT authentication, Docker, GitHub Actions CI/CD and LLM API integration.",
    focus: ["FastAPI", "Django REST Framework", "Flask", "React.js", "PostgreSQL", "MySQL", "Docker", "CI/CD"],
    projects: ["GymSync", "ResumeIQ", "Digital Analytics Dashboard"],
    target: "Python Developer, Backend Developer, Full Stack Developer",
  },
  {
    id: "aiml",
    tab: "AI & ML",
    role: "AI & Machine Learning Engineer",
    headline: "Generative AI, multi-LLM orchestration and deep learning",
    file: "/resumes/Rahul_S_AI_ML.pdf",
    summary:
      "Deep learning computer vision models, RAG workflows and multi-LLM web and mobile applications, built with Python, TensorFlow, Keras, LangChain and the Gemini, Groq and OpenRouter APIs.",
    focus: ["TensorFlow", "Keras", "CNN & VGG16", "OpenCV", "LangChain", "RAG", "Multi-LLM routing", "Flutter"],
    projects: ["Plant Disease Detection", "Life Decision Assistant", "AI Exam Companion"],
    target: "AI/ML Engineer, Generative AI Developer",
  },
  {
    id: "java",
    tab: "Java",
    role: "Java Full Stack Developer (Additional)",
    headline: "Spring Boot, React.js, PostgreSQL and MySQL",
    file: "/resumes/Rahul_S_Java.pdf",
    summary:
      "Secure RESTful APIs and full-stack systems in Core and Advanced Java, with Spring Security, Spring Data JPA, role-based access control and automated CI/CD.",
    focus: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "React.js", "PostgreSQL", "Maven", "DSA & OOP"],
    projects: ["BankSphere — Online Banking System", "ShopSphere — E-Commerce Platform"],
    target: "Java Full Stack Developer, Software Engineer",
  },
];

function Resumes() {
  const [activeId, setActiveId] = useState("python");
  const [showPreview, setShowPreview] = useState(false);

  const active = RESUMES.find((resume) => resume.id === activeId) ?? RESUMES[0];

  return (
    <section id="resumes" className="section resumes-section">
      <div className="section-container">
        <Reveal>
          <div className="section-kicker blue-kicker">
            <span>07</span>
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
            <span>08</span>
            CONTACT
          </div>

          <h2>
            Let's build
            <br />
            <span>something together.</span>
          </h2>

          <p>
            Open to Python Developer and AI/ML Engineer roles,
            with Java full-stack experience as an added strength. Whether it's a quick question or a project idea,
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
