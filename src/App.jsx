import { useEffect, useRef, useState } from 'react'
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ArrowUpRight,
  MapPin,
  GraduationCap,
  Briefcase,
  Award,
  Code2,
  Database,
  ShieldCheck,
  Server,
  Layers3,
  ExternalLink,
  Sparkles,
  Menu,
  X,
  Terminal,
  Globe,
  Cpu,
  ChevronDown,
  Activity,
  FolderCode,
  Command,
} from 'lucide-react'

import './index.css'

/* =========================================================
   ONLINE VIDEO BACKGROUND
   No video file required in public/
========================================================= */

const VIDEO_BG =
  'https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4'

/* =========================================================
   NAVIGATION
========================================================= */

const NAV = [
  { id: 'about', label: 'Home', code: '00' },
  { id: 'skills', label: 'Stack', code: '01' },
  { id: 'experience', label: 'Experience', code: '02' },
  { id: 'projects', label: 'Projects', code: '03' },
  { id: 'certifications', label: 'Certs', code: '04' },
  { id: 'approach', label: 'Approach', code: '05' },
  { id: 'contact', label: 'Contact', code: '06' },
]

/* =========================================================
   SKILLS
========================================================= */

const SKILLS = [
  {
    number: '01',
    icon: Code2,
    title: 'FRONTEND',
    description:
      'Responsive, component-driven interfaces with modern frontend technologies.',
    items: [
      'React.js',
      'JavaScript ES6+',
      'HTML5',
      'CSS3',
      'JSX',
      'Vite',
      'Flexbox',
      'CSS Grid',
      'Responsive Design',
    ],
  },
  {
    number: '02',
    icon: Server,
    title: 'BACKEND',
    description:
      'RESTful backend services and structured application logic.',
    items: [
      'Java',
      'Spring Boot',
      'Spring MVC',
      'Spring Data JPA',
      'Hibernate',
      'REST APIs',
      'JSON',
    ],
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'SECURITY',
    description:
      'Authentication and access control for protected applications.',
    items: [
      'Spring Security',
      'JWT',
      'RBAC',
      'Firebase Authentication',
      'User Authentication',
    ],
  },
  {
    number: '04',
    icon: Database,
    title: 'DATABASE',
    description:
      'Relational data models and reliable CRUD workflows.',
    items: [
      'MySQL',
      'SQL',
      'Database Design',
      'CRUD',
      'Firebase Realtime Database',
    ],
  },
  {
    number: '05',
    icon: Layers3,
    title: 'ENGINEERING',
    description:
      'Structured development practices for maintainable applications.',
    items: [
      'OOP',
      'DSA',
      'MVC',
      'DTO Pattern',
      'Exception Handling',
      'SDLC',
      'Agile',
    ],
  },
  {
    number: '06',
    icon: Globe,
    title: 'DEPLOYMENT',
    description:
      'Taking applications from local development to cloud deployment.',
    items: [
      'Git',
      'GitHub',
      'Docker',
      'Docker Compose',
      'Vercel',
      'Render',
      'Maven',
      'VS Code',
    ],
  },
]

/* =========================================================
   EXPERIENCE
========================================================= */

const EXPERIENCE = [
  {
    year: '2026',
    role: 'Web Development Intern',
    company: 'MR Tech Lab',
    location: 'Bengaluru',
    description:
      'Built responsive web pages using HTML, CSS and JavaScript with REST API integration. Developed and deployed frontend applications with focus on UI and user experience.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'REST APIs', 'React.js'],
  },
  {
    year: '2023',
    role: 'AI/ML & Python Intern',
    company: 'KNOWX Innovations',
    location: 'Bengaluru',
    description:
      'Worked on Python-based development activities, data preparation, testing and foundational AI/ML concepts.',
    skills: ['Python', 'Machine Learning', 'Data Preparation'],
  },
]

/* =========================================================
   PROJECTS
========================================================= */

