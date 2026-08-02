import { useEffect, useRef, useState } from 'react'
import {
  Github, Linkedin, Mail, Phone, ArrowUpRight, Terminal,
  Folder, FolderOpen, FileText, GitBranch, CircleDot,
  ChevronRight, ChevronDown, ExternalLink, Star, CheckCircle2,
  Menu, X, Database, Server, Code2, Award,
  GraduationCap, MapPin, Briefcase, Rocket, Languages, ShieldCheck,
} from 'lucide-react'

/* ================================================================== */
/* content — enriched from all 4 resume variants (Frontend / Fullstack /*/
/* React / Software Developer) so nothing that's on paper is missing   */
/* here.                                                                */
/* ================================================================== */

const ROLES = [
  'React Developer',
  'Frontend Developer',
  'Full Stack Developer',
  'Software Developer',
]

const TREE = [
  { id: 'about', label: 'about.md', icon: FileText },
  { id: 'skills', label: 'skills.json', icon: FileText },
  { id: 'languages', label: 'languages.yml', icon: FileText },
  { id: 'projects', label: 'projects', icon: 'folder', children: [
    { id: 'projects', label: 'shop_sphere.jsx' },
    { id: 'projects', label: 'exam_companion.js' },
    { id: 'projects', label: 'portfolio_v1.jsx' },
  ] },
  { id: 'experience', label: 'experience.log', icon: FileText },
  { id: 'contact', label: 'contact.sh', icon: FileText },
]

const ABOUT_CARDS = [
  { icon: GraduationCap, label: 'education', value: 'B.E. Computer Science, Dr. ACS College of Engineering (2023–2026)' },
  { icon: MapPin, label: 'location', value: 'Bengaluru, Karnataka — open to relocation & remote' },
  { icon: Mail, label: 'email', value: 'Srinivasrahul838@gmail.com' },
  { icon: Briefcase, label: 'availability', value: 'Full-time, immediate start' },
]

/* Flat tag row — quick scan */
const SKILL_TAGS = [
  'React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Java', 'Spring Boot',
  'Spring Data JPA', 'MySQL', 'REST APIs', 'Firebase Auth', 'Git', 'GitHub',
]

/* Categorized, exactly as grouped on the resumes — rendered as a real
   syntax-highlighted skills.json block instead of invented percentages */
