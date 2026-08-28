import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import ShopSphere from "./projects/ShopSphere";
import BankSphere from "./projects/BankSphere";
import LifeDecisionAssistant from "./projects/LifeDecisionAssistant";
import AIExamCompanion from "./projects/AIExamCompanion";
import DigitalAnalyticsDashboard from "./projects/DigitalAnalyticsDashboard";

function Home() {
  const navigate = useNavigate();

  const projects = [
    {
      title: "ShopSphere",
      description: "Full Stack E-Commerce Web Application",
      route: "/projects/shopsphere",
    },
    {
      title: "Online Banking System",
      description: "Full Stack Banking Application",
      route: "/projects/banksphere",
    },
    {
      title: "Life Decision Assistant",
      description: "AI-powered decision support application",
      route: "/projects/lifedecisionassistant",
    },
    {
      title: "AI Exam Companion",
      description: "AI-powered examination and learning assistant",
      route: "/projects/aiexamcompanion",
    },
    {
      title: "Digital Analytics Dashboard",
      description: "Interactive analytics and visualization dashboard",
      route: "/projects/digitalanalyticsdashboard",
    },
  ];

  return (
    <div>
      {/* KEEP YOUR EXISTING PROFILE, SKILLS, EXPERIENCE,
          EDUCATION, CERTIFICATIONS, ETC. HERE */}

      <section id="projects">
        <h2>Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.route}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <button
                onClick={() => navigate(project.route)}
                className="view-project-btn"
              >
                View Project
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* MAIN PORTFOLIO */}
        <Route path="/" element={<Home />} />

        {/* INDIVIDUAL PROJECT PAGES */}
        <Route
          path="/projects/shopsphere"
          element={<ShopSphere />}
        />

        <Route
          path="/projects/banksphere"
          element={<BankSphere />}
        />

        <Route
          path="/projects/lifedecisionassistant"
          element={<LifeDecisionAssistant />}
        />

        <Route
          path="/projects/aiexamcompanion"
          element={<AIExamCompanion />}
        />

        <Route
          path="/projects/digitalanalyticsdashboard"
          element={<DigitalAnalyticsDashboard />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
