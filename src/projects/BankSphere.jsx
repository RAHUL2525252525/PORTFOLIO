import React from "react";

export default function BankSphere() {
  const screenshots = Array.from(
    { length: 10 },
    (_, i) => `/${i + 14}.png.png`
  );

  return (
    <>
      <style>{`
        .project-page {
          min-height:100vh;
          background:#f5f5f2;
          color:#111214;
          font-family:"DM Sans",Arial,sans-serif;
        }

        .project-nav {
          height:76px;
          position:sticky;
          top:0;
          z-index:100;
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:0 6%;
          background:rgba(245,245,242,.9);
          backdrop-filter:blur(18px);
          border-bottom:1px solid #dedfdc;
        }

        .project-logo {
          font-family:"Space Grotesk",sans-serif;
          font-size:19px;
          font-weight:700;
        }

        .project-logo span {
          color:#3457d5;
        }

        .back-link {
          color:#72757c;
          text-decoration:none;
          font-size:13px;
          font-weight:600;
        }

        .project-hero,
        .project-content {
          max-width:1240px;
          margin:auto;
          padding-left:25px;
          padding-right:25px;
        }

        .project-hero {
          padding-top:110px;
          padding-bottom:80px;
        }

        .project-kicker,
        .section-label {
          color:#3457d5;
          font-family:monospace;
          font-size:10px;
          letter-spacing:2px;
        }

        .project-hero h1 {
          margin:25px 0 0;
          font-family:"Space Grotesk",sans-serif;
          font-size:clamp(60px,10vw,140px);
          line-height:.85;
          letter-spacing:-7px;
        }

        .project-hero h1 span {
          color:#3457d5;
        }

        .project-subtitle {
          max-width:760px;
          margin-top:35px;
          color:#72757c;
          font-size:18px;
          line-height:1.8;
        }

        .project-meta {
          display:flex;
          flex-wrap:wrap;
          gap:9px;
          margin-top:35px;
        }

        .project-meta span {
          border:1px solid #d1d2cf;
          padding:9px 13px;
          border-radius:100px;
          font-size:11px;
          color:#555860;
        }

        .hero-image {
          margin-top:70px;
          overflow:hidden;
          border-radius:32px;
          box-shadow:0 30px 80px rgba(0,0,0,.09);
        }

        .hero-image img {
          display:block;
          width:100%;
        }

        .project-content {
          padding-bottom:120px;
        }

        .overview {
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:80px;
          padding:80px 0;
          border-top:1px solid #dedfdc;
          border-bottom:1px solid #dedfdc;
        }

        h2 {
          font-family:"Space Grotesk",sans-serif;
          font-size:clamp(38px,5vw,66px);
          line-height:1;
          letter-spacing:-3px;
          margin:18px 0 25px;
        }

        p, li {
          color:#696c73;
          font-size:15px;
          line-height:1.85;
        }

        .feature-grid {
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:15px;
          margin-top:45px;
        }

        .feature {
          padding:30px;
          background:white;
          border:1px solid #dedfdc;
          border-radius:22px;
          min-height:190px;
        }

        .feature-number {
          color:#3457d5;
          font-family:monospace;
          font-size:11px;
        }

        .feature h3 {
          font-family:"Space Grotesk",sans-serif;
          margin:25px 0 10px;
          font-size:20px;
        }

        .feature p {
          font-size:12px;
        }

        .case {
          padding:100px 0;
          border-bottom:1px solid #dedfdc;
        }

        .two-column {
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:80px;
        }

        .architecture {
          margin-top:30px;
          padding:30px;
          border-radius:25px;
          background:#111214;
          color:white;
          font-family:monospace;
          font-size:13px;
          line-height:2;
        }

        .tech {
          display:flex;
          flex-wrap:wrap;
          gap:9px;
          margin-top:35px;
        }

        .tech span {
          background:#111214;
          color:white;
          padding:9px 13px;
          border-radius:100px;
          font-size:11px;
        }

        .screenshots {
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:20px;
          margin-top:45px;
        }

        .screen {
          overflow:hidden;
          background:white;
          border-radius:20px;
          border:1px solid #dedfdc;
        }

        .screen img {
          display:block;
          width:100%;
          transition:transform .5s ease;
        }

        .screen:hover img {
          transform:scale(1.025);
        }

        .security-box {
          padding:35px;
          background:#111214;
          color:white;
          border-radius:28px;
        }

        .security-box h3 {
          font-family:"Space Grotesk",sans-serif;
          font-size:28px;
          margin-bottom:15px;
        }

        .security-box p,
        .security-box li {
          color:#aaaeb7;
        }

        .security-box ul {
          padding-left:20px;
        }

        .footer-card {
          margin-top:80px;
          padding:55px;
          border-radius:30px;
          background:#3457d5;
          color:white;
          text-align:center;
        }

        .footer-card h2 {
          color:white;
        }

        .footer-card a {
          display:inline-block;
          padding:14px 22px;
          border-radius:100px;
          background:white;
          color:#111214;
          text-decoration:none;
          font-weight:700;
          font-size:12px;
        }

        @media(max-width:800px) {
          .overview,
          .two-column,
          .feature-grid,
          .screenshots {
            grid-template-columns:1fr;
          }

          .project-hero h1 {
            letter-spacing:-4px;
          }
        }

        @media(max-width:500px) {
          .project-nav {
            padding:0 18px;
          }

          .project-hero,
          .project-content {
            padding-left:18px;
            padding-right:18px;
          }

          .hero-image {
            border-radius:20px;
          }

          .case {
            padding:70px 0;
          }

          .footer-card {
            padding:35px 20px;
          }
        }
      `}</style>

      <div className="project-page">

        <nav className="project-nav">
          <a href="/" className="back-link">← Back to Portfolio</a>
          <div className="project-logo">
            RAHUL<span>.</span>
          </div>
        </nav>

        <header className="project-hero">

          <div className="project-kicker">
            02 / JAVA FULL STACK / BANKING
          </div>

          <h1>
            Bank<span>Sphere</span>
          </h1>

          <p className="project-subtitle">
            A secure online banking system developed using Java,
            Spring Boot, Spring Security, React.js and MySQL.
            The application focuses on authentication,
            authorization, account management and transaction
            workflows.
          </p>

          <div className="project-meta">
            <span>Java 17</span>
            <span>Spring Boot</span>
            <span>Spring Security</span>
            <span>JWT</span>
            <span>React.js</span>
            <span>MySQL</span>
            <span>Docker</span>
          </div>

          <div className="hero-image">
            <img src={screenshots[0]} alt="BankSphere application" />
          </div>

        </header>

        <main className="project-content">

          <section className="overview">

            <div>
              <div className="section-label">01 / OVERVIEW</div>
              <h2>Security-first banking software.</h2>
            </div>

            <div>
              <p>
                BankSphere was designed as a banking application
                where security and structured backend architecture
                are central to the implementation.
              </p>

              <p>
                The system uses JWT authentication, role-based
                access control, Spring Security and a normalized
                relational database.
              </p>
            </div>

          </section>

          <section className="case">

            <div className="section-label">02 / FEATURES</div>

            <h2>Core banking workflows.</h2>

            <div className="feature-grid">

              <div className="feature">
                <span className="feature-number">01</span>
                <h3>Registration</h3>
                <p>
                  User registration with validated account
                  information and secure authentication flow.
                </p>
              </div>

              <div className="feature">
                <span className="feature-number">02</span>
                <h3>JWT Login</h3>
                <p>
                  Token-based authentication using Spring
                  Security and JWT.
                </p>
              </div>

              <div className="feature">
                <span className="feature-number">03</span>
                <h3>RBAC</h3>
                <p>
                  Role-based authorization controlling access
                  to protected application functionality.
                </p>
              </div>

              <div className="feature">
                <span className="feature-number">04</span>
                <h3>Accounts</h3>
                <p>
                  Account information and authenticated user
                  management.
                </p>
              </div>

              <div className="feature">
                <span className="feature-number">05</span>
                <h3>Transactions</h3>
                <p>
                  Structured transaction workflows between
                  application users.
                </p>
              </div>

              <div className="feature">
                <span className="feature-number">06</span>
                <h3>Database</h3>
                <p>
                  Normalized relational data model supporting
                  multiple banking entities.
                </p>
              </div>

            </div>

          </section>

          <section className="case">

            <div className="two-column">

              <div>
                <div className="section-label">03 / SECURITY</div>
                <h2>Authentication and authorization.</h2>

                <p>
                  The application separates authentication from
                  authorization and protects secured endpoints
                  using JWT-based access control.
                </p>
              </div>

              <div className="security-box">

                <h3>Security flow</h3>

                <p>
                  User → Login → JWT → Request → Security Filter
                  → Role Validation → Controller
                </p>

                <ul>
                  <li>JWT authentication</li>
                  <li>Spring Security filters</li>
                  <li>Role-based access control</li>
                  <li>Protected REST endpoints</li>
                  <li>Backend validation</li>
                </ul>

              </div>

            </div>

          </section>

          <section className="case">

            <div className="section-label">04 / ARCHITECTURE</div>

            <h2>Structured backend.</h2>

            <div className="architecture">
              React.js Frontend
              <br />
              ↓
              <br />
              Axios REST Requests
              <br />
              ↓
              <br />
              Spring Security
              <br />
              ↓
              <br />
              JWT Authentication
              <br />
              ↓
              <br />
              Controller Layer
              <br />
              ↓
              <br />
              Service Layer
              <br />
              ↓
              <br />
              Repository Layer
              <br />
              ↓
              <br />
              MySQL
            </div>

          </section>

          <section className="case">

            <div className="section-label">05 / TECHNOLOGY</div>

            <h2>Technology stack.</h2>

            <div className="tech">
              <span>Java 17</span>
              <span>Spring Boot</span>
              <span>Spring Security</span>
              <span>JWT</span>
              <span>Spring Data JPA</span>
              <span>Hibernate</span>
              <span>React.js</span>
              <span>Axios</span>
              <span>MySQL</span>
              <span>Docker</span>
              <span>Maven</span>
              <span>Git</span>
            </div>

          </section>

          <section className="case">

            <div className="section-label">06 / SCREENSHOTS</div>

            <h2>Application walkthrough.</h2>

            <div className="screenshots">
              {screenshots.map((image, index) => (
                <div className="screen" key={image}>
                  <img
                    src={image}
                    alt={`BankSphere screen ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

          </section>

          <section className="case">

            <div className="two-column">

              <div>
                <div className="section-label">07 / ENGINEERING</div>
                <h2>What I demonstrated.</h2>
              </div>

              <div>
                <ul>
                  <li>Secure REST API development</li>
                  <li>JWT authentication</li>
                  <li>Role-based authorization</li>
                  <li>Spring Security configuration</li>
                  <li>Relational database design</li>
                  <li>JPA entity relationships</li>
                  <li>React frontend integration</li>
                  <li>Docker containerization</li>
                </ul>
              </div>

            </div>

          </section>

          <div className="footer-card">
            <h2>Explore more work.</h2>
            <a href="/">← Return to Portfolio</a>
          </div>

        </main>
      </div>
    </>
  );
}
