/* eslint-disable @next/next/no-img-element */
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion";
import { fadeIn, hr, image, noStagger, stagger } from "helper/animate";
import { work } from "helper/work";

export default function About() {
  return (
    <Layout>
      <motion.div
        key="about"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={stagger}
        className={styles.container}
      >
        <div id={styles.me}>
          <motion.img
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={image}
            src="about.png"
            alt="Me"
          />
        </div>
        <motion.div variants={noStagger} className={styles.about}>
          <p>
            <AnimatedText>
              I’m Dale a UK based product designer with over ten years of
              experience. I specialise in interface design for mobile and
              web-based applications with a focus on simplicity & usability. I’m
              passionate about design and technology and how the two can
              converge to create experiences for good.
            </AnimatedText>
          </p>
          <p>
            <AnimatedText>
              I’m currently working at WP Engine on some of the worlds best
              WordPress products. Before WP Engine I worked at BaseKit where I
              designed web applications like the worlds first fully functional
              mobile website builder, a commerce platform, dashboard, mobile
              application, and an online booking system.
            </AnimatedText>
          </p>
          <p>
            <AnimatedText>
              Before BaseKit I spent some time working for web agencies
              designing everything from one-page websites to native mobile
              applications. Over the years I’ve been lucky enough to work with
              companies like Nationwide, BP, Telefónica, Apple & Amazon.
            </AnimatedText>
          </p>

          <p>
            <AnimatedText>
              You can also find me working on my own projects: Design Vault, an
              online library of UX/UI patterns and inspiration from real
              products, and Does.Design, an inclusive community for designers of
              all backgrounds and skill levels.
            </AnimatedText>
          </p>

          <p>
            <AnimatedText>
              Outside of work my hobbies include exploring new coffee places,
              playing video games, watching sci-fi shows & movies, tinkering
              with technology and taking too many photos of my cat, Pixel.
            </AnimatedText>
          </p>

          <p>
            <AnimatedText>
              You can follow along with my work, personal projects and
              occasional insights into my life on Twitter and Instagram.
            </AnimatedText>
          </p>
        </motion.div>

        <motion.hr
          variants={hr}
          initial="hidden"
          animate="visible"
          exit="exit"
          id="hr"
        />

        <motion.div variants={fadeIn} className={styles.work}>
          <h3>Work</h3>
          <div className={styles.table}>
            {work.map((data, i) => (
              <Work key={i + 1} data={data} />
            ))}
          </div>
        </motion.div>

        <motion.hr
          variants={hr}
          initial="hidden"
          animate="visible"
          exit="exit"
          id="hr"
        />

        <motion.div variants={fadeIn} className={styles.work}>
          <h3>About this site</h3>
          <p id={styles.sponsor}>In case you were wondering this site is</p>
          <ul id={styles.about}>
            <li>
              Designed by{" "}
              <a
                href="https://dribbble.com/daleanthony"
                rel="noreferrer"
                target="_blank"
              >
                Dale Anthony
              </a>
              .
            </li>
            <li>
              Developed by me using{" "}
              <a href="https://nextjs.org/" rel="noreferrer" target="_blank">
                Nextjs
              </a>
              .
            </li>
            <li>
              Animated using{" "}
              <a
                href="https://www.framer.com/motion/"
                rel="noreferrer"
                target="_blank"
              >
                Framer Motion
              </a>
              .
            </li>
            <li>
              Hosted by{" "}
              <a
                href="https://www.hostinger.in/"
                rel="noreferrer"
                target="_blank"
              >
                Hostinger
              </a>{" "}
              with deployement via{" "}
              <a href="https://vercel.com/" rel="noreferrer" target="_blank">
                Vercel
              </a>
              .
            </li>
          </ul>
        </motion.div>

        {/* <motion.hr
          variants={hr}
          initial="hidden"
          animate="visible"
          exit="exit"
          id="hr"
        />

        <motion.div variants={fadeIn} className={styles.work}>
          <h3>Support Me</h3>
          <p id={styles.sponsor}>
            I write articles on JavaScript, Python, Software Development, Web
            3.0 and General Programming. If you enjoyed my articles or found
            them useful, please consider supporting me by becoming a sponsor. It
            will undoubtedly encourage me to continue writing article in the
            future.
          </p>
        </motion.div> */}
      </motion.div>
    </Layout>
  );
}

function Work({ data }) {
  const { title, role, isFreelance, date } = data;
  return (
    <div className={styles.row}>
      <p className={styles.org}>
        {title}{" "}
        {isFreelance ? <span id={styles.freelance}>(Freelance)</span> : ""}
      </p>
      <span className={styles.details}>
        <p>{role}</p>
        <p>{date}</p>
      </span>
    </div>
  );
}
