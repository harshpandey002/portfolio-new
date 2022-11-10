/* eslint-disable @next/next/no-img-element */
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion";
import { cards, fadeIn, hr, noStagger, stagger } from "helper/animate";
import { open } from "helper/function";
import { projects } from "helper/projects";
import { BiLinkExternal } from "react-icons/bi";

export default function Projects() {
  return (
    <Layout title="Projects – Harsh Pandey">
      <div className={styles.container}>
        <motion.div
          key="projects"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={stagger}
          className={styles.hero}
        >
          <h1>
            <AnimatedText>Projects</AnimatedText>
          </h1>

          <motion.p variants={noStagger}>
            <AnimatedText>
              From one page sites, to the highly secure bug bounty platform, to
              NFT Marketplace, I’ve build products of varying types and sizes,
              using most awesome technologies out there. Here’s a small
              selection of some of my recent projects and experiences.
            </AnimatedText>
          </motion.p>
        </motion.div>

        <motion.hr
          variants={hr}
          initial="hidden"
          animate="visible"
          exit="exit"
          id="hr"
        />

        <motion.div
          variants={cards}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={styles.projectWrapper}
        >
          {projects.map((data, i) => (
            <Project key={i + 1} data={data} />
          ))}
        </motion.div>

        <motion.hr
          variants={hr}
          initial="hidden"
          animate="visible"
          exit="exit"
          id="hr"
        />

        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={fadeIn}
          className={styles.work}
        >
          <h3>Graveyard</h3>
          <p id={styles.sponsor}>
            Significant projects I worked on that are now retired.
          </p>

          <div className={styles.graveyard}>
            <div className={styles.deadProject}>
              <h4>EduCompanion</h4>
              <p>
                Another Education Platform but with affiliate links, users can
                explore learning paths and courses required to excel in a
                perticular domain.
              </p>
            </div>
            <div className={styles.deadProject}>
              <h4>Beyond Pinks</h4>
              <p>
                A Mentoring Platform focused on women and LGBT of coorporates
                where an employees can book a slot with leaders of big companies
                and get mentored on different aspects of life.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}

function Project({ data }) {
  const { image, title, description, skills, url } = data;

  return (
    <div className={styles.projectCard}>
      <img src={image} alt={title} />
      <div className={styles.info}>
        <h4>{title}</h4>

        <div className={styles.projectDesc}>
          {description.map((desc, i) => (
            <p key={i + 1}>{desc}</p>
          ))}
        </div>

        <div className={styles.skills}>
          {skills?.map((skill, i) => (
            <>
              <span key={i + 1}>{skill}</span>
            </>
          ))}
        </div>

        <button onClick={() => open(url.link)} disabled={!url.link}>
          {url.label} {!!url.link && <BiLinkExternal />}
        </button>
      </div>
    </div>
  );
}
