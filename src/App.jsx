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
  'React.js',
  'Spring Boot',
  'MySQL',
  'REST APIs',
  'Spring Security',
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
    items: ['Java', 'JavaScript (ES6)', 'SQL'],
  },
  {
    cat: 'Frontend',
    items: [
      'React.js',
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
      'REST APIs',
      'Spring Data JPA',
      'Hibernate',
    ],
  },
  {
    cat: 'Database',
    items: [
      'MySQL',
      'SQL',
      'Database Design',
      'CRUD Operations',
    ],
  },
  {
    cat: 'Security',
    items: [
      'Spring Security',
      'JWT Authentication',
      'Role-Based Access Control',
    ],
  },
  {
    cat: 'Testing',
    items: ['JUnit 5', 'Mockito'],
  },
  {
    cat: 'Core CS',
    items: [
      'OOP',
      'Data Structures & Algorithms',
      'DBMS',
      'Agile Development',
    ],
  },
  {
    cat: 'Tools & Deployment',
    items: [
      'Git',
      'GitHub',
      'VS Code',
      'IntelliJ IDEA',
      'Vite',
      'Docker',
      'Docker Compose',
      'AWS EC2',
      'Vercel',
      'Render',
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
    items: [
      'MySQL',
      'Database Design',
      'CRUD Operations',
    ],
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
    time: '2026',
    place: 'Bengaluru',
    points: [
      'Gained hands-on exposure to full-stack development using HTML, CSS, JavaScript, React.js, Java, Spring Boot, REST APIs, and MySQL.',
      'Developed responsive frontend interfaces and integrated REST APIs with backend services for dynamic data handling.',
      'Practiced database integration, authentication, CRUD operations, Git-based development, and application deployment.',
    ],
  },
]

const EDUCATION = [
  {
    school: 'Dr. ACS College of Engineering',
    degree: 'B.E. in Computer Science and Engineering',
    time: '2023 – 2026 · Bengaluru',
  },
]

