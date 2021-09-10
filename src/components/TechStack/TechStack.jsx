import React from "react";
import { Grid } from "@material-ui/core";

import { StyledSection } from "../styled/StyledSection/StyledSection";
import TechButton from "./TechButton/TechButton";
import theme from "../../theme/theme";

const TechStack = () => {
  return (
    <StyledSection backgroundColor={theme.palette.primary.main}>
      <Grid container>Haloo</Grid>
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0",
          padding: "0",
        }}
      >
        <TechButton></TechButton>
        <TechButton></TechButton>
        <TechButton></TechButton>
      </Grid>
    </StyledSection>
  );
};

export default TechStack;
