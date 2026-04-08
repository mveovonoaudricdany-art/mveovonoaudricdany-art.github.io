"use client";

import { motion } from "framer-motion";
import styles from "./Projects.module.css";
import { useLanguage } from "../components/LanguageProvider";

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
  {
    title: t("projects.civil.title"),
    desc: t("projects.civil.desc"),
    tech: ["React Native", "Expo", "SQLite"],
  },
  {
    title: t("projects.portfolio.title"),
    desc: t("projects.portfolio.desc"),
    tech: ["Next.js", "Framer Motion", "CSS"],
  },
];

  return (
    <section id="projects" className={styles.section}>
      {/* Titre */}
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t("projects.title")}
      </motion.h2>

      {/* Grid */}
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.04 }}
          >
            <h3 className={styles.cardTitle}>{project.title}</h3>

            <p className={styles.cardDesc}>{project.desc}</p>

            {/* Tech */}
            <div className={styles.techContainer}>
              {project.tech.map((tech, i) => (
                <span key={i} className={styles.tech}>
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className={styles.buttons}>
              <button className={styles.btnPrimary}>{t("projects.view_project")}</button>
              <button className={styles.btnSecondary}>{t("projects.github")}</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
