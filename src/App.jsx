import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

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

const openProject = (id) => {
  window.location.hash = `#${id}`;
};

const goTo = (id) => {
  if (getHashRoute() === id) scrollToSection(id, true);
  else window.location.hash = `#${id}`;
};

/* ---------- DATA ---------- */

const EMAIL = "srinivasrahul838@gmail.com";
const GITHUB = "https://github.com/RAHUL2525252525";
const LINKEDIN = "https://www.linkedin.com/in/rahul-s-6460b1238";
const NAV = ["about", "skills", "experience", "projects", "education", "certifications", "contact"];
const ROLES = ["Python Developer", "FastAPI · Flask · Django REST", "LLM-powered app builder", "CNN model trainer"];

const SKILLS = [
  { title: "Languages & frontend", items: ["Python", "SQL", "JavaScript", "Java", "React.js", "HTML5", "CSS3", "Streamlit"] },
  { title: "Backend", items: ["FastAPI", "Flask", "Django REST Framework", "Spring Boot", "REST APIs", "JWT Authentication", "Async Programming"] },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "Firebase"] },
  { title: "API & testing", items: ["Postman", "Unit Testing"] },
  { title: "Data & BI", items: ["Pandas", "Power BI", "Tableau", "Data Cleaning"] },
  { title: "DevOps & cloud", items: ["Docker", "Git", "GitHub Actions (CI/CD)", "Render", "Vercel", "AWS (EC2, S3 – basic)"] },
  { title: "AI & ML", items: ["Gemini API", "Groq API", "OpenRouter API", "TensorFlow", "Keras", "CNN", "OpenCV"] },
];

const MARQUEE = ["Python", "FastAPI", "Flask", "Django REST", "React.js", "PostgreSQL", "MySQL", "Docker", "GitHub Actions", "JWT", "Gemini API", "Groq", "TensorFlow", "Spring Boot", "Firebase", "OpenCV"];

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

/* ---------- HOOKS ---------- */

function useTyped(words) {
  const [text, setText] = useState("");
  useEffect(() => {
    let i = 0, j = 0, del = false, t;
    const tick = () => {
      const w = words[i];
      j += del ? -1 : 1;
      setText(w.slice(0, j));
      let d = del ? 32 : 65;
      if (!del && j === w.length) { del = true; d = 1500; }
      else if (del && j === 0) { del = false; i = (i + 1) % words.length; d = 350; }
      t = setTimeout(tick, d);
    };
    tick();
    return () => clearTimeout(t);
  }, [words]);
  return text;
}

