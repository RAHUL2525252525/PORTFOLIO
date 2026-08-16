import { useEffect, useState } from 'react'
import './index.css'

const VIDEO_BG =
  'https://videos.pexels.com/video-files/2759477/2759477-sd_426_240_30fps.mp4'

const PROFILE_IMAGE = '/profile.jpg'

const NAV = [
  ['about', 'ABOUT'],
  ['skills', 'STACK'],
  ['experience', 'EXPERIENCE'],
  ['projects', 'PROJECTS'],
  ['certifications', 'CERTS'],
  ['contact', 'CONTACT'],
]

const SKILLS = [
  {
    number: '01',
    title: 'FRONTEND',
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
    title: 'BACKEND',
    description:
      'Working with backend services, REST APIs and structured application logic.',
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
    number: '03',
    title: 'API + AI',
    description:
      'Connecting applications with external services and AI-powered APIs.',
    items: [
      'REST API Integration',
      'Gemini API',
      'Groq API',
      'OpenRouter API',
      'Firebase',
      'JSON',
    ],
  },
  {
    number: '04',
    title: 'DATABASE',
    description:
      'Designing data structures and implementing reliable CRUD workflows.',
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
    title: 'SECURITY',
    description:
      'Implementing authentication and protected application workflows.',
    items: [
      'Spring Security',
      'JWT',
      'RBAC',
      'Firebase Authentication',
      'User Authentication',
    ],
  },
  {
    number: '06',
    title: 'TOOLS',
    description:
      'Using modern development and deployment tools throughout the workflow.',
    items: [
      'Git',
      'GitHub',
      'VS Code',
      'Vite',
      'Docker',
      'Docker Compose',
      'Vercel',
      'Render',
    ],
  },
]

const EXPERIENCE = [
  {
    role: 'Web Development Intern',
    company: 'MR Tech Lab',
    location: 'Bengaluru',
    year: '2026',
    points: [
      'Developed responsive web pages using HTML, CSS and JavaScript.',
      'Worked with REST API integration and frontend application development.',
      'Improved UI quality and user experience across web applications.',
    ],
  },
  {
    role: 'AI/ML Intern',
    company: 'KNOWX Innovations',
    location: 'Bengaluru',
    year: '2023',
    points: [
      'Assisted with AI/ML project tasks and Python-based development activities.',
      'Supported testing and development activities for internal projects.',
    ],
  },
]

const PROJECTS = [
  {
    number: '01',
    title: 'BANKSPHERE',
    category: 'FULL-STACK BANKING SYSTEM',
    description:
      'A secure banking application built with React.js, Java and Spring Boot, with authentication, account management and backend API integration.',
    highlights: [
      'Registration and login workflow',
      'JWT authentication',
      'Role-based access control',
      'Account management',
      'REST API integration',
      'MySQL database',
      'Docker-based deployment',
    ],
    stack: [
      'React.js',
      'Java',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'JPA',
      'MySQL',
      'Docker',
    ],
    backend:
      'https://banksphere-backend-b96m.onrender.com',
    frontend:
      'https://banksphere-frontend.vercel.app',
    warning:
      'IMPORTANT: Start the backend first. The Render backend may sleep when inactive, so the first request can take some time to wake it up. After the backend is awake, open the frontend.',
  },
  {
    number: '02',
    title: 'SHOPSPHERE',
    category: 'FULL-STACK E-COMMERCE',
    description:
      'An e-commerce application designed around product browsing, cart workflows, wishlist, checkout and administrative management.',
    highlights: [
      'Product browsing',
      'Search and product management',
      'Shopping cart',
      'Wishlist',
      'Checkout workflow',
      'Order management',
      'Admin functionality',
    ],
    stack: [
      'React.js',
      'Java',
      'Spring Boot',
      'JPA',
      'REST APIs',
      'MySQL',
      'Git',
    ],
    frontend:
      'https://shopsphere-8m8f.vercel.app/',
    backend:
      'https://shopsphere-backend-5umn.onrender.com',
    warning:
      'IMPORTANT: Start the backend first. The Render backend may sleep when inactive, so the first request can take some time to wake it up. After the backend is awake, open the frontend.',
  },
  {
    number: '03',
    title: 'AI EXAM',
    category: 'AI-POWERED WEB APPLICATION',
    description:
      'An AI-powered exam assistant with chatbot functionality, authentication and a Flask backend.',
    highlights: [
      'AI chatbot support',
      'Firebase Authentication',
      'User login and registration',
      'REST API communication',
      'Responsive interface',
    ],
    stack: [
      'HTML',
      'CSS',
      'JavaScript',
      'Python',
      'Flask',
      'Firebase',
      'Groq API',
      'Render',
    ],
  },
  {
    number: '04',
    title: 'MARKETING ANALYTICS',
    category: 'DATA + AI DASHBOARD',
    description:
      'A responsive analytics dashboard designed to display campaign performance data from CSV datasets.',
    highlights: [
      'Campaign performance dashboard',
      'CSV dataset handling',
      'Gemini API chatbot',
      'Firebase Authentication',
      'Responsive dashboard UI',
    ],
    stack: [
      'HTML',
      'CSS',
      'JavaScript',
      'Firebase',
      'Gemini API',
    ],
  },
]

