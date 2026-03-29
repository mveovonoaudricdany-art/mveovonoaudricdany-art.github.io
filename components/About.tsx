"use client";

import { useEffect, useState, useRef } from "react";

const styles = {
  container: {
    display: "flex",
    flexDirection: "row" as "row",
    minHeight: "100vh",
    backgroundImage:
      "linear-gradient(135deg, rgba(15,23,255,0.8), rgba(0,0,128,0.8)), url('/hero-bg.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    fontFamily: "sans-serif",
    overflowX: "hidden" as "hidden",
    transition: "background 0.5s ease",
  },
  left: {
    flex: 1,
    position: "relative" as "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden" as "hidden",
  },
  right: {
    flex: 1,
    padding: "48px",
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    position: "relative" as "relative",
  },
  profileImage: {
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    objectFit: "cover" as "cover",
    filter: "grayscale(100%)",
    transition: "filter 1s ease, transform 1s ease, box-shadow 0.5s ease",
    border: "4px solid #facc15",
    boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: 800,
    marginBottom: "24px",
    textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
  },
  bioText: {
    fontSize: "1.1rem",
    lineHeight: "1.8rem",
    marginBottom: "24px",
  },
  timelineWrapper: {
    marginTop: "32px",
    overflow: "hidden" as "hidden",
    position: "relative" as "relative",
  },
  timeline: {
    display: "flex",
    gap: "40px",
    transition: "transform 0.2s ease",
    cursor: "grab",
    paddingBottom: "16px",
  },
  timelineItem: {
    minWidth: "140px",
    textAlign: "center" as "center",
    padding: "16px",
    borderRadius: "12px",
    backgroundColor: "#222",
    boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
    transition: "all 0.3s ease",
    position: "relative" as "relative",
  },
  counterContainer: {
    display: "flex",
    gap: "32px",
    marginTop: "32px",
    flexWrap: "wrap" as "wrap",
  },
  counterBox: {
    backgroundColor: "#222",
    padding: "24px",
    borderRadius: "16px",
    minWidth: "140px",
    textAlign: "center" as "center",
    boxShadow: "0 6px 20px rgba(0,0,0,0.6)",
    transition: "transform 0.3s ease, background-color 0.3s ease",
  },
  progressBarContainer: {
    position: "fixed" as "fixed",
    top: 0,
    left: 0,
    width: "6px",
    height: "100vh",
    backgroundColor: "#333",
    zIndex: 100,
  },
  progressBar: {
    width: "100%",
    backgroundColor: "#facc15",
    height: "0%",
    transition: "height 0.2s ease",
  },
};

// Timeline data
const timelineData = [
  {
    year: "2018",
    event: "Début du parcours dev",
    tooltip: "Premier HTML/CSS ! 🎉",
  },
  {
    year: "2019",
    event: "Premier projet freelance",
    tooltip: "Mission rémunérée 💰",
  },
  { year: "2020", event: "Stage React Native", tooltip: "Mobile apps time 📱" },
  { year: "2022", event: "Lancement portfolio", tooltip: "Showcase 🔥" },
  {
    year: "2025",
    event: "Projet juridique interactif",
    tooltip: "Code & droit ⚖️",
  },
];

// Counters data
const countersData = [
  { label: "Problèmes résolus", value: 128 },
  { label: "Cafés consommés", value: 347 },
  { label: "Lignes de code", value: 54321 },
  { label: "Patience face aux bugs", value: 98, suffix: "%" },
];