function Reveal({ children, as: Tag = "div", className = "", delay = 0, ...rest }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); obs.disconnect(); }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`rv ${seen ? "in" : ""} ${className}`} style={{ "--d": `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  );
}

/* ---------- GLOBAL EFFECTS: cursor glow, spotlight, tilt, magnetic, progress ---------- */

function Effects() {
  const glow = useRef(null);
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
    let tx = -500, ty = -500, x = -500, y = -500, raf, lastTilt = null, lastMag = null;

    const loop = () => {
      x += (tx - x) * 0.14;
      y += (ty - y) * 0.14;
      if (glow.current) glow.current.style.transform = `translate3d(${x}px,${y}px,0)`;
      raf = requestAnimationFrame(loop);
    };
    loop();

    const move = (e) => {
      tx = e.clientX;
      ty = e.clientY;

      const spot = e.target.closest?.(".spot");
      if (spot) {
        const r = spot.getBoundingClientRect();
        spot.style.setProperty("--mx", `${e.clientX - r.left}px`);
        spot.style.setProperty("--my", `${e.clientY - r.top}px`);
      }

      const tilt = e.target.closest?.(".tilt");
      if (lastTilt && lastTilt !== tilt) { lastTilt.style.setProperty("--rx", "0deg"); lastTilt.style.setProperty("--ry", "0deg"); }
      lastTilt = tilt;
      if (tilt) {
        const r = tilt.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        tilt.style.setProperty("--ry", `${(px * 10).toFixed(2)}deg`);
        tilt.style.setProperty("--rx", `${(-py * 10).toFixed(2)}deg`);
      }

      const mag = e.target.closest?.(".magnetic");
      if (lastMag && lastMag !== mag) lastMag.style.transform = "";
      lastMag = mag;
      if (mag) {
        const r = mag.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) * 0.25;
        const dy = (e.clientY - (r.top + r.height / 2)) * 0.35;
        mag.style.transform = `translate(${dx}px, ${dy}px)`;
      }
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div className="progress"><span ref={bar} /></div>
      <div className="cursor-glow" ref={glow} aria-hidden="true" />
    </>
  );
}

/* ---------- PARTICLE NETWORK ---------- */

function Particles() {
  const ref = useRef(null);

  useEffect(() => {
    const c = ref.current;
    const ctx = c.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, pts = [], raf, visible = true;
    const m = { x: -999, y: -999 };

    const init = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = c.clientWidth;
      h = c.clientHeight;
      c.width = w * dpr;
      c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.floor(Math.min(110, (w * h) / 13000));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.4 + 0.6,
      }));
    };

    const draw = () => {
      raf = requestAnimationFrame(draw);
      if (!visible) return;
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        const dx = p.x - m.x, dy = p.y - m.y, d = Math.hypot(dx, dy);
        if (d < 130 && d > 0) { p.x += (dx / d) * 1.1; p.y += (dy / d) * 1.1; }
      }
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 125) {
            ctx.strokeStyle = `rgba(139,124,255,${(1 - d / 125) * 0.35})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        const dm = Math.hypot(a.x - m.x, a.y - m.y);
        if (dm < 170) {
          ctx.strokeStyle = `rgba(34,211,238,${(1 - dm / 170) * 0.6})`;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(m.x, m.y); ctx.stroke();
        }
        ctx.fillStyle = "rgba(200,205,255,.8)";
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, 6.283); ctx.fill();
      }
    };

    const onMove = (e) => {
      const r = c.getBoundingClientRect();
      m.x = e.clientX - r.left;
      m.y = e.clientY - r.top;
    };
    const onLeave = () => { m.x = m.y = -999; };

    init();
    if (reduce) { visible = true; draw(); cancelAnimationFrame(raf); } else draw();

    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(c);
    window.addEventListener("resize", init);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", init);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} className="particles" aria-hidden="true" />;
}

/* ---------- COMMAND PALETTE (Ctrl/Cmd + K) ---------- */

