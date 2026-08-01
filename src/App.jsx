import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Github, Linkedin, Mail, Phone, ArrowUpRight, ArrowRight,
  Code2, Server, Database, Wrench, Award, GraduationCap,
} from 'lucide-react'
import './index.css'

/* ================================================================== */
/* content                                                             */
/* ================================================================== */

const ROLES = [
  'React Developer',
  'Frontend Developer',
  'Software Developer',
  'Java Full Stack Developer',
]

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'stack', label: 'Tech Stack' },
  { id: 'contact', label: 'Contact' },
]

const SKILLS = [
  'React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS',
  'Java', 'Spring Boot', 'MySQL', 'REST API', 'Git', 'GitHub',
]

// Order here is the real order a request travels through the app —
// screen, then server, then database, then the tools holding it together.
const STACK_LAYERS = [
  {
    icon: Code2,
    title: 'What you see',
    subtitle: 'Frontend',
    items: ['React', 'Tailwind CSS', 'HTML', 'CSS'],
    blurb: 'The screens, buttons, and pages a person actually touches.',
  },
  {
    icon: Server,
    title: 'What runs it',
    subtitle: 'Backend',
    items: ['Java', 'Spring Boot', 'REST API'],
    blurb: 'The logic behind the screen, answering every request.',
  },
  {
    icon: Database,
    title: 'Where data lives',
    subtitle: 'Database',
    items: ['MySQL'],
    blurb: 'Where everything gets saved, and read back later.',
  },
  {
    icon: Wrench,
    title: 'How I build it',
    subtitle: 'Tools',
    items: ['Git', 'GitHub'],
    blurb: 'Version control and the place the code lives online.',
  },
]

const EXPERIENCE = [
  {
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

const PROJECTS = [
  {
    id: '01',
    title: 'ShopSphere',
    tag: 'Full-stack online store',
    desc: 'A complete online shop — people can browse, search, add to cart, and track orders. Behind it, there is an admin panel to manage products, users, and stock.',
    tech: ['React', 'Spring Boot', 'MySQL', 'REST API'],
    note: 'The server sleeps to save costs. Give it 30–60 seconds to wake up before the live site loads fully.',
    links: [
      { label: 'Live site', href: 'https://shopsphere-8m8f.vercel.app/' },
      { label: 'Backend', href: 'https://shopsphere-backend-5umn.onrender.com' },
    ],
    featured: true,
  },
  {
    id: '02',
    title: 'AI Exam Companion',
    tag: 'Exam practice app',
    desc: 'A practice test app that scores you right away. A built-in AI chatbot explains why an answer was wrong, instead of just marking it incorrect.',
    tech: ['JavaScript', 'Firebase', 'Groq API'],
    links: [{ label: 'Live site', href: 'https://ai-exam-companion-ghzc.onrender.com' }],
  },
  {
    id: '03',
    title: 'Personal Portfolio',
    tag: 'An earlier version of this site',
    desc: 'My first portfolio site — built to be fast, clean, and easy to read on any device.',
    tech: ['React', 'Vite', 'CSS'],
  },
]

const CERTS = [
  { name: 'Introduction to Java', by: 'Infosys Springboard' },
  { name: 'Cloud Computing', by: 'Infosys Springboard' },
  { name: 'Software Engineering', by: 'Infosys Springboard' },
  { name: 'AI and Green Skills', by: 'Edunet Foundation, Skills4Future' },
]

const EDUCATION = [
  { school: 'Dr. ACS College of Engineering', degree: 'B.E., Computer Science and Engineering', time: '2023 – 2026 · Bengaluru' },
  { school: 'PVP Polytechnic', degree: 'Diploma, Information Science and Engineering', time: '2020 – 2023 · Bengaluru' },
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

function useScrolledPast(threshold = 40) {
  const [past, setPast] = useState(false)
  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return past
}

function useCursorGlow() {
  const ref = useRef(null)
  useEffect(() => {
    const move = (e) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])
  return ref
}

/* ================================================================== */
/* small pieces                                                        */
/* ================================================================== */

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

function Reveal({ children, className = '', delay = 0, as = 'div' }) {
  const Tag = motion[as] || motion.div
  return (
    <Tag
      className={className}
      variants={fadeUp}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </Tag>
  )
}

function Eyebrow({ children }) {
  return (
    <p className="font-mono text-[0.7rem] tracking-[0.25em] uppercase text-gold mb-3">
      {children}
    </p>
  )
}

function Particles({ count = 22 }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 3,
        duration: 10 + Math.random() * 12,
        delay: Math.random() * 14,
        drift: (Math.random() - 0.5) * 80,
      })),
    [count]
  )
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            '--drift': `${p.drift}px`,
          }}
        />
      ))}
    </div>
  )
}

