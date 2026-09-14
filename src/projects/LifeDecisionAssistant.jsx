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
        "Flask",
        "HTML",
        "CSS",
        "JavaScript",
        "Firebase",
        "Firebase Authentication",
        "Gemini API",
        "PostgreSQL",
        "Docker",
      ]}
      images={LIFEDECISION_IMAGES}
      liveLinks={[
        {
          label: "Live Demo",
          url: "https://life-decision-assistant-63pu.onrender.com",
        },
      ]}
      overview={[
        "Life Decision Assistant takes a decision a user is weighing — a job offer, a purchase, a life choice — and uses the Gemini API to generate a structured breakdown of considerations, trade-offs and a recommendation.",
        "A Python Flask backend manages user sessions and stores past decisions in PostgreSQL, with Firebase handling sign-in, so users can revisit how they reasoned through earlier choices.",
      ]}
      features={[
        "Structured AI-generated pros/cons breakdowns via the Gemini API",
        "Firebase-authenticated accounts with decision history stored in PostgreSQL",
        "Lightweight HTML/CSS/JavaScript interface for a guided, conversational decision-making flow",
        "Dockerized backend for consistent deployment",
      ]}
      architecture="A Python Flask service handles auth (via Firebase) and persistence against PostgreSQL, calls the Gemini API for reasoning, and serves a plain HTML/CSS/JavaScript frontend that walks the user through each decision step by step. It shares the same Gemini API setup as AI Exam Companion."
    />
  );
}
