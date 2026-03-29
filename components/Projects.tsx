"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "📱 App Code Civil Gabonais",
    desc: "Application mobile avec Expo + SQLite + navigation hiérarchique + QCM + notifications",
    tech: ["React Native", "Expo", "SQLite"],
  },
  {
    title: "💼 Portfolio Premium",
    desc: "Portfolio moderne avec Next.js + animations + design 2026",
    tech: ["Next.js", "Framer Motion", "CSS"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        minHeight: "100vh",
        padding: "80px 20px",
        background: "linear-gradient(135deg, #0f172a, #1e3a8a, #2563eb)",
        color: "white",
      }}
    >
      {/* Titre */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: "center",
          fontSize: "2.8rem",
          fontWeight: "800",
          marginBottom: "50px",
        }}
      >
        🚀 Mes Projets
      </motion.h2>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gap: "30px",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 30px #3b82f6",
            }}
            style={{
              padding: "30px",
              borderRadius: "20px",
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(15px)",
              border: "1px solid rgba(255,255,255,0.2)",
              boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                marginBottom: "10px",
              }}
            >
              {project.title}
            </h3>

            <p style={{ color: "#d1d5db", marginBottom: "15px" }}>
              {project.desc}
            </p>

            {/* Tech stack */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  style={{
                    padding: "6px 12px",
                    borderRadius: "999px",
                    background: "rgba(59,130,246,0.2)",
                    fontSize: "0.8rem",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Boutons */}
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                gap: "10px",
              }}
            >
              <button style={btnPrimary}>Voir projet</button>
              <button style={btnSecondary}>GitHub</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const btnPrimary: React.CSSProperties = {
  padding: "10px 16px",
  borderRadius: "8px",
  border: "none",
  background: "linear-gradient(135deg, #3b82f6, #2563eb)",
  color: "white",
  cursor: "pointer",
};

const btnSecondary: React.CSSProperties = {
  padding: "10px 16px",
  borderRadius: "8px",
  border: "1px solid rgba(255,255,255,0.3)",
  background: "transparent",
  color: "white",
  cursor: "pointer",
};
