export const item = {
  hidden: {
    y: "200%",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.15 },
  },
  visible: {
    y: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1 },
  },
  exit: {
    y: "200%",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.45 },
  },
};

export const hr = {
  hidden: {
    width: "0%",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.15 },
  },
  visible: {
    width: "100%",
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 2,
      delay: 1,
    },
  },
  exit: {
    width: "0%",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.35 },
  },
};

export const cards = {
  hidden: {
    y: 300,
    opacity: 0,
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.8,
      delay: 2,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.8,
      delay: 2,
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.2,
    },
  },
};

export const fadeIn = {
  hidden: {
    opacity: 0,
    x: 50,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.2, delay: 2 },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.4,
      delay: 2,
    },
  },
  exit: {
    opacity: 0,
    x: -50,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.2 },
  },
};

export const image = {
  hidden: {
    opacity: 0.4,
    filter: "contrast(300%) blur(30px)",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.5 },
  },
  visible: {
    opacity: 1,

    filter: "contrast(125%) blur(0px)",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1 },
  },
  exit: {
    opacity: 0,
    filter: "contrast(200%) blur(30px)",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1 },
  },
};

export const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.075,
    },
  },
};

export const noStagger = {
  visible: {
    transition: {
      staggerChildren: 0,
      delayChildren: 0.25,
    },
  },
};
