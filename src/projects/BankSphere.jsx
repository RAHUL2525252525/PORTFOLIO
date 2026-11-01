import React from "react";
import ProjectDetailLayout from "./ProjectDetailLayout";
import { sortGlobImages } from "./galleryUtils";

// Screenshots live in src/assets/projects/banksphere/14.png.png .. 23.png.png
const banksphereRaw = import.meta.glob(
  "../assets/projects/banksphere/*.png.png",
  { eager: true, import: "default" }
);
const BANKSPHERE_IMAGES = sortGlobImages(banksphereRaw);

export default function BankSphere() {
  return (
    <ProjectDetailLayout
      category="JAVA FULL-STACK APPLICATION"
      title="BankSphere"
      tagline="An online banking system built in Java with secure authentication, account management and transaction handling."
      tech={[
        "Java",
        "Spring Boot",
        "Spring Security",
        "React.js",
        "PostgreSQL",
        "REST APIs",
        "JWT Authentication",
        "RBAC",
        "Maven",
        "Docker",
        "Postman",
        "JUnit",
      ]}
      images={BANKSPHERE_IMAGES}
      liveLinks={[
        {
          label: "Live Demo",
          url: "https://online-banking-system-17od.onrender.com",
        },
      ]}
      overview={[
        "BankSphere is an online banking system built with Java and Spring Boot, covering core banking flows like account creation, balance management and transaction history.",
        "Spring Security and JWT handle authentication and role-based access (user and admin), with PostgreSQL storing account and transaction data. The React.js frontend is built into the same Docker image as the backend, so one Render service serves both the website and the API.",
      ]}
      features={[
        "Secure sign-in with Spring Security and JWT",
        "Role-based access for customers and administrators",
        "Account and transaction management backed by PostgreSQL",
        "REST APIs documented and tested with Postman, with JUnit test coverage",
        "React.js frontend for account holders",
        "Single Docker deployment on Render serving the UI and the API",
      ]}
      architecture="A Java / Spring Boot backend exposes REST APIs secured with Spring Security and JWT, backed by PostgreSQL (hosted on Neon) and built with Maven. A multi-stage Docker build compiles the React.js frontend and packages it with the backend, so a single Render service serves both the UI and the API."
    />
  );
}
