import React, { useCallback, useEffect, useRef, useState } from "react";

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

/* ---------- ROUTES (hash) ---------- */

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
    else if (initial) t = setTimeout(() => scrollToSection(initial, false), 80);
    return () => {
      window.removeEventListener("hashchange", onChange);
      clearTimeout(t);
    };
  }, []);
  return route;
}

const openProject = (id) => { window.location.hash = `#${id}`; };
const goTo = (id) => { if (getHashRoute() === id) scrollToSection(id, true); else window.location.hash = `#${id}`; };

/* ---------- DATA ---------- */

const EMAIL = "srinivasrahul838@gmail.com";
const GITHUB = "https://github.com/RAHUL2525252525";
const LINKEDIN = "https://www.linkedin.com/in/rahul-s-6460b1238";
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
    date: "Jan – May 2026", role: "AI Intern", company: "MR. TechLab LLP (AppMind AI), Bengaluru",
    points: [
      "Built and deployed 3 full-stack web apps using Flask, Firebase and Google Authentication; containerised with Docker and hosted on Vercel (frontend) and Render (backend).",
      "Developed an AI Exam Companion: a Groq-powered chatbot with a performance dashboard and mock tests.",
      "Built a Life Decision Assistant integrating the Gemini and OpenRouter APIs, and a Digital Analytics Dashboard with a Gemini-powered chatbot.",
    ],
  },
  {
    date: "Mar – Jun 2023", role: "AI & Data Science Intern, Software Dev Project", company: "Knowx Innovations (P) Ltd, Bengaluru",
    points: [
      "Worked hands-on with Python, SQL, machine learning algorithms, OpenCV, Keras, TensorFlow and data visualisation.",
      "Applied CNNs and VGG16 in sample projects on deep learning and image classification.",
    ],
  },
  {
    date: "Oct 2022 – Jan 2023", role: "AI & Data Science Intern, Training", company: "Knowx Innovations (P) Ltd, Bengaluru",
    points: [
      "Completed training in Python, SQL, machine learning algorithms, OpenCV, Keras and TensorFlow.",
      "Received an internship certificate from Knowx Innovations for each phase of the program.",
    ],
  },
];

