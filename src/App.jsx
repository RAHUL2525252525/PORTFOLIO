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
const RESUME = "/Rahul-S-Resume.pdf"; // put your resume PDF in the /public folder with this name
const NAV = ["about", "skills", "experience", "projects", "education", "certifications", "contact"];

const GLANCE = [
  ["Looking for", "Python Developer roles"],
  ["Based in", "Bengaluru, India"],
  ["Education", "B.E. Computer Science, 2026 · CGPA 8.00"],
  ["Experience", "3 internships in AI & Data Science"],
  ["Core stack", "Python, FastAPI, Django, React, PostgreSQL"],
  ["Proof of work", "8 live deployed applications"],
];

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

/* recruiters can filter projects by what they care about */
const FILTERS = [
  ["All", () => true],
  ["Python", (p) => p.tech.includes("Python")],
  ["Java", (p) => p.tech.includes("Java")],
  ["AI & ML", (p) => p.tech.some((t) => /Gemini|Groq|OpenRouter|CNN/.test(t))],
  ["Docker", (p) => p.tech.includes("Docker")],
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
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`rv ${seen ? "in" : ""} ${className}`} style={{ "--d": `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  );
}

/* ---------- SCROLL PROGRESS ---------- */

function Progress() {
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
  return <div className="progress"><span ref={bar} /></div>;
}

/* ---------- APP ---------- */

export default function App() {
  const route = useHashRoute();
  const ProjectPage = ROUTES[route];
  if (ProjectPage) return <ProjectPage />;

  return (
    <div className="site">
      <Progress />
      <Nav />
      <main>
        <Hero />
        <Glance />
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

      <a href="#contact" className="nav-cta" onClick={(e) => { e.preventDefault(); setMenu(false); goTo("contact"); }}>Hire me</a>

      <button type="button" className="nav-toggle" onClick={() => setMenu((v) => !v)} aria-expanded={menu} aria-controls="nav-links">
        {menu ? "Close" : "Menu"}
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
          <p className="status"><i /> Open to Python Developer roles · Bengaluru</p>

          <h1>Python developer who builds and ships full-stack apps.</h1>

          <p className="hero-lede">
            I'm Rahul, a B.E. Computer Science graduate (2026). I build and deploy apps with <strong>FastAPI, Flask, Django REST Framework and React.js</strong>,
            secured with JWT, packaged in Docker, shipped through GitHub Actions, and connected to LLM APIs like Gemini, Groq and OpenRouter.
            I also train CNNs, and I've written Java in BankSphere and ShopSphere.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-ink" onClick={(e) => { e.preventDefault(); goTo("projects"); }}>View live projects</a>
            <a href={RESUME} download className="btn btn-soft">Download resume</a>
          </div>

          <div className="hero-links">
            <a href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={`mailto:${EMAIL}`}>Email</a>
          </div>
        </div>

        <div className="profile">
          <div className="profile-frame">
            <img src="/rahul-profile.jpg" alt="Rahul S" />
          </div>
          <div className="pbadge pb1"><div><strong>8</strong>live apps</div></div>
          <div className="pbadge pb2"><div><strong>90%+</strong>CNN accuracy</div></div>
          <div className="pbadge pb3"><i /> Available for hire</div>
        </div>
      </div>
    </section>
  );
}

/* ---------- RECRUITER QUICK VIEW ---------- */

function Glance() {
  return (
    <section className="snap">
      <div className="wrap">
        <Reveal>
          <p className="snap-head">Quick view for recruiters <span>Everything important in ten seconds</span></p>
          <ul className="snap-card">
            {GLANCE.map(([k, v]) => (
              <li key={k}><span>{k}</span><strong>{v}</strong></li>
            ))}
          </ul>
        </Reveal>
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
  const stats = [
    ["8", "live deployed applications"],
    ["90%+", "CNN accuracy on my major project"],
    ["6", "Python & ML applications"],
    ["3", "internship experiences"],
  ];
  return (
    <section id="about" className="section">
      <div className="wrap">
        <ScrollText text={ABOUT_TEXT} />

        <div className="about-cards">
          {stats.map(([n, l], i) => (
            <Reveal key={l} delay={i * 90}>
              <div className="depth">
                <strong className="big-n">{n}</strong>
                <span className="depth-l">{l}</span>
              </div>
            </Reveal>
          ))}
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

/* ---------- SKILLS ---------- */

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <Reveal as="h2" className="h2">Tools I use to<br /><span className="ink-grad">ship software.</span></Reveal>

        <div className="skill-grid">
          {SKILLS.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 80}>
              <article className="skill-card">
                <h3>{g.title}<small>{g.items.length} skills</small></h3>
                <ul>{g.items.map((s) => <li key={s}>{s}</li>)}</ul>
              </article>
            </Reveal>
          ))}
        </div>
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

/* ---------- PROJECTS (filterable, no hover animation) ---------- */

function Projects() {
  const [filter, setFilter] = useState(0);
  const shown = PROJECTS.filter(FILTERS[filter][1]);

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <Reveal as="h2" className="h2">Things I've<br /><span className="ink-grad">built and shipped.</span></Reveal>
        <Reveal as="p" className="lede">
          Eight deployed applications. Filter by the technology you care about, open the live demo, or read the case study.
        </Reveal>

        <div className="filters" role="group" aria-label="Filter projects">
          {FILTERS.map(([name], i) => (
            <button key={name} type="button" className={i === filter ? "on" : ""} onClick={() => setFilter(i)}>{name}</button>
          ))}
          <span className="count">{shown.length} of {PROJECTS.length} projects</span>
        </div>

        <div className="pgrid">
          {shown.map((p) => (
            <Reveal key={p.id} className="pwrap">
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

/* ---------- CERTIFICATIONS: list + live preview ---------- */

function CertViewer({ items }) {
  const [sel, setSel] = useState(0);
  const c = items[sel];

  return (
    <div className="cview">
      <div className="clist" role="tablist" aria-label="Certificates">
        {items.map((it, i) => (
          <button key={it.title} type="button" role="tab" aria-selected={i === sel} className={i === sel ? "on" : ""} onClick={() => setSel(i)}>
            <strong>{it.title}</strong>
            <span>{it.sub}</span>
          </button>
        ))}
      </div>

      <div className="cstage">
        <div className="cframe">
          <img key={c.image} src={c.image} alt={c.title} onError={(e) => { e.currentTarget.style.display = "none"; }} />
        </div>
        <div className="cbar">
          <span><strong>{c.title}</strong></span>
          <a href={c.image} target="_blank" rel="noopener noreferrer" className="btn btn-soft">Open full size</a>
        </div>
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

        <h3 className="sub">View the certificates</h3>
        <CertViewer items={CERT_IMAGES} />
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
    <section id="contact" className="contact">
      <div className="wrap contact-grid">
        <div>
          <Reveal as="h2" className="contact-title">Let's build<br /><span className="ink-grad">something together.</span></Reveal>
          <Reveal as="p" className="lede">Open to Python Developer roles. A quick question or a project idea, my inbox is open.</Reveal>

          <Reveal className="contact-actions">
            <a href={`mailto:${EMAIL}`} className="btn btn-ink btn-lg">{EMAIL}</a>
            <button type="button" className="btn btn-soft btn-lg" onClick={copy} aria-live="polite">{copied ? "Copied to clipboard" : "Copy email"}</button>
          </Reveal>

          <Reveal className="contact-row">
            <span>Bengaluru, Karnataka, India</span>
            <span>+91 73376 34886</span>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={RESUME} download>Resume</a>
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
