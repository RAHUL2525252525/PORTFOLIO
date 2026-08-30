import React from "react";

export default function DigitalAnalyticsDashboard() {
  const screenshots = Array.from(
    { length: 5 },
    (_, i) => `/${i + 38}.png.png`
  );

  return (
    <>
      <style>{`
        .dashboard-page {
          min-height:100vh;
          background:#f5f5f2;
          color:#111214;
          font-family:"DM Sans",Arial,sans-serif;
        }

        .dashboard-nav {
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

        .dashboard-nav a {
          color:#72757c;
          text-decoration:none;
          font-size:13px;
          font-weight:600;
        }

        .dashboard-logo {
          font-family:"Space Grotesk",sans-serif;
          font-weight:700;
        }

        .dashboard-logo span {
          color:#3457d5;
        }

        .dashboard-hero,
        .dashboard-content {
          max-width:1240px;
          margin:auto;
          padding-left:25px;
          padding-right:25px;
        }

        .dashboard-hero {
          padding-top:110px;
          padding-bottom:80px;
        }

        .dashboard-label {
          color:#3457d5;
          font-family:monospace;
          font-size:10px;
          letter-spacing:2px;
        }

        .dashboard-hero h1 {
          margin-top:25px;
          max-width:1100px;
          font-family:"Space Grotesk",sans-serif;
          font-size:clamp(52px,9vw,125px);
          line-height:.87;
          letter-spacing:-6px;
        }

        .dashboard-hero h1 span {
          color:#3457d5;
        }

        .dashboard-description {
          max-width:760px;
          margin-top:35px;
          color:#70737a;
          font-size:18px;
          line-height:1.8;
        }

        .dashboard-tags {
          display:flex;
          flex-wrap:wrap;
          gap:9px;
          margin-top:30px;
        }

        .dashboard-tags span {
          padding:9px 14px;
          border:1px solid #d1d2cf;
          border-radius:100px;
          font-size:11px;
        }

        .dashboard-cover {
          margin-top:70px;
          overflow:hidden;
          border-radius:32px;
          box-shadow:0 30px 80px rgba(0,0,0,.08);
        }

        .dashboard-cover img {
          display:block;
          width:100%;
        }

        .dashboard-section {
          padding:100px 0;
          border-top:1px solid #ddd;
        }

        .dashboard-grid {
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:80px;
        }

        .dashboard-section h2 {
          font-family:"Space Grotesk",sans-serif;
          font-size:clamp(38px,5vw,66px);
          line-height:1;
          letter-spacing:-3px;
          margin:18px 0 25px;
        }

        .dashboard-section p,
        .dashboard-section li {
          color:#6d7077;
          font-size:15px;
          line-height:1.85;
        }

        .dashboard-features {
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:15px;
          margin-top:45px;
        }

        .dashboard-card {
          min-height:190px;
          padding:30px;
          background:white;
          border:1px solid #ddd;
          border-radius:22px;
        }

        .dashboard-card span {
          color:#3457d5;
          font-family:monospace;
          font-size:10px;
        }

        .dashboard-card h3 {
          margin:25px 0 10px;
          font-family:"Space Grotesk",sans-serif;
          font-size:20px;
        }

        .dashboard-card p {
          font-size:12px;
        }

        .dashboard-flow {
          padding:35px;
          margin-top:30px;
          border-radius:28px;
          background:#111214;
          color:white;
          font-family:monospace;
          font-size:13px;
          line-height:2;
        }

        .dashboard-tech {
          display:flex;
          flex-wrap:wrap;
          gap:9px;
          margin-top:35px;
        }

        .dashboard-tech span {
          padding:9px 14px;
          background:#111214;
          color:white;
          border-radius:100px;
          font-size:11px;
        }

        .dashboard-screens {
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:20px;
          margin-top:45px;
        }

        .dashboard-screen {
          overflow:hidden;
          border-radius:20px;
          border:1px solid #ddd;
          background:white;
        }

        .dashboard-screen img {
          display:block;
          width:100%;
          transition:transform .5s ease;
        }

        .dashboard-screen:hover img {
          transform:scale(1.025);
        }

        .dashboard-list {
          padding-left:20px;
        }

        .dashboard-end {
          margin:80px 0;
          padding:55px;
          text-align:center;
          border-radius:30px;
          background:#3457d5;
          color:white;
        }

        .dashboard-end h2 {
          font-family:"Space Grotesk",sans-serif;
          font-size:clamp(40px,6vw,75px);
          letter-spacing:-3px;
        }

        .dashboard-end a {
          display:inline-block;
          margin-top:20px;
          padding:14px 22px;
          border-radius:100px;
          background:white;
          color:#111;
          text-decoration:none;
          font-size:12px;
          font-weight:700;
        }

        @media(max-width:800px) {
          .dashboard-grid,
          .dashboard-features,
          .dashboard-screens {
            grid-template-columns:1fr;
          }

          .dashboard-hero h1 {
            letter-spacing:-4px;
          }
        }

        @media(max-width:500px) {
          .dashboard-hero,
          .dashboard-content {
            padding-left:18px;
            padding-right:18px;
          }

          .dashboard-cover {
            border-radius:20px;
          }

          .dashboard-section {
            padding:70px 0;
          }

          .dashboard-end {
            padding:35px 20px;
          }
        }
      `}</style>

      <div className="dashboard-page">

        <nav className="dashboard-nav">
          <a href="/">← Back to Portfolio</a>

          <div className="dashboard-logo">
            RAHUL<span>.</span>
          </div>
        </nav>

        <header className="dashboard-hero">

          <div className="dashboard-label">
            05 / JAVASCRIPT / ANALYTICS
          </div>

          <h1>
            Digital Analytics <span>Dashboard</span>
          </h1>

          <p className="dashboard-description">
            A modern analytics dashboard focused on
            authenticated access, Firebase-backed data and
            visual presentation of application metrics.
          </p>

          <div className="dashboard-tags">
            <span>JavaScript</span>
            <span>Firebase</span>
            <span>Google OAuth</span>
            <span>Chart.js</span>
            <span>HTML5</span>
            <span>CSS3</span>
          </div>

          <div className="dashboard-cover">
            <img
              src={screenshots[0]}
              alt="Digital Analytics Dashboard"
            />
          </div>

        </header>

        <main className="dashboard-content">

          <section className="dashboard-section">

            <div className="dashboard-grid">

              <div>
                <div className="dashboard-label">
                  01 / OVERVIEW
                </div>

                <h2>
                  Turning data into a usable interface.
                </h2>
              </div>

              <div>
                <p>
                  The Digital Analytics Dashboard was built as
                  a web-based analytics interface with a focus
                  on authentication, structured data and
                  visual reporting.
                </p>

                <p>
                  Google OAuth provides convenient authentication
                  while Firebase acts as the backend data layer.
                </p>
              </div>

            </div>

          </section>

          <section className="dashboard-section">

            <div className="dashboard-label">
              02 / FEATURES
            </div>

            <h2>
              A focused analytics experience.
            </h2>

            <div className="dashboard-features">

              <div className="dashboard-card">
                <span>01</span>
                <h3>Google OAuth</h3>
                <p>
                  Authentication through Google OAuth for
                  convenient user access.
                </p>
              </div>

              <div className="dashboard-card">
                <span>02</span>
                <h3>Firebase</h3>
                <p>
                  Firebase-backed application data and
                  authentication infrastructure.
                </p>
              </div>

              <div className="dashboard-card">
                <span>03</span>
                <h3>Analytics</h3>
                <p>
                  Data-focused dashboard views for understanding
                  application activity.
                </p>
              </div>

              <div className="dashboard-card">
                <span>04</span>
                <h3>Charts</h3>
                <p>
                  Chart-based visualizations make numerical
                  information easier to understand.
                </p>
              </div>

              <div className="dashboard-card">
                <span>05</span>
                <h3>Responsive UI</h3>
                <p>
                  Dashboard layouts adapt across desktop,
                  tablet and mobile screens.
                </p>
              </div>

              <div className="dashboard-card">
                <span>06</span>
                <h3>Data Interface</h3>
                <p>
                  Clean information hierarchy for quickly
                  reading application metrics.
                </p>
              </div>

            </div>

          </section>

          <section className="dashboard-section">

            <div className="dashboard-grid">

              <div>
                <div className="dashboard-label">
                  03 / DATA FLOW
                </div>

                <h2>
                  From authentication to analytics.
                </h2>
              </div>

              <div>

                <div className="dashboard-flow">
                  User
                  <br />
                  ↓
                  <br />
                  Google OAuth
                  <br />
                  ↓
                  <br />
                  Firebase Authentication
                  <br />
                  ↓
                  <br />
                  Firebase Data
                  <br />
                  ↓
                  <br />
                  Dashboard
                  <br />
                  ↓
                  <br />
                  Chart / Analytics Components
                </div>

              </div>

            </div>

          </section>

          <section className="dashboard-section">

            <div className="dashboard-label">
              04 / TECHNOLOGY
            </div>

            <h2>
              Technology stack.
            </h2>

            <div className="dashboard-tech">
              <span>JavaScript ES6+</span>
              <span>Firebase</span>
              <span>Google OAuth</span>
              <span>Chart.js</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>REST APIs</span>
            </div>

          </section>

          <section className="dashboard-section">

            <div className="dashboard-label">
              05 / SCREENSHOTS
            </div>

            <h2>
              Dashboard walkthrough.
            </h2>

            <div className="dashboard-screens">

              {screenshots.map((image, index) => (
                <div
                  className="dashboard-screen"
                  key={image}
                >
                  <img
                    src={image}
                    alt={`Digital Analytics Dashboard screen ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}

            </div>

          </section>

          <section className="dashboard-section">

            <div className="dashboard-grid">

              <div>
                <div className="dashboard-label">
                  06 / ENGINEERING
                </div>

                <h2>
                  What this project demonstrates.
                </h2>
              </div>

              <div>
                <ul className="dashboard-list">
                  <li>JavaScript application development</li>
                  <li>Firebase integration</li>
                  <li>Google OAuth authentication</li>
                  <li>Analytics dashboard design</li>
                  <li>Data visualization</li>
                  <li>Responsive frontend development</li>
                  <li>Component-based UI implementation</li>
                </ul>
              </div>

            </div>

          </section>

          <div className="dashboard-end">
            <h2>
              Explore more projects.
            </h2>

            <a href="/">
              ← Return to Portfolio
            </a>
          </div>

        </main>

      </div>
    </>
  );
}