const PROJECTS = [
  {
    id: "aiexamcompanion", category: "AI-powered application", title: "AI Exam Companion", image: first(aiExamRaw),
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Firebase", "Google Authentication", "Groq API", "Docker"],
    note: "Groq-powered exam preparation chatbot with a performance dashboard and mock tests, built on a Flask backend with Firebase and Google authentication.",
    url: "https://ai-exam-companion-ghzc.onrender.com",
  },
  {
    id: "resumeiq", category: "AI-powered application", title: "ResumeIQ", image: first(resumeiqRaw),
    tech: ["Python", "Django", "Django REST Framework", "React.js", "MySQL", "JWT Authentication", "Gemini API", "Postman", "Docker"],
    note: "AI resume analyzer that parses resumes and scores them against job descriptions, built on a JWT-secured Django REST Framework backend with a React.js frontend.",
    url: "https://resumeiq-wxje.onrender.com/app",
  },
  {
    id: "lifedecisionassistant", category: "AI-powered application", title: "Life Decision Assistant", image: first(lifeDecisionRaw),
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Firebase", "Google Authentication", "Gemini API", "OpenRouter API", "Docker"],
    note: "AI decision-support assistant that helps users reason through everyday decisions, integrating the Gemini and OpenRouter APIs on a Flask backend.",
    url: "https://life-decision-assistant-63pu.onrender.com",
  },
  {
    id: "digitalanalyticsdashboard", category: "Python full-stack application", title: "Digital Analytics Dashboard", image: first(digitalAnalyticsRaw),
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Firebase", "Google Authentication", "Gemini API", "Postman", "Docker", "Pytest", "JWT Authentication"],
    note: "Users upload CSV files that an automated pipeline cleans and turns into interactive charts, with a Gemini-powered chatbot that answers questions about the uploaded data.",
    url: "https://digital-dashboard1.onrender.com",
  },
  {
    id: "banksphere", category: "Java full-stack application", title: "BankSphere", image: first(banksphereRaw),
    tech: ["Java", "Spring Boot", "Spring Security", "React.js", "PostgreSQL", "REST APIs", "JWT Authentication", "RBAC", "Maven", "Docker", "Postman", "JUnit"],
    note: "Online banking system built in Java/Spring Boot with JWT authentication, role-based access (user and admin), account and transaction management, and a React.js frontend served from the same Dockerized service.",
    url: "https://online-banking-system-17od.onrender.com",
  },
  {
    id: "shopsphere", category: "Java full-stack application", title: "ShopSphere", image: first(shopsphereRaw),
    tech: ["Java", "Spring Boot", "React.js", "MySQL", "REST APIs", "RBAC", "JWT Authentication", "Maven", "Docker", "Postman", "JUnit"],
    note: "Full-featured e-commerce platform built in Java/Spring Boot with role-based access control and a React.js storefront.",
    url: "https://shopsphere-c109.onrender.com",
  },
  {
    id: "gymsync", category: "Python full-stack application", title: "GymSync", image: first(gymSyncRaw),
    tech: ["Python", "FastAPI", "JavaScript", "React + Vite", "PostgreSQL", "Docker", "JWT Authentication", "GitHub Actions", "Postman", "Pytest"],
    note: "Containerised gym tracking application with an asynchronous FastAPI backend, PostgreSQL and a React.js frontend, deployed to Vercel and Render through a GitHub Actions CI/CD pipeline.",
    url: "https://gymsync-app.onrender.com",
  },
  {
    id: "plantdiseasedetection", category: "AI / ML application", title: "Plant Disease Detection", image: first(plantDiseaseRaw),
    tech: ["Python", "Streamlit", "Machine Learning", "Artificial Intelligence", "CNN", "Kaggle Dataset"],
    note: "CNN-based plant leaf disease classifier trained on a 1.5 GB Kaggle dataset, reaching over 90% accuracy, with a Streamlit interface for live predictions.",
    url: "https://plant-disease-detection-hknuvzcullqcrg7mzcrtyv.streamlit.app/",
  },
];

const CERTIFICATIONS = [
  { title: "Green Skills & Artificial Intelligence", issuer: "Skills4Future Program, Edunet Foundation, AICTE & Shell India (2026)", description: "Program covering Green Skills and Artificial Intelligence, with hands-on training in Power BI, Tableau and Data Cleaning." },
  { title: "Python Full Stack Software Development", issuer: "Qspiders Training Institute", description: "Structured training in full-stack Python development, from backend APIs to frontend integration." },
  { title: "AI & Data Science Internship Certificates", issuer: "Knowx Innovations (P) Ltd.", description: "Two internship certificates covering Python, SQL, machine learning, OpenCV, Keras, TensorFlow and deep learning." },
];

const CERT_IMAGES = [
  { title: "AI Internship", sub: "MR. TechLab LLP (AppMind AI), Jan – May 2026", image: "/certificates/appmind-ai-internship.jpg" },
  { title: "AI & Data Science Internship, Software Dev Project", sub: "Knowx Innovations, Mar – Jun 2023", image: "/certificates/knowx-software-dev-internship.jpg" },
  { title: "AI & Data Science Internship, Training", sub: "Knowx Innovations, Oct 2022 – Jan 2023", image: "/certificates/knowx-training-internship.jpg" },
  { title: "Green Skills & Generative AI Training", sub: "Skills4Future, Edunet Foundation, AICTE & Shell India", image: "/certificates/skills4future-genai.jpg" },
];

const CUBE_FACES = [
  ["Python", "Backend & ML"],
  ["REST API", "JWT secured"],
  ["FastAPI", "Async services"],
  ["Docker", "Containers"],
  ["SQL", "PostgreSQL, MySQL"],
  ["React", "Frontend"],
];

const ABOUT_TEXT =
  "I build and deploy full-stack applications end to end, from the REST API and database to the Docker container and CI/CD pipeline that ship it, with LLMs and CNNs wired in where they make the product smarter.";

