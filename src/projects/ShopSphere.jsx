import React, { useState } from "react";

const images = Array.from(
  { length: 13 },
  (_, index) => `/${index + 1}.png.png`
);

export default function ShopSphere() {
  const [activeImage, setActiveImage] = useState(0);

  const goBack = () => {
    window.location.hash = "/projects";
  };

  return (
    <div className="project-page">

      {/* HEADER */}
      <header className="project-header">
        <button className="back-button" onClick={goBack}>
          ← Back to Portfolio
        </button>

        <span className="project-header-number">01 / 05</span>
      </header>

      {/* HERO */}
      <main className="project-container">

        <section className="project-hero">

          <div className="project-category">
            JAVA · SPRING BOOT · REACT
          </div>

          <h1>ShopSphere</h1>

          <p className="project-subtitle">
            Full Stack E-Commerce Platform
          </p>

          <p className="project-description">
            A complete e-commerce platform built using Java, Spring Boot,
            React.js and MySQL. The application provides product browsing,
            search, cart, wishlist, checkout and order management features
            with secure backend APIs.
          </p>

          <div className="project-tech">
            <span>Java 17</span>
            <span>Spring Boot</span>
            <span>Spring Data JPA</span>
            <span>Hibernate</span>
            <span>React.js</span>
            <span>MySQL</span>
            <span>REST APIs</span>
          </div>

        </section>

        {/* IMAGE GALLERY */}
        <section className="project-gallery">

          <div className="gallery-main">

            <img
              src={images[activeImage]}
              alt={`ShopSphere screenshot ${activeImage + 1}`}
            />

            <div className="gallery-counter">
              {activeImage + 1} / {images.length}
            </div>

          </div>

          <div className="gallery-thumbnails">

            {images.map((image, index) => (

              <button
                key={image}
                className={`gallery-thumbnail ${
                  activeImage === index ? "active" : ""
                }`}
                onClick={() => setActiveImage(index)}
              >

                <img
                  src={image}
                  alt={`ShopSphere ${index + 1}`}
                />

                <span>{index + 1}</span>

              </button>

            ))}

          </div>

        </section>

        {/* DETAILS */}
        <section className="project-details-grid">

          <div className="project-detail-card">
            <span>01</span>
            <h3>Core Features</h3>

            <ul>
              <li>Product browsing and search</li>
              <li>Shopping cart</li>
              <li>Wishlist management</li>
              <li>Checkout workflow</li>
              <li>Order management</li>
              <li>Admin functionality</li>
            </ul>
          </div>

          <div className="project-detail-card">
            <span>02</span>
            <h3>Backend</h3>

            <ul>
              <li>Spring Boot REST APIs</li>
              <li>Spring Data JPA</li>
              <li>Hibernate ORM</li>
              <li>MySQL database</li>
              <li>Layered architecture</li>
              <li>Validation and exception handling</li>
            </ul>
          </div>

          <div className="project-detail-card">
            <span>03</span>
            <h3>Frontend</h3>

            <ul>
              <li>React.js</li>
              <li>Responsive UI</li>
              <li>Axios API integration</li>
              <li>Component-based architecture</li>
              <li>Cart and wishlist interfaces</li>
            </ul>
          </div>

        </section>

      </main>

    </div>
  );
}
