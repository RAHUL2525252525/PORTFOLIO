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
   PROJECT PREVIEW IMAGES (unchanged)
   ========================================================= */

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

/* =========================================================
   PROJECT ROUTES (unchanged)
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
   HASH ROUTING (unchanged)
   ========================================================= */

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

/* =========================================================
   SCROLL REVEAL (opacity + translate only, so it stays cheap)
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
      { threshold: 0.1 }
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
      <Ticker />
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
  const [mobileMenu, setMobileMenu] = useState(false);

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

  const links = ["about", "skills", "experience", "projects", "education", "certifications", "contact"];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#" className="nav-logo" onClick={handleLogoClick} aria-label="Go to homepage">
          <span className="logo-box">R</span>
          <span className="logo-name">Rahul S.</span>
        </a>

        <div id="main-navigation" className={`nav-links ${mobileMenu ? "mobile-open" : ""}`}>
          {links.map((id) => (
            <a key={id} href={`#${id}`} onClick={(e) => handleNavClick(e, id)}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>

        <a href="#contact" className="nav-contact" onClick={(e) => handleNavClick(e, "contact")}>
          Let's Talk <span>↗</span>
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
   HERO — a real 3D particle globe drawn on one <canvas>
   Pauses when off-screen or when the tab is hidden.
   ========================================================= */

function Globe() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const N = 480;
    const pts = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = i * 2.399963;
      pts[i * 3] = Math.cos(theta) * r;
      pts[i * 3 + 1] = y;
      pts[i * 3 + 2] = Math.sin(theta) * r;
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let size = 0;
    let dpr = 1;
    let rotY = 0;
    let rotX = 0.35;
    let targetX = 0.35;
    let targetY = 0;
    let t = 0;
    let raf = 0;
    let visible = true;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      size = canvas.clientWidth;
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    };

    const onMove = (e) => {
      targetX = 0.35 + (e.clientY / window.innerHeight - 0.5) * 0.7;
      targetY = (e.clientX / window.innerWidth - 0.5) * 1.2;
    };

    const draw = () => {
      ctx.clearRect(0, 0, size, size);
      const c = size / 2;
      const R = size * 0.38;
      const sinY = Math.sin(rotY);
      const cosY = Math.cos(rotY);
      const sinX = Math.sin(rotX);
      const cosX = Math.cos(rotX);

      const front = [];
      const mid = [];
      const back = [];

      for (let i = 0; i < N; i++) {
        const x = pts[i * 3];
        const y = pts[i * 3 + 1];
        const z = pts[i * 3 + 2];
        const x1 = x * cosY + z * sinY;
        const z1 = -x * sinY + z * cosY;
        const y1 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;
        const p = 1 / (1 - z2 * 0.25);
        const sx = c + x1 * R * p;
        const sy = c + y1 * R * p;
        const s = (z2 + 1.5) * 1.7;
        const item = [sx, sy, s];
        if (z2 > 0.35) front.push(item);
        else if (z2 > -0.3) mid.push(item);
        else back.push(item);
      }

      ctx.fillStyle = "rgba(255,248,231,0.35)";
      for (const [x, y, s] of back) ctx.fillRect(x, y, s, s);
      ctx.fillStyle = "rgba(255,248,231,0.8)";
      for (const [x, y, s] of mid) ctx.fillRect(x, y, s, s);
      ctx.fillStyle = "#ffe14d";
      for (const [x, y, s] of front) ctx.fillRect(x, y, s * 1.2, s * 1.2);

      /* orbit ring + satellite */
      ctx.strokeStyle = "rgba(255,248,231,0.55)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(c, c, size * 0.47, size * 0.14, -0.35, 0, Math.PI * 2);
      ctx.stroke();

      const sat = t * 0.9;
      const ex = Math.cos(sat) * size * 0.47;
      const ey = Math.sin(sat) * size * 0.14;
      const sxp = c + ex * Math.cos(-0.35) - ey * Math.sin(-0.35);
      const syp = c + ex * Math.sin(-0.35) + ey * Math.cos(-0.35);
      ctx.fillStyle = "#ff8fd0";
      ctx.fillRect(sxp - 7, syp - 7, 14, 14);
    };

    const loop = () => {
      raf = 0;
      if (!visible || document.hidden) return;
      t += 0.016;
      rotY += 0.004 + targetY * 0.02;
      rotX += (targetX - rotX) * 0.05;
      draw();
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (!raf && !reduce) raf = requestAnimationFrame(loop);
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
    });
    io.observe(canvas);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onVisibility = () => !document.hidden && start();

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    resize();
    start();

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="globe-canvas" aria-hidden="true" />;
}

