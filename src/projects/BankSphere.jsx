import React from "react";
import FlipBook from "../components/FlipBook";

const imageFiles = import.meta.glob("../assets/projects/banksphere/*.png.png", {
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

export default function BankSphere() {
  return (
    <div className="project-page">
      <nav className="project-nav">
        <a href="#/" className="back-link">
          ← Back to Portfolio
        </a>
        <div className="project-logo">RAHUL S</div>
      </nav>

      <header className="project-hero">
        <p className="label">PROJECT 02</p>
        <div className="stack-pill java">Java Full Stack</div>

        <h1>
          Bank<span>Sphere</span>
        </h1>

        <p className="project-subtitle">Role-Based Banking Web Application</p>

        <p className="project-description">
          BankSphere is a full-stack banking system built with Java, Spring
          Boot, Spring Security, React.js and MySQL. It handles account
          management, transactions and administrative operations behind
          JWT-secured routes, with strict boundaries enforced across three
          separate permission tiers.
        </p>

        <div className="meta-grid">
          <div className="meta-card">
            <small>ROLE</small>
            <strong>Full Stack Developer</strong>
          </div>
          <div className="meta-card">
            <small>PERIOD</small>
            <strong>Update project dates</strong>
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
            <h3>JWT Authentication</h3>
            <p>Stateless, token-based authentication secures every protected route.</p>
          </div>
          <div className="feature">
            <h3>Role-Based Permissions</h3>
            <p>Three distinct permission tiers restrict which operations each role can perform.</p>
          </div>
          <div className="feature">
            <h3>Account Management</h3>
            <p>Customers can view balances, statements and manage account details.</p>
          </div>
          <div className="feature">
            <h3>Fund Transfers</h3>
            <p>Validated transfer workflow with server-side checks on every transaction.</p>
          </div>
          <div className="feature">
            <h3>Transaction History</h3>
            <p>Paginated, searchable transaction logs per account.</p>
          </div>
          <div className="feature">
            <h3>Admin Console</h3>
            <p>Administrative views for account oversight and dispute handling.</p>
          </div>
        </div>

        <h2>
          Technology <span>stack</span>
        </h2>

        <div className="tech-list">
          {["Java 17", "Spring Boot 3", "Spring Security", "JWT", "Spring Data JPA", "React.js", "MySQL", "Maven"].map((item) => (
            <span className="tech" key={item}>
              {item}
            </span>
          ))}
        </div>

        <h2>
          Project <span>notebook</span>
        </h2>

        <FlipBook images={images} projectName="BankSphere" />
      </main>
    </div>
  );
}
