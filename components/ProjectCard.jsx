/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/Home.module.css";

export default function ProjectCard({ data }) {
  return (
    <a href="#" target="_blank" className={styles.card}>
      <span className={styles.img}>
        <img src={data.image} alt="projectIcon" />
        {/* <img src="project-Icon.png" alt="projectIcon" /> */}
      </span>
      <span className={styles.projectInfo}>
        <h5>{data.title}</h5>
        <p>{data.description}</p>
      </span>
    </a>
  );
}
