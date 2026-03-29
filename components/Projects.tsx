"use client";

import { motion } from "framer-motion";

const projects = [
  { title: "App Code Civil", desc: "Expo + SQLite + structure hiérarchique" },
  { title: "Portfolio Premium", desc: "Next.js + animations dynamiques" },
];

const styles = {
  section: {
    padding: "40px 24px",
    backgroundColor: "#111111",
    color: "white",
    minHeight: "100vh",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: 800,
    marginBottom: "32px",
    textAlign: "center" as "center",
    textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
  },
  grid: {
    display: "grid",
    gap: "24px",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  },
  card: {
    borderRadius: "24px",
    border: "2px solid #facc15",
    padding: "24px",
    backgroundColor: "#1a1a1a",
    boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  cardTitle: {
    fontSize: "1.5rem",
    fontWeight: 700,
    marginBottom: "12px",
  },
  cardDesc: {
    fontSize: "1rem",
    color: "#ccc",
  },
};

export default function Projects() {
  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.title}>Mes Projets</h2>

      <div style={styles.grid}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
            style={styles.card}
          >
            <h3 style={styles.cardTitle}>{project.title}</h3>
            <p style={styles.cardDesc}>{project.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
