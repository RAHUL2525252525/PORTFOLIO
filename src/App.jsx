import { useEffect, useRef, useState } from 'react'
import {
  Github, Linkedin, Mail, Phone, ArrowUpRight, Sparkles,
  Code2, Server, Database, Wrench, Award, GraduationCap,
  MapPin, Briefcase, Rocket, Download, Menu, X,
} from 'lucide-react'
import './index.css'

/* ================================================================== */
/* content                                                              */
/* ================================================================== */

const ROLES = [
  'React Developer',
  'Frontend Developer',
  'Software Developer',
  'Java Full Stack Developer',
]

const NAV = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

const ABOUT_CARDS = [
  { icon: GraduationCap, label: 'Education', lines: ['B.E. Computer Science', 'ACS College of Engineering', '2023 – 2026'] },
  { icon: MapPin, label: 'Location', lines: ['Bengaluru, India', 'Available for', 'opportunities'] },
  { icon: Mail, label: 'Email', lines: ['Srinivasrahul838', '@gmail.com'] },
  { icon: Briefcase, label: 'Availability', lines: ['Full time', 'Open to work'] },
]

const SKILL_BARS = [
  { name: 'HTML / CSS', level: 92 },
  { name: 'JavaScript', level: 85 },
  { name: 'React.js', level: 88 },
  { name: 'Java / Spring Boot', level: 80 },
  { name: 'MySQL / REST API', level: 78 },
]

const SKILL_TAGS = ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Java', 'Spring Boot', 'MySQL', 'REST API', 'Git', 'GitHub']

// Real order a request travels: screen, then server, then database, then tools.
const STACK_LAYERS = [
  { icon: Code2, title: 'What you see', subtitle: 'Frontend', items: ['React', 'Tailwind CSS', 'HTML', 'CSS'], blurb: 'The screens and buttons a person taps.' },
  { icon: Server, title: 'What runs it', subtitle: 'Backend', items: ['Java', 'Spring Boot', 'REST API'], blurb: 'The logic behind the screen. It answers every request.' },
  { icon: Database, title: 'Where data lives', subtitle: 'Database', items: ['MySQL'], blurb: 'Where everything gets saved, and read back later.' },
  { icon: Wrench, title: 'How I build it', subtitle: 'Tools', items: ['Git', 'GitHub'], blurb: 'Version control, and where the code lives online.' },
]

