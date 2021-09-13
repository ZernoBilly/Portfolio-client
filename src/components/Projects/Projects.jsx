import React from "react";
import { Grid } from "@material-ui/core";
import theme from "../../theme/theme";

import { StyledSection } from "../styled/StyledSection/StyledSection";

const Projects = ({ projects }) => {
  return (
    <StyledSection
      backgroundColor={theme.palette.secondary.light}
      id="projects"
    >
      <Grid container style={{ height: "20%" }}>
        ylä
      </Grid>
      <Grid container style={{ height: "80%" }}>
        ala
      </Grid>
    </StyledSection>
  );
};

export default Projects;
