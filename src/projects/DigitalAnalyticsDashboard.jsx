import React from "react";
import ProjectDetailLayout from "./ProjectDetailLayout";
import { sortGlobImages } from "./galleryUtils";

// Screenshots live in src/assets/projects/digitalanalyticsdashboard/38.png.png .. 42.png.png
// (the "0.png" placeholder file in that folder is ignored automatically).
const digitalAnalyticsRaw = import.meta.glob(
  "../assets/projects/digitalanalyticsdashboard/*.png.png",
  { eager: true, import: "default" }
);
const DIGITALANALYTICS_IMAGES = sortGlobImages(digitalAnalyticsRaw);

export default function DigitalAnalyticsDashboard() {
  return (
    <ProjectDetailLayout
      category="PYTHON FULL-STACK APPLICATION"
      title="Digital Analytics Dashboard"
      tagline="A Flask dashboard that ingests CSV data and turns it into charts, summaries and AI-generated insights."
      tech={[
        "Python",
        "Flask",
        "HTML",
        "CSS",
        "JavaScript",
        "PostgreSQL",
        "Firebase",
        "Google Authentication",
        "Gemini API",
        "Postman",
        "Docker",
        "JUnit",
        "JWT Authentication",
      ]}
      images={DIGITALANALYTICS_IMAGES}
      liveLinks={[
        {
          label: "Live Demo",
          url: "https://digital-dashboard1.onrender.com",
        },
      ]}
      overview={[
        "Digital Analytics Dashboard is a Flask application backed by PostgreSQL that ingests CSV data and turns it into charts and summary views for quick business insight.",
        "Sign-in is handled through Firebase with Google and JWT-based authentication, and the Gemini API adds AI-generated insights on top of the raw analytics.",
      ]}
      features={[
        "CSV ingestion pipeline that feeds charts and summary views",
        "Google / JWT sign-in via Firebase Authentication",
        "AI-generated insights and summaries using the Gemini API",
        "Endpoints tested with Postman and JUnit, containerized with Docker",
      ]}
      architecture="A Flask backend serves REST endpoints backed by PostgreSQL, with Firebase handling authentication and the Gemini API layered on top for AI-driven insights; the whole app is packaged with Docker."
    />
  );
}
