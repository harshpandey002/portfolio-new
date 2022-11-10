/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/Home.module.css";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillMail,
} from "react-icons/ai";
import Layout from "../components/Layout";

import { motion } from "framer-motion";

import AnimatedText from "@/components/AnimatedText";
import ProjectCard from "@/components/ProjectCard";
import { fadeIn, hr, item, noStagger, stagger } from "helper/animate";
import { FaLinkedinIn } from "react-icons/fa";
import { featured } from "helper/featured";

export default function Home() {
  return (
    <Layout title="Harsh Pandey – Full-Stack Blockchain Developer">
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
              UI/UX. Full-Stack. Blockchain. Freelance.
            </AnimatedText>
          </h1>

          <motion.p variants={noStagger}>
            <AnimatedText>
              I’m Harsh Pandey, an India based Full-Stack blockchain developer
              with over two years of experience. I specialise in developing
              responsive user interfaces for web-based applications with a focus
              on secure and smooth user experience.
            </AnimatedText>
          </motion.p>
          <motion.p id={styles.desc} variants={noStagger}>
            <AnimatedText>
              I’m currently working as freelancer at blocktrain.info where you
              can find best resources to become excellent blockchain developer.
              Before that, I worked at AppSecure where I designed and developed
              Pentabug, a highly secure bug bounty platform.
            </AnimatedText>
          </motion.p>

          <motion.div variants={stagger} className={styles.socials}>
            <span className="outerSpan">
              <motion.span
                onClick={() => open("https://twitter.com/harshpandey_002")}
                variants={item}
                className="innerSpan"
              >
                <AiOutlineTwitter className={styles.icon} />
              </motion.span>
            </span>
            <span className="outerSpan">
              <motion.span
                onClick={() =>
                  open("https://www.instagram.com/harshpandey_002/")
                }
                variants={item}
                className="innerSpan"
              >
                <AiOutlineInstagram className={styles.icon} />
              </motion.span>
            </span>
            <span className="outerSpan">
              <motion.span
                onClick={() => open("https://github.com/harshpandey002")}
                variants={item}
                className="innerSpan"
              >
                <AiFillGithub className={styles.icon} />
              </motion.span>
            </span>
            <span className="outerSpan">
              <motion.span
                onClick={() =>
                  open(
                    "https://www.linkedin.com/in/harsh-kumar-pandey-5ab9071aa/"
                  )
                }
                variants={item}
                className="innerSpan"
              >
                <FaLinkedinIn className={styles.icon} />
              </motion.span>
            </span>
            <span className="outerSpan">
              <motion.span
                onClick={() => open("mailto:coding.harshp@gmail.com")}
                variants={item}
                className="innerSpan"
                id={styles.emailIcon}
              >
                <AiFillMail className={styles.icon} />
              </motion.span>
            </span>
            <span className="outerSpan">
              <motion.button
                onClick={() => open("mailto:coding.harshp@gmail.com")}
                variants={item}
                id={styles.emailBtn}
              >
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
          <p>
            A collection of some side projects that I have shipped recently.
          </p>
          <div className={styles.projects}>
            {featured.map((data, i) => (
              <ProjectCard key={i + 1} data={data} />
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
