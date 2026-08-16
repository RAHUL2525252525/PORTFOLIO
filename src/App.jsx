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
  CheckCircle2,
  Code2,
  Layers,
  ShieldCheck,
  Database,
  Wrench,
  ExternalLink,
  Sparkles,
  Terminal,
  ChevronDown,
} from 'lucide-react'
import './index.css'

const STACK_ROTATE = [
  'Java',
  'Spring Boot',
  'React.js',
  'MySQL',
  'REST APIs',
]

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Work' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'approach', label: 'Approach' },
  { id: 'contact', label: 'Contact' },
]

const SKILL_GROUPS = [
  {
    cat: 'Languages',
    items: ['Java', 'JavaScript (ES6+)', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    cat: 'Frontend',
    items: [
      'React.js',
      'Axios',
      'HTML5',
      'CSS3',
      'JSX',
      'Responsive Design',
      'Flexbox',
      'CSS Grid',
    ],
  },
  {
    cat: 'Backend',
    items: [
      'Java',
      'Spring Boot',
      'Spring MVC',
      'Spring Data JPA',
      'Hibernate',
      'REST API Design',
    ],
  },
  {
    cat: 'Security',
    items: [
      'Spring Security',
      'JWT Authentication',
      'Role-Based Access Control',
      'OAuth Concepts',
    ],
  },
  {
    cat: 'Database',
    items: [
      'MySQL',
      'SQL',
      'Database Design',
      'Normalization',
      'Relational Data Modeling',
    ],
  },
  {
    cat: 'Architecture',
    items: [
      'Controller / Service / Repository',
      'MVC',
      'Exception Handling',
      'DTO Pattern',
    ],
  },
  {
    cat: 'Testing & Practices',
    items: [
      'JUnit 5',
      'Mockito',
      'Postman',
      'Agile / Scrum',
      'Code Reviews',
      'Unit Testing',
    ],
  },
  {
    cat: 'Cloud & Tools',
    items: [
      'Docker',
      'Docker Compose',
      'Maven',
      'Git',
      'GitHub',
      'CI/CD Basics',
      'Vercel',
      'Render',
      'Aiven',
    ],
  },
  {
    cat: 'Core CS',
    items: [
      'Data Structures & Algorithms',
      'OOP',
      'DBMS',
      'Software Engineering Principles',
    ],
  },
]

const APPROACH = [
  {
    icon: Code2,
    title: 'Frontend Presentation',
    subtitle: 'Client',
    items: [
      'React.js',
      'JSX',
      'HTML5',
      'CSS3',
      'Flexbox / Grid',
      'Vite',
    ],
    blurb:
      'Responsive interfaces and reusable component structure, built for consistent behaviour across breakpoints.',
  },
  {
    icon: Layers,
    title: 'Backend Logic & APIs',
    subtitle: 'Service Layer',
    items: [
      'Java',
      'Spring Boot',
      'Spring MVC',
      'REST APIs',
      'Spring Data JPA',
      'Hibernate',
    ],
    blurb:
      'Controller → Service → Repository layering, exposing REST endpoints consumed directly by the frontend.',
  },
  {
    icon: ShieldCheck,
    title: 'Auth & Access Control',
    subtitle: 'Security',
    items: [
      'Spring Security',
      'JWT Authentication',
      'Role-Based Access Control',
    ],
    blurb:
      'Stateless authentication and route-level authorization for protected user and admin operations.',
  },
  {
    icon: Database,
    title: 'Data Persistence',
    subtitle: 'Database',
    items: ['MySQL', 'Database Design', 'CRUD Operations'],
    blurb:
      'Relational schema design across users, roles, accounts, products, and orders.',
  },
  {
    icon: Wrench,
    title: 'Build & Deployment',
    subtitle: 'Infrastructure',
    items: [
      'Git',
      'GitHub',
      'Docker',
      'Docker Compose',
      'AWS EC2',
      'Vercel',
      'Render',
    ],
    blurb:
      'Version-controlled workflows, containerized environments, and cloud-hosted delivery.',
  },
]

const EXPERIENCE = [
  {
    role: 'Web Development Intern',
    company: 'MR Tech Lab',
    time: 'Jan 2026 – May 2026',
    place: 'Bengaluru',
    points: [
      'Built responsive, cross-browser user interfaces using HTML, CSS, and JavaScript, translating design requirements into functional web pages.',
      'Integrated Firebase backend services, including Google Authentication, to implement secure user sign-in and session management.',
      'Collaborated with cross-functional teammates in an Agile, Git-based workflow to implement, test, and ship UI features on schedule.',
    ],
  },
]

const EDUCATION = [
  {
    school: 'Dr. ACS College of Engineering',
    degree: 'B.E. in Computer Science and Engineering · CGPA: 8.00 / 10',
    time: '2023 – 2026 · Bengaluru',
  },
]

const PROJECTS = [
  {
    id: '01',
    title: 'ShopSphere',
    tag: 'Full-Stack E-Commerce Web Application',
    tech: [
      'Java 17',
      'Spring Boot 3',
      'React.js',
      'Spring Data JPA',
      'MySQL',
      'REST APIs',
    ],
    highlights: [
      'Architected a full-stack e-commerce platform spanning browsing, search, cart, wishlist, checkout, and order management.',
      'Implemented role-based access control (ADMIN / CUSTOMER) to separate inventory and order-management operations from customer-facing flows.',
      'Designed and delivered 15+ REST API endpoints connecting the React.js frontend to the Spring Boot backend, with consistent request validation and error handling.',
      'Built a component-based, responsive UI with client-side form validation and centralized state management across cart, checkout, and order workflows.',
    ],
    note:
      'START BACKEND FIRST: The Spring Boot backend is hosted on Render and may sleep on the free tier. Open the backend first, wait for it to wake up, then open the frontend.',
    links: [
      {
        label: 'Live site',
        href: 'https://shopsphere-8m8f.vercel.app/',
      },
      {
        label: 'Backend API',
        href: 'https://shopsphere-backend-5umn.onrender.com',
      },
    ],
    featured: true,
  },
  {
    id: '02',
    title: 'BankSphere',
    tag: 'Full-Stack Banking Application',
    tech: [
      'Java 17',
      'Spring Boot 3',
      'Spring Security',
      'JWT',
      'React.js',
      'MySQL',
      'Docker',
    ],
    highlights: [
      'Developed a secure banking backend supporting user registration, login, account management, and transaction workflows.',
      'Implemented stateless JWT authentication with Spring Security, enforcing role-based access control across user, admin, and super-admin permission levels.',
      'Designed a normalized MySQL schema with 8+ entities and relational integrity constraints to prevent orphaned records.',
      'Containerized the full stack with Docker Compose and wrote JUnit 5 / Mockito unit tests covering transaction and authentication edge cases.',
    ],
    note:
      'START BACKEND FIRST: The Spring Boot backend is hosted on Render and may sleep on the free tier. Open the backend first and wait for it to wake up before opening the frontend.',
    links: [
      {
        label: 'Live site',
        href: 'https://banksphere-frontend.vercel.app',
      },
      {
        label: 'Backend API',
        href: 'https://banksphere-backend-b96m.onrender.com',
      },
    ],
    featured: true,
  },
]

const CERTS = [
  {
    name: 'Introduction to Java',
    by: 'Infosys Springboard',
  },
  {
    name: 'Java Programming Fundamentals',
    by: 'Infosys Springboard',
  },
]

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
    value: 'github.com/rahul-s',
    href: 'https://github.com/',
  },
]

