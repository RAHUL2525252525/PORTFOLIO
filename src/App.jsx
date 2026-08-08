import { useEffect, useRef, useState } from 'react'
import {
  Github, Linkedin, Mail, Phone, ArrowUpRight,
  Terminal, Layers, Database, Wrench, ShieldCheck,
  GraduationCap, BadgeCheck, CheckCircle2
} from 'lucide-react'
import './index.css'

/* ================================================================== */
/* content — sourced from resume (RAHUL_S_FlowCV_Resume_2026-08-08)    */
/* ================================================================== */

const ROLES = [
  'Full Stack Developer',
  'Java · Spring Boot Developer',
  'React Developer',
  'REST API Engineer',
]

const ROUTES = [
  { id: 'about', label: '/about' },
  { id: 'skills', label: '/skills' },
  { id: 'experience', label: '/experience' },
  { id: 'projects', label: '/projects' },
  { id: 'certifications', label: '/certifications' },
  { id: 'architecture', label: '/architecture' },
  { id: 'contact', label: '/contact' },
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

const ARCHITECTURE = [
  {
    icon: Terminal,
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
    subtitle: 'Infra',
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
  {
    school: 'PVP Polytechnic',
    degree: 'Diploma in Information Science and Engineering',
    time: '2020 – 2023 · Bengaluru',
  },
  {
    school: 'Vidya Priya English School',
    degree: 'Secondary School Leaving Certificate (SSLC)',
    time: '2019 – 2020 · Bengaluru',
  },
]

const PROJECTS = [
  {
    id: 'proj_01',
    title: 'ShopSphere',
    tag: 'Full-Stack E-Commerce Application',
    desc: 'An e-commerce platform supporting product browsing, search, cart, wishlist, checkout, and order management, with role-based admin tooling for products, inventory, users, and orders.',
    tech: ['React.js', 'Java', 'Spring Boot', 'Spring Data JPA', 'REST APIs', 'MySQL', 'Git'],
    note: 'Backend is on Render\u2019s free tier — first request can take 30–60s to wake it up.',
    links: [
      { label: 'Live site', href: 'https://shopsphere-8m8f.vercel.app/' },
      { label: 'Backend API', href: 'https://shopsphere-backend-5umn.onrender.com' },
    ],
    featured: true,
  },
  {
    id: 'proj_02',
    title: 'Online Banking System',
    tag: 'Full-Stack Banking Application',
    desc: 'A secure banking application covering registration, login, account management, and transaction workflows, with JWT authentication and role-based access for user and admin operations.',
    tech: ['React.js', 'Java', 'Spring Boot', 'Spring Security', 'JWT', 'Spring Data JPA', 'MySQL', 'Docker'],
    featured: true,
  },
  {
    id: 'proj_03',
    title: 'AI Exam Companion',
    tag: 'AI-Powered Exam Preparation',
    desc: 'A mock-test platform with instant scoring and answer validation, plus a Groq-powered chatbot that explains concepts and clarifies wrong answers in real time.',
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'Firebase Auth', 'Groq API', 'JSON'],
    links: [{ label: 'Live site', href: 'https://ai-exam-companion-ghzc.onrender.com' }],
  },
  {
    id: 'proj_04',
    title: 'Personal Portfolio',
    tag: 'This Site',
    desc: 'A performance-focused portfolio built with modular React components to present projects, skills, and contact details.',
    tech: ['React.js', 'Vite', 'JavaScript (ES6)', 'CSS3'],
  },
]

const CERTS = [
  { name: 'Introduction to Java', by: 'Infosys Springboard' },
  { name: 'Java Programming Fundamentals', by: 'Infosys Springboard' },
]

const CONTACTS = [
  { icon: Mail, label: 'email', value: 'Srinivasrahul838@gmail.com', href: 'mailto:Srinivasrahul838@gmail.com' },
  { icon: Phone, label: 'phone', value: '+91 73376 34886', href: 'tel:+917337634886' },
  { icon: Linkedin, label: 'linkedin', value: 'linkedin.com/in/rahul-s', href: 'https://www.linkedin.com/in/rahul-s-6460b1238' },
  { icon: Github, label: 'github', value: 'github.com/rahul-s', href: 'https://github.com/' },
]

const HERO_JSON = [
  { k: 'name', v: '"Rahul S"' },
  { k: 'role', v: '"Full Stack Developer"' },
  { k: 'location', v: '"Bengaluru, IN"' },
  { k: 'stack', v: '["React", "Spring Boot", "MySQL"]' },
  { k: 'status', v: '"open_to_work"' },
]

/* ================================================================== */
/* hooks                                                                */
/* ================================================================== */

function useTypewriter(words, typeSpeed = 60, deleteSpeed = 30, pause = 1300) {
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
    const sections = ROUTES.map((n) => document.getElementById(n.id)).filter(Boolean)
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

// Section header styled as an HTTP request line — carries real
// information here since the site really is organised as a set of
// routes, and each one really does resolve (reveal-in doubles as
// the "response").
function Endpoint({ method = 'GET', path }) {
  const [ref, inView] = useReveal()
  return (
    <div ref={ref} className="endpoint-row">
      <span className={`http-method ${method.toLowerCase()}`}>{method}</span>
      <span className="http-path">{path}</span>
      <span className="http-rule" />
      <span className={`http-status ${inView ? 'in' : ''}`}>200 OK</span>
    </div>
  )
}

function HeroResponse() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (visibleLines >= HERO_JSON.length) return
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 260 + visibleLines * 90)
    return () => clearTimeout(t)
  }, [visibleLines])

  return (
    <div className="response-card">
      <div className="response-titlebar">
        <span className="dot" /><span className="dot" /><span className="dot" />
        <span className="response-file">profile.json</span>
      </div>
      <div className="response-body">
        <p className="response-line request-line">
          <span className="tok-method">GET</span> /rahul-s <span className="tok-dim">HTTP/1.1</span>
        </p>
        <p className="response-line status-line"><span className="tok-ok">200 OK</span></p>
        <p className="response-line brace">{'{'}</p>
        {HERO_JSON.map((row, i) => (
          <p key={row.k} className={`response-line kv ${i < visibleLines ? 'in' : ''}`}>
            <span className="tok-key">&quot;{row.k}&quot;</span><span className="tok-dim">:</span>{' '}
            <span className="tok-val">{row.v}</span>
            {i < HERO_JSON.length - 1 && <span className="tok-dim">,</span>}
          </p>
        ))}
        <p className="response-line brace">{'}'}<span className="cursor-blink" /></p>
      </div>
    </div>
  )
}

