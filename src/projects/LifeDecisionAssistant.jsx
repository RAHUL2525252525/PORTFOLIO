import React from "react";

const imageFiles = import.meta.glob(
  "../assets/projects/lifedecisionassistant/*.png.png",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const images = Object.entries(imageFiles)
  .sort(([a], [b]) => {
    const numberA = parseInt(a.match(/(\d+)\.png\.png$/)?.[1] || "0");
    const numberB = parseInt(b.match(/(\d+)\.png\.png$/)?.[1] || "0");
    return numberA - numberB;
  })
  .map(([, src]) => src);

const features = [
  {
    number: "01",
    title: "Decision Analysis",
    text: "Users can submit decisions and receive structured AI-assisted analysis."
  },
  {
    number: "02",
    title: "Multi-Provider AI",
    text: "Integrated Groq, OpenRouter and Gemini APIs behind a unified backend."
  },
  {
    number: "03",
    title: "Firebase Authentication",
    text: "Implemented Firebase authentication for user sign-in and session handling."
  },
  {
    number: "04",
    title: "Flask API",
    text: "Python Flask handles application routes, validation and AI provider communication."
  },
  {
    number: "05",
    title: "Provider Routing",
    text: "Designed provider-level routing to reduce dependency on a single AI service."
  },
  {
    number: "06",
    title: "Responsive Interface",
    text: "Created a responsive web interface using HTML, CSS and JavaScript."
  }
];

export default function LifeDecisionAssistant() {
  return (
    <div className="case-page python-page">

      <nav className="case-nav">

        <a href="#/" className="case-back">
          <span>←</span>
          Back to Portfolio
        </a>

        <div className="case-nav-center">
          <span className="case-dot"></span>
          SOFTWARE ENGINEER
        </div>

        <span className="case-number">03 / 05</span>

      </nav>

      <section className="case-hero">

        <div className="case-hero-copy">

          <div className="project-kicker">
            <span>PYTHON / FLASK</span>
            <span>•</span>
            <span>HANDS-ON PROJECT</span>
          </div>

          <h1>
            Life Decision
            <span>Assistant</span>
          </h1>

          <p className="case-tagline">
            AI-Assisted
            <br />
            Decision Support
          </p>

          <p className="case-intro">
            A hands-on Python and Flask web application integrating
            multiple AI providers to generate structured decision
            guidance.
          </p>

          <div className="case-hero-tags">

            <span>Python</span>
            <span>Flask</span>
            <span>Firebase</span>
            <span>Groq</span>
            <span>Gemini</span>

          </div>

        </div>

        <div className="hero-project-visual ai-visual">

          <div className="visual-glow"></div>

          {images.length > 0 && (
            <img
              src={images[0]}
              alt="Life Decision Assistant"
            />
          )}

          <div className="visual-label">
            <span>03</span>
            AI APPLICATION
          </div>

        </div>

      </section>

      <section className="case-section overview-section">

        <div className="section-eyebrow">
          01 — OVERVIEW
        </div>

        <div className="overview-grid">

          <div>

            <h2>
              Connecting
              <span> users with AI.</span>
            </h2>

          </div>

          <div className="overview-text">

            <p>
              Life Decision Assistant was developed as a hands-on
              Python/Flask project to explore practical AI API
              integration.
            </p>

            <p>
              The backend provides a unified interface for communicating
              with multiple LLM providers while Firebase handles
              authentication.
            </p>

            <div className="stat-row">

              <div>
                <strong>3</strong>
                <small>AI PROVIDERS</small>
              </div>

              <div>
                <strong>Flask</strong>
                <small>BACKEND</small>
              </div>

              <div>
                <strong>Firebase</strong>
                <small>AUTH</small>
              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="case-section">

        <div className="section-eyebrow">
          02 — FUNCTIONALITY
        </div>

        <div className="section-heading">

          <h2>
            The application
            <span> experience.</span>
          </h2>

          <p>
            Practical AI and full-stack concepts explored through the project.
          </p>

        </div>

        <div className="premium-feature-grid">

          {features.map((feature) => (

            <article
              className="premium-feature"
              key={feature.number}
            >

              <div className="feature-number">
                {feature.number}
              </div>

              <div>

                <h3>{feature.title}</h3>

                <p>{feature.text}</p>

              </div>

              <span className="feature-arrow">
                ↗
              </span>

            </article>

          ))}

        </div>

      </section>

      <section className="architecture-section">

        <div className="section-eyebrow">
          03 — AI INTEGRATION
        </div>

        <div className="architecture-content">

          <div>

            <h2>
              One interface.
              <span> Multiple models.</span>
            </h2>

            <p>
              The Flask backend acts as an integration layer between
              the application and external AI services.
            </p>

          </div>

          <div className="architecture-stack">

            <div className="architecture-card">
              <b>01</b>
              <strong>Flask API</strong>
              <span>Request handling</span>
            </div>

            <div className="architecture-line"></div>

            <div className="architecture-card">
              <b>02</b>
              <strong>AI Providers</strong>
              <span>Groq • Gemini • OpenRouter</span>
            </div>

            <div className="architecture-line"></div>

            <div className="architecture-card">
              <b>03</b>
              <strong>Response</strong>
              <span>Structured AI guidance</span>
            </div>

          </div>

        </div>

      </section>

      <section className="case-section">

        <div className="section-eyebrow">
          04 — TECHNOLOGY
        </div>

        <div className="technology-wrapper">

          <h2>
            Technology
            <span> stack.</span>
          </h2>

          <div className="large-tech-list">

            {[
              "Python",
              "Flask",
              "Firebase",
              "Groq API",
              "OpenRouter API",
              "Gemini API",
              "HTML",
              "CSS",
              "JavaScript"
            ].map((tech) => (
              <span key={tech}>{tech}</span>
            ))}

          </div>

        </div>

      </section>

      <section className="screens-section">

        <div className="section-eyebrow">
          05 — APPLICATION
        </div>

        <div className="section-heading">

          <h2>
            Inside the
            <span> application.</span>
          </h2>

          <p>
            Selected screens from the project.
          </p>

        </div>

        <div className="case-gallery">

          {images.map((image, index) => (

            <div
              className={`gallery-shot ${
                index === 0 ? "gallery-featured" : ""
              }`}
              key={image}
            >

              <img
                src={image}
                alt={`Life Decision Assistant screen ${index + 1}`}
              />

              <span>
                SCREEN {String(index + 1).padStart(2, "0")}
              </span>

            </div>

          ))}

        </div>

      </section>

      <footer className="case-footer">

        <div>

          <span>PROJECT 03</span>

          <h2>
            Life Decision
            <em>Assistant</em>
          </h2>

        </div>

        <a href="#/" className="footer-back">
          Back to portfolio ↑
        </a>

      </footer>

    </div>
  );
}
