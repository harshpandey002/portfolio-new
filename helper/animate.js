export const item = {
  hidden: {
    y: "200%",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.15 },
  },
  visible: {
    y: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1 },
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
