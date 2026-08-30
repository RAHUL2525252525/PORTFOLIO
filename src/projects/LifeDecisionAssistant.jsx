import React, { useState } from "react";

const images = Array.from(
  { length: 8 },
  (_, index) => `/${index + 24}.png.png`
);

export default function LifeDecisionAssistant() {
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
          03 / 05
        </span>

      </header>

      <main className="project-container">

        <section className="project-hero">

          <div className="project-category">
            PYTHON · FLASK · AI
          </div>

          <h1>Life Decision Assistant</h1>

          <p className="project-subtitle">
            AI-Powered Decision Support Application
          </p>

          <p className="project-description">
            An AI-powered web application designed to help users
            evaluate personal decisions through structured AI
            conversations. The application connects multiple
            large language model providers through a unified
            Flask backend.
          </p>

          <div className="project-tech">
            <span>Python</span>
            <span>Flask</span>
            <span>Firebase</span>
            <span>Groq API</span>
            <span>Gemini API</span>
            <span>OpenRouter API</span>
          </div>

        </section>

        <section className="project-gallery">

          <div className="gallery-main">

            <img
              src={images[activeImage]}
              alt={`Life Decision Assistant screenshot ${
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
                  alt={`Life Decision Assistant ${index + 1}`}
                />

                <span>{index + 1}</span>

              </button>

            ))}

          </div>

        </section>

        <section className="project-details-grid">

          <div className="project-detail-card">
            <span>01</span>
            <h3>AI Integration</h3>

            <ul>
              <li>Groq API integration</li>
              <li>Google Gemini API</li>
              <li>OpenRouter API</li>
              <li>Multi-provider AI workflow</li>
            </ul>
          </div>

          <div className="project-detail-card">
            <span>02</span>
            <h3>Application</h3>

            <ul>
              <li>Decision-support conversations</li>
              <li>Structured user inputs</li>
              <li>AI-generated recommendations</li>
              <li>Interactive web interface</li>
            </ul>
          </div>

          <div className="project-detail-card">
            <span>03</span>
            <h3>Backend</h3>

            <ul>
              <li>Python Flask</li>
              <li>REST API integration</li>
              <li>Firebase authentication</li>
              <li>External API communication</li>
            </ul>
          </div>

        </section>

      </main>

    </div>
  );
}
