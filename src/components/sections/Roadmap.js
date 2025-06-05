import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import DrawSvg from "../DrawSvg";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  display: inline-block;
  overflow: hidden;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;
const Container = styled.div`
  width: 70%;
  height: 200vh;
  background-color: ${(props) => props.theme.body};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
  }
`;
const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: lightblue; */

  @media (max-width: 48em) {
    width: 90%;
  }

  & > *:nth-of-type(2n + 1) {
    justify-content: start;
    @media (max-width: 48em) {
      justify-content: center;
    }

    div {
      border-radius: 50px 0 50px 0;
      text-align: left;

      @media (max-width: 48em) {
        border-radius: 0 50px 0 50px;
        text-align: left;
        p {
          border-radius: 0 40px 0 40px;
        }
      }
    }
    p {
      border-radius: 40px 0 40px 0;
    }
  }
  & > *:nth-of-type(2n) {
    justify-content: end;
    @media (max-width: 48em) {
      justify-content: center;
    }
    div {
      border-radius: 0 50px 0 50px;
      text-align: left;
    }
    p {
      border-radius: 0 40px 0 40px;
    }
  }
`;
const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 48em) {
    justify-content: flex-end !important;
  }
`;
const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid ${(props) => props.theme.text};

  @media (max-width: 48em) {
    width: 70%;
  }
`;

const Box = styled.p`
  height: fit-content;
  background-color: ${(props) => props.theme.carouselColor};
  color: ${(props) => props.theme.text};
  padding: 1rem;
  position: relative;
  border: 1px solid ${(props) => props.theme.text};
`;
const SubTitle = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 600;
  }
`;
const Text = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontsm};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};

  font-weight: 400;
  margin: 0.5rem 0;
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;
const BulletList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-top: 0.5rem;
`;

const BulletItem = styled.li`
  font-size: ${(props) => props.theme.fontsm};
  color: ${(props) => props.theme.text};
  margin-bottom: 0.3rem;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;
const RoadMapItem = ({ title, subtext, bulletPoints, addToRef }) => {
  return (
    <Item ref={addToRef}>
      <ItemContainer>
        <Box>
          <SubTitle>{title} </SubTitle>
          <Text>{subtext}</Text>
          {bulletPoints && bulletPoints.length > 0 && (
            <BulletList>
              {bulletPoints.map((point, index) => (
                <BulletItem key={index}>{point}</BulletItem>
              ))}
            </BulletList>
          )}
        </Box>
      </ItemContainer>
    </Item>
  );
};

const Roadmap = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    let t1 = gsap.timeline();
    revealRefs.current.forEach((el, index) => {
      t1.fromTo(
        el.childNodes[0],
        {
          y: "0",
        },
        {
          y: "-30%",

          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=200px",
            end: "bottom center",
            scrub: true,
            // markers:true,
          },
        }
      );
    });

    return () => {
      if (t1) t1.kill();
    };
  }, []);

  return (
    <Section id="roadmap">
      <Title>Roadmap</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <RoadMapItem
            addToRef={addToRefs}
            title="Core Platform Development"
            subtext="Establish the foundation for Vespucc.ai, focusing on building a robust, scalable platform."
            bulletPoints={[
              "Cloud-Based Infrastructure",
              "User Interface and experience (UI/UX)",
              "Security and privacy protocols",
              "Core AI Agent Framework",
              "Blockchain Integration and Token launch",
              "Initial Community Outreach",
            ]}
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="Agent Ecosystem Expansion and Community Building"
            subtext="Expand our AI agent ecosystem and foster community groqth to drive platform engagement and refine technology based on real-world feedback."
            bulletPoints={[
              "Agent Ecosystem Growth",
              "Agent Marketplace Launch",
              "Community Engagement Initiatives",
              "Build partnerships with AI and Blockchain Projects",
            ]}
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="Advanced AI Capabilities and Community Governance"
            subtext="Enhance the platform’s AI capabilities, introduce premium features like the Vespucci Prime AI, and introduce a token-based governance to shape the platform’s future."
            bulletPoints={[
              "Multi-Agent Orchestration",
              "Cross-Modal AI Integration",
              "Community Governance Framework",
              "Performance Optimization",
            ]}
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="Enterprise Features and Global Expansion"
            subtext="Enable enterprise-grade features to attract larger organizations and launch a multiligual UI to support a global community."
            bulletPoints={[
              "Enterprise Security and Compliance",
              "Private Deployment Options",
              "Hybrid AI-Blockchain Operations",
              "Global Community Initiatives",
              "Ethical AI Frameworks",
            ]}
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="Autonomous Agent Systems and Beyond"
            subtext="Pioneer autonomous AI agent collaboration, transition to a fully decentralized governance model, and integrate emerging technologies to solidify Vespucc.ai as the global leader in AI-blockchain convergence."
            bulletPoints={[
              "Autonomous Multi-Agent Systems (MAS)",
              "Self-Improving Agents",
              "DAO-Based Governance",
              "Emerging Technology Integration (IOT, AR, VR)",
              "Cross-Chain Ecosystem Expansion",
              "and more...",
            ]}
          />
        </Items>
      </Container>
    </Section>
  );
};

export default Roadmap;
