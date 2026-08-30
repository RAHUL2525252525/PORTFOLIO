import React, { useState } from "react";

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
          background: rgba(255,253,247,.94);
          border-bottom: 1px solid #d8e2ef;
          backdrop-filter: blur(16px);
        }

        .back-link {
          color: #123f91;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
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

        .image-viewer {
          display: grid;
          grid-template-columns: 92px minmax(0, 1fr);
          gap: 22px;
          padding: 24px;
          background: #fff;
          border: 1px solid #d8e2ef;
          border-radius: 24px;
          box-shadow: 0 12px 40px rgba(18,63,145,.08);
        }

        .thumbnail-column {
          display: flex;
          flex-direction: column;
          gap: 10px;
          max-height: 650px;
          overflow-y: auto;
        }

        .thumbnail {
          width: 78px;
          height: 64px;
          padding: 4px;
          background: #fff;
          border: 2px solid #d8e2ef;
          border-radius: 10px;
          cursor: pointer;
          flex-shrink: 0;
        }

        .thumbnail:hover {
          border-color: #6d8fbd;
        }

        .thumbnail.active {
          border-color: #123f91;
          box-shadow: 0 0 0 2px rgba(18,63,145,.12);
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

        .main-project-image {
          width: 100%;
          height: 620px;
          object-fit: contain;
          padding: 18px;
          display: block;
        }

        .image-counter {
          position: absolute;
          top: 16px;
          right: 16px;
          z-index: 3;
          padding: 7px 12px;
          border-radius: 30px;
          background: rgba(8,26,58,.88);
          color: white;
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
          background: rgba(255,255,255,.94);
          color: #123f91;
          font-size: 30px;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(0,0,0,.12);
        }

        .image-arrow:hover {
          background: #123f91;
          color: white;
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
          margin-top: 80px;
          padding: 40px 0 70px;
          border-top: 1px solid #d8e2ef;
          display: flex;
          justify-content: space-between;
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
          }

          .main-image-area {
            min-height: 400px;
          }

          .main-project-image {
            height: 400px;
          }

          .project-footer {
            flex-direction: column;
            gap: 20px;
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

            <div className="image-viewer">

              <div className="thumbnail-column">

                {screenshots.map((image, index) => (
                  <div key={image}>

                    <button
                      className={`thumbnail ${
                        selectedImage === index ? "active" : ""
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img
                        src={image}
                        alt={`Digital Analytics Dashboard thumbnail ${index + 1}`}
                      />
                    </button>

                    <div className="thumbnail-number">
                      {index + 1}
                    </div>

                  </div>
                ))}

              </div>

              <div className="main-image-area">

                <div className="image-counter">
                  {selectedImage + 1} / {screenshots.length}
                </div>

                <button
                  className="image-arrow left"
                  onClick={previousImage}
                >
                  ‹
                </button>

                <img
                  className="main-project-image"
                  src={screenshots[selectedImage]}
                  alt={`Digital Analytics Dashboard screenshot ${selectedImage + 1}`}
                />

                <button
                  className="image-arrow right"
                  onClick={nextImage}
                >
                  ›
                </button>

              </div>

            </div>

            <div className="gallery-hint">
              Click the thumbnails to view each screen
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

