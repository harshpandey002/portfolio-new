import React from "react";
import styles from "@/styles/Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.gradient} />
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <h2>Harsh Pandey</h2>
        </div>
        <ul className={styles.links}>
          <Link href="/">
            <li className={styles.active}>Home</li>
          </Link>
          <li>Blogs</li>
          <Link href="/projects">
            <li>Projects</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
