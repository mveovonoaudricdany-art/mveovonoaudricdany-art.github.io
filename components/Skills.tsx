"use client";

import { motion } from "framer-motion";

const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "React Native",
  "Expo",
  "SQLite",
  "HTML",
  "CSS",
];

const stats = [
  { label: "Projets réalisés", value: 2 },
  { label: "Clients satisfaits", value: 0 },
  { label: "Années d'expérience", value: 2 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        minHeight: "100vh",
        padding: "80px 20px",
        background: "linear-gradient(135deg, #0f172a, #1e3a8a, #2563eb)",
        color: "white",
        textAlign: "center",
      }}
    >
      {/* Titre */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: "2.8rem",
          fontWeight: "800",
          marginBottom: "50px",
          letterSpacing: "1px",
        }}
      >
        🚀 Compétences & Statistiques
      </motion.h2>

      {/* Skills */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "16px",
          marginBottom: "60px",
        }}
      >
        {skills.map((skill, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px #3b82f6",
            }}
            transition={{
              delay: i * 0.1,
              duration: 0.4,
            }}
            style={{
              padding: "10px 20px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.2)",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>

      {/* Stats */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{
              delay: i * 0.2,
              duration: 0.6,
            }}
            style={{
              background: "rgba(255,255,255,0.1)",
              padding: "30px",
              borderRadius: "20px",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.2)",
              minWidth: "160px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
            }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{
                fontSize: "2.5rem",
                fontWeight: "800",
                color: "#60a5fa",
              }}
            >
              {stat.value}+
            </motion.p>

            <p
              style={{
                marginTop: "10px",
                color: "#d1d5db",
                fontSize: "1rem",
              }}
            >
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
