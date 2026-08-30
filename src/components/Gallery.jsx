import React, { useEffect, useRef, useState } from "react";

/**
 * Gallery — large focus image + scrollable thumbnail filmstrip.
 * Click a thumbnail, use the arrow buttons, or press ←/→.
 */
export default function Gallery({ images = [], projectName = "Project" }) {
  const [index, setIndex] = useState(0);
  const stripRef = useRef(null);
  const total = images.length;

  const goTo = (i) => {
    if (i < 0 || i >= total) return;
    setIndex(i);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") goTo(index + 1);
      if (e.key === "ArrowLeft") goTo(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, total]);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;
    const activeThumb = strip.children[index];
    if (activeThumb) {
      activeThumb.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, [index]);

  if (total === 0) {
    return (
      <div className="gallery">
        <div className="gallery-empty">
          <p>Screenshots coming soon</p>
          <span>— check back shortly —</span>
        </div>
      </div>
    );
  }

  return (
    <div className="gallery">
      <div className="gallery-stage">
        <img src={images[index]} alt={`${projectName} screenshot ${index + 1}`} />

        <button
          type="button"
          className="gallery-arrow prev"
          aria-label="Previous screenshot"
          onClick={() => goTo(index - 1)}
          disabled={index === 0}
        >
          ‹
        </button>

        <button
          type="button"
          className="gallery-arrow next"
          aria-label="Next screenshot"
          onClick={() => goTo(index + 1)}
          disabled={index === total - 1}
        >
          ›
        </button>

        <div className="gallery-caption">
          Screenshot {index + 1} of {total}
        </div>
      </div>

      <div className="gallery-filmstrip" ref={stripRef}>
        {images.map((src, i) => (
          <button
            type="button"
            key={src}
            className={`gallery-thumb ${i === index ? "active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to screenshot ${i + 1}`}
          >
            <img src={src} alt="" />
          </button>
        ))}
      </div>

      <div className="gallery-footer">
        <span>{projectName}</span>
        <span>
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
