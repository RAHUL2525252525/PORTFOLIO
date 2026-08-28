import React, { useState } from "react";

import img1 from "../assets/projects/shopsphere/1.png";
import img2 from "../assets/projects/shopsphere/2.png";
import img3 from "../assets/projects/shopsphere/3.png";
import img4 from "../assets/projects/shopsphere/4.png";
import img5 from "../assets/projects/shopsphere/5.png";
import img6 from "../assets/projects/shopsphere/6.png";
import img7 from "../assets/projects/shopsphere/7.png";
import img8 from "../assets/projects/shopsphere/8.png";
import img9 from "../assets/projects/shopsphere/9.png";
import img10 from "../assets/projects/shopsphere/10.png";
import img11 from "../assets/projects/shopsphere/11.png";
import img12 from "../assets/projects/shopsphere/12.png";
import img13 from "../assets/projects/shopsphere/13.png";

const screenshots = [
  img1, img2, img3, img4, img5, img6, img7,
  img8, img9, img10, img11, img12, img13
];

export default function ShopSphere() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <style>{`
        .project-page {
          min-height: 100vh;
          background: #050505;
          color: #ffffff;
          padding: 70px 7%;
          font-family: Inter, Arial, sans-serif;
        }

        .project-wrapper {
          max-width: 1250px;
          margin: auto;
        }

        .back-link {
          display: inline-block;
          color: #aaa;
          text-decoration: none;
          margin-bottom: 45px;
          font-size: 15px;
        }

        .back-link:hover {
          color: #fff;
        }

        .project-label {
          color: #888;
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 13px;
          margin-bottom: 15px;
        }

        .project-title {
          font-size: clamp(48px, 8vw, 100px);
          line-height: 1;
          margin: 0;
          font-weight: 800;
        }

        .project-description {
          max-width: 850px;
          color: #aaa;
          font-size: 19px;
          line-height: 1.8;
          margin: 30px 0 70px;
        }

        .project-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 70px;
          margin-bottom: 70px;
        }

        .project-section h2 {
          font-size: 27px;
          margin-bottom: 20px;
        }

        .project-section p {
          color: #aaa;
          line-height: 1.8;
        }

        .tech-container {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tech {
          border: 1px solid #292929;
          background: #0d0d0d;
          border-radius: 30px;
          padding: 9px 15px;
          font-size: 14px;
          color: #ddd;
        }

        .feature-list {
          padding-left: 20px;
          color: #aaa;
          line-height: 2;
        }

        .screenshots-title {
          font-size: 32px;
          margin-bottom: 30px;
        }

        .screenshots {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
        }

        .screenshot {
          background: #0c0c0c;
          border: 1px solid #222;
          border-radius: 15px;
          overflow: hidden;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .screenshot:hover {
          transform: translateY(-6px);
          border-color: #555;
        }

        .screenshot img {
          width: 100%;
          display: block;
        }

        .lightbox {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0,0,0,.95);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px;
        }

        .lightbox img {
          max-width: 95%;
          max-height: 90vh;
          object-fit: contain;
        }

        .close {
          position: fixed;
          top: 20px;
          right: 30px;
          font-size: 40px;
          cursor: pointer;
        }

        @media(max-width: 750px) {
          .project-page {
            padding: 45px 5%;
          }

          .project-grid,
          .screenshots {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="project-page">
        <div className="project-wrapper">

          <a href="/" className="back-link">
            ← Back to Portfolio
          </a>

          <div className="project-label">
            Full Stack E-Commerce Web Application
          </div>

          <h1 className="project-title">ShopSphere</h1>

          <p className="project-description">
            A full-stack e-commerce application built using Java, Spring Boot,
            React.js, Spring Data JPA, Hibernate, MySQL and REST APIs.
            The application provides customer shopping functionality and
            dedicated administrative operations.
          </p>

          <div className="project-grid">

            <section className="project-section">
              <h2>Overview</h2>
              <p>
                ShopSphere follows a layered Controller, Service and Repository
                architecture. The application supports product management,
                authentication, shopping cart, wishlist and order management.
              </p>
            </section>

            <section className="project-section">
              <h2>Technology Stack</h2>

              <div className="tech-container">
                <span className="tech">Java 17</span>
                <span className="tech">Spring Boot 3</span>
                <span className="tech">Spring Security</span>
                <span className="tech">React.js</span>
                <span className="tech">Spring Data JPA</span>
                <span className="tech">Hibernate</span>
                <span className="tech">MySQL</span>
                <span className="tech">REST APIs</span>
                <span className="tech">Axios</span>
                <span className="tech">Docker</span>
              </div>
            </section>

            <section className="project-section">
              <h2>Key Features</h2>

              <ul className="feature-list">
                <li>Customer authentication</li>
                <li>Admin authentication</li>
                <li>Role-Based Access Control</li>
                <li>Product management</li>
                <li>Shopping cart</li>
                <li>Wishlist</li>
                <li>Order management</li>
                <li>REST API integration</li>
              </ul>
            </section>

            <section className="project-section">
              <h2>Architecture</h2>

              <p>
                Controller → Service → Repository → MySQL
              </p>

              <p>
                React.js communicates with Spring Boot REST APIs through Axios,
                while Spring Data JPA and Hibernate handle database operations.
              </p>
            </section>

          </div>

          <h2 className="screenshots-title">
            Project Screenshots
          </h2>

          <div className="screenshots">
            {screenshots.map((image, index) => (
              <div
                className="screenshot"
                key={index}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`ShopSphere screenshot ${index + 1}`}
                />
              </div>
            ))}
          </div>

        </div>

        {selectedImage && (
          <div
            className="lightbox"
            onClick={() => setSelectedImage(null)}
          >
            <span className="close">×</span>
            <img src={selectedImage} alt="ShopSphere preview" />
          </div>
        )}
      </div>
    </>
  );
}
