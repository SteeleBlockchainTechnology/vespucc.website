import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Logo from "./Logo";

const Section = styled.section`
  width: 100vw;
  background-color: rgba(
    255,
    255,
    255,
    0.15
  ); /* White semi-transparent background */
  position: absolute;
  top: 0;
  left: 0;
  transform: perspective(1000px) rotateX(3deg);
  transform-origin: top;
  backdrop-filter: blur(8px);
  z-index: 1000;
  height: ${(props) => props.theme.navHeight};

  /* Shadow for depth */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  width: 85%;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;
  .logo-container {
    position: relative;
    left: -30px; /* Position at far left */
  }
  .mobile {
    display: none;
  }

  @media (max-width: 64em) {
    .desktop {
      display: none;
    }
    .mobile {
      display: inline-block;
    }
  }
  @media (max-width: 48em) {
    .logo-container {
      display: none;
    }
  }
`;
const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media (max-width: 64em) {
    /* 1024 px */

    position: fixed;
    top: ${(props) => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
    z-index: 50;
    background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.85)`};
    backdrop-filter: blur(2px);

    transform: ${(props) =>
      props.click ? "translateY(0)" : `translateY(1000%)`};
    transition: all 0.3s ease;
    flex-direction: column;
    justify-content: center;

    touch-action: none;
  }
`;

const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;

  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }

  @media (max-width: 64em) {
    margin: 1rem 0;

    &::after {
      display: none;
    }
  }
`;
const HamburgerWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  padding: 15px; /* Create large clickable area */
  z-index: 1000;

  display: none;

  @media (max-width: 64em) {
    display: block;
  }

  @media (max-width: 48em) {
    left: 0; /* Reset the left positioning */
    transform: none; /* Remove translateX */
    padding: 15px 15px 15px 0; /* Adjust padding for left alignment */
  }
`;
const HamburgerMenu = styled.span`
  width: ${(props) => (props.click ? "2rem" : "1.5rem")};
  height: 2px;
  background: ${(props) => props.theme.text};

  position: absolute;
  left: 50%;
  transform: ${(props) =>
    props.click
      ? "translateX(-50%) rotate(90deg)"
      : "translateX(-50%) rotate(0)"};

  display: none;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 64em) {
    /* 1024 px */
    display: flex;
  }

  @media (max-width: 33em) {
    left: 0; /* Reset the left positioning */
    right: auto; /* Position from the right */
    transform: ${(props) =>
      props.click ? "rotate(90deg)" : "rotate(0)"}; /* Remove translateX */
  }
  &::after,
  &::before {
    content: " ";
    width: ${(props) => (props.click ? "1rem" : "1.5rem")};
    height: 2px;
    right: ${(props) => (props.click ? "-2px" : "0")};
    background: ${(props) => props.theme.text};
    position: absolute;
    transition: all 0.3s ease;
  }

  &::after {
    top: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(-40deg)" : "rotate(0)")};
  }
  &::before {
    bottom: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(40deg)" : "rotate(0)")};
  }
`;

const Navigation = () => {
  const [click, setClick] = useState(false);

  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    setClick(!click);
  };

  return (
    <Section id="navigation">
      <NavBar>
        <div className="logo-container">
          <Logo />
        </div>
        <HamburgerWrapper onClick={() => setClick(!click)}>
          <HamburgerMenu click={+click}>&nbsp;</HamburgerMenu>
        </HamburgerWrapper>
        <Menu click={+click}>
          <MenuItem onClick={() => scrollTo("home")}>Home</MenuItem>
          <MenuItem onClick={() => scrollTo("about")}>About</MenuItem>
          <MenuItem onClick={() => scrollTo("roadmap")}>Roadmap</MenuItem>
          {/*<MenuItem onClick={() => scrollTo("showcase")}>Showcase</MenuItem>*/}
          {/*<MenuItem onClick={() => scrollTo("team")}>Team</MenuItem>*/}
          <MenuItem onClick={() => scrollTo("faq")}>Faq</MenuItem>
          <MenuItem onClick={() => scrollTo("marketplace")}>AI Market</MenuItem>

          <MenuItem>
            <div className="mobile">
              <Button text="Connect Wallet" link="/vespucc.website/" />
            </div>
          </MenuItem>
        </Menu>
        <div className="desktop">
          <Button text="Connect Wallet" link="/vespucc.website/" />
        </div>
      </NavBar>
    </Section>
  );
};

export default Navigation;
