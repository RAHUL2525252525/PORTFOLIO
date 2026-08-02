import { useEffect, useRef, useState } from 'react'
import {
  Github, Linkedin, Mail, Phone, ArrowUpRight, Terminal,
  Folder, FolderOpen, FileText, GitBranch, CircleDot,
  ChevronRight, ChevronDown, ExternalLink, Star, CheckCircle2,
  Menu, X, Cpu, Database, Server, Code2, Globe, Award,
  GraduationCap, MapPin, Briefcase, Rocket,
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

const TREE = [
  { id: 'about', label: 'about.md', icon: FileText },
  { id: 'skills', label: 'skills.json', icon: FileText },
  { id: 'projects', label: 'projects', icon: 'folder', children: [
    { id: 'projects', label: 'shop_sphere.jsx' },
    { id: 'projects', label: 'exam_companion.js' },
    { id: 'projects', label: 'portfolio_v1.jsx' },
  ] },
  { id: 'experience', label: 'experience.log', icon: FileText },
  { id: 'contact', label: 'contact.sh', icon: FileText },
]

const ABOUT_CARDS = [
  { icon: GraduationCap, label: 'education', value: 'B.E. Computer Science, ACS College of Engineering (2023–2026)' },
  { icon: MapPin, label: 'location', value: 'Bengaluru, India — open to relocation & remote' },
  { icon: Mail, label: 'email', value: 'Srinivasrahul838@gmail.com' },
  { icon: Briefcase, label: 'availability', value: 'Full-time, immediate start' },
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
  { icon: Code2, title: 'What you see', subtitle: 'frontend/', items: ['React', 'Tailwind CSS', 'HTML', 'CSS'], blurb: 'The screens and buttons a person taps.' },
  { icon: Server, title: 'What runs it', subtitle: 'backend/', items: ['Java', 'Spring Boot', 'REST API'], blurb: 'The logic behind the screen. It answers every request.' },
  { icon: Database, title: 'Where data lives', subtitle: 'database/', items: ['MySQL'], blurb: 'Where everything gets saved, and read back later.' },
  { icon: GitBranch, title: 'How I build it', subtitle: 'tooling/', items: ['Git', 'GitHub'], blurb: 'Version control, and where the code lives online.' },
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
    file: 'shop_sphere.jsx',
    title: 'ShopSphere',
    tag: 'a full-stack online store',
    desc: 'A complete online shop. People can browse, search, add to cart, and track orders. Behind it, an admin panel manages products, users, and stock.',
    tech: ['React', 'Spring Boot', 'MySQL', 'REST API'],
    note: 'The server sleeps to save cost. Give it 30–60 seconds to wake up before the live site loads fully.',
    links: [
      { label: 'live_site', href: 'https://shopsphere-8m8f.vercel.app/' },
      { label: 'backend', href: 'https://shopsphere-backend-5umn.onrender.com' },
    ],
    featured: true,
    stats: { users: '500+', products: '100+', orders: '50+' },
  },
  {
    id: '02',
    file: 'exam_companion.js',
    title: 'AI Exam Companion',
    tag: 'an exam practice app',
    desc: 'A practice test app that scores you right away. A built-in AI chatbot explains why an answer was wrong, instead of just marking it incorrect.',
    tech: ['JavaScript', 'Firebase', 'Groq API'],
    links: [{ label: 'live_site', href: 'https://ai-exam-companion-ghzc.onrender.com' }],
    stats: { questions: '200+', accuracy: '95%', ai: 'live' },
  },
  {
    id: '03',
    file: 'portfolio_v1.jsx',
    title: 'Personal Portfolio',
    tag: 'an earlier version of this site',
    desc: 'My first portfolio site. Built to be fast, clean, and easy to read on any device.',
    tech: ['React', 'Vite', 'CSS'],
    stats: { views: '1K+', speed: '100', score: 'A+' },
  },
]

const CERTS = [
  { name: 'Introduction to Java', by: 'Infosys Springboard' },
  { name: 'Cloud Computing', by: 'Infosys Springboard' },
  { name: 'Software Engineering', by: 'Infosys Springboard' },
  { name: 'AI and Green Skills', by: 'Edunet Foundation, Skills4Future' },
]

