export default function Contact() {
  return (
    <section id="contact" style={sectionStyle}>
      <h2 style={titleStyle}>Contact</h2>
      <form style={formStyle}>
        <input type="text" placeholder="Votre nom" style={inputStyle} />
        <input type="email" placeholder="Votre email" style={inputStyle} />
        <textarea placeholder="Votre message" style={textareaStyle} rows={5} />
        <button type="submit" style={buttonStyle}>
          Envoyer
        </button>
      </form>

      {/* Hover effect pour le bouton */}
      <style>
        {`
          button:hover {
            background-color: #333;
            cursor: pointer;
          }
        `}
      </style>
    </section>
  );
}

// Styles en JS
const sectionStyle: React.CSSProperties = {
  padding: "40px",
  backgroundColor: "#fff",
  fontFamily: "sans-serif",
};

const titleStyle: React.CSSProperties = {
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "24px",
};

const formStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  maxWidth: "500px",
  margin: "0 auto",
};

const inputStyle: React.CSSProperties = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "1rem",
};

const textareaStyle: React.CSSProperties = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "1rem",
  resize: "vertical",
};

const buttonStyle: React.CSSProperties = {
  padding: "12px",
  borderRadius: "8px",
  backgroundColor: "#000",
  color: "#fff",
  border: "none",
  fontSize: "1rem",
  transition: "background-color 0.3s",
};
