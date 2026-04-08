"use client";

import { motion } from "framer-motion";
import styles from "./Skills.module.css";
import { useLanguage } from "../components/LanguageProvider";

export default function Skills() {
  const { t } = useLanguage();

  const categories = [
  {
    title: t("skills.dev"),
    items: [
      {
        name: "HTML5",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      },
      {
        name: "Next.js",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Tailwind",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Material UI",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
      },
      {
        name: "Android",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg",
      },
    ],
  },
  {
    title: t("skills.db"),
    items: [
      {
        name: "MySQL",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      },
      {
        name: "SQLite",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
      },
      {
        name: "Supabase",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
      },
    ],
  },
  {
    title: t("skills.tools"),
    items: [
      {
        name: "VS Code",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
      },
      {
        name: "Git",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      },
      {
        name: "Canva",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg",
      },
    ],
  },
];

  return (
    <section id="skills" className={styles.section}>
      {/* TITRE */}
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {t("skills.title")}
      </motion.h2>

      {/* CATEGORIES */}
      <div className={styles.container}>
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className={styles.cardTitle}>{cat.title}</h3>

            <div className={styles.skillsGrid}>
              {cat.items.map((item, i) => (
                <motion.div
                  key={i}
                  className={styles.skill}
                  whileHover={{ scale: 1.1 }}
                >
                  <img src={item.img} alt={item.name} />
                  <span>{item.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
