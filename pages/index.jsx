/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/Home.module.css";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import Layout from "../components/Layout";

import { motion } from "framer-motion";

import AnimatedText from "@/components/AnimatedText";
import ProjectCard from "@/components/ProjectCard";
import { fadeIn, hr, item, noStagger, stagger } from "helper/animate";
import { FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  return (
    <Layout>
      <div className={styles.homeContainer}>
        <motion.div
          key="home"
          className={styles.hero}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={stagger}
        >
          <h1 style={{ marginBottom: "4rem" }}>
            <AnimatedText>
              Product Designer creating thoughtful, intuitive interfaces.
            </AnimatedText>
          </h1>

          <motion.p variants={noStagger}>
            <AnimatedText>
              I’m Dale-Anthony, a UK based product designer with over ten years
              of experience. I specialise in interface design for mobile and
              web-based applications with a focus on simplicity & usability.
            </AnimatedText>
          </motion.p>
          <motion.p id={styles.desc} variants={noStagger}>
            <AnimatedText>
              I’m currently working at WP Engine on some of the worlds best
              WordPress products. Before that, I worked at BaseKit where I
              helped shape the future of website builders and tools to help
              small businesses thrive online. I also build tools like Design
              Vault and Does.Design.
            </AnimatedText>
          </motion.p>

          <motion.div variants={stagger} className={styles.socials}>
            <span className="outerSpan">
              <motion.span variants={item} className="innerSpan">
                <AiOutlineTwitter className={styles.icon} />
              </motion.span>
            </span>
            <span className="outerSpan">
              <motion.span variants={item} className="innerSpan">
                <AiOutlineInstagram className={styles.icon} />
              </motion.span>
            </span>
            <span className="outerSpan">
              <motion.span variants={item} className="innerSpan">
                <AiFillGithub className={styles.icon} />
              </motion.span>
            </span>
            <span className="outerSpan">
              <motion.span variants={item} className="innerSpan">
                <FaLinkedinIn className={styles.icon} />
              </motion.span>
            </span>
            <span className="outerSpan">
              <motion.button variants={item} id={styles.email}>
                Email me
              </motion.button>
            </span>
          </motion.div>
        </motion.div>

        <motion.hr
          variants={hr}
          initial="hidden"
          animate="visible"
          exit="exit"
          id="hr"
        />

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={styles.featured}
        >
          <h2>Featured Projects</h2>
          <p>A collection of some side projects that have shipped recently.</p>
          <div className={styles.projects}>
            <ProjectCard />
            <ProjectCard />
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
