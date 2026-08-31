import React, { useState } from "react";

import image32 from "../assets/projects/aiexamcompanion/32.png.png";
import image33 from "../assets/projects/aiexamcompanion/33.png.png";
import image34 from "../assets/projects/aiexamcompanion/34.png.png";
import image35 from "../assets/projects/aiexamcompanion/35.png.png";
import image36 from "../assets/projects/aiexamcompanion/36.png.png";
import image37 from "../assets/projects/aiexamcompanion/37.png.png";

const screenshots = [
  image32,
  image33,
  image34,
  image35,
  image36,
  image37
];

/* =========================================================
   PROJECT DATA
   ========================================================= */

const LIVE_LINKS = [
  { label: "Live App", url: "https://ai-exam-companion-ghzc.onrender.com" },
];

const WORKFLOW_STEPS = [
  {
    title: "AI-generated question sets",
    description:
      "A Flask backend sends a structured prompt to the Groq API describing the topic and difficulty, then parses and validates the response into a clean set of practice questions before it's stored or shown.",
  },
  {
    title: "MongoDB for question & session data",
    description:
      "Generated question sets and exam sessions are stored in MongoDB, whose flexible document schema fits the variable shape of AI-generated content (different numbers of questions, options and formats) better than a fixed relational schema.",
  },
  {
    title: "Firebase authentication",
    description:
      "Firebase handles sign-in, so each user's practice history and generated sets are tied to their account.",
  },
  {
    title: "Vanilla JS exam session UI",
    description:
      "The frontend, built with plain HTML, CSS and JavaScript, walks the user through a practice session — presenting questions, capturing answers and scoring the attempt against the stored question set.",
  },
];

const FEATURES = [
  { title: "AI-generated practice sets", description: "Groq-powered generation of topic-specific practice questions." },
  { title: "Topic-based sessions", description: "Pick a topic and difficulty to generate a focused practice run." },
  { title: "MongoDB-backed storage", description: "Flexible document storage for variable-length question sets." },
  { title: "Firebase authentication", description: "Per-user sign-in and saved practice history." },
  { title: "Session scoring", description: "Automatic scoring of each completed practice session." },
];

const CHALLENGES = [
  {
    title: "Getting reliably structured questions from the model",
    challenge:
      "Asking an LLM for exam questions can return inconsistent formatting — missing options, extra commentary, or malformed structure — which breaks a UI expecting a fixed shape.",
    approach:
      "Used a strict prompt template asking for a specific JSON structure, then validated and re-requested on the backend if the response didn't parse cleanly, so bad output never reaches the frontend.",
  },
  {
    title: "Storing variable-length question sets",
    challenge:
      "Different topics produce different numbers of questions and option counts, which doesn't map cleanly onto a fixed relational table structure.",
    approach:
      "Chose MongoDB for question and session storage so each generated set can be stored as-is, without forcing every question into identical columns.",
  },
];

const TIMELINE = [
  { title: "Question format design", description: "Decided on the JSON shape a generated question set should follow." },
  { title: "Flask + Groq integration", description: "Built the prompt template and response parsing/validation." },
  { title: "MongoDB schema", description: "Set up collections for question sets and exam sessions." },
  { title: "Firebase auth", description: "Added sign-in and per-user history." },
  { title: "Frontend quiz UI", description: "Built the practice-session flow in HTML, CSS and JavaScript." },
  { title: "Deployment", description: "Deployed the app on Render." },
];

