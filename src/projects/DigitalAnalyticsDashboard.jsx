import React, { useState } from "react";

import image38 from "../assets/projects/digitalanalyticsdashboard/38.png.png";
import image39 from "../assets/projects/digitalanalyticsdashboard/39.png.png";
import image40 from "../assets/projects/digitalanalyticsdashboard/40.png.png";
import image41 from "../assets/projects/digitalanalyticsdashboard/41.png.png";
import image42 from "../assets/projects/digitalanalyticsdashboard/42.png.png";

const screenshots = [
  image38,
  image39,
  image40,
  image41,
  image42,
];

/* =========================================================
   PROJECT DATA
   ========================================================= */

const WORKFLOW_STEPS = [
  {
    title: "Google OAuth sign-in",
    description:
      "Users authenticate through Firebase's Google OAuth provider, so access to the dashboard is tied to an actual Google account rather than a separate set of credentials.",
  },
  {
    title: "Firebase-backed data layer",
    description:
      "Dashboard metrics are stored and synced through Firebase, giving each signed-in user their own data without a separate backend server to maintain.",
  },
  {
    title: "Gemini API for narrative insights",
    description:
      "Aggregated metrics are sent to the Gemini API with a prompt asking for a short plain-language summary, so the dashboard surfaces what changed instead of just the raw numbers.",
  },
  {
    title: "Chart.js visualization layer",
    description:
      "Chart.js renders the time series and breakdowns from whatever Firebase currently holds, so the visuals update as soon as the underlying data changes.",
  },
];

const FEATURES = [
  { title: "Google sign-in", description: "Authentication handled entirely through Firebase's OAuth flow." },
  { title: "Real-time data sync", description: "Metrics stay current as Firebase data updates." },
  { title: "AI-generated insights", description: "Gemini API turns raw metrics into a short written summary." },
  { title: "Interactive charts", description: "Chart.js visualizations for trends and breakdowns." },
  { title: "Historical views", description: "Past data remains browsable alongside the latest figures." },
];

const CHALLENGES = [
  {
    title: "Turning raw metrics into a plain-language summary",
    challenge:
      "Numbers on a dashboard don't explain themselves — knowing that a metric moved doesn't tell a user why it matters without someone manually interpreting it.",
    approach:
      "Sent the aggregated metrics to the Gemini API with a prompt asking for a short natural-language summary, so each chart is paired with a plain-English takeaway instead of numbers alone.",
  },
  {
    title: "Keeping charts in sync with Firebase updates",
    challenge:
      "As underlying data changes, the charts need to reflect it without a full page reload or the UI falling out of sync with what's actually stored.",
    approach:
      "Subscribed to Firebase data listeners and fed updates directly into the Chart.js instances, so visualizations refresh automatically whenever the data does.",
  },
];

const TIMELINE = [
  { title: "Google OAuth + Firebase setup", description: "Configured authentication and the Firebase project." },
  { title: "Data structure design", description: "Modeled how metrics are stored and synced per user." },
  { title: "Chart.js dashboard views", description: "Built the core visualizations for trends and breakdowns." },
  { title: "Gemini API integration", description: "Added the prompt flow that generates written insight summaries." },
  { title: "Testing & polish", description: "Verified sync behavior and refined the dashboard UI." },
];

