/* eslint-disable @next/next/no-img-element */
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { fadeIn, hr, image, noStagger, stagger } from 'helper/animate';
import { work } from 'helper/work';

export default function About() {
  return (
    <Layout title="About – Harsh Pandey">
      <motion.div
        key="about"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={stagger}>
        <div className="w-full mb-10 rounded-card overflow-hidden mobile:mt-4">
          <motion.img
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={image}
            className="w-full brightness-[0.8] contrast-[1.2]"
            src="about.webp"
            alt="Me"
          />
        </div>
        <motion.div variants={noStagger} className="flex flex-col gap-[26px] w-[var(--width)] mx-auto">
          <p className="text-base text-text-body leading-[var(--line-height)]">
            <AnimatedText>
              I'm Harsh Pandey, an India based Full-Stack blockchain developer
              with over two & half years of development experience. I specialise
              in developing responsive user interfaces for web-based
              applications with a focus on secure and smooth user experience.
            </AnimatedText>
          </p>
          <p className="text-base text-text-body leading-[var(--line-height)]">
            <AnimatedText>
              I'm currently working as freelancer at blocktrain.info where you
              can find best resources to become excellent blockchain developer.
              Before that, I worked at AppSecure where I designed and developed
              Pentabug, a highly secure bug bounty platform.
            </AnimatedText>
          </p>
          <p className="text-base text-text-body leading-[var(--line-height)]">
            <AnimatedText>
              I began working full-time at AppSecure seven months before I
              graduated from college in January 2022.
            </AnimatedText>
          </p>
          <p className="text-base text-text-body leading-[var(--line-height)]">
            <AnimatedText>
              In August 2022, I left my first full-time position at AppSecure in
              order to study blockchain programming and contribute to the Web3
              community.
            </AnimatedText>
          </p>

          <p className="text-base text-text-body leading-[var(--line-height)]">
            <AnimatedText>
              In my third year in college, I began freelancing. Fortunately, I
              worked with a client in Spain on my first project, EduCompanion.
              Not only did I polished my technical knowledge, but also acquired
              soft skills like how to professionally deal with clients.
            </AnimatedText>
          </p>

          <p className="text-base text-text-body leading-[var(--line-height)]">
            <AnimatedText>
              My interests outside of work include trading & investing,
              weightlifting, discovering new cafés, watching TV shows & movies,
              and exploring latest electronic gadgets.
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

        <motion.div variants={fadeIn} className="flex w-[var(--width)] mx-auto flex-col">
          <h3 className="text-[32px] text-text-heading font-semibold mb-8 mobile:font-bold">Work</h3>
          <div className="w-full flex flex-col gap-4 mobile:gap-6">
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

        <motion.div variants={fadeIn} className="flex w-[var(--width)] mx-auto flex-col">
          <h3 className="text-[32px] text-text-heading font-semibold mb-8 mobile:font-bold">About this site</h3>
          <p className="-mt-4 text-text-body text-base leading-[var(--line-height)]">In case you were wondering, this site is</p>
          <ul className="pl-8 leading-[var(--line-height)] flex flex-col gap-3 mt-4">
            <li className="text-text-body text-base">
              Designed by{' '}
              <a
                className="text-white underline underline-offset-[6px] hover:text-link-hover"
                href="https://dribbble.com/daleanthony"
                rel="noreferrer"
                target="_blank">
                Dale Anthony
              </a>
              .
            </li>
            <li className="text-text-body text-base">
              Developed by me using{' '}
              <a className="text-white underline underline-offset-[6px] hover:text-link-hover" href="https://nextjs.org/" rel="noreferrer" target="_blank">
                Nextjs
              </a>
              .
            </li>
            <li className="text-text-body text-base">
              Animated using{' '}
              <a
                className="text-white underline underline-offset-[6px] hover:text-link-hover"
                href="https://www.framer.com/motion/"
                rel="noreferrer"
                target="_blank">
                Framer Motion
              </a>
              .
            </li>
            <li className="text-text-body text-base">
              Hosted by{' '}
              <a
                className="text-white underline underline-offset-[6px] hover:text-link-hover"
                href="https://www.hostinger.in/"
                rel="noreferrer"
                target="_blank">
                Hostinger
              </a>{' '}
              with deployement via{' '}
              <a className="text-white underline underline-offset-[6px] hover:text-link-hover" href="https://vercel.com/" rel="noreferrer" target="_blank">
                Vercel
              </a>
              .
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </Layout>
  );
}

function Work({ data }) {
  const { title, role, isFreelance, date } = data;
  return (
    <div className="w-full flex items-center justify-between text-base mobile:flex-col mobile:items-start mobile:gap-1">
      <p className="text-text-org font-semibold mobile:font-bold">
        {title}{' '}
        <span className="text-freelance italic">
          {isFreelance ? '(Freelance)' : '(Full-time)'}
        </span>
      </p>
      <span className="flex items-center gap-6 mobile:gap-1 mobile:flex-col mobile:items-start">
        <p className="text-text-meta mobile:text-text-body">{role}</p>
        <p className="text-text-meta mobile:text-text-body">{date}</p>
      </span>
    </div>
  );
}
