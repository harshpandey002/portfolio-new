import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion";
import { cards, hr, noStagger, stagger } from "helper/animate";
import { blogs } from "helper/blogs";

export default function Blogs() {
  return (
    <Layout title="Blogs – Harsh Pandey">
      <div className={styles.container}>
        <motion.div
          key="blogs"
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
              To help other developers comprehend the concepts as well, I like
              to document my learning by writing articles about well-known
              Web3.0 technologies, frameworks, and projects I build.
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
          {blogs.map((data, i) => (
            <ProjectCard key={i + 1} data={data} />
          ))}
        </motion.div>
      </div>
    </Layout>
  );
}
