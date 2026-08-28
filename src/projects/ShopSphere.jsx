import React from "react";

const images = Array.from({ length: 13 }, (_, index) => {
  const number = index + 1;

  return new URL(
    `../assets/projects/shopsphere/${number}.png`,
    import.meta.url
  ).href;
});

export default function ShopSphere() {
  return (
    <div className="project-page">
      <div className="project-header">
        <a href="/" className="back-button">
          ← Back to Portfolio
        </a>

        <h1>ShopSphere</h1>

        <p className="project-subtitle">
          Full Stack E-Commerce Web Application
        </p>

        <div className="project-tech">
          <span>Java 17</span>
          <span>Spring Boot 3</span>
          <span>React.js</span>
          <span>Spring Data JPA</span>
          <span>Hibernate</span>
          <span>MySQL</span>
          <span>REST APIs</span>
          <span>Docker</span>
        </div>
      </div>

      <section className="project-overview">
        <h2>Project Overview</h2>

        <p>
          ShopSphere is a full-stack e-commerce web application developed
          using React.js and Spring Boot. The application provides customer
          shopping functionality along with an administration system for
          managing products, users, carts, orders and other operations.
        </p>

        <div className="project-grid">
          <div>
            <h3>Frontend</h3>
            <p>
              React.js, JavaScript ES6+, React Router, Axios, Context API,
              HTML5 and CSS3.
            </p>
          </div>

          <div>
            <h3>Backend</h3>
            <p>
              Java 17, Spring Boot 3, Spring MVC, Spring Data JPA,
              Hibernate and REST APIs.
            </p>
          </div>

          <div>
            <h3>Database</h3>
            <p>
              MySQL with relational database design and normalized data
              structures.
            </p>
          </div>

          <div>
            <h3>Security</h3>
            <p>
              Role-based access control separating ADMIN and CUSTOMER
              operations.
            </p>
          </div>
        </div>
      </section>

      <section className="project-features">
        <h2>Key Features</h2>

        <div className="feature-list">
          <div>✓ Customer Registration & Login</div>
          <div>✓ Product Browsing</div>
          <div>✓ Product Categories</div>
          <div>✓ Shopping Cart</div>
          <div>✓ Wishlist</div>
          <div>✓ Checkout & Orders</div>
          <div>✓ Admin Dashboard</div>
          <div>✓ Product Management</div>
          <div>✓ User Management</div>
          <div>✓ Order Management</div>
          <div>✓ REST API Integration</div>
          <div>✓ MySQL Database</div>
        </div>
      </section>

      <section className="project-gallery">
        <h2>Project Screenshots</h2>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div className="gallery-card" key={image}>
              <img
                src={image}
                alt={`ShopSphere Screenshot ${index + 1}`}
              />

              <p>ShopSphere — Screenshot {index + 1}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="project-footer">
        <h2>ShopSphere</h2>

        <p>
          A complete full-stack e-commerce application demonstrating
          frontend development, backend API development, database design,
          authentication, authorization and software engineering practices.
        </p>

        <a href="/" className="back-button">
          ← Back to Portfolio
        </a>
      </section>
    </div>
  );
}

