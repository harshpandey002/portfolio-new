import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import styles from "@/styles/Blogs.module.css";
import React from "react";

export default function Blogs() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1>Blogs</h1>

          <p>
            I write articles on JavaScript, Python, Software Development, Web
            3.0 and General Programming. If you enjoyed my articles or found
            them useful, please consider supporting me by becoming a sponsor. It
            will undoubtedly encourage me to continue writing article in the
            future.
          </p>
        </div>
        <hr id="hr" />

        <div className={styles.blogWrapper}>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </Layout>
  );
}
