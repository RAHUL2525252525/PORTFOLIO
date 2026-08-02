import { useEffect, useRef, useState } from 'react'
import {
  Ship, Package, PackageCheck, Truck, Warehouse, Stamp, Barcode,
  Mail, Phone, Github, Linkedin, ArrowRight, ArrowUpRight, ExternalLink,
  ChevronLeft, ChevronRight, Menu, X, CheckCircle2, Briefcase,
  GraduationCap, MapPin, Boxes,
} from 'lucide-react'
import './index.css'

/* ================================================================== */
/* content — a bill of lading for one developer                        */
/* ================================================================== */

const TABS = [
  { id: 'cover', label: 'Cover' },
  { id: 'declaration', label: 'Declaration' },
  { id: 'cargo', label: 'Cargo manifest' },
  { id: 'shipments', label: 'Shipments' },
  { id: 'tracking', label: 'Tracking' },
  { id: 'label', label: 'Shipping label' },
]

const PACKING_LIST = [
  { no: '01', desc: 'Frontend', contents: 'React · JavaScript · Tailwind CSS · HTML · CSS' },
  { no: '02', desc: 'Backend', contents: 'Java · Spring Boot · REST API' },
  { no: '03', desc: 'Database', contents: 'MySQL' },
  { no: '04', desc: 'Tooling', contents: 'Git · GitHub' },
]

const CONTAINERS = [
  { code: 'FRONTEND', sub: 'What a person sees and taps', items: ['React', 'Tailwind', 'HTML/CSS'], cls: 'c-front' },
  { code: 'BACKEND', sub: 'Carries the load, answers every request', items: ['Java', 'Spring Boot', 'REST API'], cls: 'c-back' },
  { code: 'DATABASE', sub: 'Where everything is stored and read back', items: ['MySQL'], cls: 'c-data' },
  { code: 'TOOLING', sub: 'How it all gets versioned and shipped', items: ['Git', 'GitHub'], cls: 'c-tool' },
]

const SHIPMENTS = [
  {
    id: 'RS-2026-01', title: 'ShopSphere', tag: 'Full-stack online store',
    desc: 'A complete online shop — browse, search, cart, and track orders. An admin panel behind it manages products, users, and stock.',
    contents: ['React', 'Spring Boot', 'MySQL', 'REST API'],
    note: 'Server sleeps to save cost — allow 30–60s to wake on first load.',
    links: [{ label: 'Live site', href: 'https://shopsphere-8m8f.vercel.app/' }, { label: 'Backend', href: 'https://shopsphere-backend-5umn.onrender.com' }],
    fragile: true,
    values: [['500+', 'users'], ['100+', 'products'], ['50+', 'orders']],
  },
  {
    id: 'RS-2026-02', title: 'AI Exam Companion', tag: 'Exam practice app',
    desc: 'A practice test app that scores instantly. A built-in AI chatbot explains why an answer was wrong, instead of just marking it incorrect.',
    contents: ['JavaScript', 'Firebase', 'Groq API'],
    links: [{ label: 'Live site', href: 'https://ai-exam-companion-ghzc.onrender.com' }],
    values: [['200+', 'questions'], ['95%', 'accuracy'], ['live', 'ai reply']],
  },
  {
    id: 'RS-2023-03', title: 'Personal Portfolio', tag: 'Earlier shipment of this site',
    desc: 'My first portfolio build. Built to be fast, legible, and consistent on any device.',
    contents: ['React', 'Vite', 'CSS'],
    values: [['1K+', 'views'], ['100', 'speed'], ['A+', 'score']],
  },
]

const TRACKING_EVENTS = [
  { status: 'IN TRANSIT', date: '2026', role: 'Web Development Intern', place: 'MR Tech Lab, Bengaluru', points: [
    'Built pages that hold up on every screen size, in HTML, CSS, and JavaScript',
    'Connected React pages to real APIs to show live data',
    'Shipped finished projects and checked them across browsers',
  ] },
  { status: 'DEPARTED', date: '2023', role: 'AI / ML & Python Intern', place: 'KNOWX Innovations, Bengaluru', points: [
    'Built small Python programs to clean data and test simple models',
    'Worked with the team fixing bugs and keeping code running smoothly',
  ] },
]

