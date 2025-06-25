import React, { lazy, Suspense, useRef, useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
// import Carousel from '../Carousel'
import Button from "../Button";
import { dark } from "../../styles/Themes";
import Loading from "../Loading";
import backgroundDesktop from "../../assets/nft-desktop.mp4";
import backgroundMobile from "../../assets/nft-mobile.mp4";

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
  z-index: 1;
  @media (max-width: 60em) {
    max-height: 60vh;
  }
`;
const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  max-width: 180%;
  object-fit: fill;
  z-index: -1;

  @media (max-width: 64em) {
    object-fit: fill;
    width: 100%;
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

const Box1 = styled.div`
  width: 60%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width:50%;
  }
  @media (max-width: 40em) {
    min-height: 40vh;
  }
  &:nth-child(2) {
    ;
  `;

const Box = styled.div`
  width: 40%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 64em) {
    width: 50%;
  }
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
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const hasPlayedRef = useRef(false);

  // Function to get appropriate video source based on screen size
  const getVideoSource = () => {
    const width = window.innerWidth;

    if (width >= 1024) {
      return backgroundDesktop;
    } else {
      return backgroundMobile;
    }
  };

  const [videoSource, setVideoSource] = useState(getVideoSource());

  useEffect(() => {
    const handleResize = () => {
      const newSource = getVideoSource();
      if (newSource !== videoSource) {
        setVideoSource(newSource);
        hasPlayedRef.current = false; // Reset to allow replay with new video
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [videoSource]);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;

    if (!video || !section) return;

    // Configure video
    video.muted = true;
    video.loop = false;
    video.preload = "metadata";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayedRef.current) {
            // Section is visible and video hasn't played yet
            video.play().catch((error) => {
              console.log("Video play failed:", error);
            });

            // Mark as played once video starts
            hasPlayedRef.current = true;
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: "0px 0px -10% 0px", // Start playing slightly before fully visible
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Section id="about" ref={sectionRef}>
      <VideoBackground
        ref={videoRef}
        muted
        playsInline
        preload="metadata"
        key={videoSource} // Force re-render when source changes
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <Container>
        <Box1></Box1>
        <Box>
          <Title>
            Welcome To <br /> Vespucc.ai.
          </Title>
          <SubText>
            Vespucc.ai is a platform uniting AI and the Blockchain. Powered by
            our native Solana token, users access a vibrant ecosystem of AI
            agents.
          </SubText>
          <SubTextLight>
            Discover a diverse ecosystem of AI agents. Join a dynamic community
            of innovators, leveraging the Model Context Protocol (MCP) and
            langchain for seamless AI and blockchain integration.
          </SubTextLight>
          <ButtonContainer>
            <ThemeProvider theme={dark}>
              <Button
                text="JOIN OUR DISCORD"
                link="https://discord.gg/smEzqYYxdX"
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
