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
              I'm Harsh Pandey, an India based full-stack developer with a
              strong eye for UI, product detail, and frontend architecture. I
              work mostly with React, Next.js, TypeScript, React Native, and the
              tools around modern product engineering.
            </AnimatedText>
          </p>
          <p className="text-base text-text-body leading-[var(--line-height)]">
            <AnimatedText>
              Over the last few years I have built mobile finance apps, trading
              systems, Web3 interfaces, Discord dashboards, developer tools,
              blockchain education products, NFT marketplaces, and secure
              platform interfaces.
            </AnimatedText>
          </p>
          <p className="text-base text-text-body leading-[var(--line-height)]">
            <AnimatedText>
              I began working full-time at AppSecure before graduating in
              January 2022, where I worked on security-focused product
              interfaces. Since then, I have kept building independent products
              and freelance/client projects with a bias toward shipping.
            </AnimatedText>
          </p>
          <p className="text-base text-text-body leading-[var(--line-height)]">
            <AnimatedText>
              My strongest work tends to sit at the intersection of careful
              frontend craft and practical systems: realtime data, local
              persistence, trading/order flows, dashboards, wallet interactions,
              and state machines that need to be understandable under pressure.
            </AnimatedText>
          </p>

          <p className="text-base text-text-body leading-[var(--line-height)]">
            <AnimatedText>
              In my third year of college, I began freelancing. My first client
              project was EduCompanion, an education platform for a client in
              Spain. That project shaped both my technical confidence and how I
              communicate with clients while moving ambiguous ideas toward
              working software.
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
