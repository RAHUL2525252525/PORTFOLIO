import React, { useEffect, useState } from "react";

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

const first = (raw) => sortGlobImages(raw)[0] ?? null;

/* ---------- ROUTES ---------- */

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

const getHashRoute = () => window.location.hash.replace(/^#\/?/, "").toLowerCase();

function scrollToSection(route, smooth = true) {
  if (!route) return window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "auto" });
  document.getElementById(route)?.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
}

function useHashRoute() {
  const [route, setRoute] = useState(getHashRoute());

  useEffect(() => {
    let t;
    const onChange = () => {
      const next = getHashRoute();
      if (ROUTES[next]) {
        setRoute(next);
        window.scrollTo({ top: 0 });
        return;
      }
      setRoute("");
      requestAnimationFrame(() => scrollToSection(next, true));
    };
    window.addEventListener("hashchange", onChange);
    const initial = getHashRoute();
    if (ROUTES[initial]) setRoute(initial);
    else if (initial) t = setTimeout(() => scrollToSection(initial, false), 50);
    return () => {
      window.removeEventListener("hashchange", onChange);
      clearTimeout(t);
    };
  }, []);

  return route;
}

/* ---------- DATA ---------- */

const NAV = ["about", "skills", "experience", "projects", "education", "certifications", "contact"];

const SKILLS = [
  { title: "Languages & frontend", items: ["Python", "SQL", "JavaScript", "Java", "React.js", "HTML5", "CSS3", "Streamlit"] },
  { title: "Backend", items: ["FastAPI", "Flask", "Django REST Framework", "Spring Boot", "REST APIs", "JWT Authentication", "Async Programming"] },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "Firebase"] },
  { title: "API & testing", items: ["Postman", "Unit Testing"] },
  { title: "Data & BI", items: ["Pandas", "Power BI", "Tableau", "Data Cleaning"] },
  { title: "DevOps & cloud", items: ["Docker", "Git", "GitHub Actions (CI/CD)", "Render", "Vercel", "AWS (EC2, S3 – basic)"] },
  { title: "AI & ML", items: ["Gemini API", "Groq API", "OpenRouter API", "TensorFlow", "Keras", "CNN", "OpenCV"] },
];

const EXPERIENCES = [
  {
    date: "Jan – May 2026",
    role: "AI Intern",
    company: "MR. TechLab LLP (AppMind AI), Bengaluru",
    points: [
      "Built and deployed 3 full-stack web apps using Flask, Firebase and Google Authentication; containerised with Docker and hosted on Vercel (frontend) and Render (backend).",
      "Developed an AI Exam Companion: a Groq-powered chatbot with a performance dashboard and mock tests.",
      "Built a Life Decision Assistant integrating the Gemini and OpenRouter APIs, and a Digital Analytics Dashboard with a Gemini-powered chatbot.",
    ],
  },
  {
    date: "Mar – Jun 2023",
    role: "AI & Data Science Intern, Software Dev Project",
    company: "Knowx Innovations (P) Ltd, Bengaluru",
    points: [
      "Worked hands-on with Python, SQL, machine learning algorithms, OpenCV, Keras, TensorFlow and data visualisation.",
      "Applied CNNs and VGG16 in sample projects on deep learning and image classification.",
    ],
  },
  {
    date: "Oct 2022 – Jan 2023",
    role: "AI & Data Science Intern, Training",
    company: "Knowx Innovations (P) Ltd, Bengaluru",
    points: [
      "Completed training in Python, SQL, machine learning algorithms, OpenCV, Keras and TensorFlow.",
      "Received an internship certificate from Knowx Innovations for each phase of the program.",
    ],
  },
];

