import { useEffect, useRef, useState } from 'react'
import {
  Github, Linkedin, Mail, Phone, ArrowUpRight, Sparkles,
  Code2, Server, Database, Wrench, Award, GraduationCap,
  MapPin, Briefcase, Rocket, Download, Menu, X, ChevronRight,
  ExternalLink, Star, Zap, Layers, Palette, Globe, Shield,
  Cpu, Terminal, Box, Hexagon, Circle, Square,
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
    <div className="app">
      {/* ---------------- animated background ---------------- */}
      <div className="mesh-gradient-bg">
        <div className="mesh-blob mesh-blob-1" />
        <div className="mesh-blob mesh-blob-2" />
        <div className="mesh-blob mesh-blob-3" />
        <div className="mesh-blob mesh-blob-4" />
      </div>

      {/* ---------------- floating shapes ---------------- */}
      <div className="floating-shapes" aria-hidden="true">
        <div className="shape shape-1"><Hexagon size={24} /></div>
        <div className="shape shape-2"><Circle size={16} /></div>
        <div className="shape shape-3"><Square size={20} /></div>
        <div className="shape shape-4"><Hexagon size={18} /></div>
      </div>

      {/* ---------------- navbar ---------------- */}
      <nav className={`site-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="wrap nav-inner">
          <button className="logo-btn" onClick={() => scrollTo('hero')} aria-label="Back to top">
            <div className="logo-3d">
              <span className="logo-mark">RS</span>
            </div>
            <span className="logo-text">Rahul S</span>
          </button>

          <div className="tab-bar">
            {NAV.map((n) => (
              <button key={n.id} className={`tab ${active === n.id ? 'active' : ''}`} onClick={() => scrollTo(n.id)}>
                {n.label}
                <span className="tab-glow" />
              </button>
            ))}
          </div>

          <button className="btn primary nav-cta" onClick={() => scrollTo('contact')}>
            <Download size={16} /> <span>Say hello</span>
            <span className="btn-shine" />
          </button>

          <button className="menu-toggle" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
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
        <div className="wrap hero-inner">
          <div className="hero-grid">
            <div className="hero-main">
              <Reveal>
                <div className="hero-badge">
                  <span className="badge-pulse" />
                  <Sparkles size={14} />
                  <span>Open to work · Bengaluru, India</span>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="hero-title">
                  <span className="greeting">Hi, I'm</span>
                  <br />
                  <span className="name-gradient">Rahul S</span>
                </h1>
              </Reveal>

              <Reveal delay={140}>
                <div className="hero-role-wrapper">
                  <span className="role-label">I build</span>
                  <div className="role-text-container">
                    <span className="role-text">{typed}</span>
                    <span className="type-cursor" />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <p className="hero-description">
                  Final-year Computer Science student passionate about building real-world applications.
                  I craft intuitive user interfaces with <strong className="highlight">React</strong> and power them
                  with robust backends using <strong className="highlight">Java & Spring Boot</strong>.
                </p>
              </Reveal>

              <Reveal delay={260}>
                <div className="hero-actions">
                  <button className="btn primary btn-lg" onClick={() => scrollTo('projects')}>
                    <span>View my work</span>
                    <ArrowUpRight size={18} />
                    <span className="btn-shine" />
                  </button>
                  <button className="btn outline btn-lg" onClick={() => scrollTo('contact')}>
                    <span>Let's talk</span>
                    <ChevronRight size={18} />
                  </button>
                </div>
              </Reveal>

              <Reveal delay={320}>
                <div className="hero-socials">
                  {CONTACTS.slice(2).map((c) => {
                    const Icon = c.icon
                    return (
                      <a 
                        key={c.label} 
                        href={c.href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="social-btn" 
                        aria-label={c.label}
                      >
                        <Icon size={20} />
                        <span className="social-tooltip">{c.label}</span>
                      </a>
                    )
                  })}
                </div>
              </Reveal>
            </div>

            <Reveal delay={180} className="hero-bento">
              <div className="bento-grid">
                <div className="bento-card bento-large">
                  <div className="bento-header">
                    <Zap size={18} className="bento-icon" />
                    <span>Quick Stats</span>
                  </div>
                  <div className="bento-stats">
                    <div className="bento-stat">
                      <span className="bento-stat-num">03</span>
                      <span className="bento-stat-label">Projects</span>
                    </div>
                    <div className="bento-stat">
                      <span className="bento-stat-num">02</span>
                      <span className="bento-stat-label">Internships</span>
                    </div>
                    <div className="bento-stat">
                      <span className="bento-stat-num">04</span>
                      <span className="bento-stat-label">Certs</span>
                    </div>
                  </div>
                </div>

                <div className="bento-card bento-small">
                  <div className="bento-icon-wrapper">
                    <Terminal size={24} />
                  </div>
                  <div className="bento-content">
                    <span className="bento-label">Stack</span>
                    <span className="bento-value">Full-Stack</span>
                  </div>
                </div>

                <div className="bento-card bento-small">
                  <div className="bento-icon-wrapper">
                    <Globe size={24} />
                  </div>
                  <div className="bento-content">
                    <span className="bento-label">Location</span>
                    <span className="bento-value">Bengaluru</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel" />
          </div>
          <span>Scroll to explore</span>
        </div>
      </header>

      {/* ---------------- about ---------------- */}
      <section id="about" className="wrap section">
        <Reveal><Eyebrow>About me</Eyebrow></Reveal>
        <div className="about-layout">
          <Reveal delay={60}>
            <div className="about-content">
              <h2 className="section-title">
                <span className="title-accent">A builder</span>, not just a student
              </h2>
              <p className="about-text">
                I believe in learning by doing. Rather than just studying theory, I build 
                production-ready applications that solve real problems. My expertise spans 
                the full stack — from crafting pixel-perfect, responsive interfaces with{' '}
                <strong className="tech-highlight">React</strong> to architecting scalable 
                backend systems with <strong className="tech-highlight">Java</strong> and{' '}
                <strong className="tech-highlight">Spring Boot</strong>.
              </p>
              <p className="about-text">
                I write clean, maintainable code and focus on creating seamless user 
                experiences. Every project is an opportunity to learn something new and 
                push the boundaries of what I can build.
              </p>
            </div>
          </Reveal>

          <div className="about-cards-grid">
            {ABOUT_CARDS.map((c, i) => {
              const Icon = c.icon
              return (
                <Reveal key={c.label} delay={100 + i * 60} className="glass-card about-card">
                  <div className="card-icon-wrapper">
                    <Icon size={20} />
                  </div>
                  <div className="card-content">
                    <h4 className="card-title">{c.label}</h4>
                    {c.lines.map((l) => <p key={l} className="card-text">{l}</p>)}
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---------------- skills ---------------- */}
      <section id="skills" className="section section-alt">
        <div className="wrap">
          <Reveal><Eyebrow>Skills</Eyebrow></Reveal>
          <Reveal delay={60}>
            <h2 className="section-title">
              Technologies I work <span className="title-accent">with</span>
            </h2>
          </Reveal>

          <div className="skills-layout">
            <Reveal delay={100} className="skills-tech-cloud">
              {SKILL_TAGS.map((s, i) => (
                <span key={s} className="tech-badge" style={{ transitionDelay: `${i * 40}ms` }}>
                  {s}
                </span>
              ))}
            </Reveal>

            <div className="skills-progress">
              {SKILL_BARS.map((b, i) => (
                <Bar key={b.name} label={b.name} level={b.level} delay={i * 100} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- projects ---------------- */}
      <section id="projects" className="wrap section">
        <Reveal><Eyebrow>Projects</Eyebrow></Reveal>
        <Reveal delay={60}>
          <h2 className="section-title">
            Things I've <span className="title-accent">built</span>
          </h2>
        </Reveal>

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 120} className="project-card glass-card">
              <div className="project-glow" />
              <div className="project-header">
                <span className="project-id">{p.id}</span>
                {p.featured && (
                  <span className="featured-badge">
                    <Star size={12} /> Featured
                  </span>
                )}
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-tagline">{p.tag}</p>
              <p className="project-description">{p.desc}</p>
              <div className="project-tech-stack">
                {p.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
              {p.note && <p className="project-note">{p.note}</p>}
              {p.links && (
                <div className="project-actions">
                  {p.links.map((l) => (
                    <a 
                      key={l.label} 
                      className="project-link" 
                      href={l.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <span>{l.label}</span>
                      <ExternalLink size={14} />
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
          <h2 className="section-title">
            How a request moves through my <span className="title-accent">apps</span>
          </h2>
          <p className="section-subtitle">
            From the screen you tap to the database that remembers — here's the complete journey.
          </p>
        </Reveal>

        <Reveal delay={100} className="pipeline-flow">
          {STACK_LAYERS.map((layer, i) => {
            const Icon = layer.icon
            return (
              <div key={layer.title} className="pipeline-item">
                <div className="pipeline-node">
                  <div className="node-icon">
                    <Icon size={22} />
                  </div>
                  <div className="node-content glass-card">
                    <span className="node-subtitle">{layer.subtitle}</span>
                    <h3 className="node-title">{layer.title}</h3>
                    <p className="node-description">{layer.blurb}</p>
                    <div className="node-tech">
                      {layer.items.map((it) => (
                        <span key={it} className="tech-pill">{it}</span>
                      ))}
                    </div>
                  </div>
                </div>
                {i < STACK_LAYERS.length - 1 && (
                  <div className="pipeline-connector">
                    <div className="connector-line">
                      <div className="flow-particle" style={{ animationDelay: `${i * -0.8}s` }} />
                    </div>
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
          <Reveal delay={60}>
            <h2 className="section-title light">
              How I got <span className="title-accent">here</span>
            </h2>
          </Reveal>

          <div className="experience-timeline">
            {EXPERIENCE.map((e, i) => {
              const Icon = e.icon
              return (
                <Reveal key={e.company} delay={i * 100} className="timeline-item">
                  <div className="timeline-marker">
                    <div className="marker-dot" />
                    {i < EXPERIENCE.length - 1 && <div className="marker-line" />}
                  </div>
                  <div className="timeline-content glass-card dark">
                    <div className="timeline-header">
                      <div className="timeline-icon">
                        <Icon size={20} />
                      </div>
                      <div className="timeline-meta">
                        <span className="timeline-time">{e.time}</span>
                        <span className="timeline-place">{e.place}</span>
                      </div>
                    </div>
                    <h3 className="timeline-role">{e.role}</h3>
                    <p className="timeline-company">{e.company}</p>
                    <ul className="timeline-points">
                      {e.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={120}>
            <div className="education-section">
              <div className="section-label">
                <GraduationCap size={18} /> 
                <span>Education</span>
              </div>
              <div className="education-grid">
                {EDUCATION.map((ed) => (
                  <div key={ed.school} className="edu-card glass-card">
                    <h4 className="edu-school">{ed.school}</h4>
                    <p className="edu-degree">{ed.degree}</p>
                    <p className="edu-time">{ed.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- certifications ---------------- */}
      <section className="wrap section">
        <Reveal><Eyebrow>Certifications</Eyebrow></Reveal>
        <Reveal delay={60}>
          <h2 className="section-title">
            Always learning <span className="title-accent">something new</span>
          </h2>
        </Reveal>
        <div className="certifications-grid">
          {CERTS.map((c, i) => (
            <Reveal key={c.name} delay={i * 80} className="cert-card glass-card">
              <div className="cert-icon-wrapper">
                <Award size={20} />
              </div>
              <div className="cert-info">
                <h4 className="cert-name">{c.name}</h4>
                <p className="cert-issuer">{c.by}</p>
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
            <h2 className="section-title light">
              Let's build <span className="title-accent">something great</span>
            </h2>
            <p className="section-subtitle light">
              Open to full-stack and frontend roles. Based in Bengaluru, available for remote work.
            </p>
          </Reveal>

          <div className="contact-grid">
            {CONTACTS.map((c, i) => {
              const Icon = c.icon
              return (
                <Reveal key={c.label} delay={i * 70} className="contact-card glass-card">
                  <a 
                    href={c.href} 
                    target={c.href.startsWith('http') ? '_blank' : undefined} 
                    rel="noopener noreferrer" 
                    className="contact-link"
                  >
                    <div className="contact-icon-wrapper">
                      <Icon size={20} />
                    </div>
                    <div className="contact-info">
                      <span className="contact-label">{c.label}</span>
                      <span className="contact-value">{c.value}</span>
                    </div>
                    <ArrowUpRight size={16} className="contact-arrow" />
                  </a>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---------------- footer ---------------- */}
      <footer className="site-footer">
        <div className="wrap footer-content">
          <div className="footer-brand">
            <span className="footer-logo">RS</span>
            <span className="footer-name">Rahul S</span>
          </div>
          <div className="footer-meta">
            <span>© {new Date().getFullYear()} Rahul S</span>
            <span className="footer-divider">•</span>
            <span>
              <Sparkles size={14} /> Built with React
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
