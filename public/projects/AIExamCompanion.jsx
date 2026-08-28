import React from "react";
import { useNavigate } from "react-router-dom";

const examImages = Array.from(
  { length: 6 },
  (_, i) => `/projects/aiexamcompanion/${i + 32}.png`
);

export default function AIExamCompanion() {

  const navigate = useNavigate();

  return (
    <div className="exam-page">

      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #070b12;
          color: #f8fafc;
          font-family: Inter, Arial, sans-serif;
        }

        .exam-page {
          min-height: 100vh;
          background:
            radial-gradient(
              circle at 80% 15%,
              rgba(59,130,246,.16),
              transparent 35%
            ),
            #070b12;
        }

        .exam-nav {
          position: sticky;
          top: 0;
          z-index: 20;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 7%;
          border-bottom: 1px solid #1e293b;
          background: rgba(7,11,18,.9);
          backdrop-filter: blur(15px);
        }

        .exam-nav button {
          background: transparent;
          color: white;
          border: 1px solid #334155;
          padding: 10px 18px;
          cursor: pointer;
        }

        .exam-nav button:hover {
          color: #60a5fa;
          border-color: #60a5fa;
        }

        .exam-logo {
          color: #60a5fa;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .exam-hero,
        .exam-content {
          max-width: 1300px;
          margin: auto;
          padding-left: 7%;
          padding-right: 7%;
        }

        .exam-hero {
          padding-top: 110px;
          padding-bottom: 90px;
        }

        .exam-label {
          color: #60a5fa;
          letter-spacing: 4px;
          font-size: 12px;
          font-weight: 700;
        }

        .exam-hero h1 {
          font-size: clamp(50px, 9vw, 110px);
          line-height: .9;
          letter-spacing: -6px;
          max-width: 1000px;
          margin: 20px 0;
        }

        .exam-hero h1 span {
          color: #60a5fa;
        }

        .exam-subtitle {
          color: #94a3b8;
          font-size: 20px;
          max-width: 800px;
        }

        .exam-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 30px;
        }

        .exam-tech span {
          border: 1px solid #334155;
          padding: 8px 13px;
          color: #cbd5e1;
          font-size: 13px;
        }

        .exam-content {
          padding-bottom: 100px;
        }

        .exam-features {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 18px;
          margin-bottom: 80px;
        }

        .exam-feature {
          padding: 25px;
          border: 1px solid #1e293b;
          background: #0b111b;
        }

        .exam-feature h3 {
          color: #60a5fa;
        }

        .exam-feature p {
          color: #94a3b8;
        }

        .exam-content h2 {
          font-size: 40px;
          margin-bottom: 30px;
        }

        .exam-gallery {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 25px;
        }

        .exam-image {
          border: 1px solid #1e293b;
          overflow: hidden;
        }

        .exam-image img {
          display: block;
          width: 100%;
          height: auto;
        }

        @media(max-width:900px) {
          .exam-features {
            grid-template-columns: repeat(2,1fr);
          }
        }

        @media(max-width:600px) {
          .exam-features,
          .exam-gallery {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <nav className="exam-nav">

        <button onClick={() => navigate("/")}>
          ← Back to Portfolio
        </button>

        <div className="exam-logo">
          AI EXAM COMPANION
        </div>

      </nav>

      <header className="exam-hero">

        <div className="exam-label">
          PROJECT 04 / AI EDUCATION
        </div>

        <h1>
          AI Exam <span>Companion</span>
        </h1>

        <p className="exam-subtitle">
          AI-powered exam preparation platform featuring mentor
          chat, mock-test generation, revision assistance and
          performance analytics.
        </p>

        <div className="exam-tech">
          <span>React.js</span>
          <span>Python</span>
          <span>Flask</span>
          <span>Firebase</span>
          <span>AI</span>
          <span>JavaScript</span>
        </div>

      </header>

      <main className="exam-content">

        <div className="exam-features">

          <div className="exam-feature">
            <h3>Mentor Chat</h3>
            <p>
              Interactive AI assistance for learning and
              academic questions.
            </p>
          </div>

          <div className="exam-feature">
            <h3>Mock Tests</h3>
            <p>
              Automated mock-test generation for exam
              preparation.
            </p>
          </div>

          <div className="exam-feature">
            <h3>Revision</h3>
            <p>
              Structured revision assistance for important
              concepts and topics.
            </p>
          </div>

          <div className="exam-feature">
            <h3>Analytics</h3>
            <p>
              Performance tracking and analytics to identify
              strengths and improvement areas.
            </p>
          </div>

        </div>

        <h2>Project Screenshots</h2>

        <div className="exam-gallery">

          {examImages.map((image, index) => (
            <div className="exam-image" key={image}>
              <img
                src={image}
                alt={`AI Exam Companion screenshot ${index + 1}`}
              />
            </div>
          ))}

        </div>

      </main>

    </div>
  );
}
