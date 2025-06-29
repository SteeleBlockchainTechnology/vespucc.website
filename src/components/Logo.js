import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoText = styled.h1`
  font-family: "Cinzel", serif; // Changed from 'cursive' to 'serif'
  letter-spacing: 0.1em;
  font-size: ${(props) => props.theme.fontxl};

  color: ${(props) => props.theme.text};
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Logo = () => {
  return (
    <LogoText>
      <Link to="/vespucc.website/">Vespucc.AI</Link>
    </LogoText>
  );
};

export default Logo;
