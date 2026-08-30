import React from "react";

const imageFiles = import.meta.glob(
  "../assets/projects/banksphere/*.png.png",
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
    title: "JWT Authentication",
    text: "Implemented stateless JWT authentication using Spring Security for protected banking operations."
  },
  {
    number: "02",
    title: "Role-Based Access",
    text: "Implemented three permission tiers to restrict sensitive operations based on user roles."
  },
  {
    number: "03",
    title: "Account Management",
    text: "Built account workflows for balances, account information and customer operations."
  },
  {
    number: "04",
    title: "Transactions",
    text: "Created validated transaction workflows with server-side checks before processing."
  },
  {
    number: "05",
    title: "Relational Database",
    text: "Designed normalized relational structures across 8+ related entities."
  },
  {
    number: "06",
    title: "Dockerized Stack",
    text: "Containerized the application using Docker Compose for consistent development environments."
  }
];

export default function BankSphere() {
  return (
    <div className="case-page banksphere-page">

      <nav className="case-nav">

        <a href="#/" className="case-back">
          <span>←</span>
          Back to Portfolio
        </a>

        <div className="case-nav-center">
          <span className="case-dot"></span>
          SOFTWARE ENGINEER
        </div>

        <span className="case-number">02 / 05</span>

      </nav>

      <section className="case-hero">

        <div className="case-hero-copy">

          <div className="project-kicker">
            <span>JAVA FULL STACK</span>
            <span>•</span>
            <span>06/2026 — 08/2026</span>
          </div>

          <h1>
            Bank
            <span>Sphere</span>
          </h1>

          <p className="case-tagline">
            Secure Full Stack
            <br />
            Banking Application
          </p>

          <p className="case-intro">
            A full-stack banking platform focused on secure authentication,
            role-based authorization, account management and transaction
            workflows.
          </p>

          <div className="case-hero-tags">
            <span>Java 17</span>
            <span>Spring Security</span>
            <span>JWT</span>
            <span>React.js</span>
            <span>MySQL</span>
          </div>

        </div>

        <div className="hero-project-visual banking-visual">

          <div className="visual-glow"></div>

          {images.length > 0 && (
            <img
              src={images[0]}
              alt="BankSphere application"
            />
          )}

          <div className="visual-label">
            <span>02</span>
            SECURE BANKING SYSTEM
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
              Engineering a
              <span> secure banking workflow.</span>
            </h2>
          </div>

          <div className="overview-text">

            <p>
              BankSphere combines a React frontend with a Java Spring Boot
              backend and relational database architecture.
            </p>

            <p>
              Security was a major part of the implementation, with JWT
              authentication and Spring Security protecting application
              resources according to user permissions.
            </p>

            <div className="stat-row">

              <div>
                <strong>3</strong>
                <small>PERMISSION TIERS</small>
              </div>

              <div>
                <strong>8+</strong>
                <small>ENTITIES</small>
              </div>

              <div>
                <strong>JWT</strong>
                <small>AUTHENTICATION</small>
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
            Security meets
            <span> usability.</span>
          </h2>

          <p>
            Key workflows implemented across the banking platform.
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

              <span className="feature-arrow">↗</span>

            </article>

          ))}

        </div>

      </section>

      <section className="architecture-section">

        <div className="section-eyebrow">
          03 — SECURITY FLOW
        </div>

        <div className="architecture-content">

          <div>

            <h2>
              Protected
              <span> by design.</span>
            </h2>

            <p>
              Authentication and authorization are handled through a
              stateless security flow.
            </p>

          </div>

          <div className="architecture-stack">

            <div className="architecture-card">
              <b>01</b>
              <strong>Login</strong>
              <span>User authentication</span>
            </div>

            <div className="architecture-line"></div>

            <div className="architecture-card">
              <b>02</b>
              <strong>JWT</strong>
              <span>Stateless token</span>
            </div>

            <div className="architecture-line"></div>

            <div className="architecture-card">
              <b>03</b>
              <strong>RBAC</strong>
              <span>Permission validation</span>
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
              "Java 17",
              "Spring Boot 3",
              "Spring Security",
              "JWT",
              "Spring Data JPA",
              "Hibernate",
              "React.js",
              "MySQL",
              "PostgreSQL",
              "Docker",
              "Docker Compose",
              "JUnit 5",
              "Mockito",
              "Maven"
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
            Inside
            <span> BankSphere.</span>
          </h2>

          <p>
            Selected screens from the banking application.
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
                alt={`BankSphere screen ${index + 1}`}
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

          <span>PROJECT 02</span>

          <h2>
            Bank
            <em>Sphere</em>
          </h2>

        </div>

        <a href="#/" className="footer-back">
          Back to portfolio ↑
        </a>

      </footer>

    </div>
  );
}
