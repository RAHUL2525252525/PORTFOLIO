import { useEffect, useRef, useState } from 'react'
import {
  Github, Linkedin, Mail, Phone, ArrowUpRight, Terminal,
  Code2, Server, Database, Wrench, Award, GraduationCap,
} from 'lucide-react'
import './index.css'

/* ================================================================== */
/* content                                                             */
/* ================================================================== */

const ROLES = [
  'React Developer',
  'Frontend Developer',
  'Software Developer',
  'Java Full Stack Developer',
]

// The page is a rolled-out drawing set — every section is a numbered sheet,
// the way a real blueprint index lists SHEET 01, 02, 03... The number carries
// real information here (position in the set), not decoration.
const NAV = [
  { id: 'about', no: '01', label: 'About' },
  { id: 'skills', no: '02', label: 'Skills' },
  { id: 'experience', no: '03', label: 'Experience' },
  { id: 'projects', no: '04', label: 'Projects' },
  { id: 'certifications', no: '05', label: 'Certs' },
  { id: 'stack', no: '06', label: 'Stack' },
  { id: 'contact', no: '07', label: 'Contact' },
]

const SKILLS = [
  'React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS',
  'Java', 'Spring Boot', 'MySQL', 'REST API', 'Git', 'GitHub',
]

// Order is the real order a request travels through the app —
// screen first, then server, then database, then the tools tying it together.
const STACK_LAYERS = [
  {
    icon: Code2,
    title: 'What you see',
    subtitle: 'Frontend',
    items: ['React', 'Tailwind CSS', 'HTML', 'CSS'],
    blurb: 'The screens, buttons, and pages a person actually touches.',
  },
  {
    icon: Server,
    title: 'What runs it',
    subtitle: 'Backend',
    items: ['Java', 'Spring Boot', 'REST API'],
    blurb: 'The logic behind the screen, answering every request.',
  },
  {
    icon: Database,
    title: 'Where data lives',
    subtitle: 'Database',
    items: ['MySQL'],
    blurb: 'Where everything gets saved, and read back later.',
  },
  {
    icon: Wrench,
    title: 'How I build it',
    subtitle: 'Tools',
    items: ['Git', 'GitHub'],
    blurb: 'Version control and the place the code lives online.',
  },
]

const EXPERIENCE = [
  {
    role: 'Web Development Intern',
    company: 'MR Tech Lab',
    time: '2026',
    place: 'Bengaluru',
    points: [
      'Built pages that work well on every screen size, using HTML, CSS, and JavaScript',
      'Connected React pages to real APIs to show live data',
      'Put finished projects online and checked them on different browsers',
    ],
  },
  {
    role: 'AI / ML & Python Intern',
    company: 'KNOWX Innovations',
    time: '2023',
    place: 'Bengaluru',
    points: [
      'Built small Python programs to clean data and test simple models',
      'Worked with the team on fixing bugs and keeping code running smoothly',
    ],
  },
]

const PROJECTS = [
  {
    id: '01',
    title: 'ShopSphere',
    tag: '// full-stack online store',
    desc: 'A complete online shop — people can browse, search, add to cart, and track orders. Behind it, there is an admin panel to manage products, users, and stock.',
    tech: ['React', 'Spring Boot', 'MySQL', 'REST API'],
    note: 'The server sleeps to save costs. Give it 30–60 seconds to wake up before the live site loads fully.',
    links: [
      { label: 'Live site', href: 'https://shopsphere-8m8f.vercel.app/' },
      { label: 'Backend', href: 'https://shopsphere-backend-5umn.onrender.com' },
    ],
    featured: true,
  },
  {
    id: '02',
    title: 'AI Exam Companion',
    tag: '// exam practice app',
    desc: 'A practice test app that scores you right away. A built-in AI chatbot explains why an answer was wrong, instead of just marking it incorrect.',
    tech: ['JavaScript', 'Firebase', 'Groq API'],
    links: [{ label: 'Live site', href: 'https://ai-exam-companion-ghzc.onrender.com' }],
  },
  {
    id: '03',
    title: 'Personal Portfolio',
    tag: '// an earlier version of this site',
    desc: 'My first portfolio site — built to be fast, clean, and easy to read on any device.',
    tech: ['React', 'Vite', 'CSS'],
  },
]

