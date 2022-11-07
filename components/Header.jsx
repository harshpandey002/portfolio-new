/* eslint-disable @next/next/no-img-element */
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
          <Link href="/">
            <img src="signature.png" alt="" />
          </Link>
        </div>
        <ul className={styles.links}>
          <Link href="/">
            <li className={isActive("/") ? styles.active : ""}>Home</li>
          </Link>
          <Link href="/blogs">
            <li className={isActive("/blogs") ? styles.active : ""}>Blogs</li>
          </Link>
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
