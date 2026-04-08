// components/AvatarCanvas.jsx

import { useEffect, useRef } from "react";

const COLORS = {
  bg: "#0a0c14",
  indigo: "#6366f1",
  teal: "#14b8a6",
  purple: "#a855f7",
  amber: "#f59e0b",
  dark1: "#0d1020",
};

export default function AvatarCanvas() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const W = 220;
    const H = 280;
    let t = 0;

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // Fond
      ctx.fillStyle = COLORS.bg;
      ctx.fillRect(0, 0, W, H);

      // Grille de fond
      ctx.strokeStyle = "#1a1f3022";
      ctx.lineWidth = 0.5;
      for (let x = 0; x < W; x += 22) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }
      for (let y = 0; y < H; y += 22) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }

      const cx = W / 2;
      const cy = H / 2 - 20;

      // Halo teal
      const g1 = ctx.createRadialGradient(cx, cy, 40, cx, cy, 100);
      g1.addColorStop(0, "#14b8a608");
      g1.addColorStop(1, "transparent");
      ctx.fillStyle = g1;
      ctx.beginPath();
      ctx.arc(cx, cy, 100, 0, Math.PI * 2);
      ctx.fill();

      // Halo indigo
      const g2 = ctx.createRadialGradient(cx, cy, 20, cx, cy, 70);
      g2.addColorStop(0, "#6366f118");
      g2.addColorStop(1, "transparent");
      ctx.fillStyle = g2;
      ctx.beginPath();
      ctx.arc(cx, cy, 70, 0, Math.PI * 2);
      ctx.fill();

      // Orbite 1 (indigo)
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(t * 0.01);
      ctx.strokeStyle = "#6366f133";
      ctx.lineWidth = 0.5;
      ctx.setLineDash([4, 8]);
      ctx.beginPath();
      ctx.arc(0, 0, 80, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillStyle = COLORS.indigo;
      ctx.shadowColor = COLORS.indigo;
      ctx.shadowBlur = 6;
      ctx.beginPath();
      ctx.arc(80, 0, 3.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.restore();

      // Orbite 2 (teal, inverse)
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-t * 0.017);
      ctx.strokeStyle = "#14b8a622";
      ctx.lineWidth = 0.5;
      ctx.setLineDash([3, 10]);
      ctx.beginPath();
      ctx.arc(0, 0, 55, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillStyle = COLORS.teal;
      ctx.shadowColor = COLORS.teal;
      ctx.shadowBlur = 6;
      ctx.beginPath();
      ctx.arc(55, 0, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.restore();
      ctx.setLineDash([]);

      // Tête
      ctx.strokeStyle = COLORS.indigo;
      ctx.lineWidth = 1;
      ctx.fillStyle = COLORS.dark1;
      ctx.beginPath();
      ctx.arc(cx, cy - 22, 28, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Yeux
      ctx.fillStyle = COLORS.teal;
      ctx.shadowColor = COLORS.teal;
      ctx.shadowBlur = 4;
      ctx.beginPath();
      ctx.arc(cx - 9, cy - 22, 2.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(cx + 9, cy - 22, 2.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Sourire
      ctx.strokeStyle = COLORS.indigo;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy - 18, 8, 0.1, Math.PI - 0.1);
      ctx.stroke();

      // Buste
      ctx.fillStyle = COLORS.dark1;
      ctx.strokeStyle = "#6366f144";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(cx - 32, cy + 65);
      ctx.quadraticCurveTo(cx - 36, cy + 10, cx - 18, cy + 3);
      ctx.lineTo(cx + 18, cy + 3);
      ctx.quadraticCurveTo(cx + 36, cy + 10, cx + 32, cy + 65);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Lignes de code sur le buste
      const lineColors = [
        COLORS.indigo,
        COLORS.teal,
        COLORS.purple,
        COLORS.amber,
        COLORS.indigo,
        COLORS.teal,
      ];
      const lineWidths = [30, 22, 36, 18, 28, 20];
      for (let i = 0; i < 6; i++) {
        ctx.fillStyle = lineColors[i] + "55";
        ctx.beginPath();
        ctx.roundRect(cx - 22, cy + 16 + i * 8, lineWidths[i], 3, 2);
        ctx.fill();
      }

      // Labels flottants
      ctx.font = "9px monospace";
      ctx.fillStyle = COLORS.indigo + "aa";
      ctx.fillText("</>", cx - 95, cy - 55);
      ctx.fillStyle = COLORS.teal + "aa";
      ctx.fillText("[app]", cx + 48, cy - 30);
      ctx.fillStyle = COLORS.purple + "aa";
      ctx.fillText("{db}", cx - 100, cy + 30);

      // Particules
      const particles = [
        { angle: t * 0.008, r: 105, size: 1.5, color: COLORS.indigo },
        { angle: t * 0.008 + 2.1, r: 105, size: 1.5, color: COLORS.teal },
        { angle: t * 0.008 + 4.2, r: 105, size: 1.5, color: COLORS.purple },
        { angle: -t * 0.012, r: 130, size: 1, color: COLORS.amber },
        { angle: -t * 0.012 + 3.14, r: 130, size: 1, color: COLORS.teal },
      ];
      particles.forEach((p) => {
        const px = cx + Math.cos(p.angle) * p.r;
        const py = cy + Math.sin(p.angle) * p.r * 0.5;
        ctx.fillStyle = p.color + "cc";
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      t++;
      animRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <div style={styles.wrapper}>
      {/* Anneaux orbitaux CSS */}
      <div style={styles.ring1} />
      <div style={styles.ring2} />

      {/* Carte principale */}
      <div style={styles.card}>
        <canvas
          ref={canvasRef}
          width={220}
          height={280}
          style={styles.canvas}
        />
        <div style={styles.badge}>fullstack · web · mobile</div>
      </div>

      {/* Tags flottants */}
      <div style={{ ...styles.floatTag, ...styles.ft1 }}>React Native</div>
      <div style={{ ...styles.floatTag, ...styles.ft2 }}>Node.js</div>
      <div style={{ ...styles.floatTag, ...styles.ft3 }}>PostgreSQL</div>
      <div style={{ ...styles.floatTag, ...styles.ft4 }}>Next.js</div>
    </div>
  );
}

/* ─── Styles ─────────────────────────────────────────────────────────── */
const ring = {
  position: "absolute",
  borderRadius: "50%",
  border: "0.5px solid",
  pointerEvents: "none",
};

const floatTagBase = {
  position: "absolute",
  background: "#0a0c14",
  border: "0.5px solid #1e2535",
  borderRadius: "6px",
  padding: "6px 10px",
  fontFamily: "'Fira Code', monospace",
  fontSize: "10px",
  whiteSpace: "nowrap",
  zIndex: 4,
};

const styles = {
  wrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "340px",
    height: "340px",
  },
  ring1: {
    ...ring,
    width: "300px",
    height: "300px",
    borderColor: "#6366f122",
    animation: "spin 20s linear infinite",
  },
  ring2: {
    ...ring,
    width: "260px",
    height: "260px",
    borderColor: "#14b8a622",
    animation: "spin 14s linear infinite reverse",
  },
  card: {
    width: "220px",
    height: "280px",
    background: "#0a0c14",
    border: "0.5px solid #1a1f30",
    borderRadius: "16px",
    overflow: "hidden",
    position: "relative",
    zIndex: 2,
  },
  canvas: {
    width: "100%",
    height: "100%",
    display: "block",
  },
  badge: {
    position: "absolute",
    bottom: "12px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "rgba(6,8,16,0.85)",
    backdropFilter: "blur(8px)",
    border: "0.5px solid #1e2535",
    borderRadius: "20px",
    padding: "5px 14px",
    fontFamily: "'Fira Code', monospace",
    fontSize: "10px",
    color: "#6366f1",
    whiteSpace: "nowrap",
    zIndex: 3,
  },
  floatTag: floatTagBase,
  ft1: {
    top: "20px",
    right: "-10px",
    color: "#a855f7",
    borderColor: "#a855f733",
  },
  ft2: {
    top: "90px",
    right: "-30px",
    color: "#14b8a6",
    borderColor: "#14b8a633",
  },
  ft3: {
    bottom: "60px",
    right: "-15px",
    color: "#f59e0b",
    borderColor: "#f59e0b33",
  },
  ft4: {
    top: "50px",
    left: "-20px",
    color: "#818cf8",
    borderColor: "#6366f133",
  },
};
