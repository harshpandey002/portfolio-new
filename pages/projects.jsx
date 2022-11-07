/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/Layout";
import styles from "@/styles/Projects.module.css";
import { BiLinkExternal } from "react-icons/bi";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import { cards, hr, noStagger, stagger } from "helper/animate";

export default function Projects() {
  return (
    <Layout>
      <motion.div
        className={styles.container}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={stagger}
      >
        <div className={styles.hero}>
          <h1>
            <AnimatedText>Projects</AnimatedText>
          </h1>

          <motion.p variants={noStagger}>
            <AnimatedText>
              From one page sites to the worlds first mobile sitebuilder, I’ve
              spent years designing and building products of varying sizes.
              Here’s a small selection of some of my recent projects and
              experiences.
            </AnimatedText>
          </motion.p>
        </div>

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
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </motion.div>
      </motion.div>
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
          {["React", "Nextjs", "Thirdweb", "Moralis"].map((skill, i) => (
            <>
              <span key={i + 1}>{skill}</span>
            </>
          ))}
        </div>

        <button>
          basekit.com <BiLinkExternal />
        </button>
      </div>
    </div>
  );
}
