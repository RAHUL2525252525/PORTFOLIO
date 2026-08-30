import React from "react";

const imageFiles = import.meta.glob(
  "../assets/projects/lifedecisionassistant/*.png.png",
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

export default function LifeDecisionAssistant() {
  return (
    <>
      <style>{`
        .life-page {
          min-height: 100vh;
          background: #080808;
          color: white;
          padding-bottom: 100px;
        }

        .life-nav {
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

        .life-nav a {
          color: #aaa;
          text-decoration: none;
        }

        .life-nav a:hover {
          color: #8b5cf6;
        }

        .life-main {
          max-width: 1200px;
          margin: auto;
          padding: 100px 25px;
        }

        .life-label {
          color: #8b5cf6;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 3px;
        }

        .life-main h1 {
          font-size: clamp(45px,7vw,90px);
          line-height: .95;
          letter-spacing: -5px;
          margin: 20px 0;
        }

        .life-main h1 span {
          color: #8b5cf6;
        }

        .life-subtitle {
          color: #aaa;
          font-size: 22px;
        }

        .life-description {
          max-width: 800px;
          color: #888;
          font-size: 17px;
          margin-top: 25px;
        }

        .life-section {
          margin-top: 75px;
        }

        .life-section h2 {
          font-size: 38px;
          margin-bottom: 30px;
        }

        .life-section h2 span {
          color: #8b5cf6;
        }

        .life-features {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 18px;
        }

        .life-feature {
          padding: 25px;
          border: 1px solid #292929;
          border-radius: 12px;
          background: #101010;
        }

        .life-feature p {
          color: #777;
          margin-top: 8px;
          font-size: 14px;
        }

        .life-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .life-tech span {
          padding: 9px 14px;
          border: 1px solid #333;
          border-radius: 7px;
          color: #aaa;
          font-size: 13px;
        }

        .life-gallery {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 25px;
        }

        .life-gallery-item {
          overflow: hidden;
          border: 1px solid #292929;
          border-radius: 14px;
          background: #111;
        }

        .life-gallery-item img {
          display: block;
          width: 100%;
        }

        .life-gallery-item p {
          padding: 10px 15px;
          color: #666;
          font-size: 12px;
        }

        @media(max-width:800px) {
          .life-features,
          .life-gallery {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="life-page">
        <nav className="life-nav">
          <a href="#/">← Back to Portfolio</a>
          <strong>RAHUL S</strong>
        </nav>

        <main className="life-main">
          <p className="life-label">PROJECT 03</p>

          <h1>
            Life Decision <span>Assistant</span>
          </h1>

          <p className="life-subtitle">
            AI-Powered Decision Support Application
          </p>

          <p className="life-description">
            A Python and Flask based AI web application designed
            to help users analyze personal decisions by presenting
            structured perspectives and AI-generated guidance.
            The application integrates AI APIs behind a Flask
            backend with Firebase authentication.
          </p>

          <section className="life-section">
            <h2>
              Key <span>features</span>
            </h2>

            <div className="life-features">
              <div className="life-feature">
                <h3>Decision Analysis</h3>
                <p>
                  Users can provide a decision and receive
                  structured AI-assisted analysis.
                </p>
              </div>

              <div className="life-feature">
                <h3>AI Integration</h3>
                <p>
                  Integrated AI services to generate useful
                  decision-oriented responses.
                </p>
              </div>

              <div className="life-feature">
                <h3>Authentication</h3>
                <p>
                  Firebase authentication provides secure user
                  sign-in functionality.
                </p>
              </div>

              <div className="life-feature">
                <h3>Flask Backend</h3>
                <p>
                  Python Flask handles application logic and
                  communication with external AI APIs.
                </p>
              </div>

              <div className="life-feature">
                <h3>Multiple AI APIs</h3>
                <p>
                  Designed around Groq, OpenRouter and Gemini
                  API integrations.
                </p>
              </div>

              <div className="life-feature">
                <h3>Responsive Interface</h3>
                <p>
                  Designed as a practical web interface for
                  desktop and mobile users.
                </p>
              </div>
            </div>
          </section>

          <section className="life-section">
            <h2>
              Technology <span>stack</span>
            </h2>

            <div className="life-tech">
              {[
                "Python",
                "Flask",
                "Firebase",
                "Groq API",
                "OpenRouter API",
                "Gemini API",
                "HTML",
                "CSS",
                "JavaScript",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </section>

          <section className="life-section">
            <h2>
              Project <span>screenshots</span>
            </h2>

            <div className="life-gallery">
              {images.map((src, index) => (
                <div className="life-gallery-item" key={src}>
                  <img
                    src={src}
                    alt={`Life Decision Assistant screenshot ${
                      index + 1
                    }`}
                  />

                  <p>
                    Screenshot {index + 1}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
