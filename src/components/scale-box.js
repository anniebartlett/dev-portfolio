import React, { useMemo, useContext } from "react";
import { IntersectionContext } from "./intersection-observer";
import { motion } from "framer-motion";

export const ScaleBox = ({
  children,
  delayOrder, // order of appearance
  duration = 3,
  easing = "easeOut", // [number, number, number, number] | "linear" | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate" | EasingFunction;
}) => {
  const { inView } = useContext(IntersectionContext);
  const transition = useMemo(
    () => ({
      duration,
      delay: delayOrder / 5,
      ease: easing,
    }),
    [duration, delayOrder, easing]
  );

  const variants = {
    hidden: {
      opacity: 0,
      transition,
    },
    show: {
      scale: 1,
      opacity: 1,
      y: -100,
      transition,
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      exit="show"
      variants={variants}
    >
      {children}
    </motion.div>
  );
};
