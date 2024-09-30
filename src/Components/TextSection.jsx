import { useRef } from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";

const TextWrapper = ({ children }) => {
  const text = useRef(null);

  const { scrollYProgress } = useScroll({
    target: text,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [1, 0.8, 0], [1, 1, 0]);
  const x = useTransform(scrollYProgress, [1, 0.4, 0], [0, 0, -1000]);
  const colorChange = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "hsla(180, 7%, 75%, 0.9)",
      "hsla(180, 7%, 75%, 0.9)",
      "#f2994a",
      "#f2994a",
      "#f2994a",
      "#f2994a",
    ]
  );

  return (
    <div ref={text}>
      <motion.p style={{ opacity, x, color: colorChange }}>{children}</motion.p>
    </div>
  );
};

function TextSection() {
  return (
    <TextSectionStyled>
      <TextWrapper>
        The Milky Way galaxy is home to over 100 billion stars.
      </TextWrapper>
      <TextWrapper>
        Black holes are regions of space where gravity is so strong that nothing
        can escape.
      </TextWrapper>
      <TextWrapper>
        The speed of light is approximately 299,792 kilometers per second.
      </TextWrapper>
      <TextWrapper>
        Our solar system consists of the Sun, eight planets, and various other
        celestial objects.
      </TextWrapper>
      <TextWrapper>
        The Hubble Space Telescope has provided some of the most detailed images
        of distant galaxies.
      </TextWrapper>
      <TextWrapper>
        Dark matter makes up about 27% of the universe&apos;s mass and energy.
      </TextWrapper>
      <TextWrapper>
        The Big Bang theory is the leading explanation for the origin of the
        universe.
      </TextWrapper>
    </TextSectionStyled>
  );
}

const TextSectionStyled = styled.section`
  p {
    font-size: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
  }
`;

TextWrapper.propTypes = {
  children: propTypes.node,
};
export default TextSection;
