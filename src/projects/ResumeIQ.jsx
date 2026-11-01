import React from "react";
import ProjectDetailLayout from "./ProjectDetailLayout";
import { sortGlobImages } from "./galleryUtils";

// Screenshots live in src/assets/projects/ResumeIQ/52.png.png .. 56.png.png
// (the "0" placeholder file in that folder is ignored automatically,
// since it has no .png.png extension for the glob to match).
const resumeIQRaw = import.meta.glob(
  "../assets/projects/ResumeIQ/*.png.png",
  { eager: true, import: "default" }
);
const RESUMEIQ_IMAGES = sortGlobImages(resumeIQRaw);

export default function ResumeIQ() {
  return (
    <ProjectDetailLayout
      category="AI-POWERED APPLICATION"
      title="ResumeIQ"
      tagline="An AI resume analyzer and matcher that parses a resume and scores it against a target job description."
      tech={[
        "Python",
        "Django",
        "Django REST Framework",
        "React.js",
        "MySQL",
        "JWT Authentication",
        "Gemini API",
        "Docker",
        "Postman",
      ]}
      images={RESUMEIQ_IMAGES}
      liveLinks={[
        {
          label: "Live Demo",
          url: "https://resumeiq-wxje.onrender.com/app",
        },
      ]}
      overview={[
        "ResumeIQ helps job seekers tailor their resume to a specific role. Users upload a resume and paste in a job description, and the app parses the resume and scores how well it matches the role.",
        "The backend is built with Django and Django REST Framework, exposing JWT-secured REST endpoints that parse the resume, run the analysis with the Gemini API, and persist results in MySQL. The React.js frontend handles uploads and displays the match score and feedback.",
      ]}
      features={[
        "Resume parsing and scoring against a job description",
        "AI-driven matching and feedback using the Gemini API",
        "JWT-authenticated accounts so users can revisit past analyses",
        "Django REST Framework API tested with Postman",
        "Containerised with Docker and deployed on Render",
      ]}
      architecture="A Django + Django REST Framework backend exposes JWT-secured REST endpoints that parse uploaded resumes, score them against job descriptions using the Gemini API, and store results in MySQL. A React.js frontend consumes the API, and the app is containerised with Docker and deployed on Render."
    />
  );
}
