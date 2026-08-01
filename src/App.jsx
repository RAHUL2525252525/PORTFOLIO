import { useEffect, useRef, useState } from 'react'
import {
  Github, Linkedin, Mail, Phone, ExternalLink, ArrowUpRight, Download,
} from 'lucide-react'
import './index.css'

/* ------------------------------------------------------------------ */
/* content                                                             */
/* ------------------------------------------------------------------ */

const ROLES = ['Fullstack Developer', 'Frontend Developer', 'React Developer', 'Software Developer']

const NAV = [
  { id: 'about', label: 'Overview' },
  { id: 'work', label: 'Work' },
  { id: 'craft', label: 'Skills' },
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

// Same skills listed on the resume, grouped in plain English so a
// non-technical reader can still follow what each group covers.
const SKILL_GROUPS = [
  {
    id: '01',
    label: 'Languages I code in',
    hint: 'The core languages behind everything else on this page',
    items: ['Java', 'JavaScript (ES6+)', 'SQL'],
  },
  {
    id: '02',
    label: 'Building what you see',
    hint: 'Front-end — the part of the app people click, scroll, and read',
    items: [
      'HTML5', 'CSS3', 'React.js', 'JSX', 'React Components',
      'Responsive Design', 'Mobile-First Design', 'DOM Handling',
      'Flexbox', 'CSS Grid', 'Cross-Browser Support', 'Performance Tuning',
    ],
  },
  {
    id: '03',
    label: 'Running things behind the scenes',
    hint: 'Back-end — servers, endpoints, and the logic that powers the app',
    items: ['Spring Boot', 'Spring Data JPA', 'REST APIs', 'JSON', 'Groq API'],
  },
  {
    id: '04',
    label: 'Storing data',
    hint: 'Where information lives and how it gets created, read, updated, deleted',
    items: ['MySQL', 'Firebase Realtime Database', 'CRUD Operations'],
  },
  {
    id: '05',
    label: 'Logins & access',
    hint: 'Keeping accounts secure and controlling who can do what',
    items: ['Firebase Authentication', 'User Authentication', 'Role-Based Access (RBAC)'],
  },
  {
    id: '06',
    label: 'Tools I work in daily',
    hint: 'Editors, version control, and where projects get deployed',
    items: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Vite', 'Vercel', 'Render'],
  },
  {
    id: '07',
    label: 'How I think about problems',
    hint: 'The fundamentals every project above is built on',
    items: ['Object-Oriented Programming', 'Data Structures & Algorithms', 'UI/UX Principles'],
  },
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

// Tracks scroll progress through the page, 0 → 1.
function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const scrollable = h.scrollHeight - h.clientHeight
      setProgress(scrollable > 0 ? Math.min(1, h.scrollTop / scrollable) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return progress
}

/* ------------------------------------------------------------------ */
/* small components                                                    */
/* ------------------------------------------------------------------ */

// Signature element — a plotting line at the very top of the page that
// draws itself in as you scroll, like a pen tracing a drawing sheet.
function PlotLine({ progress }) {
  return (
    <div className="plot-line-track" aria-hidden="true">
      <div className="plot-line-fill" style={{ transform: `scaleX(${progress})` }} />
      <span className="plot-line-bit" style={{ left: `${progress * 100}%` }} />
    </div>
  )
}

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

// One row of the "bill of materials" style skills table.
function SkillRow({ group, index }) {
  return (
    <Reveal delay={index * 60} className="bom-row">
      <span className="bom-id">{group.id}</span>
      <div className="bom-body">
        <div className="bom-heading">
          <span className="bom-label">{group.label}</span>
          <span className="bom-count">{String(group.items.length).padStart(2, '0')} items</span>
        </div>
        <p className="bom-hint">{group.hint}</p>
        <span className="bom-items">
          {group.items.map((it) => <span className="bom-chip" key={it}>{it}</span>)}
        </span>
      </div>
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
  const progress = useScrollProgress()

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <div className="bp-root">
      <PlotLine progress={progress} />

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
        <SheetHeader index="03" eyebrow="Bill of materials" title="What I work with" />
        <Reveal delay={60}>
          <p className="body-text bom-intro">
            Everything below is on my résumé too — grouped here in plain language
            so it&rsquo;s clear what each skill is actually for.
          </p>
        </Reveal>
        <div className="bom-table">
          {SKILL_GROUPS.map((g, i) => <SkillRow group={g} index={i} key={g.id} />)}
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
