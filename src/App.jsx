import styled from "styled-components";
import Header from "./Components/Header/Header";
import SectionLayout from "./Layout/SectionLayout";
import { CardsData } from "../src/utils/plantsData";
import Card from "./Components/Card";
import FullPage from "./Components/FullPage";
import TextSection from "./Components/TextSection";
import Footer from "./Layout/Footer";
import ZoomSection from "./Components/ZoomSection";
import HorizontalWrapper from "./Components/HorizontalWrapper";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function App() {

  const video = useRef(null);
  const { scrollYProgress } = useScroll({
    target: video,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.65, 1], [1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.6, 0.8, 0.9],
    [1, 0.8, 0.8, 0]
  );

  return (
    <>
      <Header />
      <MainStyle>
        <SectionLayout>
          <HorizontalWrapper height="40rem" direction={-1400}>
            <div className="cards">
              {CardsData.map((card, index) => {
                return (
                  <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                  />
                );
              })}
            </div>
          </HorizontalWrapper>
        </SectionLayout>
        <FullPage />

        <SectionLayout>
          <HorizontalWrapper height="40rem" direction={1400}>
            <div className="cards">
              {CardsData.map((card, index) => {
                return (
                  <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                  />
                );
              })}
            </div>
          </HorizontalWrapper>
        </SectionLayout>
       

        <SectionLayout>
        <motion.div
            className="video"
            ref={video}
            style={{
              opacity,
              scale,
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/pSHVbLPWA28"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </motion.div>
        </SectionLayout>

        <SectionLayout>
          <TextSection />
        </SectionLayout>

        <SectionLayout>
          <ZoomSection />
        </SectionLayout>

        <SectionLayout>
          <TextSection />
        </SectionLayout>
        <Footer />
      </MainStyle>
      ;
    </>
  );
}

const MainStyle = styled.main`
  min-height: 100vh;
  width: 100%;

  .cards {
    position: absolute;
    display: grid;
    grid-template-columns: repeat(5, 30rem);
    gap: 4rem;
  }

  .video {
    padding: 2rem;
    background-color: #161616;
    border-radius: 1rem;
    iframe {
      border: none;
      width: 100%;
      height: 52rem;
    }
  }
`;

export default App;
