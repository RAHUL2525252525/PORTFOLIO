import React, { useState } from "react";

import image24 from "../assets/projects/lifedecisionassistant/24.png.png";
import image25 from "../assets/projects/lifedecisionassistant/25.png.png";
import image26 from "../assets/projects/lifedecisionassistant/26.png.png";
import image27 from "../assets/projects/lifedecisionassistant/27.png.png";
import image28 from "../assets/projects/lifedecisionassistant/28.png.png";
import image29 from "../assets/projects/lifedecisionassistant/29.png.png";
import image30 from "../assets/projects/lifedecisionassistant/30.png.png";
import image31 from "../assets/projects/lifedecisionassistant/31.png.png";

const screenshots = [
  image24, image25, image26, image27,
  image28, image29, image30, image31
];

/* =========================================================
   PROJECT DATA
   ========================================================= */

const LIVE_LINKS = [
  { label: "Live App", url: "https://life-decision-assistant-63pu.onrender.com" },
];

const WORKFLOW_STEPS = [
  {
    title: "Flask as a unified AI gateway",
    description:
      "A Python Flask backend sits between the frontend and three different LLM providers — Groq, Gemini and OpenRouter — so the client only ever talks to one consistent API, regardless of which model answers the request.",
  },
  {
    title: "Provider routing & fallback",
    description:
      "Each request is routed to a provider based on the task, with the option to fall back to another provider if the first one fails or times out, so a single API outage doesn't take the assistant down.",
  },
  {
    title: "Response normalization",
    description:
      "Groq, Gemini and OpenRouter each return slightly different response shapes. A common adapter layer in Flask normalizes them into one structure before they reach the frontend.",
  },
  {
    title: "Firebase for auth & storage",
    description:
      "Firebase handles user authentication and stores decision sessions, so a user's history of questions and AI responses persists across visits.",
  },
  {
    title: "Frontend decision flow",
    description:
      "The frontend walks the user through describing a decision, sends the structured prompt to Flask, and renders the AI's reasoning and recommendation.",
  },
];

const FEATURES = [
  { title: "Multi-LLM routing", description: "One API backed by Groq, Gemini and OpenRouter, chosen per request." },
  { title: "Decision-support prompts", description: "Structured prompts guide the model toward a reasoned recommendation." },
  { title: "Firebase authentication", description: "Sign-in and per-user session isolation." },
  { title: "Session history", description: "Past decisions and AI responses are saved and revisitable." },
  { title: "Provider fallback", description: "Falls back to another provider if one is unavailable." },
];

const CHALLENGES = [
  {
    title: "Different providers, different response shapes",
    challenge:
      "Groq, Gemini and OpenRouter don't return responses in the same JSON structure, which made it hard to render results consistently on the frontend.",
    approach:
      "Built a normalization layer in Flask that maps every provider's response into one common shape before it's sent to the client, so the frontend stays provider-agnostic.",
  },
  {
    title: "Keeping API keys and rate limits safe",
    challenge:
      "Calling three separate LLM APIs directly from the browser would expose API keys and make rate limiting impossible to control.",
    approach:
      "All provider calls happen server-side in Flask using environment-stored keys, with the frontend only ever talking to the Flask backend.",
  },
];

const TIMELINE = [
  { title: "Problem framing & prompt design", description: "Defined what a good decision-support prompt and response should look like." },
  { title: "Flask backend & provider integrations", description: "Wired up Groq, Gemini and OpenRouter behind one API." },
  { title: "Firebase authentication", description: "Added sign-in and per-user session storage." },
  { title: "Frontend UI", description: "Built the decision-input flow and response view." },
  { title: "Cross-provider testing", description: "Tested the same prompts across all three providers for consistency." },
  { title: "Deployment", description: "Deployed the Flask app on Render." },
];

export default function LifeDecisionAssistant() {
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
          font-size: clamp(2.6rem, 6vw, 5rem);
          line-height: 0.96;
          letter-spacing: -0.04em;
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
              03 / SELECTED PROJECT
            </div>

            <div className="project-tag">
              PYTHON · AI · FLASK
            </div>

            <h1 className="project-title">
              Life Decision <span>Assistant</span>
            </h1>

            <p className="project-description">
              An AI decision-support application that connects multiple LLM
              providers through a unified Flask backend, so a single
              consistent API stands behind three different models.
            </p>

            <div className="project-stack">
              {[
                "Python",
                "Flask",
                "Firebase",
                "Groq API",
                "Gemini API",
                "OpenRouter API",
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
              3 LLM providers behind one API
            </div>
          </section>

          {/* HOW IT'S BUILT */}
          <section className="project-section">
            <div className="section-eyebrow">ARCHITECTURE & WORKFLOW</div>
            <h2 className="section-heading">How it's built</h2>
            <p className="section-intro">
              The Flask backend is the single point the frontend talks to —
              it decides which model answers, and always hands back the
              same response shape.
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
              Helps you think through a decision with structured, AI-backed
              reasoning.
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
                      aria-label={`View screenshot ${index + 1}`}
                    >
                      <img
                        src={image}
                        alt={`Life Decision Assistant thumbnail ${index + 1}`}
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
                  aria-label="Previous image"
                >
                  ‹
                </button>

                <img
                  className="main-project-image"
                  src={screenshots[selectedImage]}
                  alt={`Life Decision Assistant screenshot ${selectedImage + 1}`}
                />

                <button
                  className="image-arrow right"
                  onClick={nextImage}
                  aria-label="Next image"
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

            <a className="footer-link" href="#aiexamcompanion">
              Next Project →
            </a>

          </footer>

        </div>
      </main>
    </>
  );
}
