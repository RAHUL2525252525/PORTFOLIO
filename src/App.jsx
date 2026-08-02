import { useEffect, useRef, useState } from 'react'
import {
  Github, Linkedin, Mail, Phone, ArrowUpRight, ArrowRight,
  ChevronLeft, ChevronRight, ExternalLink, Star, MapPin,
  Briefcase, GraduationCap, Code2, Server, Database, GitBranch,
  CheckCircle2, Menu, X, Sparkles,
} from 'lucide-react'
import './index.css'

/* ================================================================== */
/* content                                                              */
/* ================================================================== */

const ROLES = ['REACT DEVELOPER', 'FRONTEND DEVELOPER', 'SOFTWARE DEVELOPER', 'JAVA FULL STACK DEVELOPER']

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

const SKILL_CLOUD = [
  { name: 'React', weight: 5 }, { name: 'Java', weight: 4 }, { name: 'Spring Boot', weight: 4 },
  { name: 'JavaScript', weight: 5 }, { name: 'MySQL', weight: 3 }, { name: 'REST API', weight: 4 },
  { name: 'Tailwind CSS', weight: 3 }, { name: 'HTML', weight: 4 }, { name: 'CSS', weight: 4 },
  { name: 'Git', weight: 3 }, { name: 'GitHub', weight: 3 },
]

const STACK_LAYERS = [
  { icon: Code2, title: 'What you see', subtitle: 'Frontend', items: ['React', 'Tailwind CSS', 'HTML', 'CSS'], blurb: 'The screens and buttons a person taps.' },
  { icon: Server, title: 'What runs it', subtitle: 'Backend', items: ['Java', 'Spring Boot', 'REST API'], blurb: 'The logic behind the screen. It answers every request.' },
  { icon: Database, title: 'Where data lives', subtitle: 'Database', items: ['MySQL'], blurb: 'Where everything gets saved, and read back later.' },
  { icon: GitBranch, title: 'How I build it', subtitle: 'Tooling', items: ['Git', 'GitHub'], blurb: 'Version control, and where the code lives online.' },
]

const PROJECTS = [
  {
    id: '01', title: 'ShopSphere', tag: 'a full-stack online store',
    desc: 'A complete online shop. People can browse, search, add to cart, and track orders. Behind it, an admin panel manages products, users, and stock.',
    tech: ['React', 'Spring Boot', 'MySQL', 'REST API'],
    note: 'The server sleeps to save cost — give it 30–60s to wake up.',
    links: [{ label: 'Live site', href: 'https://shopsphere-8m8f.vercel.app/' }, { label: 'Backend', href: 'https://shopsphere-backend-5umn.onrender.com' }],
    featured: true,
    stats: { users: '500+', products: '100+', orders: '50+' },
  },
  {
    id: '02', title: 'AI Exam Companion', tag: 'an exam practice app',
    desc: 'A practice test app that scores you right away. A built-in AI chatbot explains why an answer was wrong, instead of just marking it incorrect.',
    tech: ['JavaScript', 'Firebase', 'Groq API'],
    links: [{ label: 'Live site', href: 'https://ai-exam-companion-ghzc.onrender.com' }],
    stats: { questions: '200+', accuracy: '95%', ai: 'Live' },
  },
  {
    id: '03', title: 'Personal Portfolio', tag: 'an earlier version of this site',
    desc: 'My first portfolio site. Built to be fast, clean, and easy to read on any device.',
    tech: ['React', 'Vite', 'CSS'],
    stats: { views: '1K+', speed: '100', score: 'A+' },
  },
]

const EXPERIENCE = [
  { role: 'Web Development Intern', company: 'MR Tech Lab', time: '2026', place: 'Bengaluru', points: [
    'Built pages that work well on every screen size, using HTML, CSS, and JavaScript',
    'Connected React pages to real APIs to show live data',
    'Put finished projects online and checked them on different browsers',
  ] },
  { role: 'AI / ML & Python Intern', company: 'KNOWX Innovations', time: '2023', place: 'Bengaluru', points: [
    'Built small Python programs to clean data and test simple models',
    'Worked with the team on fixing bugs and keeping code running smoothly',
  ] },
]

const EDUCATION = [
  { school: 'Dr. ACS College of Engineering', degree: 'B.E., Computer Science and Engineering', time: '2023 – 2026 · Bengaluru' },
  { school: 'PVP Polytechnic', degree: 'Diploma, Information Science and Engineering', time: '2020 – 2023 · Bengaluru' },
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

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) }),
      { rootMargin: '-40% 0px -50% 0px' }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [ids])
  return active
}

function useScrolledPast(threshold = 20) {
  const [past, setPast] = useState(false)
  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return past
}

