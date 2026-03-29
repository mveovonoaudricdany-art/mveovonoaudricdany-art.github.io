"use client";

import { motion } from "framer-motion";
import React from "react";

const styles = {
  section: {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center" as "center",
    color: "white",
    padding: "0 24px",
    overflow: "hidden",
    background: "linear-gradient(135deg, #0f0f0f, #1a1a1a, #111111)",
    backgroundSize: "200% 200%",
    animation: "gradientShift 15s ease infinite",
  },
  title: {
    fontSize: "3rem",
    fontWeight: 800,
    margin: 0,
    textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginTop: "24px",
    maxWidth: "600px",
    color: "#ccc",
    textShadow: "1px 1px 4px rgba(0,0,0,0.6)",
  },
  buttons: {
    marginTop: "32px",
    display: "flex",
    gap: "16px",
    flexWrap: "wrap" as "wrap",
    justifyContent: "center",
  },
  buttonPrimary: {
    padding: "12px 24px",
    borderRadius: "32px",
    backgroundColor: "white",
    color: "black",
    fontWeight: 600,
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    border: "none",
    transition: "all 0.3s ease",
  },
  buttonSecondary: {
    padding: "12px 24px",
    borderRadius: "32px",
    backgroundColor: "transparent",
    color: "white",
    fontWeight: 600,
    cursor: "pointer",
    border: "2px solid white",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    transition: "all 0.3s ease",
  },
};

// Animation du gradient en CSS
const styleSheet = `
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
`;
if (typeof window !== "undefined") {
  const styleTag = document.createElement("style");
  styleTag.innerHTML = styleSheet;
  document.head.appendChild(styleTag);
}

export default function Hero() {
  return (
    <section style={styles.section}>
      <motion.h1
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={styles.title}
      >
        Audric-Dany 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={styles.subtitle}
      >
        Développeur web & mobile spécialisé en applications modernes, animations
        fluides et solutions juridiques innovantes.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, staggerChildren: 0.2 }}
        style={styles.buttons}
      >
        <motion.a
          whileHover={{ scale: 1.1, backgroundColor: "#facc15", color: "#111" }}
          transition={{ type: "spring", stiffness: 300 }}
          style={styles.buttonPrimary}
          href="#projects"
        >
          Voir mes projets
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.1,
            backgroundColor: "#111",
            color: "#facc15",
            borderColor: "#facc15",
          }}
          transition={{ type: "spring", stiffness: 300 }}
          style={styles.buttonSecondary}
          href="/cv2026.pdf"
        >
          Télécharger CV
        </motion.a>
      </motion.div>
    </section>
  );
}