const PROJECTS = [
  {
    id: '01',
    title: 'ShopSphere',
    tag: 'Full-Stack E-Commerce Application',
    tech: [
      'React.js',
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'REST APIs',
      'MySQL',
      'Git',
    ],
    highlights: [
      'Built an e-commerce platform supporting product browsing, search, cart, wishlist, checkout, and order management.',
      'Developed role-based admin functionality for managing products, inventory, users, and orders.',
      'Integrated Spring Boot REST APIs with React.js and MySQL for end-to-end data management.',
      'Implemented authentication and secure order-management workflows.',
    ],
    note:
      'Backend is on Render’s free tier — first request can take 30–60s to wake it up.',
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
    title: 'Online Banking System',
    tag: 'Full-Stack Banking Application',
    tech: [
      'React.js',
      'Java',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'Spring Data JPA',
      'MySQL',
      'Docker',
    ],
    highlights: [
      'Developed a secure full-stack banking application with registration, login, account management, and transaction workflows.',
      'Built REST APIs using Spring Boot and Spring Data JPA with a layered Controller, Service, and Repository architecture.',
      'Implemented JWT authentication and role-based access control using Spring Security for protected user and admin operations.',
      'Designed MySQL database entities and relationships for users, roles, accounts, and transactions.',
      'Containerized the application environment using Docker and Docker Compose.',
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
        threshold: 0.08,
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
      <span className="section-num">{index}</span>
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
      v: 'B.E. Computer Science, 2026',
    },
  ]

  return (
    <div className="profile-terminal">
      <div className="terminal-head">
        <div className="terminal-dots">
          <span />
          <span />
          <span />
        </div>

        <span className="terminal-file">
          rahul.dev
        </span>

        <span className="terminal-status">
          ONLINE
        </span>
      </div>

      <div className="terminal-body">
        <div className="code-line">
          <span className="code-number">01</span>
          <span className="code-purple">const</span>
          <span className="code-white"> developer</span>
          <span className="code-muted"> = </span>
          <span className="code-blue">{'{'}</span>
        </div>

        <div className="code-line indent">
          <span className="code-number">02</span>
          <span className="code-key">name:</span>
          <span className="code-green"> 'Rahul S.'</span>
        </div>

        <div className="code-line indent">
          <span className="code-number">03</span>
          <span className="code-key">role:</span>
          <span className="code-green">
            {' '}
            'Full Stack Developer'
          </span>
        </div>

        <div className="code-line indent">
          <span className="code-number">04</span>
          <span className="code-key">stack:</span>
          <span className="code-blue"> [</span>
        </div>

        <div className="code-line indent-more">
          <span className="code-number">05</span>
          <span className="code-green">'Java'</span>
          <span className="code-muted">, </span>
          <span className="code-green">
            'Spring Boot'
          </span>
        </div>

        <div className="code-line indent-more">
          <span className="code-number">06</span>
          <span className="code-green">'React.js'</span>
          <span className="code-muted">, </span>
          <span className="code-green">'MySQL'</span>
        </div>

        <div className="code-line indent">
          <span className="code-number">07</span>
          <span className="code-blue">]</span>
        </div>

        <div className="code-line">
          <span className="code-number">08</span>
          <span className="code-blue">{'}'}</span>
        </div>

        <div className="terminal-divider" />

        <div className="profile-info">
          <div className="profile-title-row">
            <div>
              <span className="profile-mini">
                CANDIDATE / 2026
              </span>

              <h3>
                Rahul <span>S.</span>
              </h3>

              <p>
                Java · Spring Boot · React
              </p>
            </div>

            <Sparkles size={19} />
          </div>

          <div className="availability">
            <span className="availability-dot" />
            Available for opportunities
          </div>

          <div className="profile-rows">
            {rows.map((row) => {
              const Icon = row.icon

              return (
                <div
                  key={row.k}
                  className="profile-row"
                >
                  <div className="profile-row-icon">
                    <Icon size={14} />
                  </div>

                  <div>
                    <span className="profile-row-label">
                      {row.k}
                    </span>

                    <span className="profile-row-value">
                      {row.v}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="profile-links">
            {CONTACTS.map((contact) => {
              const Icon = contact.icon

              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={
                    contact.href.startsWith('http')
                      ? '_blank'
                      : undefined
                  }
                  rel="noopener noreferrer"
                  aria-label={contact.label}
                >
                  <Icon size={16} />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  const typed = useTypewriter(STACK_ROTATE)
  const active = useActiveSection()
  const scrolled = useScrolledPast()
  const [mobileOpen, setMobileOpen] = useState(false)

  const scrollTo = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })

    setMobileOpen(false)
  }

  return (
    <div className="app">
      <div className="noise" />
      <div className="grid-background" />

      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <div className="aurora aurora-three" />

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
              Rahul<span>.dev</span>
            </span>
          </button>

          <div
            className={`nav-links ${
              mobileOpen ? 'open' : ''
            }`}
          >
            {NAV.map((item) => (
              <button
                key={item.id}
                className={
                  active === item.id ? 'active' : ''
                }
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
            <span>Let's talk</span>
            <ArrowUpRight size={15} />
          </a>

          <button
            className="mobile-toggle"
            onClick={() =>
              setMobileOpen(!mobileOpen)
            }
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <header id="hero" className="hero">
        <div className="hero-container">
          <div className="hero-copy">
            <Reveal>
              <div className="hero-status">
                <span />
                Available for opportunities
              </div>
            </Reveal>

            <Reveal delay={70}>
              <div className="hero-kicker">
                <Terminal size={14} />
                JAVA FULL STACK DEVELOPER
              </div>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="hero-name">
                Rahul
                <span>S.</span>
              </h1>
            </Reveal>

            <Reveal delay={170}>
              <h2 className="hero-role">
                Full Stack Developer
              </h2>
            </Reveal>

            <Reveal delay={210}>
              <div className="typing-line">
                <span>Building with</span>
                <strong>{typed}</strong>
                <i />
              </div>
            </Reveal>

            <Reveal delay={250}>
              <p className="hero-desc">
                Full stack developer skilled in Java,
                Spring Boot, React.js, REST APIs, and MySQL
                — with hands-on experience building secure,
                responsive web applications. Strong in
                backend API development, frontend
                integration, database management, and
                authentication.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="hero-actions">
                <button
                  className="btn btn-primary"
                  onClick={() => scrollTo('projects')}
                >
                  View my work
                  <ArrowUpRight size={17} />
                </button>

                <button
                  className="btn btn-secondary"
                  onClick={() => scrollTo('contact')}
                >
                  Contact me
                </button>
              </div>
            </Reveal>

            <Reveal delay={340}>
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

            <Reveal delay={380}>
              <button
                className="scroll-indicator"
                onClick={() => scrollTo('about')}
              >
                <span>SCROLL TO EXPLORE</span>
                <ChevronDown size={16} />
              </button>
            </Reveal>
          </div>

          <Reveal
            delay={180}
            className="hero-profile"
          >
            <ProfileCard />
          </Reveal>
        </div>
      </header>

      <main>
        <section
          id="about"
          className="section about-section"
        >
          <div className="container">
            <Reveal>
              <SectionLabel
                index="01"
                label="About"
              />
            </Reveal>

            <div className="about-layout">
              <Reveal className="about-title">
                <span className="eyebrow">
                  PROFILE
                </span>

                <h2>
                  Backend-minded.
                  <br />
                  <span>Full-stack shipped.</span>
                </h2>
              </Reveal>

              <Reveal
                delay={100}
                className="about-content"
              >
                <p>
                  I build web applications end to end —
                  <strong> React</strong> interfaces wired
                  to <strong> Spring Boot</strong> services,
                  with data modelled in
                  <strong> MySQL</strong> and protected by
                  <strong> Spring Security</strong> and
                  JWT. I care about how a request actually
                  moves through a system, and I write it in
                  clean, testable layers rather than one
                  large tangle.
                </p>

                <div className="about-stats">
                  <div>
                    <span>01</span>
                    <strong>
                      Java · Spring Boot · React
                    </strong>
                    <small>Core Stack</small>
                  </div>

                  <div>
                    <span>02</span>
                    <strong>
                      2 full-stack applications
                    </strong>
                    <small>Projects Shipped</small>
                  </div>

                  <div>
                    <span>03</span>
                    <strong>Bengaluru, India</strong>
                    <small>Based In</small>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="section skills-section"
        >
          <div className="container">
            <Reveal>
              <SectionLabel
                index="02"
                label="Skills"
              />
            </Reveal>

            <Reveal delay={70}>
              <div className="section-heading-row">
                <div>
                  <span className="eyebrow">
                    TECH STACK
                  </span>

                  <h2>
                    Technical <span>skills.</span>
                  </h2>
                </div>

                <p>
                  A practical stack focused on building,
                  securing and deploying full-stack
                  applications.
                </p>
              </div>
            </Reveal>

            <div className="skills-bento">
              {SKILL_GROUPS.map((group, index) => (
                <Reveal
                  key={group.cat}
                  delay={index * 45}
                  className={`skill-box skill-${index + 1}`}
                >
                  <div className="skill-box-top">
                    <span>
                      {String(index + 1).padStart(
                        2,
                        '0'
                      )}
                    </span>

                    <Code2 size={16} />
                  </div>

                  <h3>{group.cat}</h3>

                  <div className="skill-tags">
                    {group.items.map((skill) => (
                      <span key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="section experience-section"
        >
          <div className="container">
            <Reveal>
              <SectionLabel
                index="03"
                label="Experience"
              />
            </Reveal>

            <Reveal delay={70}>
              <div className="section-heading">
                <span className="eyebrow">
                  JOURNEY
                </span>

                <h2>
                  Experience &
                  <span> education.</span>
                </h2>
              </div>
            </Reveal>

            <div className="experience-layout">
              <div className="experience-line" />

              {EXPERIENCE.map(
                (experience, index) => (
                  <Reveal
                    key={experience.company}
                    delay={index * 100}
                    className="experience-card"
                  >
                    <div className="experience-index">
                      01
                    </div>

                    <div className="experience-main">
                      <div className="experience-top">
                        <div className="experience-icon">
                          <Briefcase size={18} />
                        </div>

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

                        <span className="experience-year">
                          {experience.time}
                        </span>
                      </div>

                      <ul>
                        {experience.points.map(
                          (point) => (
                            <li key={point}>
                              <CheckCircle2 size={15} />
                              <span>{point}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </Reveal>
                )
              )}

              <Reveal
                delay={100}
                className="education-card"
              >
                <div className="education-icon">
                  <GraduationCap size={21} />
                </div>

                <div>
                  <span className="eyebrow">
                    EDUCATION
                  </span>

                  {EDUCATION.map((education) => (
                    <div key={education.school}>
                      <h3>
                        {education.school}
                      </h3>

                      <p>{education.degree}</p>

                      <small>
                        {education.time}
                      </small>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="section projects-section"
        >
          <div className="container">
            <Reveal>
              <SectionLabel
                index="04"
                label="Selected Work"
              />
            </Reveal>

            <Reveal delay={70}>
              <div className="section-heading-row">
                <div>
                  <span className="eyebrow">
                    BUILT & SHIPPED
                  </span>

                  <h2>
                    Projects that <span>ship.</span>
                  </h2>
                </div>

                <p>
                  Full-stack applications demonstrating
                  frontend, backend, security and database
                  integration.
                </p>
              </div>
            </Reveal>

            <div className="projects-stack">
              {PROJECTS.map((project, index) => (
                <Reveal
                  key={project.id}
                  delay={index * 100}
                  className="project-showcase"
                >
                  <div className="project-number">
                    {project.id}
                  </div>

                  <div className="project-content">
                    <div className="project-header">
                      <div>
                        <span className="project-tag">
                          {project.tag}
                        </span>

                        <h3>
                          {project.title}
                        </h3>
                      </div>

                      {project.featured && (
                        <span className="featured-badge">
                          <CheckCircle2
                            size={13}
                          />
                          Featured
                        </span>
                      )}
                    </div>

                    <div className="project-body">
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
                        <div className="project-actions">
                          {project.links.map(
                            (link) => (
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
                            )
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="project-visual">
                    <div className="visual-window">
                      <div className="visual-bar">
                        <span />
                        <span />
                        <span />
                      </div>

                      <div className="visual-code">
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>

                      <div className="visual-floating">
                        <Code2 size={19} />
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="certifications"
          className="section certifications-section"
        >
          <div className="container">
            <Reveal>
              <SectionLabel
                index="05"
                label="Certifications"
              />
            </Reveal>

            <Reveal delay={70}>
              <div className="section-heading">
                <span className="eyebrow">
                  CONTINUOUS LEARNING
                </span>

                <h2>
                  Certifications
                  <span> & learning.</span>
                </h2>
              </div>
            </Reveal>

            <div className="cert-list">
              {CERTS.map(
                (certification, index) => (
                  <Reveal
                    key={certification.name}
                    delay={index * 80}
                    className="cert-item"
                  >
                    <div className="cert-left">
                      <span>
                        0{index + 1}
                      </span>

                      <div className="cert-icon">
                        <Award size={19} />
                      </div>
                    </div>

                    <div className="cert-info">
                      <h3>
                        {certification.name}
                      </h3>

                      <p>
                        {certification.by}
                      </p>
                    </div>

                    <CheckCircle2
                      className="cert-check"
                      size={19}
                    />
                  </Reveal>
                )
              )}
            </div>
          </div>
        </section>

        <section
          id="approach"
          className="section approach-section"
        >
          <div className="container">
            <Reveal>
              <SectionLabel
                index="06"
                label="Approach"
              />
            </Reveal>

            <Reveal delay={70}>
              <div className="section-heading-row">
                <div>
                  <span className="eyebrow">
                    ARCHITECTURE
                  </span>

                  <h2>
                    How I structure
                    <span> an application.</span>
                  </h2>
                </div>

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
                    className="architecture-card"
                  >
                    <div className="architecture-top">
                      <span>
                        0{index + 1}
                      </span>

                      <div>
                        <Icon size={19} />
                      </div>
                    </div>

                    <span className="architecture-sub">
                      {layer.subtitle}
                    </span>

                    <h3>{layer.title}</h3>

                    <p>{layer.blurb}</p>

                    <div className="architecture-tags">
                      {layer.items.map((item) => (
                        <span key={item}>
                          {item}
                        </span>
                      ))}
                    </div>

                    {index <
                      APPROACH.length - 1 && (
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
          <div className="container">
            <Reveal>
              <SectionLabel
                index="07"
                label="Contact"
              />
            </Reveal>

            <Reveal delay={70}>
              <div className="contact-banner">
                <div>
                  <span className="eyebrow">
                    HAVE A ROLE IN MIND?
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
                </div>

                <div className="contact-symbol">
                  <Mail size={32} />
                </div>
              </div>
            </Reveal>

            <div className="contact-grid">
              {CONTACTS.map(
                (contact, index) => {
                  const Icon = contact.icon

                  return (
                    <Reveal
                      key={contact.label}
                      delay={index * 60}
                      className="contact-card"
                    >
                      <a
                        href={contact.href}
                        target={
                          contact.href.startsWith(
                            'http'
                          )
                            ? '_blank'
                            : undefined
                        }
                        rel="noopener noreferrer"
                      >
                        <div className="contact-icon">
                          <Icon size={18} />
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
                          size={17}
                        />
                      </a>
                    </Reveal>
                  )
                }
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>
            © 2026 Rahul S
          </span>

          <span>
            Full Stack Developer · Bengaluru, India
          </span>
        </div>
      </footer>
    </div>
  )
}

export default App
