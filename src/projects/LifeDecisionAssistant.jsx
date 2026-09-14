import React from "react";
import ProjectDetailLayout from "./ProjectDetailLayout";
import lifeDecisionImage from "../assets/projects/lifedecisionassistant/24.png.png";

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
      image={lifeDecisionImage}
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
