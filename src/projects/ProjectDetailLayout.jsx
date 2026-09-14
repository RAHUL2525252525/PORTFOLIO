import React from "react";

/* =========================================================
   SHARED PROJECT DETAIL LAYOUT
   Used by every project page (ShopSphere, BankSphere, etc.)
   so all detail pages share the exact same theme/structure.
   ========================================================= */

export default function ProjectDetailLayout({
  category,
  title,
  tagline,
  tech = [],
  image = null,
  liveLinks = [],
  overview,
  features = [],
  architecture,
}) {
  const goBack = () => {
    window.location.hash = "#projects";
  };

  return (
    <div className="project-detail-page">
      <section className="project-detail-hero">
        <div className="section-container">
          <div
            className="project-detail-back"
            onClick={goBack}
            role="button"
            tabIndex={0}
          >
            ← Back to Projects
          </div>

          <div className="project-detail-category">
            {category}
          </div>

          <h1>{title}</h1>

          {tagline && (
            <p className="project-detail-tagline">{tagline}</p>
          )}

          {tech.length > 0 && (
            <div className="project-detail-tech-list">
              {tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          )}

          {liveLinks.length > 0 && (
            <div className="project-detail-links">
              {liveLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className={index === 0 ? "" : "secondary"}
                >
                  {link.label}
                  <span>↗</span>
                </a>
              ))}
            </div>
          )}

          <div className="project-detail-image">
            {image ? (
              <img src={image} alt={title} />
            ) : (
              <div className="project-detail-image-placeholder">
                Screenshot coming soon
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="project-detail-body">
        <div className="section-container">
          <div className="project-detail-grid">
            {overview && (
              <div className="project-detail-block">
                <h3>Overview</h3>
                {overview.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            )}

            <div className="project-detail-block">
              {features.length > 0 && (
                <>
                  <h3>Key Features</h3>
                  <ul>
                    {features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </>
              )}

              {architecture && (
                <>
                  <h3 style={{ marginTop: "34px" }}>
                    Architecture & Stack
                  </h3>
                  <p>{architecture}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
