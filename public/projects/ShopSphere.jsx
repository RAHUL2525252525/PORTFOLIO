import React from "react";
import { useNavigate } from "react-router-dom";

const shopImages = Array.from(
  { length: 13 },
  (_, i) => `/projects/shopsphere/${i + 1}.png`
);

export default function ShopSphere() {

  const navigate = useNavigate();

  return (
    <div className="project-page">

      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #08080a;
          color: #f4f4f5;
          font-family: Inter, Arial, sans-serif;
        }

        .project-page {
          min-height: 100vh;
          background: #08080a;
        }

        .project-nav {
          position: sticky;
          top: 0;
          z-index: 20;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 7%;
          border-bottom: 1px solid #27272a;
          background: rgba(8,8,10,.92);
          backdrop-filter: blur(15px);
        }

        .back-btn {
          border: 1px solid #3f3f46;
          background: transparent;
          color: #fff;
          padding: 10px 18px;
          cursor: pointer;
        }

        .back-btn:hover {
          border-color: #a78bfa;
          color: #a78bfa;
        }

        .brand {
          color: #a78bfa;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .project-hero {
          padding: 110px 7%;
          max-width: 1300px;
          margin: auto;
        }

        .eyebrow {
          color: #a78bfa;
          letter-spacing: 4px;
          font-size: 12px;
          font-weight: 700;
        }

        .project-hero h1 {
          font-size: clamp(55px, 10vw, 120px);
          letter-spacing: -6px;
          line-height: .9;
          margin: 20px 0;
        }

        .project-hero h1 span {
          color: #a78bfa;
        }

        .subtitle {
          color: #a1a1aa;
          font-size: 20px;
          max-width: 750px;
        }

        .tech-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 30px;
        }

        .tech-row span {
          border: 1px solid #3f3f46;
          padding: 8px 13px;
          font-size: 13px;
          color: #d4d4d8;
        }

        .content {
          max-width: 1300px;
          margin: auto;
          padding: 0 7% 100px;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 20px;
          margin-bottom: 80px;
        }

        .info-card {
          padding: 30px;
          border: 1px solid #27272a;
          background: #0e0e11;
        }

        .info-card h3 {
          color: #a78bfa;
          margin-bottom: 10px;
        }

        .info-card p {
          color: #a1a1aa;
        }

        .section-title {
          font-size: 40px;
          margin-bottom: 30px;
        }

        .gallery {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 25px;
        }

        .gallery-item {
          border: 1px solid #27272a;
          overflow: hidden;
          background: #101014;
        }

        .gallery-item img {
          display: block;
          width: 100%;
          height: auto;
          transition: .4s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.025);
        }

        @media(max-width:800px) {
          .info-grid,
          .gallery {
            grid-template-columns: 1fr;
          }

          .project-hero {
            padding: 80px 6%;
          }

          .content {
            padding: 0 6% 70px;
          }
        }
      `}</style>

      <nav className="project-nav">
        <button
          className="back-btn"
          onClick={() => navigate("/")}
        >
          ← Back to Portfolio
        </button>

        <div className="brand">
          RAHUL S.
        </div>
      </nav>

      <header className="project-hero">

        <div className="eyebrow">
          PROJECT 01 / FULL STACK
        </div>

        <h1>
          Shop<span>Sphere</span>
        </h1>

        <p className="subtitle">
          Full Stack E-Commerce Web Application built with Java,
          Spring Boot, React.js, Spring Data JPA, MySQL and REST APIs.
        </p>

        <div className="tech-row">
          <span>Java 17</span>
          <span>Spring Boot 3</span>
          <span>React.js</span>
          <span>Spring Data JPA</span>
          <span>Hibernate</span>
          <span>MySQL</span>
          <span>REST APIs</span>
          <span>JWT</span>
        </div>

      </header>

      <main className="content">

        <div className="info-grid">

          <div className="info-card">
            <h3>Architecture</h3>
            <p>
              Layered Controller / Service / Repository architecture
              with REST API communication between frontend and backend.
            </p>
          </div>

          <div className="info-card">
            <h3>Security</h3>
            <p>
              Role-based access control separating ADMIN and CUSTOMER
              operations.
            </p>
          </div>

          <div className="info-card">
            <h3>Modules</h3>
            <p>
              Products, users, cart, wishlist, checkout, orders and
              administration.
            </p>
          </div>

        </div>

        <h2 className="section-title">
          Project Screenshots
        </h2>

        <div className="gallery">

          {shopImages.map((image, index) => (
            <div className="gallery-item" key={image}>
              <img
                src={image}
                alt={`ShopSphere screenshot ${index + 1}`}
              />
            </div>
          ))}

        </div>

      </main>

    </div>
  );
}
