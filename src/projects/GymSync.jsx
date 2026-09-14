import React from "react";
import ProjectDetailLayout from "./ProjectDetailLayout";

// No screenshot yet — drop one at ../assets/projects/gymsync/1.png
// and import it here, then pass it as `image` below.

export default function GymSync() {
  return (
    <ProjectDetailLayout
      category="PYTHON FULL-STACK APPLICATION"
      title="GymSync"
      tagline="A gym tracking app with a FastAPI backend and a React (Vite) frontend, built and deployed end-to-end on Render."
      tech={[
        "Python",
        "FastAPI",
        "HTML",
        "CSS",
        "JavaScript",
        "React (Vite)",
        "MySQL",
        "Maven",
        "Docker",
        "JWT Authentication",
        "Postman",
        "JUnit",
      ]}
      image={null}
      liveLinks={[{ label: "Live on Render", url: "#" }]}
      overview={[
        "GymSync is a gym tracker that lets users log workouts, track progress over time and stay consistent with their training, built end-to-end — frontend and backend.",
        "The backend is built with Python and FastAPI, backed by MySQL, with JWT-based authentication; the frontend is a React app scaffolded with Vite. Both are deployed on Render.",
      ]}
      features={[
        "Workout logging and progress tracking backed by MySQL",
        "JWT-secured user accounts",
        "React (Vite) frontend for a fast, lightweight experience",
        "REST endpoints tested with Postman and JUnit",
        "Dockerized and deployed end-to-end on Render",
      ]}
      architecture="A FastAPI backend exposes JWT-secured REST APIs backed by MySQL, containerized with Docker; the React (Vite) frontend and the backend are both deployed on Render."
    />
  );
}