const CONTACTS = [
  { icon: Mail, label: 'email', value: 'Srinivasrahul838@gmail.com', href: 'mailto:Srinivasrahul838@gmail.com' },
  { icon: Phone, label: 'phone', value: '+91 73376 34886', href: 'tel:+917337634886' },
  { icon: Linkedin, label: 'linkedin', value: 'linkedin.com/in/rahul-s', href: 'https://www.linkedin.com/in/rahul-s-6460b1238' },
  { icon: Github, label: 'github', value: 'github.com', href: 'https://github.com/' },
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

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) }),
      { rootMargin: '-35% 0px -50% 0px' }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [ids])
  return active
}

function useClock() {
  const [time, setTime] = useState(() => new Date())
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000 * 30)
    return () => clearInterval(t)
  }, [])
  return time.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
}

/* ================================================================== */
/* small pieces                                                        */
/* ================================================================== */

function CmdLine({ children }) {
  return (
    <div className="cmd-line">
      <span className="cmd-prompt">guest@rahul-s</span>
      <span className="cmd-sep">:~$</span>
      <span className="cmd-text">{children}</span>
    </div>
  )
}

function Meter({ name, level, delay }) {
  const [ref, inView] = useReveal()
  const segments = 24
  const lit = Math.round((level / 100) * segments)
  return (
    <div className="meter-row" ref={ref}>
      <div className="meter-top">
        <span className="meter-name">{name}</span>
        <span className="meter-pct">{level}%</span>
      </div>
      <div className="meter-blocks">
        {Array.from({ length: segments }).map((_, i) => (
          <span
            key={i}
            className={`meter-seg ${inView && i < lit ? 'lit' : ''}`}
            style={{ transitionDelay: `${delay + i * 14}ms` }}
          />
        ))}
      </div>
    </div>
  )
}

/* ================================================================== */
/* app                                                                  */
/* ================================================================== */

