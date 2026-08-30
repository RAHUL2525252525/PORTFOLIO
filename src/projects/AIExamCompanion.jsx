import React from "react";

export default function AIExamCompanion() {
  const screenshots = Array.from(
    { length: 6 },
    (_, i) => `/${i + 32}.png.png`
  );

  return (
    <>
      <style>{`
        .exam-page {
          min-height:100vh;
          background:#f5f5f2;
          color:#111214;
          font-family:"DM Sans",Arial,sans-serif;
        }

        .exam-nav {
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
          border-bottom:1px solid #ddd;
        }

        .exam-nav a {
          color:#72757c;
          text-decoration:none;
          font-size:13px;
          font-weight:600;
        }

        .exam-logo {
          font-family:"Space Grotesk",sans-serif;
          font-weight:700;
        }

        .exam-logo span {
          color:#3457d5;
        }

        .exam-hero,
        .exam-content {
          max-width:1240px;
          margin:auto;
          padding-left:25px;
          padding-right:25px;
        }

        .exam-hero {
          padding-top:110px;
          padding-bottom:80px;
        }

        .exam-label {
          color:#3457d5;
          font-family:monospace;
          font-size:10px;
          letter-spacing:2px;
        }

        .exam-hero h1 {
          margin:25px 0 0;
          max-width:1050px;
          font-family:"Space Grotesk",sans-serif;
          font-size:clamp(55px,9vw,125px);
          line-height:.87;
          letter-spacing:-6px;
        }

        .exam-hero h1 span {
          color:#3457d5;
        }

        .exam-description {
          max-width:750px;
          margin-top:35px;
          color:#70737a;
          font-size:18px;
          line-height:1.8;
        }

        .exam-tags {
          display:flex;
          flex-wrap:wrap;
          gap:9px;
          margin-top:30px;
        }

        .exam-tags span {
          border:1px solid #d1d2cf;
          border-radius:100px;
          padding:9px 14px;
          font-size:11px;
        }

        .exam-cover {
          margin-top:70px;
          border-radius:32px;
          overflow:hidden;
          box-shadow:0 30px 80px rgba(0,0,0,.08);
        }

        .exam-cover img {
          display:block;
          width:100%;
        }

        .exam-section {
          padding:100px 0;
          border-top:1px solid #ddd;
        }

        .exam-grid {
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:80px;
        }

        .exam-section h2 {
          font-family:"Space Grotesk",sans-serif;
          font-size:clamp(38px,5vw,66px);
          line-height:1;
          letter-spacing:-3px;
          margin:18px 0 25px;
        }

        .exam-section p,
        .exam-section li {
          color:#6d7077;
          font-size:15px;
          line-height:1.85;
        }

        .exam-features {
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:15px;
          margin-top:45px;
        }

        .exam-card {
          padding:30px;
          background:white;
          border:1px solid #ddd;
          border-radius:22px;
          min-height:190px;
        }

        .exam-card span {
          color:#3457d5;
          font-family:monospace;
          font-size:10px;
        }

        .exam-card h3 {
          font-family:"Space Grotesk",sans-serif;
          font-size:20px;
          margin:25px 0 10px;
        }

        .exam-card p {
          font-size:12px;
        }

        .exam-flow {
          margin-top:35px;
          padding:35px;
          background:#111214;
          color:white;
          border-radius:28px;
          font-family:monospace;
          line-height:2;
          font-size:13px;
          overflow-x:auto;
        }

        .exam-tech {
          display:flex;
          flex-wrap:wrap;
          gap:9px;
          margin-top:35px;
        }

        .exam-tech span {
          padding:9px 14px;
          background:#111214;
          color:white;
          border-radius:100px;
          font-size:11px;
        }

        .exam-screens {
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:20px;
          margin-top:45px;
        }

        .exam-screen {
          overflow:hidden;
          border-radius:20px;
          background:white;
          border:1px solid #ddd;
        }

        .exam-screen img {
          display:block;
          width:100%;
          transition:transform .5s ease;
        }

        .exam-screen:hover img {
          transform:scale(1.025);
        }

        .exam-list {
          padding-left:20px;
        }

        .exam-end {
          margin:80px 0;
          padding:55px;
          background:#3457d5;
          border-radius:30px;
          text-align:center;
          color:white;
        }

        .exam-end h2 {
          font-family:"Space Grotesk",sans-serif;
          font-size:clamp(40px,6vw,75px);
          letter-spacing:-3px;
        }

        .exam-end a {
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
          .exam-grid,
          .exam-features,
          .exam-screens {
            grid-template-columns:1fr;
          }

          .exam-hero h1 {
            letter-spacing:-4px;
          }
        }

        @media(max-width:500px) {
          .exam-hero,
          .exam-content {
            padding-left:18px;
            padding-right:18px;
          }

          .exam-cover {
            border-radius:20px;
          }

          .exam-section {
            padding:70px 0;
          }

          .exam-end {
            padding:35px 20px;
          }
        }
      `}</style>

      <div className="exam-page">

        <nav className="exam-nav">
          <a href="/">← Back to Portfolio</a>
          <div className="exam-logo">
            RAHUL<span>.</span>
          </div>
        </nav>

        <header className="exam-hero">

          <div className="exam-label">
            04 / PYTHON / AI LEARNING
          </div>

          <h1>
            AI Exam <span>Companion</span>
          </h1>

          <p className="exam-description">
            An AI-powered exam preparation application built
            with Python and Flask. It helps learners practice
            through dynamically generated questions and
            structured preparation sessions.
          </p>

          <div className="exam-tags">
            <span>Python</span>
            <span>Flask</span>
            <span>Groq API</span>
            <span>Firebase</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          <div className="exam-cover">
            <img src={screenshots[0]} alt="AI Exam Companion" />
          </div>

        </header>

        <main className="exam-content">

          <section className="exam-section">

            <div className="exam-grid">

              <div>
                <div className="exam-label">01 / PURPOSE</div>
                <h2>Practice smarter with AI.</h2>
              </div>

              <div>
                <p>
                  AI Exam Companion was developed to provide
                  students with an interactive exam preparation
                  experience.
                </p>

                <p>
                  The application uses an AI API to generate
                  practice content based on the user's learning
                  requirements.
                </p>
              </div>

            </div>

          </section>

          <section className="exam-section">

            <div className="exam-label">02 / FEATURES</div>

            <h2>Focused on exam preparation.</h2>

            <div className="exam-features">

              <div className="exam-card">
                <span>01</span>
                <h3>Question Generation</h3>
                <p>
                  AI-generated practice questions for
                  preparation sessions.
                </p>
              </div>

              <div className="exam-card">
                <span>02</span>
                <h3>Practice Sessions</h3>
                <p>
                  Structured interaction for repeated
                  question practice.
                </p>
              </div>

              <div className="exam-card">
                <span>03</span>
                <h3>AI Integration</h3>
                <p>
                  Flask backend communicates with the Groq
                  API for generated content.
                </p>
              </div>

              <div className="exam-card">
                <span>04</span>
                <h3>Authentication</h3>
                <p>
                  Firebase can be used for authenticated
                  application access.
                </p>
              </div>

              <div className="exam-card">
                <span>05</span>
                <h3>Responsive UI</h3>
                <p>
                  Designed for convenient access across
                  desktop and mobile screens.
                </p>
              </div>

              <div className="exam-card">
                <span>06</span>
                <h3>API Backend</h3>
                <p>
                  Flask provides the backend layer for
                  frontend-to-AI communication.
                </p>
              </div>

            </div>

          </section>

          <section className="exam-section">

            <div className="exam-grid">

              <div>
                <div className="exam-label">03 / APPLICATION FLOW</div>
                <h2>From topic to practice.</h2>
              </div>

              <div>
                <div className="exam-flow">
                  Student
                  <br />
                  ↓
                  <br />
                  Select Topic / Input
                  <br />
                  ↓
                  <br />
                  Flask Backend
                  <br />
                  ↓
                  <br />
                  Groq API
                  <br />
                  ↓
                  <br />
                  Generated Questions
                  <br />
                  ↓
                  <br />
                  Practice Interface
                </div>
              </div>

            </div>

          </section>

          <section className="exam-section">

            <div className="exam-label">04 / TECHNOLOGY</div>

            <h2>Technology stack.</h2>

            <div className="exam-tech">
              <span>Python</span>
              <span>Flask</span>
              <span>Groq API</span>
              <span>Firebase</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
              <span>REST APIs</span>
            </div>

          </section>

          <section className="exam-section">

            <div className="exam-label">05 / SCREENSHOTS</div>

            <h2>Product walkthrough.</h2>

            <div className="exam-screens">
              {screenshots.map((image, index) => (
                <div className="exam-screen" key={image}>
                  <img
                    src={image}
                    alt={`AI Exam Companion screen ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

          </section>

          <section className="exam-section">

            <div className="exam-grid">

              <div>
                <div className="exam-label">06 / ENGINEERING</div>
                <h2>What I built.</h2>
              </div>

              <div>
                <ul className="exam-list">
                  <li>Python application development</li>
                  <li>Flask backend implementation</li>
                  <li>AI API integration</li>
                  <li>Dynamic content generation</li>
                  <li>Frontend/backend communication</li>
                  <li>Authentication integration</li>
                  <li>Responsive UI implementation</li>
                </ul>
              </div>

            </div>

          </section>

          <div className="exam-end">
            <h2>More from my work.</h2>
            <a href="/">← Return to Portfolio</a>
          </div>

        </main>

      </div>
    </>
  );
}
