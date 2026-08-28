import React, { useState } from "react";

import img32 from "../assets/projects/aiexamcompanion/32.png";
import img33 from "../assets/projects/aiexamcompanion/33.png";
import img34 from "../assets/projects/aiexamcompanion/34.png";
import img35 from "../assets/projects/aiexamcompanion/35.png";
import img36 from "../assets/projects/aiexamcompanion/36.png";
import img37 from "../assets/projects/aiexamcompanion/37.png";

const screenshots = [
  img32, img33, img34,
  img35, img36, img37
];

export default function AIExamCompanion() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <style>{`
        .exam-page {
          min-height: 100vh;
          background: #050505;
          color: #fff;
          padding: 70px 7%;
          font-family: Inter, Arial, sans-serif;
        }

        .exam-wrapper {
          max-width: 1250px;
          margin: auto;
        }

        .exam-back {
          color: #aaa;
          text-decoration: none;
          display: inline-block;
          margin-bottom: 45px;
        }

        .exam-back:hover {
          color: white;
        }

        .exam-label {
          color: #888;
          letter-spacing: 3px;
          text-transform: uppercase;
          font-size: 13px;
        }

        .exam-title {
          font-size: clamp(48px, 8vw, 100px);
          line-height: 1;
          margin: 15px 0 25px;
        }

        .exam-description {
          max-width: 850px;
          color: #aaa;
          font-size: 19px;
          line-height: 1.8;
          margin-bottom: 70px;
        }

        .exam-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 70px;
          margin-bottom: 70px;
        }

        .exam-section h2 {
          font-size: 27px;
          margin-bottom: 20px;
        }

        .exam-section p {
          color: #aaa;
          line-height: 1.8;
        }

        .exam-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .exam-tech span {
          background: #0d0d0d;
          border: 1px solid #292929;
          border-radius: 30px;
          padding: 9px 15px;
          color: #ddd;
          font-size: 14px;
        }

        .exam-features {
          color: #aaa;
          line-height: 2;
          padding-left: 20px;
        }

        .exam-screens-title {
          font-size: 32px;
          margin-bottom: 30px;
        }

        .exam-screens {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
        }

        .exam-screen {
          overflow: hidden;
          border-radius: 15px;
          border: 1px solid #222;
          cursor: pointer;
          transition: .3s;
        }

        .exam-screen:hover {
          transform: translateY(-6px);
          border-color: #555;
        }

        .exam-screen img {
          width: 100%;
          display: block;
        }

        .exam-lightbox {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0,0,0,.95);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px;
        }

        .exam-lightbox img {
          max-width: 95%;
          max-height: 90vh;
        }

        .exam-close {
          position: fixed;
          right: 30px;
          top: 20px;
          font-size: 40px;
          cursor: pointer;
        }

        @media(max-width:750px) {
          .exam-grid,
          .exam-screens {
            grid-template-columns: 1fr;
          }

          .exam-page {
            padding: 45px 5%;
          }
        }
      `}</style>

      <main className="exam-page">
        <div className="exam-wrapper">

          <a href="/" className="exam-back">
            ← Back to Portfolio
          </a>

          <div className="exam-label">
            AI Powered Learning Platform
          </div>

          <h1 className="exam-title">
            AI Exam Companion
          </h1>

          <p className="exam-description">
            An AI-powered learning platform designed to assist students
            with exam preparation through mock tests, revision assistance,
            performance analytics and an interactive mentor experience.
          </p>

          <div className="exam-grid">

            <section className="exam-section">
              <h2>Overview</h2>

              <p>
                AI Exam Companion combines exam preparation workflows with
                AI-assisted learning features to provide students with a
                centralized platform for preparation and performance tracking.
              </p>
            </section>

            <section className="exam-section">
              <h2>Technology</h2>

              <div className="exam-tech">
                <span>Python</span>
                <span>Flask</span>
                <span>JavaScript</span>
                <span>HTML5</span>
                <span>CSS3</span>
                <span>Firebase</span>
                <span>REST APIs</span>
                <span>AI APIs</span>
              </div>
            </section>

            <section className="exam-section">
              <h2>Key Features</h2>

              <ul className="exam-features">
                <li>AI Mentor Chat</li>
                <li>Mock Test Generator</li>
                <li>Revision Assistant</li>
                <li>Performance Analytics</li>
                <li>Question Bank</li>
                <li>Exam Preparation Dashboard</li>
              </ul>
            </section>

            <section className="exam-section">
              <h2>Objective</h2>

              <p>
                The application aims to provide personalized exam preparation
                by combining structured study tools with AI-assisted learning
                and performance insights.
              </p>
            </section>

          </div>

          <h2 className="exam-screens-title">
            Project Screenshots
          </h2>

          <div className="exam-screens">
            {screenshots.map((image, index) => (
              <div
                className="exam-screen"
                key={index}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`AI Exam Companion screenshot ${index + 1}`}
                />
              </div>
            ))}
          </div>

        </div>

        {selectedImage && (
          <div
            className="exam-lightbox"
            onClick={() => setSelectedImage(null)}
          >
            <span className="exam-close">×</span>

            <img
              src={selectedImage}
              alt="AI Exam Companion preview"
            />
          </div>
        )}
      </main>
    </>
  );
}
