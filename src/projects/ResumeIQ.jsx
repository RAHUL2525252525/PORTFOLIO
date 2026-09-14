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
      tagline="An AI-powered resume analyzer that compares a resume against a target job description and returns an instant match score with actionable feedback."
      tech={[
        "Python",
        "Django",
        "Django REST Framework",
        "React.js",
        "PostgreSQL",
        "JWT Authentication",
        "Gemini API",
        "Docker",
        "Postman",
      ]}
      images={RESUMEIQ_IMAGES}
      liveLinks={[
        {
          label: "Live Demo",
          url: "https://resume-iq-blue-mu.vercel.app/",
        },
        {
          label: "API Backend",
          url: "https://resumeiq-backend-98ga.onrender.com",
        },
      ]}
      overview={[
        "ResumeIQ helps job seekers tailor their resume to a specific role. Users upload a resume and paste in a job description, and the app uses the Gemini API to score how well the resume matches the role and surface concrete gaps to fix.",
        "The backend is built with Django and Django REST Framework, exposing authenticated REST endpoints that parse the resume, call the Gemini API for analysis, and persist results in PostgreSQL. The frontend is a separate React.js single-page app that handles uploads, displays the match score, and walks the user through the suggested improvements.",
      ]}
      features={[
        "AI-driven resume vs job description matching using the Gemini API",
        "Match score plus a breakdown of missing skills, keywords, and experience gaps",
        "JWT-authenticated accounts so users can revisit past analyses",
        "Django REST Framework API tested and documented with Postman",
        "Dockerized backend deployed independently from the React frontend",
      ]}
      architecture="A Django + Django REST Framework backend exposes JWT-authenticated REST endpoints that parse uploaded resumes, call the Gemini API for scoring and feedback, and store results in PostgreSQL. It's deployed separately from the React.js frontend, which consumes the API to drive the upload, scoring, and feedback screens."
    />
  );
}
