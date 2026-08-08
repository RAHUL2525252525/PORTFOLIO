import { useEffect, useRef, useState } from 'react'
import {
  Github, Linkedin, Mail, Phone, ArrowUpRight, MapPin, GraduationCap,
  Briefcase, Award, CheckCircle2, Code2, Layers, ShieldCheck, Database, Wrench
} from 'lucide-react'
import './index.css'

/* ================================================================== */
/* content — sourced from resume (RAHUL_S_FlowCV_Resume_2026-08-08)    */
/* ================================================================== */

const STACK_ROTATE = ['React.js', 'Spring Boot', 'MySQL', 'REST APIs', 'Spring Security']

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Work' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'approach', label: 'Approach' },
  { id: 'contact', label: 'Contact' },
]

const SKILL_GROUPS = [
  { cat: 'Languages', items: ['Java', 'JavaScript (ES6)', 'SQL'] },
  { cat: 'Frontend', items: ['React.js', 'HTML5', 'CSS3', 'JSX', 'Responsive Design', 'Flexbox', 'CSS Grid'] },
  { cat: 'Backend', items: ['Java', 'Spring Boot', 'Spring MVC', 'REST APIs', 'Spring Data JPA', 'Hibernate'] },
  { cat: 'Database', items: ['MySQL', 'SQL', 'Database Design', 'CRUD Operations'] },
  { cat: 'Security', items: ['Spring Security', 'JWT Authentication', 'Role-Based Access Control'] },
  { cat: 'Testing', items: ['JUnit 5', 'Mockito'] },
  { cat: 'Core CS', items: ['OOP', 'Data Structures & Algorithms', 'DBMS', 'Agile Development'] },
  { cat: 'Tools & Deployment', items: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Vite', 'Docker', 'Docker Compose', 'AWS EC2', 'Vercel', 'Render'] },
]

const APPROACH = [
  {
    icon: Code2,
    title: 'Frontend Presentation',
    subtitle: 'Client',
    items: ['React.js', 'JSX', 'HTML5', 'CSS3', 'Flexbox / Grid', 'Vite'],
    blurb: 'Responsive interfaces and reusable component structure, built for consistent behaviour across breakpoints.',
  },
  {
    icon: Layers,
    title: 'Backend Logic & APIs',
    subtitle: 'Service Layer',
    items: ['Java', 'Spring Boot', 'Spring MVC', 'REST APIs', 'Spring Data JPA', 'Hibernate'],
    blurb: 'Controller → Service → Repository layering, exposing REST endpoints consumed directly by the frontend.',
  },
  {
    icon: ShieldCheck,
    title: 'Auth & Access Control',
    subtitle: 'Security',
    items: ['Spring Security', 'JWT Authentication', 'Role-Based Access Control'],
    blurb: 'Stateless authentication and route-level authorization for protected user and admin operations.',
  },
  {
    icon: Database,
    title: 'Data Persistence',
    subtitle: 'Database',
    items: ['MySQL', 'Database Design', 'CRUD Operations'],
    blurb: 'Relational schema design across users, roles, accounts, products, and orders.',
  },
  {
    icon: Wrench,
    title: 'Build & Deployment',
    subtitle: 'Infrastructure',
    items: ['Git', 'GitHub', 'Docker', 'Docker Compose', 'AWS EC2', 'Vercel', 'Render'],
    blurb: 'Version-controlled workflows, containerized environments, and cloud-hosted delivery.',
  },
]

const EXPERIENCE = [
  {
    role: 'Web Development Intern',
    company: 'MR Tech Lab',
    time: '2026',
    place: 'Bengaluru',
    points: [
      'Gained hands-on exposure to full-stack development using HTML, CSS, JavaScript, React.js, Java, Spring Boot, REST APIs, and MySQL.',
      'Developed responsive frontend interfaces and integrated REST APIs with backend services for dynamic data handling.',
      'Practiced database integration, authentication, CRUD operations, Git-based development, and application deployment.',
    ],
  },
]

const EDUCATION = [
  {
    school: 'Dr. ACS College of Engineering',
    degree: 'B.E. in Computer Science and Engineering',
    time: '2023 – 2026 · Bengaluru',
  },
]

const PROJECTS = [
  {
    id: '01',
    title: 'ShopSphere',
    tag: 'Full-Stack E-Commerce Application',
    tech: ['React.js', 'Java', 'Spring Boot', 'Spring Data JPA', 'REST APIs', 'MySQL', 'Git'],
    highlights: [
      'Built an e-commerce platform supporting product browsing, search, cart, wishlist, checkout, and order management.',
      'Developed role-based admin functionality for managing products, inventory, users, and orders.',
      'Integrated Spring Boot REST APIs with React.js and MySQL for end-to-end data management.',
      'Implemented authentication and secure order-management workflows.',
    ],
    note: 'Backend is on Render\u2019s free tier — first request can take 30–60s to wake it up.',
    links: [
      { label: 'Live site', href: 'https://shopsphere-8m8f.vercel.app/' },
      { label: 'Backend API', href: 'https://shopsphere-backend-5umn.onrender.com' },
    ],
    featured: true,
  },
  {
    id: '02',
    title: 'Online Banking System',
    tag: 'Full-Stack Banking Application',
    tech: ['React.js', 'Java', 'Spring Boot', 'Spring Security', 'JWT', 'Spring Data JPA', 'MySQL', 'Docker'],
    highlights: [
      'Developed a secure full-stack banking application with registration, login, account management, and transaction workflows.',
      'Built REST APIs using Spring Boot and Spring Data JPA with a layered Controller, Service, and Repository architecture.',
      'Implemented JWT authentication and role-based access control using Spring Security for protected user and admin operations.',
      'Designed MySQL database entities and relationships for users, roles, accounts, and transactions.',
      'Containerized the application environment using Docker and Docker Compose.',
    ],
    featured: true,
  },
]

const CERTS = [
  { name: 'Introduction to Java', by: 'Infosys Springboard' },
  { name: 'Java Programming Fundamentals', by: 'Infosys Springboard' },
]

const CONTACTS = [
  { icon: Mail, label: 'Email', value: 'Srinivasrahul838@gmail.com', href: 'mailto:Srinivasrahul838@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 73376 34886', href: 'tel:+917337634886' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/rahul-s', href: 'https://www.linkedin.com/in/rahul-s-6460b1238' },
  { icon: Github, label: 'GitHub', value: 'github.com/rahul-s', href: 'https://github.com/' },
]

/* ================================================================== */
/* hooks                                                                */
/* ================================================================== */

function useTypewriter(words, typeSpeed = 65, deleteSpeed = 32, pause = 1400) {
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
      { threshold: 0.12 }
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
/* small components                                                    */
/* ================================================================== */

function SectionLabel({ index, label }) {
  return (
    <div className="section-label">
      <span className="section-num">{index}</span>
      <span className="section-name">{label}</span>
      <span className="section-rule" />
    </div>
  )
}

// Signature element: a compact "dossier" card presenting the resume's
// own header facts the way a recruiter would want them at a glance.
function ProfileCard() {
  const rows = [
    { icon: MapPin, k: 'Location', v: 'Bengaluru, India' },
    { icon: Briefcase, k: 'Focus', v: 'Java · Spring Boot · React' },
    { icon: GraduationCap, k: 'Education', v: 'B.E. Computer Science, 2026' },
  ]
  return (
    <div className="profile-card">
      <div className="profile-bar" />
      <div className="profile-body">
        <p className="profile-eyebrow">Candidate Profile</p>
        <h3 className="profile-name">Rahul S</h3>
        <p className="profile-role">Full Stack Developer</p>
        <div className="profile-status">
          <span className="status-dot" /> Available for opportunities
        </div>
        <div className="profile-rows">
          {rows.map((r) => {
            const Icon = r.icon
            return (
              <div key={r.k} className="profile-row">
                <Icon size={14} className="profile-row-icon" />
                <span className="profile-row-k">{r.k}</span>
                <span className="profile-row-v">{r.v}</span>
              </div>
            )
          })}
        </div>
        <div className="profile-links">
          {CONTACTS.map((c) => {
            const Icon = c.icon
            return (
              <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" aria-label={c.label} className="profile-icon-link">
                <Icon size={15} />
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

/* ================================================================== */
/* main application                                                    */
/* ================================================================== */

export default function App() {
  const typed = useTypewriter(STACK_ROTATE)
  const active = useActiveSection()
  const scrolled = useScrolledPast()

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <div>
      {/* ---------------- navbar ---------------- */}
      <nav className={`site-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="wrap nav-inner">
          <button className="logo-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
            <span className="logo-text">Rahul S<span className="logo-dot">.</span></span>
          </button>

          <div className="tab-bar">
            {NAV.map((n) => (
              <button key={n.id} className={`tab ${active === n.id ? 'active' : ''}`} onClick={() => scrollTo(n.id)}>
                {n.label}
              </button>
            ))}
          </div>

          <a className="btn primary nav-cta" href="mailto:Srinivasrahul838@gmail.com">Get in touch</a>
        </div>
      </nav>

      {/* ---------------- hero ---------------- */}
      <header id="hero" className="hero">
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <Reveal>
              <div className="hero-pill"><span className="status-dot" /> Available for opportunities</div>
            </Reveal>

            <Reveal delay={70}>
              <h1 className="hero-name">Rahul S</h1>
            </Reveal>

            <Reveal delay={130}>
              <p className="hero-role">Full Stack Developer</p>
            </Reveal>

            <Reveal delay={170}>
              <div className="hero-stack">
                Building with <span className="hero-stack-word">{typed}</span><span className="type-cursor" />
              </div>
            </Reveal>

            <Reveal delay={220}>
              <p className="hero-desc">
                Full stack developer skilled in Java, Spring Boot, React.js, REST APIs, and MySQL —
                with hands-on experience building secure, responsive web applications. Strong in
                backend API development, frontend integration, database management, and authentication.
              </p>
            </Reveal>

            <Reveal delay={270}>
              <div className="hero-cta">
                <button className="btn primary" onClick={() => scrollTo('projects')}>View my work</button>
                <button className="btn ghost" onClick={() => scrollTo('contact')}>Contact me</button>
              </div>
            </Reveal>

            <Reveal delay={310}>
              <p className="hero-meta">B.E. Computer Science, 2026 &nbsp;·&nbsp; Bengaluru, India</p>
            </Reveal>
          </div>

          <Reveal delay={140} className="hero-profile">
            <ProfileCard />
          </Reveal>
        </div>
      </header>

      {/* ---------------- about ---------------- */}
      <section id="about" className="wrap section">
        <Reveal><SectionLabel index="01" label="About" /></Reveal>
        <Reveal delay={90}>
          <h2 className="sec-title">Backend-minded, shipped as full stack.</h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="about-text">
            I build web applications end to end — <strong>React</strong> interfaces wired to
            <strong> Spring Boot</strong> services, with data modelled in <strong>MySQL</strong> and
            protected by <strong>Spring Security</strong> and JWT. I care about how a request actually
            moves through a system, and I write it in clean, testable layers rather than one large tangle.
          </p>
        </Reveal>

        <div className="fact-row">
          {[
            { label: 'Core Stack', value: 'Java · Spring Boot · React' },
            { label: 'Projects Shipped', value: '2 full-stack applications' },
            { label: 'Based In', value: 'Bengaluru, India' },
          ].map((f, i) => (
            <Reveal key={f.label} delay={i * 70} className="panel fact-card">
              <p className="fact-label">{f.label}</p>
              <p className="fact-value">{f.value}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- skills ---------------- */}
      <section id="skills" className="wrap section">
        <Reveal><SectionLabel index="02" label="Skills" /></Reveal>
        <Reveal delay={90}><h2 className="sec-title">Technical skills</h2></Reveal>

        <div className="skill-grid">
          {SKILL_GROUPS.map((g, i) => (
            <Reveal key={g.cat} delay={i * 55} className="panel skill-card">
              <p className="skill-cat">{g.cat}</p>
              <div className="skill-items">
                {g.items.map((s) => <span key={s} className="pill">{s}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- experience ---------------- */}
      <section id="experience" className="wrap section">
        <Reveal><SectionLabel index="03" label="Experience" /></Reveal>
        <Reveal delay={90}><h2 className="sec-title">Experience</h2></Reveal>

        <div className="timeline">
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.company} delay={i * 100} as="div" className="panel timeline-item">
              <div className="tl-head">
                <span className="tl-icon"><Briefcase size={15} /></span>
                <div>
                  <h3 className="tl-role">{e.role}</h3>
                  <p className="tl-meta">{e.company} · {e.place}</p>
                </div>
                <span className="tl-time">{e.time}</span>
              </div>
              <ul className="tl-points">
                {e.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="sub-label"><GraduationCap size={15} /> Education</div>
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
        <Reveal><SectionLabel index="04" label="Selected Work" /></Reveal>
        <Reveal delay={90}><h2 className="sec-title">Projects</h2></Reveal>

        <div className="project-list">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 90} className="panel project-card">
              <div className="project-top">
                <span className="project-id">{p.id}</span>
                <div className="project-heading">
                  <h3>{p.title}</h3>
                  {p.featured && <span className="project-flag"><CheckCircle2 size={12} /> Featured</span>}
                </div>
              </div>
              <p className="project-tag">{p.tag}</p>

              <ul className="project-highlights">
                {p.highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>

              <div className="project-tech">
                {p.tech.map((t) => <span key={t} className="pill mono">{t}</span>)}
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
        <Reveal><SectionLabel index="05" label="Certifications" /></Reveal>
        <Reveal delay={90}><h2 className="sec-title">Certifications</h2></Reveal>

        <div className="cert-grid">
          {CERTS.map((c, i) => (
            <Reveal key={c.name} delay={i * 70} className="panel cert-card">
              <span className="cert-icon"><Award size={17} /></span>
              <div>
                <p className="cert-name">{c.name}</p>
                <p className="cert-by">{c.by}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- approach ---------------- */}
      <section id="approach" className="wrap section">
        <Reveal><SectionLabel index="06" label="Approach" /></Reveal>
        <Reveal delay={90}>
          <h2 className="sec-title">How I structure an application</h2>
          <p className="sec-desc">
            Client to service to schema — the layers a request passes through, and what runs each one.
          </p>
        </Reveal>

        <div className="approach-grid">
          {APPROACH.map((layer, i) => {
            const Icon = layer.icon
            return (
              <Reveal key={layer.title} delay={i * 70} className="panel approach-card">
                <div className="approach-icon"><Icon size={18} /></div>
                <p className="approach-sub">{layer.subtitle}</p>
                <h3 className="approach-title">{layer.title}</h3>
                <p className="approach-blurb">{layer.blurb}</p>
                <div className="approach-items">
                  {layer.items.map((it) => <span key={it} className="pill mono">{it}</span>)}
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* ---------------- contact ---------------- */}
      <section id="contact" className="wrap section">
        <Reveal><SectionLabel index="07" label="Contact" /></Reveal>
        <Reveal delay={90}>
          <h2 className="sec-title">Let&rsquo;s build something.</h2>
          <p className="sec-desc">Open to Full Stack, Java/Spring Boot, and React roles. Based in Bengaluru, India.</p>
        </Reveal>

        <div className="contact-grid">
          {CONTACTS.map((c, i) => {
            const Icon = c.icon
            return (
              <Reveal key={c.label} delay={i * 60} as="div" className="panel contact-card">
                <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="contact-link">
                  <span className="contact-icon"><Icon size={16} /></span>
                  <span className="contact-kv">
                    <span className="contact-key">{c.label}</span>
                    <span className="contact-value">{c.value}</span>
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
          <span className="footer-meta">© 2026 Rahul S</span>
          <span className="footer-meta">Full Stack Developer · Bengaluru, India</span>
        </div>
      </footer>
    </div>
  )
}
