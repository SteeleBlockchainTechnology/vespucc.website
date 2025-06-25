import React, { lazy, Suspense } from "react";
import styled, { keyframes } from "styled-components";
// import CoverVideo from '../CoverVideo'
// import TypeWriterText from '../TypeWriterText'
import Logo from "../../assets/logo.png";
import Loading from "../Loading";
import hero from "../../assets/website-hero.mp4"; // Background image for the home section

const TypeWriterText = lazy(() => import("../TypeWriterText"));

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative;
`;
const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Cover the entire area */
  z-index: -1; /* Place behind content */
`;
const Container = styled.div`
  width: 85%;
  min-height: 80vh;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 85%;
  }
  @media (max-width: 48em) {
    flex-direction: column-reverse;
    width: 100%;
    & > *:first-child {
      width: 100%;
      margin-top: 2rem;
    }
  }
`;
const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const rotate = keyframes`
100%{
  transform: rotate(1turn);
}
`;
const Round = styled.div`
  position: absolute;
  bottom: 2rem;
  right: calc(90% - 3rem);
  width: 9rem;
  height: 9rem;

  img {
    width: 100%;
    height: auto;
    animation: ${rotate} 12s linear infinite reverse;
  }
  @media (max-width: 64em) {
    width: 4rem;
    height: 4rem;
    left: none;
    right: 2rem;
    bottom: calc(100% - 4.6rem);
    z-index: 1001;
  }
  @media (max-width: 48em) {
    right: 2rem;
  }
`;

const Home = () => {
  return (
    <Section id="home">
      <VideoBackground autoPlay muted loop>
        <source src={hero} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <Container>
        <Box>
          <Suspense fallback={<Loading />}>
            <TypeWriterText />
          </Suspense>
        </Box>
        <Box></Box>

        <Round>
          <img width={500} height={400} src={Logo} alt="Logo" />
        </Round>
      </Container>
    </Section>
  );
};

export default Home;
