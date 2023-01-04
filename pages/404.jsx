import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";
import { noStagger, stagger } from "@/helper/animate";
import { useRouter } from "next/router";

export default function NotFound() {
  const [time, setTime] = useState(8);
  const timerRef = useRef();

  const router = useRouter();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  const text = `Oops! This Page Isn't Available`;

  if (time == 0) {
    clearInterval(timerRef.current);
    router.push("/");
  }

  const message = `Redirecting to home in ${time}`;

  return (
    <Layout>
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
            <AnimatedText>{text}</AnimatedText>
          </h1>

          <motion.p variants={noStagger}>
            <AnimatedText>{message}</AnimatedText>
          </motion.p>
        </motion.div>
      </div>
    </Layout>
  );
}