const PROJECTS = [
  {
    number: '01',
    title: 'ShopSphere',
    subtitle: 'FULL-STACK E-COMMERCE PLATFORM',
    description:
      'A complete e-commerce application with customer shopping flows and a role-based admin dashboard.',
    tech: [
      'React.js',
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'MySQL',
      'REST APIs',
    ],
    features: [
      'Product browsing & search',
      'Cart & wishlist',
      'Authentication',
      'Order management',
      'Admin dashboard',
      'CRUD operations',
    ],
    live: 'https://shopsphere-8m8f.vercel.app/',
    backend: 'https://shopsphere-backend-5umn.onrender.com',
    note:
      'START BACKEND FIRST — The Spring Boot backend is hosted on Render and may sleep. Open the backend first, wait for it to wake up, then open the frontend.',
  },
  {
    number: '02',
    title: 'BankSphere',
    subtitle: 'FULL-STACK BANKING SYSTEM',
    description:
      'A secure banking platform built with React and Spring Boot with authentication, account management and protected workflows.',
    tech: [
      'React.js',
      'Java 17',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'MySQL',
      'Docker',
    ],
    features: [
      'User registration & login',
      'JWT authentication',
      'Role-based access',
      'Account management',
      'Transaction workflows',
      'Admin functionality',
    ],
    live: 'https://banksphere-frontend.vercel.app',
    backend: 'https://banksphere-backend-b96m.onrender.com',
    note:
      'START BACKEND FIRST — The Spring Boot backend is hosted on Render and may sleep. Open the backend first, wait for it to wake up, then open the frontend.',
  },
]

/* =========================================================
   CERTIFICATIONS
========================================================= */

const CERTIFICATIONS = [
  {
    title: 'Introduction to Java',
    issuer: 'Infosys Springboard',
  },
  {
    title: 'Java Programming Fundamentals',
    issuer: 'Infosys Springboard',
  },
]

/* =========================================================
   APPROACH
========================================================= */

const APPROACH = [
  {
    icon: Terminal,
    title: 'THINK IN SYSTEMS',
    text:
      'I like understanding how the frontend, API, business logic and database connect instead of treating each layer independently.',
  },
  {
    icon: Cpu,
    title: 'BUILD PRACTICAL',
    text:
      'My projects focus on real application workflows such as authentication, CRUD operations, dashboards, transactions and orders.',
  },
  {
    icon: Sparkles,
    title: 'KEEP IMPROVING',
    text:
      'I continuously improve my Java, React, SQL and software engineering fundamentals while building projects.',
  },
]

/* =========================================================
   CONTACT
========================================================= */

const CONTACTS = [
  {
    icon: Mail,
    label: 'EMAIL',
    value: 'Srinivasrahul838@gmail.com',
    href: 'mailto:Srinivasrahul838@gmail.com',
  },
  {
    icon: Phone,
    label: 'PHONE',
    value: '+91 73376 34886',
    href: 'tel:+917337634886',
  },
  {
    icon: Linkedin,
    label: 'LINKEDIN',
    value: 'linkedin.com/in/rahul-s',
    href: 'https://www.linkedin.com/in/rahul-s-6460b1238',
  },
  {
    icon: Github,
    label: 'GITHUB',
    value: 'github.com/RAHUL2525252525',
    href: 'https://github.com/RAHUL2525252525',
  },
]

/* =========================================================
   TYPEWRITER
========================================================= */

function useTypewriter(words) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index]

    const timer = setTimeout(
      () => {
        if (!deleting) {
          const next = word.slice(0, text.length + 1)
          setText(next)

          if (next === word) {
            setTimeout(() => setDeleting(true), 1100)
          }
        } else {
          const next = word.slice(0, text.length - 1)
          setText(next)

          if (next === '') {
            setDeleting(false)
            setIndex((value) => (value + 1) % words.length)
          }
        }
      },
      deleting ? 45 : 80
    )

    return () => clearTimeout(timer)
  }, [text, index, deleting, words])

  return text
}