export default function App() {
  const typed = useTypewriter(ROLES)
  const active = useActiveSection(['hero', 'about', 'skills', 'projects', 'experience', 'contact'])
  const clock = useClock()
  const [menuOpen, setMenuOpen] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(true)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return (
    <div className="app">
      <div className="scanlines" />

      {/* ---------------- terminal chrome top bar ---------------- */}
      <div className="term-topbar">
        <div className="term-topbar-left">
          <button className="menu-toggle" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle explorer">
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
          <div className="term-dots">
            <span /><span /><span />
          </div>
          <span className="term-title">rahul@career — zsh — 120×40</span>
        </div>
        <div className="term-topbar-right">
          <span className="term-status"><CircleDot size={11} className="status-icon" /> online</span>
          <span className="term-clock">{clock} IST</span>
        </div>
      </div>

      {/* ---------------- sidebar (file explorer) ---------------- */}
      <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <Terminal size={14} />
          <span>EXPLORER</span>
        </div>
        <div className="tree">
          <button className={`tree-item root ${active === 'hero' ? 'active' : ''}`} onClick={() => scrollTo('hero')}>
            <FolderOpen size={14} className="tree-icon" />
            <span>rahul-s/</span>
          </button>

          {TREE.map((item) => {
            if (item.icon === 'folder') {
              return (
                <div key={item.label}>
                  <button
                    className={`tree-item indent-1 ${active === item.id ? 'active' : ''}`}
                    onClick={() => { setProjectsOpen((v) => !v); scrollTo(item.id) }}
                  >
                    {projectsOpen ? <ChevronDown size={12} className="chevron" /> : <ChevronRight size={12} className="chevron" />}
                    {projectsOpen ? <FolderOpen size={14} className="tree-icon" /> : <Folder size={14} className="tree-icon" />}
                    <span>{item.label}/</span>
                  </button>
                  {projectsOpen && item.children.map((c) => (
                    <button key={c.label} className="tree-item indent-2 file" onClick={() => scrollTo(c.id)}>
                      <FileText size={13} className="tree-icon dim" />
                      <span>{c.label}</span>
                    </button>
                  ))}
                </div>
              )
            }
            const Icon = item.icon
            return (
              <button
                key={item.id}
                className={`tree-item indent-1 file ${active === item.id ? 'active' : ''}`}
                onClick={() => scrollTo(item.id)}
              >
                <Icon size={13} className="tree-icon dim" />
                <span>{item.label}</span>
              </button>
            )
          })}
        </div>

        <div className="sidebar-footer">
          <a href="mailto:Srinivasrahul838@gmail.com" className="btn primary full">
            <span>Say hello</span> <ArrowUpRight size={14} />
          </a>
        </div>
      </aside>

      <main className="main">
        {/* ---------------- hero ---------------- */}
        <header id="hero" className="hero">
          <Reveal>
            <CmdLine>whoami</CmdLine>
          </Reveal>
          <Reveal delay={80} className="hero-output">
            <h1 className="hero-name">Rahul S</h1>
            <div className="hero-role-line">
              <span className="prompt-arrow">&gt;</span>
              <span className="role-label">role:</span>
              <span className="role-text">{typed}</span>
              <span className="type-cursor" />
            </div>
            <p className="hero-desc">
              Final-year Computer Science student who ships finished products, not prototypes.
              I build interfaces in <strong>React</strong> and connect them to backends I also wrote
              myself, in <strong>Java &amp; Spring Boot</strong> — three of them are live right now.
            </p>
            <div className="hero-actions">
              <button className="btn primary" onClick={() => scrollTo('projects')}>
                <span>./view_projects.sh</span> <ArrowUpRight size={15} />
              </button>
              <button className="btn outline" onClick={() => scrollTo('contact')}>
                <span>./contact.sh</span>
              </button>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <CmdLine>cat status.txt</CmdLine>
          </Reveal>
          <Reveal delay={220} className="hero-output">
            <div className="status-panel">
              <div className="status-row"><span>status</span><span className="ok"><CircleDot size={10} /> open to work</span></div>
              <div className="status-row"><span>location</span><span>Bengaluru, India</span></div>
              <div className="status-row"><span>live_projects</span><span>03</span></div>
              <div className="status-row"><span>internships</span><span>02</span></div>
              <div className="status-row"><span>certifications</span><span>04</span></div>
            </div>
          </Reveal>
        </header>

        {/* ---------------- about ---------------- */}
        <section id="about" className="section">
          <Reveal><CmdLine>cat about.md</CmdLine></Reveal>
          <Reveal delay={70} className="section-output">
            <h2 className="section-title">A builder, not just a student</h2>
            <p className="body-text">
              I believe in learning by doing. Rather than just studying theory, I build
              production-ready applications that solve real problems. My expertise spans
              the full stack — from crafting pixel-perfect, responsive interfaces with{' '}
              <strong>React</strong> to architecting scalable backend systems with{' '}
              <strong>Java</strong> and <strong>Spring Boot</strong>.
            </p>
            <p className="body-text">
              I write clean, maintainable code and focus on creating seamless user
              experiences. Every project is an opportunity to learn something new.
            </p>

            <div className="about-grid">
              {ABOUT_CARDS.map((c) => {
                const Icon = c.icon
                return (
                  <div key={c.label} className="kv-card">
                    <div className="kv-key"><Icon size={13} /> {c.label}</div>
                    <div className="kv-value">{c.value}</div>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </section>

        {/* ---------------- skills ---------------- */}
        <section id="skills" className="section section-alt">
          <Reveal><CmdLine>cat skills.json</CmdLine></Reveal>
          <Reveal delay={70} className="section-output">
            <h2 className="section-title">Technologies on record</h2>
            <p className="section-subtitle">Everything below has shipped in a real project.</p>

            <div className="tag-row">
              {SKILL_TAGS.map((s) => <span key={s} className="tag-chip">{s}</span>)}
            </div>

            <div className="meter-list">
              {SKILL_BARS.map((b, i) => (
                <Meter key={b.name} name={b.name} level={b.level} delay={i * 60} />
              ))}
            </div>
          </Reveal>
        </section>

        {/* ---------------- projects ---------------- */}
        <section id="projects" className="section">
          <Reveal><CmdLine>ls -la ./projects</CmdLine></Reveal>
          <Reveal delay={70} className="section-output">
            <h2 className="section-title">Things I've built</h2>
          </Reveal>

          <div className="project-grid">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.id} delay={100 + i * 100} className={`project-card ${p.featured ? 'featured' : ''}`}>
                <div className="project-file-bar">
                  <FileText size={13} />
                  <span>{p.file}</span>
                  {p.featured && <span className="featured-badge"><Star size={11} /> featured</span>}
                </div>
                <div className="project-body">
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-tagline">// {p.tag}</p>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-stats">
                    {Object.entries(p.stats).map(([key, value]) => (
                      <div key={key} className="project-stat">
                        <span className="stat-value">{value}</span>
                        <span className="stat-label">{key}</span>
                      </div>
                    ))}
                  </div>
                  <div className="project-tech">
                    {p.tech.map((t) => <span key={t}>{t}</span>)}
                  </div>
                  {p.note && <p className="project-note">// {p.note}</p>}
                  {p.links && (
                    <div className="project-links">
                      {p.links.map((l) => (
                        <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">
                          {l.label} <ExternalLink size={12} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------------- architecture pipeline ---------------- */}
        <section className="section section-alt">
          <Reveal><CmdLine>tree ./architecture</CmdLine></Reveal>
          <Reveal delay={70} className="section-output">
            <h2 className="section-title">How a request moves through my apps</h2>
            <p className="section-subtitle">From the screen you tap to the database that remembers.</p>
          </Reveal>

          <Reveal delay={120} className="pipeline">
            {STACK_LAYERS.map((layer, i) => {
              const Icon = layer.icon
              return (
                <div key={layer.title} className="pipeline-row">
                  <div className="pipeline-num">0{i + 1}</div>
                  <div className="pipeline-line-wrap">
                    <div className="pipeline-icon"><Icon size={16} /></div>
                    {i < STACK_LAYERS.length - 1 && <div className="pipeline-line" />}
                  </div>
                  <div className="pipeline-content">
                    <span className="pipeline-subtitle">{layer.subtitle}</span>
                    <h3 className="pipeline-title">{layer.title}</h3>
                    <p className="pipeline-desc">{layer.blurb}</p>
                    <div className="pipeline-tech">
                      {layer.items.map((it) => <span key={it}>{it}</span>)}
                    </div>
                  </div>
                </div>
              )
            })}
          </Reveal>
        </section>

        {/* ---------------- experience ---------------- */}
        <section id="experience" className="section">
          <Reveal><CmdLine>tail -f experience.log</CmdLine></Reveal>
          <Reveal delay={70} className="section-output">
            <h2 className="section-title">How I got here</h2>
          </Reveal>

          <div className="log-list">
            {EXPERIENCE.map((e, i) => {
              const Icon = e.icon
              return (
                <Reveal key={e.company} delay={i * 90} className="log-entry">
                  <div className="log-time">[{e.time}]</div>
                  <div className="log-body">
                    <div className="log-head">
                      <Icon size={15} />
                      <h3>{e.role}</h3>
                    </div>
                    <p className="log-meta">{e.company} · {e.place}</p>
                    <ul className="log-points">
                      {e.points.map((pt) => <li key={pt}>{pt}</li>)}
                    </ul>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={120} className="section-output">
            <span className="mini-label"><GraduationCap size={13} /> education</span>
            <div className="edu-grid">
              {EDUCATION.map((ed) => (
                <div key={ed.school} className="kv-card">
                  <div className="kv-key">{ed.school}</div>
                  <div className="kv-value">{ed.degree}</div>
                  <div className="kv-sub">{ed.time}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={160} className="section-output">
            <span className="mini-label"><Award size={13} /> certifications</span>
            <div className="cert-grid">
              {CERTS.map((c) => (
                <div key={c.name} className="cert-row">
                  <CheckCircle2 size={15} className="cert-check" />
                  <div>
                    <div className="cert-name">{c.name}</div>
                    <div className="cert-by">{c.by}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ---------------- contact ---------------- */}
        <section id="contact" className="section section-alt">
          <Reveal><CmdLine>./contact.sh --send</CmdLine></Reveal>
          <Reveal delay={70} className="section-output">
            <h2 className="section-title">Let's build something great</h2>
            <p className="section-subtitle">Open to full-stack and frontend roles. Based in Bengaluru, available for remote work.</p>
          </Reveal>

          <div className="contact-grid">
            {CONTACTS.map((c, i) => {
              const Icon = c.icon
              return (
                <Reveal key={c.label} delay={i * 70} className="contact-card">
                  <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="contact-link">
                    <div className="contact-icon"><Icon size={16} /></div>
                    <div className="contact-info">
                      <span className="contact-key">{c.label}</span>
                      <span className="contact-value">{c.value}</span>
                    </div>
                    <ArrowUpRight size={14} className="contact-arrow" />
                  </a>
                </Reveal>
              )
            })}
          </div>
        </section>

        <footer className="footer">
          <span className="footer-line">// EOF — © {new Date().getFullYear()} Rahul S</span>
          <span className="footer-line">built with React</span>
        </footer>
      </main>
    </div>
  )
}
