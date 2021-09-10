import React from "react";
import NavBar from "../components/NavBar/NavBar";

import { StyledContainer } from "../components/styled/StyledContainer/StyledContainer";
import { StyledSection } from "../components/styled/StyledSection/StyledSection";
import Title from "../components/Title/Title";
import TechStack from "../components/TechStack/TechStack";

const Home = () => {
  return (
    <StyledContainer>
      <Title />
      <StyledSection backgroundColor="blue"></StyledSection>
      <TechStack />
      <StyledSection backgroundColor="white">Neljäs</StyledSection>
    </StyledContainer>
  );
};

export default Home;
