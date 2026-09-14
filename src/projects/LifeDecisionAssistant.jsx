import React from "react";
import ProjectDetailLayout from "./ProjectDetailLayout";
import { sortGlobImages } from "./galleryUtils";

// Screenshots live in src/assets/projects/lifedecisionassistant/24.png.png .. 31.png.png
// (the "0.png" placeholder file in that folder is ignored automatically).
const lifeDecisionRaw = import.meta.glob(
  "../assets/projects/lifedecisionassistant/*.png.png",
  { eager: true, import: "default" }
);
const LIFEDECISION_IMAGES = sortGlobImages(lifeDecisionRaw);

export default function LifeDecisionAssistant() {
  return (
    <ProjectDetailLayout
      category="AI-POWERED APPLICATION"
      title="Life Decision Assistant"
      tagline="An AI assistant that helps break everyday decisions down into structured pros, cons and recommendations."
      tech={[
        "Python",
        "FastAPI",
        "React.js",
        "Gemini API",
        "PostgreSQL",
        "JWT Authentication",
        "Docker",
      ]}
      images={LIFEDECISION_IMAGES}
      overview={[
        "Life Decision Assistant takes a decision a user is weighing — a job offer, a purchase, a life choice — and uses the Gemini API to generate a structured breakdown of considerations, trade-offs and a recommendation.",
        "A FastAPI backend manages user sessions and stores past decisions in PostgreSQL so users can revisit how they reasoned through earlier choices.",
      ]}
      features={[
        "Structured AI-generated pros/cons breakdowns via the Gemini API",
        "JWT-authenticated accounts with decision history stored in PostgreSQL",
        "React.js interface for a guided, conversational decision-making flow",
        "Dockerized backend for consistent deployment",
      ]}
      architecture="A FastAPI service handles auth and persistence against PostgreSQL, calls the Gemini API for reasoning, and serves a React.js frontend that walks the user through each decision step by step."
    />
  );
}
