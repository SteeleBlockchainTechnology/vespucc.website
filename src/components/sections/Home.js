import React, { lazy, Suspense } from "react";
import styled, { keyframes } from "styled-components";
// import CoverVideo from '../CoverVideo'
// import TypeWriterText from '../TypeWriterText'
import Logo from "../../assets/logo-transparent.png";
import Loading from "../Loading";

const CoverVideo = lazy(() => import("../CoverVideo"));
const TypeWriterText = lazy(() => import("../TypeWriterText"));

const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.body};
`;

const Container = styled.div`
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;
  /* background-color: lightblue; */

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
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 50%;
  background-color: black;

  img {
    width: 100%;
    height: auto;
    animation: ${rotate} 12s linear infinite reverse;
  }
  @media (max-width: 64em) {
    width: 5rem;
    height: 5rem;
    left: none;
    right: 2rem;
    bottom: calc(100% - 1rem);
  }
  @media (max-width: 48em) {
    right: 1rem;
  }
`;

const Home = () => {
  return (
    <Section id="home">
      <Container>
        <Box>
          <Suspense fallback={<Loading />}>
            <TypeWriterText />
          </Suspense>
        </Box>
        <Box>
          <Suspense fallback={<Loading />}>{/* <CoverVideo /> */}</Suspense>
        </Box>

        <Round>
          <img width={500} height={400} src={Logo} alt="Logo" />
        </Round>
      </Container>
    </Section>
  );
};

export default Home;
