/* eslint-disable @next/next/no-img-element */
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion";
import { fadeIn, hr, image, noStagger, stagger } from "helper/animate";
import { work } from "helper/work";

export default function About() {
  return (
    <Layout title="About – Harsh Pandey">
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
              I’m Harsh Pandey, an India based Full-Stack blockchain developer
              with over two years of development experience. I specialise in
              developing responsive user interfaces for web-based applications
              with a focus on secure and smooth user experience.
            </AnimatedText>
          </p>
          <p>
            <AnimatedText>
              I’m currently working as freelancer at blocktrain.info where you
              can find best resources to become excellent blockchain developer.
              Before that, I worked at AppSecure where I designed and developed
              Pentabug, a highly secure bug bounty platform.
            </AnimatedText>
          </p>
          <p>
            <AnimatedText>
              Fun fact: I got my first full-time job at AppSecure, 7 months
              before graduating from college i.e on Jan 2022.
            </AnimatedText>
          </p>
          <p>
            <AnimatedText>
              Another fun fact: I left my first full-time job at AppSecure on
              Aug 2022, to learn blockchain development and contribute to Web3
              space.
            </AnimatedText>
          </p>

          <p>
            <AnimatedText>
              I started Freelancing during my 3rd year in college. Fortunately,
              I did my first project (EduCompanion) with a client from Spain. I
              learned so much not only technical skills but also soft skills
              like dealing with clients professionally.
            </AnimatedText>
          </p>

          <p>
            <AnimatedText>
              Outside of work, my hobbies include trading & investing, working
              out, exploring new cafés, watching tv series & movies, tinkering
              with technology.
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
        <span id={styles.freelance}>
          {isFreelance ? "(Freelance)" : "(Full-time)"}
        </span>
      </p>
      <span className={styles.details}>
        <p>{role}</p>
        <p>{date}</p>
      </span>
    </div>
  );
}