/* aurora blob that eases toward the cursor within the hero */
function useAurora(ref) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raw = { x: 0.5, y: 0.4 }
    let eased = { x: 0.5, y: 0.4 }
    let frame

    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      raw = { x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height }
    }
    const tick = () => {
      eased.x += (raw.x - eased.x) * 0.06
      eased.y += (raw.y - eased.y) * 0.06
      el.style.setProperty('--ax', `${eased.x * 100}%`)
      el.style.setProperty('--ay', `${eased.y * 100}%`)
      frame = requestAnimationFrame(tick)
    }
    window.addEventListener('mousemove', onMove)
    tick()
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(frame) }
  }, [ref])
}

/* ================================================================== */
/* small pieces                                                        */
/* ================================================================== */

function Eyebrow({ index, children }) {
  return (
    <div className="eyebrow">
      <span className="eyebrow-bar" />
      <span className="eyebrow-text">{children}</span>
      {index && <span className="eyebrow-ghost">{index}</span>}
    </div>
  )
}

function Marquee({ items, reverse }) {
  const doubled = [...items, ...items]
  return (
    <div className="marquee">
      <div className={`marquee-track ${reverse ? 'reverse' : ''}`}>
        {doubled.map((t, i) => (
          <span key={i} className="marquee-item">{t}<Sparkles size={14} className="marquee-dot" /></span>
        ))}
      </div>
    </div>
  )
}

/* ================================================================== */
/* app                                                                  */
/* ================================================================== */