/* =========================================================
   REVEAL
========================================================= */

function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current

    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.12,
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}

function Reveal({ children, className = '', delay = 0 }) {
  const [ref, visible] = useReveal()

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

/* =========================================================
   PROJECT
========================================================= */

function ProjectPanel({ project }) {
  return (
    <article className="project-panel">
      <div className="project-number-big">
        {project.number}
      </div>

      <div className="project-panel-content">

        <div className="project-panel-head">
          <div>
            <span className="project-status">
              <span />
              LIVE SYSTEM
            </span>

            <span className="project-type">
              {project.subtitle}
            </span>

            <h3>{project.title}</h3>
          </div>

          <div className="project-symbol">
            <FolderCode size={34} />
          </div>
        </div>

        <p className="project-description">
          {project.description}
        </p>

        <div className="project-data">

          <div className="data-block">
            <span className="data-label">
              TECHNOLOGY
            </span>

            <div className="tech-list">
              {project.tech.map((tech) => (
                <span key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="data-block">
            <span className="data-label">
              FEATURES
            </span>

            <div className="feature-list">
              {project.features.map((feature) => (
                <span key={feature}>
                  <b>+</b>
                  {feature}
                </span>
              ))}
            </div>
          </div>

        </div>

        <div className="wake-warning">
          <div className="wake-icon">
            <Activity size={17} />
          </div>

          <div>
            <strong>RENDER BACKEND</strong>
            <p>{project.note}</p>
          </div>
        </div>

        <div className="project-links">

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="project-live-button"
          >
            OPEN LIVE PROJECT
            <ArrowUpRight size={18} />
          </a>

          <a
            href={project.backend}
            target="_blank"
            rel="noreferrer"
            className="project-backend-button"
          >
            BACKEND
            <ExternalLink size={15} />
          </a>

        </div>

      </div>
    </article>
  )
}

/* =========================================================
   APP
========================================================= */

function App() {

  const typed = useTypewriter([
    'React.js',
    'Java',
    'Spring Boot',
    'MySQL',
    'REST APIs',
  ])

  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('about')

  useEffect(() => {

    const sections = NAV
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-35% 0px -55% 0px',
      }
    )

    sections.forEach((section) =>
      observer.observe(section)
    )

    return () => observer.disconnect()

  }, [])

  const scrollTo = (id) => {

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })

    setMenuOpen(false)
  }

  return (
    <div className="app">

      {/* =====================================================
          VIDEO BACKGROUND
      ===================================================== */}

      <video
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source
          src={VIDEO_BG}
          type="video/mp4"
        />
      </video>

      <div className="video-dark-layer" />
      <div className="video-gradient" />

      <div className="noise" />
      <div className="scanlines" />

      {/* =====================================================
          DESKTOP SIDE NAVIGATION
      ===================================================== */}

      <aside className="side-navigation">

        <button
          className="side-logo"
          onClick={() => scrollTo('about')}
        >
          <span>R</span>
        </button>

        <div className="side-line" />

        <div className="side-nav-links">

          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={
                active === item.id
                  ? 'side-nav-item active'
                  : 'side-nav-item'
              }
            >
              <span>{item.code}</span>
              <i />
              <b>{item.label}</b>
            </button>
          ))}

        </div>

        <div className="side-bottom">
          <span>IN</span>
          <span>01</span>
        </div>

      </aside>

      {/* =====================================================
          MOBILE TOP BAR
      ===================================================== */}

      <header className="mobile-header">

        <button
          className="mobile-logo"
          onClick={() => scrollTo('about')}
        >
          R<span>.DEV</span>
        </button>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>

      </header>

      <div
        className={
          menuOpen
            ? 'mobile-navigation open'
            : 'mobile-navigation'
        }
      >

        {NAV.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
          >
            <span>{item.code}</span>
            {item.label}
            <ArrowUpRight size={16} />
          </button>
        ))}

      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main className="main">

        {/* ===================================================
            HERO
        =================================================== */}

        <section
          id="about"
          className="hero"
        >

          <div className="hero-top-meta">
            <span>
              <Activity size={13} />
              SYSTEM ONLINE
            </span>

            <span>
              BENGALURU / INDIA
            </span>

            <span>
              2026
            </span>
          </div>

          <div className="hero-grid">

            <div className="hero-copy">

              <Reveal>

                <div className="hero-index">
                  00 — SOFTWARE DEVELOPER
                </div>

              </Reveal>

              <Reveal delay={100}>

                <h1>
                  RAHUL
                  <span>S.</span>
                </h1>

              </Reveal>

              <Reveal delay={180}>

                <div className="hero-subtitle">

                  <span>BUILDING WITH</span>

                  <strong>
                    {typed}
                    <i />
                  </strong>

                </div>

              </Reveal>

              <Reveal delay={250}>

                <p className="hero-text">
                  Software Developer and Frontend Developer
                  building responsive, full-stack web
                  applications with React.js, Java,
                  Spring Boot and MySQL.
                </p>

              </Reveal>

              <Reveal delay={320}>

                <div className="hero-actions">

                  <button
                    onClick={() => scrollTo('projects')}
                    className="hero-main-button"
                  >
                    EXPLORE WORK
                    <ArrowUpRight size={18} />
                  </button>

                  <button
                    onClick={() => scrollTo('contact')}
                    className="hero-outline-button"
                  >
                    CONTACT
                  </button>

                </div>

              </Reveal>

            </div>

            {/* =================================================
                PROFILE SYSTEM
            ================================================= */}

            <Reveal
              className="profile-system"
              delay={180}
            >

              <div className="profile-corner corner-tl" />
              <div className="profile-corner corner-tr" />
              <div className="profile-corner corner-bl" />
              <div className="profile-corner corner-br" />

              <div className="profile-header">

                <span>
                  USER_PROFILE
                </span>

                <span className="profile-online">
                  ● ONLINE
                </span>

              </div>

              <div className="profile-photo">

                <div className="photo-grid" />

                <div className="photo-circle" />

                <img
                  src="/rahul-profile.jpg"
                  alt="Rahul S"
                />

                <div className="photo-code">
                  RHL / 2026
                </div>

              </div>

              <div className="profile-details">

                <div>
                  <span>ROLE</span>
                  <strong>
                    FRONTEND / FULL STACK
                  </strong>
                </div>

                <div>
                  <span>CORE</span>
                  <strong>
                    REACT · JAVA · SPRING
                  </strong>
                </div>

              </div>

              <div className="profile-footer">

                <span>
                  <i />
                  AVAILABLE
                </span>

                <span>
                  B.E. CSE
                </span>

              </div>

            </Reveal>

          </div>

          <button
            className="hero-scroll"
            onClick={() => scrollTo('skills')}
          >
            <span>SCROLL / EXPLORE</span>
            <ChevronDown size={16} />
          </button>

        </section>

        {/* ===================================================
            INTRO
        =================================================== */}

        <section className="statement">

          <div className="statement-number">
            01
          </div>

          <Reveal>

            <p>
              I build full-stack applications
              <em> end to end</em> — from React
              interfaces and REST APIs to Spring Boot
              services and MySQL databases.
            </p>

          </Reveal>

          <Command
            className="statement-icon"
            size={40}
          />

        </section>

        {/* ===================================================
            SKILLS
        =================================================== */}

        <section
          id="skills"
          className="section"
        >

          <div className="section-top">

            <span>
              01 / TECHNOLOGY
            </span>

            <span>
              STACK_INDEX
            </span>

          </div>

          <Reveal>

            <div className="section-title">

              <span>MY</span>

              <h2>
                TECHNICAL
                <em> STACK</em>
              </h2>

              <p>
                A practical collection of technologies
                used to design, build and deploy
                applications.
              </p>

            </div>

          </Reveal>

          <div className="terminal-stack">

            <div className="terminal-header">

              <div className="terminal-dots">
                <i />
                <i />
                <i />
              </div>

              <span>
                rahul@developer:~/skills
              </span>

              <span>
                ACTIVE
              </span>

            </div>

            {SKILLS.map((skill, index) => {

              const Icon = skill.icon

              return (
                <Reveal
                  key={skill.title}
                  delay={index * 60}
                >

                  <div className="terminal-row">

                    <div className="terminal-number">
                      {skill.number}
                    </div>

                    <div className="terminal-icon">
                      <Icon size={22} />
                    </div>

                    <div className="terminal-info">

                      <h3>
                        {skill.title}
                      </h3>

                      <p>
                        {skill.description}
                      </p>

                    </div>

                    <div className="terminal-tools">

                      {skill.items.map((item) => (
                        <span key={item}>
                          {item}
                        </span>
                      ))}

                    </div>

                  </div>

                </Reveal>
              )
            })}

          </div>

        </section>

        {/* ===================================================
            EXPERIENCE
        =================================================== */}

        <section
          id="experience"
          className="section experience-section"
        >

          <div className="section-top">

            <span>
              02 / EXPERIENCE
            </span>

            <span>
              TIMELINE
            </span>

          </div>

          <Reveal>

            <div className="section-title">

              <span>WHERE I'VE</span>

              <h2>
                WORKED<span>.</span>
              </h2>

              <p>
                Hands-on development experience combined
                with continuous project building.
              </p>

            </div>

          </Reveal>

          <div className="timeline">

            {EXPERIENCE.map((experience, index) => (

              <Reveal
                key={experience.company}
                delay={index * 100}
              >

                <article className="timeline-item">

                  <div className="timeline-year">
                    {experience.year}
                  </div>

                  <div className="timeline-node">
                    <span />
                  </div>

                  <div className="timeline-content">

                    <div className="timeline-company">
                      {experience.company}
                    </div>

                    <h3>
                      {experience.role}
                    </h3>

                    <div className="timeline-location">
                      <MapPin size={14} />
                      {experience.location}
                    </div>

                    <p>
                      {experience.description}
                    </p>

                    <div className="timeline-skills">

                      {experience.skills.map(
                        (skill) => (
                          <span key={skill}>
                            {skill}
                          </span>
                        )
                      )}

                    </div>

                  </div>

                  <Briefcase
                    className="timeline-icon"
                    size={24}
                  />

                </article>

              </Reveal>

            ))}

          </div>

          <Reveal delay={160}>

            <div className="education-system">

              <div className="education-symbol">
                <GraduationCap size={28} />
              </div>

              <div>

                <span>
                  EDUCATION / 2023 — 2026
                </span>

                <h3>
                  Dr. ACS College of Engineering
                </h3>

                <p>
                  B.E. Computer Science and Engineering
                  · CGPA: 8.00 / 10
                </p>

              </div>

              <strong>
                B.E. CSE
              </strong>

            </div>

          </Reveal>

        </section>

        {/* ===================================================
            PROJECTS
        =================================================== */}

        <section
          id="projects"
          className="section projects-section"
        >

          <div className="section-top">

            <span>
              03 / SELECTED WORK
            </span>

            <span>
              LIVE_SYSTEMS
            </span>

          </div>

          <Reveal>

            <div className="section-title">

              <span>PROJECTS THAT</span>

              <h2>
                ACTUALLY
                <em> SHIP.</em>
              </h2>

              <p>
                Real applications demonstrating frontend,
                backend, database, authentication and
                deployment skills.
              </p>

            </div>

          </Reveal>

          <div className="projects-container">

            {PROJECTS.map((project, index) => (

              <Reveal
                key={project.title}
                delay={index * 120}
              >

                <ProjectPanel
                  project={project}
                />

              </Reveal>

            ))}

          </div>

        </section>

        {/* ===================================================
            CERTIFICATIONS
        =================================================== */}

        <section
          id="certifications"
          className="section"
        >

          <div className="section-top">

            <span>
              04 / CERTIFICATIONS
            </span>

            <span>
              KNOWLEDGE
            </span>

          </div>

          <Reveal>

            <div className="section-title">

              <span>LEARNING</span>

              <h2>
                NEVER
                <em> STOPS.</em>
              </h2>

            </div>

          </Reveal>

          <div className="cert-system">

            {CERTIFICATIONS.map(
              (cert, index) => (

                <Reveal
                  key={cert.title}
                  delay={index * 90}
                >

                  <article className="cert-row">

                    <span className="cert-number">
                      0{index + 1}
                    </span>

                    <Award size={23} />

                    <div>

                      <span>
                        {cert.issuer}
                      </span>

                      <h3>
                        {cert.title}
                      </h3>

                    </div>

                    <ArrowUpRight
                      size={20}
                    />

                  </article>

                </Reveal>

              )
            )}

          </div>

        </section>

        {/* ===================================================
            APPROACH
        =================================================== */}

        <section
          id="approach"
          className="section approach-section"
        >

          <div className="section-top">

            <span>
              05 / APPROACH
            </span>

            <span>
              HOW_I_BUILD
            </span>

          </div>

          <Reveal>

            <div className="section-title">

              <span>MY DEVELOPMENT</span>

              <h2>
                BUILDING
                <em> LOGIC.</em>
              </h2>

            </div>

          </Reveal>

          <div className="approach-system">

            {APPROACH.map(
              (item, index) => {

                const Icon = item.icon

                return (
                  <Reveal
                    key={item.title}
                    delay={index * 90}
                  >

                    <article className="approach-row">

                      <div className="approach-index">
                        0{index + 1}
                      </div>

                      <Icon size={28} />

                      <div>

                        <h3>
                          {item.title}
                        </h3>

                        <p>
                          {item.text}
                        </p>

                      </div>

                      <ArrowUpRight
                        size={19}
                      />

                    </article>

                  </Reveal>
                )
              }
            )}

          </div>

        </section>

        {/* ===================================================
            CONTACT
        =================================================== */}

        <section
          id="contact"
          className="contact-section"
        >

          <div className="contact-command">

            <Reveal>

              <div className="contact-code">
                06 / CONTACT
              </div>

              <div className="contact-prompt">
                <span>&gt;</span>
                LET'S BUILD SOMETHING
              </div>

              <h2>
                GREAT<span>.</span>
              </h2>

              <p>
                I'm currently looking for opportunities
                where I can contribute, learn and build
                production-quality software.
              </p>

            </Reveal>

            <div className="contact-list">

              {CONTACTS.map(
                (contact, index) => {

                  const Icon = contact.icon

                  return (
                    <Reveal
                      key={contact.label}
                      delay={index * 70}
                    >

                      <a
                        href={contact.href}
                        target={
                          contact.label === 'EMAIL' ||
                          contact.label === 'PHONE'
                            ? undefined
                            : '_blank'
                        }
                        rel="noreferrer"
                        className="contact-row"
                      >

                        <Icon size={20} />

                        <div>

                          <span>
                            {contact.label}
                          </span>

                          <strong>
                            {contact.value}
                          </strong>

                        </div>

                        <ArrowUpRight
                          size={19}
                        />

                      </a>

                    </Reveal>
                  )
                }
              )}

            </div>

          </div>

        </section>

        {/* ===================================================
            FOOTER
        =================================================== */}

        <footer className="footer">

          <span>
            RAHUL S. / 2026
          </span>

          <span>
            SOFTWARE DEVELOPER
          </span>

          <span>
            BUILT WITH REACT
          </span>

        </footer>

      </main>

    </div>
  )
}

export default App
