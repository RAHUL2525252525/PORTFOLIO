import { useEffect, useRef, useState } from 'react'
import {
  Github, Linkedin, Mail, Phone, ArrowUpRight, Sparkles,
  Code2, Server, Database, Wrench, Award, GraduationCap, ShieldCheck, Cpu
} from 'lucide-react'
import './index.css'

/* ================================================================== */
/* content — aligned with professional resume details                 */
/* ================================================================== */

const ROLES = [
  'React Developer',
  'Frontend Developer',
  'Full Stack Developer',
  'Software Developer',
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
  'React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS',
  'Java', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'Firebase',
  'REST APIs', 'Git', 'GitHub', 'Vite', 'Vercel', 'Render'
]

// Architecture request flow: Client -> Server -> Database -> Tooling & Infra
const STACK_LAYERS = [
  {
    icon: Code2,
    title: 'Frontend Presentation',
    subtitle: 'User Interface',
    items: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'],
    blurb: 'Responsive, accessible web screens and component architecture engineered for seamless user interaction.',
  },
  {
    icon: Server,
    title: 'Backend Logic & APIs',
    subtitle: 'Server Side',
    items: ['Java', 'Spring Boot', 'Spring Data JPA', 'REST APIs', 'Firebase Auth'],
    blurb: 'Robust application logic, secure authentication pipelines, and efficient API endpoint handling.',
  },
  {
    icon: Database,
    title: 'Data Persistence',
    subtitle: 'Database & Storage',
    items: ['MySQL', 'Firebase Realtime DB', 'CRUD Operations'],
    blurb: 'Structured data modeling, relational storage, and real-time state synchronization.',
  },
  {
    icon: Wrench,
    title: 'Build & Deployment',
    subtitle: 'Tooling & Hosting',
    items: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Vercel', 'Render'],
    blurb: 'Version control, continuous integration workflows, and modern cloud hosting environments.',
  },
]

const EXPERIENCE = [
  {
    role: 'Web Development Intern',
    company: 'MR Tech Lab',
    time: '2026',
    place: 'Bengaluru',
    points: [
      'Developed responsive and accessible web pages using HTML5, CSS3 (Flexbox/Grid), and JavaScript (ES6+).',
      'Integrated REST APIs with React.js to fetch and display dynamic data.',
      'Deployed frontend applications on Vercel and Render while ensuring responsive design and cross-browser compatibility.',
    ],
  },
  {
    role: 'AI / ML & Python Intern',
    company: 'KNOWX Innovations',
    time: '2023',
    place: 'Bengaluru',
    points: [
      'Worked on Python-based applications, data preprocessing, and basic model testing for AI/ML projects.',
      'Collaborated with the development team to maintain code, perform testing, and support software development activities.',
    ],
  },
]

const PROJECTS = [
  {
    id: '01',
    title: 'ShopSphere',
    tag: 'Full-Stack E-Commerce Web Application',
    desc: 'A complete full-stack e-commerce web application featuring product browsing, search functionality, cart, wishlist, user authentication, and order management. Includes an admin dashboard to manage products, users, inventory, and orders using CRUD operations.',
    tech: ['React.js', 'JavaScript (ES6+)', 'Java', 'Spring Boot', 'Spring Data JPA', 'REST APIs', 'MySQL', 'Git'],
    note: 'Note: Start the backend first (Render free tier may take 30–60 seconds to wake up), then open the frontend.',
    links: [
      { label: 'Live Site', href: 'https://shopsphere-8m8f.vercel.app/' },
      { label: 'Backend API', href: 'https://shopsphere-backend-5umn.onrender.com' },
    ],
    featured: true,
  },
  {
    id: '02',
    title: 'AI Exam Companion',
    tag: 'AI-Powered Exam Preparation Application',
    desc: 'Interactive mock test platform with instant score calculation, answer validation, and performance tracking. Integrated Groq API to power an AI chatbot that explains complex concepts and clarifies wrong answers in real-time.',
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Firebase Authentication', 'Groq API', 'JSON'],
    links: [{ label: 'Live Site', href: 'https://ai-exam-companion-ghzc.onrender.com' }],
  },
  {
    id: '03',
    title: 'Personal Portfolio',
    tag: 'Responsive Developer Portfolio',
    desc: 'A high-performance personal portfolio website built with modular, reusable React components to showcase projects, technical skills, certifications, and contact information.',
    tech: ['React.js', 'Vite', 'JavaScript (ES6+)', 'CSS3 (Flexbox & Grid)', 'Vercel'],
  },
]

