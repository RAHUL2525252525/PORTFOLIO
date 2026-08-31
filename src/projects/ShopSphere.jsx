import React, { useState, useEffect, useCallback } from "react";

import image1 from "../assets/projects/shopsphere/1.png.png";
import image2 from "../assets/projects/shopsphere/2.png.png";
import image3 from "../assets/projects/shopsphere/3.png.png";
import image4 from "../assets/projects/shopsphere/4.png.png";
import image5 from "../assets/projects/shopsphere/5.png.png";
import image6 from "../assets/projects/shopsphere/6.png.png";
import image7 from "../assets/projects/shopsphere/7.png.png";
import image8 from "../assets/projects/shopsphere/8.png.png";
import image9 from "../assets/projects/shopsphere/9.png.png";
import image10 from "../assets/projects/shopsphere/10.png.png";
import image11 from "../assets/projects/shopsphere/11.png.png";
import image12 from "../assets/projects/shopsphere/12.png.png";
import image13 from "../assets/projects/shopsphere/13.png.png";

const screenshots = [
  image1, image2, image3, image4, image5, image6, image7,
  image8, image9, image10, image11, image12, image13
];

/* =========================================================
   PROJECT DATA
   ========================================================= */

const WORKFLOW_STEPS = [
  {
    title: "Spring Boot API layer",
    short: "REST controllers",
    description:
      "Controllers, services and repositories are kept in separate layers, so request validation, business rules (stock checks, pricing, order totals) and data access each live in one place instead of being tangled together.",
  },
  {
    title: "MySQL via JPA & Hibernate",
    short: "Persistence",
    description:
      "Products, users, carts, wishlists and orders are modeled as related JPA entities, with Hibernate handling the mapping to MySQL tables so relational integrity (e.g. an order's line items) is enforced at the database level.",
  },
  {
    title: "Cart, wishlist & checkout",
    short: "Core modules",
    description:
      "Each module exposes its own set of REST endpoints for adding, updating and removing items, with checkout tying them together into a single order-creation flow that snapshots prices and quantities at purchase time.",
  },
  {
    title: "React storefront",
    short: "Frontend",
    description:
      "The frontend consumes the REST APIs directly, rendering product listings, cart state and order history from whatever the backend currently reports, so the UI never gets out of sync with stored data.",
  },
];

const FEATURES = [
  { title: "Product catalog & search", description: "Browse and search across the full product catalog." },
  { title: "Shopping cart", description: "Add, update and remove items with live total calculation." },
  { title: "Wishlist", description: "Save products for later, separate from the active cart." },
  { title: "Checkout & order placement", description: "Converts a cart into a persisted order in one flow." },
  { title: "Order history", description: "Past orders are retrievable per user." },
  { title: "Validated REST endpoints", description: "15+ endpoints across 6 modules, each with input validation." },
];

const CHALLENGES = [
  {
    title: "Modeling orders with variable line items",
    challenge:
      "An order can contain any number of products in any quantity, which doesn't map onto a single fixed-width table without either wasting columns or losing data.",
    approach:
      "Used JPA entity relationships (order → order items → product) with cascading persistence, so each order stores a consistent snapshot of what was purchased even if catalog prices change afterward.",
  },
  {
    title: "Keeping cart and wishlist state consistent with the backend",
    challenge:
      "Cart and wishlist actions need to feel instant in the UI, but quantities and availability are ultimately governed by rules that only the server can enforce, like stock limits.",
    approach:
      "Gave each cart and wishlist action its own dedicated, validated endpoint, so the frontend always re-renders from the server's response rather than assuming an action succeeded.",
  },
];

const TIMELINE = [
  { title: "Schema design", description: "Modeled products, users, carts, wishlists and orders as related entities." },
  { title: "Core product APIs", description: "Built CRUD endpoints for the product catalog." },
  { title: "Cart & wishlist modules", description: "Added endpoints for managing cart and wishlist state." },
  { title: "Checkout & order workflow", description: "Built the flow that converts a cart into a persisted order." },
  { title: "React frontend integration", description: "Connected the storefront UI to the REST APIs." },
  { title: "Endpoint testing", description: "Validated all 15+ endpoints across the 6 modules." },
];

