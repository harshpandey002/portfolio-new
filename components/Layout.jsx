import React from "react";
import styles from "@/styles/Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({ title, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
      </Head>

      <Header />
      <div className={styles.children}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Harsh Kumar Pandey",
  description: "UI/UX Designer and Full Stack web3 Developer.",
};
