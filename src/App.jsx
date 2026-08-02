import { useEffect, useRef, useState } from 'react'
import {
  Compass, Ruler, PenTool, Award, Mail, Phone,
  Github, Linkedin, ArrowRight, ArrowUpRight, ExternalLink,
  ChevronLeft, ChevronRight, Menu, X, CheckCircle2, MapPin,
  Briefcase, GraduationCap, Code2, Server, Database, GitBranch,
} from 'lucide-react'
import './index.css'

/* ================================================================== */
/* content — one "drawing set", six sheets                             */
/* ================================================================== */

const SHEETS = [
  { id: 'cover', code: 'A-01', label: 'Cover' },
  { id: 'notes', code: 'A-02', label: 'General notes' },
  { id: 'systems', code: 'A-03', label: 'Systems' },
  { id: 'drawings', code: 'A-04', label: 'Project drawings' },
  { id: 'history', code: 'A-05', label: 'Revision history' },
  { id: 'issued', code: 'A-06', label: 'Issued for contact' },
]

const ROLE_LEGEND = ['REACT DEVELOPER', 'FRONTEND DEVELOPER', 'SOFTWARE DEVELOPER', 'JAVA FULL-STACK DEVELOPER']

const SCHEDULE = [
  { group: 'FRONTEND', code: '01', items: ['React', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'] },
  { group: 'BACKEND', code: '02', items: ['Java', 'Spring Boot', 'REST API'] },
  { group: 'DATABASE', code: '03', items: ['MySQL'] },
  { group: 'TOOLING', code: '04', items: ['Git', 'GitHub'] },
]

const ELEVATION = [
  { level: 'ROOF', title: 'Frontend', icon: Code2, note: 'What a person sees and taps.', items: ['React', 'Tailwind', 'HTML/CSS'] },
  { level: 'STRUCTURE', title: 'Backend', icon: Server, note: 'Carries the load. Answers every request.', items: ['Java', 'Spring Boot', 'REST API'] },
  { level: 'FOUNDATION', title: 'Database', icon: Database, note: 'Where everything is stored and read back.', items: ['MySQL'] },
]

const PROJECTS = [
  {
    id: 'DWG-01', title: 'ShopSphere', tag: 'Full-stack online store',
    desc: 'A complete online shop — browse, search, cart, and track orders. An admin panel behind it manages products, users, and stock.',
    tech: ['React', 'Spring Boot', 'MySQL', 'REST API'],
    note: 'Server sleeps to save cost — allow 30–60s to wake on first load.',
    links: [{ label: 'Live site', href: 'https://shopsphere-8m8f.vercel.app/' }, { label: 'Backend', href: 'https://shopsphere-backend-5umn.onrender.com' }],
    featured: true,
    stats: [['500+', 'users'], ['100+', 'products'], ['50+', 'orders']],
  },
  {
    id: 'DWG-02', title: 'AI Exam Companion', tag: 'Exam practice app',
    desc: 'A practice test app that scores instantly. A built-in AI chatbot explains why an answer was wrong, instead of just marking it incorrect.',
    tech: ['JavaScript', 'Firebase', 'Groq API'],
    links: [{ label: 'Live site', href: 'https://ai-exam-companion-ghzc.onrender.com' }],
    stats: [['200+', 'questions'], ['95%', 'accuracy'], ['live', 'ai reply']],
  },
  {
    id: 'DWG-03', title: 'Personal Portfolio', tag: 'Earlier revision of this site',
    desc: 'My first portfolio build. Built to be fast, legible, and consistent on any device.',
    tech: ['React', 'Vite', 'CSS'],
    stats: [['1K+', 'views'], ['100', 'speed'], ['A+', 'score']],
  },
]

const REVISIONS = [
  { rev: 'B', date: '2026', role: 'Web Development Intern', org: 'MR Tech Lab, Bengaluru', points: [
    'Built pages that hold up on every screen size, in HTML, CSS, and JavaScript',
    'Connected React pages to real APIs to show live data',
    'Shipped finished projects and checked them across browsers',
  ] },
  { rev: 'A', date: '2023', role: 'AI / ML & Python Intern', org: 'KNOWX Innovations, Bengaluru', points: [
    'Built small Python programs to clean data and test simple models',
    'Worked with the team fixing bugs and keeping code running smoothly',
  ] },
]

const REFERENCE_DOCS = [
  { school: 'Dr. ACS College of Engineering', degree: 'B.E., Computer Science and Engineering', time: '2023 – 2026 · Bengaluru' },
  { school: 'PVP Polytechnic', degree: 'Diploma, Information Science and Engineering', time: '2020 – 2023 · Bengaluru' },
]

const APPROVALS = [
  { name: 'Introduction to Java', by: 'Infosys Springboard' },
  { name: 'Cloud Computing', by: 'Infosys Springboard' },
  { name: 'Software Engineering', by: 'Infosys Springboard' },
  { name: 'AI and Green Skills', by: 'Edunet Foundation, Skills4Future' },
]

const CONTACT_FIELDS = [
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

function Draft({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const [ref, inView] = useReveal()
  return (
    <Tag ref={ref} className={`draft ${inView ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  )
}

function useActiveSheet(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) }),
      { rootMargin: '-35% 0px -55% 0px' }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [ids])
  return active
}

/* dimension line: a horizontal rule with arrowheads and a measurement label */
function Dimension({ label }) {
  return (
    <div className="dim">
      <span className="dim-tick" />
      <span className="dim-line" />
      <span className="dim-label">{label}</span>
      <span className="dim-line" />
      <span className="dim-tick" />
    </div>
  )
}

/* ================================================================== */
/* app                                                                  */
/* ================================================================== */

export default function App() {
  const ids = SHEETS.map((s) => s.id)
  const active = useActiveSheet(ids)
  const [menuOpen, setMenuOpen] = useState(false)
  const railRef = useRef(null)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }
  const scrollRail = (dir) => railRef.current?.scrollBy({ left: dir * 420, behavior: 'smooth' })
  const activeSheet = SHEETS.find((s) => s.id === active) ?? SHEETS[0]

  return (
    <div className="sheet-set">
      <div className="grid-paper" />
      <span className="crosshair tl"><Compass size={14} /></span>
      <span className="crosshair br"><Compass size={14} /></span>

      {/* ---------------- sheet index (nav) ---------------- */}
      <aside className={`index ${menuOpen ? 'open' : ''}`}>
        <div className="index-head">
          <PenTool size={15} />
          <span>DRAWING SET</span>
        </div>
        <nav className="index-list">
          {SHEETS.map((s) => (
            <button key={s.id} className={`index-item ${active === s.id ? 'active' : ''}`} onClick={() => scrollTo(s.id)}>
              <span className="index-code">{s.code}</span>
              <span className="index-label">{s.label}</span>
            </button>
          ))}
        </nav>
        <a className="index-cta" href="mailto:Srinivasrahul838@gmail.com">
          Issue for hire <ArrowUpRight size={13} />
        </a>
      </aside>

      <button className="menu-toggle" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle sheet index">
        {menuOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      <main className="main">
        {/* ============== A-01 COVER ============== */}
        <section id="cover" className="sheet cover">
          <div className="sheet-topline">
            <span>PROJECT — PORTFOLIO OF WORK</span>
            <span>SHEET A-01</span>
          </div>

          <h1 className="cover-name">RAHUL&nbsp;S.</h1>

          <div className="legend-strip">
            <div className="legend-track">
              {[...ROLE_LEGEND, ...ROLE_LEGEND].map((r, i) => (
                <span key={i} className="legend-item">{r}<span className="legend-tick">✕</span></span>
              ))}
            </div>
          </div>

          <p className="cover-desc">
            Final-year Computer Science student who builds full products, not prototypes —
            interfaces in <strong>React</strong>, backends in <strong>Java &amp; Spring Boot</strong>,
            three of them standing and live right now.
          </p>

          <Dimension label="03 LIVE BUILDS · 02 INTERNSHIPS · 04 APPROVALS" />

          <div className="cover-actions">
            <button className="btn primary" onClick={() => scrollTo('drawings')}>View drawings <ArrowRight size={15} /></button>
            <button className="btn outline" onClick={() => scrollTo('issued')}>Contact</button>
          </div>

          <div className="spec-box">
            <div className="spec-row"><span>STATUS</span><span className="ok">● OPEN FOR WORK</span></div>
            <div className="spec-row"><span>LOCATION</span><span>BENGALURU, INDIA</span></div>
            <div className="spec-row"><span>SCALE</span><span>NOT TO SCALE</span></div>
          </div>
        </section>

        {/* ============== A-02 GENERAL NOTES ============== */}
        <section id="notes" className="sheet">
          <SheetHead code="A-02" title="General notes" sub="How I work, in the architect's own words." />

          <div className="notes-grid">
            <Draft className="note-quote">
              <span className="note-num">01</span>
              <p>I believe in learning by doing — every project on this sheet is one I built end to end,
              and can walk you through <span className="hi">line by line.</span></p>
            </Draft>
            <Draft delay={80} className="note-body">
              <span className="note-num">02</span>
              <p>My work spans the full stack — pixel-accurate, responsive interfaces in <strong>React</strong>,
              backed by systems in <strong>Java</strong> and <strong>Spring Boot</strong>. I write code meant
              to be read by other people, and I care about the seconds between a click and a response.</p>
              <div className="note-tally">
                <div><b>03</b><span>Live projects</span></div>
                <div><b>02</b><span>Internships</span></div>
                <div><b>04</b><span>Approvals</span></div>
              </div>
            </Draft>
          </div>
        </section>

        {/* ============== A-03 SYSTEMS ============== */}
        <section id="systems" className="sheet section-alt">
          <SheetHead code="A-03" title="Systems & materials schedule" sub="What each layer of a build is made from." />

          <Draft className="schedule">
            <div className="schedule-row schedule-head">
              <span>ITEM</span><span>SYSTEM</span><span>SPECIFICATION</span>
            </div>
            {SCHEDULE.map((row) => (
              <div key={row.code} className="schedule-row">
                <span className="schedule-code">{row.code}</span>
                <span className="schedule-group">{row.group}</span>
                <span className="schedule-items">{row.items.join(' · ')}</span>
              </div>
            ))}
          </Draft>

          <Draft delay={100} className="elevation">
            <div className="elevation-dim">
              <Ruler size={14} />
              <span>SECTION — THE BUILD, ELEVATION VIEW</span>
            </div>
            <div className="elevation-stack">
              {ELEVATION.map((layer) => {
                const Icon = layer.icon
                return (
                  <div key={layer.level} className="elevation-layer">
                    <div className="elevation-tag"><Icon size={15} /><span>{layer.level}</span></div>
                    <div className="elevation-body">
                      <h3>{layer.title}</h3>
                      <p>{layer.note}</p>
                      <div className="elevation-items">{layer.items.map((i) => <span key={i}>{i}</span>)}</div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="elevation-tooling">
              <GitBranch size={14} />
              <span>Site equipment — Git, GitHub</span>
            </div>
          </Draft>
        </section>

        {/* ============== A-04 PROJECT DRAWINGS ============== */}
        <section id="drawings" className="sheet drawings-sheet">
          <div className="sheet-head-row">
            <SheetHead code="A-04" title="Project drawings" sub="Three builds, detailed." />
            <div className="rail-controls">
              <button onClick={() => scrollRail(-1)} aria-label="Scroll left"><ChevronLeft size={16} /></button>
              <button onClick={() => scrollRail(1)} aria-label="Scroll right"><ChevronRight size={16} /></button>
            </div>
          </div>

          <div className="rail" ref={railRef}>
            {PROJECTS.map((p) => (
              <article key={p.id} className={`drawing-card ${p.featured ? 'featured' : ''}`}>
                <div className="drawing-bar">
                  <span className="drawing-id">{p.id}</span>
                  {p.featured && <span className="drawing-flag">FEATURED DETAIL</span>}
                </div>
                <h3 className="drawing-title">{p.title}</h3>
                <p className="drawing-tag">{p.tag}</p>
                <p className="drawing-desc">{p.desc}</p>
                <div className="drawing-stats">
                  {p.stats.map(([v, k]) => (
                    <div key={k}><b>{v}</b><span>{k}</span></div>
                  ))}
                </div>
                <div className="drawing-tech">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
                {p.note && <p className="drawing-note">▲ {p.note}</p>}
                {p.links && (
                  <div className="drawing-links">
                    {p.links.map((l) => (
                      <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">{l.label} <ExternalLink size={12} /></a>
                    ))}
                  </div>
                )}
              </article>
            ))}
            <div className="drawing-end">
              <p>Want the as-built walkthrough of any of these?</p>
              <button className="btn outline sm" onClick={() => scrollTo('issued')}>Ask me anything <ArrowRight size={13} /></button>
            </div>
          </div>
        </section>

        {/* ============== A-05 REVISION HISTORY ============== */}
        <section id="history" className="sheet">
          <SheetHead code="A-05" title="Revision history" sub="Changes, in order, with who signed off." />

          <Draft className="rev-table">
            <div className="rev-row rev-head">
              <span>REV</span><span>DATE</span><span>DESCRIPTION</span>
            </div>
            {REVISIONS.map((r) => (
              <div key={r.rev} className="rev-row">
                <span className="rev-tag">{r.rev}</span>
                <span className="rev-date">{r.date}</span>
                <div className="rev-desc">
                  <div className="rev-role"><Briefcase size={13} /> <strong>{r.role}</strong><span className="rev-org">— {r.org}</span></div>
                  <ul>{r.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                </div>
              </div>
            ))}
          </Draft>

          <Draft delay={80} className="ref-block">
            <span className="mini-label"><GraduationCap size={14} /> Referenced documents</span>
            <div className="ref-row">
              {REFERENCE_DOCS.map((d) => (
                <div key={d.school} className="ref-card">
                  <h4>{d.school}</h4>
                  <p>{d.degree}</p>
                  <span>{d.time}</span>
                </div>
              ))}
            </div>
          </Draft>

          <Draft delay={140} className="stamp-block">
            <span className="mini-label"><Award size={14} /> Approvals on record</span>
            <div className="stamp-row">
              {APPROVALS.map((c) => (
                <div key={c.name} className="stamp">
                  <CheckCircle2 size={16} className="stamp-check" />
                  <div><h5>{c.name}</h5><span>{c.by}</span></div>
                </div>
              ))}
            </div>
          </Draft>
        </section>

        {/* ============== A-06 ISSUED FOR / CONTACT ============== */}
        <section id="issued" className="sheet issued-sheet">
          <SheetHead code="A-06" title="Issued for contact" sub="Where this drawing set leads." />

          <Draft>
            <a href="mailto:Srinivasrahul838@gmail.com" className="issued-giant">
              Let's build it<ArrowUpRight size={38} className="giant-arrow" />
            </a>
          </Draft>

          <Draft delay={100} className="titleblock">
            <div className="titleblock-row"><span>DRAWN BY</span><span>Rahul S.</span></div>
            <div className="titleblock-row"><span>LOCATION</span><span><MapPin size={12}/> Bengaluru, India</span></div>
            {CONTACT_FIELDS.map((c) => {
              const Icon = c.icon
              return (
                <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="titleblock-row link">
                  <span><Icon size={12} /> {c.label.toUpperCase()}</span>
                  <span>{c.value}</span>
                </a>
              )
            })}
          </Draft>
        </section>

        <footer className="footer">
          <span>SHEET {activeSheet.code} — {activeSheet.label}</span>
          <span>SCALE NTS</span>
          <span>© {new Date().getFullYear()} RAHUL S.</span>
          <span>REV 04</span>
        </footer>
      </main>
    </div>
  )
}

function SheetHead({ code, title, sub }) {
  return (
    <div className="sheet-head">
      <div className="sheet-topline">
        <span>SHEET {code}</span>
        <span>{sub}</span>
      </div>
      <h2 className="sheet-title">{title}</h2>
    </div>
  )
}
