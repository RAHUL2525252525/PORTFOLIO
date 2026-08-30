import React, { useState } from "react";

const images = Array.from(
  { length: 6 },
  (_, index) => `/${index + 32}.png.png`
);

export default function AIExamCompanion() {
  const [activeImage, setActiveImage] = useState(0);

  const goBack = () => {
    window.location.hash = "/projects";
  };

  return (
    <div className="project-page">

      <header className="project-header">

        <button className="back-button" onClick={goBack}>
          ← Back to Portfolio
        </button>

        <span className="project-header-number">
          04 / 05
        </span>

      </header>

      <main className="project-container">

        <section className="project-hero">

          <div className="project-category">
            PYTHON · FLASK · AI
          </div>

          <h1>AI Exam Companion</h1>

          <p className="project-subtitle">
            AI-Powered Exam Preparation Platform
          </p>

          <p className="project-description">
            An AI-powered learning application designed to assist
            students with exam preparation by generating practice
            questions and providing an interactive preparation
            experience.
          </p>

          <div className="project-tech">
            <span>Python</span>
            <span>Flask</span>
            <span>Firebase</span>
            <span>Groq API</span>
            <span>AI Integration</span>
            <span>REST APIs</span>
          </div>

        </section>

        <section className="project-gallery">

          <div className="gallery-main">

            <img
              src={images[activeImage]}
              alt={`AI Exam Companion screenshot ${
                activeImage + 1
              }`}
            />

            <div className="gallery-counter">
              {activeImage + 1} / {images.length}
            </div>

          </div>

          <div className="gallery-thumbnails">

            {images.map((image, index) => (

              <button
                key={image}
                className={`gallery-thumbnail ${
                  activeImage === index ? "active" : ""
                }`}
                onClick={() => setActiveImage(index)}
              >

                <img
                  src={image}
                  alt={`AI Exam Companion ${index + 1}`}
                />

                <span>{index + 1}</span>

              </button>

            ))}

          </div>

        </section>

        <section className="project-details-grid">

          <div className="project-detail-card">
            <span>01</span>
            <h3>AI Features</h3>

            <ul>
              <li>AI-generated practice questions</li>
              <li>Exam preparation sessions</li>
              <li>Dynamic question generation</li>
              <li>Interactive learning workflow</li>
            </ul>
          </div>

          <div className="project-detail-card">
            <span>02</span>
            <h3>Backend</h3>

            <ul>
              <li>Python Flask</li>
              <li>REST API architecture</li>
              <li>Groq API integration</li>
              <li>Firebase authentication</li>
            </ul>
          </div>

          <div className="project-detail-card">
            <span>03</span>
            <h3>Engineering</h3>

            <ul>
              <li>API-driven application</li>
              <li>Responsive frontend</li>
              <li>Authentication workflow</li>
              <li>AI service integration</li>
            </ul>
          </div>

        </section>

      </main>

    </div>
  );
}
