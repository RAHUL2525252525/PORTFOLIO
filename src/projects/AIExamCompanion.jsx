import React from "react";
import ProjectDetailLayout from "./ProjectDetailLayout";
import { sortGlobImages } from "./galleryUtils";

// Screenshots live in src/assets/projects/aiexamcompanion/32.png.png .. 37.png.png
// (the "0.png" placeholder file in that folder is ignored automatically).
const aiExamRaw = import.meta.glob(
  "../assets/projects/aiexamcompanion/*.png.png",
  { eager: true, import: "default" }
);
const AIEXAM_IMAGES = sortGlobImages(aiExamRaw);

export default function AIExamCompanion() {
  return (
    <ProjectDetailLayout
      category="AI-POWERED APPLICATION"
      title="AI Exam Companion"
      tagline="An AI-assisted study tool that turns any topic into practice questions, instant explanations, and a focused revision plan."
      tech={[
        "Python",
        "Flask",
        "HTML",
        "CSS",
        "JavaScript",
        "Firebase",
        "Firebase Authentication",
        "Groq API",
        "Gemini API",
        "MySQL",
        "Docker",
        "Postman",
      ]}
      images={AIEXAM_IMAGES}
      liveLinks={[
        {
          label: "Live Demo",
          url: "https://ai-exam-companion-ghzc.onrender.com",
        },
      ]}
      overview={[
        "AI Exam Companion helps students prepare for exams faster by generating practice questions, explanations and quick summaries on demand, powered by LLM APIs behind a Python Flask backend.",
        "The frontend is built with plain HTML, CSS and JavaScript for a fast, distraction-free interface, while Firebase handles user sign-in and Flask handles request throttling and session persistence in MySQL.",
      ]}
      features={[
        "AI-generated practice questions and answer explanations using the Groq and Gemini APIs",
        "Firebase-authenticated user accounts to save progress and revisit past sessions",
        "Topic-wise history stored in MySQL for quick review",
        "Dockerized backend for consistent local and deployment environments",
      ]}
      architecture="A Python Flask backend exposes REST endpoints (tested via Postman) that call the Groq/Gemini APIs and persist session data in MySQL, with Firebase handling authentication. The frontend is a lightweight HTML/CSS/JavaScript client consuming those endpoints. It uses the same Gemini API setup as Life Decision Assistant."
    />
  );
}
