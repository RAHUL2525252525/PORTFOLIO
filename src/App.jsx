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
} from 'lucide-react'

import './index.css'

/* =========================================================
   ONLINE VIDEO
========================================================= */

const VIDEO_BG =
  'https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4'

/* =========================================================
   NAVIGATION
========================================================= */

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Stack' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certs' },
  { id: 'approach', label: 'Approach' },
  { id: 'contact', label: 'Contact' },
]

/* =========================================================
   SKILLS
========================================================= */

const SKILLS = [
  {
    number: '01',
    icon: Code2,
    title: 'Frontend',
    description:
      'Building responsive, component-driven interfaces with modern frontend technologies.',
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
    title: 'Backend',
    description:
      'Developing RESTful backend services and structured application logic.',
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
    title: 'Security',
    description:
      'Implementing authentication and access control for protected applications.',
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
    title: 'Database',
    description:
      'Designing relational data models and implementing reliable CRUD workflows.',
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
    title: 'Engineering',
    description:
      'Applying structured development practices to create maintainable applications.',
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
    title: 'Deployment',
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
    subtitle: 'Full-Stack E-Commerce Platform',
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
    subtitle: 'Full-Stack Banking System',
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
    title: 'Think in Systems',
    text:
      'I like understanding how the frontend, API, business logic and database connect instead of treating each layer independently.',
  },
  {
    icon: Cpu,
    title: 'Build Practical',
    text:
      'My projects focus on real application workflows such as authentication, CRUD operations, dashboards, transactions and orders.',
  },
  {
    icon: Sparkles,
    title: 'Keep Improving',
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
    label: 'Email',
    value: 'Srinivasrahul838@gmail.com',
    href: 'mailto:Srinivasrahul838@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 73376 34886',
    href: 'tel:+917337634886',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/rahul-s',
    href: 'https://www.linkedin.com/in/rahul-s-6460b1238',
  },
  {
    icon: Github,
    label: 'GitHub',
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
   SECTION TITLE
========================================================= */

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <div className="section-eyebrow">
        <span />
        {eyebrow}
      </div>

      <h2>
        {title}
      </h2>

      {text && <p>{text}</p>}
    </div>
  )
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-glow" />

      <div className="project-top">
        <span className="project-number">
          {project.number}
        </span>

        <div className="project-live">
          <span className="live-dot" />
          LIVE
        </div>
      </div>

      <div className="project-main">
        <div>
          <span className="project-category">
            {project.subtitle}
          </span>

          <h3>{project.title}</h3>

          <p>{project.description}</p>
        </div>

        <div className="project-icon">
          <ArrowUpRight size={25} />
        </div>
      </div>

      <div className="project-tech">
        {project.tech.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <div className="project-features">
        {project.features.map((feature) => (
          <span key={feature}>
            <span className="feature-check">+</span>
            {feature}
          </span>
        ))}
      </div>

      <div className="backend-warning">
        <div className="warning-icon">
          <Server size={16} />
        </div>

        <div>
          <strong>BACKEND WAKE-UP REQUIRED</strong>
          <p>{project.note}</p>
        </div>
      </div>

      <div className="project-actions">
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="project-primary"
        >
          Open live project
          <ExternalLink size={16} />
        </a>

        <a
          href={project.backend}
          target="_blank"
          rel="noreferrer"
          className="project-secondary"
        >
          Backend
          <ArrowUpRight size={15} />
        </a>
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
    const sections = NAV.map((item) =>
      document.getElementById(item.id)
    ).filter(Boolean)

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

    sections.forEach((section) => observer.observe(section))

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
          FULL SCREEN VIDEO
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

      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="site-content">

        {/* =================================================
            NAVBAR
        ================================================= */}

        <nav className="floating-nav">

          <button
            className="brand"
            onClick={() => scrollTo('about')}
          >
            <span className="brand-box">R</span>

            <span>
              RAHUL
              <small>.DEV</small>
            </span>
          </button>

          <div className="desktop-nav">
            {NAV.map((item) => (
              <button
                key={item.id}
                className={
                  active === item.id
                    ? 'nav-item active'
                    : 'nav-item'
                }
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <a
            href="mailto:Srinivasrahul838@gmail.com"
            className="nav-hire"
          >
            Hire me
            <ArrowUpRight size={15} />
          </a>

          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X size={21} />
            ) : (
              <Menu size={21} />
            )}
          </button>
        </nav>

        {/* MOBILE NAV */}

        <div
          className={
            menuOpen
              ? 'mobile-nav open'
              : 'mobile-nav'
          }
        >
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
              <ArrowUpRight size={15} />
            </button>
          ))}
        </div>

        {/* =================================================
            HERO
        ================================================= */}

        <header id="about" className="hero-section">

          <div className="hero-left">

            <Reveal>
              <div className="status-pill">
                <span className="status-light" />
                AVAILABLE FOR OPPORTUNITIES
              </div>
            </Reveal>

            <Reveal delay={100}>
              <p className="hero-small">
                SOFTWARE DEVELOPER
                <span>/</span>
                FRONTEND + FULL STACK
              </p>
            </Reveal>

            <Reveal delay={180}>
              <h1>
                Rahul
                <span>S.</span>
              </h1>
            </Reveal>

            <Reveal delay={250}>
              <div className="hero-role">
                <span>Building with</span>

                <strong>
                  {typed}
                  <i />
                </strong>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <p className="hero-description">
                Software Developer and Frontend Developer
                building responsive, full-stack web
                applications with React.js, Java,
                Spring Boot and MySQL.
              </p>
            </Reveal>

            <Reveal delay={380}>
              <div className="hero-buttons">

                <button
                  className="primary-btn"
                  onClick={() => scrollTo('projects')}
                >
                  Explore my work
                  <ArrowUpRight size={17} />
                </button>

                <button
                  className="ghost-btn"
                  onClick={() => scrollTo('contact')}
                >
                  Let's connect
                </button>

              </div>
            </Reveal>

            <Reveal delay={430}>
              <div className="hero-location">
                <MapPin size={15} />
                Bengaluru, India
                <span />
                <GraduationCap size={15} />
                B.E. Computer Science · 2026
              </div>
            </Reveal>

          </div>

          {/* HERO PROFILE */}

          <Reveal
            className="hero-right"
            delay={200}
          >

            <div className="profile-orbit orbit-one" />
            <div className="profile-orbit orbit-two" />

            <div className="profile-card">

              <div className="profile-card-top">
                <span>
                  01 / PROFILE
                </span>

                <span className="profile-live">
                  ● ONLINE
                </span>
              </div>

              <div className="profile-image-area">

                <div className="image-backdrop" />

                <div className="image-ring" />

                <img
                  src="/rahul-profile.jpg"
                  alt="Rahul S"
                />

                <div className="image-tag">
                  RAHUL S
                  <span>DEVELOPER</span>
                </div>

              </div>

              <div className="profile-info">

                <div>
                  <span>FOCUS</span>
                  <strong>
                    Frontend / Full Stack
                  </strong>
                </div>

                <div>
                  <span>CORE</span>
                  <strong>
                    React · Java · Spring
                  </strong>
                </div>

              </div>

              <div className="profile-bottom">
                <span>
                  <span className="mini-dot" />
                  OPEN TO WORK
                </span>

                <span>
                  2026
                </span>
              </div>

            </div>

          </Reveal>

          <button
            className="hero-scroll"
            onClick={() => scrollTo('skills')}
          >
            <span>SCROLL TO EXPLORE</span>
            <ChevronDown size={16} />
          </button>

        </header>

        {/* =================================================
            ABOUT STRIP
        ================================================= */}

        <section className="intro-strip">

          <Reveal>
            <span className="strip-number">
              01
            </span>
          </Reveal>

          <Reveal delay={80}>
            <p>
              I build full-stack applications end to end —
              from React interfaces and REST APIs to
              Spring Boot services and MySQL databases.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <div className="strip-symbol">
              <Sparkles size={20} />
            </div>
          </Reveal>

        </section>

        {/* =================================================
            SKILLS
        ================================================= */}

        <section
          id="skills"
          className="content-section"
        >

          <div className="section-container">

            <Reveal>
              <SectionTitle
                eyebrow="02 / TECHNOLOGY"
                title={
                  <>
                    My technical
                    <span> stack.</span>
                  </>
                }
                text="A practical collection of technologies I use to design, build and deploy web applications."
              />
            </Reveal>

            <div className="skills-grid">

              {SKILLS.map((skill, index) => {

                const Icon = skill.icon

                return (
                  <Reveal
                    key={skill.title}
                    delay={index * 70}
                    className="skill-card"
                  >

                    <div className="skill-card-top">
                      <span>
                        {skill.number}
                      </span>

                      <Icon size={22} />
                    </div>

                    <h3>
                      {skill.title}
                    </h3>

                    <p>
                      {skill.description}
                    </p>

                    <div className="skill-pills">
                      {skill.items.map((item) => (
                        <span key={item}>
                          {item}
                        </span>
                      ))}
                    </div>

                  </Reveal>
                )
              })}

            </div>

          </div>

        </section>

        {/* =================================================
            EXPERIENCE
        ================================================= */}

        <section
          id="experience"
          className="content-section experience-section"
        >

          <div className="section-container">

            <Reveal>
              <SectionTitle
                eyebrow="03 / EXPERIENCE"
                title={
                  <>
                    Where I've
                    <span> worked.</span>
                  </>
                }
                text="Hands-on development experience combined with continuous project building."
              />
            </Reveal>

            <div className="experience-list">

              {EXPERIENCE.map((experience, index) => (
                <Reveal
                  key={experience.company}
                  delay={index * 100}
                  className="experience-card"
                >

                  <div className="experience-year">
                    {experience.year}
                  </div>

                  <div className="experience-content">

                    <span className="experience-label">
                      {experience.company}
                    </span>

                    <h3>
                      {experience.role}
                    </h3>

                    <div className="experience-location">
                      <MapPin size={14} />
                      {experience.location}
                    </div>

                    <p>
                      {experience.description}
                    </p>

                    <div className="experience-tags">
                      {experience.skills.map((skill) => (
                        <span key={skill}>
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>

                  <div className="experience-arrow">
                    <Briefcase size={22} />
                  </div>

                </Reveal>
              ))}

            </div>

            <Reveal
              delay={160}
              className="education-card"
            >

              <div className="education-icon">
                <GraduationCap size={25} />
              </div>

              <div>
                <span>
                  EDUCATION
                </span>

                <h3>
                  Dr. ACS College of Engineering
                </h3>

                <p>
                  B.E. Computer Science and Engineering
                  · CGPA: 8.00 / 10
                </p>

                <small>
                  2023 — 2026 · Bengaluru
                </small>
              </div>

            </Reveal>

          </div>

        </section>

        {/* =================================================
            PROJECTS
        ================================================= */}

        <section
          id="projects"
          className="content-section projects-section"
        >

          <div className="section-container">

            <Reveal>
              <SectionTitle
                eyebrow="04 / SELECTED WORK"
                title={
                  <>
                    Projects that
                    <span> actually ship.</span>
                  </>
                }
                text="Real applications demonstrating frontend, backend, database, authentication and deployment skills."
              />
            </Reveal>

            <div className="projects-list">

              {PROJECTS.map((project, index) => (
                <Reveal
                  key={project.title}
                  delay={index * 130}
                >
                  <ProjectCard
                    project={project}
                  />
                </Reveal>
              ))}

            </div>

          </div>

        </section>

        {/* =================================================
            CERTIFICATIONS
        ================================================= */}

        <section
          id="certifications"
          className="content-section"
        >

          <div className="section-container">

            <Reveal>
              <SectionTitle
                eyebrow="05 / CERTIFICATIONS"
                title={
                  <>
                    Learning
                    <span> never stops.</span>
                  </>
                }
                text="Certifications supporting my Java and programming fundamentals."
              />
            </Reveal>

            <div className="cert-grid">

              {CERTIFICATIONS.map((cert, index) => (
                <Reveal
                  key={cert.title}
                  delay={index * 100}
                  className="cert-card"
                >

                  <div className="cert-icon">
                    <Award size={22} />
                  </div>

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
                    className="cert-arrow"
                  />

                </Reveal>
              ))}

            </div>

          </div>

        </section>

        {/* =================================================
            APPROACH
        ================================================= */}

        <section
          id="approach"
          className="content-section approach-section"
        >

          <div className="section-container">

            <Reveal>
              <SectionTitle
                eyebrow="06 / APPROACH"
                title={
                  <>
                    How I
                    <span> build.</span>
                  </>
                }
                text="My development approach is simple: understand the problem, build the right structure and keep improving the result."
              />
            </Reveal>

            <div className="approach-grid">

              {APPROACH.map((item, index) => {

                const Icon = item.icon

                return (
                  <Reveal
                    key={item.title}
                    delay={index * 90}
                    className="approach-card"
                  >

                    <span className="approach-number">
                      0{index + 1}
                    </span>

                    <Icon size={25} />

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.text}
                    </p>

                  </Reveal>
                )
              })}

            </div>

          </div>

        </section>

        {/* =================================================
            CONTACT
        ================================================= */}

        <section
          id="contact"
          className="contact-section"
        >

          <div className="contact-container">

            <Reveal>

              <div className="contact-eyebrow">
                <span />
                07 / CONTACT
              </div>

              <h2>
                Let's build
                <br />
                something <em>great.</em>
              </h2>

              <p>
                I'm currently looking for opportunities
                where I can contribute, learn and build
                production-quality software.
              </p>

            </Reveal>

            <div className="contact-grid">

              {CONTACTS.map((contact, index) => {

                const Icon = contact.icon

                return (
                  <Reveal
                    key={contact.label}
                    delay={index * 70}
                  >

                    <a
                      href={contact.href}
                      target={
                        contact.label === 'Email' ||
                        contact.label === 'Phone'
                          ? undefined
                          : '_blank'
                      }
                      rel="noreferrer"
                      className="contact-card"
                    >

                      <div className="contact-icon">
                        <Icon size={20} />
                      </div>

                      <div>
                        <span>
                          {contact.label}
                        </span>

                        <strong>
                          {contact.value}
                        </strong>
                      </div>

                      <ArrowUpRight
                        size={18}
                        className="contact-arrow"
                      />

                    </a>

                  </Reveal>
                )
              })}

            </div>

          </div>

        </section>

        {/* =================================================
            FOOTER
        ================================================= */}

        <footer className="footer">

          <span>
            © 2026 Rahul S.
          </span>

          <span>
            SOFTWARE DEVELOPER
          </span>

          <span>
            BUILT WITH REACT
          </span>

        </footer>

      </div>
    </div>
  )
}

export default App
