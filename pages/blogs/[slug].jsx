/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/Layout";
import styles from "@/styles/Home.module.css";
import fs from "fs";
import matter from "gray-matter";
import { md, readTime, sanitize } from "helper/markdownIt";
import path from "path";

export default function BlogDetail({ frontmatter, content }) {
  const { image, title, date, description, tags } = frontmatter;

  return (
    <Layout>
      <div className={styles.blogDetail}>
        <h1 id={styles.blogTitle}>{title}</h1>
        <p id={styles.blogDetail}>
          {readTime(content)} min read | {date}
        </p>
        <ul id={styles.blogTags}>
          {tags.map((tag, i) => (
            <li key={i + 1}>{tag}</li>
          ))}
        </ul>
        <img id={styles.blogImg} src={image} alt={title} />
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
      content,
    },
  };
}