/* a small circular monogram — the recurring luxury "seal" motif */
function Seal({ size = 40 }) {
  return (
    <div
      className="relative rounded-full border border-gold/50 flex items-center justify-center font-display text-gold shrink-0"
      style={{ width: size, height: size, fontSize: size * 0.4 }}
    >
      <span className="absolute inset-[3px] rounded-full border border-gold/20" />
      RS
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
  const glowRef = useCursorGlow()
  const { scrollYProgress } = useScroll()
  const heroFade = useTransform(scrollYProgress, [0, 0.12], [1, 0])
  const heroShift = useTransform(scrollYProgress, [0, 0.12], [0, 40])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <div className="bg-base text-ink font-body min-h-screen selection:bg-gold/30">
      <div ref={glowRef} className="cursor-glow" />

      {/* ---------------- navbar ---------------- */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
          scrolled ? 'bg-base/85 backdrop-blur-md border-b border-gold/15' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            className="flex items-center gap-3"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
            <Seal size={36} />
            <span className="font-display text-lg tracking-wide hidden sm:block">Rahul S</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className={`nav-link font-mono text-xs tracking-[0.15em] uppercase text-dim hover:text-ink transition-colors ${
                  active === n.id ? 'active text-ink' : ''
                }`}
              >
                {n.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTo('contact')}
            className="shimmer font-mono text-xs tracking-[0.1em] uppercase border border-gold/50 text-gold rounded-full px-5 py-2 hover:bg-gold/10 transition-colors"
          >
            Contact
          </button>
        </div>
      </nav>

      {/* ---------------- hero ---------------- */}
      <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 gold-wash overflow-hidden">
        <Particles />
        <motion.div style={{ opacity: heroFade, y: heroShift }} className="relative z-10 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-6"
          >
            Open to full-stack &amp; frontend roles
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.05] mb-6"
          >
            Hi, I&rsquo;m <span className="text-gold">Rahul</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-mono text-base sm:text-lg text-dim mb-10 h-7"
          >
            {typed}
            <span className="type-cursor" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={() => scrollTo('projects')}
              className="shimmer group inline-flex items-center gap-2 bg-gold text-base font-semibold text-sm px-7 py-3.5 rounded-full shadow-goldLg hover:brightness-110 transition-all"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="shimmer inline-flex items-center gap-2 border border-gold/50 text-gold font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-gold/10 transition-colors"
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 flex flex-col items-center gap-2 text-dim"
        >
          <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase">Scroll</span>
          <span className="w-px h-10 bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </header>

      {/* ---------------- about ---------------- */}
      <section id="about" className="relative max-w-4xl mx-auto px-6 py-28">
        <Reveal>
          <Eyebrow>About me</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6">
            A builder, not just a student
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <p className="text-dim text-lg leading-relaxed max-w-2xl">
            I&rsquo;m a final-year Computer Science student who likes finishing things, not just
            planning them. I build the part you see with React, and the part that makes it work
            with Java and Spring Boot. I care about clean, simple code, and about making
            something people genuinely enjoy using — from the first click to the last.
          </p>
        </Reveal>
      </section>

      {/* ---------------- skills ---------------- */}
      <section id="skills" className="relative max-w-5xl mx-auto px-6 py-20">
        <Reveal>
          <Eyebrow>Skills</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-10">
            What I work with
          </h2>
        </Reveal>
        <div className="flex flex-wrap gap-3">
          {SKILLS.map((s, i) => (
            <Reveal key={s} delay={i}>
              <span className="glass rounded-full px-5 py-2.5 text-sm text-ink/90 hover:border-gold/60 hover:shadow-gold transition-all inline-block cursor-default">
                {s}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- experience ---------------- */}
      <section id="experience" className="relative max-w-4xl mx-auto px-6 py-20">
        <Reveal>
          <Eyebrow>Experience</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-12">
            How I got here
          </h2>
        </Reveal>

        <div className="relative border-l border-gold/25 pl-8 space-y-14">
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.company} delay={i} className="relative">
              <span className="absolute -left-[2.55rem] top-1.5 w-3 h-3 rounded-full bg-gold shadow-[0_0_12px_2px_rgba(212,175,55,0.6)]" />
              <p className="font-mono text-xs tracking-[0.15em] uppercase text-gold mb-2">{e.time}</p>
              <h3 className="font-display text-xl font-semibold mb-1">{e.role}</h3>
              <p className="text-dim text-sm mb-4">{e.company} · {e.place}</p>
              <ul className="space-y-2">
                {e.points.map((pt) => (
                  <li key={pt} className="text-ink/80 text-sm leading-relaxed flex gap-2">
                    <span className="text-gold mt-1.5">◆</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2} className="mt-16">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap size={18} className="text-gold" />
            <p className="font-mono text-xs tracking-[0.15em] uppercase text-dim">Education</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {EDUCATION.map((ed) => (
              <div key={ed.school} className="glass rounded-2xl p-6">
                <p className="font-display text-lg font-semibold mb-1">{ed.school}</p>
                <p className="text-dim text-sm mb-2">{ed.degree}</p>
                <p className="font-mono text-xs text-gold">{ed.time}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ---------------- projects ---------------- */}
      <section id="projects" className="relative max-w-5xl mx-auto px-6 py-20">
        <Reveal>
          <Eyebrow>Featured projects</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-12">
            Things I&rsquo;ve built
          </h2>
        </Reveal>

        <div className="space-y-6">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i}>
              <div
                className={`glass rounded-2xl p-8 grid sm:grid-cols-[56px_1fr] gap-5 hover:shadow-gold hover:-translate-y-1 transition-all duration-300 ${
                  p.featured ? 'border-gold/45' : ''
                }`}
              >
                <span className="font-display text-2xl text-gold/70">{p.id}</span>
                <div>
                  <div className="flex items-center flex-wrap gap-3 mb-1">
                    <h3 className="font-display text-2xl font-semibold">{p.title}</h3>
                    {p.featured && (
                      <span className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-gold border border-gold/40 rounded-full px-3 py-1">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-gold/80 text-sm mb-3">{p.tag}</p>
                  <p className="text-dim leading-relaxed mb-4 max-w-xl">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tech.map((t) => (
                      <span key={t} className="font-mono text-xs text-dim border border-gold/20 rounded-full px-3 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                  {p.note && (
                    <p className="text-xs text-gold/80 bg-gold/5 border-l-2 border-gold/50 rounded-r-lg px-3 py-2 mb-4 max-w-xl">
                      {p.note}
                    </p>
                  )}
                  {p.links && (
                    <div className="flex flex-wrap gap-3">
                      {p.links.map((l) => (
                        <a
                          key={l.label}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium border border-gold/40 rounded-full px-4 py-2 hover:text-gold hover:border-gold transition-colors"
                        >
                          {l.label} <ArrowUpRight size={14} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- certifications ---------------- */}
      <section id="certifications" className="relative max-w-4xl mx-auto px-6 py-20">
        <Reveal>
          <Eyebrow>Certifications</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-10">
            Always learning something new
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-4">
          {CERTS.map((c, i) => (
            <Reveal key={c.name} delay={i}>
              <div className="glass rounded-xl p-5 flex items-start gap-3 hover:border-gold/50 transition-colors h-full">
                <Award size={18} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-ink/90">{c.name}</p>
                  <p className="text-dim text-sm">{c.by}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- tech stack ---------------- */}
      <section id="stack" className="relative max-w-5xl mx-auto px-6 py-20">
        <Reveal>
          <Eyebrow>Tech stack</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-3">
            How a request travels through my apps
          </h2>
          <p className="text-dim mb-12 max-w-2xl">
            Top to bottom — from the screen you tap, to the server that answers, to the database
            that remembers, held together by the tools I build with every day.
          </p>
        </Reveal>

        <div className="space-y-4">
          {STACK_LAYERS.map((layer, i) => {
            const Icon = layer.icon
            return (
              <Reveal key={layer.title} delay={i}>
                <div className="glass rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-5 hover:shadow-gold transition-all duration-300">
                  <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-gold" />
                  </div>
                  <div className="flex-1">
                    <p className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-gold mb-1">{layer.subtitle}</p>
                    <h3 className="font-display text-xl font-semibold mb-1">{layer.title}</h3>
                    <p className="text-dim text-sm">{layer.blurb}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:justify-end sm:max-w-xs">
                    {layer.items.map((it) => (
                      <span key={it} className="font-mono text-xs text-ink/80 border border-gold/25 rounded-full px-3 py-1">
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
                {i < STACK_LAYERS.length - 1 && (
                  <div className="w-px h-4 bg-gold/25 mx-auto" />
                )}
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* ---------------- contact ---------------- */}
      <section id="contact" className="relative max-w-3xl mx-auto px-6 py-28 text-center">
        <Reveal>
          <Eyebrow>Get in touch</Eyebrow>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold mb-5 leading-tight">
            Let&rsquo;s build <span className="text-gold">something good.</span>
          </h2>
          <p className="text-dim mb-10 max-w-lg mx-auto">
            Open to full-stack and frontend roles. Based in Bengaluru, happy to work remote.
          </p>
        </Reveal>

        <Reveal delay={1} className="glass rounded-2xl p-8 grid sm:grid-cols-2 gap-4 text-left">
          <a
            href="mailto:Srinivasrahul838@gmail.com"
            className="flex items-center gap-3 rounded-xl border border-gold/20 px-4 py-3 hover:border-gold/60 hover:shadow-gold transition-all"
          >
            <Mail size={17} className="text-gold shrink-0" />
            <span className="text-sm text-ink/90 truncate">Srinivasrahul838@gmail.com</span>
          </a>
          <a
            href="tel:+917337634886"
            className="flex items-center gap-3 rounded-xl border border-gold/20 px-4 py-3 hover:border-gold/60 hover:shadow-gold transition-all"
          >
            <Phone size={17} className="text-gold shrink-0" />
            <span className="text-sm text-ink/90">+91 73376 34886</span>
          </a>
          <a
            href="https://www.linkedin.com/in/rahul-s-6460b1238"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-gold/20 px-4 py-3 hover:border-gold/60 hover:shadow-gold transition-all"
          >
            <Linkedin size={17} className="text-gold shrink-0" />
            <span className="text-sm text-ink/90">LinkedIn</span>
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-gold/20 px-4 py-3 hover:border-gold/60 hover:shadow-gold transition-all"
          >
            <Github size={17} className="text-gold shrink-0" />
            <span className="text-sm text-ink/90">GitHub</span>
          </a>
        </Reveal>
      </section>

      {/* ---------------- footer ---------------- */}
      <footer className="border-t border-gold/15">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Seal size={28} />
            <span className="font-mono text-xs text-dim">© {new Date().getFullYear()} Rahul S</span>
          </div>
          <span className="font-mono text-xs text-dim">Built with React, Tailwind &amp; Framer Motion</span>
        </div>
      </footer>
    </div>
  )
}
