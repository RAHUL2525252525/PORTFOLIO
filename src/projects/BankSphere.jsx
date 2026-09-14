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
        "MySQL",
        "REST APIs",
        "JWT Authentication",
        "Maven",
        "Docker",
        "Postman",
        "JUnit",
      ]}
      images={BANKSPHERE_IMAGES}
      overview={[
        "BankSphere is an online banking system built with Java and Spring Boot, covering core banking flows like account creation, balance management and transaction history.",
        "Spring Security and JWT handle authentication and access control, with a React.js frontend for customers and MySQL storing account and transaction data.",
      ]}
      features={[
        "Secure sign-in and session handling with Spring Security and JWT",
        "Account and transaction management backed by MySQL",
        "REST APIs documented and tested with Postman, with JUnit test coverage",
        "React.js frontend for account holders",
        "Maven-based build with Docker packaging for consistent deployment",
      ]}
      architecture="A Java / Spring Boot backend exposes REST APIs secured with Spring Security and JWT, backed by MySQL for persistence, built with Maven and containerized with Docker; a React.js frontend consumes the APIs."
    />
  );
}
