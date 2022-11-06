import React from "react";
import { motion } from "framer-motion";
import { item } from "helper/animate";

export default function AnimatedText({ children }) {
  return (
    <>
      {children.split(" ").map((word, idx) => (
        <span className="outerSpan" key={idx}>
          <motion.span variants={item} className="innerSpan">
            {word + "\u00A0"}
          </motion.span>
        </span>
      ))}
    </>
  );
}
