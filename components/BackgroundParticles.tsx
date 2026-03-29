"use client";

import dynamic from "next/dynamic";

// Chargement côté client uniquement
const Particles = dynamic(() => import("@tsparticles/react"), { ssr: false });

export default function BackgroundParticles() {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: { value: "#0f172a" } },
        particles: {
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.7 },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            outModes: { default: "bounce" },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
