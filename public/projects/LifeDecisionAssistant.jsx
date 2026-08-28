import React from "react";
import { useNavigate } from "react-router-dom";

const lifeImages = Array.from(
  { length: 8 },
  (_, i) => `/projects/lifedecisionassistant/${i + 24}.png`
);

export default function LifeDecisionAssistant() {

  const navigate = useNavigate();

  return (
    <div className="life-page">

      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #0c0a12;
          color: #f5f3ff;
          font-family: Inter, Arial, sans-serif;
        }

        .life-page {
          min-height: 100vh;
          background:
            radial-gradient(
              circle at 20% 10%,
              rgba(168,85,247,.15),
              transparent 35%
            ),
            #0c0a12;
        }

        .life-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 7%;
          border-bottom: 1px solid #292331;
          position: sticky;
          top: 0;
          z-index: 10;
          background: rgba(12,10,18,.9);
          backdrop-filter: blur(15px);
        }

        .life-nav button {
          background: transparent;
          color: white;
          border: 1px solid #3b3248;
          padding: 10px 18px;
          cursor: pointer;
        }

        .life-nav button:hover {
          border-color: #c084fc;
          color: #c084fc;
        }

        .life-logo {
          color: #c084fc;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .life-hero,
        .life-content {
          max-width: 1300px;
          margin: auto;
          padding-left: 7%;
          padding-right: 7%;
        }

        .life-hero {
          padding-top: 110px;
          padding-bottom: 90px;
        }

        .life-label {
          color: #c084fc;
          letter-spacing: 4px;
          font-size: 12px;
          font-weight: 700;
        }

        .life-hero h1 {
          font-size: clamp(48px, 9vw, 105px);
          line-height: .95;
          letter-spacing: -5px;
          max-width: 1000px;
          margin: 20px 0;
        }

        .life-hero h1 span {
          color: #c084fc;
        }

        .life-subtitle {
          color: #aaa2b8;
          font-size: 20px;
          max-width: 800px;
        }

        .life-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 30px;
        }

        .life-tech span {
          border: 1px solid #3b3248;
          padding: 8px 13px;
          font-size: 13px;
          color: #d8cfe3;
        }

        .life-content {
          padding-bottom: 100px;
        }

        .life-features {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 20px;
          margin-bottom: 80px;
        }

        .life-feature {
          border: 1px solid #292331;
          padding: 30px;
          background: #110e17;
        }

        .life-feature h3 {
          color: #c084fc;
        }

        .life-feature p {
          color: #aaa2b8;
        }

        .life-content h2 {
          font-size: 40px;
          margin-bottom: 30px;
        }

        .life-gallery {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 25px;
        }

        .life-image {
          border: 1px solid #292331;
          overflow: hidden;
        }

        .life-image img {
          display: block;
          width: 100%;
          height: auto;
        }

        @media(max-width:800px) {
          .life-features,
          .life-gallery {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <nav className="life-nav">

        <button onClick={() => navigate("/")}>
          ← Back to Portfolio
        </button>

        <div className="life-logo">
          LIFE DECISION ASSISTANT
        </div>

      </nav>

      <header className="life-hero">

        <div className="life-label">
          PROJECT 03 / AI APPLICATION
        </div>

        <h1>
          Life Decision <span>Assistant</span>
        </h1>

        <p className="life-subtitle">
          An interactive decision-support application designed to
          help users structure choices, compare alternatives,
          evaluate options and receive organized guidance.
        </p>

        <div className="life-tech">
          <span>React.js</span>
          <span>Python</span>
          <span>Flask</span>
          <span>Firebase</span>
          <span>AI</span>
          <span>JavaScript</span>
        </div>

      </header>

      <main className="life-content">

        <div className="life-features">

          <div className="life-feature">
            <h3>Decision Analysis</h3>
            <p>
              Helps users break complex decisions into
              manageable alternatives and criteria.
            </p>
          </div>

          <div className="life-feature">
            <h3>Interactive UI</h3>
            <p>
              Responsive interface designed for interactive
              user input and structured results.
            </p>
          </div>

          <div className="life-feature">
            <h3>AI Assistance</h3>
            <p>
              Provides structured guidance to help users
              understand different possible choices.
            </p>
          </div>

        </div>

        <h2>Project Screenshots</h2>

        <div className="life-gallery">

          {lifeImages.map((image, index) => (
            <div className="life-image" key={image}>
              <img
                src={image}
                alt={`Life Decision Assistant screenshot ${index + 1}`}
              />
            </div>
          ))}

        </div>

      </main>

    </div>
  );
}
