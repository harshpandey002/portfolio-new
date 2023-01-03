/* eslint-disable @next/next/no-img-element */
import React from "react";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";

import { motion } from "framer-motion";
import { md, readTime, sanitize } from "helper/markdownIt";
import { cards, item, noStagger, stagger } from "@/helper/animate";

import matter from "gray-matter";
import fs from "fs";
import path from "path";

import styles from "@/styles/Home.module.css";

export default function BlogDetail({ frontmatter, content }) {
  const { image, title, date, description, tags } = frontmatter;

  const detail = `${readTime(content)} min read | ${date}`;

  return (
    <Layout
      title={`${title} — Harsh Pandey`}
      description={description}
      image={image}
    >
      <motion.div
        key="BlogDetail"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={stagger}
        className={styles.blogDetail}
      >
        <h1 id={styles.blogTitle}>
          <AnimatedText>{title}</AnimatedText>
        </h1>
        <motion.p variants={noStagger} id={styles.blogDetail}>
          <AnimatedText>{detail}</AnimatedText>
        </motion.p>
        <motion.ul variants={stagger} id={styles.blogTags}>
          {React.Children.toArray(
            tags.map((tag) => <motion.li variants={item}>{tag}</motion.li>)
          )}
        </motion.ul>
        {image && (
          <motion.img
            variants={cards}
            id={styles.blogImg}
            src={image}
            alt={title}
          />
        )}
        <motion.div
          variants={cards}
          className="content"
          dangerouslySetInnerHTML={{
            __html: sanitize(md.render(content)),
          }}
        ></motion.div>
      </motion.div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("blogs"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("blogs", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      content,
    },
  };
}
