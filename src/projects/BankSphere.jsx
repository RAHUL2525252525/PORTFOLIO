import React, { useState } from "react";

const images = Array.from(
  { length: 10 },
  (_, index) => `/${index + 14}.png.png`
);

export default function BankSphere() {
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
          02 / 05
        </span>

      </header>

      <main className="project-container">

        <section className="project-hero">

          <div className="project-category">
            JAVA · SPRING SECURITY · REACT
          </div>

          <h1>BankSphere</h1>

          <p className="project-subtitle">
            Secure Online Banking System
          </p>

          <p className="project-description">
            A secure online banking application designed with Java,
            Spring Boot, Spring Security, React.js and MySQL. The
            system handles authentication, account management and
            transaction workflows with JWT-based security and
            role-based access control.
          </p>

          <div className="project-tech">
            <span>Java 17</span>
            <span>Spring Boot</span>
            <span>Spring Security</span>
            <span>JWT</span>
            <span>React.js</span>
            <span>MySQL</span>
            <span>Docker</span>
          </div>

        </section>

        <section className="project-gallery">

          <div className="gallery-main">

            <img
              src={images[activeImage]}
              alt={`BankSphere screenshot ${activeImage + 1}`}
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
                  alt={`BankSphere ${index + 1}`}
                />

                <span>{index + 1}</span>

              </button>

            ))}

          </div>

        </section>

        <section className="project-details-grid">

          <div className="project-detail-card">
            <span>01</span>
            <h3>Security</h3>

            <ul>
              <li>JWT authentication</li>
              <li>Role-based access control</li>
              <li>Spring Security</li>
              <li>Protected REST endpoints</li>
              <li>Secure session workflow</li>
            </ul>
          </div>

          <div className="project-detail-card">
            <span>02</span>
            <h3>Banking Features</h3>

            <ul>
              <li>User registration</li>
              <li>Login and authentication</li>
              <li>Account management</li>
              <li>Transaction workflows</li>
              <li>Role-based operations</li>
            </ul>
          </div>

          <div className="project-detail-card">
            <span>03</span>
            <h3>Architecture</h3>

            <ul>
              <li>Spring Boot backend</li>
              <li>REST API architecture</li>
              <li>Spring Data JPA</li>
              <li>MySQL database</li>
              <li>Docker containerization</li>
            </ul>
          </div>

        </section>

      </main>

    </div>
  );
}