const SKILL_GROUPS = [
  { key: 'languages', values: ['Java', 'JavaScript (ES6)', 'SQL'] },
  { key: 'frontend', values: ['HTML5', 'CSS3', 'React.js', 'JSX', 'Responsive Design', 'Flexbox', 'CSS Grid', 'Mobile-First Design', 'DOM Manipulation', 'Cross-Browser Compatibility'] },
  { key: 'backend', values: ['Spring Boot', 'Spring Data JPA'] },
  { key: 'database', values: ['MySQL', 'Firebase Realtime DB', 'CRUD Operations'] },
  { key: 'api', values: ['REST APIs', 'Dynamic REST Integration', 'JSON', 'Groq API'] },
  { key: 'auth', values: ['Firebase Authentication', 'Role-Based Access Control'] },
  { key: 'tooling', values: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Vite', 'Vercel', 'Render'] },
  { key: 'core', values: ['OOP', 'Data Structures & Algorithms', 'UI/UX Principles'] },
]

const STACK_LAYERS = [
  { icon: Code2, title: 'What you see', subtitle: 'frontend/', items: ['React', 'Tailwind / CSS Grid', 'HTML', 'CSS'], blurb: 'The screens and buttons a person taps.' },
  { icon: Server, title: 'What runs it', subtitle: 'backend/', items: ['Java', 'Spring Boot', 'Spring Data JPA', 'REST API'], blurb: 'The logic behind the screen. It answers every request.' },
  { icon: Database, title: 'Where data lives', subtitle: 'database/', items: ['MySQL', 'Firebase Realtime DB'], blurb: 'Where everything gets saved, and read back later.' },
  { icon: GitBranch, title: 'How I build it', subtitle: 'tooling/', items: ['Git', 'GitHub', 'Vite', 'Render'], blurb: 'Version control, and where the code lives online.' },
]

const EXPERIENCE = [
  {
    icon: Briefcase,
    role: 'Web Development Intern',
    company: 'MR Tech Lab',
    time: '2026',
    place: 'Bengaluru',
    points: [
      'Developed responsive and accessible web pages using HTML5, CSS3 (Flexbox/Grid), and JavaScript (ES6+)',
      'Integrated REST APIs with React.js to fetch and display dynamic data',
      'Deployed frontend applications on Vercel and Render while ensuring cross-browser compatibility',
    ],
  },
  {
    icon: Rocket,
    role: 'AI / ML & Python Intern',
    company: 'KNOWX Innovations',
    time: '2023',
    place: 'Bengaluru',
    points: [
      'Worked on Python-based applications, data preprocessing, and basic model testing for AI/ML projects',
      'Collaborated with the development team on code maintenance, testing, and software development activities',
    ],
  },
]

const EDUCATION = [
  { school: 'Dr. ACS College of Engineering', degree: 'B.E., Computer Science and Engineering', time: '2023 – 2026 · Bengaluru' },
  { school: 'PVP Polytechnic', degree: 'Diploma, Information Science and Engineering', time: '2020 – 2023 · Bengaluru' },
  { school: 'Vidya Priya English School', degree: 'SSLC', time: '2019 – 2020 · Bengaluru' },
]

const LANGUAGES = [
  { name: 'English', level: 'Working Knowledge', pct: 65 },
  { name: 'Kannada', level: 'Fluent', pct: 100 },
]

const PROJECTS = [
  {
    id: '01',
    file: 'shop_sphere.jsx',
    title: 'ShopSphere',
    tag: 'a full-stack online store',
    desc: 'A complete online shop. People can browse, search, add to cart, wishlist, and track orders. Behind it, an admin dashboard manages products, users, inventory, and orders through CRUD operations, all backed by a Spring Boot + MySQL API.',
    tech: ['React.js', 'JavaScript (ES6+)', 'Java', 'Spring Boot', 'Spring Data JPA', 'REST APIs', 'MySQL', 'Git'],
    note: 'Start the backend first — Render free tier may take 30–60 seconds to wake up — then open the frontend.',
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
    tag: 'an AI-powered exam prep app',
    desc: 'A mock-test app with instant score calculation, answer validation, and performance tracking. A Groq-API-backed chatbot explains why an answer was wrong instead of just marking it incorrect, behind secure Firebase authentication.',
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Firebase Auth', 'Groq API', 'JSON'],
    links: [{ label: 'live_site', href: 'https://ai-exam-companion-ghzc.onrender.com' }],
    stats: { questions: '200+', accuracy: '95%', ai: 'live' },
  },
  {
    id: '03',
    file: 'portfolio_v1.jsx',
    title: 'Personal Portfolio',
    tag: 'an earlier version of this site',
    desc: 'My first portfolio site — reusable React components for projects, skills, certifications, and contact, laid out with Flexbox and CSS Grid for every screen size, deployed on Vercel.',
    tech: ['React.js', 'Vite', 'JavaScript (ES6+)', 'CSS3 (Flexbox & Grid)', 'Vercel'],
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

function Meter({ name, level, sub, delay }) {
  const [ref, inView] = useReveal()
  const segments = 24
  const lit = Math.round((level / 100) * segments)
  return (
    <div className="meter-row" ref={ref}>
      <div className="meter-top">
        <span className="meter-name">{name}{sub && <span className="meter-sub"> — {sub}</span>}</span>
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

function SkillsCodeBlock({ groups }) {
  return (
    <div className="code-block">
      <div className="code-block-bar">
        <FileText size={13} />
        <span>skills.json</span>
      </div>
      <div className="code-block-body">
        <div className="code-line"><span className="code-punc">{'{'}</span></div>
        {groups.map((g, i) => (
          <div className="code-line" key={g.key}>
            <span className="code-indent" />
            <span className="code-key">"{g.key}"</span>
            <span className="code-punc">: [</span>
            <span className="code-values">
              {g.values.map((v, j) => (
                <span key={v}>
                  <span className="code-str">"{v}"</span>
                  {j < g.values.length - 1 && <span className="code-punc">, </span>}
                </span>
              ))}
            </span>
            <span className="code-punc">]{i < groups.length - 1 ? ',' : ''}</span>
          </div>
        ))}
        <div className="code-line"><span className="code-punc">{'}'}</span></div>
      </div>
    </div>
  )
}

/* ================================================================== */
/* app                                                                  */
/* ================================================================== */

export default function App() {
  const typed = useTypewriter(ROLES)
  const active = useActiveSection(['hero', 'about', 'skills', 'languages', 'projects', 'experience', 'contact'])
  const clock = useClock()
  const [menuOpen, setMenuOpen] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(true)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return (
    <div className="app">
      <style>{CSS}</style>
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
              <div className="status-row"><span>languages_spoken</span><span>02</span></div>
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
              <strong>Java</strong>, <strong>Spring Boot</strong>, and <strong>Spring Data JPA</strong>.
            </p>
            <p className="body-text">
              I write clean, maintainable code grounded in{' '}
              <strong>OOP</strong> and <strong>Data Structures &amp; Algorithms</strong>, and I focus
              on creating seamless, secure user experiences — including role-based access control
              and Firebase authentication. Every project is an opportunity to learn something new.
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
          </Reveal>

          <Reveal delay={120} className="section-output">
            <SkillsCodeBlock groups={SKILL_GROUPS} />
          </Reveal>
        </section>

        {/* ---------------- languages ---------------- */}
        <section id="languages" className="section">
          <Reveal><CmdLine>cat languages.yml</CmdLine></Reveal>
          <Reveal delay={70} className="section-output">
            <h2 className="section-title">Languages I speak</h2>
            <p className="section-subtitle">Not the programming kind — this is for the humans on the other side of the interview.</p>
            <div className="meter-list narrow">
              {LANGUAGES.map((l, i) => (
                <Meter key={l.name} name={l.name} level={l.pct} sub={l.level} delay={i * 60} />
              ))}
            </div>
          </Reveal>
        </section>

        {/* ---------------- projects ---------------- */}
        <section id="projects" className="section section-alt">
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
        <section className="section">
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
        <section id="experience" className="section section-alt">
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

          <Reveal delay={200} className="section-output">
            <span className="mini-label"><ShieldCheck size={13} /> core concepts</span>
            <div className="tag-row">
              {['Object-Oriented Programming', 'Data Structures & Algorithms', 'UI/UX Principles', 'Role-Based Access Control'].map((s) => (
                <span key={s} className="tag-chip">{s}</span>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ---------------- contact ---------------- */}
        <section id="contact" className="section">
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

          <Reveal delay={280} className="section-output">
            <div className="lang-footnote">
              <Languages size={13} /> <span>English (working knowledge) · Kannada (fluent)</span>
            </div>
          </Reveal>
        </section>

        <footer className="footer">
          <span className="footer-line">// EOF — © {new Date().getFullYear()} Rahul S</span>
          <span className="footer-line">built with React</span>
        </footer>
      </main>
    </div>
  )
}

/* ================================================================== */
/* styles                                                               */
/* ================================================================== */

const CSS = `
* { margin: 0; padding: 0; box-sizing: border-box; }

.app {
  --bg: #0a0a08;
  --bg-elevated: #101110;
  --bg-panel: #151613;
  --bg-hover: #1b1c19;

  --text: #ede9de;
  --text-dim: #8f8d80;
  --text-faint: #55564d;

  --accent: #e8a33d;
  --accent-dim: rgba(232, 163, 61, 0.12);
  --accent-line: rgba(232, 163, 61, 0.35);
  --ok: #7bc793;
  --str: #7fb3d9;

  --border: rgba(237, 233, 222, 0.09);
  --border-strong: rgba(237, 233, 222, 0.18);

  --mono: 'JetBrains Mono', 'Fira Code', ui-monospace, SFMono-Regular, Menlo, monospace;
  --sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  --ease: cubic-bezier(0.22, 0.61, 0.36, 1);
  --sidebar-w: 260px;
  --topbar-h: 44px;

  background: var(--bg);
  color: var(--text);
  font-family: var(--sans);
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
  min-height: 100vh;
  position: relative;
}

.app a { color: inherit; text-decoration: none; }
.app button { font-family: inherit; }

.scanlines {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 300;
  background: repeating-linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.012) 0px,
    rgba(255, 255, 255, 0.012) 1px,
    transparent 1px,
    transparent 3px
  );
  mix-blend-mode: overlay;
  opacity: 0.5;
}

.term-topbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: var(--topbar-h);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
  background: var(--bg-elevated);
  border-bottom: 1px solid var(--border);
  z-index: 250;
}

.term-topbar-left, .term-topbar-right { display: flex; align-items: center; gap: 14px; }

.menu-toggle { display: none; background: none; border: none; color: var(--text-dim); cursor: pointer; padding: 4px; }

.term-dots { display: flex; gap: 6px; }
.term-dots span { width: 9px; height: 9px; border: 1px solid var(--border-strong); border-radius: 50%; }

.term-title { font-family: var(--mono); font-size: 12px; color: var(--text-dim); letter-spacing: 0.02em; }

.term-status { display: flex; align-items: center; gap: 5px; font-family: var(--mono); font-size: 11px; color: var(--ok); letter-spacing: 0.04em; }
.status-icon { fill: var(--ok); }
.term-clock { font-family: var(--mono); font-size: 11px; color: var(--text-faint); }

.sidebar {
  position: fixed;
  top: var(--topbar-h);
  left: 0;
  bottom: 0;
  width: var(--sidebar-w);
  background: var(--bg-elevated);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  z-index: 200;
  padding: 18px 0;
}

.sidebar-header {
  display: flex; align-items: center; gap: 8px;
  padding: 0 18px 14px;
  font-family: var(--mono); font-size: 11px; font-weight: 600; letter-spacing: 0.14em;
  color: var(--text-faint);
  border-bottom: 1px solid var(--border);
  margin-bottom: 8px;
}

.tree { display: flex; flex-direction: column; flex: 1; overflow-y: auto; }

.tree-item {
  display: flex; align-items: center; gap: 8px; width: 100%;
  padding: 7px 18px;
  background: none; border: none; color: var(--text-dim);
  font-family: var(--mono); font-size: 13px; text-align: left; cursor: pointer;
  transition: all 0.15s var(--ease);
  border-left: 2px solid transparent;
}

.tree-item.indent-1 { padding-left: 22px; }
.tree-item.indent-2 { padding-left: 46px; font-size: 12.5px; }
.tree-item.root { color: var(--text); font-weight: 600; }
.tree-item:hover { background: var(--bg-hover); color: var(--text); }
.tree-item.active { color: var(--accent); background: var(--accent-dim); border-left-color: var(--accent); }

.tree-icon { flex-shrink: 0; color: var(--text-dim); }
.tree-icon.dim { color: var(--text-faint); }
.tree-item.active .tree-icon { color: var(--accent); }
.chevron { color: var(--text-faint); flex-shrink: 0; }

.sidebar-footer { padding: 14px 18px 0; margin-top: 8px; border-top: 1px solid var(--border); }
.btn.full { width: 100%; justify-content: center; margin-top: 12px; }

.btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 11px 18px;
  font-family: var(--mono); font-size: 12.5px; font-weight: 600;
  border-radius: 3px; border: 1px solid transparent; cursor: pointer;
  transition: all 0.2s var(--ease);
}
.btn.primary { background: var(--accent); color: #191204; }
.btn.primary:hover { background: #f3b458; transform: translateY(-1px); }
.btn.outline { background: transparent; color: var(--text); border-color: var(--border-strong); }
.btn.outline:hover { border-color: var(--accent-line); color: var(--accent); }

.main { margin-left: var(--sidebar-w); padding-top: var(--topbar-h); max-width: 900px; }

.section { padding: 72px 44px; border-top: 1px solid var(--border); }
.section-alt { background: var(--bg-elevated); }

.cmd-line { font-family: var(--mono); font-size: 13.5px; margin-bottom: 22px; display: flex; gap: 6px; flex-wrap: wrap; }
.cmd-prompt { color: var(--ok); font-weight: 600; }
.cmd-sep { color: var(--text-faint); }
.cmd-text { color: var(--text); }

.section-output, .hero-output { border-left: 1px solid var(--border); padding-left: 22px; margin-left: 4px; }

.section-title { font-family: var(--mono); font-weight: 700; font-size: clamp(24px, 3vw, 32px); letter-spacing: -0.01em; margin-bottom: 12px; color: var(--text); }
.section-subtitle { color: var(--text-dim); font-size: 14.5px; max-width: 560px; margin-bottom: 32px; }
.body-text { color: var(--text-dim); font-size: 15px; margin-bottom: 16px; max-width: 620px; }
.body-text strong { color: var(--accent); font-weight: 600; }

.hero { padding: 96px 44px 72px; }
.hero-name { font-family: var(--mono); font-weight: 800; font-size: clamp(42px, 6vw, 68px); letter-spacing: -0.02em; color: var(--text); margin-bottom: 18px; }
.hero-role-line { display: flex; align-items: center; gap: 8px; font-family: var(--mono); font-size: 16px; margin-bottom: 22px; flex-wrap: wrap; }
.prompt-arrow { color: var(--accent); }
.role-label { color: var(--text-faint); }
.role-text { color: var(--accent); font-weight: 600; }
.type-cursor { display: inline-block; width: 8px; height: 17px; background: var(--accent); animation: blink 1s step-end infinite; }
.hero-desc { color: var(--text-dim); font-size: 16px; max-width: 560px; margin-bottom: 26px; }
.hero-desc strong { color: var(--text); font-weight: 600; }
.hero-actions { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 48px; }

.status-panel { border: 1px solid var(--border-strong); background: var(--bg-panel); border-radius: 4px; padding: 6px 20px; max-width: 420px; }
.status-row { display: flex; justify-content: space-between; padding: 11px 0; border-bottom: 1px dashed var(--border); font-family: var(--mono); font-size: 13px; color: var(--text-dim); }
.status-row:last-child { border-bottom: none; }
.status-row span:last-child { color: var(--text); font-weight: 600; }
.status-row .ok { display: flex; align-items: center; gap: 6px; color: var(--ok) !important; }

.about-grid, .edu-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-top: 28px; }

.kv-card { border: 1px solid var(--border); background: var(--bg-panel); border-radius: 4px; padding: 16px; }
.kv-key { display: flex; align-items: center; gap: 6px; font-family: var(--mono); font-size: 11px; color: var(--accent); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px; }
.kv-value { font-size: 13.5px; color: var(--text-dim); line-height: 1.5; }
.kv-sub { font-family: var(--mono); font-size: 11.5px; color: var(--text-faint); margin-top: 6px; }

.mini-label { display: flex; align-items: center; gap: 6px; font-family: var(--mono); font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-faint); margin-bottom: 14px; }

.tag-row { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px; }
.tag-chip { font-family: var(--mono); font-size: 12px; font-weight: 600; padding: 7px 13px; border: 1px solid var(--border-strong); border-radius: 3px; color: var(--text-dim); transition: all 0.15s var(--ease); }
.tag-chip:hover { border-color: var(--accent-line); color: var(--accent); background: var(--accent-dim); }

.meter-list { display: flex; flex-direction: column; gap: 20px; max-width: 560px; }
.meter-list.narrow { max-width: 480px; }
.meter-top { display: flex; justify-content: space-between; font-family: var(--mono); font-size: 12.5px; margin-bottom: 8px; }
.meter-name { color: var(--text-dim); }
.meter-sub { color: var(--text-faint); }
.meter-pct { color: var(--text); font-weight: 700; }
.meter-blocks { display: flex; gap: 3px; }
.meter-seg { flex: 1; height: 14px; background: var(--bg-panel); border: 1px solid var(--border); transition: background 0.2s var(--ease), border-color 0.2s var(--ease); }
.meter-seg.lit { background: var(--accent); border-color: var(--accent); }

/* skills.json code block — signature element for the skills section */
.code-block { border: 1px solid var(--border-strong); border-radius: 4px; overflow: hidden; background: var(--bg-panel); max-width: 700px; }
.code-block-bar { display: flex; align-items: center; gap: 8px; padding: 10px 18px; background: var(--bg-elevated); border-bottom: 1px solid var(--border); font-family: var(--mono); font-size: 12px; color: var(--text-dim); }
.code-block-body { padding: 16px 20px; font-family: var(--mono); font-size: 12.5px; line-height: 1.9; overflow-x: auto; }
.code-line { white-space: normal; }
.code-indent { display: inline-block; width: 20px; }
.code-key { color: var(--accent); }
.code-punc { color: var(--text-faint); }
.code-str { color: var(--str); }
.code-values { word-break: break-word; }

.lang-footnote { display: flex; align-items: center; gap: 8px; font-family: var(--mono); font-size: 12px; color: var(--text-faint); margin-top: 28px; }

.project-grid { display: flex; flex-direction: column; gap: 18px; padding: 0 44px 20px; }
.project-card { border: 1px solid var(--border-strong); border-radius: 4px; overflow: hidden; background: var(--bg-panel); }
.project-card.featured { border-color: var(--accent-line); }
.project-file-bar { display: flex; align-items: center; gap: 8px; padding: 10px 18px; background: var(--bg-elevated); border-bottom: 1px solid var(--border); font-family: var(--mono); font-size: 12px; color: var(--text-dim); }
.featured-badge { margin-left: auto; display: flex; align-items: center; gap: 4px; color: var(--accent); font-size: 11px; font-weight: 700; }
.project-body { padding: 22px; }
.project-title { font-family: var(--mono); font-size: 21px; font-weight: 700; color: var(--text); margin-bottom: 4px; }
.project-tagline { font-family: var(--mono); font-size: 12.5px; color: var(--accent); margin-bottom: 12px; }
.project-desc { color: var(--text-dim); font-size: 14px; margin-bottom: 16px; max-width: 640px; }
.project-stats { display: flex; gap: 24px; padding: 14px 0; border-top: 1px dashed var(--border); border-bottom: 1px dashed var(--border); margin-bottom: 14px; }
.project-stat { display: flex; flex-direction: column; gap: 3px; }
.stat-value { font-family: var(--mono); font-size: 17px; font-weight: 700; color: var(--text); }
.stat-label { font-family: var(--mono); font-size: 10px; color: var(--text-faint); text-transform: uppercase; letter-spacing: 0.06em; }
.project-tech { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 12px; }
.project-tech span { font-family: var(--mono); font-size: 11px; padding: 4px 9px; background: var(--bg-elevated); border: 1px solid var(--border); color: var(--text-dim); border-radius: 3px; }
.project-note { font-family: var(--mono); font-size: 12px; color: var(--text-faint); margin-bottom: 14px; }
.project-links { display: flex; gap: 18px; }
.project-links a { display: flex; align-items: center; gap: 5px; font-family: var(--mono); font-size: 12.5px; font-weight: 600; color: var(--accent); }
.project-links a:hover { text-decoration: underline; }

.pipeline { display: flex; flex-direction: column; padding: 0 44px; }
.pipeline-row { display: flex; gap: 18px; }
.pipeline-num { font-family: var(--mono); font-size: 11px; color: var(--text-faint); padding-top: 10px; width: 20px; flex-shrink: 0; }
.pipeline-line-wrap { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; }
.pipeline-icon { width: 38px; height: 38px; border: 1px solid var(--border-strong); border-radius: 4px; display: flex; align-items: center; justify-content: center; color: var(--accent); background: var(--bg-panel); }
.pipeline-line { width: 1px; flex: 1; background: var(--border-strong); min-height: 44px; margin-top: 4px; }
.pipeline-content { padding-bottom: 34px; }
.pipeline-subtitle { font-family: var(--mono); font-size: 11px; color: var(--text-faint); text-transform: uppercase; letter-spacing: 0.08em; }
.pipeline-title { font-family: var(--mono); font-size: 18px; font-weight: 700; color: var(--text); margin: 4px 0 6px; }
.pipeline-desc { color: var(--text-dim); font-size: 13.5px; margin-bottom: 10px; max-width: 480px; }
.pipeline-tech { display: flex; gap: 6px; flex-wrap: wrap; }
.pipeline-tech span { font-family: var(--mono); font-size: 10.5px; padding: 3px 8px; border: 1px solid var(--border); border-radius: 3px; color: var(--text-dim); }

.log-list { display: flex; flex-direction: column; padding: 0 44px; margin-bottom: 40px; }
.log-entry { display: grid; grid-template-columns: 90px 1fr; gap: 20px; padding: 20px 0; border-bottom: 1px solid var(--border); }
.log-entry:first-child { padding-top: 0; }
.log-time { font-family: var(--mono); font-size: 11.5px; color: var(--text-faint); padding-top: 3px; }
.log-head { display: flex; align-items: center; gap: 8px; color: var(--accent); margin-bottom: 4px; }
.log-head h3 { font-family: var(--mono); font-size: 17px; font-weight: 700; color: var(--text); }
.log-meta { font-family: var(--mono); font-size: 12.5px; color: var(--text-faint); margin-bottom: 10px; }
.log-points { list-style: none; display: flex; flex-direction: column; gap: 6px; }
.log-points li { font-size: 13.5px; color: var(--text-dim); padding-left: 16px; position: relative; }
.log-points li::before { content: '\\203A'; position: absolute; left: 0; color: var(--accent); }

.cert-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 14px; }
.cert-row { display: flex; align-items: center; gap: 12px; padding: 12px 14px; border: 1px solid var(--border); background: var(--bg-panel); border-radius: 4px; }
.cert-check { color: var(--ok); flex-shrink: 0; }
.cert-name { font-size: 13.5px; font-weight: 600; color: var(--text); }
.cert-by { font-family: var(--mono); font-size: 11px; color: var(--text-faint); }

.contact-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; padding: 0 44px; }
.contact-card { border: 1px solid var(--border-strong); border-radius: 4px; overflow: hidden; }
.contact-link { display: flex; align-items: center; gap: 14px; padding: 18px; background: var(--bg-panel); transition: background 0.15s var(--ease); }
.contact-link:hover { background: var(--bg-hover); }
.contact-icon { width: 36px; height: 36px; border: 1px solid var(--border-strong); border-radius: 4px; display: flex; align-items: center; justify-content: center; color: var(--accent); flex-shrink: 0; }
.contact-info { display: flex; flex-direction: column; gap: 2px; flex: 1; }
.contact-key { font-family: var(--mono); font-size: 10.5px; color: var(--text-faint); text-transform: uppercase; letter-spacing: 0.08em; }
.contact-value { font-size: 13.5px; font-weight: 600; color: var(--text); }
.contact-arrow { color: var(--text-faint); transition: all 0.15s var(--ease); }
.contact-link:hover .contact-arrow { color: var(--accent); transform: translate(2px, -2px); }

.footer { display: flex; justify-content: space-between; padding: 30px 44px; border-top: 1px solid var(--border); font-family: var(--mono); font-size: 11.5px; color: var(--text-faint); flex-wrap: wrap; gap: 8px; }

.reveal { opacity: 0; transform: translateY(18px); transition: opacity 0.6s var(--ease), transform 0.6s var(--ease); }
.reveal.in { opacity: 1; transform: translateY(0); }

@keyframes blink { 50% { opacity: 0; } }

@media (max-width: 900px) {
  .sidebar { transform: translateX(-100%); transition: transform 0.25s var(--ease); width: 240px; }
  .sidebar.open { transform: translateX(0); box-shadow: 20px 0 40px rgba(0,0,0,0.5); }
  .menu-toggle { display: block; }
  .main { margin-left: 0; }
  .about-grid, .edu-grid, .cert-grid, .contact-grid { grid-template-columns: 1fr; }
  .section, .hero { padding-left: 24px; padding-right: 24px; }
  .project-grid, .pipeline, .log-list, .contact-grid { padding-left: 24px; padding-right: 24px; }
  .log-entry { grid-template-columns: 1fr; gap: 6px; }
}

@media (max-width: 480px) {
  .hero-actions { flex-direction: column; }
  .btn { justify-content: center; }
  .project-stats { flex-wrap: wrap; gap: 16px; }
}
`