const PROJECTS = [
  {
    id: "aiexamcompanion",
    category: "AI-powered application",
    title: "AI Exam Companion",
    image: first(aiExamRaw),
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Firebase", "Google Authentication", "Groq API", "Docker"],
    note: "Groq-powered exam preparation chatbot with a performance dashboard and mock tests, built on a Flask backend with Firebase and Google authentication.",
    url: "https://ai-exam-companion-ghzc.onrender.com",
  },
  {
    id: "resumeiq",
    category: "AI-powered application",
    title: "ResumeIQ",
    image: first(resumeiqRaw),
    tech: ["Python", "Django", "Django REST Framework", "React.js", "MySQL", "JWT Authentication", "Gemini API", "Postman", "Docker"],
    note: "AI resume analyzer that parses resumes and scores them against job descriptions, built on a JWT-secured Django REST Framework backend with a React.js frontend.",
    url: "https://resumeiq-wxje.onrender.com/app",
  },
  {
    id: "lifedecisionassistant",
    category: "AI-powered application",
    title: "Life Decision Assistant",
    image: first(lifeDecisionRaw),
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Firebase", "Google Authentication", "Gemini API", "OpenRouter API", "Docker"],
    note: "AI decision-support assistant that helps users reason through everyday decisions, integrating the Gemini and OpenRouter APIs on a Flask backend.",
    url: "https://life-decision-assistant-63pu.onrender.com",
  },
  {
    id: "digitalanalyticsdashboard",
    category: "Python full-stack application",
    title: "Digital Analytics Dashboard",
    image: first(digitalAnalyticsRaw),
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Firebase", "Google Authentication", "Gemini API", "Postman", "Docker", "Pytest", "JWT Authentication"],
    note: "Users upload CSV files that an automated pipeline cleans and turns into interactive charts, with a Gemini-powered chatbot that answers questions about the uploaded data.",
    url: "https://digital-dashboard1.onrender.com",
  },
  {
    id: "banksphere",
    category: "Java full-stack application",
    title: "BankSphere",
    image: first(banksphereRaw),
    tech: ["Java", "Spring Boot", "Spring Security", "React.js", "PostgreSQL", "REST APIs", "JWT Authentication", "RBAC", "Maven", "Docker", "Postman", "JUnit"],
    note: "Online banking system built in Java/Spring Boot with JWT authentication, role-based access (user and admin), account and transaction management, and a React.js frontend served from the same Dockerized service.",
    url: "https://online-banking-system-17od.onrender.com",
  },
  {
    id: "shopsphere",
    category: "Java full-stack application",
    title: "ShopSphere",
    image: first(shopsphereRaw),
    tech: ["Java", "Spring Boot", "React.js", "MySQL", "REST APIs", "RBAC", "JWT Authentication", "Maven", "Docker", "Postman", "JUnit"],
    note: "Full-featured e-commerce platform built in Java/Spring Boot with role-based access control and a React.js storefront.",
    url: "https://shopsphere-c109.onrender.com",
  },
  {
    id: "gymsync",
    category: "Python full-stack application",
    title: "GymSync",
    image: first(gymSyncRaw),
    tech: ["Python", "FastAPI", "JavaScript", "React + Vite", "PostgreSQL", "Docker", "JWT Authentication", "GitHub Actions", "Postman", "Pytest"],
    note: "Containerised gym tracking application with an asynchronous FastAPI backend, PostgreSQL and a React.js frontend, deployed to Vercel and Render through a GitHub Actions CI/CD pipeline.",
    url: "https://gymsync-app.onrender.com",
  },
  {
    id: "plantdiseasedetection",
    category: "AI / ML application",
    title: "Plant Disease Detection",
    image: first(plantDiseaseRaw),
    tech: ["Python", "Streamlit", "Machine Learning", "Artificial Intelligence", "CNN", "Kaggle Dataset"],
    note: "CNN-based plant leaf disease classifier trained on a 1.5 GB Kaggle dataset, reaching over 90% accuracy, with a Streamlit interface for live predictions.",
    url: "https://plant-disease-detection-hknuvzcullqcrg7mzcrtyv.streamlit.app/",
  },
];

const CERTIFICATIONS = [
  {
    title: "Green Skills & Artificial Intelligence",
    issuer: "Skills4Future Program, Edunet Foundation, AICTE & Shell India (2026)",
    description: "Program covering Green Skills and Artificial Intelligence, with hands-on training in Power BI, Tableau and Data Cleaning.",
  },
  {
    title: "Python Full Stack Software Development",
    issuer: "Qspiders Training Institute",
    description: "Structured training in full-stack Python development, from backend APIs to frontend integration.",
  },
  {
    title: "AI & Data Science Internship Certificates",
    issuer: "Knowx Innovations (P) Ltd.",
    description: "Two internship certificates covering Python, SQL, machine learning, OpenCV, Keras, TensorFlow and deep learning.",
  },
];

const CERT_IMAGES = [
  { title: "AI Internship", sub: "MR. TechLab LLP (AppMind AI), Jan – May 2026", image: "/certificates/appmind-ai-internship.jpg" },
  { title: "AI & Data Science Internship, Software Dev Project", sub: "Knowx Innovations, Mar – Jun 2023", image: "/certificates/knowx-software-dev-internship.jpg" },
  { title: "AI & Data Science Internship, Training", sub: "Knowx Innovations, Oct 2022 – Jan 2023", image: "/certificates/knowx-training-internship.jpg" },
  { title: "Green Skills & Generative AI Training", sub: "Skills4Future, Edunet Foundation, AICTE & Shell India", image: "/certificates/skills4future-genai.jpg" },
];

const openProject = (id) => {
  window.location.hash = `#${id}`;
};

/* ---------- APP ---------- */

