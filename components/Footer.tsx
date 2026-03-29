import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <p style={textStyle}>© 2026 - Mon Portfolio</p>
      <div style={linksContainerStyle}>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a href="mailto:mveovonoaudricdany@email.com" style={linkStyle}>
          <FaEnvelope /> Email
        </a>
      </div>

      {/* Hover effect avec style interne */}
      <style>
        {`
          footer a:hover {
            color: #bbb;
          }
        `}
      </style>
    </footer>
  );
}

// Styles en JS
const footerStyle: React.CSSProperties = {
  padding: "24px",
  backgroundColor: "#000",
  color: "#fff",
  textAlign: "center",
  fontFamily: "sans-serif",
};

const textStyle: React.CSSProperties = {
  margin: 0,
  fontSize: "0.95rem",
};

const linksContainerStyle: React.CSSProperties = {
  marginTop: "12px",
  display: "flex",
  justifyContent: "center",
  gap: "24px",
  fontSize: "0.9rem",
};

const linkStyle: React.CSSProperties = {
  color: "#fff",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  transition: "color 0.3s",
};
