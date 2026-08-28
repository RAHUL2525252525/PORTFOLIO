import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";

import image38 from "../assets/projects/digitalanalyticsdashboard/38.png";
import image39 from "../assets/projects/digitalanalyticsdashboard/39.png";
import image40 from "../assets/projects/digitalanalyticsdashboard/40.png";
import image41 from "../assets/projects/digitalanalyticsdashboard/41.png";
import image42 from "../assets/projects/digitalanalyticsdashboard/42.png";

const screenshots = [
  image38,
  image39,
  image40,
  image41,
  image42,
];

export default function DigitalAnalyticsDashboard() {
  return (
    <div className="project-page">
      <div className="project-page-container">

        <Link to="/" className="back-button">
          <ArrowLeft size={18} />
          Back to Portfolio
        </Link>

        <div className="project-hero">
          <span className="project-label">
            ANALYTICS DASHBOARD
          </span>

          <h1>Digital Analytics Dashboard</h1>

          <p>
            Interactive analytics dashboard designed to present
            application and business data through clear visual insights.
          </p>

          <div className="project-tags">
            <span>React.js</span>
            <span>JavaScript</span>
            <span>REST APIs</span>
            <span>Charts</span>
            <span>Responsive UI</span>
          </div>
        </div>

        <section className="project-content">
          <h2>Project Overview</h2>

          <p>
            Digital Analytics Dashboard provides an interactive
            interface for monitoring data, identifying trends and
            presenting key metrics through visual components.
          </p>

          <div className="feature-grid">
            <div>
              <h3>Dashboard</h3>
              <p>
                Centralized view of important application metrics.
              </p>
            </div>

            <div>
              <h3>Analytics</h3>
              <p>
                Visual representation of application and business data.
              </p>
            </div>

            <div>
              <h3>API Integration</h3>
              <p>
                Designed to consume and display REST API data.
              </p>
            </div>

            <div>
              <h3>Responsive</h3>
              <p>
                Designed for desktop and smaller screen sizes.
              </p>
            </div>
          </div>

          <h2>Key Features</h2>

          <ul className="feature-list">
            <li>Analytics dashboard</li>
            <li>Metric cards</li>
            <li>Visual data representation</li>
            <li>REST API integration</li>
            <li>Responsive interface</li>
            <li>Interactive UI components</li>
          </ul>

          <h2>Project Screenshots</h2>

          <div className="screenshots-grid">
            {screenshots.map((image, index) => (
              <div className="screenshot-card" key={image}>
                <img
                  src={image}
                  alt={`Digital Analytics Dashboard screenshot ${
                    index + 1
                  }`}
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
