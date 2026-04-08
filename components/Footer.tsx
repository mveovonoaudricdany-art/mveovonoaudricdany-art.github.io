"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Footer() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = !mounted || currentTheme === "dark";

  const textColor = isDark ? "white" : "#0f172a";
  const subtextColor = isDark ? "#94a3b8" : "#64748b";
  const hoverColor = isDark ? "#3b82f6" : "#2563eb";
  const borderTop = isDark ? "1px solid rgba(255,255,255,0.05)" : "1px solid rgba(0,0,0,0.05)";

  return (
    <footer
      style={{
        padding: "40px 20px",
        background: "var(--bg)", 
        borderTop: borderTop,
        color: textColor,
        textAlign: "center",
      }}
    >
      {/* Nom */}
      <h3 style={{ fontSize: "1.5rem", marginBottom: "10px", fontWeight: "700" }}>
        Audric-Dany MVE-OVONO
      </h3>

      <p style={{ color: subtextColor, marginBottom: "20px" }}>
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
              color: hoverColor,
            }}
            style={{
              fontSize: "1.5rem",
              color: textColor,
              transition: "color 0.3s ease",
            }}
          >
            {item.icon}
          </motion.a>
        ))}
      </div>

      {/* Copyright */}
      <p style={{ marginTop: "20px", fontSize: "0.9rem", color: subtextColor }}>
        © 2026 - Tous droits réservés
      </p>
    </footer>
  );
}
