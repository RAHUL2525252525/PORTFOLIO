import React from "react";
import ProjectDetailLayout from "./ProjectDetailLayout";
// Image lives in /public, served at site root on Vite — no import needed.
const SHOPSPHERE_IMAGE = "/1.png.png";

export default function ShopSphere() {
  return (
    <ProjectDetailLayout
      category="JAVA FULL-STACK APPLICATION"
      title="ShopSphere"
      tagline="A full-stack e-commerce platform built in Java with role-based access control and a React.js storefront."
      tech={[
        "Java",
        "Spring Boot",
        "React.js",
        "MySQL",
        "REST APIs",
        "RBAC",
        "JWT Authentication",
        "Maven",
        "Docker",
        "Postman",
        "JUnit",
      ]}
      image={SHOPSPHERE_IMAGE}
      overview={[
        "ShopSphere is a full-stack e-commerce platform built with Java and Spring Boot on the backend and React.js on the frontend, covering product catalog, cart and checkout flows.",
        "Role-based access control (RBAC) and JWT authentication separate customer and admin capabilities, with MySQL storing product, order and user data.",
      ]}
      features={[
        "Product catalog, cart and order flows backed by MySQL",
        "Role-based access control for customers vs. admin users",
        "JWT-secured REST APIs, documented and tested with Postman and JUnit",
        "React.js storefront consuming the Spring Boot backend",
        "Maven build with Docker packaging for deployment",
      ]}
      architecture="A Java / Spring Boot backend exposes RBAC- and JWT-secured REST APIs backed by MySQL, built with Maven and containerized with Docker; a React.js frontend serves the storefront experience."
    />
  );
}
