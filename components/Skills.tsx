"use client";

import { motion } from "framer-motion";

const skills = ["JavaScript", "React", "Next.js", "Expo", "SQLite"];
const stats = [
  { label: "Projets", value: 12 },
  { label: "Clients", value: 5 },
  { label: "Années d'expérience", value: 2 },
];

const styles = {
  section: {
    padding: "40px 24px",
    backgroundColor: "#111111",
    color: "white",
    minHeight: "100vh",
    textAlign: "center" as "center",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: 800,
    marginBottom: "32px",
    textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
  },
  skillsContainer: {
    display: "flex",
    flexWrap: "wrap" as "wrap",
    justifyContent: "center",
    gap: "12px",
    marginBottom: "48px",
  },
  skill: {
    padding: "8px 16px",
    borderRadius: "999px",
    backgroundColor: "#facc15",
    color: "#111",
    fontWeight: 600,
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
  },
  statsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    flexWrap: "wrap" as "wrap",
  },
  statValue: {
    fontSize: "2.5rem",
    fontWeight: 800,
  },
  statLabel: {
    fontSize: "1rem",
    color: "#ccc",
  },
};

export default function Skills() {
  return (
    <section style={styles.section} id="skills">
      <h2 style={styles.title}>Compétences & Stats</h2>

      {/* Compétences */}
      <div style={styles.skillsContainer}>
        {skills.map((skill, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            style={styles.skill}
          >
            {skill}
          </motion.span>
        ))}
      </div>

      {/* Stats */}
      <div style={styles.statsContainer}>
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
          >
            <p style={styles.statValue}>{stat.value}</p>
            <p style={styles.statLabel}>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
