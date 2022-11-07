import React from "react";
import styles from "@/styles/Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Layout({ title, description, children }) {
  const router = useRouter();

  return (
    <motion.div>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
      </Head>

      <Header />
      <motion.div
        key={router.asPath}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.children}
      >
        {children}
      </motion.div>
      <Footer />
    </motion.div>
  );
}

Layout.defaultProps = {
  title: "Harsh Kumar Pandey",
  description: "UI/UX Designer and Full Stack web3 Developer.",
};