function useTypewriter(
  words,
  typeSpeed = 65,
  deleteSpeed = 32,
  pause = 1400
) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timer

    if (!deleting && text === current) {
      timer = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
    } else {
      timer = setTimeout(
        () => {
          setText((value) =>
            deleting
              ? current.slice(0, value.length - 1)
              : current.slice(0, value.length + 1)
          )
        },
        deleting ? deleteSpeed : typeSpeed
      )
    }

    return () => clearTimeout(timer)
  }, [
    text,
    deleting,
    wordIndex,
    words,
    typeSpeed,
    deleteSpeed,
    pause,
  ])

  return text
}

function useReveal() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current

    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
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

  return [ref, inView]
}

function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}) {
  const [ref, inView] = useReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'in' : ''} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Tag>
  )
}

function useActiveSection() {
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

  return active
}

function useScrolledPast(threshold = 30) {
  const [past, setPast] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setPast(window.scrollY > threshold)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [threshold])

  return past
}

function SectionLabel({ index, label }) {
  return (
    <div className="section-label">
      <span className="section-index">{index}</span>
      <span className="section-name">{label}</span>
      <span className="section-rule" />
    </div>
  )
}

function ProfileCard() {
  const rows = [
    {
      icon: MapPin,
      k: 'Location',
      v: 'Bengaluru, India',
    },
    {
      icon: Briefcase,
      k: 'Focus',
      v: 'Java · Spring Boot · React',
    },
    {
      icon: GraduationCap,
      k: 'Education',
      v: 'B.E. Computer Science · 2026',
    },
  ]

  return (
    <div className="profile-console">
      <div className="console-top">
        <div className="window-dots">
          <span />
          <span />
          <span />
        </div>

        <span className="console-title">
          rahul.dev / profile
        </span>

        <span className="console-status">
          ONLINE
        </span>
      </div>

      <div className="console-screen">
        <div className="console-grid" />

        <div className="profile-terminal">
          <span className="terminal-comment">
            // candidate_profile
          </span>

          <p className="console-command">
            $ whoami
          </p>

          <h3>
            Rahul S<span>.</span>
          </h3>

          <p className="console-role">
            Software Engineer · Full Stack Developer
          </p>

          <div className="console-status-large">
            <span className="status-dot" />
            Available for opportunities
          </div>

          <div className="console-divider" />

          <div className="console-info">
            {rows.map((row) => {
              const Icon = row.icon

              return (
                <div
                  className="console-info-row"
                  key={row.k}
                >
                  <div className="console-icon">
                    <Icon size={15} />
                  </div>

                  <div>
                    <span>{row.k}</span>
                    <strong>{row.v}</strong>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="console-stack">
            <span>STACK</span>

            <div>
              {STACK_ROTATE.slice(0, 4).map((item) => (
                <b key={item}>{item}</b>
              ))}
            </div>
          </div>
        </div>

        <div className="console-corner">
          2026
        </div>
      </div>
    </div>
  )
}

function App() {
  const typed = useTypewriter(STACK_ROTATE)
  const active = useActiveSection()
  const scrolled = useScrolledPast()

  const scrollTo = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
  }

  return (
    <div className="app">
      <div className="paper-grid" />
      <div className="noise" />
      <div className="orange-orb orb-one" />
      <div className="mint-orb orb-two" />

      <nav
        className={`site-nav ${
          scrolled ? 'scrolled' : ''
        }`}
      >
        <div className="nav-inner">
          <button
            className="logo-btn"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }
          >
            <span className="logo-mark">R</span>

            <span className="logo-text">
              RAHUL<span>.DEV</span>
            </span>
          </button>

          <div className="tab-bar">
            {NAV.map((item) => (
              <button
                key={item.id}
                className={`tab ${
                  active === item.id ? 'active' : ''
                }`}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <a
            className="nav-contact"
            href="mailto:Srinivasrahul838@gmail.com"
          >
            Let's talk
            <ArrowUpRight size={15} />
          </a>
        </div>
      </nav>

      <header id="hero" className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <Reveal>
              <div className="hero-index">
                <span>00</span>
                <i />
                PORTFOLIO / 2026
              </div>
            </Reveal>

            <Reveal delay={80}>
              <p className="hero-kicker">
                <span className="kicker-line" />
                SOFTWARE ENGINEER / FULL STACK DEVELOPER
              </p>
            </Reveal>

            <Reveal delay={130}>
              <h1 className="hero-name">
                Rahul
                <em>S.</em>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <div className="hero-role-row">
                <span>Full Stack Developer</span>
                <span className="role-arrow">↗</span>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="hero-stack">
                <span>Currently building with</span>
                <strong>{typed}</strong>
                <span className="type-cursor" />
              </div>
            </Reveal>

            <Reveal delay={260}>
              <p className="hero-desc">
                Full stack developer skilled in Java, Spring
                Boot, React.js, REST APIs, and MySQL — with
                hands-on experience building secure,
                responsive web applications. Strong in backend
                API development, frontend integration,
                database management, and authentication.
              </p>
            </Reveal>

            <Reveal delay={310}>
              <div className="hero-cta">
                <button
                  className="button-black"
                  onClick={() => scrollTo('projects')}
                >
                  View selected work
                  <ArrowUpRight size={17} />
                </button>

                <button
                  className="button-outline"
                  onClick={() => scrollTo('contact')}
                >
                  Contact me
                </button>
              </div>
            </Reveal>

            <Reveal delay={350}>
              <div className="hero-meta">
                <span>
                  <GraduationCap size={15} />
                  B.E. Computer Science
                </span>

                <span>
                  <MapPin size={15} />
                  Bengaluru, India
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal
            delay={160}
            className="hero-profile"
          >
            <ProfileCard />
          </Reveal>
        </div>

        <button
          className="scroll-indicator"
          onClick={() => scrollTo('about')}
          aria-label="Scroll to about"
        >
          <span>SCROLL</span>
          <ChevronDown size={15} />
        </button>
      </header>

      <main>
        <section
          id="about"
          className="section about-section"
        >
          <div className="section-container">
            <Reveal>
              <SectionLabel
                index="01"
                label="About"
              />
            </Reveal>

            <div className="about-layout">
              <Reveal delay={80}>
                <h2 className="massive-title">
                  Frontend-focused,
                  <br />
                  <span>shipped full stack.</span>
                </h2>
              </Reveal>

              <Reveal delay={140}>
                <div className="about-copy">
                  <span className="copy-number">
                    / 01
                  </span>

                  <p>
                    I build full-stack web applications end to end —
                    <strong> React</strong> interfaces wired to
                    <strong> Spring Boot</strong> services, with
                    data modelled in <strong>MySQL</strong> and
                    protected by <strong>Spring Security</strong>{' '}
                    and JWT. I care about how a request actually
                    moves through a system, and I write it in
                    clean, testable layers rather than one large
                    tangle.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="fact-grid">
              {[
                {
                  label: 'Core Stack',
                  value: 'Java · Spring Boot · React',
                  number: 'A',
                },
                {
                  label: 'Projects Shipped',
                  value: '2 live full-stack applications',
                  number: 'B',
                },
                {
                  label: 'Based In',
                  value: 'Bengaluru, India',
                  number: 'C',
                },
              ].map((fact, index) => (
                <Reveal
                  key={fact.label}
                  delay={index * 70}
                  className="fact-card"
                >
                  <span className="fact-letter">
                    {fact.number}
                  </span>

                  <span className="fact-label">
                    {fact.label}
                  </span>

                  <strong>{fact.value}</strong>

                  <ArrowUpRight
                    className="fact-arrow"
                    size={18}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-container">
            <Reveal>
              <SectionLabel
                index="02"
                label="Skills"
              />
            </Reveal>

            <Reveal delay={80}>
              <div className="section-heading-row">
                <h2 className="massive-title">
                  Technical
                  <span> inventory.</span>
                </h2>

                <p>
                  A practical stack focused on building,
                  securing and deploying full-stack
                  applications.
                </p>
              </div>
            </Reveal>

            <div className="skills-table">
              {SKILL_GROUPS.map((group, index) => (
                <Reveal
                  key={group.cat}
                  delay={index * 35}
                  className="skill-row"
                >
                  <span className="skill-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <h3>{group.cat}</h3>

                  <div className="skill-list">
                    {group.items.map((skill) => (
                      <span key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>

                  <ArrowUpRight
                    className="skill-arrow"
                    size={17}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="section experience-section"
        >
          <div className="section-container">
            <Reveal>
              <SectionLabel
                index="03"
                label="Experience"
              />
            </Reveal>

            <Reveal delay={80}>
              <h2 className="massive-title">
                Experience &
                <span> education.</span>
              </h2>
            </Reveal>

            <div className="experience-layout">
              <div className="timeline-rail">
                <span>2026</span>
                <div className="rail-line">
                  <i />
                </div>
                <span>NOW</span>
              </div>

              <div className="experience-content">
                {EXPERIENCE.map((experience) => (
                  <Reveal
                    key={experience.company}
                    className="experience-block"
                  >
                    <div className="experience-top">
                      <div>
                        <span className="eyebrow">
                          EXPERIENCE
                        </span>

                        <h3>
                          {experience.role}
                        </h3>

                        <p>
                          {experience.company} ·{' '}
                          {experience.place}
                        </p>
                      </div>

                      <span className="year-tag">
                        {experience.time}
                      </span>
                    </div>

                    <ul>
                      {experience.points.map((point) => (
                        <li key={point}>
                          <CheckCircle2 size={15} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                ))}

                <Reveal
                  delay={100}
                  className="education-block"
                >
                  <div className="education-icon">
                    <GraduationCap size={22} />
                  </div>

                  <div>
                    <span className="eyebrow">
                      EDUCATION
                    </span>

                    <h3>
                      {EDUCATION[0].school}
                    </h3>

                    <p>
                      {EDUCATION[0].degree}
                    </p>

                    <small>
                      {EDUCATION[0].time}
                    </small>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="section projects-section"
        >
          <div className="section-container">
            <Reveal>
              <SectionLabel
                index="04"
                label="Selected Work"
              />
            </Reveal>

            <Reveal delay={80}>
              <div className="section-heading-row">
                <h2 className="massive-title">
                  Projects that
                  <span> ship.</span>
                </h2>

                <p>
                  Full-stack applications demonstrating
                  frontend, backend, security and database
                  integration.
                </p>
              </div>
            </Reveal>

            <div className="projects">
              {PROJECTS.map((project, index) => (
                <Reveal
                  key={project.id}
                  delay={index * 100}
                  className={`project ${
                    index === 0 ? 'project-main' : ''
                  }`}
                >
                  <div className="project-number">
                    {project.id}
                  </div>

                  <div className="project-header">
                    <div>
                      <span className="project-tag">
                        {project.tag}
                      </span>

                      <h3>{project.title}</h3>
                    </div>

                    {project.featured && (
                      <span className="featured">
                        FEATURED
                      </span>
                    )}
                  </div>

                  <div className="project-body">
                    <div className="project-description">
                      <span className="project-label">
                        WHAT I BUILT
                      </span>

                      <ul>
                        {project.highlights.map(
                          (highlight) => (
                            <li key={highlight}>
                              <span />
                              {highlight}
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <div className="project-side">
                      <span className="project-label">
                        STACK
                      </span>

                      <div className="project-tech">
                        {project.tech.map((tech) => (
                          <span key={tech}>
                            {tech}
                          </span>
                        ))}
                      </div>

                      {project.note && (
                        <p className="project-note">
                          {project.note}
                        </p>
                      )}

                      {project.links && (
                        <div className="project-links">
                          {project.links.map((link) => (
                            <a
                              key={link.label}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {link.label}
                              <ExternalLink
                                size={14}
                              />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="certifications"
          className="section"
        >
          <div className="section-container">
            <Reveal>
              <SectionLabel
                index="05"
                label="Certifications"
              />
            </Reveal>

            <Reveal delay={80}>
              <h2 className="massive-title">
                Certifications
                <span> & learning.</span>
              </h2>
            </Reveal>

            <div className="certifications">
              {CERTS.map((certification, index) => (
                <Reveal
                  key={certification.name}
                  delay={index * 80}
                  className="certification"
                >
                  <span className="cert-index">
                    0{index + 1}
                  </span>

                  <div className="cert-icon">
                    <Award size={20} />
                  </div>

                  <div>
                    <h3>
                      {certification.name}
                    </h3>

                    <p>{certification.by}</p>
                  </div>

                  <CheckCircle2
                    className="cert-check"
                    size={19}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="approach"
          className="section architecture-section"
        >
          <div className="section-container">
            <Reveal>
              <SectionLabel
                index="06"
                label="Approach"
              />
            </Reveal>

            <Reveal delay={80}>
              <div className="section-heading-row">
                <h2 className="massive-title">
                  How I structure
                  <span> an application.</span>
                </h2>

                <p>
                  Client to service to schema — the layers
                  a request passes through, and what runs
                  each one.
                </p>
              </div>
            </Reveal>

            <div className="architecture">
              {APPROACH.map((layer, index) => {
                const Icon = layer.icon

                return (
                  <Reveal
                    key={layer.title}
                    delay={index * 70}
                    className="architecture-node"
                  >
                    <div className="node-top">
                      <span>
                        0{index + 1}
                      </span>

                      <Icon size={20} />
                    </div>

                    <span className="node-subtitle">
                      {layer.subtitle}
                    </span>

                    <h3>{layer.title}</h3>

                    <p>{layer.blurb}</p>

                    <div className="node-items">
                      {layer.items.map((item) => (
                        <span key={item}>
                          {item}
                        </span>
                      ))}
                    </div>

                    {index < APPROACH.length - 1 && (
                      <div className="architecture-arrow">
                        →
                      </div>
                    )}
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="section contact-section"
        >
          <div className="section-container">
            <Reveal>
              <SectionLabel
                index="07"
                label="Contact"
              />
            </Reveal>

            <div className="contact-terminal">
              <div className="terminal-header">
                <div className="window-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <span>
                  rahul@developer:~
                </span>

                <Terminal size={15} />
              </div>

              <div className="terminal-content">
                <Reveal>
                  <span className="terminal-line">
                    $ ./start-conversation
                  </span>

                  <h2>
                    Let's build
                    <span> something.</span>
                  </h2>

                  <p>
                    Open to Full Stack, Java/Spring Boot,
                    and React roles. Based in Bengaluru,
                    India.
                  </p>

                  <a
                    className="terminal-button"
                    href="mailto:Srinivasrahul838@gmail.com"
                  >
                    Start a conversation
                    <ArrowUpRight size={18} />
                  </a>
                </Reveal>
              </div>
            </div>

            <div className="contact-grid">
              {CONTACTS.map((contact, index) => {
                const Icon = contact.icon

                return (
                  <Reveal
                    key={contact.label}
                    delay={index * 60}
                    className="contact-item"
                  >
                    <a
                      href={contact.href}
                      target={
                        contact.href.startsWith('http')
                          ? '_blank'
                          : undefined
                      }
                      rel="noopener noreferrer"
                    >
                      <span className="contact-icon">
                        <Icon size={17} />
                      </span>

                      <span>
                        <small>
                          {contact.label}
                        </small>

                        <strong>
                          {contact.value}
                        </strong>
                      </span>

                      <ArrowUpRight
                        className="contact-arrow"
                        size={16}
                      />
                    </a>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <span>© 2026 Rahul S</span>

          <span>
            Full Stack Developer · Bengaluru, India
          </span>

          <span className="footer-code">
            BUILD / 2026
          </span>
        </div>
      </footer>
    </div>
  )
}

export default App