const CERTS = [
  { name: 'Introduction to Java', by: 'Infosys Springboard' },
  { name: 'Cloud Computing', by: 'Infosys Springboard' },
  { name: 'Software Engineering', by: 'Infosys Springboard' },
  { name: 'AI and Green Skills', by: 'Edunet Foundation, Skills4Future Program' },
]

const EDUCATION = [
  { 
    school: 'Dr. ACS College of Engineering', 
    degree: 'Bachelor of Engineering (B.E.) in Computer Science and Engineering', 
    time: '2023 – 2026 · Bengaluru' 
  },
  { 
    school: 'PVP Polytechnic', 
    degree: 'Diploma in Information Science and Engineering', 
    time: '2020 – 2023 · Bengaluru' 
  },
  { 
    school: 'Vidya Priya English School', 
    degree: 'Secondary School Leaving Certificate (SSLC)', 
    time: '2019 – 2020 · Bengaluru' 
  },
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
/* small components                                                   */
/* ================================================================== */

function Eyebrow({ index }) {
  return (
    <div className="eyebrow-row">
      <span className="medallion">{index}</span>
      <span className="thread" />
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
  const heroRef = useRef(null)

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

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
              Open to Opportunities · Bengaluru, India
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="hero-name">Hi, I&rsquo;m <span className="shine">Rahul S</span>.</h1>
          </Reveal>

          <Reveal delay={140}>
            <div className="hero-role">
              <span className="rule" />
              <span className="role-text">{typed}<span className="type-cursor" /></span>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <p className="hero-desc">
              Performance-driven Developer and B.E. Computer Science Graduate with hands-on experience in building responsive web applications using React.js, JavaScript (ES6+), Java, Spring Boot, and MySQL.
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
          <h2 className="sec-title">Engineered for <em>Performance</em> & Scale</h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="about-text">
            I specialize in developing responsive web applications with <strong>React.js</strong> and robust backends powered by <strong>Java</strong> and <strong>Spring Boot</strong>. Proficient in dynamic REST API integration, Firebase Authentication, state management, and relational database management with <strong>MySQL</strong>. I am focused on writing clean, modular code that delivers seamless UI/UX across all devices.
          </p>
        </Reveal>
      </section>

      {/* ---------------- skills ---------------- */}
      <section id="skills" className="wrap section">
        <Reveal>
          <Eyebrow index="02" />
          <h2 className="sec-title">Technical <em>Proficiencies</em></h2>
        </Reveal>
        <div className="skill-cloud">
          {SKILLS.map((s, i) => (
            <Reveal key={s} delay={i * 30} as="span" className="panel skill-pill">
              {s}
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- experience ---------------- */}
      <section id="experience" className="wrap section">
        <Reveal>
          <Eyebrow index="03" />
          <h2 className="sec-title">Professional <em>Experience</em></h2>
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
            <GraduationCap size={16} color="var(--gold)" /> Education Background
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
          <h2 className="sec-title">Featured <em>Projects</em></h2>
        </Reveal>

        <div className="project-list">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 100} className="panel project-card">
              <div className="project-heading">
                <h3>{p.title}</h3>
                {p.featured && <span className="project-flag">Featured Full Stack</span>}
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
          <h2 className="sec-title">Certifications &amp; <em>Learning</em></h2>
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
          <h2 className="sec-title">Application Architecture &amp; <em>Data Flow</em></h2>
          <p className="sec-desc">
            A structured breakdown of client request handling, middleware processing, database persistence, and deployment infrastructure.
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
          <h2 className="contact-title">Let&rsquo;s Connect &amp; <em>Build Together.</em></h2>
          <p className="sec-desc">Open to React, Frontend, Full Stack, and Software Engineering roles. Based in Bengaluru, India.</p>
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
            <Sparkles size={13} /> Crafted with React.js &amp; CSS3
          </span>
        </div>
      </footer>
    </div>
  )
}
