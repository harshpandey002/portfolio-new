import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import styles from "@/styles/Blogs.module.css";
import React from "react";
import { motion } from "framer-motion";
import { cards, hr, noStagger, stagger } from "helper/animate";

export default function Blogs() {
  return (
    <Layout>
      <div className={styles.container}>
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={stagger}
          className={styles.hero}
        >
          <h1>
            <AnimatedText>Blogs</AnimatedText>
          </h1>

          <motion.p variants={noStagger}>
            <AnimatedText>
              I write articles on JavaScript, Python, Software Development, Web
              3.0 and General Programming. If you enjoyed my articles or found
              them useful, please consider supporting me by becoming a sponsor.
              It will undoubtedly encourage me to continue writing article in
              the future.
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
          className={styles.blogWrapper}
        >
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </motion.div>
      </div>
    </Layout>
  );
}
