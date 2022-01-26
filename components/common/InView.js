import React, { useEffect } from 'react';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeIn = {
  hidden: {
    y: 30,
    opacity: 0
  },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom,
      duration: 1.0
    }
  })
};

const InViewComponent = ({delay = 0, className, tag = 'div', children}) => {
  const controls = useAnimation();
  const { ref, inView, entry } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      animate={controls}
      ref={ref}
      initial="hidden"
      custom={delay}
      variants={fadeIn}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default InViewComponent;