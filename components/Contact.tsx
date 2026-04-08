"use client";

import { motion } from "framer-motion";
import Footer from "./Footer";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Contact() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = !mounted || currentTheme === "dark"; // Par défaut dark si non monté pour éviter le flash

  const formBackground = isDark 
    ? "rgba(255,255,255,0.1)" 
    : "rgba(0,0,0,0.05)";
  const textColor = isDark ? "white" : "#0f172a";
  const subtextColor = isDark ? "#cbd5f5" : "#475569";
  const bgGradient = "var(--bg)"; // Utilise directement la variable globale
  const inputBg = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.02)";
  const inputBorder = isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)";

  const borderForm = isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.1)";
  const blurForm = "blur(20px)";

  const dynamicInputStyle: React.CSSProperties = {
    padding: "14px",
    borderRadius: "10px",
    border: `1px solid ${inputBorder}`,
    background: inputBg,
    color: textColor,
    fontSize: "1rem",
    outline: "none",
    backdropFilter: "blur(8px)",
  };
  return (
    <>
      <section
        id="contact"
        style={{
          minHeight: "auto",
          padding: "80px 20px",
          background: bgGradient,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            width: "100%",
            maxWidth: "600px",
            background: formBackground,
            backdropFilter: blurForm,
            WebkitBackdropFilter: blurForm,
            borderRadius: "24px",
            padding: "50px",
            boxShadow: isDark 
              ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)" 
              : "0 20px 40px -10px rgba(0, 0, 0, 0.1)",
            border: borderForm,
            color: textColor,
          }}
        >
          {/* Titre */}
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "800",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            📩 Contactez-moi
          </h2>

          {/* Infos */}
          <p
            style={{
              textAlign: "center",
              marginBottom: "30px",
              color: subtextColor,
            }}
          >
            Libreville, Gabon • mveovonoaudricdany@gmail.com • +241 76 42 77 66
          </p>

          {/* Formulaire */}
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {/* Nom */}
            <input type="text" placeholder="Votre nom" style={dynamicInputStyle} />

            {/* Email */}
            <input type="email" placeholder="Votre email" style={dynamicInputStyle} />

            {/* Message */}
            <textarea placeholder="Votre message" rows={5} style={dynamicInputStyle} />

            {/* Bouton */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px #3b82f6",
              }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              style={{
                padding: "14px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #3b82f6, #2563eb)",
                color: "#fff",
                border: "none",
                fontWeight: "600",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              🚀 Envoyer le message
            </motion.button>
          </form>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}


