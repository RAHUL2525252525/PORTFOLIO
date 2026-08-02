import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import {
  Github, Linkedin, Mail, Phone, ArrowUpRight, ExternalLink, Star,
  CheckCircle2, GraduationCap, MapPin, Briefcase, Award, Code2, Server,
  Database, GitBranch, Rocket, Languages, ShieldCheck, Menu, X, Sparkles,
} from 'lucide-react'

/* ================================================================== */
/* content                                                              */
/* ================================================================== */

const ROLES = ['React Developer', 'Frontend Developer', 'Full Stack Developer', 'Software Developer']

const HERO_RING = ['React', 'Java', 'Spring Boot', 'MySQL', 'REST API', 'JavaScript', 'Firebase', 'Git']

const SKILL_TAGS = [
  'React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Java', 'Spring Boot',
  'Spring Data JPA', 'MySQL', 'REST APIs', 'Firebase Auth', 'Git', 'GitHub',
]

const SKILL_TAGS_EXT = [
  'OOP', 'DSA', 'RBAC', 'CRUD', 'JSON', 'Vite', 'Vercel', 'Render', 'IntelliJ IDEA', 'VS Code',
]

const SKILL_GROUPS = [
  { key: 'languages', icon: Code2, values: ['Java', 'JavaScript (ES6)', 'SQL'] },
  { key: 'frontend', icon: Sparkles, values: ['React.js', 'JSX', 'HTML5 / CSS3', 'Responsive Design', 'Flexbox / Grid', 'DOM Manipulation'] },
  { key: 'backend', icon: Server, values: ['Spring Boot', 'Spring Data JPA'] },
  { key: 'database', icon: Database, values: ['MySQL', 'Firebase Realtime DB', 'CRUD Operations'] },
  { key: 'api & auth', icon: ShieldCheck, values: ['REST APIs', 'Groq API', 'Firebase Auth', 'RBAC'] },
  { key: 'tooling', icon: GitBranch, values: ['Git', 'GitHub', 'Vite', 'Vercel', 'Render'] },
]

const LANGUAGES = [
  { name: 'English', level: 'Working Knowledge', pct: 65 },
  { name: 'Kannada', level: 'Fluent', pct: 100 },
]

const PROJECTS = [
  {
    id: '01',
    title: 'ShopSphere',
    tag: 'a full-stack online store',
    desc: 'A complete online shop — browsing, search, cart, wishlist, and order tracking, with an admin dashboard managing products, users, and inventory through CRUD operations, backed by a Spring Boot + MySQL API.',
    tech: ['React.js', 'Java', 'Spring Boot', 'Spring Data JPA', 'REST APIs', 'MySQL'],
    note: 'Start the backend first — Render free tier may take 30–60s to wake up — then open the frontend.',
    links: [
      { label: 'live site', href: 'https://shopsphere-8m8f.vercel.app/' },
      { label: 'backend', href: 'https://shopsphere-backend-5umn.onrender.com' },
    ],
    featured: true,
    stats: { users: '500+', products: '100+', orders: '50+' },
  },
  {
    id: '02',
    title: 'AI Exam Companion',
    tag: 'an AI-powered exam prep app',
    desc: 'Mock tests with instant scoring, answer validation, and performance tracking. A Groq-API chatbot explains why an answer was wrong instead of just marking it incorrect, behind Firebase authentication.',
    tech: ['JavaScript (ES6+)', 'Firebase Auth', 'Groq API', 'JSON'],
    links: [{ label: 'live site', href: 'https://ai-exam-companion-ghzc.onrender.com' }],
    stats: { questions: '200+', accuracy: '95%', ai: 'live' },
  },
  {
    id: '03',
    title: 'Personal Portfolio',
    tag: 'an earlier version of this site',
    desc: 'My first portfolio — reusable React components for projects, skills, and contact, laid out with Flexbox and Grid for every screen size, deployed on Vercel.',
    tech: ['React.js', 'Vite', 'CSS3 (Flexbox & Grid)', 'Vercel'],
    stats: { views: '1K+', speed: '100', score: 'A+' },
  },
]

const PIPELINE = [
  { icon: Code2, title: 'What you see', subtitle: 'frontend', items: ['React', 'HTML', 'CSS'], blurb: 'The screens and buttons a person taps.' },
  { icon: Server, title: 'What runs it', subtitle: 'backend', items: ['Java', 'Spring Boot', 'REST API'], blurb: 'The logic behind the screen — answers every request.' },
  { icon: Database, title: 'Where data lives', subtitle: 'database', items: ['MySQL', 'Firebase'], blurb: 'Where everything gets saved, and read back later.' },
  { icon: GitBranch, title: 'How I build it', subtitle: 'tooling', items: ['Git', 'GitHub', 'Vite'], blurb: 'Version control, and where the code lives online.' },
]

