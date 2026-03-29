"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "40px 20px",
        background: "linear-gradient(135deg, #0f172a, #1e3a8a, #2563eb)",
        color: "white",
        textAlign: "center",
      }}
    >
      {/* Nom */}
      <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
        Audric-Dany MVE-OVONO
      </h3>

      <p style={{ color: "#cbd5f5", marginBottom: "20px" }}>
        Développeur Full Stack Web & Mobile 🚀
      </p>

      {/* Réseaux */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {[
          { icon: <FaGithub />, link: "https://github.com" },
          { icon: <FaLinkedin />, link: "https://linkedin.com" },
          { icon: <FaEnvelope />, link: "mailto:mveovonoaudricdany@gmail.com" },
        ].map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            whileHover={{
              scale: 1.2,
              color: "#60a5fa",
            }}
            style={{
              fontSize: "1.5rem",
              color: "white",
            }}
          >
            {item.icon}
          </motion.a>
        ))}
      </div>

      {/* Copyright */}
      <p style={{ marginTop: "20px", fontSize: "0.9rem", color: "#94a3b8" }}>
        © 2026 - Tous droits réservés
      </p>
    </footer>
  );
}