export default function ShopSphere() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const previousImage = useCallback(() => {
    setSelectedImage((current) =>
      current === 0 ? screenshots.length - 1 : current - 1
    );
  }, []);

  const nextImage = useCallback(() => {
    setSelectedImage((current) =>
      current === screenshots.length - 1 ? 0 : current + 1
    );
  }, []);

  useEffect(() => {
    if (!isLightboxOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsLightboxOpen(false);
      if (e.key === "ArrowLeft") previousImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isLightboxOpen, previousImage, nextImage]);

  return (
    <>
      <style>{`
        .project-page {
          min-height: 100vh;
          background: #fffdf7;
          color: #14213d;
          font-family: "DM Sans", sans-serif;
        }

        .project-nav {
          position: sticky;
          top: 0;
          z-index: 100;
          min-height: 76px;
          padding: 0 max(24px, calc((100% - 1180px) / 2));
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255,253,247,.94);
          border-bottom: 1px solid #d8e2ef;
          backdrop-filter: blur(16px);
        }

        .back-link {
          color: #123f91;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          transition: .25s;
        }

        .back-link:hover { transform: translateX(-5px); }

        .nav-project-name {
          font-family: "Space Grotesk", sans-serif;
          font-weight: 700;
          color: #081a3a;
        }

        .project-container {
          width: min(1180px, calc(100% - 48px));
          margin: auto;
        }

        .project-hero { padding: 90px 0 40px; }

        .project-number {
          color: #123f91;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 18px;
        }

        .project-tag {
          display: inline-flex;
          padding: 8px 14px;
          border-radius: 50px;
          background: #eaf1fb;
          color: #123f91;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
          margin-bottom: 25px;
        }

        .project-title {
          max-width: 900px;
          margin: 0;
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(52px, 8vw, 100px);
          line-height: .92;
          letter-spacing: -5px;
          color: #081a3a;
        }

        .project-title span { color: #123f91; }

        .project-description {
          max-width: 760px;
          margin-top: 30px;
          color: #64748b;
          font-size: 17px;
          line-height: 1.9;
        }

        .project-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 30px;
        }

        .stack-pill {
          padding: 9px 14px;
          border-radius: 50px;
          border: 1px solid #d8e2ef;
          background: #f7faff;
          color: #38506f;
          font-size: 12px;
          font-weight: 700;
        }

        .project-feature {
          margin: 50px 0 0;
          padding: 30px;
          border-radius: 26px;
          background: #f2f6fc;
          border: 1px solid #d8e2ef;
        }

        .feature-label {
          color: #123f91;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .feature-text {
          margin-top: 12px;
          font-family: "Space Grotesk", sans-serif;
          font-size: 24px;
          font-weight: 600;
          color: #081a3a;
        }

        .section-heading {
          margin-bottom: 30px;
          font-family: "Space Grotesk", sans-serif;
          font-size: 42px;
          letter-spacing: -2px;
          color: #081a3a;
        }

        .project-section {
          padding: 60px 0;
          border-top: 1px solid #d8e2ef;
        }

        .section-eyebrow {
          color: #123f91;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 14px;
        }

        .section-intro {
          max-width: 680px;
          margin-bottom: 40px;
          color: #64748b;
          font-size: 15px;
          line-height: 1.8;
        }

        /* WORKFLOW DIAGRAM */

        .workflow-diagram {
          display: flex;
          align-items: flex-start;
          gap: 4px;
          margin-bottom: 44px;
          overflow-x: auto;
          padding: 10px 4px 20px;
        }

        .diagram-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          min-width: 130px;
          flex: 1;
        }

        .diagram-circle {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: #123f91;
          color: #fffdf7;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 17px;
          margin-bottom: 12px;
          box-shadow: 0 10px 24px rgba(18,63,145,.25);
          flex-shrink: 0;
        }

        .diagram-label {
          font-size: 12px;
          font-weight: 800;
          color: #081a3a;
          max-width: 130px;
          line-height: 1.4;
        }

        .diagram-connector {
          flex: 0 0 34px;
          height: 2px;
          background: #c7d6ec;
          margin-top: 27px;
          position: relative;
        }

        .diagram-connector::after {
          content: "";
          position: absolute;
          right: -1px;
          top: -4px;
          width: 8px;
          height: 8px;
          border-top: 2px solid #c7d6ec;
          border-right: 2px solid #c7d6ec;
          transform: rotate(45deg);
        }

        .workflow-list { border-top: 1px solid #d8e2ef; }

        .workflow-step {
          display: grid;
          grid-template-columns: 56px 1fr;
          gap: 26px;
          padding: 28px 0;
          border-bottom: 1px solid #d8e2ef;
        }

        .workflow-index {
          color: #123f91;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .5px;
        }

        .workflow-content h3 {
          color: #081a3a;
          font-size: 16px;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .workflow-content p {
          color: #64748b;
          font-size: 14px;
          line-height: 1.75;
          max-width: 640px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .feature-card {
          padding: 26px;
          background: #f7faff;
          border: 1px solid #d8e2ef;
          border-radius: 22px;
          transition: .3s ease;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(18,63,145,.08);
        }

        .feature-card h3 {
          color: #081a3a;
          font-size: 15px;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .feature-card p {
          color: #64748b;
          font-size: 13px;
          line-height: 1.65;
        }

        .challenges-list { display: grid; gap: 14px; }

        .challenge-row {
          padding: 26px;
          background: #f7faff;
          border: 1px solid #d8e2ef;
          border-radius: 22px;
        }

        .challenge-row h3 {
          color: #081a3a;
          font-size: 16px;
          font-weight: 800;
          margin-bottom: 12px;
        }

        .challenge-row p {
          color: #64748b;
          font-size: 14px;
          line-height: 1.75;
          margin-bottom: 8px;
        }

        .challenge-row p:last-child { margin-bottom: 0; }

        .challenge-row strong { color: #081a3a; font-weight: 800; }

        .timeline-list { margin-top: 6px; }

        .timeline-step {
          display: grid;
          grid-template-columns: 44px 1fr;
          gap: 24px;
          position: relative;
          padding-bottom: 32px;
        }

        .timeline-step:last-child { padding-bottom: 0; }

        .timeline-number {
          position: relative;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #081a3a;
          color: #fffdf7;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 800;
          flex-shrink: 0;
        }

        .timeline-step:not(:last-child) .timeline-number::after {
          content: "";
          position: absolute;
          top: 44px;
          left: 19px;
          width: 2px;
          height: calc(100% - 12px);
          background: #d8e2ef;
        }

        .timeline-content h3 {
          color: #081a3a;
          font-size: 15px;
          font-weight: 800;
          margin-bottom: 6px;
          padding-top: 8px;
        }

        .timeline-content p {
          color: #64748b;
          font-size: 13px;
          line-height: 1.65;
        }

        /* FLIPKART STYLE IMAGE VIEWER */

        .image-viewer {
          display: grid;
          grid-template-columns: 92px minmax(0, 1fr);
          gap: 22px;
          padding: 24px;
          background: #ffffff;
          border: 1px solid #d8e2ef;
          border-radius: 24px;
          box-shadow: 0 12px 40px rgba(18,63,145,.08);
        }

        .thumbnail-column {
          display: flex;
          flex-direction: column;
          gap: 10px;
          max-height: 650px;
          overflow-y: auto;
          padding-right: 4px;
        }

        .thumbnail-column::-webkit-scrollbar { width: 4px; }

        .thumbnail-column::-webkit-scrollbar-thumb {
          background: #b8c8dc;
          border-radius: 20px;
        }

        .thumbnail {
          width: 78px;
          height: 64px;
          padding: 4px;
          background: #fff;
          border: 2px solid #d8e2ef;
          border-radius: 10px;
          cursor: pointer;
          transition: .2s ease;
          flex-shrink: 0;
        }

        .thumbnail:hover { border-color: #6d8fbd; transform: translateY(-2px); }

        .thumbnail.active {
          border-color: #123f91;
          box-shadow: 0 0 0 2px rgba(18,63,145,.12);
        }

        .thumbnail img { width: 100%; height: 100%; object-fit: contain; display: block; }

        .main-image-area {
          min-width: 0;
          min-height: 620px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8fafc;
          border: 1px solid #e1e8f0;
          border-radius: 18px;
          overflow: hidden;
        }

        .main-project-image {
          width: 100%;
          height: 620px;
          object-fit: contain;
          display: block;
          padding: 18px;
          user-select: none;
          cursor: zoom-in;
          transition: transform .3s ease;
        }

        .main-project-image:hover { transform: scale(1.015); }

        .image-counter {
          position: absolute;
          top: 16px;
          right: 16px;
          z-index: 3;
          padding: 7px 12px;
          border-radius: 30px;
          background: rgba(8,26,58,.88);
          color: white;
          font-size: 12px;
          font-weight: 700;
        }

        .zoom-hint {
          position: absolute;
          bottom: 16px;
          left: 16px;
          z-index: 3;
          padding: 7px 12px;
          border-radius: 30px;
          background: rgba(8,26,58,.72);
          color: white;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .3px;
        }

        .image-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 4;
          width: 44px;
          height: 58px;
          border: none;
          border-radius: 10px;
          background: rgba(255,255,255,.94);
          color: #123f91;
          font-size: 30px;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(0,0,0,.12);
          transition: .2s;
        }

        .image-arrow:hover { background: #123f91; color: white; }

        .image-arrow.left { left: 16px; }
        .image-arrow.right { right: 16px; }

        .thumbnail-number {
          text-align: center;
          font-size: 10px;
          font-weight: 700;
          color: #64748b;
          margin-top: 4px;
        }

        .gallery-hint {
          margin-top: 15px;
          text-align: center;
          color: #64748b;
          font-size: 13px;
        }

        /* LIGHTBOX */

        .lightbox-overlay {
          position: fixed;
          inset: 0;
          z-index: 500;
          background: rgba(8,26,58,.94);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          animation: fadeIn .2s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .lightbox-img {
          max-width: 88vw;
          max-height: 82vh;
          object-fit: contain;
          border-radius: 14px;
          box-shadow: 0 30px 90px rgba(0,0,0,.5);
        }

        .lightbox-close {
          position: absolute;
          top: 24px;
          right: 28px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: none;
          background: rgba(255,255,255,.12);
          color: #fffdf7;
          font-size: 22px;
          cursor: pointer;
          transition: .2s;
        }

        .lightbox-close:hover { background: rgba(255,255,255,.25); }

        .lightbox-counter {
          position: absolute;
          top: 30px;
          left: 28px;
          color: #fffdf7;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: .5px;
        }

        .lightbox-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 52px;
          height: 68px;
          border: none;
          border-radius: 12px;
          background: rgba(255,255,255,.1);
          color: #fffdf7;
          font-size: 34px;
          cursor: pointer;
          transition: .2s;
        }

        .lightbox-arrow:hover { background: rgba(255,255,255,.22); }
        .lightbox-arrow.left { left: 24px; }
        .lightbox-arrow.right { right: 24px; }

        .project-footer {
          margin-top: 0;
          padding: 45px 0 70px;
          border-top: 1px solid #d8e2ef;
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }

        .footer-link {
          color: #123f91;
          font-weight: 700;
          text-decoration: none;
        }

        @media (max-width: 700px) {
          .project-container { width: min(100% - 32px, 1180px); }
          .project-nav { padding: 0 16px; }
          .project-hero { padding: 60px 0 30px; }

          .project-title {
            font-size: clamp(48px, 15vw, 72px);
            letter-spacing: -3px;
          }

          .project-section { padding: 45px 0; }
          .features-grid { grid-template-columns: 1fr; }

          .workflow-step { grid-template-columns: 36px 1fr; gap: 16px; }

          .diagram-node { min-width: 96px; }
          .diagram-circle { width: 44px; height: 44px; font-size: 14px; }
          .diagram-label { font-size: 11px; max-width: 96px; }
          .diagram-connector { flex-basis: 20px; margin-top: 21px; }

          .image-viewer { grid-template-columns: 1fr; padding: 12px; }

          .thumbnail-column {
            order: 2;
            flex-direction: row;
            max-height: none;
            overflow-x: auto;
            overflow-y: hidden;
            padding-bottom: 5px;
          }

          .thumbnail { width: 76px; height: 58px; }
          .main-image-area { min-height: 340px; }
          .main-project-image { height: 340px; padding: 10px; }
          .zoom-hint { display: none; }

          .lightbox-overlay { padding: 16px; }
          .lightbox-arrow { width: 40px; height: 52px; font-size: 24px; }
          .lightbox-arrow.left { left: 8px; }
          .lightbox-arrow.right { right: 8px; }

          .project-feature { padding: 22px; }
          .project-footer { flex-direction: column; }
        }
      `}</style>

      <main className="project-page">

        <nav className="project-nav">
          <a className="back-link" href="#projects">← Back to Projects</a>
          <span className="nav-project-name">RAHUL.</span>
        </nav>

        <div className="project-container">

          {/* HERO */}
          <section className="project-hero">
            <div className="project-number">01 / SELECTED PROJECT</div>
            <div className="project-tag">JAVA · FULL STACK · E-COMMERCE</div>

            <h1 className="project-title">
              Shop<span>Sphere</span>
            </h1>

            <p className="project-description">
              A complete e-commerce platform built with Java and Spring Boot,
              covering products, cart, wishlist, checkout and order workflows.
            </p>

            <div className="project-stack">
              {[
                "Java 17",
                "Spring Boot 3",
                "React.js",
                "Spring Data JPA",
                "Hibernate",
                "MySQL",
                "REST APIs"
              ].map((item) => (
                <span className="stack-pill" key={item}>{item}</span>
              ))}
            </div>
          </section>

          {/* SCREENSHOTS - MOVED UP, RIGHT UNDER THE HERO */}
          <section>
            <div className="image-viewer">

              <div className="thumbnail-column">
                {screenshots.map((image, index) => (
                  <div key={image}>
                    <button
                      className={`thumbnail ${selectedImage === index ? "active" : ""}`}
                      onClick={() => setSelectedImage(index)}
                      aria-label={`View screenshot ${index + 1}`}
                    >
                      <img src={image} alt={`ShopSphere thumbnail ${index + 1}`} />
                    </button>
                    <div className="thumbnail-number">{index + 1}</div>
                  </div>
                ))}
              </div>

              <div className="main-image-area">
                <div className="image-counter">{selectedImage + 1} / {screenshots.length}</div>
                <div className="zoom-hint">Click to zoom</div>

                <button className="image-arrow left" onClick={previousImage} aria-label="Previous image">‹</button>

                <img
                  className="main-project-image"
                  src={screenshots[selectedImage]}
                  alt={`ShopSphere screenshot ${selectedImage + 1}`}
                  onClick={() => setIsLightboxOpen(true)}
                />

                <button className="image-arrow right" onClick={nextImage} aria-label="Next image">›</button>
              </div>

            </div>

            <div className="gallery-hint">Click a thumbnail to jump to a screen, or click the main image to view it full-screen</div>
          </section>

          {/* FEATURE HIGHLIGHT */}
          <section className="project-feature">
            <div className="feature-label">PROJECT HIGHLIGHT</div>
            <div className="feature-text">6 modules · 15+ validated REST endpoints</div>
          </section>

          {/* HOW IT'S BUILT — DIAGRAM + DETAIL */}
          <section className="project-section">
            <div className="section-eyebrow">ARCHITECTURE & WORKFLOW</div>
            <h2 className="section-heading">How it's built</h2>
            <p className="section-intro">
              The backend is organized into layered modules, so persistence,
              business rules and the API surface can evolve independently of
              one another.
            </p>

            <div className="workflow-diagram">
              {WORKFLOW_STEPS.map((step, index) => (
                <React.Fragment key={step.title}>
                  <div className="diagram-node">
                    <div className="diagram-circle">{index + 1}</div>
                    <div className="diagram-label">{step.short}</div>
                  </div>
                  {index < WORKFLOW_STEPS.length - 1 && (
                    <div className="diagram-connector" />
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="workflow-list">
              {WORKFLOW_STEPS.map((step, index) => (
                <div className="workflow-step" key={step.title}>
                  <div className="workflow-index">{String(index + 1).padStart(2, "0")}</div>
                  <div className="workflow-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* KEY FEATURES */}
          <section className="project-section">
            <div className="section-eyebrow">WHAT IT DOES</div>
            <h2 className="section-heading">Key features</h2>
            <p className="section-intro">Covers the full shopping journey from browsing to order history.</p>

            <div className="features-grid">
              {FEATURES.map((feature) => (
                <div className="feature-card" key={feature.title}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CHALLENGES & LEARNINGS */}
          <section className="project-section">
            <div className="section-eyebrow">PROBLEM SOLVING</div>
            <h2 className="section-heading">Challenges & learnings</h2>

            <div className="challenges-list">
              {CHALLENGES.map((item) => (
                <div className="challenge-row" key={item.title}>
                  <h3>{item.title}</h3>
                  <p><strong>Challenge:</strong> {item.challenge}</p>
                  <p><strong>Approach:</strong> {item.approach}</p>
                </div>
              ))}
            </div>
          </section>

          {/* DEVELOPMENT TIMELINE */}
          <section className="project-section">
            <div className="section-eyebrow">PROCESS</div>
            <h2 className="section-heading">Development timeline</h2>

            <div className="timeline-list">
              {TIMELINE.map((step, index) => (
                <div className="timeline-step" key={step.title}>
                  <div className="timeline-number">{index + 1}</div>
                  <div className="timeline-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <footer className="project-footer">
            <a className="footer-link" href="#projects">← All Projects</a>
            <a className="footer-link" href="#banksphere">Next Project →</a>
          </footer>

        </div>
      </main>

      {isLightboxOpen && (
        <div
          className="lightbox-overlay"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="lightbox-counter">{selectedImage + 1} / {screenshots.length}</div>

          <button
            className="lightbox-close"
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Close"
          >
            ×
          </button>

          <button
            className="lightbox-arrow left"
            onClick={(e) => { e.stopPropagation(); previousImage(); }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <img
            className="lightbox-img"
            src={screenshots[selectedImage]}
            alt={`ShopSphere screenshot ${selectedImage + 1} full view`}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="lightbox-arrow right"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
