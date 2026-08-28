import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";

import image24 from "../assets/projects/lifedecisionassistant/24.png";
import image25 from "../assets/projects/lifedecisionassistant/25.png";
import image26 from "../assets/projects/lifedecisionassistant/26.png";
import image27 from "../assets/projects/lifedecisionassistant/27.png";
import image28 from "../assets/projects/lifedecisionassistant/28.png";
import image29 from "../assets/projects/lifedecisionassistant/29.png";
import image30 from "../assets/projects/lifedecisionassistant/30.png";
import image31 from "../assets/projects/lifedecisionassistant/31.png";

const screenshots = [
  image24,
  image25,
  image26,
  image27,
  image28,
  image29,
  image30,
  image31,
];

export default function LifeDecisionAssistant() {
  return (
    <div className="project-page">
      <div className="project-page-container">

        <Link to="/" className="back-button">
          <ArrowLeft size={18} />
          Back to Portfolio
        </Link>

        <div className="project-hero">
          <span className="project-label">
            DECISION SUPPORT APPLICATION
          </span>

          <h1>Life Decision Assistant</h1>

          <p>
            A decision-support application designed to help users
            organize choices, evaluate alternatives and make structured
            decisions.
          </p>

          <div className="project-tags">
            <span>React.js</span>
            <span>JavaScript</span>
            <span>Python</span>
            <span>Flask</span>
            <span>Firebase</span>
          </div>
        </div>

        <section className="project-content">
          <h2>Project Overview</h2>

          <p>
            Life Decision Assistant provides an interactive interface
            where users can structure important decisions and compare
            possible choices.
          </p>

          <div className="feature-grid">
            <div>
              <h3>Decision Support</h3>
              <p>
                Helps users organize options and evaluate alternatives.
              </p>
            </div>

            <div>
              <h3>Interactive UI</h3>
              <p>
                Responsive React interface for a smooth user experience.
              </p>
            </div>

            <div>
              <h3>Backend</h3>
              <p>
                Python and Flask based application functionality.
              </p>
            </div>

            <div>
              <h3>Data</h3>
              <p>
                Firebase used for application data and authentication.
              </p>
            </div>
          </div>

          <h2>Key Features</h2>

          <ul className="feature-list">
            <li>Decision creation</li>
            <li>Option comparison</li>
            <li>Structured evaluation</li>
            <li>Interactive user interface</li>
            <li>Firebase integration</li>
            <li>Responsive design</li>
          </ul>

          <h2>Project Screenshots</h2>

          <div className="screenshots-grid">
            {screenshots.map((image, index) => (
              <div className="screenshot-card" key={image}>
                <img
                  src={image}
                  alt={`Life Decision Assistant screenshot ${index + 1}`}
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
