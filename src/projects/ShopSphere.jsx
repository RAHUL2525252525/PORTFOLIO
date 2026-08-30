import React from "react";
import FlipBook from "../components/FlipBook";

const imageFiles = import.meta.glob("../assets/projects/shopsphere/*.png.png", {
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

export default function ShopSphere() {
  return (
    <div className="project-page">
      <nav className="project-nav">
        <a href="#/" className="back-link">
          ← Back to Portfolio
        </a>
        <div className="project-logo">RAHUL S</div>
      </nav>

      <header className="project-hero">
        <p className="label">PROJECT 01</p>
        <div className="stack-pill java">Java Full Stack</div>

        <h1>
          Shop<span>Sphere</span>
        </h1>

        <p className="project-subtitle">Full Stack E-Commerce Web Application</p>

        <p className="project-description">
          ShopSphere is a full-stack e-commerce system built using Java, Spring
          Boot, React.js, Spring Data JPA and MySQL. The application provides
          product browsing, search, cart, wishlist, checkout and order
          management functionality with separate ADMIN and CUSTOMER operations
          across 6 modules and 15+ validated REST endpoints.
        </p>

        <div className="meta-grid">
          <div className="meta-card">
            <small>ROLE</small>
            <strong>Full Stack Developer</strong>
          </div>
          <div className="meta-card">
            <small>PERIOD</small>
            <strong>04/2026 – 06/2026</strong>
          </div>
          <div className="meta-card">
            <small>ARCHITECTURE</small>
            <strong>Layered Architecture</strong>
          </div>
        </div>
      </header>

      <main className="content">
        <h2>
          Key <span>features</span>
        </h2>

        <div className="feature-grid">
          <div className="feature">
            <h3>Product Management</h3>
            <p>Product browsing, search and catalog management across the store.</p>
          </div>
          <div className="feature">
            <h3>Shopping Cart</h3>
            <p>Centralized state management with client-side validation, reducing state-sync issues.</p>
          </div>
          <div className="feature">
            <h3>Wishlist</h3>
            <p>Customers can save products for later across sessions.</p>
          </div>
          <div className="feature">
            <h3>Checkout</h3>
            <p>Validated checkout and order creation workflow.</p>
          </div>
          <div className="feature">
            <h3>Order Management</h3>
            <p>Customer order tracking and administrative order operations.</p>
          </div>
          <div className="feature">
            <h3>Role-Based Access</h3>
            <p>ADMIN and CUSTOMER roles with restricted, boundary-tested operations.</p>
          </div>
        </div>

        <h2>
          Technology <span>stack</span>
        </h2>

        <div className="tech-list">
          {["Java 17", "Spring Boot 3", "Spring Data JPA", "Hibernate", "React.js", "REST APIs", "MySQL", "Maven", "Git"].map((item) => (
            <span className="tech" key={item}>
              {item}
            </span>
          ))}
        </div>

        <h2>
          Project <span>notebook</span>
        </h2>

        <FlipBook images={images} projectName="ShopSphere" />
      </main>
    </div>
  );
}
