import React from "react";
import styles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.gradient} />
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <h2>Harsh Pandey</h2>
        </div>
        <ul className={styles.links}>
          <li className={styles.active}>Home</li>
          <li>Blogs</li>
          <li>Projects</li>
        </ul>
      </nav>
    </div>
  );
}