function Palette({ open, setOpen }) {
  const [q, setQ] = useState("");
  const [idx, setIdx] = useState(0);

  const items = useMemo(() => [
    ...NAV.map((id) => ({ group: "Go to", label: id[0].toUpperCase() + id.slice(1), run: () => goTo(id) })),
    ...PROJECTS.map((p) => ({ group: "Projects", label: p.title, hint: p.category, run: () => openProject(p.id) })),
    { group: "Actions", label: "Copy email address", run: () => navigator.clipboard?.writeText(EMAIL) },
    { group: "Actions", label: "Open GitHub", run: () => window.open(GITHUB, "_blank", "noopener") },
    { group: "Actions", label: "Open LinkedIn", run: () => window.open(LINKEDIN, "_blank", "noopener") },
  ], []);

  const list = items.filter((i) => `${i.label} ${i.hint || ""} ${i.group}`.toLowerCase().includes(q.toLowerCase()));

  useEffect(() => { setIdx(0); }, [q, open]);
  useEffect(() => { if (!open) setQ(""); }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setOpen((v) => !v); return; }
      if (!open) return;
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowDown") { e.preventDefault(); setIdx((i) => Math.min(i + 1, list.length - 1)); }
      if (e.key === "ArrowUp") { e.preventDefault(); setIdx((i) => Math.max(i - 1, 0)); }
      if (e.key === "Enter" && list[idx]) { setOpen(false); list[idx].run(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, list, idx, setOpen]);

  if (!open) return null;

  return (
    <div className="palette-overlay" onClick={() => setOpen(false)}>
      <div className="palette" role="dialog" aria-modal="true" aria-label="Command palette" onClick={(e) => e.stopPropagation()}>
        <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Jump to a section, open a project…" aria-label="Search" />
        <ul>
          {list.length === 0 && <li className="palette-empty">Nothing matches “{q}”. Try “projects” or “GitHub”.</li>}
          {list.map((it, i) => (
            <li key={`${it.group}-${it.label}`}>
              <button type="button" className={i === idx ? "on" : ""} onMouseEnter={() => setIdx(i)} onClick={() => { setOpen(false); it.run(); }}>
                <span className="palette-group">{it.group}</span>
                <span className="palette-label">{it.label}</span>
                {it.hint && <span className="palette-hint">{it.hint}</span>}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
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
        <Marquee />
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
  const [palette, setPalette] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const click = (e, id) => { e.preventDefault(); setMenu(false); goTo(id); };

  return (
    <>
      <header className="nav glass">
        <a href="#" className="nav-brand" aria-label="Go to top" onClick={(e) => { e.preventDefault(); setMenu(false); if (window.location.hash) window.location.hash = ""; else window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <span className="nav-mark">R</span>
          <span>Rahul S.</span>
        </a>

        <nav id="nav-links" className={`nav-links ${menu ? "open" : ""}`}>
          {NAV.map((id) => (
            <a key={id} href={`#${id}`} className={active === id ? "on" : ""} onClick={(e) => click(e, id)}>{id}</a>
          ))}
        </nav>

        <button type="button" className="nav-search" onClick={() => setPalette(true)} aria-label="Open command palette">
          Search <kbd>Ctrl K</kbd>
        </button>

        <button type="button" className="nav-toggle" onClick={() => setMenu((v) => !v)} aria-expanded={menu} aria-controls="nav-links">
          {menu ? "Close" : "Menu"}
        </button>
      </header>
      <Palette open={palette} setOpen={setPalette} />
    </>
  );
}

/* ---------- HERO ---------- */

function Hero() {
  const typed = useTyped(ROLES);

  return (
    <section className="hero">
      <div className="aurora" aria-hidden="true"><i /><i /><i /></div>
      <Particles />

      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="pill"><i /> Open to Python Developer roles · Bengaluru</p>

          <h1 className="hero-name">
            <span>Hi, I'm</span>
            <span className="grad">Rahul S.</span>
          </h1>

          <p className="hero-role">
            <span>{typed}</span><b className="caret" />
          </p>

          <p className="hero-lede">
            B.E. Computer Science graduate (2026) who builds and deploys full-stack apps with <strong>FastAPI, Flask, Django REST Framework and React.js</strong>,
            with JWT auth, Docker, GitHub Actions CI/CD and LLM APIs (Gemini, Groq, OpenRouter) wired into working products. I also train CNNs and have
            hands-on Java experience from BankSphere and ShopSphere.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-glow magnetic" onClick={(e) => { e.preventDefault(); goTo("projects"); }}>View live projects</a>
            <a href="#contact" className="btn btn-glass magnetic" onClick={(e) => { e.preventDefault(); goTo("contact"); }}>Contact me</a>
          </div>

          <ul className="hero-stats">
            <li><strong>8</strong> live apps</li>
            <li><strong>90%+</strong> CNN accuracy</li>
            <li><strong>3</strong> internships</li>
          </ul>
        </div>

        <div className="hero-visual tilt">
          <div className="ring"><div className="ring-inner"><img src="/rahul-profile.jpg" alt="Rahul S" /></div></div>
          <span className="float f1 glass">FastAPI</span>
          <span className="float f2 glass">Docker</span>
          <span className="float f3 glass">Gemini API</span>
          <span className="float f4 glass">PostgreSQL</span>
        </div>
      </div>

      <div className="scroll-cue" aria-hidden="true"><span /></div>
    </section>
  );
}

function Marquee() {
  const row = [...MARQUEE, ...MARQUEE];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((m, i) => <span key={i}>{m}</span>)}
      </div>
    </div>
  );
}

/* ---------- ABOUT (bento) ---------- */

function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <Reveal as="h2" className="h2">Engineer first.<br /><span className="grad">Builder always.</span></Reveal>

        <div className="bento">
          <Reveal className="bento-card b-wide spot">
            <p className="b-lead">I've built and deployed full-stack applications end to end, from the REST API to the container it runs in.</p>
            <p>
              My work spans FastAPI, Flask and Django REST Framework APIs, React.js frontends, PostgreSQL and MySQL, JWT authentication and Docker.
              I automate deployments with GitHub Actions and host on Render and Vercel.
            </p>
          </Reveal>

          <Reveal className="bento-card b-stat spot" delay={80}>
            <strong className="grad">8</strong><span>live deployed applications</span>
          </Reveal>

          <Reveal className="bento-card b-stat spot" delay={140}>
            <strong className="grad">90%+</strong><span>CNN accuracy on my major project</span>
          </Reveal>

          <Reveal className="bento-card b-tall spot" delay={60}>
            <h3>AI internship</h3>
            <p>
              At MR. TechLab LLP (AppMind AI) I shipped three web apps (AI Exam Companion, Life Decision Assistant and Digital Analytics Dashboard)
              with Flask, Firebase and Google Authentication, integrating Gemini, Groq and OpenRouter.
            </p>
          </Reveal>

          <Reveal className="bento-card b-wide2 spot" delay={100}>
            <h3>Major project: Plant Disease Detection</h3>
            <p>
              I trained a CNN on a 1.5 GB Kaggle crop-leaf dataset to detect plant diseases with over 90% accuracy, and built a Streamlit interface for live predictions.
              Two AI &amp; Data Science internship phases at Knowx Innovations gave me the base in Python, SQL, OpenCV, Keras and TensorFlow.
            </p>
          </Reveal>

          <Reveal className="bento-card b-stat spot" delay={160}>
            <strong className="grad">6</strong><span>Python &amp; ML applications</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- SKILLS (tabs) ---------- */

function Skills() {
  const [tab, setTab] = useState(0);
  const group = SKILLS[tab];

  return (
    <section id="skills" className="section">
      <div className="wrap">
        <Reveal as="h2" className="h2">Tools I use to<br /><span className="grad">ship software.</span></Reveal>

        <Reveal className="skills glass spot">
          <div className="skill-tabs" role="tablist" aria-label="Skill groups">
            {SKILLS.map((g, i) => (
              <button key={g.title} type="button" role="tab" aria-selected={tab === i} className={tab === i ? "on" : ""} onClick={() => setTab(i)}>
                {g.title}
              </button>
            ))}
          </div>

          <div className="skill-panel" key={group.title} role="tabpanel">
            {group.items.map((s, i) => (
              <span key={s} style={{ "--i": i }}>{s}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- EXPERIENCE ---------- */

function Experience() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const onScroll = () => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const p = (window.innerHeight * 0.6 - r.top) / r.height;
      el.style.setProperty("--p", Math.max(0, Math.min(1, p)).toFixed(3));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="experience" className="section">
      <div className="wrap">
        <Reveal as="h2" className="h2">Where I learned<br /><span className="grad">to build.</span></Reveal>

        <ol className="timeline" ref={ref}>
          <span className="timeline-line" aria-hidden="true" />
          {EXPERIENCES.map((x) => (
            <Reveal as="li" key={x.date} className="tl-item">
              <i className="tl-dot" />
              <div className="tl-card glass spot">
                <time>{x.date}</time>
                <h3>{x.role}</h3>
                <p className="tl-company">{x.company}</p>
                <ul>{x.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- PROJECTS (showcase) ---------- */

function Projects() {
  const [i, setI] = useState(0);
  const p = PROJECTS[i];

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <Reveal as="h2" className="h2">Things I've<br /><span className="grad">built and shipped.</span></Reveal>
        <Reveal as="p" className="lede">Eight deployed applications, from Python full-stack apps with LLM integrations to a CNN plant disease detector and Java full-stack projects. Pick one to preview it.</Reveal>

        <div className="showcase">
          <ul className="sc-list" role="tablist" aria-label="Projects">
            {PROJECTS.map((x, n) => (
              <li key={x.id}>
                <button type="button" role="tab" aria-selected={n === i} className={n === i ? "on" : ""} onClick={() => setI(n)} onMouseEnter={() => window.matchMedia("(hover: hover)").matches && setI(n)}>
                  <span className="sc-title">{x.title}</span>
                  <span className="sc-cat">{x.category}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="sc-stage" key={p.id}>
            <div className="browser tilt">
              <div className="browser-bar">
                <span /><span /><span />
                <em>{p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}</em>
              </div>
              <button type="button" className="browser-shot" onClick={() => openProject(p.id)} aria-label={`View ${p.title}`}>
                {p.image ? <img src={p.image} alt={p.title} /> : <span className="browser-empty">{p.title}</span>}
              </button>
            </div>

            <div className="sc-info">
              <h3>{p.title}</h3>
              <p>{p.note}</p>
              <ul className="chips">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
              <div className="sc-actions">
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn btn-glow magnetic">Open live demo</a>
                <button type="button" className="btn btn-glass magnetic" onClick={() => openProject(p.id)}>Read the case study</button>
              </div>
            </div>
          </div>
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
        <Reveal as="h2" className="h2">Where it<br /><span className="grad">started.</span></Reveal>

        <Reveal className="edu glass spot">
          <p className="edu-year grad">2023 – 2026</p>
          <div>
            <h3>B.E. Computer Science &amp; Engineering</h3>
            <p className="edu-school">ACS College of Engineering, Bengaluru</p>
            <p>CGPA <strong>8.00 / 10</strong>. Preceded by a Diploma in Information Science at PVP Polytechnic, Bengaluru (2020 – 2023), completed with First Class with Distinction.</p>
          </div>
        </Reveal>
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
    <section id="certifications" className="section">
      <div className="wrap">
        <Reveal as="h2" className="h2">Proof of<br /><span className="grad">continuous learning.</span></Reveal>

        <div className="cert-grid">
          {CERTIFICATIONS.map((c, n) => (
            <Reveal key={c.title} className="cert glass spot" delay={n * 80}>
              <h3>{c.title}</h3>
              <p className="cert-issuer">{c.issuer}</p>
              <p>{c.description}</p>
            </Reveal>
          ))}
        </div>

        <h3 className="sub">The certificates themselves</h3>
        <div className="thumbs">
          {CERT_IMAGES.map((c, n) => (
            <button key={c.title} type="button" className="thumb glass tilt" onClick={() => setZoom(n)}>
              <img src={c.image} alt={c.title} loading="lazy" onError={(e) => { e.currentTarget.style.display = "none"; }} />
              <span><strong>{c.title}</strong>{c.sub}</span>
            </button>
          ))}
        </div>
      </div>

      {zoom !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Certificate viewer" onClick={() => setZoom(null)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img src={CERT_IMAGES[zoom].image} alt={CERT_IMAGES[zoom].title} />
            <p><strong>{CERT_IMAGES[zoom].title}</strong> · {CERT_IMAGES[zoom].sub}</p>
            <div className="lightbox-bar">
              <button type="button" className="btn btn-glass" disabled={zoom === 0} onClick={() => setZoom(zoom - 1)}>Previous</button>
              <span>{zoom + 1} of {CERT_IMAGES.length}</span>
              <button type="button" className="btn btn-glass" disabled={zoom === CERT_IMAGES.length - 1} onClick={() => setZoom(zoom + 1)}>Next</button>
              <button type="button" className="btn btn-glow" onClick={() => setZoom(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ---------- CONTACT ---------- */

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
      <div className="aurora aurora-soft" aria-hidden="true"><i /><i /><i /></div>

      <div className="wrap contact-inner">
        <Reveal as="h2" className="contact-title">Let's build<br /><span className="grad">something together.</span></Reveal>
        <Reveal as="p" className="lede">Open to Python Developer roles. A quick question or a project idea, my inbox is open.</Reveal>

        <Reveal className="contact-actions">
          <a href={`mailto:${EMAIL}`} className="btn btn-glow btn-lg magnetic">{EMAIL}</a>
          <button type="button" className="btn btn-glass btn-lg magnetic" onClick={copy} aria-live="polite">{copied ? "Copied to clipboard" : "Copy email"}</button>
        </Reveal>

        <Reveal className="contact-row">
          <span>Bengaluru, Karnataka, India</span>
          <span>+91 73376 34886</span>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a>
        </Reveal>
      </div>

      <footer className="foot">
        <span>© 2026 Rahul S. All rights reserved.</span>
        <span>Built with React.js. Press <kbd>Ctrl K</kbd> to jump anywhere.</span>
      </footer>
    </section>
  );
}
