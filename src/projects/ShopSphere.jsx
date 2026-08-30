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

export default function ShopSphere() {
  return (
    <>
      <style>{`
        .project-page {
          min-height: 100vh;
          background: #080808;
          color: white;
          padding-bottom: 100px;
        }

        .project-nav {
          height: 75px;
          padding: 0 6%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #222;
          background: rgba(8,8,8,.9);
          position: sticky;
          top: 0;
          z-index: 20;
          backdrop-filter: blur(15px);
        }

        .back-link {
          color: #aaa;
          text-decoration: none;
          font-size: 14px;
        }

        .back-link:hover {
          color: #8b5cf6;
        }

        .project-logo {
          font-weight: 900;
          letter-spacing: 1px;
        }

        .project-hero {
          max-width: 1200px;
          margin: auto;
          padding: 100px 25px 70px;
        }

        .label {
          color: #8b5cf6;
          letter-spacing: 3px;
          font-size: 12px;
          font-weight: 800;
        }

        .project-hero h1 {
          font-size: clamp(50px, 8vw, 100px);
          line-height: .95;
          margin: 20px 0;
          letter-spacing: -5px;
        }

        .project-hero h1 span {
          color: #8b5cf6;
        }

        .project-subtitle {
          color: #aaa;
          font-size: 22px;
        }

        .project-description {
          max-width: 800px;
          color: #888;
          font-size: 17px;
          margin-top: 25px;
        }

        .meta-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 45px;
        }

        .meta-card {
          border: 1px solid #282828;
          padding: 25px;
          border-radius: 12px;
          background: #101010;
        }

        .meta-card small {
          color: #666;
          display: block;
          margin-bottom: 8px;
        }

        .meta-card strong {
          color: #ddd;
        }

        .content {
          max-width: 1200px;
          margin: auto;
          padding: 0 25px;
        }

        .content h2 {
          font-size: 38px;
          margin: 70px 0 30px;
        }

        .content h2 span {
          color: #8b5cf6;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .feature {
          border: 1px solid #262626;
          padding: 25px;
          border-radius: 12px;
          background: #101010;
        }

        .feature h3 {
          margin-bottom: 8px;
        }

        .feature p {
          color: #777;
          font-size: 14px;
        }

        .tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tech {
          padding: 9px 14px;
          border: 1px solid #333;
          border-radius: 7px;
          color: #aaa;
          background: #111;
          font-size: 13px;
        }

        .gallery {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
        }

        .gallery-item {
          background: #111;
          border: 1px solid #282828;
          border-radius: 14px;
          overflow: hidden;
        }

        .gallery-item img {
          display: block;
          width: 100%;
          height: auto;
        }

        .image-number {
          padding: 10px 15px;
          color: #666;
          font-size: 12px;
        }

        @media(max-width: 800px) {
          .meta-grid,
          .feature-grid,
          .gallery {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="project-page">
        <nav className="project-nav">
          <a href="#/" className="back-link">
            ← Back to Portfolio
          </a>

          <div className="project-logo">
            RAHUL S
          </div>
        </nav>

        <header className="project-hero">
          <p className="label">PROJECT 01</p>

          <h1>
            Shop<span>Sphere</span>
          </h1>

          <p className="project-subtitle">
            Full Stack E-Commerce Web Application
          </p>

          <p className="project-description">
            ShopSphere is a full-stack e-commerce system built using
            Java, Spring Boot, React.js, Spring Data JPA and MySQL.
            The application provides product browsing, search, cart,
            wishlist, checkout and order management functionality
            with separate ADMIN and CUSTOMER operations.
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
              <p>
                Product browsing, search and product management
                functionality.
              </p>
            </div>

            <div className="feature">
              <h3>Shopping Cart</h3>
              <p>
                Cart workflows with centralized state management
                and validation.
              </p>
            </div>

            <div className="feature">
              <h3>Wishlist</h3>
              <p>
                Customers can manage products they want to save
                for later.
              </p>
            </div>

            <div className="feature">
              <h3>Checkout</h3>
              <p>
                Validated checkout and order creation workflow.
              </p>
            </div>

            <div className="feature">
              <h3>Order Management</h3>
              <p>
                Customer order workflows and administrative
                operations.
              </p>
            </div>

            <div className="feature">
              <h3>RBAC</h3>
              <p>
                ADMIN and CUSTOMER roles with restricted
                operations.
              </p>
            </div>
          </div>

          <h2>
            Technology <span>stack</span>
          </h2>

          <div className="tech-list">
            {[
              "Java 17",
              "Spring Boot 3",
              "Spring Data JPA",
              "Hibernate",
              "React.js",
              "REST APIs",
              "MySQL",
              "Maven",
              "Git",
            ].map((item) => (
              <span className="tech" key={item}>
                {item}
              </span>
            ))}
          </div>

          <h2>
            Project <span>screenshots</span>
          </h2>

          <div className="gallery">
            {images.map((src, index) => (
              <div className="gallery-item" key={src}>
                <img
                  src={src}
                  alt={`ShopSphere screenshot ${index + 1}`}
                />

                <div className="image-number">
                  Screenshot {index + 1}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
