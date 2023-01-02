/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function BlogCard({ blog, isHome }) {
  const { title, squareImage, description, slug, isLive } = blog;

  return (
    <Link href={`/blogs/${slug}`} scroll={false}>
      <div className={`${styles.card} ${!isLive ? "disabled" : ""}`}>
        <span className={styles.img}>
          <img src={squareImage} alt={title} />
          {/* <img src="project-Icon.png" alt="projectIcon" /> */}
        </span>
        <span className={styles.projectInfo}>
          <h5>
            {title}{" "}
            {!isLive && <span id={styles.freelance}>(Coming Soon)</span>}
          </h5>
          <p>{description}</p>
        </span>
      </div>
    </Link>
  );
}
