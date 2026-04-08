"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import logo from "../public/logo.jpeg";
import {
  FaHome,
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { useTheme } from "next-themes";
import { useLanguage } from "../components/LanguageProvider";

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const { lang, setLang, t } = useLanguage();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 🔥 Toggle thème (global)
  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  // 🌍 Toggle langue
  const toggleLang = () => {
    setLang(lang === "FR" ? "EN" : "FR");
  };

  const links = [
    { id: "hero", label: t("nav.home"), icon: <FaHome /> },
    { id: "about", label: t("nav.about"), icon: <FaUser /> },
    { id: "skills", label: t("nav.skills"), icon: <FaTools /> },
    { id: "projects", label: t("nav.projects"), icon: <FaProjectDiagram /> },
    { id: "contact", label: t("nav.contact"), icon: <FaEnvelope /> },
  ];

  useEffect(() => {
    const sections = ["hero", "about", "skills", "projects", "contact"];

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActive(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // appel initial
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* LOGO */}
      <div className={styles.left}>
        <Image
          src={logo}
          alt="logo"
          width={50}
          height={50}
          className={styles.logoImg}
        />

        <div className={styles.logoText}>
          <h1 className={styles.tech}>Dev</h1>
          <p className={styles.slogan}>{t("nav.slogan")}</p>
        </div>
      </div>

      {/* NAV */}
      <nav className={styles.nav}>
        {links.map((link) => (
          <motion.a
            key={link.id}
            className={`${styles.link} ${active === link.id ? styles.activeLink : ""}`}
            onClick={() => {
              const section = document.getElementById(link.id);
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className={styles.icon}>{link.icon}</span>
            <span className={styles.label}>{link.label}</span>

            {active === link.id && (
              <motion.div
                layoutId="activeIndicator"
                className={styles.active}
              />
            )}
          </motion.a>
        ))}
      </nav>

      {/* ACTIONS */}
      <div className={styles.actions}>
        {/* LANG */}
        <motion.button
          onClick={toggleLang}
          className={styles.btn}
          whileTap={{ scale: 0.9 }}
        >
          {lang}
        </motion.button>

        {/* THEME */}
        <motion.button
          onClick={toggleTheme}
          className={styles.themeBtn}
          whileTap={{ rotate: 180, scale: 0.9 }}
          transition={{ duration: 0.4 }}
        >
          {mounted && (
            <motion.span
              key={resolvedTheme}
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {resolvedTheme === "dark" ? <FaSun /> : <FaMoon />}
            </motion.span>
          )}
        </motion.button>
      </div>
    </motion.header>
  );
}
