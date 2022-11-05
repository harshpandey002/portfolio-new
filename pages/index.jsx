/* eslint-disable @next/next/no-img-element */
import Layout from "../components/Layout";
import styles from "@/styles/Home.module.css";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

import { FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1>Product Designer creating thoughtful, intuitive interfaces.</h1>

          <p>
            I{"’"}m Dale-Anthony, a UK based product designer with over ten
            years of experience. I specialise in interface design for mobile and
            web-based applications with a focus on simplicity & usability.
          </p>
          <p id={styles.desc}>
            I{"’"}m currently working at WP Engine on some of the worlds best
            WordPress products. Before that, I worked at BaseKit where I helped
            shape the future of website builders and tools to help small
            businesses thrive online. I also build tools like Design Vault and
            Does.Design.
          </p>

          <div className={styles.socials}>
            <span>
              <AiOutlineTwitter className={styles.icon} />
            </span>
            <span>
              <AiOutlineInstagram className={styles.icon} />
            </span>
            <span>
              <AiFillGithub className={styles.icon} />
            </span>
            <span>
              <FaLinkedinIn className={styles.icon} />
            </span>

            <button id={styles.email}>Email me</button>
          </div>
        </div>

        <hr id="hr" />

        <div className={styles.featured}>
          <h2>Featured Projects</h2>
          <p>A collection of some side projects that have shipped recently.</p>
          <div className={styles.projects}>
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>
    </Layout>
  );
}

function ProjectCard() {
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
