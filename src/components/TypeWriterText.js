import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from "./Button";

const TransparentContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.3); /* Transparent white background */
  backdrop-filter: blur(8px);
  padding: 2rem;
  border-radius: 3px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  max-width: 100%;

  display: flex;
  flex-direction: column;

  /* Optional: Add subtle border or gradient for better definition */
  border: 1px solid rgba(255, 255, 255, 0.1);
`;
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;

  .typewriter-container {
    height: 2.4em; /* Increased to accommodate two lines */
    display: block;
  }

  span {
    text-transform: uppercase;
    font-weight: 800;
    font-family: "Cinzel";
  }
  .text-1 {
    color: #722c10; /* Added # symbol with your specified hex color */
  }
  .text-2 {
    color: #11446c;
  }
  .text-3 {
    color: #2b4835;
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
  @media (max-width: 40em) {
    width: 90%;
  }
`;
const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.6)`};
  font-weight: 600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;

    button {
      margin: 0 auto;
    }
  }
`;
const TypeWriterText = () => {
  return (
    <>
      <TransparentContainer>
        <Title>
          Explore the Power of AI
          <div className="typewriter-container">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(`<span class="text-1">Market Analyst</span>`)
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString(`<span class="text-2">Content Creator</span>`)
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString(`<span class="text-3">Website Automation</span>`)
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString(`<span class="text-1">Blender Agent</span>`)
                  .pauseFor(2000)
                  .deleteAll()
                  .start();
              }}
            />
          </div>
        </Title>
        <SubTitle>Tired of chat bots? Try Something New.</SubTitle>
        <ButtonContainer>
          <Button text="Explore" link="#about" />
        </ButtonContainer>
      </TransparentContainer>
    </>
  );
};

export default TypeWriterText;
