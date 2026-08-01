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

// Each section is framed as a file you'd see in a real project folder —
// the dot color matches the "file type" the way an editor's tab bar would.
const NAV = [
  { id: 'about', label: 'about.md', dot: 'var(--blue)' },
  { id: 'skills', label: 'skills.json', dot: 'var(--yellow)' },
  { id: 'experience', label: 'experience.log', dot: 'var(--green)' },
  { id: 'projects', label: 'projects/', dot: 'var(--purple)' },
  { id: 'certifications', label: 'certs.yml', dot: 'var(--orange)' },
  { id: 'stack', label: 'stack.config', dot: 'var(--red)' },
  { id: 'contact', label: 'contact.sh', dot: 'var(--green)' },
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

function WindowChrome({ title }) {
  return (
    <div className="chrome-bar">
      <span className="dot red" />
      <span className="dot yellow" />
      <span className="dot green" />
      <span className="chrome-title">{title}</span>
    </div>
  )
}

function FileLabel({ dot, children }) {
  return (
    <p className="file-label">
      <span className="tab-dot" style={{ background: dot }} />
      {children}
    </p>
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
                <span className="tab-dot" style={{ background: n.dot }} />
                {n.label}
              </button>
            ))}
          </div>

          <button className="btn ghost" style={{ padding: '0.5rem 1rem', fontSize: '0.78rem' }} onClick={() => scrollTo('contact')}>
            contact.sh
          </button>
        </div>
      </nav>

      {/* ---------------- hero ---------------- */}
      <header id="hero" className="hero">
        <div className="hero-grid">
          <div>
            <div className="hero-eyebrow">
              <span className="pulse" />
              open_to_work: true
            </div>

            <div className="panel code-window">
              <WindowChrome title="rahul.jsx" />
              <div className="code-body">
                <div className="code-line"><span className="line-no">1</span><span><span className="tok-key">const</span> <span className="tok-purple">developer</span> <span className="tok-punc">=</span> <span className="tok-punc">{'{'}</span></span></div>
                <div className="code-line"><span className="line-no">2</span><span>&nbsp;&nbsp;name<span className="tok-punc">:</span> <span className="tok-str">"Rahul S"</span><span className="tok-punc">,</span></span></div>
                <div className="code-line"><span className="line-no">3</span><span>&nbsp;&nbsp;role<span className="tok-punc">:</span> <span className="tok-str">"{typed}<span className="type-cursor" />"</span><span className="tok-punc">,</span></span></div>
                <div className="code-line"><span className="line-no">4</span><span>&nbsp;&nbsp;base<span className="tok-punc">:</span> <span className="tok-str">"Bengaluru, India"</span><span className="tok-punc">,</span></span></div>
                <div className="code-line"><span className="line-no">5</span><span><span className="tok-punc">{'}'}</span></span></div>
              </div>
            </div>

            <p className="hero-desc">
              I&rsquo;m a final-year Computer Science student. I like building real, working apps —
              the part you click with React, and the part that makes it work with Java and
              Spring Boot.
            </p>

            <div className="hero-cta">
              <button className="btn primary" onClick={() => scrollTo('projects')}>View Projects</button>
              <button className="btn ghost" onClick={() => scrollTo('contact')}>Contact Me</button>
            </div>
          </div>
        </div>
      </header>

      {/* ---------------- about ---------------- */}
      <section id="about" className="wrap section">
        <Reveal>
          <FileLabel dot="var(--blue)">about.md</FileLabel>
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
          <FileLabel dot="var(--yellow)">skills.json</FileLabel>
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
          <FileLabel dot="var(--green)">experience.log</FileLabel>
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '3rem', marginBottom: '0' }}>
            <GraduationCap size={16} color="var(--blue)" />
            <span className="file-label" style={{ margin: 0 }}>education</span>
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
          <FileLabel dot="var(--purple)">projects/</FileLabel>
          <h2 className="sec-title">Things I&rsquo;ve <span className="accent">built</span></h2>
        </Reveal>

        <div className="project-list" style={{ marginTop: '2rem' }}>
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 100} className="panel project-card">
              <WindowChrome title={`${p.title.toLowerCase().replace(/\s+/g, '-')}${p.featured ? '.featured' : ''}.jsx`} />
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
          <FileLabel dot="var(--orange)">certs.yml</FileLabel>
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

      {/* ---------------- tech stack ---------------- */}
      <section id="stack" className="wrap section">
        <Reveal>
          <FileLabel dot="var(--red)">stack.config</FileLabel>
          <h2 className="sec-title">How a request travels through my <span className="accent">apps</span></h2>
          <p className="sec-desc">
            Top to bottom — from the screen you tap, to the server that answers, to the database
            that remembers, held together by the tools I build with every day.
          </p>
        </Reveal>

        <div className="panel stack-list">
          {STACK_LAYERS.map((layer, i) => {
            const Icon = layer.icon
            return (
              <Reveal key={layer.title} delay={i * 90} as="div" className="stack-row">
                <div className="stack-icon"><Icon size={19} color="var(--blue)" /></div>
                <div>
                  <p className="stack-sub">{layer.subtitle}</p>
                  <h3 className="stack-title">{layer.title}</h3>
                  <p className="stack-blurb">{layer.blurb}</p>
                  <div className="stack-items">
                    {layer.items.map((it) => <span key={it} className="tech-pill">{it}</span>)}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* ---------------- contact ---------------- */}
      <section id="contact" className="wrap section">
        <Reveal>
          <FileLabel dot="var(--green)">contact.sh</FileLabel>
          <h2 className="contact-title">Let&rsquo;s build <span className="accent">something good.</span></h2>
          <p className="sec-desc">Open to full-stack and frontend roles. Based in Bengaluru, happy to work remote.</p>
        </Reveal>

        <Reveal delay={100} className="panel code-window" style={{ marginTop: '0.5rem' }}>
          <WindowChrome title="contact.sh — zsh" />
          <div className="terminal-body">
            <p className="term-line"><span className="term-prompt">$</span>whoami</p>
            <p className="term-line" style={{ color: 'var(--text)' }}>Rahul S — full-stack developer, open to work</p>
            <p className="term-line" style={{ marginTop: '0.6rem' }}><span className="term-prompt">$</span>cat contact.txt</p>
            <div className="contact-links">
              <a className="contact-link" href="mailto:Srinivasrahul838@gmail.com">
                <Mail size={15} /> Srinivasrahul838@gmail.com <ArrowUpRight size={12} className="arr" />
              </a>
              <a className="contact-link" href="tel:+917337634886">
                <Phone size={15} /> +91 73376 34886 <ArrowUpRight size={12} className="arr" />
              </a>
              <a className="contact-link" href="https://www.linkedin.com/in/rahul-s-6460b1238" target="_blank" rel="noopener noreferrer">
                <Linkedin size={15} /> linkedin.com/in/rahul-s <ArrowUpRight size={12} className="arr" />
              </a>
              <a className="contact-link" href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <Github size={15} /> github.com <ArrowUpRight size={12} className="arr" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---------------- footer ---------------- */}
      <footer className="site-footer">
        <div className="wrap footer-inner">
          <span className="footer-meta">© {new Date().getFullYear()} Rahul S</span>
          <span className="footer-meta" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <Terminal size={13} /> built with React
          </span>
        </div>
      </footer>
    </div>
  )
}
