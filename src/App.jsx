import { useEffect, useRef, useState } from 'react'
import {
  Github, Linkedin, Mail, Phone, ExternalLink, ArrowUpRight, Download,
} from 'lucide-react'

/* ------------------------------------------------------------------ */
/* content                                                             */
/* ------------------------------------------------------------------ */

const ROLES = ['Fullstack Developer', 'Frontend Developer', 'React Developer', 'Java Developer']

const NAV = [
  { id: 'about', label: 'Overview' },
  { id: 'work', label: 'Work' },
  { id: 'craft', label: 'Stack' },
  { id: 'journey', label: 'History' },
  { id: 'resume', label: 'Sheet' },
  { id: 'contact', label: 'Contact' },
]

const STATS = [
  { value: 2, suffix: '', label: 'Internships completed' },
  { value: 3, suffix: '', label: 'Products shipped' },
  { value: 2026, suffix: '', label: 'B.E. Computer Science' },
]

const PROJECTS = [
  {
    id: 'A',
    title: 'ShopSphere',
    tag: 'E-commerce platform',
    desc: 'A full-stack storefront — browsing, search, cart, wishlist, and order tracking on the front end, with an admin console behind it for managing products, users, and inventory.',
    tech: ['React.js', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'REST APIs'],
    note: 'The backend sleeps on Render\u2019s free tier. Wake it first — it takes 30\u201360s — then open the live site.',
    links: [
      { label: 'Backend', href: 'https://shopsphere-backend-5umn.onrender.com' },
      { label: 'Live site', href: 'https://shopsphere-8m8f.vercel.app/' },
    ],
    featured: true,
  },
  {
    id: 'B',
    title: 'AI Exam Companion',
    tag: 'Exam prep tool',
    desc: 'Mock tests with instant scoring, backed by a Groq-powered chatbot that explains the concept behind a wrong answer instead of just marking it wrong.',
    tech: ['JavaScript (ES6+)', 'Firebase Auth', 'Groq API', 'HTML5', 'CSS3'],
    links: [{ label: 'Live site', href: 'https://ai-exam-companion-ghzc.onrender.com' }],
  },
  {
    id: 'C',
    title: 'Portfolio, v1',
    tag: 'Personal site',
    desc: 'The previous version of this site — reusable React components for projects, skills, and contact, laid out with Flexbox and Grid to hold up on any screen.',
    tech: ['React.js', 'Vite', 'JavaScript (ES6+)', 'CSS3'],
  },
]

const SKILL_GROUPS = [
  { label: 'Interface', items: ['React.js', 'JSX', 'HTML5', 'CSS3', 'Flexbox', 'CSS Grid', 'Responsive Design'] },
  { label: 'Language', items: ['JavaScript (ES6+)', 'Java', 'SQL'] },
  { label: 'Server', items: ['Spring Boot', 'Spring Data JPA', 'REST APIs'] },
  { label: 'Toolbox', items: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Vite', 'Vercel', 'Render'] },
  { label: 'Foundations', items: ['OOP', 'Data Structures & Algorithms', 'UI/UX Principles', 'RBAC'] },
]

// newest first — reads naturally as REV B (latest) then REV A
const EXPERIENCE = [
  {
    rev: 'B',
    role: 'Web Development Intern',
    company: 'MR Tech Lab',
    time: '2026',
    place: 'Bengaluru',
    points: [
      'Built responsive, accessible pages with HTML5, CSS3 (Flexbox/Grid) and modern JavaScript',
      'Wired React.js up to REST APIs to fetch and render live data',
      'Shipped frontend apps to Vercel and Render, checked across browsers',
    ],
  },
  {
    rev: 'A',
    role: 'AI/ML & Python Intern',
    company: 'KNOWX Innovations',
    time: '2023',
    place: 'Bengaluru',
    points: [
      'Built Python applications covering data preprocessing and basic model testing',
      'Worked alongside the dev team on code maintenance and support',
    ],
  },
]

const EDUCATION = [
  { school: 'Dr. ACS College of Engineering', degree: 'B.E., Computer Science and Engineering', time: '2023 – 2026 · Bengaluru' },
  { school: 'PVP Polytechnic', degree: 'Diploma, Information Science and Engineering', time: '2020 – 2023 · Bengaluru' },
]

const CERTS = [
  'Introduction to Java — Infosys Springboard',
  'Cloud Computing — Infosys Springboard',
  'Software Engineering — Infosys Springboard',
  'AI and Green Skills — Edunet Foundation, Skills4Future',
]

/* ------------------------------------------------------------------ */
/* hooks                                                               */
/* ------------------------------------------------------------------ */

function useTypewriter(words, typeSpeed = 60, deleteSpeed = 32, pause = 1300) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout
    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
    } else {
      timeout = setTimeout(() => {
        setText((t) => (deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)))
      }, deleting ? deleteSpeed : typeSpeed)
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause])

  return text
}

