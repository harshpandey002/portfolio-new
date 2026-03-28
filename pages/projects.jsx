/* eslint-disable @next/next/no-img-element */
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { cards, fadeIn, hr, noStagger, stagger } from "helper/animate";
import { open } from "@/helper/util";
import { projects } from "helper/projects";
import { BiLinkExternal } from "react-icons/bi";

export default function Projects() {
  return (
    <Layout title="Projects – Harsh Pandey">
      <div>
        <motion.div
          key="projects"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={stagger}
        >
          <h1 className="text-[60px] leading-[1.1] font-bold text-text-primary mb-4 mobile:text-[32px] mobile:leading-[1.4] mobile:mt-8 mobile:!mb-8">
            <AnimatedText>Projects</AnimatedText>
          </h1>

          <motion.p className="text-lg leading-[var(--line-height)] text-text-muted" variants={noStagger}>
            <AnimatedText>
              I've built products of various types and sizes using the most
              popular technologies out there, ranging from one page sites to the
              super secure bug bounty platform to NFT Marketplace. Here is a
              collection of some of my projects and experiences.
            </AnimatedText>
          </motion.p>
        </motion.div>

        <motion.hr
          variants={hr}
          initial="hidden"
          animate="visible"
          exit="exit"
          id="hr"
        />

        <motion.div
          variants={cards}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="flex flex-col gap-24"
        >
          {projects.map((data, i) => (
            <Project key={i + 1} data={data} />
          ))}
        </motion.div>

        <motion.hr
          variants={hr}
          initial="hidden"
          animate="visible"
          exit="exit"
          id="hr"
        />

        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={fadeIn}
          className="flex w-[var(--width)] mx-auto flex-col"
        >
          <h3 className="text-[32px] text-text-heading font-semibold mb-8 mobile:font-bold">Graveyard</h3>
          <p className="-mt-4 text-text-body text-base leading-[var(--line-height)]">
            Significant projects I worked on that are now retired.
          </p>

          <div className="flex flex-col gap-5 mt-10">
            <div>
              <h4 className="text-[17px] font-semibold text-text-heading">EduCompanion</h4>
              <p className="mt-2 text-base text-text-body leading-[var(--line-height)]">
                Another Education Platform but with affiliate links, users can
                explore learning paths and courses required to excel in a
                perticular domain.
              </p>
            </div>
            <div>
              <h4 className="text-[17px] font-semibold text-text-heading">Beyond Pinks</h4>
              <p className="mt-2 text-base text-text-body leading-[var(--line-height)]">
                A Mentoring Platform focused on women and LGBT of coorporates
                where an employees can book a slot with leaders of big companies
                and get mentored on different aspects of life.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}

function Project({ data }) {
  const { image, title, description, skills, url } = data;

  return (
    <div>
      <img className="rounded-card w-full mb-10 mobile:mb-7" src={image} alt={title} />
      <div className="w-[var(--width)] mx-auto">
        <h4 className="text-[30px] mb-4 font-semibold text-text-heading mobile:text-[22px] mobile:font-extrabold">{title}</h4>

        <div className="flex flex-col gap-3 mb-4">
          {description.map((desc, i) => (
            <p className="text-text-body text-base leading-[var(--line-height)]" key={i + 1}>{desc}</p>
          ))}
        </div>

        <div className="mb-6 flex flex-wrap items-center gap-5 mobile:gap-4">
          {skills?.map((skill, i) => (
            <span className="text-base font-extrabold text-text-body mobile:text-sm" key={i + 1}>{skill}</span>
          ))}
        </div>

        <button
          onClick={() => open(url.link)}
          disabled={!url.link}
          className="border border-border-btn-alt bg-btn-bg flex items-center justify-center gap-2 text-base py-2 px-4 rounded-pill text-white hover:bg-hover-btn-alt"
        >
          {url.label} {!!url.link && <BiLinkExternal />}
        </button>
      </div>
    </div>
  );
}
