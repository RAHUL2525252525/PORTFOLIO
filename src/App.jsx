import { useEffect, useRef, useState } from 'react'
import {
  Github, Linkedin, Mail, Phone, ArrowUpRight, Download, ArrowRight,
} from 'lucide-react'
import './index.css'

/* ------------------------------------------------------------------ */
/* content                                                             */
/* ------------------------------------------------------------------ */

// File lives at /public/Rahul_S_Fullstack Developer.pdf in the repo.
// Vite/CRA only auto-serve a folder named "public" (lowercase) — rename it
// from "Public" if that's how it currently sits in GitHub, or the link
// below will 404 even though the code itself is correct.
const RESUME_PATH = '/Rahul_S_Fullstack%20Developer.pdf'

const ROLES = ['Fullstack Developer', 'Frontend Developer']

const NAV = [
  { id: 'work', label: 'Work' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

const STATS = [
  { value: 2, label: 'Internships' },
  { value: 3, label: 'Products shipped' },
  { value: 2026, label: 'Graduating class' },
]

const PROJECTS = [
  {
    id: '01',
    title: 'ShopSphere',
    tag: 'Full-stack e-commerce platform',
    desc: 'A complete storefront — browsing, search, cart, wishlist, and order tracking on the front end, with an admin console behind it for managing products, users, and inventory.',
    tech: ['React.js', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'REST APIs'],
    note: 'The backend sleeps on Render\u2019s free tier — wake it first (30\u201360s), then open the live site.',
    links: [
      { label: 'Live site', href: 'https://shopsphere-8m8f.vercel.app/' },
      { label: 'Backend', href: 'https://shopsphere-backend-5umn.onrender.com' },
    ],
    featured: true,
  },
  {
    id: '02',
    title: 'AI Exam Companion',
    tag: 'Exam preparation tool',
    desc: 'Mock tests with instant scoring, backed by a Groq-powered chatbot that explains the concept behind a wrong answer instead of just marking it wrong.',
    tech: ['JavaScript (ES6+)', 'Firebase Auth', 'Groq API', 'HTML5', 'CSS3'],
    links: [{ label: 'Live site', href: 'https://ai-exam-companion-ghzc.onrender.com' }],
  },
  {
    id: '03',
    title: 'Portfolio, v1',
    tag: 'Personal site',
    desc: 'An earlier version of this site — reusable React components for projects, skills, and contact, laid out with Flexbox and Grid to hold up on any screen.',
    tech: ['React.js', 'Vite', 'JavaScript (ES6+)', 'CSS3'],
  },
]

// Same skills as the résumé, in plain English so a non-technical reader
// can tell what each group is actually for.
const SKILL_GROUPS = [
  { label: 'Languages', hint: 'The core languages behind everything else here', items: ['Java', 'JavaScript (ES6+)', 'SQL'] },
  { label: 'Building interfaces', hint: 'The part of the app people click, scroll, and read', items: ['HTML5', 'CSS3', 'React.js', 'JSX', 'Responsive Design', 'Mobile-First Design', 'DOM Handling', 'Flexbox', 'CSS Grid', 'Cross-Browser Support'] },
  { label: 'Server side', hint: 'Endpoints and the logic that powers the app', items: ['Spring Boot', 'Spring Data JPA', 'REST APIs', 'JSON', 'Groq API'] },
  { label: 'Data', hint: 'Where information lives, and how it gets read & written', items: ['MySQL', 'Firebase Realtime Database', 'CRUD Operations'] },
  { label: 'Accounts & access', hint: 'Keeping logins secure, controlling who can do what', items: ['Firebase Authentication', 'User Authentication', 'Role-Based Access (RBAC)'] },
  { label: 'Everyday tools', hint: 'Editors, version control, and where things get deployed', items: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Vite', 'Vercel', 'Render'] },
  { label: 'Foundations', hint: 'The thinking every project above is built on', items: ['Object-Oriented Programming', 'Data Structures & Algorithms', 'UI/UX Principles'] },
]

const EXPERIENCE = [
  {
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

function useTypewriter(words, typeSpeed = 55, deleteSpeed = 30, pause = 1400) {
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
  const [active, setActive] = useState('')
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

function SectionHead({ index, title, kicker }) {
  return (
    <Reveal className="sec-head">
      <span className="sec-watermark" aria-hidden="true">{index}</span>
      <p className="sec-kicker">{kicker}</p>
      <h2 className="sec-title">{title}</h2>
    </Reveal>
  )
}

function StatBlock({ stat, index }) {
  const [ref, n, inView] = useCountUp(stat.value)
  return (
    <div ref={ref} className={`stat-block reveal ${inView ? 'in' : ''}`} style={{ transitionDelay: `${index * 90}ms` }}>
      <span className="stat-value">{n}</span>
      <span className="stat-label">{stat.label}</span>
    </div>
  )
}

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={index * 100} className={`project-card ${project.featured ? 'featured' : ''}`}>
      <span className="project-index">{project.id}</span>
      <div className="project-body">
        <div className="project-heading">
          <h3>{project.title}</h3>
          {project.featured && <span className="project-flag">Featured</span>}
        </div>
        <p className="project-tag">{project.tag}</p>
        <p className="project-desc">{project.desc}</p>
        <div className="project-tech">
          {project.tech.map((t) => <span key={t} className="tech-pill">{t}</span>)}
        </div>
        {project.note && <p className="project-note">{project.note}</p>}
        {project.links && (
          <div className="project-links">
            {project.links.map((l) => (
              <a key={l.label} className="project-link" href={l.href} target="_blank" rel="noopener noreferrer">
                {l.label} <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        )}
      </div>
    </Reveal>
  )
}

function SkillGroup({ group, index }) {
  return (
    <Reveal delay={index * 70} className="skill-row">
      <div className="skill-row-head">
        <h3>{group.label}</h3>
        <p>{group.hint}</p>
      </div>
      <div className="skill-pills">
        {group.items.map((it) => <span key={it} className="skill-pill">{it}</span>)}
      </div>
    </Reveal>
  )
}

function ExperienceRow({ entry, index }) {
  return (
    <Reveal delay={index * 100} className="timeline-row">
      <div className="timeline-marker">
        <span className="timeline-year">{entry.time}</span>
        <span className="timeline-dot" />
      </div>
      <div className="timeline-body">
        <h3>{entry.role}</h3>
        <p className="timeline-meta">{entry.company} · {entry.place}</p>
        <ul>{entry.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
      </div>
    </Reveal>
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
    <div className="ed-root">
      <div className="progress-track" aria-hidden="true">
        <div className="progress-fill" style={{ transform: `scaleX(${progress})` }} />
      </div>

      <nav className="site-nav">
        <div className="wrap site-nav-inner">
          <button className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
            Rahul S
          </button>
          <div className="nav-links">
            {NAV.map((n) => (
              <button key={n.id} className={active === n.id ? 'active' : ''} onClick={() => scrollTo(n.id)}>
                {n.label}
              </button>
            ))}
          </div>
          <a className="nav-cta" href={RESUME_PATH} target="_blank" rel="noopener noreferrer">
            <Download size={14} /> Résumé
          </a>
        </div>
      </nav>

      <header className="hero wrap">
        <p className="eyebrow">Available for full-stack &amp; frontend roles</p>
        <h1 className="hero-name">
          Building interfaces<br />
          people <em>actually enjoy</em><br />
          using.
        </h1>
        <div className="hero-role">
          <span className="role-mark">{typed}</span><span className="cursor" />
        </div>
        <p className="hero-desc">
          I&rsquo;m Rahul — a final-year Computer Science student who&rsquo;d rather ship
          something real than just study the theory behind it. I build fast React interfaces
          and back them with real Spring Boot APIs, front to back.
        </p>
        <div className="hero-cta">
          <button className="btn primary" onClick={() => scrollTo('work')}>See my work <ArrowRight size={15} /></button>
          <a className="btn ghost" href={RESUME_PATH} target="_blank" rel="noopener noreferrer">
            <Download size={15} /> Download résumé
          </a>
        </div>

        <div className="hero-socials">
          <a href="mailto:Srinivasrahul838@gmail.com" aria-label="Email"><Mail size={16} /></a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={16} /></a>
          <a href="https://www.linkedin.com/in/rahul-s-6460b1238" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a>
        </div>
      </header>

      <section className="wrap stats-row">
        {STATS.map((s, i) => <StatBlock stat={s} index={i} key={s.label} />)}
      </section>

      <section id="work" className="wrap section">
        <SectionHead index="01" kicker="Selected work" title="Things I've shipped" />
        <div className="project-list">
          {PROJECTS.map((p, i) => <ProjectCard project={p} index={i} key={p.id} />)}
        </div>
      </section>

      <section id="capabilities" className="wrap section">
        <SectionHead index="02" kicker="Capabilities" title="What I work with" />
        <Reveal delay={60}><p className="body-text intro">Same skills as my résumé, grouped in plain language so it's clear what each one is actually for.</p></Reveal>
        <div className="skill-list">
          {SKILL_GROUPS.map((g, i) => <SkillGroup group={g} index={i} key={g.label} />)}
        </div>
      </section>

      <section id="experience" className="wrap section">
        <SectionHead index="03" kicker="Path so far" title="How I got here" />
        <div className="timeline">
          {EXPERIENCE.map((e, i) => <ExperienceRow entry={e} index={i} key={e.company} />)}
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

      <section className="wrap section resume-section">
        <Reveal>
          <div className="resume-band">
            <div>
              <p className="mini-label">Résumé</p>
              <h2 className="sec-title small">Want the paper trail?</h2>
              <p className="resume-sub">Everything above, in one PDF you can forward to a hiring manager.</p>
            </div>
            <a className="btn primary large" href={RESUME_PATH} target="_blank" rel="noopener noreferrer">
              <Download size={16} /> Download résumé
            </a>
          </div>
        </Reveal>
      </section>

      <section id="contact" className="wrap section contact-section">
        <Reveal>
          <p className="mini-label center">Get in touch</p>
          <h2 className="contact-title">Let&rsquo;s build<br />something good.</h2>
          <p className="contact-sub">Open to full-stack and frontend roles — based in Bengaluru, happy to work remote.</p>
          <div className="contact-links">
            <a className="contact-link" href="mailto:Srinivasrahul838@gmail.com"><Mail size={15} /> Srinivasrahul838@gmail.com</a>
            <a className="contact-link" href="tel:+917337634886"><Phone size={15} /> 7337634886</a>
            <a className="contact-link" href="https://www.linkedin.com/in/rahul-s-6460b1238" target="_blank" rel="noopener noreferrer"><Linkedin size={15} /> LinkedIn</a>
            <a className="contact-link" href="https://github.com/" target="_blank" rel="noopener noreferrer"><Github size={15} /> GitHub</a>
          </div>
        </Reveal>
      </section>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Rahul S</span>
        <span>Designed &amp; built with React</span>
      </footer>
    </div>
  )
}
