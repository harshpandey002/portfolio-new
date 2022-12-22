/* eslint-disable @next/next/no-img-element */
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion";
import { cards, hr, noStagger, stagger } from "helper/animate";
import { blogs } from "helper/blogs";
import { sortByDate } from "helper/util";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import React from "react";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

export default function Blogs({ blogs: posts }) {
  console.log(posts);

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
              to document my learnings, by writing articles about well-known
              Web3.0 technologies, frameworks, and the projects I build.
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
          {React.Children.toArray(
            posts.map((data) => <BlogCard blog={data} />)
          )}
          {/* {React.Children.toArray(
            blogs.map((data) => <ProjectCard data={data} />)
          )} */}
        </motion.div>
      </div>
    </Layout>
  );
}

function BlogCard({ blog }) {
  const { title, squareImage, description, slug, isLive } = blog;

  return (
    <Link href={`/blogs/${slug}`}>
      <div className={`${styles.card} ${!isLive ? "disabled" : ""}`}>
        <span className={styles.img}>
          <img src={squareImage} alt={title} />
          {/* <img src="project-Icon.png" alt="projectIcon" /> */}
        </span>
        <span className={styles.projectInfo}>
          <h5>
            {title}{" "}
            {!isLive && <span id={styles.freelance}>(Coming Soon)</span>}
          </h5>
          <p>{description}</p>
        </span>
      </div>
    </Link>
  );
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("blogs"));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("blogs", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      ...frontmatter,
    };
  });

  return {
    props: {
      blogs: posts.sort(sortByDate),
    },
  };
}
