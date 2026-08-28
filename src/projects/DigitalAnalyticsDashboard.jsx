import React, { useState } from "react";

import img38 from "../assets/projects/digitalanalyticsdashboard/38.png";
import img39 from "../assets/projects/digitalanalyticsdashboard/39.png";
import img40 from "../assets/projects/digitalanalyticsdashboard/40.png";
import img41 from "../assets/projects/digitalanalyticsdashboard/41.png";
import img42 from "../assets/projects/digitalanalyticsdashboard/42.png";

const screenshots = [
  img38, img39, img40, img41, img42
];

export default function DigitalAnalyticsDashboard() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <style>{`
        .analytics-page {
          min-height: 100vh;
          background: #050505;
          color: #fff;
          padding: 70px 7%;
          font-family: Inter, Arial, sans-serif;
        }

        .analytics-wrapper {
          max-width: 1250px;
          margin: auto;
        }

        .analytics-back {
          color: #aaa;
          text-decoration: none;
          display: inline-block;
          margin-bottom: 45px;
        }

        .analytics-back:hover {
          color: #fff;
        }

        .analytics-label {
          color: #888;
          letter-spacing: 3px;
          text-transform: uppercase;
          font-size: 13px;
        }

        .analytics-title {
          font-size: clamp(48px, 8vw, 100px);
          line-height: 1;
          margin: 15px 0 25px;
        }

        .analytics-description {
          max-width: 850px;
          color: #aaa;
          font-size: 19px;
          line-height: 1.8;
          margin-bottom: 70px;
        }

        .analytics-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 70px;
          margin-bottom: 70px;
        }

        .analytics-section h2 {
          font-size: 27px;
          margin-bottom: 20px;
        }

        .analytics-section p {
          color: #aaa;
          line-height: 1.8;
        }

        .analytics-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .analytics-tech span {
          background: #0d0d0d;
          border: 1px solid #292929;
          border-radius: 30px;
          padding: 9px 15px;
          color: #ddd;
          font-size: 14px;
        }

        .analytics-features {
          padding-left: 20px;
          color: #aaa;
          line-height: 2;
        }

        .analytics-screens-title {
          font-size: 32px;
          margin-bottom: 30px;
        }

        .analytics-screens {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
        }

        .analytics-screen {
          overflow: hidden;
          border-radius: 15px;
          border: 1px solid #222;
          cursor: pointer;
          transition: .3s;
        }

        .analytics-screen:hover {
          transform: translateY(-6px);
          border-color: #555;
        }

        .analytics-screen img {
          width: 100%;
          display: block;
        }

        .analytics-lightbox {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0,0,0,.95);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px;
        }

        .analytics-lightbox img {
          max-width: 95%;
          max-height: 90vh;
        }

        .analytics-close {
          position: fixed;
          right: 30px;
          top: 20px;
          font-size: 40px;
          cursor: pointer;
        }

        @media(max-width:750px) {
          .analytics-grid,
          .analytics-screens {
            grid-template-columns: 1fr;
          }

          .analytics-page {
            padding: 45px 5%;
          }
        }
      `}</style>

      <main className="analytics-page">
        <div className="analytics-wrapper">

          <a href="/" className="analytics-back">
            ← Back to Portfolio
          </a>

          <div className="analytics-label">
            Data Visualization & Analytics
          </div>

          <h1 className="analytics-title">
            Digital Analytics Dashboard
          </h1>

          <p className="analytics-description">
            An interactive analytics dashboard designed to present
            business and application data through visual metrics,
            charts, summaries and responsive dashboard components.
          </p>

          <div className="analytics-grid">

            <section className="analytics-section">
              <h2>Overview</h2>

              <p>
                The Digital Analytics Dashboard provides a centralized
                interface for monitoring important metrics and presenting
                complex data through an intuitive visual dashboard.
              </p>
            </section>

            <section className="analytics-section">
              <h2>Technology</h2>

              <div className="analytics-tech">
                <span>React.js</span>
                <span>JavaScript ES6+</span>
                <span>HTML5</span>
                <span>CSS3</span>
                <span>REST APIs</span>
                <span>Responsive Design</span>
                <span>Data Visualization</span>
              </div>
            </section>

            <section className="analytics-section">
              <h2>Key Features</h2>

              <ul className="analytics-features">
                <li>Analytics dashboard</li>
                <li>Metric cards</li>
                <li>Data visualization</li>
                <li>Interactive charts</li>
                <li>Responsive dashboard UI</li>
                <li>Data-driven components</li>
              </ul>
            </section>

            <section className="analytics-section">
              <h2>Objective</h2>

              <p>
                The objective is to transform raw information into clear,
                visual insights that allow users to quickly understand
                trends, performance and important metrics.
              </p>
            </section>

          </div>

          <h2 className="analytics-screens-title">
            Project Screenshots
          </h2>

          <div className="analytics-screens">
            {screenshots.map((image, index) => (
              <div
                className="analytics-screen"
                key={index}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Digital Analytics Dashboard screenshot ${index + 1}`}
                />
              </div>
            ))}
          </div>

        </div>

        {selectedImage && (
          <div
            className="analytics-lightbox"
            onClick={() => setSelectedImage(null)}
          >
            <span className="analytics-close">×</span>

            <img
              src={selectedImage}
              alt="Digital Analytics Dashboard preview"
            />
          </div>
        )}
      </main>
    </>
  );
}
