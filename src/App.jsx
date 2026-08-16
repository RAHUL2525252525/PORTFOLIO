import { useEffect, useMemo, useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MonitorSmartphone,
  Server,
  ShieldCheck,
  Terminal,
  X,
} from 'lucide-react'
import './index.css'

const VIDEO_BG =
  'https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4'

const PROFILE_IMAGE = '/rahul-profile.jpg'

const NAV = [
  ['about', 'About'],
  ['skills', 'Skills'],
  ['experience', 'Experience'],
  ['work', 'Work'],
  ['certifications', 'Certifications'],
  ['approach', 'Approach'],
  ['contact', 'Contact'],
]

const SKILLS = [
  {
    icon: Code2,
    title: 'Languages',
    items: ['Java', 'JavaScript ES6+', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    icon: MonitorSmartphone,
    title: 'Frontend',
    items: ['React.js', 'Axios', 'JSX', 'Responsive UI', 'Flexbox', 'CSS Grid'],
  },
  {
    icon: Server,
    title: 'Backend',
    items: [
      'Spring Boot',
      'Spring MVC',
      'Spring Data JPA',
      'Hibernate',
      'REST APIs',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Security',
    items: ['Spring Security', 'JWT', 'RBAC', 'OAuth Concepts'],
  },
  {
    icon: Database,
    title: 'Data',
    items: ['MySQL', 'SQL', 'Normalization', 'Relational Modeling'],
  },
  {
    icon: Terminal,
    title: 'DevOps & Tools',
    items: [
      'Docker',
      'Docker Compose',
      'Maven',
      'Git',
      'GitHub',
      'Vercel',
      'Render',
    ],
  },
]

const PROJECTS = [
  {
    number: '01',
    title: 'ShopSphere',
    type: 'FULL-STACK E-COMMERCE',
    description:
      'A complete e-commerce platform built around a Java/Spring Boot API and a responsive React frontend.',
    bullets: [
      'Browsing, search, cart, wishlist, checkout and order management.',
      'ADMIN / CUSTOMER role-based access control.',
      '15+ REST API endpoints with validation and error handling.',
      'Responsive component-based UI with centralized state.',
    ],
    stack: ['Java 17', 'Spring Boot 3', 'React.js', 'JPA', 'MySQL', 'REST'],
    frontend: 'https://shopsphere-8m8f.vercel.app/',
    backend: 'https://shopsphere-backend-5umn.onrender.com',
  },
  {
    number: '02',
    title: 'BankSphere',
    type: 'FULL-STACK BANKING SYSTEM',
    description:
      'A secure banking application with JWT authentication, role-based authorization and transaction workflows.',
    bullets: [
      'Registration, login, account management and transactions.',
      'JWT + Spring Security across user, admin and super-admin roles.',
      'Normalized MySQL schema with 8+ entities.',
      'Docker Compose plus JUnit 5 / Mockito test coverage.',
    ],
    stack: [
      'Java 17',
      'Spring Boot 3',
      'Spring Security',
      'JWT',
      'React.js',
      'MySQL',
    ],
    frontend: 'https://banksphere-frontend.vercel.app',
    backend: 'https://banksphere-backend-b96m.onrender.com',
  },
]

const CERTIFICATIONS = [
  ['01', 'Java Programming Fundamentals', 'Infosys Springboard'],
  ['02', 'Introduction to Java', 'Infosys Springboard'],
]

function SectionLabel({ number, children }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <i />
      <b>{children}</b>
    </div>
  )
}

function Reveal({ children, className = '', delay = 0 }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = document.querySelectorAll('.reveal-pending')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )

    node.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={`reveal-pending ${className} ${visible ? 'is-visible' : ''}`}
      style={{ '--delay': `${delay}ms` }}
      ref={(element) => {
        if (element && !visible) {
          const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                setVisible(true)
                observer.disconnect()
              }
            },
            { threshold: 0.08 }
          )
          observer.observe(element)
        }
      }}
    >
      {children}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('about')

  const currentYear = useMemo(() => new Date().getFullYear(), [])

  useEffect(() => {
    const sections = NAV.map(([id]) => document.getElementById(id)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0.05, 0.2, 0.5] }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="site">
      {/* The video is a real base layer: z-index 0. Content never uses negative z-index. */}
      <div className="video-layer" aria-hidden="true">
        <video
          className="background-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster=""
        >
          <source src={VIDEO_BG} type="video/mp4" />
        </video>
        <div className="video-tint" />
        <div className="video-vignette" />
      </div>

      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="scanlines" />

      <header className="topbar">
        <button className="brand" onClick={() => scrollTo('about')}>
          <span className="brand-mark">R</span>
          <span>
            RAHUL<span>.DEV</span>
          </span>
        </button>

        <nav className="desktop-nav">
          {NAV.map(([id, label], index) => (
            <button
              key={id}
              className={active === id ? 'active' : ''}
              onClick={() => scrollTo(id)}
            >
              <small>0{index + 1}</small>
              {label}
            </button>
          ))}
        </nav>

        <a className="availability" href="mailto:Srinivasrahul838@gmail.com">
          <span />
          AVAILABLE FOR OPPORTUNITIES
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      {menuOpen && (
        <div className="mobile-nav">
          {NAV.map(([id, label]) => (
            <button key={id} onClick={() => scrollTo(id)}>
              {label}
              <ArrowUpRight size={16} />
            </button>
          ))}
        </div>
      )}

      <main>
        <section id="about" className="hero section-shell">
          <div className="hero-grid">
            <div className="hero-copy">
              <Reveal>
                <div className="eyebrow">
                  <span>01</span>
                  <i />
                  SOFTWARE ENGINEER / FULL-STACK
                </div>
              </Reveal>

              <Reveal delay={80}>
                <h1>
                  Rahul
                  <em>S.</em>
                </h1>
              </Reveal>

              <Reveal delay={140}>
                <div className="hero-role">
                  <strong>Java · Spring Boot · React</strong>
                  <span>BUILDING DIGITAL SYSTEMS</span>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <p className="hero-summary">
                  Software Engineer with hands-on experience building
                  full-stack applications using Java, Spring Boot, React.js,
                  REST APIs, JWT security, MySQL and Docker.
                </p>
              </Reveal>

              <Reveal delay={260}>
                <div className="hero-actions">
                  <button className="primary-btn" onClick={() => scrollTo('work')}>
                    View selected work
                    <ArrowDownRight size={18} />
                  </button>
                  <a className="ghost-btn" href="mailto:Srinivasrahul838@gmail.com">
                    Contact me
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </Reveal>

              <Reveal delay={320}>
                <div className="hero-meta">
                  <span>
                    <GraduationCap size={15} />
                    B.E. Computer Science · 2026
                  </span>
                  <span>
                    <MapPin size={15} />
                    Bengaluru, India
                  </span>
                </div>
              </Reveal>
            </div>

            <Reveal className="profile-panel" delay={180}>
              <div className="profile-top">
                <span>IDENTITY / 001</span>
                <span className="live-dot">● ONLINE</span>
              </div>

              <div className="profile-main">
                <div className="portrait-wrap">
                  <div className="portrait-ring" />
                  <img
                    src={PROFILE_IMAGE}
                    alt="Rahul S"
                    className="portrait"
                  />
                  <span className="portrait-status">AVAILABLE</span>
                </div>

                <div className="profile-name">
                  <span>$ whoami</span>
                  <h2>Rahul S.</h2>
                  <p>Software Engineer<br />Full-Stack Developer</p>
                </div>
              </div>

              <div className="profile-data">
                <div>
                  <small>LOCATION</small>
                  <b>Bengaluru, India</b>
                </div>
                <div>
                  <small>FOCUS</small>
                  <b>Java · Spring Boot · React</b>
                </div>
                <div>
                  <small>EDUCATION</small>
                  <b>B.E. Computer Science · 2026</b>
                </div>
              </div>

              <div className="profile-stack">
                {['Java', 'Spring Boot', 'React.js', 'MySQL', 'Docker'].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="profile-year">{currentYear}</div>
            </Reveal>
          </div>

          <div className="scroll-cue">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDownRight size={15} />
          </div>
        </section>

        <section className="intro section-shell">
          <Reveal>
            <SectionLabel number="02">Profile</SectionLabel>
          </Reveal>

          <div className="intro-grid">
            <Reveal className="intro-title">
              <h2>
                I turn requirements into
                <span> working software.</span>
              </h2>
            </Reveal>

            <Reveal className="intro-copy" delay={100}>
              <p>
                I enjoy building systems from the API layer to the interface:
                designing REST endpoints, modeling relational data, securing
                requests and connecting everything to a responsive React UI.
              </p>
              <p>
                My current stack combines Java, Spring Boot, React.js, MySQL,
                Docker and modern Git-based development workflows.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="skills" className="section-shell section-block">
          <Reveal>
            <SectionLabel number="03">Technical Stack</SectionLabel>
          </Reveal>

          <Reveal delay={80}>
            <div className="section-heading">
              <h2>Tools I use to <span>ship.</span></h2>
              <p>Backend depth. Frontend execution. Production-minded tooling.</p>
            </div>
          </Reveal>

          <div className="skills-grid">
            {SKILLS.map((skill, index) => {
              const Icon = skill.icon
              return (
                <Reveal key={skill.title} delay={index * 50} className="skill-card">
                  <div className="card-index">0{index + 1}</div>
                  <Icon size={21} />
                  <h3>{skill.title}</h3>
                  <div className="chip-list">
                    {skill.items.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </Reveal>
              )
            })}
          </div>
        </section>

        <section id="experience" className="section-shell section-block">
          <Reveal>
            <SectionLabel number="04">Experience</SectionLabel>
          </Reveal>

          <Reveal delay={80}>
            <div className="experience-card">
              <div className="experience-date">JAN 2026 — MAY 2026</div>
              <div>
                <span className="muted-label">WEB DEVELOPMENT INTERN</span>
                <h2>MR Tech Lab</h2>
                <p>
                  Built responsive cross-browser interfaces with HTML, CSS and
                  JavaScript; integrated Firebase authentication; and worked in
                  an Agile, Git-based workflow to ship tested UI features.
                </p>
              </div>
              <BriefcaseBusiness size={25} />
            </div>
          </Reveal>
        </section>

        <section id="work" className="section-shell section-block">
          <Reveal>
            <SectionLabel number="05">Selected Work</SectionLabel>
          </Reveal>

          <Reveal delay={80}>
            <div className="section-heading">
              <h2>Built, deployed, <span>live.</span></h2>
              <p>Two full-stack applications you can actually open and test.</p>
            </div>
          </Reveal>

          <div className="projects">
            {PROJECTS.map((project, index) => (
              <Reveal key={project.title} delay={index * 100} className="project-card">
                <div className="project-number">{project.number}</div>

                <div className="project-main">
                  <div className="project-heading">
                    <div>
                      <span>{project.type}</span>
                      <h3>{project.title}</h3>
                    </div>
                    <span className="live-badge">LIVE</span>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-content">
                    <ul>
                      {project.bullets.map((bullet) => (
                        <li key={bullet}>
                          <CheckCircle2 size={15} />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <div className="project-side">
                      <small>STACK</small>
                      <div className="chip-list">
                        {project.stack.map((item) => <span key={item}>{item}</span>)}
                      </div>

                      <div className="render-note">
                        <span>⚡</span>
                        <p>
                          <b>START BACKEND FIRST</b>
                          <br />
                          Render may put the backend to sleep. Open the backend,
                          wait for it to wake, then open the frontend.
                        </p>
                      </div>

                      <div className="project-links">
                        <a href={project.frontend} target="_blank" rel="noreferrer">
                          Live frontend <ArrowUpRight size={15} />
                        </a>
                        <a href={project.backend} target="_blank" rel="noreferrer">
                          Backend API <ArrowUpRight size={15} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="certifications" className="section-shell section-block">
          <Reveal>
            <SectionLabel number="06">Certifications</SectionLabel>
          </Reveal>

          <div className="cert-grid">
            {CERTIFICATIONS.map(([number, title, issuer]) => (
              <Reveal key={title} className="cert-card">
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{issuer}</p>
                </div>
                <CheckCircle2 size={19} />
              </Reveal>
            ))}
          </div>
        </section>

        <section id="approach" className="section-shell section-block">
          <Reveal>
            <SectionLabel number="07">Approach</SectionLabel>
          </Reveal>

          <Reveal delay={80}>
            <div className="architecture-heading">
              <h2>From request to <span>response.</span></h2>
              <p>How I think about a production web application.</p>
            </div>
          </Reveal>

          <div className="architecture">
            {[
              ['01', 'CLIENT', 'React.js', 'Responsive UI, state, forms and API integration.'],
              ['02', 'API', 'Spring Boot', 'Controllers, services, DTOs and exception handling.'],
              ['03', 'SECURITY', 'Spring Security', 'JWT authentication and role-based authorization.'],
              ['04', 'DATA', 'MySQL + JPA', 'Normalized relational data and persistent domain models.'],
            ].map(([num, label, title, text]) => (
              <Reveal key={num} className="architecture-node">
                <span>{num}</span>
                <small>{label}</small>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className="contact section-shell">
          <Reveal>
            <SectionLabel number="08">Contact</SectionLabel>
          </Reveal>

          <Reveal delay={80}>
            <div className="contact-terminal">
              <div className="terminal-head">
                <span><i /> <i /> <i /></span>
                <b>rahul@developer:~</b>
                <span>CONTACT</span>
              </div>

              <div className="terminal-body">
                <span>$ ./start-conversation</span>
                <h2>Let's build <em>something.</em></h2>
                <p>Open to Software Engineer, Java/Spring Boot and React opportunities.</p>
                <a href="mailto:Srinivasrahul838@gmail.com">
                  Start a conversation <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </Reveal>

          <div className="contact-grid">
            <a href="mailto:Srinivasrahul838@gmail.com">
              <Mail size={18} />
              <span><small>EMAIL</small><b>Srinivasrahul838@gmail.com</b></span>
              <ArrowUpRight size={16} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <Linkedin size={18} />
              <span><small>LINKEDIN</small><b>Connect with me</b></span>
              <ArrowUpRight size={16} />
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <Github size={18} />
              <span><small>GITHUB</small><b>View my code</b></span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {currentYear} Rahul S</span>
        <span>JAVA · SPRING BOOT · REACT</span>
        <span>BUILD / 2026</span>
      </footer>
    </div>
  )
}

export default App
