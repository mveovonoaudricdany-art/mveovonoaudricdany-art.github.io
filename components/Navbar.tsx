import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.title}>Mon Portfolio</h1>
      <ul className={styles.list}>
        <li>
          <a href="#" className={styles.link}>
            Accueil
          </a>
        </li>
        <li>
          <a href="#projects" className={styles.link}>
            Projets
          </a>
        </li>
        <li>
          <a href="#contact" className={styles.link}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
