import React from "react";

import { StyledContainer } from "../components/Container/StyledContainer";
import { StyledSection } from "../components/Section/StyledSection";

const Home = () => {
  return (
    <StyledContainer>
      <StyledSection backgroundColor="red">Eka</StyledSection>
      <StyledSection backgroundColor="blue">Toka</StyledSection>
      <StyledSection backgroundColor="green">Kolmas</StyledSection>
      <StyledSection backgroundColor="white">Neljäs</StyledSection>
    </StyledContainer>
  );
};

export default Home;
