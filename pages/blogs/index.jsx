/* eslint-disable @next/next/no-img-element */
import AnimatedText from "@/components/AnimatedText";
import BlogCard from "@/components/BlogCard";
import Layout from "@/components/Layout";
import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion";
import fs from "fs";
import matter from "gray-matter";
import { cards, hr, noStagger, stagger } from "helper/animate";
import path from "path";
import { sortByDate } from "helper/util";
import React from "react";

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

  // const unpublished = [];
  // const published = [];

  // blogs.forEach((blog) => {
  //   if (blog.isLive) published.push(blog);
  //   else unpublished.push(blog);
  // });

  // blogs = [...published, ...unpublished];

  return {
    props: {
      blogs,
    },
  };
}
