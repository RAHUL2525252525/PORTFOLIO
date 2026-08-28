import React, { useState } from "react";

import img24 from "../assets/projects/lifedecisionassistant/24.png";
import img25 from "../assets/projects/lifedecisionassistant/25.png";
import img26 from "../assets/projects/lifedecisionassistant/26.png";
import img27 from "../assets/projects/lifedecisionassistant/27.png";
import img28 from "../assets/projects/lifedecisionassistant/28.png";
import img29 from "../assets/projects/lifedecisionassistant/29.png";
import img30 from "../assets/projects/lifedecisionassistant/30.png";
import img31 from "../assets/projects/lifedecisionassistant/31.png";

const screenshots = [
  img24, img25, img26, img27,
  img28, img29, img30, img31
];

export default function LifeDecisionAssistant() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <style>{`
        .life-page {
          min-height: 100vh;
          background: #050505;
          color: #fff;
          padding: 70px 7%;
          font-family: Inter, Arial, sans-serif;
        }

        .life-wrapper {
          max-width: 1250px;
          margin: auto;
        }

        .life-back {
          color: #aaa;
          text-decoration: none;
          display: inline-block;
          margin-bottom: 45px;
        }

        .life-back:hover {
          color: #fff;
        }

        .life-label {
          color: #888;
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 13px;
        }

        .life-title {
          font-size: clamp(45px, 7vw, 90px);
          line-height: 1;
          margin: 15px 0 25px;
        }

        .life-description {
          max-width: 850px;
          color: #aaa;
          font-size: 19px;
          line-height: 1.8;
          margin-bottom: 70px;
        }

        .life-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 70px;
          margin-bottom: 70px;
        }

        .life-section h2 {
          font-size: 27px;
          margin-bottom: 20px;
        }

        .life-section p {
          color: #aaa;
          line-height: 1.8;
        }

        .life-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .life-tech span {
          background: #0d0d0d;
          border: 1px solid #292929;
          border-radius: 30px;
          padding: 9px 15px;
          color: #ddd;
          font-size: 14px;
        }

        .life-features {
          color: #aaa;
          line-height: 2;
          padding-left: 20px;
        }

        .life-screens-title {
          font-size: 32px;
          margin-bottom: 30px;
        }

        .life-screens {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
        }

        .life-screen {
          overflow: hidden;
          border-radius: 15px;
          border: 1px solid #222;
          cursor: pointer;
          transition: .3s;
        }

        .life-screen:hover {
          transform: translateY(-6px);
          border-color: #555;
        }

        .life-screen img {
          width: 100%;
          display: block;
        }

        .life-lightbox {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0,0,0,.95);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 30px;
        }

        .life-lightbox img {
          max-width: 95%;
          max-height: 90vh;
        }

        .life-close {
          position: fixed;
          right: 30px;
          top: 20px;
          font-size: 40px;
          cursor: pointer;
        }

        @media(max-width:750px) {
          .life-grid,
          .life-screens {
            grid-template-columns: 1fr;
          }

          .life-page {
            padding: 45px 5%;
          }
        }
      `}</style>

      <main className="life-page">
        <div className="life-wrapper">

          <a href="/" className="life-back">
            ← Back to Portfolio
          </a>

          <div className="life-label">
            Decision Support Application
          </div>

          <h1 className="life-title">
            Life Decision Assistant
          </h1>

          <p className="life-description">
            An interactive application designed to help users evaluate
            important decisions through structured inputs, comparison
            workflows and personalized decision guidance.
          </p>

          <div className="life-grid">

            <section className="life-section">
              <h2>Overview</h2>

              <p>
                The Life Decision Assistant provides a structured approach
                to decision-making by allowing users to enter options,
                evaluate factors and understand the resulting recommendations.
              </p>
            </section>

            <section className="life-section">
              <h2>Technology</h2>

              <div className="life-tech">
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript</span>
                <span>React.js</span>
                <span>REST APIs</span>
                <span>Responsive UI</span>
              </div>
            </section>

            <section className="life-section">
              <h2>Key Features</h2>

              <ul className="life-features">
                <li>Decision input workflow</li>
                <li>Option comparison</li>
                <li>Factor-based evaluation</li>
                <li>Interactive user interface</li>
                <li>Responsive design</li>
                <li>Decision recommendations</li>
              </ul>
            </section>

            <section className="life-section">
              <h2>Objective</h2>

              <p>
                The goal of the application is to simplify complex choices
                by breaking them into measurable factors and presenting
                information in an easy-to-understand interface.
              </p>
            </section>

          </div>

          <h2 className="life-screens-title">
            Project Screenshots
          </h2>

          <div className="life-screens">
            {screenshots.map((image, index) => (
              <div
                className="life-screen"
                key={index}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Life Decision Assistant screenshot ${index + 1}`}
                />
              </div>
            ))}
          </div>

        </div>

        {selectedImage && (
          <div
            className="life-lightbox"
            onClick={() => setSelectedImage(null)}
          >
            <span className="life-close">×</span>
            <img
              src={selectedImage}
              alt="Life Decision Assistant preview"
            />
          </div>
        )}
      </main>
    </>
  );
}
