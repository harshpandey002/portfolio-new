/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import { md, readTime, sanitize } from "helper/markdownIt";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function BlogDetail({ frontmatter: blog, slug, content }) {
  console.log({ blog, slug, content });

  const { image, title, date, description } = blog;

  return (
    <Layout>
      <div className={styles.blogDetail}>
        <h1 id={styles.blogTitle}>{title}</h1>
        <p id={styles.blogDesc}>
          {readTime(content)} min read | {date}
        </p>
        <img id={styles.blogImg} src={image} alt="Alternate Text" />
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: sanitize(md.render(content)),
          }}
        ></div>
      </div>
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
      slug,
      content,
    },
  };
}