/* ---------- REVEAL (smooth entrance) ---------- */

function Reveal({ children, as: Tag = "div", className = "", delay = 0, ...rest }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); obs.disconnect(); }
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`rv ${seen ? "in" : ""} ${className}`} style={{ "--d": `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  );
}

/* ---------- GLOBAL EFFECTS: progress, tilt + glare, magnetic ---------- */

function Effects() {
  const bar = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    let lastTilt = null, lastMag = null;

    const resetTilt = (el) => {
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
      el.style.setProperty("--gl", "0");
    };

    const move = (e) => {
      const tilt = e.target.closest?.(".tilt");
      if (lastTilt && lastTilt !== tilt) resetTilt(lastTilt);
      lastTilt = tilt;
      if (tilt) {
        const r = tilt.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        const max = Number(tilt.dataset.tilt || 9);
        tilt.style.setProperty("--ry", `${((px - 0.5) * max * 2).toFixed(2)}deg`);
        tilt.style.setProperty("--rx", `${(-(py - 0.5) * max * 2).toFixed(2)}deg`);
        tilt.style.setProperty("--gx", `${(px * 100).toFixed(1)}%`);
        tilt.style.setProperty("--gy", `${(py * 100).toFixed(1)}%`);
        tilt.style.setProperty("--gl", "1");
      }

      const mag = e.target.closest?.(".magnetic");
      if (lastMag && lastMag !== mag) lastMag.style.transform = "";
      lastMag = mag;
      if (mag) {
        const r = mag.getBoundingClientRect();
        mag.style.transform = `translate(${((e.clientX - (r.left + r.width / 2)) * 0.22).toFixed(1)}px, ${((e.clientY - (r.top + r.height / 2)) * 0.32).toFixed(1)}px)`;
      }
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return <div className="progress"><span ref={bar} /></div>;
}

/* ---------- APP ---------- */

export default function App() {
  const route = useHashRoute();
  const ProjectPage = ROUTES[route];
  if (ProjectPage) return <ProjectPage />;

  return (
    <div className="site">
      <Effects />
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

/* ---------- NAV ---------- */

function Nav() {
  const [active, setActive] = useState("");
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <header className="nav">
      <a href="#" className="nav-brand" aria-label="Go to top" onClick={(e) => { e.preventDefault(); setMenu(false); if (window.location.hash) window.location.hash = ""; else window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        <span className="nav-mark" aria-hidden="true">R</span>
        Rahul S.
      </a>

      <nav id="nav-links" className={`nav-links ${menu ? "open" : ""}`}>
        {NAV.map((id) => (
          <a key={id} href={`#${id}`} className={active === id ? "on" : ""} onClick={(e) => { e.preventDefault(); setMenu(false); goTo(id); }}>{id}</a>
        ))}
      </nav>

      <a href="#contact" className="nav-cta magnetic" onClick={(e) => { e.preventDefault(); setMenu(false); goTo("contact"); }}>Hire me</a>

      <button type="button" className="nav-toggle" onClick={() => setMenu((v) => !v)} aria-expanded={menu} aria-controls="nav-links">
        {menu ? "Close" : "Menu"}
      </button>
    </header>
  );
}

/* ---------- HERO ---------- */

