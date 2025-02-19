export const fadeInUpAnimation = ({
  hidden = { opacity: 0, y: 20 },
  visible = { opacity: 1, y: 0 },
}: {
  hidden?: { opacity?: number; y?: number };
  visible?: { opacity?: number; y?: number; transition?: object };
} = {}) => ({
  hidden,
  visible: {
    ...visible,
    transition: visible.transition ?? {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
});

export const staggerContainerAnimation = ({
  hidden = { opacity: 0 },
  visible = { opacity: 1 },
}: {
  hidden?: { opacity?: number };
  visible?: { opacity?: number; transition?: object };
} = {}) => ({
  hidden,
  visible: {
    ...visible,
    transition: visible.transition ?? {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
});

export const imageAnimation = ({
  hidden = { opacity: 0, scale: 0.8, rotate: -10 },
  visible = { opacity: 1, scale: 1, rotate: 0 },
}: {
  hidden?: { opacity?: number; scale?: number; rotate?: number };
  visible?: {
    opacity?: number;
    scale?: number;
    rotate?: number;
    transition?: object;
  };
} = {}) => ({
  hidden,
  visible: {
    ...visible,
    transition: visible.transition ?? {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
});
