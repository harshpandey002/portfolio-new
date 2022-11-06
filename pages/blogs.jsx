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
      <motion.div
        className={styles.container}
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <div className={styles.hero}>
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
        </div>
        <motion.hr variants={hr} id="hr" />

        <motion.div
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            ease: [0.455, 0.03, 0.515, 0.955],
            duration: 0.8,
            delay: 2,
          }}
          className={styles.blogWrapper}
        >
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </motion.div>
      </motion.div>
    </Layout>
  );
}
