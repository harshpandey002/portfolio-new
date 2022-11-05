import React from "react";
import styles from "@/styles/Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const isActive = (path) => {
    return path === router.asPath;
  };

  return (
    <div className={styles.container}>
      <div className={styles.gradient} />
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <h2>Harsh Pandey</h2>
        </div>
        <ul className={styles.links}>
          <Link href="/">
            <li className={isActive("/") ? styles.active : ""}>Home</li>
          </Link>
          <li className={isActive("/blog") ? styles.active : ""}>Blogs</li>
          <Link href="/projects">
            <li className={isActive("/projects") ? styles.active : ""}>
              Projects
            </li>
          </Link>
          <Link href="/about">
            <li className={isActive("/about") ? styles.active : ""}>About</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