export default function App() {
  const route = useHashRoute();
  const ProjectPage = ROUTES[route];
  if (ProjectPage) return <ProjectPage />;

  return (
    <div className="site">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

/* ---------- NAV (floating pill) ---------- */

function Nav() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    setOpen(false);
    if (getHashRoute() === id) scrollToSection(id, true);
    else window.location.hash = `#${id}`;
  };

  const home = (e) => {
    e.preventDefault();
    setOpen(false);
    if (window.location.hash) window.location.hash = "";
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="nav">
      <a href="#" className="nav-brand" onClick={home} aria-label="Go to top">
        rahul<b>.s</b>
      </a>

      <nav id="nav-links" className={`nav-links ${open ? "open" : ""}`}>
        {NAV.map((id) => (
          <a key={id} href={`#${id}`} className={active === id ? "on" : ""} onClick={(e) => go(e, id)}>
            {id}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="nav-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="nav-links"
        aria-label="Toggle navigation menu"
      >
        {open ? "Close" : "Menu"}
      </button>
    </header>
  );
}

/* ---------- HERO ---------- */

function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="hero-status">
            <i /> Open to Python developer roles · Bengaluru
          </p>

          <h1>
            <span className="line"><span>I build backends</span></span>
            <span className="line"><span>that people</span></span>
            <span className="line"><span>actually use.</span></span>
          </h1>

          <p className="hero-lede">
            I'm Rahul, a Python developer and B.E. Computer Science graduate (2026). I ship full-stack apps with FastAPI,
            Flask, Django REST Framework and React.js, secured with JWT, packaged in Docker, deployed through GitHub
            Actions, and wired up to LLM APIs like Gemini, Groq and OpenRouter. I also train CNNs, and I've written Java
            in BankSphere and ShopSphere.
          </p>

          <div className="hero-actions">
            <a
              href="#projects"
              className="btn btn-yellow"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = "#projects";
              }}
            >
              See the 8 live projects
            </a>
            <a
              href="#contact"
              className="btn btn-line"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = "#contact";
              }}
            >
              Get in touch
            </a>
          </div>
        </div>

        <figure className="hero-photo">
          <div className="arch">
            <img src="/rahul-profile.jpg" alt="Rahul S" />
          </div>
          <figcaption>
            <strong>8</strong> deployed apps
            <br />
            <strong>90%+</strong> CNN accuracy
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */

