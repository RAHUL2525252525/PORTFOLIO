import React, { useState, useEffect, useCallback } from "react";

import image14 from "../assets/projects/banksphere/14.png.png";
import image15 from "../assets/projects/banksphere/15.png.png";
import image16 from "../assets/projects/banksphere/16.png.png";
import image17 from "../assets/projects/banksphere/17.png.png";
import image18 from "../assets/projects/banksphere/18.png.png";
import image19 from "../assets/projects/banksphere/19.png.png";
import image20 from "../assets/projects/banksphere/20.png.png";
import image21 from "../assets/projects/banksphere/21.png.png";
import image22 from "../assets/projects/banksphere/22.png.png";
import image23 from "../assets/projects/banksphere/23.png.png";

const screenshots = [
  image14, image15, image16, image17, image18,
  image19, image20, image21, image22, image23
];

/* =========================================================
   PROJECT DATA
   ========================================================= */

const LIVE_LINKS = [
  { label: "Frontend", url: "https://banksphere-frontend.vercel.app" },
  { label: "Backend", url: "https://banksphere-backend-b96m.onrender.com" },
];

const BACKEND_NOTE =
  "Start the BankSphere backend first. Render may put the backend into sleep mode, so the frontend may need the backend to wake up before loading data.";

const WORKFLOW_STEPS = [
  {
    title: "Stateless JWT authentication",
    short: "JWT auth",
    description:
      "On login, the Spring Boot backend issues a signed JWT instead of a server-side session. Every subsequent request carries the token, and a custom Spring Security filter validates it before the request reaches any controller.",
  },
  {
    title: "Role-based authorization",
    short: "RBAC",
    description:
      "Users are assigned permission tiers (customer, employee, admin). Spring Security's method-level annotations restrict each endpoint to the roles that should be able to call it, instead of scattering role checks through business logic.",
  },
  {
    title: "Transaction-safe money movement",
    short: "Transactions",
    description:
      "Transfers and withdrawals run inside database transactions through Spring Data JPA, so a balance is only ever debited and credited together — never one without the other.",
  },
  {
    title: "React frontend + auth flow",
    short: "React auth flow",
    description:
      "The React frontend stores the issued token, attaches it to every API call, and redirects to login when a request comes back unauthorized.",
  },
  {
    title: "Dockerized backend",
    short: "Docker",
    description:
      "The Spring Boot service is containerized with Docker for a consistent runtime between local development and deployment on Render.",
  },
];

const FEATURES = [
  { title: "Secure login & JWT issuing", description: "Stateless authentication with signed, expiring tokens." },
  { title: "Role-based access control", description: "Three permission tiers gate access to sensitive endpoints." },
  { title: "Transfers & transactions", description: "Transactional transfer workflows between accounts." },
  { title: "Account & balance views", description: "Per-user account summaries and transaction history." },
  { title: "Dockerized deployment", description: "Consistent container-based backend runtime." },
  { title: "Layered security architecture", description: "Security concerns isolated from business logic." },
];

const CHALLENGES = [
  {
    title: "Enforcing roles without duplicating checks",
    challenge:
      "Repeating \"is this user allowed to do this?\" logic inside every controller method is easy to get wrong and easy to forget.",
    approach:
      "Moved authorization to Spring Security method-level annotations tied to each role, so access control lives in one consistent place instead of scattered if-checks.",
  },
  {
    title: "Handling token expiry gracefully",
    challenge:
      "An expired JWT would otherwise surface as a raw 401 error mid-session, with no clear signal to the user about what happened.",
    approach:
      "The frontend intercepts 401 responses globally, clears the stored token and routes back to login, rather than letting the failure appear on whatever screen the user happened to be on.",
  },
];

const TIMELINE = [
  { title: "Security model design", description: "Defined the permission tiers and what each role can access." },
  { title: "Account & transaction schema", description: "Designed the MySQL schema for accounts, balances and transaction records." },
  { title: "Spring Security + JWT", description: "Implemented token issuing, validation and stateless auth." },
  { title: "Role-protected endpoints", description: "Locked down each REST endpoint to the correct permission tier." },
  { title: "React frontend & auth flow", description: "Built the UI and wired up token storage and route protection." },
  { title: "Dockerize & deploy", description: "Containerized the backend and deployed frontend + backend separately." },
];

