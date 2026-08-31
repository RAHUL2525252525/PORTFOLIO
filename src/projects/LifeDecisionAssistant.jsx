import React, { useState, useEffect, useCallback } from "react";

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
    short: "Flask gateway",
    description:
      "A Python Flask backend sits between the frontend and three different LLM providers — Groq, Gemini and OpenRouter — so the client only ever talks to one consistent API, regardless of which model answers the request.",
  },
  {
    title: "Provider routing & fallback",
    short: "Routing & fallback",
    description:
      "Each request is routed to a provider based on the task, with the option to fall back to another provider if the first one fails or times out, so a single API outage doesn't take the assistant down.",
  },
  {
    title: "Response normalization",
    short: "Normalization",
    description:
      "Groq, Gemini and OpenRouter each return slightly different response shapes. A common adapter layer in Flask normalizes them into one structure before they reach the frontend.",
  },
  {
    title: "Firebase for auth & storage",
    short: "Firebase",
    description:
      "Firebase handles user authentication and stores decision sessions, so a user's history of questions and AI responses persists across visits.",
  },
  {
    title: "Frontend decision flow",
    short: "Decision UI",
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
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const previousImage = useCallback(() => {
    setSelectedImage((current) =>
      current === 0 ? screenshots.length - 1 : current - 1
    );
  }, []);

  const nextImage = useCallback(() => {
    setSelectedImage((current) =>
      current === screenshots.length - 1 ? 0 : current + 1
    );
  }, []);

  useEffect(() => {
    if (!isLightboxOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsLightboxOpen(false);
      if (e.key === "ArrowLeft") previousImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isLightboxOpen, previousImage, nextImage]);

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

        .back-link:hover { color: var(--blue); transform: translateX(-4px); }

        .nav-project-name {
          font-weight: 900;
          letter-spacing: 0.14em;
          color: var(--navy);
          font-size: 1rem;
        }

        .nav-project-name span { color: var(--blue); font-size: 1.3rem; }

        .project-container {
          width: min(1180px, calc(100% - 48px));
          margin: auto;
        }

        .project-hero { padding: 80px 0 40px; }

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

        .project-title span { color: var(--blue); }

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

        .project-links { margin-top: 34px; }

        .live-label {
          color: var(--blue);
          font-size: 0.66rem;
          font-weight: 900;
          letter-spacing: 0.14em;
          margin-bottom: 12px;
        }

        .live-link-list { display: flex; flex-wrap: wrap; gap: 10px; }

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

        .project-feature {
          margin: 50px 0 0;
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

        .project-section { padding: 60px 0; border-top: 1px solid var(--border); }

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

        /* WORKFLOW DIAGRAM */

        .workflow-diagram {
          display: flex;
          align-items: flex-start;
          gap: 4px;
          margin-bottom: 44px;
          overflow-x: auto;
          padding: 10px 4px 20px;
        }

        .diagram-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          min-width: 130px;
          flex: 1;
        }

        .diagram-circle {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: var(--navy);
          color: var(--cream);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 17px;
          margin-bottom: 12px;
          box-shadow: 0 10px 24px rgba(7,26,51,.25);
          flex-shrink: 0;
        }

        .diagram-label {
          font-size: 12px;
          font-weight: 800;
          color: var(--navy);
          max-width: 130px;
          line-height: 1.4;
        }

        .diagram-connector {
          flex: 0 0 34px;
          height: 2px;
          background: var(--border);
          margin-top: 27px;
          position: relative;
        }

        .diagram-connector::after {
          content: "";
          position: absolute;
          right: -1px;
          top: -4px;
          width: 8px;
          height: 8px;
          border-top: 2px solid var(--blue);
          border-right: 2px solid var(--blue);
          transform: rotate(45deg);
        }

        .workflow-list { border-top: 1px solid var(--border); }

        .workflow-step {
          display: grid;
          grid-template-columns: 56px 1fr;
          gap: 26px;
          padding: 28px 0;
          border-bottom: 1px solid var(--border);
        }

        .workflow-index { color: var(--blue); font-size: 0.75rem; font-weight: 900; letter-spacing: 0.05em; }

        .workflow-content h3 { color: var(--navy); font-size: 1rem; font-weight: 800; margin-bottom: 8px; }

        .workflow-content p { color: var(--text-soft); font-size: 0.86rem; line-height: 1.75; max-width: 640px; }

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

        .feature-card:hover { transform: translateY(-4px); box-shadow: var(--shadow); }

        .feature-card h3 { color: var(--navy); font-size: 0.92rem; font-weight: 800; margin-bottom: 8px; }
        .feature-card p { color: var(--text-soft); font-size: 0.8rem; line-height: 1.65; }

        .challenges-list { display: grid; gap: 14px; }

        .challenge-row {
          padding: 26px;
          background: var(--cream-light);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
        }

        .challenge-row h3 { color: var(--navy); font-size: 0.98rem; font-weight: 800; margin-bottom: 12px; }
        .challenge-row p { color: var(--text-soft); font-size: 0.85rem; line-height: 1.75; margin-bottom: 8px; }
        .challenge-row p:last-child { margin-bottom: 0; }
        .challenge-row strong { color: var(--navy); font-weight: 800; }

        .timeline-list { margin-top: 6px; }

        .timeline-step {
          display: grid;
          grid-template-columns: 44px 1fr;
          gap: 24px;
          position: relative;
          padding-bottom: 32px;
        }

        .timeline-step:last-child { padding-bottom: 0; }

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

        .timeline-content h3 { color: var(--navy); font-size: 0.94rem; font-weight: 800; margin-bottom: 6px; padding-top: 8px; }
        .timeline-content p { color: var(--text-soft); font-size: 0.82rem; line-height: 1.65; }

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

        .thumbnail-column::-webkit-scrollbar { width: 4px; }
        .thumbnail-column::-webkit-scrollbar-thumb { background: var(--cream-dark); border-radius: 20px; }

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

        .thumbnail:hover { border-color: var(--blue-light); transform: translateY(-2px); }

        .thumbnail.active { border-color: var(--blue); box-shadow: 0 0 0 2px rgba(59, 130, 196, 0.15); }

        .thumbnail img { width: 100%; height: 100%; object-fit: contain; display: block; }

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
          cursor: zoom-in;
          transition: transform .3s ease;
        }

        .main-project-image:hover { transform: scale(1.015); }

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

        .zoom-hint {
          position: absolute;
          bottom: 16px;
          left: 16px;
          z-index: 3;
          padding: 7px 12px;
          border-radius: 30px;
          background: rgba(7,26,51,.72);
          color: var(--cream);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .3px;
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

        .image-arrow:hover { background: var(--navy); color: var(--cream); }
        .image-arrow.left { left: 16px; }
        .image-arrow.right { right: 16px; }

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

        /* LIGHTBOX */

        .lightbox-overlay {
          position: fixed;
          inset: 0;
          z-index: 500;
          background: rgba(7,26,51,.94);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          animation: fadeIn .2s ease;
        }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        .lightbox-img {
          max-width: 88vw;
          max-height: 82vh;
          object-fit: contain;
          border-radius: 14px;
          box-shadow: 0 30px 90px rgba(0,0,0,.5);
        }

        .lightbox-close {
          position: absolute;
          top: 24px;
          right: 28px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: none;
          background: rgba(255,255,255,.12);
          color: var(--cream);
          font-size: 22px;
          cursor: pointer;
          transition: .2s;
        }

        .lightbox-close:hover { background: rgba(255,255,255,.25); }

        .lightbox-counter {
          position: absolute;
          top: 30px;
          left: 28px;
          color: var(--cream);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: .5px;
        }

        .lightbox-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 52px;
          height: 68px;
          border: none;
          border-radius: 12px;
          background: rgba(255,255,255,.1);
          color: var(--cream);
          font-size: 34px;
          cursor: pointer;
          transition: .2s;
        }

        .lightbox-arrow:hover { background: rgba(255,255,255,.22); }
        .lightbox-arrow.left { left: 24px; }
        .lightbox-arrow.right { right: 24px; }

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

        .footer-link:hover { color: var(--blue); }

        /* RESPONSIVE */

        @media (max-width: 700px) {
          .project-container { width: min(100% - 32px, 1180px); }
          .project-nav { padding: 0 16px; }
          .project-hero { padding: 50px 0 30px; }

          .project-title { font-size: clamp(2.4rem, 12vw, 3.4rem); letter-spacing: -0.03em; }

          .project-section { padding: 45px 0; }
          .features-grid { grid-template-columns: 1fr; }
          .workflow-step { grid-template-columns: 36px 1fr; gap: 16px; }

          .diagram-node { min-width: 96px; }
          .diagram-circle { width: 44px; height: 44px; font-size: 14px; }
          .diagram-label { font-size: 11px; max-width: 96px; }
          .diagram-connector { flex-basis: 20px; margin-top: 21px; }

          .image-viewer { grid-template-columns: 1fr; padding: 12px; }

          .thumbnail-column {
            order: 2;
            flex-direction: row;
            max-height: none;
            overflow-x: auto;
            overflow-y: hidden;
            padding-bottom: 5px;
          }

          .thumbnail { width: 76px; height: 58px; }
          .main-image-area { min-height: 340px; }
          .main-project-image { height: 340px; padding: 10px; }
          .zoom-hint { display: none; }

          .lightbox-overlay { padding: 16px; }
          .lightbox-arrow { width: 40px; height: 52px; font-size: 24px; }
          .lightbox-arrow.left { left: 8px; }
          .lightbox-arrow.right { right: 8px; }

          .project-footer { flex-direction: column; }
        }
      `}</style>

      <main className="project-page">

        <nav className="project-nav">
          <a className="back-link" href="#projects">← Back to Projects</a>
          <span className="nav-project-name">RAHUL<span>.</span></span>
        </nav>

        <div className="project-container">

          {/* HERO */}
          <section className="project-hero">
            <div className="project-number">03 / SELECTED PROJECT</div>
            <div className="project-tag">PYTHON · AI · FLASK</div>

            <h1 className="project-title">
              Life Decision <span>Assistant</span>
            </h1>

            <p className="project-description">
              An AI decision-support application that connects multiple LLM
              providers through a unified Flask backend, so a single
              consistent API stands behind three different models.
            </p>

            <div className="project-stack">
              {["Python", "Flask", "Firebase", "Groq API", "Gemini API", "OpenRouter API"].map((item) => (
                <span className="stack-pill" key={item}>{item}</span>
              ))}
            </div>

            <div className="project-links">
              <div className="live-label">LIVE LINKS</div>
              <div className="live-link-list">
                {LIVE_LINKS.map((link) => (
                  <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
                    {link.label}
                    <span>↗</span>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* SCREENSHOTS - MOVED UP, RIGHT UNDER THE HERO */}
          <section>
            <div className="image-viewer">

              <div className="thumbnail-column">
                {screenshots.map((image, index) => (
                  <div key={image}>
                    <button
                      className={`thumbnail ${selectedImage === index ? "active" : ""}`}
                      onClick={() => setSelectedImage(index)}
                      aria-label={`View screenshot ${index + 1}`}
                    >
                      <img src={image} alt={`Life Decision Assistant thumbnail ${index + 1}`} />
                    </button>
                    <div className="thumbnail-number">{index + 1}</div>
                  </div>
                ))}
              </div>

              <div className="main-image-area">
                <div className="image-counter">{selectedImage + 1} / {screenshots.length}</div>
                <div className="zoom-hint">Click to zoom</div>

                <button className="image-arrow left" onClick={previousImage} aria-label="Previous image">‹</button>

                <img
                  className="main-project-image"
                  src={screenshots[selectedImage]}
                  alt={`Life Decision Assistant screenshot ${selectedImage + 1}`}
                  onClick={() => setIsLightboxOpen(true)}
                />

                <button className="image-arrow right" onClick={nextImage} aria-label="Next image">›</button>
              </div>

            </div>

            <div className="gallery-hint">Click a thumbnail to jump to a screen, or click the main image to view it full-screen</div>
          </section>

          {/* FEATURE HIGHLIGHT */}
          <section className="project-feature">
            <div className="feature-label">PROJECT HIGHLIGHT</div>
            <div className="feature-text">3 LLM providers behind one API</div>
          </section>

          {/* HOW IT'S BUILT — DIAGRAM + DETAIL */}
          <section className="project-section">
            <div className="section-eyebrow">ARCHITECTURE & WORKFLOW</div>
            <h2 className="section-heading">How it's built</h2>
            <p className="section-intro">
              The Flask backend is the single point the frontend talks to —
              it decides which model answers, and always hands back the
              same response shape.
            </p>

            <div className="workflow-diagram">
              {WORKFLOW_STEPS.map((step, index) => (
                <React.Fragment key={step.title}>
                  <div className="diagram-node">
                    <div className="diagram-circle">{index + 1}</div>
                    <div className="diagram-label">{step.short}</div>
                  </div>
                  {index < WORKFLOW_STEPS.length - 1 && (
                    <div className="diagram-connector" />
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="workflow-list">
              {WORKFLOW_STEPS.map((step, index) => (
                <div className="workflow-step" key={step.title}>
                  <div className="workflow-index">{String(index + 1).padStart(2, "0")}</div>
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
            <p className="section-intro">Helps you think through a decision with structured, AI-backed reasoning.</p>

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

          <footer className="project-footer">
            <a className="footer-link" href="#projects">← All Projects</a>
            <a className="footer-link" href="#aiexamcompanion">Next Project →</a>
          </footer>

        </div>
      </main>

      {isLightboxOpen && (
        <div className="lightbox-overlay" onClick={() => setIsLightboxOpen(false)}>
          <div className="lightbox-counter">{selectedImage + 1} / {screenshots.length}</div>

          <button className="lightbox-close" onClick={() => setIsLightboxOpen(false)} aria-label="Close">×</button>

          <button
            className="lightbox-arrow left"
            onClick={(e) => { e.stopPropagation(); previousImage(); }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <img
            className="lightbox-img"
            src={screenshots[selectedImage]}
            alt={`Life Decision Assistant screenshot ${selectedImage + 1} full view`}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="lightbox-arrow right"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