const CERTIFICATIONS = [
  ['Introduction to Java', 'Infosys Springboard'],
  ['Java Programming Fundamentals', 'Infosys Springboard'],
  ['Cloud Computing', 'Infosys Springboard'],
  ['Software Engineering', 'Infosys Springboard'],
  ['AI & Green Skills', 'Edunet Foundation'],
]

const CONTACTS = [
  {
    label: 'EMAIL',
    value: 'srinivasrahul838@gmail.com',
    href: 'mailto:srinivasrahul838@gmail.com',
  },
  {
    label: 'PHONE',
    value: '+91 73376 34886',
    href: 'tel:+917337634886',
  },
  {
    label: 'LINKEDIN',
    value: 'linkedin.com/in/rahul-s',
    href: 'https://www.linkedin.com/in/rahul-s-6460b1238',
  },
  {
    label: 'GITHUB',
    value: 'github.com/RAHUL2525252525',
    href: 'https://github.com/RAHUL2525252525',
  },
]

function Reveal({ children, className = '', delay = 0 }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = document.querySelector(
      `[data-reveal-id="${Math.random()}"]`
    )

    return () => {
      if (element) {
        element.remove()
      }
    }
  }, [])

  return (
    <div
      className={`reveal ${visible ? 'visible' : ''} ${className}`}
      style={{ '--delay': `${delay}ms` }}
      ref={(node) => {
        if (!node || visible) return

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisible(true)
              observer.disconnect()
            }
          },
          { threshold: 0.08 }
        )

        observer.observe(node)
      }}
    >
      {children}
    </div>
  )
}

