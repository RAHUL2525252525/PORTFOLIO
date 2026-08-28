import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";

import image14 from "../assets/projects/banksphere/14.png";
import image15 from "../assets/projects/banksphere/15.png";
import image16 from "../assets/projects/banksphere/16.png";
import image17 from "../assets/projects/banksphere/17.png";
import image18 from "../assets/projects/banksphere/18.png";
import image19 from "../assets/projects/banksphere/19.png";
import image20 from "../assets/projects/banksphere/20.png";
import image21 from "../assets/projects/banksphere/21.png";
import image22 from "../assets/projects/banksphere/22.png";
import image23 from "../assets/projects/banksphere/23.png";

const screenshots = [
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
];

export default function BankSphere() {
  return (
    <div className="project-page">
      <div className="project-page-container">

        <Link to="/" className="back-button">
          <ArrowLeft size={18} />
          Back to Portfolio
        </Link>

        <div className="project-hero">
          <span className="project-label">FULL STACK BANKING APPLICATION</span>

          <h1>Online Banking System</h1>

          <p>
            Secure full-stack banking application with JWT authentication,
            role-based access control and Docker containerization.
          </p>

          <div className="project-tags">
            <span>Java 17</span>
            <span>Spring Boot 3</span>
            <span>Spring Security</span>
            <span>JWT</span>
            <span>React.js</span>
            <span>MySQL</span>
            <span>Docker</span>
          </div>
        </div>

        <section className="project-content">
          <h2>Project Overview</h2>

          <p>
            Online Banking System is a full-stack banking application
            designed around secure authentication, authorization,
            normalized database design and containerized deployment.
          </p>

          <div className="feature-grid">
            <div>
              <h3>Security</h3>
              <p>
                Stateless JWT authentication with Spring Security.
              </p>
            </div>

            <div>
              <h3>Authorization</h3>
              <p>
                Three permission tiers with role-based access control.
              </p>
            </div>

            <div>
              <h3>Database</h3>
              <p>
                Normalized MySQL schema with relational constraints.
              </p>
            </div>

            <div>
              <h3>DevOps</h3>
              <p>
                Docker Compose for full-stack environment setup.
              </p>
            </div>
          </div>

          <h2>Key Features</h2>

          <ul className="feature-list">
            <li>JWT authentication</li>
            <li>Role-based authorization</li>
            <li>Secure banking operations</li>
            <li>Normalized relational database</li>
            <li>Spring Security integration</li>
            <li>Docker Compose setup</li>
            <li>JUnit 5 testing</li>
            <li>Mockito unit testing</li>
          </ul>

          <h2>Project Screenshots</h2>

          <div className="screenshots-grid">
            {screenshots.map((image, index) => (
              <div className="screenshot-card" key={image}>
                <img
                  src={image}
                  alt={`BankSphere screenshot ${index + 1}`}
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
