import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";

import image32 from "../assets/projects/aiexamcompanion/32.png";
import image33 from "../assets/projects/aiexamcompanion/33.png";
import image34 from "../assets/projects/aiexamcompanion/34.png";
import image35 from "../assets/projects/aiexamcompanion/35.png";
import image36 from "../assets/projects/aiexamcompanion/36.png";
import image37 from "../assets/projects/aiexamcompanion/37.png";

const screenshots = [
  image32,
  image33,
  image34,
  image35,
  image36,
  image37,
];

export default function AIExamCompanion() {
  return (
    <div className="project-page">
      <div className="project-page-container">

        <Link to="/" className="back-button">
          <ArrowLeft size={18} />
          Back to Portfolio
        </Link>

        <div className="project-hero">
          <span className="project-label">
            AI EDUCATION APPLICATION
          </span>

          <h1>AI Exam Companion</h1>

          <p>
            AI-powered examination assistant featuring mentor chat,
            mock-test generation, revision assistance and performance
            analytics.
          </p>

          <div className="project-tags">
            <span>React.js</span>
            <span>Python</span>
            <span>Flask</span>
            <span>AI APIs</span>
            <span>JSON</span>
          </div>
        </div>

        <section className="project-content">
          <h2>Project Overview</h2>

          <p>
            AI Exam Companion is an educational application designed
            to support students during exam preparation through AI
            assistance, practice tests and performance tracking.
          </p>

          <div className="feature-grid">
            <div>
              <h3>Mentor Chat</h3>
              <p>
                Interactive AI-based assistance for learning and doubts.
              </p>
            </div>

            <div>
              <h3>Mock Tests</h3>
              <p>
                Structured question generation for examination practice.
              </p>
            </div>

            <div>
              <h3>Revision Assistant</h3>
              <p>
                Helps students revise important concepts.
              </p>
            </div>

            <div>
              <h3>Analytics</h3>
              <p>
                Tracks performance and provides useful insights.
              </p>
            </div>
          </div>

          <h2>Key Features</h2>

          <ul className="feature-list">
            <li>AI Mentor Chat</li>
            <li>Mock Test Generator</li>
            <li>Revision Assistant</li>
            <li>Performance Analytics</li>
            <li>Question bank</li>
            <li>Interactive dashboard</li>
          </ul>

          <h2>Project Screenshots</h2>

          <div className="screenshots-grid">
            {screenshots.map((image, index) => (
              <div className="screenshot-card" key={image}>
                <img
                  src={image}
                  alt={`AI Exam Companion screenshot ${index + 1}`}
                />
              </div>
            ))}
          </div>

          <div className="project-actions">
            <a
              href="https://github.com/RAHUL2525252525"
              target="_blank"
              rel="noreferrer"
              className="project-action-button"
            >
              GitHub
              <ExternalLink size={17} />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