export default function DigitalAnalyticsDashboard() {
  const [selectedImage, setSelectedImage] = useState(0);

  const previousImage = () => {
    setSelectedImage((current) =>
      current === 0 ? screenshots.length - 1 : current - 1
    );
  };

  const nextImage = () => {
    setSelectedImage((current) =>
      current === screenshots.length - 1 ? 0 : current + 1
    );
  };

  return (
    <>
      <style>{`
        .project-page {
          min-height: 100vh;
          background: #fffdf7;
          color: #14213d;
          font-family: "DM Sans", sans-serif;
        }

        .project-nav {
          position: sticky;
          top: 0;
          z-index: 100;
          min-height: 76px;
          padding: 0 max(24px, calc((100% - 1180px) / 2));
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 253, 247, 0.94);
          border-bottom: 1px solid #d8e2ef;
          backdrop-filter: blur(16px);
        }

        .back-link {
          color: #123f91;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          transition: 0.2s ease;
        }

        .back-link:hover {
          transform: translateX(-5px);
        }

        .nav-project-name {
          font-family: "Space Grotesk", sans-serif;
          font-weight: 700;
          color: #081a3a;
        }

        .project-container {
          width: min(1180px, calc(100% - 48px));
          margin: auto;
        }

        .project-hero {
          padding: 100px 0 70px;
        }

        .project-number {
          color: #123f91;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 18px;
        }

        .project-tag {
          display: inline-flex;
          padding: 8px 14px;
          border-radius: 50px;
          background: #eaf1fb;
          color: #123f91;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
          margin-bottom: 25px;
        }

        .project-title {
          max-width: 1050px;
          margin: 0;
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(45px, 7vw, 90px);
          line-height: 0.94;
          letter-spacing: -5px;
          color: #081a3a;
        }

        .project-title span {
          color: #123f91;
        }

        .project-description {
          max-width: 760px;
          margin-top: 30px;
          color: #64748b;
          font-size: 17px;
          line-height: 1.9;
        }

        .project-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 30px;
        }

        .stack-pill {
          padding: 9px 14px;
          border-radius: 50px;
          border: 1px solid #d8e2ef;
          background: #f7faff;
          color: #38506f;
          font-size: 12px;
          font-weight: 700;
        }

        .project-feature {
          margin: 30px 0 70px;
          padding: 30px;
          border-radius: 26px;
          background: #f2f6fc;
          border: 1px solid #d8e2ef;
        }

        .feature-label {
          color: #123f91;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .feature-text {
          margin-top: 12px;
          font-family: "Space Grotesk", sans-serif;
          font-size: 24px;
          font-weight: 600;
          color: #081a3a;
        }

        .section-heading {
          margin-bottom: 30px;
          font-family: "Space Grotesk", sans-serif;
          font-size: 42px;
          letter-spacing: -2px;
          color: #081a3a;
        }

        /* NEW CONTENT SECTIONS */

        .project-section {
          padding: 70px 0;
          border-top: 1px solid #d8e2ef;
        }

        .section-eyebrow {
          color: #123f91;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 14px;
        }

        .section-intro {
          max-width: 680px;
          margin-bottom: 40px;
          color: #64748b;
          font-size: 15px;
          line-height: 1.8;
        }

        .workflow-list {
          border-top: 1px solid #d8e2ef;
        }

        .workflow-step {
          display: grid;
          grid-template-columns: 56px 1fr;
          gap: 26px;
          padding: 28px 0;
          border-bottom: 1px solid #d8e2ef;
        }

        .workflow-index {
          color: #123f91;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .5px;
        }

        .workflow-content h3 {
          color: #081a3a;
          font-size: 16px;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .workflow-content p {
          color: #64748b;
          font-size: 14px;
          line-height: 1.75;
          max-width: 640px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .feature-card {
          padding: 26px;
          background: #f7faff;
          border: 1px solid #d8e2ef;
          border-radius: 22px;
          transition: .3s ease;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(18,63,145,.08);
        }

        .feature-card h3 {
          color: #081a3a;
          font-size: 15px;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .feature-card p {
          color: #64748b;
          font-size: 13px;
          line-height: 1.65;
        }

        .challenges-list {
          display: grid;
          gap: 14px;
        }

        .challenge-row {
          padding: 26px;
          background: #f7faff;
          border: 1px solid #d8e2ef;
          border-radius: 22px;
        }

        .challenge-row h3 {
          color: #081a3a;
          font-size: 16px;
          font-weight: 800;
          margin-bottom: 12px;
        }

        .challenge-row p {
          color: #64748b;
          font-size: 14px;
          line-height: 1.75;
          margin-bottom: 8px;
        }

        .challenge-row p:last-child {
          margin-bottom: 0;
        }

        .challenge-row strong {
          color: #081a3a;
          font-weight: 800;
        }

        .timeline-list {
          margin-top: 6px;
        }

        .timeline-step {
          display: grid;
          grid-template-columns: 44px 1fr;
          gap: 24px;
          position: relative;
          padding-bottom: 32px;
        }

        .timeline-step:last-child {
          padding-bottom: 0;
        }

        .timeline-number {
          position: relative;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #081a3a;
          color: #fffdf7;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 800;
          flex-shrink: 0;
        }

        .timeline-step:not(:last-child) .timeline-number::after {
          content: "";
          position: absolute;
          top: 44px;
          left: 19px;
          width: 2px;
          height: calc(100% - 12px);
          background: #d8e2ef;
        }

        .timeline-content h3 {
          color: #081a3a;
          font-size: 15px;
          font-weight: 800;
          margin-bottom: 6px;
          padding-top: 8px;
        }

        .timeline-content p {
          color: #64748b;
          font-size: 13px;
          line-height: 1.65;
        }

        /* ==============================
           FLIPKART STYLE IMAGE VIEWER
           ============================== */

        .image-viewer {
          display: grid;
          grid-template-columns: 92px minmax(0, 1fr);
          gap: 22px;
          padding: 24px;
          background: #ffffff;
          border: 1px solid #d8e2ef;
          border-radius: 24px;
          box-shadow: 0 12px 40px rgba(18, 63, 145, 0.08);
        }

        .thumbnail-column {
          display: flex;
          flex-direction: column;
          gap: 10px;
          max-height: 650px;
          overflow-y: auto;
          padding-right: 4px;
        }

        .thumbnail-column::-webkit-scrollbar {
          width: 4px;
        }

        .thumbnail-column::-webkit-scrollbar-thumb {
          background: #b8c8dc;
          border-radius: 20px;
        }

        .thumbnail-wrapper {
          flex-shrink: 0;
        }

        .thumbnail {
          width: 78px;
          height: 64px;
          padding: 4px;
          background: #ffffff;
          border: 2px solid #d8e2ef;
          border-radius: 10px;
          cursor: pointer;
          transition: 0.2s ease;
          display: block;
        }

        .thumbnail:hover {
          border-color: #6d8fbd;
          transform: translateY(-2px);
        }

        .thumbnail.active {
          border-color: #123f91;
          box-shadow: 0 0 0 2px rgba(18, 63, 145, 0.12);
        }

        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        .thumbnail-number {
          text-align: center;
          font-size: 10px;
          font-weight: 700;
          color: #64748b;
          margin-top: 4px;
        }

        .main-image-area {
          min-width: 0;
          min-height: 620px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8fafc;
          border: 1px solid #e1e8f0;
          border-radius: 18px;
          overflow: hidden;
        }

        /*
          IMPORTANT:
          contain = complete screenshot is visible.
          No cropping.
          No forced zoom.
        */
        .main-project-image {
          width: 100%;
          height: 620px;
          object-fit: contain;
          padding: 18px;
          display: block;
          user-select: none;
        }

        .image-counter {
          position: absolute;
          top: 16px;
          right: 16px;
          z-index: 3;
          padding: 7px 12px;
          border-radius: 30px;
          background: rgba(8, 26, 58, 0.88);
          color: #ffffff;
          font-size: 12px;
          font-weight: 700;
        }

        .image-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 4;
          width: 44px;
          height: 58px;
          border: none;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.94);
          color: #123f91;
          font-size: 30px;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
          transition: 0.2s ease;
        }

        .image-arrow:hover {
          background: #123f91;
          color: #ffffff;
        }

        .image-arrow.left {
          left: 16px;
        }

        .image-arrow.right {
          right: 16px;
        }

        .gallery-hint {
          margin-top: 15px;
          text-align: center;
          color: #64748b;
          font-size: 13px;
        }

        .project-footer {
          margin-top: 0;
          padding: 45px 0 70px;
          border-top: 1px solid #d8e2ef;
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }

        .footer-link {
          color: #123f91;
          font-weight: 700;
          text-decoration: none;
          transition: 0.2s ease;
        }

        .footer-link:hover {
          color: #081a3a;
        }

        /* ==============================
           RESPONSIVE
           ============================== */

        @media (max-width: 700px) {
          .project-container {
            width: min(100% - 32px, 1180px);
          }

          .project-nav {
            padding: 0 16px;
          }

          .project-hero {
            padding: 65px 0 45px;
          }

          .project-title {
            font-size: clamp(42px, 13vw, 68px);
            letter-spacing: -3px;
          }

          .project-section {
            padding: 50px 0;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .workflow-step {
            grid-template-columns: 36px 1fr;
            gap: 16px;
          }

          .image-viewer {
            grid-template-columns: 1fr;
            padding: 12px;
          }

          .thumbnail-column {
            order: 2;
            flex-direction: row;
            max-height: none;
            overflow-x: auto;
            overflow-y: hidden;
            padding-bottom: 5px;
          }

          .thumbnail {
            width: 76px;
            height: 58px;
          }

          .main-image-area {
            min-height: 400px;
          }

          .main-project-image {
            height: 400px;
            padding: 10px;
          }

          .project-footer {
            flex-direction: column;
          }
        }
      `}</style>

      <main className="project-page">

        <nav className="project-nav">
          <a className="back-link" href="#projects">
            ← Back to Projects
          </a>

          <span className="nav-project-name">
            RAHUL.
          </span>
        </nav>

        <div className="project-container">

          {/* HERO */}
          <section className="project-hero">

            <div className="project-number">
              05 / SELECTED PROJECT
            </div>

            <div className="project-tag">
              JAVASCRIPT · FIREBASE · ANALYTICS
            </div>

            <h1 className="project-title">
              Digital Analytics <span>Dashboard</span>
            </h1>

            <p className="project-description">
              A modern analytics dashboard with Google OAuth authentication,
              Firebase-backed functionality and data visualization features.
            </p>

            <div className="project-stack">
              {[
                "JavaScript",
                "Firebase",
                "Google OAuth",
                "Gemini API",
                "Chart.js",
              ].map((item) => (
                <span className="stack-pill" key={item}>
                  {item}
                </span>
              ))}
            </div>

          </section>

          {/* FEATURE */}
          <section className="project-feature">

            <div className="feature-label">
              PROJECT HIGHLIGHT
            </div>

            <div className="feature-text">
              Google OAuth · Firebase backend
            </div>

          </section>

          {/* HOW IT'S BUILT */}
          <section className="project-section">
            <div className="section-eyebrow">ARCHITECTURE & WORKFLOW</div>
            <h2 className="section-heading">How it's built</h2>
            <p className="section-intro">
              Authentication, data storage and AI-generated insights each sit
              behind Firebase and the Gemini API, so the dashboard stays a
              thin visualization layer on top of them.
            </p>

            <div className="workflow-list">
              {WORKFLOW_STEPS.map((step, index) => (
                <div className="workflow-step" key={step.title}>
                  <div className="workflow-index">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="workflow-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* KEY FEATURES */}
          <section className="project-section">
            <div className="section-eyebrow">WHAT IT DOES</div>
            <h2 className="section-heading">Key features</h2>
            <p className="section-intro">
              Turns raw metrics into charts and plain-language takeaways.
            </p>

            <div className="features-grid">
              {FEATURES.map((feature) => (
                <div className="feature-card" key={feature.title}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CHALLENGES & LEARNINGS */}
          <section className="project-section">
            <div className="section-eyebrow">PROBLEM SOLVING</div>
            <h2 className="section-heading">Challenges & learnings</h2>

            <div className="challenges-list">
              {CHALLENGES.map((item) => (
                <div className="challenge-row" key={item.title}>
                  <h3>{item.title}</h3>
                  <p><strong>Challenge:</strong> {item.challenge}</p>
                  <p><strong>Approach:</strong> {item.approach}</p>
                </div>
              ))}
            </div>
          </section>

          {/* DEVELOPMENT TIMELINE */}
          <section className="project-section">
            <div className="section-eyebrow">PROCESS</div>
            <h2 className="section-heading">Development timeline</h2>

            <div className="timeline-list">
              {TIMELINE.map((step, index) => (
                <div className="timeline-step" key={step.title}>
                  <div className="timeline-number">{index + 1}</div>

                  <div className="timeline-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SCREENSHOTS */}
          <section className="project-section">
            <div className="section-eyebrow">GALLERY</div>
            <h2 className="section-heading">
              Project screenshots
            </h2>

            <div className="image-viewer">

              {/* THUMBNAILS */}
              <div className="thumbnail-column">

                {screenshots.map((image, index) => (
                  <div
                    className="thumbnail-wrapper"
                    key={image}
                  >

                    <button
                      type="button"
                      className={`thumbnail ${
                        selectedImage === index ? "active" : ""
                      }`}
                      onClick={() => setSelectedImage(index)}
                      aria-label={`View screenshot ${index + 1}`}
                    >
                      <img
                        src={image}
                        alt={`Digital Analytics Dashboard thumbnail ${
                          index + 1
                        }`}
                      />
                    </button>

                    <div className="thumbnail-number">
                      {index + 1}
                    </div>

                  </div>
                ))}

              </div>

              {/* MAIN IMAGE */}
              <div className="main-image-area">

                <div className="image-counter">
                  {selectedImage + 1} / {screenshots.length}
                </div>

                <button
                  type="button"
                  className="image-arrow left"
                  onClick={previousImage}
                  aria-label="Previous screenshot"
                >
                  ‹
                </button>

                <img
                  className="main-project-image"
                  src={screenshots[selectedImage]}
                  alt={`Digital Analytics Dashboard screenshot ${
                    selectedImage + 1
                  }`}
                />

                <button
                  type="button"
                  className="image-arrow right"
                  onClick={nextImage}
                  aria-label="Next screenshot"
                >
                  ›
                </button>

              </div>

            </div>

            <div className="gallery-hint">
              Click the thumbnails to view each screen
            </div>

          </section>

          {/* FOOTER */}
          <footer className="project-footer">

            <a className="footer-link" href="#projects">
              ← All Projects
            </a>

            <a className="footer-link" href="#projects">
              Finish Case Studies →
            </a>

          </footer>

        </div>

      </main>
    </>
  );
}
