import styled from "styled-components";
import lineOfPlants from "../assets/Img/lineOfPlants.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function FullPage() {
  const secRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: secRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const xTransform = useTransform(
    scrollYProgress,
    [1, 0.5, 0.1, 0],
    [-1000, 0, 0, 0]
  );

  return (
    <FullPageStyled ref={secRef}>
     <motion.div
        className="image"
        style={{
          scale: scale,
          x: xTransform,
        }}
      >
        <img src={lineOfPlants} alt="lineOfPlants" />
        </motion.div>
    </FullPageStyled>
  );
}

const FullPageStyled = styled.div`
  .image {
    width: calc(100% - 10rem);
    height: 1000px;
    position: relative;
    border-radius: 8px;
    border: 1px solid var(--color-border);
    transition: border 0.3s ease-in-out;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    &:hover {
      border: 1px solid #f2994a;
    }
  }
`;

export default FullPage;
