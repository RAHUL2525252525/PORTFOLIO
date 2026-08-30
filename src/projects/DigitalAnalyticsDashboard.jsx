import React from "react";

import image38 from "../assets/projects/digitalmarkettinganalytics/38.png.png";
import image39 from "../assets/projects/digitalmarkettinganalytics/39.png.png";
import image40 from "../assets/projects/digitalmarkettinganalytics/40.png.png";
import image41 from "../assets/projects/digitalmarkettinganalytics/41.png.png";
import image42 from "../assets/projects/digitalmarkettinganalytics/42.png.png";

const screenshots = [
  image38,
  image39,
  image40,
  image41,
  image42
];

export default function DigitalAnalyticsDashboard() {
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
          background: rgba(255,253,247,.94);
          border-bottom: 1px solid #d8e2ef;
          backdrop-filter: blur(16px);
        }

        .back-link {
          color: #123f91;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          transition: .25s;
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
          line-height: .94;
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

        .gallery {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
          padding-bottom: 100px;
        }

        .gallery-item {
          overflow: hidden;
          border: 1px solid #d8e2ef;
          border-radius: 20px;
          background: #fff;
          box-shadow: 0 8px 30px rgba(18,63,145,.07);
        }

        .gallery-item img {
          width: 100%;
          display: block;
          aspect-ratio: 16 / 10;
          object-fit: cover;
          transition: transform .45s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.035);
        }

        .project-footer {
          padding: 40px 0 70px;
          border-top: 1px solid #d8e2ef;
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }

        .footer-link {
          color: #123f91;
          font-weight: 700;
          text-decoration: none;
        }

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

          .gallery {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .project-feature {
            padding: 22px;
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
              CSV data handling and Firebase-backed functionality.
            </p>

            <div className="project-stack">
              {[
                "JavaScript",
                "Firebase",
                "Google OAuth",
                "Gemini API",
                "Chart.js"
              ].map((item) => (
                <span className="stack-pill" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </section>

          <section className="project-feature">
            <div className="feature-label">
              PROJECT HIGHLIGHT
            </div>

            <div className="feature-text">
              Google OAuth · Firebase backend
            </div>
          </section>

          <section>
            <h2 className="section-heading">
              Project Screenshots
            </h2>

            <div className="gallery">
              {screenshots.map((image, index) => (
                <div className="gallery-item" key={image}>
                  <img
                    src={image}
                    alt={`Digital Analytics Dashboard screenshot ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </section>

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
