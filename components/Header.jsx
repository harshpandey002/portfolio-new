/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "@/styles/Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { AnimateSharedLayout } from "framer-motion";
import { motion } from "framer-motion";

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
          <Link href="/">
            <img src="signature.png" alt="" />
          </Link>
        </div>
        <ul className={styles.links}>
          <Link href="/">
            <li layoutId="mark" className={isActive("/") ? styles.active : ""}>
              Home
            </li>
          </Link>
          <Link href="/blogs">
            <li
              layoutId="mark"
              className={isActive("/blogs") ? styles.active : ""}
            >
              Blogs
            </li>
          </Link>
          <Link href="/projects">
            <li
              layoutId="mark"
              className={isActive("/projects") ? styles.active : ""}
            >
              Projects
            </li>
          </Link>
          <Link href="/about">
            <li
              layoutId="mark"
              className={isActive("/about") ? styles.active : ""}
            >
              About
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
