"use client";

import { motion } from "framer-motion";
import React, { CSSProperties } from "react";

const styles: Record<string, CSSProperties> = {
  section: {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#fff",
    padding: "0 24px",
    overflow: "hidden",
    backgroundImage:
      "linear-gradient(135deg, rgba(15,23,255,0.8), rgba(0,0,128,0.8)), url('/hero-bg.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  title: {
    fontSize: "4rem",
    fontWeight: 900,
    margin: 0,
    background: "linear-gradient(90deg, #facc15, #f43f5e)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "2px 2px 12px rgba(0,0,0,0.8)",
  },
  subtitle: {
    fontSize: "1.5rem",
    marginTop: "24px",
    maxWidth: "650px",
    color: "#e5e7eb",
    textShadow: "1px 1px 6px rgba(0,0,0,0.6)",
    lineHeight: 1.6,
  },
  buttons: {
    marginTop: "40px",
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  buttonPrimary: {
    padding: "14px 28px",
    borderRadius: "40px",
    background: "linear-gradient(90deg, #facc15, #f43f5e)",
    color: "white",
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
    border: "none",
    transition: "all 0.4s ease",
  },
  buttonSecondary: {
    padding: "14px 28px",
    borderRadius: "40px",
    backgroundColor: "transparent",
    color: "#facc15",
    fontWeight: 700,
    cursor: "pointer",
    border: "2px solid #facc15",
    boxShadow: "0 6px 16px rgba(0,0,0,0.3)",
    transition: "all 0.4s ease",
  },
};

export default function Hero() {
  return (
    <section style={styles.section}>
      <motion.h1
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={styles.title}
      >
        Audric-Dany MB 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        style={styles.subtitle}
      >
        Développeur web & mobile spécialisé en applications modernes, animations
        fluides et solutions juridiques innovantes.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, staggerChildren: 0.3 }}
        style={styles.buttons}
      >
        <motion.a
          whileHover={{
            scale: 1.05,
            boxShadow: "0 12px 24px rgba(255,202,21,0.6)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
          style={styles.buttonPrimary}
          href="#projects"
        >
          Voir mes projets
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.05,
            backgroundColor: "#facc15",
            color: "#111",
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