export default function AIExamCompanion() {
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
          --cream: #f5f0e6;
          --cream-light: #faf7f0;
          --cream-dark: #e9e1d2;
          --navy: #071a33;
          --navy-soft: #0d294b;
          --navy-light: #16395f;
          --blue: #3b82c4;
          --blue-light: #78b7e8;
          --text: #071a33;
          --text-soft: #4d5b6d;
          --border: rgba(7, 26, 51, 0.14);
          --shadow: 0 18px 45px rgba(7, 26, 51, 0.09);
          --shadow-heavy: 0 25px 70px rgba(7, 26, 51, 0.15);
          --radius-sm: 12px;
          --radius-md: 20px;
          --radius-lg: 28px;
          --radius-xl: 38px;

          min-height: 100vh;
          background: var(--cream);
          color: var(--text);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
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
          background: rgba(245, 240, 230, 0.92);
          border-bottom: 1px solid var(--border);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--navy);
          font-weight: 800;
          font-size: 0.78rem;
          letter-spacing: 0.05em;
          text-decoration: none;
          transition: transform 0.25s ease, color 0.25s ease;
        }

        .back-link:hover {
          color: var(--blue);
          transform: translateX(-4px);
        }

        .nav-project-name {
          font-weight: 900;
          letter-spacing: 0.14em;
          color: var(--navy);
          font-size: 1rem;
        }

        .nav-project-name span {
          color: var(--blue);
          font-size: 1.3rem;
        }

        .project-container {
          width: min(1180px, calc(100% - 48px));
          margin: auto;
        }

        .project-hero {
          padding: 90px 0 60px;
        }

        .project-number {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--navy);
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 0.16em;
          margin-bottom: 22px;
        }

        .project-tag {
          display: inline-flex;
          padding: 9px 15px;
          border-radius: 999px;
          background: rgba(59, 130, 196, 0.08);
          border: 1px solid rgba(59, 130, 196, 0.2);
          color: var(--blue);
          font-size: 0.68rem;
          font-weight: 900;
          letter-spacing: 0.12em;
          margin-bottom: 26px;
        }

        .project-title {
          max-width: 900px;
          margin: 0;
          font-weight: 900;
          font-size: clamp(2.8rem, 6.5vw, 5.4rem);
          line-height: 0.94;
          letter-spacing: -0.045em;
          color: var(--navy);
        }

        .project-title span {
          color: var(--blue);
        }

        .project-description {
          max-width: 700px;
          margin-top: 26px;
          color: var(--text-soft);
          font-size: 1rem;
          line-height: 1.85;
        }

        .project-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin-top: 28px;
        }

        .stack-pill {
          padding: 9px 14px;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: var(--cream-light);
          color: var(--text-soft);
          font-size: 0.72rem;
          font-weight: 800;
        }

        /* LIVE LINKS */

        .project-links {
          margin-top: 34px;
        }

        .live-label {
          color: var(--blue);
          font-size: 0.66rem;
          font-weight: 900;
          letter-spacing: 0.14em;
          margin-bottom: 12px;
        }

        .live-link-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .live-link-list a {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 11px 16px;
          color: var(--navy);
          background: var(--cream-light);
          border: 1px solid var(--border);
          border-radius: 999px;
          font-size: 0.76rem;
          font-weight: 800;
          text-decoration: none;
          transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease;
        }

        .live-link-list a:hover {
          background: var(--navy);
          color: var(--cream);
          transform: translateY(-2px);
        }

        /* FEATURE HIGHLIGHT */

        .project-feature {
          margin: 40px 0 30px;
          padding: 32px;
          border-radius: var(--radius-lg);
          background: var(--cream-light);
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
        }

        .feature-label {
          color: var(--blue);
          font-size: 0.66rem;
          font-weight: 900;
          letter-spacing: 0.16em;
        }

        .feature-text {
          margin-top: 12px;
          font-size: clamp(1.3rem, 2.6vw, 1.8rem);
          font-weight: 900;
          letter-spacing: -0.02em;
          color: var(--navy);
        }

        /* SECTION HEADINGS */

        .project-section {
          padding: 70px 0;
          border-top: 1px solid var(--border);
        }

        .section-eyebrow {
          color: var(--blue);
          font-size: 0.68rem;
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .section-heading {
          margin-bottom: 12px;
          font-size: clamp(1.9rem, 3.6vw, 2.8rem);
          font-weight: 900;
          letter-spacing: -0.03em;
          color: var(--navy);
        }

        .section-intro {
          max-width: 680px;
          margin-bottom: 40px;
          color: var(--text-soft);
          font-size: 0.95rem;
          line-height: 1.8;
        }

        /* HOW IT'S BUILT */

        .workflow-list {
          border-top: 1px solid var(--border);
        }

        .workflow-step {
          display: grid;
          grid-template-columns: 56px 1fr;
          gap: 26px;
          padding: 28px 0;
          border-bottom: 1px solid var(--border);
        }

        .workflow-index {
          color: var(--blue);
          font-size: 0.75rem;
          font-weight: 900;
          letter-spacing: 0.05em;
        }

        .workflow-content h3 {
          color: var(--navy);
          font-size: 1rem;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .workflow-content p {
          color: var(--text-soft);
          font-size: 0.86rem;
          line-height: 1.75;
          max-width: 640px;
        }

        /* KEY FEATURES */

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .feature-card {
          padding: 26px;
          background: var(--cream-light);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow);
        }

        .feature-card h3 {
          color: var(--navy);
          font-size: 0.92rem;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .feature-card p {
          color: var(--text-soft);
          font-size: 0.8rem;
          line-height: 1.65;
        }

        /* CHALLENGES */

        .challenges-list {
          display: grid;
          gap: 14px;
        }

        .challenge-row {
          padding: 26px;
          background: var(--cream-light);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
        }

        .challenge-row h3 {
          color: var(--navy);
          font-size: 0.98rem;
          font-weight: 800;
          margin-bottom: 12px;
        }

        .challenge-row p {
          color: var(--text-soft);
          font-size: 0.85rem;
          line-height: 1.75;
          margin-bottom: 8px;
        }

        .challenge-row p:last-child {
          margin-bottom: 0;
        }

        .challenge-row strong {
          color: var(--navy);
          font-weight: 800;
        }

        /* TIMELINE */

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
          background: var(--navy);
          color: var(--cream);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.76rem;
          font-weight: 900;
          flex-shrink: 0;
        }

        .timeline-step:not(:last-child) .timeline-number::after {
          content: "";
          position: absolute;
          top: 44px;
          left: 19px;
          width: 2px;
          height: calc(100% - 12px);
          background: var(--border);
        }

        .timeline-content h3 {
          color: var(--navy);
          font-size: 0.94rem;
          font-weight: 800;
          margin-bottom: 6px;
          padding-top: 8px;
        }

        .timeline-content p {
          color: var(--text-soft);
          font-size: 0.82rem;
          line-height: 1.65;
        }

        /* SCREENSHOTS */

        .image-viewer {
          display: grid;
          grid-template-columns: 92px minmax(0, 1fr);
          gap: 22px;
          padding: 24px;
          background: var(--cream-light);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow);
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
          background: var(--cream-dark);
          border-radius: 20px;
        }

        .thumbnail {
          width: 78px;
          height: 64px;
          padding: 4px;
          background: var(--cream);
          border: 2px solid var(--border);
          border-radius: 10px;
          cursor: pointer;
          transition: 0.2s ease;
          flex-shrink: 0;
        }

        .thumbnail:hover {
          border-color: var(--blue-light);
          transform: translateY(-2px);
        }

        .thumbnail.active {
          border-color: var(--blue);
          box-shadow: 0 0 0 2px rgba(59, 130, 196, 0.15);
        }

        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        .main-image-area {
          min-width: 0;
          min-height: 620px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--cream);
          border: 1px solid var(--border);
          border-radius: 18px;
          overflow: hidden;
        }

        .main-project-image {
          width: 100%;
          height: 620px;
          object-fit: contain;
          display: block;
          padding: 18px;
          user-select: none;
        }

        .image-counter {
          position: absolute;
          top: 16px;
          right: 16px;
          z-index: 3;
          padding: 7px 12px;
          border-radius: 30px;
          background: rgba(7, 26, 51, 0.88);
          color: var(--cream);
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
          color: var(--blue);
          font-size: 30px;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(7, 26, 51, 0.12);
          transition: 0.2s ease;
        }

        .image-arrow:hover {
          background: var(--navy);
          color: var(--cream);
        }

        .image-arrow.left {
          left: 16px;
        }

        .image-arrow.right {
          right: 16px;
        }

        .thumbnail-number {
          text-align: center;
          font-size: 10px;
          font-weight: 700;
          color: var(--text-soft);
          margin-top: 4px;
        }

        .gallery-hint {
          margin-top: 15px;
          text-align: center;
          color: var(--text-soft);
          font-size: 13px;
        }

        /* FOOTER */

        .project-footer {
          margin-top: 0;
          padding: 45px 0 70px;
          border-top: 1px solid var(--border);
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }

        .footer-link {
          color: var(--navy);
          font-weight: 800;
          font-size: 0.85rem;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-link:hover {
          color: var(--blue);
        }

        /* RESPONSIVE */

        @media (max-width: 700px) {
          .project-container {
            width: min(100% - 32px, 1180px);
          }

          .project-nav {
            padding: 0 16px;
          }

          .project-hero {
            padding: 55px 0 40px;
          }

          .project-title {
            font-size: clamp(2.4rem, 12vw, 3.4rem);
            letter-spacing: -0.03em;
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
            RAHUL<span>.</span>
          </span>
        </nav>

        <div className="project-container">

          <section className="project-hero">

            <div className="project-number">
              04 / SELECTED PROJECT
            </div>

            <div className="project-tag">
              PYTHON · AI · LEARNING
            </div>

            <h1 className="project-title">
              AI Exam <span>Companion</span>
            </h1>

            <p className="project-description">
              An AI-powered learning application that generates practice
              questions and manages exam preparation sessions, backed by
              MongoDB for flexible question storage.
            </p>

            <div className="project-stack">
              {[
                "HTML5",
                "CSS3",
                "JavaScript",
                "Python Flask",
                "MongoDB",
                "Firebase",
                "Groq API",
              ].map((item) => (
                <span className="stack-pill" key={item}>
                  {item}
                </span>
              ))}
            </div>

            <div className="project-links">
              <div className="live-label">LIVE LINKS</div>

              <div className="live-link-list">
                {LIVE_LINKS.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                    <span>↗</span>
                  </a>
                ))}
              </div>
            </div>

          </section>

          <section className="project-feature">
            <div className="feature-label">
              PROJECT HIGHLIGHT
            </div>

            <div className="feature-text">
              AI-generated practice question sets
            </div>
          </section>

          {/* HOW IT'S BUILT */}
          <section className="project-section">
            <div className="section-eyebrow">ARCHITECTURE & WORKFLOW</div>
            <h2 className="section-heading">How it's built</h2>
            <p className="section-intro">
              Question generation happens server-side, so the AI call, the
              validation and the storage all sit behind one Flask API before
              anything reaches the browser.
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
              Turns any topic into a ready-to-take practice exam.
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
            <h2 className="section-heading">Project screenshots</h2>

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
                        alt={`AI Exam Companion thumbnail ${index + 1}`}
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
                  alt={`AI Exam Companion screenshot ${selectedImage + 1}`}
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

            <a className="footer-link" href="#digitalanalyticsdashboard">
              Next Project →
            </a>

          </footer>

        </div>
      </main>
    </>
  );
}
