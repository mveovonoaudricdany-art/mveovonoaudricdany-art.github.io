"use client";

import styles from "./About.module.css";
import { useLanguage } from "../components/LanguageProvider";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className={styles.container} id="about">
      {/* IMAGE */}
      <div className={styles.left}>
        <div className={styles.imageWrapper}>
          <img
            src="/profil.png"
            alt="Profil développeur"
            className={styles.profileImage}
          />
          <div className={styles.imageBackdrop}></div>
        </div>
      </div>

      {/* TEXTE */}
      <div className={styles.right}>
        <h2 className={styles.title}>
          <span className={styles.highlight}>{t("about.title").charAt(0)}</span>{t("about.title").slice(1)}
        </h2>

        <div className={styles.description}>
          <h3 className={styles.greeting}>
            {t("about.greeting")} <span className={styles.name}>Audric-Dany</span> ✌️
          </h3>
          <p className={styles.bio}>
            {t("about.bio_1_prefix")} <strong>{t("about.bio_1_strong")}</strong> {t("about.bio_1_suffix")}
          </p>
          <p className={styles.bio}>
            {t("about.bio_2")}
          </p>
        </div>
      </div>
    </section>
  );
}
