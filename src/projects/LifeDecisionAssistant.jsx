import React from "react";
import FlipBook from "../components/FlipBook";

const imageFiles = import.meta.glob("../assets/projects/lifedecisionassistant/*.png.png", {
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

export default function LifeDecisionAssistant() {
  return (
    <div className="project-page">
      <nav className="project-nav">
        <a href="#/" className="back-link">
          ← Back to Portfolio
        </a>
        <div className="project-logo">RAHUL S</div>
      </nav>

      <header className="project-hero">
        <p className="label">PROJECT 03</p>
        <div className="stack-pill python">Python / Flask</div>

        <h1>
          Life Decision <span>Assistant</span>
        </h1>

        <p className="project-subtitle">AI-Powered Decision Support Application</p>

        <p className="project-description">
          A Python and Flask based AI web application designed to help users
          analyze decisions by presenting structured, AI-generated guidance.
          The backend integrates three different LLM providers behind a
          unified interface, with Firebase handling authentication.
        </p>

        <div className="meta-grid">
          <div className="meta-card">
            <small>ROLE</small>
            <strong>Backend / AI Integration</strong>
          </div>
          <div className="meta-card">
            <small>PERIOD</small>
            <strong>Update project dates</strong>
          </div>
          <div className="meta-card">
            <small>ARCHITECTURE</small>
            <strong>Multi-Provider API Layer</strong>
          </div>
        </div>
      </header>

      <main className="content">
        <h2>
          Key <span>features</span>
        </h2>

        <div className="feature-grid">
          <div className="feature">
            <h3>Decision Analysis</h3>
            <p>Users provide a decision and receive structured, AI-assisted analysis of possible outcomes.</p>
          </div>
          <div className="feature">
            <h3>Multi-Provider AI</h3>
            <p>Integrates Groq, OpenRouter, and Gemini behind one backend interface for flexible model access.</p>
          </div>
          <div className="feature">
            <h3>Firebase Authentication</h3>
            <p>Firebase handles secure user sign-in and session management.</p>
          </div>
          <div className="feature">
            <h3>Flask Backend</h3>
            <p>Python Flask routes handle request validation and communication with external AI APIs.</p>
          </div>
          <div className="feature">
            <h3>Provider Fallback Logic</h3>
            <p>Designed so requests can route across providers, reducing single-point API dependency.</p>
          </div>
          <div className="feature">
            <h3>Responsive Interface</h3>
            <p>Built with HTML, CSS, and JavaScript for a clean experience on desktop and mobile.</p>
          </div>
        </div>

        <h2>
          Technology <span>stack</span>
        </h2>

        <div className="tech-list">
          {["Python", "Flask", "Firebase", "Groq API", "OpenRouter API", "Gemini API", "HTML", "CSS", "JavaScript"].map((item) => (
            <span className="tech" key={item}>
              {item}
            </span>
          ))}
        </div>

        <h2>
          Project <span>notebook</span>
        </h2>

        <FlipBook images={images} projectName="Life Decision Assistant" />
      </main>
    </div>
  );
}