const EXPERIENCE = [
  {
    icon: Briefcase,
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
    icon: Rocket,
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

const EDUCATION = [
  { school: 'Dr. ACS College of Engineering', degree: 'B.E., Computer Science and Engineering', time: '2023 – 2026 · Bengaluru' },
  { school: 'PVP Polytechnic', degree: 'Diploma, Information Science and Engineering', time: '2020 – 2023 · Bengaluru' },
]

const PROJECTS = [
  {
    id: '01',
    title: 'ShopSphere',
    tag: 'a full-stack online store',
    desc: 'A complete online shop. People can browse, search, add to cart, and track orders. Behind it, an admin panel manages products, users, and stock.',
    tech: ['React', 'Spring Boot', 'MySQL', 'REST API'],
    note: 'The server sleeps to save cost. Give it 30–60 seconds to wake up before the live site loads fully.',
    links: [
      { label: 'Live site', href: 'https://shopsphere-8m8f.vercel.app/' },
      { label: 'Backend', href: 'https://shopsphere-backend-5umn.onrender.com' },
    ],
    featured: true,
  },
  {
    id: '02',
    title: 'AI Exam Companion',
    tag: 'an exam practice app',
    desc: 'A practice test app that scores you right away. A built-in AI chatbot explains why an answer was wrong, instead of just marking it incorrect.',
    tech: ['JavaScript', 'Firebase', 'Groq API'],
    links: [{ label: 'Live site', href: 'https://ai-exam-companion-ghzc.onrender.com' }],
  },
  {
    id: '03',
    title: 'Personal Portfolio',
    tag: 'an earlier version of this site',
    desc: 'My first portfolio site. Built to be fast, clean, and easy to read on any device.',
    tech: ['React', 'Vite', 'CSS'],
  },
]

const CERTS = [
  { name: 'Introduction to Java', by: 'Infosys Springboard' },
  { name: 'Cloud Computing', by: 'Infosys Springboard' },
  { name: 'Software Engineering', by: 'Infosys Springboard' },
  { name: 'AI and Green Skills', by: 'Edunet Foundation, Skills4Future' },
]

const CONTACTS = [
  { icon: Mail, label: 'Email', value: 'Srinivasrahul838@gmail.com', href: 'mailto:Srinivasrahul838@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 73376 34886', href: 'tel:+917337634886' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/rahul-s', href: 'https://www.linkedin.com/in/rahul-s-6460b1238' },
  { icon: Github, label: 'GitHub', value: 'github.com', href: 'https://github.com/' },
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
  const [active, setActive] = useState('hero')
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

function Eyebrow({ children }) {
  return (
    <div className="eyebrow-row">
      <span className="eyebrow-dot" />
      <span className="eyebrow-text">{children}</span>
    </div>
  )
}

function Bar({ label, level, delay }) {
  const [ref, inView] = useReveal()
  return (
    <div className="bar-row" ref={ref}>
      <div className="bar-top">
        <span className="bar-label">{label}</span>
        <span className="bar-pct">{level}%</span>
      </div>
      <div className="bar-track">
        <div className="bar-fill" style={{ width: inView ? `${level}%` : '0%', transitionDelay: `${delay}ms` }} />
      </div>
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
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return (
    <div>
      {/* ---------------- navbar ---------------- */}
      <nav className={`site-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="wrap nav-inner">
          <button className="logo-btn" onClick={() => scrollTo('hero')} aria-label="Back to top">
            <span className="logo-mark">RS</span>
            <span className="logo-text">Rahul S</span>
          </button>

          <div className="tab-bar">
            {NAV.map((n) => (
              <button key={n.id} className={`tab ${active === n.id ? 'active' : ''}`} onClick={() => scrollTo(n.id)}>
                {n.label}
              </button>
            ))}
          </div>

          <button className="btn primary nav-cta" onClick={() => scrollTo('contact')}>
            <Download size={14} /> Say hello
          </button>

          <button className="menu-toggle" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            {NAV.map((n) => (
              <button key={n.id} className={`mobile-tab ${active === n.id ? 'active' : ''}`} onClick={() => scrollTo(n.id)}>
                {n.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ---------------- hero ---------------- */}
      <header id="hero" className="hero">
        <div className="hero-decor" aria-hidden="true">
          <span className="ring ring-a" />
        </div>

        <div className="wrap hero-inner">
          <div className="hero-copy">
            <Reveal>
              <div className="hero-eyebrow">
                <span className="pulse" /> Open to work · Bengaluru, India
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="hero-name">Hi, I&rsquo;m<br /><span className="accent">Rahul S</span></h1>
            </Reveal>

            <Reveal delay={140}>
              <div className="hero-role">
                <span className="role-text">{typed}</span><span className="type-cursor" />
              </div>
            </Reveal>

            <Reveal delay={200}>
              <p className="hero-desc">
                I&rsquo;m in my final year of a Computer Science degree. I like to build real
                apps that work — the part you see and click, made with React, and the part
                that makes it run, made with Java and Spring Boot.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="hero-cta">
                <button className="btn primary" onClick={() => scrollTo('projects')}>View my work <ArrowUpRight size={15} /></button>
                <button className="btn ghost" onClick={() => scrollTo('contact')}>Let&rsquo;s talk</button>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="hero-socials">
                {CONTACTS.slice(2).map((c) => {
                  const Icon = c.icon
                  return (
                    <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label={c.label}>
                      <Icon size={16} />
                    </a>
                  )
                })}
              </div>
            </Reveal>
          </div>

          <Reveal delay={180} className="hero-panel-wrap">
            <div className="facts-panel">
              <p className="facts-kicker"><Sparkles size={13} /> Currently</p>
              <p className="facts-headline">Final-year CS student, building full-stack products.</p>
              <div className="facts-list">
                <div className="facts-row">
                  <span className="facts-num">03</span>
                  <span className="facts-label">Live projects shipped</span>
                </div>
                <div className="facts-row">
                  <span className="facts-num">02</span>
                  <span className="facts-label">Internships completed</span>
                </div>
                <div className="facts-row">
                  <span className="facts-num">04</span>
                  <span className="facts-label">Certifications earned</span>
                </div>
              </div>
              <div className="facts-foot">
                <span className="facts-dot" /> Open to full-time roles
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      {/* ---------------- about ---------------- */}
      <section id="about" className="wrap section">
        <Reveal><Eyebrow>About me</Eyebrow></Reveal>
        <div className="about-grid">
          <Reveal delay={60}>
            <h2 className="sec-title">A builder, not just a <em>student</em></h2>
            <p className="about-text">
              I&rsquo;d rather make something real than only study the theory. I build the
              screens people use with <strong>React</strong>, and the logic behind them with{' '}
              <strong>Java</strong> and <strong>Spring Boot</strong>. I like clean, simple code,
              and I care about making things people actually enjoy using — from the first click
              to the last.
            </p>
          </Reveal>

          <div className="about-cards">
            {ABOUT_CARDS.map((c, i) => {
              const Icon = c.icon
              return (
                <Reveal key={c.label} delay={100 + i * 60} className="panel about-card">
                  <span className="about-icon"><Icon size={17} /></span>
                  <p className="about-label">{c.label}</p>
                  {c.lines.map((l) => <p key={l} className="about-line">{l}</p>)}
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---------------- skills ---------------- */}
      <section id="skills" className="section section-tint">
        <div className="wrap">
          <Reveal><Eyebrow>Skills</Eyebrow></Reveal>
          <Reveal delay={60}><h2 className="sec-title">Technologies I work <em>with</em></h2></Reveal>

          <div className="skills-grid">
            <Reveal delay={100} className="skill-tags">
              {SKILL_TAGS.map((s, i) => (
                <span key={s} className="tag-pill" style={{ transitionDelay: `${i * 30}ms` }}>{s}</span>
              ))}
            </Reveal>

            <div className="bars">
              {SKILL_BARS.map((b, i) => (
                <Bar key={b.name} label={b.name} level={b.level} delay={i * 90} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- projects ---------------- */}
      <section id="projects" className="wrap section">
        <Reveal><Eyebrow>Projects</Eyebrow></Reveal>
        <Reveal delay={60}><h2 className="sec-title">Things I&rsquo;ve <em>built</em></h2></Reveal>

        <div className="project-grid">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 100} className="panel project-card">
              <div className="project-head">
                <span className="project-num">{p.id}</span>
                {p.featured && <span className="project-flag">Featured</span>}
              </div>
              <h3 className="project-title">{p.title}</h3>
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
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- stack pipeline ---------------- */}
      <section className="wrap section">
        <Reveal><Eyebrow>Architecture</Eyebrow></Reveal>
        <Reveal delay={60}>
          <h2 className="sec-title">How a request moves through my <em>apps</em></h2>
          <p className="sec-desc">
            Top to bottom — the screen you tap, the server that answers, the database that
            remembers, held together by the tools I use every day.
          </p>
        </Reveal>

        <Reveal delay={100} className="pipeline">
          {STACK_LAYERS.map((layer, i) => {
            const Icon = layer.icon
            return (
              <div key={layer.title}>
                <div className="pipe-node">
                  <div className="pipe-icon"><Icon size={19} /></div>
                  <div className="pipe-body panel">
                    <p className="pipe-sub">{layer.subtitle}</p>
                    <h3 className="pipe-title">{layer.title}</h3>
                    <p className="pipe-blurb">{layer.blurb}</p>
                    <div className="pipe-items">
                      {layer.items.map((it) => <span key={it} className="tech-pill">{it}</span>)}
                    </div>
                  </div>
                </div>
                {i < STACK_LAYERS.length - 1 && (
                  <div className="pipe-connector">
                    <span className="wire"><span className="wire-line" style={{ animationDelay: `${i * -0.9}s` }} /></span>
                  </div>
                )}
              </div>
            )
          })}
        </Reveal>
      </section>

      {/* ---------------- experience ---------------- */}
      <section id="experience" className="section section-dark">
        <div className="wrap">
          <Reveal><Eyebrow>Experience</Eyebrow></Reveal>
          <Reveal delay={60}><h2 className="sec-title light">How I got <em>here</em></h2></Reveal>

          <div className="exp-grid">
            {EXPERIENCE.map((e, i) => {
              const Icon = e.icon
              return (
                <Reveal key={e.company} delay={i * 100} className="panel exp-card">
                  <span className="exp-icon"><Icon size={18} /></span>
                  <p className="exp-time">{e.time} · {e.place}</p>
                  <h3 className="exp-role">{e.role}</h3>
                  <p className="exp-meta">{e.company}</p>
                  <ul className="exp-points">
                    {e.points.map((pt) => <li key={pt}>{pt}</li>)}
                  </ul>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={120}>
            <div className="edu-label"><GraduationCap size={15} /> Education</div>
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
        </div>
      </section>

      {/* ---------------- certifications ---------------- */}
      <section className="wrap section">
        <Reveal><Eyebrow>Certifications</Eyebrow></Reveal>
        <Reveal delay={60}><h2 className="sec-title">Always learning <em>something new</em></h2></Reveal>
        <div className="cert-grid">
          {CERTS.map((c, i) => (
            <Reveal key={c.name} delay={i * 80} className="panel cert-card">
              <span className="cert-icon"><Award size={16} /></span>
              <div>
                <p className="cert-name">{c.name}</p>
                <p className="cert-by">{c.by}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- contact ---------------- */}
      <section id="contact" className="section section-dark contact-section">
        <div className="wrap">
          <Reveal><Eyebrow>Contact</Eyebrow></Reveal>
          <Reveal delay={60}>
            <h2 className="sec-title light">Let&rsquo;s build <em>something good.</em></h2>
            <p className="sec-desc light">Open to full-stack and frontend roles. Based in Bengaluru, happy to work remote.</p>
          </Reveal>

          <div className="contact-grid">
            {CONTACTS.map((c, i) => {
              const Icon = c.icon
              return (
                <Reveal key={c.label} delay={i * 70} className="panel contact-card">
                  <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="contact-link">
                    <span className="contact-icon"><Icon size={17} /></span>
                    <span>
                      <p className="contact-label">{c.label}</p>
                      <p className="contact-value">{c.value}</p>
                    </span>
                    <ArrowUpRight size={15} className="contact-arrow" />
                  </a>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---------------- footer ---------------- */}
      <footer className="site-footer">
        <div className="wrap footer-inner">
          <span className="footer-meta">© {new Date().getFullYear()} Rahul S</span>
          <span className="footer-meta footer-built"><Sparkles size={13} /> built with React</span>
        </div>
      </footer>
    </div>
  )
}
