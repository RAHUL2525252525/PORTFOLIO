import { useEffect, useRef, useState } from 'react'
import {
  Github, Linkedin, Mail, Phone, ExternalLink, Download, GitBranch, Check, Terminal,
} from 'lucide-react'
import './index.css'

/* ------------------------------------------------------------------ */
/* content                                                             */
/* ------------------------------------------------------------------ */

const RESUME_PATH = '/RAHUL_S_Fullstack Developer.pdf'

// Only the two roles the site should present.
const ROLES = ['Fullstack Developer', 'Frontend Developer']

const NAV = [
  { id: 'about', label: 'about', ext: 'jsx', dot: 'jsx' },
  { id: 'work', label: 'projects', ext: '', dot: 'dir' },
  { id: 'craft', label: 'skills', ext: 'json', dot: 'json' },
  { id: 'journey', label: 'changelog', ext: 'log', dot: 'log' },
  { id: 'resume', label: 'resume', ext: 'pdf', dot: 'pdf' },
  { id: 'contact', label: 'contact', ext: 'js', dot: 'js' },
]

const STATS = [
  { value: 2, label: 'internships' },
  { value: 3, label: 'projects shipped' },
  { value: 2026, label: 'graduating class' },
]

const PROJECTS = [
  {
    id: 'shopsphere',
    file: 'shopsphere.tsx',
    tag: 'E-commerce platform',
    status: 'deployed',
    desc: 'A full-stack storefront — browsing, search, cart, wishlist, and order tracking on the front end, with an admin console behind it for managing products, users, and inventory.',
    tech: ['React.js', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'REST APIs'],
    note: 'Backend sleeps on Render\u2019s free tier — wake it first (30\u201360s), then open the site.',
    links: [
      { label: 'backend', href: 'https://shopsphere-backend-5umn.onrender.com' },
      { label: 'live', href: 'https://shopsphere-8m8f.vercel.app/' },
    ],
    featured: true,
  },
  {
    id: 'exam-companion',
    file: 'ai-exam-companion.js',
    tag: 'Exam prep tool',
    status: 'deployed',
    desc: 'Mock tests with instant scoring, backed by a Groq-powered chatbot that explains the concept behind a wrong answer instead of just marking it wrong.',
    tech: ['JavaScript (ES6+)', 'Firebase Auth', 'Groq API', 'HTML5', 'CSS3'],
    links: [{ label: 'live', href: 'https://ai-exam-companion-ghzc.onrender.com' }],
  },
  {
    id: 'portfolio-v1',
    file: 'portfolio-v1.jsx',
    tag: 'Personal site',
    status: 'archived',
    desc: 'The previous version of this site — reusable React components for projects, skills, and contact, laid out with Flexbox and Grid to hold up on any screen.',
    tech: ['React.js', 'Vite', 'JavaScript (ES6+)', 'CSS3'],
  },
]

