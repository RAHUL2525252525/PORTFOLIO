import React, { useState } from "react";

const images = Array.from(
  { length: 5 },
  (_, index) => `/${index + 38}.png.png`
);

export default function DigitalAnalyticsDashboard() {
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
          05 / 05
        </span>

      </header>

      <main className="project-container">

        <section className="project-hero">

          <div className="project-category">
            JAVASCRIPT · FIREBASE · ANALYTICS
          </div>

          <h1>Digital Analytics Dashboard</h1>

          <p className="project-subtitle">
            Firebase Analytics Dashboard
          </p>

          <p className="project-description">
            A modern analytics dashboard providing an organized
            interface for visualizing digital usage data. The
            application includes Google OAuth authentication and
            Firebase-backed data workflows.
          </p>

          <div className="project-tech">
            <span>JavaScript</span>
            <span>Firebase</span>
            <span>Google OAuth</span>
            <span>Chart.js</span>
            <span>HTML5</span>
            <span>CSS3</span>
          </div>

        </section>

        <section className="project-gallery">

          <div className="gallery-main">

            <img
              src={images[activeImage]}
              alt={`Digital Analytics Dashboard screenshot ${
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
                  alt={`Digital Analytics Dashboard ${index + 1}`}
                />

                <span>{index + 1}</span>

              </button>

            ))}

          </div>

        </section>

        <section className="project-details-grid">

          <div className="project-detail-card">
            <span>01</span>
            <h3>Dashboard</h3>

            <ul>
              <li>Analytics overview</li>
              <li>Usage metrics</li>
              <li>Data visualization</li>
              <li>Responsive dashboard UI</li>
            </ul>
          </div>

          <div className="project-detail-card">
            <span>02</span>
            <h3>Authentication</h3>

            <ul>
              <li>Google OAuth</li>
              <li>Firebase Authentication</li>
              <li>Secure login workflow</li>
              <li>User session handling</li>
            </ul>
          </div>

          <div className="project-detail-card">
            <span>03</span>
            <h3>Technology</h3>

            <ul>
              <li>JavaScript ES6+</li>
              <li>Firebase</li>
              <li>Chart.js</li>
              <li>HTML5 and CSS3</li>
            </ul>
          </div>

        </section>

      </main>

    </div>
  );
}
