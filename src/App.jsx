import { useEffect, useRef, useState } from 'react'
import {
  Github, Linkedin, Mail, Phone, ArrowUpRight, Sparkles,
  Code2, Server, Database, Wrench, Award, GraduationCap,
} from 'lucide-react'
import './index.css'

/* ================================================================== */
/* content — kept in plain, simple words                               */
/* ================================================================== */

const ROLES = [
  'React Developer',
  'Frontend Developer',
  'Software Developer',
  'Java Full Stack Developer',
]

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certs' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
]

const SKILLS = [
  'React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS',
  'Java', 'Spring Boot', 'MySQL', 'REST API', 'Git', 'GitHub',
]

// Real order a request travels: screen, then server, then database, then tools.
const STACK_LAYERS = [
  {
    icon: Code2,
    title: 'What you see',
    subtitle: 'Frontend',
    items: ['React', 'Tailwind CSS', 'HTML', 'CSS'],
    blurb: 'The screens and buttons a person taps.',
  },
  {
    icon: Server,
    title: 'What runs it',
    subtitle: 'Backend',
    items: ['Java', 'Spring Boot', 'REST API'],
    blurb: 'The logic behind the screen. It answers every request.',
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
    blurb: 'Version control, and where the code lives online.',
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

const EDUCATION = [
  { school: 'Dr. ACS College of Engineering', degree: 'B.E., Computer Science and Engineering', time: '2023 – 2026 · Bengaluru' },
  { school: 'PVP Polytechnic', degree: 'Diploma, Information Science and Engineering', time: '2020 – 2023 · Bengaluru' },
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

// section marker: a gold-ringed medallion with the sheet number, joined by
// a thin gold thread that runs to the section title — the through-line motif.
function Eyebrow({ index }) {
  return (
    <div className="eyebrow-row">
      <span className="medallion">{index}</span>
      <span className="thread" />
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
  const heroRef = useRef(null)

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  // gold spotlight that follows the pointer in the hero — a quiet, premium touch
  const handleHeroMove = (e) => {
    const el = heroRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--x', `${e.clientX - rect.left}px`)
    el.style.setProperty('--y', `${e.clientY - rect.top}px`)
  }

  return (
    <div>
      <div className="vignette" aria-hidden="true" />

      {/* ---------------- navbar ---------------- */}
      <nav className={`site-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="wrap nav-inner">
          <button className="logo-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
            <span className="logo-ring">R</span>
            <span className="logo-text">rahul<span className="dim">.dev</span></span>
          </button>

          <div className="tab-bar">
            {NAV.map((n) => (
              <button key={n.id} className={`tab ${active === n.id ? 'active' : ''}`} onClick={() => scrollTo(n.id)}>
                {n.label}
              </button>
            ))}
          </div>

          <button className="btn ghost" style={{ padding: '0.6rem 1.3rem', fontSize: '0.74rem' }} onClick={() => scrollTo('contact')}>
            Say hi
          </button>
        </div>
      </nav>

      {/* ---------------- hero ---------------- */}
      <header id="hero" className="hero" ref={heroRef} onMouseMove={handleHeroMove}>
        <div className="hero-spotlight" aria-hidden="true" />
        <div className="hero-inner">
          <Reveal>
            <div className="hero-eyebrow">
              <span className="pulse" />
              Open to work · Bengaluru, India
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="hero-name">Hi, I&rsquo;m <span className="shine">Rahul</span>.</h1>
          </Reveal>

          <Reveal delay={140}>
            <div className="hero-role">
              <span className="rule" />
              <span className="role-text">{typed}<span className="type-cursor" /></span>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <p className="hero-desc">
              I&rsquo;m in my final year of a Computer Science degree. I like to build real apps
              that work — the part you see and click, made with React, and the part that makes
              it run, made with Java and Spring Boot.
            </p>
          </Reveal>

          <Reveal delay={260}>
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
          <Eyebrow index="01" />
          <h2 className="sec-title">A builder, not just a <em>student</em></h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="about-text">
            I&rsquo;d rather make something real than only study the theory. I build the screens
            people use with <strong>React</strong>, and the logic behind them with{' '}
            <strong>Java</strong> and <strong>Spring Boot</strong>. I like clean, simple code,
            and I care about making things people actually enjoy using — from the first click to
            the last.
          </p>
        </Reveal>
      </section>

      {/* ---------------- skills ---------------- */}
      <section id="skills" className="wrap section">
        <Reveal>
          <Eyebrow index="02" />
          <h2 className="sec-title">What I work <em>with</em></h2>
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
          <Eyebrow index="03" />
          <h2 className="sec-title">How I got <em>here</em></h2>
        </Reveal>

        <div className="timeline">
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.company} delay={i * 100} as="div" className="timeline-item">
              <span className="timeline-dot" />
              <p className="tl-time">{e.time} · {e.place}</p>
              <h3 className="tl-role">{e.role}</h3>
              <p className="tl-meta">{e.company}</p>
              <ul className="tl-points">
                {e.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="edu-label">
            <GraduationCap size={15} color="var(--gold)" /> Education
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
          <Eyebrow index="04" />
          <h2 className="sec-title">Things I&rsquo;ve <em>built</em></h2>
        </Reveal>

        <div className="project-list">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 100} className="panel project-card">
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
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- certifications ---------------- */}
      <section id="certifications" className="wrap section">
        <Reveal>
          <Eyebrow index="05" />
          <h2 className="sec-title">Always learning <em>something new</em></h2>
        </Reveal>
        <div className="cert-grid">
          {CERTS.map((c, i) => (
            <Reveal key={c.name} delay={i * 80} className="panel cert-card">
              <span className="cert-icon"><Award size={16} color="var(--gold)" /></span>
              <div>
                <p className="cert-name">{c.name}</p>
                <p className="cert-by">{c.by}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- tech stack pipeline ---------------- */}
      <section id="stack" className="wrap section">
        <Reveal>
          <Eyebrow index="06" />
          <h2 className="sec-title">How a request moves through my <em>apps</em></h2>
          <p className="sec-desc">
            Top to bottom — the screen you tap, the server that answers, the database that
            remembers, held together by the tools I use every day.
          </p>
        </Reveal>

        <Reveal delay={80} className="pipeline">
          {STACK_LAYERS.map((layer, i) => {
            const Icon = layer.icon
            return (
              <div key={layer.title}>
                <div className="pipe-node">
                  <div className="pipe-icon"><Icon size={19} color="var(--gold)" /></div>
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

      {/* ---------------- contact ---------------- */}
      <section id="contact" className="wrap section">
        <Reveal>
          <Eyebrow index="07" />
          <h2 className="contact-title">Let&rsquo;s build <em>something good.</em></h2>
          <p className="sec-desc">Open to full-stack and frontend roles. Based in Bengaluru, happy to work remote.</p>
        </Reveal>

        <div className="contact-grid">
          {CONTACTS.map((c, i) => {
            const Icon = c.icon
            return (
              <Reveal key={c.label} delay={i * 70} as="div" className="panel contact-card">
                <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%' }}>
                  <span className="contact-icon"><Icon size={17} /></span>
                  <span>
                    <p className="contact-label">{c.label}</p>
                    <p className="contact-value">{c.value}</p>
                  </span>
                </a>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* ---------------- footer ---------------- */}
      <footer className="site-footer">
        <div className="wrap footer-inner">
          <span className="footer-meta">© {new Date().getFullYear()} Rahul S</span>
          <span className="footer-meta" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <Sparkles size={13} /> built with React
          </span>
        </div>
      </footer>
    </div>
  )
}
