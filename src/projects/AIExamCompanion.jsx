import React from "react";
import ProjectDetailLayout from "./ProjectDetailLayout";
// Image lives in /public, served at site root on Vite — no import needed.
const AI_EXAM_IMAGE = "/32.png.png";

export default function AIExamCompanion() {
  return (
    <ProjectDetailLayout
      category="AI-POWERED APPLICATION"
      title="AI Exam Companion"
      tagline="An AI-assisted study tool that turns any topic into practice questions, instant explanations, and a focused revision plan."
      tech={[
        "Python",
        "FastAPI",
        "React.js",
        "Groq API",
        "Gemini API",
        "MySQL",
        "JWT Authentication",
        "Docker",
        "Postman",
      ]}
      image={AI_EXAM_IMAGE}
      overview={[
        "AI Exam Companion helps students prepare for exams faster by generating practice questions, explanations and quick summaries on demand, powered by LLM APIs behind a FastAPI backend.",
        "The React.js frontend gives a clean, distraction-free interface for practicing topic by topic, while the backend handles authentication, request throttling and persistence of past sessions in MySQL.",
      ]}
      features={[
        "AI-generated practice questions and answer explanations using the Groq and Gemini APIs",
        "JWT-secured user accounts to save progress and revisit past sessions",
        "Topic-wise history stored in MySQL for quick review",
        "Dockerized backend for consistent local and deployment environments",
      ]}
      architecture="FastAPI exposes REST endpoints (documented with Swagger/OpenAPI and tested via Postman) that call the Groq/Gemini APIs, persist session data in MySQL, and are consumed by a React.js single-page frontend."
    />
  );
}
