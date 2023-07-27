import React from "react";
import { motion as m } from "framer-motion";

const AnimatedTextWord = ({ text }) => {
  const words = text.split(" ");

// Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

// Variants for each word.

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <m.div
      style={{ display: "flex"}}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <m.span
          variants={child}
          style={{ marginRight: "5px" }}
          key={index}
        >
          {word}
        </m.span>
      ))}
    </m.div>
  );
};

export default AnimatedTextWord;