// Same skills as the résumé, grouped the way a package.json would group
// dependencies — plain-English keys so a non-technical reader still gets it.
const SKILL_GROUPS = [
  { key: 'languages', hint: 'core languages behind everything else here', items: ['Java', 'JavaScript (ES6+)', 'SQL'] },
  { key: 'frontend', hint: 'the part of the app people click, scroll, and read', items: ['HTML5', 'CSS3', 'React.js', 'JSX', 'Responsive Design', 'Mobile-First Design', 'DOM Handling', 'Flexbox', 'CSS Grid', 'Cross-Browser Support', 'Performance Tuning'] },
  { key: 'backend', hint: 'servers, endpoints, and the logic that powers the app', items: ['Spring Boot', 'Spring Data JPA', 'REST APIs', 'JSON', 'Groq API'] },
  { key: 'database', hint: 'where information lives, and how it gets read & written', items: ['MySQL', 'Firebase Realtime Database', 'CRUD Operations'] },
  { key: 'auth', hint: 'keeping accounts secure, controlling who can do what', items: ['Firebase Authentication', 'User Authentication', 'Role-Based Access (RBAC)'] },
  { key: 'tooling', hint: 'editors, version control, and where things get deployed', items: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Vite', 'Vercel', 'Render'] },
  { key: 'fundamentals', hint: 'the thinking every project above is built on', items: ['Object-Oriented Programming', 'Data Structures & Algorithms', 'UI/UX Principles'] },
]

// newest first — reads like a commit log, most recent at the top
const EXPERIENCE = [
  {
    hash: 'b4f2a91',
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
    hash: '7a103cd',
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

function SectionHead({ index, comment, title }) {
  return (
    <Reveal className="sec-head">
      <p className="sec-comment">// {String(index).padStart(2, '0')} — {comment}</p>
      <h2 className="sec-title">{title}</h2>
    </Reveal>
  )
}

function StatBlock({ stat, index }) {
  const [ref, n, inView] = useCountUp(stat.value)
  return (
    <div ref={ref} className={`stat-block reveal ${inView ? 'in' : ''}`} style={{ transitionDelay: `${index * 80}ms` }}>
      <span className="stat-value">{n}</span>
      <span className="stat-label">{stat.label}</span>
    </div>
  )
}

function StackImport({ tech }) {
  return (
    <p className="stack-import">
      <span className="tok-kw">import</span> {'{ '}
      {tech.map((t, i) => (
        <span key={t}>
          <span className="tok-str">'{t}'</span>{i < tech.length - 1 ? ', ' : ''}
        </span>
      ))}
      {' }'} <span className="tok-kw">from</span> <span className="tok-str">'./stack'</span>
    </p>
  )
}

function ProjectFile({ project, index }) {
  return (
    <Reveal delay={index * 90} className={`file-card ${project.featured ? 'marked' : ''}`}>
      <div className="file-card-top">
        <span className={`status-dot ${project.status}`} aria-hidden="true" />
        <span className="file-name">{project.file}</span>
        {project.featured && <span className="file-flag">primary</span>}
      </div>
      <p className="file-tag">{project.tag}</p>
      <p className="file-comment">/* {project.desc} */</p>
      <StackImport tech={project.tech} />
      {project.note && <p className="file-note">// NOTE: {project.note}</p>}
      {project.links && (
        <div className="file-links">
          {project.links.map((l) => (
            <a className="run-link" href={l.href} target="_blank" rel="noopener noreferrer" key={l.label}>
              <span className="run-glyph">▶</span> {l.label}
            </a>
          ))}
        </div>
      )}
    </Reveal>
  )
}

function SkillGroup({ group, index }) {
  return (
    <Reveal delay={index * 60} className="dep-row">
      <div className="dep-key-line">
        <span className="tok-str">"{group.key}"</span><span className="tok-punc">: [</span>
      </div>
      <p className="dep-hint">// {group.hint}</p>
      <div className="dep-items">
        {group.items.map((it, i) => (
          <span className="dep-item" key={it}>
            <span className="tok-str">"{it}"</span>{i < group.items.length - 1 ? <span className="tok-punc">,</span> : ''}
          </span>
        ))}
      </div>
      <span className="tok-punc">]</span><span className="tok-punc">,</span>
    </Reveal>
  )
}

function CommitRow({ entry, index }) {
  return (
    <Reveal delay={index * 90} className="commit-row">
      <div className="commit-meta">
        <span className="commit-hash">commit {entry.hash}</span>
        <span className="commit-rev">rev {entry.rev}</span>
      </div>
      <p className="commit-date">Date: {entry.time} · {entry.place}</p>
      <h3 className="commit-msg">{entry.role} @ {entry.company}</h3>
      <ul className="commit-diff">
        {entry.points.map((pt) => <li key={pt}><span className="diff-plus">+</span> {pt}</li>)}
      </ul>
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
    <div className="ide-root">
      {/* titlebar */}
      <div className="titlebar">
        <div className="titlebar-inner wrap">
          <div className="tl-dots" aria-hidden="true"><i className="d-red" /><i className="d-amber" /><i className="d-green" /></div>
          <span className="tl-path">rahul-s <span className="tl-sep">/</span> portfolio <span className="tl-sep">/</span> {active}.{NAV.find((n) => n.id === active)?.ext || 'jsx'}</span>
          <div className="tl-icons">
            <a href="mailto:Srinivasrahul838@gmail.com" aria-label="Email"><Mail size={14} /></a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={14} /></a>
            <a href="https://www.linkedin.com/in/rahul-s-6460b1238" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={14} /></a>
          </div>
        </div>
      </div>

      {/* tab bar / nav */}
      <nav className="tabbar">
        <div className="tabbar-inner wrap">
          {NAV.map((n) => (
            <button key={n.id} className={`tab ${active === n.id ? 'active' : ''}`} onClick={() => scrollTo(n.id)}>
              <span className={`tab-dot dot-${n.dot}`} aria-hidden="true" />
              {n.label}{n.ext && <span className="tab-ext">.{n.ext}</span>}
            </button>
          ))}
        </div>
        <div className="scan-bar" aria-hidden="true"><div className="scan-fill" style={{ transform: `scaleX(${progress})` }} /></div>
      </nav>

      {/* hero — rendered as an open code file */}
      <header id="about" className="hero wrap">
        <div className="code-gutter" aria-hidden="true">
          {Array.from({ length: 11 }, (_, i) => <span key={i}>{i + 1}</span>)}
        </div>
        <div className="code-body">
          <p className="eyebrow-comment">// status: available for hire</p>
          <p className="code-line"><span className="tok-kw">const</span> <span className="tok-var">developer</span> <span className="tok-punc">=</span> <span className="tok-punc">{'{'}</span></p>
          <p className="code-line indent"><span className="tok-key">name</span><span className="tok-punc">:</span> <span className="tok-str">"Rahul S"</span><span className="tok-punc">,</span></p>
          <p className="code-line indent">
            <span className="tok-key">role</span><span className="tok-punc">:</span> <span className="tok-str">"{typed}<span className="cursor" />"</span><span className="tok-punc">,</span>
          </p>
          <p className="code-line indent"><span className="tok-key">based_in</span><span className="tok-punc">:</span> <span className="tok-str">"Bengaluru, IN"</span><span className="tok-punc">,</span></p>
          <p className="code-line indent"><span className="tok-key">focus</span><span className="tok-punc">:</span> <span className="tok-str">"React front ends, Spring Boot APIs"</span><span className="tok-punc">,</span></p>
          <p className="code-line"><span className="tok-punc">{'}'}</span></p>
          <p className="hero-desc">
            Final-year Computer Science student who&rsquo;d rather ship something real than just
            study the theory behind it. I build fast React interfaces and back them with real
            Spring Boot APIs — the fullstack loop, front to back.
          </p>
          <div className="hero-cta">
            <button className="btn primary" onClick={() => scrollTo('work')}><Terminal size={14} /> view --projects</button>
            <a className="btn ghost" href={RESUME_PATH} target="_blank" rel="noopener noreferrer">
              <Download size={14} /> résumé.pdf
            </a>
          </div>
        </div>
      </header>

      {/* stats */}
      <section className="wrap stats-row">
        {STATS.map((s, i) => <StatBlock stat={s} index={i} key={s.label} />)}
      </section>

      {/* overview */}
      <section className="wrap section">
        <SectionHead index={1} comment="overview" title="The short version" />
        <Reveal delay={80}>
          <p className="body-text">
            I spend most of my time in React, but I&rsquo;m just as comfortable wiring up a
            Spring Boot API or shaping a MySQL schema. I like the fullstack loop — designing the
            interface, building the endpoint it calls, and watching the data move between the
            two — more than any single layer on its own.
          </p>
        </Reveal>
      </section>

      {/* projects */}
      <section id="work" className="wrap section">
        <SectionHead index={2} comment="projects" title="Things I've shipped" />
        <div className="file-grid">
          {PROJECTS.map((p, i) => <ProjectFile project={p} index={i} key={p.id} />)}
        </div>
      </section>

      {/* skills */}
      <section id="craft" className="wrap section">
        <SectionHead index={3} comment="skills.json" title="What I work with" />
        <Reveal delay={60}>
          <p className="body-text bom-intro">
            Same skills as my résumé — grouped like a dependency list, with a plain-English
            note on what each group is actually for.
          </p>
        </Reveal>
        <div className="dep-block">
          <p className="dep-open"><span className="tok-punc">{'{'}</span></p>
          {SKILL_GROUPS.map((g, i) => <SkillGroup group={g} index={i} key={g.key} />)}
          <p className="dep-close"><span className="tok-punc">{'}'}</span></p>
        </div>
      </section>

      {/* changelog / experience */}
      <section id="journey" className="wrap section">
        <SectionHead index={4} comment="changelog" title="How I got here" />
        <div className="commit-log">
          {EXPERIENCE.map((e, i) => <CommitRow entry={e} index={i} key={e.hash} />)}
        </div>

        <div className="two-col">
          <Reveal>
            <p className="mini-label">education</p>
            <ul className="plain-list">
              {EDUCATION.map((ed) => (
                <li key={ed.school}>
                  <div className="plain-title"><Check size={13} className="check-ico" /> {ed.school}</div>
                  <div className="plain-sub">{ed.degree}</div>
                  <div className="plain-meta">{ed.time}</div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={90}>
            <p className="mini-label">certifications</p>
            <ul className="plain-list">
              {CERTS.map((c) => (
                <li key={c} className="cert-row"><Check size={13} className="check-ico" /> {c}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* resume */}
      <section id="resume" className="wrap section">
        <Reveal>
          <div className="terminal-panel">
            <div className="terminal-panel-top">
              <div className="tl-dots" aria-hidden="true"><i className="d-red" /><i className="d-amber" /><i className="d-green" /></div>
              <span className="terminal-title">resume.sh</span>
            </div>
            <div className="terminal-body">
              <p><span className="prompt">$</span> curl -O rahul-s.dev/resume.pdf</p>
              <p className="term-out">Everything above, packed into one PDF you can forward to a hiring manager.</p>
              <a className="btn primary large" href={RESUME_PATH} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} /> download resume.pdf
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* contact */}
      <section id="contact" className="wrap section contact-section">
        <Reveal>
          <p className="eyebrow-comment center">// 06 — contact.js</p>
          <h2 className="contact-title">$ open --new-project</h2>
          <p className="contact-sub">Open to full-stack and frontend roles — based in Bengaluru, happy to work remote.</p>
          <div className="contact-links">
            <a className="contact-link" href="mailto:Srinivasrahul838@gmail.com"><Mail size={15} /> Srinivasrahul838@gmail.com</a>
            <a className="contact-link" href="tel:+917337634886"><Phone size={15} /> 7337634886</a>
            <a className="contact-link" href="https://www.linkedin.com/in/rahul-s-6460b1238" target="_blank" rel="noopener noreferrer"><Linkedin size={15} /> LinkedIn</a>
            <a className="contact-link" href="https://github.com/" target="_blank" rel="noopener noreferrer"><Github size={15} /> GitHub</a>
          </div>
        </Reveal>
      </section>

      {/* status bar */}
      <footer className="statusbar">
        <span><GitBranch size={12} /> main</span>
        <span className="status-mid">Rahul S · Fullstack &amp; Frontend Developer</span>
        <span>UTF-8 · LF · Ln {Math.max(1, Math.round(progress * 100))}, Col 1</span>
      </footer>
    </div>
  )
}
