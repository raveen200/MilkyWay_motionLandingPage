import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import propTypes from "prop-types";

function HorizontalWrapper({ children, direction, height }) {
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const xTransform = useTransform(
    scrollYProgress,
    [0, 0.1, 1],
    [0, 0, direction]
  );

  return (
    <div ref={scrollRef}>
      <motion.div
        style={{
          height: height,
          zIndex: 6,
          position: "relative",
          translateX: xTransform,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

HorizontalWrapper.propTypes = {
  children: propTypes.node.isRequired,
  direction: propTypes.number,
  height: propTypes.string,
};

export default HorizontalWrapper;
