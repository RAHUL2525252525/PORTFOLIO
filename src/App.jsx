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
    items: ['React.js', 'JSX', 'HTML5', 'CSS3', 'Flexbox / Grid', 'Vite'],
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
    <div className="profile-3d-wrap">
      <div className="profile-card">
        <div className="profile-glow" />
        <div className="profile-bar">
          <span />
          <span />
          <span />
        </div>

        <div className="profile-body">
          <div className="profile-top-line">
            <span className="mini-label">CANDIDATE / 2026</span>
            <Sparkles size={15} />
          </div>

          <p className="profile-eyebrow">
            Full Stack Developer
          </p>

          <h3 className="profile-name">
            Rahul S<span>.</span>
          </h3>

          <p className="profile-role">
            Java · Spring Boot · React
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
                <div
                  key={row.k}
                  className="profile-row"
                >
                  <div className="profile-row-icon-box">
                    <Icon size={14} />
                  </div>

                  <div className="profile-row-content">
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
      <div className="background-grid" />
      <div className="background-orb orb-one" />
      <div className="background-orb orb-two" />
      <div className="background-orb orb-three" />

      <nav
        className={`site-nav ${
          scrolled ? 'scrolled' : ''
        }`}
      >
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
            <span className="logo-mark">R</span>
            <span className="logo-text">
              Rahul S<span>.</span>
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

      <header id="hero" className="hero">
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <Reveal>
              <div className="hero-pill">
                <span className="status-dot" />
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
              <p className="hero-role">
                Full Stack Developer
              </p>
            </Reveal>

            <Reveal delay={210}>
              <div className="hero-stack">
                Building with{' '}
                <strong>{typed}</strong>
                <span className="type-cursor" />
              </div>
            </Reveal>

            <Reveal delay={250}>
              <p className="hero-desc">
                Full stack developer skilled in Java, Spring
                Boot, React.js, REST APIs, and MySQL — with
                hands-on experience building secure,
                responsive web applications. Strong in backend
                API development, frontend integration,
                database management, and authentication.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="hero-cta">
                <button
                  className="btn primary large"
                  onClick={() => scrollTo('projects')}
                >
                  View my work
                  <ArrowUpRight size={17} />
                </button>

                <button
                  className="btn ghost large"
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

                <span className="meta-separator" />

                <span>
                  <MapPin size={15} />
                  Bengaluru, India
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal
            delay={150}
            className="hero-profile"
          >
            <ProfileCard />
          </Reveal>
        </div>
      </header>

      <main>
        <section
          id="about"
          className="wrap section"
        >
          <Reveal>
            <SectionLabel
              index="01"
              label="About"
            />
          </Reveal>

          <Reveal delay={80}>
            <h2 className="sec-title">
              Backend-minded,
              <span> shipped as full stack.</span>
            </h2>
          </Reveal>

          <Reveal delay={130}>
            <p className="about-text">
              I build web applications end to end —
              <strong> React</strong> interfaces wired to
              <strong> Spring Boot</strong> services, with
              data modelled in <strong>MySQL</strong> and
              protected by <strong>Spring Security</strong>{' '}
              and JWT. I care about how a request actually
              moves through a system, and I write it in
              clean, testable layers rather than one large
              tangle.
            </p>
          </Reveal>

          <div className="fact-row">
            {[
              {
                label: 'Core Stack',
                value: 'Java · Spring Boot · React',
                number: '01',
              },
              {
                label: 'Projects Shipped',
                value: '2 full-stack applications',
                number: '02',
              },
              {
                label: 'Based In',
                value: 'Bengaluru, India',
                number: '03',
              },
            ].map((fact, index) => (
              <Reveal
                key={fact.label}
                delay={index * 70}
                className="panel fact-card"
              >
                <span className="fact-number">
                  {fact.number}
                </span>

                <p className="fact-label">
                  {fact.label}
                </p>

                <p className="fact-value">
                  {fact.value}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          id="skills"
          className="wrap section"
        >
          <Reveal>
            <SectionLabel
              index="02"
              label="Skills"
            />
          </Reveal>

          <Reveal delay={80}>
            <h2 className="sec-title">
              Technical <span>skills.</span>
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="sec-desc">
              A practical stack focused on building,
              securing and deploying full-stack applications.
            </p>
          </Reveal>

          <div className="skill-grid">
            {SKILL_GROUPS.map((group, index) => (
              <Reveal
                key={group.cat}
                delay={index * 45}
                className="panel skill-card"
              >
                <div className="skill-card-head">
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
        </section>

        <section
          id="experience"
          className="wrap section"
        >
          <Reveal>
            <SectionLabel
              index="03"
              label="Experience"
            />
          </Reveal>

          <Reveal delay={80}>
            <h2 className="sec-title">
              Experience & <span>education.</span>
            </h2>
          </Reveal>

          <div className="timeline">
            {EXPERIENCE.map((experience, index) => (
              <Reveal
                key={experience.company}
                delay={index * 100}
                className="panel timeline-item"
              >
                <div className="timeline-line" />

                <div className="tl-head">
                  <span className="tl-icon">
                    <Briefcase size={17} />
                  </span>

                  <div>
                    <p className="experience-label">
                      EXPERIENCE
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
                    <li key={point}>
                      <CheckCircle2 size={15} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
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
                  className="panel edu-card"
                >
                  <div className="edu-icon">
                    <GraduationCap size={20} />
                  </div>

                  <div>
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
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section
          id="projects"
          className="wrap section"
        >
          <Reveal>
            <SectionLabel
              index="04"
              label="Selected Work"
            />
          </Reveal>

          <Reveal delay={80}>
            <h2 className="sec-title">
              Projects that <span>ship.</span>
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="sec-desc">
              Full-stack applications demonstrating frontend,
              backend, security and database integration.
            </p>
          </Reveal>

          <div className="project-list">
            {PROJECTS.map((project, index) => (
              <Reveal
                key={project.id}
                delay={index * 100}
                className="panel project-card"
              >
                <div className="project-number">
                  {project.id}
                </div>

                <div className="project-top">
                  <div>
                    <p className="project-category">
                      {project.tag}
                    </p>

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

                  <div className="project-floating-icon">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <ul className="project-highlights">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>
                      <span className="bullet" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="pill mono"
                    >
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
                        className="project-link"
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                        <ExternalLink size={14} />
                      </a>
                    ))}
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </section>

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
              Certifications <span>& learning.</span>
            </h2>
          </Reveal>

          <div className="cert-grid">
            {CERTS.map((certification, index) => (
              <Reveal
                key={certification.name}
                delay={index * 80}
                className="panel cert-card"
              >
                <div className="cert-icon">
                  <Award size={19} />
                </div>

                <div>
                  <p className="cert-name">
                    {certification.name}
                  </p>

                  <p className="cert-by">
                    {certification.by}
                  </p>
                </div>

                <CheckCircle2
                  size={18}
                  className="cert-check"
                />
              </Reveal>
            ))}
          </div>
        </section>

        <section
          id="approach"
          className="wrap section"
        >
          <Reveal>
            <SectionLabel
              index="06"
              label="Approach"
            />
          </Reveal>

          <Reveal delay={80}>
            <h2 className="sec-title">
              How I structure <span>an application.</span>
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
                  delay={index * 70}
                  className="panel approach-card"
                >
                  <div className="approach-number">
                    0{index + 1}
                  </div>

                  <div className="approach-icon">
                    <Icon size={20} />
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
        </section>

        <section
          id="contact"
          className="wrap section contact-section"
        >
          <Reveal>
            <SectionLabel
              index="07"
              label="Contact"
            />
          </Reveal>

          <Reveal delay={80}>
            <div className="contact-heading">
              <div>
                <p className="contact-kicker">
                  HAVE A ROLE IN MIND?
                </p>

                <h2 className="sec-title">
                  Let's build
                  <span> something.</span>
                </h2>

                <p className="sec-desc">
                  Open to Full Stack, Java/Spring Boot, and
                  React roles. Based in Bengaluru, India.
                </p>
              </div>

              <div className="contact-orb">
                <Mail size={32} />
              </div>
            </div>
          </Reveal>

          <div className="contact-grid">
            {CONTACTS.map((contact, index) => {
              const Icon = contact.icon

              return (
                <Reveal
                  key={contact.label}
                  delay={index * 60}
                  className="panel contact-card"
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
                      size={16}
                      className="contact-arrow"
                    />
                  </a>
                </Reveal>
              )
            })}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-inner">
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

export default App
