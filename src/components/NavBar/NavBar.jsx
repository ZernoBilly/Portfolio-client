import React from "react";

import {
  StyledNavBar,
  NavContainer,
  NavButton,
  NavLogo,
} from "../styled/StyledNavbar/StyledNavBar";

const NavBar = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };
  return (
    <StyledNavBar>
      <NavContainer>
        <NavLogo>Logo</NavLogo>
      </NavContainer>
      <NavContainer>
        <NavButton onClick={handleScroll}>Projets</NavButton>
        <NavButton>TechStack</NavButton>
        <NavButton>about</NavButton>
      </NavContainer>
    </StyledNavBar>
  );
};

export default NavBar;
