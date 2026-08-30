import React from "react";

const imageFiles = import.meta.glob(
  "../assets/projects/aiexamcompanion/*.png.png",
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

export default function AIExamCompanion() {
  return (
    <>
      <style>{`
        .exam-page {
          min-height: 100vh;
          background: #080808;
          color: white;
          padding-bottom: 100px;
        }

        .exam-nav {
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

        .exam-nav a {
          color: #aaa;
          text-decoration: none;
        }

        .exam-nav a:hover {
          color: #8b5cf6;
        }

        .exam-main {
          max-width: 1200px;
          margin: auto;
          padding: 100px 25px;
        }

        .exam-stack-pill {
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

        .exam-label {
          color: #8b5cf6;
          letter-spacing: 3px;
          font-size: 12px;
          font-weight: 800;
        }

        .exam-main h1 {
          font-size: clamp(50px,8vw,95px);
          line-height: .95;
          letter-spacing: -5px;
          margin: 20px 0;
        }

        .exam-main h1 span {
          color: #8b5cf6;
        }

        .exam-subtitle {
          color: #aaa;
          font-size: 22px;
        }

        .exam-description {
          max-width: 800px;
          color: #888;
          font-size: 17px;
          margin-top: 25px;
        }

        .exam-section {
          margin-top: 80px;
        }

        .exam-section h2 {
          font-size: 38px;
          margin-bottom: 30px;
        }

        .exam-section h2 span {
          color: #8b5cf6;
        }

        .exam-features {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 18px;
        }

        .exam-feature {
          border: 1px solid #292929;
          background: #101010;
          border-radius: 12px;
          padding: 25px;
        }

        .exam-feature p {
          color: #777;
          font-size: 14px;
          margin-top: 8px;
        }

        .exam-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .exam-tech span {
          padding: 9px 14px;
          border: 1px solid #333;
          color: #aaa;
          border-radius: 7px;
          font-size: 13px;
        }

        .exam-gallery {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 25px;
        }

        .exam-image {
          border: 1px solid #292929;
          border-radius: 14px;
          overflow: hidden;
          background: #111;
        }

        .exam-image img {
          width: 100%;
          display: block;
        }

        .exam-image p {
          color: #666;
          padding: 10px 15px;
          font-size: 12px;
        }

        .exam-empty-gallery {
          color: #666;
          border: 1px dashed #292929;
          border-radius: 14px;
          padding: 40px;
          text-align: center;
        }

        @media(max-width:800px) {
          .exam-features,
          .exam-gallery {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="exam-page">
        <nav className="exam-nav">
          <a href="#/">← Back to Portfolio</a>
          <strong>RAHUL S</strong>
        </nav>

        <main className="exam-main">
          <p className="exam-label">PROJECT 04</p>

          <div className="exam-stack-pill">Python / Flask</div>

          <h1>
            AI Exam <span>Companion</span>
          </h1>

          <p className="exam-subtitle">
            AI-Powered Exam Preparation Application
          </p>

          <p className="exam-description">
            AI Exam Companion is a Python and Flask based web application
            created to support exam preparation using AI-generated practice
            questions. MongoDB stores question sets and session history
            behind a lightweight Flask API.
          </p>

          <section className="exam-section">
            <h2>
              Key <span>features</span>
            </h2>

            <div className="exam-features">
              <div className="exam-feature">
                <h3>AI Practice Questions</h3>
                <p>Generates practice questions using the Groq API to support targeted exam preparation.</p>
              </div>

              <div className="exam-feature">
                <h3>Interactive Learning</h3>
                <p>Provides an interactive interface for students to practice and review questions.</p>
              </div>

              <div className="exam-feature">
                <h3>MongoDB Storage</h3>
                <p>Stores generated question sets and session data in a MongoDB collection.</p>
              </div>

              <div className="exam-feature">
                <h3>Flask Backend</h3>
                <p>Flask manages backend routes and communication with the Groq API.</p>
              </div>

              <div className="exam-feature">
                <h3>Groq API Integration</h3>
                <p>Uses Groq for fast AI-powered question generation.</p>
              </div>

              <div className="exam-feature">
                <h3>Responsive UI</h3>
                <p>Built with HTML, CSS, and JavaScript for a clean, responsive learning experience.</p>
              </div>
            </div>
          </section>

          <section className="exam-section">
            <h2>
              Technology <span>stack</span>
            </h2>

            <div className="exam-tech">
              {[
                "Python",
                "Flask",
                "MongoDB",
                "Groq API",
                "HTML",
                "CSS",
                "JavaScript",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </section>

          <section className="exam-section">
            <h2>
              Project <span>screenshots</span>
            </h2>

            {images.length > 0 ? (
              <div className="exam-gallery">
                {images.map((src, index) => (
                  <div className="exam-image" key={src}>
                    <img
                      src={src}
                      alt={`AI Exam Companion screenshot ${index + 1}`}
                    />
                    <p>Screenshot {index + 1}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="exam-empty-gallery">
                Screenshots coming soon — check back shortly.
              </div>
            )}
          </section>
        </main>
      </div>
    </>
  );
}
