import React from "react";

const imageFiles = import.meta.glob(
  "../assets/projects/banksphere/*.png.png",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const images = Object.entries(imageFiles)
  .sort(([a], [b]) => {
    const numberA = parseInt(a.match(/(\d+)\.png\.png$/)?.[1] || "0");
    const numberB = parseInt(b.match(/(\d+)\.png\.png$/)?.[1] || "0");

    return numberA - numberB;
  })
  .map(([, src]) => src);

export default function BankSphere() {
  return (
    <>
      <style>{`
        .bank-page {
          min-height: 100vh;
          background: #080808;
          color: white;
          padding-bottom: 100px;
        }

        .bank-nav {
          height: 75px;
          padding: 0 6%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #222;
          position: sticky;
          top: 0;
          z-index: 20;
          background: rgba(8,8,8,.9);
          backdrop-filter: blur(15px);
        }

        .bank-nav a {
          color: #aaa;
          text-decoration: none;
        }

        .bank-nav a:hover {
          color: #8b5cf6;
        }

        .bank-main {
          max-width: 1200px;
          margin: auto;
          padding: 100px 25px;
        }

        .bank-stack-pill {
          display: inline-block;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .5px;
          text-transform: uppercase;
          background: rgba(139,92,246,.15);
          color: #c4b5fd;
          border: 1px solid rgba(139,92,246,.4);
          margin-bottom: 18px;
        }

        .bank-label {
          color: #8b5cf6;
          letter-spacing: 3px;
          font-size: 12px;
          font-weight: 800;
        }

        .bank-main h1 {
          font-size: clamp(50px, 8vw, 100px);
          line-height: .95;
          letter-spacing: -5px;
          margin: 20px 0;
        }

        .bank-main h1 span {
          color: #8b5cf6;
        }

        .bank-subtitle {
          color: #aaa;
          font-size: 22px;
        }

        .bank-description {
          color: #888;
          max-width: 800px;
          font-size: 17px;
          margin-top: 25px;
        }

        .bank-info {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 20px;
          margin-top: 45px;
        }

        .bank-info div {
          border: 1px solid #292929;
          padding: 25px;
          border-radius: 12px;
          background: #101010;
        }

        .bank-info small {
          display: block;
          color: #666;
          margin-bottom: 8px;
        }

        .bank-section-title {
          margin-top: 80px;
          margin-bottom: 30px;
          font-size: 38px;
        }

        .bank-section-title span {
          color: #8b5cf6;
        }

        .bank-features {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 18px;
        }

        .bank-feature {
          padding: 25px;
          background: #101010;
          border: 1px solid #292929;
          border-radius: 12px;
        }

        .bank-feature p {
          color: #777;
          font-size: 14px;
          margin-top: 8px;
        }

        .bank-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .bank-tech span {
          padding: 9px 14px;
          border-radius: 7px;
          border: 1px solid #333;
          color: #aaa;
          font-size: 13px;
        }

        .bank-gallery {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 25px;
        }

        .bank-image {
          border: 1px solid #292929;
          background: #111;
          border-radius: 14px;
          overflow: hidden;
        }

        .bank-image img {
          width: 100%;
          display: block;
        }

        .bank-image p {
          color: #666;
          font-size: 12px;
          padding: 10px 15px;
        }

        .bank-empty-gallery {
          color: #666;
          border: 1px dashed #292929;
          border-radius: 14px;
          padding: 40px;
          text-align: center;
        }

        @media(max-width:800px) {
          .bank-info,
          .bank-features,
          .bank-gallery {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="bank-page">
        <nav className="bank-nav">
          <a href="#/">← Back to Portfolio</a>
          <strong>RAHUL S</strong>
        </nav>

        <main className="bank-main">
          <p className="bank-label">PROJECT 02</p>

          <div className="bank-stack-pill">Java Full Stack</div>

          <h1>
            Bank<span>Sphere</span>
          </h1>

          <p className="bank-subtitle">
            Online Banking System — Full Stack Banking Application
          </p>

          <p className="bank-description">
            BankSphere is a full-stack online banking application developed
            using Java, Spring Boot, Spring Security, JWT, React.js, MySQL
            and Docker. It implements secure authentication, authorization,
            account management and transaction workflows across 3 permission
            tiers, tested for privilege-escalation issues.
          </p>

          <div className="bank-info">
            <div>
              <small>ROLE</small>
              <strong>Full Stack Developer</strong>
            </div>

            <div>
              <small>PERIOD</small>
              <strong>06/2026 – 08/2026</strong>
            </div>

            <div>
              <small>SECURITY</small>
              <strong>JWT + RBAC</strong>
            </div>
          </div>

          <h2 className="bank-section-title">
            Key <span>features</span>
          </h2>

          <div className="bank-features">
            <div className="bank-feature">
              <h3>JWT Authentication</h3>
              <p>Stateless authentication implemented using Spring Security and JWT.</p>
            </div>

            <div className="bank-feature">
              <h3>Role-Based Access</h3>
              <p>Permission-based access control across 3 user roles, tested against privilege escalation.</p>
            </div>

            <div className="bank-feature">
              <h3>Account Management</h3>
              <p>Banking account workflows and user account administration.</p>
            </div>

            <div className="bank-feature">
              <h3>Transactions</h3>
              <p>Transaction workflows designed around relational data integrity.</p>
            </div>

            <div className="bank-feature">
              <h3>Normalized Database</h3>
              <p>MySQL schema with relational constraints across 8+ entities, preventing orphaned records.</p>
            </div>

            <div className="bank-feature">
              <h3>Docker</h3>
              <p>Full stack containerized with Docker Compose for one-command environment spin-up.</p>
            </div>
          </div>

          <h2 className="bank-section-title">
            Technology <span>stack</span>
          </h2>

          <div className="bank-tech">
            {[
              "Java 17",
              "Spring Boot 3",
              "Spring Security",
              "JWT",
              "React.js",
              "MySQL",
              "Docker",
              "Docker Compose",
              "JUnit 5",
              "Mockito",
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <h2 className="bank-section-title">
            Project <span>screenshots</span>
          </h2>

          {images.length > 0 ? (
            <div className="bank-gallery">
              {images.map((src, index) => (
                <div className="bank-image" key={src}>
                  <img src={src} alt={`BankSphere screenshot ${index + 1}`} />
                  <p>Screenshot {index + 1}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="bank-empty-gallery">
              Screenshots coming soon — check back shortly.
            </div>
          )}
        </main>
      </div>
    </>
  );
}
