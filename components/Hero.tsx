"use client";

import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import styles from "./Hero.module.css";
import { useLanguage } from "../components/LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className={styles.section} id="hero">

      {/* CONTENU */}
      <div className={styles.container}>
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.title}
        >
          Audric-Dany
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className={styles.subtitle}
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.p
          className={styles.subtitle}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {t("hero.desc")}
        </motion.p>

        <motion.p
          className={styles.subsubtitle}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {t("nav.slogan")}
        </motion.p>

        {/* GITHUB */}
        <motion.div
          className={styles.buttons}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.a
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 15px 40px rgba(59,130,246,0.4)",
            }}
            className={styles.buttonPrimary}
            href="https://www.linkedin.com/in/audric-dany-mve-ovono-7a3511400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
            {t("hero.linkedin")}
          </motion.a>

          <motion.a
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 15px 40px rgba(59,130,246,0.4)",
            }}
            className={styles.buttonPrimary}
            href="https://x.com/AudricDany06"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={30} />
            {t("hero.twitter")}
          </motion.a>

          <motion.a
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 15px 40px rgba(59,130,246,0.4)",
            }}
            className={styles.buttonPrimary}
            href="https://github.com/mveovonoaudricdany-art"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
            {t("hero.github")}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
