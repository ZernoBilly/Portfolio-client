import React from "react";
import theme from "../../theme/theme";
import { StyledSection } from "../styled/StyledSection/StyledSection";
import { Grid } from "@material-ui/core";

import { StyledTitlePolygon } from "../styled/StyledTitlePolygon/StyledTitlePolygon";
import {
  StyledTitleHeader,
  HeaderText,
  SecondaryTitleHeader,
  HeaderSecondaryText,
} from "../styled/StyledTitleHeader/StyledTitleHeader";
import ScrollButton from "../ScrollButton/ScrollButton";

const Title = () => {
  return (
    <StyledSection backgroundColor={theme.palette.primary.main} id="home">
      <StyledTitleHeader top="40px" left="80px">
        <HeaderText color={theme.palette.text.main}>Welcome</HeaderText>
      </StyledTitleHeader>
      <StyledTitlePolygon>
        <StyledTitleHeader top="50px" left="37px" moveTitle="80px">
          <HeaderText color={theme.palette.secondary.main}>Welcome</HeaderText>
        </StyledTitleHeader>
        <SecondaryTitleHeader
          top="425px"
          right="372px"
          smTop="450px"
          smRight="30px"
        >
          <HeaderSecondaryText color={theme.palette.secondary.main}>
            Profile Page
          </HeaderSecondaryText>
        </SecondaryTitleHeader>
      </StyledTitlePolygon>
      <SecondaryTitleHeader
        top="450px"
        right="300px"
        smTop="465px"
        smRight="20px"
      >
        <HeaderSecondaryText color={theme.palette.text.ligth}>
          Profile Page
        </HeaderSecondaryText>
      </SecondaryTitleHeader>
      <ScrollButton />
    </StyledSection>
  );
};

export default Title;