function useReveal() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, inView]
}

function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const [ref, inView] = useReveal()
  return (
    <Tag ref={ref} className={`reveal ${inView ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  )
}

function useActiveSection() {
  const [active, setActive] = useState('about')
  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean)
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) }) },
      { rootMargin: '-40% 0px -50% 0px' }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])
  return active
}

// Counts up once the element scrolls into view.
function useCountUp(target, duration = 1100) {
  const [ref, inView] = useReveal()
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    let raf
    const start = performance.now()
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target, duration])
  return [ref, n, inView]
}

/* ------------------------------------------------------------------ */
/* small components                                                    */
/* ------------------------------------------------------------------ */

// Section header styled as a drafted sheet label with a dimension-line rule.
function SheetHeader({ index, eyebrow, title }) {
  return (
    <Reveal className="sheet-head">
      <p className="sheet-index">{index}</p>
      <h2 className="sheet-title">{title}</h2>
      <p className="sheet-eyebrow">{eyebrow}</p>
      <div className="dim-line"><span className="dim-tick" /><span className="dim-tick" /></div>
    </Reveal>
  )
}

function StatBlock({ stat, index }) {
  const [ref, n, inView] = useCountUp(stat.value)
  return (
    <div ref={ref} className={`stat-block reveal ${inView ? 'in' : ''}`} style={{ transitionDelay: `${index * 80}ms` }}>
      <span className="stat-value">{n}{stat.suffix}</span>
      <span className="stat-label">{stat.label}</span>
    </div>
  )
}

function ProjectSheet({ project, index }) {
  return (
    <Reveal delay={index * 90} className={`sheet-card ${project.featured ? 'marked' : ''}`}>
      <div className="sheet-card-head">
        <span className="sheet-tab">SHEET {project.id}</span>
        {project.featured && <span className="sheet-flag">Primary build</span>}
      </div>
      <h3 className="sheet-card-title">{project.title}</h3>
      <p className="sheet-card-tag">{project.tag}</p>
      <p className="sheet-card-desc">{project.desc}</p>
      <dl className="spec-list">
        <dt>Stack</dt>
        <dd>
          {project.tech.map((t, i) => (
            <span key={t}>{t}{i < project.tech.length - 1 ? ' · ' : ''}</span>
          ))}
        </dd>
      </dl>
      {project.note && <p className="sheet-card-note">Note — {project.note}</p>}
      {project.links && (
        <div className="sheet-links">
          {project.links.map((l) => (
            <a className="sheet-link" href={l.href} target="_blank" rel="noopener noreferrer" key={l.label}>
              {l.label} <ArrowUpRight size={13} />
            </a>
          ))}
        </div>
      )}
    </Reveal>
  )
}

// Cursor-following crosshair, confined to the hero.
function Crosshair() {
  const vRef = useRef(null)
  const hRef = useRef(null)
  const wrapRef = useRef(null)

  const onMove = (e) => {
    const wrap = wrapRef.current
    if (!wrap) return
    const rect = wrap.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    if (vRef.current) vRef.current.style.transform = `translateX(${x}px)`
    if (hRef.current) hRef.current.style.transform = `translateY(${y}px)`
  }

  return (
    <div className="crosshair-wrap" ref={wrapRef} onMouseMove={onMove}>
      <div className="crosshair-v" ref={vRef} />
      <div className="crosshair-h" ref={hRef} />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* app                                                                  */
/* ------------------------------------------------------------------ */

export default function App() {
  const typed = useTypewriter(ROLES)
  const active = useActiveSection()

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <div className="bp-root">
      <style>{CSS}</style>

      <nav className="site-nav">
        <div className="site-nav-inner wrap">
          <button className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
            RS<span className="logo-tag">/01</span>
          </button>
          <div className="nav-links">
            {NAV.map((n) => (
              <button key={n.id} className={active === n.id ? 'active' : ''} onClick={() => scrollTo(n.id)}>
                {n.label}
              </button>
            ))}
          </div>
          <a className="hire-btn" href="mailto:Srinivasrahul838@gmail.com">Get in touch</a>
        </div>
      </nav>

      <header id="about" className="hero">
        <Crosshair />
        <div className="hero-inner wrap">
          <div className="hero-left">
            <p className="eyebrow">Status — Available for hire</p>
            <h1 className="hero-name">Rahul S</h1>
            <p className="hero-role">
              <span className="role-arrow">→</span> {typed}<span className="cursor" />
            </p>
            <p className="hero-desc">
              Final-year Computer Science student who&rsquo;d rather ship something real
              than just study the theory behind it. I build fast React interfaces and back
              them with real Spring Boot APIs — the fullstack loop, front to back.
            </p>
            <div className="hero-cta">
              <button className="btn primary" onClick={() => scrollTo('work')}>View project sheets</button>
              <a className="btn ghost" href="/Rahul_S_FullStack_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download size={15} /> Résumé
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="title-block">
              <div className="tb-row tb-head">
                <span>Rahul S — Portfolio</span>
              </div>
              <div className="tb-grid">
                <div className="tb-cell"><span className="tb-k">Dwg No.</span><span className="tb-v">2026&#8209;RS</span></div>
                <div className="tb-cell"><span className="tb-k">Scale</span><span className="tb-v">1:1</span></div>
                <div className="tb-cell"><span className="tb-k">Location</span><span className="tb-v">Bengaluru, IN</span></div>
                <div className="tb-cell"><span className="tb-k">Status</span><span className="tb-v tb-live"><i /> Active</span></div>
                <div className="tb-cell tb-wide"><span className="tb-k">Role</span><span className="tb-v">Fullstack Developer</span></div>
                <div className="tb-cell tb-wide"><span className="tb-k">Rev</span><span className="tb-v">B — {new Date().getFullYear()}</span></div>
              </div>
              <div className="tb-links">
                <a href="mailto:Srinivasrahul838@gmail.com" aria-label="Email"><Mail size={15} /></a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={15} /></a>
                <a href="https://www.linkedin.com/in/rahul-s-6460b1238" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={15} /></a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="wrap stats-row">
        {STATS.map((s, i) => <StatBlock stat={s} index={i} key={s.label} />)}
      </section>

      <section className="wrap section">
        <SheetHeader index="01" eyebrow="Overview" title="The short version" />
        <Reveal delay={80}>
          <p className="body-text">
            I spend most of my time in React, but I&rsquo;m just as comfortable wiring up a
            Spring Boot API or shaping a MySQL schema. I like the fullstack loop —
            designing the interface, building the endpoint it calls, and watching the data
            move between the two — more than any single layer on its own.
          </p>
        </Reveal>
      </section>

      <section id="work" className="wrap section">
        <SheetHeader index="02" eyebrow="Project sheets" title="Things I&rsquo;ve shipped" />
        <div className="sheet-grid">
          {PROJECTS.map((p, i) => <ProjectSheet project={p} index={i} key={p.id} />)}
        </div>
      </section>

      <section id="craft" className="wrap section">
        <SheetHeader index="03" eyebrow="Bill of materials" title="What I reach for" />
        <div className="bom-table">
          {SKILL_GROUPS.map((g, i) => (
            <Reveal delay={i * 60} key={g.label} className="bom-row">
              <span className="bom-label">{g.label}</span>
              <span className="bom-items">
                {g.items.map((it) => <span className="bom-chip" key={it}>{it}</span>)}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="journey" className="wrap section">
        <SheetHeader index="04" eyebrow="Revision history" title="How I got here" />
        <div className="rev-log">
          {EXPERIENCE.map((e, i) => (
            <Reveal delay={i * 90} key={e.company} className="rev-row">
              <span className="rev-tag">REV {e.rev}</span>
              <div className="rev-body">
                <div className="rev-head">
                  <h3>{e.role}</h3>
                  <span className="rev-time">{e.time}</span>
                </div>
                <p className="rev-meta">{e.company} · {e.place}</p>
                <ul>{e.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="two-col">
          <Reveal>
            <p className="mini-label">Education</p>
            <ul className="plain-list">
              {EDUCATION.map((ed) => (
                <li key={ed.school}>
                  <div className="plain-title">{ed.school}</div>
                  <div className="plain-sub">{ed.degree}</div>
                  <div className="plain-meta">{ed.time}</div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={90}>
            <p className="mini-label">Certifications</p>
            <ul className="plain-list">
              {CERTS.map((c) => <li key={c} className="cert-row">{c}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      <section id="resume" className="wrap section">
        <Reveal>
          <div className="resume-panel">
            <div>
              <p className="mini-label">05 — Sheet request</p>
              <h2 className="sheet-title small">Want the paper trail?</h2>
              <p className="resume-sub">Everything above, in one PDF you can forward to a hiring manager.</p>
            </div>
            <a className="btn primary large" href="/Rahul_S_FullStack_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} /> View résumé
            </a>
          </div>
        </Reveal>
      </section>

      <section id="contact" className="wrap section contact-section">
        <Reveal>
          <p className="mini-label center">06 — Contact</p>
          <h2 className="contact-title">Let&rsquo;s build<br />something.</h2>
          <p className="contact-sub">Open to full-stack and frontend roles — based in Bengaluru, happy to work remote.</p>
          <div className="contact-links">
            <a className="contact-link" href="mailto:Srinivasrahul838@gmail.com"><Mail size={15} /> Srinivasrahul838@gmail.com</a>
            <a className="contact-link" href="tel:+917337634886"><Phone size={15} /> 7337634886</a>
            <a className="contact-link" href="https://www.linkedin.com/in/rahul-s-6460b1238" target="_blank" rel="noopener noreferrer"><Linkedin size={15} /> LinkedIn</a>
            <a className="contact-link" href="https://github.com/" target="_blank" rel="noopener noreferrer"><Github size={15} /> GitHub</a>
          </div>
        </Reveal>
      </section>

      <footer className="title-strip">
        <span>Drawn by — Rahul S</span>
        <span>Sheet 1 of 1</span>
        <span>Scale — NTS</span>
        <span>Rev — {new Date().getFullYear()}</span>
      </footer>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* styles — light blueprint / technical drafting theme                 */
/* ------------------------------------------------------------------ */

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap');

.bp-root {
  --paper: #eef1f6;
  --paper-2: #e3e8f1;
  --card: #f7f9fc;
  --ink: #12151c;
  --ink-dim: #4b5566;
  --ink-faint: #8892a6;
  --blue: #2547ff;
  --blue-soft: rgba(37,71,255,0.08);
  --blue-dim: rgba(37,71,255,0.35);
  --red: #d63a2e;
  --line: rgba(18,21,28,0.14);
  --line-strong: rgba(18,21,28,0.4);

  --display: 'IBM Plex Mono', ui-monospace, monospace;
  --sans: 'IBM Plex Sans', system-ui, -apple-system, sans-serif;

  background: var(--paper);
  color: var(--ink);
  font-family: var(--sans);
  min-height: 100vh;
  position: relative;
  background-image:
    linear-gradient(var(--line) 1px, transparent 1px),
    linear-gradient(90deg, var(--line) 1px, transparent 1px);
  background-size: 44px 44px;
}

.bp-root * { box-sizing: border-box; }
.bp-root a { color: inherit; }
.bp-root button { font-family: inherit; cursor: pointer; }
.bp-root :focus-visible { outline: 2px solid var(--blue); outline-offset: 3px; }
.bp-root .wrap { max-width: 1040px; margin: 0 auto; padding: 0 1.5rem; position: relative; }

@media (prefers-reduced-motion: reduce) {
  .bp-root * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}

/* nav */
.site-nav { position: sticky; top: 0; z-index: 50; background: rgba(238,241,246,0.85); backdrop-filter: blur(10px); border-bottom: 1px solid var(--line); }
.site-nav-inner { display: flex; align-items: center; justify-content: space-between; height: 64px; gap: 1.5rem; }
.logo { background: none; border: none; padding: 0; font-family: var(--display); font-weight: 700; font-size: 1rem; color: var(--ink); letter-spacing: 0.02em; }
.logo-tag { color: var(--blue); font-weight: 500; }
.nav-links { display: flex; align-items: center; gap: 1.8rem; overflow-x: auto; }
.nav-links button { background: none; border: none; font-family: var(--display); font-size: 0.78rem; font-weight: 500; letter-spacing: 0.03em; text-transform: uppercase; color: var(--ink-faint); white-space: nowrap; padding: 0.4rem 0; transition: color 0.15s; }
.nav-links button:hover { color: var(--ink); }
.nav-links button.active { color: var(--blue); }
.hire-btn { font-family: var(--display); font-weight: 600; font-size: 0.78rem; letter-spacing: 0.02em; color: var(--paper); background: var(--ink); padding: 0.55rem 1.1rem; text-decoration: none; white-space: nowrap; transition: background 0.15s, transform 0.15s; }
.hire-btn:hover { background: var(--blue); transform: translateY(-1px); }

/* crosshair */
.crosshair-wrap { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }
.crosshair-v, .crosshair-h { position: absolute; background: var(--blue-dim); pointer-events: none; will-change: transform; }
.crosshair-v { top: 0; bottom: 0; left: 0; width: 1px; }
.crosshair-h { left: 0; right: 0; top: 0; height: 1px; }
.hero { pointer-events: auto; }
.hero .hero-inner { pointer-events: none; }
.hero .hero-inner * { pointer-events: auto; }

/* hero */
.hero { position: relative; padding: 4.5rem 0 4rem; overflow: hidden; border-bottom: 1px solid var(--line); }
.hero-inner { display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: start; position: relative; z-index: 1; }
.eyebrow { font-family: var(--display); font-size: 0.76rem; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; color: var(--blue); margin: 0 0 1.3rem; }
.hero-name { font-family: var(--display); font-weight: 700; font-size: clamp(3rem, 9vw, 5.6rem); line-height: 0.95; letter-spacing: -0.01em; margin: 0 0 1rem; color: var(--ink); }
.hero-role { font-family: var(--display); font-size: 1.02rem; color: var(--ink-dim); margin: 0 0 1.2rem; }
.role-arrow { color: var(--blue); }
.cursor { display: inline-block; width: 8px; height: 1em; background: var(--blue); margin-left: 3px; vertical-align: -2px; animation: blink 1s step-end infinite; }
@keyframes blink { 50% { opacity: 0; } }
.hero-desc { color: var(--ink-dim); font-size: 1.02rem; line-height: 1.75; max-width: 48ch; margin: 0 0 2rem; }
.hero-cta { display: flex; gap: 0.8rem; flex-wrap: wrap; }

.btn { font-family: var(--display); font-size: 0.8rem; font-weight: 600; letter-spacing: 0.02em; padding: 0.8rem 1.4rem; border: 1px solid var(--line-strong); display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none; background: var(--card); color: var(--ink); transition: transform 0.15s, border-color 0.15s, background 0.15s, color 0.15s; }
.btn.ghost:hover { border-color: var(--blue); color: var(--blue); transform: translateY(-2px); }
.btn.primary { background: var(--ink); color: var(--paper); border-color: var(--ink); }
.btn.primary:hover { background: var(--blue); border-color: var(--blue); transform: translateY(-2px); }
.btn.large { padding: 0.9rem 1.7rem; }

/* title block — signature element */
.hero-right { display: flex; justify-content: center; }
.title-block { width: min(340px, 90vw); background: var(--card); border: 1px solid var(--line-strong); position: relative; }
.title-block::before, .title-block::after { content: ''; position: absolute; width: 12px; height: 12px; border: 1px solid var(--ink); }
.title-block::before { top: -1px; left: -1px; border-right: none; border-bottom: none; }
.title-block::after { bottom: -1px; right: -1px; border-left: none; border-top: none; }
.tb-row.tb-head { font-family: var(--display); font-size: 0.76rem; font-weight: 600; letter-spacing: 0.03em; padding: 0.75rem 1rem; border-bottom: 1px solid var(--line-strong); background: var(--ink); color: var(--paper); }
.tb-grid { display: grid; grid-template-columns: 1fr 1fr; }
.tb-cell { padding: 0.7rem 1rem; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); display: flex; flex-direction: column; gap: 0.15rem; }
.tb-cell:nth-child(2n) { border-right: none; }
.tb-cell.tb-wide { grid-column: span 2; }
.tb-k { font-family: var(--display); font-size: 0.64rem; letter-spacing: 0.06em; text-transform: uppercase; color: var(--ink-faint); }
.tb-v { font-family: var(--display); font-size: 0.86rem; font-weight: 500; color: var(--ink); }
.tb-live { display: inline-flex; align-items: center; gap: 0.4rem; }
.tb-live i { width: 6px; height: 6px; border-radius: 50%; background: var(--blue); box-shadow: 0 0 0 3px var(--blue-soft); flex-shrink: 0; }
.tb-links { display: flex; gap: 0.5rem; padding: 0.75rem 1rem; }
.tb-links a { width: 32px; height: 32px; border: 1px solid var(--line-strong); display: flex; align-items: center; justify-content: center; color: var(--ink-dim); transition: border-color 0.15s, color 0.15s; }
.tb-links a:hover { border-color: var(--blue); color: var(--blue); }

/* stats */
.stats-row { display: flex; gap: 0; flex-wrap: wrap; border-bottom: 1px solid var(--line); }
.stat-block { flex: 1 1 160px; padding: 1.6rem 1.5rem; border-right: 1px solid var(--line); display: flex; flex-direction: column; gap: 0.3rem; }
.stat-block:last-child { border-right: none; }
.stat-value { font-family: var(--display); font-size: 2rem; font-weight: 700; color: var(--ink); }
.stat-label { font-size: 0.82rem; color: var(--ink-faint); }

/* sections */
.section { padding: 4rem 0; border-bottom: 1px solid var(--line); }
.section:last-of-type { border-bottom: none; }
.sheet-head { margin-bottom: 2.4rem; }
.sheet-index { font-family: var(--display); font-size: 0.78rem; color: var(--blue-dim); margin: 0; }
.sheet-eyebrow { font-family: var(--display); font-size: 0.76rem; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; color: var(--blue); margin: 0.2rem 0 0.9rem; order: -1; }
.sheet-title { font-family: var(--display); font-weight: 700; font-size: clamp(1.7rem, 3.4vw, 2.3rem); margin: 0.2rem 0 0.9rem; letter-spacing: -0.01em; color: var(--ink); }
.sheet-title.small { font-size: 1.4rem; margin-bottom: 0.5rem; }
.mini-label { font-family: var(--display); font-size: 0.76rem; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; color: var(--blue); margin: 0 0 1rem; }
.mini-label.center { text-align: center; }

.dim-line { display: flex; align-items: center; gap: 0.4rem; height: 1px; background: var(--line-strong); position: relative; transform: scaleX(0); transform-origin: left; transition: transform 0.9s cubic-bezier(.2,.7,.2,1); }
.reveal.in .dim-line { transform: scaleX(1); }
.dim-tick { width: 1px; height: 8px; background: var(--line-strong); position: absolute; top: -3.5px; }
.dim-tick:first-child { left: 0; }
.dim-tick:last-child { right: 0; }

.body-text { font-size: 1.06rem; line-height: 1.85; color: var(--ink-dim); max-width: 64ch; }

/* project sheets */
.sheet-grid { display: grid; grid-template-columns: 1fr; gap: 1.1rem; }
.sheet-card { position: relative; background: var(--card); border: 1px solid var(--line-strong); padding: 1.5rem 1.4rem 1.7rem; transition: transform 0.2s, box-shadow 0.2s; }
.sheet-card:hover { transform: translateY(-3px); box-shadow: 6px 6px 0 var(--line-strong); }
.sheet-card.marked { border-color: var(--blue); }
.sheet-card.marked:hover { box-shadow: 6px 6px 0 var(--blue-dim); }
.sheet-card-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; }
.sheet-tab { font-family: var(--display); font-size: 0.7rem; font-weight: 600; letter-spacing: 0.05em; color: var(--ink-faint); }
.sheet-flag { font-family: var(--display); font-size: 0.66rem; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; color: var(--blue); border: 1px solid var(--blue); padding: 0.2rem 0.5rem; }
.sheet-card-title { font-family: var(--display); font-size: 1.3rem; font-weight: 700; margin: 0 0 0.3rem; color: var(--ink); }
.sheet-card-tag { font-size: 0.78rem; color: var(--ink-faint); margin: 0 0 0.9rem; }
.sheet-card-desc { color: var(--ink-dim); font-size: 0.93rem; line-height: 1.65; margin: 0 0 1.1rem; }
.spec-list { margin: 0 0 0.8rem; padding-top: 0.8rem; border-top: 1px dashed var(--line-strong); }
.spec-list dt { font-family: var(--display); font-size: 0.68rem; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; color: var(--ink-faint); margin-bottom: 0.35rem; }
.spec-list dd { margin: 0; font-size: 0.86rem; color: var(--ink-dim); line-height: 1.6; }
.sheet-card-note { font-size: 0.78rem; color: var(--ink-faint); line-height: 1.6; margin: 0.6rem 0 0; }
.sheet-links { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 1rem; }
.sheet-link { display: inline-flex; align-items: center; gap: 0.3rem; font-family: var(--display); font-size: 0.76rem; font-weight: 600; color: var(--ink); text-decoration: none; padding: 0.4rem 0.7rem; border: 1px solid var(--line-strong); transition: border-color 0.15s, color 0.15s; }
.sheet-link:hover { border-color: var(--blue); color: var(--blue); }

/* bill of materials table */
.bom-table { border-top: 1px solid var(--line-strong); }
.bom-row { display: grid; grid-template-columns: 1fr; gap: 0.6rem; padding: 1.1rem 0; border-bottom: 1px solid var(--line); }
.bom-label { font-family: var(--display); font-size: 0.76rem; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; color: var(--blue); }
.bom-items { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.bom-chip { font-size: 0.83rem; padding: 0.35rem 0.75rem; background: var(--card); border: 1px solid var(--line); color: var(--ink-dim); transition: border-color 0.15s, color 0.15s; }
.bom-chip:hover { border-color: var(--blue); color: var(--ink); }

/* revision history */
.rev-log { border-top: 1px solid var(--line-strong); margin-bottom: 2.6rem; }
.rev-row { display: grid; grid-template-columns: 70px 1fr; gap: 1rem; padding: 1.4rem 0; border-bottom: 1px solid var(--line); }
.rev-tag { font-family: var(--display); font-size: 0.8rem; font-weight: 700; color: var(--blue); }
.rev-head { display: flex; align-items: baseline; justify-content: space-between; gap: 1rem; flex-wrap: wrap; }
.rev-head h3 { font-family: var(--display); font-weight: 700; font-size: 1.05rem; margin: 0; color: var(--ink); }
.rev-time { font-family: var(--display); font-size: 0.76rem; color: var(--ink-faint); }
.rev-meta { color: var(--ink-faint); font-size: 0.84rem; margin: 0.2rem 0 0.6rem; }
.rev-body ul { margin: 0; padding-left: 1.1rem; color: var(--ink-dim); font-size: 0.9rem; line-height: 1.7; }

.two-col { display: grid; grid-template-columns: 1fr; gap: 2.2rem; }
.plain-list { list-style: none; margin: 0; padding: 0; }
.plain-list li { padding: 0.85rem 0; border-bottom: 1px solid var(--line); }
.plain-list li:last-child { border-bottom: none; }
.plain-title { font-weight: 600; font-size: 0.96rem; color: var(--ink); }
.plain-sub { color: var(--ink-dim); font-size: 0.85rem; margin-top: 0.15rem; }
.plain-meta { color: var(--ink-faint); font-size: 0.76rem; margin-top: 0.25rem; font-family: var(--display); }
.cert-row { color: var(--ink-dim); font-size: 0.9rem; padding: 0.85rem 0; border-bottom: 1px solid var(--line); }
.cert-row:last-child { border-bottom: none; }

/* resume */
.resume-panel { display: flex; align-items: center; justify-content: space-between; gap: 2rem; flex-wrap: wrap; padding: 2rem 2rem; background: var(--card); border: 1px solid var(--line-strong); }
.resume-sub { color: var(--ink-dim); font-size: 0.9rem; margin: 0.4rem 0 0; max-width: 40ch; }

/* contact */
.contact-section { text-align: center; padding-bottom: 4.5rem; }
.contact-title { font-family: var(--display); font-weight: 700; font-size: clamp(2.2rem, 6vw, 3.8rem); line-height: 1.05; margin: 0 0 1.1rem; color: var(--ink); }
.contact-sub { color: var(--ink-dim); font-size: 1rem; max-width: 46ch; margin: 0 auto 2rem; }
.contact-links { display: flex; justify-content: center; gap: 0.6rem; flex-wrap: wrap; }
.contact-link { display: flex; align-items: center; gap: 0.5rem; padding: 0.65rem 1rem; border: 1px solid var(--line-strong); background: var(--card); font-size: 0.84rem; color: var(--ink-dim); text-decoration: none; transition: border-color 0.15s, color 0.15s, transform 0.15s; }
.contact-link:hover { border-color: var(--blue); color: var(--blue); transform: translateY(-2px); }

/* title-block footer strip */
.title-strip { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 0.6rem; padding: 1.1rem 1.5rem; font-family: var(--display); font-size: 0.72rem; letter-spacing: 0.03em; color: var(--ink-faint); border-top: 1px solid var(--line-strong); max-width: 1040px; margin: 0 auto; }

/* reveal */
.reveal { opacity: 0; transform: translateY(16px); transition: opacity 0.7s ease, transform 0.7s ease; }
.reveal.in { opacity: 1; transform: translateY(0); }

@media (min-width: 720px) {
  .two-col { grid-template-columns: 1fr 1fr; }
}
@media (min-width: 1000px) {
  .hero-inner { grid-template-columns: 1.2fr 0.8fr; }
  .sheet-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 560px) {
  .nav-links { gap: 1rem; }
  .nav-links button { font-size: 0.7rem; }
  .hire-btn { display: none; }
  .stat-block { border-right: none; border-bottom: 1px solid var(--line); }
}
`