function About() {
  return (
    <section id="about" className="block chalk">
      <div className="wrap about-grid">
        <h2 className="h2">Engineer first. Builder always.</h2>

        <div className="about-text">
          <p className="big">
            I've built and deployed full-stack applications end to end, from the REST API to the container it runs in.
          </p>
          <p>
            My work spans APIs with FastAPI, Flask and Django REST Framework, React.js frontends, PostgreSQL and MySQL,
            JWT authentication and Docker. I automate deployments with GitHub Actions and host on Render and Vercel.
          </p>
          <p>
            At MR. TechLab LLP (AppMind AI) I built and deployed three web apps (AI Exam Companion, Life Decision
            Assistant and Digital Analytics Dashboard) with Flask, Firebase and Google Authentication, and integrated
            Gemini, Groq and OpenRouter. Earlier, I completed two AI &amp; Data Science internship phases at Knowx
            Innovations covering Python, SQL, machine learning, OpenCV, Keras and TensorFlow.
          </p>
          <p>
            My B.E. major project, Plant Disease Detection, trains a CNN on a 1.5 GB Kaggle crop-leaf dataset to reach
            over 90% accuracy, with a Streamlit interface for live predictions.
          </p>

          <dl className="facts">
            <div><dt>Live applications</dt><dd>8</dd></div>
            <div><dt>Python &amp; ML apps</dt><dd>6</dd></div>
            <div><dt>Internships</dt><dd>3</dd></div>
            <div><dt>CNN accuracy</dt><dd>90%+</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ---------- SKILLS ---------- */

function Skills() {
  return (
    <section id="skills" className="block butter">
      <div className="wrap">
        <h2 className="h2">The toolbox.</h2>

        <div className="skills-grid">
          {SKILLS.map((g) => (
            <div key={g.title} className="skill-group">
              <h3>{g.title}</h3>
              <ul>
                {g.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- EXPERIENCE ---------- */

function Experience() {
  return (
    <section id="experience" className="block chalk">
      <div className="wrap">
        <h2 className="h2">Where I learned to build.</h2>

        <ol className="timeline">
          {EXPERIENCES.map((x) => (
            <li key={x.date}>
              <time>{x.date}</time>
              <div>
                <h3>{x.role}</h3>
                <p className="company">{x.company}</p>
                <ul>
                  {x.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- PROJECTS (sticky card stack) ---------- */

function Projects() {
  return (
    <section id="projects" className="block cobalt projects">
      <div className="wrap">
        <h2 className="h2">Eight apps, all live.</h2>
        <p className="projects-intro">
          Python full-stack apps with LLM integrations, a CNN plant disease detector, and Java full-stack projects.
          Each one is deployed, so open the demo and try it.
        </p>
      </div>

      <div className="wrap stack">
        {PROJECTS.map((p, i) => (
          <article key={p.id} className={`card tone-${i % 4}`} style={{ "--i": i }}>
            <button type="button" className="card-shot" onClick={() => openProject(p.id)} aria-label={`View ${p.title}`}>
              {p.image ? (
                <img src={p.image} alt={p.title} loading="lazy" />
              ) : (
                <span className="card-shot-empty">{p.title}</span>
              )}
            </button>

            <div className="card-body">
              <p className="card-cat">{p.category}</p>
              <h3>{p.title}</h3>
              <p className="card-note">{p.note}</p>

              <ul className="chips">
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>

              <div className="card-actions">
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn btn-ink">
                  Open live demo
                </a>
                <button type="button" className="btn btn-ghost" onClick={() => openProject(p.id)}>
                  Read the case study
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- EDUCATION ---------- */

function Education() {
  return (
    <section id="education" className="block chalk">
      <div className="wrap edu">
        <h2 className="h2">Where it started.</h2>

        <div className="edu-card">
          <p className="edu-year">2023 – 2026</p>
          <h3>B.E. Computer Science &amp; Engineering</h3>
          <p className="edu-school">ACS College of Engineering, Bengaluru</p>
          <p>
            CGPA <strong>8.00 / 10</strong>. Preceded by a Diploma in Information Science at PVP Polytechnic, Bengaluru
            (2020 – 2023), completed with First Class with Distinction.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- CERTIFICATIONS ---------- */

function Certifications() {
  const [zoom, setZoom] = useState(null);

  useEffect(() => {
    if (zoom === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setZoom(null);
      if (e.key === "ArrowRight") setZoom((z) => Math.min(z + 1, CERT_IMAGES.length - 1));
      if (e.key === "ArrowLeft") setZoom((z) => Math.max(z - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoom]);

  return (
    <section id="certifications" className="block mist">
      <div className="wrap">
        <h2 className="h2">Proof of continuous learning.</h2>

        <div className="cert-list">
          {CERTIFICATIONS.map((c) => (
            <div key={c.title} className="cert">
              <h3>{c.title}</h3>
              <p className="cert-issuer">{c.issuer}</p>
              <p>{c.description}</p>
            </div>
          ))}
        </div>

        <h3 className="cert-sub">The certificates themselves</h3>
        <div className="cert-thumbs">
          {CERT_IMAGES.map((c, i) => (
            <button key={c.title} type="button" className="thumb" onClick={() => setZoom(i)}>
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <span>
                <strong>{c.title}</strong>
                {c.sub}
              </span>
            </button>
          ))}
        </div>
      </div>

      {zoom !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Certificate viewer" onClick={() => setZoom(null)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img src={CERT_IMAGES[zoom].image} alt={CERT_IMAGES[zoom].title} />
            <p>
              <strong>{CERT_IMAGES[zoom].title}</strong> · {CERT_IMAGES[zoom].sub}
            </p>
            <div className="lightbox-bar">
              <button type="button" className="btn btn-line" disabled={zoom === 0} onClick={() => setZoom(zoom - 1)}>
                Previous
              </button>
              <span>
                {zoom + 1} of {CERT_IMAGES.length}
              </span>
              <button
                type="button"
                className="btn btn-line"
                disabled={zoom === CERT_IMAGES.length - 1}
                onClick={() => setZoom(zoom + 1)}
              >
                Next
              </button>
              <button type="button" className="btn btn-yellow" onClick={() => setZoom(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ---------- CONTACT ---------- */

function Contact() {
  return (
    <section id="contact" className="block butter contact">
      <div className="wrap">
        <h2 className="contact-title">Let's build something together.</h2>
        <p className="contact-lede">
          I'm open to Python Developer roles. A quick question or a project idea, my inbox is open.
        </p>

        <a href="mailto:srinivasrahul838@gmail.com" className="contact-mail">
          srinivasrahul838@gmail.com
        </a>

        <div className="contact-row">
          <span>Bengaluru, Karnataka, India</span>
          <span>+91 73376 34886</span>
          <a href="https://www.linkedin.com/in/rahul-s-6460b1238" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/RAHUL2525252525" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>

      <footer className="foot">
        <span>© 2026 Rahul S. All rights reserved.</span>
        <span>Built with React.js</span>
      </footer>
    </section>
  );
}