const PORTS_OF_CALL = [
  { school: 'Dr. ACS College of Engineering', degree: 'B.E., Computer Science and Engineering', time: '2023 – 2026 · Bengaluru' },
  { school: 'PVP Polytechnic', degree: 'Diploma, Information Science and Engineering', time: '2020 – 2023 · Bengaluru' },
]

const SEALS = [
  { name: 'Introduction to Java', by: 'Infosys Springboard' },
  { name: 'Cloud Computing', by: 'Infosys Springboard' },
  { name: 'Software Engineering', by: 'Infosys Springboard' },
  { name: 'AI and Green Skills', by: 'Edunet Foundation, Skills4Future' },
]

const LABEL_FIELDS = [
  { icon: Mail, label: 'EMAIL', value: 'Srinivasrahul838@gmail.com', href: 'mailto:Srinivasrahul838@gmail.com' },
  { icon: Phone, label: 'PHONE', value: '+91 73376 34886', href: 'tel:+917337634886' },
  { icon: Linkedin, label: 'LINKEDIN', value: 'linkedin.com/in/rahul-s', href: 'https://www.linkedin.com/in/rahul-s-6460b1238' },
  { icon: Github, label: 'GITHUB', value: 'github.com', href: 'https://github.com/' },
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

function Crate({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const [ref, inView] = useReveal()
  return (
    <Tag ref={ref} className={`crate-in ${inView ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  )
}

function useActiveTab(ids) {
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

/* a CSS-only barcode: bars of varying width, purely decorative */
function BarcodeStrip() {
  const bars = [2, 1, 3, 1, 1, 2, 4, 1, 2, 1, 3, 2, 1, 1, 4, 2, 1, 3, 1, 2, 1, 1, 3, 2, 4, 1]
  return (
    <div className="barcode" aria-hidden="true">
      {bars.map((w, i) => (
        <span key={i} style={{ width: `${w * 2}px` }} />
      ))}
    </div>
  )
}

/* ================================================================== */
/* app                                                                  */
/* ================================================================== */

export default function App() {
  const ids = TABS.map((t) => t.id)
  const active = useActiveTab(ids)
  const [menuOpen, setMenuOpen] = useState(false)
  const railRef = useRef(null)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }
  const scrollRail = (dir) => railRef.current?.scrollBy({ left: dir * 400, behavior: 'smooth' })

  return (
    <div className="dock">
      {/* ---------------- top bar: folder tabs ---------------- */}
      <header className="topbar">
        <div className="wrap topbar-inner">
          <button className="brand" onClick={() => scrollTo('cover')}>
            <Ship size={18} /> <span>RAHUL&nbsp;S.</span>
          </button>
          <nav className="tabs">
            {TABS.map((t) => (
              <button key={t.id} className={`tab ${active === t.id ? 'active' : ''}`} onClick={() => scrollTo(t.id)}>
                {t.label}
              </button>
            ))}
          </nav>
          <button className="btn stamp-btn" onClick={() => scrollTo('label')}>Hire me</button>
          <button className="menu-toggle" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-menu">
            {TABS.map((t) => <button key={t.id} onClick={() => scrollTo(t.id)}>{t.label}</button>)}
          </div>
        )}
      </header>

      <main className="main">
        {/* ============== COVER — bill of lading ============== */}
        <section id="cover" className="manifest cover">
          <div className="manifest-strip">
            <span>BILL OF LADING</span>
            <span>TRACKING NO. RS-2026-088</span>
          </div>

          <div className="cover-grid">
            <div>
              <h1 className="cover-name">RAHUL S.</h1>
              <p className="cover-role">FULL-STACK DEVELOPER</p>
              <p className="cover-desc">
                Final-year Computer Science student who builds full products, not prototypes —
                interfaces in <strong>React</strong>, backends in <strong>Java &amp; Spring Boot</strong>,
                three shipments standing and live right now.
              </p>
              <div className="cover-actions">
                <button className="btn primary" onClick={() => scrollTo('shipments')}>See shipments <ArrowRight size={15} /></button>
                <button className="btn outline" onClick={() => scrollTo('label')}>Contact</button>
              </div>
              <div className="contents-line">
                <Package size={13} /> CONTENTS — 03 LIVE SHIPMENTS · 02 DELIVERIES · 04 SEALS
              </div>
            </div>

            <div className="stamp-wrap">
              <div className="rubber-stamp">AVAILABLE<br />FOR HIRE</div>
              <div className="manifest-box">
                <div className="manifest-row"><span>ORIGIN</span><span>Bengaluru, IN</span></div>
                <div className="manifest-row"><span>STATUS</span><span className="ok">● READY TO SHIP</span></div>
                <div className="manifest-row"><span>INCOTERM</span><span>REMOTE / ONSITE</span></div>
              </div>
            </div>
          </div>
        </section>

        <div className="tape" />

        {/* ============== DECLARATION — about ============== */}
        <section id="declaration" className="manifest">
          <ManifestHead no="02" title="Declaration of contents" sub="How I work, on the record." />

          <div className="decl-grid">
            <Crate className="decl-card">
              <span className="decl-tag">NOTE</span>
              <p>I believe in learning by doing — every shipment on this manifest is one I built end to end,
              and can walk you through <span className="hi">line by line.</span></p>
            </Crate>
            <Crate delay={80} className="decl-card">
              <span className="decl-tag">DECLARED VALUE</span>
              <p>My work spans the full stack — pixel-accurate, responsive interfaces in <strong>React</strong>,
              backed by systems in <strong>Java</strong> and <strong>Spring Boot</strong>. I write code meant
              to be read by other people, and I care about the seconds between a click and a response.</p>
              <div className="decl-tally">
                <div><b>03</b><span>Live shipments</span></div>
                <div><b>02</b><span>Deliveries</span></div>
                <div><b>04</b><span>Seals</span></div>
              </div>
            </Crate>
          </div>
        </section>

        {/* ============== CARGO MANIFEST — skills ============== */}
        <section id="cargo" className="manifest section-alt">
          <ManifestHead no="03" title="Cargo manifest" sub="Packing list for a full-stack build." />

          <Crate className="packing-list">
            <div className="pl-row pl-head"><span>NO.</span><span>DESCRIPTION</span><span>CONTENTS</span></div>
            {PACKING_LIST.map((row) => (
              <div key={row.no} className="pl-row">
                <span className="pl-no">{row.no}</span>
                <span className="pl-desc">{row.desc}</span>
                <span className="pl-contents">{row.contents}</span>
              </div>
            ))}
          </Crate>

          <Crate delay={100} className="yard">
            <div className="yard-label"><Warehouse size={14} /><span>CONTAINER YARD — THE FULL STACK</span></div>
            <div className="yard-stack">
              {CONTAINERS.map((c) => (
                <div key={c.code} className={`container ${c.cls}`}>
                  <div className="container-ridges" />
                  <div className="container-corner tl" /><div className="container-corner tr" />
                  <div className="container-corner bl" /><div className="container-corner br" />
                  <div className="container-face">
                    <div className="container-code">{c.code}</div>
                    <p>{c.sub}</p>
                    <div className="container-items">{c.items.map((i) => <span key={i}>{i}</span>)}</div>
                  </div>
                  <div className="container-door" />
                </div>
              ))}
            </div>
          </Crate>
        </section>

        <div className="tape reverse" />

        {/* ============== SHIPMENTS — projects ============== */}
        <section id="shipments" className="manifest">
          <div className="manifest-head-row">
            <ManifestHead no="04" title="Shipments" sub="Three builds, uncrated." />
            <div className="rail-controls">
              <button onClick={() => scrollRail(-1)} aria-label="Scroll left"><ChevronLeft size={16} /></button>
              <button onClick={() => scrollRail(1)} aria-label="Scroll right"><ChevronRight size={16} /></button>
            </div>
          </div>

          <div className="rail" ref={railRef}>
            {SHIPMENTS.map((s) => (
              <article key={s.id} className={`crate-card ${s.fragile ? 'fragile' : ''}`}>
                <div className="crate-top">
                  <span className="crate-id"><Barcode size={12} /> {s.id}</span>
                  {s.fragile && <span className="fragile-flag">FRAGILE — FEATURED</span>}
                </div>
                <h3 className="crate-title">{s.title}</h3>
                <p className="crate-tag">{s.tag}</p>
                <p className="crate-desc">{s.desc}</p>
                <div className="crate-values">
                  {s.values.map(([v, k]) => (<div key={k}><b>{v}</b><span>{k}</span></div>))}
                </div>
                <div className="crate-contents"><span className="crate-contents-label">CONTENTS:</span>{s.contents.map((t) => <span key={t}>{t}</span>)}</div>
                {s.note && <p className="crate-note">⚠ {s.note}</p>}
                {s.links && (
                  <div className="crate-links">
                    {s.links.map((l) => (
                      <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">{l.label} <ExternalLink size={12} /></a>
                    ))}
                  </div>
                )}
              </article>
            ))}
            <div className="crate-end">
              <p>Want the unboxing walkthrough of any of these?</p>
              <button className="btn outline sm" onClick={() => scrollTo('label')}>Ask me anything <ArrowRight size={13} /></button>
            </div>
          </div>
        </section>

        {/* ============== TRACKING — experience ============== */}
        <section id="tracking" className="manifest section-alt">
          <ManifestHead no="05" title="Tracking history" sub="Where this shipment has been." />

          <Crate className="tracking-list">
            {TRACKING_EVENTS.map((e, i) => (
              <div key={e.role} className="tracking-row">
                <div className="tracking-rail">
                  <span className="tracking-dot"><Truck size={12} /></span>
                  {i !== TRACKING_EVENTS.length - 1 && <span className="tracking-line" />}
                </div>
                <div className="tracking-body">
                  <div className="tracking-top"><span className="tracking-status">{e.status}</span><span className="tracking-date">{e.date}</span></div>
                  <div className="tracking-role"><Briefcase size={13} /> <strong>{e.role}</strong><span>— {e.place}</span></div>
                  <ul>{e.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                </div>
              </div>
            ))}
            <div className="tracking-row final">
              <div className="tracking-rail"><span className="tracking-dot done"><PackageCheck size={12} /></span></div>
              <div className="tracking-body"><span className="tracking-status done">READY FOR NEXT DESTINATION</span></div>
            </div>
          </Crate>

          <Crate delay={100} className="ports-block">
            <span className="mini-label"><GraduationCap size={14} /> Ports of call</span>
            <div className="ports-row">
              {PORTS_OF_CALL.map((p) => (
                <div key={p.school} className="port-card">
                  <h4>{p.school}</h4>
                  <p>{p.degree}</p>
                  <span>{p.time}</span>
                </div>
              ))}
            </div>
          </Crate>

          <Crate delay={160} className="seals-block">
            <span className="mini-label"><Stamp size={14} /> Customs seals</span>
            <div className="seals-row">
              {SEALS.map((c) => (
                <div key={c.name} className="seal">
                  <CheckCircle2 size={15} className="seal-check" />
                  <div><h5>{c.name}</h5><span>{c.by}</span></div>
                </div>
              ))}
            </div>
          </Crate>
        </section>

        {/* ============== SHIPPING LABEL — contact ============== */}
        <section id="label" className="manifest label-sheet">
          <ManifestHead no="06" title="Shipping label" sub="Where this manifest leads." />

          <div className="ship-label">
            <div className="ship-label-top">
              <span>HANDLE WITH CARE</span>
              <span>THIS SIDE UP ↑</span>
            </div>
            <div className="ship-label-to">
              <span className="ship-label-key">TO</span>
              <a href="mailto:Srinivasrahul838@gmail.com" className="ship-label-cta">
                Let's build it <ArrowUpRight size={26} />
              </a>
            </div>
            <div className="ship-label-fields">
              {LABEL_FIELDS.map((f) => {
                const Icon = f.icon
                return (
                  <a key={f.label} href={f.href} target={f.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="ship-label-row">
                    <span><Icon size={12} /> {f.label}</span>
                    <span>{f.value}</span>
                  </a>
                )
              })}
              <div className="ship-label-row"><span><MapPin size={12} /> FROM</span><span>Bengaluru, India</span></div>
            </div>
            <BarcodeStrip />
          </div>
        </section>

        <footer className="footer">
          <span><Boxes size={13} /> PACKED BY RAHUL S.</span>
          <span>TRACKING NO. RS-2026-088</span>
          <span>© {new Date().getFullYear()}</span>
        </footer>
      </main>
    </div>
  )
}

function ManifestHead({ no, title, sub }) {
  return (
    <div className="manifest-head">
      <div className="manifest-strip">
        <span>ITEM {no}</span>
        <span>{sub}</span>
      </div>
      <h2 className="manifest-title">{title}</h2>
    </div>
  )
}
