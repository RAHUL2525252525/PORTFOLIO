import React from "react";

export default function ShopSphere() {
  const screenshots = Array.from(
    { length: 13 },
    (_, i) => `/${i + 1}.png.png`
  );

  return (
    <>
      <style>{`
        .project-page {
          min-height: 100vh;
          background: #f5f5f2;
          color: #111214;
          font-family: "DM Sans", Arial, sans-serif;
        }

        .project-nav {
          position: sticky;
          top: 0;
          z-index: 100;
          height: 76px;
          padding: 0 6%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(245,245,242,.9);
          backdrop-filter: blur(18px);
          border-bottom: 1px solid #dedfdc;
        }

        .project-logo {
          font-family: "Space Grotesk", sans-serif;
          font-size: 19px;
          font-weight: 700;
        }

        .project-logo span {
          color: #3457d5;
        }

        .back-link {
          color: #72757c;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
        }

        .back-link:hover {
          color: #3457d5;
        }

        .project-hero {
          max-width: 1240px;
          margin: auto;
          padding: 110px 25px 80px;
        }

        .project-kicker {
          color: #3457d5;
          font-family: monospace;
          font-size: 11px;
          letter-spacing: 2px;
          margin-bottom: 25px;
        }

        .project-hero h1 {
          max-width: 1000px;
          margin: 0;
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(60px, 10vw, 140px);
          line-height: .85;
          letter-spacing: -7px;
        }

        .project-hero h1 span {
          color: #3457d5;
        }

        .project-subtitle {
          max-width: 720px;
          margin-top: 35px;
          color: #72757c;
          font-size: 18px;
          line-height: 1.8;
        }

        .project-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 35px;
        }

        .project-meta span {
          padding: 9px 14px;
          border: 1px solid #d2d3d0;
          border-radius: 100px;
          color: #555860;
          font-size: 11px;
        }

        .hero-image {
          margin-top: 75px;
          width: 100%;
          border-radius: 32px;
          overflow: hidden;
          background: #e6e6e2;
          box-shadow: 0 30px 80px rgba(0,0,0,.08);
        }

        .hero-image img {
          display: block;
          width: 100%;
          height: auto;
        }

        .project-content {
          max-width: 1240px;
          margin: auto;
          padding: 40px 25px 120px;
        }

        .overview-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          padding: 80px 0;
          border-bottom: 1px solid #dedfdc;
        }

        .section-label {
          color: #3457d5;
          font-family: monospace;
          font-size: 10px;
          letter-spacing: 2px;
          margin-bottom: 18px;
        }

        .overview-grid h2,
        .case-section h2 {
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(35px, 5vw, 65px);
          line-height: 1;
          letter-spacing: -3px;
          margin: 0 0 25px;
        }

        .overview-grid p,
        .case-section p,
        .case-section li {
          color: #686b72;
          font-size: 15px;
          line-height: 1.85;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 15px;
          margin-top: 40px;
        }

        .feature-card {
          padding: 30px;
          min-height: 190px;
          background: white;
          border: 1px solid #dedfdc;
          border-radius: 22px;
        }

        .feature-card strong {
          display: block;
          color: #3457d5;
          font-family: monospace;
          font-size: 11px;
          margin-bottom: 25px;
        }

        .feature-card h3 {
          font-family: "Space Grotesk", sans-serif;
          font-size: 20px;
          margin-bottom: 10px;
        }

        .feature-card p {
          font-size: 12px;
          line-height: 1.7;
        }

        .case-section {
          padding: 100px 0;
          border-bottom: 1px solid #dedfdc;
        }

        .case-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 70px;
        }

        .case-section ul {
          padding-left: 20px;
        }

        .case-section li {
          margin-bottom: 14px;
        }

        .tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin-top: 25px;
        }

        .tech-list span {
          padding: 9px 13px;
          background: #111214;
          color: white;
          border-radius: 100px;
          font-size: 11px;
        }

        .screenshots {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 20px;
          margin-top: 45px;
        }

        .screenshot {
          overflow: hidden;
          border-radius: 20px;
          background: white;
          border: 1px solid #dedfdc;
          box-shadow: 0 15px 40px rgba(0,0,0,.05);
        }

        .screenshot img {
          display: block;
          width: 100%;
          height: auto;
          transition: transform .5s ease;
        }

        .screenshot:hover img {
          transform: scale(1.025);
        }

        .architecture {
          padding: 35px;
          background: #111214;
          color: white;
          border-radius: 28px;
          margin-top: 35px;
          font-family: monospace;
          font-size: 13px;
          line-height: 2;
          overflow-x: auto;
        }

        .project-footer {
          margin-top: 80px;
          padding: 50px;
          background: #3457d5;
          color: white;
          border-radius: 30px;
          text-align: center;
        }

        .project-footer h2 {
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(40px,6vw,75px);
          letter-spacing: -3px;
          margin: 0 0 25px;
        }

        .project-footer a {
          display: inline-block;
          padding: 14px 22px;
          border-radius: 100px;
          background: white;
          color: #111214;
          text-decoration: none;
          font-weight: 700;
          font-size: 12px;
        }

        @media(max-width:800px) {
          .project-hero {
            padding-top: 75px;
          }

          .project-hero h1 {
            letter-spacing: -4px;
          }

          .overview-grid,
          .case-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .feature-grid,
          .screenshots {
            grid-template-columns: 1fr;
          }

          .project-content {
            padding-bottom: 70px;
          }
        }

        @media(max-width:500px) {
          .project-nav {
            padding: 0 18px;
          }

          .project-hero,
          .project-content {
            padding-left: 18px;
            padding-right: 18px;
          }

          .hero-image {
            margin-top: 45px;
            border-radius: 20px;
          }

          .case-section {
            padding: 70px 0;
          }

          .project-footer {
            padding: 35px 20px;
          }
        }
      `}</style>

      <div className="project-page">

        <nav className="project-nav">
          <a href="/" className="back-link">← Back to Portfolio</a>
          <div className="project-logo">
            RAHUL<span>.</span>
          </div>
        </nav>

        <header className="project-hero">

          <div className="project-kicker">
            01 / JAVA FULL STACK / E-COMMERCE
          </div>

          <h1>
            Shop<span>Sphere</span>
          </h1>

          <p className="project-subtitle">
            A complete full-stack e-commerce platform designed and
            developed using Java, Spring Boot, React.js and MySQL.
            The application covers product discovery, cart,
            wishlist, checkout and order management workflows.
          </p>

          <div className="project-meta">
            <span>Java 17</span>
            <span>Spring Boot 3</span>
            <span>React.js</span>
            <span>Spring Data JPA</span>
            <span>MySQL</span>
            <span>REST APIs</span>
          </div>

          <div className="hero-image">
            <img src={screenshots[0]} alt="ShopSphere dashboard" />
          </div>

        </header>

        <main className="project-content">

          <section className="overview-grid">

            <div>
              <div className="section-label">01 / OVERVIEW</div>
              <h2>Built like a real product.</h2>
            </div>

            <div>
              <p>
                ShopSphere was built to demonstrate complete
                full-stack application development rather than
                only frontend implementation.
              </p>

              <p>
                The project connects a React frontend to a
                Spring Boot REST backend and a MySQL relational
                database through a layered architecture.
              </p>
            </div>

          </section>

          <section className="case-section">

            <div className="section-label">02 / CORE FEATURES</div>

            <h2>Everything needed for an online store.</h2>

            <div className="feature-grid">

              <div className="feature-card">
                <strong>01</strong>
                <h3>Product Discovery</h3>
                <p>
                  Product browsing, search and structured
                  product information.
                </p>
              </div>

              <div className="feature-card">
                <strong>02</strong>
                <h3>Cart & Wishlist</h3>
                <p>
                  Persistent cart and wishlist workflows
                  connected to authenticated users.
                </p>
              </div>

              <div className="feature-card">
                <strong>03</strong>
                <h3>Checkout</h3>
                <p>
                  Checkout and order creation workflow with
                  validated backend requests.
                </p>
              </div>

              <div className="feature-card">
                <strong>04</strong>
                <h3>Order Management</h3>
                <p>
                  Users can access and manage their order
                  information through REST APIs.
                </p>
              </div>

              <div className="feature-card">
                <strong>05</strong>
                <h3>Admin Features</h3>
                <p>
                  Administrative product and application
                  management functionality.
                </p>
              </div>

              <div className="feature-card">
                <strong>06</strong>
                <h3>Validation</h3>
                <p>
                  Backend validation and structured exception
                  handling for API requests.
                </p>
              </div>

            </div>

          </section>

          <section className="case-section">

            <div className="case-grid">

              <div>
                <div className="section-label">03 / ARCHITECTURE</div>
                <h2>Layered backend architecture.</h2>
              </div>

              <div>
                <p>
                  The backend follows a structured Controller,
                  Service and Repository approach.
                </p>

                <div className="architecture">
                  React.js
                  <br />
                  ↓
                  <br />
                  Axios / REST API
                  <br />
                  ↓
                  <br />
                  Spring Boot Controller
                  <br />
                  ↓
                  <br />
                  Service Layer
                  <br />
                  ↓
                  <br />
                  Spring Data JPA / Hibernate
                  <br />
                  ↓
                  <br />
                  MySQL Database
                </div>
              </div>

            </div>

          </section>

          <section className="case-section">

            <div className="section-label">04 / TECHNOLOGY</div>

            <h2>Technology stack.</h2>

            <div className="tech-list">
              <span>Java 17</span>
              <span>Spring Boot</span>
              <span>Spring MVC</span>
              <span>Spring Data JPA</span>
              <span>Hibernate</span>
              <span>React.js</span>
              <span>Axios</span>
              <span>MySQL</span>
              <span>REST API</span>
              <span>Maven</span>
              <span>Git</span>
            </div>

          </section>

          <section className="case-section">

            <div className="section-label">05 / SCREENSHOTS</div>

            <h2>Product walkthrough.</h2>

            <div className="screenshots">
              {screenshots.map((image, index) => (
                <div className="screenshot" key={image}>
                  <img
                    src={image}
                    alt={`ShopSphere screen ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

          </section>

          <section className="case-section">

            <div className="case-grid">

              <div>
                <div className="section-label">06 / ENGINEERING</div>
                <h2>What this project demonstrates.</h2>
              </div>

              <div>
                <ul>
                  <li>Full-stack Java development</li>
                  <li>REST API design</li>
                  <li>Relational database modelling</li>
                  <li>JPA and Hibernate persistence</li>
                  <li>React component development</li>
                  <li>API integration with Axios</li>
                  <li>Validation and error handling</li>
                  <li>Role-based application functionality</li>
                </ul>
              </div>

            </div>

          </section>

          <div className="project-footer">
            <h2>More projects.</h2>
            <a href="/">← Return to Portfolio</a>
          </div>

        </main>

      </div>
    </>
  );
}
