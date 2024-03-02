export const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0,
    scale: 0.9,
  },
  onscreen: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};
export const aboutVariants = {
  offscreen: {
    x: 100,
    opacity: 0,
    scale: 0.9,
  },
  onscreen: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};
export const eventVariants = {
  offscreen: {
    x: -100,
    opacity: 0,
    scale: 0.9,
  },
  onscreen: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};
