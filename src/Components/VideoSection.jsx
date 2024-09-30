import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styled from "styled-components";

function VideoSection() {
  //   const video = useRef(null);
  //   const { scrollYProgress } = useScroll({
  //     target: video,
  //     offset: ["start end", "end start"],
  //   });

  //   const opacity = useTransform(scrollYProgress, [0, 0.65, 1], [1, 1, 0]);
  //   const scale = useTransform(
  //     scrollYProgress,
  //     [0, 0.6, 0.8, 0.9],
  //     [1, 0.8, 0.8, 0]
  //   );
  return (
    <VideoSectionStyled>
      <motion.div
        className="video"
        // ref={video}
        // style={{
        //   opacity,
        //   scale,
        // }}
      >
        <iframe
          src="https://www.youtube.com/embed/pSHVbLPWA28"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </motion.div>
    </VideoSectionStyled>
  );
}

const VideoSectionStyled = styled.div`
.video {
    padding: 2rem;
    background-color: #161616;
    border-radius: 1rem;
    iframe {
      border: none;
      width: 100%;
      height: 52rem;
`;

export default VideoSection;
