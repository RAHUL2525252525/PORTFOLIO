import React from "react";
import ProjectDetailLayout from "./ProjectDetailLayout";
import { sortGlobImages } from "./galleryUtils";

const resumeIQRaw = import.meta.glob(
  "../assets/projects/ResumeIQ/*.png.png",
  { eager: true, import: "default" }
);

const RESUMEIQ_IMAGES = sortGlobImages(resumeIQRaw);

export default function ResumeIQ() {
  return (
    <ProjectDetailLayout
      category="AI-POWERED RESUME PLATFORM"
      title="ResumeIQ"
      tagline="An AI-powered resume analysis platform that helps users evaluate, improve, and optimize their resumes for modern hiring systems."
      tech={[
        "Python",
        "Django",
        "React",
        "Vite",
        "REST API",
        "AI",
        "JWT",
        "MySQL",
        "Docker",
        "Postman",
      ]}
      images={RESUMEIQ_IMAGES}
      liveLinks={[
        {
          label: "Live Demo",
          url: "YOUR_RESUMEIQ_LIVE_URL",
        },
      ]}
      overview={[
        "ResumeIQ is an AI-powered resume analysis platform designed to help users understand how their resume performs and identify areas for improvement.",
        "The application combines a modern React frontend with a Python backend to provide resume analysis, ATS-focused scoring, keyword matching, and personalized improvement suggestions.",
      ]}
      features={[
        "AI-powered resume analysis and ATS scoring",
        "Keyword matching against job requirements",
        "Resume improvement suggestions",
        "User authentication and protected application pages",
        "Resume analysis history",
        "REST API based frontend-backend communication",
        "Dockerized backend for consistent deployment",
      ]}
      architecture="The React frontend communicates with a Python backend through REST APIs. Authentication protects user-specific application features, while the backend handles resume processing, analysis logic, and persistence. The application is designed as a full-stack AI-assisted platform with a separate frontend and backend architecture."
    />
  );
}
