import React, { useState } from "react";

import img14 from "../assets/projects/banksphere/14.png";
import img15 from "../assets/projects/banksphere/15.png";
import img16 from "../assets/projects/banksphere/16.png";
import img17 from "../assets/projects/banksphere/17.png";
import img18 from "../assets/projects/banksphere/18.png";
import img19 from "../assets/projects/banksphere/19.png";
import img20 from "../assets/projects/banksphere/20.png";
import img21 from "../assets/projects/banksphere/21.png";
import img22 from "../assets/projects/banksphere/22.png";
import img23 from "../assets/projects/banksphere/23.png";

const screenshots = [
  img14, img15, img16, img17, img18,
  img19, img20, img21, img22, img23
];

export default function BankSphere() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <style>{`
        .bank-page {
          min-height: 100vh;
          background: #050505;
          color: #fff;
          padding: 70px 7%;
          font-family: Inter, Arial, sans-serif;
        }

        .bank-wrapper {
          max-width: 1250px;
          margin: auto;
        }

        .bank-back {
          color: #aaa;
          text-decoration: none;
          display: inline-block;
          margin-bottom: 45px;
        }

        .bank-back:hover {
          color: white;
        }

        .bank-label {
          color: #888;
          letter-spacing: 3px;
          text-transform: uppercase;
          font-size: 13px;
        }

        .bank-title {
          font-size: clamp(48px, 8vw, 100px);
          margin: 15px 0;
          line-height: 1;
        }

        .bank-description {
          max-width: 850px;
          color: #aaa;
          font-size: 19px;
          line-height: 1.8;
          margin-bottom: 70px;
        }

        .bank-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 70px;
          margin-bottom: 70px;
        }

        .bank-section h2 {
          font-size: 27px;
          margin-bottom: 20px;
        }

        .bank-section p {
          color: #aaa;
          line-height: 1.8;
        }

        .bank-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .bank-tech span {
          border: 1px solid #292929;
          background: #0d0d0d;
          padding: 9px 15px;
          border-radius: 30px;
          font-size: 14px;
          color: #ddd;
        }

        .bank-features {
          padding-left: 20px;
          color: #aaa;
          line-height: 2;
        }

        .bank-shots-title {
          font-size: 32px;
          margin-bottom: 30px;
        }

        .bank-shots {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
        }

        .bank-shot {
          overflow: hidden;
          border-radius: 15px;
          border: 1px solid #222;
          cursor: pointer;
          transition: .3s;
        }

        .bank-shot:hover {
          transform: translateY(-6px);
          border-color: #555;
        }

        .bank-shot img {
          width: 100%;
          display: block;
        }

        .bank-lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,.95);
          z-index: 9999;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 30px;
        }

        .bank-lightbox img {
          max-width: 95%;
          max-height: 90vh;
        }

        .bank-close {
          position: fixed;
          right: 30px;
          top: 20px;
          font-size: 40px;
          cursor: pointer;
        }

        @media(max-width:750px) {
          .bank-grid,
          .bank-shots {
            grid-template-columns: 1fr;
          }

          .bank-page {
            padding: 45px 5%;
          }
        }
      `}</style>

      <main className="bank-page">
        <div className="bank-wrapper">

          <a href="/" className="bank-back">
            ← Back to Portfolio
          </a>

          <div className="bank-label">
            Full Stack Banking Application
          </div>

          <h1 className="bank-title">
            BankSphere
          </h1>

          <p className="bank-description">
            A secure full-stack online banking application built using
            Java 17, Spring Boot 3, Spring Security, JWT, React.js,
            MySQL and Docker.
          </p>

          <div className="bank-grid">

            <section className="bank-section">
              <h2>Overview</h2>

              <p>
                BankSphere is designed around secure banking workflows,
                stateless authentication and role-based authorization.
                The system manages banking operations through REST APIs
                backed by a normalized relational database.
              </p>
            </section>

            <section className="bank-section">
              <h2>Technology Stack</h2>

              <div className="bank-tech">
                <span>Java 17</span>
                <span>Spring Boot 3</span>
                <span>Spring Security</span>
                <span>JWT</span>
                <span>React.js</span>
                <span>MySQL</span>
                <span>REST APIs</span>
                <span>Docker</span>
                <span>Docker Compose</span>
              </div>
            </section>

            <section className="bank-section">
              <h2>Key Features</h2>

              <ul className="bank-features">
                <li>JWT Authentication</li>
                <li>Role-Based Authorization</li>
                <li>Secure Banking Operations</li>
                <li>Customer Management</li>
                <li>Account Management</li>
                <li>Transaction Processing</li>
                <li>Normalized MySQL Database</li>
                <li>REST API Architecture</li>
              </ul>
            </section>

            <section className="bank-section">
              <h2>Security</h2>

              <p>
                Implemented stateless JWT authentication with Spring Security
                and permission-based access control to protect banking
                operations and restrict unauthorized access.
              </p>
            </section>

          </div>

          <h2 className="bank-shots-title">
            Project Screenshots
          </h2>

          <div className="bank-shots">
            {screenshots.map((image, index) => (
              <div
                className="bank-shot"
                key={index}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`BankSphere screenshot ${index + 1}`}
                />
              </div>
            ))}
          </div>

        </div>

        {selectedImage && (
          <div
            className="bank-lightbox"
            onClick={() => setSelectedImage(null)}
          >
            <span className="bank-close">×</span>
            <img src={selectedImage} alt="BankSphere preview" />
          </div>
        )}
      </main>
    </>
  );
}