export default function App() {
  const active = useActiveSection(['about', 'skills', 'work', 'experience', 'contact'])
  const scrolled = useScrolledPast()
  const [menuOpen, setMenuOpen] = useState(false)
  const heroRef = useRef(null)
  const railRef = useRef(null)
  useAurora(heroRef)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  const scrollRail = (dir) => {
    railRef.current?.scrollBy({ left: dir * 420, behavior: 'smooth' })
  }

  return (
    <div className="app">
      {/* ---------------- nav ---------------- */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="wrap nav-inner">
          <button className="brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Rahul S</button>
          <div className="nav-links">
            {NAV.map((n) => (
              <button key={n.id} className={`nav-link ${active === n.id ? 'active' : ''}`} onClick={() => scrollTo(n.id)}>
                {n.label}
              </button>
            ))}
          </div>
          <button className="btn primary sm nav-cta" onClick={() => scrollTo('contact')}>
            Hire me <ArrowUpRight size={14} />
          </button>
          <button className="menu-toggle" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-menu">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)}>{n.label}</button>
            ))}
          </div>
        )}
      </nav>

      {/* ---------------- hero ---------------- */}
      <header className="hero" ref={heroRef}>
        <div className="aurora" />
        <div className="wrap hero-inner">
          <div className="hero-badge">
            <span className="dot-live" /> Open to work · Bengaluru, India
          </div>
          <h1 className="hero-title">
            <span className="hero-line">Building things</span>
            <span className="hero-line accent">that ship.</span>
          </h1>
          <p className="hero-desc">
            I'm Rahul — a final-year Computer Science student who builds full products, not prototypes.
            Interfaces in <strong>React</strong>, backends in <strong>Java &amp; Spring Boot</strong>,
            three of them running live right now.
          </p>
          <div className="hero-actions">
            <button className="btn primary lg" onClick={() => scrollTo('work')}>See the work <ArrowRight size={17} /></button>
            <button className="btn ghost lg" onClick={() => scrollTo('contact')}>Get in touch</button>
          </div>
        </div>
      </header>

      <Marquee items={ROLES} />

      {/* ---------------- about ---------------- */}
      <section id="about" className="section">
        <div className="wrap">
          <Reveal><Eyebrow index="01">About</Eyebrow></Reveal>
          <div className="about-grid">
            <Reveal delay={60} className="about-quote">
              <p>"I believe in learning by doing — every project here is one I built end to end,
              and can walk you through <span className="accent-text">line by line.</span>"</p>
            </Reveal>
            <Reveal delay={120} className="about-copy">
              <p>My work spans the full stack — pixel-perfect, responsive interfaces with <strong>React</strong>,
              backed by scalable systems in <strong>Java</strong> and <strong>Spring Boot</strong>. I write code
              meant to be read by other people, and I care about what happens in the seconds between a click and a response.</p>
              <div className="about-stats">
                <div><b>03</b><span>Live projects</span></div>
                <div><b>02</b><span>Internships</span></div>
                <div><b>04</b><span>Certifications</span></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- skills ---------------- */}
      <section id="skills" className="section section-alt">
        <div className="wrap">
          <Reveal><Eyebrow index="02">Skills</Eyebrow></Reveal>
          <Reveal delay={60}><h2 className="section-title">What I build with</h2></Reveal>
          <Reveal delay={120} className="skill-cloud">
            {SKILL_CLOUD.map((s) => (
              <span key={s.name} className={`cloud-tag w${s.weight}`}>{s.name}</span>
            ))}
          </Reveal>

          <Reveal delay={160} className="pipeline">
            {STACK_LAYERS.map((layer) => {
              const Icon = layer.icon
              return (
                <div key={layer.title} className="pipeline-item">
                  <div className="pipeline-icon"><Icon size={18} /></div>
                  <div>
                    <span className="pipeline-subtitle">{layer.subtitle}</span>
                    <h3 className="pipeline-title">{layer.title}</h3>
                    <p className="pipeline-desc">{layer.blurb}</p>
                    <div className="pipeline-tech">{layer.items.map((it) => <span key={it}>{it}</span>)}</div>
                  </div>
                </div>
              )
            })}
          </Reveal>
        </div>
      </section>

      {/* ---------------- work (horizontal rail) ---------------- */}
      <section id="work" className="section work-section">
        <div className="wrap work-head">
          <Reveal><Eyebrow index="03">Work</Eyebrow></Reveal>
          <Reveal delay={60}><h2 className="section-title">Three cases, shipped</h2></Reveal>
          <Reveal delay={100} className="rail-controls">
            <button onClick={() => scrollRail(-1)} aria-label="Scroll left"><ChevronLeft size={18} /></button>
            <button onClick={() => scrollRail(1)} aria-label="Scroll right"><ChevronRight size={18} /></button>
          </Reveal>
        </div>

        <div className="rail" ref={railRef}>
          {PROJECTS.map((p) => (
            <article key={p.id} className={`rail-card ${p.featured ? 'featured' : ''}`}>
              <div className="rail-card-top">
                <span className="rail-id">{p.id}</span>
                {p.featured && <span className="rail-flag"><Star size={11} /> Featured</span>}
              </div>
              <h3 className="rail-title">{p.title}</h3>
              <p className="rail-tag">{p.tag}</p>
              <p className="rail-desc">{p.desc}</p>
              <div className="rail-stats">
                {Object.entries(p.stats).map(([k, v]) => (
                  <div key={k}><b>{v}</b><span>{k}</span></div>
                ))}
              </div>
              <div className="rail-tech">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
              {p.note && <p className="rail-note">{p.note}</p>}
              {p.links && (
                <div className="rail-links">
                  {p.links.map((l) => (
                    <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">{l.label} <ExternalLink size={13} /></a>
                  ))}
                </div>
              )}
            </article>
          ))}
          <div className="rail-end">
            <p>Want to see how any of these were built?</p>
            <button className="btn outline sm" onClick={() => scrollTo('contact')}>Ask me anything <ArrowRight size={14} /></button>
          </div>
        </div>
      </section>

      <Marquee items={['REACT', 'JAVA', 'SPRING BOOT', 'MYSQL', 'REST API', 'GIT']} reverse />

      {/* ---------------- experience ---------------- */}
      <section id="experience" className="section">
        <div className="wrap">
          <Reveal><Eyebrow index="04">Experience</Eyebrow></Reveal>
          <Reveal delay={60}><h2 className="section-title">How I got here</h2></Reveal>

          <div className="timeline">
            {EXPERIENCE.map((e) => (
              <Reveal key={e.company} className="timeline-row">
                <span className="timeline-year">{e.time}</span>
                <div className="timeline-body">
                  <div className="timeline-head">
                    <h3>{e.role}</h3>
                    <span><MapPin size={13} /> {e.place}</span>
                  </div>
                  <p className="timeline-company"><Briefcase size={13} /> {e.company}</p>
                  <ul>{e.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="edu-block">
            <span className="mini-label"><GraduationCap size={14} /> Education</span>
            <div className="edu-row">
              {EDUCATION.map((ed) => (
                <div key={ed.school} className="edu-card">
                  <h4>{ed.school}</h4>
                  <p>{ed.degree}</p>
                  <span>{ed.time}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="cert-block">
            <span className="mini-label">Certifications</span>
            <div className="cert-row">
              {CERTS.map((c) => (
                <div key={c.name} className="cert-item">
                  <CheckCircle2 size={16} className="cert-check" />
                  <div><h5>{c.name}</h5><span>{c.by}</span></div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- contact ---------------- */}
      <section id="contact" className="section contact-section">
        <div className="wrap">
          <Reveal><Eyebrow index="05">Contact</Eyebrow></Reveal>
          <Reveal delay={60}>
            <a href="mailto:Srinivasrahul838@gmail.com" className="contact-giant">
              Let's talk<ArrowUpRight size={44} className="giant-arrow" />
            </a>
          </Reveal>
          <Reveal delay={120} className="contact-row">
            {CONTACTS.map((c) => {
              const Icon = c.icon
              return (
                <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="contact-pill">
                  <Icon size={15} /> {c.value}
                </a>
              )
            })}
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap footer-inner">
          <span>© {new Date().getFullYear()} Rahul S</span>
          <span>Built with React</span>
        </div>
      </footer>
    </div>
  )
}
