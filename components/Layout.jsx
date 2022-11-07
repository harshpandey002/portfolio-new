import styles from "@/styles/Layout.module.css";
import { motion } from "framer-motion";
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ title, description, children }) {
  return (
    <motion.div>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
      </Head>

      <Header />
      <div className={styles.children}>{children}</div>
      <Footer />
    </motion.div>
  );
}

Layout.defaultProps = {
  title: "Harsh Kumar Pandey",
  description: "UI/UX Designer and Full Stack web3 Developer.",
};
