/* eslint-disable @next/next/no-img-element */
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillMail,
} from 'react-icons/ai';
import Layout from '../components/Layout';
import { open, sortByDate } from '@/helper/util';

import { motion } from 'framer-motion';

import AnimatedText from '@/components/AnimatedText';
import ProjectCard from '@/components/ProjectCard';
import { fadeIn, hr, item, noStagger, stagger } from 'helper/animate';
import { FaLinkedinIn } from 'react-icons/fa';
import { featured } from 'helper/featured';
import BlogCard from '@/components/BlogCard';
import React from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export default function Home({ blogs }) {
  return (
    <Layout title="Harsh Pandey – Full-Stack Blockchain Developer">
      <div>
        <motion.div
          key="home"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={stagger}>
          <h1 className="text-[60px] leading-[1.1] font-bold text-text-primary mb-4 mobile:text-[32px] mobile:leading-[1.4] mobile:mt-8 mobile:!mb-8" style={{ marginBottom: '4rem' }}>
            <AnimatedText>
              UI/UX. Full-Stack. Blockchain. Freelance.
            </AnimatedText>
          </h1>

          <motion.p className="text-lg leading-[var(--line-height)] text-text-muted" variants={noStagger}>
            <AnimatedText>
              I'm Harsh Pandey, an India based Full-Stack blockchain developer
              with over two & half years of development experience with
              Reactjs/Nextjs. I specialize in developing responsive user
              interfaces for web-based applications with a focus on secure and
              smooth user experience.
            </AnimatedText>
          </motion.p>
          <motion.p className="text-lg leading-[var(--line-height)] text-text-muted mt-8" variants={noStagger}>
            <AnimatedText>
              I'm currently working as freelancer at blocktrain.info where you
              can find best resources to become excellent blockchain developer.
              Before that, I worked at AppSecure where I designed and developed
              Pentabug, a highly secure bug bounty platform.
            </AnimatedText>
          </motion.p>

          <motion.div variants={stagger} className="flex items-center gap-2 mt-8 mobile:flex-wrap mobile:mt-8">
            <span className="outerSpan">
              <motion.span
                onClick={() => open('https://twitter.com/harshpandey002')}
                variants={item}
                className="innerSpan p-2 rounded-btn cursor-pointer flex items-center justify-center hover:bg-hover-social">
                <AiOutlineTwitter className="text-[28px] text-text-dim" />
              </motion.span>
            </span>
            <span className="outerSpan">
              <motion.span
                onClick={() =>
                  open('https://www.instagram.com/harshpandey_002/')
                }
                variants={item}
                className="innerSpan p-2 rounded-btn cursor-pointer flex items-center justify-center hover:bg-hover-social">
                <AiOutlineInstagram className="text-[28px] text-text-dim" />
              </motion.span>
            </span>
            <span className="outerSpan">
              <motion.span
                onClick={() => open('https://github.com/harshpandey002')}
                variants={item}
                className="innerSpan p-2 rounded-btn cursor-pointer flex items-center justify-center hover:bg-hover-social">
                <AiFillGithub className="text-[28px] text-text-dim" />
              </motion.span>
            </span>
            <span className="outerSpan">
              <motion.span
                onClick={() =>
                  open('https://www.linkedin.com/in/harshpandey002')
                }
                variants={item}
                className="innerSpan p-2 rounded-btn cursor-pointer flex items-center justify-center hover:bg-hover-social">
                <FaLinkedinIn className="text-[28px] text-text-dim" />
              </motion.span>
            </span>
            <span className="outerSpan">
              <motion.span
                onClick={() => open('mailto:coding.harshp@gmail.com')}
                variants={item}
                className="innerSpan p-2 rounded-btn cursor-pointer flex items-center justify-center hover:bg-hover-social hidden mobile:flex">
                <AiFillMail className="text-[28px] text-text-dim" />
              </motion.span>
            </span>
            <span className="outerSpan">
              <motion.button
                onClick={() => open('mailto:coding.harshp@gmail.com')}
                variants={item}
                className="ml-6 text-white border border-border-btn outline-none rounded-pill py-[11px] px-[18px] tracking-[1.2px] font-normal bg-btn-bg text-sm hover:bg-hover-btn mobile:hidden">
                Email me
              </motion.button>
            </span>
          </motion.div>
        </motion.div>

        <motion.hr
          variants={hr}
          initial="hidden"
          animate="visible"
          exit="exit"
          id="hr"
        />

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          exit="exit">
          <h2 className="text-[28px] text-text-heading mobile:text-2xl">Featured Projects</h2>
          <p className="text-text-body text-base mt-4 leading-[var(--line-height)]">
            A collection of some side projects that I have shipped recently.
          </p>
          <div className="mt-16 flex flex-col gap-4">
            {featured.map((data, i) => (
              <ProjectCard key={i + 1} data={data} />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{ marginTop: '5rem' }}>
          <h2 className="text-[28px] text-text-heading mobile:text-2xl">Recent Blogs</h2>
          <p className="text-text-body text-base mt-4 leading-[var(--line-height)]">
            As I delve deeply into blockchain technology, I also like to assist
            other developers.
          </p>
          <div className="mt-16 flex flex-col gap-4">
            {React.Children.toArray(
              blogs.map((blog) => <BlogCard blog={blog} />)
            )}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('blogs'));

  let blogs = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('blogs', filename),
      'utf-8'
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      ...frontmatter,
    };
  });

  blogs.sort(sortByDate);

  const published = [];

  blogs.forEach((blog) => {
    if (blog.isLive) published.push(blog);
  });

  return {
    props: {
      blogs: published.slice(0, 3),
    },
  };
}
