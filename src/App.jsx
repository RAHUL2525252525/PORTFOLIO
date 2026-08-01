import { useEffect, useMemo, useRef, useState } from 'react'
import {
  Github, Linkedin, Mail, Phone, ArrowUpRight, ArrowRight,
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

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'stack', label: 'Tech Stack' },
  { id: 'contact', label: 'Contact' },
]

const SKILLS = [
  'React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS',
  'Java', 'Spring Boot', 'MySQL', 'REST API', 'Git', 'GitHub',
]

// Order here is the real order a request travels through the app —
// screen, then server, then database, then the tools holding it together.
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
    tag: 'Full-stack online store',
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
    tag: 'Exam practice app',
    desc: 'A practice test app that scores you right away. A built-in AI chatbot explains why an answer was wrong, instead of just marking it incorrect.',
    tech: ['JavaScript', 'Firebase', 'Groq API'],
    links: [{ label: 'Live site', href: 'https://ai-exam-companion-ghzc.onrender.com' }],
  },
  {
    id: '03',
    title: 'Personal Portfolio',
    tag: 'An earlier version of this site',
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

function useTypewriter(words, typeSpeed = 60, deleteSpeed = 32, pause = 1300) {
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

function useScrolledPast(threshold = 40) {
  const [past, setPast] = useState(false)
  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return past
}

function useCursorGlow() {
  const ref = useRef(null)
  useEffect(() => {
    const move = (e) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])
  return ref
}

/* ================================================================== */
/* small pieces                                                        */
/* ================================================================== */

function Particles({ count = 20 }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 3,
        duration: 10 + Math.random() * 12,
        delay: Math.random() * 14,
        drift: (Math.random() - 0.5) * 80,
      })),
    [count]
  )
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            '--drift': `${p.drift}px`,
          }}
        />
      ))}
    </div>
  )
}

function Seal() {
  return <div className="seal">RS</div>
}

/* ================================================================== */
/* app                                                                  */
/* ================================================================== */

