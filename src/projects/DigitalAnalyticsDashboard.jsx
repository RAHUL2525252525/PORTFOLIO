import React from "react";
import Gallery from "../components/Gallery";

const imageFiles = import.meta.glob("../assets/projects/digitalanalyticsdashboard/*.png.png", {
  eager: true,
  query: "?url",
  import: "default",
});

const images = Object.entries(imageFiles)
  .sort(([a], [b]) => {
    const numberA = parseInt(a.match(/(\d+)\.png\.png$/)?.[1] || "0");
    const numberB = parseInt(b.match(/(\d+)\.png\.png$/)?.[1] || "0");
    return numberA - numberB;
  })
  .map(([, src]) => src);

export default function DigitalAnalyticsDashboard() {
  return (
    <div className="project-page">
      <nav className="project-nav">
        <a href="#/" className="back-link">
          ← Back to Portfolio
        </a>
        <div className="project-logo">RAHUL S</div>
      </nav>

      <header className="project-hero">
        <p className="label">PROJECT 05</p>
        <div className="stack-pill js">JavaScript / Firebase</div>

        <h1>
          Digital Analytics <span>Dashboard</span>
        </h1>

        <p className="project-subtitle">Usage Analytics Dashboard</p>

        <p className="project-description">
          A web dashboard for tracking key usage metrics, secured with Google
          OAuth sign-in and backed by Firebase for data storage. Built to give
          a fast, visual read on activity trends without needing to query raw
          data directly.
        </p>

        <div className="meta-grid">
          <div className="meta-card">
            <small>ROLE</small>
            <strong>Frontend / Integration</strong>
          </div>
          <div className="meta-card">
            <small>PERIOD</small>
            <strong>Update project dates</strong>
          </div>
          <div className="meta-card">
            <small>ARCHITECTURE</small>
            <strong>Firebase-Backed SPA</strong>
          </div>
        </div>
      </header>

      <main className="content">
        <h2>
          Key <span>features</span>
        </h2>

        <div className="feature-grid">
          <div className="feature">
            <h3>Google OAuth Sign-In</h3>
            <p>Secure, one-click authentication using Google accounts.</p>
          </div>
          <div className="feature">
            <h3>Firebase Data Layer</h3>
            <p>Firebase stores and syncs usage data in real time.</p>
          </div>
          <div className="feature">
            <h3>Metric Visualizations</h3>
            <p>Chart-based views make usage trends easy to scan at a glance.</p>
          </div>
          <div className="feature">
            <h3>Responsive Layout</h3>
            <p>Dashboard adapts cleanly from desktop down to mobile.</p>
          </div>
          <div className="feature">
            <h3>Session Tracking</h3>
            <p>Tracks user activity across sessions for trend reporting.</p>
          </div>
          <div className="feature">
            <h3>Access Control</h3>
            <p>Only authenticated users can view or interact with dashboard data.</p>
          </div>
        </div>

        <h2>
          Technology <span>stack</span>
        </h2>

        <div className="tech-list">
          {["JavaScript", "Firebase", "Google OAuth", "Chart.js", "HTML", "CSS"].map((item) => (
            <span className="tech" key={item}>
              {item}
            </span>
          ))}
        </div>

        <h2>
          Project <span>screenshots</span>
        </h2>

        <Gallery images={images} projectName="Digital Analytics Dashboard" />
      </main>
    </div>
  );
}
