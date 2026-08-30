import React from "react";

const imageFiles = import.meta.glob(
  "../assets/projects/shopsphere/*.png.png",
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
    title: "Product Management",
    text: "Built product browsing, search and catalog management functionality across the application."
  },
  {
    number: "02",
    title: "Shopping Cart",
    text: "Implemented cart workflows with centralized frontend state handling and validation."
  },
  {
    number: "03",
    title: "Wishlist",
    text: "Enabled customers to save products and manage their wishlist through REST APIs."
  },
  {
    number: "04",
    title: "Checkout Flow",
    text: "Created a validated checkout workflow connecting cart data with order creation."
  },
  {
    number: "05",
    title: "Order Management",
    text: "Implemented customer order tracking and administrative order operations."
  },
  {
    number: "06",
    title: "RBAC",
    text: "Separated ADMIN and CUSTOMER capabilities with role-based access restrictions."
  }
];

export default function ShopSphere() {
  return (
    <div className="case-page shopsphere-page">

      {/* NAV */}
      <nav className="case-nav">
        <a href="#/" className="case-back">
          <span>←</span>
          Back to Portfolio
        </a>

        <div className="case-nav-center">
          <span className="case-dot"></span>
          SOFTWARE ENGINEER
        </div>

        <span className="case-number">01 / 05</span>
      </nav>

      {/* HERO */}
      <section className="case-hero">

        <div className="case-hero-copy">

          <div className="project-kicker">
            <span>JAVA FULL STACK</span>
            <span>•</span>
            <span>04/2026 — 06/2026</span>
          </div>

          <h1>
            Shop
            <span>Sphere</span>
          </h1>

          <p className="case-tagline">
            Full Stack E-Commerce
            <br />
            Web Application
          </p>

          <p className="case-intro">
            A production-style e-commerce platform built with Java,
            Spring Boot and React.js, featuring product discovery,
            cart, wishlist, checkout and order management workflows.
          </p>

          <div className="case-hero-tags">
            <span>Java 17</span>
            <span>Spring Boot 3</span>
            <span>React.js</span>
            <span>MySQL</span>
          </div>

        </div>

        <div className="hero-project-visual">

          <div className="visual-glow"></div>

          {images.length > 0 && (
            <img
              src={images[0]}
              alt="ShopSphere application"
            />
          )}

          <div className="visual-label">
            <span>01</span>
            LIVE APPLICATION VIEW
          </div>

        </div>

      </section>

      {/* OVERVIEW */}
      <section className="case-section overview-section">

        <div className="section-eyebrow">
          01 — OVERVIEW
        </div>

        <div className="overview-grid">

          <div>
            <h2>
              Building a complete
              <span> commerce experience.</span>
            </h2>
          </div>

          <div className="overview-text">
            <p>
              ShopSphere was developed as a full-stack application
              connecting a React frontend with a Java Spring Boot
              backend and MySQL database.
            </p>

            <p>
              The application follows a layered architecture using
              Controller, Service and Repository layers, keeping
              business logic separated from API and persistence concerns.
            </p>

            <div className="stat-row">
              <div>
                <strong>6+</strong>
                <small>MODULES</small>
              </div>

              <div>
                <strong>15+</strong>
                <small>REST ENDPOINTS</small>
              </div>

              <div>
                <strong>2</strong>
                <small>USER ROLES</small>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* FEATURE SECTION */}
      <section className="case-section">

        <div className="section-eyebrow">
          02 — FUNCTIONALITY
        </div>

        <div className="section-heading">
          <h2>
            What I
            <span> built.</span>
          </h2>

          <p>
            Core application workflows implemented across frontend,
            backend and database layers.
          </p>
        </div>

        <div className="premium-feature-grid">

          {features.map((feature) => (
            <article className="premium-feature" key={feature.number}>

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

      {/* ARCHITECTURE */}
      <section className="architecture-section">

        <div className="section-eyebrow">
          03 — ENGINEERING
        </div>

        <div className="architecture-content">

          <div>
            <h2>
              Layered
              <span> architecture.</span>
            </h2>

            <p>
              The backend was structured to maintain clear separation
              between request handling, business logic and database
              persistence.
            </p>
          </div>

          <div className="architecture-stack">

            <div className="architecture-card">
              <b>01</b>
              <strong>Controller</strong>
              <span>REST API endpoints</span>
            </div>

            <div className="architecture-line"></div>

            <div className="architecture-card">
              <b>02</b>
              <strong>Service</strong>
              <span>Business logic</span>
            </div>

            <div className="architecture-line"></div>

            <div className="architecture-card">
              <b>03</b>
              <strong>Repository</strong>
              <span>Data persistence</span>
            </div>

          </div>

        </div>

      </section>

      {/* TECHNOLOGY */}
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
              "Spring MVC",
              "Spring Data JPA",
              "Hibernate",
              "React.js",
              "REST APIs",
              "MySQL",
              "Maven",
              "Git"
            ].map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

        </div>

      </section>

      {/* SCREENSHOTS */}
      <section className="screens-section">

        <div className="section-eyebrow">
          05 — APPLICATION
        </div>

        <div className="section-heading">
          <h2>
            Inside
            <span> ShopSphere.</span>
          </h2>

          <p>
            Selected application screens from the project.
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
                alt={`ShopSphere screen ${index + 1}`}
              />

              <span>
                SCREEN {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          ))}

        </div>

      </section>

      {/* FOOTER */}
      <footer className="case-footer">

        <div>
          <span>PROJECT 01</span>
          <h2>
            Shop
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
