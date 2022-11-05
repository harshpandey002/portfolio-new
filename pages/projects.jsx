/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/Layout";
import styles from "@/styles/Projects.module.css";
import { BiLinkExternal } from "react-icons/bi";

export default function Projects() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1>Projects</h1>

          <p>
            From one page sites to the worlds first mobile sitebuilder, I’ve
            spent years designing and building products of varying sizes. Here’s
            a small selection of some of my recent projects and experiences.
          </p>
        </div>
        <hr id="hr" />

        <div className={styles.projectWrapper}>
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </Layout>
  );
}

function Project() {
  return (
    <div className={styles.card}>
      <img src="designvault.png" alt="Project Image" />
      <div className={styles.info}>
        <h4>Go Connect: Bookings</h4>

        <div className={styles.desc}>
          <p>
            An online booking system for in-person or online appointments,
            designed to work standalone or alongside BaseKit Sitebuilder.
          </p>

          <p>
            During this year-long project, I worked on every stage from
            conception, wireframing, IA mapping, prototyping, detailed mockups
            through development and launch.
          </p>
        </div>

        <div className={styles.skills}>
          {["React", "Nextjs", "Thirdweb", "Moralis", "Firebase"].map(
            (skill, i) => (
              <>
                <span key={i + 1}>{skill}</span>
              </>
            )
          )}
        </div>

        <button>
          basekit.com <BiLinkExternal />
        </button>
      </div>
    </div>
  );
}
