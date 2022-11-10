/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/Home.module.css";

export default function ProjectCard({ data }) {
  const { title, image, description, link } = data;

  return (
    <a href={link} target="_blank" rel="noreferrer" className={styles.card}>
      <span className={styles.img}>
        <img src={image} alt={title} />
        {/* <img src="project-Icon.png" alt="projectIcon" /> */}
      </span>
      <span className={styles.projectInfo}>
        <h5>{title}</h5>
        <p>{description}</p>
      </span>
    </a>
  );
}
