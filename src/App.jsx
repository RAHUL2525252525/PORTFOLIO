```jsx
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
} from 'lucide-react'
import './index.css'

/* ================================================================
   DATA
================================================================ */

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

/* ================================================================
   HOOKS
================================================================ */

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
      timer = setTimeout(() => {
        setText((value) =>
          deleting
            ? current.slice(0, value.length - 1)
            : current.slice(0, value.length + 1)
        )
      }, deleting ? deleteSpeed : typeSpeed)
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
        threshold: 0.1,
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
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

function useActiveSection() {
  const [active, setActive] = useState('')

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
    const onScroll = () => {
      setPast(window.scrollY > threshold)
    }

    onScroll()

    window.addEventListener('scroll', onScroll, {
      passive: true,
    })

    return () =>
      window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return past
}

/* ================================================================
   SMALL COMPONENTS
================================================================ */

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
    <div className="profile-card">
      <div className="profile-top">
        <span>PROFILE</span>
        <span className="profile-code">RS / 2026</span>
      </div>

      <div className="profile-body">
        <div className="profile-avatar">RS</div>

        <p className="profile-eyebrow">
          Candidate Profile
        </p>

        <h3 className="profile-name">Rahul S</h3>

        <p className="profile-role">
          Full Stack Developer
        </p>

        <div className="profile-status">
          <span className="status-dot" />
          Available for opportunities
        </div>

        <div className="profile-divider" />

        <div className="profile-rows">
          {rows.map((row) => {
            const Icon = row.icon

            return (
              <div className="profile-row" key={row.k}>
                <span className="profile-row-icon">
                  <Icon size={15} />
                </span>

                <div>
                  <span className="profile-row-k">
                    {row.k}
                  </span>

                  <span className="profile-row-v">
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
                className="profile-icon-link"
              >
                <Icon size={16} />
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

/* ================================================================
   APP
================================================================ */

export default function App() {
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
    <div className="app-shell">
      {/* NAVBAR */}

      <nav className={`site-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="wrap nav-inner">
          <button
            className="logo-btn"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }
            aria-label="Back to top"
          >
            <span className="logo-text">
              Rahul S<span className="logo-dot">.</span>
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
            className="btn primary nav-cta"
            href="mailto:Srinivasrahul838@gmail.com"
          >
            Get in touch
            <ArrowUpRight size={15} />
          </a>
        </div>
      </nav>

      {/* HERO */}

      <header id="hero" className="hero">
        <div className="hero-grid" />

        <div className="wrap hero-inner">
          <div className="hero-copy">
            <Reveal>
              <div className="hero-pill">
                <span className="status-dot" />
                Available for opportunities
              </div>
            </Reveal>

            <Reveal delay={60}>
              <p className="hero-kicker">
                JAVA · SPRING BOOT · REACT
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="hero-name">
                Rahul <span>S.</span>
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <p className="hero-role">
                Full Stack Developer
              </p>
            </Reveal>

            <Reveal delay={190}>
              <div className="hero-stack">
                Building with{' '}
                <span className="hero-stack-word">
                  {typed}
                </span>
                <span className="type-cursor" />
              </div>
            </Reveal>

            <Reveal delay={230}>
              <p className="hero-desc">
                Full stack developer skilled in Java,
                Spring Boot, React.js, REST APIs, and MySQL —
                with hands-on experience building secure,
                responsive web applications. Strong in backend
                API development, frontend integration, database
                management, and authentication.
              </p>
            </Reveal>

            <Reveal delay={280}>
              <div className="hero-cta">
                <button
                  className="btn primary large"
                  onClick={() => scrollTo('projects')}
                >
                  View my work
                  <ArrowUpRight size={16} />
                </button>

                <button
                  className="btn secondary large"
                  onClick={() => scrollTo('contact')}
                >
                  Contact me
                </button>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="hero-meta">
                <span>
                  <GraduationCap size={15} />
                  B.E. Computer Science · 2026
                </span>

                <span className="meta-divider" />

                <span>
                  <MapPin size={15} />
                  Bengaluru, India
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal
            delay={180}
            className="hero-profile"
          >
            <ProfileCard />
          </Reveal>
        </div>

        <div className="hero-bottom">
          <div className="wrap hero-bottom-inner">
            <span>SCROLL TO EXPLORE</span>
            <span className="scroll-line" />
          </div>
        </div>
      </header>

      {/* ABOUT */}

      <section id="about" className="wrap section">
        <Reveal>
          <SectionLabel index="01" label="About" />
        </Reveal>

        <Reveal delay={80}>
          <div className="section-heading-row">
            <h2 className="sec-title">
              Backend-minded,
              <br />
              shipped as full stack.
            </h2>

            <p className="section-index-copy">
              01 / 07
            </p>
          </div>
        </Reveal>

        <Reveal delay={130}>
          <p className="about-text">
            I build web applications end to end —{' '}
            <strong>React</strong> interfaces wired to
            <strong> Spring Boot</strong> services, with data
            modelled in <strong>MySQL</strong> and protected by
            <strong> Spring Security</strong> and JWT. I care
            about how a request actually moves through a
            system, and I write it in clean, testable layers
            rather than one large tangle.
          </p>
        </Reveal>

        <div className="fact-row">
          {[
            {
              label: 'Core Stack',
              value: 'Java · Spring Boot · React',
            },
            {
              label: 'Projects Shipped',
              value: '2 full-stack applications',
            },
            {
              label: 'Based In',
              value: 'Bengaluru, India',
            },
          ].map((fact, index) => (
            <Reveal
              key={fact.label}
              delay={index * 70}
              className="fact-card"
            >
              <span className="fact-number">
                0{index + 1}
              </span>

              <div>
                <p className="fact-label">
                  {fact.label}
                </p>

                <p className="fact-value">
                  {fact.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SKILLS */}

      <section id="skills" className="section section-soft">
        <div className="wrap">
          <Reveal>
            <SectionLabel index="02" label="Skills" />
          </Reveal>

          <Reveal delay={80}>
            <h2 className="sec-title">
              Technical skills
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="sec-desc">
              A practical full-stack toolkit focused on Java,
              Spring Boot, React, databases, security, and
              deployment.
            </p>
          </Reveal>

          <div className="skill-grid">
            {SKILL_GROUPS.map((group, index) => (
              <Reveal
                key={group.cat}
                delay={index * 45}
                className="skill-card"
              >
                <div className="skill-card-top">
                  <span className="skill-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <p className="skill-cat">
                    {group.cat}
                  </p>
                </div>

                <div className="skill-items">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="pill"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}

      <section id="experience" className="wrap section">
        <Reveal>
          <SectionLabel
            index="03"
            label="Experience"
          />
        </Reveal>

        <Reveal delay={80}>
          <h2 className="sec-title">
            Experience
          </h2>
        </Reveal>

        <div className="timeline">
          {EXPERIENCE.map((experience, index) => (
            <Reveal
              key={experience.company}
              delay={index * 100}
              className="timeline-item"
            >
              <div className="timeline-marker">
                <span />
              </div>

              <div className="timeline-content">
                <div className="tl-head">
                  <div>
                    <p className="tl-eyebrow">
                      EXPERIENCE / {experience.time}
                    </p>

                    <h3 className="tl-role">
                      {experience.role}
                    </h3>

                    <p className="tl-meta">
                      {experience.company} ·{' '}
                      {experience.place}
                    </p>
                  </div>

                  <span className="tl-time">
                    {experience.time}
                  </span>
                </div>

                <ul className="tl-points">
                  {experience.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="sub-label">
            <GraduationCap size={16} />
            Education
          </div>

          <div className="edu-grid">
            {EDUCATION.map((education) => (
              <div
                key={education.school}
                className="edu-card"
              >
                <p className="edu-school">
                  {education.school}
                </p>

                <p className="edu-degree">
                  {education.degree}
                </p>

                <p className="edu-time">
                  {education.time}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* PROJECTS */}

      <section id="projects" className="section section-dark">
        <div className="wrap">
          <Reveal>
            <SectionLabel
              index="04"
              label="Selected Work"
            />
          </Reveal>

          <Reveal delay={80}>
            <div className="dark-heading">
              <h2 className="sec-title">
                Projects that show
                <br />
                how I build.
              </h2>

              <p className="dark-heading-copy">
                End-to-end applications covering frontend,
                backend, database, security, and deployment.
              </p>
            </div>
          </Reveal>

          <div className="project-list">
            {PROJECTS.map((project, index) => (
              <Reveal
                key={project.id}
                delay={index * 100}
                className="project-card"
              >
                <div className="project-top">
                  <span className="project-id">
                    {project.id}
                  </span>

                  <div className="project-heading">
                    <h3>{project.title}</h3>

                    {project.featured && (
                      <span className="project-flag">
                        <CheckCircle2 size={13} />
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                <p className="project-tag">
                  {project.tag}
                </p>

                <div className="project-body">
                  <div>
                    <p className="project-label">
                      CONTRIBUTION
                    </p>

                    <ul className="project-highlights">
                      {project.highlights.map(
                        (highlight) => (
                          <li key={highlight}>
                            {highlight}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="project-side">
                    <p className="project-label">
                      TECHNOLOGY
                    </p>

                    <div className="project-tech">
                      {project.tech.map((technology) => (
                        <span
                          key={technology}
                          className="pill mono"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
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
                        className="project-link"
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                        <ArrowUpRight size={14} />
                      </a>
                    ))}
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}

      <section
        id="certifications"
        className="wrap section"
      >
        <Reveal>
          <SectionLabel
            index="05"
            label="Certifications"
          />
        </Reveal>

        <Reveal delay={80}>
          <h2 className="sec-title">
            Certifications
          </h2>
        </Reveal>

        <div className="cert-grid">
          {CERTS.map((certification, index) => (
            <Reveal
              key={certification.name}
              delay={index * 70}
              className="cert-card"
            >
              <span className="cert-number">
                0{index + 1}
              </span>

              <span className="cert-icon">
                <Award size={18} />
              </span>

              <div>
                <p className="cert-name">
                  {certification.name}
                </p>

                <p className="cert-by">
                  {certification.by}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* APPROACH */}

      <section id="approach" className="section section-soft">
        <div className="wrap">
          <Reveal>
            <SectionLabel
              index="06"
              label="Approach"
            />
          </Reveal>

          <Reveal delay={80}>
            <h2 className="sec-title">
              How I structure
              <br />
              an application
            </h2>

            <p className="sec-desc">
              Client to service to schema — the layers a
              request passes through, and what runs each one.
            </p>
          </Reveal>

          <div className="approach-grid">
            {APPROACH.map((layer, index) => {
              const Icon = layer.icon

              return (
                <Reveal
                  key={layer.title}
                  delay={index * 60}
                  className="approach-card"
                >
                  <div className="approach-number">
                    0{index + 1}
                  </div>

                  <div className="approach-icon">
                    <Icon size={19} />
                  </div>

                  <p className="approach-sub">
                    {layer.subtitle}
                  </p>

                  <h3 className="approach-title">
                    {layer.title}
                  </h3>

                  <p className="approach-blurb">
                    {layer.blurb}
                  </p>

                  <div className="approach-items">
                    {layer.items.map((item) => (
                      <span
                        key={item}
                        className="pill mono"
                      >
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

      {/* CONTACT */}

      <section id="contact" className="contact-section">
        <div className="wrap">
          <Reveal>
            <SectionLabel
              index="07"
              label="Contact"
            />
          </Reveal>

          <div className="contact-heading">
            <Reveal delay={80}>
              <p className="contact-kicker">
                HAVE A ROLE IN MIND?
              </p>

              <h2 className="contact-title">
                Let’s build
                <br />
                something useful.
              </h2>
            </Reveal>

            <Reveal delay={130}>
              <p className="contact-desc">
                Open to Full Stack, Java/Spring Boot, and
                React roles. Based in Bengaluru, India.
              </p>
            </Reveal>
          </div>

          <div className="contact-grid">
            {CONTACTS.map((contact, index) => {
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
                      contact.href.startsWith('http')
                        ? '_blank'
                        : undefined
                    }
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    <span className="contact-icon">
                      <Icon size={17} />
                    </span>

                    <span className="contact-kv">
                      <span className="contact-key">
                        {contact.label}
                      </span>

                      <span className="contact-value">
                        {contact.value}
                      </span>
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

      {/* FOOTER */}

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <span className="footer-brand">
            Rahul S<span>.</span>
          </span>

          <span className="footer-meta">
            © 2026 Rahul S
          </span>

          <span className="footer-meta">
            Full Stack Developer · Bengaluru, India
          </span>
        </div>
      </footer>
    </div>
  )
}
```
