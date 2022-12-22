/* eslint-disable @next/next/no-img-element */
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion";
import { cards, hr, noStagger, stagger } from "helper/animate";
import { sortByDate } from "helper/util";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import React from "react";
import Link from "next/link";

export default function Blogs({ blogs }) {
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
            blogs.map((blog) => <BlogCard blog={blog} />)
          )}
        </motion.div>
      </div>
    </Layout>
  );
}

function BlogCard({ blog }) {
  const { title, squareImage, description, slug, isLive } = blog;

  return (
    <Link href={`/blogs/${slug}`} scroll={false}>
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
  let blogs = files.map((filename) => {
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

  blogs.sort(sortByDate);

  const unpublished = [];
  const published = [];

  blogs.forEach((blog) => {
    if (blog.isLive) published.push(blog);
    else unpublished.push(blog);
  });

  blogs = [...published, ...unpublished];

  return {
    props: {
      blogs,
    },
  };
}