/* ================================================================== */
/* main application                                                    */
/* ================================================================== */

export default function App() {
  const typed = useTypewriter(ROLES)
  const active = useActiveSection()
  const scrolled = useScrolledPast()

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <div>
      <div className="grid-field" aria-hidden="true" />

      {/* ---------------- navbar ---------------- */}
      <nav className={`site-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="wrap nav-inner">
          <button className="logo-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
            <span className="logo-chip">rahul.dev</span>
          </button>

          <div className="tab-bar">
            {ROUTES.map((n) => (
              <button key={n.id} className={`tab ${active === n.id ? 'active' : ''}`} onClick={() => scrollTo(n.id)}>
                {n.label}
              </button>
            ))}
          </div>

          <button className="btn ghost nav-cta" onClick={() => scrollTo('contact')}>
            POST /contact
          </button>
        </div>
      </nav>

      {/* ---------------- hero ---------------- */}
      <header id="hero" className="hero">
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <Reveal>
              <div className="hero-eyebrow"><span className="prompt">$</span> whoami</div>
            </Reveal>

            <Reveal delay={70}>
              <h1 className="hero-name">Rahul S</h1>
            </Reveal>

            <Reveal delay={130}>
              <div className="hero-role">
                <span className="cmt">//</span>
                <span className="role-text">{typed}<span className="type-cursor" /></span>
              </div>
            </Reveal>

            <Reveal delay={190}>
              <p className="hero-desc">
                Full stack developer skilled in Java, Spring Boot, React.js, REST APIs, and MySQL —
                building secure, responsive web applications with attention to backend architecture,
                database design, and authentication.
              </p>
            </Reveal>

            <Reveal delay={250}>
              <div className="hero-cta">
                <button className="btn primary" onClick={() => scrollTo('projects')}>View projects</button>
                <button className="btn ghost" onClick={() => scrollTo('contact')}>Get in touch</button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="hero-response">
            <HeroResponse />
          </Reveal>
        </div>
      </header>

      {/* ---------------- about ---------------- */}
      <section id="about" className="wrap section">
        <Reveal><Endpoint path="/about" /></Reveal>
        <Reveal delay={90}>
          <h2 className="sec-title">Backend-minded, shipped as full stack.</h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="about-text">
            I build web applications end to end — <strong>React</strong> interfaces wired to
            <strong> Spring Boot</strong> services, with data modelled in <strong>MySQL</strong> and
            protected by <strong>Spring Security</strong> and JWT. I care about how a request actually
            moves through a system: controller, service, repository, and the schema underneath it —
            and I write it in clean, testable layers rather than one large tangle.
          </p>
        </Reveal>
      </section>

      {/* ---------------- skills ---------------- */}
      <section id="skills" className="wrap section">
        <Reveal><Endpoint path="/skills" /></Reveal>
        <Reveal delay={90}><h2 className="sec-title">Technical skills</h2></Reveal>

        <div className="skill-grid">
          {SKILL_GROUPS.map((g, i) => (
            <Reveal key={g.cat} delay={i * 60} className="panel skill-card">
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
        <Reveal><Endpoint path="/experience" /></Reveal>
        <Reveal delay={90}><h2 className="sec-title">Experience</h2></Reveal>

        <div className="timeline">
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.company} delay={i * 100} as="div" className="timeline-item">
              <span className="timeline-node" />
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
        <Reveal><Endpoint path="/projects" /></Reveal>
        <Reveal delay={90}><h2 className="sec-title">Projects</h2></Reveal>

        <div className="project-list">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 90} className="panel project-card">
              <div className="project-heading">
                <span className="project-id">{p.id}</span>
                <h3>{p.title}</h3>
                {p.featured && <span className="project-flag"><CheckCircle2 size={12} /> featured</span>}
              </div>
              <p className="project-tag">{p.tag}</p>
              <p className="project-desc">{p.desc}</p>
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
        <Reveal><Endpoint path="/certifications" /></Reveal>
        <Reveal delay={90}><h2 className="sec-title">Certifications</h2></Reveal>

        <div className="cert-grid">
          {CERTS.map((c, i) => (
            <Reveal key={c.name} delay={i * 70} className="panel cert-card">
              <span className="cert-icon"><BadgeCheck size={16} /></span>
              <div>
                <p className="cert-name">{c.name}</p>
                <p className="cert-by">{c.by}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- architecture ---------------- */}
      <section id="architecture" className="wrap section">
        <Reveal><Endpoint path="/architecture" /></Reveal>
        <Reveal delay={90}>
          <h2 className="sec-title">How a request moves</h2>
          <p className="sec-desc">
            Client to service to schema — the layers a request actually passes through, and what runs it.
          </p>
        </Reveal>

        <Reveal delay={80} className="pipeline">
          {ARCHITECTURE.map((layer, i) => {
            const Icon = layer.icon
            return (
              <div key={layer.title}>
                <div className="pipe-node">
                  <div className="pipe-icon"><Icon size={18} /></div>
                  <div className="pipe-body panel">
                    <p className="pipe-sub">{layer.subtitle}</p>
                    <h3 className="pipe-title">{layer.title}</h3>
                    <p className="pipe-blurb">{layer.blurb}</p>
                    <div className="pipe-items">
                      {layer.items.map((it) => <span key={it} className="pill mono">{it}</span>)}
                    </div>
                  </div>
                </div>
                {i < ARCHITECTURE.length - 1 && (
                  <div className="pipe-connector"><span className="wire" /></div>
                )}
              </div>
            )
          })}
        </Reveal>
      </section>

      {/* ---------------- contact ---------------- */}
      <section id="contact" className="wrap section">
        <Reveal><Endpoint method="POST" path="/contact" /></Reveal>
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
          <span className="footer-meta">// built by Rahul S · 2026</span>
          <span className="footer-meta">status: <span className="tok-ok">open_to_work</span></span>
        </div>
      </footer>
    </div>
  )
}
