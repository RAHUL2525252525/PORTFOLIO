import React from "react";

const imageFiles = import.meta.glob(
  "../assets/projects/digitalanalyticsdashboard/*.png.png",
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

export default function DigitalAnalyticsDashboard() {
  return (
    <>
      <style>{`
        .dashboard-page {
          min-height: 100vh;
          background: #080808;
          color: white;
          padding-bottom: 100px;
        }

        .dashboard-nav {
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

        .dashboard-nav a {
          color: #aaa;
          text-decoration: none;
        }

        .dashboard-nav a:hover {
          color: #8b5cf6;
        }

        .dashboard-main {
          max-width: 1200px;
          margin: auto;
          padding: 100px 25px;
        }

        .dashboard-stack-pill {
          display: inline-block;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .5px;
          text-transform: uppercase;
          background: rgba(56,189,178,.12);
          color: #5eead4;
          border: 1px solid rgba(56,189,178,.35);
          margin-bottom: 18px;
        }

        .dashboard-label {
          color: #8b5cf6;
          letter-spacing: 3px;
          font-size: 12px;
          font-weight: 800;
        }

        .dashboard-main h1 {
          font-size: clamp(45px,7vw,90px);
          line-height: .95;
          letter-spacing: -5px;
          margin: 20px 0;
        }

        .dashboard-main h1 span {
          color: #8b5cf6;
        }

        .dashboard-subtitle {
          color: #aaa;
          font-size: 22px;
        }

        .dashboard-description {
          max-width: 800px;
          color: #888;
          font-size: 17px;
          margin-top: 25px;
        }

        .dashboard-section {
          margin-top: 80px;
        }

        .dashboard-section h2 {
          font-size: 38px;
          margin-bottom: 30px;
        }

        .dashboard-section h2 span {
          color: #8b5cf6;
        }

        .dashboard-features {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 18px;
        }

        .dashboard-feature {
          padding: 25px;
          border-radius: 12px;
          background: #101010;
          border: 1px solid #292929;
        }

        .dashboard-feature p {
          color: #777;
          font-size: 14px;
          margin-top: 8px;
        }

        .dashboard-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .dashboard-tech span {
          padding: 9px 14px;
          border: 1px solid #333;
          color: #aaa;
          border-radius: 7px;
          font-size: 13px;
        }

        .dashboard-gallery {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 25px;
        }

        .dashboard-image {
          overflow: hidden;
          background: #111;
          border: 1px solid #292929;
          border-radius: 14px;
        }

        .dashboard-image img {
          display: block;
          width: 100%;
        }

        .dashboard-image p {
          color: #666;
          padding: 10px 15px;
          font-size: 12px;
        }

        .dashboard-empty-gallery {
          color: #666;
          border: 1px dashed #292929;
          border-radius: 14px;
          padding: 40px;
          text-align: center;
        }

        @media(max-width:800px) {
          .dashboard-features,
          .dashboard-gallery {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="dashboard-page">
        <nav className="dashboard-nav">
          <a href="#/">← Back to Portfolio</a>
          <strong>RAHUL S</strong>
        </nav>

        <main className="dashboard-main">
          <p className="dashboard-label">PROJECT 05</p>

          <div className="dashboard-stack-pill">Python / Flask</div>

          <h1>
            Digital Analytics <span>Dashboard</span>
          </h1>

          <p className="dashboard-subtitle">
            Interactive Analytics Dashboard
          </p>

          <p className="dashboard-description">
            A responsive analytics dashboard developed to organize and
            present digital information through a clean, structured web
            interface. The project uses Python/Flask with Google OAuth and
            Firebase handling authentication.
          </p>

          <section className="dashboard-section">
            <h2>
              Key <span>features</span>
            </h2>

            <div className="dashboard-features">
              <div className="dashboard-feature">
                <h3>Analytics Interface</h3>
                <p>Presents digital information in a clear, dashboard-oriented layout.</p>
              </div>

              <div className="dashboard-feature">
                <h3>Responsive Design</h3>
                <p>Designed to provide a consistent experience across different screen sizes.</p>
              </div>

              <div className="dashboard-feature">
                <h3>Google OAuth</h3>
                <p>Google OAuth provides a familiar, low-friction sign-in flow.</p>
              </div>

              <div className="dashboard-feature">
                <h3>Firebase</h3>
                <p>Firebase backs authentication state and application data.</p>
              </div>

              <div className="dashboard-feature">
                <h3>Flask Backend</h3>
                <p>Python Flask handles routing and backend application logic.</p>
              </div>

              <div className="dashboard-feature">
                <h3>Clean UI</h3>
                <p>Structured dashboard components make information easier to scan and understand.</p>
              </div>
            </div>
          </section>

          <section className="dashboard-section">
            <h2>
              Technology <span>stack</span>
            </h2>

            <div className="dashboard-tech">
              {[
                "Python",
                "Flask",
                "Firebase",
                "Google OAuth",
                "HTML",
                "CSS",
                "JavaScript",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </section>

          <section className="dashboard-section">
            <h2>
              Project <span>screenshots</span>
            </h2>

            {images.length > 0 ? (
              <div className="dashboard-gallery">
                {images.map((src, index) => (
                  <div className="dashboard-image" key={src}>
                    <img
                      src={src}
                      alt={`Digital Analytics Dashboard screenshot ${
                        index + 1
                      }`}
                    />
                    <p>Screenshot {index + 1}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="dashboard-empty-gallery">
                Screenshots coming soon — check back shortly.
              </div>
            )}
          </section>
        </main>
      </div>
    </>
  );
}