function Hero() {
  const stage = useRef(null);

  useEffect(() => {
    const el = stage.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let tx = 0, ty = 0, mx = 0, my = 0, raf, visible = true;

    const onMove = (e) => {
      tx = e.clientX / window.innerWidth - 0.5;
      ty = e.clientY / window.innerHeight - 0.5;
    };

    const loop = () => {
      raf = requestAnimationFrame(loop);
      if (!visible) return;
      mx += (tx - mx) * 0.06;
      my += (ty - my) * 0.06;
      el.style.setProperty("--mx", mx.toFixed(4));
      el.style.setProperty("--my", my.toFixed(4));
    };

    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(el);
    window.addEventListener("mousemove", onMove, { passive: true });
    loop();
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="status"><i /> Open to Python Developer roles · Bengaluru</p>

          <p className="hero-name">Rahul S.</p>
          <h1>Python developer who builds and ships full-stack apps.</h1>

          <p className="hero-lede">
            B.E. Computer Science graduate (2026). I build and deploy apps with <strong>FastAPI, Flask, Django REST Framework and React.js</strong>,
            secured with JWT, packaged in Docker, shipped through GitHub Actions, and connected to LLM APIs like Gemini, Groq and OpenRouter.
            I also train CNNs, and I've written Java in BankSphere and ShopSphere.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-ink magnetic" onClick={(e) => { e.preventDefault(); goTo("projects"); }}>View live projects</a>
            <a href="#contact" className="btn btn-soft magnetic" onClick={(e) => { e.preventDefault(); goTo("contact"); }}>Contact me</a>
          </div>

          <ul className="hero-stats">
            <li><strong>8</strong>live apps</li>
            <li><strong>90%+</strong>CNN accuracy</li>
            <li><strong>3</strong>internships</li>
          </ul>
        </div>

        <div className="stage" ref={stage}>
          <div className="scene">
            <span className="glow" aria-hidden="true" />

            <i className="ring r1" aria-hidden="true"><b /></i>
            <i className="ring r2" aria-hidden="true"><b /></i>
            <i className="ring r3" aria-hidden="true" />

            <div className="photo">
              <img src="/rahul-profile.jpg" alt="Rahul S" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */

function ScrollText({ text }) {
  const ref = useRef(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const spans = el.querySelectorAll("span");
    const on = () => {
      const r = el.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (window.innerHeight * 0.85 - r.top) / (r.height + window.innerHeight * 0.3)));
      const n = Math.round(p * spans.length * 1.08);
      spans.forEach((s, i) => s.classList.toggle("lit", i < n));
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <p ref={ref} className="scrolltext">
      {words.map((w, i) => <span key={i}>{w}{" "}</span>)}
    </p>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <ScrollText text={ABOUT_TEXT} />

        <div className="about-cards">
          <Reveal delay={0}>
            <div className="depth tilt" data-tilt="10">
              <strong className="big-n">8</strong>
              <span className="depth-l">live deployed applications</span>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="depth tilt" data-tilt="10">
              <strong className="big-n">90%+</strong>
              <span className="depth-l">CNN accuracy on my major project</span>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <div className="depth tilt" data-tilt="10">
              <strong className="big-n">6</strong>
              <span className="depth-l">Python &amp; ML applications</span>
            </div>
          </Reveal>
          <Reveal delay={270}>
            <div className="depth tilt" data-tilt="10">
              <strong className="big-n">3</strong>
              <span className="depth-l">internship experiences</span>
            </div>
          </Reveal>
        </div>

        <div className="about-cols">
          <Reveal as="p">
            At MR. TechLab LLP (AppMind AI) I built and deployed three web apps (AI Exam Companion, Life Decision Assistant and Digital Analytics
            Dashboard) with Flask, Firebase and Google Authentication, and integrated Gemini, Groq and OpenRouter. Two AI &amp; Data Science
            internship phases at Knowx Innovations gave me the base in Python, SQL, machine learning, OpenCV, Keras and TensorFlow.
          </Reveal>
          <Reveal as="p" delay={100}>
            My B.E. major project, Plant Disease Detection, trains a CNN on a 1.5 GB Kaggle crop-leaf image dataset to detect plant diseases with
            over 90% accuracy, with a Streamlit interface for live predictions. I also build Java applications, including a banking system and an
            e-commerce platform.
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- SKILLS: 3D coverflow ---------- */

function Skills() {
  const [a, setA] = useState(0);
  const drag = useRef(null);
  const n = SKILLS.length;

  const go = useCallback((v) => setA((cur) => Math.max(0, Math.min(n - 1, typeof v === "function" ? v(cur) : v))), [n]);

  const onDown = (e) => { drag.current = e.clientX; };
  const onUp = (e) => {
    if (drag.current === null) return;
    const dx = e.clientX - drag.current;
    drag.current = null;
    if (dx > 50) go((c) => c - 1);
    else if (dx < -50) go((c) => c + 1);
  };

  return (
    <section id="skills" className="section skills">
      <div className="wrap">
        <Reveal as="h2" className="h2">Tools I use to<br /><span className="ink-grad">ship software.</span></Reveal>
      </div>

      <div
        className="flow"
        tabIndex={0}
        role="group"
        aria-label="Skill groups. Use left and right arrow keys."
        onKeyDown={(e) => { if (e.key === "ArrowRight") go((c) => c + 1); if (e.key === "ArrowLeft") go((c) => c - 1); }}
        onPointerDown={onDown}
        onPointerUp={onUp}
        onPointerLeave={() => { drag.current = null; }}
      >
        {SKILLS.map((g, i) => {
          const o = i - a;
          return (
            <article
              key={g.title}
              className={`flow-card c${i % 4} ${o === 0 ? "active" : ""}`}
              style={{ "--o": o, "--abs": Math.abs(o) }}
              onClick={() => go(i)}
              aria-hidden={Math.abs(o) > 1 ? "true" : undefined}
            >
              <span className="flow-count">{String(g.items.length).padStart(2, "0")}</span>
              <h3>{g.title}</h3>
              <ul>{g.items.map((s) => <li key={s}>{s}</li>)}</ul>
            </article>
          );
        })}
      </div>

      <div className="flow-ctrl">
        <button type="button" className="round" onClick={() => go((c) => c - 1)} disabled={a === 0} aria-label="Previous skill group">‹</button>
        <div className="dots">
          {SKILLS.map((g, i) => <button key={g.title} type="button" className={i === a ? "on" : ""} onClick={() => go(i)} aria-label={g.title} />)}
        </div>
        <button type="button" className="round" onClick={() => go((c) => c + 1)} disabled={a === n - 1} aria-label="Next skill group">›</button>
      </div>
    </section>
  );
}

/* ---------- EXPERIENCE ---------- */

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="wrap">
        <Reveal as="h2" className="h2">Where I learned<br /><span className="ink-grad">to build.</span></Reveal>

        <ol className="xp">
          {EXPERIENCES.map((x, i) => (
            <Reveal as="li" key={x.date} className="xp-item" delay={i * 60}>
              <time>{x.date}</time>
              <div className="xp-card">
                <h3>{x.role}</h3>
                <p className="xp-co">{x.company}</p>
                <ul>{x.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- PROJECTS (no hover animation) ---------- */

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <Reveal as="h2" className="h2">Things I've<br /><span className="ink-grad">built and shipped.</span></Reveal>
        <Reveal as="p" className="lede">
          Eight deployed applications: Python full-stack apps with LLM integrations, a CNN plant disease detector, and Java full-stack projects.
        </Reveal>

        <div className="pgrid">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} className="pwrap" delay={(i % 2) * 90}>
              <article className="pcard">
                <button type="button" className="pshot" onClick={() => openProject(p.id)} aria-label={`View ${p.title}`}>
                  {p.image ? <img src={p.image} alt={p.title} loading="lazy" /> : <span className="pshot-empty">{p.title}</span>}
                </button>
                <span className="pcat">{p.category}</span>

                <div className="pbody">
                  <h3>{p.title}</h3>
                  <p>{p.note}</p>
                  <ul className="chips">
                    {p.tech.slice(0, 7).map((t) => <li key={t}>{t}</li>)}
                    {p.tech.length > 7 && <li className="more">+{p.tech.length - 7} more</li>}
                  </ul>
                  <div className="pactions">
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn btn-ink">Open live demo</a>
                    <button type="button" className="btn btn-soft" onClick={() => openProject(p.id)}>Case study</button>
                  </div>
                </div>
              </article>
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
    <section id="education" className="section">
      <div className="wrap">
        <Reveal as="h2" className="h2">Where it<br /><span className="ink-grad">started.</span></Reveal>

        <Reveal className="edu-wrap">
          <div className="edu">
            <span className="edu-bg" aria-hidden="true">2026</span>
            <div className="edu-body">
              <p className="edu-tag">2023 – 2026</p>
              <h3>B.E. Computer Science &amp; Engineering</h3>
              <p className="edu-school">ACS College of Engineering, Bengaluru</p>
              <p>CGPA <strong>8.00 / 10</strong>. Preceded by a Diploma in Information Science at PVP Polytechnic, Bengaluru (2020 – 2023), completed with First Class with Distinction.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- CERTIFICATIONS: page-turning book ---------- */

function CertBook({ items }) {
  const [page, setPage] = useState(0);
  const n = items.length;
  const go = (v) => setPage(Math.max(0, Math.min(n, v)));

  const clickLeaf = (i) => {
    if (i === page) go(page + 1);
    else if (i === page - 1) go(page - 1);
  };

  return (
    <div className="book-wrap">
      <div
        className="book"
        tabIndex={0}
        role="group"
        aria-label="Certificates book. Use left and right arrow keys to turn pages."
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") go(page + 1);
          if (e.key === "ArrowLeft") go(page - 1);
        }}
      >
        <div className="paper left">
          <div>
            <h4>Certificates</h4>
            <p>Click the right page to turn it.</p>
          </div>
        </div>

        <div className="paper right">
          <div>
            <h4>That's all</h4>
            <button type="button" className="btn btn-soft" onClick={() => go(0)}>Back to first</button>
          </div>
        </div>

        {items.map((c, i) => (
          <div
            key={c.title}
            className={`leaf ${i < page ? "flipped" : ""}`}
            style={{ zIndex: i < page ? i + 1 : n - i + 1 }}
            onClick={() => clickLeaf(i)}
          >
            <div className="face front">
              <img src={c.image} alt={c.title} loading="lazy" onError={(e) => { e.currentTarget.style.display = "none"; }} />
            </div>
            <div className="face back">
              <span>{i + 1} of {n}</span>
              <h4>{c.title}</h4>
              <p>{c.sub}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="book-ctrl">
        <button type="button" className="round" onClick={() => go(page - 1)} disabled={page === 0} aria-label="Previous certificate">‹</button>
        <span>{Math.min(page + 1, n)} / {n}</span>
        <button type="button" className="round" onClick={() => go(page + 1)} disabled={page === n} aria-label="Next certificate">›</button>
      </div>
    </div>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="wrap">
        <Reveal as="h2" className="h2">Proof of<br /><span className="ink-grad">continuous learning.</span></Reveal>

        <div className="cert-grid">
          {CERTIFICATIONS.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <div className="cert">
                <h3>{c.title}</h3>
                <p className="cert-issuer">{c.issuer}</p>
                <p>{c.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <h3 className="sub">The certificates themselves</h3>
        <CertBook items={CERT_IMAGES} />
      </div>
    </section>
  );
}

/* ---------- CONTACT: auto-turning skill cube ---------- */

function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }, []);

  return (
    <section id="contact" className="section contact">
      <div className="wrap contact-grid">
        <div>
          <Reveal as="h2" className="contact-title">Let's build<br /><span className="ink-grad">something together.</span></Reveal>
          <Reveal as="p" className="lede">Open to Python Developer roles. A quick question or a project idea, my inbox is open.</Reveal>

          <Reveal className="contact-actions">
            <a href={`mailto:${EMAIL}`} className="btn btn-ink btn-lg magnetic">{EMAIL}</a>
            <button type="button" className="btn btn-soft btn-lg magnetic" onClick={copy} aria-live="polite">{copied ? "Copied to clipboard" : "Copy email"}</button>
          </Reveal>

          <Reveal className="contact-row">
            <span>Bengaluru, Karnataka, India</span>
            <span>+91 73376 34886</span>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a>
          </Reveal>
        </div>

        <div className="cube-stage" aria-hidden="true">
          <div className="cube-look">
            <div className="cube">
              {CUBE_FACES.map(([name, sub], i) => (
                <span key={name} className={`cf f${i}`}>{name}<small>{sub}</small></span>
              ))}
            </div>
          </div>
          <div className="cube-shadow" />
        </div>
      </div>

      <footer className="foot">
        <span>© 2026 Rahul S. All rights reserved.</span>
        <span>Built with React.js</span>
      </footer>
    </section>
  );
}
