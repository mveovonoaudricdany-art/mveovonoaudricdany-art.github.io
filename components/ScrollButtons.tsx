"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollButtons() {
  const [visible, setVisible] = useState(false);

  // Afficher les boutons après scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Remonter en haut
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Descendre en bas
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <div style={styles.container}>
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, boxShadow: "0 0 20px #3b82f6" }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        style={styles.button}
      >
        ↑
      </motion.button>

      <motion.button
        onClick={scrollToBottom}
        whileHover={{ scale: 1.1, boxShadow: "0 0 20px #3b82f6" }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ ...styles.button, marginTop: "12px" }}
      >
        ↓
      </motion.button>
    </div>
  );
}

const styles = {
  container: {
    position: "fixed" as "fixed",
    bottom: "30px",
    right: "30px",
    display: "flex",
    flexDirection: "column" as "column",
    zIndex: 1000,
  },
  button: {
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    fontSize: "1.5rem",
    color: "white",
    background: "linear-gradient(135deg, #3b82f6, #2563eb)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
  } as React.CSSProperties,
};