const EXPERIENCE = [
  {
    icon: Briefcase, role: 'Web Development Intern', company: 'MR Tech Lab', time: '2026', place: 'Bengaluru',
    points: [
      'Developed responsive, accessible web pages using HTML5, CSS3, and JavaScript (ES6+)',
      'Integrated REST APIs with React.js to fetch and display dynamic data',
      'Deployed frontend apps on Vercel and Render, ensuring cross-browser compatibility',
    ],
  },
  {
    icon: Rocket, role: 'AI / ML & Python Intern', company: 'KNOWX Innovations', time: '2023', place: 'Bengaluru',
    points: [
      'Built Python applications for data preprocessing and basic model testing',
      'Collaborated with the team on code maintenance and testing',
    ],
  },
]

const EDUCATION = [
  { school: 'Dr. ACS College of Engineering', degree: 'B.E., Computer Science and Engineering', time: '2023 – 2026 · Bengaluru' },
  { school: 'PVP Polytechnic', degree: 'Diploma, Information Science and Engineering', time: '2020 – 2023 · Bengaluru' },
  { school: 'Vidya Priya English School', degree: 'SSLC', time: '2019 – 2020 · Bengaluru' },
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

const SECTIONS = [
  { id: 'hero', label: 'Intro' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Work' },
  { id: 'experience', label: 'Path' },
  { id: 'contact', label: 'Contact' },
]

/* ================================================================== */
/* 3D background — starfield + wireframe core, mouse-parallax          */
/* ================================================================== */

function Starfield() {
  const canvasRef = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 32

    const starGeo = new THREE.BufferGeometry()
    const starCount = 800
    const positions = new Float32Array(starCount * 3)
    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 170
      positions[i * 3 + 1] = (Math.random() - 0.5) * 170
      positions[i * 3 + 2] = (Math.random() - 0.5) * 170
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const starMat = new THREE.PointsMaterial({ color: 0x6fe3ff, size: 0.35, transparent: true, opacity: 0.75 })
    const stars = new THREE.Points(starGeo, starMat)
    scene.add(stars)

    const icoGeo1 = new THREE.IcosahedronGeometry(9, 1)
    const icoMat1 = new THREE.MeshBasicMaterial({ color: 0x9d7bff, wireframe: true, transparent: true, opacity: 0.32 })
    const ico1 = new THREE.Mesh(icoGeo1, icoMat1)
    scene.add(ico1)

    const icoGeo2 = new THREE.IcosahedronGeometry(9.7, 0)
    const icoMat2 = new THREE.MeshBasicMaterial({ color: 0x52e0ff, wireframe: true, transparent: true, opacity: 0.16 })
    const ico2 = new THREE.Mesh(icoGeo2, icoMat2)
    scene.add(ico2)

    function resize() {
      const w = window.innerWidth, h = window.innerHeight
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    resize()
    window.addEventListener('resize', resize)

    function onMove(e) {
      mouse.current.x = e.clientX / window.innerWidth - 0.5
      mouse.current.y = e.clientY / window.innerHeight - 0.5
    }
    window.addEventListener('mousemove', onMove)

    let raf
    function animate() {
      ico1.rotation.y += 0.0016
      ico1.rotation.x += 0.0008
      ico2.rotation.y -= 0.001
      ico2.rotation.x -= 0.0005
      stars.rotation.y += 0.00025
      camera.position.x += (mouse.current.x * 7 - camera.position.x) * 0.02
      camera.position.y += (-mouse.current.y * 7 - camera.position.y) * 0.02
      camera.lookAt(0, 0, 0)
      renderer.render(scene, camera)
      raf = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      renderer.dispose()
      starGeo.dispose(); starMat.dispose()
      icoGeo1.dispose(); icoMat1.dispose()
      icoGeo2.dispose(); icoMat2.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} className="bg-canvas" />
}

/* ================================================================== */
/* 3D orbit ring — DOM chips flying on a computed 3D carousel path     */
/* ================================================================== */

function OrbitRing({ items, radius = 160, speed = 0.15, reverse = false, height = 300 }) {
  const itemRefs = useRef([])
  const angleRef = useRef(Math.random() * 360)

  useEffect(() => {
    let raf
    function tick() {
      angleRef.current += reverse ? -speed : speed
      items.forEach((_, i) => {
        const el = itemRefs.current[i]
        if (!el) return
        const angle = angleRef.current + (360 / items.length) * i
        const rad = (angle * Math.PI) / 180
        const x = Math.sin(rad) * radius
        const z = Math.cos(rad) * radius
        const depth = (z + radius) / (2 * radius)
        const scale = 0.62 + 0.4 * depth
        const opacity = 0.3 + 0.7 * depth
        el.style.transform = `translate3d(${x}px, 0px, ${z}px) translate(-50%, -50%) scale(${scale})`
        el.style.opacity = opacity
        el.style.zIndex = Math.round(z + radius)
      })
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, radius, speed, reverse])

  return (
    <div className="orbit-scene" style={{ height }}>
      <div className="orbit-ring-inner">
        {items.map((item, i) => (
          <div key={item} ref={(el) => (itemRefs.current[i] = el)} className="orbit-item">
            <span className="orbit-chip">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

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

function Reveal({ children, className = '', delay = 0 }) {
  const [ref, inView] = useReveal()
  return (
    <div ref={ref} className={`reveal ${inView ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
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

function useScrollProgress() {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    function onScroll() {
      const h = document.documentElement
      const scrolled = h.scrollTop
      const max = h.scrollHeight - h.clientHeight
      setPct(max > 0 ? (scrolled / max) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return pct
}

/* ================================================================== */
/* tilt card — pointer-driven 3D perspective tilt                      */
/* ================================================================== */

function TiltCard({ children, className = '', max = 9, glare = true }) {
  const ref = useRef(null)
  const [style, setStyle] = useState({})
  const [glareStyle, setGlareStyle] = useState({})

  function onMove(e) {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    const rx = (py - 0.5) * -max
    const ry = (px - 0.5) * max
    setStyle({ transform: `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(4px)` })
    if (glare) setGlareStyle({ background: `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(255,255,255,0.12), transparent 55%)` })
  }
  function onLeave() {
    setStyle({ transform: 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)' })
    setGlareStyle({ background: 'transparent' })
  }

  return (
    <div ref={ref} className={`tilt-card ${className}`} style={style} onMouseMove={onMove} onMouseLeave={onLeave}>
      {glare && <div className="tilt-glare" style={glareStyle} />}
      <div className="tilt-content">{children}</div>
    </div>
  )
}

/* ================================================================== */
/* role flip — 3D flip-clock style role cycler                        */
/* ================================================================== */

function RoleFlip({ roles }) {
  const [idx, setIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)

  useEffect(() => {
    const t = setInterval(() => {
      setFlipped(true)
      setTimeout(() => {
        setIdx((i) => (i + 1) % roles.length)
        setFlipped(false)
      }, 220)
    }, 2600)
    return () => clearInterval(t)
  }, [roles.length])

  return (
    <div className="role-flip-wrap">
      <span className={`role-flip ${flipped ? 'is-flipped' : ''}`}>{roles[idx]}</span>
    </div>
  )
}

/* ================================================================== */
/* gauge — conic-gradient proficiency dial                             */
/* ================================================================== */

function Gauge({ pct, label, sub }) {
  return (
    <div className="gauge-wrap">
      <div className="gauge" style={{ background: `conic-gradient(var(--cyan) ${pct * 3.6}deg, rgba(255,255,255,0.08) 0deg)` }}>
        <div className="gauge-inner">
          <span className="gauge-pct">{pct}%</span>
        </div>
      </div>
      <div className="gauge-label">{label}</div>
      <div className="gauge-sub">{sub}</div>
    </div>
  )
}

/* ================================================================== */
/* app                                                                  */
/* ================================================================== */

export default function App() {
  const active = useActiveSection(SECTIONS.map((s) => s.id))
  const progress = useScrollProgress()
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return (
    <div className="app">
      <style>{CSS}</style>
      <Starfield />
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      {/* -------- top bar (mobile) -------- */}
      <div className="topbar">
        <span className="logo">RS<span className="logo-dot">.</span></span>
        <button className="menu-toggle" onClick={() => setMenuOpen((v) => !v)} aria-label="Menu">
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* -------- floating dot nav (desktop) -------- */}
      <nav className="dot-nav">
        {SECTIONS.map((s) => (
          <button key={s.id} className={`dot-item ${active === s.id ? 'active' : ''}`} onClick={() => scrollTo(s.id)}>
            <span className="dot" />
            <span className="dot-label">{s.label}</span>
          </button>
        ))}
      </nav>

      {/* -------- mobile overlay menu -------- */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {SECTIONS.map((s) => (
          <button key={s.id} onClick={() => scrollTo(s.id)}>{s.label}</button>
        ))}
      </div>

      <main className="content">
        {/* ---------------- hero ---------------- */}
        <header id="hero" className="hero">
          <div className="hero-orbit-wrap">
            <OrbitRing items={HERO_RING} radius={230} speed={0.1} height={420} />
          </div>
          <div className="hero-copy">
            <Reveal className="eyebrow">
              <Sparkles size={13} /> <span>final-year CS student · Bengaluru, India</span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="hero-name">Rahul S</h1>
            </Reveal>
            <Reveal delay={140} className="hero-role-row">
              <span className="role-prefix">I build as a</span>
              <RoleFlip roles={ROLES} />
            </Reveal>
            <Reveal delay={200}>
              <p className="hero-desc">
                I ship finished products, not prototypes — interfaces in <strong>React</strong>,
                wired to backends I write myself in <strong>Java &amp; Spring Boot</strong>.
                Three of them are live right now.
              </p>
            </Reveal>
            <Reveal delay={260} className="hero-actions">
              <button className="btn primary" onClick={() => scrollTo('projects')}>
                See the work <ArrowUpRight size={15} />
              </button>
              <button className="btn ghost" onClick={() => scrollTo('contact')}>
                Get in touch
              </button>
            </Reveal>
            <Reveal delay={320} className="hero-stats">
              <div><span>03</span>live projects</div>
              <div><span>02</span>internships</div>
              <div><span>04</span>certifications</div>
            </Reveal>
          </div>
        </header>

        {/* ---------------- about ---------------- */}
        <section id="about" className="section">
          <Reveal className="section-head">
            <span className="section-eyebrow">01 · About</span>
            <h2 className="section-title">A builder, not just a student</h2>
            <p className="section-sub">
              I believe in learning by doing. Instead of just studying theory, I build production-ready
              applications that solve real problems — from pixel-perfect React interfaces to
              scalable Java &amp; Spring Boot systems underneath them, grounded in OOP and DSA fundamentals.
            </p>
          </Reveal>
          <div className="card-grid four">
            {[
              { icon: GraduationCap, label: 'Education', value: 'B.E. Computer Science, Dr. ACS College of Engineering', sub: '2023 – 2026' },
              { icon: MapPin, label: 'Location', value: 'Bengaluru, Karnataka', sub: 'open to relocation & remote' },
              { icon: Briefcase, label: 'Availability', value: 'Full-time', sub: 'immediate start' },
              { icon: Languages, label: 'Languages', value: 'English · Kannada', sub: 'working knowledge · fluent' },
            ].map((c, i) => {
              const Icon = c.icon
              return (
                <Reveal key={c.label} delay={i * 70}>
                  <TiltCard className="info-card">
                    <Icon size={18} className="info-icon" />
                    <span className="info-label">{c.label}</span>
                    <span className="info-value">{c.value}</span>
                    <span className="info-sub">{c.sub}</span>
                  </TiltCard>
                </Reveal>
              )
            })}
          </div>
        </section>

        {/* ---------------- skills ---------------- */}
        <section id="skills" className="section">
          <Reveal className="section-head">
            <span className="section-eyebrow">02 · Skills</span>
            <h2 className="section-title">Everything below has shipped</h2>
            <p className="section-sub">Two orbits — the daily stack, and the fundamentals underneath it.</p>
          </Reveal>

          <Reveal>
            <div className="dual-orbit">
              <OrbitRing items={SKILL_TAGS} radius={200} speed={0.14} height={360} />
              <div className="dual-orbit-inner">
                <OrbitRing items={SKILL_TAGS_EXT} radius={90} speed={0.2} reverse height={360} />
              </div>
            </div>
          </Reveal>

          <div className="card-grid three">
            {SKILL_GROUPS.map((g, i) => {
              const Icon = g.icon
              return (
                <Reveal key={g.key} delay={i * 60}>
                  <TiltCard className="skill-card">
                    <div className="skill-card-head"><Icon size={16} /> <span>{g.key}</span></div>
                    <div className="skill-card-tags">
                      {g.values.map((v) => <span key={v}>{v}</span>)}
                    </div>
                  </TiltCard>
                </Reveal>
              )
            })}
          </div>

          <Reveal className="gauge-row">
            {LANGUAGES.map((l) => (
              <Gauge key={l.name} pct={l.pct} label={l.name} sub={l.level} />
            ))}
          </Reveal>
        </section>

        {/* ---------------- projects ---------------- */}
        <section id="projects" className="section">
          <Reveal className="section-head">
            <span className="section-eyebrow">03 · Work</span>
            <h2 className="section-title">Things I've built</h2>
          </Reveal>

          <div className="project-grid">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.id} delay={i * 90}>
                <TiltCard className={`project-card ${p.featured ? 'featured' : ''}`} max={6}>
                  <div className="project-top">
                    <span className="project-id">{p.id}</span>
                    {p.featured && <span className="featured-badge"><Star size={11} /> featured</span>}
                  </div>
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-tag">{p.tag}</p>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-stats">
                    {Object.entries(p.stats).map(([k, v]) => (
                      <div key={k}><span>{v}</span>{k}</div>
                    ))}
                  </div>
                  <div className="project-tech">
                    {p.tech.map((t) => <span key={t}>{t}</span>)}
                  </div>
                  {p.note && <p className="project-note">{p.note}</p>}
                  {p.links && (
                    <div className="project-links">
                      {p.links.map((l) => (
                        <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">
                          {l.label} <ExternalLink size={12} />
                        </a>
                      ))}
                    </div>
                  )}
                </TiltCard>
              </Reveal>
            ))}
          </div>

          <Reveal className="pipeline">
            {PIPELINE.map((layer, i) => {
              const Icon = layer.icon
              return (
                <TiltCard key={layer.title} className="pipeline-card" max={7}>
                  <div className="pipeline-icon"><Icon size={17} /></div>
                  <span className="pipeline-subtitle">{layer.subtitle}</span>
                  <h4 className="pipeline-title">{layer.title}</h4>
                  <p className="pipeline-desc">{layer.blurb}</p>
                  <div className="pipeline-tech">
                    {layer.items.map((it) => <span key={it}>{it}</span>)}
                  </div>
                  {i < PIPELINE.length - 1 && <span className="pipeline-arrow"><ArrowUpRight size={14} /></span>}
                </TiltCard>
              )
            })}
          </Reveal>
        </section>

        {/* ---------------- experience ---------------- */}
        <section id="experience" className="section">
          <Reveal className="section-head">
            <span className="section-eyebrow">04 · Path</span>
            <h2 className="section-title">How I got here</h2>
          </Reveal>

          <div className="timeline">
            {EXPERIENCE.map((e, i) => {
              const Icon = e.icon
              return (
                <Reveal key={e.company} delay={i * 90}>
                  <TiltCard className="timeline-card" max={6}>
                    <div className="timeline-time">{e.time}</div>
                    <div className="timeline-head"><Icon size={16} /><h3>{e.role}</h3></div>
                    <p className="timeline-meta">{e.company} · {e.place}</p>
                    <ul className="timeline-points">
                      {e.points.map((pt) => <li key={pt}>{pt}</li>)}
                    </ul>
                  </TiltCard>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={100}>
            <span className="mini-label"><GraduationCap size={13} /> Education</span>
            <div className="card-grid three">
              {EDUCATION.map((ed) => (
                <TiltCard key={ed.school} className="edu-card" max={6}>
                  <div className="edu-school">{ed.school}</div>
                  <div className="edu-degree">{ed.degree}</div>
                  <div className="edu-time">{ed.time}</div>
                </TiltCard>
              ))}
            </div>
          </Reveal>

          <Reveal delay={160}>
            <span className="mini-label"><Award size={13} /> Certifications</span>
            <div className="card-grid two">
              {CERTS.map((c) => (
                <TiltCard key={c.name} className="cert-card" max={5}>
                  <CheckCircle2 size={16} className="cert-check" />
                  <div>
                    <div className="cert-name">{c.name}</div>
                    <div className="cert-by">{c.by}</div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ---------------- contact ---------------- */}
        <section id="contact" className="section">
          <Reveal className="section-head">
            <span className="section-eyebrow">05 · Contact</span>
            <h2 className="section-title">Let's build something great</h2>
            <p className="section-sub">Open to full-stack and frontend roles — based in Bengaluru, available for remote work.</p>
          </Reveal>

          <div className="card-grid two">
            {CONTACTS.map((c, i) => {
              const Icon = c.icon
              return (
                <Reveal key={c.label} delay={i * 70}>
                  <TiltCard className="contact-card" max={7}>
                    <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                      <div className="contact-icon"><Icon size={17} /></div>
                      <div className="contact-info">
                        <span>{c.label}</span>
                        <strong>{c.value}</strong>
                      </div>
                      <ArrowUpRight size={14} className="contact-arrow" />
                    </a>
                  </TiltCard>
                </Reveal>
              )
            })}
          </div>
        </section>

        <footer className="footer">
          <span>© {new Date().getFullYear()} Rahul S</span>
          <span>built with React &amp; three.js</span>
        </footer>
      </main>
    </div>
  )
}

/* ================================================================== */
/* styles                                                               */
/* ================================================================== */

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap');

* { margin: 0; padding: 0; box-sizing: border-box; }

.app {
  --bg: #05060a;
  --bg-soft: #0a0c14;
  --panel: rgba(255,255,255,0.045);
  --panel-strong: rgba(255,255,255,0.07);
  --border: rgba(255,255,255,0.09);
  --border-strong: rgba(255,255,255,0.18);

  --text: #f1f3fb;
  --text-dim: #9498b3;
  --text-faint: #5c6080;

  --cyan: #52e0ff;
  --violet: #a78bfa;
  --pink: #ff6bd6;

  --display: 'Space Grotesk', 'Inter', sans-serif;
  --sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --mono: 'JetBrains Mono', ui-monospace, Menlo, monospace;

  --ease: cubic-bezier(0.22, 0.61, 0.36, 1);

  position: relative;
  min-height: 100vh;
  background: radial-gradient(ellipse at 50% -10%, #12142a 0%, var(--bg) 55%);
  color: var(--text);
  font-family: var(--sans);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

.app a { color: inherit; text-decoration: none; }
.app button { font-family: inherit; }

.bg-canvas { position: fixed; inset: 0; z-index: 0; pointer-events: none; }

.scroll-progress {
  position: fixed; top: 0; left: 0; height: 2px; z-index: 500;
  background: linear-gradient(90deg, var(--cyan), var(--violet), var(--pink));
  transition: width 0.1s linear;
}

/* -------- top bar / mobile -------- */
.topbar {
  display: none;
  position: fixed; top: 0; left: 0; right: 0; z-index: 300;
  align-items: center; justify-content: space-between;
  padding: 16px 20px;
  background: rgba(5,6,10,0.7);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
}
.logo { font-family: var(--display); font-weight: 700; font-size: 18px; letter-spacing: -0.02em; }
.logo-dot { color: var(--cyan); }
.menu-toggle { background: none; border: 1px solid var(--border-strong); border-radius: 8px; color: var(--text); padding: 7px; cursor: pointer; }

.mobile-menu {
  position: fixed; inset: 0; z-index: 290;
  background: rgba(5,6,10,0.97);
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 22px;
  opacity: 0; pointer-events: none; transform: translateY(-8px);
  transition: opacity 0.25s var(--ease), transform 0.25s var(--ease);
}
.mobile-menu.open { opacity: 1; pointer-events: auto; transform: translateY(0); }
.mobile-menu button {
  background: none; border: none; color: var(--text); font-family: var(--display);
  font-size: 26px; font-weight: 600; cursor: pointer;
}

/* -------- dot nav (desktop) -------- */
.dot-nav {
  position: fixed; right: 28px; top: 50%; transform: translateY(-50%); z-index: 200;
  display: flex; flex-direction: column; gap: 18px;
}
.dot-item { display: flex; align-items: center; gap: 10px; background: none; border: none; cursor: pointer; padding: 2px; justify-content: flex-end; }
.dot { width: 8px; height: 8px; border-radius: 50%; background: var(--text-faint); transition: all 0.25s var(--ease); flex-shrink: 0; }
.dot-item.active .dot { background: var(--cyan); box-shadow: 0 0 10px var(--cyan); transform: scale(1.3); }
.dot-label {
  font-family: var(--mono); font-size: 11px; color: var(--text-dim);
  opacity: 0; transform: translateX(6px); transition: all 0.2s var(--ease); white-space: nowrap;
}
.dot-item:hover .dot-label, .dot-item.active .dot-label { opacity: 1; transform: translateX(0); color: var(--text); }

/* -------- layout -------- */
.content { position: relative; z-index: 2; max-width: 980px; margin: 0 auto; padding: 0 56px; }
.section { padding: 120px 0; border-top: 1px solid var(--border); }
.section-head { max-width: 620px; margin-bottom: 48px; }
.section-eyebrow { font-family: var(--mono); font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--cyan); display: block; margin-bottom: 14px; }
.section-title { font-family: var(--display); font-weight: 700; font-size: clamp(28px, 3.4vw, 40px); letter-spacing: -0.02em; margin-bottom: 14px; }
.section-sub { color: var(--text-dim); font-size: 15px; max-width: 560px; }

/* -------- hero -------- */
.hero { position: relative; min-height: 100vh; display: flex; align-items: center; padding: 140px 0 80px; }
.hero-orbit-wrap { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; pointer-events: none; opacity: 0.9; }
.hero-copy { position: relative; z-index: 3; max-width: 640px; }
.eyebrow { display: flex; align-items: center; gap: 8px; font-family: var(--mono); font-size: 12px; color: var(--text-dim); letter-spacing: 0.05em; margin-bottom: 22px; }
.eyebrow svg { color: var(--violet); }
.hero-name { font-family: var(--display); font-weight: 700; font-size: clamp(52px, 8vw, 92px); letter-spacing: -0.03em; line-height: 0.95; margin-bottom: 22px; background: linear-gradient(135deg, #ffffff 30%, #b9c2e6 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }
.hero-role-row { display: flex; align-items: center; gap: 10px; font-family: var(--display); font-size: clamp(18px, 2.4vw, 24px); font-weight: 600; margin-bottom: 24px; flex-wrap: wrap; }
.role-prefix { color: var(--text-faint); font-weight: 500; font-family: var(--sans); font-size: 15px; }
.role-flip-wrap { perspective: 500px; display: inline-block; }
.role-flip { display: inline-block; color: var(--cyan); transform-origin: 50% 50%; transition: transform 0.22s ease, opacity 0.22s ease; }
.role-flip.is-flipped { transform: rotateX(90deg); opacity: 0; }
.hero-desc { color: var(--text-dim); font-size: 17px; max-width: 500px; margin-bottom: 32px; }
.hero-desc strong { color: var(--text); font-weight: 600; }
.hero-actions { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 52px; }
.hero-stats { display: flex; gap: 32px; font-family: var(--mono); font-size: 12.5px; color: var(--text-faint); flex-wrap: wrap; }
.hero-stats span { display: block; font-family: var(--display); font-size: 22px; font-weight: 700; color: var(--text); }

.btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 13px 24px; border-radius: 999px; font-size: 14px; font-weight: 600; cursor: pointer;
  border: 1px solid transparent; transition: all 0.2s var(--ease);
}
.btn.primary { background: linear-gradient(135deg, var(--cyan), var(--violet)); color: #05060a; }
.btn.primary:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(82,224,255,0.25); }
.btn.ghost { background: var(--panel); border-color: var(--border-strong); color: var(--text); backdrop-filter: blur(8px); }
.btn.ghost:hover { border-color: var(--cyan); color: var(--cyan); }

/* -------- tilt card -------- */
.tilt-card {
  position: relative;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  transform-style: preserve-3d;
  transition: transform 0.15s ease-out, border-color 0.2s ease;
  overflow: hidden;
  will-change: transform;
}
.tilt-card:hover { border-color: var(--border-strong); }
.tilt-glare { position: absolute; inset: 0; pointer-events: none; transition: background 0.15s ease-out; }
.tilt-content { position: relative; z-index: 1; padding: 22px; height: 100%; }

/* -------- card grid -------- */
.card-grid { display: grid; gap: 16px; margin-top: 8px; }
.card-grid.two { grid-template-columns: repeat(2, 1fr); }
.card-grid.three { grid-template-columns: repeat(3, 1fr); margin-top: 40px; }
.card-grid.four { grid-template-columns: repeat(4, 1fr); }

.info-card { display: flex; flex-direction: column; gap: 6px; }
.info-icon { color: var(--cyan); margin-bottom: 4px; }
.info-label { font-family: var(--mono); font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-faint); }
.info-value { font-size: 14px; font-weight: 600; color: var(--text); }
.info-sub { font-size: 12px; color: var(--text-dim); }

/* -------- orbit rings -------- */
.orbit-scene { perspective: 1200px; display: flex; align-items: center; justify-content: center; position: relative; }
.orbit-ring-inner { position: relative; width: 1px; height: 1px; transform-style: preserve-3d; }
.orbit-item { position: absolute; top: 50%; left: 50%; }
.orbit-chip {
  display: inline-block; padding: 9px 16px; border-radius: 999px;
  background: rgba(255,255,255,0.06); border: 1px solid var(--border-strong);
  font-family: var(--mono); font-size: 12px; color: var(--text); white-space: nowrap;
  backdrop-filter: blur(6px);
}
.dual-orbit { position: relative; display: flex; align-items: center; justify-content: center; }
.dual-orbit-inner { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; }
.dual-orbit-inner .orbit-chip { background: rgba(167,139,250,0.12); border-color: rgba(167,139,250,0.35); color: var(--violet); font-size: 11px; padding: 7px 13px; }

/* -------- skills -------- */
.skill-card-head { display: flex; align-items: center; gap: 8px; font-family: var(--mono); font-size: 12px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--cyan); margin-bottom: 14px; }
.skill-card-tags { display: flex; flex-wrap: wrap; gap: 7px; }
.skill-card-tags span { font-size: 12px; padding: 5px 10px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 6px; color: var(--text-dim); }

.gauge-row { display: flex; gap: 40px; margin-top: 48px; flex-wrap: wrap; }
.gauge-wrap { display: flex; flex-direction: column; align-items: center; gap: 8px; }
.gauge { width: 108px; height: 108px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
.gauge-inner { width: 84px; height: 84px; border-radius: 50%; background: var(--bg-soft); display: flex; align-items: center; justify-content: center; }
.gauge-pct { font-family: var(--display); font-weight: 700; font-size: 18px; }
.gauge-label { font-weight: 600; font-size: 14px; }
.gauge-sub { font-size: 11.5px; color: var(--text-faint); font-family: var(--mono); }

/* -------- projects -------- */
.project-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; margin-bottom: 60px; }
.project-card.featured { grid-column: 1 / -1; border-color: rgba(82,224,255,0.35); }
.project-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; }
.project-id { font-family: var(--mono); font-size: 12px; color: var(--text-faint); }
.featured-badge { display: flex; align-items: center; gap: 4px; font-size: 11px; font-weight: 700; color: var(--cyan); }
.project-title { font-family: var(--display); font-size: 24px; font-weight: 700; margin-bottom: 4px; }
.project-tag { font-family: var(--mono); font-size: 12.5px; color: var(--violet); margin-bottom: 14px; }
.project-desc { color: var(--text-dim); font-size: 14px; margin-bottom: 18px; max-width: 620px; }
.project-stats { display: flex; gap: 26px; padding: 14px 0; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); margin-bottom: 16px; }
.project-stats div { display: flex; flex-direction: column; gap: 2px; font-family: var(--mono); font-size: 10px; color: var(--text-faint); text-transform: uppercase; }
.project-stats div span { font-family: var(--display); font-size: 18px; font-weight: 700; color: var(--text); text-transform: none; }
.project-tech { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 14px; }
.project-tech span { font-size: 11px; padding: 4px 10px; border-radius: 6px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); color: var(--text-dim); }
.project-note { font-size: 12px; color: var(--text-faint); font-style: italic; margin-bottom: 14px; }
.project-links { display: flex; gap: 20px; }
.project-links a { display: flex; align-items: center; gap: 5px; font-size: 13px; font-weight: 600; color: var(--cyan); }
.project-links a:hover { text-decoration: underline; }

/* -------- pipeline -------- */
.pipeline { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
.pipeline-card { position: relative; text-align: left; }
.pipeline-icon { width: 36px; height: 36px; border-radius: 10px; background: rgba(82,224,255,0.1); border: 1px solid rgba(82,224,255,0.3); display: flex; align-items: center; justify-content: center; color: var(--cyan); margin-bottom: 14px; }
.pipeline-subtitle { font-family: var(--mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-faint); }
.pipeline-title { font-family: var(--display); font-size: 16px; font-weight: 700; margin: 4px 0 8px; }
.pipeline-desc { color: var(--text-dim); font-size: 12.5px; margin-bottom: 12px; }
.pipeline-tech { display: flex; flex-wrap: wrap; gap: 5px; }
.pipeline-tech span { font-size: 10px; padding: 3px 8px; border-radius: 5px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); color: var(--text-dim); }
.pipeline-arrow { position: absolute; right: -22px; top: 50%; transform: translateY(-50%) rotate(90deg); color: var(--text-faint); display: none; }

/* -------- timeline -------- */
.timeline { display: flex; flex-direction: column; gap: 16px; margin-bottom: 48px; }
.timeline-card { display: block; }
.timeline-time { font-family: var(--mono); font-size: 11.5px; color: var(--cyan); margin-bottom: 8px; }
.timeline-head { display: flex; align-items: center; gap: 8px; margin-bottom: 4px; }
.timeline-head h3 { font-family: var(--display); font-size: 18px; font-weight: 700; }
.timeline-meta { font-family: var(--mono); font-size: 12px; color: var(--text-faint); margin-bottom: 12px; }
.timeline-points { list-style: none; display: flex; flex-direction: column; gap: 6px; }
.timeline-points li { font-size: 13.5px; color: var(--text-dim); padding-left: 16px; position: relative; }
.timeline-points li::before { content: ''; position: absolute; left: 0; top: 8px; width: 5px; height: 5px; border-radius: 50%; background: var(--cyan); }

.mini-label { display: flex; align-items: center; gap: 6px; font-family: var(--mono); font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-faint); margin: 40px 0 6px; }

.edu-school { font-weight: 600; font-size: 13.5px; margin-bottom: 6px; }
.edu-degree { font-size: 12.5px; color: var(--text-dim); margin-bottom: 8px; }
.edu-time { font-family: var(--mono); font-size: 11px; color: var(--text-faint); }

.cert-card { display: flex; align-items: center; gap: 12px; }
.cert-card .tilt-content { display: flex; align-items: center; gap: 12px; padding: 18px; }
.cert-check { color: var(--cyan); flex-shrink: 0; }
.cert-name { font-size: 13.5px; font-weight: 600; }
.cert-by { font-family: var(--mono); font-size: 11px; color: var(--text-faint); }

/* -------- contact -------- */
.contact-card .tilt-content { padding: 0; }
.contact-card a { display: flex; align-items: center; gap: 14px; padding: 20px; }
.contact-icon { width: 38px; height: 38px; border-radius: 10px; background: rgba(82,224,255,0.1); border: 1px solid rgba(82,224,255,0.3); display: flex; align-items: center; justify-content: center; color: var(--cyan); flex-shrink: 0; }
.contact-info { display: flex; flex-direction: column; gap: 2px; flex: 1; }
.contact-info span { font-family: var(--mono); font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-faint); }
.contact-info strong { font-size: 14px; font-weight: 600; }
.contact-arrow { color: var(--text-faint); transition: all 0.15s var(--ease); }
.contact-card:hover .contact-arrow { color: var(--cyan); transform: translate(2px, -2px); }

.footer { display: flex; justify-content: space-between; padding: 40px 0 60px; font-family: var(--mono); font-size: 11.5px; color: var(--text-faint); flex-wrap: wrap; gap: 8px; }

/* -------- reveal -------- */
.reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.7s var(--ease), transform 0.7s var(--ease); }
.reveal.in { opacity: 1; transform: translateY(0); }

/* -------- responsive -------- */
@media (max-width: 900px) {
  .dot-nav { display: none; }
  .topbar { display: flex; }
  .content { padding: 0 24px; }
  .section { padding: 90px 0; }
  .hero { padding-top: 110px; min-height: auto; }
  .card-grid.four, .card-grid.three, .card-grid.two { grid-template-columns: 1fr; }
  .project-grid { grid-template-columns: 1fr; }
  .pipeline { grid-template-columns: 1fr; }
  .hero-orbit-wrap { opacity: 0.5; }
}
`
