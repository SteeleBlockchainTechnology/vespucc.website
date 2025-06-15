import React, { lazy, Suspense } from "react";
import styled, { ThemeProvider } from "styled-components";
// import Carousel from '../Carousel'
import Button from "../Button";
import { dark } from "../../styles/Themes";
import Loading from "../Loading";

const Carousel = lazy(() => import("../Carousel"));

const Section = styled.section`
  min-height: 100vh;
  max-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.aboutBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  @media (max-width: 60em) {
    max-height: 60vh;
  }
`;
const Container = styled.div`
  width: 75%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 70em) {
    width: 85%;
  }

  @media (max-width: 64em) {
    width: 100%;
    flex-direction: column;

    & > *:last-child {
      width: 80%;
    }
  }
  @media (max-width: 40em) {
    & > *:last-child {
      width: 90%;
    }
  }
`;
const Box = styled.div`
  width: 50%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    min-height: 40vh;
  }
  &:nth-child(2) {
    ;
  `;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;
const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;
  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;
const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontsm};
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontsm};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;
const ButtonContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 64em) {
    width: 100%;
    justify-content: center;

    button {
      margin: 0 auto;
    }
  }
`;

const About = () => {
  return (
    <Section id="about">
      <Container>
        <Box>
          <Suspense fallback={<Loading />}>
            <Carousel />{" "}
          </Suspense>{" "}
        </Box>
        <Box>
          <Title>
            Welcome To The <br /> Vespucc.ai.
          </Title>
          <SubText>
            <SubText>
              Vespucc.ai is a cutting-edge platform uniting AI and blockchain.
              Powered by our native Solana token, users access a vibrant
              ecosystem of AI agents.
            </SubText>
          </SubText>
          <SubTextLight>
            <SubTextLight>
              Discover a diverse ecosystem of AI agents powered by our native
              Solana token. Join a dynamic community of innovators, leveraging
              the Model Context Protocol (MCP) and langchain for seamless AI and
              blockchain integration.
            </SubTextLight>
          </SubTextLight>
          <ButtonContainer>
            <ThemeProvider theme={dark}>
              <Button
                text="JOIN OUR DISCORD"
                link="https://discord.gg/MZy7bBfqn2"
                newTab={true}
              />
            </ThemeProvider>
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  );
};

export default About;
