import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";

import image1 from "../assets/projects/shopsphere/1.png";
import image2 from "../assets/projects/shopsphere/2.png";
import image3 from "../assets/projects/shopsphere/3.png";
import image4 from "../assets/projects/shopsphere/4.png";
import image5 from "../assets/projects/shopsphere/5.png";
import image6 from "../assets/projects/shopsphere/6.png";
import image7 from "../assets/projects/shopsphere/7.png";
import image8 from "../assets/projects/shopsphere/8.png";
import image9 from "../assets/projects/shopsphere/9.png";
import image10 from "../assets/projects/shopsphere/10.png";
import image11 from "../assets/projects/shopsphere/11.png";
import image12 from "../assets/projects/shopsphere/12.png";
import image13 from "../assets/projects/shopsphere/13.png";

const screenshots = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
];

export default function ShopSphere() {
  return (
    <div className="project-page">
      <div className="project-page-container">

        <Link to="/" className="back-button">
          <ArrowLeft size={18} />
          Back to Portfolio
        </Link>

        <div className="project-hero">
          <span className="project-label">FULL STACK PROJECT</span>

          <h1>ShopSphere</h1>

          <p>
            Full Stack E-Commerce Web Application built using Java,
            Spring Boot, React.js, Spring Data JPA and MySQL.
          </p>

          <div className="project-tags">
            <span>Java 17</span>
            <span>Spring Boot 3</span>
            <span>React.js</span>
            <span>Spring Data JPA</span>
            <span>Hibernate</span>
            <span>MySQL</span>
            <span>REST APIs</span>
          </div>
        </div>

        <section className="project-content">
          <h2>Project Overview</h2>

          <p>
            ShopSphere is a full-stack e-commerce platform designed with
            a layered backend architecture and a responsive React.js
            frontend.
          </p>

          <div className="feature-grid">
            <div>
              <h3>Architecture</h3>
              <p>
                Controller / Service / Repository layered architecture.
              </p>
            </div>

            <div>
              <h3>Authentication</h3>
              <p>
                Role-based access control for ADMIN and CUSTOMER users.
              </p>
            </div>

            <div>
              <h3>Backend</h3>
              <p>
                Spring Boot REST APIs with Spring Data JPA and Hibernate.
              </p>
            </div>

            <div>
              <h3>Database</h3>
              <p>
                MySQL relational database with structured entities.
              </p>
            </div>
          </div>

          <h2>Key Features</h2>

          <ul className="feature-list">
            <li>Admin and customer role management</li>
            <li>Product management</li>
            <li>Shopping cart</li>
            <li>Wishlist functionality</li>
            <li>Order management</li>
            <li>Checkout workflow</li>
            <li>REST API integration</li>
            <li>Centralized frontend state management</li>
          </ul>

          <h2>Project Screenshots</h2>

          <div className="screenshots-grid">
            {screenshots.map((image, index) => (
              <div className="screenshot-card" key={image}>
                <img
                  src={image}
                  alt={`ShopSphere screenshot ${index + 1}`}
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
