import React from "react";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import { md, sanitize } from "helper/markdownIt";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function BlogDetail({ frontmatter, slug, content }) {
  console.log({ frontmatter, slug, content });

  return (
    <Layout>
      <div className={styles.container}>
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
