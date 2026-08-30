import React from "react";

const imageFiles = import.meta.glob(
  "../assets/projects/digitalanalyticsdashboard/*.png.png",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const images = Object.entries(imageFiles)
  .sort(([a], [b]) => {
    const numberA = parseInt(a.match(/(\d+)\.png\.png$/)?.[1] || "0");
    const numberB = parseInt(b.match(/(\d+)\.png\.png$/)?.[1] || "0");
    return numberA - numberB;
  })
  .map(([, src]) => src);

const features = [
  {
    number: "01",
    title: "Google OAuth",
    text: "Implemented Google-based authentication for secure dashboard access."
  },
  {
    number: "02",
    title: "Analytics Overview",
    text: "Designed dashboard views that surface important activity and usage metrics."
  },
  {
    number: "03",
    title: "Firebase Data",
    text: "Used Firebase as the application's data layer for storing dashboard information."
  },
  {
    number: "04",
    title: "Visual Reporting",
    text: "Presented data through visual metric components to make trends easier to understand."
  },
  {
    number: "05",
    title: "Session Tracking",
    text: "Tracked application activity across user sessions for reporting."
  },
  {
    number: "06",
    title: "Responsive Design",
    text: "Built an interface that adapts across desktop and mobile screen sizes."
  }
];

export default function DigitalAnalyticsDashboard() {
  return (
    <div className="case-page dashboard-page">

      <nav className="case-nav">

        <a href="#/" className="case-back">
          <span>←</span>
          Back to Portfolio
        </a>

        <div className="case-nav-center">
          <span className="case-dot"></span>
          SOFTWARE ENGINEER
        </div>

        <span className="case-number">05 / 05</span>

      </nav>

      <section className="case-hero">

        <div className="case-hero-copy">

          <div className="project-kicker">

            <span>JAVASCRIPT / FIREBASE</span>

            <span>•</span>

            <span>HANDS-ON PROJECT</span>

          </div>

          <h1>
            Digital Analytics
            <span>Dashboard</span>
          </h1>

          <p className="case-tagline">
            Visual
            <br />
            Analytics Experience
          </p>

          <p className="case-intro">
            A responsive analytics dashboard designed to turn
            application activity into clear, visual metrics with
            Google authentication and Firebase data integration.
          </p>

          <div className="case-hero-tags">

            <span>JavaScript</span>
            <span>Firebase</span>
            <span>Google OAuth</span>
            <span>Chart.js</span>

          </div>

        </div>

        <div className="hero-project-visual dashboard-visual">

          <div className="visual-glow"></div>

          {images.length > 0 && (
            <img
              src={images[0]}
              alt="Digital Analytics Dashboard"
            />
          )}

          <div className="visual-label">
            <span>05</span>
            ANALYTICS DASHBOARD
          </div>

        </div>

      </section>

      <section className="case-section overview-section">

        <div className="section-eyebrow">
          01 — OVERVIEW
        </div>

        <div className="overview-grid">

          <div>

            <h2>
              Making data
              <span> easier to read.</span>
            </h2>

          </div>

          <div className="overview-text">

            <p>
              Digital Analytics Dashboard focuses on presenting
              application activity through a visual dashboard instead
              of requiring users to work directly with raw data.
            </p>

            <p>
              Google OAuth provides authentication while Firebase
              acts as the application's data layer.
            </p>

            <div className="stat-row">

              <div>
                <strong>OAuth</strong>
                <small>AUTHENTICATION</small>
              </div>

              <div>
                <strong>Firebase</strong>
                <small>DATA LAYER</small>
              </div>

              <div>
                <strong>Charts</strong>
                <small>VISUALIZATION</small>
              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="case-section">

        <div className="section-eyebrow">
          02 — FUNCTIONALITY
        </div>

        <div className="section-heading">

          <h2>
            Designed for
            <span> clarity.</span>
          </h2>

          <p>
            Dashboard functionality focused on making metrics easier
            to scan and understand.
          </p>

        </div>

        <div className="premium-feature-grid">

          {features.map((feature) => (

            <article
              className="premium-feature"
              key={feature.number}
            >

              <div className="feature-number">
                {feature.number}
              </div>

              <div>

                <h3>{feature.title}</h3>

                <p>{feature.text}</p>

              </div>

              <span className="feature-arrow">
                ↗
              </span>

            </article>

          ))}

        </div>

      </section>

      <section className="architecture-section">

        <div className="section-eyebrow">
          03 — DATA FLOW
        </div>

        <div className="architecture-content">

          <div>

            <h2>
              Data into
              <span> insight.</span>
            </h2>

            <p>
              The dashboard brings authentication, application data
              and visual reporting together in one interface.
            </p>

          </div>

          <div className="architecture-stack">

            <div className="architecture-card">
              <b>01</b>
              <strong>Authentication</strong>
              <span>Google OAuth</span>
            </div>

            <div className="architecture-line"></div>

            <div className="architecture-card">
              <b>02</b>
              <strong>Firebase</strong>
              <span>Application data</span>
            </div>

            <div className="architecture-line"></div>

            <div className="architecture-card">
              <b>03</b>
              <strong>Dashboard</strong>
              <span>Visual analytics</span>
            </div>

          </div>

        </div>

      </section>

      <section className="case-section">

        <div className="section-eyebrow">
          04 — TECHNOLOGY
        </div>

        <div className="technology-wrapper">

          <h2>
            Technology
            <span> stack.</span>
          </h2>

          <div className="large-tech-list">

            {[
              "JavaScript",
              "Firebase",
              "Google OAuth",
              "Chart.js",
              "HTML",
              "CSS",
              "Responsive Design"
            ].map((tech) => (
              <span key={tech}>{tech}</span>
            ))}

          </div>

        </div>

      </section>

      <section className="screens-section">

        <div className="section-eyebrow">
          05 — APPLICATION
        </div>

        <div className="section-heading">

          <h2>
            Inside the
            <span> dashboard.</span>
          </h2>

          <p>
            Selected views from the analytics experience.
          </p>

        </div>

        <div className="case-gallery">

          {images.map((image, index) => (

            <div
              className={`gallery-shot ${
                index === 0 ? "gallery-featured" : ""
              }`}
              key={image}
            >

              <img
                src={image}
                alt={`Digital Analytics Dashboard screen ${index + 1}`}
              />

              <span>
                SCREEN {String(index + 1).padStart(2, "0")}
              </span>

            </div>

          ))}

        </div>

      </section>

      <footer className="case-footer">

        <div>

          <span>PROJECT 05</span>

          <h2>
            Digital Analytics
            <em>Dashboard</em>
          </h2>

        </div>

        <a href="#/" className="footer-back">
          Back to portfolio ↑
        </a>

      </footer>

    </div>
  );
}
