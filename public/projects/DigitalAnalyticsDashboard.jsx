import React from "react";
import { useNavigate } from "react-router-dom";

const dashboardImages = Array.from(
  { length: 5 },
  (_, i) => `/projects/digitalanalyticsdashboard/${i + 38}.png`
);

export default function DigitalAnalyticsDashboard() {

  const navigate = useNavigate();

  return (
    <div className="dashboard-page">

      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #08090d;
          color: #f8fafc;
          font-family: Inter, Arial, sans-serif;
        }

        .dashboard-page {
          min-height: 100vh;
          background:
            radial-gradient(
              circle at 80% 10%,
              rgba(34,197,94,.1),
              transparent 35%
            ),
            #08090d;
        }

        .dashboard-nav {
          position: sticky;
          top: 0;
          z-index: 20;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 7%;
          border-bottom: 1px solid #27272a;
          background: rgba(8,9,13,.92);
          backdrop-filter: blur(15px);
        }

        .dashboard-nav button {
          background: transparent;
          color: white;
          border: 1px solid #3f3f46;
          padding: 10px 18px;
          cursor: pointer;
        }

        .dashboard-nav button:hover {
          color: #4ade80;
          border-color: #4ade80;
        }

        .dashboard-logo {
          color: #4ade80;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .dashboard-hero,
        .dashboard-content {
          max-width: 1300px;
          margin: auto;
          padding-left: 7%;
          padding-right: 7%;
        }

        .dashboard-hero {
          padding-top: 110px;
          padding-bottom: 90px;
        }

        .dashboard-label {
          color: #4ade80;
          font-size: 12px;
          letter-spacing: 4px;
          font-weight: 700;
        }

        .dashboard-hero h1 {
          font-size: clamp(50px, 9vw, 110px);
          line-height: .9;
          letter-spacing: -6px;
          max-width: 1000px;
          margin: 20px 0;
        }

        .dashboard-hero h1 span {
          color: #4ade80;
        }

        .dashboard-subtitle {
          color: #a1a1aa;
          font-size: 20px;
          max-width: 800px;
        }

        .dashboard-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 30px;
        }

        .dashboard-tech span {
          border: 1px solid #3f3f46;
          padding: 8px 13px;
          color: #d4d4d8;
          font-size: 13px;
        }

        .dashboard-content {
          padding-bottom: 100px;
        }

        .dashboard-features {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 20px;
          margin-bottom: 80px;
        }

        .dashboard-feature {
          border: 1px solid #27272a;
          padding: 30px;
          background: #0d0e12;
        }

        .dashboard-feature h3 {
          color: #4ade80;
        }

        .dashboard-feature p {
          color: #a1a1aa;
        }

        .dashboard-content h2 {
          font-size: 40px;
          margin-bottom: 30px;
        }

        .dashboard-gallery {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 25px;
        }

        .dashboard-image {
          border: 1px solid #27272a;
          overflow: hidden;
          background: #0d0e12;
        }

        .dashboard-image img {
          display: block;
          width: 100%;
          height: auto;
        }

        .dashboard-image:first-child {
          grid-column: span 2;
        }

        @media(max-width:800px) {

          .dashboard-features,
          .dashboard-gallery {
            grid-template-columns: 1fr;
          }

          .dashboard-image:first-child {
            grid-column: span 1;
          }

        }
      `}</style>

      <nav className="dashboard-nav">

        <button onClick={() => navigate("/")}>
          ← Back to Portfolio
        </button>

        <div className="dashboard-logo">
          DIGITAL ANALYTICS
        </div>

      </nav>

      <header className="dashboard-hero">

        <div className="dashboard-label">
          PROJECT 05 / ANALYTICS
        </div>

        <h1>
          Digital Analytics <span>Dashboard</span>
        </h1>

        <p className="dashboard-subtitle">
          Interactive analytics dashboard designed to present
          application and business metrics through visual cards,
          charts, tables and responsive data interfaces.
        </p>

        <div className="dashboard-tech">
          <span>React.js</span>
          <span>JavaScript ES6+</span>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>REST APIs</span>
          <span>Data Visualization</span>
        </div>

      </header>

      <main className="dashboard-content">

        <div className="dashboard-features">

          <div className="dashboard-feature">
            <h3>Metrics</h3>
            <p>
              Presents important application and business
              metrics through visual summary cards.
            </p>
          </div>

          <div className="dashboard-feature">
            <h3>Visualization</h3>
            <p>
              Converts data into clear visual representations
              for faster analysis.
            </p>
          </div>

          <div className="dashboard-feature">
            <h3>Responsive UI</h3>
            <p>
              Responsive interface designed for different
              screen sizes and dashboard layouts.
            </p>
          </div>

        </div>

        <h2>Project Screenshots</h2>

        <div className="dashboard-gallery">

          {dashboardImages.map((image, index) => (
            <div className="dashboard-image" key={image}>
              <img
                src={image}
                alt={`Digital Analytics Dashboard screenshot ${index + 1}`}
              />
            </div>
          ))}

        </div>

      </main>

    </div>
  );
}