export default function About() {
  const [bioText, setBioText] = useState("");
  const fullBio =
    "Je suis Audric-Dany mb, développeur web et mobile passionné par les technologies modernes. J’aime créer des applications fluides et interactives, avec des animations dynamiques et une touche d’humour dans chaque projet.";
  const [scrollProgress, setScrollProgress] = useState(0);
  const [counters, setCounters] = useState(countersData.map(() => 0));
  const timelineRef = useRef<HTMLDivElement>(null);
  const [timelineOffset, setTimelineOffset] = useState(0);
  const [hoverTooltip, setHoverTooltip] = useState("");

  // Animate bio letter by letter
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setBioText(fullBio.slice(0, i));
      i++;
      if (i > fullBio.length) clearInterval(interval);
    }, 25);
    return () => clearInterval(interval);
  }, []);

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Reveal image
      const img = document.getElementById("profile-img") as HTMLImageElement;
      if (img) {
        img.style.filter =
          window.scrollY > 100 ? "grayscale(0%)" : "grayscale(100%)";
        img.style.transform = window.scrollY > 100 ? "scale(1.08)" : "scale(1)";
        img.style.boxShadow =
          window.scrollY > 100
            ? "0 12px 32px rgba(0,0,0,0.7)"
            : "0 8px 24px rgba(0,0,0,0.6)";
      }

      // Animate counters
      if (window.scrollY > 100 && counters.some((c) => c === 0)) {
        countersData.forEach((c, idx) => {
          let start = 0;
          const increment = c.value / 60;
          const interval = setInterval(() => {
            start += increment;
            if (start >= c.value) {
              start = c.value;
              clearInterval(interval);
            }
            setCounters((prev) => {
              const copy = [...prev];
              copy[idx] = Math.floor(start);
              return copy;
            });
          }, 20);
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [counters]);

  // Timeline mouse movement
  const handleMouseMove = (e: React.MouseEvent) => {
    const timeline = timelineRef.current;
    if (!timeline) return;
    const { width } = timeline.getBoundingClientRect();
    const mouseX = e.clientX;
    const offset = (mouseX / window.innerWidth - 0.5) * 50;
    setTimelineOffset(offset);
  };

  return (
    <div style={styles.container} id="about">
      {/* Progress Bar */}
      <div style={styles.progressBarContainer}>
        <div style={{ ...styles.progressBar, height: `${scrollProgress}%` }} />
      </div>

      {/* Left Image */}
      <div style={styles.left}>
        <img
          src="/photo.jpg"
          alt="Moi en mode dev"
          id="profile-img"
          style={styles.profileImage}
        />
      </div>

      {/* Right Bio */}
      <div style={styles.right}>
        <h1 style={styles.title}>À Propos de Moii</h1>
        <p style={styles.bioText}>{bioText}</p>

        {/* Timeline */}
        <div style={styles.timelineWrapper} onMouseMove={handleMouseMove}>
          <div
            ref={timelineRef}
            style={{
              ...styles.timeline,
              transform: `translateX(${timelineOffset}px)`,
            }}
          >
            {timelineData.map((item, idx) => (
              <div
                key={idx}
                style={{
                  ...styles.timelineItem,
                  backgroundColor:
                    hoverTooltip === item.year ? "#facc15" : "#222",
                  color: hoverTooltip === item.year ? "#111" : "#fff",
                  transform:
                    hoverTooltip === item.year ? "scale(1.1)" : "scale(1)",
                }}
                onMouseEnter={() => setHoverTooltip(item.year)}
                onMouseLeave={() => setHoverTooltip("")}
              >
                <strong>{item.year}</strong>
                <p>{item.event}</p>
                {hoverTooltip === item.year && (
                  <div
                    style={{
                      position: "absolute",
                      backgroundColor: "#333",
                      padding: "6px 12px",
                      borderRadius: "6px",
                      marginTop: "40px",
                      fontSize: "0.85rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.tooltip}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Counters */}
        <div style={styles.counterContainer}>
          {counters.map((count, idx) => (
            <div key={idx} style={styles.counterBox}>
              <h2>
                {count}
                {countersData[idx].suffix || ""}
              </h2>
              <p>{countersData[idx].label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive CSS */}
      <style>
        {`
          @media (max-width: 768px) {
            div[style*="flex-direction: row"] {
              flex-direction: column !important;
            }
            div[style*="flex: 1; position: relative"] {
              width: 100%;
              padding: 24px 0;
            }
            div[style*="flex: 1; padding: 48px"] {
              padding: 24px;
              width: 100%;
            }
            img#profile-img {
              width: 200px;
              height: 200px;
              margin-bottom: 24px;
            }
            div[style*="display: flex; gap: 32px; margin-top: 32px"] {
              justify-content: center;
            }
          }
        `}
      </style>
    </div>
  );
}
