import React from "react";
import Gallery from "../components/Gallery";

const imageFiles = import.meta.glob("../assets/projects/aiexamcompanion/*.png.png", {
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

export default function AIExamCompanion() {
  return (
    <div className="project-page">
      <nav className="project-nav">
        <a href="#/" className="back-link">
          ← Back to Portfolio
        </a>
        <div className="project-logo">RAHUL S</div>
      </nav>

      <header className="project-hero">
        <p className="label">PROJECT 04</p>
        <div className="stack-pill python">Python / Flask</div>

        <h1>
          AI Exam <span>Companion</span>
        </h1>

        <p className="project-subtitle">AI-Powered Exam Preparation Application</p>

        <p className="project-description">
          AI Exam Companion is a Python and Flask based web application
          created to support exam preparation using AI-generated practice
          questions. MongoDB stores question sets and session history behind a
          lightweight Flask API.
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
            <strong>Flask + MongoDB</strong>
          </div>
        </div>
      </header>

      <main className="content">
        <h2>
          Key <span>features</span>
        </h2>

        <div className="feature-grid">
          <div className="feature">
            <h3>AI Practice Questions</h3>
            <p>Generates practice questions using the Groq API to support targeted exam preparation.</p>
          </div>
          <div className="feature">
            <h3>Interactive Learning</h3>
            <p>Provides an interactive interface for students to practice and review questions.</p>
          </div>
          <div className="feature">
            <h3>MongoDB Storage</h3>
            <p>Stores generated question sets and session data in a MongoDB collection.</p>
          </div>
          <div className="feature">
            <h3>Flask Backend</h3>
            <p>Flask manages backend routes and communication with the Groq API.</p>
          </div>
          <div className="feature">
            <h3>Groq API Integration</h3>
            <p>Uses Groq for fast AI-powered question generation.</p>
          </div>
          <div className="feature">
            <h3>Responsive UI</h3>
            <p>Built with HTML, CSS, and JavaScript for a clean, responsive learning experience.</p>
          </div>
        </div>

        <h2>
          Technology <span>stack</span>
        </h2>

        <div className="tech-list">
          {["Python", "Flask", "MongoDB", "Groq API", "HTML", "CSS", "JavaScript"].map((item) => (
            <span className="tech" key={item}>
              {item}
            </span>
          ))}
        </div>

        <h2>
          Project <span>screenshots</span>
        </h2>

        <Gallery images={images} projectName="AI Exam Companion" />
      </main>
    </div>
  );
}
