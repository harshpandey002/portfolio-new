/* eslint-disable @next/next/no-img-element */
import Layout from "../components/Layout";
import styles from "@/styles/Home.module.css";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

import { motion } from "framer-motion";

import { FaLinkedinIn } from "react-icons/fa";
import ProjectCard from "@/components/ProjectCard";
import AnimatedText from "@/components/AnimatedText";
import { item, noStagger, stagger } from "helper/animate";

export default function Home() {
  const h1 = "Product Designer creating thoughtful, intuitive interfaces.";

  return (
    <Layout>
      <motion.div
        className={styles.container}
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <div className={styles.hero}>
          <h1>
            {h1.split(" ").map((word, idx) => (
              <span className="outerSpan" key={idx}>
                <motion.span variants={item} className="innerSpan">
                  {word + "\u00A0"}
                </motion.span>
              </span>
            ))}
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
      </motion.div>
    </Layout>
  );
}
