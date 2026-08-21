import "./index.css";

function App() {
  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}
      <header className="navbar">

        <div className="logo">RS</div>

        <nav className="nav-links">
          <a href="#home" className="active">
            <span>01.</span> HOME
          </a>

          <a href="#about">
            <span>02.</span> ABOUT
          </a>

          <a href="#skills">
            <span>03.</span> SKILLS
          </a>

          <a href="#projects">
            <span>04.</span> PROJECTS
          </a>

          <a href="#experience">
            <span>05.</span> EXPERIENCE
          </a>

          <a href="#contact">
            <span>06.</span> CONTACT
          </a>
        </nav>

        <button className="talk-button">
          LET'S TALK
          <b>→</b>
        </button>

      </header>


      {/* ================= HERO ================= */}
      <section className="hero" id="home">

        {/* Cyber decorative lines */}
        <div className="decor-line line-left"></div>
        <div className="decor-line line-top"></div>
        <div className="decor-line line-bottom"></div>

        {/* ================= LEFT ================= */}
        <div className="hero-left">

          <div className="developer-label">
            <span>//</span> FULL STACK DEVELOPER
          </div>

          <h1 className="hero-title">
            I BUILD
            <br />
            <span className="glitch">EXPERIENCES</span>
          </h1>

          <p className="hero-description">
            Crafting high-performance web applications
            <br />
            with modern technologies.
          </p>

          <div className="hero-actions">

            <a href="#projects" className="primary-button">
              EXPLORE MY WORK
              <span>→</span>
            </a>

            <a href="#" className="secondary-button">
              DOWNLOAD CV
              <span>↓</span>
            </a>

          </div>

        </div>


        {/* ================= PORTRAIT ================= */}
        <div className="portrait-area">

          {/* outer rings */}
          <div className="orbit orbit-1"></div>
          <div className="orbit orbit-2"></div>
          <div className="orbit orbit-3"></div>

          {/* glowing center */}
          <div className="portrait-glow"></div>

          {/* decorative nodes */}
          <span className="node node-1"></span>
          <span className="node node-2"></span>
          <span className="node node-3"></span>
          <span className="node node-4"></span>

          {/* YOUR ORIGINAL PHOTO */}
          <div className="portrait">
            <img src="/rahul.png" alt="Rahul S." />
          </div>

          {/* Availability */}
          <div className="availability">
            <div>AVAILABLE FOR</div>
            <strong>FREELANCE</strong>
          </div>

        </div>


        {/* ================= SOCIAL ================= */}
        <div className="social-links">

          <a href="#" title="GitHub">
            GH
          </a>

          <a href="#" title="LinkedIn">
            IN
          </a>

          <a href="mailto:your@email.com" title="Email">
            @
          </a>

        </div>

      </section>


      {/* ================= TECH STACK ================= */}
      <section className="tech-section" id="skills">

        <div className="tech-heading">
          <span>//</span> TECH STACK
        </div>

        <div className="tech-container">

          <div className="tech-item">
            <div className="tech-logo react-logo">⚛</div>
            <span>React</span>
          </div>

          <div className="tech-item">
            <div className="tech-logo next-logo">N</div>
            <span>Next.js</span>
          </div>

          <div className="tech-item">
            <div className="tech-logo ts-logo">TS</div>
            <span>TypeScript</span>
          </div>

          <div className="tech-item">
            <div className="tech-logo node-logo">⬡</div>
            <span>Node.js</span>
          </div>

          <div className="tech-item">
            <div className="tech-logo mongo-logo">◆</div>
            <span>MongoDB</span>
          </div>

          <div className="tech-item">
            <div className="tech-logo tailwind-logo">≋</div>
            <span>Tailwind</span>
          </div>

          <div className="tech-item">
            <div className="tech-logo docker-logo">◈</div>
            <span>Docker</span>
          </div>

        </div>

      </section>


      {/* ================= BOTTOM STATUS ================= */}
      <div className="system-status">

        <span>&gt; INIT.PORTFOLIO_2026</span>

        <span className="status-online">
          ● SYSTEM ONLINE
        </span>

      </div>


      {/* ================= FUTURE SECTIONS ================= */}

      <section id="about" className="empty-section">
        <span>// ABOUT</span>
      </section>

      <section id="projects" className="empty-section">
        <span>// PROJECTS</span>
      </section>

      <section id="experience" className="empty-section">
        <span>// EXPERIENCE</span>
      </section>

      <section id="contact" className="empty-section">
        <span>// CONTACT</span>
      </section>

    </div>
  );
}

export default App;
