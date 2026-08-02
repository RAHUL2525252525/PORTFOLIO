import React, { useState, useEffect } from 'react';
import { 
  Folder, ChevronRight, Download, Mail, Github, Linkedin, 
  ExternalLink, MapPin, Phone, Award, Layers, ShieldCheck, 
  CheckCircle2, Box, Cpu, Database, Wrench, FileText, Menu, X 
} from 'lucide-react';
import './index.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('manifest');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Auto-scroll reveal setup
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.crate-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [activeTab]);

  const scrollTo = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="cargo-portfolio">
      {/* ================================================================== */}
      /* TOP BAR — Folder Tabs Header                                        */
      /* ================================================================== */}
      <header className="topbar">
        <div className="topbar-inner wrap">
          <button className="brand" onClick={() => scrollTo('manifest')}>
            <Box size={20} />
            <span>MANIFEST // RAHUL S</span>
          </button>

          <nav className="tabs">
            {[
              { id: 'manifest', label: '01. OVERVIEW' },
              { id: 'declaration', label: '02. DECLARATION' },
              { id: 'skills', label: '03. SKILLS & CONTAINERS' },
              { id: 'shipments', label: '04. FEATURED PROJECTS' },
              { id: 'tracking', label: '05. TRACKING & HISTORY' },
              { id: 'label', label: '06. SHIPPING LABEL' }
            ].map(tab => (
              <button
                key={tab.id}
                className={`tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => scrollTo(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          <button className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu">
            {[
              { id: 'manifest', label: '01. OVERVIEW' },
              { id: 'declaration', label: '02. DECLARATION' },
              { id: 'skills', label: '03. SKILLS & CONTAINERS' },
              { id: 'shipments', label: '04. FEATURED PROJECTS' },
              { id: 'tracking', label: '05. TRACKING & HISTORY' },
              { id: 'label', label: '06. SHIPPING LABEL' }
            ].map(tab => (
              <button key={tab.id} onClick={() => scrollTo(tab.id)}>
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </header>

      <main className="main">
        {/* ================================================================== */}
        /* 01. COVER / OVERVIEW                                                */
        /* ================================================================== */}
        <section id="manifest" className="manifest">
          <div className="cover wrap">
            <div className="manifest-strip">
              <span>BILL OF LADING #2026-RS</span>
              <span>ORIGIN: BANGALORE, KA</span>
              <span>DESTINATION: OPEN TO OPPORTUNITIES</span>
            </div>

            <div className="cover-grid">
              <div>
                <h1 className="cover-name">RAHUL S</h1>
                <div className="cover-role">FULLSTACK & FRONTEND SOFTWARE DEVELOPER</div>
                <p className="cover-desc">
                  Performance-driven Software Developer with hands-on experience in building responsive, 
                  scalable web applications using React.js, Java, Spring Boot, and MySQL. Skilled in REST API design, 
                  Firebase Authentication, dynamic UI components, and modern deployment workflows.
                </p>

                <div className="cover-actions">
                  <a href="#label" onClick={(e) => { e.preventDefault(); scrollTo('label'); }} className="btn primary">
                    <Mail size={16} /> CONTACT DEVELOPER
                  </a>
                  <a href="https://github.com/in/rahul-s-6460b1238" target="_blank" rel="noreferrer" className="btn outline">
                    <Github size={16} /> GITHUB PROFILE
                  </a>
                </div>

                <div className="contents-line">
                  <ShieldCheck size={14} /> STATUS: VERIFIED / READY FOR DEPLOYMENT
                </div>
              </div>

              <div className="stamp-wrap">
                <div className="rubber-stamp">
                  INSPECTED & APPROVED<br />
                  <span>FULL STACK CERTIFIED</span>
                </div>

                <div className="manifest-box">
                  <div className="manifest-row">
                    <span>PRIMARY FOCUS</span>
                    <span>React.js / Spring Boot</span>
                  </div>
                  <div className="manifest-row">
                    <span>DEGREE</span>
                    <span>B.E. Computer Science</span>
                  </div>
                  <div className="manifest-row">
                    <span>EXPERIENCE</span>
                    <span>Web & AI/ML Internships</span>
                  </div>
                  <div className="manifest-row">
                    <span>AVAILABILITY</span>
                    <span className="ok">IMMEDIATE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="tape" />

        {/* ================================================================== */}
        /* 02. DECLARATION                                                     */
        /* ================================================================== */}
        <section id="declaration" className="manifest section-alt">
          <div className="manifest-head">
            <div className="mini-label"><FileText size={14} /> STATEMENT OF PURPOSE</div>
            <h2 className="manifest-title">02. DEVELOPER DECLARATION</h2>
          </div>

          <div className="decl-grid wrap">
            <div className="decl-card crate-in">
              <span className="decl-tag">SUMMARY</span>
              <p>
                Passionate about building end-to-end web applications with modular UI architecture and clean backend RESTful services. 
                Proficient in state management, DOM manipulation, responsive layouts (Flexbox/CSS Grid), and database design.
              </p>
              <div className="decl-tally">
                <div>
                  <b>3+</b>
                  <span>MAJOR PROJECTS</span>
                </div>
                <div>
                  <b>2</b>
                  <span>INTERNSHIPS</span>
                </div>
                <div>
                  <b>4+</b>
                  <span>CERTIFICATIONS</span>
                </div>
              </div>
            </div>

            <div className="decl-card crate-in">
              <span className="decl-tag">LANGUAGES & SPOKEN</span>
              <p>
                Equipped with strong problem-solving ability, hands-on understanding of Object-Oriented Programming (OOP) and Data Structures & Algorithms (DSA).
              </p>
              <br />
              <div className="manifest-row">
                <span>ENGLISH</span>
                <span>Working Knowledge</span>
              </div>
              <div className="manifest-row">
                <span>KANNADA</span>
                <span className="ok">Fluent</span>
              </div>
            </div>
          </div>
        </section>

        <div className="tape reverse" />

        {/* ================================================================== */}
        /* 03. SKILLS & CONTAINERS                                             */
        /* ================================================================== */}
        <section id="skills" className="manifest">
          <div className="manifest-head">
            <div className="mini-label"><Layers size={14} /> TECHNICAL INVENTORY</div>
            <h2 className="manifest-title">03. CARGO MANIFEST & SKILLS YARD</h2>
          </div>

          {/* Packing List Table */}
          <div className="packing-list wrap crate-in">
            <div className="pl-row pl-head">
              <span>ITEM</span>
              <span>CATEGORY</span>
              <span>CONTENTS / SPECIFICATIONS</span>
            </div>
            <div className="pl-row">
              <span className="pl-no">01</span>
              <span className="pl-desc">LANGUAGES</span>
              <span className="pl-contents">Java, JavaScript (ES6+), SQL, HTML5, CSS3</span>
            </div>
            <div className="pl-row">
              <span className="pl-no">02</span>
              <span className="pl-desc">FRAMEWORKS</span>
              <span className="pl-contents">React.js, JSX, Spring Boot, Spring Data JPA</span>
            </div>
            <div className="pl-row">
              <span className="pl-no">03</span>
              <span className="pl-desc">DATABASE & AUTH</span>
              <span className="pl-contents">MySQL, Firebase Realtime Database, Firebase Auth, RBAC</span>
            </div>
            <div className="pl-row">
              <span className="pl-no">04</span>
              <span className="pl-desc">TOOLS & DEPLOY</span>
              <span className="pl-contents">Git, GitHub, VS Code, IntelliJ IDEA, Vite, Vercel, Render</span>
            </div>
          </div>

          {/* Container Stack */}
          <div className="yard wrap">
            <div className="yard-label"><Box size={14} /> FREIGHT CONTAINERS BY DOMAIN</div>
            
            <div className="yard-stack">
              <div className="container c-front crate-in">
                <div className="container-ridges" />
                <div className="container-door" />
                <div className="container-corner tl" /><div className="container-corner tr" />
                <div className="container-corner bl" /><div className="container-corner br" />
                <div className="container-face">
                  <div className="container-code">CONT-FRONTEND // FE-01</div>
                  <p>React.js, JavaScript (ES6+), JSX, DOM Manipulation, Responsive Web Design, Flexbox, CSS Grid, Mobile-First Design, Cross-Browser Compatibility, Performance Optimization, UI/UX Principles</p>
                  <div className="container-items">
                    <span>React.js</span><span>ES6+</span><span>CSS Grid</span><span>Flexbox</span><span>UI/UX</span>
                  </div>
                </div>
              </div>

              <div className="container c-back crate-in">
                <div className="container-ridges" />
                <div className="container-door" />
                <div className="container-corner tl" /><div className="container-corner tr" />
                <div className="container-corner bl" /><div className="container-corner br" />
                <div className="container-face">
                  <div className="container-code">CONT-BACKEND // BE-02</div>
                  <p>Java, Spring Boot, Spring Data JPA, REST APIs, OOP, Data Structures & Algorithms (DSA), MySQL, CRUD Operations, Dynamic API Integration, Groq API, Firebase Auth, RBAC</p>
                  <div className="container-items">
                    <span>Java</span><span>Spring Boot</span><span>REST APIs</span><span>MySQL</span><span>Groq API</span>
                  </div>
                </div>
              </div>

              <div className="container c-tool crate-in">
                <div className="container-ridges" />
                <div className="container-door" />
                <div className="container-corner tl" /><div className="container-corner tr" />
                <div className="container-corner bl" /><div className="container-corner br" />
                <div className="container-face">
                  <div className="container-code">CONT-DEVOPS // TL-03</div>
                  <p>Git, GitHub, VS Code, IntelliJ IDEA, Vite, Vercel, Render, JSON workflows</p>
                  <div className="container-items">
                    <span>Git</span><span>GitHub</span><span>Vite</span><span>Vercel</span><span>Render</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="tape" />

        {/* ================================================================== */}
        /* 04. FEATURED PROJECTS / SHIPMENTS                                  */
        /* ================================================================== */
        <section id="shipments" className="manifest section-alt">
          <div className="manifest-head-row wrap">
            <div className="manifest-head">
              <div className="mini-label"><Box size={14} /> DELIVERED CARGO</div>
              <h2 className="manifest-title">04. FEATURED SHIPMENTS (PROJECTS)</h2>
            </div>
          </div>

          <div className="rail wrap">
            {/* Project 1 */}
            <div className="crate-card fragile crate-in">
              <div className="crate-top">
                <span className="crate-id"><Box size={14} /> CRATE #01</span>
                <span className="fragile-flag">FULL STACK</span>
              </div>
              <h3 className="crate-title">ShopSphere</h3>
              <div className="crate-tag">E-COMMERCE WEB APPLICATION</div>
              <p className="crate-desc">
                Full-stack e-commerce solution with product browsing, search, cart, wishlist, user auth, order management, and an Admin Dashboard with full CRUD operations.
              </p>
              <div className="crate-values">
                <div>
                  <b>FRONTEND</b>
                  <span>React.js + CSS3</span>
                </div>
                <div>
                  <b>BACKEND</b>
                  <span>Spring Boot + JPA</span>
                </div>
                <div>
                  <b>DB</b>
                  <span>MySQL</span>
                </div>
              </div>
              <div className="crate-contents">
                <span className="crate-contents-label">STACK:</span>
                <span>React.js</span><span>Spring Boot</span><span>MySQL</span><span>REST API</span>
              </div>
              <div className="crate-note">
                * Note: Render free tier backend requires 30-60s wake-up time upon cold start.
              </div>
            </div>

            {/* Project 2 */}
            <div className="crate-card crate-in">
              <div className="crate-top">
                <span className="crate-id"><Box size={14} /> CRATE #02</span>
                <span className="fragile-flag">AI INTEGRATED</span>
              </div>
              <h3 className="crate-title">AI Exam Companion</h3>
              <div className="crate-tag">EXAM PREPARATION PLATFORM</div>
              <p className="crate-desc">
                Interactive mock testing web application featuring instant score calculation, answer validation, concept explanations, and an AI Chatbot powered by Groq API.
              </p>
              <div className="crate-values">
                <div>
                  <b>AI CORE</b>
                  <span>Groq API</span>
                </div>
                <div>
                  <b>AUTH</b>
                  <span>Firebase Auth</span>
                </div>
                <div>
                  <b>UI</b>
                  <span>HTML5 / JS (ES6+)</span>
                </div>
              </div>
              <div className="crate-contents">
                <span className="crate-contents-label">STACK:</span>
                <span>JavaScript</span><span>Groq API</span><span>Firebase</span><span>JSON</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="crate-card crate-in">
              <div className="crate-top">
                <span className="crate-id"><Box size={14} /> CRATE #03</span>
                <span className="fragile-flag">FRONTEND</span>
              </div>
              <h3 className="crate-title">Portfolio Website</h3>
              <div className="crate-tag">PERSONAL BRANDING PLATFORM</div>
              <p className="crate-desc">
                Responsive developer portfolio created with reusable React components, modern CSS layouts (Flexbox/Grid), smooth navigation, and deployed on Vercel via Git pipelines.
              </p>
              <div className="crate-values">
                <div>
                  <b>BUILD</b>
                  <span>Vite + React</span>
                </div>
                <div>
                  <b>DEPLOY</b>
                  <span>Vercel</span>
                </div>
                <div>
                  <b>DESIGN</b>
                  <span>Flexbox / Grid</span>
                </div>
              </div>
              <div className="crate-contents">
                <span className="crate-contents-label">STACK:</span>
                <span>React.js</span><span>Vite</span><span>CSS3</span><span>Vercel</span>
              </div>
            </div>
          </div>
        </section>

        <div className="tape reverse" />

        {/* ================================================================== */}
        /* 05. TRACKING & HISTORY                                              */
        /* ================================================================== */
        <section id="tracking" className="manifest">
          <div className="manifest-head">
            <div className="mini-label"><Cpu size={14} /> CAREER LOGISTICS</div>
            <h2 className="manifest-title">05. TRACKING & WORK HISTORY</h2>
          </div>

          <div className="tracking-list wrap">
            {/* Internship 1 */}
            <div className="tracking-row crate-in">
              <div className="tracking-rail">
                <div className="tracking-dot done"><CheckCircle2 size={16} /></div>
                <div className="tracking-line" />
              </div>
              <div className="tracking-body">
                <div className="tracking-top">
                  <span className="tracking-status done">LOCATION: BENGALURU</span>
                  <span className="tracking-date">2026</span>
                </div>
                <div className="tracking-role">
                  <strong>Web Development Intern</strong> — <span>MR Tech Lab</span>
                </div>
                <ul>
                  <li>Developed responsive and accessible web pages using HTML5, CSS3 (Flexbox/Grid), and JavaScript (ES6+).</li>
                  <li>Integrated REST APIs with React.js to fetch and display dynamic data seamlessly.</li>
                  <li>Deployed frontend applications on Vercel and Render while maintaining cross-browser compatibility.</li>
                </ul>
              </div>
            </div>

            {/* Internship 2 */}
            <div className="tracking-row final crate-in">
              <div className="tracking-rail">
                <div className="tracking-dot done"><CheckCircle2 size={16} /></div>
              </div>
              <div className="tracking-body">
                <div className="tracking-top">
                  <span className="tracking-status done">LOCATION: BENGALURU</span>
                  <span className="tracking-date">2023</span>
                </div>
                <div className="tracking-role">
                  <strong>AI/ML & Python Intern</strong> — <span>KNOWX Innovations</span>
                </div>
                <ul>
                  <li>Worked on Python-based applications, data preprocessing, and basic model testing for AI/ML projects.</li>
                  <li>Collaborated with engineering teams to maintain code quality, support testing, and software development lifecycle activities.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Academic Ports */}
          <div className="ports-block wrap crate-in">
            <div className="yard-label"><Award size={14} /> EDUCATIONWAY BILLS</div>
            <div className="ports-row">
              <div className="port-card">
                <h4>Bachelor of Engineering (B.E.) — CS & Engineering</h4>
                <p>Dr. ACS College of Engineering, Bengaluru</p>
                <span>2023 – 2026</span>
              </div>
              <div className="port-card">
                <h4>Diploma in Information Science and Engineering</h4>
                <p>PVP Polytechnic, Bengaluru</p>
                <span>2020 – 2023</span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="seals-block wrap crate-in">
            <div className="yard-label"><ShieldCheck size={14} /> CERTIFICATIONS & SEALS</div>
            <div className="seals-row">
              <div className="seal">
                <CheckCircle2 className="seal-check" size={18} />
                <div>
                  <h5>Introduction to Java</h5>
                  <span>Infosys Springboard</span>
                </div>
              </div>
              <div className="seal">
                <CheckCircle2 className="seal-check" size={18} />
                <div>
                  <h5>Cloud Computing</h5>
                  <span>Infosys Springboard</span>
                </div>
              </div>
              <div className="seal">
                <CheckCircle2 className="seal-check" size={18} />
                <div>
                  <h5>Software Engineering</h5>
                  <span>Infosys Springboard</span>
                </div>
              </div>
              <div className="seal">
                <CheckCircle2 className="seal-check" size={18} />
                <div>
                  <h5>AI and Green Skills</h5>
                  <span>Edunet Foundation (Skills4Future)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="tape" />

        {/* ================================================================== */}
        /* 06. SHIPPING LABEL / CONTACT                                        */
        /* ================================================================== */}
        <section id="label" className="manifest label-sheet">
          <div className="manifest-head">
            <div className="mini-label"><Mail size={14} /> DISPATCH DIRECTORY</div>
            <h2 className="manifest-title">06. FINAL SHIPPING LABEL</h2>
          </div>

          <div className="ship-label crate-in">
            <div className="ship-label-top">
              <span>EXPRESS FREIGHT // PRIORITY</span>
              <span>DESTINATION: CONTACT DEVELOPER</span>
            </div>

            <div className="ship-label-to">
              <span className="ship-label-key">SHIP TO RECIPIENT:</span>
              <a href="mailto:Srinivasrahul838@gmail.com" className="ship-label-cta">
                Srinivasrahul838@gmail.com <ExternalLink size={24} />
              </a>
            </div>

            <div className="ship-label-fields">
              <div className="ship-label-row">
                <span><Phone size={14} /> PHONE NUMBER</span>
                <span>+91 7337634886</span>
              </div>
              <div className="ship-label-row">
                <span><MapPin size={14} /> LOCATION</span>
                <span>Bangalore, Karnataka, India</span>
              </div>
              <div className="ship-label-row">
                <span><Linkedin size={14} /> LINKEDIN</span>
                <span>
                  <a href="https://linkedin.com/in/rahul-s-6460b1238" target="_blank" rel="noreferrer">
                    linkedin.com/in/rahul-s-6460b1238
                  </a>
                </span>
              </div>
              <div className="ship-label-row">
                <span><Github size={14} /> GITHUB</span>
                <span>github.com/rahul-s</span>
              </div>
            </div>

            <div className="barcode">
              <span style={{ width: '4px' }} /><span style={{ width: '2px' }} /><span style={{ width: '6px' }} />
              <span style={{ width: '1px' }} /><span style={{ width: '5px' }} /><span style={{ width: '2px' }} />
              <span style={{ width: '8px' }} /><span style={{ width: '2px' }} /><span style={{ width: '4px' }} />
              <span style={{ width: '1px' }} /><span style={{ width: '6px' }} /><span style={{ width: '3px' }} />
              <span style={{ width: '5px' }} /><span style={{ width: '2px' }} /><span style={{ width: '7px' }} />
              <span style={{ width: '4px' }} /><span style={{ width: '1px' }} /><span style={{ width: '3px' }} />
            </div>
          </div>
        </section>
      </main>

      {/* ================================================================== */}
      /* FOOTER                                                              */
      /* ================================================================== */}
      <footer className="footer wrap">
        <span>© 2026 RAHUL S — FULLSTACK / FRONTEND DEVELOPER</span>
        <span>BANGALORE, KARNATAKA</span>
      </footer>
    </div>
  );
};

export default App;