const STICKERS = ["Python", "FastAPI", "Django", "React", "Docker"];

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-main">
          <Reveal className="hero-copy">
            <p className="hero-eyebrow">Python developer · Bengaluru</p>

            <h1>
              Rahul
              <br />
              <span>S.</span>
            </h1>

            <p className="hero-title">Python Developer</p>

            <p className="hero-description">
              B.E. Computer Science graduate (2026) who builds and deploys full-stack applications with
              <strong> FastAPI, Flask, Django REST Framework and React.js</strong> — JWT authentication,
              Docker containerisation, GitHub Actions CI/CD and LLM APIs (Gemini, Groq, OpenRouter)
              integrated into working products. I also build deep learning models with CNNs, and have
              hands-on Java experience from projects like BankSphere and ShopSphere.
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
                View Projects <span>↗</span>
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
            <div className="globe-wrap">
              <Globe />

              <div className="profile-frame">
                <img src="/rahul-profile.jpg" alt="Rahul S" className="profile-image" />
              </div>

              {STICKERS.map((s, i) => (
                <span key={s} className={`sticker sticker-${i}`}>
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   TICKER (CSS transform animation, GPU only)
   ========================================================= */

const TICKER_ITEMS = [
  "Python", "FastAPI", "Flask", "Django REST", "React.js", "Spring Boot",
  "PostgreSQL", "MySQL", "Docker", "GitHub Actions", "Gemini API", "TensorFlow",
];

function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {[0, 1].map((copy) => (
          <div className="ticker-group" key={copy}>
            {TICKER_ITEMS.map((item) => (
              <span key={`${copy}-${item}`}>
                {item}
                <b>✦</b>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   ABOUT — stat cards flip in CSS 3D (hover / tap / focus)
   ========================================================= */

function About() {
  const stats = [
    ["8", "Live deployed applications", "Python, ML and Java projects running on Render, Vercel and Streamlit."],
    ["90%+", "CNN accuracy on major project", "Plant Disease Detection, trained on a 1.5 GB Kaggle leaf dataset."],
    ["6", "Python & ML applications", "AI Exam Companion, ResumeIQ, Life Decision Assistant, Analytics Dashboard, GymSync and Plant Disease Detection."],
    ["3", "Internship experiences", "AppMind AI, plus two phases at Knowx Innovations."],
  ];

  return (
    <section id="about" className="section about-section">
      <div className="section-container">
        <Reveal>
          <div className="section-kicker">
            <span>01</span>
            About me
          </div>

          <h2 className="massive-title">
            Engineer first.
            <br />
            <em>Builder always.</em>
          </h2>
        </Reveal>

        <div className="about-layout">
          <Reveal className="about-main">
            <p className="about-lead">
              I'm a Python developer with hands-on experience building and deploying full-stack applications.
            </p>

            <p>
              My work spans REST APIs with FastAPI, Flask and Django REST Framework, React.js frontends,
              PostgreSQL and MySQL databases, JWT authentication and Docker containerisation. I automate
              deployments with GitHub Actions CI/CD and host apps on Render and Vercel.
            </p>

            <p>
              During my AI internship at MR. TechLab LLP (AppMind AI) I built and deployed three full-stack
              web apps — AI Exam Companion, Life Decision Assistant and Digital Analytics Dashboard — using
              Flask, Firebase and Google Authentication, and integrated LLM APIs including Gemini, Groq and
              OpenRouter. I also completed two AI &amp; Data Science internship phases at Knowx Innovations,
              working with Python, SQL, machine learning, OpenCV, Keras and TensorFlow.
            </p>

            <p>
              For my B.E. major project, Plant Disease Detection, I trained a CNN on a 1.5 GB Kaggle
              crop-leaf image dataset to detect plant diseases, reaching over 90% accuracy, with a
              Streamlit interface for live predictions. I also have hands-on experience building Java
              applications, including a banking system and an e-commerce platform.
            </p>
          </Reveal>

          <Reveal className="about-stats">
            {stats.map(([value, label, more]) => (
              <div key={label} className="flip" tabIndex={0}>
                <div className="flip-inner">
                  <div className="flip-face flip-front">
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                  <div className="flip-face flip-back">
                    <p>{more}</p>
                  </div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SKILLS — bento grid
   ========================================================= */

function Skills() {
  const groups = [
    {
      number: "01",
      title: "Languages & Frontend",
      description: "Core languages and interfaces for full-stack applications.",
      items: ["Python", "SQL", "JavaScript", "Java", "React.js", "HTML5", "CSS3", "Streamlit"],
    },
    {
      number: "02",
      title: "Backend",
      description: "Structured backend systems with secure API design.",
      items: ["FastAPI", "Flask", "Django REST Framework", "Spring Boot", "REST APIs", "JWT Authentication", "Async Programming"],
    },
    {
      number: "03",
      title: "Databases",
      description: "Relational and cloud database design and management.",
      items: ["PostgreSQL", "MySQL", "Firebase"],
    },
    {
      number: "04",
      title: "API & Testing",
      description: "API testing and quality-focused development.",
      items: ["Postman", "Unit Testing"],
    },
    {
      number: "05",
      title: "Data & BI",
      description: "Data cleaning and business intelligence tooling.",
      items: ["Pandas", "Power BI", "Tableau", "Data Cleaning"],
    },
    {
      number: "06",
      title: "DevOps & Cloud",
      description: "Deployment, containerization and development workflows.",
      items: ["Docker", "Git", "GitHub Actions (CI/CD)", "Render", "Vercel", "AWS (EC2, S3 – basic)"],
    },
    {
      number: "07",
      title: "AI & ML",
      description: "LLM integrations and deep learning from internships and projects.",
      items: ["Gemini API", "Groq API", "OpenRouter API", "TensorFlow", "Keras", "CNN", "OpenCV"],
    },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="section-container">
        <Reveal>
          <div className="section-kicker">
            <span>02</span>
            Technical skills
          </div>

          <h2 className="massive-title">
            Tools I use to
            <br />
            <em>ship software.</em>
          </h2>
        </Reveal>

        <div className="skills-list">
          {groups.map((group) => (
            <Reveal key={group.title} className={`skill-row skill-${group.number}`}>
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
   EXPERIENCE — cards stack up as you scroll (sticky, CSS only)
   ========================================================= */

function Experience() {
  const experiences = [
    {
      type: "AI Internship",
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
      type: "AI & Data Science Internship",
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
      type: "AI & Data Science Internship",
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
            Experience
          </div>

          <h2 className="massive-title">
            Where I learned
            <br />
            <em>to build.</em>
          </h2>
        </Reveal>

        <div className="experience-list">
          {experiences.map((experience, i) => (
            <article
              key={`${experience.company}-${experience.date}`}
              className="experience-main-card"
              style={{ "--i": i }}
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROJECTS (data unchanged)
   ========================================================= */

const PROJECTS = [
  {
    id: "aiexamcompanion",
    number: "01",
    category: "AI-POWERED APPLICATION",
    title: "AI Exam Companion",
    image: AIEXAM_IMAGE,
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Firebase", "Google Authentication", "Groq API", "Docker"],
    backendNote:
      "Groq-powered exam preparation chatbot with a performance dashboard and mock tests, built on a Flask backend with Firebase and Google authentication.",
    liveLinks: [{ label: "Live Demo", url: "https://ai-exam-companion-ghzc.onrender.com" }],
  },
  {
    id: "resumeiq",
    number: "02",
    category: "AI-POWERED APPLICATION",
    title: "ResumeIQ",
    image: RESUMEIQ_IMAGE,
    tech: ["Python", "Django", "Django REST Framework", "React.js", "MySQL", "JWT Authentication", "Gemini API", "Postman", "Docker"],
    backendNote:
      "AI resume analyzer that parses resumes and scores them against job descriptions, built on a JWT-secured Django REST Framework backend with a React.js frontend.",
    liveLinks: [{ label: "Live Demo", url: "https://resumeiq-wxje.onrender.com/app" }],
  },
  {
    id: "lifedecisionassistant",
    number: "03",
    category: "AI-POWERED APPLICATION",
    title: "Life Decision Assistant",
    image: LIFEDECISION_IMAGE,
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Firebase", "Google Authentication", "Gemini API", "OpenRouter API", "Docker"],
    backendNote:
      "AI decision-support assistant that helps users reason through everyday decisions, integrating the Gemini and OpenRouter APIs on a Flask backend.",
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
      "Users upload CSV files that an automated pipeline cleans and turns into interactive charts, with a Gemini-powered chatbot that answers questions about the uploaded data.",
    liveLinks: [{ label: "Live Demo", url: "https://digital-dashboard1.onrender.com" }],
  },
  {
    id: "banksphere",
    number: "05",
    category: "JAVA FULL-STACK APPLICATION",
    title: "BankSphere",
    image: BANKSPHERE_IMAGE,
    tech: ["Java", "Spring Boot", "Spring Security", "React.js", "PostgreSQL", "REST APIs", "JWT Authentication", "RBAC", "Maven", "Docker", "Postman", "JUnit"],
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
    tech: ["Java", "Spring Boot", "React.js", "MySQL", "REST APIs", "RBAC", "JWT Authentication", "Maven", "Docker", "Postman", "JUnit"],
    backendNote:
      "Full-featured e-commerce platform built in Java/Spring Boot with role-based access control and a React.js storefront.",
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
    tech: ["Python", "Streamlit", "Machine Learning", "Artificial Intelligence", "CNN", "Kaggle Dataset"],
    backendNote:
      "CNN-based plant leaf disease classifier trained on a 1.5 GB Kaggle dataset, reaching over 90% accuracy, with a Streamlit interface for live predictions.",
    liveLinks: [{ label: "Live Demo", url: "https://plant-disease-detection-hknuvzcullqcrg7mzcrtyv.streamlit.app/" }],
  },
];

const PROJECT_COUNT_LABEL = String(PROJECTS.length).padStart(2, "0");

function openProject(projectId) {
  window.location.hash = `#${projectId}`;
}

/*
  Swipe deck: native scroll-snap does the swiping (momentum on touch,
  trackpads and wheels). A rAF-throttled scroll handler writes the 3D
  coverflow transform straight to the DOM, so React never re-renders
  while you swipe. Mouse users can click-and-drag.
*/
function Projects() {
  const N = PROJECTS.length;
  const deckRef = useRef(null);
  const cardRefs = useRef([]);
  const activeRef = useRef(0);
  const metrics = useRef({ w: 0, step: 1, vw: 0, lefts: [] });
  const drag = useRef({ down: false, x: 0, left: 0, moved: false });
  const [active, setActive] = useState(0);

  useEffect(() => {
    const deck = deckRef.current;
    if (!deck) return;
    let raf = 0;

    const measure = () => {
      const cards = cardRefs.current;
      if (!cards[0]) return;
      const w = cards[0].offsetWidth;
      const gap = cards[1] ? cards[1].offsetLeft - cards[0].offsetLeft - w : 0;
      metrics.current = {
        w,
        step: w + gap,
        vw: deck.clientWidth,
        lefts: cards.map((c) => c.offsetLeft),
      };
    };

    const update = () => {
      raf = 0;
      const { w, step, vw, lefts } = metrics.current;
      const sl = deck.scrollLeft;
      const mid = sl + vw / 2;
      const cards = cardRefs.current;

      for (let i = 0; i < cards.length; i++) {
        const d = (lefts[i] + w / 2 - mid) / step;
        const a = Math.min(Math.abs(d), 2);
        const scale = 1 - Math.min(a, 1) * 0.12;
        cards[i].style.transform = `perspective(1100px) translateZ(${(-a * 60).toFixed(1)}px) rotateY(${(-d * 24).toFixed(2)}deg) scale(${scale.toFixed(3)})`;
        cards[i].style.opacity = (1 - a * 0.3).toFixed(2);
        cards[i].style.zIndex = String(10 - Math.round(a * 4));
      }

      const idx = Math.max(0, Math.min(cards.length - 1, Math.round(sl / step)));
      if (idx !== activeRef.current) {
        activeRef.current = idx;
        setActive(idx);
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    const onResize = () => {
      measure();
      update();
    };

    /* mouse drag-to-swipe (touch already swipes natively) */
    const onDown = (e) => {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      drag.current = { down: true, x: e.clientX, left: deck.scrollLeft, moved: false };
    };
    const onMove = (e) => {
      const d = drag.current;
      if (!d.down) return;
      const dx = e.clientX - d.x;
      if (!d.moved && Math.abs(dx) > 5) {
        d.moved = true;
        deck.classList.add("dragging");
      }
      if (d.moved) deck.scrollLeft = d.left - dx;
    };
    const onUp = () => {
      const d = drag.current;
      if (!d.down) return;
      d.down = false;
      if (d.moved) {
        deck.classList.remove("dragging");
        const { step } = metrics.current;
        deck.scrollTo({ left: Math.round(deck.scrollLeft / step) * step, behavior: "smooth" });
        setTimeout(() => (d.moved = false), 0);
      }
    };

    const ro = new ResizeObserver(onResize);
    ro.observe(deck);
    measure();
    update();

    deck.addEventListener("scroll", onScroll, { passive: true });
    deck.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      deck.removeEventListener("scroll", onScroll);
      deck.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  const goTo = (index) => {
    const deck = deckRef.current;
    if (!deck) return;
    const i = Math.max(0, Math.min(N - 1, index));
    deck.scrollTo({ left: i * metrics.current.step, behavior: "smooth" });
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(active + 1);
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(active - 1);
    }
  };

  const project = PROJECTS[active];

  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">
        <Reveal>
          <div className="section-kicker">
            <span>04</span>
            Projects
          </div>

          <h2 className="massive-title">
            Things I've
            <br />
            <em>built and shipped.</em>
          </h2>

          <p className="projects-intro">
            Eight deployed applications — Python full-stack apps with LLM integrations, a CNN-based plant
            disease detector, and Java full-stack projects — covering REST APIs, relational databases,
            authentication, deep learning and Dockerized deployments, end to end. Swipe or drag to browse.
          </p>
        </Reveal>
      </div>

      <div className="deck-wrap">
        <div
          className="deck"
          ref={deckRef}
          tabIndex={0}
          onKeyDown={onKeyDown}
          aria-label="Project deck. Swipe, drag or use arrow keys."
        >
          {PROJECTS.map((p, i) => (
            <div
              key={p.id}
              ref={(el) => (cardRefs.current[i] = el)}
              className={`deck-card ${i === active ? "is-active" : ""}`}
              role="button"
              aria-label={i === active ? `View ${p.title}` : `Show ${p.title}`}
              onClick={() => {
                if (drag.current.moved) return;
                if (i === active) openProject(p.id);
                else goTo(i);
              }}
            >
              {p.image ? (
                <img src={p.image} alt={p.title} draggable="false" loading="lazy" decoding="async" />
              ) : (
                <div className="project-visual-placeholder">
                  <span>{p.title}</span>
                  <p>Screenshot coming soon</p>
                </div>
              )}

              <div className="deck-card-top">
                <span>{p.category}</span>
                <span>
                  {p.number} / {PROJECT_COUNT_LABEL}
                </span>
              </div>

              <div className="deck-card-bottom">
                <h3>{p.title}</h3>
                <div className="project-view">
                  <strong>↗</strong>
                  View Project
                </div>
              </div>
            </div>
          ))}
        </div>

        <button type="button" className="deck-arrow deck-prev" onClick={() => goTo(active - 1)} disabled={active === 0} aria-label="Previous project">
          ‹
        </button>
        <button type="button" className="deck-arrow deck-next" onClick={() => goTo(active + 1)} disabled={active === N - 1} aria-label="Next project">
          ›
        </button>
      </div>

      <div className="section-container">
        <div className="deck-progress" role="tablist" aria-label="Projects">
          {PROJECTS.map((p, i) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={p.title}
              className={i === active ? "active" : ""}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        <div className="project-information" key={project.id}>
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
              <span className="live-label">Live</span>

              <div className="live-link-list">
                {project.liveLinks.map((link) => (
                  <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">
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

          <button type="button" className="project-open-button" onClick={() => openProject(project.id)}>
            Open Project
            <span>↗</span>
          </button>
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
            Education
          </div>

          <h2 className="massive-title">
            Where it
            <br />
            <em>started.</em>
          </h2>
        </Reveal>

        <Reveal className="education-main">
          <div className="education-year">2026</div>

          <div className="education-info">
            <span>B.E. — Computer Science &amp; Engineering</span>

            <h3>ACS College of Engineering, Bengaluru</h3>

            <p>
              Bachelor of Engineering in Computer Science &amp; Engineering (2023 – 2026). Preceded by a
              Diploma in Information Science at PVP Polytechnic, Bengaluru (2020 – 2023), completed with
              First Class with Distinction.
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
   CERTIFICATIONS (data + book logic unchanged)
   ========================================================= */

const CERTIFICATIONS = [
  {
    title: "Green Skills & Artificial Intelligence",
    issuer: "Skills4Future Program — Edunet Foundation, AICTE & Shell India (2026)",
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
            <span>06</span>
            Certifications
          </div>

          <h2 className="massive-title">
            Proof of
            <br />
            <em>continuous learning.</em>
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
            My three internship certificates and my Skills4Future Generative AI training certificate —
            click the arrows to turn the page.
          </p>
        </Reveal>

        <Reveal>
          <CertificateBook certificates={INTERNSHIP_CERTIFICATES} />
        </Reveal>
      </div>
    </section>
  );
}

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
    if (flipDirection || nextIndex < 0 || nextIndex >= certificates.length) return;

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
          className={`book-page book-page-top ${flipDirection === "next" ? "flip-next" : ""} ${
            flipDirection === "prev" ? "flip-prev" : ""
          }`}
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

/* =========================================================
   CONTACT
   ========================================================= */

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-inner">
        <Reveal>
          <div className="section-kicker contact-kicker">
            <span>07</span>
            Contact
          </div>

          <h2>
            Let's build
            <br />
            <em>something together.</em>
          </h2>

          <p>Open to Python Developer roles. Whether it's a quick question or a project idea, my inbox is open.</p>

          <a href="mailto:srinivasrahul838@gmail.com" className="contact-email">
            srinivasrahul838@gmail.com
            <span>↗</span>
          </a>

          <div className="contact-details">
            <span>Bengaluru, Karnataka, India</span>
            <span>+91 73376 34886</span>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/rahul-s-6460b1238" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/RAHUL2525252525" target="_blank" rel="noopener noreferrer">
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
        Rahul<span>.</span>
      </div>

      <p>Built with React.js</p>

      <span>© 2026 Rahul S. All rights reserved.</span>
    </footer>
  );
}
