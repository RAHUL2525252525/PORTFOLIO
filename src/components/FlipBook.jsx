import React, { useEffect, useRef, useState } from "react";

/**
 * FlipBook — a notebook-style page turner for project screenshots.
 * Click the right edge (or press →) to turn to the next page.
 * Click the left edge (or press ←) to turn back to the previous page.
 */
export default function FlipBook({ images = [], projectName = "Project" }) {
  const [index, setIndex] = useState(0);
  const [flip, setFlip] = useState(null); // { dir, from, to, phase }
  const rafRef = useRef(null);
  const total = images.length;

  const startFlip = (dir) => {
    if (flip) return;
    if (dir === "next" && index >= total - 1) return;
    if (dir === "prev" && index <= 0) return;
    const from = index;
    const to = dir === "next" ? index + 1 : index - 1;
    setFlip({ dir, from, to, phase: "start" });
  };

  useEffect(() => {
    if (flip && flip.phase === "start") {
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = requestAnimationFrame(() => {
          setFlip((f) => (f ? { ...f, phase: "go" } : f));
        });
      });
    }
    return () => cancelAnimationFrame(rafRef.current);
  }, [flip]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") startFlip("next");
      if (e.key === "ArrowLeft") startFlip("prev");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flip, index]);

  const handleTransitionEnd = () => {
    if (!flip) return;
    setIndex(flip.to);
    setFlip(null);
  };

  if (total === 0) {
    return (
      <div className="notebook-empty">
        <div className="notebook-empty-page">
          <p>Screenshots coming soon</p>
          <span>— check back shortly —</span>
        </div>
      </div>
    );
  }

  const baseSrc = flip ? images[flip.to] : images[index];
  const topSrc = flip ? images[flip.from] : images[index];

  let topTransform = "rotateY(0deg)";
  if (flip) {
    if (flip.dir === "next") {
      topTransform = flip.phase === "go" ? "rotateY(-178deg)" : "rotateY(0deg)";
    } else {
      topTransform = flip.phase === "go" ? "rotateY(0deg)" : "rotateY(-178deg)";
    }
  }

  return (
    <div className="notebook-outer">
      <div className="notebook-hint">
        <span><kbd>←</kbd> previous page</span>
        <span>click the page edges to flip</span>
        <span>next page <kbd>→</kbd></span>
      </div>

      <div className="notebook">
        <div className="notebook-book">
          <div className="notebook-page base-page">
            <img src={baseSrc} alt={`${projectName} screenshot`} />
          </div>

          <div
            className="notebook-page top-page"
            style={{ transform: topTransform }}
            onTransitionEnd={handleTransitionEnd}
          >
            <img src={topSrc} alt={`${projectName} screenshot`} />
            <div className="page-back" />
          </div>

          <button
            type="button"
            className="page-zone zone-left"
            aria-label="Previous screenshot"
            onClick={() => startFlip("prev")}
            disabled={index === 0}
          >
            <span>‹</span>
          </button>

          <button
            type="button"
            className="page-zone zone-right"
            aria-label="Next screenshot"
            onClick={() => startFlip("next")}
            disabled={index === total - 1}
          >
            <span>›</span>
          </button>
        </div>

        <div className="notebook-footer">
          <span>
            Pg. {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <div className="page-dots">
            {images.map((_, i) => (
              <span key={i} className={`dot ${i === index ? "active" : ""}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
