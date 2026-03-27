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

export default function BlogDetail({ frontmatter, content }) {
  const { image, title, date, description, tags } = frontmatter;

  const detail = `${readTime(content)} min read | ${date}`;

  return (
    <Layout
      title={`${title} — Harsh Pandey`}
      description={description}
    >
      <motion.div
        key="BlogDetail"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={stagger}
      >
        <h1 className="text-center text-[48px] font-bold text-text-primary mb-4 mobile:text-[28px] mobile:mt-8 mobile:leading-[1.4] mobile:!mb-8">
          <AnimatedText>{title}</AnimatedText>
        </h1>
        <motion.p variants={noStagger} className="mt-3 text-lg leading-[1.5] text-center text-text-detail mobile:text-sm">
          <AnimatedText>{detail}</AnimatedText>
        </motion.p>
        <motion.ul variants={stagger} className="overflow-hidden mx-auto mt-5 w-max max-w-full flex flex-wrap items-center justify-center gap-6 text-xl list-none mobile:gap-4">
          {React.Children.toArray(
            tags.map((tag) => <motion.li className="bg-tag-bg py-2 px-3 rounded mobile:text-sm" variants={item}>{tag}</motion.li>)
          )}
        </motion.ul>
        {image && (
          <motion.img
            variants={cards}
            className="w-full rounded mt-16 mb-8 mobile:mt-8"
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