export default function App() {
  const typed = useTypewriter(ROLES)
  const active = useActiveSection()
  const scrolled = useScrolledPast()
  const glowRef = useCursorGlow()

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <div>
      <div ref={glowRef} className="cursor-glow" />

      {/* ---------------- navbar ---------------- */}
      <nav className={`site-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="wrap nav-inner">
          <button className="logo-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
            <Seal />
            <span className="logo-text">Rahul S</span>
          </button>

          <div className="nav-links">
            {NAV.map((n) => (
              <button key={n.id} className={`nav-link ${active === n.id ? 'active' : ''}`} onClick={() => scrollTo(n.id)}>
                {n.label}
              </button>
            ))}
          </div>

          <button className="nav-cta shimmer" onClick={() => scrollTo('contact')}>Contact</button>
        </div>
      </nav>

      {/* ---------------- hero ---------------- */}
      <header className="hero">
        <Particles />
        <div className="hero-inner">
          <p className="eyebrow">Open to full-stack &amp; frontend roles</p>
          <h1 className="hero-name">Hi, I&rsquo;m <span className="gold-text">Rahul</span></h1>
          <p className="hero-role">{typed}<span className="type-cursor" /></p>
          <div className="hero-cta">
            <button className="btn primary shimmer" onClick={() => scrollTo('projects')}>
              View Projects <ArrowRight size={16} />
            </button>
            <button className="btn ghost shimmer" onClick={() => scrollTo('contact')}>
              Contact Me
            </button>
          </div>
        </div>
        <div className="scroll-cue">
          <span>Scroll</span>
          <span className="scroll-line" />
        </div>
      </header>

      {/* ---------------- about ---------------- */}
      <section id="about" className="wrap section-tight">
        <Reveal>
          <p className="eyebrow-sm">About me</p>
          <h2 className="sec-title">A builder, not just a student</h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="about-text">
            I&rsquo;m a final-year Computer Science student who likes finishing things, not just
            planning them. I build the part you see with React, and the part that makes it work
            with Java and Spring Boot. I care about clean, simple code, and about making
            something people genuinely enjoy using — from the first click to the last.
          </p>
        </Reveal>
      </section>

      {/* ---------------- skills ---------------- */}
      <section id="skills" className="wrap section-tight">
        <Reveal>
          <p className="eyebrow-sm">Skills</p>
          <h2 className="sec-title">What I work with</h2>
        </Reveal>
        <div className="skill-cloud">
          {SKILLS.map((s, i) => (
            <Reveal key={s} delay={i * 40} as="span" className="glass skill-pill">
              {s}
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- experience ---------------- */}
      <section id="experience" className="wrap section-tight">
        <Reveal>
          <p className="eyebrow-sm">Experience</p>
          <h2 className="sec-title">How I got here</h2>
        </Reveal>

        <div className="timeline" style={{ marginTop: '3rem' }}>
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.company} delay={i * 100} className="timeline-item">
              <span className="timeline-dot" />
              <p className="timeline-year">{e.time}</p>
              <h3 className="timeline-role">{e.role}</h3>
              <p className="timeline-meta">{e.company} · {e.place}</p>
              <ul className="timeline-list">
                {e.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="edu-head" style={{ marginTop: '3.5rem' }}>
            <GraduationCap size={18} color="var(--gold)" />
            <span className="eyebrow-sm" style={{ margin: 0 }}>Education</span>
          </div>
          <div className="edu-grid">
            {EDUCATION.map((ed) => (
              <div key={ed.school} className="glass edu-card">
                <p className="edu-school">{ed.school}</p>
                <p className="edu-degree">{ed.degree}</p>
                <p className="edu-time">{ed.time}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ---------------- projects ---------------- */}
      <section id="projects" className="wrap section-tight">
        <Reveal>
          <p className="eyebrow-sm">Featured projects</p>
          <h2 className="sec-title">Things I&rsquo;ve built</h2>
        </Reveal>

        <div className="project-list" style={{ marginTop: '2rem' }}>
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 100} className={`glass project-card ${p.featured ? 'featured' : ''}`}>
              <div>
                <span className="project-index">{p.id}</span>
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
                        {l.label} <ArrowUpRight size={14} />
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
      <section id="certifications" className="wrap section-tight">
        <Reveal>
          <p className="eyebrow-sm">Certifications</p>
          <h2 className="sec-title">Always learning something new</h2>
        </Reveal>
        <div className="cert-grid" style={{ marginTop: '1.5rem' }}>
          {CERTS.map((c, i) => (
            <Reveal key={c.name} delay={i * 80} className="glass cert-card">
              <Award size={18} color="var(--gold)" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div>
                <p className="cert-name">{c.name}</p>
                <p className="cert-by">{c.by}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- tech stack ---------------- */}
      <section id="stack" className="wrap section-tight">
        <Reveal>
          <p className="eyebrow-sm">Tech stack</p>
          <h2 className="sec-title">How a request travels through my apps</h2>
          <p className="sec-desc">
            Top to bottom — from the screen you tap, to the server that answers, to the database
            that remembers, held together by the tools I build with every day.
          </p>
        </Reveal>

        <div className="stack-list">
          {STACK_LAYERS.map((layer, i) => {
            const Icon = layer.icon
            return (
              <div key={layer.title}>
                <Reveal delay={i * 100} className="glass stack-row">
                  <div className="stack-icon"><Icon size={20} color="var(--gold)" /></div>
                  <div>
                    <p className="stack-sub">{layer.subtitle}</p>
                    <h3 className="stack-title">{layer.title}</h3>
                    <p className="stack-blurb">{layer.blurb}</p>
                  </div>
                  <div className="stack-items">
                    {layer.items.map((it) => <span key={it} className="tech-pill">{it}</span>)}
                  </div>
                </Reveal>
                {i < STACK_LAYERS.length - 1 && <div className="stack-connector" />}
              </div>
            )
          })}
        </div>
      </section>

      {/* ---------------- contact ---------------- */}
      <section id="contact" className="wrap section-tight contact-section">
        <Reveal>
          <p className="eyebrow-sm">Get in touch</p>
          <h2 className="contact-title">Let&rsquo;s build <span className="gold-text">something good.</span></h2>
          <p className="contact-sub">Open to full-stack and frontend roles. Based in Bengaluru, happy to work remote.</p>
        </Reveal>

        <Reveal delay={100} className="glass contact-grid">
          <a className="contact-link" href="mailto:Srinivasrahul838@gmail.com">
            <Mail size={17} color="var(--gold)" /><span>Srinivasrahul838@gmail.com</span>
          </a>
          <a className="contact-link" href="tel:+917337634886">
            <Phone size={17} color="var(--gold)" /><span>+91 73376 34886</span>
          </a>
          <a className="contact-link" href="https://www.linkedin.com/in/rahul-s-6460b1238" target="_blank" rel="noopener noreferrer">
            <Linkedin size={17} color="var(--gold)" /><span>LinkedIn</span>
          </a>
          <a className="contact-link" href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <Github size={17} color="var(--gold)" /><span>GitHub</span>
          </a>
        </Reveal>
      </section>

      {/* ---------------- footer ---------------- */}
      <footer className="site-footer">
        <div className="wrap footer-inner">
          <div className="footer-brand">
            <Seal />
            <span className="footer-meta">© {new Date().getFullYear()} Rahul S</span>
          </div>
          <span className="footer-meta">Built with React</span>
        </div>
      </footer>
    </div>
  )
}
