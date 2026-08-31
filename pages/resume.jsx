import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { fadeIn, hr } from 'helper/animate';

export default function Resume() {
  return (
    <Layout title="Resume – Harsh Pandey">
      <motion.div
        key="resume"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={fadeIn}
      >
        <div className="mobile:mt-8">
          <h1 className="text-[60px] leading-[1.1] font-bold text-text-primary mb-4 mobile:text-[32px] mobile:leading-[1.4] mobile:!mb-8">
            Resume
          </h1>
          <p className="text-lg leading-[var(--line-height)] text-text-muted">
            A preview of my latest resume. Open it in a new tab if your browser
            wants a little more room.
          </p>
        </div>

        <motion.hr
          variants={hr}
          initial="hidden"
          animate="visible"
          exit="exit"
          id="hr"
        />

        <div className="w-full rounded-card overflow-hidden border border-card-border bg-card">
          <iframe
            className="w-full h-[78vh] mobile:h-[72vh]"
            src="/Resume.pdf#toolbar=1&navpanes=0"
            title="Harsh Pandey Resume PDF preview"
          />
        </div>

        <div className="mt-6 flex gap-4 mobile:flex-col">
          <a
            className="border border-border-btn-alt bg-btn-bg inline-flex items-center justify-center gap-2 text-base py-2 px-4 rounded-pill text-white hover:bg-hover-btn-alt"
            href="/Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Open PDF
          </a>
          <a
            className="border border-border-btn-alt bg-btn-bg inline-flex items-center justify-center gap-2 text-base py-2 px-4 rounded-pill text-white hover:bg-hover-btn-alt"
            href="/Resume.pdf"
            download
          >
            Download PDF
          </a>
        </div>
      </motion.div>
    </Layout>
  );
}
