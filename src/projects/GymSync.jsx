import React from "react";
import ProjectDetailLayout from "./ProjectDetailLayout";
import { sortGlobImages } from "./galleryUtils";

// Screenshots live in src/assets/projects/gymsync/43.png.png .. 51.png.png
// (the stray "o.o" file in that folder is ignored automatically).
const gymSyncRaw = import.meta.glob(
  "../assets/projects/gymsync/*.png.png",
  { eager: true, import: "default" }
);
const GYMSYNC_IMAGES = sortGlobImages(gymSyncRaw);

export default function GymSync() {
  return (
    <ProjectDetailLayout
      category="PYTHON FULL-STACK APPLICATION"
      title="GymSync"
      tagline="A containerised gym tracker with an asynchronous FastAPI backend, PostgreSQL and a React.js frontend, deployed through a GitHub Actions CI/CD pipeline."
      tech={[
        "Python",
        "FastAPI",
        "Async Programming",
        "JavaScript",
        "React.js (Vite)",
        "PostgreSQL",
        "Docker",
        "JWT Authentication",
        "GitHub Actions (CI/CD)",
        "Postman",
        "Pytest",
      ]}
      images={GYMSYNC_IMAGES}
      liveLinks={[
        { label: "Live Demo", url: "https://gymsync-app.onrender.com" },
      ]}
      overview={[
        "GymSync is a gym tracker that lets users log workouts, track progress over time and stay consistent with their training, built end-to-end — frontend and backend.",
        "The backend is an asynchronous FastAPI service backed by PostgreSQL with JWT-based authentication, containerised with Docker. The frontend is a React.js app scaffolded with Vite. Deployment to Vercel and Render is automated with a GitHub Actions CI/CD pipeline.",
      ]}
      features={[
        "Workout logging and progress tracking backed by PostgreSQL",
        "JWT-secured user accounts",
        "Asynchronous FastAPI endpoints for fast responses",
        "React.js (Vite) frontend for a fast, lightweight experience",
        "REST endpoints tested with Postman and Pytest",
        "Dockerized, with automated deployment through GitHub Actions CI/CD",
      ]}
      architecture="An asynchronous FastAPI backend exposes JWT-secured REST APIs backed by PostgreSQL and is containerised with Docker. The React.js (Vite) frontend consumes the API, and a GitHub Actions CI/CD pipeline automates deployment to Vercel and Render."
    />
  );
}