export default function BankSphere() {
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
          --cream: #f5f0e6;
          --cream-light: #faf7f0;
          --cream-dark: #e9e1d2;
          --navy: #071a33;
          --navy-soft: #0d294b;
          --navy-light: #16395f;
          --blue: #3b82c4;
          --blue-light: #78b7e8;
          --text: #071a33;
          --text-soft: #4d5b6d;
          --border: rgba(7, 26, 51, 0.14);
          --shadow: 0 18px 45px rgba(7, 26, 51, 0.09);
          --shadow-heavy: 0 25px 70px rgba(7, 26, 51, 0.15);
          --radius-sm: 12px;
          --radius-md: 20px;
          --radius-lg: 28px;
          --radius-xl: 38px;

          min-height: 100vh;
          background: var(--cream);
          color: var(--text);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
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
          background: rgba(245, 240, 230, 0.92);
          border-bottom: 1px solid var(--border);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--navy);
          font-weight: 800;
          font-size: 0.78rem;
          letter-spacing: 0.05em;
          text-decoration: none;
          transition: transform 0.25s ease, color 0.25s ease;
        }

        .back-link:hover { color: var(--blue); transform: translateX(-4px); }

        .nav-project-name {
          font-weight: 900;
          letter-spacing: 0.14em;
          color: var(--navy);
          font-size: 1rem;
        }

        .nav-project-name span { color: var(--blue); font-size: 1.3rem; }

        .project-container {
          width: min(1180px, calc(100% - 48px));
          margin: auto;
        }

        .project-hero { padding: 80px 0 40px; }

        .project-number {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--navy);
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 0.16em;
          margin-bottom: 22px;
        }

        .project-tag {
          display: inline-flex;
          padding: 9px 15px;
          border-radius: 999px;
          background: rgba(59, 130, 196, 0.08);
          border: 1px solid rgba(59, 130, 196, 0.2);
          color: var(--blue);
          font-size: 0.68rem;
          font-weight: 900;
          letter-spacing: 0.12em;
          margin-bottom: 26px;
        }

        .project-title {
          max-width: 900px;
          margin: 0;
          font-weight: 900;
          font-size: clamp(2.8rem, 6.5vw, 5.4rem);
          line-height: 0.94;
          letter-spacing: -0.045em;
          color: var(--navy);
        }

        .project-title span { color: var(--blue); }

        .project-description {
          max-width: 700px;
          margin-top: 26px;
          color: var(--text-soft);
          font-size: 1rem;
          line-height: 1.85;
        }

        .project-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin-top: 28px;
        }

        .stack-pill {
          padding: 9px 14px;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: var(--cream-light);
          color: var(--text-soft);
          font-size: 0.72rem;
          font-weight: 800;
        }

        .project-links { margin-top: 34px; }

        .live-label {
          color: var(--blue);
          font-size: 0.66rem;
          font-weight: 900;
          letter-spacing: 0.14em;
          margin-bottom: 12px;
        }

        .live-link-list { display: flex; flex-wrap: wrap; gap: 10px; }

        .live-link-list a {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 11px 16px;
          color: var(--navy);
          background: var(--cream-light);
          border: 1px solid var(--border);
          border-radius: 999px;
          font-size: 0.76rem;
          font-weight: 800;
          text-decoration: none;
          transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease;
        }

        .live-link-list a:hover {
          background: var(--navy);
          color: var(--cream);
          transform: translateY(-2px);
        }

        .backend-note {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          margin-top: 18px;
          padding: 14px 16px;
          background: rgba(59, 130, 196, 0.06);
          border: 1px solid rgba(59, 130, 196, 0.18);
          border-radius: var(--radius-md);
          max-width: 640px;
        }

        .backend-note > span {
          flex-shrink: 0;
          width: 22px;
          height: 22px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--blue);
          color: var(--cream);
          border-radius: 50%;
          font-size: 0.72rem;
          font-weight: 900;
        }

        .backend-note p {
          color: var(--text-soft);
          font-size: 0.76rem;
          line-height: 1.65;
        }

        .project-feature {
          margin: 50px 0 0;
          padding: 32px;
          border-radius: var(--radius-lg);
          background: var(--cream-light);
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
        }

        .feature-label {
          color: var(--blue);
          font-size: 0.66rem;
          font-weight: 900;
          letter-spacing: 0.16em;
        }

        .feature-text {
          margin-top: 12px;
          font-size: clamp(1.3rem, 2.6vw, 1.8rem);
          font-weight: 900;
          letter-spacing: -0.02em;
          color: var(--navy);
        }

        .project-section { padding: 60px 0; border-top: 1px solid var(--border); }

        .section-eyebrow {
          color: var(--blue);
          font-size: 0.68rem;
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .section-heading {
          margin-bottom: 12px;
          font-size: clamp(1.9rem, 3.6vw, 2.8rem);
          font-weight: 900;
          letter-spacing: -0.03em;
          color: var(--navy);
        }

        .section-intro {
          max-width: 680px;
          margin-bottom: 40px;
          color: var(--text-soft);
          font-size: 0.95rem;
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
          background: var(--navy);
          color: var(--cream);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 17px;
          margin-bottom: 12px;
          box-shadow: 0 10px 24px rgba(7,26,51,.25);
          flex-shrink: 0;
        }

        .diagram-label {
          font-size: 12px;
          font-weight: 800;
          color: var(--navy);
          max-width: 130px;
          line-height: 1.4;
        }

        .diagram-connector {
          flex: 0 0 34px;
          height: 2px;
          background: var(--border);
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
          border-top: 2px solid var(--blue);
          border-right: 2px solid var(--blue);
          transform: rotate(45deg);
        }

        .workflow-list { border-top: 1px solid var(--border); }

        .workflow-step {
          display: grid;
          grid-template-columns: 56px 1fr;
          gap: 26px;
          padding: 28px 0;
          border-bottom: 1px solid var(--border);
        }

        .workflow-index { color: var(--blue); font-size: 0.75rem; font-weight: 900; letter-spacing: 0.05em; }

        .workflow-content h3 { color: var(--navy); font-size: 1rem; font-weight: 800; margin-bottom: 8px; }

        .workflow-content p { color: var(--text-soft); font-size: 0.86rem; line-height: 1.75; max-width: 640px; }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .feature-card {
          padding: 26px;
          background: var(--cream-light);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .feature-card:hover { transform: translateY(-4px); box-shadow: var(--shadow); }

        .feature-card h3 { color: var(--navy); font-size: 0.92rem; font-weight: 800; margin-bottom: 8px; }
        .feature-card p { color: var(--text-soft); font-size: 0.8rem; line-height: 1.65; }

        .challenges-list { display: grid; gap: 14px; }

        .challenge-row {
          padding: 26px;
          background: var(--cream-light);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
        }

        .challenge-row h3 { color: var(--navy); font-size: 0.98rem; font-weight: 800; margin-bottom: 12px; }
        .challenge-row p { color: var(--text-soft); font-size: 0.85rem; line-height: 1.75; margin-bottom: 8px; }
        .challenge-row p:last-child { margin-bottom: 0; }
        .challenge-row strong { color: var(--navy); font-weight: 800; }

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
          background: var(--navy);
          color: var(--cream);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.76rem;
          font-weight: 900;
          flex-shrink: 0;
        }

        .timeline-step:not(:last-child) .timeline-number::after {
          content: "";
          position: absolute;
          top: 44px;
          left: 19px;
          width: 2px;
          height: calc(100% - 12px);
          background: var(--border);
        }

        .timeline-content h3 { color: var(--navy); font-size: 0.94rem; font-weight: 800; margin-bottom: 6px; padding-top: 8px; }
        .timeline-content p { color: var(--text-soft); font-size: 0.82rem; line-height: 1.65; }

        /* SCREENSHOTS */

        .image-viewer {
          display: grid;
          grid-template-columns: 92px minmax(0, 1fr);
          gap: 22px;
          padding: 24px;
          background: var(--cream-light);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow);
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
        .thumbnail-column::-webkit-scrollbar-thumb { background: var(--cream-dark); border-radius: 20px; }

        .thumbnail {
          width: 78px;
          height: 64px;
          padding: 4px;
          background: var(--cream);
          border: 2px solid var(--border);
          border-radius: 10px;
          cursor: pointer;
          transition: 0.2s ease;
          flex-shrink: 0;
        }

        .thumbnail:hover { border-color: var(--blue-light); transform: translateY(-2px); }

        .thumbnail.active { border-color: var(--blue); box-shadow: 0 0 0 2px rgba(59, 130, 196, 0.15); }

        .thumbnail img { width: 100%; height: 100%; object-fit: contain; display: block; }

        .main-image-area {
          min-width: 0;
          min-height: 620px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--cream);
          border: 1px solid var(--border);
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
          background: rgba(7, 26, 51, 0.88);
          color: var(--cream);
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
          background: rgba(7,26,51,.72);
          color: var(--cream);
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
          background: rgba(255, 255, 255, 0.94);
          color: var(--blue);
          font-size: 30px;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(7, 26, 51, 0.12);
          transition: 0.2s ease;
        }

        .image-arrow:hover { background: var(--navy); color: var(--cream); }
        .image-arrow.left { left: 16px; }
        .image-arrow.right { right: 16px; }

        .thumbnail-number {
          text-align: center;
          font-size: 10px;
          font-weight: 700;
          color: var(--text-soft);
          margin-top: 4px;
        }

        .gallery-hint {
          margin-top: 15px;
          text-align: center;
          color: var(--text-soft);
          font-size: 13px;
        }

        /* LIGHTBOX */

        .lightbox-overlay {
          position: fixed;
          inset: 0;
          z-index: 500;
          background: rgba(7,26,51,.94);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          animation: fadeIn .2s ease;
        }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

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
          color: var(--cream);
          font-size: 22px;
          cursor: pointer;
          transition: .2s;
        }

        .lightbox-close:hover { background: rgba(255,255,255,.25); }

        .lightbox-counter {
          position: absolute;
          top: 30px;
          left: 28px;
          color: var(--cream);
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
          color: var(--cream);
          font-size: 34px;
          cursor: pointer;
          transition: .2s;
        }

        .lightbox-arrow:hover { background: rgba(255,255,255,.22); }
        .lightbox-arrow.left { left: 24px; }
        .lightbox-arrow.right { right: 24px; }

        /* FOOTER */

        .project-footer {
          margin-top: 0;
          padding: 45px 0 70px;
          border-top: 1px solid var(--border);
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }

        .footer-link {
          color: var(--navy);
          font-weight: 800;
          font-size: 0.85rem;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-link:hover { color: var(--blue); }

        /* RESPONSIVE */

        @media (max-width: 700px) {
          .project-container { width: min(100% - 32px, 1180px); }
          .project-nav { padding: 0 16px; }
          .project-hero { padding: 50px 0 30px; }

          .project-title { font-size: clamp(2.4rem, 12vw, 3.4rem); letter-spacing: -0.03em; }

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

          .project-footer { flex-direction: column; }
        }
      `}</style>

      <main className="project-page">

        <nav className="project-nav">
          <a className="back-link" href="#projects">← Back to Projects</a>
          <span className="nav-project-name">RAHUL<span>.</span></span>
        </nav>

        <div className="project-container">

          {/* HERO */}
          <section className="project-hero">
            <div className="project-number">02 / SELECTED PROJECT</div>
            <div className="project-tag">JAVA · SECURITY · ONLINE BANKING</div>

            <h1 className="project-title">
              Bank<span>Sphere</span>
            </h1>

            <p className="project-description">
              A secure online banking application with JWT authentication,
              role-based authorization and transaction workflows built on
              Spring Security.
            </p>

            <div className="project-stack">
              {["Java 17", "Spring Boot", "Spring Security", "JWT", "React.js", "Spring Data JPA", "MySQL", "Docker"].map((item) => (
                <span className="stack-pill" key={item}>{item}</span>
              ))}
            </div>

            <div className="project-links">
              <div className="live-label">LIVE LINKS</div>
              <div className="live-link-list">
                {LIVE_LINKS.map((link) => (
                  <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
                    {link.label}
                    <span>↗</span>
                  </a>
                ))}
              </div>

              <div className="backend-note">
                <span>!</span>
                <p>{BACKEND_NOTE}</p>
              </div>
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
                      <img src={image} alt={`BankSphere thumbnail ${index + 1}`} />
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
                  alt={`BankSphere screenshot ${selectedImage + 1}`}
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
            <div className="feature-text">JWT security · 3 permission tiers</div>
          </section>

          {/* HOW IT'S BUILT — DIAGRAM + DETAIL */}
          <section className="project-section">
            <div className="section-eyebrow">ARCHITECTURE & WORKFLOW</div>
            <h2 className="section-heading">How it's built</h2>
            <p className="section-intro">
              BankSphere treats security as the core of the design, not an
              add-on — every request is authenticated, authorized and,
              where money moves, wrapped in a transaction.
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
            <p className="section-intro">A secure, role-aware banking flow from login through to money movement.</p>

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
            <a className="footer-link" href="#lifedecisionassistant">Next Project →</a>
          </footer>

        </div>
      </main>

      {isLightboxOpen && (
        <div className="lightbox-overlay" onClick={() => setIsLightboxOpen(false)}>
          <div className="lightbox-counter">{selectedImage + 1} / {screenshots.length}</div>

          <button className="lightbox-close" onClick={() => setIsLightboxOpen(false)} aria-label="Close">×</button>

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
            alt={`BankSphere screenshot ${selectedImage + 1} full view`}
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