const CERTS = [
  { name: 'Introduction to Java', by: 'Infosys Springboard' },
  { name: 'Cloud Computing', by: 'Infosys Springboard' },
  { name: 'Software Engineering', by: 'Infosys Springboard' },
  { name: 'AI and Green Skills', by: 'Edunet Foundation, Skills4Future' },
]

const EDUCATION = [
  { school: 'Dr. ACS College of Engineering', degree: 'B.E., Computer Science and Engineering', time: '2023 – 2026 · Bengaluru' },
  { school: 'PVP Polytechnic', degree: 'Diploma, Information Science and Engineering', time: '2020 – 2023 · Bengaluru' },
]

/* ================================================================== */
/* hooks                                                                */
/* ================================================================== */

function useTypewriter(words, typeSpeed = 65, deleteSpeed = 34, pause = 1300) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let t
    if (!deleting && text === current) {
      t = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
    } else {
      t = setTimeout(() => {
        setText((s) => (deleting ? current.slice(0, s.length - 1) : current.slice(0, s.length + 1)))
      }, deleting ? deleteSpeed : typeSpeed)
    }
    return () => clearTimeout(t)
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

function Reveal({ children, className = '', delay = 0, as: Tag = 'div', style = {} }) {
  const [ref, inView] = useReveal()
  return (
    <Tag ref={ref} className={`reveal ${inView ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </Tag>
  )
}

function useActiveSection() {
  const [active, setActive] = useState('')
  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean)
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) }),
      { rootMargin: '-40% 0px -50% 0px' }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])
  return active
}

function useScrolledPast(threshold = 30) {
  const [past, setPast] = useState(false)
  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return past
}

/* ================================================================== */
/* small pieces                                                        */
/* ================================================================== */

function SheetStrip({ no, name }) {
  return (
    <div className="sheet-strip">
      <span className="sheet-strip-no">SHEET {no}</span>
      <span className="sheet-strip-name">{name}</span>
    </div>
  )
}

function SheetHeader({ no, children }) {
  return (
    <div className="sheet-header">
      <span className="sheet-no">SHEET {no}/07</span>
      <span className="sheet-rule" />
    </div>
  )
}

/* ================================================================== */
/* app                                                                  */
/* ================================================================== */

export default function App() {
  const typed = useTypewriter(ROLES)
  const active = useActiveSection()
  const scrolled = useScrolledPast()

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <div>
      <div className="grid-bg" aria-hidden="true" />
      <div className="reg-marks" aria-hidden="true">
        <span className="reg-mark tl" /><span className="reg-mark tr" />
        <span className="reg-mark bl" /><span className="reg-mark br" />
      </div>

      {/* ---------------- navbar ---------------- */}
      <nav className={`site-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="wrap nav-inner">
          <button className="logo-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
            <span className="logo-mark">RS</span>
            <span className="logo-text">rahul<span className="dim">.dev</span></span>
          </button>

          <div className="tab-bar">
            {NAV.map((n) => (
              <button key={n.id} className={`tab ${active === n.id ? 'active' : ''}`} onClick={() => scrollTo(n.id)}>
                <span className="tab-no">{n.no}</span>
                {n.label}
              </button>
            ))}
          </div>

          <button className="btn ghost" style={{ padding: '0.5rem 1.1rem', fontSize: '0.72rem' }} onClick={() => scrollTo('contact')}>
            Contact
          </button>
        </div>
      </nav>

      {/* ---------------- hero (cover sheet) ---------------- */}
      <header id="hero" className="hero">
        <div className="hero-inner">
          <div className="hero-eyebrow">
            <span>DRAWING NO. RS—2026 &nbsp;·&nbsp; REV. 03</span>
            <span className="status"><span className="pulse" />OPEN TO WORK</span>
          </div>

          <Reveal>
            <h1 className="hero-name">Rahul <span className="accent">S.</span></h1>
          </Reveal>

          <Reveal delay={80}>
            <div className="dim-line">
              <span className="dim-tick" />
              <span className="dim-rule" />
              <span className="dim-label">{typed}<span className="type-cursor" /></span>
              <span className="dim-rule" />
              <span className="dim-tick" />
            </div>
          </Reveal>

          <Reveal delay={140}>
            <p className="hero-desc">
              I&rsquo;m a final-year Computer Science student. I like building real, working apps —
              the part you click with React, and the part that makes it work with Java and
              Spring Boot.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="hero-cta">
              <button className="btn primary" onClick={() => scrollTo('projects')}>View Projects</button>
              <button className="btn ghost" onClick={() => scrollTo('contact')}>Contact Me</button>
            </div>
          </Reveal>
        </div>
      </header>

      {/* ---------------- about ---------------- */}
      <section id="about" className="wrap section">
        <Reveal>
          <SheetHeader no="01" />
          <h2 className="sec-title">A builder, not just a <span className="accent">student</span></h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="about-text">
            I&rsquo;d rather ship something real than only study the theory behind it. I build the
            screens people use with <strong>React</strong>, and the logic behind them with{' '}
            <strong>Java</strong> and <strong>Spring Boot</strong>. I care about clean, simple
            code, and about making things that people actually enjoy using — from the first click
            to the last.
          </p>
        </Reveal>
      </section>

      {/* ---------------- skills ---------------- */}
      <section id="skills" className="wrap section">
        <Reveal>
          <SheetHeader no="02" />
          <h2 className="sec-title">What I work <span className="accent">with</span></h2>
        </Reveal>
        <div className="skill-cloud">
          {SKILLS.map((s, i) => (
            <Reveal key={s} delay={i * 35} as="span" className="panel skill-pill">
              {s}
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- experience ---------------- */}
      <section id="experience" className="wrap section">
        <Reveal>
          <SheetHeader no="03" />
          <h2 className="sec-title">How I got <span className="accent">here</span></h2>
        </Reveal>

        <div className="panel log-list" style={{ marginTop: '2rem' }}>
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.company} delay={i * 100} as="div" className="log-item">
              <span className="log-time">{e.time}</span>
              <div>
                <h3 className="log-role">{e.role}</h3>
                <p className="log-meta">{e.company} · {e.place}</p>
                <ul className="log-points">
                  {e.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="edu-label">
            <GraduationCap size={16} color="var(--cyan)" />
            <span className="sheet-strip-name" style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--ink-dim)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Education</span>
          </div>
          <div className="edu-grid">
            {EDUCATION.map((ed) => (
              <div key={ed.school} className="panel edu-card">
                <p className="edu-school">{ed.school}</p>
                <p className="edu-degree">{ed.degree}</p>
                <p className="edu-time">{ed.time}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ---------------- projects ---------------- */}
      <section id="projects" className="wrap section">
        <Reveal>
          <SheetHeader no="04" />
          <h2 className="sec-title">Things I&rsquo;ve <span className="accent">built</span></h2>
        </Reveal>

        <div className="project-list" style={{ marginTop: '2rem' }}>
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 100} className="panel project-card">
              <SheetStrip no={`04.${p.id}`} name={`${p.title.toLowerCase().replace(/\s+/g, '-')}${p.featured ? '.featured' : ''}`} />
              <div className="project-body">
                <div className="project-heading">
                  <h3>{p.title}</h3>
                  {p.featured && <span className="project-flag">Featured</span>}
                </div>
                <p className="project-tag">{p.tag}</p>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tech">
                  {p.tech.map((t) => <span key={t} className="tech-pill">{t}</span>)}
                </div>
                {p.note && <p className="project-note">{p.note}</p>}
                {p.links && (
                  <div className="project-links">
                    {p.links.map((l) => (
                      <a key={l.label} className="project-link" href={l.href} target="_blank" rel="noopener noreferrer">
                        {l.label} <ArrowUpRight size={13} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- certifications ---------------- */}
      <section id="certifications" className="wrap section">
        <Reveal>
          <SheetHeader no="05" />
          <h2 className="sec-title">Always learning <span className="accent">something new</span></h2>
        </Reveal>
        <div className="cert-grid" style={{ marginTop: '1.5rem' }}>
          {CERTS.map((c, i) => (
            <Reveal key={c.name} delay={i * 80} className="panel cert-card">
              <Award size={17} color="var(--orange)" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div>
                <p className="cert-name">{c.name}</p>
                <p className="cert-by">{c.by}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- tech stack — schematic pipeline (signature) ---------------- */}
      <section id="stack" className="wrap section">
        <Reveal>
          <SheetHeader no="06" />
          <h2 className="sec-title">How a request travels through my <span className="accent">apps</span></h2>
          <p className="sec-desc">
            Top to bottom — from the screen you tap, to the server that answers, to the database
            that remembers, held together by the tools I build with every day. The signal below
            traces that same path.
          </p>
        </Reveal>

        <Reveal delay={80} className="schematic">
          {STACK_LAYERS.map((layer, i) => {
            const Icon = layer.icon
            return (
              <div key={layer.title}>
                <div className="schem-node">
                  <div className="schem-port"><Icon size={19} color="var(--cyan)" /></div>
                  <div className="schem-body">
                    <p className="schem-sub">{layer.subtitle}</p>
                    <h3 className="schem-title">{layer.title}</h3>
                    <p className="schem-blurb">{layer.blurb}</p>
                    <div className="schem-items">
                      {layer.items.map((it) => <span key={it} className="tech-pill">{it}</span>)}
                    </div>
                  </div>
                </div>
                {i < STACK_LAYERS.length - 1 && (
                  <div className="schem-connector">
                    <span className="wire"><span className="wire-line" style={{ animationDelay: `${i * -0.9}s` }} /></span>
                  </div>
                )}
              </div>
            )
          })}
        </Reveal>
      </section>

      {/* ---------------- contact — title block ---------------- */}
      <section id="contact" className="wrap section">
        <Reveal>
          <SheetHeader no="07" />
          <h2 className="contact-title">Let&rsquo;s build <span className="accent">something good.</span></h2>
          <p className="sec-desc">Open to full-stack and frontend roles. Based in Bengaluru, happy to work remote.</p>
        </Reveal>

        <Reveal delay={100} className="panel title-block">
          <div className="tb-row">
            <span className="tb-key">Drawn by</span>
            <span className="tb-val">Rahul S</span>
          </div>
          <div className="tb-row">
            <span className="tb-key">Title</span>
            <span className="tb-val">Full-Stack Developer — Portfolio</span>
          </div>
          <div className="tb-row">
            <span className="tb-key">Status</span>
            <span className="tb-val"><span className="tb-status"><span className="pulse" />Open to work</span></span>
          </div>
          <div className="tb-row">
            <span className="tb-key">Email</span>
            <span className="tb-val"><a href="mailto:Srinivasrahul838@gmail.com"><Mail size={14} /> Srinivasrahul838@gmail.com <ArrowUpRight size={12} className="arr" /></a></span>
          </div>
          <div className="tb-row">
            <span className="tb-key">Phone</span>
            <span className="tb-val"><a href="tel:+917337634886"><Phone size={14} /> +91 73376 34886 <ArrowUpRight size={12} className="arr" /></a></span>
          </div>
          <div className="tb-row">
            <span className="tb-key">LinkedIn</span>
            <span className="tb-val"><a href="https://www.linkedin.com/in/rahul-s-6460b1238" target="_blank" rel="noopener noreferrer"><Linkedin size={14} /> linkedin.com/in/rahul-s <ArrowUpRight size={12} className="arr" /></a></span>
          </div>
          <div className="tb-row">
            <span className="tb-key">GitHub</span>
            <span className="tb-val"><a href="https://github.com/" target="_blank" rel="noopener noreferrer"><Github size={14} /> github.com <ArrowUpRight size={12} className="arr" /></a></span>
          </div>
          <div className="tb-row">
            <span className="tb-key">Sheet</span>
            <span className="tb-val" style={{ fontFamily: 'var(--mono)', fontSize: '0.82rem', color: 'var(--ink-dim)' }}>07 of 07 — Rev. 2026</span>
          </div>
        </Reveal>
      </section>

      {/* ---------------- footer ---------------- */}
      <footer className="site-footer">
        <div className="wrap footer-inner">
          <span className="footer-meta">© {new Date().getFullYear()} Rahul S</span>
          <span className="footer-meta" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <Terminal size={13} /> drafted with React
          </span>
        </div>
      </footer>
    </div>
  )
}
