import React from "react";

const imageFiles = import.meta.glob(
  "../assets/projects/aiexamcompanion/*.png.png",
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
    title: "AI Question Generation",
    text: "Uses the Groq API to generate practice questions for exam preparation."
  },
  {
    number: "02",
    title: "Interactive Practice",
    text: "Provides an interactive environment for answering and reviewing generated questions."
  },
  {
    number: "03",
    title: "Question Storage",
    text: "MongoDB stores generated question sets and application session data."
  },
  {
    number: "04",
    title: "Flask Backend",
    text: "Flask provides backend routes and manages communication with the AI service."
  },
  {
    number: "05",
    title: "AI Integration",
    text: "Integrated an external generative AI API into a practical web application."
  },
  {
    number: "06",
    title: "Responsive UI",
    text: "Created a responsive frontend using HTML, CSS and JavaScript."
  }
];

export default function AIExamCompanion() {
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

        <span className="case-number">04 / 05</span>

      </nav>

      <section className="case-hero">

        <div className="case-hero-copy">

          <div className="project-kicker">
            <span>PYTHON / FLASK</span>
            <span>•</span>
            <span>HANDS-ON PROJECT</span>
          </div>

          <h1>
            AI Exam
            <span>Companion</span>
          </h1>

          <p className="case-tagline">
            AI-Powered
            <br />
            Exam Preparation
          </p>

          <p className="case-intro">
            A hands-on Python and Flask application that uses generative
            AI to create practice questions and provide an interactive
            exam preparation experience.
          </p>

          <div className="case-hero-tags">

            <span>Python</span>
            <span>Flask</span>
            <span>MongoDB</span>
            <span>Groq API</span>
            <span>JavaScript</span>

          </div>

        </div>

        <div className="hero-project-visual ai-visual">

          <div className="visual-glow"></div>

          {images.length > 0 && (
            <img
              src={images[0]}
              alt="AI Exam Companion"
            />
          )}

          <div className="visual-label">
            <span>04</span>
            AI LEARNING APPLICATION
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
              Turning AI into
              <span> a learning tool.</span>
            </h2>

          </div>

          <div className="overview-text">

            <p>
              AI Exam Companion was created as a hands-on Python/Flask
              project focused on applying generative AI to an
              educational use case.
            </p>

            <p>
              The application connects a lightweight Flask backend with
              Groq for AI-generated practice questions and MongoDB for
              application data.
            </p>

            <div className="stat-row">

              <div>
                <strong>AI</strong>
                <small>QUESTION GENERATION</small>
              </div>

              <div>
                <strong>Flask</strong>
                <small>BACKEND</small>
              </div>

              <div>
                <strong>MongoDB</strong>
                <small>DATABASE</small>
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
            Built around
            <span> practice.</span>
          </h2>

          <p>
            Features designed around an interactive exam preparation flow.
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
          03 — APPLICATION FLOW
        </div>

        <div className="architecture-content">

          <div>

            <h2>
              From prompt
              <span> to practice.</span>
            </h2>

            <p>
              The application connects the user experience,
              Flask backend and AI service into a simple learning flow.
            </p>

          </div>

          <div className="architecture-stack">

            <div className="architecture-card">
              <b>01</b>
              <strong>User Input</strong>
              <span>Exam topic / request</span>
            </div>

            <div className="architecture-line"></div>

            <div className="architecture-card">
              <b>02</b>
              <strong>Groq API</strong>
              <span>Question generation</span>
            </div>

            <div className="architecture-line"></div>

            <div className="architecture-card">
              <b>03</b>
              <strong>Practice</strong>
              <span>Interactive questions</span>
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
              "MongoDB",
              "Groq API",
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
            Explore the
            <span> experience.</span>
          </h2>

          <p>
            Selected screens from AI Exam Companion.
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
                alt={`AI Exam Companion screen ${index + 1}`}
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

          <span>PROJECT 04</span>

          <h2>
            AI Exam
            <em>Companion</em>
          </h2>

        </div>

        <a href="#/" className="footer-back">
          Back to portfolio ↑
        </a>

      </footer>

    </div>
  );
}
