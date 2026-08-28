import React from "react";
import { useNavigate } from "react-router-dom";

const bankImages = Array.from(
  { length: 10 },
  (_, i) => `/projects/banksphere/${i + 14}.png`
);

export default function BankSphere() {

  const navigate = useNavigate();

  return (
    <div className="bank-page">

      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #070b10;
          color: #f8fafc;
          font-family: Inter, Arial, sans-serif;
        }

        .bank-page {
          min-height: 100vh;
          background:
            radial-gradient(
              circle at 80% 10%,
              rgba(14,165,233,.13),
              transparent 35%
            ),
            #070b10;
        }

        .bank-nav {
          position: sticky;
          top: 0;
          z-index: 20;
          display: flex;
          justify-content: space-between;
          padding: 20px 7%;
          border-bottom: 1px solid #1e293b;
          background: rgba(7,11,16,.9);
          backdrop-filter: blur(15px);
        }

        .bank-nav button {
          background: transparent;
          color: white;
          border: 1px solid #334155;
          padding: 10px 18px;
          cursor: pointer;
        }

        .bank-nav button:hover {
          border-color: #38bdf8;
          color: #38bdf8;
        }

        .bank-brand {
          font-weight: 800;
          color: #38bdf8;
          letter-spacing: 2px;
        }

        .bank-hero,
        .bank-content {
          max-width: 1300px;
          margin: auto;
          padding-left: 7%;
          padding-right: 7%;
        }

        .bank-hero {
          padding-top: 110px;
          padding-bottom: 90px;
        }

        .bank-eyebrow {
          color: #38bdf8;
          font-size: 12px;
          letter-spacing: 4px;
          font-weight: 700;
        }

        .bank-hero h1 {
          font-size: clamp(50px, 9vw, 110px);
          line-height: .9;
          letter-spacing: -6px;
          margin: 20px 0;
        }

        .bank-hero h1 span {
          color: #38bdf8;
        }

        .bank-subtitle {
          color: #94a3b8;
          font-size: 20px;
          max-width: 800px;
        }

        .bank-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 30px;
        }

        .bank-tech span {
          padding: 8px 13px;
          border: 1px solid #334155;
          color: #cbd5e1;
          font-size: 13px;
        }

        .bank-content {
          padding-bottom: 100px;
        }

        .bank-cards {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 20px;
          margin-bottom: 80px;
        }

        .bank-card {
          padding: 30px;
          border: 1px solid #1e293b;
          background: #0b1118;
        }

        .bank-card h3 {
          color: #38bdf8;
        }

        .bank-card p {
          color: #94a3b8;
        }

        .bank-content h2 {
          font-size: 40px;
          margin-bottom: 30px;
        }

        .bank-gallery {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 25px;
        }

        .bank-image {
          overflow: hidden;
          border: 1px solid #1e293b;
          background: #0b1118;
        }

        .bank-image img {
          display: block;
          width: 100%;
          height: auto;
        }

        @media(max-width:800px) {
          .bank-cards,
          .bank-gallery {
            grid-template-columns: 1fr;
          }

          .bank-hero {
            padding-top: 80px;
          }
        }
      `}</style>

      <nav className="bank-nav">

        <button onClick={() => navigate("/")}>
          ← Back to Portfolio
        </button>

        <div className="bank-brand">
          BANKSPHERE
        </div>

      </nav>

      <header className="bank-hero">

        <div className="bank-eyebrow">
          PROJECT 02 / BANKING SYSTEM
        </div>

        <h1>
          Bank<span>Sphere</span>
        </h1>

        <p className="bank-subtitle">
          Secure Full Stack Online Banking Application using
          Java, Spring Boot, Spring Security, JWT, React.js,
          MySQL and Docker.
        </p>

        <div className="bank-tech">
          <span>Java 17</span>
          <span>Spring Boot 3</span>
          <span>Spring Security</span>
          <span>JWT</span>
          <span>React.js</span>
          <span>MySQL</span>
          <span>Docker</span>
          <span>JUnit 5</span>
          <span>Mockito</span>
        </div>

      </header>

      <main className="bank-content">

        <div className="bank-cards">

          <div className="bank-card">
            <h3>Authentication</h3>
            <p>
              Stateless JWT authentication implemented using
              Spring Security.
            </p>
          </div>

          <div className="bank-card">
            <h3>Authorization</h3>
            <p>
              Permission-based access control across multiple
              user tiers.
            </p>
          </div>

          <div className="bank-card">
            <h3>Database</h3>
            <p>
              Normalized MySQL schema with relational constraints
              across related banking entities.
            </p>
          </div>

        </div>

        <h2>Project Screenshots</h2>

        <div className="bank-gallery">

          {bankImages.map((image, index) => (
            <div className="bank-image" key={image}>
              <img
                src={image}
                alt={`BankSphere screenshot ${index + 1}`}
              />
            </div>
          ))}

        </div>

      </main>

    </div>
  );
}