function App() {
  const [active, setActive] = useState('about')
  const [menuOpen, setMenuOpen] = useState(false)
  const [typed, setTyped] = useState('')
  const [wordIndex, setWordIndex] = useState(0)

  const rotatingWords = [
    'React.js',
    'Java',
    'Spring Boot',
    'REST APIs',
    'MySQL',
  ]

  useEffect(() => {
    const current = rotatingWords[wordIndex]

    if (typed.length < current.length) {
      const timer = setTimeout(() => {
        setTyped(current.slice(0, typed.length + 1))
      }, 75)

      return () => clearTimeout(timer)
    }

    const pause = setTimeout(() => {
      setTyped('')
      setWordIndex((index) => (index + 1) % rotatingWords.length)
    }, 1300)

    return () => clearTimeout(pause)
  }, [typed, wordIndex])

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY + 180

      NAV.forEach(([id]) => {
        const section = document.getElementById(id)

        if (
          section &&
          position >= section.offsetTop &&
          position < section.offsetTop + section.offsetHeight
        ) {
          setActive(id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    })

    setMenuOpen(false)
  }

  return (
    <div className="app">

      {/* ================= VIDEO BACKGROUND ================= */}

      <div className="video-layer">
        <video
          className="site-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={VIDEO_BG} type="video/mp4" />
        </video>

        <div className="video-darkness" />
        <div className="video-gradient" />
      </div>

      <div className="background-grid" />
      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />

      {/* ================= NAVIGATION ================= */}

      <nav className="navbar">
        <div className="nav-inner">

          <button
            className="brand"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="brand-box">R</span>

            <span className="brand-name">
              RAHUL<span>.DEV</span>
            </span>
          </button>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {NAV.map(([id, label]) => (
              <button
                key={id}
                className={active === id ? 'active' : ''}
                onClick={() => scrollTo(id)}
              >
                {label}
              </button>
            ))}
          </div>

          <a
            className="nav-button"
            href="mailto:srinivasrahul838@gmail.com"
          >
            LET'S TALK <span>↗</span>
          </a>

          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? '×' : '☰'}
          </button>

        </div>
      </nav>

      {/* ================= HERO ================= */}

      <header className="hero">

        <div className="hero-container">

          <div className="hero-content">

            <Reveal>
              <div className="status-line">
                <span className="live-dot" />
                AVAILABLE FOR OPPORTUNITIES
              </div>
            </Reveal>

            <Reveal delay={100}>
              <p className="hero-eyebrow">
                FRONTEND DEVELOPER
                <span> / </span>
                FULL-STACK BUILDER
              </p>
            </Reveal>

            <Reveal delay={150}>
              <h1>
                Rahul
                <span>S.</span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <div className="hero-title">
                I BUILD <strong>WEB EXPERIENCES</strong>
                <br />
                THAT FEEL <strong>ALIVE.</strong>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div className="typing-line">
                Currently building with
                <span>{typed}</span>
                <i />
              </div>
            </Reveal>

            <Reveal delay={300}>
              <p className="hero-description">
                Frontend Developer fresher with hands-on experience
                building modern web applications using HTML5, CSS3,
                JavaScript and React.js. Experienced with REST APIs,
                AI APIs, Firebase Authentication and cloud deployment.
              </p>
            </Reveal>

            <Reveal delay={350}>
              <div className="hero-actions">
                <button
                  className="primary-button"
                  onClick={() => scrollTo('projects')}
                >
                  EXPLORE MY WORK
                  <span>↗</span>
                </button>

                <button
                  className="secondary-button"
                  onClick={() => scrollTo('contact')}
                >
                  CONTACT ME
                </button>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="hero-data">
                <div>
                  <small>LOCATION</small>
                  <strong>BENGALURU, INDIA</strong>
                </div>

                <div>
                  <small>FOCUS</small>
                  <strong>REACT · JAVA · WEB</strong>
                </div>

                <div>
                  <small>STATUS</small>
                  <strong className="green">OPEN TO WORK</strong>
                </div>
              </div>
            </Reveal>

          </div>

          {/* PROFILE VISUAL */}

          <Reveal
            delay={200}
            className="hero-visual-wrapper"
          >
            <div className="hero-visual">

              <div className="visual-top">
                <span>01 / PROFILE</span>
                <span>2026</span>
              </div>

              <div className="profile-image-container">

                <div className="profile-ring ring-one" />
                <div className="profile-ring ring-two" />

                <img
                  src={PROFILE_IMAGE}
                  alt="Rahul"
                  className="profile-image"
                  onError={(event) => {
                    event.currentTarget.style.display = 'none'
                  }}
                />

                <div className="profile-placeholder">
                  <span>RS</span>
                  <small>DEVELOPER</small>
                </div>

              </div>

              <div className="visual-bottom">
                <div>
                  <span>STACK</span>
                  <strong>REACT / JAVA / SPRING</strong>
                </div>

                <div className="visual-arrow">↗</div>
              </div>

              <div className="corner-label">
                <span>SCROLL</span>
                <b>↓</b>
              </div>

            </div>
          </Reveal>

        </div>

        <button
          className="hero-scroll"
          onClick={() => scrollTo('about')}
        >
          <span>SCROLL TO EXPLORE</span>
          <b>↓</b>
        </button>

      </header>

      {/* ================= ABOUT ================= */}

      <main>

        <section id="about" className="section">
          <div className="container">

            <Reveal>
              <div className="section-number">
                <span>01</span>
                <i />
                ABOUT ME
              </div>
            </Reveal>

            <div className="about-layout">

              <Reveal>
                <h2 className="giant-title">
                  FRONTEND
                  <br />
                  <span>THINKING.</span>
                </h2>
              </Reveal>

              <Reveal delay={120}>
                <div className="about-text">
                  <p>
                    I enjoy turning ideas into polished,
                    responsive web applications.
                  </p>

                  <p>
                    My main focus is frontend development with
                    React.js, while also understanding the backend
                    side using Java, Spring Boot, REST APIs and
                    databases.
                  </p>

                  <p>
                    I care about the complete experience —
                    interface, API integration, authentication,
                    database flow and deployment.
                  </p>
                </div>
              </Reveal>

            </div>

            <div className="stats-grid">

              <Reveal>
                <div className="stat-card">
                  <span>01</span>
                  <strong>REACT</strong>
                  <small>Frontend Development</small>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <div className="stat-card">
                  <span>02</span>
                  <strong>JAVA</strong>
                  <small>Backend Development</small>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div className="stat-card">
                  <span>03</span>
                  <strong>API</strong>
                  <small>Integration & Services</small>
                </div>
              </Reveal>

              <Reveal delay={240}>
                <div className="stat-card">
                  <span>04</span>
                  <strong>DEPLOY</strong>
                  <small>Vercel & Render</small>
                </div>
              </Reveal>

            </div>

          </div>
        </section>

        {/* ================= SKILLS ================= */}

        <section id="skills" className="section skills-section">
          <div className="container">

            <Reveal>
              <div className="section-number">
                <span>02</span>
                <i />
                TECHNICAL STACK
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="section-intro">
                <h2 className="giant-title">
                  THE
                  <br />
                  <span>TOOLKIT.</span>
                </h2>

                <p>
                  Technologies and tools I use to design,
                  build, connect and deploy applications.
                </p>
              </div>
            </Reveal>

            <div className="skills-list">

              {SKILLS.map((skill, index) => (
                <Reveal
                  key={skill.number}
                  delay={index * 60}
                >
                  <article className="skill-card">

                    <div className="skill-number">
                      {skill.number}
                    </div>

                    <div className="skill-main">
                      <h3>{skill.title}</h3>

                      <p>{skill.description}</p>
                    </div>

                    <div className="skill-items">
                      {skill.items.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>

                    <div className="skill-arrow">↗</div>

                  </article>
                </Reveal>
              ))}

            </div>

          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}

        <section id="experience" className="section">
          <div className="container">

            <Reveal>
              <div className="section-number">
                <span>03</span>
                <i />
                EXPERIENCE
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="giant-title">
                WHERE I'VE
                <br />
                <span>BUILT.</span>
              </h2>
            </Reveal>

            <div className="experience-list">

              {EXPERIENCE.map((experience, index) => (
                <Reveal
                  key={experience.company}
                  delay={index * 100}
                >
                  <article className="experience-card">

                    <div className="experience-year">
                      {experience.year}
                    </div>

                    <div className="experience-content">
                      <span className="mini-label">
                        {experience.company}
                      </span>

                      <h3>{experience.role}</h3>

                      <p className="experience-location">
                        {experience.location}
                      </p>

                      <ul>
                        {experience.points.map((point) => (
                          <li key={point}>
                            <span>+</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="experience-mark">
                      0{index + 1}
                    </div>

                  </article>
                </Reveal>
              ))}

            </div>

            <Reveal delay={100}>
              <div className="education-card">

                <div className="education-icon">
                  BE
                </div>

                <div>
                  <span className="mini-label">
                    EDUCATION
                  </span>

                  <h3>
                    B.E. Computer Science & Engineering
                  </h3>

                  <p>
                    Dr. ACS College of Engineering ·
                    Bengaluru · 2023 – 2026
                  </p>
                </div>

                <span className="education-year">
                  2026
                </span>

              </div>
            </Reveal>

          </div>
        </section>

        {/* ================= PROJECTS ================= */}

        <section id="projects" className="section projects-section">
          <div className="container">

            <Reveal>
              <div className="section-number">
                <span>04</span>
                <i />
                SELECTED WORK
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="section-intro">
                <h2 className="giant-title">
                  THINGS I'VE
                  <br />
                  <span>SHIPPED.</span>
                </h2>

                <p>
                  Real applications where frontend,
                  backend, APIs, authentication and
                  deployment come together.
                </p>
              </div>
            </Reveal>

            <div className="projects-grid">

              {PROJECTS.map((project, index) => (
                <Reveal
                  key={project.number}
                  delay={index * 80}
                  className={
                    index < 2 ? 'project-wide' : ''
                  }
                >
                  <article className="project-card">

                    <div className="project-top">

                      <span className="project-index">
                        {project.number}
                      </span>

                      <span className="project-category">
                        {project.category}
                      </span>

                      <span className="project-status">
                        BUILT
                      </span>

                    </div>

                    <div className="project-title-row">
                      <h3>{project.title}</h3>
                      <span>↗</span>
                    </div>

                    <p className="project-description">
                      {project.description}
                    </p>

                    <div className="project-grid">

                      <div>
                        <small>WHAT I BUILT</small>

                        <ul className="project-highlights">
                          {project.highlights.map((item) => (
                            <li key={item}>
                              <span />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <small>TECHNOLOGY</small>

                        <div className="project-stack">
                          {project.stack.map((item) => (
                            <span key={item}>{item}</span>
                          ))}
                        </div>

                        {project.warning && (
                          <div className="backend-warning">
                            <strong>
                              ⚠ BACKEND WAKE-UP NOTE
                            </strong>

                            <p>
                              {project.warning}
                            </p>
                          </div>
                        )}

                        <div className="project-buttons">

                          {project.frontend && (
                            <a
                              href={project.frontend}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              LIVE FRONTEND ↗
                            </a>
                          )}

                          {project.backend && (
                            <a
                              href={project.backend}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="dark-link"
                            >
                              BACKEND ↗
                            </a>
                          )}

                        </div>

                      </div>

                    </div>

                  </article>
                </Reveal>
              ))}

            </div>

          </div>
        </section>

        {/* ================= CERTIFICATIONS ================= */}

        <section
          id="certifications"
          className="section"
        >
          <div className="container">

            <Reveal>
              <div className="section-number">
                <span>05</span>
                <i />
                CERTIFICATIONS
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="giant-title">
                ALWAYS
                <br />
                <span>LEARNING.</span>
              </h2>
            </Reveal>

            <div className="cert-grid">

              {CERTIFICATIONS.map(
                ([name, company], index) => (
                  <Reveal
                    key={name}
                    delay={index * 60}
                  >
                    <div className="cert-card">

                      <span>
                        0{index + 1}
                      </span>

                      <div>
                        <small>
                          {company}
                        </small>

                        <h3>{name}</h3>
                      </div>

                      <b>✓</b>

                    </div>
                  </Reveal>
                )
              )}

            </div>

          </div>
        </section>

        {/* ================= CONTACT ================= */}

        <section
          id="contact"
          className="section contact-section"
        >
          <div className="container">

            <Reveal>
              <div className="section-number">
                <span>06</span>
                <i />
                CONTACT
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="contact-box">

                <div className="contact-small">
                  LET'S BUILD SOMETHING
                </div>

                <h2>
                  HAVE A PROJECT
                  <br />
                  <span>IN MIND?</span>
                </h2>

                <p>
                  I'm open to frontend, Java and full-stack
                  opportunities. Let's talk.
                </p>

                <a
                  href="mailto:srinivasrahul838@gmail.com"
                  className="contact-button"
                >
                  START A CONVERSATION ↗
                </a>

                <div className="contact-orbit orbit-a" />
                <div className="contact-orbit orbit-b" />

              </div>
            </Reveal>

            <div className="contact-grid">

              {CONTACTS.map((contact, index) => (
                <Reveal
                  key={contact.label}
                  delay={index * 70}
                >
                  <a
                    href={contact.href}
                    target={
                      contact.href.startsWith('http')
                        ? '_blank'
                        : undefined
                    }
                    rel="noopener noreferrer"
                    className="contact-card"
                  >
                    <small>{contact.label}</small>

                    <strong>
                      {contact.value}
                    </strong>

                    <span>↗</span>
                  </a>
                </Reveal>
              ))}

            </div>

          </div>
        </section>

      </main>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div>
          RAHUL<span>.DEV</span>
        </div>

        <p>
          FRONTEND DEVELOPER · FULL-STACK BUILDER
        </p>

        <small>
          © 2026 RAHUL S
        </small>

      </footer>

    </div>
  )
}

export default App
