"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        minHeight: "100vh",
        padding: "80px 20px",
        background: "linear-gradient(135deg, #0f172a, #1e3a8a, #2563eb)",
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
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(15px)",
          borderRadius: "20px",
          padding: "40px",
          boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
          border: "1px solid rgba(255,255,255,0.2)",
          color: "white",
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
            color: "#cbd5f5",
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
          <input type="text" placeholder="Votre nom" style={inputStyle} />

          {/* Email */}
          <input type="email" placeholder="Votre email" style={inputStyle} />

          {/* Message */}
          <textarea placeholder="Votre message" rows={5} style={inputStyle} />

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
  );
}

// Style input premium
const inputStyle: React.CSSProperties = {
  padding: "14px",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.2)",
  background: "rgba(255,255,255,0.05)",
  color: "white",
  fontSize: "1rem",
  outline: "none",
  backdropFilter: "blur(8px)",
};
