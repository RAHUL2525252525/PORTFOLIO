import React from "react";

export default function LifeDecisionAssistant() {
  const screenshots = Array.from(
    { length: 8 },
    (_, i) => `/${i + 24}.png.png`
  );

  return (
    <>
      <style>{`
        .lda-page {
          min-height:100vh;
          background:#f5f5f2;
          color:#111214;
          font-family:"DM Sans",Arial,sans-serif;
        }

        .lda-nav {
          height:76px;
          position:sticky;
          top:0;
          z-index:100;
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:0 6%;
          background:rgba(245,245,242,.9);
          backdrop-filter:blur(18px);
          border-bottom:1px solid #ddd;
        }

        .lda-nav a {
          color:#72757c;
          text-decoration:none;
          font-size:13px;
          font-weight:600;
        }

        .lda-logo {
          font-family:"Space Grotesk",sans-serif;
          font-weight:700;
        }

        .lda-logo span {
          color:#3457d5;
        }

        .lda-hero,
        .lda-content {
          max-width:1240px;
          margin:auto;
          padding-left:25px;
          padding-right:25px;
        }

        .lda-hero {
          padding-top:110px;
          padding-bottom:80px;
        }

        .lda-label {
          color:#3457d5;
          font-family:monospace;
          font-size:10px;
          letter-spacing:2px;
        }

        .lda-hero h1 {
          max-width:1050px;
          margin:25px 0 0;
          font-family:"Space Grotesk",sans-serif;
          font-size:clamp(55px,9vw,125px);
          line-height:.88;
          letter-spacing:-6px;
        }

        .lda-hero h1 span {
          color:#3457d5;
        }

        .lda-description {
          max-width:760px;
          margin-top:35px;
          color:#70737a;
          font-size:18px;
          line-height:1.8;
        }

        .lda-tags {
          display:flex;
          flex-wrap:wrap;
          gap:9px;
          margin-top:30px;
        }

        .lda-tags span {
          padding:9px 14px;
          border:1px solid #d2d3d0;
          border-radius:100px;
          font-size:11px;
        }

        .lda-cover {
          margin-top:70px;
          overflow:hidden;
          border-radius:32px;
          box-shadow:0 30px 80px rgba(0,0,0,.08);
        }

        .lda-cover img {
          width:100%;
          display:block;
        }

        .lda-section {
          padding:100px 0;
          border-top:1px solid #ddd;
        }

        .lda-grid {
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:80px;
        }

        .lda-section h2 {
          font-family:"Space Grotesk",sans-serif;
          font-size:clamp(38px,5vw,66px);
          line-height:1;
          letter-spacing:-3px;
          margin:18px 0 25px;
        }

        .lda-section p,
        .lda-section li {
          color:#6d7077;
          font-size:15px;
          line-height:1.85;
        }

        .lda-features {
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:15px;
          margin-top:45px;
        }

        .lda-card {
          padding:30px;
          min-height:190px;
          border:1px solid #ddd;
          border-radius:22px;
          background:white;
        }

        .lda-card span {
          color:#3457d5;
          font-family:monospace;
          font-size:10px;
        }

        .lda-card h3 {
          font-family:"Space Grotesk",sans-serif;
          font-size:20px;
          margin:25px 0 10px;
        }

        .lda-card p {
          font-size:12px;
        }

        .lda-flow {
          margin-top:35px;
          padding:35px;
          background:#111214;
          color:#fff;
          border-radius:28px;
          font-family:monospace;
          line-height:2;
          font-size:13px;
          overflow-x:auto;
        }

        .lda-tech {
          display:flex;
          flex-wrap:wrap;
          gap:9px;
          margin-top:35px;
        }

        .lda-tech span {
          background:#111214;
          color:white;
          padding:9px 14px;
          border-radius:100px;
          font-size:11px;
        }

        .lda-screens {
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:20px;
          margin-top:45px;
        }

        .lda-screen {
          overflow:hidden;
          border-radius:20px;
          border:1px solid #ddd;
          background:white;
        }

        .lda-screen img {
          display:block;
          width:100%;
          transition:transform .5s ease;
        }

        .lda-screen:hover img {
          transform:scale(1.025);
        }

        .lda-end {
          margin:80px 0;
          padding:55px;
          background:#3457d5;
          color:white;
          text-align:center;
          border-radius:30px;
        }

        .lda-end h2 {
          font-family:"Space Grotesk",sans-serif;
          font-size:clamp(40px,6vw,75px);
          letter-spacing:-3px;
        }

        .lda-end a {
          display:inline-block;
          margin-top:20px;
          padding:14px 22px;
          background:white;
          color:#111;
          border-radius:100px;
          text-decoration:none;
          font-size:12px;
          font-weight:700;
        }

        @media(max-width:800px) {
          .lda-grid,
          .lda-features,
          .lda-screens {
            grid-template-columns:1fr;
          }

          .lda-hero h1 {
            letter-spacing:-4px;
          }
        }

        @media(max-width:500px) {
          .lda-hero,
          .lda-content {
            padding-left:18px;
            padding-right:18px;
          }

          .lda-cover {
            border-radius:20px;
          }

          .lda-section {
            padding:70px 0;
          }

          .lda-end {
            padding:35px 20px;
          }
        }
      `}</style>

      <div className="lda-page">

        <nav className="lda-nav">
          <a href="/">← Back to Portfolio</a>
          <div className="lda-logo">
            RAHUL<span>.</span>
          </div>
        </nav>

        <header className="lda-hero">

          <div className="lda-label">
            03 / PYTHON / AI APPLICATION
          </div>

          <h1>
            Life Decision <span>Assistant</span>
          </h1>

          <p className="lda-description">
            An AI-powered decision-support web application built
            with Python and Flask. The application connects
            multiple large language model providers behind a
            unified backend experience.
          </p>

          <div className="lda-tags">
            <span>Python</span>
            <span>Flask</span>
            <span>Firebase</span>
            <span>Groq API</span>
            <span>Gemini API</span>
            <span>OpenRouter API</span>
          </div>

          <div className="lda-cover">
            <img src={screenshots[0]} alt="Life Decision Assistant" />
          </div>

        </header>

        <main className="lda-content">

          <section className="lda-section">

            <div className="lda-grid">

              <div>
                <div className="lda-label">01 / CONCEPT</div>
                <h2>AI for structured decisions.</h2>
              </div>

              <div>
                <p>
                  The application was designed to help users
                  think through decisions by providing structured
                  AI-assisted responses.
                </p>

                <p>
                  Instead of depending on one model provider,
                  the backend integrates multiple AI services
                  through a unified Flask application.
                </p>
              </div>

            </div>

          </section>

          <section className="lda-section">

            <div className="lda-label">02 / FEATURES</div>

            <h2>Designed around the user.</h2>

            <div className="lda-features">

              <div className="lda-card">
                <span>01</span>
                <h3>Decision Input</h3>
                <p>
                  Users provide context and information about
                  the decision they are considering.
                </p>
              </div>

              <div className="lda-card">
                <span>02</span>
                <h3>AI Analysis</h3>
                <p>
                  User input is processed through configured
                  AI providers.
                </p>
              </div>

              <div className="lda-card">
                <span>03</span>
                <h3>Structured Output</h3>
                <p>
                  Responses are presented through a clean,
                  understandable interface.
                </p>
              </div>

              <div className="lda-card">
                <span>04</span>
                <h3>Authentication</h3>
                <p>
                  Firebase authentication provides account
                  and access management.
                </p>
              </div>

              <div className="lda-card">
                <span>05</span>
                <h3>Multiple Providers</h3>
                <p>
                  Groq, Gemini and OpenRouter can be integrated
                  behind the same backend.
                </p>
              </div>

              <div className="lda-card">
                <span>06</span>
                <h3>Web Experience</h3>
                <p>
                  Responsive frontend design makes the
                  application accessible across devices.
                </p>
              </div>

            </div>

          </section>

          <section className="lda-section">

            <div className="lda-grid">

              <div>
                <div className="lda-label">03 / AI FLOW</div>
                <h2>One backend. Multiple AI providers.</h2>
              </div>

              <div>
                <div className="lda-flow">
                  User Input
                  <br />
                  ↓
                  <br />
                  Flask API
                  <br />
                  ↓
                  <br />
                  Request Validation
                  <br />
                  ↓
                  <br />
                  AI Provider
                  <br />
                  ├── Groq
                  <br />
                  ├── Gemini
                  <br />
                  └── OpenRouter
                  <br />
                  ↓
                  <br />
                  Structured Response
                  <br />
                  ↓
                  <br />
                  Frontend
                </div>
              </div>

            </div>

          </section>

          <section className="lda-section">

            <div className="lda-label">04 / TECHNOLOGY</div>

            <h2>Technology stack.</h2>

            <div className="lda-tech">
              <span>Python</span>
              <span>Flask</span>
              <span>Firebase</span>
              <span>Groq API</span>
              <span>Gemini API</span>
              <span>OpenRouter API</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

          </section>

          <section className="lda-section">

            <div className="lda-label">05 / SCREENSHOTS</div>

            <h2>Application walkthrough.</h2>

            <div className="lda-screens">
              {screenshots.map((image, index) => (
                <div className="lda-screen" key={image}>
                  <img
                    src={image}
                    alt={`Life Decision Assistant screen ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

          </section>

          <section className="lda-section">

            <div className="lda-grid">

              <div>
                <div className="lda-label">06 / ENGINEERING</div>
                <h2>Hands-on AI development.</h2>
              </div>

              <div>
                <ul>
                  <li>Python backend development</li>
                  <li>Flask API development</li>
                  <li>Third-party AI API integration</li>
                  <li>Firebase authentication</li>
                  <li>Frontend and backend integration</li>
                  <li>API request handling</li>
                  <li>Responsive web interface development</li>
                </ul>
              </div>

            </div>

          </section>

          <div className="lda-end">
            <h2>Back to the portfolio.</h2>
            <a href="/">← Return to Portfolio</a>
          </div>

        </main>
      </div>
    </>
  );
}
