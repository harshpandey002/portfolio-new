/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/Home.module.css";

export default function ProjectCard() {
  return (
    <a href="#" target="_blank" className={styles.card}>
      <span className={styles.img}>
        <img src="project-Icon.png" alt="projectIcon" />
      </span>
      <span className={styles.info}>
        <h5>Design Vault</h5>
        <p>
          A curated library of screenshots & interaction patterns from the world
          {"'"}s best digital products. Gain insights, explore trends and
          understand competitors and best practices.
        </p>
      </span>
    </a>
  );
}
