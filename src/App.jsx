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
import VideoSection from "./Components/VideoSection";

function App() {
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
          <TextSection />
        </SectionLayout>

        <SectionLayout>
          <VideoSection />
        </SectionLayout>

        <SectionLayout>
          <TextSection />
        </SectionLayout>

        <SectionLayout>
          <ZoomSection />
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

 
  }
`;

export default App;
